<script setup>
import TextAnalysis from '@/components/TextAnalysis.vue'
</script>

<template>
  <a-layout>
    <a-layout-content id="content">
      <TextAnalysis/>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
#content {
  background: white;
  padding: 20px 50px;
}
</style>
