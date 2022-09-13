import { rest } from 'msw'
import { baseUrl } from '@/servers'

export const handlers = [
  rest.post(`${baseUrl}/login`, (req, res, ctx) => {
    const reqBody: any = req.body
    if (reqBody.username === '1') {
      return res(
        ctx.status(403),
        ctx.json({
          message: '用户名或密码错误'
        })
      )
    }

    sessionStorage.setItem('is-authenticated', 'true')
    return res(
      ctx.status(200),
      ctx.json({
        user: {
          // id: nanoid(),
          name: (req.body as any).username
          // token: req.id,
        }
      })
    )
  })
]

export const authHandlers = []
