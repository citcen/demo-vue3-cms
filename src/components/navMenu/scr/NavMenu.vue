<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/images/logo.svg" alt="logo" />
      <span>vue3</span>
    </div>
    <el-menu default-active="2" class="el-menu-vertical" :collapse="collapse">
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
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleMenuItemClick(subItem)"
                >{{ subItem.name }}</el-menu-item
              >
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
import { useRouter } from 'vue-router'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = IUseStore()
    const userMenus = computed(() => store.state.login.menus)

    const router = useRouter()

    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? '/404'
      })
    }

    return {
      userMenus,
      handleMenuItemClick
    }
  }
})
</script>
<style scoped lang="less">
.nav-menu {
  height: 100%;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 8px 8px 8px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #006ee0;

    img {
      height: 100%;
      margin: 0 10px;
    }

    span {
      font-size: 16px;
      font-weight: 700;
      color: white;
      margin-left: 10px;
    }
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  height: calc(100% - 48px);
}

.el-menu {
  border-right: none;
}
</style>
