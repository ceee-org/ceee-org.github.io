"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[48237],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?a.createElement(h,c(c({ref:n},l),{},{components:t})):a.createElement(h,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56746:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=t(87462),r=(t(67294),t(3905)),o=t(54411),c=t(43305);const i={keywords:["functions","thunk","insert operations"],description:"Thunk functions encapsulate access and parameter checking and set up the type-safe function-specific contexts. Thunks are used to insert operations at the beginning or end of the wrapped function to adapt it to changing requirements",image:"/img/logo/WASP_logo_dark.png"},s="Thunk Functions",u={unversionedId:"guide/wasm_vm/thunks",id:"guide/wasm_vm/thunks",title:"Thunk Functions",description:"Thunk functions encapsulate access and parameter checking and set up the type-safe function-specific contexts. Thunks are used to insert operations at the beginning or end of the wrapped function to adapt it to changing requirements",source:"@site/content/build/wasp/production/documentation/docs/guide/wasm_vm/thunks.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/thunks",permalink:"/smart-contracts/guide/wasm_vm/thunks",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/wasm_vm/thunks.mdx",tags:[],version:"current",frontMatter:{keywords:["functions","thunk","insert operations"],description:"Thunk functions encapsulate access and parameter checking and set up the type-safe function-specific contexts. Thunks are used to insert operations at the beginning or end of the wrapped function to adapt it to changing requirements",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Function Results",permalink:"/smart-contracts/guide/wasm_vm/results"},next:{title:"View-Only Functions",permalink:"/smart-contracts/guide/wasm_vm/views"}},l={},p=[],m={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"thunk-functions"},"Thunk Functions"),(0,r.kt)("p",null,"In computer programming, a thunk is a wrapper function that is used to inject code around\nanother function. Thunks are used to insert operations before and/or after the wrapped\nfunction is being called to adapt it to changing requirements. The ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/usage"},"schema"),"\ntool will generate such thunk functions to be able to properly set up calls to the smart contract\nfunctions. It also creates a mapping between the name/id of the function and the actual\nfunction, and generates code to properly communicate this mapping to the ISC host."),(0,r.kt)("p",null,"In our case we use thunks not only to inject code around the smart contract function, but\nalso to make the smart contract function type-safe. The thunks all have an identical\nfunction signature, and each will set up a function-specific data structure so that the\nactual smart contract function will deal with them in a type-safe way. Having a common\nfunction signature for the thunks means that it is easy to generate a table of all\nfunctions and their names that can be used to generically call these functions."),(0,r.kt)("p",null,"All code for this table and the thunks is generated as part of ",(0,r.kt)("inlineCode",{parentName:"p"},"lib.xx")," and it looks as\nfollows for the ",(0,r.kt)("inlineCode",{parentName:"p"},"dividend")," example smart contract (for simplicity the thunk function\ncontents has been omitted for now):"),(0,r.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"var exportMap = wasmlib.ScExportMap{\n    Names: []string{\n        FuncDivide,\n        FuncInit,\n        FuncMember,\n        FuncSetOwner,\n        ViewGetFactor,\n        ViewGetOwner,\n    },\n    Funcs: []wasmlib.ScFuncContextFunction{\n        funcDivideThunk,\n        funcInitThunk,\n        funcMemberThunk,\n        funcSetOwnerThunk,\n    },\n    Views: []wasmlib.ScViewContextFunction{\n        viewGetFactorThunk,\n        viewGetOwnerThunk,\n    },\n}\n\nfunc OnLoad(index int32) {\n    if index >= 0 {\n        wasmlib.ScExportsCall(index, &exportMap)\n        return\n    }\n\n    wasmlib.ScExportsExport(&exportMap)\n}\n\nfunc funcDivideThunk(ctx wasmlib.ScFuncContext) {}\nfunc funcInitThunk(ctx wasmlib.ScFuncContext) {}\nfunc funcMemberThunk(ctx wasmlib.ScFuncContext) {}\nfunc funcSetOwnerThunk(ctx wasmlib.ScFuncContext) {}\nfunc viewGetFactorThunk(ctx wasmlib.ScViewContext) {}\nfunc viewGetOwnerThunk(ctx wasmlib.ScViewContext) {}\n"))),(0,r.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"const EXPORT_MAP: ScExportMap = ScExportMap {\n    names: &[\n        FUNC_DIVIDE,\n        FUNC_INIT,\n        FUNC_MEMBER,\n        FUNC_SET_OWNER,\n        VIEW_GET_FACTOR,\n        VIEW_GET_OWNER,\n    ],\n    funcs: &[\n        func_divide_thunk,\n        func_init_thunk,\n        func_member_thunk,\n        func_set_owner_thunk,\n    ],\n    views: &[\n        view_get_factor_thunk,\n        view_get_owner_thunk,\n    ],\n};\n\n#[no_mangle]\nfn on_call(index: i32) {\n    ScExports::call(index, &EXPORT_MAP);\n}\n\n#[no_mangle]\nfn on_load() {\n    ScExports::export(&EXPORT_MAP);\n}\n\nfn func_divide_thunk(ctx: &ScFuncContext) {}\nfn func_init_thunk(ctx: &ScFuncContext) {}\nfn func_member_thunk(ctx: &ScFuncContext) {}\nfn func_set_owner_thunk(ctx: &ScFuncContext) {}\nfn view_get_factor_thunk(ctx: &ScViewContext) {}\nfn view_get_owner_thunk(ctx: &ScViewContext) {}\n"))),(0,r.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const exportMap: wasmlib.ScExportMap = {\n    names: [\n        sc.FuncDivide,\n        sc.FuncInit,\n        sc.FuncMember,\n        sc.FuncSetOwner,\n        sc.ViewGetFactor,\n        sc.ViewGetOwner,\n    ],\n    funcs: [\n        funcDivideThunk,\n        funcInitThunk,\n        funcMemberThunk,\n        funcSetOwnerThunk,\n    ],\n    views: [\n        viewGetFactorThunk,\n        viewGetOwnerThunk,\n    ],\n};\n\nexport function on_call(index: i32): void {\n    wasmlib.WasmVMHost.connect();\n    wasmlib.ScExports.call(index, exportMap);\n}\n\nexport function on_load(): void {\n    wasmlib.WasmVMHost.connect();\n    wasmlib.ScExports.export(exportMap);\n}\n\n\nfunction funcDivideThunk(ctx: ScFuncContext) {}\nfunction funcInitThunk(ctx: ScFuncContext) {}\nfunction funcMemberThunk(ctx: ScFuncContext) {}\nfunction funcSetOwnerThunk(ctx: ScFuncContext) {}\nfunction viewGetFactorThunk(ctx: ScViewContext) {}\nfunction viewGetOwnerThunk(ctx: ScViewContext) {}\n")))),(0,r.kt)("p",null,"The key functions here are the ",(0,r.kt)("inlineCode",{parentName:"p"},"on_load()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"on_call()")," Wasm callback functions (the Go\nversion defines those in WasmLib and delegates them both to ",(0,r.kt)("inlineCode",{parentName:"p"},"OnLoad()"),"). The ",(0,r.kt)("inlineCode",{parentName:"p"},"on_load()"),"\nWasm function will be called by the Wasm VM upon loading of the Wasm code. It will inform\nthe ISC host of all the function ids and types (Func or View) that the smart contract\nprovides."),(0,r.kt)("p",null,"When the host needs to call a function of the smart contract it will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"on_call()"),"\ncallback function with the corresponding function id, and then the ",(0,r.kt)("inlineCode",{parentName:"p"},"on_call()")," function\nwill dispatch the call to the proper thunk function according to the mapping table that\nwas generated by the schema tool."),(0,r.kt)("p",null,"Here is an example implementation of a thunk function for the ",(0,r.kt)("inlineCode",{parentName:"p"},"setOwner()")," contract\nfunction. You can examine the other thunk functions that all follow the same pattern in\nthe generated ",(0,r.kt)("inlineCode",{parentName:"p"},"lib.xx"),":"),(0,r.kt)(o.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type SetOwnerContext struct {\n    Params  ImmutableSetOwnerParams\n    State   MutableDividendState\n}\n\nfunc funcSetOwnerThunk(ctx wasmlib.ScFuncContext) {\n    ctx.Log("dividend.funcSetOwner")\n    f := &SetOwnerContext{\n        Params: ImmutableSetOwnerParams{\n            proxy: wasmlib.NewParamsProxy(),\n        },\n        State: MutableDividendState{\n            proxy: wasmlib.NewStateProxy(),\n        },\n    }\n\n    // only defined owner of contract can change owner\n    access := f.State.Owner()\n    ctx.Require(access.Exists(), "access not set: owner")\n    ctx.Require(ctx.Caller() == access.Value(), "no permission")\n\n    ctx.Require(f.Params.Owner().Exists(), "missing mandatory owner")\n    funcSetOwner(ctx, f)\n    ctx.Log("dividend.funcSetOwner ok")\n}\n'))),(0,r.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub struct SetOwnerContext {\n    params: ImmutableSetOwnerParams,\n    state: MutableDividendState,\n}\n\nfn func_set_owner_thunk(ctx: &ScFuncContext) {\n    ctx.log("dividend.funcSetOwner");\n    let f = SetOwnerContext {\n        params: ImmutableSetOwnerParams { proxy: params_proxy() },\n        state: MutableDividendState { proxy: state_proxy() },\n    };\n\n    // only defined owner of contract can change owner\n    let access = f.state.owner();\n    ctx.require(access.exists(), "access not set: owner");\n    ctx.require(ctx.caller() == access.value(), "no permission");\n\n    ctx.require(f.params.owner().exists(), "missing mandatory owner");\n    func_set_owner(ctx, &f);\n    ctx.log("dividend.funcSetOwner ok");\n}\n'))),(0,r.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// this class is actually defined in contract.ts\nexport class SetOwnerContext {\n    params: sc.ImmutableSetOwnerParams = new sc.ImmutableSetOwnerParams(wasmlib.paramsProxy());\n    state: sc.MutableDividendState = new sc.MutableDividendState(wasmlib.ScState.proxy());\n}\n\nfunction funcSetOwnerThunk(ctx: wasmlib.ScFuncContext): void {\n    ctx.log("dividend.funcSetOwner");\n    let f = new sc.SetOwnerContext();\n\n    // only defined owner of contract can change owner\n    const access = f.state.owner();\n    ctx.require(access.exists(), "access not set: owner");\n    ctx.require(ctx.caller().equals(access.value()), "no permission");\n\n    ctx.require(f.params.owner().exists(), "missing mandatory owner");\n    sc.funcSetOwner(ctx, f);\n    ctx.log("dividend.funcSetOwner ok");\n}\n')))),(0,r.kt)("p",null,"First, the thunk logs the contract and function name to show that the call has started.\nThen it sets up a strongly typed function-specific context structure. First, we add the\nfunction-specific immutable ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," interface structure, which is only present when the\nfunction actually can have parameters. Then we add the contract-specific ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," interface\nstructure. In this case it is mutable because setOwner is a ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/funcs"},"Func"),". For\n",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/views"},"Views")," this would be an immutable state interface. Finally, we would add the\nfunction-specific mutable ",(0,r.kt)("inlineCode",{parentName:"p"},"results")," interface structure, which is only present when the\nfunction actually returns results. Obviously, this is not the case for this ",(0,r.kt)("inlineCode",{parentName:"p"},"setOwner()"),"\nfunction."),(0,r.kt)("p",null,"Next it sets up access control for the function according to the schema definition file.\nIn this case it retrieves the ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," state variable through the function context,\nrequires that the variable exists, and then requires that the ",(0,r.kt)("inlineCode",{parentName:"p"},"caller()")," of the function\nequals that value. Any failing requirement will panic out of the thunk function with an\nerror message. So this code makes sure that only the owner of the contract can call this\nfunction."),(0,r.kt)("p",null,"Now we get to the point where we can use the function-specific ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," interface to check\nfor mandatory parameters. Each mandatory parameter is required to exist, or else we will\npanic out of the thunk function with an error message."),(0,r.kt)("p",null,"With the setup and automated checks completed, we now call the actual smart contract\nfunction implementation that is maintained by the user. After this function has completed,\nwe would process the returned results for those functions that have any (in this case we\nobviously don't have results), and finally we log that the contract function has\ncompleted successfully. Remember that any error within the user function will cause a\npanic, so this logging will never occur in case that happens."),(0,r.kt)("p",null,"In the next section we will look at the specifics of ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/wasm_vm/views"},"view functions"),"."))}d.isMDXComponent=!0},43305:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(67294),r=t(86010);const o="tabItem__kUE";function c(e){let{children:n,hidden:t,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,c),hidden:t},n)}},54411:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(87462),r=t(67294),o=t(86010),c=t(51048),i=t(33609),s=t(1943),u=t(72957);const l="tabList_fbd4",p="tabItem_v5XY";function m(e){var n,t;const{lazy:c,block:m,defaultValue:d,values:h,groupId:f,className:w}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),x=(0,i.l)(b,((e,n)=>e.value===n.value));if(x.length>0)throw new Error('Docusaurus error: Duplicate values "'+x.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===d?d:null!=(n=null!=d?d:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:y}=(0,s.U)(),[S,T]=(0,r.useState)(g),_=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=f){const e=v[f];null!=e&&e!==S&&b.some((n=>n.value===e))&&T(e)}const C=e=>{const n=e.currentTarget,t=_.indexOf(n),a=b[t].value;a!==S&&(O(n),T(a),null!=f&&y(f,String(a)))},N=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=_.indexOf(e.currentTarget)+1;t=null!=(a=_[n])?a:_[0];break}case"ArrowLeft":{var r;const n=_.indexOf(e.currentTarget)-1;t=null!=(r=_[n])?r:_[_.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",l)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},w)},b.map((e=>{let{value:n,label:t,attributes:c}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:e=>_.push(e),onKeyDown:N,onFocus:C,onClick:C},c,{className:(0,o.Z)("tabs__item",p,null==c?void 0:c.className,{"tabs__item--active":S===n})}),null!=t?t:n)}))),c?(0,r.cloneElement)(k.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==S})))))}function d(e){const n=(0,c.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}}}]);