<script lang="ts">
import { isDark } from '../store'

export default defineComponent(() => ({
  isDark,
}))
</script>

<template>
  <nav class="dragging">
    <div class="left-header">
      <RouterLink
        class="non-dragging"
        to="/"
      >
        <h1>
          Text Analysis
        </h1>
      </RouterLink>
      <RouterLink
        class="non-dragging"
        to="/"
      >
        <h1>
          222Text Analysis2222
        </h1>
      </RouterLink>
    </div>
    <div>
      <a
        class="non-dragging"
        href="https://github.com/vtuber-project/TextSmart/issues"
        target="_blank"
      />
      <DarkSwitcher />
    </div>
  </nav>
</template>

<style>
.dragging {
  display: flex;
  justify-content: space-between;
}
.left-header {
  display: flex;
}
</style>
