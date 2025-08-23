<template>
  <div class="app">
    <header :class='headerClass'>
        <img :style="logoProps.style" :src="logoProps.src" alt="">
        <div class="width-200">
            <h1>欢迎来到狼族</h1>
            <!-- <p class="device-info">当前设备类型：{{ deviceTypeText[deviceType] }}</p> -->
        </div>
        <div :style="userProps.style">用户信息</div>
    </header>

    <main class="main-content">
      <DeviceCard
        v-for="(item, index) in cards"
        :key="index"
        :title="item.title"
        :content="item.content"
      />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import DeviceCard from '../../components/DeviceCard.vue'
import { DEVICE_TYPE } from '../../common/enum'
import { getOS, getBrowser, isMobile, isIPad } from '../../utils/device'
import { lzSuccessLog } from '../../utils/log'

// 卡片数据
const cards = ref([
  { title: '响应式布局', content: '使用 Flexbox 和媒体查询实现多端适配。' },
  { title: 'Vue 3 组合式 API', content: 'setup 语法糖 + ref/reactive 管理状态。' },
  { title: '移动优先设计', content: '从手机端开始设计，逐步增强桌面体验。' },
  { title: '视口适配', content: '设置 viewport meta，确保移动端正确缩放。' }
])

// 设备类型文本
const deviceTypeText = {
    [DEVICE_TYPE.phone]: '手机',
    [DEVICE_TYPE.tablet]: '平板',
    [DEVICE_TYPE.desktop]: '桌面',
}

// 设备类型判断
const deviceType = ref('未知');

const updateDeviceType = () => {
  const width = window.innerWidth
  if (width < 768) {
    deviceType.value = DEVICE_TYPE.phone
  } else if (width < 1024) {
    deviceType.value = DEVICE_TYPE.tablet
  } else {
    deviceType.value = DEVICE_TYPE.desktop
  }
}

// 初始判断 + 监听窗口变化
onMounted(() => {
  updateDeviceType();
  window.addEventListener('resize', updateDeviceType);
//   lzSuccessLog("操作系统: ", getOS());
//   lzSuccessLog("浏览器: ", getBrowser());
  lzSuccessLog("是否是移动端: ", isMobile());
  console.log('%c 当前设备类型：', 
           'background: orange; color: white; padding: 2px 6px; border-radius: 3px;', deviceTypeText[deviceType.value]);
})

const headerClass = computed(() => {
    return [
        'header',
        `header-${deviceType.value}`
    ];
})

const logoProps = computed(() => {
    return {
        style: {
            width: deviceType.value === DEVICE_TYPE.phone ? '64px' : '200px',
        },
        src: deviceType.value === DEVICE_TYPE.phone 
          ? '/images/wolf003.svg' 
          : '/images/logo.svg',
    }
})

const userProps = computed(() => {
    return {
        style: {
            width: deviceType.value === DEVICE_TYPE.phone ? '64px' : '200px',
        },
    }
})

// 清理事件监听（可选）
// 可在 onUnmounted 中移除监听
</script>

<style scoped>
.app {
  min-height: 100vh;
  background-color: #f7f9fc;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
}

.header {
  text-align: center;
  padding: 1rem 1rem;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-phone {
    /* flex-direction: column; */
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
}

.header h1 {
  margin: 0;
  font-size: 2rem;
}

.device-info {
  font-size: 1rem;
  opacity: 0.9;
  margin-top: 0.5rem;
}

.main-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
  /* max-width: 1400px; */
  margin: 0 auto;
}
</style>