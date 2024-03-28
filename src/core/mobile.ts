import type { Mobile } from "../types/common";
import { Result } from "../types/common";
/**
 * @returns true if the current environment is iOS false if the current environment is not iOS
 * @returns 检测当前环境是否是iOS
 */
export const isIOS = () => {
  return /(iPhone|iPad|iPod|iOS|Macintosh)/i.test(navigator.userAgent);
};

/**
 * @returns true if the current environment is Android false if the current environment is not Android
 * @returns 检测当前环境是否是Android
 */
export const isAndroid = () => {
  return /Android/i.test(navigator.userAgent);
};

/**
 * @returns {width: number, height: number} current screen width and height
 * @returns {width: number, height: number} 当前屏幕的宽度和高度
 */
export const getScreenSize = (): { width: number; height: number } => {
  return {
    width:
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
    height:
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight,
  };
};

/**
 * @returns {Result} includes mobile type and screen width and height
 * @returns {Result} 包含移动设备类型、屏幕宽度和高度的信息
 */
export const getMobileDeviceInfo = (): Result => {
  let mobile: Mobile;
  if (isIOS()) {
    mobile = "ios";
  } else if (isAndroid()) {
    mobile = "android";
  } else {
    throw new Error("不是Ios/Android环境 (is not Ios/Android environment)");
  }

  const { width, height } = getScreenSize();

  return {
    platform: mobile,
    screenWidth: width,
    screenHeight: height,
  };
};
