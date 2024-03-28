/**
 *
 * @returns true if the current environment is DingTalkBrowser false if the current environment is not DingTalkBrowser
 * @returns 是否是钉钉浏览器
 */
export const isDTalkBrowser = () => {
  return /dingtalk/i.test(navigator.userAgent);
};

/**
 *
 * @returns true if the current environment is DingTalk Exclusive Browser false if the current environment is not DingTalk Exclusive Browser
 * @returns 是否是专有钉钉浏览器
 */
export const isDTalkExclusiveBrowser = () => {
  return /taurusapp/i.test(navigator.userAgent);
};


