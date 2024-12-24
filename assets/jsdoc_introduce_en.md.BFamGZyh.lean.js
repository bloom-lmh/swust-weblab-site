import{_ as a,c as i,a0 as n,o as e}from"./chunks/framework.sqaneRz1.js";const d=JSON.parse('{"title":"JSDoc Annotation","description":"","frontmatter":{},"headers":[],"relativePath":"jsdoc/introduce_en.md","filePath":"jsdoc/introduce_en.md"}'),t={name:"jsdoc/introduce_en.md"};function l(p,s,r,h,o,k){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="jsdoc-annotation" tabindex="-1">JSDoc Annotation <a class="header-anchor" href="#jsdoc-annotation" aria-label="Permalink to &quot;JSDoc Annotation&quot;">​</a></h1><ul><li><a href="https://github.com/bloom-lmh/Annotation2" target="_blank" rel="noreferrer">Github Link</a></li><li><a href="https://github.com/bloom-lmh/Annotation2" target="_blank" rel="noreferrer">Gitee Link</a></li><li><a href="./introduce_ch.html">中文文档链接</a></li></ul><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><h3 id="what-is-jsdoc-annotation" tabindex="-1">What is JSDoc Annotation? <a class="header-anchor" href="#what-is-jsdoc-annotation" aria-label="Permalink to &quot;What is JSDoc Annotation?&quot;">​</a></h3><p>JSDoc Annotation is a lightweight, highly customizable comment generation plugin designed to quickly generate JSDoc-style comments for classes, methods, properties, and other members in your TypeScript or JavaScript files. With simple command operations, it enhances the development process, making it more efficient and seamless, significantly improving the comment generation speed, and providing a futuristic development experience.</p><h3 id="key-features" tabindex="-1">Key Features <a class="header-anchor" href="#key-features" aria-label="Permalink to &quot;Key Features&quot;">​</a></h3><p>JSDoc Annotation is inspired by popular comment generation plugins on the market, such as Easy Javadoc in IEAD and the koroFileHeader plugin in VS Code, combining the best aspects of both. Whether you&#39;re a backend or frontend developer, it gives you a familiar feeling during development. Its features include:</p><ol><li>Quick generation of individual member comments: JSDoc comments for classes, methods, properties, enums, interfaces, and custom types.</li><li>Quick generation of comments for the entire file&#39;s classes, methods, properties, enums, interfaces, and custom types.</li><li>Personalization options: <ul><li>Configure comment tags for classes, methods, properties, enums, interfaces, and custom types.</li><li>Global tag settings.</li><li>Custom translation interface (under maintenance).</li><li>System configuration (under maintenance).</li><li>Support for configuration migration and reuse, allowing you to use your preferred comment generation style on any device (under maintenance).</li></ul></li></ol><h3 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h3><p>JSDoc Annotation currently only supports the latest version of VS Code. Compatibility for older versions of VS Code is still being developed. We recommend users update to the latest version of VS Code for a better experience. <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VS Code Official Site</a>.</p><h3 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Performance&quot;">​</a></h3><p>The JSDoc annotation uses a combination of Abstract Syntax Tree (AST) and regular expressions to parse and generate annotations for members such as classes and methods. This ensures both accuracy and superior performance. According to statistics:</p><ul><li>Generating a single annotation (1500 lines of code) takes approximately 10-50ms</li><li>Generating the entire document&#39;s annotations (1500 lines of code) takes approximately 50-200ms</li></ul><h3 id="command-list" tabindex="-1">Command List <a class="header-anchor" href="#command-list" aria-label="Permalink to &quot;Command List&quot;">​</a></h3><p>The following commands are currently supported by JSDoc Annotation:</p><table tabindex="0"><thead><tr><th>Command</th><th>Function</th></tr></thead><tbody><tr><td><code>alt+\\</code></td><td>Generate block-level JSDoc comments for classes, methods, properties, enums, interfaces, and custom types</td></tr><tr><td><code>ctrl+alt+\\</code></td><td>Generate block-level JSDoc comments for all classes, methods, properties, enums, interfaces, and custom types in the file</td></tr><tr><td><code>ctrl+shift+\\</code></td><td>Open the configuration panel</td></tr></tbody></table><hr><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><h3 id="generate-comments-for-a-single-member" tabindex="-1">Generate Comments for a Single Member <a class="header-anchor" href="#generate-comments-for-a-single-member" aria-label="Permalink to &quot;Generate Comments for a Single Member&quot;">​</a></h3><p>Generating comments for a single member is very simple. Just place the cursor on the class, method, or property and press <code>alt+\\</code> to generate the block-level comment.</p><h4 id="generate-class-comment" tabindex="-1"><strong>Generate Class Comment</strong> <a class="header-anchor" href="#generate-class-comment" aria-label="Permalink to &quot;**Generate Class Comment**&quot;">​</a></h4><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/e0ad6a4974683468.gif" alt="Generate Class Comment Demo"></p><div class="language-JavaScript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SuperMan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span>
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
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">abstract</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Man</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SuperMan</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Fly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Attack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="generate-method-comment" tabindex="-1"><strong>Generate Method Comment</strong> <a class="header-anchor" href="#generate-method-comment" aria-label="Permalink to &quot;**Generate Method Comment**&quot;">​</a></h4><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/4c3780bb47e68c0e.gif" alt="Generate Method Comment Demo"></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="generate-property-comment" tabindex="-1"><strong>Generate Property Comment</strong> <a class="header-anchor" href="#generate-property-comment" aria-label="Permalink to &quot;**Generate Property Comment**&quot;">​</a></h4><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/f291ba8b5de0f2a2.gif" alt="Generate Property Comment Demo"></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@name</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {string}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@access</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> private</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@static</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Xiaofang</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@description</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">private static </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Xiaofang&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="generate-enum-comment" tabindex="-1"><strong>Generate Enum Comment</strong> <a class="header-anchor" href="#generate-enum-comment" aria-label="Permalink to &quot;**Generate Enum Comment**&quot;">​</a></h4><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/abd1aaf96d6d2213.gif" alt="Generate Enum Comment Demo"></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@name</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Color</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@enum</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@description</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="generate-interface-comment" tabindex="-1"><strong>Generate Interface Comment</strong> <a class="header-anchor" href="#generate-interface-comment" aria-label="Permalink to &quot;**Generate Interface Comment**&quot;">​</a></h4><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/4931b813631514b5.gif" alt="Generate Interface Comment Demo"></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@name</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> C</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@interface</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> A</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> B</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@description</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> C</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">B</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="generate-custom-type-comment" tabindex="-1"><strong>Generate Custom Type Comment</strong> <a class="header-anchor" href="#generate-custom-type-comment" aria-label="Permalink to &quot;**Generate Custom Type Comment**&quot;">​</a></h4><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/5b8e309514ba0221.gif" alt="Generate Custom Type Comment Demo"></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@name</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myname</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@typedef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {string | number}</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myname</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@description</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myname</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h4><h3 id="generate-comments-for-all-members-in-the-file" tabindex="-1">Generate Comments for All Members in the File <a class="header-anchor" href="#generate-comments-for-all-members-in-the-file" aria-label="Permalink to &quot;Generate Comments for All Members in the File&quot;">​</a></h3><p>JSDoc Annotation not only supports generating comments for individual members but also allows you to generate comments for all members in the entire file with a single command. Use the <code>ctrl+alt+\\</code> command to generate comments for all methods, classes, properties, etc., in the file.</p><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/5124b70c283d00ba.gif" alt="Generate All Members Comment Demo"></p><hr><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><h3 id="default-configuration" tabindex="-1">Default Configuration <a class="header-anchor" href="#default-configuration" aria-label="Permalink to &quot;Default Configuration&quot;">​</a></h3><p>JSDoc Annotation supports user-specific configurations, but for out-of-the-box use, JSDoc Annotation provides default settings for commonly used options, meaning conventions take precedence over configuration. Users don’t need to configure much or may not need to configure anything at all to enjoy the most popular comment generation style currently available on the market.</p><p>The default configuration tags are as follows:</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Default tags for class comments */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@name; @class; @abstract; @extends; @implements</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Default tags for method comments */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@name; @params; @async; @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; @constructor;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@throwsTag; @paramsTag; @returnsTag; @staticTag</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Default tags for property comments */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@name; @propertyTag; @typeTag; @staticTag; @defaultTag</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Default tags for enum comments */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@name; @enum;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Default tags for custom type comments */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@name; @type</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Default tags for interface comments */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@name; @interface; @extends</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="advanced-configuration" tabindex="-1">Advanced Configuration <a class="header-anchor" href="#advanced-configuration" aria-label="Permalink to &quot;Advanced Configuration&quot;">​</a></h3><p>If you prefer to configure, JSDoc Annotation also supports personalized configuration options. Use the <code>shift+alt+\\</code> command to open the configuration panel.</p><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/4e83b3e8c0a2cfab.jpg" alt="Configuration Panel Interface"></p><h3 id="configuration-example" tabindex="-1">Configuration Example <a class="header-anchor" href="#configuration-example" aria-label="Permalink to &quot;Configuration Example&quot;">​</a></h3><p>For instance, if you want to add an author tag when generating class comments in your project, you can configure it as follows:</p><ol><li>Select the current project from the project dropdown.</li><li>Enable the author tag in the class comment configuration.</li><li>Write the desired author name in the global configuration.</li></ol><p><img src="https://s3.bmp.ovh/imgs/2024/12/24/f96b0b278637fb29.gif" alt="Configuration Example Demo"></p><h2 id="maintenance-and-support" tabindex="-1">Maintenance and Support <a class="header-anchor" href="#maintenance-and-support" aria-label="Permalink to &quot;Maintenance and Support&quot;">​</a></h2><p>Currently, JSDoc Annotation version 1.0.0 is available, and some bugs have not yet been exposed. So I will continue testing the plugin and maintaining it for any bugs that appear. The project source code is available on GitHub, and I hope users can provide suggestions, which will help me improve the plugin.</p><p>If you like it, please give me a thumbs-up; it’s also my motivation to continue working on this project.</p><hr><p>Let me know if you&#39;d like any further adjustments!</p>`,60)]))}const m=a(t,[["render",l]]);export{d as __pageData,m as default};
