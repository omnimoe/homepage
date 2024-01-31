import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomePage.vue'
import NotificationView from '@/views/NotificationView.vue'
import ArticleView from '@/views/ArticleView.vue'
import OnefileView from '@/views/OnefileView.vue'
import PeriodicalView from '@/views/PeriodicalView.vue'
import ReportView from '@/views/ReportView.vue'

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
      path: '/periodical',
      name: 'periodical',
      component: PeriodicalView
    },
    {
      path: '/report',
      name: 'report',
      component: ReportView
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
