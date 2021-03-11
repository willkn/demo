import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Purchase from '@/views/Purchase'
import Admin from '@/views/Admin'
import Login from '@/components/Login'
import Example from '@/views/Example'
import Signup from '@/components/Signup'
import VenueHome from '@/components/VenueHome'
import VenueProposals from '@/components/VenueProposals'
import VenueFeedback from '@/components/VenueFeedback'
import VenueDownload from '@/components/VenueDownload'
import VModal from 'vue-js-modal'

Vue.use(VModal)
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
            path: '/purchase',
            name: 'Purchase',
            component: Purchase
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/example',
            name: 'Example',
            component: Example
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        // {
        //     path: '/',
        //     name: 'Venue_home',
        //     component: VenueHome
        // },
        // {
        //     path: '/proposals',
        //     name: 'Venue_proposals',
        //     component: VenueProposals
        // },
        // {
        //     path: '/feedback',
        //     name: 'Venue_feedback',
        //     component: VenueFeedback
        // },
        // {
        //     path: '/download',
        //     name: 'Venue_download',
        //     component: VenueDownload
        // }
    ]
})

