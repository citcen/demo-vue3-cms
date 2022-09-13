import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'
import { addGlobalPlugins } from '@/plugins'
import { worker } from './mocks/browser'
//const  worker  = import("./mocks/browser");
worker.start({
  // 对于没有 mock 的接口直接通过，避免异常
  onUnhandledRequest: 'bypass'
})

const app = createApp(App)

app.use(addGlobalPlugins)
app.use(router).use(store).mount('#app')

console.log(import.meta.env.VITE_APP_BASE_URL, '6464')
