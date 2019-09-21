import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

// False while in development
Vue.config.productionTip = false

// eslint-disable-next-line no-unused-vars
var app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
