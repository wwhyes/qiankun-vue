import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './permission' // permission control

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#vue-main')
