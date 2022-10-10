import { createStore } from 'vuex'
import type { RootState } from '@/store/types'
import loginModule from '@/store/login/login'

const store = createStore<RootState>({
  state: () => {
    return {
      message: 123456
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    loginModule
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
