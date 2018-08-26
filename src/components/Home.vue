<template>
  <div class="home">
    <b-jumbotron fluid class="home-jt">
      <template slot="header">
        Bootstrap Vue
      </template>
      <template slot="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </template>
      <hr class="my-4">
      <p>
        It uses utility classes for typography and spacing to space content
        out within the larger container.
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-jt{
  background-image: url("../assets/bg-2.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 600px
}
h1,
h2,
h3,
p{
  color: white;
}
</style>
