"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[37270],{50247:(e,n,t)=>{t.d(n,{ZP:()=>c});var a=t(87462),o=(t(67294),t(3905));const s={toc:[]};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}c.isMDXComponent=!0},55543:(e,n,t)=>{t.d(n,{ZP:()=>c});var a=t(87462),o=(t(67294),t(3905));const s={toc:[]};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Online Faucet",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can request test funds from the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Shimmer Testnet Faucet"),".")))}c.isMDXComponent=!0},56019:(e,n,t)=>{t.d(n,{ZP:()=>c});var a=t(87462),o=(t(67294),t(3905));const s={toc:[]};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}c.isMDXComponent=!0},24105:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>A,contentTitle:()=>T,default:()=>M,frontMatter:()=>_,metadata:()=>C,toc:()=>N});var a=t(87462),o=(t(67294),t(3905)),s=t(34259),c=t(18679),r=t(69319);const i={toc:[]};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example sends IOTA micro transactions to an address.\n */\n\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const manager = await getUnlockedManager();\n        const account = await manager.getAccount('Alice');\n\n        await account.sync();\n\n        //TODO: Replace with the address of your choice!\n        const address =\n            'rms1qrrv7flg6lz5cssvzv2lsdt8c673khad060l4quev6q09tkm9mgtupgf0h0';\n        const amount = '1000';\n\n        const response = await account.sendMicroTransaction([\n            {\n                address,\n                amount,\n            },\n        ]);\n\n        console.log(response);\n\n        console.log(\n            `Check your block on http://localhost:14265/api/core/v2/blocks/${response.blockId}`,\n        );\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 4c-send-micro-transaction.js"))}d.isMDXComponent=!0;const l={toc:[]};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  payload: {\n    type: 6,\n    essence: {\n      type: 1,\n      networkId: '8342982141227064571',\n      inputs: [Array],\n      inputsCommitment: '0xad0e11ab7795212f3ff497e06c22218a18b297280e26e1d6392d217244879348',\n      outputs: [Array]\n    },\n    unlocks: [ [Object] ]\n  },\n  blockId: '0x20cc5acd8af1a9d27b181632ef32818a721622ab0c9d887977b2f1501dd0ae42',\n  inclusionState: 'Pending',\n  timestamp: '1662654628971',\n  transactionId: '0x91a469ff1008ed3dc21d02aa6c20d8c2c048c5f096d7c9af797d3215f824e369',\n  networkId: '8342982141227064571',\n  incoming: false,\n  note: null\n}\nCheck your block on http://localhost:14265/api/core/v2/blocks/0x20cc5acd8af1a9d27b181632ef32818a721622ab0c9d887977b2f1501dd0ae42\n\n")))}u.isMDXComponent=!0;var p=t(50247);const m={toc:[]};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{className:"language-java",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class SendMicroTransaction {\n    public static void main(String[] args) throws WalletException, InterruptedException {\n        // This example assumes that a wallet has already been created using the \xb4CreateWallet.java\xb4 example.\n        // If you have not run the \xb4CreateAccount.java\xb4 example yet, run it first to ensure that the wallet can be loaded correctly.\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes("https://api.testnet.shimmer.network"))\n                .withSecretManager(new StrongholdSecretManager("PASSWORD_FOR_ENCRYPTION", null, "example-wallet"))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias("Alice"));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // Fund the account for this example.\n        ExampleUtils.fundAccount(a);\n\n        // TODO: replace with your own values.\n        String receiverAddress = a.getPublicAddresses()[0].getAddress();\n        String amount = "1";\n\n        // Configure outputs\n        Transaction t = a.sendMicroTransaction(new org.iota.types.account_methods.SendMicroTransaction().withAddressesWithMicroAmount(new AddressWithMicroAmount[]{new AddressWithMicroAmount()\n                .withAddress(receiverAddress)\n                .withAmount(amount)\n        }));\n\n        // Print transaction\n        System.out.println(t);\n    }\n\n}'))}f.isMDXComponent=!0;const h={toc:[]};function b(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload":{\n    "type":6,\n    "essence":{\n      "type":1,\n      "networkId":"8342982141227064571",\n      "inputs":[\n        {\n          "type":0,\n          "transactionId":"0xce5504e02bf0796e48143d5daa1753500e798dbab673e14bb671512750f7d03a",\n          "transactionOutputIndex":0\n        },\n        {\n          "type":0,\n          "transactionId":"0x27df04eac1408b4ec758f6aa222d616b21d9b237789e601d9d0b81aa6466fa97",\n          "transactionOutputIndex":2\n        }\n      ],\n      "inputsCommitment":"0x01a6a0ee6942ce4fd0196c1d54db56eb44cd6b983505bede16b6b5b9d0b4f835",\n      "outputs":[\n        {\n          "type":3,\n          "amount":"50601",\n          "unlockConditions":[\n            {\n              "type":0,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            },\n            {\n              "type":1,\n              "returnAddress":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              },\n              "amount":"50600"\n            },\n            {\n              "type":3,\n              "returnAddress":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              },\n              "unixTime":1664887368\n            }\n          ]\n        },\n        {\n          "type":4,\n          "amount":"50300",\n          "aliasId":"0x429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef",\n          "stateIndex":10,\n          "stateMetadata":"0x",\n          "foundriesCounter":0,\n          "unlockConditions":[\n            {\n              "type":4,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            },\n            {\n              "type":5,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            }\n          ]\n        },\n        {\n          "type":3,\n          "amount":"2096427899",\n          "nativeTokens":[\n            {\n              "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0100000000",\n              "amount":"0x3233"\n            },\n            {\n              "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0200000000",\n              "amount":"0x3233"\n            },\n            {\n              "id":"0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0400000000",\n              "amount":"0x17"\n            }\n          ],\n          "unlockConditions":[\n            {\n              "type":0,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    "unlocks":[\n      {\n        "type":0,\n        "signature":{\n          "type":0,\n          "publicKey":"0xde3152ce9d67415b9c5a042ea01caccc3f73ff1c0c77036874cb8badf9798d56",\n          "signature":"0x114f1c0ad726278b2d5167cb1b112529aa63cc0e3cf01c7936151f968050ff20a3d1385f708c36bd3761c38ddcba8ce735258ab5bd9cc1afa42510ddf6102e03"\n        }\n      },\n      {\n        "type":1,\n        "reference":0\n      }\n    ]\n  },\n  "blockId":"0x8f9f12a968c32cc3d51e978f4de34252bc769ee7188e33a21f9351a7c1f122f3",\n  "inclusionState":"Pending",\n  "timestamp":"1664887369004",\n  "transactionId":"0xaccae1f4e78ee169d0fc1d99843e6cd417290da91aa62c696fa507d21fd245cc",\n  "networkId":"8342982141227064571",\n  "incoming":false\n}\n')))}b.isMDXComponent=!0;var y=t(56019);const g={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function k(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(y.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example send_micro_transaction --release\n// In this example we will send an amount below the minimum storage deposit\n// Rename `.env.example` to `.env` first\n\nuse std::env;\n\nuse dotenv::dotenv;\nuse iota_wallet::{account_manager::AccountManager, AddressWithMicroAmount, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    let outputs = vec![AddressWithMicroAmount {\n        address: "rms1qpszqzadsym6wpppd6z037dvlejmjuke7s24hm95s9fg9vpua7vluaw60xu".to_string(),\n        amount: 1,\n        return_address: None,\n        expiration: None,\n    }];\n\n    let transaction = account.send_micro_transaction(outputs, None).await?;\n\n    println!(\n        "Transaction: {} Block sent: {}/api/core/v2/blocks/{}",\n        transaction.transaction_id,\n        &env::var("NODE_URL").unwrap(),\n        transaction.block_id.expect("no block created yet")\n    );\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example send_micro_transaction --release"))}k.isMDXComponent=!0;const w={toc:[]};function x(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction: 0x78abf6499023396fa9510155237542500015da882e2676bc9e5cd8280e3c15e6\nBlock sent: http://localhost:14265/api/core/v2/blocks/0xe601e25316c17c9aaa19de881aacd55ac270bc99697d34c4a9f4e57edf10cbe2\n")))}x.isMDXComponent=!0;var v=t(55543);const _={title:"Send a Micro Transaction",description:"How to send a microtransaction using wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","micro-transaction","send micro-transaction","microtransaction","send microtransaction","nodejs","python","java","rust"]},T=void 0,C={unversionedId:"how_tos/outputs_and_transactions/send_micro_transaction",id:"how_tos/outputs_and_transactions/send_micro_transaction",title:"Send a Micro Transaction",description:"How to send a microtransaction using wallet.rs",source:"@site/next/external/wallet.rs/documentation/docs/how_tos/outputs_and_transactions/02_send_micro_transaction.mdx",sourceDirName:"how_tos/outputs_and_transactions",slug:"/how_tos/outputs_and_transactions/send_micro_transaction",permalink:"/next/wallet.rs/how_tos/outputs_and_transactions/send_micro_transaction",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/how_tos/outputs_and_transactions/02_send_micro_transaction.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Send a Micro Transaction",description:"How to send a microtransaction using wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","micro-transaction","send micro-transaction","microtransaction","send microtransaction","nodejs","python","java","rust"]},sidebar:"docs",previous:{title:"Send a Transaction",permalink:"/next/wallet.rs/how_tos/outputs_and_transactions/send_transaction"},next:{title:"List Outputs",permalink:"/next/wallet.rs/how_tos/outputs_and_transactions/list_outputs"}},A={},N=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],I={toc:N};function M(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},I,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you need to send an amount below the minimum storage deposit, you should use a microtransaction."),(0,o.kt)(v.ZP,{mdxType:"TipFaucet"}),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/next/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Create the outputs for a microtransaction."),(0,o.kt)("li",{parentName:"ol"},"Send the micro-microtransaction using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Account.send_micro_transaction(addresses_with_micro_amount, options)")," function.")),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(k,{mdxType:"RustCode"})),(0,o.kt)(c.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(d,{mdxType:"NodejsCode"})),(0,o.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"PythonCode"})),(0,o.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(s.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(x,{mdxType:"RustOutput"})),(0,o.kt)(c.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"NodejsOutput"})),(0,o.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"PythonOutput"})),(0,o.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(b,{mdxType:"JavaOutput"}))))}M.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(67294),o=t(86010);const s="tabItem_Ymn6";function c(e){let{children:n,hidden:t,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,c),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),o=t(67294),s=t(86010),c=t(51048),r=t(33609),i=t(1943),d=t(72957);const l="tabList__CuJ",u="tabItem_LNqP";function p(e){var n;const{lazy:t,block:c,defaultValue:p,values:m,groupId:f,className:h}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),g=(0,r.l)(y,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:x}=(0,i.U)(),[v,_]=(0,o.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=f){const e=w[f];null!=e&&e!==v&&y.some((n=>n.value===e))&&_(e)}const A=e=>{const n=e.currentTarget,t=T.indexOf(n),a=y[t].value;a!==v&&(C(n),_(a),null!=f&&x(f,String(a)))},N=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",l)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},h)},y.map((e=>{let{value:n,label:t,attributes:c}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>T.push(e),onKeyDown:N,onFocus:A,onClick:A},c,{className:(0,s.Z)("tabs__item",u,null==c?void 0:c.className,{"tabs__item--active":v===n})}),t??n)}))),t?(0,o.cloneElement)(b.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function m(e){const n=(0,c.Z)();return o.createElement(p,(0,a.Z)({key:String(n)},e))}}}]);