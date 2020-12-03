import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import routes from './router'

Vue.config.productionTip = false

let router = null
let instance = null

function render (props = {}) {
  const { container } = props
  router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? '/two' : '/',
    routes
  })

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#vue-two') : '#vue-two')
}

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('vue sso-web bootstraped')
}

export async function mount (props) {
  console.log('props from main app', props)
  render()
}

export async function unmount () {
  instance.$destroy()
  instance = null
  router = null
}
