import { getBrowserUserAgentAndPlatform } from '../utils';
import { getEnv } from './basic';
import type { Desktop } from '../types/common';
/**
 * 
 * @returns true if the current environment is macOS false if the current environment is not macOS
 * @returns 是否是macOS
 */
export const isMacOS = () => {
  const macOs = getEnv()
  if (macOs == 'browser') {
    const { platform, ua } = getBrowserUserAgentAndPlatform();
    const macPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];

    // This API is still in the experimental stage, and support varies across different browsers (https://caniuse.com/?search=NavigatorUAData).
    if ('userAgentData' in window.navigator && window.navigator.userAgentData) {
      return (window.navigator.userAgentData as any).platform === 'macOS';
    }

    if (platform && macPlatforms.indexOf(platform) !== -1) {
      return true;
    }

    return /macintosh|mac os x/i.test(ua);
  } else {
    throw new Error('不是浏览器环境 (is not browser environment)');
  }
};
/**
 * 
 * @returns true if the current environment is Windows false if the current environment is not Windows
 * @returns 是否是Windows
 */
export const isWindows = () => {
  const win = getEnv()
  if (win == 'browser') {
    const { platform, ua } = getBrowserUserAgentAndPlatform();
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    console.log(platform)
    if (platform && windowsPlatforms.indexOf(platform) !== -1) {
      return true;
    }

    return /windows|win32/i.test(ua);
  } else {
    throw new Error('不是浏览器环境 (is not browser environment)');
  }
};
/**
 * 
 * @returns true if the current environment is Linux false if the current environment is not Linux
 * @returns 是否是Linux
 */
export const isLinux = () => {
  const linux = getEnv()
  if (linux == 'browser') {
    const { platform, ua } = getBrowserUserAgentAndPlatform();
    const linuxPlatforms = ['Linux', 'X11'];

    if (platform && linuxPlatforms.indexOf(platform) !== -1) {
      return true;
    }

    return /linux/i.test(ua);
  } else {
    throw new Error('不是浏览器环境 (is not browser environment)');
  }
};


/**
 * 
 * @returns true if the current environment is a desktop false if the current environment is not a desktop
 * @returns 是否是桌面
 */
export const getDesktop = (): Desktop => {
  if (isMacOS()) {
    return 'macos'
  } else if (isWindows()) {
    return 'windows'
  } else if (isLinux()) {
    return 'linux'
  } else {
    throw new Error('不是桌面环境 (is not desktop environment)')
  }
};
