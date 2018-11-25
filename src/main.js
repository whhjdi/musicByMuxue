import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastclick from "fastclick";
import "normalize.css";
import "./assets/css/reset.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
Vue.config.productionTip = false;
fastclick.attach(document.body);

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
