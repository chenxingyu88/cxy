<template>
  <div class="page">
    <HeaderBar>
      <SelectCity class="left-group" slot="left-group" @selectCity='selectCity'></SelectCity> 
      <TabMenu slot="right-group" @tabList='tabList'></TabMenu>
    </HeaderBar>
    <section v-show='tabFlg == 0'>
      <Banner></Banner>
      <MovieList :movieLists='movieLists'  v-scrollDown='scrollLoad'></MovieList>
    </section>
     <section v-show='tabFlg == 1'>
      即将上映
      <MovieList :movieLists='movieLists'></MovieList>
    </section>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
import MovieList from '@/components/MovieList'
import SelectCity from '@/components/SelectCity'
import TabMenu from './components/TabMenu'
import Banner from './components/Banner'
import {mapGetters} from 'vuex'

export default {
  name: 'movie',
  data () {
    return {
      title: '',
      tabFlg: 0,
      city: '',
      movieLists: [],
      cityId: 0,
      pages: 0,
      pageSize: 10,
      flg: true,
      keepAlive: true,
      addss: ''
    }
  },
  components: {
    HeaderBar,
    TabMenu,
    Banner,
    FooterBar,
    MovieList,
    SelectCity
  },
  methods: {
    tabList (index) {
      this.tabFlg = index
    },
    selectCity (city) {
      this.city = city
    },
    getMovieList () {
      this.flg = false
      this.$store.dispatch('movie/getMovieList', {
        cityId: 12345,
        pages: this.pages,
        pageSize: this.pageSize,
        type: 1
      }).then(
        (data) => {
          this.flg = true
          this.movieLists = data
          console.log(data)
        },
        () => {
          this.flg = true
        }
      )
    },
    scrollLoad () {
      if (this.tabFlg === 0) {
        if (!this.keepAlive) return
        if (this.flg) {
          this.pages = this.pages + 1
          this.getMovieList()
        }
      }
    }
  },
  computed: {
    ...mapGetters('movie/', [
      'movieList'
    ]),
    ...mapGetters('user', [
      'getUserInfo'
    ])
  },
  watch: {
    '$route': (to, from) => {
      // console.log(to, from)
    },
    'city': function () {
      console.log('刷新数据')
      this.getMovieList()
    }
  },
  created () {
    this.getMovieList()
  },
  activated () {
    console.log('组件启用')
    this.keepAlive = true
  },
  deactivated () {
    this.keepAlive = false
    console.log('组件停用')
  },
  destroyed () {
    console.log('销毁首页')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

.page{
  padding-top: .4rem;
  font-size: 20px;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
}
section{
  width: 100%;
  height: 100%;
}

</style>
