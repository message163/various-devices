import { getEnv } from '../src/core/basic'
import { getPlatformNode } from '../src/core/node'
import { getPlatformElectron } from '../src/core/electron'
console.log(getEnv())
// console.log(getPlatformNode())
console.log(getPlatformElectron())