<template>
  <div>
    <a-form>
      <a-form-item>
        <a-textarea
            show-count
            :maxlength="100"
            :auto-size="{ minRows: 2, maxRows: 5 }"
            placeholder="Enter text to be analyzed..."/>
        <p style="text-align: left">
          <a-button type="link" size="small">text</a-button>
          <a-divider type="vertical"/>
          <a-button type="text" size="small">ssml</a-button>
        </p>
      </a-form-item>
      <a-form-item>
        <a-col :span="24" style="text-align: center">
          <a-button type="primary" size="large">ANALYZE</a-button>
        </a-col>
      </a-form-item>
    </a-form>
    <a-divider>Results</a-divider>
    <div class="search-result-list">
      <a-radio-group v-model:value="value">
        <a-radio :value="1">Grapheme-to-phoneme</a-radio>
        <a-radio :value="2">Word segmentation</a-radio>
        <a-radio :value="3">Text normalization</a-radio>
        <a-radio :value="4">Prosody prediction</a-radio>
      </a-radio-group>
      <div style="padding-top: 20px">
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
  padding: 20px;
}
</style>