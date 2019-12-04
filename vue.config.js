const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  publicPath: isProd ? '/musicByMuxue/dist/' : '/',
  configureWebpack: (config) => {
    if (isProd) {
      config.externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex'
      };
    }
  },
  chainWebpack: (config) => {
    if (isProd) {
      config.plugin('html').tap((args) => {
        args[0].cdn = true;
        return args;
      });
    }
  }
};
