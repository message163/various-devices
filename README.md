### various-devices

This is a cross-platform open source library for obtaining device name and device model.

## Installation

```sh
npm install various-devices
```

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


