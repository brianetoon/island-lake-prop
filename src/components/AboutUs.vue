<template>
    <div class="about-us">
        <div class="container pt-4">
            <div class="row">
                <div class="mission col-md-8 pb-3">
                    <h2>Our Mission</h2>
                    <div class="mission-text">
                        <p>Island Lake Properties grew from my family’s love of local travel and of all this area has to offer. There is something to enjoy every season – the Great Lakes, inland lakes, skiing, snowmobiling and fall color – to name a few.</p>
                        <p>Our mission is to share the great times we have enjoyed by providing visitors with welcoming vacation homes and unmatched service. Come stay with us and feel the Island Lake difference, an elevated experience in vacation rentals.</p>
                        <p>We currently offer two vacation homes that can be rented by the night, or by the week.</p>
                    </div>
                </div>
                <div class="contact-us col-md-4 text-center pb-3">
                    <h2>Contact Us</h2>
                    <p class=""><i class="fas fa-envelope"></i> Email: aaron@islandlakepropertiesllc.com<br>
                    <i class="fas fa-phone"></i> Phone: 734-417-3235</p>
                </div>
            </div>
        </div>
        <div class="about-jt d-flex">
            <div class="wrapper">
                <b-img src="../assets/logo-white.png" alt="logo"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUs',
    data(){
        return{

        }
    }
}
</script>

<style>
.mission h2{
    color: #2A3B4E;
    font-size: 1.4em;
    font-family: "aviano-flare",sans-serif;
}
.contact-us h2{
    color: #2A3B4E;
    font-size: 1.4em;
    font-family: "aviano-flare",sans-serif;
}
.mission-text{
    color:  #5F656C;
    font-size: 1.1em;
    font-family: "myriad-pro",sans-serif;
}
.contact-us p{
    color:  #4bc3c9;
    font-size: 1.1em;
    font-family: "myriad-pro",sans-serif;
}
.about-jt{
    background-image: url("../assets/about-bg.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 400px;
    justify-content: center;
}
.wrapper{
    display: flex;
    align-items: center;
}
</style>

