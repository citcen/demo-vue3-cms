<template>
  <div class="app"></div>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
  components: {
    RouterLink,
    RouterView
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
