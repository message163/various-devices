/**
 *
 * @returns true if the current environment is alipay Browser false if the current environment is not DingTalk alipay Browser
 * @returns 是否是支付宝浏览器
 */
export const isAlipayBrowser = () => {
  return /taurusapp/i.test(navigator.userAgent);
};
