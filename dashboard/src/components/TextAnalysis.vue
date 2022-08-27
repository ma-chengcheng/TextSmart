<template>
  <div>
    <a-form>
      <a-form-item>
        <keep-alive>
          <component :is="componentTables[activeKey]" class="tab"></component>
        </keep-alive>
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="TextareInputText" tab="text"></a-tab-pane>
          <!-- <a-tab-pane key="TextareInputSsml" tab="ssml"></a-tab-pane> -->
        </a-tabs>
      </a-form-item>
      <a-form-item>
        <a-col :span="24" style="text-align: center">
          <a-button type="primary" size="large">ANALYZE</a-button>
        </a-col>
      </a-form-item>
    </a-form>
    <a-divider>Results</a-divider>
    <div class="search-result">
      <a-checkbox-group v-model:value="checkList">
        <a-row> 
          <a-col :span="6" v-for="item in checkboxTable" v-bind:key="item.value">
            <a-checkbox :disabled="item.disabled" :value="item.value" :style="{'color': item.labelColor}">{{item.label}}</a-checkbox>
            </a-col> 
        </a-row>
      </a-checkbox-group>
      <div class="search-result-list" v-for="(aniItemList, index) in mockData">
        <div class="text-block" v-for="(aniItemWord, index) in aniItemList" :class="!checkList.includes(2) && 'is-word-segmentation'">
          <div v-for="(aniItem, index) in aniItemWord" class="single-block">
            <div class="phoneme" v-show="checkList.includes(1)">{{aniItem.phoneme}}</div>
            <div class="word">{{aniItem.char}}</div>
            <div class="normalize_type" v-show="checkList.includes(3)">{{aniItem.normalize_type}}</div>
          </div>
        </div>
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
  { label: 'Grapheme-to-phoneme', value: 1, labelColor: '#ff9016', disabled: false, },
  { label: 'Word segmentation', value: 2, labelColor: '', disabled: false,  },
  { label: 'Text normalization', value: 3, labelColor: '#ed3023', disabled: false,  },
  { label: 'Prosody prediction', value: 4, labelColor: '', disabled: true,  }
]
const checkList = ref([1,2,3])
watch(checkList, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})

// search-result logic
const mockData = [
  [
    [
        {
            "char": "好",
            "phoneme": "hao3",
            "normalize_type": "SELF"
        },
        {
            "char": "好",
            "phoneme": "hao3",
            "normalize_type": "SELF"
        }
    ],
    [
        {
            "char": "学",
            "phoneme": "xue2",
            "normalize_type": "SELF"
        },
        {
            "char": "习",
            "phoneme": "xi2",
            "normalize_type": "SELF"
        }
    ],
    [
        {
            "char": "，",
            "phoneme": "",
            "normalize_type": "PUNC"
        }
    ],
    [
        {
            "char": "天",
            "phoneme": "hao3",
            "normalize_type": "SELF"
        },
        {
            "char": "天",
            "phoneme": "hao3",
            "normalize_type": "SELF"
        }
    ],
    [
        {
            "char": "向",
            "phoneme": "xue2",
            "normalize_type": "SELF"
        },
        {
            "char": "上",
            "phoneme": "xi2",
            "normalize_type": "SELF"
        }
    ],
    [
        {
            "char": "。",
            "phoneme": "",
            "normalize_type": "PUNC"
        }
    ]
  ],
  [
    [
        {
            "char": "未",
            "phoneme": "wei4"
        },
        {
            "char": "来",
            "phoneme": "lai2"
        }
    ],
    [
        {
            "char": "可",
            "phoneme": "ke2",
            "normalize_type": "SELF"
        },
        {
            "char": "期",
            "phoneme": "qi1",
            "normalize_type": "SELF"
        }
    ],
    [
        {
            "char": "。",
            "phoneme": "",
            "normalize_type": "PUNC"
        }
    ]
  ]
]


// form logic


</script>
<style scoped>
.search-result {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
  padding: 20px;
  overflow-x: scroll;
}
.search-result-list {
  display: flex;
}
.text-block {
  display: flex;
  border-right: 1px solid #ccc;
  flex: 1;
}
.phoneme {
  color: #ff9016;
  font-size: 14px;
}
.word {
  font-size: 1em;
  font-weight: 500;
}
.normalize_type {
  font-size: 14px;
  color: #ed3023;
}
.single-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 100px;
  flex: 1;
}
.is-word-segmentation {
  border-right: none;
}
</style>
