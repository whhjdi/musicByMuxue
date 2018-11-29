import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastclick from "fastclick";
import NProgress from "nprogress";
import fetch from "./api/fetch.js";
import VueLazyload from "vue-lazyload";
import "normalize.css";
import "./assets/css/reset.css";
import "nprogress/nprogress.css";
import "./assets/css/border-1px.css";
import VConsole from "vconsole";
Vue.config.productionTip = false;
fastclick.attach(document.body);
NProgress.configure({
  showSpinner: false
});
Vue.prototype.$fetch = fetch;
Vue.prototype.$NProgress = NProgress;
Vue.use(VueLazyload);
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
new VConsole();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
