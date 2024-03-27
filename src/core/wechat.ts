/**
 *
 * @returns true if the current environment is wx false if the current environment is not wx
 * @returns 是否是wx
 */
export const isWechat = () => {
  return /micromessenger/i.test(navigator.userAgent);
};

/**
 *
 * @returns true if the current environment is Comwx false if the current environment is not Comwx
 * @returns 是否是企业wx
 */
export const isComWx = () => {
  return /wxwork/i.test(navigator.userAgent);
};
