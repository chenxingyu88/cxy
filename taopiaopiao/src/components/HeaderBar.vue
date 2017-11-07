<template>
  <header class="header-bar">
    <div class="icon-group left-group">
      <slot name="left-group"></slot>
    </div>
    <h2 class="header-title">{{title}}</h2>
    <div class="icon-group right-group">
      <slot name="right-group"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header-bar{
  height: .4rem;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid #ccc;
  .header-title{
    text-align: center;
    font-size: .16rem;
    color:#444;
  }
  .icon-group{
    height: .4rem;
    padding: 0 0.1rem;
    display: inline-block;
    line-height: .4rem;
    a{
      font-size:0.12rem;
      color:#ccc;
    }
    &.left-group{
      float: left;
    }
    &.right-group{
      float: right;
    }
    img{
      display: inline-block;
      width: 0.25rem;
      height: .25rem;
      position: relative;
      top: .06rem;
    }
  }
}
</style>
