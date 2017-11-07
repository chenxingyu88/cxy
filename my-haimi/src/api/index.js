import {Random} from 'mockjs'
let getCommodityList = {
  code: 0,
  data: []
}
let menuList = ['推荐', '居家', '美妆', '个护', '箱包', '家电', '厨房', '饰配', '零食', '母婴']

for (let j = 0; j < menuList.length; j++) {
  let obj = {}
  obj.type = menuList[j]
  obj.list = []
  for (let i = 0; i < 30; i++) {
    obj.list.push({
      images: Random.dataImage('375x375'),
      title: Random.ctitle(20),
      price: Random.float(60, 100, 1, 2)
    })
  }
  getCommodityList.data.push(obj)
}

let classifyList = {
  code: 1,
  data: []
}
for (let i = 0; i < 20; i++) {
  classifyList.data.push({
    images: Random.dataImage('375x140'),
    list: [Random.cword(2, 3), Random.cword(2, 3), Random.cword(2, 3), Random.cword(2, 3), Random.cword(2, 4), Random.cword(2, 3), Random.cword(2, 3), Random.cword(2, 3)]
  })
}

let brandList = {
  code: 2,
  data: []
}
for (let i = 0; i < 30; i++) {
  brandList.data.push({
    images: Random.dataImage('400x400'),
    title: Random.cword(2, 4),
    text: Random.csentence(8)
  })
}

export default {
  getCommodityList,
  classifyList,
  brandList
}
