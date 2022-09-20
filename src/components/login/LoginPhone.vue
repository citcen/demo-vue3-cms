<template>
  <el-form :model="ruleForm" :rules="phoneRules" label-width="70px">
    <el-form-item label="手机号" prop="number">
      <el-input v-model="ruleForm.number" />
    </el-form-item>
    <el-form-item label="验证码" prop="sms">
      <div class="verify-code">
        <el-input v-model="ruleForm.sms" />
        <el-button class="get-btn" type="primary">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { phoneRules } from '@/components/config/rules'

export default defineComponent({
  setup() {
    const ruleForm = reactive({
      number: '',
      sms: ''
    })

    return {
      ruleForm,
      phoneRules
    }
  }
})
</script>

<style scoped lang="less">
.verify-code {
  display: flex;

  .get-btn {
    margin-left: 8px;
  }
}
</style>
