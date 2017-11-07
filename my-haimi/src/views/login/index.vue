<template>
  <div class="wrap">
     <div class="title">请输入手机号码验证码直接登录</div>
     <div class="box">
       <p><span>手机号:</span><input type="text" v-model='userTel'></p>
       <p><span>验证码:</span><input type="text" v-model='yanzheng'><i class="yanzm" @click='add' ref='yzm'>发送验证码</i></p>
     </div>
     <button @click='loginDo'>登陆</button>
  </div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
export default {
  name: 'Webapp',
  data () {
    return {
      userTel: '',
      yanzheng: '',
      txt: ''
    }
  },
  components: {
    FooterBar
  },
  methods: {
    add () {
      let num = 10
      let that = this
      if (timer) return
      let timer = setInterval(function () {
        num--
        if (num >= 0) {
          that.$refs.yzm.innerHTML = num
        } else {
          let msg = that.yzm()
          that.$refs.yzm.innerHTML = msg
          that.txt = msg
          clearInterval(timer)
          setTimeout(function () {
            that.$refs.yzm.innerHTML = '点击重新获取'
            that.txt = ''
          }, 8000)
        }
      }, 1000)
    },
    yzm () {
      let arr = ('ABCDEFGHIGKLMNOPQRSTUVWXYZ').split('')
      this.word = []
      for (let i = 0; i < 4; i++) {
        this.word.push(arr[Math.floor(Math.random() * arr.length)])
      }
      return this.word.join('')
    },
    loginDo () {
      let reg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (this.txt === this.yanzheng && reg.test(this.userTel)) {
        window.localStorage.setItem('userTel', this.userTel)
        let path = window.localStorage.getItem('toPath')
        this.$router.push(path)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.wrap{
    font-size: 20px;
    .title{
      width: 100%;
      height: 0.37rem;
      line-height: .37rem;
      text-align: center;
      color: #991f33;
      font-size: .14rem;
      background: #fff9f3;
    }
    .box{
        box-sizing: border-box;
        padding:0 .1rem;
       p{
        margin-top: .15rem;
        height: .6rem;
        line-height: .6rem;
        border-bottom: 1px solid #ccc;
        display: flex;
        span{
          color: #666;
          width: 0.63rem;
          font-size: .14rem;
        }
        input{  
            flex:1;         
            display: block;
            background: #fff;
            border: none;
        }
        i{
          width: 0.8rem;
          color: #991f33;
          font-size: .12rem;
          font-style: normal;
        }
       }
    }
    button{
      background: #991f33;
      color:#fff;
      width: 90%;
      margin-top:.5rem;
      margin-left: 5%;
      height: 0.3rem;
      line-height: .3rem ;
      border:none;
    }
}
</style>
