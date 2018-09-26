<template>
  <div class="home">
    <div class="home-jt d-flex">
      <div class="wrapper">
          <b-img src="../assets/logo-white.png" alt="logo"/>
      </div>
    </div>

    <div class="container pt-4">
      <div class="row">
        <div class="col-md-12 col-lg-4">
          <div class="box">
            <b-img src="../assets/vaca-rental.png" class="box-img" alt="vacation rentals"/>
            <h3 class="pt-2">Vacation Rentals</h3>
            <div class="text-area">
              <p>See our vacation homes and learn about all the amenities they offer.</p>
            </div>
            <div class="d-none d-lg-block">
              <b-img src="../assets/house.png" class="box-icon" alt="house icon"/>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-4">
          <div class="box">
            <b-img src="../assets/testimonials.png" class="box-img" alt="vacation rentals"/>
            <h3 class="pt-2">Testimonials</h3>
            <div class="text-area">
              <p>Our guests share their experiences while staying at one of our properties.</p>
            </div>
            <div class="d-none d-lg-block">
              <b-img src="../assets/car.png" class="box-icon" alt="car icon"/>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-4">
          <div class="box">
            <b-img src="../assets/about-us.png" class="box-img d-block" alt="vacation rentals"/>
            <h3 class="pt-2">About Us</h3>
            <div class="text-area">
              <p>Our Mission is to share the great times our family has enjoyed by providing welcoming 
              vacation homes and unmatched service.</p>
            </div>
            <div class="d-none d-lg-block">
              <b-img src="../assets/elevated.png" class="box-icon" alt="elevated icon"/>
            </div>
          </div>
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
<style>
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
.box{
  text-align: center;
}
.box h3{
  color: #2A3B4E;
  font-size: 1.2em;
  font-family: "aviano-flare",sans-serif;
}
.box-img{
  width: 100%;
  height: auto;
}
.box-icon{
  width: 150px;
  height: auto;
}
.text-area{
  display: flex;
  justify-content: center;
  width: auto;
}
.text-area p{
  color:  #5F656C;
  font-size: 1.1em;
}
@media screen and (min-width: 992px){
  .text-area{
    height: 100px;
  }
}
</style>
