<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" @click="handlerClickChangeRoute">
    <a-menu-item key="analysis">
      Text Analysis
    </a-menu-item>
    <!-- <a-menu-item key="tool">
      Tools
    </a-menu-item> -->
  </a-menu>
  <!-- <router-view></router-view> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const current = ref(['analysis'])
const route = useRoute()
const router = useRouter()
const handlerClickChangeRoute = ({ item, key, keyPath }) => {
  // 当前路由, 不跳转
  if (key === current.value[0])
    return
  router.push({
    name: key,
    // path: `/${key}`,
  })
}
</script>

<style scoped>
</style>
