//index.js
//获取应用实例
const app = getApp()
var mythis;
Page({
  data: {
    list:[
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G1/M00/17/2B/Cii9EFkcJdyITDv0AMg1C4ZO7wkAAKSeAFauGQAyDUj916_w640_h0_c0_t0.jpg",
        "title":"标准大床房"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G2/M00/C0/91/Cii-Tlh3ONKIe4qwABQQDc61CvAAAGsRALhM1AAFBAl524_w640_h0_c0_t0.jpg",
        "title": "家庭三人间"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G2/M00/4B/7E/Cii-Tle_rOaIOtrSACdzrOjM6yoAABu8QCLPboAJ3PE031_w640_h0_c0_t0.png",
        "title": "家庭四人间"
      },
      {
        "url": "https://m.tuniucdn.com/fb2/t1/G2/M00/08/21/Cii-T1ia2ZGIc1scABXz--xnKMAAAHEEgNwfkIAFfQT800_w640_h0_c0_t0.jpg",
        "title": "家庭五人间"
      }
    ],
    bodyList: [
      {
        id: 1,
        title: "标准客房"
      },
      {
        id: 2,
        title: "家庭套房"
      },
      {
        id: 3,
        title: "商务套房"
      }, {
        id: 4,
        title: "单人间"
      }, {
        id: 5,
        title: "双人间"
      }, {
        id: 6,
        title: "大床房"
      }, {
        id: 7,
        title: "普通客房"
      }, {
        id: 8,
        title: "其他"
      }
    ],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },
  onLoad: function (param) {
    mythis = this;
    wx.getSystemInfo({
      success: function (res) {
        mythis.setData({
          windowHeight: res.windowHeight - 51, windowWidth: res.windowWidth, sliderLeft: 8, sliderOffset: res.windowWidth / mythis.data.bodyList.length * mythis.data.activeIndex
        });
      }
    })
  },

  tabClick: function (e) {
    var id = e.currentTarget.id;
    mythis.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: id,
    });
  }
})

