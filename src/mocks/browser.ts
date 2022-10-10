import { setupWorker } from 'msw'
import { loginHandlers } from '@/mocks/login/loginHandlers'

// 这将使用给定的请求处理程序配置 Service Worker
export const worker = setupWorker(...loginHandlers)
