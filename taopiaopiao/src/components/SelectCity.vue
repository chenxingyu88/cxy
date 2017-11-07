<template>
  <div class="select-city">
    <div class="city" @click='showSelectCity'>
      <img src="data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'>   <g fill='none' fill-rule='evenodd'>     <path fill='%23F6303E' d='M38.793 50H11.207C5.017 50 0 44.982 0 38.793V11.207C0 5.017 5.017 0 11.207 0h27.586C44.983 0 50 5.017 50 11.207v27.586C50 44.983 44.982 50 38.793 50'/>     <path fill='%23FFF' d='M30.004 10.63c-3.158-.837-4.13-5.006-10.032-5.006 2.137 2.454 1.15 4.61-.453 5.103-7.83 2.09-13.69 8.68-13.32 17.79.38 9.38 8.39 15.495 18.75 15.495 10.35 0 18.37-6.116 18.75-15.494.37-9.258-5.69-15.913-13.7-17.888'/>     <path fill='%23373D42' d='M25 26.3c-.716 0-1.267 3.092-2.473 4.794-.896 1.265-2.162 1.838-4.37 1.976-.763.048-1.64.045-2.687-.01-1.432-.075-2.67-.847-3.582-2.234-.65-.992-1.134-2.283-1.436-3.838v-.007c-.107-.54-.205-1.05-.265-1.54-.163-1.08-.623-1.46-.926-1.59l-.03-.01c-.23-.06-.28-.294-.28-.34-.03-.44-.13-1.41-.17-2.015-.03-.453.35-.512.42-.517 2.608-.163 8.655-.49 11.4.23.825.214 3.17.66 4.41.66 1.24 0 3.59-.446 4.41-.66 2.75-.72 8.798-.393 11.4-.23.075.005.448.064.42.517-.04.605-.146 1.58-.174 2.014-.002.044-.047.28-.28.34-.012.003-.022.01-.033.014-.305.134-.765.516-.93 1.594-.06.487-.16.996-.263 1.542V27c-.304 1.553-.787 2.844-1.438 3.836-.91 1.387-2.15 2.16-3.584 2.234-1.045.055-1.923.06-2.686.01-2.207-.138-3.473-.71-4.37-1.976-1.21-1.706-1.76-4.8-2.48-4.8'/>     <path fill='%23F6303E' d='M19.925 23.308c-.06-.01-.125-.024-.195-.038-.98-.183-2.975-.436-4.52-.338-.68.043-1.27.152-1.65.367-.94.53-1.016 1.36-.858 2.49.046.32.112.67.182 1.05.376 2 1.264 4.13 3.112 4.24.83.05 1.51.05 2.075.01 1.74-.11 2.36-.58 2.8-1.227 2.47-3.66 1.49-6.066-.932-6.57'/>     <path fill='%231F9BDE' d='M30.075 23.308c.06-.01.125-.024.195-.038.98-.183 2.975-.436 4.52-.338.68.043 1.27.152 1.65.367.94.53 1.016 1.36.858 2.49-.046.32-.112.67-.182 1.05-.376 2-1.264 4.13-3.112 4.24-.83.05-1.51.05-2.075.01-1.74-.11-2.36-.58-2.8-1.227-2.47-3.66-1.49-6.066.932-6.57'/>   </g> </svg>" alt="">
      <a href="javascript:;"  v-title='city'>{{city}}<i></i></a>
    </div>
    <div class="select-city-box" v-show='isSelect'>
        <div class="top">
          <div class="title">选择城市</div>
          <div class="clone" @click='showSelectCity'>X</div> 
        </div>
        <div class="group">
            <div class="selectList" v-for='(item, key) of allcitydata' :key='key'>
                <h3 class="word">{{key}}</h3>
                <ul v-for='(items, index) of item' :key='index'>
                    <li @click='clickCity(items)'>{{items}}</li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
