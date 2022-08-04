"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[66808],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40516:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={description:"The ISC Magic Contract allows EVM contracts to access ISC functionality.",image:"/img/logo/WASP_logo_dark.png",keywords:["configure","using","EVM","magic","Ethereum","Solidity","metamask","JSON","RPC"]},l="The ISC Magic Contract",s={unversionedId:"guide/evm/magic",id:"guide/evm/magic",title:"The ISC Magic Contract",description:"The ISC Magic Contract allows EVM contracts to access ISC functionality.",source:"@site/content/build/wasp/develop/documentation/docs/guide/evm/magic.md",sourceDirName:"guide/evm",slug:"/guide/evm/magic",permalink:"/smart-contracts/develop/guide/evm/magic",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/evm/magic.md",tags:[],version:"current",frontMatter:{description:"The ISC Magic Contract allows EVM contracts to access ISC functionality.",image:"/img/logo/WASP_logo_dark.png",keywords:["configure","using","EVM","magic","Ethereum","Solidity","metamask","JSON","RPC"]},sidebar:"tutorialSidebar",previous:{title:"How to use EVM in IOTA Smart Contracts",permalink:"/smart-contracts/develop/guide/evm/using"},next:{title:"EVM Tooling",permalink:"/smart-contracts/develop/guide/evm/tooling"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-isc-magic-contract"},"The ISC Magic Contract"),(0,o.kt)("p",null,"As previously ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/evm/compatibility"},"noted"),", EVM and ISC are inherently very different platforms.\nAs such, some EVM-specific actions (e.g. manipulating Ethereum tokens) is disabled, and ISC-specific functionality can be accessed by EVM contracts through the ",(0,o.kt)("em",{parentName:"p"},"ISC Magic Contract"),"."),(0,o.kt)("p",null,"The Magic contract is an EVM contract that is deployed by default on every ISC chain, in the EVM genesis block, at address ",(0,o.kt)("inlineCode",{parentName:"p"},"0x1074"),".\nThe implementation of the Magic contract is baked-in in the ",(0,o.kt)("inlineCode",{parentName:"p"},"evm")," core contract; i.e. it is not a pure-Solidity contract."),(0,o.kt)("p",null,"The Magic contract can be accessed from any Solidity contract by importing its ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISC.sol"},"interface"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma solidity >=0.8.5;\n\nimport "@iscmagic/ISC.sol";\n\ncontract MyEVMContract {\n    event EntropyEvent(bytes32 entropy);\n\n    // this will emit a "random" value, taken from the ISC entropy value\n    function emitEntropy() public {\n        bytes32 e = isc.getEntropy();\n        emit EntropyEvent(e);\n    }\n}\n')),(0,o.kt)("p",null,"After ",(0,o.kt)("inlineCode",{parentName:"p"},'import "@iscmagic/ISC.sol"'),", the global variable ",(0,o.kt)("inlineCode",{parentName:"p"},"isc")," points to the\nMagic contract at ",(0,o.kt)("inlineCode",{parentName:"p"},"0x1074"),", which can be called like a regular EVM contract.\nFor example, with ",(0,o.kt)("inlineCode",{parentName:"p"},"isc.getEntropy()")," we are calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"getEntropy")," function which, in turn, calls ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/core_concepts/sandbox"},"ISC Sandbox's")," ",(0,o.kt)("inlineCode",{parentName:"p"},"GetEntropy"),"."),(0,o.kt)("p",null,"The Magic Contract's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISC.sol"},"interface")," is well documented, so it doubles as an API reference."),(0,o.kt)("p",null,"There are some usage examples in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/evm/evmtest/ISCTest.sol"},"ISCTest.sol")," contract (used internally in unit tests)."))}d.isMDXComponent=!0}}]);