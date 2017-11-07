<template>
  <div class="list">
    <div class="title">{{commodityList[tabFlg].type}}</div>
    <div class="list_con">
      <router-link class="list_cons" :to="'/page/'" v-for='(item, index) in commodityList[tabFlg].list' :key='index'>
        <dl>
            <dt><img :src="item.images" alt=""></dt>
            <dd>
                <b>{{item.title}}</b>
                <div class="price">￥{{item.price}}</div>
            </dd>
        </dl>
      </router-link>
    </div>
    
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props: ['commodityList', 'tabFlg'],
    created () {
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.list{
   width: 100%;
   padding-bottom: .7rem;
   .title{
       width: 100%;
       height: 0.5rem;
       line-height: .5rem;
       text-align: center;
       font-size: .16rem;
       background: #e5e5e5;
   }
   .list_con{
     display:flex;
     flex-wrap:wrap;
    .list_cons{
        width: 50%;
    }
     dl{
       width: 100%;
       box-sizing: border-box;
       padding:.02rem;
       overflow-y: hidden;
       dt{
           width: 100%;
           img{
              width: 100%;
           }
       }
       dd{
            margin-top: -.05rem;
            background: #fff;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 0 .15rem;
            box-sizing: border-box;
           b{
              width: 100%;
              font-size: .14rem;
           }
           .price{
               font-size: .12rem; 
           }
       }
   }
   }
   
}
</style>

