<template>
  <div class="home">
    <div class="home-jt d-flex">
      <div class="wrapper">
          <b-img src="../assets/logo-white.png" alt="logo"/>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <h2>col 1</h2>
        </div>
        <div class="col-sm-12 col-md-4">
          <h2>col 2</h2>
        </div>
        <div class="col-sm-12 col-md-4">
          <h2>col 3</h2>
        </div>
      </div>
    </div>

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
  background-image: url("../assets/bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;
  justify-content: center;
}
.wrapper{
  display: flex;
  align-items: center;
}
h1,
h2,
h3{
  font-family: "aviano-flare",sans-serif;
}
</style>
