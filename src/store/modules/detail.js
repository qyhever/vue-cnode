import * as api from '@/api/api'
import * as types from '@/store/mutation-types'

const state = {
  detail: {}
}
const getters = {
  getDetail: state => state.detail
}
const mutations = {
  [types.TOPICS_DETAIL](state, res) {
    state.detail = res.data
  }
}
const actions = {
  getDetail({ commit }, id) {
    commit(types.SET_LOADING_STATUS, true)
    api.topicsDetail(id).then(res => {
      commit(types.SET_LOADING_STATUS, false)
      commit(types.TOPICS_DETAIL, res)
    })
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}