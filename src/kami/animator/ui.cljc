(ns kami.animator.ui (:require [html.core :as html] [css.core :as css]))
(defn page []
  (html/html5
   [:html
    [:head [:meta {:charset "utf-8"}]
     [:meta {:name "viewport" :content "width=device-width,initial-scale=1"}]
     [:title "Kami Animator"]
     [:style (css/css {:rules {"body" {:margin 0 :font-family "system-ui" :background "#0b1020" :color "#e8ecf8"}
                              "header" {:padding 16 :background "#111936" :display :flex :justify-content :space-between}
                              "main" {:padding 24}
                              ".timeline" {:margin-top 20 :height 160 :border "1px solid #425681" :background "linear-gradient(90deg,#162242 1px,transparent 1px)" :background-size "80px 100%" :position :relative}
                              ".key" {:position :absolute :width 14 :height 14 :background "#87a7ff" :transform "rotate(45deg)"}
                              "button" {:padding "8px 12px" :background "#6f8fff" :border 0 :border-radius 6}}})]]
    [:body
     [:header [:strong "KAMI ANIMATOR"] [:button {:id "play"} "Play"]]
     [:main [:h1 "Timeline"] [:p "Keyframe animation preview · Cube X"]
      [:div.timeline [:i.key {:style {:left "20%" :top 70}}] [:i.key {:style {:left "72%" :top 70}}]]
      [:p {:id "time"} "00:00 / 00:02"]]]]))
