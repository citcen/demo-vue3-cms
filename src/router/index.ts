import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/main/Main.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/404/404.vue')
    }
  ]
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const isAuthenticated = localStorage.getItem('is-authenticated')
    if (!isAuthenticated) {
      return '/login'
    }
  }
})

export default router
