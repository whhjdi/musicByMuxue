import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NProgress from "nprogress";
import fetch from "./api/fetch.js";
import VueLazyload from "vue-lazyload";
import "normalize.css";
import "./assets/css/reset.css";
import "nprogress/nprogress.css";
import "./assets/css/border-1px.css";
import VConsole from "vconsole";
Vue.config.productionTip = false;

NProgress.configure({
  showSpinner: false
});
Vue.prototype.$fetch = fetch;
Vue.prototype.$NProgress = NProgress;
Vue.use(VueLazyload);
router.beforeEach((to, from, next) => {
  if (!to.name || to.name === "search" || to.name === "login") {
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
new VConsole();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
