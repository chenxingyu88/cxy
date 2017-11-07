<template>
  <div class="login">
      <input type="text" v-model='loginInfo.userName' placeholder="输入用户名"><br>
      <input type="text" v-model='loginInfo.userPwd' placeholder="输入密码"><br>
      <button @click='loginDo'>登陆</button>
  </div>
</template>
<script>

export default {
  name: 'Login',
  data () {
    return {
      loginInfo: {
        userName: '',
        userPwd: ''
      }
    }
  },
  methods: {
    loginDo () {
      this.$store.dispatch('user/loginDo', this.loginInfo).then(
        (data) => {
          // this.$router.push('/home')
          this.$store.dispatch('user/getRoot', {
            id: data.type
          }).then((res) => {
            this.$store.dispatch('user/setUserInfo', {
              key: 'root',
              value: res
            }).then(() => {
              this.$router.push('/home')
              console.log('修改成功')
            })
          })
        }
      )
    }
  }
}
</script>
<style lang='less'>
.login{
  width: 100%;
  text-align: center;
  input{
     margin-top: .3rem;
  }
  button{
    margin-top: .3rem;
    padding:.05rem .2rem;
  }
}
</style>
