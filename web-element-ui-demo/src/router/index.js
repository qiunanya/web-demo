import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/components/layout/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/main'),
        redirect: '/home/category',
        children:[
            {
                path: '/home/category',
                name: 'category',
                component: () => import('../views/category/js-item'),
                meta: {
                    title: '分类列表',
                    icon: '',
                },
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/About.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
