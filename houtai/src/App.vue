<template>
  <div id="app" v-if="$route.path != '/login'">
    <HeaderBar></HeaderBar>
    <div class="menu">
      <el-menu default-active="2" @open="handleOpen" @close="handleClose" :router='true'>
        <template v-for='(item, index) in $router.options.routes'>
          <el-submenu :key='index' :index='index + ""' v-if='item.children'>
            <template slot="title" :route="{name: item.name}">
              <i class="el-icon-message"></i>{{item.meta.title}}
            </template>
            <el-menu-item :route="{name: items.name}" index="index + '-' + indexs" v-for='(items, indexs) in item.children' :key='indexs'>
              {{items.meta.title}}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else-if="item.name != 'Login'" :route="{name: item.name}" :key='index' :index='index + ""'><i class="el-icon-message"></i>{{item.meta.title}}</el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="cont">
      <router-view></router-view>
    </div>
  </div>
  <div id="app" v-else>
    <router-view></router-view>
  </div>
</template>

<script>
import '@/static/css/reset.css'
import './static/font/iconfont.css'

import HeaderBar from '@/components/HeaderBar'
export default {
  name: 'app',
  components: {
    HeaderBar
  },
  methods: {
    handleOpen (key, keyPath) {
    },
    handleClose (key, keyPath) {
    }
  },
  created () {
    // console.log(this.$router.options.routes)
  }
}

</script>

<style lang='less'>
#app {
  .menu{
    width: 200px;
    height: 100%;
    position: fixed;
    top:.55rem;
    left:0;
  }
  .cont{
    margin-left: 200px;
    margin-top: .55rem;
  }
}
</style>
