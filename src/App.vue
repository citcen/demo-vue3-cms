<template>
  <div class="app"></div>
  <el-config-provider :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  components: {
    RouterLink,
    RouterView
  },
  setup() {
    return { zhCn }
  }
})
</script>

<style scoped></style>
