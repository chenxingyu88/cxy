<template>
  <div class="page">
    <HeaderBar>
      <SelectCity class="left-group" slot="left-group"></SelectCity>
      <SearchMenu slot="right-group" @flgs="flgs"></SearchMenu>  
    </HeaderBar>
     <Selector v-show="msg == 'selector'" @cancel='flg2' :defaults='defaults'></Selector> 
    <!-- <FilterBar v-show="msg == 'selector'" @cancel='flg2'></FilterBar> -->
    <Search v-show="msg == 'search'" @cancel='flg2'></Search>
    <section>
      <div class="filter-show" v-show='val'>
         <span>已选：{{val}}</span>
         <span @click='hide'>取消筛选</span>
      </div>
      <MovieMainList :movieMainList='movieMainList'></MovieMainList>
    </section>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
import SelectCity from '@/components/SelectCity'
import MovieMainList from '@/components/MovieMainList'
import SearchMenu from './components/SearchMenu'
import Selector from './components/Selector'
import FilterBar from './components/FilterBar'
import Search from './components/Search'

export default {
  name: 'hello',
  data () {
    return {
      title: '影院',
      msg: '',
      val: false,
      page: 0,
      pageSize: 20,
      movieMainList: [],
      defaults: 0
    }
  },
  components: {
    FooterBar,
    HeaderBar,
    SearchMenu,
    MovieMainList,
    Selector,
    FilterBar,
    Search,
    SelectCity
  },
  methods: {
    tabList (index) {
      this.title = '首页' + index
    },
    flgs (type) {
      this.msg = type
    },
    flg2 (type) {
      this.msg = ''
      this.val = type
    },
    hide () {
      this.val = false
      this.defaults++
    },
    getMovieMainList () {
      this.flg = false
      this.$axios.get('/api/movieMainList', {
        params: {
          cityId: 12345,
          page: this.pages,
          pageSize: this.pageSize
        }
      }).then((response) => {
        this.movieMainList = this.movieMainList.concat(response.data.data)
        this.flg = true
      }).catch((error) => {
        console.log(error)
        this.flg = true
      })
    }
  },
  watch: {
    '$route': (to, from) => {
      // console.log(to, from)
    }
  },
  created () {
    this.getMovieMainList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.page{
    font-size: 20px;
    padding-top: .4rem;
}
section{
  width: 100%;
  height: 100%;
  .filter-show{
    width: 100%;
    height: 0.4rem;
    line-height: .4rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 .2rem;
    span{
      color: #8a869e;
      font-size: .14rem;
      
    }
  }
}


</style>
