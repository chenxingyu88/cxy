import axios from 'axios'
import api from '../api/'
import MockAdapter from 'axios-mock-adapter'

let getCommodityList = api.getCommodityList
let classifyList = api.classifyList
let brandList = api.brandList

let mock = new MockAdapter(axios, {delayResponse: 2000})
mock.onGet('/api/getCommodity').reply(function (config) {
  // let params = config.params
  // let data = {
  //   code: getCommodityList.code,
  //   data: []
  // }
  // data.data = getCommodityList.data.splice(params.page * params.pageSize, params.pageSize)
  return [200, getCommodityList]
})
mock.onGet('/api/getClassifyList').reply(function (config) {
  let params = config.params
  let data = []
  if (params.type === 0) {
    data = classifyList
  } else {
    data = brandList
  }
  return [200, data]
})

// mock.onGet('/api/getBrandList').reply(function (config) {
//   return [200, brandList]
// })
