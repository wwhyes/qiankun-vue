<template>
  <div>
    <div style="border-bottom:1px solid">
      <router-link :to="{ name: 'index' }" tag="button">首页</router-link>
      <router-link :to="{ name: 'one' }" tag="button">子应用 一</router-link>
      <router-link :to="{ name: 'two' }" tag="button">子应用 二</router-link>
      <span>当前应用：{{ activeApp }}</span>
    </div>

    <main>
      <template v-for="(appName, index) in microApps">
        <section
          v-show="$route.meta.name === appName"
          :id="`${appName}-view-box`"
          :key="index"
        />
      </template>
      <route-view />
    </main>
  </div>
</template>

<script>
import { appsMixin } from '@/config/apps.config'
import RouteView from '../../../../common/layouts/RouteView.vue'

export default {
  components: { RouteView },
  name: 'BaseLayout',
  mixins: [appsMixin],
  watch: {
    '$route.meta.name': {
      handler: 'loadMicroApp',
      immediate: true
    }
  }
}
</script>
