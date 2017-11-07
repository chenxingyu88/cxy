<template>
  <div class="wrap">
    <Search></Search>
    <TabMenu @tabIn='tablist'></TabMenu>
    <section v-show='tabFlg === 0'>
      <Banner></Banner>
      <Navs></Navs>
      <EveryDay></EveryDay>
      <CommodityList :commodityList='commodityList' :tabFlg='tabFlg'></CommodityList>
    </section>
    <section v-show='tabFlg === 1'>
      <CommodityList :commodityList='commodityList' :tabFlg='tabFlg'></CommodityList>
    </section>
    <section  v-show='tabFlg === 2'>
      <CommodityList :commodityList='commodityList' :tabFlg='tabFlg'></CommodityList>
    </section>
    <section  v-show='tabFlg === 3'>
      <CommodityList :commodityList='commodityList' :tabFlg='tabFlg'></CommodityList>
    </section>
    <section  v-show='tabFlg === 4'>
      <CommodityList :commodityList='commodityList' :tabFlg='tabFlg'></CommodityList>
    </section>
    <section  v-show='tabFlg === 5'>
      <CommodityList :commodityList='commodityList' :tabFlg='tabFlg'></CommodityList>
    </section>
    <section  v-show='tabFlg === 6'>
      <CommodityList :commodityList='commodityList' :tabFlg='tabFlg'></CommodityList>
    </section>
    <section  v-show='tabFlg === 7'>
      <CommodityList :commodityList='commodityList' :tabFlg='tabFlg'></CommodityList>
    </section>
    <section  v-show='tabFlg === 8'>
      <CommodityList :commodityList='commodityList' :tabFlg='tabFlg'></CommodityList>
    </section>
    <section  v-show='tabFlg === 9'>
      <CommodityList :commodityList='commodityList' :tabFlg='tabFlg'></CommodityList>
    </section>
    <FooterBar></FooterBar>
  </div>

</template>

<script>
import FooterBar from '@/components/FooterBar'
import Search from './components/Search'
import TabMenu from './components/TabMenu'
import Banner from './components/Banner'
import Navs from './components/Navs'
import EveryDay from './components/EveryDay'
import CommodityList from '@/components/CommodityList'
export default {
  name: 'Webapp',
  data () {
    return {
      commodityList: [],
      tabFlg: 0
    }
  },
  components: {
    FooterBar,
    Search,
    TabMenu,
    Banner,
    Navs,
    EveryDay,
    CommodityList
  },
  methods: {
    tablist (index) {
      this.tabFlg = index
    },
    getCommodityList () {
      this.$store.dispatch('commodity/getCommodityList', {
        cityId: 12345,
        type: 1
      }).then(
        (data) => {
          this.commodityList = data
        },
        () => {
        }
      )
    }
  },
  created () {
    this.getCommodityList()
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.wrap{
    font-size: 20px;
    overflow-x: hidden;
    background: #e2e2e2;
    width: 100%;
}
</style>
