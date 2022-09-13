import HTTPRequest from './request'

export const baseUrl = import.meta.env.VITE_APP_BASE_URL
const timeOut = 20000

export const httpRequest = new HTTPRequest({
  baseURL: baseUrl,
  timeout: timeOut
})
