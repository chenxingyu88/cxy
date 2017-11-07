<template>
  <div class="classify">
    <div class="classify_list" v-for='(item, index) in list' :key='index'>
      <div class="pic"><img :src="item.images" alt=""></div>
      <div class="navList">
          <span v-for='(items, indexs) in item.list' :key='indexs'>{{items}}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'classify',
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
.classify{
  width: 100%; 
  background: #fff;
  padding-bottom: .5rem;
  .classify_list{
    .pic{
        width: 100%;
        height: 1.4rem;
        img{
            width: 100%;
            height: 1.4rem;
        }
    }
    .navList{
        display: flex;
        flex-wrap:wrap;
        margin-top: .16rem;
        span{
            padding: .06rem .1rem;
            border: 1px solid #e5e5e5;
            font-size: .16rem;
            margin: 0 0 .16rem .16rem;
        }
    }
  }
}
</style>
