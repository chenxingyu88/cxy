//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G1/M00/37/01/Cii9EVdzbHmIafDUAB0tJGSFBbsAAGzbQFVP0sAHS08882_w640_h0_c0_t0.jpg",
        "title": "蓬莱岛"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G4/M00/4C/B0/Cii-VVm8h5WIIZEGAC4lEOKLt_UAABR3ABiNkgALiUo912_w640_h0_c0_t0.jpg",
        "title": "三仙阁"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G2/M00/25/CF/Cii-Tlg370SIcPu_AAN-qxMDgy8AAE20wGPIFcAA37D575_w640_h0_c0_t0.png",
        "title": "方丈岛"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G2/M00/55/5E/Cii-T1jUvQGILaa5AAl6wx0zuAMAAIwsgKNwTUACXrb971_w640_h0_c0_t0.jpg",
        "title": "逍遥岛"
      },
      {
        "url": "https://m.tuniucdn.com/filebroker/cdn/res/d4/36/d436522922f6d09f199f8674e8f416e5_w640_h0_c0_t0.jpg",
        "title": "桃花岛"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G2/M00/6D/91/Cii-T1jl9IGIYvfGAB2hmqWStwsAAJCTgK_xgUAHaGy610_w640_h0_c0_t0.jpg",
        "title": "大瀑布"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G1/M00/BE/82/Cii9EVad3neIKEtsAN0ZyNaG-wUAABh6QAAAAAA3Rng222_w640_h0_c0_t0.jpg",
        "title": "大海"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G4/M00/13/A2/Cii_J1mf6R-Ia83EAAgvdrOXEoEAAAajALUGHUACC-O925_w640_h0_c0_t0.jpg",
        "title": "蓬莱岛"
      }
    ],
    imgUrls: [
     "http://img.haimi.com/FpGvMWcCqx1epESoEZsnPhkJ1uIF",
     "http://img.haimi.com/FjWQkON-KFjakzJjiTe63AaUA8-l",
     "http://img.haimi.com/FhW3s7fOqKfPWOrrtb4OfKeM6PET",
     "http://img.haimi.com/FktHEInxZc8d852r7MuRQSyzyvXH",
      'http://img.haimi.com/FlMjoZI2DHhNfpXy8LDmrGZOa4L0',
      'http://img.haimi.com/FlMjoZI2DHhNfpXy8LDmrGZOa4L0',
      'http://img.haimi.com/FjCgVMdy6SexvcnknMEMBS0Moj-T'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onPullDownRefresh: function() {
    console.log('下拉成功');
    
  }
})
