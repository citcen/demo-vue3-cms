<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-icon class="el-icon--right">
        <Avatar />
      </el-icon>
      <span> {{ name }}</span>
    </span>
    <span></span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          ><el-icon><SwitchButton /></el-icon>退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { IUseStore } from '@/store'

export default defineComponent({
  setup() {
    const store = IUseStore()
    const name = computed(() => store.state.login.userInfo.name)

    return {
      name
    }
  }
})
</script>
<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  //color: var(--el-color-primary);
  display: flex;
  align-items: center;

  .el-icon--right {
    height: 30px;
    width: 30px;
  }

  .el-icon svg {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
