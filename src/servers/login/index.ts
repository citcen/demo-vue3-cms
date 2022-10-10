import type { LoginAccount } from '@/types/login'
import { httpRequest } from '@/servers'

enum LoginAPI {
  AccountLogin = '/login',
  UserInfo = '/user/',
  UserMenus = '/role'
}

export const accountLoginRequest = (param: LoginAccount) => {
  return httpRequest.post({
    url: LoginAPI.AccountLogin,
    data: param
  })
}

export const requestUserInfo = (id: number) => {
  return httpRequest.get({
    url: LoginAPI.UserInfo + id
  })
}

export const requestUserMenus = (id: number) => {
  return httpRequest.get({
    url: `${LoginAPI.UserMenus}/${id}/menu`
  })
}
