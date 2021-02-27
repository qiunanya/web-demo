import Vue from 'vue'
import VueRouter from 'vue-router'
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
                component: () => import('../views/category/main'),
                meta: {
                    title: '分类管理',
                    icon: '',
                    index: 1
                },
                redirect: '/home/category/test',
                children:[
                    {
                        path: '/home/category/test',
                        name: 'category-test', 
                        component: () => import('../views/category/test'),
                        meta: {
                            title: '分类测试',
                            icon: '',
                            index: 2,
                        },
                    },
                    {
                        path: '/home/category/js-item',
                        name: 'category-js-item', 
                        component: () => import('../views/category/js-item'),
                        meta: {
                            title: 'JS ITME 测试',
                            icon: '',
                            index: 3,
                        },
                    }
                ]
            },
            {
                path: '/home/popup',
                name: 'home-popup', 
                component: () => import('../views/popup'),
                meta: {
                    title: '弹窗组件',
                    icon: '',
                    index: 4
                },
            },
            {
                path: '/home/about',
                name: 'home-about', 
                component: () => import('../views/about'),
                meta: {
                    title: '关于我们',
                    icon: '',
                    index: 5
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

/**
 * @description 解决：点击相同路由虽然不影响运行，但是控制台会报错问题
 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
