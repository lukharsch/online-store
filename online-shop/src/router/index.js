import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Store from '../views/Store.vue'
import ThankYou from '../views/ThankYou.vue'

Vue.use(VueRouter)

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/store', name: 'Store', component: Store },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/checkout', name: 'Checkout', component: Checkout },
    { path: '/thankyou', name: 'ThankYou', component: ThankYou },
    { path: '/about', name: 'About', component: About },
]

const router = new VueRouter({
    routes
})

export default router
