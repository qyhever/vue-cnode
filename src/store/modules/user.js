import * as api from '@/api/api'
import * as types from '@/store/mutation-types'

const state = {
  // 登录状态
  loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
  // 登录信息
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
  // 用户信息
  userData: {}
}

const getters = {
  loginStatus: state => state.loginStatus,
  userInfo: state => state.userInfo,
  userData: state => state.userData
}

const mutations = {
  [types.SET_USER_INFO](state, info) {
    state.userInfo = info
  },
  [types.SET_LOGIN_STATUS](state, status) {
    state.loginStatus = status
  },
  [types.SET_USER_DATA](state, res) {
    state.userData = res
  }
}

const actions = {
  // 登录（保存数据）
  setUserInfo({ commit }, info) {
    commit(types.SET_SIDE_BAR_STATUS, false)
    localStorage.setItem('userInfo', JSON.stringify(info))
    localStorage.setItem('loginStatus', true)
    commit(types.SET_USER_INFO, info)
    commit(types.SET_LOGIN_STATUS, true)
  },
  // 退出登录（置空数据）
  setSignOut({ commit }) {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('loginStatus')
    commit(types.SET_USER_INFO, {})
    commit(types.SET_LOGIN_STATUS, false)
  },
  // 获取用户信息
  getUserData({ commit }, name) {
    commit(types.SET_LOADING_STATUS, true)
    api.userInfo(name).then(res => {
      commit(types.SET_LOADING_STATUS, false)
      commit(types.SET_USER_DATA, res.data)
    })
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}