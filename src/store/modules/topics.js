import * as api from '@/api/api'
import * as types from '@/store/mutation-types'

const state = {
  topicsList: [],
  searchKey: {
    tab: 'all',
    page: 0,
    limit: 20
  },
  scroll: true,
}

const getters = {
  topicsList: state => state.topicsList
}

const mutations = {
  [types.TOPICS_LIST](state, res) {
    if (state.searchKey.page <= 1) {
      state.topicsList = res.data
    } else {
      state.topicsList = [...state.topicsList, ...res.data]
    }
  },
  [types.SET_SEARCH_KEY](state, params) {
    state.searchKey = params
  },
  [types.SET_PAGE_INDEX](state) {
    state.searchKey['page'] += 1
  },
  [types.SET_SCROLL_STATUS](state, status) {
    state.scroll = status
  }
}

const actions = {
  topicsList({ commit }, params) {
    if (!state.scroll) return
    commit(types.SET_PAGE_INDEX)
    commit(types.SET_LOADING_STATUS, true)
    commit(types.SET_SCROLL_STATUS, false)
    api.topicsList(state.searchKey).then(res => {
      commit(types.SET_LOADING_STATUS, false)
      commit(types.SET_SCROLL_STATUS, true)
      commit(types.TOPICS_LIST, res)
    })
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}