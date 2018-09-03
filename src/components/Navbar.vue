<template>
    <div class="main-nav">
        <div class="container">
            <b-navbar toggleable="lg" type="dark" variant="">
                <b-navbar-brand href="#">
                    <b-img src="../assets/logo-horiz-txt.png" class="nav-logo" alt="logo" />
                </b-navbar-brand>
                <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
                <b-collapse is-nav id="nav_dropdown_collapse">
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="#" active>Home</b-nav-item>
                        <b-nav-item href="#">Vacation Rentals</b-nav-item>
                        <b-nav-item href="#">FAQs</b-nav-item>
                        <b-nav-item href="#">About Us</b-nav-item>
                        <b-nav-item href="#">Contact</b-nav-item>
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
}
@media screen and (min-width: 992px){
    nav ul{
        display: flex;
        justify-content: flex-end;
        height: 95px
    }
}
</style>
