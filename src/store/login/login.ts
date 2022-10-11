import type { Module } from 'vuex'
import type { LoginState, RootState } from '@/store/types'
import {
  accountLoginRequest,
  requestUserInfo,
  requestUserMenus
} from '@/servers/login'
import type { LoginAccount } from '@/types/login'
import localCache from '@/utils/cache'
import router from '@/router'

const loginModule: Module<LoginState, RootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      menus: []
    }
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token
    },
    setUserInfo: (state, userInfo) => {
      state.userInfo = userInfo
    },
    setMenus: (state, menus) => {
      state.menus = menus
    }
  },
  actions: {
    accountLoginAction: async ({ commit }, payload: LoginAccount) => {
      // 1.登录逻辑
      const loginResult = (await accountLoginRequest(payload)) as any
      const { id, token } = loginResult?.data
      commit('setToken', token)
      localCache.setCache('token', token)

      // 2.请求用户信息
      const userInfoResult = (await requestUserInfo(id)) as any
      const userInfo = userInfoResult?.data?.userInfo
      commit('setUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.请求菜单
      const userMenusResult = (await requestUserMenus(userInfo.role.id)) as any
      const menus = userMenusResult?.data?.list.children
      commit('setMenus', menus)
      localCache.setCache('menus', menus)

      // 跳转到首页
      router.push('/home')
    },
    // 页面刷新读取缓存数据
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('setToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('setUserInfo', userInfo)
      }
      const menus = localCache.getCache('menus')
      if (token) {
        commit('setMenus', menus)
      }
    }
  }
}

export default loginModule
