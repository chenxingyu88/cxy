<template>
  <nav class="tab-menu">
    <a 
    v-for="(item, index) in menuList"
		:key='index'
    href="javascript:;" 
    @click='flg(item.type)'
    >
     <img :src="item.images" alt="">
     <span>{{item.txt}}</span>
    </a>
  </nav>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      isActive: 0,
      menuList: [
        {
          txt: '筛选',
          type: 'selector',
          images: "data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000'>   <path fill='%238a869e' d='M840.16 68.048h-680.7c-32.075 0-59.092 22.455-66.146 52.54 6.325 35.5 28.467 79.897 51.848 100.68L397.737 445.78v370.51c0 9.9 11.426 26.837 20.424 30.436l183.725 73.488v-474.59l252.77-222.962c23.566-20.787 45.853-65.552 51.865-101.072-6.688-30.766-33.797-53.542-66.36-53.542zM27.78 102.072C42.926 43.37 96.25 0 159.46 0h680.7c64.122 0 117.88 44.29 132.23 104.325l.558 32.087c-9.436 50.343-38.67 106.754-73.282 137.283L669.93 476.338v476.54c0 37.47-28.424 56.477-63.2 42.566l-213.842-85.537c-34.904-13.962-63.2-55.968-63.2-93.618V476.334L99.953 272.125c-34.153-30.355-63.078-86.02-72.9-135.96l.727-34.093z'/> </svg>"
        },
        {
          txt: '搜索',
          type: 'search',
          images: "data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000'>   <path fill='%238a869e' d='M753.245 753.307c156.988-156.988 156.988-411.517 0-568.505s-411.517-156.988-568.505 0-156.988 411.517 0 568.505 411.517 156.988 568.505 0zm22.855 70.23C591.856 983.49 312.553 975.87 137.365 800.682c-183.153-183.153-183.153-480.103 0-663.256s480.103-183.153 663.255 0c175.19 175.188 182.807 454.492 22.855 638.735L990.23 942.92c13.023 13.022 13.066 34.093-.108 47.266-13.082 13.082-34.48 12.894-47.266.11L776.1 823.536z'/> </svg>"
        }
      ]
    }
  },
  methods: {
    flg (type) {
      this.$emit('flgs', type)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.tab-menu{
    a{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        font-size: .14rem;
        text-align: center;
        color: #8a869e;
        text-decoration: none;
        padding:0 0.05rem;
        margin:0 0.05rem;
        position: relative;
        &:after{
            content: '';
            display: block;
            height: 0.02rem;
            width: 100%;
            background: #fff;
            position: absolute;
            bottom: .03rem;
            left: 0;
        }
        img{
          display: inline-block;
          width: 0.14rem;
          height: 0.14rem;
          position: relative;
          top: 0.02rem;
        }
        &.active{
            color: #ff4d64;
            &:after{
                background: #ff4d64;
            }
        }
    }
}
</style>
