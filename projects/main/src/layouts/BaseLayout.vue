<template>
  <div>
    <div style="border-bottom:1px solid">
      <router-link :to="{ name: 'index' }" tag="button">首页</router-link>
      <router-link :to="{ name: 'one' }" tag="button">子应用 一</router-link>
      <router-link :to="{ name: 'two' }" tag="button">子应用 二</router-link>
      <span>当前应用：{{ $route.meta.name }}</span>
    </div>

    <main>
      <!-- 正常访问 -->
      <route-view />

      <!-- 子应用容器 -->
      <template v-for="(microApp, index) in microApps">
        <section
          v-show="$route.meta.name === microApp.name"
          :id="`${microApp.name}-view-box`"
          :key="index"
        />
      </template>
    </main>
  </div>
</template>

<script>
import RouteView from '~common/layouts/RouteView.vue'
import { appsMixin } from '@/config/apps.config'

export default {
  name: 'BaseLayout',
  components: { RouteView },
  mixins: [appsMixin],
  watch: {
    '$route.meta.name': {
      handler: 'loadMicroApp',
      immediate: true
    }
  },
  mounted () {
    var a = { name: 'xiaomin' }
    console.log(a?.name)
  }
}
</script>
