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
    ? '/medical-project/' // Відповідає розміщенню на GitHub Pages
    : '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://xammax.pythonanywhere.com',  // Ваш бекенд сервер
        changeOrigin: true,
        secure: false, // Якщо бекенд має SSL
        pathRewrite: { '^/api': '' }, // Переписує шлях, видаляючи префікс /api
      }
    }
  }
});
