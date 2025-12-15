<template>
  <canvas ref="canvasRef" class="canvas-bg"></canvas>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

// Canvas 引用
const canvasRef = ref(null);

// 动画帧 ID，用于取消 requestAnimationFrame
let animationId = null;

// 粒子类
class Particle {
  constructor(x, y, speedX, speedY, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
  }

  update(width, height) {
    this.x += this.speedX;
    this.y += this.speedY;

    // 边界反弹
    if (this.x < 0 || this.x > width) this.speedX *= -1;
    if (this.y < 0 || this.y > height) this.speedY *= -1;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// 初始化粒子
function createParticles(count, width, height, speed) {
  const particles = [];
  for (let i = 0; i < count; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() * 2 + 1;

    const hue1 = Math.floor(Math.random() * 100 + 155); // R: 155-255
    const hue2 = Math.floor(Math.random() * 100 + 155); // G: 155-255
    const hue3 = Math.floor(Math.random() * 200 + 55);  // B: 55-255
    const opacity = Math.random() * 0.5 + 0.2;
    const color = `rgba(${hue1}, ${hue2}, ${hue3}, ${opacity})`;

    const directionX = Math.random() > 0.5 ? 1 : -1;
    const directionY = Math.random() > 0.5 ? 1 : -1;
    const baseSpeed = speed * (0.5 + Math.random() * 0.5);
    const speedX = directionX * baseSpeed;
    const speedY = directionY * baseSpeed;

    particles.push(new Particle(x, y, speedX, speedY, size, color));
  }
  return particles;
}

// 绘制连接线
function drawConnections(ctx, particles, maxDistance = 100) {
  ctx.lineWidth = 1;
  ctx.beginPath();

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        const opacity = (1 - distance / maxDistance) * 0.2;
        ctx.strokeStyle = `rgba(200, 200, 255, ${opacity})`;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        ctx.beginPath(); // 避免路径叠加
      }
    }
  }
  ctx.stroke();
}

// 动画主循环
function animate(ctx, particles, width, height) {
  // 半透明清屏实现拖尾效果
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, width, height);

  // 更新并绘制每个粒子
  particles.forEach(p => {
    p.update(width, height);
    p.draw(ctx);
  });

  // 绘制连线
  drawConnections(ctx, particles);

  animationId = requestAnimationFrame(() => animate(ctx, particles, width, height));
}

// 调整画布尺寸
function resizeCanvas(canvas, ctx) {
  const { innerWidth, innerHeight } = window;
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  // 不重绘颜色，只更新尺寸
}

// --- 生命周期 ---
onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  let particles = [];

  // 初始化
  function init() {
    resizeCanvas(canvas, ctx);
    particles = createParticles(100, canvas.width, canvas.height, 2);
    animate(ctx, particles, canvas.width, canvas.height);
  }

  init();

  // 窗口大小改变时重置
  const handleResize = () => {
    resizeCanvas(canvas, ctx);
    particles = createParticles(100, canvas.width, canvas.height, 2);
  };
  window.addEventListener('resize', handleResize);

  // --- 组件卸载前清理 ---
  onBeforeUnmount(() => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    window.removeEventListener('resize', handleResize);
  });
});
</script>

<style scoped>
.canvas-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>