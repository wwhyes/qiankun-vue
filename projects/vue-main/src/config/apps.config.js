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
          base: `/entry/${appName}`
        }
      }

      // 子应用切换时，重新加载及销毁应用
      // 如不希望每次都重新加载子应用，可以注释当前代码
      this.mircoAppMount(appName)
      this.mircoAppUnmount(lastAppName)

      // 初次加载子应用
      if (!loadedMicroApps[appName] && appConfig) {
        loadedMicroApps[appName] = loadMicroApp({
          container: `#${appName}-view-box`,
          props: appProps,
          ...appConfig
        })
      }
    },
    mircoAppMount (appName) {
      this.loadedMicroApps[appName]?.mount()
    },
    mircoAppUnmount (appName) {
      if (this.loadedMicroApps[appName]?.getStatus() === 'MOUNTED') {
        this.loadedMicroApps[appName].unmount()
      }
    }
  }
}

export default apps
export { defaultApp, appsMixin }
