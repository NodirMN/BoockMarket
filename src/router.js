import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
export default  new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/payment', 
            component: ()=>import('./pages/Payment.vue')
        },
        {
            path: '/contact', 
            component: ()=>import('./pages/Contact.vue')
        },
        {
            path: '/cart', 
            component: ()=>import('./pages/Cart.vue')
        },
        {
            path: '/cabinet', 
            component: ()=>import('./pages/Cabinet.vue')
        },

    ],
    mode: 'history'
})