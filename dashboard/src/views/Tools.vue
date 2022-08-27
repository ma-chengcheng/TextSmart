<script setup>
// import Tools from '@/components/Tools.vue'
</script>

<template>
  <a-layout>
    <a-layout-content id="content">
     <!-- <Tools/> -->
     <a-row>
      <a-col>
        <a-card size="small" style="width: 300px">
          <a-card-meta title="Data Operation" description=""></a-card-meta>
          <template class="ant-card-actions" #actions>
            <ArrowRightOutlined key="edit"/>
          </template>
        </a-card>
      </a-col>
    </a-row>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
#content {
  background: white;
  padding: 20px 50px;
}
</style>
