import * as types from '../mutation-type'
import Vue from 'vue'

let axios = Vue.prototype.$axios

const state = {
  movieList: []
}
// getters
const getters = {
  movieList: (state) => {
    return state.movieList
  }
}

// actions
const actions = {
  getMovieList ({commit, state}, params) {
    if (params.type === 1) {
      return new Promise((resolve, reject) => {
        axios.get('/api/queryAdvertise', {
          params
        }).then((response) => {
          commit(types.GET_MOVIE_LIST, response.data.data)
          resolve(state.movieList)
        }).catch((error) => {
          reject(error)
        })
      })
    } else if (params.type === 2) {
      return new Promise((resolve, reject) => {
        axios.get('/api/queryAdvertise', {
          params
        }).then((response) => {
          commit(types.GET_MOVIE_LIST, response.data.data)
          resolve(state.movieList)
        }).catch((error) => {
          reject(error)
        })
      })
    }
  }
}

// mutations
const mutations = {
  [types.GET_MOVIE_LIST] (state, movieList) {
    state.movieList = state.movieList.concat(movieList)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
