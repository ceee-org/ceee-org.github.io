"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[48808],{363:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=n(69319),s=n(14685),d=["components"],c={title:"How To Generate Addresses"},l=void 0,p={unversionedId:"libraries/python/how_to/generate_addresses",id:"libraries/python/how_to/generate_addresses",title:"How To Generate Addresses",description:"",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/python/how_to/4_generate_addresses.mdx",sourceDirName:"libraries/python/how_to",slug:"/libraries/python/how_to/generate_addresses",permalink:"/iota.rs/develop/libraries/python/how_to/generate_addresses",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/python/how_to/4_generate_addresses.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How To Generate Addresses"},sidebar:"docs",previous:{title:"How To Generate A Mnemonic",permalink:"/iota.rs/develop/libraries/python/how_to/generate_mnemonic"},next:{title:"How To Create A Block",permalink:"/iota.rs/develop/libraries/python/how_to/create_block"}},u={},m=[],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,d);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},'from iota_client import IotaClient, MnemonicSecretManager\n\n# Create an IotaClient instance\nclient = IotaClient({\'nodes\': [\'https://api.testnet.shimmer.network\']})\n\n# In this example we will create addresses from a mnemonic\n\nsecret_manager = MnemonicSecretManager("flame fever pig forward exact dash body idea link scrub tennis minute " +\n    "surge unaware prosper over waste kitten ceiling human knife arch situate civil")\n\n\n# Generate public address with custom account index and range.\naddress = client.generate_addresses(secret_manager, {\n    "account_index": 0,\n    "range": {\n        "start": 0,\n        "end": 1,\n    },\n})\n\nprint(f\'Address: {address[0]}\')\n'),(0,a.kt)(s.ZP,{mdxType:"MoreExamples"}))}f.isMDXComponent=!0},14685:function(e,t,n){n.d(t,{ZP:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={toc:[]};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"More advanced examples can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/python/native/examples"},"examples")," folder."))}d.isMDXComponent=!0}}]);