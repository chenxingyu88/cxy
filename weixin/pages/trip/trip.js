//logs.js
const util = require('../../utils/util.js')

let col1H = 0;
let col2H = 0;
Page({
  data: {
    imgUrls: [     "https://m.tuniucdn.com/filebroker/cdn/prd/97/ad/97ad17aa2b0e93bdf6e80917f9374a0a_w640_h0_c0_t0.jpg",
      "https://m.tuniucdn.com/fb2/t1/G2/M00/10/81/Cii-TFihR_aIaQdcAB2iuz71K2wAAHKDwJdiyEAHaLT61_w640_h0_c0_t0.jpeg",
      "https://m.tuniucdn.com/fb2/t1/G4/M00/13/A2/Cii_J1mf6R-Ia83EAAgvdrOXEoEAAAajALUGHUACC-O925_w640_h0_c0_t0.jpg",
      "https://m.tuniucdn.com/fb2/t1/G1/M00/F1/51/Cii9EFkAaPWITKsSAAt1ZKAAH0cAAJzuADobzEAC3V8932_w640_h0_c0_t0.jpg",
      'https://m.tuniucdn.com/fb2/t1/G2/M00/4C/9A/Cii-TlhKdriIHQcJAAtL5jHQpFEAAFWhgKHRzQAC0v-174_w640_h0_c0_t0.jpg',
      'https://m.tuniucdn.com/fb2/t1/G1/M00/BE/82/Cii9EVad3neIKEtsAN0ZyNaG-wUAABh6QAAAAAA3Rng222_w640_h0_c0_t0.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    scrollH: 0,
    imgWidth: 0,
    loadingCount: 0,
    images: [],
    col1: [],
    col2: []
  },
  onLoad: function () {
    wx.getSystemInfo({
      success: (res) => {
        let ww = res.windowWidth;
        let wh = res.windowHeight;
        let imgWidth = ww * 0.48;
        let scrollH = wh;

        this.setData({
          scrollH: scrollH,
          imgWidth: imgWidth
        });

        this.loadImages();
      }
    })
  },

  onImageLoad: function (e) {
    let imageId = e.currentTarget.id;
    let oImgW = e.detail.width;         //图片原始宽度
    let oImgH = e.detail.height;        //图片原始高度
    let imgWidth = this.data.imgWidth;  //图片设置的宽度
    let scale = imgWidth / oImgW;        //比例计算
    let imgHeight = oImgH * scale;      //自适应高度

    let images = this.data.images;
    let imageObj = null;

    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if (img.id === imageId) {
        imageObj = img;
        break;
      }
    }

    imageObj.height = imgHeight;

    let loadingCount = this.data.loadingCount - 1;
    let col1 = this.data.col1;
    let col2 = this.data.col2;

    if (col1H <= col2H) {
      col1H += imgHeight;
      col1.push(imageObj);
    } else {
      col2H += imgHeight;
      col2.push(imageObj);
    }

    let data = {
      loadingCount: loadingCount,
      col1: col1,
      col2: col2
    };

    if (!loadingCount) {
      data.images = [];
    }

    this.setData(data);
  },

  loadImages: function () {
    let images = [
      { pic: "../../image/6.png", height: 0 },
      { pic: "../../image/7.png", height: 0 },
      { pic: "../../image/8.png", height: 0 },
      { pic: "../../image/9.png", height: 0 },
      { pic: "../../image/10.png", height: 0 },
      { pic: "../../image/11.png", height: 0 },
      { pic: "../../image/12.png", height: 0 },
      { pic: "../../image/13.png", height: 0 },
      { pic: "../../image/14.png", height: 0 }      
    ];

    let baseId = "img-" + (+new Date());

    for (let i = 0; i < images.length; i++) {
      images[i].id = baseId + "-" + i;
    }

    this.setData({
      loadingCount: images.length,
      images: images
    });
  }
})
