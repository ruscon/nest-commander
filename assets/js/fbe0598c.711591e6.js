"use strict";(self.webpackChunknest_commander_monorepo=self.webpackChunknest_commander_monorepo||[]).push([[496],{7942:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(2081),r=n(4604),o=(n(959),n(7942)),i=["components"],l={title:"Plugins",sidebar_label:"Plugins"},s=void 0,p={unversionedId:"features/plugins",id:"features/plugins",title:"Plugins",description:"As of version 2.3.0, you can build your CLI with the ability to read for extra plugins that are developed by other people. By using the usePlugins option with the CommandFactory, you'll be setting up you shiny new CLI to expect to find a config file with a plugins property that is an array of strings, either as the locations of packages in a local environment, or npm package names.",source:"@site/docs/features/plugins.md",sourceDirName:"features",slug:"/features/plugins",permalink:"/docs/features/plugins",draft:!1,editUrl:"https://github.com/jmcdo29/nest-commander/edit/main/apps/docs/docs/features/plugins.md",tags:[],version:"current",lastUpdatedBy:"Maximilien Garenne",lastUpdatedAt:1658940952,formattedLastUpdatedAt:"Jul 27, 2022",frontMatter:{title:"Plugins",sidebar_label:"Plugins"},sidebar:"docs",previous:{title:"CommandFactory",permalink:"/docs/features/factory"},next:{title:"Installation",permalink:"/docs/testing/installation"}},u={},m=[{value:"The Config File",id:"the-config-file",level:2},{value:"The Plugins",id:"the-plugins",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As of version 2.3.0, you can build your CLI with the ability to read for extra plugins that are developed by other people. By using the ",(0,o.kt)("inlineCode",{parentName:"p"},"usePlugins")," option with the ",(0,o.kt)("inlineCode",{parentName:"p"},"CommandFactory"),", you'll be setting up you shiny new CLI to expect to find a config file with a ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," property that is an array of strings, either as the locations of packages in a local environment, or npm package names."),(0,o.kt)("h2",{id:"the-config-file"},"The Config File"),(0,o.kt)("p",null,"The config file, by default, can be ",(0,o.kt)("em",{parentName:"p"},"one")," of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".nest-commanderrc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".nest-commanderrc.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".nest-commanderrc.yaml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".nest-commanderc.yml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nest-commander.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nest-commander.yaml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nest-commander.yml"))),(0,o.kt)("p",null,"If you'd lke to use a name other than ",(0,o.kt)("inlineCode",{parentName:"p"},"nest-commander"),", you can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"cliName")," option to the ",(0,o.kt)("inlineCode",{parentName:"p"},"CommandFactory")," as well."),(0,o.kt)("p",null,"Now the config file should be incredibly simple, just a JSON object with a ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," property that is an array of strings, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": ["nest-commander-plugin", "./my/local/plugin"]\n}\n')),(0,o.kt)("h2",{id:"the-plugins"},"The Plugins"),(0,o.kt)("p",null,"Each plugin registered needs to have a ",(0,o.kt)("strong",{parentName:"p"},"default")," export that is a Nest module that adds the new command as a ",(0,o.kt)("inlineCode",{parentName:"p"},"provider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/plugin.command.ts",title:"src/plugin.command.ts"},"@Command({ name: 'plugin' })\nexport class PluginCommand extends CommandRunner {\n  async run() {\n    console.log('From the plugin!');\n  }\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/plugin.module.ts",title:"src/plugin.module.ts"},"@Module({\n  providers: [PluginCommand]\n})\nexport class PluginModule {}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/index.ts",title:"src/index.ts"},"import { PluginModule } from './plugin.module';\nexport default PluginModule;\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If the command you've built uses ",(0,o.kt)("inlineCode",{parentName:"p"},"usePlugins: true")," and a config file is not found, commander will still be allowed to try and execute the command given. If an error ends up being thrown, such as a command not found error, then the user of the CLI will get a warning about a possible config file missing, along with commander's standard help message.")))}d.isMDXComponent=!0}}]);