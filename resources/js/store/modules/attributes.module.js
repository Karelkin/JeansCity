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
        getAttribute(state, payload) {
            return state.item = payload
        },
        getAttributes(state, payload) {
            return state.list = payload
        },
        getMessage(state, payload) {
            return state.message = payload
        }
    },
    actions: {
        index(context) {
            return new Promise ((resolve, reject) => {
                API.get(`attributes/`)
                    .then(attributes => {
                        context.commit('getAttributes', attributes.data.data)
                        resolve(attributes)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        show({commit}, id) {
            return new Promise ((resolve, reject) => {
                API.get(`attributes/${id}`)
                    .then(attribute => {
                        commit('getAttribute', attribute.data.data)
                        resolve(attribute)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        store({commit}, newItem) {
            return new Promise ((resolve, reject) => {
                API.post(`attributes/`, newItem)
                    .then(response => {
                        commit('getAttribute', response.data.data)
                        commit('getMessage', response.data.message)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        update({commit}, id, updateItem) {
            return new Promise ((resolve, reject) => {
                API.put(`attributes/${id}`, updateItem)
                    .then(attribute => {
                        commit('getAttribute', attribute.data.data)
                        commit('getMessage', attribute.data.message)
                        resolve(attribute)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        destroy({commit}, id) {
            return new Promise ((resolve, reject) => {
                API.delete(`attribute/${id}`)
                    .then(attribute => {
                        commit('getAttribute', attribute.data.data)
                        commit('getMessage', attribute.data.message)
                        resolve(attribute)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        }
    }
}