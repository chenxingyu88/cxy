import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import employeeList from './modules/employeeList'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    num: 10
  },
  modules: {
    user,
    employeeList
  }
})

export default store
