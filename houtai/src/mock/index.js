import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {EmployeeList} from '@/api'

let mock = new MockAdapter(axios, {delayResponse: 2000})
let root = {}
root[0] = [
  'Root', // 权限
  'SalaryBar', // 工资条
  'EnterpriseService',  // 企业服务
  'BusinessManagement'  // 企业管理
]

root[1] = [
  'EnterpriseService',
  'BusinessManagement'
]

root[2] = [
  'SalaryBar',
  'EnterpriseService'
]
mock.onPost('/api/login_do').reply(function (config) {
  let params = JSON.parse(config.data)
  let data = {
    code: 200,
    data: {}
  }
  if (params.user === 'boss') {
    data.data = {
      userName: '老板',
      sex: '男',
      age: 100,
      photo: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1762973822,121126736&fm=27&gp=0.jpg',
      type: 0,
      root: root[0]
    }
  } else if (params.user === 'caiwu') {
    data.data = {
      userName: '财务',
      sex: '女',
      age: 10,
      photo: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3929251423,454148251&fm=27&gp=0.jpg',
      type: 1,
      root: root[1]
    }
  } else if (params.user === 'yuangong') {
    data.data = {
      userName: '员工',
      sex: '男',
      age: 10,
      photo: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=227505219,1226851763&fm=27&gp=0.jpg',
      type: 2,
      root: root[2]
    }
  }
  return [200, data]
})

mock.onGet('/api/EmployeeList').reply(function (config) {
  let params = JSON.parse(config.data)
  let page = params.page
  let pageSize = params.pageSize
  let data = {
    code: 200,
    count: EmployeeList.data.length,
    data: []
  }
  data.data = EmployeeList.data.slice(page * pageSize, pageSize + page * pageSize)
  return [200, data]
})
mock.onPost('/api/addEmployee').reply(function (config) {
  let params = JSON.parse(config.data)
  console.log(params.data.name)
  params.data['id'] = new Date() * 1
  params.data['state'] = 1
  EmployeeList.data.unshift(params.data)
  let data = {
    code: 200,
    msg: '添加成功'
  }
  return [200, data]
})
mock.onPost('/api/deleteEmployee').reply(function (config) {
  let id = JSON.parse(config.data).params.id
  for (let i = 0; i < EmployeeList.data.length; i++) {
    if (EmployeeList.data[i].id === id) {
      EmployeeList.data.splice(i, 1)
    }
  }
  let data = {
    code: 200,
    msg: '删除成功'
  }
  return [200, data]
})
