import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/public/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
  ],
})

export default router
