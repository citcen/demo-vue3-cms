export const accountRules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,16}$/,
      message: '必须是6~16位字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '必须是3位以上数字',
      trigger: 'blur'
    },
    { max: 16, message: '密码长度不能超过16位', trigger: 'blur' }
  ]
}

export const phoneRules = {
  number: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^[0-9]{11}$/, message: '请输入11位的手机号', trigger: 'blur' }
  ],
  sms: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { min: 6, max: 6, message: '请输入6位的验证码', trigger: 'blur' }
  ]
}
