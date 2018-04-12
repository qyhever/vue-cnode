<template>
  <div class="header-wrapper">
    <div class="header">
      <i class="fa fa-bars" v-if="icon" @click="showMenuSlide"></i>
      <i class="fa fa-reply" v-if="!icon" @click="back"></i>
      <img class="logo-img" src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="">
    </div>
    <side-bar :show="sideBarStatus" @hideMenu="hideMenu"></side-bar>
  </div>
</template>

<script>
  import SideBar from '@/components/SideBar'
  import { mapGetters } from 'vuex'
  export default {
    components: { SideBar },
    props: {
      icon: {
        type: Boolean,
        default: true
      }
    },
    computed: mapGetters(['sideBarStatus']),
    methods: {
      showMenuSlide() {
        this.$store.commit('SET_SIDE_BAR_STATUS', true)
      },
      hideMenu() {
        this.$store.commit('SET_SIDE_BAR_STATUS', false)
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="stylus">
.header-wrapper
  .header
    z-index 1
    position fixed
    top 0
    width 100%
    height 40px
    display flex
    justify-content center
    align-items center
    background #444
    .fa
      position absolute
      top 0
      left 0
      width 40px
      height 40px
      line-height 40px
      text-align center
      color #fff
      font-size 14px
    .logo-img
      width 120px
</style>