// 获取操作系统信息
export function getOS() {
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return 'Windows';
  if (/Mac OS/i.test(ua)) return 'MacOS';
  if (/Linux/i.test(ua)) return 'Linux';
  if (/Android/i.test(ua)) return 'Android';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'iOS';
  return 'Unknown';
}
// 获取浏览器信息
export function getBrowser() {
  const ua = navigator.userAgent;
  if (/Chrome/i.test(ua) && !/Edg/i.test(ua)) return 'Chrome';
  if (/Firefox/i.test(ua)) return 'Firefox';
  if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) return 'Safari';
  if (/Edg/i.test(ua)) return 'Edge';
  if (/MSIE|Trident/i.test(ua)) return 'IE';
  return 'Unknown';
}

export function getDeviceType() {
//   const parser = new window.UAParser();
//   const result = parser.getResult();
//   const type = result.device.type; // 'mobile' | 'tablet' | undefined

//   return type === 'mobile' || type === 'tablet';

  const parser = new window.UAParser();
  const result = parser.getResult();
  const device = result.device;

  console.log("设备信息：", result.os.name, navigator.maxTouchPoints, window.innerWidth);

  if (device.type === 'mobile' || device.type === 'tablet') {
    return 'mobile';
  }

  // 特别处理 iPadOS（伪装成 Mac）
  if (isIPad()) {
    return 'mobile';
  }

  return 'desktop';
}

// 判断是否是移动端
export function isMobile() {
    // return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const device = getDeviceType();
  return device ==='mobile';
}

// 判断是否是 iPad
export function isIPad() {
  const ua = navigator.userAgent;
  const isMacIntel = /Macintosh/.test(ua);
  const isTouchDevice = navigator.maxTouchPoints > 1;
  const isSafari = /Safari/.test(ua) && !/Chrome/.test(ua);

  // iPadOS 的特征：Mac 平台 + 触摸屏 + Safari
  return isMacIntel && isTouchDevice && isSafari;
}