<template>
  <el-form
    :model="ruleForm"
    ref="formRef"
    :rules="accountRules"
    label-width="70px"
  >
    <el-form-item label="账号" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" show-password />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import type { LoginAccount } from '@/types/login'
import { accountRules } from '@/components/config/rules'

export default defineComponent({
  setup() {
    const ruleForm = reactive({
      name: '',
      password: ''
    })

    return {
      ruleForm,
      accountRules
    }
  }
})
</script>

<style scoped></style>
