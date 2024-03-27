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

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/message163"><img src="https://avatars.githubusercontent.com/u/32630999?v=4?s=50" width="50px;" alt="xiaoMan"/><br /><sub><b>xiaoMan</b></sub></a><br /><a href="https://github.com/message163/various-devices/commits?author=message163" title="Code">💻</a> <a href="https://github.com/message163/various-devices/commits?author=message163" title="Documentation">📖</a> <a href="#design-message163" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yanzibiezou"><img src="https://avatars.githubusercontent.com/u/107256547?v=4?s=50" width="50px;" alt="yanzibiezou"/><br /><sub><b>yanzibiezou</b></sub></a><br /><a href="https://github.com/message163/various-devices/commits?author=yanzibiezou" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/core-admin"><img src="https://avatars.githubusercontent.com/u/77573477?v=4?s=50" width="50px;" alt="徐轲"/><br /><sub><b>徐轲</b></sub></a><br /><a href="https://github.com/message163/various-devices/commits?author=core-admin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yinxing233"><img src="https://avatars.githubusercontent.com/u/132836709?v=4?s=50" width="50px;" alt="yinxing233"/><br /><sub><b>yinxing233</b></sub></a><br /><a href="https://github.com/message163/various-devices/commits?author=yinxing233" title="Code">💻</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->