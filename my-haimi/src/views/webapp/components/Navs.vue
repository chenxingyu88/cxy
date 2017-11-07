<template>
  <div class="nav_list">
      <a href="#" v-for='(item, index) in navList' :key='index'>
          <img :src='item.url' alt="">
          <span>{{item.text}}</span>
      </a>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    data () {
      return {
        navList: [
          {
            url: 'http://img.haimi.com/FuPMz-_M6cc-EKholObO_ec5niTe',
            text: '新人礼包'
          },
          {
            url: 'http://img.haimi.com/Fvxjun-u3MAa7vGJnbSiCXlFtepB',
            text: '领取积分'
          },
          {
            url: 'http://img.haimi.com/Fi2HlhU6SOQ0GqagPJ1whoJAzg57',
            text: '邀请有奖'
          },
          {
            url: 'http://img.haimi.com/Ft0Vx786oXJADIPEamFGp5vew5KY',
            text: '每周有礼'
          }
        ]
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
.nav_list{
    width: 100%;
    height: .9rem;
    background: #fff;
    display: flex;
    a{
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img{
          display: block;
          width: 1rem;
      }
      span{
          color:#333;
          font-size: .14rem;
          margin-top: .1rem;
      }
    }
}
</style>

