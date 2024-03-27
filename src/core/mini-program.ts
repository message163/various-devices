import type { MiniProgram } from '../types/common'
/**
 * 
 * @returns {string} platform
 */
export const getMiniProgramPlatform = (): MiniProgram => {
    if (typeof wx !== 'undefined') {
        return 'mp-weixin';
    } else if (typeof my !== 'undefined') {
        return 'mp-alipay';
    } else if (typeof swan !== 'undefined') {
        return 'mp-baidu';
    } else if (typeof Kwai !== 'undefined') {
        return 'mp-kuaishou';
    } else if (typeof qq !== 'undefined') {
        return 'mp-qq'
    } else if (typeof tt !== 'undefined') {
        return 'mp-toutiao'
    }
    else if (typeof uni != 'undefined') {
        return uni.platform
    }
    else {
        return 'unknown';
    }
}
interface uni {
    platform: MiniProgram
}
declare const wx: unknown
declare const my: unknown
declare const swan: unknown
declare const Kwai: unknown
declare const qq: unknown
declare const tt: unknown
declare const uni: uni
