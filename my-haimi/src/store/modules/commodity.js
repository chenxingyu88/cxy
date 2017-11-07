import * as types from '../mutation-type'
import Vue from 'vue'

let axios = Vue.prototype.$axios

const state = {
  commodityList: []
}
// getters
const getters = {
  commodityList: (state) => {
    return state.commodityList
  }
}

// actions
const actions = {
  getCommodityList ({commit, state}, params) {
    return new Promise((resolve, reject) => {
      axios.get('/api/getCommodity', {
        params
      }).then((response) => {
        commit(types.GET_COMMODITY_LIST, response.data.data)
        resolve(state.commodityList)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

// mutations
const mutations = {
  [types.GET_COMMODITY_LIST] (state, commodityList) {
    state.commodityList = commodityList
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
