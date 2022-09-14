/*  封装 axios 请求  */
import axios from 'axios'
import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestInterceptors, ReqConfig } from './types'

const DEFAULT_LOADING = true

export default class HTTPRequest {
  instance: AxiosInstance
  interceptors?: RequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: ReqConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    this.setupInterceptor()
  }

  setupInterceptor(): void {
    // 实例拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 全局拦截 request
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      if (this.showLoading) {
        this.loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.5)'
        })
      }
      return config
    })
    // 全局拦截 response
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        switch (res.request.status) {
          case 404:
            console.log('404')
            break
          case 403:
            console.log(403)
            break
        }
        this.loading?.close()
        return res
      },
      (err) => {
        switch (err.response.status) {
          case '404':
            console.log('404')
            break
          case '403':
            console.log(403)
            break
        }
        this.loading?.close()
        return err
      }
    )
  }

  request<T>(config: ReqConfig): Promise<T> {
    if (!config.showLoading) {
      this.showLoading = false
    }

    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T>(config: ReqConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: ReqConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T>(config: ReqConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T>(config: ReqConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}
