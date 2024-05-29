import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import GalleryView from '../views/GalleryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/szolgaltatasok',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/galeria',
      name: 'gallery',
      component: GalleryView
    }
  ]
})

export default router
