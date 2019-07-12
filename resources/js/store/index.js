import Vue from 'vue'
import Vuex from 'vuex'

import CategoriesModule from './modules/categories.module'
import AttributesModule from './modules/attributes.module'
import ValuesModule from './modules/values.module'
import FaqsModule from './modules/faqs.module'
import HomeslidesModule from './modules/homeslides.module'
import MailsModule from './modules/mails.module'
import ShippingsModule from './modules/shippings.module'

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
        }
    }
})