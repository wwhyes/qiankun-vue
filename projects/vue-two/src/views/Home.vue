<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Secondary App"/>
  </div>
</template>

<script>
// ~common is an alias to rootPath/common
import HelloWorld from '~common/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
