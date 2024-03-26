import type { Env } from "../types/common";
/**
 * 
 * @returns true if the current environment is a browser false if the current environment is not a browser
 * @returns 是否是浏览器
 */
export const isBrowser = ()=> {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
}
/**
 * 
 * @returns true if the current environment is Node false if the current environment is not Node
 * @returns 是否是Node环境
 */
export const isNode = ()=> {
    return typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
}
/**
 * @returns  true if the current environment is WebWorker false if the current environment is not WebWorker
 * @returns 是否是WebWorker
 */
export const isWebWorker = ()=> {
    return typeof self !== 'undefined' && typeof self.postMessage !== 'undefined' && typeof importScripts !== 'undefined';
}


export const getEnv = ():Env => {
    if (isBrowser()) {
        return 'browser';
    }
    if (isNode()) {
        return 'node';
    }
    if (isWebWorker()) {
        return 'webworker';
    }
    return 'unknown';
}