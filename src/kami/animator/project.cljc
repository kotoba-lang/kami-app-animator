(ns kami.animator.project)

(def current-version 2)

(defn document [{:keys [id name timeline editor]}]
  {:kami/document :animator-project :kami/version current-version
   :project/id (or id "untitled-animation") :project/name (or name "Untitled Animation")
   :project/timeline timeline :project/editor editor})

(defn migrate [value]
  (cond
    (= :animator-project (:kami/document value))
    (case (:kami/version value)
      2 value
      1 (-> value (assoc :kami/version 2
                         :project/editor {:time 0 :active-target :cube/x :selected nil
                                          :profile :maya})
            (dissoc :project/version))
      (throw (ex-info "Unsupported Animator project version" {:version (:kami/version value)})))
    (:timeline/tracks value)
    (document {:timeline value :editor {:time 0 :active-target (some-> value :timeline/tracks first :track/target)
                                        :selected nil :profile :maya}})
    :else (throw (ex-info "Not an Animator project or timeline" {:value value}))))

(defn valid? [p]
  (and (= :animator-project (:kami/document p)) (= current-version (:kami/version p))
       (string? (:project/id p)) (string? (:project/name p))
       (number? (get-in p [:project/timeline :timeline/duration]))
       (seq (get-in p [:project/timeline :timeline/tracks]))
       (map? (:project/editor p))))

(defn open [value]
  (let [p (migrate value)]
    (when-not (valid? p) (throw (ex-info "Invalid Animator project" {:project p}))) p))
