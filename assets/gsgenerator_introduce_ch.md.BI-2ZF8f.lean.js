import{_ as e,c as r,a0 as s,o as a}from"./chunks/framework.sqaneRz1.js";const h=JSON.parse('{"title":"Generate TS and JS Getters / Setters","description":"","frontmatter":{},"headers":[],"relativePath":"gsgenerator/introduce_ch.md","filePath":"gsgenerator/introduce_ch.md"}'),p={name:"gsgenerator/introduce_ch.md"};function i(n,t,o,g,c,l){return a(),r("div",null,t[0]||(t[0]=[s('<h1 id="generate-ts-and-js-getters-setters" tabindex="-1">Generate TS and JS Getters / Setters <a class="header-anchor" href="#generate-ts-and-js-getters-setters" aria-label="Permalink to &quot;Generate TS and JS Getters / Setters&quot;">​</a></h1><ul><li><a href="https://github.com/qizhiqizhi/WJGSGenerator" target="_blank" rel="noreferrer">GitHub地址</a></li></ul><p><strong>现有功能:</strong></p><p>1.针对TS、JS生成传统面向对象方法的set、get函数或ES6存取器的set、get函数</p><p>2.能够识别函数是否重复，避免重复生成函数</p><p>3.能够对修饰符缺失以及&#39;_&#39;缺失的情况进行提示</p><p>4.能够针对单个属性、单个文件（文件内所有类）以及在快速选择框中选择属性生成函数</p><p>5.能够通过修改配置项选择是否需要注释以及使用传统写法还是ES6写法</p><p><strong>使用:</strong></p><p>(JS使用与TS使用相同，故只展示TS的使用)</p><p>1.单个属性插入函数：选中某个属性使用generateGetterSetter或使用快捷键ctrl+win+shift+s</p><p>针对ES6存取器写法：</p><p><img src="https://s3.bmp.ovh/imgs/2024/12/19/99c74d0ce40a57b7.gif" alt="img"></p><p>针对传统面向对象写法：</p><p><img src="https://s3.bmp.ovh/imgs/2024/12/19/b701bf964f107e98.gif" alt="img"></p><p>2.文件插入函数：使用generateGetterSetterForAll或使用快捷键ctrl+win+shift+d</p><p><img src="https://s3.bmp.ovh/imgs/2024/12/19/76da5aa06543865d.gif" alt="img"></p><p>3.选中属性生成函数：使用SelectGSGenerate或使用快捷键ctrl+alt+g</p><p><img src="https://s3.bmp.ovh/imgs/2024/12/19/1c97f1db39564636.gif" alt="img"></p><p>4.是否需要注释：Ctrl + Shift + P后输入ConfigurationExegesis</p><p>5.是否生成ES6风格函数：Ctrl + Shift + P后输入ConfigurationES6</p>',21)]))}const S=e(p,[["render",i]]);export{h as __pageData,S as default};
