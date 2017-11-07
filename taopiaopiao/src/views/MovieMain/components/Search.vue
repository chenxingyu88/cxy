<template>
  <div class="search-box">
      <p><input type="text" placeholder="影院名称或地址"><span @click='flg()'>取消</span></p>  
  </div>
</template>
<script>
export default {
  data () {
    return {
      txt: 'true'
    }
  },
  methods: {
    flg () {
      this.$emit('cancel')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.search-box{
    // display: none;
    padding-top: .5rem;
    position: fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
    height: 100%;
    background: #fff;
    z-index: 99999999;
    padding:.15rem; 
    input{
        width: 80%;
        line-height: 160%;
        border: none;
        font-size: .12rem;
        height: 25px;
        border:1px solid #ccc;
    }
    span{
        font-size: .16rem;
        margin-left: .1rem;
    }
}
</style>
