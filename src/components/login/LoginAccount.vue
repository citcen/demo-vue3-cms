<template>
  <el-form
    ref="formRef"
    :model="accountForm"
    :rules="accountRules"
    label-width="70px"
  >
    <el-form-item label="账号" prop="name">
      <el-input v-model="accountForm.name" placeholder="admin" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="accountForm.password"
        placeholder="任意数字字母"
        show-password
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import type { LoginAccount } from '@/types/login'
import { accountRules } from '@/components/config/rules'
import type { FormInstance } from 'element-plus'
import localCache from '@/utils/cache'

export default defineComponent({
  setup: function () {
    const store = useStore()

    const accountForm = reactive({
      name: localCache.getCache('_name_') ?? '',
      password: localCache.getCache('_pwd_') ?? ''
    })
    const formRef = ref<FormInstance>()

    const accountLogin = (isKeepPwd: boolean) => {
      // 验证用户名和密码
      formRef.value?.validate((valid) => {
        if (valid) {
          const name = accountForm.name
          const pwd = accountForm.password
          // 是否保存密码
          if (isKeepPwd) {
            localCache.setCache('_name_', name)
            localCache.setCache('_pwd_', pwd)
          } else {
            localCache.delCache('_name_')
            localCache.delCache('_pwd_')
          }

          store.dispatch('loginModule/accountLoginAction', { ...accountForm })
        }
      })
    }

    return {
      formRef,
      accountForm,
      accountRules,
      accountLogin
    }
  }
})
</script>

<style scoped></style>
