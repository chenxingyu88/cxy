<template>
<div class="show-desc">
  <p v-show='flg === "展开"'>影片讲述了年轻的蜘蛛侠彼得·帕克，在钢铁侠的帮助下与终极大反派秃鹰进行斗争的故事。在经历了《美国队长3：内战》中与复仇者联盟成员惊心 ...</p>
  <p v-show='flg === "收起"'>影片讲述了年轻的蜘蛛侠彼得·帕克，在钢铁侠的帮助下与终极大反派秃鹰进行斗争的故事。在经历了《美国队长3：内战》中与复仇者联盟成员惊心动魄的对战后，彼得回到和梅阿姨共同居住的家，并受到新导师托尼·斯塔克的暗中关注。彼得试图回归正常的日常生活，然而却经常被“企图证明自己不仅仅是一位友好邻居蜘蛛侠”的想法扰乱心绪，直到影片中的全新反派秃鹰的出现，对彼得来说重要的一切都开始受到威胁。</p>
  <div class="flg"><span @click='tab()'>{{flg}}</span></div>
</div>
</template>

<script>
export default {
  data () {
    return {
      flg: '展开'
    }
  },
  methods: {
    tab () {
      this.flg = this.flg === '展开' ? '收起' : '展开'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 .show-desc{
     background: #fff;
    p{
      padding:.18rem .15rem;
      color: #333;
      font-size: .14rem;
      line-height: 1.6;
    }
    .flg{
      width: 100%;
      height: 0.4rem;
      line-height: .2rem;
      text-align: center;
      span{
        font-size: .16rem;
        color:#108ee9
      }
    }
  }
</style>
