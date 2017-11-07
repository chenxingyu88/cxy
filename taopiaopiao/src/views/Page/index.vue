<template>
  <div class="details">
    <div class="boxtop">
      <h1>星美国际影商城上海松江店</h1>
      <h4>松江区环城路555号LOMO玩库3楼</h4>
      <p><span>退票</span><span>改签</span><span>3D眼镜</span><span>儿童优惠</span></p>
      <div class="deinfo">
        <span>联名卡送影票</span>
        <span>申请浦发信用卡专享</span>
      </div>
    </div>
    <div class="imgbox">
      <swiper :options="swiperOption" ref="mySwiper" class="bannerswiper">
      <!-- slides -->
      <swiper-slide v-for="(items,index) of imgdata" :key="index"><img :src="items" alt="" style="margin:0 -100px"></swiper-slide>
      </swiper>   
    </div>
    <div class="boxbottom">
        <p>蜘蛛侠：英雄归来<span>650510人想看</span></p>
        <p>133分钟 | 动作 | 汤姆·赫兰德 小罗伯特·唐尼 玛丽莎·托梅</p>
        <div class="tabbox">
          <ul>
            <li>今天09-06</li>
            <li>明天09-07</li>
            <li>后天09-08</li>
          </ul>
          <div class="cont">
             今天暂无次场
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'details',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      imgdata: ['https://gw.alicdn.com/i4/TB1jw_xSpXXXXX3aFXXXXXXXXXX_.jpg_110x10000Q75.jpg', 'https://gw.alicdn.com/i4/TB1KXM8SFXXXXaIaXXXXXXXXXXX_.jpg_110x10000Q75.jpg', 'https://gw.alicdn.com/i1/TB1SI3SSXXXXXagXVXXXXXXXXXX_.jpg_110x10000Q75.jpg', 'https://gw.alicdn.com/i4/TB1SjYYSpXXXXaBapXXXXXXXXXX_.jpg_110x10000Q75.jpg', 'https://gw.alicdn.com/i1/TB1TtbBawsSMeJjSspeXXa77VXa_.jpg_110x10000Q75.jpg', 'https://gw.alicdn.com/i3/TB1W5y7SFXXXXXgapXXXXXXXXXX_.jpg_110x10000Q75.jpg'],
      swiperOption: {
        notNextTick: true,
        autoplay: 1000,
        loop: true,
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: 10,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        debugger: true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.imgbox{
    width: 100%;
    height: 1rem;
    background-color: #333;
    .swiper-slide{
      width: 67rem;
      height: 0.94rem;
    }  
    .bannerswiper{
            width: 100%;
            height: 100%;
            img{
              width: .66rem;
              height: .94rem;
            }     
          }
 }
 .boxtop{
   text-align:left;
   box-sizing:border-box;
   padding: .1rem;
   h1{
     font-weight: 700;
    color: #222227;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .16rem;
   }
   h4{
     color: #8a869e;
      width: auto;
      font-weight: 400;
      font-size: .12rem;
      margin: .05rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
   }
   p{
     width: 100%;
     span{
       display: inline-block;
        color: #80c0e4;
        text-align: center;
        border: 1px solid #80c0e4;
        font-size: .1rem;
        border-radius: .4rem;
        padding: 0rem .05rem;
         margin-right: .02rem;
     }
   }
   .deinfo{
     background-color: #f3f9fd;
     color: #65b1db;
     width: 100%;
     height: .4rem;
     text-align:left;
     border:#65b1db;
     margin: .1rem 0;
     font-size: .1rem;
     box-sizing:border-box;
     padding: .05rem .1rem;
     span{
       display: block;
     }
   }
 }
 .boxbottom{
   width: 100%;
   p{
     width: 100%;
     color: #333;
     font-size: .17rem;
     font-weight: 800;
     margin: .02rem 0;
     span{
       font-size: .1rem;
       color: #fea54c;
       font-weight: 400;
       margin-left:.05rem;
     }
     &:nth-of-type(2){
       color: #8a869e;
       font-size: .12rem;
     }
   }
   .tabbox{
     width: 100%;
     ul{
       width: 100%;
       height: 0.3rem;
       border-top:1px solid #eee;
       border-bottom:1px solid #eee;
       display: flex;
       li{
         float: left;
         flex:1;
         line-height: .3rem;
         &:nth-of-type(1){
              border-bottom: 1px solid #ff4d64;
              color: #ff4d64;
         }
       }
     }
     .cont{
       width: 100%;
       height: 0.4rem;
       line-height: .4rem;
     }
   }
 }
</style>
