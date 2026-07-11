(ns kami.animator.project-test
  (:require [clojure.test :refer [deftest is]]
            [kami.animation :as animation]
            [kami.animator.project :as project]))

(def timeline (animation/timeline 2 [(animation/track :cube/x [(animation/keyframe 0 0)
                                                                 (animation/keyframe 2 1)])]))

(deftest project-round-trip
  (let [p (project/document {:id "walk" :name "Walk" :timeline timeline
                             :editor {:time 1 :active-target :cube/x :profile :blender :fps 30 :frame-snap? true}})]
    (is (project/valid? p)) (is (= p (project/open p))) (is (= 2 (:kami/version p)))
    (is (= 30 (get-in p [:project/editor :fps])))))

(deftest migrates-legacy-timeline
  (let [p (project/open timeline)]
    (is (= timeline (:project/timeline p)))
    (is (= :cube/x (get-in p [:project/editor :active-target])))))

(deftest rejects-corrupt-and-unknown
  (is (thrown? #?(:clj Exception :cljs js/Error) (project/open {:hello :world})))
  (is (thrown? #?(:clj Exception :cljs js/Error)
               (project/open {:kami/document :animator-project :kami/version 99}))))
