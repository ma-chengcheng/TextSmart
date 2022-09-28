<script setup lang='ts'>
import { themeColor } from './store'

const style = computed<any>(() => ({
  '--theme-color': themeColor.value,
}))
</script>

<template>
  <div class="app" :style="style">
    <RouterView />
  </div>
</template>

<style>
.app {
  overflow: hidden;
  background-color: white;
}
</style>
