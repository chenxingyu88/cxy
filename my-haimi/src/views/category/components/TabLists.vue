<template>
  <div class="tab-list">
    <a href="#" v-for='(item, index) in list' :key='index' @click='tab(index)' :class='{active:tabflg === index}'>{{item}}</a>
  </div>

</template>

<script>

export default {
  name: 'tabList',
  data () {
    return {
      list: ['分类', '品牌'],
      tabflg: 0
    }
  },
  methods: {
    tab (index) {
      this.tabflg = index
      this.$emit('tabList', index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.tab-list{
  width: 100%;
  height: 0.43rem;
  line-height: .43rem;
  text-align: center;
  a{
     padding:.05rem .1rem;
     font-size: .14rem;
     margin: 0 .05rem;
     color: #242424;
     &.active{
       border-bottom: 2px solid #242424;
     }
  }
}
</style>
