<template>
  <div class="user">
    <div class="search">
      <c-form :formItems="formItems" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CForm from '@/components/form'
import type { FormItem } from '@/types/form'

export default defineComponent({
  components: {
    CForm
  },
  setup() {
    const formItems: FormItem[] = [
      {
        index: 1,
        labelName: '姓名',
        placeholder: '请输入姓名',
        type: 'input'
      },
      {
        index: 2,
        labelName: '密码',
        placeholder: '请输入密码',
        type: 'password'
      },
      {
        index: 3,
        labelName: '喜欢的运动',
        type: 'select',
        placeholder: '请选择其中一项',
        options: [
          {
            title: '羽毛球',
            value: '1'
          },
          {
            title: '篮球',
            value: '2'
          },
          {
            title: '乒乓球',
            value: '3'
          }
        ]
      },
      {
        index: 4,
        labelName: '创建时间',
        type: 'datepicker',
        otherOptions: {
          type: 'daterange',
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间'
        }
      }
    ]

    return {
      formItems
    }
  }
})
</script>
