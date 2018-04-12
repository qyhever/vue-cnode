<template>
  <div class="post margin-t40">
    <mt-field label="标题" placeholder="请输入用户名" v-model="title"></mt-field>
    <a class="mint-cell mint-field">
      <div class="mint-cell-wrapper">
        <span class="mint-cell-text">分类</span>
        <select class="tab-select" v-model="tab">
          <option value="">请选择</option>
          <option value="share">分享</option>
          <option value="ask">问答</option>
          <option value="job">招聘</option>
        </select>
      </div>
    </a>
    <mt-field label="内容" placeholder="请输入内容..." type="textarea" rows="10" v-model="content"></mt-field>
    <button class="post-btn" @click="submit()">发布</button>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { Toast } from 'mint-ui'
  import * as api from '@/api/api'
  export default {
    name: 'post',
    data() {
      return {
        title: '',
        tab: '',
        content: '',
        topic_id: ''
      }
    },
    computed: mapState({ accesstoken: state => state.user.userInfo.accesstoken }),
    methods: {
      submit() {
        if (!this.accesstoken) {
          this.$router.push({ path: '/login' })
          return
        }

        if (!this.title) {
            Toast('标题不能为空')
        } else if (!this.tab) {
            Toast('选项不能为空')
        } else if (!this.content) {
            Toast('内容不能为空')
        }

        const params = {
          accesstoken: this.accesstoken,
          title: this.title,
          tab: this.tab,
          content: this.content,
          topic_id: ''
        }
        api.addPost(params).then(res => {
          console.log(res)
          if (!res.success) {
            Toast(res.error_msg)
          } else {
            this.$router.push({path: `/detail/${res.topic_id}`})
          }
        })
      }
    }
  }
</script>
<style lang="stylus" scoped>
.mint-cell-text
  width 105px
.post-btn
  display block
  width 249px
  padding 10px 15px
  margin auto
  margin-top 20px
  text-align center
  background #80bd01
  color #fff
  border-radius 5px
</style>