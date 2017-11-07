<template>
<div class="show-statistics">
      <h3>票房</h3>
      <div class="show-statistics-content">
        <span><b>1</b><i>今日票房排名</i></span>
        <span><b>暂无</b><i>首周票房(万)</i></span>
        <span><b>14356</b><i>首周票房(万)</i></span>
      </div>
      <router-link class="charts" :to='"/charts/"'><p>首周票房(万)</p></router-link>
    </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 .show-statistics{
    margin-top: .1rem;
    background: #fff;
    height: 1.5rem;
    h3{
      color: #000;
      font-size: .15rem;
      padding-top: .15rem ;
      padding-left: .15rem;
    }
    .show-statistics-content{
      width: 100%;
      height: 0.8;
      display: flex;
      span{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        b{
          font-size: .25rem;
          font-weight: 300;
          color: #50505a;
          line-height: 48px;
        }
        i{
         font-size: 12px;
         color: #8a869e;
         font-style: normal;
        }
      }
    }
    .charts{
      width: 100%;
      font-size: 15px;
      color: #37b7ff;
      text-align: center;
      p{
        text-align: center;
        margin-top: .15rem;
      }
    }
  }
   
</style>
