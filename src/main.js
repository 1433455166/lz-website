import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import VConsole from 'vconsole';
import { isMobile} from './utils/device';

let vConsole;

// 只在开发环境或测试环境加载 vConsole
if (process.env.NODE_ENV !== 'production' && isMobile()) {
// if (process.env.NODE_ENV !== 'production') {
  localStorage.removeItem('vConsole_switch_x');
  localStorage.removeItem('vConsole_switch_y');

  vConsole = new VConsole();

  setTimeout(() => {
    const switchBtn = document.querySelector('#__vconsole .vc-switch');
    if (!switchBtn) return;

    // 1. 初始设为 0
    switchBtn.style.bottom = '0';
    switchBtn.style.right = '0';


    // 2. 监听 style 属性变化（拖拽后会被改回 20px）
    const observer = new MutationObserver(() => {
      const currentBottom = parseFloat(switchBtn.style.bottom);
      // 如果被改回 20px，就再改回 0
      if (currentBottom === 20) {
        switchBtn.style.bottom = '0';
      }
    });

    observer.observe(switchBtn, {
      attributes: true,
      attributeFilter: ['style']
    });
  }, 500);

  console.log('vConsole 已启用');
}

createApp(App).use(router).mount('#app');
