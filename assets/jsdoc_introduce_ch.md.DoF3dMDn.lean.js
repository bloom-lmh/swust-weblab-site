import{_ as a,c as i,a0 as n,o as l}from"./chunks/framework.sqaneRz1.js";const o=JSON.parse('{"title":"JSDoc Annotation","description":"","frontmatter":{},"headers":[],"relativePath":"jsdoc/introduce_ch.md","filePath":"jsdoc/introduce_ch.md"}'),p={name:"jsdoc/introduce_ch.md"};function e(t,s,h,r,k,d){return l(),i("div",null,s[0]||(s[0]=[n(`<h1 id="jsdoc-annotation" tabindex="-1">JSDoc Annotation <a class="header-anchor" href="#jsdoc-annotation" aria-label="Permalink to &quot;JSDoc Annotation&quot;">​</a></h1><ul><li><a href="https://github.com/bloom-lmh/Annotation2" target="_blank" rel="noreferrer">Github地址</a></li><li><a href="https://github.com/bloom-lmh/Annotation2" target="_blank" rel="noreferrer">Gitee地址</a></li><li><a href="./introduce_en.html">English document link</a></li></ul><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><h3 id="什么是-jsdoc-annotation" tabindex="-1">什么是 JSDoc Annotation？ <a class="header-anchor" href="#什么是-jsdoc-annotation" aria-label="Permalink to &quot;什么是 JSDoc Annotation？&quot;">​</a></h3><p>JSDoc Annotation 是一款轻量级、可高度定制的注释生成插件，旨在为您的 TypeScript 或 JavaScript 文件中的类、方法、属性等成员，快速生成符合 <a href="https://jsdoc.bootcss.com/" target="_blank" rel="noreferrer">JSDoc</a> 风格的注释。通过简便的命令操作，它让开发过程更加高效、流畅，极大提升代码注释的生成效率，带来未来感十足的开发体验。</p><h3 id="特色功能" tabindex="-1">特色功能 <a class="header-anchor" href="#特色功能" aria-label="Permalink to &quot;特色功能&quot;">​</a></h3><p>JSDoc Annotation参考了市面上热门的注释生成插件，如IEAD中Easy Javadoc的和VSCODE中的koroFileHeader插件，并结合了他们的优点而诞生。无论你是后端程序员还是前端程序员，都能让你在开发中有熟悉的感觉。其功能包括:</p><p>1.快捷生成单个成员注释：类、方法、属性、枚举、接口、自定义属性的JSDoc注释 2.快捷生成全文件类、方法、属性、枚举、接口、自定义属性的JSDoc注释 3.进行个性化配置</p><ul><li>对类、方法、属性、枚举、接口、自定义属性注释标签进行配置</li><li>全局标签设置</li><li>自定义翻译接口（维护中）</li><li>系统配置（维护中）</li><li>支持配置的迁移和复用，让你无论在什么设备上都可以使用自己习惯的注释生成方式（维护中）</li></ul><h3 id="兼容性" tabindex="-1">兼容性 <a class="header-anchor" href="#兼容性" aria-label="Permalink to &quot;兼容性&quot;">​</a></h3><p>JSDoc Annotation目前只能支持最新的VSCODE版本，对低版本的VSCODE的兼容处理还在进行中。当然也希望用户更新最新的VSCODE来使用，这样或许有更好的体验，<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCODE官网</a>。</p><h3 id="性能" tabindex="-1">性能 <a class="header-anchor" href="#性能" aria-label="Permalink to &quot;性能&quot;">​</a></h3><p>JSDoc Annotation采用了抽象语法树结合正则的方式来进行类、方法等成员的解析和注释生成。即保证了准确性又保证了优越的性能。经过统计：</p><ul><li>生成单个注释(1500行代码)大约需要10-50ms</li><li>生成全文档注释(1500行代码)大约需要50-200ms</li></ul><h3 id="命令清单" tabindex="-1">命令清单 <a class="header-anchor" href="#命令清单" aria-label="Permalink to &quot;命令清单&quot;">​</a></h3><p>JSDoc Annotation目前支持的命令如下：</p><table tabindex="0"><thead><tr><th>命令</th><th>功能</th></tr></thead><tbody><tr><td><code>alt+\\</code></td><td>对类、方法、属性、枚举、接口、自定义类型生成块级JSDOC注释</td></tr><tr><td><code>ctrl+alt+\\</code></td><td>对全文件的类、方法、属性、枚举、接口、自定义类型生成块级JSDOC注释</td></tr><tr><td><code>ctrl+shift+\\</code></td><td>打开配置面板</td></tr></tbody></table><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><h3 id="单个成员生成注释" tabindex="-1">单个成员生成注释 <a class="header-anchor" href="#单个成员生成注释" aria-label="Permalink to &quot;单个成员生成注释&quot;">​</a></h3><p>对于单个成员生成注释十分简单，只需要将光标对准类、方法、属性然后按下<code>alt+\\</code>即可生成块级注释</p><h4 id="生成类注释" tabindex="-1"><strong>生成类注释</strong> <a class="header-anchor" href="#生成类注释" aria-label="Permalink to &quot;**生成类注释**&quot;">​</a></h4><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/e0ad6a4974683468.gif" alt="生成类注释演示"></p><div class="language-JavaScript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SuperMan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Fly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Attack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@name</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Man</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@abstract</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@class</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {Fly}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {Attack}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SuperMan</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@description</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">abstract</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Man</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SuperMan</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Fly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Attack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="生成方法注释" tabindex="-1"><strong>生成方法注释</strong> <a class="header-anchor" href="#生成方法注释" aria-label="Permalink to &quot;**生成方法注释**&quot;">​</a></h4><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/4c3780bb47e68c0e.gif" alt="生成方法注释演示"></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@name</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetchData</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@function</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@access</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> public</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@static</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@async</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {string}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {number}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {Promise}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@description</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public static async </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fetchData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name: string, age: number): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  let a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  try {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } catch (error) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    throw new </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;asd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;aa&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="生成属性注释" tabindex="-1"><strong>生成属性注释</strong> <a class="header-anchor" href="#生成属性注释" aria-label="Permalink to &quot;**生成属性注释**&quot;">​</a></h4><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/f291ba8b5de0f2a2.gif" alt="生成属性注释演示"></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@name</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {string}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@access</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> private</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@static</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">小芳</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@description</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">private static </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;小芳&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="生成枚举注释" tabindex="-1"><strong>生成枚举注释</strong> <a class="header-anchor" href="#生成枚举注释" aria-label="Permalink to &quot;**生成枚举注释**&quot;">​</a></h4><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/abd1aaf96d6d2213.gif" alt="生成枚举注释演示"></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@name</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Color</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@enum</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@description</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="生成接口注释" tabindex="-1"><strong>生成接口注释</strong> <a class="header-anchor" href="#生成接口注释" aria-label="Permalink to &quot;**生成接口注释**&quot;">​</a></h4><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/4931b813631514b5.gif" alt="生成接口注释演示"></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@name</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> C</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@interface</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> A</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> B</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@description</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> C</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="生成自定义类型注释" tabindex="-1"><strong>生成自定义类型注释</strong> <a class="header-anchor" href="#生成自定义类型注释" aria-label="Permalink to &quot;**生成自定义类型注释**&quot;">​</a></h4><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/5b8e309514ba0221.gif" alt="生成自定义类型注释演示"></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@name</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myname</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@typedef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {string | number}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myname</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@description</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myname</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h4><h3 id="全文档成员生成注释" tabindex="-1">全文档成员生成注释 <a class="header-anchor" href="#全文档成员生成注释" aria-label="Permalink to &quot;全文档成员生成注释&quot;">​</a></h3><p>JSDoc Annotation不仅支持生成单个成员的注释，还可以一键对全文件所有成员添加注释，使用命令<code>ctrl+alt+\\</code>即可为全文件的的方法、类、属性等成员生成注释 <img src="https://s3.bmp.ovh/imgs/2024/12/24/5124b70c283d00ba.gif" alt="全文档成员生成注释演示"></p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><h3 id="默认配置" tabindex="-1">默认配置 <a class="header-anchor" href="#默认配置" aria-label="Permalink to &quot;默认配置&quot;">​</a></h3><p>JSDoc Annotation支持用户个性化的配置，但是为了开箱即用，JSDoc Annotation对常用的选项进行了默认设置，即约定大于配置。用户不必进行过多的配置或者可以不需要进行配置就能享受到目前市面上最流行的注释方式。 默认配置的标签如下所示：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 类注释默认支持的标签 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@name;@class;@abstract;@extends;@implements</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 方法注释默认支持的标签 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@name；@params；@async；@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">；@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">throwsTag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">；@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">paramsTag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">；@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">returnsTag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">； @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">staticTag</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 属性注释默认支持的标签 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;@propertyTag；@typeTag；@staticTag；@defaultTag</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 枚举注释默认支持的标签 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@name;@enum;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 自定义类型注释默认支持的标签 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@name;@type</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 接口类型注释默认支持的标签 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@name;@interface;@extends</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="进阶配置" tabindex="-1">进阶配置 <a class="header-anchor" href="#进阶配置" aria-label="Permalink to &quot;进阶配置&quot;">​</a></h3><p>当然如果你想进行配置，JSDoc Annotation也支持个性化的配置方案，使用命令<code>shift+alt+\\</code>即可打开配置面板。 <img src="https://s3.bmp.ovh/imgs/2024/12/24/4e83b3e8c0a2cfab.jpg" alt="配置面版界面"></p><h3 id="配置案例" tabindex="-1">配置案例 <a class="header-anchor" href="#配置案例" aria-label="Permalink to &quot;配置案例&quot;">​</a></h3><p>比如，如果你希望当前项目在生成类注释时加上作者标签，你可以这样进行配置</p><ol><li>从项目选择下拉框中选择当前项目</li><li>然后在类注释配置中选择打开作者标签</li><li>在全局配置中写上你想要的作者名</li></ol><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/f96b0b278637fb29.gif" alt="配置案例演示"></p><h2 id="维护与支持" tabindex="-1">维护与支持 <a class="header-anchor" href="#维护与支持" aria-label="Permalink to &quot;维护与支持&quot;">​</a></h2><p>目前JSDoc Annotation版本为1.0.0，还有一些BUG还没有暴露，所以后续我会对插件进行更充分的测试，并对出现的BUG进行维护。 项目源码已经放到github上，希望大家可以为我提出一些建议，我会根据建议进行改进。 如果喜欢的朋友也可以为我点点赞，这也是我前进的动力。</p>`,53)]))}const g=a(p,[["render",e]]);export{o as __pageData,g as default};