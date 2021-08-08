import { createRouter, createWebHistory } from 'vue-router';
import firebase from 'firebase/app';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main',
      auth: true,
      title: 'Page:Main'
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/clients',
    name: 'Clients',
    meta: {
      layout: 'main',
      auth: true,
      title: 'Page:Clients'
    },
    component: () => import('../views/Clients.vue')
  },
  {
    path: '/properties',
    name: 'Properties',
    meta: {
      layout: 'main',
      auth: true,
      title: 'Page:Properties'
    },
    component: () => import('../views/Properties.vue')
  },
  {
    path: '/sales',
    name: 'Sales',
    meta: {
      layout: 'main',
      auth: true,
      title: 'Page:Sales'
    },
    component: () => import('../views/Sales.vue')
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