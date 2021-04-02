import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main',
      title: 'Главная'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    meta: {
      layout: 'auth'
    },
    component: () => import('../views/Auth.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
