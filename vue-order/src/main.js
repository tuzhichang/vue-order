// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import goods from './components/goods/goods'
import rating from './components/rating/rating'
import seller from './components/seller/seller'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'

import './common/styl/index.styl'

Vue.use(VueRouter)
Vue.use(vueResource)
const routes = [
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/rating',
    component: rating
  },
  {
    path: '/seller',
    component: seller
  }]
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  router,
  render: h => h(App)
})
