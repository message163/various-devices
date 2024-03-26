import { getEnv } from "./basic"
import type { Result } from '../types/common'
/**
 * 
 * @returns platform {platform: 'node', version: versionInfo}
 * @returns platform {platform: 平台, version: 版本信息}
 */
export const getPlatformNode = (): Result => {
    const node = getEnv()
    if (node == 'node') {
        return {
            platform: node,
            version: process.version,
        }
    } else {
        throw new Error('不是Node环境 (is not Node environment)')
    }
}