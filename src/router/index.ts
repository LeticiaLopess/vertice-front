import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/public/Login.vue'
import Dashboard from '../views/private/Dashboard.vue'
import Courses from '@/views/private/Courses.vue'
import Questions from '@/views/private/Questions.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
        },
        {
            path: '/courses',
            name: 'courses',
            component: Courses,
        },
        {
            path: '/questions',
            name: 'questions',
            component: Questions,
        },
    ],
})

export default router
