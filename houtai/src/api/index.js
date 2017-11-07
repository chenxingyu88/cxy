import {Random} from 'mockjs'

let EmployeeList = {
  code: 0,
  data: []
}
for (let i = 0; i < 100; i++) {
  EmployeeList.data.push({
    id: Random.id(),
    name: Random.cname(),
    phone: Random.float(),
    state: Random.float(0, 1, 0, 0) + '',
    education: Random.ctitle(3, 5),
    isCard: Random.id(),
    sex: Random.float(0, 1, 0, 0) + ''
  })
}
export {
  EmployeeList
}
