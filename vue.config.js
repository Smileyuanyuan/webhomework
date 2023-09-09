const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir:'static',
    parallel:false,
    publicPath:'./',
    devServer:{
        port:8080,//端口号
        open:true, //是否自启动
    },
})
