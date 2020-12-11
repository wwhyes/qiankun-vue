import { loadMicroApp } from 'qiankun'

const apps = [
  {
    name: 'vue-hash',
    entry: process.env.VUE_APP_ONE_ENTRY
  },
  {
    name: 'vue-history-cdn',
    entry: process.env.VUE_APP_TWO_ENTRY
  },
  {
    name: 'vue-custom',
    entry: process.env.VUE_APP_THR_ENTRY
  }
]

const defaultApp = apps[0]

const appsRoutes = apps.map(app => {
  const { name } = app

  return {
    name,
    path: name,
    // IF microApp's router mode is history
    children: [{ path: '*', meta: { name } }],
    // ELSE can only use meta: { name }
    meta: { name }
  }
})

const appsMixin = {
  data () {
    return {
      microApps: apps,
      loadedMicroApps: {}
    }
  },
  methods: {
    loadMicroApp (appName, lastAppName) {
      const {
        microApps,
        loadedMicroApps
      } = this.$data
      const appConfig = microApps.find(app => app.name === appName)
      const appProps = {
        router: {
          mode: 'history',
          base: `/${appName}`
        }
      }

      if (!loadedMicroApps[appName] && appConfig) {
        loadedMicroApps[appName] = loadMicroApp({
          container: `#${appName}-view-box`,
          props: appProps,
          ...appConfig
        })
      }

      /**
       * 子应用切换时，重新加载及销毁应用
       * 如不希望每次都重新加载子应用，可以注释当前代码
       */
      loadedMicroApps[appName]?.mount()
      loadedMicroApps[lastAppName]?.unmount()
    }
  }
}

export default apps
export { defaultApp, appsRoutes, appsMixin }
