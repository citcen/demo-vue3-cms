import type { RouteRecordRaw } from 'vue-router'
import allRouters from '@/router/mappingRelations'
/**
 * 格式化数据 生成 vue-router 层级路由表
 * @param menus 菜单数据
 * @return RouteRecordRaw
 */
export const mapMenusToRoutes = (menus: any[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []

  // 递归生成路由
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        // 子菜单
        const route = allRouters.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        // 主菜单
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(menus)

  return routes
}
