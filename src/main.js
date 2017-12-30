import Vue from 'vue'

import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)

//axios
Vue.prototype.$axios = axios

//css
import "./statics/css/phoneMax.css"


//router
import home from '@/home/home'

const router = new VueRouter({
  routes : [
      { path: '/', redirect:'/home' },
      { path: '/home', component: home },

  ]
})

//App.vue
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
