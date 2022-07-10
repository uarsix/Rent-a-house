import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/Vant/index'
import '@/Styles/reset.less'
Vue.config.productionTip = false
Vue.prototype.$imgUrl = 'http://liufusong.top:8080'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
