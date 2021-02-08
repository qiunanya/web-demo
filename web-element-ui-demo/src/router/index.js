import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: 'home',
        children: [{
            path: 'home',
            name: 'home',
            meta: {
                icon: "ios-globe",
                title: "首頁"
            },
            component: () => import('../views/home'),
            redirect: '/home/main',
            children:[
                {
                    path: 'main',
                    name: 'overview',
                    meta: {
                        title: '首页',
                        icon: ' ',
                    },
                    component: () => import('../views/home/main')
                }]
        }]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
