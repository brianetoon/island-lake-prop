<template>
    <div class="rental container pt-4" v-if="rental">

        <!-- <b-img :src="getPicUrl(rental)" class="main-photo" /> -->
        
        <!-- <p v-for="(image, index) in rental.sliderimages" :key="index"> {{ image }} </p> -->
        
        <!-- <div v-for="(image, index) in rental.sliderimages" :key="index">
            <b-img :src="getSliderPic(rental, index)" class="main-photo" />
        </div> -->

        <div class="row pb-4">

            <div class="rental-info col-lg-5 order-lg-2">
                <h2>{{ rental.title }}</h2>
                <p class="stats">
                    {{ rental.guests }} guests &middot; {{ rental.bedrooms }} bedrooms &middot; {{ rental.beds }} beds &middot; {{ rental.baths }} baths
                </p>
                <p class="details d-none d-lg-block" v-for="(detail, index) in rental.details" :key="index">{{ detail }}</p>
            </div>

            <div class="pt-2 col-lg-7 order-lg-1">
                <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="4000"
                    img-width="1024"
                    img-height="480"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                >
                    <b-carousel-slide 
                        v-for="(image, index) in rental.sliderimages" :key="index"
                        :img-src="getSliderPic(rental, index)">
                    </b-carousel-slide>

                </b-carousel>
                
                <div class="details-sm d-lg-none pt-3">
                    <p class="details-sm" v-for="(detail, index) in rental.details" :key="index">{{ detail }}</p>
                </div>
                <div class="contact text-center pt-4">
                    <p>To book a stay or for more information, please contact Aaron:</p>
                    <p class="contact-info"><i class="fas fa-envelope"></i> Email: aaron@islandlakepropertiesllc.com <br>
                    <i class="fas fa-phone"></i> Phone: 734-417-3235</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'Rental',
    data(){
        return{
            rental: null,
            slide: 0,
            sliding: null
        }
    },
    methods: {
        getPicUrl(rental){
            var images = require.context('../assets/', true, /\.jpg$/)
            // console.log(images('./' + rental.mainphoto))
            return images('./' + rental.mainphoto)
        },
        getSliderPic(rental, index){
            var images = require.context('../assets/', true, /\.jpg$/)
            // console.log(images('./' + rental.sliderimages[index]))
            return images('./' + rental.sliderimages[index])
        },
        onSlideStart (slide) {
            this.sliding = true
        },
        onSlideEnd (slide) {
            this.sliding = false
        }
    },
    created(){
        let ref = db.collection('vaca-rentals').where('slug', '==', this.$route.params.rental_slug)
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.data())
                this.rental = doc.data()
                this.rental.id = doc.id
                // console.log(this.rental)
            })
        })
    }
}
</script>

<style>
.rental-info h2{
    color: #2A3B4E;
    font-size: 1.1em;
    font-family: "aviano-flare",sans-serif;
}
.details {
    color:  #5F656C;
    font-size: 1.1em;
    font-family: "myriad-pro",sans-serif;
}
.details-sm{
    color:  #5F656C;
    font-size: 1.1em;
    font-family: "myriad-pro",sans-serif;
}
.contact p{
    color:  #5F656C;
    font-size: 1.1em;
    font-family: "myriad-pro",sans-serif;
    font-weight: bold;
}
.stats{
    font-weight: bold;
    color:  #2A3B4E;
    font-size: 1.2em;
    font-family: "myriad-pro",sans-serif;
}
.contact .contact-info{
    color: #4bc3c9;
}
</style>

