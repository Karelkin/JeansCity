import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import . from './components/.'

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            children: [
                {
                    path: '/:pageId',
                    name: 'page',
                    component: page
                }
            ]
        },
        {
            path: '/products',
            name: 'products',
            component: products,
            children: [
                {
                    path: '/products/:prodId',
                    name: 'product',
                    component: product
                }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: contacts
        }
    ]
})