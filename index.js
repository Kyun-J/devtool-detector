!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["devtool-detector"]=t():e["devtool-detector"]=t()}(self,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{BrowserDetectorConfig:()=>le,addDetectListener:()=>l,getDetector:()=>se,removeAllDetectListener:()=>r,removeDetectListener:()=>s});const o=[],n=o,l=e=>{o.push(e)},s=e=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)},r=()=>{o.splice(0,o.length)};let c=!1,a=!1,i=!1,u=null,g=null;const f=document.createElement("div");Object.defineProperty(f,"id",{get(){i=!0}});const b={waitConsole:10,nextScopeInterval:100,clearConsole:!0};Object.seal(b);const p=()=>u=setTimeout(d,b.nextScopeInterval),d=()=>{i=!1,console.table?console.table({elem:f}):console.log(f),b.clearConsole&&console.clear(),g=setTimeout((()=>{if(i!==c){c=i;for(const e of n)"function"==typeof e&&e(c)}p()}),b.waitConsole)},m={type:"console-elem",setting:b,get isDevtoolOpen(){return c},get enable(){return a},set enable(e){this.setEnable(e)},setEnable(e){e!==a&&(e?p():(clearTimeout(g),clearTimeout(u),g=null,u=null),a=e)}};Object.freeze(m);const v=m;let y=!1,T=!1,O=!1,h=null,j=null;const S=new Date;S.toString=()=>(O=!0,"");const w={waitConsole:10,nextScopeInterval:100,clearConsole:!0};Object.seal(w);const x=()=>h=setTimeout(C,w.nextScopeInterval),C=()=>{O=!1,console.table?console.table({date:S}):console.log(S),w.clearConsole&&console.clear(),j=setTimeout((()=>{if(O!==y){y=O;for(const e of n)"function"==typeof e&&e(y)}x()}),w.waitConsole)},D={type:"console-date",setting:w,get isDevtoolOpen(){return y},get enable(){return T},set enable(e){this.setEnable(e)},setEnable(e){e!==T&&(e?x():(clearTimeout(j),clearTimeout(h),j=null,h=null),T=e)}};Object.freeze(D);const E=D;let L=!1,I=!1,P=!1,M=null,k=null;const z=/ /;z.toString=()=>(P=!0,"");const R={waitConsole:10,nextScopeInterval:100,clearConsole:!0};Object.seal(R);const A=()=>M=setTimeout(B,R.nextScopeInterval),B=()=>{P=!1,console.table?console.table({reg:z}):console.log(z),R.clearConsole&&console.clear(),k=setTimeout((()=>{if(P!==L){L=P;for(const e of n)"function"==typeof e&&e(L)}A()}),R.waitConsole)},N={type:"console-reg",setting:R,get isDevtoolOpen(){return L},get enable(){return I},set enable(e){this.setEnable(e)},setEnable(e){e!==I&&(e?A():(clearTimeout(k),clearTimeout(M),k=null,M=null),I=e)}};Object.freeze(N);const U=N;let _=!1,W=!1,q=null,F=null;const G=new Worker(URL.createObjectURL(new Blob(["\n        onmessage = (msg) => { \n          postMessage(true);\n          for (let i = 0; i < msg.data; i++) {\n            debugger;\n          }\n          postMessage(false);\n        };\n        "],{type:"text/javascript"}))),H={scopeDebugCount:10,waitScopeTime:100,nextScopeInterval:100};Object.seal(H);const J=()=>G.postMessage(H.scopeDebugCount),K=e=>{e.data?new Promise((e=>{q=e,setTimeout((()=>{q(!0)}),H.waitScopeTime)})).then((e=>{if(e!==_&&"boolean"==typeof e){_=e;for(const t of n)"function"==typeof t&&t(e)}F=setTimeout((()=>{J()}),H.nextScopeInterval)})):"function"==typeof q&&q(!1)};G.addEventListener("message",K);const Q={type:"debugger",setting:H,get isDevtoolOpen(){return _},get enable(){return W},set enable(e){this.setEnable(e)},setEnable(e){e!==W&&(e?(G.addEventListener("message",K),J()):(G.removeEventListener("message",K),clearTimeout(F),F=null,"function"==typeof q&&q(null)),W=e)}};Object.freeze(Q);const V=Q;let X=null;const Y=globalThis.navigator?globalThis.navigator.userAgent:"",Z=void 0!==globalThis.chrome||/chrome/i.test(Y)||/CriOS/i.test(Y),$=/safari/i.test(Y)&&!Z||void 0!==globalThis.safari&&"[object SafariRemoteNotification]"===globalThis.safari.pushNotification.toString(),ee="InstallTrigger"in globalThis||/firefox/i.test(Y),te=/trident/i.test(Y)||/msie/i.test(Y),oe=/edge/i.test(Y),ne=/webkit/i.test(Y)&&!oe,le={chrome:"debugger",edgeLegacy:"console-elem",ie:"console-elem",safari:"console-reg",firefox:"console-reg",webkit:"debugger",default:"debugger"};Object.seal(le);const se=()=>X||(X=(()=>{switch(le[te?"ie":ee?"firefox":oe?"edgeLegacy":$?"safari":Z?"chrome":ne?"webkit":"other"]){case"console-elem":return v;case"console-date":return E;case"console-reg":return U;default:return V}})(),X);return t})()));