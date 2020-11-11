import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import w3cStandard from '@/views/templates/w3c-standard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
        {
            path: '/w3c',
            name: 'w3c',
            component: () => import('@/views/templates/w3c-standard'),
            meta:{
                title:'w3c html5 标准'
            }
        },
        {
            path: '/seletMenu',
            name: 'seletMenu',
            component: () => import('@/views/templates/select-menu'),
            meta:{
                title: '浮动下拉菜单'
            }
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('@/views/templates/test'),
            meta:{
                title: '测试页面'
            }
        }
    ],
    meta:{
        title:'首页',
        icon: 'ios-people'
    }
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta:{
            title:'关于项目',
            icon: 'ios-stats'
        }
    }
]

/**
 * 重写路由的push方法
 * 解决，相同路由跳转时，报错 虽然不影响程序运行
 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
