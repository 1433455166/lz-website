// utils/screen.js
export function getScreenOrientation() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  
  if (h > w) return 'portrait';  // 竖屏
  if (w > h) return 'landscape';  // 横屏
  return 'square';
}