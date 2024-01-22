import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/homepage/pcPage.vue'
import NotificationView from '@/views/NotificationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/notification',
      name: 'notification',
      component: NotificationView
    }
  ]
})

export default router
