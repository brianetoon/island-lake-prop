<template>
    <div class="footer">
        <p class="text-center">&copy; 2018 Island Lake Properties, LLC</p>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      
    }
  }
}
</script>

<style>
.footer {
    background-image: url("../assets/footer-bg.png");
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
}
.footer p{
    color: white;
    font-family: "aviano-flare",sans-serif;
    padding: 15px;
    margin-bottom: 0px;
    font-size: 0.8em;
}
</style>
