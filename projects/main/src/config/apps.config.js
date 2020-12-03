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
      props: {},
      activeApp: '',
      microApps: apps.map(item => item.name),
      loadedMicroApps: {}
    }
  },
  methods: {
    loadMicroApp (appName) {
      const {
        props,
        activeApp,
        microApps,
        loadedMicroApps
      } = this.$data

      // 判断是否在加载列表
      if (appName && microApps.includes(appName)) {
        const appConfig = apps.find(app => app.name === appName)

        /**
         * 子应用切换时，销毁应用
         * 如不希望每次都重新加载子应用，可以注释当前代码
         */
        if (Object.keys(loadedMicroApps).includes(appName) && activeApp !== appName) {
          microApps.includes(activeApp) && loadedMicroApps[activeApp]
            .unmount()
            .then(() => {
              delete loadedMicroApps[activeApp]
            })
        }

        if (!Object.keys(loadedMicroApps).includes(appName)) {
          loadedMicroApps[appName] = loadMicroApp({
            ...appConfig,
            container: `#${appName}-view-box`,
            props
          })
        }
      }

      this.activeApp = appName
    }
  }
}

export default apps
export { defaultApp, appsRoutes, appsMixin }
