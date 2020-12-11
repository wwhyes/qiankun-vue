import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import routes from './router'

Vue.config.productionTip = false

let router = null
let instance = null

function render (props = {}) {
  const { container, router: routerConfig } = props
  router = new VueRouter({
    ...routerConfig,
    routes
  })

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#vue-custom-router') : '#vue-custom-router')
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
  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance = null
  router = null
}
