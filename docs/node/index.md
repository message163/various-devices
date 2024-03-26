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

### Contributors

<!-- ALL-CONTRIBUTORS-LIST: START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-LIST:END -->