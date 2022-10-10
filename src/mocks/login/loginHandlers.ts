import { rest } from 'msw'
import { baseUrl } from '@/servers'
import { userInfoData, usersData, menuList } from '@/mocks/login/datas'
import { nanoid } from 'nanoid'

export const loginHandlers = [
  // 登录
  rest.post(`${baseUrl}/login`, (req, res, ctx) => {
    const reqBody = req.body as any
    if (reqBody.name !== 'admin' && reqBody.name !== '333') {
      return res(
        ctx.status(200),
        ctx.json({
          code: '00001',
          message: '用户名或密码错误'
        })
      )
    }

    const user = usersData.find((item) => {
      return item.name === reqBody.name
    })

    localStorage.setItem('is-authenticated', 'true')
    return res(
      ctx.status(200),
      ctx.json({
        code: '00000',
        token: nanoid(),
        ...user
      })
    )
  }),

  // 请求用户信息
  rest.get(`${baseUrl}/user/:id`, (req, res, ctx) => {
    const isAuthenticated = localStorage.getItem('is-authenticated')
    if (!isAuthenticated) {
      return res(
        ctx.status(200),
        ctx.json({
          code: '00002',
          message: 'session失效，请重新登录'
        })
      )
    }

    const id = req.params.id
    const userInfo = userInfoData.find((item) => {
      return item.id === Number(id)
    })

    return res(
      ctx.status(200),
      ctx.json({
        code: '00000',
        userInfo
      })
    )
  }),

  // 请求菜单列表
  rest.get(`${baseUrl}/role/:id/menu`, (req, res, ctx) => {
    const isAuthenticated = localStorage.getItem('is-authenticated')
    if (!isAuthenticated) {
      return res(
        ctx.status(200),
        ctx.json({
          code: '00002',
          message: 'session失效，请重新登录'
        })
      )
    }

    const id = req.params.id
    const list = menuList.find((item) => {
      return item.id === Number(id)
    })

    return res(
      ctx.status(200),
      ctx.json({
        code: '00000',
        list
      })
    )
  })
]
