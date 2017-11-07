import * as types from '../mutation-type'
import Vue from 'vue'

let axios = Vue.prototype.$axios
const state = {
  count: ''
}
// getters
const getters = {
  count: (count) => {
    state.count = count
    return state.count
  }
}

// actions
const actions = {
  getEmployeeList ({commit, state}, params) {
    return new Promise((resolve, reject) => {
      axios.get('/api/EmployeeList', {params}).then((response) => {
        // commit(types.GET_EMPLOYEE_LIST, response.data.count)
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  addEmployee ({commit, state}, params) {
    return new Promise((resolve, reject) => {
      axios.post('/api/addEmployee', params).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  editEmployee ({commit, state}, params) {
    return new Promise((resolve, reject) => {
      axios.post('/api/editEmployee', params).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  deleteEmployee ({commit, state}, params) {
    return new Promise((resolve, reject) => {
      axios.post('/api/deleteEmployee', params).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

// mutations
const mutations = {
  [types.GET_EMPLOYEE_LIST] (state, count) {
    state.count = count
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
