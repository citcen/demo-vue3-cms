export interface RootState {
  name: string
}

export interface LoginState {
  token: string
  userInfo: object
  menus: any[]
}

export interface RootWithModule {
  login: LoginState
}

export type IStoreType = RootState & RootWithModule
