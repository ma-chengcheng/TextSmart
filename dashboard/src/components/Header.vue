<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="text_analysis">
      Text Analysis
    </a-menu-item>
    <a-menu-item key="tool">
      Tools
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  data() {
    return {
      current: ['text_analysis'],
    }
  },
}
</script>

<style scoped>
</style>
