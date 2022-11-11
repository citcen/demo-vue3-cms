type ItemType = 'input' | 'password' | 'select' | 'datepicker'

// select
type Option = {
  title: string
  value: string
}
// 时间选择器等配置
type otherOptions = {
  type: string
  startPlaceholder?: string
  endPlaceholder?: string
}

export interface FormItem {
  index: number
  type: ItemType
  labelName: string
  rules?: any[]
  placeholder?: string
  options?: Option[]
  otherOptions?: otherOptions
}
