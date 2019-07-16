import API from '../../api.js'

export default {
    namespaced: true,
    state: {
        item: {},
        list: [],
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
        getCallback(state, payload) {
            return state.item = payload
        },
        getCallbacks(state, payload) {
            return state.list = payload
        },
        getAnswer(state, payload) {
            return state.item = payload
        },
        getAnswers(state, payload) {
            return state.list = payload
        },
        getMessage(state, payload) {
            return state.message = payload
        }
    },
    actions: {
        indexCall(context) {
            return new Promise ((resolve, reject) => {
                API.get(`callbacks/`)
                    .then(response => {
                        context.commit('getCallbacks', response.data.data)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        storeCall({commit}, newItem) {
            return new Promise ((resolve, reject) => {
                API.post(`callbacks/`)
                    .then(response => {
                        commit('getCallback', response.data.data)
                        commit('getMessage', response.data.message)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        showCall({commit}, id) {
            return new Promise ((resolve, reject) => {
                API.get(`callbacks/${id}`)
                    .then(response => {
                        commit('getCallback', response.data.data)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        updateCall({commit}, id, updateItem) {
            return new Promise ((resolve, reject) => {
                API.put(`callbacks/${id}`, updateItem)
                    .then(response => {
                        commit('getCallback', response.data.data)
                        commit('getMessage', response.data.message)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        destroyCall({commit}, id) {
            return new Promise ((resolve, reject) => {
                API.delete(`callbacks/${id}`)
                    .then(response => {
                        commit('getCallback', response.data.data)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        indexAns(context, callbackId) {
            return new Promise ((resolve, reject) => {
                API.get(`callbacks/${callbackId}/answers/`)
                    .then(response => {
                        context.commit('getAnswers', response.data.data)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        storeAns({commit}, callbackId, newItem) {
            return new Promise ((resolve, reject) => {
                API.post(`callbacks/${callbackId}/answers/`, newItem)
                    .then(response => {
                        commit('getAnswer', response.data.data)
                        commit('getMessage', response.data.message)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        showAns({commit}, callbackId, callbackAnswerId) {
            return new Promise ((resolve, reject) => {
                API.get(`callbacks/${callbackId}/answers/${callbackAnswerId}`)
                    .then(response => {
                        commit('getAnswer', response.data.data)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        destroyAns({commit}, callbackId, callbackAnswerId) {
            return new Promise ((resolve, reject) => {
                API.delete(`callbacks/${callbackId}/answers/${callbackAnswerId}`)
                    .then(response => {
                        commit('getAnswer', response.data.data)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        }
    }
}