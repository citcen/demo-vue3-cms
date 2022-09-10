import type { App } from 'vue'
import componentEle from './element'

// 全局导入
export function addGlobalPlugins(app: App) {
  app.use(componentEle)
}
