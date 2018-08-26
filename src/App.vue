<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <b-img src="./assets/logo-dark.png" fluid alt="logo" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'app',
  components:{
    Navbar
  }
}
</script>

<style>

</style>
