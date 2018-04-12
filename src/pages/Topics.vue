<template>
  <div class="topics">
    <nav class="nav-wrapper">
      <ul class="nav-ul">
        <li class="item" v-for="(item, index) in navlist" :key="index" :class="{'item-active': navIndex === index}" @click="navChange(index)">{{item.title}}</li>
      </ul>
    </nav>
    <div class="scroll-posts-list" v-if="topicsList.length">
      <ul class="posts-list">
        <li class="item" v-for="(item, index) in topicsList" :key="index">
          <router-link :to="{name: 'detail', params: {id: item.id}}">
            <div class="info border-1px">
              <img class="avatar" :src="item.author.avatar_url" />
              <div class="content">
                <div class="title">
                  <span class="username">{{item.author.loginname}}</span>
                  <span class="time">{{item.last_reply_at | formatDate}}</span>
                </div>
                <div class="intro">
                  <div class="tag set-down" v-if="item.top">置顶</div>
                  <div class="tag goods" v-else-if="item.good">精华</div>
                  <span class="text">{{item.title}}</span>
                </div>
              </div>
            </div>
            <div class="action">
              <div class="action-item">
                <i class="fa fa-commenting-o"></i>
                <span class="text">{{item.reply_count}}</span>
              </div>
              <div class="action-item">
                <i class="fa fa-columns"></i>
                <span class="text">{{item.visit_count}}</span>
              </div>
              <div class="action-item">
                <i class="fa fa-tags"></i>
                <span class="text" v-if="item.tab === 'good'">精华</span>
                <span class="text" v-else-if="item.tab === 'share'">分享</span>
                <span class="text" v-else-if="item.tab === 'ask'">问答</span>
                <span class="text" v-else-if="item.tab === 'job'">招聘</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="loading" v-show="loading">加载中...</div>
  </div>
</template>

<script>
  import Loading from '@/components/Loading'
  import { mapState, mapGetters } from 'vuex'
  export default {
    components: { Loading },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        window.addEventListener('scroll', vm.scrollArtlist, false)
      })
    },
    beforeRouteLeave(to, from, next) {
      window.removeEventListener("scroll", this.scrollArtlist, false)
      next()
    },
    computed: {
      ...mapState({
        topicsList: state => state.topics.topicsList
      }),
      ...mapGetters(['loading', 'navIndex', 'navlist']),
      // topicsList: {
      //   get() {
      //     return this.$store.getters.getTopicsList
      //   },
      //   set(newValue) {
      //     console.log(newValue)
      //     this.$store.getters.getTopicsList = newValue
      //   }
      // }
    },
    created() {
      if (this.topicsList.length === 0) {
        this.$store.dispatch('topicsList')
      }
    },
    methods: {
      navChange(index) {
        window.scroll(0, 0)
        this.topicsList = []
        this.$store.commit('SET_NAN_INDEX', index)
        this.$store.commit('SET_SEARCH_KEY', {
          page: 0,
          tab: this.navlist[index].type,
          limit: 20
        })
        this.$store.dispatch('topicsList')
      },
      scrollArtlist() {
        if (document.body.clientHeight <= window.innerHeight + window.scrollY + 200) {
          this.$store.dispatch('topicsList')
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
@import '../assets/stylus/mixin.styl'
.nav-wrapper
  z-index 1
  position fixed
  top 40px
  left 0
  width 100%
  height 32px
  background #444
  .nav-ul
    height 32px
    display flex
    .item
      flex 1
      line-height 32px
      text-align center
      color #80bd01
      &.item-active
        color #fff
.scroll-posts-list
  overflow hidden
  margin-top 72px
  background-color #fff
  .posts-list
    .item
      padding 15px 15px 0
      border-1px(#80bd01)
      .info
        display flex
        border-1px(#ccc)
        .avatar
          width 50px
          height 50px
          border-radius 50%
        .content
          flex 1
          margin-left 15px
          .title
            display flex
            justify-content space-between
            .time
              color #555
          .intro
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
            .text
              line-height 24px
              font-size 14px
              color #35495e
      .action
        display flex
        padding 8px 0
        .action-item
          .fa
            margin 0 6px
            color #f00
            font-size 18px
          .text
            color #555
          &:nth-of-type(2)
            margin-left 20px
          &:last-of-type
            flex 1
            text-align right
            .fa
              color #80bd01
            .text
              color #000
.loading
    padding 6px 0
    background #fff
    text-align center
</style>