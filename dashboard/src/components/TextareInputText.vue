<template>
    <a-textarea
            show-count
            :maxlength="100"
            :auto-size="{ minRows: 2, maxRows: 5 }"
            placeholder="Enter text to be analyzed..."
            v-model:value="text"
            />
</template>

<script>
export default {
  name: 'TextareInputText',
  data() {
    return {
      text: '好好学习天天向上,天天向上'
    }
  }
}
</script>

<style scoped>

</style>
