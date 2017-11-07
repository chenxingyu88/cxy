<template>
  <div class="pages">
    <showItem></showItem>
    <showDesc></showDesc>
    <showTips></showTips>
    <showArtists></showArtists>
    <showAlbums></showAlbums>
    <showData></showData>
    <showStatistics></showStatistics>
    <div class="btn">
      新人专享抢票{{$route.params.movie_id}}
    </div>
  </div>
</template>

<script>
import showItem from './components/showItem'
import showDesc from './components/showDesc'
import showTips from './components/showTips'
import showArtists from './components/showArtists'
import showAlbums from './components/showAlbums'
import showData from './components/showData'
import showStatistics from './components/showStatistics'
export default {
  name: 'pages',
  components: {
    showItem,
    showDesc,
    showTips,
    showArtists,
    showAlbums,
    showData,
    showStatistics
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .pages{
       
      background: #eee;
      overflow: hidden;
      width: 100%;
      height: 100%;
      padding-bottom: 1rem;
  }
.btn{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.5rem;
  background: #ff4d64;
  text-align: center;
  line-height: .5rem;
  color:#fff;
  font-size: .16rem;
  z-index: 9999;
}
</style>

