import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./Home"
import Movie from "./Movie"
import About from "./About"
import NotFound from "./NotFound"

export default createRouter ({
  // Hash / History
  // https://google.com/#/search
  history: createWebHashHistory(),  //Hash mode
  //pages 구분
  // https://google.com/ <-
  // path / : 구글의 메인 페이지로 이동함
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/movie/:id",
      component: Movie
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/:notFound(.*)",
      component: NotFound
    }
  ]
})