import * as types from '../mutation-type'
import Vue from 'vue'

let axios = Vue.prototype.$axios

const state = {
  classifyList: []
}
// getters
const getters = {
  classifyList: (state) => {
    return state.classifyList
  }
}

// actions
const actions = {
  getClassifyList ({commit, state}, params) {
    return new Promise((resolve, reject) => {
      axios.get('/api/getClassifyList', {
        params
      }).then((response) => {
        commit(types.GET_CLASSIFY_LIST, response.data.data)
        resolve(state.classifyList)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

// mutations
const mutations = {
  [types.GET_CLASSIFY_LIST] (state, classifyList) {
    state.classifyList = classifyList
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
