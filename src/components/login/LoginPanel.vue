<template>
  <div class="container">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="currentTab" type="border-card" class="demo-tabs" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon class="icon"><Avatar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon class="icon"><Iphone /></el-icon>
            <span>短信登录</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="control">
      <el-checkbox v-model="isKeepPwd">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handelLoginClink()"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from '@/components/login/LoginAccount.vue'
import LoginPhone from '@/components/login/LoginPhone.vue'

export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    const isKeepPwd = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref<string>('account')

    const handelLoginClink = () => {
      if (currentTab.value === 'account') {
        // 账户登录
        accountRef.value?.accountLogin(isKeepPwd.value)
      } else {
        // 手机登录
        phoneRef.value?.phoneLogin()
      }
    }

    return {
      isKeepPwd,
      handelLoginClink,
      accountRef,
      phoneRef,
      currentTab
    }
  }
})
</script>

<style scoped lang="less">
.container {
  width: 330px;
  margin-top: -5%;

  .title {
    text-align: center;
    color: #444;
  }

  .icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .control {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
