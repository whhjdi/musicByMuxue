module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/musicByMuxue/dist/" : "/",
  configureWebpack: {
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex"
    }
  }
};
