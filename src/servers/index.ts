import HTTPRequest from './request'
import localCache from '@/utils/cache'

export const baseUrl = import.meta.env.VITE_APP_BASE_URL
const timeOut = 20000

export const httpRequest = new HTTPRequest({
  baseURL: baseUrl,
  timeout: timeOut,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token') || ''
      return {
        headers: {
          Authorization: token ? `Bearer ${token}` : ''
        },
        ...config
      }
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
