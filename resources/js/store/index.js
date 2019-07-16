import Vue from 'vue'
import Vuex from 'vuex'

import CategoriesModule from './modules/categories.module'
import AttributesModule from './modules/attributes.module'
import ValuesModule from './modules/values.module'
import FaqsModule from './modules/faqs.module'
import HomeslidesModule from './modules/homeslides.module'
import MailsModule from './modules/mails.module'
import ShippingsModule from './modules/shippings.module'
// import UsersModule from './modules/users.module'
// import ProductsModule from './modules/products.module'
import CallbacksModule from './modules/callbacks.module'
import CustomersModule from './modules/customers.module'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        categories: {
            ...CategoriesModule
        },
        attributes: {
            ...AttributesModule
        },
        values: {
            ...ValuesModule
        },
        faqs: {
            ...FaqsModule
        },
        homeslides: {
            ...HomeslidesModule
        },
        mails: {
            ...MailsModule
        },
        shippings: {
            ...ShippingsModule
        },
        /*users: {
            ...UsersModule
        },
        products: {
            ...ProductsModule
        },*/
        callbacks: {
            ...CallbacksModule
        },
        customers: {
            ...CustomersModule
        }
    }
})