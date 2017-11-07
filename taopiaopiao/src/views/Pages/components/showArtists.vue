<template>
  <div class="show-artists">
    <h3>演职人员</h3>
    <ul class="show-artists-container">
    <swiper :options="swiperOptions" ref="mySwiper" class="show-artist-banner">
      <swiper-slide v-for="(item,index) in banners" :key="index" class="swiper-slide">
        <li><img src="" alt=""><span>乔·沃茨</span><span>导演</span></li>
      </swiper-slide>
    </swiper>
    </ul>
    <p>查看51位演职人员</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '我的',
      banners: [
        {img: ''},
        {img: ''},
        {img: ''},
        {img: ''},
        {img: ''},
        {img: ''},
        {img: ''},
        {img: ''}
      ],
      swiperOptions: {
        initialSlide: 2,
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 10,
        onSlideChangeEnd: swiper => {
          // console.log('onSlideChangeEnd', swiper.realIndex)
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 .show-artists{
    margin-top: .1rem;
    background: #fff;
    h3{
      color: #000;
      font-size: .15rem;
      padding-top: .15rem ;
      padding-left: .15rem;
    }
    .show-artists-container{
      padding:.15rem;
      display: flex;
      li{
        img{
          display: block;
          width: 0.87rem;
          height: 1.2rem;
          margin-right: .05rem;
        }
        span{
          display: block;
          width: 100%;
          text-align: center;
          &:nth-of-type(1){
            font-size: .14rem;
            color:#333;
            padding:.05rem 0;
          }
          &:nth-of-type(2){
            font-size: .12rem;
            color:#ccc;
          }
        }
        
      }
    }
    p{
      width: 100%;
      font-size: 15px;
      height: 0.2rem;
      color: #0094ed!important;
      text-align: center;
      padding-bottom: .15rem;
    }
  }
</style>
