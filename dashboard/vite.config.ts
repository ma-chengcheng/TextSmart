import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components({
    dts: true,
    dirs: ['src/components'],
    deep: true,
    resolvers: [AntDesignVueResolver({ importStyle: false, resolveIcons: true })]
  })],
  resolve: {
    alias: {
        '@': resolve(__dirname, 'src'),
    },
    extensions: ['*', '.js', '.ts', '.vue', '.json'],
  },
  server: {
    cors: true,
    port: 4173,
    // proxy: {},
  },
})
