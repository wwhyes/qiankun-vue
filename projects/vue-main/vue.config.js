const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const vueConfig = {
  outputDir: resolve('../../dist/vue-main'),
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '~common': resolve('../../common')
      }
    }
  },
  devServer: {
    port: 8090
  }
}

module.exports = vueConfig
