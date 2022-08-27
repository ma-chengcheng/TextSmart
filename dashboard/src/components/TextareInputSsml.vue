<template>
    <a-textarea
            show-count
            :maxlength="100"
            :auto-size="{ minRows: 2, maxRows: 5 }"
            placeholder="Enter ssml to be analyzed..."/>
</template>

<script>
export default {
  name: 'TextareInputSsml'
}
</script>

<style scoped>

</style>
