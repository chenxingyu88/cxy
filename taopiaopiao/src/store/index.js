import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    num: 10
  },
  modules: {
    movie,
    user
  }
})

export default store
