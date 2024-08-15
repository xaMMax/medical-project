const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      })
    ]
  },
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/]
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://xammax.pythonanywhere.com/api/',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '' },
      }
    }
  }
});
