const path = require('path')
const fs =require('fs')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port:8081,
    proxy: {
      '/api': {
        target: 'https://172.18.32.180:9527',
      }
    }
  },
  "configureWebpack": {
    "resolve": {
      "alias": {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
}
