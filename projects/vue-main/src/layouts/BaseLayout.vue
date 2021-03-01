<template>
  <div>
    <div style="border-bottom:1px solid">
      <router-link :to="{ name: 'index' }" tag="button">首页</router-link>
      <router-link
        v-for="(microApp, index) in microApps"
        :key="index"
        :to="{ path: `/entry/${microApp.name}` }"
        tag="button"
      >应用{{ microApp.name }}</router-link>
      <span>当前应用：{{ $route.meta.name }}</span>
    </div>

    <main>
      <!-- 正常访问 -->
      <route-view />

      <!-- 子应用容器 -->
      <template v-for="(microApp, index) in microApps">
        <section
          v-show="$route.params.name === microApp.name"
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
    '$route.params.name': {
      handler: 'loadMicroApp',
      immediate: true
    }
  }
}
</script>
