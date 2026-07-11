(ns kami.animator.app
  (:require [kami.animation :as animation] [kami.webgpu.mesh :as gpu-mesh]))

(def cube-geo
  {:positions [[-1 -1 -1] [1 -1 -1] [1 1 -1] [-1 1 -1] [-1 -1 1] [1 -1 1] [1 1 1] [-1 1 1]
               [-1 -1 -1] [1 -1 -1] [1 -1 1] [-1 -1 1] [-1 1 -1] [-1 1 1] [1 1 1] [1 1 -1]
               [-1 -1 -1] [-1 -1 1] [-1 1 1] [-1 1 -1] [1 -1 -1] [1 1 -1] [1 1 1] [1 -1 1]]
   :normals (vec (mapcat #(repeat 4 %) [[0 0 -1] [0 -1 0] [0 1 0] [-1 0 0] [1 0 0] [0 0 1]]))
   :indices (vec (mapcat (fn [i] [i (+ i 1) (+ i 2) i (+ i 2) (+ i 3)]) (range 0 24 4)))})
(def initial (animation/timeline 2 [(animation/track :cube/x [(animation/keyframe 0 -2) (animation/keyframe 2 2 :smooth)])]))
(defonce state (atom {:timeline initial :time 0 :playing? false :selected nil :history [initial] :future []}))
(defonce viewport (atom nil))

(defn- frames [] (:track/keyframes (first (:timeline/tracks (:timeline @state)))))
(defn- render-keys! []
  (let [lane (.getElementById js/document "lane")]
    (doseq [n (array-seq (.querySelectorAll lane ".key"))] (.remove n))
    (doseq [k (frames)]
      (let [b (.createElement js/document "button")]
        (set! (.-className b) (str "key" (when (= (:keyframe/id k) (:selected @state)) " selected")))
        (set! (.. b -style -left) (str (* 100 (/ (:keyframe/time k) 2)) "%"))
        (.addEventListener b "click" #(do (swap! state assoc :selected (:keyframe/id k)) (render-keys!)))
        (.appendChild lane b)))))
(defn- update-ui! []
  (let [{:keys [time timeline selected history future]} @state
        k (first (filter #(= selected (:keyframe/id %)) (frames)))]
    (set! (.-value (.getElementById js/document "scrub")) time)
    (set! (.. (.getElementById js/document "playhead") -style -left) (str (* 100 (/ time 2)) "%"))
    (set! (.-textContent (.getElementById js/document "time")) (str (.toFixed time 2) " / " (:timeline/duration timeline) ".00 s"))
    (set! (.-disabled (.getElementById js/document "undo")) (= 1 (count history)))
    (set! (.-disabled (.getElementById js/document "redo")) (empty? future))
    (when k (set! (.-value (.getElementById js/document "key-time")) (:keyframe/time k)) (set! (.-value (.getElementById js/document "key-value")) (:keyframe/value k)) (set! (.-value (.getElementById js/document "interpolation")) (name (:keyframe/interpolation k))))
    (set! (.-textContent (.getElementById js/document "debug-state"))
          (js/JSON.stringify (clj->js {:time time :keyCount (count (frames))
                                       :selected (some-> selected str)
                                       :cubeX (get (animation/evaluate timeline time) :cube/x)})))
    (render-keys!)))
(defn- commit! [tl] (swap! state #(-> % (assoc :timeline tl :future []) (update :history conj tl))) (update-ui!))
(defn- draw! []
  (when-let [{:keys [buffers] :as v} @viewport]
    (let [x (get (animation/evaluate (:timeline @state) (:time @state)) :cube/x 0)]
      (gpu-mesh/render-frame! v buffers [0 2.8 6] [0 0 0] [0.45 0.65 1.0]
                              {:translation [x 0 0]})))
  (js/requestAnimationFrame draw!))
(defn- tick! [last-ms]
  (when (:playing? @state)
    (let [now (js/performance.now) dt (/ (- now last-ms) 1000) t (+ (:time @state) dt)]
      (swap! state assoc :time (if (> t 2) 0 t)) (update-ui!) (js/requestAnimationFrame #(tick! now)))))
(defn ^:export init! []
  (let [canvas (.getElementById js/document "gpu-canvas")]
    (-> (gpu-mesh/init-canvas! canvas) (.then (fn [v] (let [b (gpu-mesh/upload-mesh! (:mesh-context v) cube-geo)] (reset! viewport (assoc v :buffers b)) (set! (.-textContent (.getElementById js/document "gpu-status")) "") (draw!)))))
    (.addEventListener (.getElementById js/document "play") "click" #(do (swap! state update :playing? not) (when (:playing? @state) (tick! (js/performance.now)))))
    (.addEventListener (.getElementById js/document "scrub") "input" #(do (swap! state assoc :time (js/parseFloat (.. % -target -value)) :playing? false) (update-ui!)))
    (.addEventListener (.getElementById js/document "add-key") "click" #(let [k (animation/keyframe (:time @state) 0)] (commit! (animation/add-keyframe (:timeline @state) :cube/x k)) (swap! state assoc :selected (:keyframe/id k)) (update-ui!)))
    (.addEventListener (.getElementById js/document "delete-key") "click" #(when-let [id (:selected @state)] (commit! (animation/delete-keyframe (:timeline @state) :cube/x id)) (swap! state assoc :selected nil)))
    (.addEventListener (.getElementById js/document "key-time") "change"
                       #(when-let [id (:selected @state)]
                          (commit! (animation/move-keyframe (:timeline @state) :cube/x id
                                                            (js/parseFloat (.. % -target -value))))))
    (.addEventListener (.getElementById js/document "key-value") "change"
                       #(when-let [id (:selected @state)]
                          (commit! (animation/update-keyframe (:timeline @state) :cube/x id assoc
                                                              :keyframe/value (js/parseFloat (.. % -target -value))))))
    (.addEventListener (.getElementById js/document "interpolation") "change"
                       #(when-let [id (:selected @state)]
                          (commit! (animation/update-keyframe (:timeline @state) :cube/x id assoc
                                                              :keyframe/interpolation (keyword (.. % -target -value))))))
    (.addEventListener (.getElementById js/document "undo") "click" #(when (> (count (:history @state)) 1) (swap! state (fn [s] (let [h (:history s) cur (peek h) h2 (pop h)] (assoc s :history h2 :timeline (peek h2) :future (conj (:future s) cur))))) (update-ui!)))
    (.addEventListener (.getElementById js/document "redo") "click"
                       (fn [] (when-let [tl (peek (:future @state))]
                                (swap! state (fn [s] (assoc s :timeline tl
                                                           :history (conj (:history s) tl)
                                                           :future (pop (:future s)))))
                                (update-ui!))))
    (.addEventListener (.getElementById js/document "export") "click" #(let [a (.createElement js/document "a")] (set! (.-href a) (.createObjectURL js/URL (js/Blob. #js [(pr-str (:timeline @state))] #js {:type "application/edn"}))) (set! (.-download a) "animation.edn") (.click a)))
    (update-ui!)))
