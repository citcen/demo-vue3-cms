import type { RouteRecordRaw } from 'vue-router'
import allRouters from '@/router/mappingRelations'

export const mapMenusToRoutes = (menus: any[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []

  // 递归生成路由
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRouters.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(menus)

  return routes
}
