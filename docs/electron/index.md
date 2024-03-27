# Electron Env

Electron platform for various-devices

## getPlatformElectron

platform electron

usage

```js{6}
import { getPlatformElectron } from 'various-devices'
const electronInformation = getPlatformElectron()

```

getPlatformElectron is a function. It will return an object. The following are the properties of the specific object.

```ts
export interface electronEnv {
  platform: string;
  version: string;
  node: string;
  v8: string;
  chrome: string;
  zlib: string;
  openssl: string;
  modules: string;
  nghttp2: string;
  napi: string;
  llhttp: string;
}
```

params

1. platform: string | platform name (当前平台名称)
2. version string | platform version (当前平台版本)
3. node: string | the version of node (Node.js 的版本)
4. v8: string | v8 engine version (V8 JavaScript 引擎的版本)
5. chrome: string | Chrome version information (Chrome 版本信息)
6. zlib: string | zlib version information (zlib 的版本)
7. openssl: string | openssl version information (openssl 版本)
8. modules: string | The version of the Node.js module (当前 Node.js 模块系统的内部版本号)
9. nghttp2: string | nghttp2 version (nghttp2 版本)
10. napi: string | Node-API version information (Node-API 的版本号)
11. llhttp: string | the information of node llhttp (node 中 llhttp 信息)

### Contributors