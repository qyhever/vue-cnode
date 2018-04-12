import * as types from '@/store/mutation-types'

const state = {
  navIndex: 0,
  navlist: [
    { 'title': '全部', 'type': 'all' },
    { 'title': '精华', 'type': 'good' },
    { 'title': '分享', 'type': 'share' },
    { 'title': '问答', 'type': 'ask' },
    { 'title': '招聘', 'type': 'job' }
  ],
  loading: 0,
  sideBarStatus: false,
  headerStatus: true
}

const getters = {
  navIndex: state => state.navIndex,
  navlist: state => state.navlist,
  loading: state => state.loading,
  sideBarStatus: state => state.sideBarStatus
}

const mutations = {
  [types.SET_NAN_INDEX](state, index) {
    state.navIndex = index
  },
  [types.SET_LOADING_STATUS](state, status) {
    state.loading = status
  },
  [types.SET_SIDE_BAR_STATUS](state, status) {
    state.sideBarStatus = status
  }
}


const actions = {

}

export default {
  state,
  actions,
  getters,
  mutations
}