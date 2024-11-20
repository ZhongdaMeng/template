import { createRouter, createWebHashHistory } from "vue-router";
import { localStorageGet } from '@/utils/localstorage.js'

const routes = [
    {
        path: '/',
        redirect: 'home',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/public/login.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/public/home.vue')
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (localStorageGet('token')) {
        next()
    } else {
        if (to.name !== 'login') {
            next({ name: 'login' })
        } else {
            next()
        }
    }
})

export default router 