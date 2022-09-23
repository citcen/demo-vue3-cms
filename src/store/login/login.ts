import type { Module } from 'vuex'
import type { LoginState, RootState } from '@/store/types'

const loginModule: Module<LoginState, RootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  actions: {
    accountLoginAction: ({}, payload) => {
      console.log('accountLoginAction执行', payload)
    },
    phoneLoginAction: ({}, payload) => {}
  }
}

export default loginModule
