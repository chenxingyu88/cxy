<template>
  <div class="every-day">
    <a href="#" v-for='(item, index) in pic' :key='index'><img :src="item" alt=""></a>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        pic: ['http://img.haimi.com/FgIrSmcEeh_3zG7YZIxHiaQfEuto', 'http://img.haimi.com/Fnzdw3QArWLTW1IhOMkfguiMD0Ks']
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.every-day{
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap:wrap;
  a{
    display: block;
    width: 100%;
    height: 1.17rem;
    img{
      height: 1.17rem;
    }
  }
}
</style>

