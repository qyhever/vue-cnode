<template>
  <div class="login">
    <img class="logo" src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
    <div class="input-block">
      <input type="text" placeholder="请输入Token" class="token-input" v-model.trim="accesstoken" />
    </div>
    <div class="login-bar">
      <button class="login-btn" @click="login"> 登录 </button>
    </div>
  </div>
</template>
<script>
  import * as api from '@/api/api'
  import { Toast } from 'mint-ui'
  export default {
    name: 'login',
    data() {
      return {
        accesstoken: ''
      }
    },
    methods: {
      login() {
        if (!this.accesstoken) {
          Toast({
            message: '输入不能为空',
            position: 'bottom',
            duration: 2000
          })
          return
        }
        api.login(this.accesstoken).then(res => {
          const userInfo = Object.assign({accesstoken: this.accesstoken}, res)
          this.$store.dispatch('setUserInfo', userInfo)
          this.$router.go(-1)
        })
      }
    }
  }
</script>
<style lang="stylus" scoped>
.login
  width 100%
  height 100vh
  background #444
  text-align center
  .logo
    width 249px
    margin-top 60px
    margin-bottom 15px
  .input-block
    width  249px
    margin 20px auto
    .token-input
      width 100%
      padding 8px 10px
      border-bottom 1px solid rgba(136, 136, 136, 0.6)
      background rgba(136, 136, 136, 0.6)
      color #fff
  .login-bar
    width  249px
    margin 20px auto
    .login-btn
      width 100%
      padding 8px
      font-size 14px
      border:1px solid #80bd01
      background #80bd01
      border-radius 3px
      color #fff
</style>