<template>
  <div class="sidebar">
    <div class="mask" v-show="show" @click="hideMenu"></div>
    <div class="menu" :class="{'show-menu': show}">
      <div class="avatar-wrapper">
        <img src="@/assets/images/timg.jpg" class="avatar">
        <h2 class="title">Cnode社区</h2>
      </div>
      <ul class="menu-list" ref="menuList">
        <li>
          <router-link to="/" exact>
            <i class="fa fa-home"></i>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/post">
            <i class="fa fa-paper-plane-o"></i>
            <span>发布</span>
          </router-link>
        </li>
        <li>
          <router-link to="/person">
            <i class="fa fa-user-o"></i>
            <span>个人</span>
          </router-link>
        </li>
        <!-- <li>
            <router-link to="/about">
              <i class="fa fa-bell-o"></i>
              <span>关于</span>
            </router-link>
          </li> -->
        <li v-if="!loginStatus">
          <router-link to="/login">
            <i class="fa fa-arrow-circle-right"></i>
            <span>登录</span>
          </router-link>
        </li>
        <li v-if="loginStatus" @click="signOut">
          <a href="javascript:;">
            <i class="fa fa-arrow-circle-right"></i>
            <span>退出</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'SideBar',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    computed: mapGetters(['loginStatus']),
    mounted() {
      setTimeout(() => {
        let items = this.$refs.menuList.children
        for (let i = 0; i < items.length; i++) {
          let item = items[i]
          item.addEventListener('click', this.hideMenu)
        }
      }, 20)
    },
    methods: {
      hideMenu() {
        this.$emit('hideMenu')
      },
      signOut() {
        this.$emit('hideMenu')
        this.$store.dispatch('setSignOut')
        this.$router.push({name: 'home'})
      }
    }
  }
</script>

<style scoped lang="stylus">
.menu
  z-index 3
  position fixed
  top 0
  left -200px
  bottom 0
  width 200px
  background-color #444
  transition all .25s ease-in-out
  &.show-menu
    transform translateX(200px)
  .avatar-wrapper
    width 100%
    margin-top 30px
    text-align center
    .avatar
      width 80px
      height 80px
      border-radius 50%
    .title
      font-size 16px
      font-weight 400
      color #fff
  .menu-list
    margin-top 20px
    li
      // height 45px
      a
        display block
        height 45px
        padding 12px 0 12px 40px
        color #fff
        .fa
            margin-right 10px
            font-size 18px
        &.active, &:active
          position relative
          background #666
          &:before
            content ""
            position absolute
            top 0
            left 0
            width 4px
            height 45px
            background #80bd01
.mask
  z-index 2
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background-color rgba(0, 0, 0, .3)
</style>