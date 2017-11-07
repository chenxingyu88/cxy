<template>
  <div class="brand">
      <dl class="brand_list" v-for='(item, index) in list' :key='index'>
        <dt><img :src="item.images" alt=""></dt>
        <dd><div class="title">{{item.title}}</div><p>{{item.text}}</p></dd>
      </dl>
  </div>
</template>

<script>

export default {
  name: 'brand',
  data () {
    return {
    }
  },
  props: ['list'],
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.brand{
  width: 100%;
  background: #fff;
  display: flex;
  flex-wrap:wrap;
  .brand_list{
    width: 33%;
    height: 1.8rem;
    dt{
      width: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    dd{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
      .title{
        color:#333;
        font-size: .14rem;
      }
      p{
        width: 100%;
        color:#999;
        font-size: .14rem;
        padding: 0 .1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
