<template>
  <div id="app">
    <b-container>
      <Navbar />
      <b-row>
        <b-col>
          <b-img src="./assets/logo.png" fluid alt="Responsive image" />
        </b-col>
      </b-row>
    </b-container>
    <router-view></router-view>
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
