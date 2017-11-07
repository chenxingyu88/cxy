import axios from 'axios'
import api from '../api/'
import MockAdapter from 'axios-mock-adapter'

let mock = new MockAdapter(axios, {delayResponse: 2000})
let getShowsByCityCode = api.getShowsByCityCode
let getMovieMainList = api.getMovieMainList
mock.onGet('/api/queryAdvertise').reply(function (config) {
  let params = config.params
  let data = {
    code: getShowsByCityCode.code,
    data: []
  }
  data.data = getShowsByCityCode.data.splice(params.page * params.pageSize, params.pageSize)
  return [200, data]
})
mock.onGet('/api/movieMainList').reply(function (config) {
  let params = config.params
  let data = {
    code: getMovieMainList.code,
    data: []
  }
  data.data = getMovieMainList.data.splice(params.page * params.pageSize, params.pageSize)
  return [200, data]
})
