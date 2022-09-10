import type { App } from 'vue'
import componentEle from './register-ele'

// 全局导入
export function globalRegister(app: App) {
  app.use(componentEle)
}
