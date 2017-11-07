<template>
  <div class="tab-menu" ref='iscroll'>
    <swiper :options="swiperOptions" class="show-artist-banner">
      <swiper-slide v-for='(item, index) in menuList' :key='index' class="swiper-slide">
        <span @click='addBor(index)' :class='{active: isActive === index}'>{{item}}</span>
      </swiper-slide>
      <div class="swiper-scrollbar"></div>
    </swiper>
  </div>

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Search',
  data () {
    return {
      menuList: ['推荐', '居家', '美妆', '个护', '箱包', '家电', '厨房', '饰配', '零食', '母婴'],
      isActive: 0,
      swiperOptions: {
        slidesPerView: 8,
        scrollbarHide: true,
        centeredSlides: true,
        spaceBetween: 1,
        grabCursor: true,
        scrollerbar: '.swiper-scrollbar'
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    addBor (index) {
      this.isActive = index
      this.$emit('tabIn', index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.tab-menu{
  // position: sticky;
  // left: 0;
  // top:0;
  display: flex;
  width: 100%;
  height: 0.4rem;
  line-height: .4rem;
  .show-artist-banner{
    margin-left: -1.7rem;
    span{
        color: #242424;
        font-size: .14rem;
        height: 0.36rem;
        display: inline-block;
        text-align: center; 
        padding:0 .1rem;
        &.active{
          border-bottom: 2px solid #000;
        }
    }
  }
}
</style>
