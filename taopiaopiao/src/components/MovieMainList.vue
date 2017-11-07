<template>
  <div class="movieMain-list">
    <router-link :to="'/page'" v-for='(item, index) of movieMainList' :key='index'>
      <div class="movieMain-item">
        <div class="title">
            <h3>{{item.title}}</h3>
            <span><i>{{item.price}}</i>元起</span>
        </div>
        <address>{{item.address}}</address>
        <div class="btn">
            <button>退票</button>
            <button>改签</button>
        </div>
        <div class="newPerson">
            <i>新</i><span>新人专享</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  props: ['movieMainList']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.movieMain-list{
    overflow: hidden;
  .movieMain-item{
    padding:.15rem;
    padding-left: .2rem;
    position: relative;
    .title{
      display: flex;
      width: 100%;
      height: 0.24rem;
      line-height: .24rem;
      h3{
        color: #222227;
        font-size: .16rem;
        flex:1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      span{
          font-size: .12rem;
          flex:1;
          font-style: normal;
          
          i{
            color: #ff4d64;
            font-style: normal;
          }
      }
    }
    address{
       color: #8a869e;
       font-size: .12rem;
       font-style: normal;
       margin: .03rem 0;
    }
    .btn{
        button{
           padding:.014rem .04rem;
           line-height: 1;
           background:none;
           font-size: .075rem;
           font-size: .12rem;
           color: #7ab5e0;
           border: 1px solid #7ab5e0;
           border-radius: .07rem;

        }
    }
    .newPerson{
      i{
         display: inline-block;
         width: 0.15rem;
         height: 0.15rem;
         text-align: center;
         line-height: .15rem;
         background: #fe7a4c;
         color: #fff;
         font-size: .12rem;
         font-style: normal;
         margin-right: .05rem;
      }
      span{
        color: #8a869e;
        font-size: .12rem;
      }
    }
    &::after{
      content:"";
      width: 200%;
      height: 1px;
      background: #ccc;
      position: absolute;
      left: 0.1rem;
      bottom:0;
      transform: scale(.5);
      transform-origin: 0 0;
    }
  }
}
</style>
