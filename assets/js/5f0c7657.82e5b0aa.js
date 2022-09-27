"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[85550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),p=r,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(54411),l=n(43305);const c={keywords:["value","Synchronous functions","function descriptor","smart contract chain","views","funcs"],description:"Synchronous calls can only be made between contracts that are running on the same contract chain. When calling a smart contract function you can only access the memory assigned to that specific smart contract, the only way to share data between smart contracts that call each other is through function parameters and return values.",image:"/img/logo/WASP_logo_dark.png"},s="Calling Functions",i={unversionedId:"guide/wasm_vm/call",id:"guide/wasm_vm/call",title:"Calling Functions",description:"Synchronous calls can only be made between contracts that are running on the same contract chain. When calling a smart contract function you can only access the memory assigned to that specific smart contract, the only way to share data between smart contracts that call each other is through function parameters and return values.",source:"@site/content/build/wasp/production/documentation/docs/guide/wasm_vm/call.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/call",permalink:"/smart-contracts/guide/wasm_vm/call",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/wasm_vm/call.mdx",tags:[],version:"current",frontMatter:{keywords:["value","Synchronous functions","function descriptor","smart contract chain","views","funcs"],description:"Synchronous calls can only be made between contracts that are running on the same contract chain. When calling a smart contract function you can only access the memory assigned to that specific smart contract, the only way to share data between smart contracts that call each other is through function parameters and return values.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Function Descriptors",permalink:"/smart-contracts/guide/wasm_vm/funcdesc"},next:{title:"Posting Asynchronous Requests",permalink:"/smart-contracts/guide/wasm_vm/post"}},u={},d=[],m={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"calling-functions"},"Calling Functions"),(0,r.kt)("p",null,"Synchronous function calls between smart contracts act very similar to how normal function\ncalls work in any programming language, but with a slight twist. With normal function\ncalls you share all the global memory that you can access with every function that you\ncall. However, when calling a smart contract function you can only access the memory\nassigned to that specific smart contract. Remember, each smart contract runs in its own\nsandbox environment. Therefore, the only way to share data between smart contracts that\ncall each other is through function parameters and return values."),(0,r.kt)("p",null,"Synchronous calls can only be made between contracts that are running on the same contract\nchain. The ISC host knows about all the contracts it is running on a chain, and therefore\nis able to dispatch the call to the correct contract function. The function descriptor is\nused to specify the call parameters (if any) through its ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/params"},(0,r.kt)("inlineCode",{parentName:"a"},"params")," proxy"),", and\nto invoke the function through its ",(0,r.kt)("inlineCode",{parentName:"p"},"func")," interface."),(0,r.kt)("p",null,"In addition, when the function that is called is not a ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/views"},"View"),", it is possible\nto pass tokens to the function call through this interface. Note that the only way to call\na function and properly pass tokens to it ",(0,r.kt)("em",{parentName:"p"},"within the same chain")," is through the function\ndescriptor. Otherwise, the ",(0,r.kt)("inlineCode",{parentName:"p"},"allowance()")," function will not register any incoming tokens."),(0,r.kt)("p",null,"When the call is made, the calling function will be paused and wait for the called\nfunction to complete. After completion, it may access the returned values (if any) through\nthe ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/results"},(0,r.kt)("inlineCode",{parentName:"a"},"results")," proxy")," of the function descriptor."),(0,r.kt)("p",null,"When calling a function from a View function, it is only possible to call other View\nfunctions. The ScFuncs interface enforces this at compile-time through the ISC function\ncontext that needs to be passed to the function that creates the function descriptor."),(0,r.kt)("p",null,"Here's how a smart contract would tell a ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend")," contract on the same chain to divide\nthe 1000 tokens it passes to the function:"),(0,r.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"f := dividend.ScFuncs.Divide(ctx)\nf.Func.TransferBaseTokens(1000).Call()\n"))),(0,r.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let f = dividend::ScFuncs::divide(ctx);\nf.func.transfer_base_tokens(1000).call();\n"))),(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let f = dividend.ScFuncs.divide(ctx);\nf.func.transferBaseTokens(1000).call();\n")))),(0,r.kt)("p",null,"And here is how a smart contract would ask a ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend")," contract on the same chain to\nreturn the dispersion factor for a specific address:"),(0,r.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"f := dividend.ScFuncs.GetFactor(ctx)\nf.Params.Address().SetValue(address)\nf.Func.Call()\nfactor := f.Results.Factor().Value()\n"))),(0,r.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let f = dividend::ScFuncs::get_factor(ctx);\nf.params.address().set_value(&address);\nf.func.call();\nlet factor = f.results.factor().value();\n"))),(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let f = dividend.ScFuncs.getFactor(ctx);\nf.params.address().setValue(address);\nf.func.call();\nlet factor = f.results.factor().value();\n")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a function descriptor for the desired function."),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"params")," proxy in the function descriptor to set any required parameters."),(0,r.kt)("li",{parentName:"ol"},"Direct the ",(0,r.kt)("inlineCode",{parentName:"li"},"func")," member of the function descriptor to call the associated function"),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"results")," proxy in the function descriptor to retrieve any results we are\ninterested in.")),(0,r.kt)("p",null,'The function descriptors assume that the function to be called is associated with the\ndefault Hname of the contract, in this case ScHname::new("dividend"). If you deployed the\ncontract that contains the function you want to call under a different name, then you\nwould have to provide its associated Hname to the ',(0,r.kt)("inlineCode",{parentName:"p"},"func")," member through the of_contract()\nmember function like this:"),(0,r.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'altContract := NewScHname("alternateName")\nf := dividend.ScFuncs.Divide(ctx)\nf.Func.OfContract(altContract).TransferBaseTokens(1000).Call()\n'))),(0,r.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let alt_contract = ScHname::new("alternateName");\nlet f = dividend::ScFuncs::divide(ctx);\nf.func.of_contract(alt_contract).transfer_base_tokens(1000).call();\n'))),(0,r.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'let altContract = ScHname.fromString("alternateName");\nlet f = dividend.ScFuncs.divide(ctx);\nf.func.ofContract(altContract).transferBaseTokens(1000).call();\n')))),(0,r.kt)("p",null,"In the next section we will look at how to use function descriptors to\n",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/post"},"asynchronously call")," smart contract functions on any chain."))}p.isMDXComponent=!0},43305:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem__kUE";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},54411:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),r=n(67294),o=n(86010),l=n(51048),c=n(33609),s=n(1943),i=n(72957);const u="tabList_fbd4",d="tabItem_v5XY";function m(e){var t,n;const{lazy:l,block:m,defaultValue:p,values:h,groupId:f,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,c.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:T}=(0,s.U)(),[N,x]=(0,r.useState)(k),S=[],{blockElementScrollPositionUntilNextRender:_}=(0,i.o5)();if(null!=f){const e=w[f];null!=e&&e!==N&&y.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=S.indexOf(t),a=y[n].value;a!==N&&(_(t),x(a),null!=f&&T(f,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=S.indexOf(e.currentTarget)+1;n=null!=(a=S[t])?a:S[0];break}case"ArrowLeft":{var r;const t=S.indexOf(e.currentTarget)-1;n=null!=(r=S[t])?r:S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},g)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:O,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}}}]);