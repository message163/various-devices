
export type Env = 'browser' | 'node' | 'webworker' | 'electron' | 'unknown' | 'miniapp';
export type Mobile = 'ios' | 'android';
export type Desktop = 'macos' | 'windows' | 'linux';
export type MiniProgram = 'mp-weixin' | 'mp-alipay' | 'mp-baidu' | 'mp-kuaishou' | 'mp-qq' | 'mp-toutiao' | 'unknown'
export interface Result {
    platform:Env | Mobile | Desktop;
    version?:string;
    name?:string
    [propName:string]:any
}