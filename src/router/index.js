import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/spbanchay.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/spbanchay',
      name: 'spbanchay',
      component: () => import('../views/spbanchay.vue')
    },
    {
      path: '/dieutritom',
      name: 'dieutritom',
      component: () => import('../views/dieutritom.vue')
    },
    {
      path: '/dieutrica',
      name: 'dieutrica',
      component: () => import('../views/dieutrica.vue')
    },
    {
      path: '/knnuoitrong',
      name: 'knnuoitrong',
      component: () => import('../views/knnuoitrong.vue')
    },
    {
      path: '/vechungtoi',
      name: 'vechungtoi',
      component: () => import('../views/vechungtoi.vue')
    },
  ]
})

export default router
