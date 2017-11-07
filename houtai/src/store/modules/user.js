import * as types from '../mutation-type'
import Vue from 'vue'

let axios = Vue.prototype.$axios
const state = {
  userInfo: {}
}
// getters
const getters = {
  getUserInfo: (state) => {
    if (window.location.href.indexOf('login') !== -1) return false
    if (JSON.stringify(state.userInfo) === '{}') {
      let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
      if (!userInfo) {
        window.location.href = '/login'
      }
      state.userInfo = userInfo
    }
    return state.userInfo
  }
}

// actions
const actions = {
  loginDo ({commit, state}, params) {
    return new Promise((resolve, reject) => {
      axios.post('/api/login_do', params).then((response) => {
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  getRoot ({commit, state}, params) {
    return new Promise((resolve, reject) => {
      axios.get('/api/getUserRoot', {params}).then((response) => {
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  getRootList ({commit, state}) {
    return new Promise((resolve, reject) => {
      axios.get('/api/getRootList').then((response) => {
        // console.log(response)
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  setUserInfo ({commit, state}, params) {
    return new Promise((resolve, reject) => {
      let userInfo = state.userInfo
      userInfo[params.key] = params.value
      commit(types.GET_USER_INFO, userInfo)
      resolve(userInfo)
    })
  },
  editRoot ({commit, state}, params) {
    return new Promise((resolve, reject) => {
      axios.get('/api/editRoot', {params}).then((response) => {
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  loginOut ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      // commit(types.GET_USER_INFO, '')
      resolve({
        code: 200
      })
    })
  }
}

// mutations
const mutations = {
  [types.GET_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
    if (userInfo === '') {
      window.localStorage.removeItem('userInfo')
    } else {
      window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
