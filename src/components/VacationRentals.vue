<template>
    <div class="vacation-rentals container">
        <h3>Vacation Rentals</h3>
        <div class="row" v-for="rental in vacarentals" :key="rental.id">
            <router-link :to="{ name: 'Rental', params: { rental_slug: rental.slug } }">
                <b-img :src="getPicUrl(rental)" class="main-photo" />
            </router-link>
            <p>{{ rental.title }}</p>
            <p>{{ rental.mainphoto }}</p>
            <ul class="highlights">
                <li v-for="(highlight, index) in rental.highlights" :key="index"><p>{{ highlight }}</p></li>
            </ul>
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
            })
        })
    }
}
</script>

<style>
.main-photo{
    max-width: 500px;
    height: auto;
}
</style>