let allCity = ['北京|beijing|bj', '上海|shanghai|sh', '重庆|chongqing|cq', '深圳|shenzhen|sz', '广州|guangzhou|gz', '杭州|hangzhou|hz',
  '南京|nanjing|nj', '苏州|shuzhou|sz', '天津|tianjin|tj', '成都|chengdu|cd', '南昌|nanchang|nc', '三亚|sanya|sy', '青岛|qingdao|qd',
  '厦门|xiamen|xm', '西安|xian|xa', '长沙|changsha|cs', '合肥|hefei|hf', '西藏|xizang|xz', '内蒙古|neimenggu|nmg', '安庆|anqing|aq', '阿泰勒|ataile|atl', '安康|ankang|ak',
  '阿克苏|akesu|aks', '包头|baotou|bt', '北海|beihai|bh', '百色|baise|bs', '保山|baoshan|bs', '长治|changzhi|cz', '长春|changchun|cc', '常州|changzhou|cz', '昌都|changdu|cd',
  '朝阳|chaoyang|cy', '常德|changde|cd', '长白山|changbaishan|cbs', '赤峰|chifeng|cf', '大同|datong|dt', '大连|dalian|dl', '达县|daxian|dx', '东营|dongying|dy', '大庆|daqing|dq', '丹东|dandong|dd',
  '大理|dali|dl', '敦煌|dunhuang|dh', '鄂尔多斯|eerduosi|eeds', '恩施|enshi|es', '福州|fuzhou|fz', '阜阳|fuyang|fy', '贵阳|guiyang|gy',
  '桂林|guilin|gl', '广元|guangyuan|gy', '格尔木|geermu|gem', '呼和浩特|huhehaote|hhht', '哈密|hami|hm',
  '黑河|heihe|hh', '海拉尔|hailaer|hle', '哈尔滨|haerbin|heb', '海口|haikou|hk', '黄山|huangshan|hs', '邯郸|handan|hd',
  '汉中|hanzhong|hz', '和田|hetian|ht', '晋江|jinjiang|jj', '锦州|jinzhou|jz', '景德镇|jingdezhen|jdz',
  '嘉峪关|jiayuguan|jyg', '井冈山|jinggangshan|jgs', '济宁|jining|jn', '九江|jiujiang|jj', '佳木斯|jiamusi|jms', '济南|jinan|jn',
  '喀什|kashi|ks', '昆明|kunming|km', '康定|kangding|kd', '克拉玛依|kelamayi|klmy', '库尔勒|kuerle|kel', '库车|kuche|kc', '兰州|lanzhou|lz',
  '洛阳|luoyang|ly', '丽江|lijiang|lj', '林芝|linzhi|lz', '柳州|liuzhou|lz', '泸州|luzhou|lz', '连云港|lianyungang|lyg', '黎平|liping|lp',
  '连成|liancheng|lc', '拉萨|lasa|ls', '临沧|lincang|lc', '临沂|linyi|ly', '芒市|mangshi|ms', '牡丹江|mudanjiang|mdj', '满洲里|manzhouli|mzl', '绵阳|mianyang|my',
  '梅县|meixian|mx', '漠河|mohe|mh', '南充|nanchong|nc', '南宁|nanning|nn', '南阳|nanyang|ny', '南通|nantong|nt', '那拉提|nalati|nlt',
  '宁波|ningbo|nb', '攀枝花|panzhihua|pzh', '衢州|quzhou|qz', '秦皇岛|qinhuangdao|qhd', '庆阳|qingyang|qy', '齐齐哈尔|qiqihaer|qqhe',
  '石家庄|shijiazhuang|sjz', '沈阳|shenyang|sy', '思茅|simao|sm', '铜仁|tongren|tr', '塔城|tacheng|tc', '腾冲|tengchong|tc', '台州|taizhou|tz',
  '通辽|tongliao|tl', '太原|taiyuan|ty', '威海|weihai|wh', '梧州|wuzhou|wz', '文山|wenshan|ws', '无锡|wuxi|wx', '潍坊|weifang|wf', '武夷山|wuyishan|wys', '乌兰浩特|wulanhaote|wlht',
  '温州|wenzhou|wz', '乌鲁木齐|wulumuqi|wlmq', '万州|wanzhou|wz', '乌海|wuhai|wh', '兴义|xingyi|xy', '西昌|xichang|xc', '襄樊|xiangfan|xf',
  '西宁|xining|xn', '锡林浩特|xilinhaote|xlht', '西双版纳|xishuangbanna|xsbn', '徐州|xuzhou|xz', '义乌|yiwu|yw', '永州|yongzhou|yz', '榆林|yulin|yl', '延安|yanan|ya', '运城|yuncheng|yc',
  '烟台|yantai|yt', '银川|yinchuan|yc', '宜昌|yichang|yc', '宜宾|yibin|yb', '盐城|yancheng|yc', '延吉|yanji|yj', '玉树|yushu|ys', '伊宁|yining|yn', '珠海|zhuhai|zh', '昭通|zhaotong|zt',
  '张家界|zhangjiajie|zjj', '舟山|zhoushan|zs', '郑州|zhengzhou|zz', '中卫|zhongwei|zw', '芷江|zhijiang|zj', '湛江|zhanjiang|zj']

