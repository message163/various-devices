### various-devices

This is a cross-platform open source library for obtaining device name and device model.

## Installation

```sh
npm install various-devices
```

### CDN

```html
<script src='https://unpkg.com/various-devices/dist/various-devices.iife.js'></script>
```
It will be exposed to global as `variousDevices`

## usage 

Get the current environment

cjs
```js
const { getEnv } = require('various-devices');
```
esm

```js
import { getEnv } from 'various-devices';
```
Return value

| params       | introduce    |
| ----------- | ----------- |
| electron    | 桌面程序   |
| browser     | 浏览器 |
| node        | node环境   |
| webworker   | webworker     |


## more

For more APIs, please refer to the 

[documentation](https://message163.github.io/various-devices/temp/guide/)
 