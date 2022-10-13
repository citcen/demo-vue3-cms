<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/images/logo.svg" alt="logo" />
      <span>vue3</span>
    </div>
    <el-menu default-active="2" class="el-menu-vertical">
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1"
          ><!-- 1级菜单 有子菜单 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon" v-html="item.icon"></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id"
              ><!-- 2级菜单 -->
              <el-menu-item :index="subItem.id + ''">{{
                subItem.name
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else
          ><!-- 1级菜单 无子菜单 -->
          <el-menu-item :index="item.id + ''">
            <el-icon v-if="item.icon" v-html="item.icon"></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { IUseStore } from '@/store'

export default defineComponent({
  setup() {
    const store = IUseStore()
    const userMenus = computed(() => store.state.login.menus)

    return {
      userMenus
    }
  }
})
</script>
<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #006ee0;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 100%;
      margin: 0 10px;
    }

    span {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  height: calc(100% - 48px);
}
</style>
