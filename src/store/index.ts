import { createStore, useStore } from 'vuex'
import type { Store } from 'vuex'
import type { IStoreType, RootState } from '@/store/types'
import login from '@/store/login/login'

const store = createStore<RootState>({
  state: () => {
    return {
      name: 'admin'
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function IUseStore(): Store<IStoreType> {
  return useStore()
}

export default store
