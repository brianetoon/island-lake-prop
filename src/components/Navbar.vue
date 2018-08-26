<template>
    <div class="main-nav">
        <b-container>
            <b-navbar variant="faded" type="light">
                <b-navbar-brand href="#">
                    <b-img src="../assets/logo-horiz.png" class="nav-logo" alt="logo" />
                </b-navbar-brand>
            </b-navbar>
        </b-container>
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
    background: rgb(0, 69, 125);
}
.nav-logo{
    width:225px;
    height: auto;
}
</style>
