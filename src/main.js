import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import App from './layouts/App.vue'

import router from './routers/App.js'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  NProgress.start()

  next((response) => {
    NProgress.done()
  })
})

let VueInstance = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export default VueInstance
