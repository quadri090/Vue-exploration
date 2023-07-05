import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/nav',
      name: 'nav',
    //   route level code-splitting
    //   this generates a separate chunk (About.[hash].js) for this route
    //   which is lazy-loaded when the route is visited.
      component: () => import('../views/nav.vue')
    },
    {
      path: '/createAccount',
      name: 'account',
      component: () => import('../views/createAccount.vue')
    },
    {
      path: '/entityAccount',
      name: 'entity',
      component: () => import('../views/entityAccount.vue')
    },
    {
      path: '/legalform',
      name: 'legalform',
      component: () => import('../views/legalform.vue')
    }
  ]
})

export default router
