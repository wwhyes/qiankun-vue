const path = require('path')
const { name } = require('./package')
const resolve = dir => path.join(__dirname, dir)

const vueConfig = {
  outputDir: resolve(`../../dist/${name}`),
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
