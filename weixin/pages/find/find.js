//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    list: [
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G1/M00/37/01/Cii9EVdzbHmIafDUAB0tJGSFBbsAAGzbQFVP0sAHS08882_w640_h0_c0_t0.jpg",
        "title": "欧乐堡梦幻世界",
        "cont": "以欧洲经典风景为基础，让你不出门就能领略纾解各地的风采"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G4/M00/4C/B0/Cii-VVm8h5WIIZEGAC4lEOKLt_UAABR3ABiNkgALiUo912_w640_h0_c0_t0.jpg",
        "title": "欧乐堡水上世界",
        "cont": "以欧洲经典风景为基础，让你不出门就能领略纾解各地的风采"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G2/M00/25/CF/Cii-Tlg370SIcPu_AAN-qxMDgy8AAE20wGPIFcAA37D575_w640_h0_c0_t0.png",
        "title": "蓬莱海洋极地世界",
        "cont": "以欧洲经典风景为基础，让你不出门就能领略纾解各地的风采"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G2/M00/55/5E/Cii-T1jUvQGILaa5AAl6wx0zuAMAAIwsgKNwTUACXrb971_w640_h0_c0_t0.jpg",
        "title": "蓬莱海洋水上世界",
        "cont": "以欧洲经典风景为基础，让你不出门就能领略纾解各地的风采"
      },
      {
        "url": "https://m.tuniucdn.com/filebroker/cdn/res/d4/36/d436522922f6d09f199f8674e8f416e5_w640_h0_c0_t0.jpg",
        "title": "蓬莱海洋梦幻世界",
        "cont": "以欧洲经典风景为基础，让你不出门就能领略纾解各地的风采"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G2/M00/6D/91/Cii-T1jl9IGIYvfGAB2hmqWStwsAAJCTgK_xgUAHaGy610_w640_h0_c0_t0.jpg",
        "title": "欧乐堡水上乐园",
        "cont": "以欧洲经典风景为基础，让你不出门就能领略纾解各地的风采"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G1/M00/BE/82/Cii9EVad3neIKEtsAN0ZyNaG-wUAABh6QAAAAAA3Rng222_w640_h0_c0_t0.jpg",
        "title": "欧乐堡水上世界",
        "cont": "以欧洲经典风景为基础，让你不出门就能领略纾解各地的风采"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G4/M00/13/A2/Cii_J1mf6R-Ia83EAAgvdrOXEoEAAAajALUGHUACC-O925_w640_h0_c0_t0.jpg",
        "title": "蓬莱岛欢乐谷",
        "cont": "以欧洲经典风景为基础，让你不出门就能领略纾解各地的风采"
      }
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
