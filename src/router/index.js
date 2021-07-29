import { createRouter, createWebHistory } from 'vue-router';
import firebase from 'firebase/app';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main',
      auth: true,
      title: 'Главная'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/clients',
    name: 'Clients',
    meta: {
      layout: 'main',
      auth: true,
      title: 'Клиенты'
    },
    component: () => import('../views/Clients.vue')
  },
  {
    path: '/objects',
    name: 'Objects',
    meta: {
      layout: 'main',
      auth: true,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth);

  if (requireAuth && !currentUser) {
    next('/auth?message=login');
  } else {
    next();
  }
});

export default router;