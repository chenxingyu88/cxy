<template>
<div class="show-item">
  <dl>
    <dt><img src="https://gw.alicdn.com/i4/TB1dTfubYsTMeJjSsziXXcdwXXa_.jpg_160x160Q75.jpg" alt=""></dt>
    <dd>
      <h3>蜘蛛侠：英雄归来</h3>
      <i>Spider-Man: Homecoming</i>
      <span>动作 冒险 科幻</span>
      <span>美国 | 113分钟</span>
      <span>2017-09-08 在中国大陆上映</span>
      <span>想看人数</span>
      <b>653,124</b>
    </dd>
  </dl>
</div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .show-item{
    width: 100%;
    height: 1.7rem;
    background: #333;
    padding:0 .15rem;
    padding-top: .3rem;
    dl{
      display: flex;
    }
    dt{

      img{
        width: 1.2rem;
        height: 1.65rem;
        display: block;
      }
    }
    dd{
      flex: 1;
      padding-left: .1rem;
      h3{
        color:#fff;
        font-size: .2rem;
      }
      i{
        font-size: .1rem;
        color:#fff;
        display: block;
        margin-bottom: .2rem;
      }
      span{
        font-size: .12rem;
        color:#ccc;
        display: block;
        margin-bottom: .05rem;
      }
      b{
        font-size: .18rem;
        color:#ffa84c;
      }
    }
  }
</style>
