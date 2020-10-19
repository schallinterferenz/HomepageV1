import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home.vue'
import WorkShops from '../components/pages/Workshop.vue'
import Artists from '../components/pages/Artists.vue'
import Release from '../components/pages/Release.vue'
import Shop from '../components/pages/Shop.vue'
import CheckOut from '../components/pages/CheckOut.vue'
import Events from '../components/pages/Events.vue'
import Impressum from '../components/pages/Impressum.vue'
import About from '../components/pages/About.vue'
import ArtistPage from '../components/pages/ArtistPage.vue'
// import MainPage from '../components/MainPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/workshops',
      name: 'WorkShops',
      component: WorkShops
    },
    {
      path: '/artists',
      name: 'Artists',
      component: Artists
    },
    {
      path: '/release',
      name: 'Release',
      component: Release
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/checkout',
      name: 'CheckOut',
      component: CheckOut
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/aboutus',
      name: 'About',
      component: About
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: Impressum
    },
    {
      path: '/artistpage',
      name: 'ArtistPage',
      component: ArtistPage
    }
  ]
})
