import{J as Kn,v as Ns,w as Ls,a2 as Jn,s as ut,e as nn,i as ie,r as Ft,d as g,F as Qt,G as Zt,h as I,j as l,W as ne,H as d,C as Tt,f as _,l as L,g as b,m as U,I as rn,Z as Us,a as R,c as P,U as Ie,n as G,a0 as un,_ as Vn,k as yt,T as Hs,V as Vs}from"./scheduler.a4b5f5fa.js";import{a as He,t as $e,S as dt,i as ht,g as Fs,c as Bs,b as Bt,d as zt,m as jt,e as Wt}from"./index.2698e3a4.js";import{l as Si,j as bn,k as wn,D as hn,n as Ai,o as zs,q as js,c as Ws,r as xs,f as Et,m as ki,e as Ri,d as Gs,E as qs}from"./formatDate.b1197e3f.js";import{_ as Lr}from"./preload-helper.a4192956.js";import{w as Xn}from"./index.5ad6dccf.js";function Xe(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Ks(n,e){$e(n,1,1,()=>{e.delete(n.key)})}function ud(n,e){n.f(),Ks(n,e)}function dd(n,e,t,r,i,s,a,o,c,u,h,f){let p=n.length,m=s.length,y=p;const T={};for(;y--;)T[n[y].key]=y;const D=[],N=new Map,V=new Map,F=[];for(y=m;y--;){const M=f(i,s,y),v=t(M);let C=a.get(v);C?r&&F.push(()=>C.p(M,e)):(C=u(v,M),C.c()),N.set(v,D[y]=C),v in T&&V.set(v,Math.abs(y-T[v]))}const q=new Set,x=new Set;function S(M){He(M,1),M.m(o,h),a.set(M.key,M),h=M.first,m--}for(;p&&m;){const M=D[m-1],v=n[p-1],C=M.key,w=v.key;M===v?(h=M.first,p--,m--):N.has(w)?!a.has(C)||q.has(C)?S(M):x.has(w)?p--:V.get(C)>V.get(w)?(x.add(C),S(M)):(q.add(w),p--):(c(v,a),p--)}for(;p--;){const M=n[p];N.has(M.key)||c(M,a)}for(;m;)S(D[m-1]);return Kn(F),D}const Js={message:"Missing Toast Message",autohide:!0,timeout:5e3},Pi="toastStore";function Xs(){const n=Ls(Pi);if(!n)throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return n}function hd(){const n=Qs();return Ns(Pi,n)}function Ys(){const n=Math.random();return Number(n).toString(32)}function Qs(){const{subscribe:n,set:e,update:t}=Xn([]),r=s=>t(a=>{if(a.length>0){const o=a.findIndex(u=>u.id===s),c=a[o];c&&(c.callback&&c.callback({id:s,status:"closed"}),c.timeoutId&&clearTimeout(c.timeoutId),a.splice(o,1))}return a});function i(s){if(s.autohide===!0)return setTimeout(()=>{r(s.id)},s.timeout)}return{subscribe:n,close:r,trigger:s=>{const a=Ys();return t(o=>{s&&s.callback&&s.callback({id:a,status:"queued"}),s.hideDismiss&&(s.autohide=!0);const c={...Js,...s,id:a};return c.timeoutId=i(c),o.push(c),o}),a},freeze:s=>t(a=>(a.length>0&&clearTimeout(a[s].timeoutId),a)),unfreeze:s=>t(a=>(a.length>0&&(a[s].timeoutId=i(a[s])),a)),clear:()=>e([])}}function Zs(n,e){const t=()=>{n.dispatchEvent(new CustomEvent("copyComplete"))},r=()=>{if(typeof e=="object"){if("element"in e){const i=document.querySelector(`[data-clipboard="${e.element}"]`);if(!i)throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${e.element}"]`);er(i.innerHTML,"text/html").then(t);return}if("input"in e){const i=document.querySelector(`[data-clipboard="${e.input}"]`);if(!i)throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${e.input}"]`);er(i.value).then(t);return}}er(e).then(t)};return n.addEventListener("click",r),{update(i){e=i},destroy(){n.removeEventListener("click",r)}}}async function er(n,e="text/plain"){navigator.clipboard.write?await navigator.clipboard.write([new ClipboardItem({[e]:new Blob([n],{type:e}),"text/plain":new Blob([n],{type:"text/plain"})})]):await new Promise(t=>{t(navigator.clipboard.writeText(String(n)))})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},$s=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],o=n[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Oi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,o=a?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,h=s>>2,f=(s&3)<<4|o>>4;let p=(o&15)<<2|u>>6,m=u&63;c||(m=64,a||(p=64)),r.push(t[h],t[f],t[p],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Di(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$s(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],o=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||o==null||u==null||f==null)throw new ea;const p=s<<2|o>>4;if(r.push(p),u!==64){const m=o<<4&240|u>>2;if(r.push(m),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ea extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ta=function(n){const e=Di(n);return Oi.encodeByteArray(e,!0)},Mi=function(n){return ta(n).replace(/\./g,"")},Ni=function(n){try{return Oi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=()=>na().__FIREBASE_DEFAULTS__,ia=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sa=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ni(n[1]);return e&&JSON.parse(e)},vr=()=>{try{return ra()||ia()||sa()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},aa=n=>{var e,t;return(t=(e=vr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Li=()=>{var n;return(n=vr())===null||n===void 0?void 0:n.config},Ui=n=>{var e;return(e=vr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ca(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function la(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ua(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function da(){const n=he();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ha(){try{return typeof indexedDB=="object"}catch{return!1}}function fa(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="FirebaseError";class At extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=pa,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,In.prototype.create)}}class In{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?ma(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new At(i,o,r)}}function ma(n,e){return n.replace(ga,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ga=/\{\$([^}]+)}/g;function va(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Fn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Ur(s)&&Ur(a)){if(!Fn(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ur(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _a(n,e){const t=new ba(n,e);return t.subscribe.bind(t)}class ba{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");wa(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=tr),i.error===void 0&&(i.error=tr),i.complete===void 0&&(i.complete=tr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wa(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function tr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n){return n&&n._delegate?n._delegate:n}class sn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new oa;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ea(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ya(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ya(n){return n===Ut?void 0:n}function Ea(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ia(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const Ca={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Sa=X.INFO,Aa={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},ka=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Aa[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hi{constructor(e){this.name=e,this._logLevel=Sa,this._logHandler=ka,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ca[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Ra=(n,e)=>e.some(t=>n instanceof t);let Hr,Vr;function Pa(){return Hr||(Hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Da(){return Vr||(Vr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vi=new WeakMap,cr=new WeakMap,Fi=new WeakMap,nr=new WeakMap,_r=new WeakMap;function Oa(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Ct(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Vi.set(t,n)}).catch(()=>{}),_r.set(e,n),e}function Ma(n){if(cr.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});cr.set(n,e)}let lr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return cr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fi.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ct(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Na(n){lr=n(lr)}function La(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(rr(this),e,...t);return Fi.set(r,e.sort?e.sort():[e]),Ct(r)}:Da().includes(n)?function(...e){return n.apply(rr(this),e),Ct(Vi.get(this))}:function(...e){return Ct(n.apply(rr(this),e))}}function Ua(n){return typeof n=="function"?La(n):(n instanceof IDBTransaction&&Ma(n),Ra(n,Pa())?new Proxy(n,lr):n)}function Ct(n){if(n instanceof IDBRequest)return Oa(n);if(nr.has(n))return nr.get(n);const e=Ua(n);return e!==n&&(nr.set(n,e),_r.set(e,n)),e}const rr=n=>_r.get(n);function Ha(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),o=Ct(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Ct(a.result),c.oldVersion,c.newVersion,Ct(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const Va=["get","getKey","getAll","getAllKeys","count"],Fa=["put","add","delete","clear"],ir=new Map;function Fr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ir.get(e))return ir.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Fa.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Va.includes(t)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[t](...o),i&&c.done]))[0]};return ir.set(e,s),s}Na(n=>({...n,get:(e,t,r)=>Fr(e,t)||n.get(e,t,r),has:(e,t)=>!!Fr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(za(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function za(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ur="@firebase/app",Br="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new Hi("@firebase/app"),ja="@firebase/app-compat",Wa="@firebase/analytics-compat",xa="@firebase/analytics",Ga="@firebase/app-check-compat",qa="@firebase/app-check",Ka="@firebase/auth",Ja="@firebase/auth-compat",Xa="@firebase/database",Ya="@firebase/database-compat",Qa="@firebase/functions",Za="@firebase/functions-compat",$a="@firebase/installations",eo="@firebase/installations-compat",to="@firebase/messaging",no="@firebase/messaging-compat",ro="@firebase/performance",io="@firebase/performance-compat",so="@firebase/remote-config",ao="@firebase/remote-config-compat",oo="@firebase/storage",co="@firebase/storage-compat",lo="@firebase/firestore",uo="@firebase/firestore-compat",ho="firebase",fo="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]",po={[ur]:"fire-core",[ja]:"fire-core-compat",[xa]:"fire-analytics",[Wa]:"fire-analytics-compat",[qa]:"fire-app-check",[Ga]:"fire-app-check-compat",[Ka]:"fire-auth",[Ja]:"fire-auth-compat",[Xa]:"fire-rtdb",[Ya]:"fire-rtdb-compat",[Qa]:"fire-fn",[Za]:"fire-fn-compat",[$a]:"fire-iid",[eo]:"fire-iid-compat",[to]:"fire-fcm",[no]:"fire-fcm-compat",[ro]:"fire-perf",[io]:"fire-perf-compat",[so]:"fire-rc",[ao]:"fire-rc-compat",[oo]:"fire-gcs",[co]:"fire-gcs-compat",[lo]:"fire-fst",[uo]:"fire-fst-compat","fire-js":"fire-js",[ho]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Map,hr=new Map;function mo(n,e){try{n.container.addComponent(e)}catch(t){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function fn(n){const e=n.name;if(hr.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;hr.set(e,n);for(const t of Bn.values())mo(t,n);return!0}function Bi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new In("app","Firebase",go);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=fo;function zi(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw St.create("bad-app-name",{appName:String(i)});if(t||(t=Li()),!t)throw St.create("no-options");const s=Bn.get(i);if(s){if(Fn(t,s.options)&&Fn(r,s.config))return s;throw St.create("duplicate-app",{appName:i})}const a=new Ta(i);for(const c of hr.values())a.addComponent(c);const o=new vo(t,r,a);return Bn.set(i,o),o}function _o(n=dr){const e=Bn.get(n);if(!e&&n===dr&&Li())return zi();if(!e)throw St.create("no-app",{appName:n});return e}function $t(n,e,t){var r;let i=(r=po[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(o.join(" "));return}fn(new sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="firebase-heartbeat-database",wo=1,pn="firebase-heartbeat-store";let sr=null;function ji(){return sr||(sr=Ha(bo,wo,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(pn)}}}).catch(n=>{throw St.create("idb-open",{originalErrorMessage:n.message})})),sr}async function Io(n){try{return await(await ji()).transaction(pn).objectStore(pn).get(Wi(n))}catch(e){if(e instanceof At)xt.warn(e.message);else{const t=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(t.message)}}}async function zr(n,e){try{const r=(await ji()).transaction(pn,"readwrite");await r.objectStore(pn).put(e,Wi(n)),await r.done}catch(t){if(t instanceof At)xt.warn(t.message);else{const r=St.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xt.warn(r.message)}}}function Wi(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=1024,Eo=30*24*60*60*1e3;class To{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new So(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Eo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jr(),{heartbeatsToSend:t,unsentEntries:r}=Co(this._heartbeatsCache.heartbeats),i=Mi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function jr(){return new Date().toISOString().substring(0,10)}function Co(n,e=yo){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Wr(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Wr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class So{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ha()?fa().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Io(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return zr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return zr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wr(n){return Mi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(n){fn(new sn("platform-logger",e=>new Ba(e),"PRIVATE")),fn(new sn("heartbeat",e=>new To(e),"PRIVATE")),$t(ur,Br,n),$t(ur,Br,"esm2017"),$t("fire-js","")}Ao("");var ko="firebase",Ro="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(ko,Ro,"app");function br(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function xi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Po=xi,Gi=new In("auth","Firebase",xi());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new Hi("@firebase/auth");function Do(n,...e){zn.logLevel<=X.WARN&&zn.warn(`Auth (${En}): ${n}`,...e)}function Nn(n,...e){zn.logLevel<=X.ERROR&&zn.error(`Auth (${En}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n,...e){throw wr(n,...e)}function Qe(n,...e){return wr(n,...e)}function qi(n,e,t){const r=Object.assign(Object.assign({},Po()),{[e]:t});return new In("auth","Firebase",r).create(e,{appName:n.name})}function Oo(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&et(n,"argument-error"),qi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wr(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Gi.create(n,...e)}function H(n,e,...t){if(!n)throw wr(e,...t)}function ot(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Nn(e),new Error(e)}function lt(n,e){n||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Mo(){return xr()==="http:"||xr()==="https:"}function xr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mo()||la()||"connection"in navigator)?navigator.onLine:!0}function Lo(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t){this.shortDelay=e,this.longDelay=t,lt(t>e,"Short delay should be less than long delay!"),this.isMobile=ca()||ua()}get(){return No()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(n,e){lt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new Tn(3e4,6e4);function Ji(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Cn(n,e,t,r,i={}){return Xi(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=yn(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Ki.fetch()(Yi(n,n.config.apiHost,t,o),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Xi(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Uo),e);try{const i=new Fo(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Pn(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,u]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pn(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Pn(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Pn(n,"user-disabled",a);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qi(n,h,u);et(n,h)}}catch(i){if(i instanceof At)throw i;et(n,"network-request-failed",{message:String(i)})}}async function Vo(n,e,t,r,i={}){const s=await Cn(n,e,t,r,i);return"mfaPendingCredential"in s&&et(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Yi(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ir(n.config,i):`${n.config.apiScheme}://${i}`}class Fo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),Ho.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pn(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Qe(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(n,e){return Cn(n,"POST","/v1/accounts:delete",e)}async function zo(n,e){return Cn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jo(n,e=!1){const t=qt(n),r=await t.getIdToken(e),i=yr(r);H(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:dn(ar(i.auth_time)),issuedAtTime:dn(ar(i.iat)),expirationTime:dn(ar(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ar(n){return Number(n)*1e3}function yr(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Nn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ni(t);return i?JSON.parse(i):(Nn("Failed to decode base64 JWT payload"),null)}catch(i){return Nn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wo(n){const e=yr(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof At&&xo(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xo({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=dn(this.lastLoginAt),this.creationTime=dn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(n){var e;const t=n.auth,r=await n.getIdToken(),i=await mn(n,zo(t,{idToken:r}));H(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Jo(s.providerUserInfo):[],o=Ko(n.providerData,a),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Qi(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function qo(n){const e=qt(n);await jn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ko(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Jo(n){return n.map(e=>{var{providerId:t}=e,r=br(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(n,e){const t=await Xi(n,{},async()=>{const r=yn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Yi(n,i,"/v1/token",`key=${s}`),o=await n._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ki.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Xo(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new gn;return r&&(H(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=br(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Go(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await mn(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jo(this,e)}reload(){return qo(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await jn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mn(this,Bo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,o,c,u,h;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,p=(i=t.email)!==null&&i!==void 0?i:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,y=(a=t.photoURL)!==null&&a!==void 0?a:void 0,T=(o=t.tenantId)!==null&&o!==void 0?o:void 0,D=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,N=(u=t.createdAt)!==null&&u!==void 0?u:void 0,V=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:F,emailVerified:q,isAnonymous:x,providerData:S,stsTokenManager:M}=t;H(F&&M,e,"internal-error");const v=gn.fromJSON(this.name,M);H(typeof F=="string",e,"internal-error"),_t(f,e.name),_t(p,e.name),H(typeof q=="boolean",e,"internal-error"),H(typeof x=="boolean",e,"internal-error"),_t(m,e.name),_t(y,e.name),_t(T,e.name),_t(D,e.name),_t(N,e.name),_t(V,e.name);const C=new Vt({uid:F,auth:e,email:p,emailVerified:q,displayName:f,isAnonymous:x,photoURL:y,phoneNumber:m,tenantId:T,stsTokenManager:v,createdAt:N,lastLoginAt:V});return S&&Array.isArray(S)&&(C.providerData=S.map(w=>Object.assign({},w))),D&&(C._redirectEventId=D),C}static async _fromIdTokenResponse(e,t,r=!1){const i=new gn;i.updateFromServerResponse(t);const s=new Vt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jn(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new Map;function ct(n){lt(n instanceof Function,"Expected a class definition");let e=Gr.get(n);return e?(lt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Gr.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zi.type="NONE";const qr=Zi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n,e,t){return`firebase:${n}:${e}:${t}`}class en{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ln(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ln("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new en(ct(qr),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ct(qr);const a=Ln(r,e.config.apiKey,e.name);let o=null;for(const u of t)try{const h=await u._get(a);if(h){const f=Vt._fromJSON(e,h);u!==s&&(o=f),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new en(s,e,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new en(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ts(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($i(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rs(e))return"Blackberry";if(is(e))return"Webos";if(Er(e))return"Safari";if((e.includes("chrome/")||es(e))&&!e.includes("edge/"))return"Chrome";if(ns(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $i(n=he()){return/firefox\//i.test(n)}function Er(n=he()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function es(n=he()){return/crios\//i.test(n)}function ts(n=he()){return/iemobile/i.test(n)}function ns(n=he()){return/android/i.test(n)}function rs(n=he()){return/blackberry/i.test(n)}function is(n=he()){return/webos/i.test(n)}function Yn(n=he()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Yo(n=he()){var e;return Yn(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qo(){return da()&&document.documentMode===10}function ss(n=he()){return Yn(n)||ns(n)||is(n)||rs(n)||/windows phone/i.test(n)||ts(n)}function Zo(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n,e=[]){let t;switch(n){case"Browser":t=Kr(he());break;case"Worker":t=`${Kr(he())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${En}/${r}`}async function os(n,e){return Cn(n,"GET","/v2/recaptchaConfig",Ji(n,e))}function Jr(n){return n!==void 0&&n.enterprise!==void 0}class cs{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ls(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Qe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",$o().appendChild(r)})}function ec(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const tc="https://www.google.com/recaptcha/enterprise.js?render=",nc="recaptcha-enterprise",rc="NO_RECAPTCHA";class ic{constructor(e){this.type=nc,this.auth=Sn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{os(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new cs(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,a(u.siteKey)}}).catch(c=>{o(c)})})}function i(s,a,o){const c=window.grecaptcha;Jr(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{a(u)}).catch(()=>{a(rc)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!t&&Jr(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}ls(tc+o).then(()=>{i(o,s,a)}).catch(c=>{a(c)})}}).catch(o=>{a(o)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,o)=>{try{const c=e(s);a(c)}catch(c){o(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xr(this),this.idTokenSubscription=new Xr(this),this.beforeStateQueue=new sc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ct(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await en.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await jn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?qt(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ct(e))})}async initializeRecaptchaConfig(){const e=await os(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new cs(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new ic(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new In("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ct(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await en.create(this,[ct(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return H(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=as(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Do(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Sn(n){return qt(n)}class Xr{constructor(e){this.auth=e,this.observer=null,this.addObserver=_a(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n,e){const t=Bi(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Fn(s,e??{}))return i;et(i,"already-initialized")}return t.initialize({options:e})}function cc(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ct);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lc(n,e,t){const r=Sn(n);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=us(e),{host:a,port:o}=uc(e),c=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||dc()}function us(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function uc(n){const e=us(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yr(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Yr(a)}}}function Yr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function dc(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,t){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(n,e){return Vo(n,"POST","/v1/accounts:signInWithIdp",Ji(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="http://localhost";class Gt extends ds{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=br(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Gt(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return tn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,tn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tn(e,t)}buildRequest(){const e={requestUri:hc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Tr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends An{constructor(){super("facebook.com")}static credential(e){return Gt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends An{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return wt.credential(t,r)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends An{constructor(){super("github.com")}static credential(e){return Gt._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch{return null}}}Ye.GITHUB_SIGN_IN_METHOD="github.com";Ye.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends An{constructor(){super("twitter.com")}static credential(e,t){return Gt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return It.credential(t,r)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Vt._fromIdTokenResponse(e,r,i),a=Qr(r);return new an({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Qr(r);return new an({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Qr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends At{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Wn(e,t,r,i)}}function hs(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wn._fromErrorAndOperation(n,s,e,r):s})}async function fc(n,e,t=!1){const r=await mn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return an._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await mn(n,hs(r,i,e,n),t);H(s.idToken,r,"internal-error");const a=yr(s.idToken);H(a,r,"internal-error");const{sub:o}=a;return H(n.uid===o,r,"user-mismatch"),an._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&et(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mc(n,e,t=!1){const r="signIn",i=await hs(n,r,e),s=await an._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function gc(n,e,t,r){return qt(n).onIdTokenChanged(e,t,r)}function vc(n,e,t){return qt(n).beforeAuthStateChanged(e,t)}function _c(n){return qt(n).signOut()}const xn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xn,"1"),this.storage.removeItem(xn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(){const n=he();return Er(n)||Yn(n)}const wc=1e3,Ic=10;class ps extends fs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bc()&&Zo(),this.fallbackToPolling=ss(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Qo()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ic):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},wc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ps.type="LOCAL";const yc=ps;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends fs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ms.type="SESSION";const gs=ms;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Qn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async u=>u(t.origin,s)),c=await Ec(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const u=Cr("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(p.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function Cc(n){Ze().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function Sc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ac(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function kc(){return vs()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="firebaseLocalStorageDb",Rc=1,Gn="firebaseLocalStorage",bs="fbase_key";class kn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zn(n,e){return n.transaction([Gn],e?"readwrite":"readonly").objectStore(Gn)}function Pc(){const n=indexedDB.deleteDatabase(_s);return new kn(n).toPromise()}function pr(){const n=indexedDB.open(_s,Rc);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Gn,{keyPath:bs})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Gn)?e(r):(r.close(),await Pc(),e(await pr()))})})}async function Zr(n,e,t){const r=Zn(n,!0).put({[bs]:e,value:t});return new kn(r).toPromise()}async function Dc(n,e){const t=Zn(n,!1).get(e),r=await new kn(t).toPromise();return r===void 0?null:r.value}function $r(n,e){const t=Zn(n,!0).delete(e);return new kn(t).toPromise()}const Oc=800,Mc=3;class ws{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Mc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qn._getInstance(kc()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Sc(),!this.activeServiceWorker)return;this.sender=new Tc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ac()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pr();return await Zr(e,xn,"1"),await $r(e,xn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zr(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Dc(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$r(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zn(i,!1).getAll();return new kn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Oc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ws.type="LOCAL";const Nc=ws;new Tn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n,e){return e?ct(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends ds{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lc(n){return mc(n.auth,new Sr(n),n.bypassAuthState)}function Uc(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),pc(t,new Sr(n),n.bypassAuthState)}async function Hc(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),fc(t,new Sr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lc;case"linkViaPopup":case"linkViaRedirect":return Hc;case"reauthViaPopup":case"reauthViaRedirect":return Uc;default:et(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=new Tn(2e3,1e4);async function Fc(n,e,t){const r=Sn(n);Oo(n,e,Tr);const i=Is(r,t);return new Ht(r,"signInViaPopup",e,i).executeNotNull()}class Ht extends ys{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ht.currentPopupAction&&Ht.currentPopupAction.cancel(),Ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=Cr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Vc.get())};e()}}Ht.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="pendingRedirect",Un=new Map;class zc extends ys{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Un.get(this.auth._key());if(!e){try{const r=await jc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Un.set(this.auth._key(),e)}return this.bypassAuthState||Un.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jc(n,e){const t=Gc(e),r=xc(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Wc(n,e){Un.set(n._key(),e)}function xc(n){return ct(n._redirectPersistence)}function Gc(n){return Ln(Bc,n.config.apiKey,n.name)}async function qc(n,e,t=!1){const r=Sn(n),i=Is(r,e),a=await new zc(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=10*60*1e3;class Jc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Es(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kc&&this.cachedEventUids.clear(),this.cachedEventUids.has(ei(e))}saveEventToCache(e){this.cachedEventUids.add(ei(e)),this.lastProcessedEventTime=Date.now()}}function ei(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Es({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xc(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Es(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yc(n,e={}){return Cn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zc=/^https?/;async function $c(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Yc(n);for(const t of e)try{if(el(t))return}catch{}et(n,"unauthorized-domain")}function el(n){const e=fr(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Zc.test(t))return!1;if(Qc.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=new Tn(3e4,6e4);function ti(){const n=Ze().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function nl(n){return new Promise((e,t)=>{var r,i,s;function a(){ti(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ti(),t(Qe(n,"network-request-failed"))},timeout:tl.get()})}if(!((i=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ze().gapi)===null||s===void 0)&&s.load)a();else{const o=ec("iframefcb");return Ze()[o]=()=>{gapi.load?a():t(Qe(n,"network-request-failed"))},ls(`https://apis.google.com/js/api.js?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw Hn=null,e})}let Hn=null;function rl(n){return Hn=Hn||nl(n),Hn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new Tn(5e3,15e3),sl="__/auth/iframe",al="emulator/auth/iframe",ol={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ll(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ir(e,al):`https://${n.config.authDomain}/${sl}`,r={apiKey:e.apiKey,appName:n.name,v:En},i=cl.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${yn(r).slice(1)}`}async function ul(n){const e=await rl(n),t=Ze().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:ll(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ol,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Qe(n,"network-request-failed"),o=Ze().setTimeout(()=>{s(a)},il.get());function c(){Ze().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hl=500,fl=600,pl="_blank",ml="http://localhost";class ni{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gl(n,e,t,r=hl,i=fl){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},dl),{width:r.toString(),height:i.toString(),top:s,left:a}),u=he().toLowerCase();t&&(o=es(u)?pl:t),$i(u)&&(e=e||ml,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[m,y])=>`${p}${m}=${y},`,"");if(Yo(u)&&o!=="_self")return vl(e||"",o),new ni(null);const f=window.open(e||"",o,h);H(f,n,"popup-blocked");try{f.focus()}catch{}return new ni(f)}function vl(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="__/auth/handler",bl="emulator/auth/handler",wl=encodeURIComponent("fac");async function ri(n,e,t,r,i,s){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:En,eventId:i};if(e instanceof Tr){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",va(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))a[h]=f}if(e instanceof An){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(a.scopes=h.join(","))}n.tenantId&&(a.tid=n.tenantId);const o=a;for(const h of Object.keys(o))o[h]===void 0&&delete o[h];const c=await n._getAppCheckToken(),u=c?`#${wl}=${encodeURIComponent(c)}`:"";return`${Il(n)}?${yn(o).slice(1)}${u}`}function Il({config:n}){return n.emulator?Ir(n,bl):`https://${n.authDomain}/${_l}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="webStorageSupport";class yl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gs,this._completeRedirectFn=qc,this._overrideRedirectResult=Wc}async _openPopup(e,t,r,i){var s;lt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await ri(e,t,r,fr(),i);return gl(e,a,Cr())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await ri(e,t,r,fr(),i);return Cc(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(lt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ul(e),r=new Jc(e);return t.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(or,{type:or},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[or];a!==void 0&&t(!!a),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$c(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ss()||Er()||Yn()}}const El=yl;var ii="@firebase/auth",si="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Sl(n){fn(new sn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:as(n)},u=new ac(r,i,s,c);return cc(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),fn(new sn("auth-internal",e=>{const t=Sn(e.getProvider("auth").getImmediate());return(r=>new Tl(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(ii,si,Cl(n)),$t(ii,si,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=5*60,kl=Ui("authIdTokenMaxAge")||Al;let ai=null;const Rl=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>kl)return;const i=t==null?void 0:t.token;ai!==i&&(ai=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Pl(n=_o()){const e=Bi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=oc(n,{popupRedirectResolver:El,persistence:[Nc,yc,gs]}),r=Ui("authTokenSyncURL");if(r){const s=Rl(r);vc(t,s,()=>s(t.currentUser)),gc(t,a=>s(a))}const i=aa("auth");return i&&lc(t,`http://${i}`),t}Sl("Browser");const Dl={apiKey:"AIzaSyAjCRLDHuTkfnKU5TTV6ZZasUXecSvlQOE",authDomain:"virtual-pinball-spreadsh-71a64.firebaseapp.com",projectId:"virtual-pinball-spreadsh-71a64",appId:"1:497322440319:web:8a7f7a2997664a9af7f14a",measurementId:"G-DB48L7QGX0"},Ol=zi(Dl),Ts=Pl(Ol),$n=Si("user",{}),Ar=Xn([]),Cs=Xn(!1);let vn;const Ml=()=>{const n=new Ye;return n.addScope("public_repo"),n.setCustomParameters({allow_signup:"false"}),new Promise(e=>{Fc(Ts,n).then(async t=>{const r=Ye.credentialFromResult(t),i=t.user;if(i.displayName=t._tokenResponse.screenName,!(r!=null&&r.accessToken))throw new Error;e(kr(r.accessToken,i))}).catch(t=>{console.error(t),e(!1)})})},kr=async(n,e)=>{try{const{Octokit:t}=await Lr(()=>import("https://esm.sh/octokit"),[],import.meta.url),{createOrUpdateTextFile:r}=await Lr(()=>import("https://esm.sh/@octokit/plugin-create-or-update-text-file"),[],import.meta.url),i=t.plugin(r),s=new i({auth:n}),o=(await s.request("GET /repos/{owner}/{repo}/collaborators/{username}/permission",{owner:bn,username:e.displayName,repo:wn})).data.permission,c=o==="admin"||o==="write"||location.hostname==="localhost"||location.hostname==="127.0.0.1";return $n.set({user:e,permission:o,token:n,admin:c}),vn=s,(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.octokit=s),c&&await As(),!0}catch(t){return console.error(t),await Ss(),!1}},Ss=()=>new Promise(n=>{_c(Ts).then(()=>{$n.set({}),n()})}),Nl=async(n,e)=>{const t=`${zs}${e}_${new Date().getTime()}.webp`,r=await Hl(n);let i;try{i=(await vn.request(`GET /repos/{owner}/{repo}/contents/${t}`,{owner:bn,repo:wn})).data.sha}catch{}try{const s=await vn.rest.repos.createOrUpdateFileContents({owner:"VirtualPinballSpreadsheet",repo:"vps-db",path:t,sha:i,content:r,message:`IMAGE:${e} - updated image`});return`https://virtualpinballspreadsheet.github.io/vps-db/${t}`}catch(s){console.error(s);return}},Ll=async n=>{try{const e=await vn.createOrUpdateTextFile({owner:bn,repo:wn,branch:Ai,path:`${js}${n.id}.json`,content:JSON.stringify(n),message:`GAME:${n.id} - Updated ${n.name}`});return Ar.update(t=>{var r;return[...t,{author:((r=Jn(Rr.userStore).user)==null?void 0:r.displayName)||"???",id:n.id,updatedAt:new Date().toISOString()}]}),!0}catch(e){return console.error(e),!1}},Ul=async()=>{try{const n=await vn.createOrUpdateTextFile({owner:bn,repo:wn,path:"lastUpdated.json",content:JSON.stringify(new Date().getTime()),message:"UPDATE DB"});return await ks(),!0}catch(n){return console.error(n),!1}},As=async()=>{try{await hn.fetchDb();const n=Jn(hn.lastUpdated),e=new Date(n+1e3).toISOString();let r=await(await fetch(`https://api.github.com/repos/${bn}/${wn}/commits?sha=${Ai}&since=${e}`)).json();r=r.filter(i=>{var s,a;return(a=(s=i==null?void 0:i.commit)==null?void 0:s.message)==null?void 0:a.includes("GAME:")}).map(i=>{var s,a,o,c,u,h,f,p,m;return{author:(a=(s=i==null?void 0:i.commit)==null?void 0:s.author)==null?void 0:a.name,id:(f=(h=(u=(c=(o=i==null?void 0:i.commit)==null?void 0:o.message)==null?void 0:c.split(" - "))==null?void 0:u[0])==null?void 0:h.split(":"))==null?void 0:f[1],updatedAt:(m=(p=i==null?void 0:i.commit)==null?void 0:p.author)==null?void 0:m.date}}),Ar.set(r)}catch{}},ks=async()=>{try{const e=await(await fetch("https://api.github.com/repos/VirtualPinballSpreadsheet/vps-db/actions/runs?status=in_progress")).json(),r=await(await fetch("https://api.github.com/repos/VirtualPinballSpreadsheet/vps-db/actions/runs?status=queued")).json();debugger;Cs.set(e.total_count>0||r.total_count>0)}catch{}};(async()=>{const n=Jn($n),{user:e,token:t}=n;t&&e&&kr(t,e)})();const Rr={login:kr,logout:Ss,triggerLoginPopup:Ml,uploadImage:Nl,uploadGameFile:Ll,updateDb:Ul,getUnpublishedChanges:As,getPipelineState:ks,userStore:$n,unpublishedChanges:Ar,pipelineState:Cs},Hl=n=>new Promise((e,t)=>{const r=new FileReader;r.onload=function(){const s=r.result.split(",")[1];e(s)},r.readAsDataURL(n)}),Dn=parseFloat;function mr(n,e=";"){let t;if(Array.isArray(n))t=n.filter(r=>r);else{t=[];for(const r in n)n[r]&&t.push(`${r}:${n[r]}`)}return t.join(e)}function Vl(n,e,t,r){let i,s;const a="1em";let o,c,u,h="-.125em";const f="visible";return r&&(u="center",s="1.25em"),t&&(i=t),e&&(e=="lg"?(c="1.33333em",o=".75em",h="-.225em"):e=="xs"?c=".75em":e=="sm"?c=".875em":c=e.replace("x","em")),mr([mr({float:i,width:s,height:a,"line-height":o,"font-size":c,"text-align":u,"vertical-align":h,"transform-origin":"center",overflow:f}),n])}function Fl(n,e,t,r,i,s=1,a="",o=""){let c=1,u=1;return i&&(i=="horizontal"?c=-1:i=="vertical"?u=-1:c=u=-1),mr([`translate(${Dn(e)*s}${a},${Dn(t)*s}${a})`,`scale(${c*Dn(n)},${u*Dn(n)})`,r&&`rotate(${r}${o})`]," ")}function oi(n){let e,t,r,i,s,a,o,c;function u(p,m){return typeof p[10][4]=="string"?zl:Bl}let h=u(n),f=h(n);return{c(){e=Qt("svg"),t=Qt("g"),r=Qt("g"),f.c(),this.h()},l(p){e=Zt(p,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var m=I(e);t=Zt(m,"g",{transform:!0,"transform-origin":!0});var y=I(t);r=Zt(y,"g",{transform:!0});var T=I(r);f.l(T),T.forEach(g),y.forEach(g),m.forEach(g),this.h()},h(){l(r,"transform",n[12]),l(t,"transform",i="translate("+n[10][0]/2+" "+n[10][1]/2+")"),l(t,"transform-origin",s=n[10][0]/4+" 0"),l(e,"id",a=n[1]||void 0),l(e,"class",o="svelte-fa "+n[0]+" svelte-1cj2gr0"),l(e,"style",n[11]),l(e,"viewBox",c="0 0 "+n[10][0]+" "+n[10][1]),l(e,"aria-hidden","true"),l(e,"role","img"),l(e,"xmlns","http://www.w3.org/2000/svg"),ne(e,"pulse",n[4]),ne(e,"spin",n[3])},m(p,m){ie(p,e,m),d(e,t),d(t,r),f.m(r,null)},p(p,m){h===(h=u(p))&&f?f.p(p,m):(f.d(1),f=h(p),f&&(f.c(),f.m(r,null))),m&4096&&l(r,"transform",p[12]),m&1024&&i!==(i="translate("+p[10][0]/2+" "+p[10][1]/2+")")&&l(t,"transform",i),m&1024&&s!==(s=p[10][0]/4+" 0")&&l(t,"transform-origin",s),m&2&&a!==(a=p[1]||void 0)&&l(e,"id",a),m&1&&o!==(o="svelte-fa "+p[0]+" svelte-1cj2gr0")&&l(e,"class",o),m&2048&&l(e,"style",p[11]),m&1024&&c!==(c="0 0 "+p[10][0]+" "+p[10][1])&&l(e,"viewBox",c),m&17&&ne(e,"pulse",p[4]),m&9&&ne(e,"spin",p[3])},d(p){p&&g(e),f.d()}}}function Bl(n){let e,t,r,i,s,a,o,c,u,h;return{c(){e=Qt("path"),a=Qt("path"),this.h()},l(f){e=Zt(f,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),I(e).forEach(g),a=Zt(f,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),I(a).forEach(g),this.h()},h(){l(e,"d",t=n[10][4][0]),l(e,"fill",r=n[6]||n[2]||"currentColor"),l(e,"fill-opacity",i=n[9]!=!1?n[7]:n[8]),l(e,"transform",s="translate("+n[10][0]/-2+" "+n[10][1]/-2+")"),l(a,"d",o=n[10][4][1]),l(a,"fill",c=n[5]||n[2]||"currentColor"),l(a,"fill-opacity",u=n[9]!=!1?n[8]:n[7]),l(a,"transform",h="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")},m(f,p){ie(f,e,p),ie(f,a,p)},p(f,p){p&1024&&t!==(t=f[10][4][0])&&l(e,"d",t),p&68&&r!==(r=f[6]||f[2]||"currentColor")&&l(e,"fill",r),p&896&&i!==(i=f[9]!=!1?f[7]:f[8])&&l(e,"fill-opacity",i),p&1024&&s!==(s="translate("+f[10][0]/-2+" "+f[10][1]/-2+")")&&l(e,"transform",s),p&1024&&o!==(o=f[10][4][1])&&l(a,"d",o),p&36&&c!==(c=f[5]||f[2]||"currentColor")&&l(a,"fill",c),p&896&&u!==(u=f[9]!=!1?f[8]:f[7])&&l(a,"fill-opacity",u),p&1024&&h!==(h="translate("+f[10][0]/-2+" "+f[10][1]/-2+")")&&l(a,"transform",h)},d(f){f&&(g(e),g(a))}}}function zl(n){let e,t,r,i;return{c(){e=Qt("path"),this.h()},l(s){e=Zt(s,"path",{d:!0,fill:!0,transform:!0}),I(e).forEach(g),this.h()},h(){l(e,"d",t=n[10][4]),l(e,"fill",r=n[2]||n[5]||"currentColor"),l(e,"transform",i="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")},m(s,a){ie(s,e,a)},p(s,a){a&1024&&t!==(t=s[10][4])&&l(e,"d",t),a&36&&r!==(r=s[2]||s[5]||"currentColor")&&l(e,"fill",r),a&1024&&i!==(i="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")&&l(e,"transform",i)},d(s){s&&g(e)}}}function jl(n){let e,t=n[10][4]&&oi(n);return{c(){t&&t.c(),e=nn()},l(r){t&&t.l(r),e=nn()},m(r,i){t&&t.m(r,i),ie(r,e,i)},p(r,[i]){r[10][4]?t?t.p(r,i):(t=oi(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Ft,o:Ft,d(r){r&&g(e),t&&t.d(r)}}}function Wl(n,e,t){let{class:r=""}=e,{id:i=""}=e,{style:s=""}=e,{icon:a}=e,{size:o=""}=e,{color:c=""}=e,{fw:u=!1}=e,{pull:h=""}=e,{scale:f=1}=e,{translateX:p=0}=e,{translateY:m=0}=e,{rotate:y=""}=e,{flip:T=!1}=e,{spin:D=!1}=e,{pulse:N=!1}=e,{primaryColor:V=""}=e,{secondaryColor:F=""}=e,{primaryOpacity:q=1}=e,{secondaryOpacity:x=.4}=e,{swapOpacity:S=!1}=e,M,v,C;return n.$$set=w=>{"class"in w&&t(0,r=w.class),"id"in w&&t(1,i=w.id),"style"in w&&t(13,s=w.style),"icon"in w&&t(14,a=w.icon),"size"in w&&t(15,o=w.size),"color"in w&&t(2,c=w.color),"fw"in w&&t(16,u=w.fw),"pull"in w&&t(17,h=w.pull),"scale"in w&&t(18,f=w.scale),"translateX"in w&&t(19,p=w.translateX),"translateY"in w&&t(20,m=w.translateY),"rotate"in w&&t(21,y=w.rotate),"flip"in w&&t(22,T=w.flip),"spin"in w&&t(3,D=w.spin),"pulse"in w&&t(4,N=w.pulse),"primaryColor"in w&&t(5,V=w.primaryColor),"secondaryColor"in w&&t(6,F=w.secondaryColor),"primaryOpacity"in w&&t(7,q=w.primaryOpacity),"secondaryOpacity"in w&&t(8,x=w.secondaryOpacity),"swapOpacity"in w&&t(9,S=w.swapOpacity)},n.$$.update=()=>{n.$$.dirty&16384&&t(10,M=a&&a.icon||[0,0,"",[],""]),n.$$.dirty&237568&&t(11,v=Vl(s,o,h,u)),n.$$.dirty&8126464&&t(12,C=Fl(f,p,m,y,T,512))},[r,i,c,D,N,V,F,q,x,S,M,v,C,s,a,o,u,h,f,p,m,y,T]}class Rs extends dt{constructor(e){super(),ht(this,e,Wl,jl,ut,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var xl={prefix:"fas",iconName:"film",icon:[512,512,[127902],"f008","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"]},fd={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]},Gl={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},ql=Gl,pd={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Kl={prefix:"fas",iconName:"box",icon:[448,512,[128230],"f466","M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"]},Jl={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},md={prefix:"fas",iconName:"cloud-arrow-down",icon:[640,512,[62337,"cloud-download","cloud-download-alt"],"f0ed","M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"]},Xl={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},gd=Xl,vd={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},Yl={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},_d=Yl,Ql={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},Zl={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},bd=Zl,$l={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},eu=$l,wd={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},tu={prefix:"fas",iconName:"phone-volume",icon:[512,512,["volume-control-phone"],"f2a0","M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]},nu=tu,ru={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Id=ru,iu={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},ci={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]},yd={prefix:"fas",iconName:"earth-americas",icon:[512,512,[127758,"earth","earth-america","globe-americas"],"f57d","M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},su={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Ed=su,Td={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Cd={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},au={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]},ou={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Sd=ou,cu={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Ad=cu,kd={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Rd={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},lu={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"]},uu={prefix:"fas",iconName:"brush",icon:[384,512,[],"f55d","M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]};const qn=""+new URL("../assets/bgPlaceholder.9e5a8fcb.jpg",import.meta.url).href,_n=Si("edits",{edits:[]}),du=()=>{_n.update(n=>{const e=n.cache;if(!e)return n;e.data.updatedAt=new Date().getTime();const t=n.edits.findIndex(r=>r.id===e.id);return t<=-1?n.edits.push(e):n.edits[t].data=e.data,n})},hu=n=>{_n.update(e=>(e.edits.findIndex(r=>r.id===n.id)<=-1||(e.edits=e.edits.filter(r=>r.id!==n.id)),e))},fu=async()=>{const{edits:n}=Jn(_n),e=[];for(const t of n){const{id:r,data:i,action:s}=t;(s==="UPDATE"||s==="CREATE")&&await Rr.uploadGameFile(i)&&e.push(r)}return _n.update(t=>(t.edits=t.edits.filter(r=>!e.includes(r.id)),t)),{uploaded:e,notUploaded:n.filter(t=>!e.includes(t.id)).map(t=>t.id)}},pu={editStore:_n,saveEdit:du,deleteEdit:hu,submitChanges:fu};function li(n){let e,t,r,i,s,a;return t=new Rs({props:{icon:ql}}),{c(){e=_("a"),Bt(t.$$.fragment),r=L("Edit"),this.h()},l(o){e=b(o,"A",{href:!0,class:!0});var c=I(e);zt(t.$$.fragment,c),r=U(c,"Edit"),c.forEach(g),this.h()},h(){l(e,"href","?edit=true"),l(e,"class","pointer-events-auto chip variant-soft-primary hover:variant-filled-primary gap-2 flex-1")},m(o,c){ie(o,e,c),jt(t,e,null),d(e,r),i=!0,s||(a=rn(e,"click",n[9]),s=!0)},p:Ft,i(o){i||(He(t.$$.fragment,o),i=!0)},o(o){$e(t.$$.fragment,o),i=!1},d(o){o&&g(e),Wt(t),s=!1,a()}}}function mu(n){let e,t,r=n[0]&&n[1].admin&&li(n);return{c(){r&&r.c(),e=nn()},l(i){r&&r.l(i),e=nn()},m(i,s){r&&r.m(i,s),ie(i,e,s),t=!0},p(i,[s]){i[0]&&i[1].admin?r?(r.p(i,s),s&3&&He(r,1)):(r=li(i),r.c(),He(r,1),r.m(e.parentNode,e)):r&&(Fs(),$e(r,1,1,()=>{r=null}),Bs())},i(i){t||(He(r),t=!0)},o(i){$e(r),t=!1},d(i){i&&g(e),r&&r.d(i)}}}function gu(n,e,t){let r,i,s,a;const{userStore:o}=Rr;Tt(n,o,m=>t(1,s=m));const{editStore:c}=pu;Tt(n,c,m=>t(2,a=m));const{dbStore:u}=hn;Tt(n,u,m=>t(8,i=m));let{file:h=void 0}=e,{game:f=void 0}=e;const p=()=>{Us(c,a.cache={id:r.id,action:"UPDATE",data:JSON.parse(JSON.stringify(r))},a)};return n.$$set=m=>{"file"in m&&t(6,h=m.file),"game"in m&&t(7,f=m.game)},n.$$.update=()=>{var m;n.$$.dirty&448&&t(0,r=f||((m=h==null?void 0:h.game)!=null&&m.id?i[h.game.id]:void 0))},[r,s,a,o,c,u,h,f,i,p]}class Pr extends dt{constructor(e){super(),ht(this,e,gu,mu,ut,{file:6,game:7})}}function ui(n,e,t){const r=n.slice();return r[2]=e[t],r}function di(n){let e,t=n[2]+"",r;return{c(){e=_("div"),r=L(t),this.h()},l(i){e=b(i,"DIV",{class:!0});var s=I(e);r=U(s,t),s.forEach(g),this.h()},h(){l(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(i,s){ie(i,e,s),d(e,r)},p(i,s){s&1&&t!==(t=i[2]+"")&&G(r,t)},d(i){i&&g(e)}}}function vu(n){var C,w;let e,t,r,i,s,a,o,c,u,h,f=((C=n[0].game)==null?void 0:C.name)+"",p,m,y,T,D,N,V=(((w=n[0].authors)==null?void 0:w.join(", "))||"")+"",F,q,x,S,M=Xe(n[0].features||[]),v=[];for(let A=0;A<M.length;A+=1)v[A]=di(ui(n,M,A));return T=new Pr({props:{file:n[0]}}),{c(){e=_("a"),t=_("img"),s=R(),a=_("hr"),o=R(),c=_("div"),u=_("div"),h=_("p"),p=L(f),m=R();for(let A=0;A<v.length;A+=1)v[A].c();y=R(),Bt(T.$$.fragment),D=R(),N=_("h4"),F=L(V),this.h()},l(A){e=b(A,"A",{href:!0,class:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var j=I(e);t=b(j,"IMG",{src:!0,alt:!0,class:!0}),s=P(j),a=b(j,"HR",{}),o=P(j),c=b(j,"DIV",{class:!0});var W=I(c);u=b(W,"DIV",{class:!0});var Y=I(u);h=b(Y,"P",{class:!0});var Q=I(h);p=U(Q,f),Q.forEach(g),m=P(Y);for(let J=0;J<v.length;J+=1)v[J].l(Y);y=P(Y),zt(T.$$.fragment,Y),Y.forEach(g),D=P(W),N=b(W,"H4",{class:!0});var se=I(N);F=U(se,V),se.forEach(g),W.forEach(g),j.forEach(g),this.h()},h(){var A;Ie(t.src,r=n[0].imgUrl||qn)||l(t,"src",r),l(t,"alt",i=n[0].id),l(t,"class","card aspectTable overflow-hidden hover:brightness-125 hover:scale-110 transition-all svelte-1mrpffe"),l(h,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),l(u,"class","flex gap-2"),l(N,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),l(c,"class","flex flex-col py-4"),l(e,"href",n[1]),l(e,"class","flex flex-col"),l(e,"id",q=n[0].id),l(e,"data-gameid",x=(A=n[0].game)==null?void 0:A.id),l(e,"data-filetype","b2sFiles")},m(A,j){ie(A,e,j),d(e,t),d(e,s),d(e,a),d(e,o),d(e,c),d(c,u),d(u,h),d(h,p),d(u,m);for(let W=0;W<v.length;W+=1)v[W]&&v[W].m(u,null);d(u,y),jt(T,u,null),d(c,D),d(c,N),d(N,F),S=!0},p(A,[j]){var Y,Q,se;if((!S||j&1&&!Ie(t.src,r=A[0].imgUrl||qn))&&l(t,"src",r),(!S||j&1&&i!==(i=A[0].id))&&l(t,"alt",i),(!S||j&1)&&f!==(f=((Y=A[0].game)==null?void 0:Y.name)+"")&&G(p,f),j&1){M=Xe(A[0].features||[]);let J;for(J=0;J<M.length;J+=1){const me=ui(A,M,J);v[J]?v[J].p(me,j):(v[J]=di(me),v[J].c(),v[J].m(u,y))}for(;J<v.length;J+=1)v[J].d(1);v.length=M.length}const W={};j&1&&(W.file=A[0]),T.$set(W),(!S||j&1)&&V!==(V=(((Q=A[0].authors)==null?void 0:Q.join(", "))||"")+"")&&G(F,V),(!S||j&2)&&l(e,"href",A[1]),(!S||j&1&&q!==(q=A[0].id))&&l(e,"id",q),(!S||j&1&&x!==(x=(se=A[0].game)==null?void 0:se.id))&&l(e,"data-gameid",x)},i(A){S||(He(T.$$.fragment,A),S=!0)},o(A){$e(T.$$.fragment,A),S=!1},d(A){A&&g(e),un(v,A),Wt(T)}}}function _u(n,e,t){let{file:r=Ws}=e,{href:i=""}=e;return n.$$set=s=>{"file"in s&&t(0,r=s.file),"href"in s&&t(1,i=s.href)},[r,i]}class bu extends dt{constructor(e){super(),ht(this,e,_u,vu,ut,{file:0,href:1})}}function wu(n){var M;let e,t,r,i,s=(((M=n[0].game)==null?void 0:M.name)||"???")+"",a,o,c,u,h=(n[0].version||"")+"",f,p,m,y,T,D,N,V,F,q,x,S;return D=new Pr({props:{file:n[0]}}),{c(){e=_("a"),t=_("div"),r=_("div"),i=_("span"),a=L(s),o=R(),c=_("div"),u=_("span"),f=L(h),p=R(),m=_("div"),y=R(),T=_("div"),Bt(D.$$.fragment),N=R(),V=_("img"),this.h()},l(v){e=b(v,"A",{href:!0,id:!0,"data-gameid":!0,"data-filetype":!0,class:!0});var C=I(e);t=b(C,"DIV",{class:!0});var w=I(t);r=b(w,"DIV",{class:!0});var A=I(r);i=b(A,"SPAN",{class:!0});var j=I(i);a=U(j,s),j.forEach(g),o=P(A),c=b(A,"DIV",{class:!0});var W=I(c);u=b(W,"SPAN",{class:!0});var Y=I(u);f=U(Y,h),Y.forEach(g),p=P(W),m=b(W,"DIV",{class:!0}),I(m).forEach(g),y=P(W),T=b(W,"DIV",{class:!0});var Q=I(T);zt(D.$$.fragment,Q),Q.forEach(g),W.forEach(g),A.forEach(g),N=P(w),V=b(w,"IMG",{src:!0,class:!0,alt:!0}),w.forEach(g),C.forEach(g),this.h()},h(){var v;l(i,"class","font-bold"),l(u,"class","opacity-60 whitespace-nowrap text-ellipsis overflow-hidden"),l(m,"class","flex-1"),l(T,"class","shrink-0"),l(c,"class","flex justify-between max-w-full"),l(r,"class","p-4 flex flex-col justify-between absolute top-0 left-0 right-0 bottom-0 z-10"),Ie(V.src,F=n[3])||l(V,"src",F),l(V,"class","absolute top-0 left-0 right-0 bottom-0 opacity-10"),l(V,"alt",""),l(t,"class","card !bg-surface-100 dark:!bg-surface-600 aspect relative overflow-hidden hover:brightness-125 hover:scale-110 transition-all text-xs md:text-base svelte-22xih4"),l(e,"href",n[1]),l(e,"id",q=n[0].id),l(e,"data-gameid",x=(v=n[0].game)==null?void 0:v.id),l(e,"data-filetype",n[2]),l(e,"class","aspect svelte-22xih4")},m(v,C){ie(v,e,C),d(e,t),d(t,r),d(r,i),d(i,a),d(r,o),d(r,c),d(c,u),d(u,f),d(c,p),d(c,m),d(c,y),d(c,T),jt(D,T,null),d(t,N),d(t,V),S=!0},p(v,[C]){var A,j;(!S||C&1)&&s!==(s=(((A=v[0].game)==null?void 0:A.name)||"???")+"")&&G(a,s),(!S||C&1)&&h!==(h=(v[0].version||"")+"")&&G(f,h);const w={};C&1&&(w.file=v[0]),D.$set(w),(!S||C&8&&!Ie(V.src,F=v[3]))&&l(V,"src",F),(!S||C&2)&&l(e,"href",v[1]),(!S||C&1&&q!==(q=v[0].id))&&l(e,"id",q),(!S||C&1&&x!==(x=(j=v[0].game)==null?void 0:j.id))&&l(e,"data-gameid",x),(!S||C&4)&&l(e,"data-filetype",v[2])},i(v){S||(He(D.$$.fragment,v),S=!0)},o(v){$e(D.$$.fragment,v),S=!1},d(v){v&&g(e),Wt(D)}}}function Iu(n,e,t){let r;const{getGameImage:i}=hn;let{file:s=xs}=e,{href:a=""}=e,{fileType:o}=e;return n.$$set=c=>{"file"in c&&t(0,s=c.file),"href"in c&&t(1,a=c.href),"fileType"in c&&t(2,o=c.fileType)},n.$$.update=()=>{var c;n.$$.dirty&1&&t(3,r=(c=s.game)!=null&&c.id?i(s.game.id):"")},[s,a,o,r]}class Ke extends dt{constructor(e){super(),ht(this,e,Iu,wu,ut,{file:0,href:1,fileType:2})}}const yu=n=>{if(!n)return qn;if(n.imgUrl)return n.imgUrl;const e=n.b2sFiles||[];if(e.length){const r=[...e].sort((i,s)=>s.updatedAt-i.updatedAt).find(i=>i.imgUrl);if(r)return r.imgUrl}const t=n.tableFiles||[];if(t.length){const r=[...t].sort((i,s)=>s.updatedAt-i.updatedAt).find(i=>i.imgUrl);if(r)return r.imgUrl}return qn};/*! Fast Average Color | © 2022 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */function Eu(n){var e=n.toString(16);return e.length===1?"0"+e:e}function hi(n){return"#"+n.map(Eu).join("")}function Tu(n){var e=(n[0]*299+n[1]*587+n[2]*114)/1e3;return e<128}function Cu(n){return n?Su(n)?n:[n]:[]}function Su(n){return Array.isArray(n[0])}function Dr(n,e,t){for(var r=0;r<t.length;r++)if(Au(n,e,t[r]))return!0;return!1}function Au(n,e,t){switch(t.length){case 3:if(ku(n,e,t))return!0;break;case 4:if(Ru(n,e,t))return!0;break;case 5:if(Pu(n,e,t))return!0;break;default:return!1}}function ku(n,e,t){return n[e+3]!==255||n[e]===t[0]&&n[e+1]===t[1]&&n[e+2]===t[2]}function Ru(n,e,t){return n[e+3]&&t[3]?n[e]===t[0]&&n[e+1]===t[1]&&n[e+2]===t[2]&&n[e+3]===t[3]:n[e+3]===t[3]}function On(n,e,t){return n>=e-t&&n<=e+t}function Pu(n,e,t){var r=t[0],i=t[1],s=t[2],a=t[3],o=t[4],c=n[e+3],u=On(c,a,o);return a?!!(!c&&u||On(n[e],r,o)&&On(n[e+1],i,o)&&On(n[e+2],s,o)&&u):u}function Du(n,e,t){for(var r={},i=24,s=t.ignoredColor,a=t.step,o=[0,0,0,0,0],c=0;c<e;c+=a){var u=n[c],h=n[c+1],f=n[c+2],p=n[c+3];if(!(s&&Dr(n,c,s))){var m=Math.round(u/i)+","+Math.round(h/i)+","+Math.round(f/i);r[m]?r[m]=[r[m][0]+u*p,r[m][1]+h*p,r[m][2]+f*p,r[m][3]+p,r[m][4]+1]:r[m]=[u*p,h*p,f*p,p,1],o[4]<r[m][4]&&(o=r[m])}}var y=o[0],T=o[1],D=o[2],N=o[3],V=o[4];return N?[Math.round(y/N),Math.round(T/N),Math.round(D/N),Math.round(N/V)]:t.defaultColor}function Ou(n,e,t){for(var r=0,i=0,s=0,a=0,o=0,c=t.ignoredColor,u=t.step,h=0;h<e;h+=u){var f=n[h+3],p=n[h]*f,m=n[h+1]*f,y=n[h+2]*f;c&&Dr(n,h,c)||(r+=p,i+=m,s+=y,a+=f,o++)}return a?[Math.round(r/a),Math.round(i/a),Math.round(s/a),Math.round(a/o)]:t.defaultColor}function Mu(n,e,t){for(var r=0,i=0,s=0,a=0,o=0,c=t.ignoredColor,u=t.step,h=0;h<e;h+=u){var f=n[h],p=n[h+1],m=n[h+2],y=n[h+3];c&&Dr(n,h,c)||(r+=f*f*y,i+=p*p*y,s+=m*m*y,a+=y,o++)}return a?[Math.round(Math.sqrt(r/a)),Math.round(Math.sqrt(i/a)),Math.round(Math.sqrt(s/a)),Math.round(a/o)]:t.defaultColor}function fi(n){return ln(n,"defaultColor",[0,0,0,0])}function ln(n,e,t){return n[e]===void 0?t:n[e]}var pi=10,gr=100;function Nu(n){return n.search(/\.svg(\?|$)/i)!==-1}function Lu(n){if(Ps(n)){var e=n.naturalWidth,t=n.naturalHeight;return!n.naturalWidth&&Nu(n.src)&&(e=t=gr),{width:e,height:t}}return Hu(n)?{width:n.videoWidth,height:n.videoHeight}:{width:n.width,height:n.height}}function mi(n){return Vu(n)?"canvas":Uu(n)?"offscreencanvas":Fu(n)?"imagebitmap":n.src}function Ps(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement}var Ds=typeof OffscreenCanvas<"u";function Uu(n){return Ds&&n instanceof OffscreenCanvas}function Hu(n){return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement}function Vu(n){return typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement}function Fu(n){return typeof ImageBitmap<"u"&&n instanceof ImageBitmap}function Bu(n,e){var t=ln(e,"left",0),r=ln(e,"top",0),i=ln(e,"width",n.width),s=ln(e,"height",n.height),a=i,o=s;if(e.mode==="precision")return{srcLeft:t,srcTop:r,srcWidth:i,srcHeight:s,destWidth:a,destHeight:o};var c;return i>s?(c=i/s,a=gr,o=Math.round(a/c)):(c=s/i,o=gr,a=Math.round(o/c)),(a>i||o>s||a<pi||o<pi)&&(a=i,o=s),{srcLeft:t,srcTop:r,srcWidth:i,srcHeight:s,destWidth:a,destHeight:o}}var zu=typeof window>"u";function ju(){return zu?Ds?new OffscreenCanvas(1,1):null:document.createElement("canvas")}var Wu="FastAverageColor: ";function Je(n){return Error(Wu+n)}function cn(n,e){e||console.error(n)}var Os=function(){function n(){this.canvas=null,this.ctx=null}return n.prototype.getColorAsync=function(e,t){if(!e)return Promise.reject(Je("call .getColorAsync() without resource."));if(typeof e=="string"){if(typeof Image>"u")return Promise.reject(Je("resource as string is not supported in this environment"));var r=new Image;return r.crossOrigin=t&&t.crossOrigin||"",r.src=e,this.bindImageEvents(r,t)}else{if(Ps(e)&&!e.complete)return this.bindImageEvents(e,t);var i=this.getColor(e,t);return i.error?Promise.reject(i.error):Promise.resolve(i)}},n.prototype.getColor=function(e,t){t=t||{};var r=fi(t);if(!e){var i=Je("call .getColor(null) without resource");return cn(i,t.silent),this.prepareResult(r,i)}var s=Lu(e),a=Bu(s,t);if(!a.srcWidth||!a.srcHeight||!a.destWidth||!a.destHeight){var i=Je('incorrect sizes for resource "'.concat(mi(e),'"'));return cn(i,t.silent),this.prepareResult(r,i)}if(!this.canvas&&(this.canvas=ju(),!this.canvas)){var i=Je("OffscreenCanvas is not supported in this browser");return cn(i,t.silent),this.prepareResult(r,i)}if(!this.ctx){if(this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx){var i=Je("Canvas Context 2D is not supported in this browser");return cn(i,t.silent),this.prepareResult(r)}this.ctx.imageSmoothingEnabled=!1}this.canvas.width=a.destWidth,this.canvas.height=a.destHeight;try{this.ctx.clearRect(0,0,a.destWidth,a.destHeight),this.ctx.drawImage(e,a.srcLeft,a.srcTop,a.srcWidth,a.srcHeight,0,0,a.destWidth,a.destHeight);var o=this.ctx.getImageData(0,0,a.destWidth,a.destHeight).data;return this.prepareResult(this.getColorFromArray4(o,t))}catch(c){var i=Je("security error (CORS) for resource ".concat(mi(e),`.
Details: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image`));return cn(i,t.silent),!t.silent&&console.error(c),this.prepareResult(r,i)}},n.prototype.getColorFromArray4=function(e,t){t=t||{};var r=4,i=e.length,s=fi(t);if(i<r)return s;var a=i-i%r,o=(t.step||1)*r,c;switch(t.algorithm||"sqrt"){case"simple":c=Ou;break;case"sqrt":c=Mu;break;case"dominant":c=Du;break;default:throw Je("".concat(t.algorithm," is unknown algorithm"))}return c(e,a,{defaultColor:s,ignoredColor:Cu(t.ignoredColor),step:o})},n.prototype.prepareResult=function(e,t){var r=e.slice(0,3),i=[e[0],e[1],e[2],e[3]/255],s=Tu(e);return{value:[e[0],e[1],e[2],e[3]],rgb:"rgb("+r.join(",")+")",rgba:"rgba("+i.join(",")+")",hex:hi(r),hexa:hi(e),isDark:s,isLight:!s,error:t}},n.prototype.destroy=function(){this.canvas&&(this.canvas.width=1,this.canvas.height=1,this.canvas=null),this.ctx=null},n.prototype.bindImageEvents=function(e,t){var r=this;return new Promise(function(i,s){var a=function(){u();var h=r.getColor(e,t);h.error?s(h.error):i(h)},o=function(){u(),s(Je('Error loading image "'.concat(e.src,'".')))},c=function(){u(),s(Je('Image "'.concat(e.src,'" loading aborted')))},u=function(){e.removeEventListener("load",a),e.removeEventListener("error",o),e.removeEventListener("abort",c)};e.addEventListener("load",a),e.addEventListener("error",o),e.addEventListener("abort",c)})},n}();const Ms=Xn({width:0,height:0,mobile:!1});function gi(n,e,t){const r=n.slice();return r[11]=e[t],r}function vi(n,e,t){const r=n.slice();return r[14]=e[t],r}function _i(n,e,t){const r=n.slice();return r[11]=e[t],r}function bi(n){let e,t=n[11]+"",r,i;return{c(){e=_("div"),r=L(t),i=R(),this.h()},l(s){e=b(s,"DIV",{class:!0});var a=I(e);r=U(a,t),i=P(a),a.forEach(g),this.h()},h(){l(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(s,a){ie(s,e,a),d(e,r),d(e,i)},p(s,a){a&32&&t!==(t=s[11]+"")&&G(r,t)},d(s){s&&g(e)}}}function wi(n){let e,t=n[14].toUpperCase()+"",r;return{c(){e=_("div"),r=L(t),this.h()},l(i){e=b(i,"DIV",{class:!0});var s=I(e);r=U(s,t),s.forEach(g),this.h()},h(){l(e,"class","badge variant-filled-surface")},m(i,s){ie(i,e,s),d(e,r)},p(i,s){s&1&&t!==(t=i[14].toUpperCase()+"")&&G(r,t)},d(i){i&&g(e)}}}function Ii(n){let e,t=n[11]+"",r,i;return{c(){e=_("div"),r=L(t),i=R(),this.h()},l(s){e=b(s,"DIV",{class:!0});var a=I(e);r=U(a,t),i=P(a),a.forEach(g),this.h()},h(){l(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(s,a){ie(s,e,a),d(e,r),d(e,i)},p(s,a){a&32&&t!==(t=s[11]+"")&&G(r,t)},d(s){s&&g(e)}}}function xu(n){var Ot,K;let e,t,r,i,s,a,o,c,u,h=n[0].name+"",f,p,m,y,T,D=n[0].manufacturer+"",N,V,F,q,x=n[0].year+"",S,M,v,C,w=(((Ot=n[0].designers)==null?void 0:Ot.join(", "))||"-")+"",A,j,W,Y,Q,se,J,me="Updated at",kt,oe,ge=Et(n[0].updatedAt)+"",Ee,Kt,tt,Ve,ve,Te,Jt="Type",nt,Fe,_e=(n[0].type||"-")+"",Ce,Xt,ae,De,Be,ft,ce,$,Oe,ze=n[0].name+"",pt,le,Se,fe,Me=n[0].manufacturer+"",rt,Rt,Ae=n[0].year+"",je,mt,Pt,pe,Ne=((K=n[0].designers)==null?void 0:K.join(", "))+"",it,gt,st,Dt,We=Xe(n[5]),re=[];for(let E=0;E<We.length;E+=1)re[E]=bi(_i(n,We,E));let ye=Xe(n[0].theme||[]),ee=[];for(let E=0;E<ye.length;E+=1)ee[E]=wi(vi(n,ye,E));let Le=Xe(n[5]),te=[];for(let E=0;E<Le.length;E+=1)te[E]=Ii(gi(n,Le,E));return{c(){e=_("a"),t=_("div"),r=_("img"),a=R(),o=_("div"),c=_("div"),u=_("p"),f=L(h),p=R();for(let E=0;E<re.length;E+=1)re[E].c();m=R(),y=_("div"),T=_("p"),N=L(D),V=R(),F=_("p"),q=L("("),S=L(x),M=L(")"),v=R(),C=_("p"),A=L(w),j=R(),W=_("div");for(let E=0;E<ee.length;E+=1)ee[E].c();Y=R(),Q=_("div"),se=_("div"),J=_("p"),J.textContent=me,kt=R(),oe=_("p"),Ee=L(ge),Kt=R(),tt=_("div"),Ve=R(),ve=_("div"),Te=_("p"),Te.textContent=Jt,nt=R(),Fe=_("p"),Ce=L(_e),Xt=R(),ae=_("img"),ft=R(),ce=_("div"),$=_("div"),Oe=_("p"),pt=L(ze),le=R();for(let E=0;E<te.length;E+=1)te[E].c();Se=R(),fe=_("p"),rt=L(Me),Rt=L(" ("),je=L(Ae),mt=L(")"),Pt=R(),pe=_("p"),it=L(Ne),this.h()},l(E){e=b(E,"A",{class:!0,href:!0,id:!0});var B=I(e);t=b(B,"DIV",{class:!0,style:!0});var Z=I(t);r=b(Z,"IMG",{src:!0,alt:!0,style:!0,class:!0}),a=P(Z),o=b(Z,"DIV",{class:!0,style:!0});var ue=I(o);c=b(ue,"DIV",{class:!0});var O=I(c);u=b(O,"P",{class:!0});var be=I(u);f=U(be,h),be.forEach(g),p=P(O);for(let we=0;we<re.length;we+=1)re[we].l(O);O.forEach(g),m=P(ue),y=b(ue,"DIV",{class:!0});var k=I(y);T=b(k,"P",{class:!0});var z=I(T);N=U(z,D),z.forEach(g),V=P(k),F=b(k,"P",{});var ke=I(F);q=U(ke,"("),S=U(ke,x),M=U(ke,")"),ke.forEach(g),k.forEach(g),v=P(ue),C=b(ue,"P",{class:!0});var de=I(C);A=U(de,w),de.forEach(g),j=P(ue),W=b(ue,"DIV",{class:!0});var Re=I(W);for(let we=0;we<ee.length;we+=1)ee[we].l(Re);Re.forEach(g),Y=P(ue),Q=b(ue,"DIV",{class:!0});var Pe=I(Q);se=b(Pe,"DIV",{class:!0});var xe=I(se);J=b(xe,"P",{class:!0,"data-svelte-h":!0}),Vn(J)!=="svelte-g6tq99"&&(J.textContent=me),kt=P(xe),oe=b(xe,"P",{class:!0});var Ge=I(oe);Ee=U(Ge,ge),Ge.forEach(g),xe.forEach(g),Kt=P(Pe),tt=b(Pe,"DIV",{class:!0}),I(tt).forEach(g),Ve=P(Pe),ve=b(Pe,"DIV",{class:!0});var qe=I(ve);Te=b(qe,"P",{class:!0,"data-svelte-h":!0}),Vn(Te)!=="svelte-1h1g7sd"&&(Te.textContent=Jt),nt=P(qe),Fe=b(qe,"P",{class:!0});var Mt=I(Fe);Ce=U(Mt,_e),Mt.forEach(g),qe.forEach(g),Pe.forEach(g),ue.forEach(g),Z.forEach(g),Xt=P(B),ae=b(B,"IMG",{src:!0,alt:!0,class:!0}),ft=P(B),ce=b(B,"DIV",{class:!0});var at=I(ce);$=b(at,"DIV",{class:!0});var Ue=I($);Oe=b(Ue,"P",{class:!0});var Nt=I(Oe);pt=U(Nt,ze),Nt.forEach(g),le=P(Ue);for(let we=0;we<te.length;we+=1)te[we].l(Ue);Ue.forEach(g),Se=P(at),fe=b(at,"P",{});var vt=I(fe);rt=U(vt,Me),Rt=U(vt," ("),je=U(vt,Ae),mt=U(vt,")"),vt.forEach(g),Pt=P(at),pe=b(at,"P",{class:!0});var Lt=I(pe);it=U(Lt,Ne),Lt.forEach(g),at.forEach(g),B.forEach(g),this.h()},h(){Ie(r.src,i=n[2])||l(r,"src",i),l(r,"alt",s=n[0].id),yt(r,"height","36%"),l(r,"class","absolute top-0 left-0 right-0 w-full bgImage z-0 object-cover opacity-10"),l(u,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),l(c,"class","flex gap-2 max-w-full"),l(T,"class","text-ellipsis whitespace-nowrap overflow-hidden"),l(y,"class","flex gap-1 text-center max-w-full"),l(C,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),l(W,"class","flex gap-2 mt-4 flex-wrap"),l(J,"class","text-xs font-bold uppercase opacity-40"),l(oe,"class",""),l(se,"class","flex flex-col items-center justify-center flex-1 gap-1"),l(tt,"class","bg-surface-900-50-token h-full w-px opacity-20"),l(Te,"class","text-xs font-bold uppercase opacity-40"),l(Fe,"class",""),l(ve,"class","flex flex-col items-center justify-center flex-1 gap-1"),l(Q,"class","flex mt-auto w-full"),l(o,"class","flex flex-col max-w-full w-full absolute items-center p-2 bottom-0"),yt(o,"top","calc(90% - 13rem)"),l(t,"class","hoverCard card !bg-surface-100 dark:!bg-surface-600 shadow-2xl shadow-black absolute top-0 -left-4 -right-4 bottom-0 -z-1 flex flex-col p-4 gap-0.5 items-center svelte-1jt2e09"),yt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(n[6]?100:900)+")) "+(n[6]?80:60)+"%, "+(n[3]||`rgb(var(--color-surface-${n[6]?100:600})`)+")",1),ne(t,"hovered",n[4]),Ie(ae.src,De=n[2])||l(ae,"src",De),l(ae,"alt",Be=n[0].name),l(ae,"class","card pinImage bg-surface-300-600-token shadow-black svelte-1jt2e09"),ne(ae,"hovered",n[4]),ne(ae,"shadow-lg",n[4]),l(Oe,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),l($,"class","flex gap-2"),l(pe,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),l(ce,"class","info flex flex-col py-4 svelte-1jt2e09"),ne(ce,"opacity-0",n[4]),l(e,"class","wrapper relative z-0"),l(e,"href",n[1]),l(e,"id",gt=n[0].id)},m(E,B){ie(E,e,B),d(e,t),d(t,r),d(t,a),d(t,o),d(o,c),d(c,u),d(u,f),d(c,p);for(let Z=0;Z<re.length;Z+=1)re[Z]&&re[Z].m(c,null);d(o,m),d(o,y),d(y,T),d(T,N),d(y,V),d(y,F),d(F,q),d(F,S),d(F,M),d(o,v),d(o,C),d(C,A),d(o,j),d(o,W);for(let Z=0;Z<ee.length;Z+=1)ee[Z]&&ee[Z].m(W,null);d(o,Y),d(o,Q),d(Q,se),d(se,J),d(se,kt),d(se,oe),d(oe,Ee),d(Q,Kt),d(Q,tt),d(Q,Ve),d(Q,ve),d(ve,Te),d(ve,nt),d(ve,Fe),d(Fe,Ce),d(e,Xt),d(e,ae),d(e,ft),d(e,ce),d(ce,$),d($,Oe),d(Oe,pt),d($,le);for(let Z=0;Z<te.length;Z+=1)te[Z]&&te[Z].m($,null);d(ce,Se),d(ce,fe),d(fe,rt),d(fe,Rt),d(fe,je),d(fe,mt),d(ce,Pt),d(ce,pe),d(pe,it),st||(Dt=[rn(e,"mouseenter",n[7]),rn(e,"mouseleave",n[8])],st=!0)},p(E,[B]){var Z,ue;if(B&4&&!Ie(r.src,i=E[2])&&l(r,"src",i),B&1&&s!==(s=E[0].id)&&l(r,"alt",s),B&1&&h!==(h=E[0].name+"")&&G(f,h),B&32){We=Xe(E[5]);let O;for(O=0;O<We.length;O+=1){const be=_i(E,We,O);re[O]?re[O].p(be,B):(re[O]=bi(be),re[O].c(),re[O].m(c,null))}for(;O<re.length;O+=1)re[O].d(1);re.length=We.length}if(B&1&&D!==(D=E[0].manufacturer+"")&&G(N,D),B&1&&x!==(x=E[0].year+"")&&G(S,x),B&1&&w!==(w=(((Z=E[0].designers)==null?void 0:Z.join(", "))||"-")+"")&&G(A,w),B&1){ye=Xe(E[0].theme||[]);let O;for(O=0;O<ye.length;O+=1){const be=vi(E,ye,O);ee[O]?ee[O].p(be,B):(ee[O]=wi(be),ee[O].c(),ee[O].m(W,null))}for(;O<ee.length;O+=1)ee[O].d(1);ee.length=ye.length}if(B&1&&ge!==(ge=Et(E[0].updatedAt)+"")&&G(Ee,ge),B&1&&_e!==(_e=(E[0].type||"-")+"")&&G(Ce,_e),B&72&&yt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(E[6]?100:900)+")) "+(E[6]?80:60)+"%, "+(E[3]||`rgb(var(--color-surface-${E[6]?100:600})`)+")",1),B&16&&ne(t,"hovered",E[4]),B&4&&!Ie(ae.src,De=E[2])&&l(ae,"src",De),B&1&&Be!==(Be=E[0].name)&&l(ae,"alt",Be),B&16&&ne(ae,"hovered",E[4]),B&16&&ne(ae,"shadow-lg",E[4]),B&1&&ze!==(ze=E[0].name+"")&&G(pt,ze),B&32){Le=Xe(E[5]);let O;for(O=0;O<Le.length;O+=1){const be=gi(E,Le,O);te[O]?te[O].p(be,B):(te[O]=Ii(be),te[O].c(),te[O].m($,null))}for(;O<te.length;O+=1)te[O].d(1);te.length=Le.length}B&1&&Me!==(Me=E[0].manufacturer+"")&&G(rt,Me),B&1&&Ae!==(Ae=E[0].year+"")&&G(je,Ae),B&1&&Ne!==(Ne=((ue=E[0].designers)==null?void 0:ue.join(", "))+"")&&G(it,Ne),B&16&&ne(ce,"opacity-0",E[4]),B&2&&l(e,"href",E[1]),B&1&&gt!==(gt=E[0].id)&&l(e,"id",gt)},i:Ft,o:Ft,d(E){E&&g(e),un(re,E),un(ee,E),un(te,E),st=!1,Kn(Dt)}}}function Gu(n,e,t){let r,i,s,a;Tt(n,Ms,y=>t(9,s=y)),Tt(n,ki,y=>t(6,a=y));const o=new Os;let{file:c=Ri}=e,{href:u=""}=e,h="",f=!1;const p=()=>{s.mobile||t(4,f=!0)},m=()=>{s.mobile||t(4,f=!1)};return n.$$set=y=>{"file"in y&&t(0,c=y.file),"href"in y&&t(1,u=y.href)},n.$$.update=()=>{n.$$.dirty&1&&t(2,r=yu(c)),n.$$.dirty&1&&t(5,i=Array.from(new Set((c.tableFiles||[]).map(y=>y.tableFormat).filter(y=>!!y)))),n.$$.dirty&4&&r&&o.getColorAsync(r).then(y=>{y&&t(3,h=y.rgb)})},[c,u,r,h,f,i,a,p,m]}class qu extends dt{constructor(e){super(),ht(this,e,Gu,xu,ut,{file:0,href:1})}}const Mn=""+new URL("../assets/tablePlaceholder.f13766a0.jpg",import.meta.url).href,yi={FastFlips:"bg-red-500",SSF:"bg-cyan-500","P-ROC":"bg-bg-yellow-500",FlexDMD:"bg-orange-500",PuP:"bg-sky-500",VR:"bg-cyan-500",Hybrid:"bg-violet-500",Music:"bg-rose-500",FSS:"bg-green-500","4k":"bg-teal-500",MOD:"bg-purple-500",VPX:"bg-emerald-500",VP9:"bg-emerald-500",PM5:"bg-green-500",FX3:"bg-lime-500",FX2:"bg-lime-500",FX:"bg-lime-500",FP:"bg-yellow-500",B2S:"bg-pink-500",ROM:"bg-fuchsia-500",POV:"bg-green-500",Color:"bg-red-500",Sound:"bg-rose-500",Wheel:"bg-purple-500",Rules:"bg-orange-500",MediaPack:"bg-yellow-500",Topper:"bg-red-500","PinX Sound":"bg-sore-500","incl. B2S":"bg-pink-500","incl. ROM":"bg-fuchsia-500","incl. Art":"bg-purple-500","incl. PuP":"bg-sky-500","incl. Video":"bg-sky-500","no ROM":"bg-fuchsia-500",Adult:"bg-slate-500",Kids:"bg-indigo-500",LUT:"bg-gray-500",nFozzy:"bg-blue-500",Scorbit:"bg-indigo-500",Fleep:"bg-yellow-500"};function Ei(n,e,t){const r=n.slice();return r[1]=e[t],r}function Ti(n){let e,t=Xe(n[0]||[]),r=[];for(let i=0;i<t.length;i+=1)r[i]=Ci(Ei(n,t,i));return{c(){e=_("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=b(i,"DIV",{class:!0});var s=I(e);for(let a=0;a<r.length;a+=1)r[a].l(s);s.forEach(g),this.h()},h(){l(e,"class","flex gap-1 flex-wrap")},m(i,s){ie(i,e,s);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null)},p(i,s){if(s&1){t=Xe(i[0]||[]);let a;for(a=0;a<t.length;a+=1){const o=Ei(i,t,a);r[a]?r[a].p(o,s):(r[a]=Ci(o),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}},d(i){i&&g(e),un(r,i)}}}function Ci(n){let e,t,r,i=n[1].toUpperCase()+"",s,a;return{c(){e=_("div"),t=_("span"),s=L(i),a=R(),this.h()},l(o){e=b(o,"DIV",{class:!0});var c=I(e);t=b(c,"SPAN",{class:!0}),I(t).forEach(g),s=U(c,i),a=P(c),c.forEach(g),this.h()},h(){l(t,"class",r="rounded-full h-2 w-2 "+(yi[n[1]]||"bg-slate-500")+" mr-2"),l(e,"class","badge variant-ringed-surface px-1.5 py-0.5")},m(o,c){ie(o,e,c),d(e,t),d(e,s),d(e,a)},p(o,c){c&1&&r!==(r="rounded-full h-2 w-2 "+(yi[o[1]]||"bg-slate-500")+" mr-2")&&l(t,"class",r),c&1&&i!==(i=o[1].toUpperCase()+"")&&G(s,i)},d(o){o&&g(e)}}}function Ku(n){var r;let e,t=((r=n[0])==null?void 0:r.length)&&Ti(n);return{c(){t&&t.c(),e=nn()},l(i){t&&t.l(i),e=nn()},m(i,s){t&&t.m(i,s),ie(i,e,s)},p(i,[s]){var a;(a=i[0])!=null&&a.length?t?t.p(i,s):(t=Ti(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Ft,o:Ft,d(i){i&&g(e),t&&t.d(i)}}}function Ju(n,e,t){let{data:r=[]}=e;return n.$$set=i=>{"data"in i&&t(0,r=i.data)},[r]}class Xu extends dt{constructor(e){super(),ht(this,e,Ju,Ku,ut,{data:0})}}function Yu(n){var Z,ue,O,be;let e,t,r,i,s,a,o,c,u,h=((Z=n[0].game)==null?void 0:Z.name)+"",f,p,m,y=n[0].tableFormat+"",T,D,N,V,F,q,x=n[4].manufacturer+"",S,M,v,C,w=n[4].year+"",A,j,W,Y,Q=((ue=n[0].authors)==null?void 0:ue.join(", "))+"",se,J,me,kt,oe,ge,Ee,Kt="Updated at",tt,Ve,ve=Et(n[0].updatedAt)+"",Te,Jt,nt,Fe,_e,Ce,Xt="Added at",ae,De,Be=Et(n[0].createdAt||n[0].updatedAt)+"",ft,ce,$,Oe,ze,pt,le,Se,fe,Me=((O=n[0].game)==null?void 0:O.name)+"",rt,Rt,Ae,je=n[0].tableFormat+"",mt,Pt,pe,Ne=n[4].manufacturer+"",it,gt,st=n[4].year+"",Dt,We,re,ye,ee=((be=n[0].authors)==null?void 0:be.join(", "))+"",Le,te,Ot,K,E,B;return N=new Pr({props:{game:n[4]}}),me=new Xu({props:{data:n[0].features}}),{c(){e=_("a"),t=_("div"),r=_("img"),a=R(),o=_("div"),c=_("div"),u=_("p"),f=L(h),p=R(),m=_("div"),T=L(y),D=R(),Bt(N.$$.fragment),V=R(),F=_("div"),q=_("p"),S=L(x),M=R(),v=_("p"),C=L("("),A=L(w),j=L(")"),W=R(),Y=_("p"),se=L(Q),J=R(),Bt(me.$$.fragment),kt=R(),oe=_("div"),ge=_("div"),Ee=_("p"),Ee.textContent=Kt,tt=R(),Ve=_("p"),Te=L(ve),Jt=R(),nt=_("div"),Fe=R(),_e=_("div"),Ce=_("p"),Ce.textContent=Xt,ae=R(),De=_("p"),ft=L(Be),ce=R(),$=_("img"),pt=R(),le=_("div"),Se=_("div"),fe=_("p"),rt=L(Me),Rt=R(),Ae=_("div"),mt=L(je),Pt=R(),pe=_("p"),it=L(Ne),gt=L(" ("),Dt=L(st),We=L(")"),re=R(),ye=_("p"),Le=L(ee),this.h()},l(k){e=b(k,"A",{class:!0,href:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var z=I(e);t=b(z,"DIV",{style:!0,class:!0});var ke=I(t);r=b(ke,"IMG",{src:!0,alt:!0,style:!0,class:!0}),a=P(ke),o=b(ke,"DIV",{class:!0,style:!0});var de=I(o);c=b(de,"DIV",{class:!0});var Re=I(c);u=b(Re,"P",{class:!0});var Pe=I(u);f=U(Pe,h),Pe.forEach(g),p=P(Re),m=b(Re,"DIV",{class:!0});var xe=I(m);T=U(xe,y),xe.forEach(g),D=P(Re),zt(N.$$.fragment,Re),Re.forEach(g),V=P(de),F=b(de,"DIV",{class:!0});var Ge=I(F);q=b(Ge,"P",{class:!0});var qe=I(q);S=U(qe,x),qe.forEach(g),M=P(Ge),v=b(Ge,"P",{});var Mt=I(v);C=U(Mt,"("),A=U(Mt,w),j=U(Mt,")"),Mt.forEach(g),Ge.forEach(g),W=P(de),Y=b(de,"P",{class:!0});var at=I(Y);se=U(at,Q),at.forEach(g),J=P(de),zt(me.$$.fragment,de),kt=P(de),oe=b(de,"DIV",{class:!0});var Ue=I(oe);ge=b(Ue,"DIV",{class:!0});var Nt=I(ge);Ee=b(Nt,"P",{class:!0,"data-svelte-h":!0}),Vn(Ee)!=="svelte-g6tq99"&&(Ee.textContent=Kt),tt=P(Nt),Ve=b(Nt,"P",{class:!0});var vt=I(Ve);Te=U(vt,ve),vt.forEach(g),Nt.forEach(g),Jt=P(Ue),nt=b(Ue,"DIV",{class:!0}),I(nt).forEach(g),Fe=P(Ue),_e=b(Ue,"DIV",{class:!0});var Lt=I(_e);Ce=b(Lt,"P",{class:!0,"data-svelte-h":!0}),Vn(Ce)!=="svelte-1gbi7dm"&&(Ce.textContent=Xt),ae=P(Lt),De=b(Lt,"P",{class:!0});var we=I(De);ft=U(we,Be),we.forEach(g),Lt.forEach(g),Ue.forEach(g),de.forEach(g),ke.forEach(g),ce=P(z),$=b(z,"IMG",{src:!0,alt:!0,class:!0}),pt=P(z),le=b(z,"DIV",{class:!0});var Yt=I(le);Se=b(Yt,"DIV",{class:!0});var Rn=I(Se);fe=b(Rn,"P",{class:!0});var Or=I(fe);rt=U(Or,Me),Or.forEach(g),Rt=P(Rn),Ae=b(Rn,"DIV",{class:!0});var Mr=I(Ae);mt=U(Mr,je),Mr.forEach(g),Rn.forEach(g),Pt=P(Yt),pe=b(Yt,"P",{});var on=I(pe);it=U(on,Ne),gt=U(on," ("),Dt=U(on,st),We=U(on,")"),on.forEach(g),re=P(Yt),ye=b(Yt,"P",{class:!0});var Nr=I(ye);Le=U(Nr,ee),Nr.forEach(g),Yt.forEach(g),z.forEach(g),this.h()},h(){var k;Ie(r.src,i=n[0].imgUrl||Mn)||l(r,"src",i),l(r,"alt",s=n[0].id),yt(r,"height","35%"),l(r,"class","absolute top-0 left-0 right-0 w-full bgImage z-0 object-cover opacity-60 svelte-gfpzxg"),l(u,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),l(m,"class","badge badge-glass my-auto py-0.5 px-1"),l(c,"class","flex gap-2 max-w-full"),l(q,"class","text-ellipsis whitespace-nowrap overflow-hidden"),l(F,"class","flex gap-1 text-center"),l(Y,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full mb-4"),l(Ee,"class","text-xs font-bold uppercase opacity-40"),l(Ve,"class",""),l(ge,"class","flex flex-col items-center justify-center flex-1 gap-1"),l(nt,"class","bg-surface-900-50-token h-full w-px opacity-20"),l(Ce,"class","text-xs font-bold uppercase opacity-40"),l(De,"class",""),l(_e,"class","flex flex-col items-center justify-center flex-1 gap-1"),l(oe,"class","flex mt-auto w-full"),l(o,"class","flex flex-col max-w-full w-full absolute items-center p-4 gap-0.5 bottom-0"),yt(o,"top","calc(88.5% - 14rem)"),yt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(n[5]?100:900)+")) "+(n[5]?80:60)+"%, "+(n[2]||`rgb(var(--color-surface-${n[5]?100:600})`)+")",1),l(t,"class","card !bg-surface-100 dark:!bg-surface-600 shadow-2xl shadow-black absolute top-0 -left-4 -right-4 bottom-0 -z-1 flex flex-col p-4 gap-0.5 items-center hoverCard svelte-gfpzxg"),ne(t,"hovered",n[3]),Ie($.src,Oe=n[0].imgUrl||Mn)||l($,"src",Oe),l($,"alt",ze=n[0].id),l($,"class","card pinImage bg-surface-300-600-token shadow-black svelte-gfpzxg"),ne($,"hovered",n[3]),ne($,"shadow-lg",n[3]),l(fe,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),l(Ae,"class","badge badge-glass my-auto py-0.5 px-1"),l(Se,"class","flex gap-2"),l(ye,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),l(le,"class","flex flex-col py-4 info svelte-gfpzxg"),ne(le,"opacity-0",n[3]),l(e,"class","wrapper relative z-0"),l(e,"href",n[1]),l(e,"id",te=n[0].id),l(e,"data-gameid",Ot=(k=n[0].game)==null?void 0:k.id),l(e,"data-filetype","tableFiles")},m(k,z){ie(k,e,z),d(e,t),d(t,r),d(t,a),d(t,o),d(o,c),d(c,u),d(u,f),d(c,p),d(c,m),d(m,T),d(c,D),jt(N,c,null),d(o,V),d(o,F),d(F,q),d(q,S),d(F,M),d(F,v),d(v,C),d(v,A),d(v,j),d(o,W),d(o,Y),d(Y,se),d(o,J),jt(me,o,null),d(o,kt),d(o,oe),d(oe,ge),d(ge,Ee),d(ge,tt),d(ge,Ve),d(Ve,Te),d(oe,Jt),d(oe,nt),d(oe,Fe),d(oe,_e),d(_e,Ce),d(_e,ae),d(_e,De),d(De,ft),d(e,ce),d(e,$),d(e,pt),d(e,le),d(le,Se),d(Se,fe),d(fe,rt),d(Se,Rt),d(Se,Ae),d(Ae,mt),d(le,Pt),d(le,pe),d(pe,it),d(pe,gt),d(pe,Dt),d(pe,We),d(le,re),d(le,ye),d(ye,Le),K=!0,E||(B=[rn(e,"mouseenter",n[7]),rn(e,"mouseleave",n[8])],E=!0)},p(k,[z]){var Re,Pe,xe,Ge,qe;(!K||z&1&&!Ie(r.src,i=k[0].imgUrl||Mn))&&l(r,"src",i),(!K||z&1&&s!==(s=k[0].id))&&l(r,"alt",s),(!K||z&1)&&h!==(h=((Re=k[0].game)==null?void 0:Re.name)+"")&&G(f,h),(!K||z&1)&&y!==(y=k[0].tableFormat+"")&&G(T,y);const ke={};z&16&&(ke.game=k[4]),N.$set(ke),(!K||z&16)&&x!==(x=k[4].manufacturer+"")&&G(S,x),(!K||z&16)&&w!==(w=k[4].year+"")&&G(A,w),(!K||z&1)&&Q!==(Q=((Pe=k[0].authors)==null?void 0:Pe.join(", "))+"")&&G(se,Q);const de={};z&1&&(de.data=k[0].features),me.$set(de),(!K||z&1)&&ve!==(ve=Et(k[0].updatedAt)+"")&&G(Te,ve),(!K||z&1)&&Be!==(Be=Et(k[0].createdAt||k[0].updatedAt)+"")&&G(ft,Be),(!K||z&36)&&yt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(k[5]?100:900)+")) "+(k[5]?80:60)+"%, "+(k[2]||`rgb(var(--color-surface-${k[5]?100:600})`)+")",1),(!K||z&8)&&ne(t,"hovered",k[3]),(!K||z&1&&!Ie($.src,Oe=k[0].imgUrl||Mn))&&l($,"src",Oe),(!K||z&1&&ze!==(ze=k[0].id))&&l($,"alt",ze),(!K||z&8)&&ne($,"hovered",k[3]),(!K||z&8)&&ne($,"shadow-lg",k[3]),(!K||z&1)&&Me!==(Me=((xe=k[0].game)==null?void 0:xe.name)+"")&&G(rt,Me),(!K||z&1)&&je!==(je=k[0].tableFormat+"")&&G(mt,je),(!K||z&16)&&Ne!==(Ne=k[4].manufacturer+"")&&G(it,Ne),(!K||z&16)&&st!==(st=k[4].year+"")&&G(Dt,st),(!K||z&1)&&ee!==(ee=((Ge=k[0].authors)==null?void 0:Ge.join(", "))+"")&&G(Le,ee),(!K||z&8)&&ne(le,"opacity-0",k[3]),(!K||z&2)&&l(e,"href",k[1]),(!K||z&1&&te!==(te=k[0].id))&&l(e,"id",te),(!K||z&1&&Ot!==(Ot=(qe=k[0].game)==null?void 0:qe.id))&&l(e,"data-gameid",Ot)},i(k){K||(He(N.$$.fragment,k),He(me.$$.fragment,k),K=!0)},o(k){$e(N.$$.fragment,k),$e(me.$$.fragment,k),K=!1},d(k){k&&g(e),Wt(N),Wt(me),E=!1,Kn(B)}}}function Qu(n,e,t){let r,i,s,a;Tt(n,Ms,T=>t(10,i=T)),Tt(n,ki,T=>t(5,a=T));const o=new Os,{dbStore:c}=hn;Tt(n,c,T=>t(9,s=T));let{file:u=Gs}=e,{href:h=""}=e,f="",p=!1;const m=()=>{i.mobile||t(3,p=!0)},y=()=>{i.mobile||t(3,p=!1)};return n.$$set=T=>{"file"in T&&t(0,u=T.file),"href"in T&&t(1,h=T.href)},n.$$.update=()=>{var T;n.$$.dirty&513&&t(4,r=(T=u==null?void 0:u.game)!=null&&T.id?s[u.game.id]:Ri),n.$$.dirty&1&&u.imgUrl&&o.getColorAsync(u.imgUrl).then(D=>{D&&t(2,f=D.rgb)})},[u,h,f,p,r,a,c,m,y,s]}class Zu extends dt{constructor(e){super(),ht(this,e,Qu,Yu,ut,{file:0,href:1})}}function $u(n){let e,t,r,i,s,a,o,c;return i=new Rs({props:{icon:au,size:"8",class:"ml-2"}}),{c(){e=_("button"),t=L(n[0]),r=R(),Bt(i.$$.fragment),this.h()},l(u){e=b(u,"BUTTON",{class:!0});var h=I(e);t=U(h,n[0]),r=P(h),zt(i.$$.fragment,h),h.forEach(g),this.h()},h(){l(e,"class","chip badge-glass py-0.5 px-1 cursor-pointer")},m(u,h){ie(u,e,h),d(e,t),d(e,r),jt(i,e,null),a=!0,o||(c=[Hs(s=Zs.call(null,e,n[0])),rn(e,"click",n[1])],o=!0)},p(u,[h]){(!a||h&1)&&G(t,u[0]),s&&Vs(s.update)&&h&1&&s.update.call(null,u[0])},i(u){a||(He(i.$$.fragment,u),a=!0)},o(u){$e(i.$$.fragment,u),a=!1},d(u){u&&g(e),Wt(i),o=!1,Kn(c)}}}function ed(n,e,t){let{id:r=""}=e;const i=()=>{Xs().trigger({message:`${r} copied to clipboard.`})};return n.$$set=s=>{"id"in s&&t(0,r=s.id)},[r,i]}class td extends dt{constructor(e){super(),ht(this,e,ed,$u,ut,{id:0})}}function nd(n){var M;let e,t,r,i,s,a,o,c=n[0].title+"",u,h,f,p=((M=n[0].authors)==null?void 0:M.join(", "))+"",m,y,T,D,N,V,F=(Et(n[0].updatedAt)||"???")+"",q,x,S;return D=new td({props:{id:n[0].id}}),{c(){e=_("div"),t=_("iframe"),s=R(),a=_("a"),o=_("p"),u=L(c),h=R(),f=_("p"),m=L(p),y=R(),T=_("div"),Bt(D.$$.fragment),N=R(),V=_("h4"),q=L(F),this.h()},l(v){e=b(v,"DIV",{class:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var C=I(e);t=b(C,"IFRAME",{title:!0,class:!0,width:!0,src:!0,allow:!0}),I(t).forEach(g),s=P(C),a=b(C,"A",{href:!0,class:!0});var w=I(a);o=b(w,"P",{class:!0});var A=I(o);u=U(A,c),A.forEach(g),h=P(w),f=b(w,"P",{class:!0});var j=I(f);m=U(j,p),j.forEach(g),y=P(w),T=b(w,"DIV",{class:!0});var W=I(T);zt(D.$$.fragment,W),N=P(W),V=b(W,"H4",{class:!0});var Y=I(V);q=U(Y,F),Y.forEach(g),W.forEach(g),w.forEach(g),C.forEach(g),this.h()},h(){l(t,"title",r=n[0].title),l(t,"class","card aspectTable svelte-cprdlx"),l(t,"width","352"),Ie(t.src,i=`https://www.youtube.com/embed/${n[0].youtubeId}`)||l(t,"src",i),l(t,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),t.allowFullscreen=!0,ne(t,"glow",n[2]),l(o,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden leading-4"),l(f,"class","text-ellipsis whitespace-nowrap overflow-hidden opacity-60 pb-1"),l(V,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),l(T,"class","flex justify-between"),l(a,"href",n[1]),l(a,"class","flex flex-col py-4"),l(e,"class","flex flex-col"),l(e,"id",x=n[0].id),l(e,"data-gameid",n[3]),l(e,"data-filetype","b2sFiles")},m(v,C){ie(v,e,C),d(e,t),d(e,s),d(e,a),d(a,o),d(o,u),d(a,h),d(a,f),d(f,m),d(a,y),d(a,T),jt(D,T,null),d(T,N),d(T,V),d(V,q),S=!0},p(v,[C]){var A;(!S||C&1&&r!==(r=v[0].title))&&l(t,"title",r),(!S||C&1&&!Ie(t.src,i=`https://www.youtube.com/embed/${v[0].youtubeId}`))&&l(t,"src",i),(!S||C&4)&&ne(t,"glow",v[2]),(!S||C&1)&&c!==(c=v[0].title+"")&&G(u,c),(!S||C&1)&&p!==(p=((A=v[0].authors)==null?void 0:A.join(", "))+"")&&G(m,p);const w={};C&1&&(w.id=v[0].id),D.$set(w),(!S||C&1)&&F!==(F=(Et(v[0].updatedAt)||"???")+"")&&G(q,F),(!S||C&2)&&l(a,"href",v[1]),(!S||C&1&&x!==(x=v[0].id))&&l(e,"id",x),(!S||C&8)&&l(e,"data-gameid",v[3])},i(v){S||(He(D.$$.fragment,v),S=!0)},o(v){$e(D.$$.fragment,v),S=!1},d(v){v&&g(e),Wt(D)}}}function rd(n,e,t){let{file:r=qs}=e,{href:i=""}=e,{active:s=!1}=e,{gameId:a}=e;return n.$$set=o=>{"file"in o&&t(0,r=o.file),"href"in o&&t(1,i=o.href),"active"in o&&t(2,s=o.active),"gameId"in o&&t(3,a=o.gameId)},[r,i,s,a]}class id extends dt{constructor(e){super(),ht(this,e,rd,nd,ut,{file:0,href:1,active:2,gameId:3})}}const Pd={game:{route:"games",name:"Games",component:qu},tableFiles:{route:"tables",name:"Tables",component:Zu},b2sFiles:{route:"b2s",name:"Backglasses",component:bu},pupPackFiles:{route:"puppacks",name:"PuP Packs",component:Ke,icon:xl},altColorFiles:{route:"coloredroms",name:"Colored Roms",component:Ke,icon:uu},altSoundFiles:{route:"altsounds",name:"Alt. Sounds",component:Ke,icon:lu},topperFiles:{route:"toppers",name:"Toppers",component:Ke,icon:Kl},romFiles:{route:"roms",name:"Roms",component:Ke,icon:eu},povFiles:{route:"pov",name:"POVs",component:Ke,icon:iu},soundFiles:{route:"sounds",name:"Sounds",component:Ke,icon:nu},mediaPackFiles:{route:"mediapacks",name:"Media Packs",component:Ke,icon:Jl},wheelArtFiles:{route:"wheelart",name:"Wheelart",component:Ke,icon:Ql},ruleFiles:{route:"rules",name:"Rules",component:Ke,icon:ci},tutorialFiles:{route:"tutorials",name:"Tutorials",component:id,icon:ci}};export{Rd as A,kd as B,bd as C,yd as D,pu as E,Rs as F,Cd as G,md as H,td as I,Ql as J,qn as P,Zu as T,Rr as U,Td as a,Zl as b,Ed as c,vd as d,Xe as e,ud as f,Xs as g,Id as h,hd as i,Ms as j,Xu as k,Mn as l,Pd as m,wd as n,Ks as o,yu as p,_d as q,ql as r,Zs as s,pd as t,dd as u,Sd as v,Os as w,Ad as x,gd as y,fd as z};
