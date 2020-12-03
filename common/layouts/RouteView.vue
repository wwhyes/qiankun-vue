<script>
export default {
  name: 'RouteView',
  render (h) {
    const { meta } = this.$route
    const notKeep = h('router-view')
    const inKeep = h('keep-alive', {}, [notKeep])

    return meta.keepAlive ? inKeep : notKeep
  }
}
</script>
