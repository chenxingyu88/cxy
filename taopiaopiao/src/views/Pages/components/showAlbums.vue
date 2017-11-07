<template>
<div class="show-albums">
  <h3>视频和剧照</h3>
  <ul class="show-preview-item">
    <swiper :options="swiperOption" ref="mySwiper" class="movie-banner">
      <swiper-slide v-for="(item,index) in banners" :key="index" class="swiper-slide">
        <li><img src="" alt=""></li>
      </swiper-slide>
    </swiper>
  </ul>
  <p>查看全部597张剧照</p>
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
      swiperOption: {
        initialSlide: 2,
        pagination: '.swiper-pagination',
        slidesPerView: 1.7,
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
.show-albums{
    margin-top: .1rem;
    background: #fff;
    h3{
      color: #000;
      font-size: .15rem;
      padding-top: .15rem ;
      padding-left: .15rem;
    }
    .show-preview-item{
      padding:.15rem;
      display: flex;
      li{
        width: 2rem;
        height: 1.2rem;
        img{
          display: block;
          width: 2rem;
          height: 1.2rem;
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
