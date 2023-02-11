import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/album',
      name: 'album',
      component: () => import('@/views/AlbumView.vue')
    },
    {
      path: '/artist',
      name: 'artist',
      component: () => import('@/views/ArtistView.vue')
    },
    {
      path: '/license',
      name: 'license',
      component: () => import('@/views/LicenseView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/views/GalleryView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    }
  ]
})

export default router
