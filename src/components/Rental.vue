<template>
    <div class="rental container" v-if="rental">
        <h2>{{ rental.title }}</h2>
        <b-img :src="getPicUrl(rental)" class="main-photo" />
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
            return images('./' + rental.mainphoto)
        }
    },
    created(){
        let ref = db.collection('vaca-rentals').where('slug', '==', this.$route.params.rental_slug)
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                // console.log(doc.data())
                this.rental = doc.data()
                this.rental.id = doc.id
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

