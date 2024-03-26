const e = () => typeof window < "u" && typeof window.document < "u", n = () => typeof process < "u" && process.versions != null && process.versions.node != null, r = () => typeof self < "u" && typeof self.postMessage < "u" && typeof importScripts < "u", o = () => e() ? "browser" : n() ? "node" : r() ? "webworker" : "unknown";
export {
  o as getEnv,
  e as isBrowser,
  n as isNode,
  r as isWebWorker
};
