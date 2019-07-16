import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';

import App from './App'
import store from './store'

Vue.use(Vuetify)
Vue.use(KeenUI)

const app = new Vue({
  el: "#app",
  store,
  components: { App }
})