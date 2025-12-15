<template>
  <div :class="wrapClass">
    <div class="lz-support-title">谢谢各位赞助</div>
    <img src="../../public/images/pay-wx.jpg" alt="" />
    <img src="../../public/images/pay-zfb.jpg" alt=""  />
  </div>
  <!-- 背景组件 -->
  <CanvasBackground />
</template>

<script>
import CanvasBackground from "../components/CanvasBackground.vue";
import { getScreenOrientation } from "../utils/screen";

export default {
  components: {
    CanvasBackground
  },
  data() {
    return {
      wrapClass: 'lz-support-landscape',
      isPortrait: false,  // 是否为竖屏（高度 > 宽度）
      isLandscape: false, // 是否为横屏（宽度 > 高度）
    };
  },
  mounted() {
    // 初始化尺寸
    this.updateWindowSize();
    // 监听窗口变化
    window.addEventListener('resize', this.updateWindowSize);
  },
  beforeUnmount() {
    // 移除监听，防止内存泄漏
    window.removeEventListener('resize', this.updateWindowSize);
  },
  methods: {
    updateWindowSize() {
        const screenOrientation = getScreenOrientation();
        this.wrapClass = `lz-support-${screenOrientation}`;
        console.log(123, screenOrientation);
    }
  }
};
</script>

<style lang="less" scoped>
.lz-support {
    &-landscape {
        height: 100vh;
        display: flex;
        justify-content: center;
        color: #fff;
    }
    &-portrait {
        width: 100vw;
        height: 100vh;
        color: #fff;

        img {
            width: 58vw;
        }
    }
    img {
        height: 100vh;
    }
    &-title {
        // writing-mode: vertical-rl;
        // letter-spacing: 20px;
        font-size: 18px;
        line-height: 32px;
        margin: 0 36px;
    }
}
</style>
