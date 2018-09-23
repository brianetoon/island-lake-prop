<template>
    <div class="vacation-rentals container">
        <h3>Vacation Rentals</h3>
        <div class="" v-for="rental in vacarentals" :key="rental.id">
            <b-img  src="../assets/the-cottage/main.jpg" class="main-photo" />
            <b-img :src="getPic(image)" class="main-photo"/>
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
            vacarentals: [],
            image: 'the-cabin/main.jpg'
        }
    },
    methods: {
        getPic(image){
            var images = require.context('../assets/', true, /\.jpg$/)
            return images('./' + image)
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
