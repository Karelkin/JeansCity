import API from '../../api.js'

export default {
    namespaced: true,
    state: {
        list: [],
        item: {},
        message: null
    },
    getters: {
        item(state) {
            return state.item
        },
        list(state) {
            return state.list
        },
        message(state) {
            return state.message
        }
    },
    mutations: {
        getValue(state, payload) {
            return state.item = payload
        },
        getValues(state, payload) {
            return state.list = payload
        },
        getMessage(state, payload) {
            return state.message = payload
        }
    },
    actions: {
        index(context, idAttr) {
            return new Promise ((resolve, reject) => {
                API.get(`attributes/${idAttr}/values/`)
                    .then(values => {
                        context.commit('getValues', values.data.data)
                        resolve(values)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        show({commit}, idAttr, idVal) {
            return new Promise ((resolve, reject) => {
                API.get(`attributes/${idAttr}/values/${idVal}`)
                    .then(value => {
                        commit('getValue', value.data.data)
                        resolve(value)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        store({commit}, idAttr, newItem) {
            return new Promise ((resolve, reject) => {
                API.post(`attribute/${idAttr}/values/`, newItem)
                    .then(value => {
                        commit('getValue', value.data.data)
                        commit('getMessage', value.data.message)
                        resolve(value)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        update({commit}, idAttr, idVal, updateItem) {
            return new Promise ((resolve, reject) => {
                API.put(`attribute/${idAttr}/values/${idVal}`, updateItem)
                    .then(value => {
                        commit('getValue', value.data.data)
                        commit('getMessage', value.data.message)
                        resolve(value)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        destroy({commit}, idAttr, idVal) {
            return new Promise ((resolve, reject) => {
                API.delete(`attribute/${idAttr}/values/${idVal}`)
                    .then(value => {
                        commit('getValue', value.data.data)
                        commit('getMessage', value.data.message)
                        resolve(value)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        }
    }
}