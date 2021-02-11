import Vue from 'vue'
import VueRouter from 'vue-router'

import AppFoot from '@/components/layout/app-foot'
import AppHead from '@/components/layout/app-head'
import LayOut from '@/components/layout'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        // components: {
        //     head: AppHead, // 命名视图头部
        //     foot: AppFoot // 命名视图底部
        // },
        // component: () => import('../views/home/main'), // 组件自己的router-view
        component: LayOut, // 组件自己的router-view
        redirect: '/home/category',
        children:[
            {
                path: '/home/category',// 当为第一个子路由时，默认为空即可作为默认访问的路由
                name: 'category', // 路由名称：分类
                component: () => import('../views/category/js-item'),
                meta: {
                    title: '分类管理',
                    icon: '',
                },
                children:[
                    {
                        path: '/category/test',
                        name: 'category-test', 
                        component: () => import('../views/category/test'),
                        meta: {
                            title: '测试',
                            icon: '',
                        },
                    },
                ]
            },
            {
                path: '/home/popup',
                name: 'home-popup', 
                component: () => import('../views/popup'),
                meta: {
                    title: '测试管理',
                    icon: '',
                },
            },
            {
                path: '/home/about',
                name: 'home-about', 
                component: () => import('../views/about'),
                meta: {
                    title: '关于我们',
                    icon: '',
                }
            }
        ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
