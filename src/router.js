import Vue from "vue";
import Router from "vue-router";

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
      component: () => import(/* webpackChunkName: "about" */ "./views/Home")
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
