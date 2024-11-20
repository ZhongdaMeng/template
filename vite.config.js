import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



export default ({ mode }) => defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    proxy: {
      [loadEnv(mode, process.cwd()).VITE_APP_BASE_API]: {
        target: 'https://h5.qzypack.cn:1443',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\[loadEnv(mode, process.cwd()).VITE_APP_BASE_API]/, [loadEnv(mode, process.cwd()).VITE_APP_BASE_API])
      }
    }
  },
})