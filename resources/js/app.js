import Vue from 'vue'

import App from './App'
import store from './store'

const app = new Vue({
  el: "#app",
  store,
  components: { App }
})