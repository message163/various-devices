# Node Env

nodejs platform for various-devices

## getOs

platform Nodejs

usage

```js{6}
import { getOs } from 'various-devices'
getOs().then(res=> {
    console.log(res)
})
```
getos is an asynchronous function. It will return an object. The following are the properties of the specific object.


```ts
interface noedOS {
    name: string
    version: string
    platform: string
    arch: string
    cpuModel: string
    cpuSpeed: number
    cpus: number
    totalMemory: string
    freeMemory: string
}
```

params

1. name string platform name (操作系统名称)
2. version string platform version (操作系统版本)
3. platform string platform (操作系统平台)
4. arch string arch (操作系统架构)
5. cpuModel string cpu model (cpu型号)
6. cpuSpeed number cpu speed (cpu速度)
7. cpus number cpus (cpu数量)
8. totalMemory string total memory (总内存)
9. freeMemory string free memory (空闲内存)

## getPlatformNode

platform Nodejs

### usage

```js{6}
import { getPlatformNode } from 'various-devices'
getPlatformNode()
```
getPlatformNode This API is used to obtain the properties related to the node environment.

```ts
export interface Result {
    platform:'node';
    version?:string;
}
```
params

1. platform string platform (node环境)
2. version string version (node版本)

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