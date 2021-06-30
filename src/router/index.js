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
    path: '/clients',
    name: 'Clients',
    meta: {
      layout: 'main',
      title: 'Клиенты'
    },
    component: () => import('../views/Clients.vue')
  },
  {
    path: '/objects',
    name: 'Objects',
    meta: {
      layout: 'main',
      title: 'Объекты'
    },
    component: () => import('../views/Objects.vue')
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
