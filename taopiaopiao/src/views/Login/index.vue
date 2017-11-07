<template>
  <div class="page">
    <div class="pic"><img src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png" alt=""></div>
    <div class="loginBox" v-show="type == 'user'">
      <input type="text" placeholder="手机号/邮箱/会员" v-model='userName'>
      <input type="password" placeholder="请输入密码" v-model='passWord'>
      <div class="other-link "><span>免费注册</span><span>忘记密码</span></div>
      <p><button @click='loginDo(type)'>登陆</button></p>
      <p><button @click="type='phone'">短信验证码登陆</button></p>     
    </div>
    <div class="loginBox" v-show="type == 'phone'">
      <input type="text" placeholder="请输入手机号" v-model='userPhone'>
      <div class="phone-code">
        <input type="password" placeholder="校验码" v-model='code'>
        <span ref='yzm' @click='add()'>获取手机校验码</span>
      </div>
      <div class="other-link "><span>免费注册</span></div>
      <p><button @click='loginDo(type)'>登陆</button></p>
      <p><button @click="type='user'">账户密码登陆</button></p>     
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      type: 'user',
      userName: '',
      passWord: '',
      userPhone: '',
      code: '',
      word: []
    }
  },
  methods: {
    loginDo (type) {
      console.log(type)
      let loginObj = {}
      if (type === 'user') {
        loginObj['userName'] = this.userName
        loginObj['passWord'] = this.passWord
      } else {
        loginObj['userPhone'] = this.userPhone
        loginObj['code'] = this.code
      }
      // if (JSON.stringify(loginObj) === '{}') {
      //   alert('no kong')
      // }
      window.localStorage.setItem('userInfo', JSON.stringify(loginObj))
      let path = window.localStorage.getItem('toPath')
      this.$router.push(path)
    },
    add () {
      console.log(this.$refs.yzm.innerHTML)
      let num = 10
      let that = this
      if (timer) return
      let timer = setInterval(function () {
        num--
        if (num >= 0) {
          that.$refs.yzm.innerHTML = num
        } else {
          that.$refs.yzm.innerHTML = that.yzm()
          clearInterval(timer)
          setTimeout(function () {
            that.$refs.yzm.innerHTML = '点击重新获取'
          }, 5000)
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page{
    font-size: 20px;
    padding: 0.2rem;
    .pic{
      width: 100%;
      display: flex;
      justify-content: center;
      img{
        display: block;
        width: .8rem;
        height: .8rem;
        margin-top: .4rem;
      }
    }
    .loginBox{
        .phone-code{
          position: relative;
          span{
            position: absolute;
            top:.08rem;
            right:0;
            font-size: .14rem;
            color: #ff5000;  
            border-left: 1px solid #b5b5b5; 
            padding:0 .1rem; 
            width: 1rem;
            text-align: center;
          }
        }
        input{
            display: block;
            width: 100%;
            height: 0.3rem;
            line-height: 0.3rem;
            font-size: 0.14rem;
            border: 0;
            border-bottom: 1px solid #ff5000;
            margin-top: 0.25rem;
        }
        .other-link{
           display: flex;
           justify-content: space-between;
           margin-top: .2rem;
           span{
             color:#555;
             font-size: .14rem;
           }
        }
        p{    
            margin-top: 0.3rem;
            button{
              width: 100%;
              height: 0.45rem;
              background: #ff5000;
              border: 1px solid #ff5000;
              border-radius: .45rem;
              color:#fff;
              font-size: .14rem;
            }
            &:nth-of-type(2) button{
              background: #fff;
              color:#ff5000;
            }
        }
    }
}
</style>
