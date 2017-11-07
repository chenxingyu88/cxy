import Vue from 'vue'
import Vuex from 'vuex'

import commodity from './modules/commodity'
import classify from './modules/classify'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    num: 10
  },
  modules: {
    commodity,
    classify
  }
})

export default store
