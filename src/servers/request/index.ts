/*  封装 axios 请求  */
import axios from 'axios'
import { ElLoading, ElMessage } from 'element-plus'
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
    /*if (this.instance.method.toUpperCase() === "GET") {
      // 如果是GET请求
      endpoint += `${qs.stringify(data)}`;
    } else {
      // 其他请求
      config.body = JSON.stringify(data || {});
    }*/

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
        this.loading?.close()
        if (res.data.code !== '00000') {
          ElMessage.error(res.data.message)
          return false
        } else return res
      },
      (err) => {
        this.loading?.close()
        ElMessage.error(err?.response?.message || '请求失败，请稍后再试~')
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
