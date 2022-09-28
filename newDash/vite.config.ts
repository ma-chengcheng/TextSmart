import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import dayjs from 'dayjs'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
    Pages({
      importMode: 'sync',
    }),
    Components({
      dts: 'src/components.d.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
  define: {
    __BUILD_TIME__: JSON.stringify(dayjs().format('YYYY/MM/DD HH:mm')),
  },
  resolve: {
    // alias: {

    // },
  },
})
