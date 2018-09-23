import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VacationRentals from '@/components/VacationRentals'
import Testimonials from '@/components/Testimonials'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
