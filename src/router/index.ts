import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/homepage/pcPage.vue'
import NotificationView from '@/views/NotificationView.vue'
import ArticleView from '@/views/ArticleView.vue'
import OnefileView from '@/views/OnefileView.vue'

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
    },
    {
      path: '/article',
      name: 'article',
      component: ArticleView
    },
    {
      path: '/onefile',
      name: 'onefile',
      component: OnefileView
    }
  ]
})

export default router
