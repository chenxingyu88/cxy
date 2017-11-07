// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import directives from './directive'
import mock from './mock'
import http from './http'
import store from './store'

// import './static/lib/zepto.min'
console.log(http)
console.log(mock)

for (let key in directives) {
  Vue.directive(key, directives[key])
}

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
