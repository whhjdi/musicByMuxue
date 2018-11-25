import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/home"
    },
    {
      path: "/rank",
      name: "rank",
      component: () => import(/* webpackChunkName: "about" */ "./views/Rank")
    },
    {
      path: "/singer",
      name: "singer",
      component: () => import(/* webpackChunkName: "about" */ "./views/Singer")
    }
  ]
});
