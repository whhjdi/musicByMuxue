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
      component: () => import("./views/Home"),
      meta: {
        index: 2
      },
      children: [
        {
          path: ":id",
          component: () => import("./components/base/MusicList.vue")
        }
      ]
    },
    {
      path: "/rank",
      name: "rank",
      component: () => import("./views/Rank"),
      meta: {
        index: 3
      },
      children: [
        {
          path: ":idx",
          component: () => import("./components/base/MusicList.vue")
        }
      ]
    },
    {
      path: "/artist",
      name: "artist",
      component: () => import("./views/Artist"),
      meta: {
        index: 4
      },
      children: [
        {
          path: ":id",
          component: () => import("./components/base/MusicList.vue")
        }
      ]
    },
    {
      path: "/user",
      name: "user",
      component: () => import("./views/User"),
      meta: {
        index: 1
      }
    },
    {
      path: "/search",
      name: "search",
      component: () => import("./views/Search")
    }
  ]
});
