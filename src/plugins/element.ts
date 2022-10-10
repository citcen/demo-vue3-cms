import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElButtonGroup,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElConfigProvider,
  ElDialog,
  ElImage,
  ElTree,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElCard,
  ElTooltip
} from 'element-plus'

const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElButtonGroup,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElConfigProvider,
  ElDialog,
  ElImage,
  ElTree,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElCard,
  ElTooltip
]

// 全局引用常用element-plus 组件
export default (app: App) => {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component as any)
  }
}
