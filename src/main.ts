import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

import 'normalize.css'
import './assets/main.css'

import { addGlobalPlugins } from '@/plugins'

import { worker } from './mocks/browser'
worker.start({
  // 对于没有 mock 的接口直接通过，避免异常
  onUnhandledRequest: 'bypass'
})

setupStore()

const app = createApp(App)
app.use(addGlobalPlugins)
app.use(router).use(store).mount('#app')
