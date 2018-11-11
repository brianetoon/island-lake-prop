<template>
    <div class="container pt-4">
        <h2 class="text-center">Contact Us</h2>
        
        <form class="pb-4" @submit.prevent="SendMessage">
            <div class="form-group">
                <label for="inputName">Name:</label>
                <input type="text" class="form-control" v-model="name" placeholder="Enter your name">
            </div>
            <div class="form-group">
                <label for="inputEmail">Email:</label>
                <input type="email" class="form-control" v-model="email" placeholder="Enter your email">
            </div>
            <div class="form-group">
                <label for="inputPhone">Phone:</label>
                <input type="phone" class="form-control" v-model="phone" placeholder="Enter your phone number">
            </div>
            <div class="form-group">
                <label for="inputMessage">Message:</label>
                <textarea name="message" class="form-control" v-model="message" cols="30" rows="10" placeholder="Enter your message to us here"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
        </form>

    </div>
</template>

<script>
export default {
    name: 'Contact',
    data(){
        return{
            name: null,
            email: null,
            phone: null,
            message: null
        }
    },
    methods: {
        SendMessage(){
            console.log(this.name, this.email, this.phone, this.message)
            this.name = null
            this.email = null
            this.phone = null
            this.message = null
        }
    }
}
</script>

<style>

</style>
