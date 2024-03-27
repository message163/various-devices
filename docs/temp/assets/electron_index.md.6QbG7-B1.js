import{_ as t,c as a,o as n,a2 as e,m as s,a as i}from"./chunks/framework.Bv-1nw0d.js";const y=JSON.parse('{"title":"Electron Env","description":"","frontmatter":{},"headers":[],"relativePath":"electron/index.md","filePath":"electron/index.md"}'),l={name:"electron/index.md"},h=e(`<h1 id="electron-env" tabindex="-1">Electron Env <a class="header-anchor" href="#electron-env" aria-label="Permalink to &quot;Electron Env&quot;">​</a></h1><p>Electron platform for various-devices</p><h2 id="getplatformelectron" tabindex="-1">getPlatformElectron <a class="header-anchor" href="#getplatformelectron" aria-label="Permalink to &quot;getPlatformElectron&quot;">​</a></h2><p>platform electron</p><p>usage</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { getPlatformElectron } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;various-devices&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> electronInformation</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getPlatformElectron</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p>getPlatformElectron is a function. It will return an object. The following are the properties of the specific object.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> electronEnv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  platform</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  node</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  v8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  chrome</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  zlib</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  openssl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  modules</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  nghttp2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  napi</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  llhttp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>params</p><ol><li>platform: string | platform name (当前平台名称)</li><li>version string | platform version (当前平台版本)</li><li>node: string | the version of node (Node.js 的版本)</li><li>v8: string | v8 engine version (V8 JavaScript 引擎的版本)</li><li>chrome: string | Chrome version information (Chrome 版本信息)</li><li>zlib: string | zlib version information (zlib 的版本)</li><li>openssl: string | openssl version information (openssl 版本)</li><li>modules: string | The version of the Node.js module (当前 Node.js 模块系统的内部版本号)</li><li>nghttp2: string | nghttp2 version (nghttp2 版本)</li><li>napi: string | Node-API version information (Node-API 的版本号)</li><li>llhttp: string | the information of node llhttp (node 中 llhttp 信息)</li></ol><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,11),r=s("table",null,[s("tbody",null,[s("tr",null,[s("td",{align:"center",valign:"top",width:"14.28%"},[s("a",{href:"https://github.com/message163"},[s("img",{src:"https://avatars.githubusercontent.com/u/32630999?v=4?s=50",width:"50px;",alt:"xiaoMan"}),s("br"),s("sub",null,[s("b",null,"xiaoMan")])]),s("br"),s("a",{href:"https://github.com/message163/various-devices/commits?author=message163",title:"Code"},"💻"),i(),s("a",{href:"https://github.com/message163/various-devices/commits?author=message163",title:"Documentation"},"📖"),i(),s("a",{href:"#design-message163",title:"Design"},"🎨")]),s("td",{align:"center",valign:"top",width:"14.28%"},[s("a",{href:"https://github.com/yanzibiezou"},[s("img",{src:"https://avatars.githubusercontent.com/u/107256547?v=4?s=50",width:"50px;",alt:"yanzibiezou"}),s("br"),s("sub",null,[s("b",null,"yanzibiezou")])]),s("br"),s("a",{href:"https://github.com/message163/various-devices/commits?author=yanzibiezou",title:"Code"},"💻")]),s("td",{align:"center",valign:"top",width:"14.28%"},[s("a",{href:"https://github.com/core-admin"},[s("img",{src:"https://avatars.githubusercontent.com/u/77573477?v=4?s=50",width:"50px;",alt:"徐轲"}),s("br"),s("sub",null,[s("b",null,"徐轲")])]),s("br"),s("a",{href:"https://github.com/message163/various-devices/commits?author=core-admin",title:"Code"},"💻")]),s("td",{align:"center",valign:"top",width:"14.28%"},[s("a",{href:"https://github.com/yinxing233"},[s("img",{src:"https://avatars.githubusercontent.com/u/132836709?v=4?s=50",width:"50px;",alt:"yinxing233"}),s("br"),s("sub",null,[s("b",null,"yinxing233")])]),s("br"),s("a",{href:"https://github.com/message163/various-devices/commits?author=yinxing233",title:"Code"},"💻")])])]),s("tfoot",null,[s("tr",null,[s("td",{align:"center",size:"13px",colspan:"7"},[s("img",{src:"https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg"}),s("a",{href:"https://all-contributors.js.org/docs/en/bot/usage"},"Add your contributions")])])])],-1),p=[h,r];function o(k,g,d,c,u,m){return n(),a("div",null,p)}const F=t(l,[["render",o]]);export{y as __pageData,F as default};
