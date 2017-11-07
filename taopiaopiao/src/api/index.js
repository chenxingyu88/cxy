import {Random} from 'mockjs'
let getShowsByCityCode = {
  code: 0,
  data: []
}
let getMovieMainList = {
  code: 0,
  data: []
}
for (let i = 0; i < 100; i++) {
  let type = Random.integer(1, 2)
  if (type === 1) {
    getShowsByCityCode.data.push({
      name: Random.csentence(3, 10),
      star: Random.string('★', 1, 10),
      director: Random.cname(),
      images: Random.dataImage('65x90'),
      leadingRole: [Random.cname(), Random.cname(), Random.cname()],
      remark: Random.float(0, 10, 1, 1),
      type: '购票',
      colo: '#ff4d64'
    })
  } else {
    getShowsByCityCode.data.push({
      name: Random.csentence(3, 10),
      director: Random.cname(),
      images: Random.dataImage('65x90'),
      leadingRole: [Random.cname(), Random.cname(), Random.cname()],
      personNum: Random.natural(0, 10000),
      data: Random.date('yyyy-MM-dd'),
      type: '预购',
      colo: '#37b7ff'
    })
  }
}
for (let i = 0; i < 100; i++) {
  getMovieMainList.data.push({
    title: Random.csentence(10),
    price: Random.float(60, 100, 1, 2),
    address: Random.county(true)
  })
}
export default {
  getShowsByCityCode,
  getMovieMainList
}
