const u = () => !!(typeof process < "u" && process.versions && process.versions.electron), d = () => typeof window < "u" && typeof window.document < "u", c = () => typeof process < "u" && process.versions != null && process.versions.node != null, l = () => typeof self < "u" && typeof self.postMessage < "u" && typeof importScripts < "u", o = () => u() ? "electron" : d() ? "browser" : c() ? "node" : l() ? "webworker" : "unknown", i = (n) => {
  const e = ["B", "KB", "MB", "GB", "TB"];
  let r = 0;
  for (; n >= 1024 && r < e.length - 1; )
    n /= 1024, r++;
  return `${n.toFixed(2)} ${e[r]}`;
}, s = () => ({
  ua: window.navigator.userAgent,
  platform: window.navigator.platform
}), v = () => {
  const n = o();
  if (n == "node")
    return {
      platform: n,
      version: process.version
    };
  throw new Error("不是Node环境 (is not Node environment)");
}, g = async () => {
  if (o() == "node") {
    let e;
    return typeof require < "u" ? e = require("os") : e = await import("./__vite-browser-external-DYxpcVy9.js"), {
      name: e.type(),
      version: e.release(),
      platform: e.platform(),
      arch: e.arch(),
      cpuModel: e.cpus()[0].model,
      cpuSpeed: e.cpus()[0].speed,
      cpus: e.cpus().length,
      totalMemory: i(e.totalmem()),
      freeMemory: i(e.freemem())
    };
  } else
    throw new Error("不是Node环境 (is not Node environment)");
}, y = () => {
  const n = o();
  if (n == "electron")
    return {
      platform: n,
      version: process.version,
      node: process.versions.node,
      v8: process.versions.v8,
      chrome: process.versions.chrome || "",
      zlib: process.versions.zlib,
      openssl: process.versions.openssl,
      modules: process.versions.modules,
      nghttp2: process.versions.nghttp2 || "",
      napi: process.versions.napi || "",
      llhttp: process.versions.llhttp || ""
    };
  throw new Error("不是Electron环境 (is not Electron environment)");
}, f = () => {
  if (o() == "browser") {
    const { platform: e, ua: r } = s(), t = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    return "userAgentData" in window.navigator && window.navigator.userAgentData ? window.navigator.userAgentData.platform === "macOS" : e && t.indexOf(e) !== -1 ? !0 : /macintosh|mac os x/i.test(r);
  } else
    throw new Error("不是浏览器环境 (is not browser environment)");
}, a = () => {
  if (o() == "browser") {
    const { platform: e, ua: r } = s();
    return e && ["Win32", "Win64", "Windows", "WinCE"].indexOf(e) !== -1 ? !0 : /windows|win32/i.test(r);
  } else
    throw new Error("不是浏览器环境 (is not browser environment)");
}, p = () => {
  if (o() == "browser") {
    const { platform: e, ua: r } = s();
    return e && ["Linux", "X11"].indexOf(e) !== -1 ? !0 : /linux/i.test(r);
  } else
    throw new Error("不是浏览器环境 (is not browser environment)");
}, x = () => {
  if (f())
    return "macos";
  if (a())
    return "windows";
  if (p())
    return "linux";
  throw new Error("不是桌面环境 (is not desktop environment)");
}, E = () => typeof wx < "u" ? "mp-weixin" : typeof my < "u" ? "mp-alipay" : typeof swan < "u" ? "mp-baidu" : typeof Kwai < "u" ? "mp-kuaishou" : typeof qq < "u" ? "mp-qq" : typeof tt < "u" ? "mp-toutiao" : typeof uni < "u" ? uni.platform : "unknown", m = () => /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent), w = () => /Android/i.test(navigator.userAgent), h = () => ({
  width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
  height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
}), P = () => {
  let n;
  if (m())
    n = "ios";
  else if (w())
    n = "android";
  else
    throw new Error("不是Ios/Android环境 (is not Ios/Android environment)");
  const { width: e, height: r } = h();
  return {
    platform: n,
    screenWidth: e,
    screenHeight: r
  };
};
export {
  x as getDesktop,
  o as getEnv,
  E as getMiniProgramPlatform,
  P as getMobileDeviceInfo,
  g as getOs,
  y as getPlatformElectron,
  v as getPlatformNode,
  h as getScreenSize,
  w as isAndroid,
  d as isBrowser,
  u as isElectron,
  m as isIOS,
  p as isLinux,
  f as isMacOS,
  c as isNode,
  l as isWebWorker,
  a as isWindows
};
