<template>
  <div>
    <a-form>
      <a-form-item>
        <keep-alive>
          <component :is="componentTables[activeKey]" class="tab"></component>
        </keep-alive>
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="TextareInputText" tab="text"></a-tab-pane>
          <a-tab-pane key="TextareInputSsml" tab="ssml"></a-tab-pane>
        </a-tabs>
      </a-form-item>
      <a-form-item>
        <a-col :span="24" style="text-align: center">
          <a-button type="primary" size="large">ANALYZE</a-button>
        </a-col>
      </a-form-item>
    </a-form>
    <a-divider>Results</a-divider>
    <div class="search-result-list">
      <a-checkbox-group v-model:value="checkList" name="checkboxgroup" :options="checkboxTable" />
      <div style="padding-top: 20px">
        <div>{{checkList}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

// block-input logic
import TextareInputSsml from './TextareInputSsml.vue'
import TextareInputText from './TextareInputText.vue'
const componentTables = {
  TextareInputSsml,
  TextareInputText
}
const activeKey = ref('TextareInputText')

// block-checkout logic
const checkboxTable = [
  { label: 'Grapheme-to-phoneme', value: 1 },
  { label: 'Word segmentation', value: 2 },
  { label: 'Text normalization', value: 3 },
  { label: 'Prosody prediction', value: 4 }
]
const checkList = ref([])
watch(checkList, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})

// form logic

</script>
<style scoped>
.search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
  padding: 20px;
}
</style>
