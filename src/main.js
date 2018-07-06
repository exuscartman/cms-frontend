// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

// 引入mockjs
// require('../mock/mock.js')

router.beforeEach((to, from, next) => {
  store.commit('TOGGLE_LOADING', true)
  next()
})

router.afterEach(function () {
  setTimeout(() => {
    store.commit('TOGGLE_LOADING', false)
  }, 600)
})

sync(store, router)

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.prototype.errorTip = errorMsg => {
  app.$message({
    showClose: true,
    duration: 2000,
    message: errorMsg,
    type: 'error'
  })
}

Vue.prototype.successTip = successMsg => {
  app.$message({
    showClose: true,
    duration: 2000,
    message: successMsg,
    type: 'success'
  })
}

if (window.sessionStorage) {
  let userStr = window.sessionStorage.getItem('user') || 'null'
  let user = JSON.parse(userStr)
  if (user) {
    store.commit('SET_USER', user)
  }
}

export default app
