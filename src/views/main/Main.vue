<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '65px' : '210px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handelFoldChange" />
        </el-header>
        <el-main class="page-content">
          <div class="page-router"><router-view></router-view></div>
        </el-main>
        <el-footer class="page-footer">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/navMenu'
import NavHeader from '@/components/navHeader'
import RouterLink from '@/App.vue'
import RouterView from '@/App.vue'

export default defineComponent({
  components: {
    RouterView,
    RouterLink,
    NavMenu,
    NavHeader
  },
  setup() {
    let isCollapse = ref(false)
    const handelFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return {
      handelFoldChange,
      isCollapse
    }
  }
})
</script>
<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);

  .content {
    background-color: #fff;
    border-radius: 8px;
  }

  .page-router {
    background-color: #fff;
    border-radius: 5px;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  text-align: left;
  cursor: pointer;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
