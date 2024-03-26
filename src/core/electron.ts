import { getEnv } from "./basic";
import type { electronEnv } from "../types/electron";
/**
 *
 * @returns platform {platform: 'electron', version: "versionInfo",node："the version of node",v8:"v8 engine version",chrome:"Chrome version information",zlib:"zlib version information"，openssl:"openssl version information",modules:"The version of the Node.js module system",nghttp2:"nghttp2 version",napi:"Node-API version information"，llhttp:"the information of node llhttp"}
 * @returns platform {platform: "平台", version: "版本信息",node："Node.js 的版本",v8："V8 JavaScript" 引擎的版本,chrome:"Chrome 版本信息",zlib:"zlib的版本",openssl:"openssl版本",modules:"当前 Node.js 模块系统的内部版本号",nghttp2:"nghttp2版本",napi:"Node-API的版本号",llhttp:"node中llhttp信息"}
 */
export const getPlatformElectron = (): electronEnv => {
  const electron = getEnv();
  if (electron == "electron") {
    return {
      platform: electron,
      version: process.version,
      node: process.versions.node,
      v8: process.versions.v8,
      chrome: process.versions.chrome || "",
      zlib: process.versions.zlib,
      openssl: process.versions.openssl,
      modules: process.versions.modules,
      nghttp2: process.versions.nghttp2 || "",
      napi: process.versions.napi || "",
      llhttp: process.versions.llhttp || "",
    };
  } else {
    throw new Error("不是Electron环境 (is not Electron environment)");
  }
};
