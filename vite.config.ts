import { fileURLToPath, URL } from 'node:url'
import { swc } from "rollup-plugin-swc3";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),swc({
    include: /\.[mc]?[jt]sx?$/,
    exclude: /node_modules/,
    tsconfig: 'tsconfig.json',
    jsc: {
      experimental:{
        plugins:[['swc-plugin-vue-jsx',{}]]
      }
    }
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
