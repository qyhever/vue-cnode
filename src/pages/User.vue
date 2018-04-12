<template>
  <div class="user margin-t40">
    <div class="userinfo">
      <img class="avatar" :src="userData.avatar_url" alt="">
      <p class="nickname">{{userData.loginname}}</p>
      <div class="userinfo-footer">
        <p class="time">注册积分：{{userData.create_at | formatDate}}</p>
        <p class="score">积分：{{userData.score}}</p>
      </div>
    </div>
    <ul class="tab">
      <li class="tab-item" :class="{current: tabIndex === 0}" @click="tabIndex = 0">回复</li>
      <li class="tab-item" :class="{current: tabIndex === 1}" @click="tabIndex = 1">主题</li>
    </ul>
    <ul class="reply-list" v-show="tabIndex === 0">
      <li class="item" v-for="(value, index) in userData.recent_replies" :key="index">
        <router-link class="avatar-link" :to="{path: `/user/${value.author.loginname}`}">
          <img class="avatar-img" :src="value.author.avatar_url" alt="">
        </router-link>
        <div class="message">
          <router-link :to="{path: `/detail/${value.id}`}">
            <p class="header">
              <span>{{value.author.loginname}}</span>
              <span>{{value.last_reply_at | formatDate}}</span>
            </p>
            <p class="intro">{{value.title}}</p>
          </router-link>
        </div>
      </li>
    </ul>
    <ul class="topic-list" v-show="tabIndex === 1">
      <li class="item" v-for="(value, index) in userData.recent_topics" :key="index">
        <router-link class="avatar-link" :to="{path: `/user/${value.author.loginname}`}">
          <img class="avatar-img" :src="value.author.avatar_url" alt="">
        </router-link>
        <div class="message">
          <router-link :to="{path: `/detail/${value.id}`}">
            <p class="header">
              <span>{{value.author.loginname}}</span>
              <span>{{value.last_reply_at | formatDate}}</span>
            </p>
            <p class="intro">{{value.title}}</p>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'user',
  data() {
    return {
      tabIndex: 0
    }
  },
  computed: mapGetters(['userData']),
  created() {
    this.$store.dispatch('getUserData', this.$route.params.loginname)
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'
.userinfo
  width 100%
  height 156px
  background #444
  color #fff
  display flex
  flex-direction column
  justify-content space-around
  align-items center
  .avatar
    width 80px
    height 80px
    // margin 10px 0
    border-radius 50%
  .userinfo-footer
    width 100%
    padding 0 15px
    display flex
    justify-content space-between
    align-items center
.tab
  height 38px
  display flex
  border-top 1px solid #eee
  border-bottom 1px solid #eee
  .tab-item
    flex 1
    line-height 38px
    text-align center
    &:first-of-type
      border-right 1px solid #eee
    &.current
      color #80bd01
.reply-list, .topic-list
  background #fff
  .item
    padding 6px 10px
    display flex
    border-1px(#eee)
    .avatar-link
      .avatar-img
        width 36px
        height 36px
        border-radius 50%
    .message
      flex 1
      margin-left 20px
      .header
        display flex
        justify-content space-between
        color #888
        font-size 12px
      .intro
        padding 4px 0
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 1
        overflow hidden
</style>