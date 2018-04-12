import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import common from './modules/common'
import topics from './modules/topics'
import detail from './modules/detail'
import user from './modules/user'

export default new Vuex.Store({
  modules:{
     common,
     topics,
     detail,
     user
  }
})