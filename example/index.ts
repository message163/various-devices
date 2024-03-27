import { getEnv } from '../src/core/basic'
import { getPlatformElectron } from '../src/core/electron'
console.log(getEnv())
console.log(getPlatformElectron())
import { getPlatformNode,getOs } from '../src/core/node'
// console.log(getPlatformNode())
// getOs().then(res=>console.log(res))
