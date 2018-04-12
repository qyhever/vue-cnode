<template>
  <div class="person margin-t40">
    <div class="userinfo">
      <img class="avatar" :src="userInfo.avatar_url" alt="">
      <p class="nickname">{{userInfo.loginname}}</p>
    </div>
    <div class="list">
      <mt-cell title="我的消息" is-link to="/person">
        <i slot="icon" class="fa fa-volume-up"></i>
      </mt-cell>
      <mt-cell title="发布主题" is-link to="/post">
        <i slot="icon" class="fa fa-paper-plane-o"></i>
      </mt-cell>
      <mt-cell title="关于" is-link :to="{name: 'person'}">
        <i slot="icon" class="fa fa-bell-o"></i>
      </mt-cell>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'person',
    computed: mapGetters(['userInfo'])
  }
</script>
<style lang="stylus" scoped>
.userinfo
  width 100%
  height 150px
  background #444
  color #fff
  display flex
  flex-direction  column
  justify-content center
  align-items center
  .avatar
    width 80px
    height 80px
    margin-bottom 15px
    border-radius 50%
.fa
  margin-right 5px
  vertical-align middle
  font-size 18px
  color #80BD01
</style>