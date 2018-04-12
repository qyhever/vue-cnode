<template>
  <div id="app">
    <c-header v-if="headerShow" :icon="iconType"></c-header>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
  import CHeader from '@/components/CHeader'
  export default {
    name: 'App',
    components: { CHeader },
    data() {
      return {
        headerShow: true,
        iconType: true
      }
    },
    created() {
      if (this.$route.name === 'login') this.headerShow = false
      if (this.$route.name === 'detail') this.iconType = false
    },
    watch: {
      '$route' (to, from) {
        if (to.name === 'detail') {
          this.iconType = false
        } else {
          this.iconType = true
        }
        if (to.name === 'login') {
          this.headerShow = false
        } else {
          this.headerShow = true
        }
      }
    }
  }
</script>

<style lang="stylus">
.fade-enter-active, .fade-leave-active
  transition opacity .2s ease-in-out
.fade-enter, .fade-leave-active
  opacity 0
.margin-t40
  min-height calc(100vh - 40px)
  margin-top 40px
  background #fff
</style>