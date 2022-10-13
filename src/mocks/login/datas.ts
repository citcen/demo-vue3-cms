export const usersData = [
  {
    id: 1,
    name: 'admin'
  },
  {
    id: 2,
    name: '333'
  }
]

export const userInfoData = [
  {
    id: 1,
    name: 'admin',
    realname: 'admin',
    cellphone: 18812121313,
    enable: 1,
    createAt: '2022-01-02T10:20:26.000Z',
    updateAt: '2022-01-03T04:50:13.000Z',
    role: {
      id: 1,
      name: '超级管理员',
      intro: '所有权限',
      createAt: '2022-01-02T10:01:52.000Z',
      updateAt: '2022-01-02T10:01:52.000Z'
    },
    department: {
      id: 1,
      name: '总裁办',
      parentId: null,
      createAt: '2022-01-02T10:03:09.000Z',
      updateAt: '2022-01-05T08:25:46.000Z',
      leader: 'admin'
    }
  }
]

export const menuList = [
  {
    id: 38,
    name: '系统总览',
    type: 1,
    url: '/main/analysis',
    icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"></path></svg>',
    sort: 1,
    createAt: '2022-04-19T14:11:02.000Z',
    updateAt: '2022-08-20T06:59:55.000Z',
    children: [
      {
        id: 39,
        url: '/main/analysis/overview',
        name: '核心技术',
        sort: 106,
        type: 2,
        children: null,
        createAt: '2022-01-02 18:09:11.000000',
        parentId: 38,
        updateAt: '2022-08-19 15:54:41.000000'
      },
      {
        id: 40,
        url: '/main/analysis/dashboard',
        name: '商品统计',
        sort: 107,
        type: 2,
        children: null,
        createAt: '2022-01-02 18:09:22.000000',
        parentId: 38,
        updateAt: '2022-08-19 15:56:08.000000'
      }
    ]
  },
  {
    id: 1,
    name: '系统管理',
    type: 1,
    url: '/main/system',
    icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"></path></svg>',
    sort: 2,
    createAt: '2022-01-02T10:08:14.000Z',
    updateAt: '2022-08-20T07:00:08.000Z',
    children: [
      {
        id: 2,
        url: '/main/system/user',
        name: '用户管理',
        sort: 100,
        type: 2,
        children: [
          {
            id: 5,
            url: null,
            name: '创建用户',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 2,
            updateAt: '2022-08-19 16:10:06.000000',
            permission: 'system:users:create'
          },
          {
            id: 6,
            url: null,
            name: '删除用户',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 2,
            updateAt: '2022-08-19 16:10:21.000000',
            permission: 'system:users:delete'
          },
          {
            id: 7,
            url: null,
            name: '修改用户',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 2,
            updateAt: '2022-08-19 16:10:24.000000',
            permission: 'system:users:update'
          },
          {
            id: 8,
            url: null,
            name: '查询用户',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 2,
            updateAt: '2022-08-19 16:10:26.000000',
            permission: 'system:users:query'
          }
        ],
        createAt: '2022-01-02 18:08:47.000000',
        parentId: 1,
        updateAt: '2022-08-19 15:52:01.000000'
      },
      {
        id: 3,
        url: '/main/system/department',
        name: '部门管理',
        sort: 101,
        type: 2,
        children: [
          {
            id: 17,
            url: null,
            name: '创建部门',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 3,
            updateAt: '2022-04-19 21:59:39.000000',
            permission: 'system:department:create'
          },
          {
            id: 18,
            url: null,
            name: '删除部门',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 3,
            updateAt: '2022-04-19 22:05:07.000000',
            permission: 'system:department:delete'
          },
          {
            id: 19,
            url: null,
            name: '修改部门',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 3,
            updateAt: '2022-04-19 22:05:11.000000',
            permission: 'system:department:update'
          },
          {
            id: 20,
            url: null,
            name: '查询部门',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 3,
            updateAt: '2022-04-19 22:05:14.000000',
            permission: 'system:department:query'
          }
        ],
        createAt: '2022-01-02 18:09:11.000000',
        parentId: 1,
        updateAt: '2022-08-19 15:52:04.000000'
      },
      {
        id: 4,
        url: '/main/system/menu',
        name: '菜单管理',
        sort: 103,
        type: 2,
        children: [
          {
            id: 21,
            url: null,
            name: '创建菜单',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 4,
            updateAt: '2022-04-19 21:59:39.000000',
            permission: 'system:menu:create'
          },
          {
            id: 22,
            url: null,
            name: '删除菜单',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 4,
            updateAt: '2022-04-19 22:05:18.000000',
            permission: 'system:menu:delete'
          },
          {
            id: 23,
            url: null,
            name: '修改菜单',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 4,
            updateAt: '2022-04-19 22:05:21.000000',
            permission: 'system:menu:update'
          },
          {
            id: 24,
            url: null,
            name: '查询菜单',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 4,
            updateAt: '2022-04-19 22:05:24.000000',
            permission: 'system:menu:query'
          }
        ],
        createAt: '2022-01-02 18:09:22.000000',
        parentId: 1,
        updateAt: '2022-08-19 15:52:07.000000'
      },
      {
        id: 25,
        url: '/main/system/role',
        name: '角色管理',
        sort: 102,
        type: 2,
        children: [
          {
            id: 26,
            url: null,
            name: '创建角色',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 25,
            updateAt: '2022-04-19 21:59:39.000000',
            permission: 'system:role:create'
          },
          {
            id: 27,
            url: null,
            name: '删除角色',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 25,
            updateAt: '2022-04-19 21:59:44.000000',
            permission: 'system:role:delete'
          },
          {
            id: 28,
            url: null,
            name: '修改角色',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 25,
            updateAt: '2022-04-19 21:59:47.000000',
            permission: 'system:role:update'
          },
          {
            id: 29,
            url: null,
            name: '查询角色',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 25,
            updateAt: '2022-04-19 21:59:49.000000',
            permission: 'system:role:query'
          }
        ],
        createAt: '2022-01-02 18:09:22.000000',
        parentId: 1,
        updateAt: '2022-08-19 15:52:17.000000'
      }
    ]
  },
  {
    id: 9,
    name: '商品中心',
    type: 1,
    url: '/main/product',
    icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z"></path></svg>',
    sort: 3,
    createAt: '2022-01-05T12:15:56.000Z',
    updateAt: '2022-08-20T07:00:25.000Z',
    children: [
      {
        id: 15,
        url: '/main/product/category',
        name: '商品类别',
        sort: 104,
        type: 2,
        children: [
          {
            id: 30,
            url: null,
            name: '创建类别',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 15,
            updateAt: '2022-04-19 21:59:39.000000',
            permission: 'system:category:create'
          },
          {
            id: 31,
            url: null,
            name: '删除类别',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 15,
            updateAt: '2022-04-19 21:59:44.000000',
            permission: 'system:category:delete'
          },
          {
            id: 32,
            url: null,
            name: '修改类别',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 15,
            updateAt: '2022-04-19 21:59:47.000000',
            permission: 'system:category:update'
          },
          {
            id: 33,
            url: null,
            name: '查询类别',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 15,
            updateAt: '2022-04-19 21:59:49.000000',
            permission: 'system:category:query'
          }
        ],
        createAt: '2022-04-19 21:55:11.000000',
        parentId: 9,
        updateAt: '2022-08-19 15:52:12.000000'
      },
      {
        id: 16,
        url: '/main/product/goods',
        name: '商品信息',
        sort: 105,
        type: 2,
        children: [
          {
            id: 34,
            url: null,
            name: '创建商品',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 16,
            updateAt: '2022-08-19 17:29:46.000000',
            permission: 'system:goods:create'
          },
          {
            id: 35,
            url: null,
            name: '删除商品',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 16,
            updateAt: '2022-08-19 17:29:50.000000',
            permission: 'system:goods:delete'
          },
          {
            id: 36,
            url: null,
            name: '修改商品',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 16,
            updateAt: '2022-08-19 17:29:53.000000',
            permission: 'system:goods:update'
          },
          {
            id: 37,
            url: null,
            name: '查询商品',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 16,
            updateAt: '2022-08-19 17:30:02.000000',
            permission: 'system:goods:query'
          }
        ],
        createAt: '2022-04-19 21:57:33.000000',
        parentId: 9,
        updateAt: '2022-08-19 15:52:14.000000'
      },
      {
        id: 955,
        url: '/product/goods',
        name: '商品信息',
        sort: 104,
        type: 2,
        children: null,
        createAt: '2022-09-29 00:02:07.000000',
        parentId: 9,
        updateAt: '2022-09-29 00:02:07.000000'
      }
    ]
  },
  {
    id: 41,
    name: '随便聊聊',
    type: 1,
    url: '/main/story',
    icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z"></path></svg>',
    sort: 4,
    createAt: '2022-04-19T14:11:02.000Z',
    updateAt: '2022-08-20T07:00:44.000Z',
    children: [
      {
        id: 42,
        url: '/main/story/chat',
        name: '你的故事',
        sort: 108,
        type: 2,
        children: null,
        createAt: '2022-01-02 18:09:11.000000',
        parentId: 41,
        updateAt: '2022-08-19 17:29:31.000000'
      },
      {
        id: 43,
        url: '/main/story/list',
        name: '故事列表',
        sort: 109,
        type: 2,
        children: [
          {
            id: 10,
            url: null,
            name: '删除故事',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 43,
            updateAt: '2022-04-19 21:59:44.000000',
            permission: 'system:story:delete'
          },
          {
            id: 11,
            url: null,
            name: '修改故事',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 43,
            updateAt: '2022-04-19 21:59:47.000000',
            permission: 'system:story:update'
          },
          {
            id: 12,
            url: null,
            name: '查询故事',
            sort: null,
            type: 3,
            createAt: '2022-01-03 13:41:01.000000',
            parentId: 43,
            updateAt: '2022-04-19 21:59:49.000000',
            permission: 'system:story:query'
          }
        ],
        createAt: '2022-01-02 18:09:11.000000',
        parentId: 41,
        updateAt: '2022-08-19 15:52:29.000000'
      }
    ]
  }
]
