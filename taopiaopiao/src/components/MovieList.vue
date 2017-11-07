<template>
  <div class="movie-list">
    <router-link :to="'/pages/'+index" class="movie-list-group" v-for='(item, index) in movieLists' :key='index'>
      <dl>
        <dt><img :src="item.images" alt=""></dt>
        <dd>
          <div class="title">{{item.name}}</div>
          <div class="film-star" v-show='item.type == "购票"'>{{item.star}}<span style="color:#ccc;font-size:.14rem;margin-left:10px;">{{item.remark}}分</span></div>    
          <div class="film-star" v-show='item.type == "预购"'><span>{{item.personNum}}人想看</span><span>| {{item.data}}上映</span></div>    
          <p>导演：{{item.director}}</p>
          <p>主演：{{item.leadingRole}}</p>
          <button :style="{color: item.colo,borderColor:item.colo}">{{item.type}}</button>
        </dd>
      </dl>
      <address>
        <span>新人专享</span><span> | </span>  新人首张特惠，名额有限抢完即止 
      </address>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['movieLists']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.movie-list{
  overflow: hidden;
  padding-bottom: .4rem;
  .movie-list-group{
    position: relative;
    overflow: hidden;
    dl{
      display: flex;
      padding: .15rem;
      dt{
        img{
          display: block;
          width: 0.65rem;
          height: 0.9rem;
        }
      }
      dd{
        flex: 1;
        padding-left: .15rem;
        position: relative;
        .title{
          color:#000;
          font-size: .16rem;
        }
        .film-star{
          font-size: .16rem;
          padding: .06rem 0;
          color:#fea54c;
          span{
            &:nth-of-type(1){
              color:#fea54c;
              font-size: .14rem;
            }
            &:nth-of-type(2){
              color:#8a869e;
              margin-left: .1rem;
              font-size: .14rem;
            }
          }
        }
        p{
          color:#8a869e;
          font-size: .14rem;
        }
        button{
          position: absolute;
          top: .38rem;
          right: .1rem;
          padding: .05rem .1rem;
          border-radius: .05rem;
          background: none;
        }
      }
    }
    address{
      position: relative;
      top:0;
      left:.8rem;
      padding: .1rem 0;
      padding-right: .8rem;
      box-sizing: border-box;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #8a869e;
      font-size: .14rem;
      font-style: normal;
        &::after{
          content:'';
          width: 200%;
          position: absolute;
          height: 1px;
          background: #ccc;
          left:0;
          top:0;
          transform: scale(.5);
          transform-origin: 0 0; 
        }
        span{
          font-size: .14rem;
          font-style: normal;
         
          &:nth-of-type(1){
              color:#fea54c;
          }
          &:nth-of-type(2){
              color:#e5e5e5;
          }
        }
    }
    &::after{
      content:'';
      width: 200%;
      transform: scale(.5);
      transform-origin: 0 0;
      position: absolute;
      height: 1px;
      background: #ccc;
      left: .15rem;
      bottom:0;
    }
  }
}
</style>
