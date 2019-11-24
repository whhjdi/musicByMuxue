import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store";
import NProgress from "nprogress";
Vue.use(VueRouter);

const router = new VueRouter(routes);
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
