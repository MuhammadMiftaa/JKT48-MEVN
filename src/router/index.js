import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/member/:name',
      name: 'member',
      component: () => import('../views/MemberView.vue')
    },
    {
      path: '/trainee/:name',
      name: 'trainee',
      component: () => import('../views/TraineeView.vue')
    },
  ]
})

export default router
