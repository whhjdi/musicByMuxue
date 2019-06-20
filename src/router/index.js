import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import store from "@/store";
import NProgress from "nprogress";
Vue.use(Router);

const router = new Router(routes);
router.beforeEach((to, from, next) => {
  if (
    !to.name ||
    to.name === "search" ||
    to.name === "login" ||
    to.name === "songslist"
  ) {
    store.commit("SET_SHOW_FOOTER", false);
  } else {
    store.commit("SET_SHOW_FOOTER", true);
  }
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
