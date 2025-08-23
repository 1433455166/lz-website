import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import VConsole from 'vconsole'

let vConsole;

// 只在开发环境或测试环境加载 vConsole
// if (process.env.NODE_ENV !== 'production' && isMobile()) {
if (process.env.NODE_ENV !== 'production') {
  vConsole = new VConsole();
  console.log('vConsole 已启用');
}

createApp(App).use(router).mount('#app');
