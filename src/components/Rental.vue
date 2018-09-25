<template>
    <div class="rental container" v-if="rental">
        <h2>{{ rental.title }}</h2>
        <p>{{ rental.mainphoto }}</p>
        <b-img :src="getPicUrl(rental)" class="main-photo" />
        
        <!-- <p v-for="(image, index) in rental.sliderimages" :key="index"> {{ image }} </p> -->
        
        <div v-for="(image, index) in rental.sliderimages" :key="index">
            <b-img :src="getSliderPic(rental, index)" class="main-photo" />
        </div>

        <p>{{ rental }}</p>

        

    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'Rental',
    data(){
        return{
            rental: null
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
.main-photo{
    max-width: 500px;
    height: auto;
}
</style>

