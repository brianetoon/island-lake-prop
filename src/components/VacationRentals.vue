<template>
    <div class="vacation-rentals container pt-4">
        <div class="row pb-4" v-for="rental in vacarentals" :key="rental.id">

            <div class="col-md-5 order-md-2 pt-lg-4">
                <h2 class="title">{{ rental.title }}</h2>
                <p class="highlights" v-for="(highlight, index) in rental.highlights" :key="index">
                    {{ highlight }}
                </p>
                <router-link class="more-info-link" :to="{ name: 'Rental', params: { rental_slug: rental.slug } }">
                    <p>More information about {{ rental.title }}</p>
                </router-link>
            </div>
            
            <div class="col-md-7 order-md-1">
                <router-link :to="{ name: 'Rental', params: { rental_slug: rental.slug } }">
                    <b-img :src="getPicUrl(rental)" class="main-photo" />
                </router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'VacationRentals',
    data(){
        return{
            vacarentals: []
        }
    },
    methods: {
        getPicUrl(rental){
            var images = require.context('../assets/', true, /\.jpg$/)
            return images('./' + rental.mainphoto)
        }
    },
    created(){
        // fetch data from the firestore
        db.collection('vaca-rentals').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                // console.log(doc.data(), doc.id)
                let rental = doc.data()
                rental.id = doc.id
                this.vacarentals.push(rental)
                console.log(this.vacarentals)
            })
        })
    }
}
</script>

<style>
.main-photo{
    width: 100%;
    height: auto;
}
.title{
    color: #2A3B4E;
    font-size: 1.2em;
    font-family: "aviano-flare",sans-serif;
}
.highlights{
    color:  #5F656C;
    font-size: 1.1em;
    font-family: "myriad-pro",sans-serif;
}
.more-info-link{
    font-weight: bold;
    font-size: 1.1em;
    color: #4bc3c9;
}
.more-info-link:hover{
    color: #4bc3c9;
    text-decoration: none;
}
</style>
