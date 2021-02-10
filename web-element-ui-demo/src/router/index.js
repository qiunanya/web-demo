import Vue from 'vue'
import VueRouter from 'vue-router'

import AppFoot from '@/components/layout/app-foot'
import AppHead from '@/components/layout/app-head'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        // components: {
        //     head: AppHead, // 命名视图头部
        //     foot: AppFoot // 命名视图底部
        // },
        component: () => import('../views/home/main'), // 组件自己的router-view
        redirect: '/home/category',
        children:[
            {
                path: '/home/category',// 当为第一个子路由时，默认为空即可作为默认访问的路由
                name: 'category', // 路由名称：分类
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
