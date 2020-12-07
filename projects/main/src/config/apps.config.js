import { loadMicroApp } from 'qiankun'

const apps = [
  {
    name: 'one',
    entry: process.env.VUE_APP_ONE_ENTRY
  },
  {
    name: 'two',
    entry: process.env.VUE_APP_TWO_ENTRY
  }
]

const defaultApp = 'one'

const appsRoutes = apps.map(app => {
  const { name } = app

  return {
    name,
    path: name,
    meta: { name },
    // For microApp's router mode is history
    children: [{ path: '*', meta: { name } }]
  }
})

const appsMixin = {
  data () {
    return {
      microApps: apps,
      microAppsProps: {},
      loadedMicroApps: {}
    }
  },
  methods: {
    loadMicroApp (appName, lastAppName) {
      const {
        microApps,
        microAppsProps,
        loadedMicroApps
      } = this.$data
      const appConfig = microApps.find(app => app.name === appName)

      if (!loadedMicroApps[appName] && appConfig) {
        loadedMicroApps[appName] = loadMicroApp({
          container: `#${appName}-view-box`,
          props: microAppsProps,
          ...appConfig
        })
      }

      /**
       * 子应用切换时，销毁应用
       * 如不希望每次都重新加载子应用，可以注释当前代码
       */
      if (loadedMicroApps[appName]) {
        loadedMicroApps[appName].mount()
      }

      if (loadedMicroApps[lastAppName]) {
        loadedMicroApps[lastAppName].unmount()
      }
    }
  }
}

export default apps
export { defaultApp, appsRoutes, appsMixin }
