<template>
  <div class="selector-box">
    <div v-for='(item,  index) in menuList' :key='index'>
      <div class="title"><h3>{{item.type}}</h3><span>{{item.defaults}}</span></div>
      <ul class="selector-list">
        <li v-for="(items, indexs) in item.arr" :key='indexs'>
          <input  v-model='item.defaults' :value='items' :id='item.name + indexs' type="radio" name='item.name'>
          <label :class='{active:item.defaults === items}' :for='item.name + indexs'>{{items}}</label>
        </li>
      </ul>
    </div> 
    <div class="btn"><button @click='flg()'>取消</button><button @click='success()'>确定</button></div>   
  </div>
</template>
<script>
import Radio from '@/components/Radio'

export default {
  data () {
    return {
      menuList: [
        {
          type: '区域',
          name: 'area',
          arr: ['宝山区', '崇明县', '奉献区', '虹口区', '黄埔区', '嘉定区', '静安区', '金山区', '路网去', '名新区', '浦东区', '普陀区', '青浦区', '松江区', '徐汇区', '烟垢去', '闸北区', '长宁区'],
          defaults: '不限'
        },
        {
          type: '特色',
          name: 'feature',
          arr: ['退票', '改签', '观影消食', 'IMAX', '巨幕厅', 'realD厅', '4K厅', '4DX厅', '4D厅', '双机3D厅'],
          defaults: '不限'
        }
      ]
    }
  },
  props: ['defaults'],
  components: {
    Radio
  },
  methods: {
    flg () {
      this.$emit('cancel')
      this.menuList[0].defaults = '不限'
      this.menuList[1].defaults = '不限'
    },
    success () {
      let area = this.menuList[0].defaults
      let feature = this.menuList[1].defaults
      this.$emit('cancel', area + ' ' + feature)
    }
  },
  watch: {
    'defaults': function () {
      this.menuList[0].defaults = '不限'
      this.menuList[1].defaults = '不限'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.selector-box{
    position: fixed;
    left:0;
    top:.5rem;
    bottom:0;
    right:0;
    height: 100%;
    background: #fff;
    z-index: 999999;
    padding:.15rem; 
    .title{
        margin-top: .1rem;
        h3{
            color:#50505a;
            font-size: .14rem;
            display: inline-block;
        }
        span{
            font-size: .12rem;
            color:#ff4d64;
            margin-left: .06rem;
            border: none;
        }
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        li{
            width: 20%;
            text-align: center;
            height: 0.35rem;
            line-height: .35rem;       
            margin: .06rem .04rem;
            font-size: .14rem;
            label{
              width: 100%;
              height: 100%;
              display: inline-block; 
              border:1px solid #ccc;
              color:#666;
              &.active{
                border-color:#ff4d64;
                color:#ff4d64;
              }
            }
            input{
                display: none;
            }
        }
    }
    .btn{
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 80px;
        display: flex;
        justify-content: center;
        border-top: 1px solid #ccc;
        padding:.1rem 0;
        z-index: 89999;
        button{
            height: 0.4rem;
            width: 40%;
            margin: 0 .1rem;
            font-size: .14rem;
            border-radius: .05rem;
            &:nth-of-type(1){
                background-color: transparent;
                border: 1px solid #908ca3;
                color: #8a869e;
            }
             &:nth-of-type(2){
                background-color: #ff4d64;
                border: 1px solid #ff4d64;
                color: #fff;
                float: right;
            }
        }
    }
}
</style>
