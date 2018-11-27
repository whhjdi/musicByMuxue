import Vue from "vue";
import Router from "vue-router";
import SingerDetail from "./components/Artist/SingerDetail.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/Home")
    },
    {
      path: "/rank",
      name: "rank",
      component: () => import("./views/Rank")
    },
    {
      path: "/artist",
      name: "artist",
      component: () => import("./views/Artist"),
      children: [
        {
          path: ":id",
          component: SingerDetail
        }
      ]
    }
  ]
});
