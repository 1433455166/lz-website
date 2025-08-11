import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 允许外部访问
    port: 9527,      // 你可以自定义端口，默认是 3000
    open: true       // 可选：启动时自动打开浏览器
  }
})
