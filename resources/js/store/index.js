import Vue from 'vue'
import Vuex from 'vuex'

import CategoriesModule from './modules/categories.module'
import AttributesModule from './modules/attributes.module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        categories: {
            ...CategoriesModule
        },
        attributes: {
            ...AttributesModule
        }
    }
})