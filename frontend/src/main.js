import Vue from 'vue';
import App from './App.vue';
import store from "./store/index";
import axios from "axios";
import router from './router';
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
