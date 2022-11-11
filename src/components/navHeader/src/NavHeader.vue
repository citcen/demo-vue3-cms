<template>
  <div class="nav-header">
    <el-icon @click="foldHandel">
      <Expand v-if="isFold" />
      <Fold v-else />
    </el-icon>
    <div class="content">
      <div class="breadcrumb">
        <span>第一个</span>
        <span>第二个</span>
      </div>
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './UserInfo.vue'

export default defineComponent({
  components: {
    UserInfo
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const foldHandel = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      foldHandel,
      isFold
    }
  }
})
</script>
<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .el-icon {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
