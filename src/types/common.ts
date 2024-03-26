
export type Env = 'browser' | 'node' | 'webworker' | 'electron' | 'unknown' | 'miniapp';
export type Mobile = 'ios' | 'android';
export type Desktop = 'macos' | 'windows' | 'linux';

export interface Result {
    platform:Env | Mobile | Desktop;
    version?:string;
    name?:string
    [propName:string]:any
}