import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Index from '../components/Index'
import Add from '../components/Add'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home,
    children: [{
        path: '/',
        component: Index
    }, {
        path: '/add',
        component: Add
    }]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router