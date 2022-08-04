"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[48334],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80589:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],c={description:"How to configure and use EVM support in IOTA Smart Contracts.",image:"/img/logo/WASP_logo_dark.png",keywords:["configure","using","EVM","Ethereum","Solidity","deploy","hardhat","metamask","JSON","RPC","how to"]},s="How to use EVM in IOTA Smart Contracts",u={unversionedId:"guide/evm/using",id:"guide/evm/using",title:"How to use EVM in IOTA Smart Contracts",description:"How to configure and use EVM support in IOTA Smart Contracts.",source:"@site/content/build/wasp/develop/documentation/docs/guide/evm/using.md",sourceDirName:"guide/evm",slug:"/guide/evm/using",permalink:"/smart-contracts/develop/guide/evm/using",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/evm/using.md",tags:[],version:"current",frontMatter:{description:"How to configure and use EVM support in IOTA Smart Contracts.",image:"/img/logo/WASP_logo_dark.png",keywords:["configure","using","EVM","Ethereum","Solidity","deploy","hardhat","metamask","JSON","RPC","how to"]},sidebar:"tutorialSidebar",previous:{title:"EVM compatibility in IOTA Smart Contracts",permalink:"/smart-contracts/develop/guide/evm/compatibility"},next:{title:"The ISC Magic Contract",permalink:"/smart-contracts/develop/guide/evm/magic"}},l={},p=[{value:"1. Deploy an IOTA Smart Contracts chain",id:"1-deploy-an-iota-smart-contracts-chain",level:2},{value:"2. Fund an Ethereum account on your IOTA Smart Contracts chain",id:"2-fund-an-ethereum-account-on-your-iota-smart-contracts-chain",level:2},{value:"3. Connect to the JSON-RPC service",id:"3-connect-to-the-json-rpc-service",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-use-evm-in-iota-smart-contracts"},"How to use EVM in IOTA Smart Contracts"),(0,r.kt)("h2",{id:"1-deploy-an-iota-smart-contracts-chain"},"1. Deploy an IOTA Smart Contracts chain"),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/chains_and_nodes/setting-up-a-chain"},"deploying an IOTA Smart Contracts chain"),", EVM support is automatically added with the default configuration. The ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli chain deploy")," command accepts some EVM-specific options, listed below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--evm-chainid <n>"),": EVM chain ID (default: 1074)."),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Re-using an existing Chain ID is not recommended, and can be a security risk. For any serious usage make sure you register a unique Chain ID on ",(0,r.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"Chainlist")," and use that instead of the default. ",(0,r.kt)("strong",{parentName:"p"},"It is not possible to change the EVM chain ID after deployment.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--evm-block-keep-amount <n>"),": Amount of blocks to keep in storage (default: keep all blocks).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--evm-gas-limit <n>"),": Block gas limit (default: 15000000).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--evm-gas-ratio <a>:<b>"),": ISC gas : EVM gas ratio (default 1:1). The gas ratio can be changed after deployment by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"setGasRatio")," function of the ",(0,r.kt)("inlineCode",{parentName:"p"},"evm")," core contract."))),(0,r.kt)("p",null,'You can verify that the EVM support is enabled by visiting the Wasp dashboard and checking the "EVM" section in your ISC chain page. You should see the EVM chain ID and the JSON-RPC endpoint.'),(0,r.kt)("h2",{id:"2-fund-an-ethereum-account-on-your-iota-smart-contracts-chain"},"2. Fund an Ethereum account on your IOTA Smart Contracts chain"),(0,r.kt)("p",null,"In order to send EVM transactions, you need to have an Ethereum address that owns tokens on the ISC chain (L2). These tokens will be used to cover gas fees."),(0,r.kt)("p",null,"The most intuitive way to do this is by using ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io"},"Metamask"),". In MetaMask,  you can create a wallet (it does not matter what chain it is connected to). Once a wallet is generated, you will see a wallet address under its name. You can copy this to your clipboard. This is the address that will receive the full supply of tokens on that chain."),(0,r.kt)("p",null,"Assuming that you also have an IOTA account with some L1 funds, you can deposit some of those funds into the Ethereum address' L2 account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli chain deposit 0xa1b2c3d4... iota:1000000\n")),(0,r.kt)("h2",{id:"3-connect-to-the-json-rpc-service"},"3. Connect to the JSON-RPC service"),(0,r.kt)("p",null,"You can point any Ethereum tool like MetaMask or Hardhat to the JSON-RPC endpoint that is displayed on the ISC chain dashboard page (Wasp dashboard / Chains / your chain). Once connected, you should be able to use your tool as if it was connected to any other EVM based chain."))}m.isMDXComponent=!0}}]);