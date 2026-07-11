(ns kami.animator.app
  (:require [cljs.reader :as reader] [kami.animation :as animation]
            [kami.animator.project :as project] [kami.webgpu.mesh :as gpu-mesh]))

(def cube-geo
  {:positions [[-1 -1 -1] [1 -1 -1] [1 1 -1] [-1 1 -1] [-1 -1 1] [1 -1 1] [1 1 1] [-1 1 1]
               [-1 -1 -1] [1 -1 -1] [1 -1 1] [-1 -1 1] [-1 1 -1] [-1 1 1] [1 1 1] [1 1 -1]
               [-1 -1 -1] [-1 -1 1] [-1 1 1] [-1 1 -1] [1 -1 -1] [1 1 -1] [1 1 1] [1 -1 1]]
   :normals (vec (mapcat #(repeat 4 %) [[0 0 -1] [0 -1 0] [0 1 0] [-1 0 0] [1 0 0] [0 0 1]]))
   :indices (vec (mapcat (fn [i] [i (+ i 1) (+ i 2) i (+ i 2) (+ i 3)]) (range 0 24 4)))})
(def channel-defs
  [{:target :cube/x :label "Location X" :default 0} {:target :cube/y :label "Location Y" :default 0} {:target :cube/z :label "Location Z" :default 0}
   {:target :cube/rotation-x :label "Rotation X" :default 0} {:target :cube/rotation-y :label "Rotation Y" :default 0} {:target :cube/rotation-z :label "Rotation Z" :default 0}
   {:target :cube/scale-x :label "Scale X" :default 1} {:target :cube/scale-y :label "Scale Y" :default 1} {:target :cube/scale-z :label "Scale Z" :default 1}])
(def channels (mapv :target channel-defs))
(def initial
  (animation/timeline 2
    (mapv (fn [{:keys [target default]}]
            (animation/track target
              (case target
                :cube/x [(animation/keyframe 0 -2) (animation/keyframe 2 2 :smooth)]
                :cube/y [(animation/keyframe 0 0) (animation/keyframe 1 1 :smooth) (animation/keyframe 2 0 :smooth)]
                :cube/rotation-z [(animation/keyframe 0 0) (animation/keyframe 2 (* 2 js/Math.PI) :smooth)]
                [(animation/keyframe 0 default) (animation/keyframe 2 default)]))) channel-defs)))
(defonce state (atom {:timeline initial :time 0 :playing? false :active-target :cube/x :selected nil
                      :profile :maya :history [initial] :future []
                      :project-id "untitled-animation" :project-name "Untitled Animation"
                      :revision 0 :save-status :clean}))
(defonce viewport (atom nil))
(declare update-ui!)

(defn- frames
  ([] (frames (:active-target @state)))
  ([target] (:track/keyframes (first (filter #(= target (:track/target %)) (:timeline/tracks (:timeline @state)))))))
(defn- render-keys! []
  (let [lane (.getElementById js/document "lane")]
    (doseq [n (array-seq (.querySelectorAll lane ".key"))] (.remove n))
    (doseq [k (frames)]
      (let [b (.createElement js/document "button")]
        (set! (.-className b) (str "key" (when (= (:keyframe/id k) (:selected @state)) " selected")))
        (set! (.. b -style -left) (str (* 100 (/ (:keyframe/time k) 2)) "%"))
        (.addEventListener b "click" #(do (swap! state assoc :selected (:keyframe/id k)) (update-ui!)))
        (.appendChild lane b)))))
(defn- update-ui! []
  (let [{:keys [time timeline selected history future active-target profile revision save-status]} @state
        k (first (filter #(= selected (:keyframe/id %)) (frames)))]
    (set! (.-value (.getElementById js/document "scrub")) time)
    (set! (.. (.getElementById js/document "playhead") -style -left) (str (* 100 (/ time 2)) "%"))
    (set! (.-textContent (.getElementById js/document "time")) (str (.toFixed time 2) " / " (:timeline/duration timeline) ".00 s"))
    (set! (.-disabled (.getElementById js/document "undo")) (= 1 (count history)))
    (set! (.-disabled (.getElementById js/document "redo")) (empty? future))
    (set! (.-textContent (.getElementById js/document "play")) (if (:playing? @state) "❚❚ Pause" "▶ Play"))
    (set! (.-textContent (.getElementById js/document "profile-hint"))
          (case profile :blender "I Insert Key · Space Play · X Delete"
                :max "K Set Key · / Play · Delete Key"
                :c4d "F9 Record · F8 Play · Delete Key"
                "S Set Key · Alt+V Play · Delete Key"))
    (doseq [target channels]
      (.toggle (.-classList (.getElementById js/document (str "channel-" (name target))))
               "primary" (= target active-target)))
    (set! (.-textContent (.getElementById js/document "active-channel"))
          (:label (first (filter #(= active-target (:target %)) channel-defs))))
    (when k
      (set! (.-value (.getElementById js/document "key-time")) (:keyframe/time k))
      (set! (.-value (.getElementById js/document "key-value")) (:keyframe/value k))
      (set! (.-value (.getElementById js/document "interpolation")) (name (:keyframe/interpolation k)))
      (set! (.-value (.getElementById js/document "tangent-in")) (:keyframe/tangent-in k 0))
      (set! (.-value (.getElementById js/document "tangent-out")) (:keyframe/tangent-out k 0)))
    (set! (.-checked (.getElementById js/document "loop")) (:timeline/loop? timeline))
    (set! (.-value (.getElementById js/document "loop-start")) (:timeline/loop-start timeline 0))
    (set! (.-value (.getElementById js/document "loop-end")) (:timeline/loop-end timeline (:timeline/duration timeline)))
    (set! (.-value (.getElementById js/document "playback-rate")) (:timeline/playback-rate timeline 1))
    (set! (.-textContent (.getElementById js/document "debug-state"))
          (js/JSON.stringify (clj->js {:time time :keyCount (count (frames)) :trackCount (count channels)
                                       :activeTarget (str active-target)
                                       :profile (name profile) :playing (:playing? @state)
                                       :projectVersion project/current-version :revision revision :saveStatus (name save-status)
                                       :selected (some-> selected str)
                                       :translation (mapv #(get (animation/evaluate timeline time) % 0) (take 3 channels))
                                       :rotation (mapv #(get (animation/evaluate timeline time) % 0) (take 3 (drop 3 channels)))
                                       :scale (mapv #(get (animation/evaluate timeline time) % 1) (drop 6 channels))})))
    (render-keys!)))
(defn- commit! [tl] (swap! state #(-> % (assoc :timeline tl :future [] :save-status :dirty)
                                        (update :history conj tl) (update :revision inc))) (update-ui!))
(defn- add-key! []
  (let [target (:active-target @state) time (:time @state)
        value (get (animation/evaluate (:timeline @state) time) target 0)
        existing (first (filter #(< (js/Math.abs (- (:keyframe/time %) time)) 1.0e-6) (frames)))]
    (if existing
      (do (commit! (animation/update-keyframe (:timeline @state) target (:keyframe/id existing) assoc :keyframe/value value))
          (swap! state assoc :selected (:keyframe/id existing)) (update-ui!))
      (let [k (animation/keyframe time value)]
        (commit! (animation/add-keyframe (:timeline @state) target k))
        (swap! state assoc :selected (:keyframe/id k)) (update-ui!)))))
(defn- delete-key! []
  (when-let [id (:selected @state)]
    (when (> (count (frames)) 1) (commit! (animation/delete-keyframe (:timeline @state) (:active-target @state) id)))
    (swap! state assoc :selected nil) (update-ui!)))
(defn- undo! []
  (when (> (count (:history @state)) 1)
    (swap! state (fn [s] (let [h (:history s) cur (peek h) h2 (pop h)]
                           (assoc s :history h2 :timeline (peek h2) :future (conj (:future s) cur)))))
    (update-ui!)))
(defn- redo! []
  (when-let [tl (peek (:future @state))]
    (swap! state (fn [s] (assoc s :timeline tl :history (conj (:history s) tl) :future (pop (:future s)))))
    (update-ui!)))
(declare tick!)
(defn- toggle-play! []
  (swap! state update :playing? not)
  (when (:playing? @state) (tick! (js/performance.now))) (update-ui!))
(defn- set-time! [time]
  (swap! state assoc :time (max 0 (min (:timeline/duration (:timeline @state)) time)) :playing? false) (update-ui!))
(defn- editable-target? [event]
  (let [target (.-target event) tag (some-> target .-tagName .toLowerCase)]
    (or (#{"input" "select" "textarea"} tag) (.-isContentEditable target))))
(defn- command-for-event [event]
  (let [key (.toLowerCase (.-key event)) ctrl (or (.-ctrlKey event) (.-metaKey event)) alt (.-altKey event)
        profile (:profile @state)]
    (cond
      (and ctrl (= key "z") (.-shiftKey event)) :redo
      (and ctrl (= key "z")) :undo
      (and ctrl (= key "y")) :redo
      (= key "arrowright") :next-frame (= key "arrowleft") :previous-frame
      (= key "home") :start (= key "end") :end (= key "delete") :delete-key
      (= profile :maya) (cond (= key "s") :add-key (and alt (= key "v")) :play)
      (= profile :blender) ({"i" :add-key "x" :delete-key " " :play} key)
      (= profile :max) ({"k" :add-key "/" :play} key)
      (= profile :c4d) ({"f9" :add-key "f8" :play} key))))
(defn- execute-command! [command]
  (case command :add-key (add-key!) :delete-key (delete-key!) :play (toggle-play!) :undo (undo!) :redo (redo!)
        :next-frame (set-time! (+ (:time @state) (/ 1 24))) :previous-frame (set-time! (- (:time @state) (/ 1 24)))
        :start (set-time! 0) :end (set-time! (:timeline/duration (:timeline @state))) nil))

(def ^:private storage-key "kami.animator.project.v2")
(def ^:private backup-key "kami.animator.project.backup")
(defn- project-document []
  (let [{:keys [project-id project-name timeline time active-target selected profile]} @state]
    (project/document {:id project-id :name project-name :timeline timeline
                       :editor {:time time :active-target active-target :selected selected :profile profile}})))
(defn- save-project! []
  (let [data (pr-str (project-document)) previous (.getItem js/localStorage storage-key)]
    (when previous (.setItem js/localStorage backup-key previous))
    (.setItem js/localStorage storage-key data) (swap! state assoc :save-status :saved) (update-ui!)))
(defn- apply-project! [value]
  (let [p (project/open value) tl (:project/timeline p) editor (:project/editor p)
        target (or (:active-target editor) (:track/target (first (:timeline/tracks tl))))]
    (swap! state assoc :project-id (:project/id p) :project-name (:project/name p)
           :timeline tl :time (min (:time editor 0) (:timeline/duration tl))
           :active-target target :selected (:selected editor) :profile (:profile editor :maya)
           :playing? false :history [tl] :future [] :save-status :saved)
    (set! (.-value (.getElementById js/document "profile")) (name (:profile editor :maya)))
    (update-ui!)))
(defn- load-project! []
  (when-let [data (.getItem js/localStorage storage-key)]
    (try (apply-project! (reader/read-string data))
         (catch :default _ (when-let [backup (.getItem js/localStorage backup-key)]
                             (apply-project! (reader/read-string backup)))))))
(defn- download-project! []
  (let [a (.createElement js/document "a") url (.createObjectURL js/URL
        (js/Blob. #js [(pr-str (project-document))] #js {:type "application/edn"}))]
    (set! (.-href a) url) (set! (.-download a) "animation.kami-animator.edn") (.click a)
    (js/setTimeout #(.revokeObjectURL js/URL url) 0)))
(defn- import-project! [event]
  (when-let [file (aget (.. event -target -files) 0)]
    (-> (.text file) (.then #(apply-project! (reader/read-string %))))))
(defn- draw! []
  (when-let [{:keys [buffers] :as v} @viewport]
    (let [values (animation/evaluate (:timeline @state) (:time @state))]
      (gpu-mesh/render-frame! v buffers [0 2.8 6] [0 0 0] [0.45 0.65 1.0]
                              {:translation (mapv #(get values % 0) (take 3 channels))
                               :rotation (mapv #(get values % 0) (take 3 (drop 3 channels)))
                               :scale (mapv #(get values % 1) (drop 6 channels))})))
  (js/requestAnimationFrame draw!))
(defn- tick! [last-ms]
  (when (:playing? @state)
    (let [now (js/performance.now) timeline (:timeline @state)
          dt (* (/ (- now last-ms) 1000) (:timeline/playback-rate timeline 1)) t (+ (:time @state) dt)
          end (if (:timeline/loop? timeline) (:timeline/loop-end timeline) (:timeline/duration timeline))
          next-time (if (> t end) (if (:timeline/loop? timeline) (:timeline/loop-start timeline) end) t)]
      (swap! state assoc :time next-time :playing? (or (:timeline/loop? timeline) (< next-time end)))
      (update-ui!) (when (:playing? @state) (js/requestAnimationFrame #(tick! now))))))
(defn ^:export init! []
  (let [canvas (.getElementById js/document "gpu-canvas")]
    (-> (gpu-mesh/init-canvas! canvas) (.then (fn [v] (let [b (gpu-mesh/upload-mesh! (:mesh-context v) cube-geo)] (reset! viewport (assoc v :buffers b)) (set! (.-textContent (.getElementById js/document "gpu-status")) "") (draw!)))))
    (.addEventListener (.getElementById js/document "play") "click" toggle-play!)
    (.addEventListener (.getElementById js/document "scrub") "input" #(do (swap! state assoc :time (js/parseFloat (.. % -target -value)) :playing? false) (update-ui!)))
    (doseq [target channels]
      (.addEventListener (.getElementById js/document (str "channel-" (name target))) "click"
                         #(do (swap! state assoc :active-target target :selected nil) (update-ui!))))
    (.addEventListener (.getElementById js/document "add-key") "click" add-key!)
    (.addEventListener (.getElementById js/document "delete-key") "click" delete-key!)
    (.addEventListener (.getElementById js/document "profile") "change" #(do (swap! state assoc :profile (keyword (.. % -target -value))) (update-ui!)))
    (.addEventListener js/window "keydown" #(when-not (editable-target? %) (when-let [command (command-for-event %)] (.preventDefault %) (execute-command! command))))
    (.addEventListener (.getElementById js/document "key-time") "change"
                       #(when-let [id (:selected @state)]
                          (commit! (animation/move-keyframe (:timeline @state) (:active-target @state) id
                                                            (js/parseFloat (.. % -target -value))))))
    (.addEventListener (.getElementById js/document "key-value") "change"
                       #(when-let [id (:selected @state)]
                          (commit! (animation/update-keyframe (:timeline @state) (:active-target @state) id assoc
                                                              :keyframe/value (js/parseFloat (.. % -target -value))))))
    (.addEventListener (.getElementById js/document "interpolation") "change"
                       #(when-let [id (:selected @state)]
                          (commit! (animation/update-keyframe (:timeline @state) (:active-target @state) id assoc
                                                              :keyframe/interpolation (keyword (.. % -target -value))))))
    (doseq [[id field] [["tangent-in" :keyframe/tangent-in] ["tangent-out" :keyframe/tangent-out]]]
      (.addEventListener (.getElementById js/document id) "change"
                         #(when-let [frame-id (:selected @state)]
                            (commit! (animation/update-keyframe (:timeline @state) (:active-target @state) frame-id assoc
                                                                field (js/parseFloat (.. % -target -value)))))))
    (.addEventListener (.getElementById js/document "auto-tangents") "click"
                       #(let [target (:active-target @state)
                              timeline (:timeline @state)
                              tracks (mapv (fn [track] (if (= target (:track/target track)) (animation/auto-tangents track) track)) (:timeline/tracks timeline))]
                          (commit! (assoc timeline :timeline/tracks tracks))))
    (.addEventListener (.getElementById js/document "loop") "change"
                       #(commit! (assoc (:timeline @state) :timeline/loop? (.. % -target -checked))))
    (doseq [[id field] [["loop-start" :timeline/loop-start] ["loop-end" :timeline/loop-end] ["playback-rate" :timeline/playback-rate]]]
      (.addEventListener (.getElementById js/document id) "change"
                         #(let [timeline (:timeline @state) raw (js/parseFloat (.. % -target -value))
                                value (case field
                                        :timeline/loop-start (max 0 (min raw (- (:timeline/loop-end timeline) 0.01)))
                                        :timeline/loop-end (min (:timeline/duration timeline) (max raw (+ (:timeline/loop-start timeline) 0.01)))
                                        :timeline/playback-rate (max 0.1 (min 4 raw)))]
                            (commit! (assoc timeline field value)))))
    (.addEventListener (.getElementById js/document "undo") "click" undo!)
    (.addEventListener (.getElementById js/document "redo") "click" redo!)
    (.addEventListener (.getElementById js/document "save-project") "click" save-project!)
    (.addEventListener (.getElementById js/document "load-project") "click" load-project!)
    (.addEventListener (.getElementById js/document "import") "click" #(.click (.getElementById js/document "import-file")))
    (.addEventListener (.getElementById js/document "import-file") "change" import-project!)
    (.addEventListener (.getElementById js/document "export") "click" download-project!)
    (update-ui!)))
