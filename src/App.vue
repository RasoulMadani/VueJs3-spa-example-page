<template>
  <div class="">
    <Header/>
    <RouterView></RouterView>

  </div>

</template>

<script>
import Header from './components/sections/Header.vue'
  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style scoped>

</style>
