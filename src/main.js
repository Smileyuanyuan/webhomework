import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './iconfont/iconfont.css'
import 'animate.css'
import 'wowjs/css/libs/animate.css'
import wow from 'wowjs'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$wow = wow

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
