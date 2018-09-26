<template>
    <div class="rental container pt-4" v-if="rental">

        <!-- <b-img :src="getPicUrl(rental)" class="main-photo" /> -->
        
        <!-- <p v-for="(image, index) in rental.sliderimages" :key="index"> {{ image }} </p> -->
        
        <!-- <div v-for="(image, index) in rental.sliderimages" :key="index">
            <b-img :src="getSliderPic(rental, index)" class="main-photo" />
        </div> -->

        <div class="row">
            <div class="pt-4 col-sm-12 col-md-7">
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
            </div>

            <div class="rental-info col-sm-12 col-md-5">
                <h2>{{ rental.title }}</h2>
                <p class="stats">
                    {{ rental.guests }} guests &middot; {{ rental.bedrooms }} bedrooms &middot; {{ rental.beds }} beds &middot; {{ rental.baths }} baths
                </p>
                <p class="details" v-for="(detail, index) in rental.details" :key="index">{{ detail }}</p>
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
            console.log(images('./' + rental.mainphoto))
            return images('./' + rental.mainphoto)
        },
        getSliderPic(rental, index){
            var images = require.context('../assets/', true, /\.jpg$/)
            console.log(images('./' + rental.sliderimages[index]))
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
    font-size: 1.2em;
    font-family: "aviano-flare",sans-serif;
}
.details {
    color:  #5F656C;
    font-size: 1.1em;
    font-family: "myriad-pro",sans-serif;
}
.stats{
    font-weight: bold;
    color:  #5F656C;
    font-size: 1.2em;
    font-family: "myriad-pro",sans-serif;
}
</style>

