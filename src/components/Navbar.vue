<template>
    <div class="main-nav">
        <div class="container">
            <b-navbar toggleable="lg" type="dark" variant="">
                <b-navbar-brand href="#">
                    <b-link :to="{ name: 'Home' }">
                        <b-img src="../assets/logo-horiz-txt.png" class="nav-logo" alt="logo" />
                    </b-link>
                </b-navbar-brand>
                <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
                <b-collapse is-nav id="nav_dropdown_collapse">
                    <b-navbar-nav class="ml-auto">
                        <b-link exact :to="{ name: 'Home' }">Home</b-link>
                        <b-link :to="{ name: 'VacationRentals' }">Vacation Rentals</b-link>
                        <b-link exact :to="{ name: 'Testimonials' }">Testimonials</b-link>
                        <b-link exact :to="{ name: 'AboutUs' }">About Us</b-link>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      
    }
  }
}
</script>

<style>
.main-nav{
    background-image: url("../assets/nav-bg.png");
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
}
.nav-logo{
    width:225px;
    height: auto;
}
nav ul{
    display: flex;
    align-items: flex-end;
    padding-bottom: 5px;
}
ul a{
    color: #9299A1;
    margin: 0 10px;
}
ul a:hover{
    color: white;
    text-decoration: none;
}
.active{
    color: white;
}
@media screen and (min-width: 992px){
    nav ul{
        display: flex;
        justify-content: flex-end;
        height: 95px
    }
}
</style>