export default {
  name: 'HeaderBar',
  props: ['title'],
  data () {
    return {
      isSelect: false,
      allcitydata: {},
      city: '北京',
      code: 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'
    }
  },
  components: {
  },
  methods: {
    showSelectCity () {
      this.isSelect = !this.isSelect
    },
    setAllCity () {
      this.allcitydata['热门'] = []
      for (let i = 0; i < 6; i++) {
        this.allcitydata['热门'].push(allCity[i].split('|')[0])
      }
      for (let i = 0; i < this.code.length; i++) {
        let str = this.code.charAt(i)
        this.allcitydata[str] = []
        for (let j = 0; j < allCity.length; j++) {
          let firstWord = allCity[j].split('|')[1].charAt(0).toLocaleUpperCase()
          if (str === firstWord) {
            this.allcitydata[str].push(allCity[j].split('|')[0])
          }
        }
      }
    },
    clickCity (city) {
      this.city = city
      this.showSelectCity()
      this.$emit('selectCity', city)
    }
  },
  created () {
    this.setAllCity()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.select-city{
  background: #fff;
  .city{
      display: inline-block;
      height: 0.4rem;
  }
  img{
      display: inline-block;
      width: 0.2rem;
      height: .2rem;
      position: relative;
      top: .06rem;
    }
  a{
     color: #8a869e;
     font-size: .14rem;
     i{
        display: inline-block;
        width: 6px;
        height: 6px;
     }
  }
  .select-city-box{
      position: fixed;
      top:0;
      bottom:0;
      left: 0;
      right:0;
      background: #fff;
      width: 100%;
      height: 100%;
      overflow: auto;
      z-index: 99999999999;
      .top{
         width: 100%;
         height: 0.4rem;
         line-height: .4rem;
      }
      .title{
        text-align: center;
      }
      .clone{
        text-align: right;
        position: absolute;
        top:0;
        right:.1rem;
        width: 40px;
        height: 40px;
        color: #777;
        text-align: center;
        font-size: .16rem;
      }
  }
}
.group{
  overflow-y: auto;
  h3{
    padding-left: .2rem;
    background: #eee;
    color: #777;
    font-size: .14rem;
  }
  li{
    padding-left: .2rem;
    background: #fcfcfc;
    color: #777;
    font-size: .16rem;
    position: relative;
    &::after{
      content:"";
      width: 200%;
      height: 1px;
      background: #ccc;
      position: absolute;
      left: 0;
      bottom:0;
      transform: scale(.5);
      transform-origin: 0 0;
    }
  }
}
</style>
