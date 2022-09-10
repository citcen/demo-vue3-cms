<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h2>{{ $store.state.message }}</h2>
  <RouterLink to="/">main</RouterLink>
  <RouterLink to="/login">
    <el-button type="primary">登录</el-button>
  </RouterLink>
  <RouterView />
</template>

<style scoped></style>
