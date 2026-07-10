(require '[clojure.java.io :as io] '[kami.animator.ui :as ui])
(spit (io/file "public" "index.html") (ui/page))
