import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/public/Login.vue'
import Dashboard from '../views/private/Dashboard.vue'
import Courses from '@/views/private/Courses.vue'
import Questions from '@/views/private/Questions/Index.vue'
import Layout from '@/views/private/Layout.vue'
import { getIsAuthenticated } from '@/api/auth/getIsAuthenticated'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { public: true },
        },
        {
            path: '/',
            component: Layout,
            children: [
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
        },
    ],
})

router.beforeEach(async (to, from, next) => {
    const isPublic = to.matched.some((record) => record.meta.public)

    try {
        const response = await getIsAuthenticated()
        const authenticated = response.data.authenticated || false

        if (!isPublic && !authenticated) {
            return next({ name: 'login' })
        }

        if (to.name === 'login' && authenticated) {
            return next({ name: 'dashboard' })
        }

        next()
    } catch (error) {
        console.error('Erro ao verificar autenticação:', error)
        next({ name: 'login' })
    }
})

export default router
