/**
 *
 * @returns true if the current environment is wxBrowser false if the current environment is not wxBrowser
 * @returns 是否是微信浏览器
 */
export const isWxBrowser = () => {
  return /micromessenger/i.test(navigator.userAgent);
};

/**
 *
 * @returns true if the current environment is Enterprise wxBrowser false if the current environment is not Enterprise wxBrowser
 * @returns 是否是企业版微信浏览器
 */
export const isComWxBrowser = () => {
  return /wxwork/i.test(navigator.userAgent);
};

/**
 *
 * @returns true if the current environment is webview in WxMiniProgram false if the current environment is not webview in WxMiniProgram
 * @returns 当前h5是否在微信小程序中加载 https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html
 */
export const h5InWxMiniProgram = () => {
  return window.__wxjs_environment === 'miniprogram'
};


declare const window: any