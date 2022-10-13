<template>
  <div class="nav-header">
    <el-icon @click="foldHandel">
      <Expand v-if="isFold" />
      <Fold v-else />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
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
  .el-icon {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
