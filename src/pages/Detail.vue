<template>
  <div class="detail margin-t40">
    <div class="loading-wrapper" v-show="loading">
      <loading :size="50"></loading>
    </div>
    <div class="content">
      <div class="top-wrapper">
        <div class="avatar-wrapper">
          <router-link :to="{name:'user', params:{loginname:detail.author.loginname}}" v-if="detail.author">
            <img class="avatar-img" v-if="detail.author" :src="detail.author.avatar_url" />
          </router-link>
        </div>
        <div class="user-info">
          <div class="author-name">
            <router-link :to="{name:'user',params:{loginname:detail.author.loginname}}" v-if="detail.author">
              <p>{{ detail.author.loginname }}</p>
            </router-link>
            <p class="type">
              <span class="text" v-if="detail.tab === 'good'">#精华#</span>
              <span class="text" v-else-if="detail.tab === 'share'">#分享#</span>
              <span class="text" v-else-if="detail.tab === 'ask'">#问答#</span>
              <span class="text" v-else-if="detail.tab === 'job'">#招聘#</span>
            </p>
          </div>
          <div class="time">楼主 发表于{{detail.last_reply_at | formatDate}}</div>
        </div>
        <button class="collect-btn">收藏</button>
      </div>
      <div class="title">
        <div class="tag set-down" v-if="detail.top">置顶</div>
        <div class="tag goods" v-else-if="detail.good">精华</div>
        <span class="text">{{detail.title}}</span>
      </div>
      <div class="content-html">
        <div class="content-info" v-html="detail.content"></div>
      </div>
      <div class="comment">
        <div class="comment-title">评论</div>
        <ul class="comment-list" v-if="detail.replies">
          <li class="item" v-for="(item, index) in detail.replies" :key="index">
            <div class="item-title">
              <img class="avatar-img" :src="item.author.avatar_url" alt="">
              <div class="info">
                <p class="author-name">{{item.author.loginname}}</p>
                <p class="time">{{index + 1}}楼 发表于{{item.create_at | formatDate}}</p>
              </div>
              <div class="praise">
                <i class="fa fa-thumbs-o-up"></i>
                <span class="praise-count" v-if="item.zanNum">{{item.zanNum}}</span>
              </div>
            </div>
            <p class="comment-html" v-html="item.content"></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Loading from '@/components/Loading'
  import { mapGetters } from 'vuex'
  export default {
    name: 'detail',
    components: { Loading },
    computed: {
      ...mapGetters({
        detail: 'getDetail',
        loading: 'loading'
      })
    },
    created() {
      window.scroll(0, 0)
      this.$store.dispatch('getDetail', this.$route.params.id)
    }
  }
</script>
<style lang="stylus" scoped>
@import '../assets/stylus/mixin.styl'
.detail
  overflow-y scroll
  .top-wrapper
    padding 15px
    display flex
    justify-content space-between
    align-items center
    .avatar-wrapper
      .avatar-img
        width 44px
        height 44px
        border-radius 50%
    .user-info
      flex 1
      margin-left 20px
      .type
        padding 4px 0
        color #80bd01
        font-size 14px
      .time
        color #888
        font-size 12px
    .collect-btn
      width 50px
      height 28px
      background #80bd01
      border-radius 4px
      color #fff
  .title
    padding 0 15px
    margin 10px 0
    display -webkit-box
    -webkit-box-orient vertical
    -webkit-line-clamp 2
    overflow hidden
    .tag
      display inline-block
      width 36px
      height 18px
      text-align center
      margin-right 5px
      font-size 12px
      &.set-down
        border 1px solid #f00
        color #f00
      &.goods
        border 1px solid #80bd01
        color #80bd01
  .content-html
    padding 15px
    overflow hidden
  .comment
    padding-top 10px
    background #eee
    .comment-title
      padding 8px 0
      border-1px(#eee)
      text-indent 1em
      background #fff
    .comment-list
      background #fff
      .item
        padding 15px 0
        margin 0 15px
        border-1px(#eee)
        .item-title
          display flex
          justify-content space-between
          align-items center
          .avatar-img
            width 40px
            height 40px
            border-radius 50%
          .info
            flex 1
            margin-left 20px
            .time
              color #888
              font-size 12px
          .praise
            .fa
              font-size 18px
        .comment-html
          margin-left 60px
          padding 8px 0
</style>