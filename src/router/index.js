import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VacationRentals from '@/components/VacationRentals'
import Testimonials from '@/components/Testimonials'
import AboutUs from '@/components/AboutUs'
import Rental from '@/components/Rental'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/vacation-rentals',
      name: 'VacationRentals',
      component: VacationRentals
    },
    {
      path: '/testimonials',
      name: 'Testimonials',
      component: Testimonials
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/vacation-rentals/:rental_slug',
      name: 'Rental',
      component: Rental
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
