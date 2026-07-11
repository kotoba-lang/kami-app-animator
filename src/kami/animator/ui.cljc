(ns kami.animator.ui (:require [html.core :as html] [css.core :as css]))

(def sheet {:rules
 {"*" {:box-sizing :border-box} "body" {:margin 0 :height "100vh" :display :grid :grid-template-rows "52px 1fr 340px" :font-family "Inter,system-ui" :background "#090d18" :color "#e8ecf8"}
  "header" {:display :flex :align-items :center :gap 18 :padding "0 16px" :background "#111936" :border-bottom "1px solid #293456"}
  "header .spacer" {:flex 1} "button,select,input" {:background "#18213c" :color "#eef2ff" :border "1px solid #40517d" :border-radius 5 :padding "7px 10px"}
  "button" {:cursor :pointer} ".primary" {:background "#6f8fff" :color "#071127" :font-weight 700}
  ".workspace" {:display :grid :grid-template-columns "220px 1fr 250px" :min-height 0}
  "aside" {:padding 14 :background "#10172b" :border-right "1px solid #293456" :overflow-y :auto} "aside:last-child" {:border-left "1px solid #293456" :border-right 0}
  "h2" {:font-size 11 :text-transform :uppercase :letter-spacing ".12em" :color "#91a1ca"}
  ".viewport" {:position :relative} "#gpu-canvas" {:width "100%" :height "100%" :display :block}
  "#gpu-status" {:position :absolute :left "50%" :top "45%" :transform "translate(-50%,-50%)" :color "#ffb5b5"}
  ".timeline" {:display :grid :grid-template-columns "220px 1fr 250px" :background "#0e1427" :border-top "1px solid #334267"}
  ".tracks" {:padding 14 :border-right "1px solid #334267"} ".lane" {:position :relative :margin "42px 18px" :height 50 :background "repeating-linear-gradient(90deg,#2b385b 0 1px,transparent 1px 10%)"}
  ".key" {:position :absolute :top 17 :width 14 :height 14 :border 0 :padding 0 :background "#87a7ff" :transform "translateX(-50%) rotate(45deg)"}
  ".key.selected" {:background "#ffd18f"} ".playhead" {:position :absolute :top 0 :bottom 0 :width 2 :background "#ff6f87" :pointer-events :none}
  "#scrub" {:width "calc(100% - 36px)"} ".inspector" {:padding 14 :border-left "1px solid #334267"} "label" {:display :grid :gap 5 :margin-bottom 10}}})

(defn page []
  (html/html5 [:html {:lang "en"}
   [:head [:meta {:charset "utf-8"}] [:meta {:name "viewport" :content "width=device-width,initial-scale=1"}] [:link {:rel "icon" :href "data:,"}] [:title "Kami Animator"] [:style (css/css sheet)]]
   [:body
    [:header [:strong "KAMI ANIMATOR"] [:a {:href "https://kotoba-lang.github.io/kami-studio/"} "Studio"] [:span "WebGPU animation workspace"] [:span.spacer] [:button {:id "undo"} "Undo"] [:button {:id "redo"} "Redo"] [:button {:id "export"} "Export EDN"]]
    [:section.workspace [:aside [:h2 "Outliner"] [:button "◆ Cube"] [:h2 "Channels"]
                                [:button.primary {:id "channel-x"} "Location X"]
                                [:button {:id "channel-y"} "Location Y"] [:button {:id "channel-z"} "Location Z"]
                                [:button {:id "channel-rotation-x"} "Rotation X"] [:button {:id "channel-rotation-y"} "Rotation Y"] [:button {:id "channel-rotation-z"} "Rotation Z"]
                                [:button {:id "channel-scale-x"} "Scale X"] [:button {:id "channel-scale-y"} "Scale Y"] [:button {:id "channel-scale-z"} "Scale Z"]]
     [:main.viewport [:canvas {:id "gpu-canvas" :aria-label "Animated WebGPU viewport"}] [:div {:id "gpu-status"} "Initializing WebGPU…"]]
     [:aside [:h2 "Playback"] [:button.primary {:id "play"} "▶ Play"] [:button {:id "add-key"} "＋ Key at playhead"] [:button {:id "delete-key"} "Delete selected"]
      [:label [:input {:id "loop" :type "checkbox"}] "Loop range"]
      [:label "Loop start" [:input {:id "loop-start" :type "number" :min 0 :max 2 :step 0.1 :value 0}]]
      [:label "Loop end" [:input {:id "loop-end" :type "number" :min 0 :max 2 :step 0.1 :value 2}]]
      [:label "Playback rate" [:input {:id "playback-rate" :type "number" :min 0.1 :max 4 :step 0.1 :value 1}]]
      [:h2 "Profile"] [:select {:id "profile"} [:option "Maya"] [:option "Blender"] [:option "3ds Max"]]]]
    [:section.timeline [:div.tracks [:strong "Cube"] [:p {:id "active-channel"} "Location X"]]
     [:div [:div.lane {:id "lane"} [:div.playhead {:id "playhead"}]] [:input {:id "scrub" :type "range" :min 0 :max 2 :step 0.01 :value 0}] [:span {:id "time"} "0.00 / 2.00 s"]]
     [:div.inspector [:h2 "Keyframe"] [:label "Time" [:input {:id "key-time" :type "number" :step 0.1}]] [:label "Value" [:input {:id "key-value" :type "number" :step 0.1}]] [:label "Interpolation" [:select {:id "interpolation"} [:option {:value "linear"} "Linear"] [:option {:value "smooth"} "Smooth"] [:option {:value "hermite"} "Hermite"] [:option {:value "step"} "Step"]]] [:label "Tangent in" [:input {:id "tangent-in" :type "number" :step 0.1 :value 0}]] [:label "Tangent out" [:input {:id "tangent-out" :type "number" :step 0.1 :value 0}]] [:button {:id "auto-tangents"} "Auto tangents"]]]
    [:span {:id "debug-state" :style {:display "none"}}]
    [:script {:src "./js/app.js"}]]]))
