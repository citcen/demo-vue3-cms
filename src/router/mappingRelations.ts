/* system 模块 */
export const user = {
  name: 'user',
  path: '/main/system/user',
  component: () => import('@/views/main/system/user/User.vue')
}

export const role = {
  name: 'role',
  path: '/main/system/role',
  component: () => import('@/views/main/system/role/Role.vue')
}

export const department = {
  name: 'department',
  path: '/main/system/department',
  component: () => import('@/views/main/system/department/Department.vue')
}

export const menu = {
  name: 'menu',
  path: '/main/system/menu',
  component: () => import('@/views/main/system/menu/Menu.vue')
}

/*  product 模块  */
export const category = {
  name: 'category',
  path: '/main/product/category',
  component: () => import('@/views/main/product/category/Category.vue')
}

export const goods = {
  name: 'goods',
  path: '/main/product/goods',
  component: () => import('@/views/main/product/goods/Goods.vue')
}

/*  analysis 模块  */
export const dashboard = {
  name: 'dashboard',
  path: '/main/analysis/dashboard',
  component: () => import('@/views/main/analysis/dashboard/Dashboard.vue')
}

export const overview = {
  name: 'overview',
  path: '/main/analysis/overview',
  component: () => import('@/views/main/analysis/overview/Overview.vue')
}

/*  story 模块  */
export const chat = {
  name: 'chat',
  path: '/main/story/chat',
  component: () => import('@/views/main/story/chat/Chat.vue')
}

export const list = {
  name: 'list',
  path: '/main/story/list',
  component: () => import('@/views/main/story/list/List.vue')
}

export default [
  user,
  role,
  department,
  menu,
  category,
  goods,
  dashboard,
  overview,
  chat,
  list
]
