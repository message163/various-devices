var variousDevices=function(n){"use strict";const u=()=>!!(typeof process<"u"&&process.versions&&process.versions.electron),l=()=>typeof window<"u"&&typeof window.document<"u",d=()=>typeof process<"u"&&process.versions!=null&&process.versions.node!=null,c=()=>typeof self<"u"&&typeof self.postMessage<"u"&&typeof importScripts<"u",t=()=>u()?"electron":l()?"browser":d()?"node":c()?"webworker":"unknown",f=r=>{const e=["B","KB","MB","GB","TB"];let o=0;for(;r>=1024&&o<e.length-1;)r/=1024,o++;return`${r.toFixed(2)} ${e[o]}`},i=()=>({ua:window.navigator.userAgent,platform:window.navigator.platform}),h=()=>{const r=t();if(r=="node")return{platform:r,version:process.version};throw new Error("不是Node环境 (is not Node environment)")},y=async()=>{if(t()=="node"){let e;return typeof require<"u"?e=require("os"):e=await Promise.resolve().then(()=>O),{name:e.type(),version:e.release(),platform:e.platform(),arch:e.arch(),cpuModel:e.cpus()[0].model,cpuSpeed:e.cpus()[0].speed,cpus:e.cpus().length,totalMemory:f(e.totalmem()),freeMemory:f(e.freemem())}}else throw new Error("不是Node环境 (is not Node environment)")},E=()=>{const r=t();if(r=="electron")return{platform:r,version:process.version,node:process.versions.node,v8:process.versions.v8,chrome:process.versions.chrome||"",zlib:process.versions.zlib,openssl:process.versions.openssl,modules:process.versions.modules,nghttp2:process.versions.nghttp2||"",napi:process.versions.napi||"",llhttp:process.versions.llhttp||""};throw new Error("不是Electron环境 (is not Electron environment)")},a=()=>{if(t()=="browser"){const{platform:e,ua:o}=i(),s=["Macintosh","MacIntel","MacPPC","Mac68K"];return"userAgentData"in window.navigator&&window.navigator.userAgentData?window.navigator.userAgentData.platform==="macOS":e&&s.indexOf(e)!==-1?!0:/macintosh|mac os x/i.test(o)}else throw new Error("不是浏览器环境 (is not browser environment)")},m=()=>{if(t()=="browser"){const{platform:e,ua:o}=i();return e&&["Win32","Win64","Windows","WinCE"].indexOf(e)!==-1?!0:/windows|win32/i.test(o)}else throw new Error("不是浏览器环境 (is not browser environment)")},w=()=>{if(t()=="browser"){const{platform:e,ua:o}=i();return e&&["Linux","X11"].indexOf(e)!==-1?!0:/linux/i.test(o)}else throw new Error("不是浏览器环境 (is not browser environment)")},P=()=>{if(a())return"macos";if(m())return"windows";if(w())return"linux";throw new Error("不是桌面环境 (is not desktop environment)")},b=()=>typeof wx<"u"?"mp-weixin":typeof my<"u"?"mp-alipay":typeof swan<"u"?"mp-baidu":typeof Kwai<"u"?"mp-kuaishou":typeof qq<"u"?"mp-qq":typeof tt<"u"?"mp-toutiao":typeof uni<"u"?uni.platform:"unknown",p=()=>/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent),v=()=>/Android/i.test(navigator.userAgent),g=()=>({width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}),M=()=>{let r;if(p())r="ios";else if(v())r="android";else throw new Error("不是Ios/Android环境 (is not Ios/Android environment)");const{width:e,height:o}=g();return{platform:r,screenWidth:e,screenHeight:o}},O=Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"}));return n.getEnv=t,n.getMiniProgramPlatform=b,n.getMobileDeviceInfo=M,n.getOs=y,n.getPlatformElectron=E,n.getPlatformNode=h,n.getScreenSize=g,n.isAndroid=v,n.isBrowser=l,n.isDesktop=P,n.isElectron=u,n.isIOS=p,n.isLinux=w,n.isMacOS=a,n.isNode=d,n.isWebWorker=c,n.isWindows=m,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),n}({});
