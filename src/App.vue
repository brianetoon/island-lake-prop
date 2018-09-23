<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>
h1,
h2,
h3,
h4,
li,
a{
  font-family: "aviano-flare",sans-serif;
}
p{
  font-family: "myriad-pro",sans-serif;
}
</style>
