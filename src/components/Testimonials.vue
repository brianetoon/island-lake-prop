<template>
    <div class="container pt-4">
        <h2 class="header text-center">What guests are saying about us...</h2>
        <div class="row pt-3" v-for="(rental, index) in vacarentals" :key="index">
            <div class="col">
                <h2 class="title text-center pb-3">{{ rental.title }}</h2>
                <blockquote class="blockquote text-center pb-3" v-for="(testimonial, index) in rental.testimonials" :key="index">
                    <p class="comment mb-0">"{{ testimonial.comment }}"</p>
                    <footer class="blockquote-footer">{{ testimonial.author }}, {{ testimonial.date }}</footer>
                </blockquote>
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'Testimonials',
    data(){
        return{
            vacarentals: []
        }
    },
    created(){
        // fetch data from the firestore
        db.collection('vaca-rentals').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let rental = doc.data()
                rental.id = doc.id
                this.vacarentals.push(rental)
            })
        })
    }
}
</script>

<style>
.header{
    color: #4bc3c9;
    font-size: 1.4em;
    font-family: "aviano-flare",sans-serif;
}
.title{
    color: #2A3B4E;
    font-size: 1.2em;
    font-family: "aviano-flare",sans-serif;
}
blockquote p{
    color:  #5F656C;
    font-size: 1em;
    font-family: "myriad-pro",sans-serif;
}
.blockquote-footer{
    color: #4bc3c9;
    font-size: 1em;
    font-weight: bold;
    font-family: "myriad-pro",sans-serif;
}
</style>
