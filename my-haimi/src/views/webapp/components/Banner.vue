<template>
  <swiper :options="swiperOption" ref="mySwiper" class="movie-banner">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in banners" :key="index" class="swiper-slide">
      <img :src="item" alt="">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data () {
      return {
        banners: [
          'http://img.haimi.com/FpzEfBA56Z9PDD39jK4zUU8XCs9a',
          'http://img.haimi.com/Fo2U1Rz9yClEpWce1jo1aATcduFH',
          'http://img.haimi.com/FjCgVMdy6SexvcnknMEMBS0Moj-T'
        ],
        swiperOption: {
          autoplay: 5000,
          initialSlide: 1,
          loop: true,
          pagination: '.swiper-pagination',
          onSlideChangeEnd: swiper => {
            // console.log('onSlideChangeEnd', swiper.realIndex)
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.movie-banner{
  .swiper-slide{
      img{
          display: block;
          width: 100%;
        //   width: 20px;
      }
  }
}
</style>

