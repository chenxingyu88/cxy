<template>
  <div class="wrap">
    <TabList @tabList='tabList'></TabList>
    <Classify v-show='tabFlg === 0' :list='list'></Classify>
    <Brand v-show='tabFlg === 1' :list='list'></Brand>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import TabList from './components/TabLists'
import Classify from './components/Classify'
import Brand from './components/Brand'
export default {
  name: 'Category',
  data () {
    return {
      tabFlg: 0,
      list: []
    }
  },
  components: {
    FooterBar,
    TabList,
    Classify,
    Brand
  },
  methods: {
    tabList (index) {
      this.tabFlg = index
    },
    getClassifyList () {
      this.$store.dispatch('classify/getClassifyList', {
        type: this.tabFlg
      }).then(
        (data) => {
          this.list = data
        },
        () => {
        }
      )
    }
  },
  created () {
    this.getClassifyList()
  },
  watch: {
    'tabFlg': function () {
      this.getClassifyList()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.wrap{
    font-size: 20px;
}
</style>
