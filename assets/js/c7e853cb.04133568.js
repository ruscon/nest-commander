"use strict";(self.webpackChunknest_commander_monorepo=self.webpackChunknest_commander_monorepo||[]).push([[15],{7942:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(959);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),u=o,y=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?a.createElement(y,s(s({ref:t},c),{},{components:n})):a.createElement(y,s({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var m=2;m<r;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=n(2081),o=n(4604),r=(n(959),n(7942)),s=["components"],i={title:"CommandTestFactory",sidebar_label:"TestFactory"},l=void 0,m={unversionedId:"testing/factory",id:"testing/factory",title:"CommandTestFactory",description:"To get started with the CommandTestFactory you need to make use of the createTestingCommand, similar to TestingModule's createTestingModule. This command can take in general module metadata, including providers, but generally it's pretty easy to just take in the related module and use overrideProvider for mocking whatever providers are necessary to mock.",source:"@site/docs/testing/factory.md",sourceDirName:"testing",slug:"/testing/factory",permalink:"/docs/testing/factory",draft:!1,editUrl:"https://github.com/jmcdo29/nest-commander/edit/main/apps/docs/docs/testing/factory.md",tags:[],version:"current",lastUpdatedBy:"Eugen Istoc",lastUpdatedAt:1659565830,formattedLastUpdatedAt:"Aug 3, 2022",frontMatter:{title:"CommandTestFactory",sidebar_label:"TestFactory"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/testing/installation"},next:{title:"Installation",permalink:"/docs/schematics/installation"}},c={},d=[{value:"Mocking Commands",id:"mocking-commands",level:2},{value:"Mocking User Input",id:"mocking-user-input",level:2}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To get started with the ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandTestFactory")," you need to make use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"createTestingCommand"),", similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"TestingModule"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"createTestingModule"),". This command can take in general module metadata, including providers, but generally it's pretty easy to just take in the related module and use ",(0,r.kt)("inlineCode",{parentName:"p"},"overrideProvider")," for mocking whatever providers are necessary to mock."),(0,r.kt)("h2",{id:"mocking-commands"},"Mocking Commands"),(0,r.kt)("p",null,"Normally when running a CLI you'd do something like ",(0,r.kt)("inlineCode",{parentName:"p"},"<cli-name> <command-name> <argument> [options]"),", right, something like ",(0,r.kt)("inlineCode",{parentName:"p"},"crun run 'echo Hello World!'"),", but that's harder to do in a testing environment. With our ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandTestFactory")," instead, we can do something like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/task.command.spec.ts"',title:'"test/task.command.spec.ts"'},"describe('Task Command', () => {\n  let commandInstance: TestingModule;\n\n  beforeAll(async () => {\n    commandInstance = await CommandTestFactory.createTestingCommand({\n      imports: [AppModule]\n    }).compile();\n  });\n\n  it('should call the \"run\" method', async () => {\n    const spawnSpy = jest.spyOn(childProcess, 'spawn');\n    await CommandTestFactory.run(commandInstance, [\n      'run',\n      'echo Hello World!'\n    ]);\n    expect(spawnSpy).toBeCalledWith([\n      'echo Hello World!',\n      { shell: os.userInfo().shell }\n    ]);\n  });\n});\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"TestingModule")," is imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@nestjs/testing")," package.")),(0,r.kt)("p",null,"Aside from the Jest spies that we're using, you'll notice that we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandTestFactory")," to set up a ",(0,r.kt)("inlineCode",{parentName:"p"},"TestingModule")," and use it to run a test command. We pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command here to match our ",(0,r.kt)("inlineCode",{parentName:"p"},"@Command()")," we already created, but because ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," is the default command, it can be omitted. Then we pass in our arguments as the next array value, and any flags would be array values after it. All of this gets passed on to the commander instance and is processed as usual."),(0,r.kt)("h2",{id:"mocking-user-input"},"Mocking User Input"),(0,r.kt)("p",null,"Now this is great and all, but we also need to be able to mock user inputs, as we allow the ",(0,r.kt)("inlineCode",{parentName:"p"},"InquirerService")," to take in responses to questions. For this, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandTestFactory.setAnswers()"),". We can pass an array of answers to the ",(0,r.kt)("inlineCode",{parentName:"p"},"setAnswers")," method to mock the input gained from the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/task.command.spec.ts"',title:'"test/task.command.spec.ts"'},"describe('Task Command', () => {\n  let commandInstance: TestingModule;\n\n  beforeAll(async () => {\n    commandInstance = await CommandTestFactory.createTestingCommand({\n      imports: [AppModule]\n    }).compile();\n  });\n\n  it('should call the \"run\" method', async () => {\n    CommandTestFactory.setAnswers(['echo Hello World!']);\n    const spawnSpy = jest.spyOn(childProcess, 'spawn');\n    await CommandTestFactory.run(commandInstance, ['run']);\n    expect(spawnSpy).toBeCalledWith([\n      'echo Hello World!',\n      { shell: os.userInfo().shell }\n    ]);\n  });\n});\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The answers passed in will be what are passed back from the ",(0,r.kt)("inlineCode",{parentName:"p"},"InquirerService"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"ask")," method, so make sure to have already transformed the input as the ",(0,r.kt)("inlineCode",{parentName:"p"},"InquirerService")," would.")))}u.isMDXComponent=!0}}]);