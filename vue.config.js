const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
   publicPath: process.env.NODE_ENV === 'production'
        ? '/homework'
        : '/'
    ,
    productionSourceMap: false,
  transpileDependencies: true,
  assetsDir:'static',
    parallel:false,
    publicPath:'./',
    devServer:{
        port:8080,//端口号
        open:true, //是否自启动
    },
})
