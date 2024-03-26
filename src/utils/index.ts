export const formatBytes = (bytes: number) => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let index = 0;
  while (bytes >= 1024 && index < units.length - 1) {
    bytes /= 1024;
    index++;
  }
  return `${bytes.toFixed(2)} ${units[index]}`;
};

/**
 * Get the user agent and platform information of the browser.
 * 获取浏览器的用户代理和平台信息。
 *
 * @returns {Object} An object containing user agent and platform information.
 * 包含用户代理和平台信息的对象。
 * @property {string} ua The user agent string of the browser.
 * 浏览器的用户代理字符串。
 * @property {string} platform The platform information of the browser.
 * 浏览器的平台信息。
 */
export const getBrowserUserAgentAndPlatform = () => {
  return {
    ua: window.navigator.userAgent,
    platform: window.navigator.platform,
  };
};
