# Android Mobile Env

Android mobile platform for various-devices

## getMobileDeviceInfo

platform Android

### usage

```js
import { isAndroid } from 'various-devices'
const result = isAndroid()
```

isAndroid This API is used to check if the current platform is Android. It return value `boolean`


```js{6}
import { getMobileDeviceInfo } from 'various-devices'
const result = getMobileDeviceInfo()
```

getMobileDeviceInfo This API is used to retrieve information about mobile devices, including the device type Android and the current screen width and height.

```ts
export interface Result {
  platform: "android";
  screenWidth: number;
  screenHeight: number;
}
```

params

1. platform string platform (Android 环境)
2. screenWidth number current screen width(当前屏幕宽度)
3. screenHeight number current screen height(当前屏幕高度)

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
