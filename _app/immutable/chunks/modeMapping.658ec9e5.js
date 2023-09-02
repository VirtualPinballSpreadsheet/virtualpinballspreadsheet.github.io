import{J as tr,a2 as Mn,s as Ye,e as Lt,i as se,r as Jt,d as g,F as ye,G as Ee,h as w,j as c,W as st,H as f,C as ot,f as y,l as J,g as E,m as X,I as bt,Z as gs,a as H,c as V,U as pe,n as Q,a0 as Xt,_ as yn,k as ie,V as di,M as En,p as fi}from"./scheduler.4bea28c8.js";import{a as he,t as Te,S as Qe,i as Ze,g as nr,c as rr,b as It,d as wt,m as yt,e as Et,o as at}from"./index.10be7516.js";import{l as hi,i as nn,j as rn,D as Ut,k as pi,n as vs,o as _s,E as bs,q as Is,f as Rt,d as Nn,m as ws,c as mi}from"./formatDate.6aa4704f.js";import{_ as br}from"./preload-helper.a4192956.js";import{w as gi}from"./index.56f04d27.js";function Fe(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ys(n,e){Te(n,1,1,()=>{e.delete(n.key)})}function Hu(n,e){n.f(),ys(n,e)}function Vu(n,e,t,r,i,s,a,o,l,d,h,p){let u=n.length,m=s.length,_=u;const A={};for(;_--;)A[n[_].key]=_;const O=[],b=new Map,P=new Map,C=[];for(_=m;_--;){const k=p(i,s,_),T=t(k);let U=a.get(T);U?r&&C.push(()=>U.p(k,e)):(U=d(T,k),U.c()),b.set(T,O[_]=U),T in A&&P.set(T,Math.abs(_-A[T]))}const F=new Set,S=new Set;function M(k){he(k,1),k.m(o,h),a.set(k.key,k),h=k.first,m--}for(;u&&m;){const k=O[m-1],T=n[u-1],U=k.key,v=T.key;k===T?(h=k.first,u--,m--):b.has(v)?!a.has(U)||F.has(U)?M(k):S.has(v)?u--:P.get(U)>P.get(v)?(S.add(U),M(k)):(F.add(v),u--):(l(T,a),u--)}for(;u--;){const k=n[u];b.has(k.key)||l(k,a)}for(;m;)M(O[m-1]);return tr(C),O}function Fu(n){const e=n-1;return e*e*e+1}function Tn(n){return n/=.5,n<1?.5*n*n:(n--,-.5*(n*(n-2)-1))}/**
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
 */const vi=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Es=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],o=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},_i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,o=a?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,h=s>>2,p=(s&3)<<4|o>>4;let u=(o&15)<<2|d>>6,m=d&63;l||(m=64,a||(u=64)),r.push(t[h],t[p],t[u],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Es(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],o=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||o==null||d==null||p==null)throw new Ts;const u=s<<2|o>>4;if(r.push(u),d!==64){const m=o<<4&240|d>>2;if(r.push(m),p!==64){const _=d<<6&192|p;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ts extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cs=function(n){const e=vi(n);return _i.encodeByteArray(e,!0)},bi=function(n){return Cs(n).replace(/\./g,"")},Ii=function(n){try{return _i.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ss(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ks=()=>Ss().__FIREBASE_DEFAULTS__,As=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rs=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ii(n[1]);return e&&JSON.parse(e)},ir=()=>{try{return ks()||As()||Rs()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ps=n=>{var e,t;return(t=(e=ir())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},wi=()=>{var n;return(n=ir())===null||n===void 0?void 0:n.config},yi=n=>{var e;return(e=ir())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ds{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Os(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function Ms(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ns(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ls(){const n=me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Us(){try{return typeof indexedDB=="object"}catch{return!1}}function Hs(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Vs="FirebaseError";class ut extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Vs,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sn.prototype.create)}}class sn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Fs(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new ut(i,o,r)}}function Fs(n,e){return n.replace(Bs,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Bs=/\{\$([^}]+)}/g;function zs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Ir(s)&&Ir(a)){if(!Cn(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ir(n){return n!==null&&typeof n=="object"}/**
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
 */function an(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function js(n,e){const t=new Ws(n,e);return t.subscribe.bind(t)}class Ws{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Gs(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Fn),i.error===void 0&&(i.error=Fn),i.complete===void 0&&(i.complete=Fn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gs(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Fn(){}/**
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
 */function St(n){return n&&n._delegate?n._delegate:n}class Ht{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gt="[DEFAULT]";/**
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
 */class xs{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ds;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ks(e))try{this.getOrInitializeService({instanceIdentifier:gt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gt){return this.instances.has(e)}getOptions(e=gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qs(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gt){return this.component?this.component.multipleInstances?e:gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qs(n){return n===gt?void 0:n}function Ks(n){return n.instantiationMode==="EAGER"}/**
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
 */class Js{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xs(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const Xs={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Ys=te.INFO,Qs={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Zs=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Qs[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ei{constructor(e){this.name=e,this._logLevel=Ys,this._logHandler=Zs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const $s=(n,e)=>e.some(t=>n instanceof t);let wr,yr;function ea(){return wr||(wr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ta(){return yr||(yr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ti=new WeakMap,qn=new WeakMap,Ci=new WeakMap,Bn=new WeakMap,sr=new WeakMap;function na(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(lt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ti.set(t,n)}).catch(()=>{}),sr.set(e,n),e}function ra(n){if(qn.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});qn.set(n,e)}let Kn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ci.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return lt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ia(n){Kn=n(Kn)}function sa(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(zn(this),e,...t);return Ci.set(r,e.sort?e.sort():[e]),lt(r)}:ta().includes(n)?function(...e){return n.apply(zn(this),e),lt(Ti.get(this))}:function(...e){return lt(n.apply(zn(this),e))}}function aa(n){return typeof n=="function"?sa(n):(n instanceof IDBTransaction&&ra(n),$s(n,ea())?new Proxy(n,Kn):n)}function lt(n){if(n instanceof IDBRequest)return na(n);if(Bn.has(n))return Bn.get(n);const e=aa(n);return e!==n&&(Bn.set(n,e),sr.set(e,n)),e}const zn=n=>sr.get(n);function oa(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),o=lt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(lt(a.result),l.oldVersion,l.newVersion,lt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),o}const la=["get","getKey","getAll","getAllKeys","count"],ca=["put","add","delete","clear"],jn=new Map;function Er(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jn.get(e))return jn.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=ca.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||la.includes(t)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(o.shift())),(await Promise.all([d[t](...o),i&&l.done]))[0]};return jn.set(e,s),s}ia(n=>({...n,get:(e,t,r)=>Er(e,t)||n.get(e,t,r),has:(e,t)=>!!Er(e,t)||n.has(e,t)}));/**
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
 */class ua{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(da(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function da(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jn="@firebase/app",Tr="0.9.15";/**
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
 */const Tt=new Ei("@firebase/app"),fa="@firebase/app-compat",ha="@firebase/analytics-compat",pa="@firebase/analytics",ma="@firebase/app-check-compat",ga="@firebase/app-check",va="@firebase/auth",_a="@firebase/auth-compat",ba="@firebase/database",Ia="@firebase/database-compat",wa="@firebase/functions",ya="@firebase/functions-compat",Ea="@firebase/installations",Ta="@firebase/installations-compat",Ca="@firebase/messaging",Sa="@firebase/messaging-compat",ka="@firebase/performance",Aa="@firebase/performance-compat",Ra="@firebase/remote-config",Pa="@firebase/remote-config-compat",Da="@firebase/storage",Oa="@firebase/storage-compat",Ma="@firebase/firestore",Na="@firebase/firestore-compat",La="firebase",Ua="10.1.0";/**
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
 */const Xn="[DEFAULT]",Ha={[Jn]:"fire-core",[fa]:"fire-core-compat",[pa]:"fire-analytics",[ha]:"fire-analytics-compat",[ga]:"fire-app-check",[ma]:"fire-app-check-compat",[va]:"fire-auth",[_a]:"fire-auth-compat",[ba]:"fire-rtdb",[Ia]:"fire-rtdb-compat",[wa]:"fire-fn",[ya]:"fire-fn-compat",[Ea]:"fire-iid",[Ta]:"fire-iid-compat",[Ca]:"fire-fcm",[Sa]:"fire-fcm-compat",[ka]:"fire-perf",[Aa]:"fire-perf-compat",[Ra]:"fire-rc",[Pa]:"fire-rc-compat",[Da]:"fire-gcs",[Oa]:"fire-gcs-compat",[Ma]:"fire-fst",[Na]:"fire-fst-compat","fire-js":"fire-js",[La]:"fire-js-all"};/**
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
 */const Sn=new Map,Yn=new Map;function Va(n,e){try{n.container.addComponent(e)}catch(t){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Yt(n){const e=n.name;if(Yn.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;Yn.set(e,n);for(const t of Sn.values())Va(t,n);return!0}function Si(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Fa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ct=new sn("app","Firebase",Fa);/**
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
 */class Ba{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ct.create("app-deleted",{appName:this._name})}}/**
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
 */const on=Ua;function ki(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ct.create("bad-app-name",{appName:String(i)});if(t||(t=wi()),!t)throw ct.create("no-options");const s=Sn.get(i);if(s){if(Cn(t,s.options)&&Cn(r,s.config))return s;throw ct.create("duplicate-app",{appName:i})}const a=new Js(i);for(const l of Yn.values())a.addComponent(l);const o=new Ba(t,r,a);return Sn.set(i,o),o}function za(n=Xn){const e=Sn.get(n);if(!e&&n===Xn&&wi())return ki();if(!e)throw ct.create("no-app",{appName:n});return e}function Ot(n,e,t){var r;let i=(r=Ha[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tt.warn(o.join(" "));return}Yt(new Ht(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ja="firebase-heartbeat-database",Wa=1,Qt="firebase-heartbeat-store";let Wn=null;function Ai(){return Wn||(Wn=oa(ja,Wa,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Qt)}}}).catch(n=>{throw ct.create("idb-open",{originalErrorMessage:n.message})})),Wn}async function Ga(n){try{return await(await Ai()).transaction(Qt).objectStore(Qt).get(Ri(n))}catch(e){if(e instanceof ut)Tt.warn(e.message);else{const t=ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tt.warn(t.message)}}}async function Cr(n,e){try{const r=(await Ai()).transaction(Qt,"readwrite");await r.objectStore(Qt).put(e,Ri(n)),await r.done}catch(t){if(t instanceof ut)Tt.warn(t.message);else{const r=ct.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tt.warn(r.message)}}}function Ri(n){return`${n.name}!${n.options.appId}`}/**
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
 */const xa=1024,qa=30*24*60*60*1e3;class Ka{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xa(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=qa}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sr(),{heartbeatsToSend:t,unsentEntries:r}=Ja(this._heartbeatsCache.heartbeats),i=bi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sr(){return new Date().toISOString().substring(0,10)}function Ja(n,e=xa){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),kr(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),kr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Xa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Us()?Hs().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ga(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function kr(n){return bi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ya(n){Yt(new Ht("platform-logger",e=>new ua(e),"PRIVATE")),Yt(new Ht("heartbeat",e=>new Ka(e),"PRIVATE")),Ot(Jn,Tr,n),Ot(Jn,Tr,"esm2017"),Ot("fire-js","")}Ya("");var Qa="firebase",Za="10.1.0";/**
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
 */Ot(Qa,Za,"app");function ar(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Pi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $a=Pi,Di=new sn("auth","Firebase",Pi());/**
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
 */const kn=new Ei("@firebase/auth");function eo(n,...e){kn.logLevel<=te.WARN&&kn.warn(`Auth (${on}): ${n}`,...e)}function _n(n,...e){kn.logLevel<=te.ERROR&&kn.error(`Auth (${on}): ${n}`,...e)}/**
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
 */function je(n,...e){throw or(n,...e)}function Be(n,...e){return or(n,...e)}function Oi(n,e,t){const r=Object.assign(Object.assign({},$a()),{[e]:t});return new sn("auth","Firebase",r).create(e,{appName:n.name})}function to(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&je(n,"argument-error"),Oi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function or(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Di.create(n,...e)}function j(n,e,...t){if(!n)throw or(e,...t)}function Ke(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _n(e),new Error(e)}function Xe(n,e){n||Ke(e)}/**
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
 */function Qn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function no(){return Ar()==="http:"||Ar()==="https:"}function Ar(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ro(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(no()||Ms()||"connection"in navigator)?navigator.onLine:!0}function io(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ln{constructor(e,t){this.shortDelay=e,this.longDelay=t,Xe(t>e,"Short delay should be less than long delay!"),this.isMobile=Os()||Ns()}get(){return ro()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function lr(n,e){Xe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Mi{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const so={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ao=new ln(3e4,6e4);function Ni(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function cn(n,e,t,r,i={}){return Li(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=an(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Mi.fetch()(Ui(n,n.config.apiHost,t,o),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Li(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},so),e);try{const i=new lo(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw hn(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,d]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hn(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw hn(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw hn(n,"user-disabled",a);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Oi(n,h,d);je(n,h)}}catch(i){if(i instanceof ut)throw i;je(n,"network-request-failed",{message:String(i)})}}async function oo(n,e,t,r,i={}){const s=await cn(n,e,t,r,i);return"mfaPendingCredential"in s&&je(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Ui(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?lr(n.config,i):`${n.config.apiScheme}://${i}`}class lo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),ao.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hn(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Be(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function co(n,e){return cn(n,"POST","/v1/accounts:delete",e)}async function uo(n,e){return cn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Kt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fo(n,e=!1){const t=St(n),r=await t.getIdToken(e),i=cr(r);j(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Kt(Gn(i.auth_time)),issuedAtTime:Kt(Gn(i.iat)),expirationTime:Kt(Gn(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Gn(n){return Number(n)*1e3}function cr(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return _n("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ii(t);return i?JSON.parse(i):(_n("Failed to decode base64 JWT payload"),null)}catch(i){return _n("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ho(n){const e=cr(n);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ut&&po(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function po({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class mo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Hi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kt(this.lastLoginAt),this.creationTime=Kt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function An(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Zt(n,uo(t,{idToken:r}));j(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_o(s.providerUserInfo):[],o=vo(n.providerData,a),l=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?d:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Hi(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function go(n){const e=St(n);await An(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vo(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _o(n){return n.map(e=>{var{providerId:t}=e,r=ar(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function bo(n,e){const t=await Li(n,{},async()=>{const r=an({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Ui(n,i,"/v1/token",`key=${s}`),o=await n._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Mi.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class $t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ho(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await bo(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new $t;return r&&(j(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $t,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
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
 */function tt(n,e){j(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class _t{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ar(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Zt(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fo(this,e)}reload(){return go(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await An(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zt(this,co(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,o,l,d,h;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,u=(i=t.email)!==null&&i!==void 0?i:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,_=(a=t.photoURL)!==null&&a!==void 0?a:void 0,A=(o=t.tenantId)!==null&&o!==void 0?o:void 0,O=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,b=(d=t.createdAt)!==null&&d!==void 0?d:void 0,P=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:C,emailVerified:F,isAnonymous:S,providerData:M,stsTokenManager:k}=t;j(C&&k,e,"internal-error");const T=$t.fromJSON(this.name,k);j(typeof C=="string",e,"internal-error"),tt(p,e.name),tt(u,e.name),j(typeof F=="boolean",e,"internal-error"),j(typeof S=="boolean",e,"internal-error"),tt(m,e.name),tt(_,e.name),tt(A,e.name),tt(O,e.name),tt(b,e.name),tt(P,e.name);const U=new _t({uid:C,auth:e,email:u,emailVerified:F,displayName:p,isAnonymous:S,photoURL:_,phoneNumber:m,tenantId:A,stsTokenManager:T,createdAt:b,lastLoginAt:P});return M&&Array.isArray(M)&&(U.providerData=M.map(v=>Object.assign({},v))),O&&(U._redirectEventId=O),U}static async _fromIdTokenResponse(e,t,r=!1){const i=new $t;i.updateFromServerResponse(t);const s=new _t({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await An(s),s}}/**
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
 */const Rr=new Map;function Je(n){Xe(n instanceof Function,"Expected a class definition");let e=Rr.get(n);return e?(Xe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Rr.set(n,e),e)}/**
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
 */class Vi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vi.type="NONE";const Pr=Vi;/**
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
 */function bn(n,e,t){return`firebase:${n}:${e}:${t}`}class Mt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bn(this.userKey,i.apiKey,s),this.fullPersistenceKey=bn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Mt(Je(Pr),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Je(Pr);const a=bn(r,e.config.apiKey,e.name);let o=null;for(const d of t)try{const h=await d._get(a);if(h){const p=_t._fromJSON(e,h);d!==s&&(o=p),s=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Mt(s,e,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new Mt(s,e,r))}}/**
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
 */function Dr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wi(e))return"Blackberry";if(Gi(e))return"Webos";if(ur(e))return"Safari";if((e.includes("chrome/")||Bi(e))&&!e.includes("edge/"))return"Chrome";if(ji(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fi(n=me()){return/firefox\//i.test(n)}function ur(n=me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bi(n=me()){return/crios\//i.test(n)}function zi(n=me()){return/iemobile/i.test(n)}function ji(n=me()){return/android/i.test(n)}function Wi(n=me()){return/blackberry/i.test(n)}function Gi(n=me()){return/webos/i.test(n)}function Ln(n=me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Io(n=me()){var e;return Ln(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wo(){return Ls()&&document.documentMode===10}function xi(n=me()){return Ln(n)||ji(n)||Gi(n)||Wi(n)||/windows phone/i.test(n)||zi(n)}function yo(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function qi(n,e=[]){let t;switch(n){case"Browser":t=Dr(me());break;case"Worker":t=`${Dr(me())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${on}/${r}`}async function Ki(n,e){return cn(n,"GET","/v2/recaptchaConfig",Ni(n,e))}function Or(n){return n!==void 0&&n.enterprise!==void 0}class Ji{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function Eo(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Xi(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Be("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Eo().appendChild(r)})}function To(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Co="https://www.google.com/recaptcha/enterprise.js?render=",So="recaptcha-enterprise",ko="NO_RECAPTCHA";class Ao{constructor(e){this.type=So,this.auth=un(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{Ki(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const d=new Ji(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{o(l)})})}function i(s,a,o){const l=window.grecaptcha;Or(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(ko)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!t&&Or(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}Xi(Co+o).then(()=>{i(o,s,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}/**
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
 */class Ro{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,o)=>{try{const l=e(s);a(l)}catch(l){o(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Po{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mr(this),this.idTokenSubscription=new Mr(this),this.beforeStateQueue=new Ro(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Di,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Je(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,o=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===o)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await An(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=io()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?St(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}async initializeRecaptchaConfig(){const e=await Ki(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ji(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Ao(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new sn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Je(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await Mt.create(this,[Je(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return j(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&eo(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function un(n){return St(n)}class Mr{constructor(e){this.auth=e,this.observer=null,this.addObserver=js(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Do(n,e){const t=Si(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Cn(s,e??{}))return i;je(i,"already-initialized")}return t.initialize({options:e})}function Oo(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Je);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Mo(n,e,t){const r=un(n);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Yi(e),{host:a,port:o}=No(e),l=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Lo()}function Yi(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function No(n){const e=Yi(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nr(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Nr(a)}}}function Nr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Lo(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Qi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,t){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}/**
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
 */async function Nt(n,e){return oo(n,"POST","/v1/accounts:signInWithIdp",Ni(n,e))}/**
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
 */const Uo="http://localhost";class Ct extends Qi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ar(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ct(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Nt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Nt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nt(e,t)}buildRequest(){const e={requestUri:Uo,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=an(t)}return e}}/**
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
 */class dr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dn extends dr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class nt extends dn{constructor(){super("facebook.com")}static credential(e){return Ct._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch{return null}}}nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";nt.PROVIDER_ID="facebook.com";/**
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
 */class rt extends dn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ct._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return rt.credential(t,r)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
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
 */class Ve extends dn{constructor(){super("github.com")}static credential(e){return Ct._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.GITHUB_SIGN_IN_METHOD="github.com";Ve.PROVIDER_ID="github.com";/**
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
 */class it extends dn{constructor(){super("twitter.com")}static credential(e,t){return Ct._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return it.credential(t,r)}catch{return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com";it.PROVIDER_ID="twitter.com";/**
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
 */class Vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await _t._fromIdTokenResponse(e,r,i),a=Lr(r);return new Vt({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Lr(r);return new Vt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Lr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Rn extends ut{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Rn(e,t,r,i)}}function Zi(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rn._fromErrorAndOperation(n,s,e,r):s})}async function Ho(n,e,t=!1){const r=await Zt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vt._forOperation(n,"link",r)}/**
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
 */async function Vo(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Zt(n,Zi(r,i,e,n),t);j(s.idToken,r,"internal-error");const a=cr(s.idToken);j(a,r,"internal-error");const{sub:o}=a;return j(n.uid===o,r,"user-mismatch"),Vt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&je(r,"user-mismatch"),s}}/**
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
 */async function Fo(n,e,t=!1){const r="signIn",i=await Zi(n,r,e),s=await Vt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function Bo(n,e,t,r){return St(n).onIdTokenChanged(e,t,r)}function zo(n,e,t){return St(n).beforeAuthStateChanged(e,t)}function jo(n){return St(n).signOut()}const Pn="__sak";/**
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
 */class $i{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pn,"1"),this.storage.removeItem(Pn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Wo(){const n=me();return ur(n)||Ln(n)}const Go=1e3,xo=10;class es extends $i{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Wo()&&yo(),this.fallbackToPolling=xi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);wo()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xo):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Go)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}es.type="LOCAL";const qo=es;/**
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
 */class ts extends $i{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ts.type="SESSION";const ns=ts;/**
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
 */function Ko(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Un{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Un(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async d=>d(t.origin,s)),l=await Ko(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Un.receivers=[];/**
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
 */function fr(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Jo{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const d=fr("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(p){const u=p;if(u.data.eventId===d)switch(u.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(u.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ze(){return window}function Xo(n){ze().location.href=n}/**
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
 */function rs(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function Yo(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qo(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Zo(){return rs()?self:null}/**
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
 */const is="firebaseLocalStorageDb",$o=1,Dn="firebaseLocalStorage",ss="fbase_key";class fn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hn(n,e){return n.transaction([Dn],e?"readwrite":"readonly").objectStore(Dn)}function el(){const n=indexedDB.deleteDatabase(is);return new fn(n).toPromise()}function Zn(){const n=indexedDB.open(is,$o);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Dn,{keyPath:ss})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Dn)?e(r):(r.close(),await el(),e(await Zn()))})})}async function Ur(n,e,t){const r=Hn(n,!0).put({[ss]:e,value:t});return new fn(r).toPromise()}async function tl(n,e){const t=Hn(n,!1).get(e),r=await new fn(t).toPromise();return r===void 0?null:r.value}function Hr(n,e){const t=Hn(n,!0).delete(e);return new fn(t).toPromise()}const nl=800,rl=3;class as{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>rl)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Un._getInstance(Zo()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Yo(),!this.activeServiceWorker)return;this.sender=new Jo(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Qo()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zn();return await Ur(e,Pn,"1"),await Hr(e,Pn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ur(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>tl(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hn(i,!1).getAll();return new fn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}as.type="LOCAL";const il=as;new ln(3e4,6e4);/**
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
 */function os(n,e){return e?Je(e):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class hr extends Qi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Nt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function sl(n){return Fo(n.auth,new hr(n),n.bypassAuthState)}function al(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),Vo(t,new hr(n),n.bypassAuthState)}async function ol(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),Ho(t,new hr(n),n.bypassAuthState)}/**
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
 */class ls{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sl;case"linkViaPopup":case"linkViaRedirect":return ol;case"reauthViaPopup":case"reauthViaRedirect":return al;default:je(this.auth,"internal-error")}}resolve(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ll=new ln(2e3,1e4);async function cl(n,e,t){const r=un(n);to(n,e,dr);const i=os(r,t);return new vt(r,"signInViaPopup",e,i).executeNotNull()}class vt extends ls{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vt.currentPopupAction&&vt.currentPopupAction.cancel(),vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Xe(this.filter.length===1,"Popup operations only handle one event");const e=fr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ll.get())};e()}}vt.currentPopupAction=null;/**
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
 */const ul="pendingRedirect",In=new Map;class dl extends ls{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=In.get(this.auth._key());if(!e){try{const r=await fl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}In.set(this.auth._key(),e)}return this.bypassAuthState||In.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fl(n,e){const t=ml(e),r=pl(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function hl(n,e){In.set(n._key(),e)}function pl(n){return Je(n._redirectPersistence)}function ml(n){return bn(ul,n.config.apiKey,n.name)}async function gl(n,e,t=!1){const r=un(n),i=os(r,e),a=await new dl(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const vl=10*60*1e3;class _l{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bl(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!cs(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Be(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vl&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vr(e))}saveEventToCache(e){this.cachedEventUids.add(Vr(e)),this.lastProcessedEventTime=Date.now()}}function Vr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function cs({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bl(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cs(n);default:return!1}}/**
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
 */async function Il(n,e={}){return cn(n,"GET","/v1/projects",e)}/**
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
 */const wl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yl=/^https?/;async function El(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Il(n);for(const t of e)try{if(Tl(t))return}catch{}je(n,"unauthorized-domain")}function Tl(n){const e=Qn(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!yl.test(t))return!1;if(wl.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Cl=new ln(3e4,6e4);function Fr(){const n=ze().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Sl(n){return new Promise((e,t)=>{var r,i,s;function a(){Fr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fr(),t(Be(n,"network-request-failed"))},timeout:Cl.get()})}if(!((i=(r=ze().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ze().gapi)===null||s===void 0)&&s.load)a();else{const o=To("iframefcb");return ze()[o]=()=>{gapi.load?a():t(Be(n,"network-request-failed"))},Xi(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw wn=null,e})}let wn=null;function kl(n){return wn=wn||Sl(n),wn}/**
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
 */const Al=new ln(5e3,15e3),Rl="__/auth/iframe",Pl="emulator/auth/iframe",Dl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ol=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ml(n){const e=n.config;j(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?lr(e,Pl):`https://${n.config.authDomain}/${Rl}`,r={apiKey:e.apiKey,appName:n.name,v:on},i=Ol.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${an(r).slice(1)}`}async function Nl(n){const e=await kl(n),t=ze().gapi;return j(t,n,"internal-error"),e.open({where:document.body,url:Ml(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dl,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Be(n,"network-request-failed"),o=ze().setTimeout(()=>{s(a)},Al.get());function l(){ze().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const Ll={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ul=500,Hl=600,Vl="_blank",Fl="http://localhost";class Br{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bl(n,e,t,r=Ul,i=Hl){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},Ll),{width:r.toString(),height:i.toString(),top:s,left:a}),d=me().toLowerCase();t&&(o=Bi(d)?Vl:t),Fi(d)&&(e=e||Fl,l.scrollbars="yes");const h=Object.entries(l).reduce((u,[m,_])=>`${u}${m}=${_},`,"");if(Io(d)&&o!=="_self")return zl(e||"",o),new Br(null);const p=window.open(e||"",o,h);j(p,n,"popup-blocked");try{p.focus()}catch{}return new Br(p)}function zl(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const jl="__/auth/handler",Wl="emulator/auth/handler",Gl=encodeURIComponent("fac");async function zr(n,e,t,r,i,s){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:on,eventId:i};if(e instanceof dr){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",zs(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries(s||{}))a[h]=p}if(e instanceof dn){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(a.scopes=h.join(","))}n.tenantId&&(a.tid=n.tenantId);const o=a;for(const h of Object.keys(o))o[h]===void 0&&delete o[h];const l=await n._getAppCheckToken(),d=l?`#${Gl}=${encodeURIComponent(l)}`:"";return`${xl(n)}?${an(o).slice(1)}${d}`}function xl({config:n}){return n.emulator?lr(n,Wl):`https://${n.authDomain}/${jl}`}/**
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
 */const xn="webStorageSupport";class ql{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ns,this._completeRedirectFn=gl,this._overrideRedirectResult=hl}async _openPopup(e,t,r,i){var s;Xe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await zr(e,t,r,Qn(),i);return Bl(e,a,fr())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await zr(e,t,r,Qn(),i);return Xo(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Xe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Nl(e),r=new _l(e);return t.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xn,{type:xn},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xn];a!==void 0&&t(!!a),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=El(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xi()||ur()||Ln()}}const Kl=ql;var jr="@firebase/auth",Wr="1.1.0";/**
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
 */class Jl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Xl(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Yl(n){Yt(new Ht("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qi(n)},d=new Po(r,i,s,l);return Oo(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Yt(new Ht("auth-internal",e=>{const t=un(e.getProvider("auth").getImmediate());return(r=>new Jl(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(jr,Wr,Xl(n)),Ot(jr,Wr,"esm2017")}/**
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
 */const Ql=5*60,Zl=yi("authIdTokenMaxAge")||Ql;let Gr=null;const $l=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Zl)return;const i=t==null?void 0:t.token;Gr!==i&&(Gr=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ec(n=za()){const e=Si(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Do(n,{popupRedirectResolver:Kl,persistence:[il,qo,ns]}),r=yi("authTokenSyncURL");if(r){const s=$l(r);zo(t,s,()=>s(t.currentUser)),Bo(t,a=>s(a))}const i=Ps("auth");return i&&Mo(t,`http://${i}`),t}Yl("Browser");const tc={apiKey:"AIzaSyAjCRLDHuTkfnKU5TTV6ZZasUXecSvlQOE",authDomain:"virtual-pinball-spreadsh-71a64.firebaseapp.com",projectId:"virtual-pinball-spreadsh-71a64",appId:"1:497322440319:web:8a7f7a2997664a9af7f14a",measurementId:"G-DB48L7QGX0"},nc=ki(tc),us=ec(nc),Vn=hi("user",{}),pr=gi([]);let en;const rc=()=>{const n=new Ve;return n.addScope("public_repo"),n.setCustomParameters({allow_signup:"false"}),new Promise(e=>{cl(us,n).then(async t=>{const r=Ve.credentialFromResult(t),i=t.user;if(i.displayName=t._tokenResponse.screenName,!(r!=null&&r.accessToken))throw new Error;e(mr(r.accessToken,i))}).catch(t=>{console.error(t),e(!1)})})},mr=async(n,e)=>{try{const{Octokit:t}=await br(()=>import("https://esm.sh/octokit"),[],import.meta.url),{createOrUpdateTextFile:r}=await br(()=>import("https://esm.sh/@octokit/plugin-create-or-update-text-file"),[],import.meta.url),i=t.plugin(r),s=new i({auth:n}),o=(await s.request("GET /repos/{owner}/{repo}/collaborators/{username}/permission",{owner:nn,username:e.displayName,repo:rn})).data.permission,l=o==="admin"||o==="write"||location.hostname==="localhost"||location.hostname==="127.0.0.1";return Vn.set({user:e,permission:o,token:n,admin:l}),en=s,(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.octokit=s),l&&await fs(),!0}catch(t){return console.error(t),await ds(),!1}},ds=()=>new Promise(n=>{jo(us).then(()=>{Vn.set({}),n()})}),ic=async(n,e)=>{const t=`${vs}${e}_${new Date().getTime()}.webp`,r=await oc(n);let i;try{i=(await en.request(`GET /repos/{owner}/{repo}/contents/${t}`,{owner:nn,repo:rn})).data.sha}catch{}try{const s=await en.rest.repos.createOrUpdateFileContents({owner:"VirtualPinballSpreadsheet",repo:"vps-db",path:t,sha:i,content:r,message:`IMAGE:${e} - updated image`});return`https://virtualpinballspreadsheet.github.io/vps-db/${t}`}catch(s){console.error(s);return}},sc=async n=>{try{const e=await en.createOrUpdateTextFile({owner:nn,repo:rn,branch:pi,path:`${_s}${n.id}.json`,content:JSON.stringify(n),message:`GAME:${n.id} - Updated ${n.name}`});return pr.update(t=>{var r;return[...t,{author:((r=Mn(gr.userStore).user)==null?void 0:r.displayName)||"???",id:n.id,updatedAt:new Date().toISOString()}]}),!0}catch(e){return console.error(e),!1}},ac=async()=>{try{const n=await en.createOrUpdateTextFile({owner:nn,repo:rn,path:"lastUpdated.json",content:JSON.stringify(new Date().getTime()),message:"UPDATE DB"});return!0}catch(n){return console.error(n),!1}},fs=async()=>{try{await Ut.fetchDb();let e=await(await fetch(`https://api.github.com/repos/${nn}/${rn}/commits?sha=${pi}&since=${new Date(Mn(Ut.lastUpdated))}`)).json();e=e.filter(t=>{var r,i;return(i=(r=t==null?void 0:t.commit)==null?void 0:r.message)==null?void 0:i.includes("GAME:")}).map(t=>{var r,i,s,a,o,l,d,h,p;return{author:(i=(r=t==null?void 0:t.commit)==null?void 0:r.author)==null?void 0:i.name,id:(d=(l=(o=(a=(s=t==null?void 0:t.commit)==null?void 0:s.message)==null?void 0:a.split(" - "))==null?void 0:o[0])==null?void 0:l.split(":"))==null?void 0:d[1],updatedAt:(p=(h=t==null?void 0:t.commit)==null?void 0:h.author)==null?void 0:p.date}}),pr.set(e)}catch{}};(async()=>{const n=Mn(Vn),{user:e,token:t}=n;t&&e&&mr(t,e)})();const gr={login:mr,logout:ds,triggerLoginPopup:rc,uploadImage:ic,uploadGameFile:sc,updateDb:ac,getUnpublishedChanges:fs,userStore:Vn,unpublishedChanges:pr},oc=n=>new Promise((e,t)=>{const r=new FileReader;r.onload=function(){const s=r.result.split(",")[1];e(s)},r.readAsDataURL(n)}),pn=parseFloat;function $n(n,e=";"){let t;if(Array.isArray(n))t=n.filter(r=>r);else{t=[];for(const r in n)n[r]&&t.push(`${r}:${n[r]}`)}return t.join(e)}function lc(n,e,t,r){let i,s;const a="1em";let o,l,d,h="-.125em";const p="visible";return r&&(d="center",s="1.25em"),t&&(i=t),e&&(e=="lg"?(l="1.33333em",o=".75em",h="-.225em"):e=="xs"?l=".75em":e=="sm"?l=".875em":l=e.replace("x","em")),$n([$n({float:i,width:s,height:a,"line-height":o,"font-size":l,"text-align":d,"vertical-align":h,"transform-origin":"center",overflow:p}),n])}function cc(n,e,t,r,i,s=1,a="",o=""){let l=1,d=1;return i&&(i=="horizontal"?l=-1:i=="vertical"?d=-1:l=d=-1),$n([`translate(${pn(e)*s}${a},${pn(t)*s}${a})`,`scale(${l*pn(n)},${d*pn(n)})`,r&&`rotate(${r}${o})`]," ")}function xr(n){let e,t,r,i,s,a,o,l;function d(u,m){return typeof u[10][4]=="string"?dc:uc}let h=d(n),p=h(n);return{c(){e=ye("svg"),t=ye("g"),r=ye("g"),p.c(),this.h()},l(u){e=Ee(u,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var m=w(e);t=Ee(m,"g",{transform:!0,"transform-origin":!0});var _=w(t);r=Ee(_,"g",{transform:!0});var A=w(r);p.l(A),A.forEach(g),_.forEach(g),m.forEach(g),this.h()},h(){c(r,"transform",n[12]),c(t,"transform",i="translate("+n[10][0]/2+" "+n[10][1]/2+")"),c(t,"transform-origin",s=n[10][0]/4+" 0"),c(e,"id",a=n[1]||void 0),c(e,"class",o="svelte-fa "+n[0]+" svelte-1cj2gr0"),c(e,"style",n[11]),c(e,"viewBox",l="0 0 "+n[10][0]+" "+n[10][1]),c(e,"aria-hidden","true"),c(e,"role","img"),c(e,"xmlns","http://www.w3.org/2000/svg"),st(e,"pulse",n[4]),st(e,"spin",n[3])},m(u,m){se(u,e,m),f(e,t),f(t,r),p.m(r,null)},p(u,m){h===(h=d(u))&&p?p.p(u,m):(p.d(1),p=h(u),p&&(p.c(),p.m(r,null))),m&4096&&c(r,"transform",u[12]),m&1024&&i!==(i="translate("+u[10][0]/2+" "+u[10][1]/2+")")&&c(t,"transform",i),m&1024&&s!==(s=u[10][0]/4+" 0")&&c(t,"transform-origin",s),m&2&&a!==(a=u[1]||void 0)&&c(e,"id",a),m&1&&o!==(o="svelte-fa "+u[0]+" svelte-1cj2gr0")&&c(e,"class",o),m&2048&&c(e,"style",u[11]),m&1024&&l!==(l="0 0 "+u[10][0]+" "+u[10][1])&&c(e,"viewBox",l),m&17&&st(e,"pulse",u[4]),m&9&&st(e,"spin",u[3])},d(u){u&&g(e),p.d()}}}function uc(n){let e,t,r,i,s,a,o,l,d,h;return{c(){e=ye("path"),a=ye("path"),this.h()},l(p){e=Ee(p,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),w(e).forEach(g),a=Ee(p,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),w(a).forEach(g),this.h()},h(){c(e,"d",t=n[10][4][0]),c(e,"fill",r=n[6]||n[2]||"currentColor"),c(e,"fill-opacity",i=n[9]!=!1?n[7]:n[8]),c(e,"transform",s="translate("+n[10][0]/-2+" "+n[10][1]/-2+")"),c(a,"d",o=n[10][4][1]),c(a,"fill",l=n[5]||n[2]||"currentColor"),c(a,"fill-opacity",d=n[9]!=!1?n[8]:n[7]),c(a,"transform",h="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")},m(p,u){se(p,e,u),se(p,a,u)},p(p,u){u&1024&&t!==(t=p[10][4][0])&&c(e,"d",t),u&68&&r!==(r=p[6]||p[2]||"currentColor")&&c(e,"fill",r),u&896&&i!==(i=p[9]!=!1?p[7]:p[8])&&c(e,"fill-opacity",i),u&1024&&s!==(s="translate("+p[10][0]/-2+" "+p[10][1]/-2+")")&&c(e,"transform",s),u&1024&&o!==(o=p[10][4][1])&&c(a,"d",o),u&36&&l!==(l=p[5]||p[2]||"currentColor")&&c(a,"fill",l),u&896&&d!==(d=p[9]!=!1?p[8]:p[7])&&c(a,"fill-opacity",d),u&1024&&h!==(h="translate("+p[10][0]/-2+" "+p[10][1]/-2+")")&&c(a,"transform",h)},d(p){p&&(g(e),g(a))}}}function dc(n){let e,t,r,i;return{c(){e=ye("path"),this.h()},l(s){e=Ee(s,"path",{d:!0,fill:!0,transform:!0}),w(e).forEach(g),this.h()},h(){c(e,"d",t=n[10][4]),c(e,"fill",r=n[2]||n[5]||"currentColor"),c(e,"transform",i="translate("+n[10][0]/-2+" "+n[10][1]/-2+")")},m(s,a){se(s,e,a)},p(s,a){a&1024&&t!==(t=s[10][4])&&c(e,"d",t),a&36&&r!==(r=s[2]||s[5]||"currentColor")&&c(e,"fill",r),a&1024&&i!==(i="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")&&c(e,"transform",i)},d(s){s&&g(e)}}}function fc(n){let e,t=n[10][4]&&xr(n);return{c(){t&&t.c(),e=Lt()},l(r){t&&t.l(r),e=Lt()},m(r,i){t&&t.m(r,i),se(r,e,i)},p(r,[i]){r[10][4]?t?t.p(r,i):(t=xr(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Jt,o:Jt,d(r){r&&g(e),t&&t.d(r)}}}function hc(n,e,t){let{class:r=""}=e,{id:i=""}=e,{style:s=""}=e,{icon:a}=e,{size:o=""}=e,{color:l=""}=e,{fw:d=!1}=e,{pull:h=""}=e,{scale:p=1}=e,{translateX:u=0}=e,{translateY:m=0}=e,{rotate:_=""}=e,{flip:A=!1}=e,{spin:O=!1}=e,{pulse:b=!1}=e,{primaryColor:P=""}=e,{secondaryColor:C=""}=e,{primaryOpacity:F=1}=e,{secondaryOpacity:S=.4}=e,{swapOpacity:M=!1}=e,k,T,U;return n.$$set=v=>{"class"in v&&t(0,r=v.class),"id"in v&&t(1,i=v.id),"style"in v&&t(13,s=v.style),"icon"in v&&t(14,a=v.icon),"size"in v&&t(15,o=v.size),"color"in v&&t(2,l=v.color),"fw"in v&&t(16,d=v.fw),"pull"in v&&t(17,h=v.pull),"scale"in v&&t(18,p=v.scale),"translateX"in v&&t(19,u=v.translateX),"translateY"in v&&t(20,m=v.translateY),"rotate"in v&&t(21,_=v.rotate),"flip"in v&&t(22,A=v.flip),"spin"in v&&t(3,O=v.spin),"pulse"in v&&t(4,b=v.pulse),"primaryColor"in v&&t(5,P=v.primaryColor),"secondaryColor"in v&&t(6,C=v.secondaryColor),"primaryOpacity"in v&&t(7,F=v.primaryOpacity),"secondaryOpacity"in v&&t(8,S=v.secondaryOpacity),"swapOpacity"in v&&t(9,M=v.swapOpacity)},n.$$.update=()=>{n.$$.dirty&16384&&t(10,k=a&&a.icon||[0,0,"",[],""]),n.$$.dirty&237568&&t(11,T=lc(s,o,h,d)),n.$$.dirty&8126464&&t(12,U=cc(p,u,m,_,A,512))},[r,i,l,O,b,P,C,F,S,M,k,T,U,s,a,o,d,h,p,u,m,_,A]}class pc extends Qe{constructor(e){super(),Ze(this,e,hc,fc,Ye,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var mc={prefix:"fas",iconName:"film",icon:[512,512,[127902],"f008","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"]},Bu={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]},gc={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},vc=gc,zu={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},_c={prefix:"fas",iconName:"box",icon:[448,512,[128230],"f466","M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"]},bc={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},ju={prefix:"fas",iconName:"cloud-arrow-down",icon:[640,512,[62337,"cloud-download","cloud-download-alt"],"f0ed","M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"]},Ic={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},Wu=Ic,Gu={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},wc={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},xu=wc,yc={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},Ec={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},qu=Ec,Tc={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Cc=Tc,Sc={prefix:"fas",iconName:"phone-volume",icon:[512,512,["volume-control-phone"],"f2a0","M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]},kc=Sc,Ac={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Ku=Ac,Rc={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},Pc={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]},Ju={prefix:"fas",iconName:"earth-americas",icon:[512,512,[127758,"earth","earth-america","globe-americas"],"f57d","M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},Dc={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Xu=Dc,Yu={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Qu={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},Zu={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]},Oc={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},$u=Oc,Mc={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},ed=Mc,td={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},nd={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Nc={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"]},Lc={prefix:"fas",iconName:"brush",icon:[384,512,[],"f55d","M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]};const On=""+new URL("../assets/bgPlaceholder.9e5a8fcb.jpg",import.meta.url).href,tn=hi("edits",{edits:[]}),Uc=()=>{tn.update(n=>{const e=n.cache;if(!e)return n;e.data.updatedAt=new Date().getTime();const t=n.edits.findIndex(r=>r.id===e.id);return t<=-1?n.edits.push(e):n.edits[t].data=e.data,n})},Hc=n=>{tn.update(e=>(e.edits.findIndex(r=>r.id===n.id)<=-1||(e.edits=e.edits.filter(r=>r.id!==n.id)),e))},Vc=async()=>{const{edits:n}=Mn(tn),e=[];for(const t of n){const{id:r,data:i,action:s}=t;(s==="UPDATE"||s==="CREATE")&&await gr.uploadGameFile(i)&&e.push(r)}return tn.update(t=>(t.edits=t.edits.filter(r=>!e.includes(r.id)),t)),{uploaded:e,notUploaded:n.filter(t=>!e.includes(t.id)).map(t=>t.id)}},Fc={editStore:tn,saveEdit:Uc,deleteEdit:Hc,submitChanges:Vc};function qr(n){let e,t,r,i,s,a;return t=new pc({props:{icon:vc}}),{c(){e=y("a"),It(t.$$.fragment),r=J("Edit"),this.h()},l(o){e=E(o,"A",{href:!0,class:!0});var l=w(e);wt(t.$$.fragment,l),r=X(l,"Edit"),l.forEach(g),this.h()},h(){c(e,"href","?edit=true"),c(e,"class","pointer-events-auto chip variant-soft-primary hover:variant-filled-primary gap-2 flex-1")},m(o,l){se(o,e,l),yt(t,e,null),f(e,r),i=!0,s||(a=bt(e,"click",n[9]),s=!0)},p:Jt,i(o){i||(he(t.$$.fragment,o),i=!0)},o(o){Te(t.$$.fragment,o),i=!1},d(o){o&&g(e),Et(t),s=!1,a()}}}function Bc(n){let e,t,r=n[0]&&n[1].admin&&qr(n);return{c(){r&&r.c(),e=Lt()},l(i){r&&r.l(i),e=Lt()},m(i,s){r&&r.m(i,s),se(i,e,s),t=!0},p(i,[s]){i[0]&&i[1].admin?r?(r.p(i,s),s&3&&he(r,1)):(r=qr(i),r.c(),he(r,1),r.m(e.parentNode,e)):r&&(nr(),Te(r,1,1,()=>{r=null}),rr())},i(i){t||(he(r),t=!0)},o(i){Te(r),t=!1},d(i){i&&g(e),r&&r.d(i)}}}function zc(n,e,t){let r,i,s,a;const{userStore:o}=gr;ot(n,o,m=>t(1,s=m));const{editStore:l}=Fc;ot(n,l,m=>t(2,a=m));const{dbStore:d}=Ut;ot(n,d,m=>t(8,i=m));let{file:h=void 0}=e,{game:p=void 0}=e;const u=()=>{gs(l,a.cache={id:r.id,action:"UPDATE",data:JSON.parse(JSON.stringify(r))},a)};return n.$$set=m=>{"file"in m&&t(6,h=m.file),"game"in m&&t(7,p=m.game)},n.$$.update=()=>{var m;n.$$.dirty&448&&t(0,r=p||((m=h==null?void 0:h.game)!=null&&m.id?i[h.game.id]:void 0))},[r,s,a,o,l,d,h,p,i,u]}class vr extends Qe{constructor(e){super(),Ze(this,e,zc,Bc,Ye,{file:6,game:7})}}function Kr(n,e,t){const r=n.slice();return r[2]=e[t],r}function Jr(n){let e,t=n[2]+"",r;return{c(){e=y("div"),r=J(t),this.h()},l(i){e=E(i,"DIV",{class:!0});var s=w(e);r=X(s,t),s.forEach(g),this.h()},h(){c(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(i,s){se(i,e,s),f(e,r)},p(i,s){s&1&&t!==(t=i[2]+"")&&Q(r,t)},d(i){i&&g(e)}}}function jc(n){var U,v;let e,t,r,i,s,a,o,l,d,h,p=((U=n[0].game)==null?void 0:U.name)+"",u,m,_,A,O,b,P=((v=n[0].authors)==null?void 0:v.join(", "))+"",C,F,S,M,k=Fe(n[0].features||[]),T=[];for(let D=0;D<k.length;D+=1)T[D]=Jr(Kr(n,k,D));return A=new vr({props:{file:n[0]}}),{c(){e=y("a"),t=y("img"),s=H(),a=y("hr"),o=H(),l=y("div"),d=y("div"),h=y("p"),u=J(p),m=H();for(let D=0;D<T.length;D+=1)T[D].c();_=H(),It(A.$$.fragment),O=H(),b=y("h4"),C=J(P),this.h()},l(D){e=E(D,"A",{href:!0,class:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var G=w(e);t=E(G,"IMG",{src:!0,alt:!0,class:!0}),s=V(G),a=E(G,"HR",{}),o=V(G),l=E(G,"DIV",{class:!0});var N=w(l);d=E(N,"DIV",{class:!0});var W=w(d);h=E(W,"P",{class:!0});var Y=w(h);u=X(Y,p),Y.forEach(g),m=V(W);for(let I=0;I<T.length;I+=1)T[I].l(W);_=V(W),wt(A.$$.fragment,W),W.forEach(g),O=V(N),b=E(N,"H4",{class:!0});var le=w(b);C=X(le,P),le.forEach(g),N.forEach(g),G.forEach(g),this.h()},h(){var D;pe(t.src,r=n[0].imgUrl||On)||c(t,"src",r),c(t,"alt",i=n[0].id),c(t,"class","card aspectTable overflow-hidden hover:brightness-125 hover:scale-110 transition-all svelte-1mrpffe"),c(h,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),c(d,"class","flex gap-2"),c(b,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),c(l,"class","flex flex-col py-4"),c(e,"href",n[1]),c(e,"class","flex flex-col"),c(e,"id",F=n[0].id),c(e,"data-gameid",S=(D=n[0].game)==null?void 0:D.id),c(e,"data-filetype","b2sFiles")},m(D,G){se(D,e,G),f(e,t),f(e,s),f(e,a),f(e,o),f(e,l),f(l,d),f(d,h),f(h,u),f(d,m);for(let N=0;N<T.length;N+=1)T[N]&&T[N].m(d,null);f(d,_),yt(A,d,null),f(l,O),f(l,b),f(b,C),M=!0},p(D,[G]){var W,Y,le;if((!M||G&1&&!pe(t.src,r=D[0].imgUrl||On))&&c(t,"src",r),(!M||G&1&&i!==(i=D[0].id))&&c(t,"alt",i),(!M||G&1)&&p!==(p=((W=D[0].game)==null?void 0:W.name)+"")&&Q(u,p),G&1){k=Fe(D[0].features||[]);let I;for(I=0;I<k.length;I+=1){const K=Kr(D,k,I);T[I]?T[I].p(K,G):(T[I]=Jr(K),T[I].c(),T[I].m(d,_))}for(;I<T.length;I+=1)T[I].d(1);T.length=k.length}const N={};G&1&&(N.file=D[0]),A.$set(N),(!M||G&1)&&P!==(P=((Y=D[0].authors)==null?void 0:Y.join(", "))+"")&&Q(C,P),(!M||G&2)&&c(e,"href",D[1]),(!M||G&1&&F!==(F=D[0].id))&&c(e,"id",F),(!M||G&1&&S!==(S=(le=D[0].game)==null?void 0:le.id))&&c(e,"data-gameid",S)},i(D){M||(he(A.$$.fragment,D),M=!0)},o(D){Te(A.$$.fragment,D),M=!1},d(D){D&&g(e),Xt(T,D),Et(A)}}}function Wc(n,e,t){let{file:r=bs}=e,{href:i=""}=e;return n.$$set=s=>{"file"in s&&t(0,r=s.file),"href"in s&&t(1,i=s.href)},[r,i]}class Gc extends Qe{constructor(e){super(),Ze(this,e,Wc,jc,Ye,{file:0,href:1})}}function xc(n){var M;let e,t,r,i,s=(((M=n[0].game)==null?void 0:M.name)||"???")+"",a,o,l,d,h=n[0].version+"",p,u,m,_,A,O,b,P,C,F,S;return A=new vr({props:{file:n[0]}}),{c(){e=y("a"),t=y("div"),r=y("div"),i=y("span"),a=J(s),o=H(),l=y("div"),d=y("span"),p=J(h),u=H(),m=y("div"),_=H(),It(A.$$.fragment),O=H(),b=y("img"),this.h()},l(k){e=E(k,"A",{href:!0,id:!0,"data-gameid":!0,"data-filetype":!0,class:!0});var T=w(e);t=E(T,"DIV",{class:!0});var U=w(t);r=E(U,"DIV",{class:!0});var v=w(r);i=E(v,"SPAN",{class:!0});var D=w(i);a=X(D,s),D.forEach(g),o=V(v),l=E(v,"DIV",{class:!0});var G=w(l);d=E(G,"SPAN",{class:!0});var N=w(d);p=X(N,h),N.forEach(g),u=V(G),m=E(G,"DIV",{class:!0}),w(m).forEach(g),_=V(G),wt(A.$$.fragment,G),G.forEach(g),v.forEach(g),O=V(U),b=E(U,"IMG",{src:!0,class:!0,alt:!0}),U.forEach(g),T.forEach(g),this.h()},h(){var k;c(i,"class","font-bold"),c(d,"class","opacity-60 whitespace-nowrap text-ellipsis overflow-ellipsis"),c(m,"class","flex-1"),c(l,"class","flex justify-between"),c(r,"class","p-4 flex flex-col justify-between absolute top-0 left-0 right-0 bottom-0 z-10"),pe(b.src,P=n[3])||c(b,"src",P),c(b,"class","absolute top-0 left-0 right-0 bottom-0 opacity-10"),c(b,"alt",""),c(t,"class","card !bg-surface-100 dark:!bg-surface-600 aspect relative overflow-hidden hover:brightness-125 transition-all text-xs md:text-base svelte-22xih4"),c(e,"href",n[1]),c(e,"id",C=n[0].id),c(e,"data-gameid",F=(k=n[0].game)==null?void 0:k.id),c(e,"data-filetype",n[2]),c(e,"class","aspect svelte-22xih4")},m(k,T){se(k,e,T),f(e,t),f(t,r),f(r,i),f(i,a),f(r,o),f(r,l),f(l,d),f(d,p),f(l,u),f(l,m),f(l,_),yt(A,l,null),f(t,O),f(t,b),S=!0},p(k,[T]){var v,D;(!S||T&1)&&s!==(s=(((v=k[0].game)==null?void 0:v.name)||"???")+"")&&Q(a,s),(!S||T&1)&&h!==(h=k[0].version+"")&&Q(p,h);const U={};T&1&&(U.file=k[0]),A.$set(U),(!S||T&8&&!pe(b.src,P=k[3]))&&c(b,"src",P),(!S||T&2)&&c(e,"href",k[1]),(!S||T&1&&C!==(C=k[0].id))&&c(e,"id",C),(!S||T&1&&F!==(F=(D=k[0].game)==null?void 0:D.id))&&c(e,"data-gameid",F),(!S||T&4)&&c(e,"data-filetype",k[2])},i(k){S||(he(A.$$.fragment,k),S=!0)},o(k){Te(A.$$.fragment,k),S=!1},d(k){k&&g(e),Et(A)}}}function qc(n,e,t){let r;const{getGameImage:i}=Ut;let{file:s=Is}=e,{href:a=""}=e,{fileType:o}=e;return n.$$set=l=>{"file"in l&&t(0,s=l.file),"href"in l&&t(1,a=l.href),"fileType"in l&&t(2,o=l.fileType)},n.$$.update=()=>{var l;n.$$.dirty&1&&t(3,r=(l=s.game)!=null&&l.id?i(s.game.id):"")},[s,a,o,r]}class Ue extends Qe{constructor(e){super(),Ze(this,e,qc,xc,Ye,{file:0,href:1,fileType:2})}}const Pt=n=>{if(!n)return On;if(n.imgUrl)return n.imgUrl;const e=n.b2sFiles||[];if(e.length){const r=[...e].sort((i,s)=>s.updatedAt-i.updatedAt).find(i=>i.imgUrl);if(r)return r.imgUrl}const t=n.tableFiles||[];if(t.length){const r=[...t].sort((i,s)=>s.updatedAt-i.updatedAt).find(i=>i.imgUrl);if(r)return r.imgUrl}return On},Dt=""+new URL("../assets/tablePlaceholder.f13766a0.jpg",import.meta.url).href;function Xr(n,e,t){const r=n.slice();return r[9]=e[t],r}function Yr(n,e,t){const r=n.slice();return r[12]=e[t],r}function Qr(n){let e,t=n[12]+"",r,i;return{c(){e=y("div"),r=J(t),i=H(),this.h()},l(s){e=E(s,"DIV",{class:!0});var a=w(e);r=X(a,t),i=V(a),a.forEach(g),this.h()},h(){c(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(s,a){se(s,e,a),f(e,r),f(e,i)},p(s,a){a&64&&t!==(t=s[12]+"")&&Q(r,t)},d(s){s&&g(e)}}}function Zr(n){let e,t=n[9].toUpperCase()+"",r;return{c(){e=y("div"),r=J(t),this.h()},l(i){e=E(i,"DIV",{class:!0});var s=w(e);r=X(s,t),s.forEach(g),this.h()},h(){c(e,"class","badge variant-filled-surface")},m(i,s){se(i,e,s),f(e,r)},p(i,s){s&1&&t!==(t=i[9].toUpperCase()+"")&&Q(r,t)},d(i){i&&g(e)}}}function Kc(n){var Ft;let e,t,r,i,s,a,o,l,d,h,p,u,m,_,A=n[0].name+"",O,b,P,C,F,S=n[0].manufacturer+"",M,k,T,U,v=n[0].year+"",D,G,N,W,Y=(((Ft=n[0].designers)==null?void 0:Ft.join(", "))||"-")+"",le,I,K,$,R,x,ee,oe="Updated at",fe,ue,de=Rt(n[0].updatedAt)+"",ge,kt,We,Me,_e,Ce,At="Type",Ge,Ne,be=(n[0].type||"-")+"",Se,Pe,$e,ve,De,ke,Ie,ne,Ae,et,we=Fe(n[6]),ae=[];for(let q=0;q<we.length;q+=1)ae[q]=Qr(Yr(n,we,q));let Z=Fe(n[0].theme||[]),ce=[];for(let q=0;q<Z.length;q+=1)ce[q]=Zr(Xr(n,Z,q));return{c(){e=y("div"),t=y("img"),a=H(),o=y("div"),l=y("img"),p=H(),u=y("div"),m=y("div"),_=y("p"),O=J(A),b=H();for(let q=0;q<ae.length;q+=1)ae[q].c();P=H(),C=y("div"),F=y("p"),M=J(S),k=H(),T=y("p"),U=J("("),D=J(v),G=J(")"),N=H(),W=y("p"),le=J(Y),I=H(),K=y("div");for(let q=0;q<ce.length;q+=1)ce[q].c();$=H(),R=y("div"),x=y("div"),ee=y("p"),ee.textContent=oe,fe=H(),ue=y("p"),ge=J(de),kt=H(),We=y("div"),Me=H(),_e=y("div"),Ce=y("p"),Ce.textContent=At,Ge=H(),Ne=y("p"),Se=J(be),$e=H(),ve=ye("svg"),De=ye("defs"),ke=ye("clipPath"),Ie=ye("path"),this.h()},l(q){e=E(q,"DIV",{style:!0,class:!0});var L=w(e);t=E(L,"IMG",{src:!0,alt:!0,class:!0}),a=V(L),o=E(L,"DIV",{class:!0});var B=w(o);l=E(B,"IMG",{src:!0,alt:!0,style:!0,class:!0}),p=V(B),u=E(B,"DIV",{class:!0,style:!0});var z=w(u);m=E(z,"DIV",{class:!0});var re=w(m);_=E(re,"P",{class:!0});var Re=w(_);O=X(Re,A),Re.forEach(g),b=V(re);for(let Le=0;Le<ae.length;Le+=1)ae[Le].l(re);re.forEach(g),P=V(z),C=E(z,"DIV",{class:!0});var dt=w(C);F=E(dt,"P",{class:!0});var Bt=w(F);M=X(Bt,S),Bt.forEach(g),k=V(dt),T=E(dt,"P",{});var xe=w(T);U=X(xe,"("),D=X(xe,v),G=X(xe,")"),xe.forEach(g),dt.forEach(g),N=V(z),W=E(z,"P",{class:!0});var zt=w(W);le=X(zt,Y),zt.forEach(g),I=V(z),K=E(z,"DIV",{class:!0});var ft=w(K);for(let Le=0;Le<ce.length;Le+=1)ce[Le].l(ft);ft.forEach(g),$=V(z),R=E(z,"DIV",{class:!0});var qe=w(R);x=E(qe,"DIV",{class:!0});var Oe=w(x);ee=E(Oe,"P",{class:!0,"data-svelte-h":!0}),yn(ee)!=="svelte-g6tq99"&&(ee.textContent=oe),fe=V(Oe),ue=E(Oe,"P",{class:!0});var ht=w(ue);ge=X(ht,de),ht.forEach(g),Oe.forEach(g),kt=V(qe),We=E(qe,"DIV",{class:!0}),w(We).forEach(g),Me=V(qe),_e=E(qe,"DIV",{class:!0});var pt=w(_e);Ce=E(pt,"P",{class:!0,"data-svelte-h":!0}),yn(Ce)!=="svelte-1h1g7sd"&&(Ce.textContent=At),Ge=V(pt),Ne=E(pt,"P",{class:!0});var mt=w(Ne);Se=X(mt,be),mt.forEach(g),pt.forEach(g),qe.forEach(g),z.forEach(g),B.forEach(g),L.forEach(g),$e=V(q),ve=Ee(q,"svg",{width:!0,height:!0});var jt=w(ve);De=Ee(jt,"defs",{});var Wt=w(De);ke=Ee(Wt,"clipPath",{id:!0,clipPathUnits:!0});var Gt=w(ke);Ie=Ee(Gt,"path",{d:!0}),w(Ie).forEach(g),Gt.forEach(g),Wt.forEach(g),jt.forEach(g),this.h()},h(){pe(t.src,r=Pt(n[0]))||c(t,"src",r),c(t,"alt",i=n[0].id),c(t,"class","card pinImage bg-surface-100 dark:bg-surface-600 z-10 absolute top-0 left-0 right-0 bottom-0 shadow-lg shadow-black svelte-1dr6gib"),pe(l.src,d=Pt(n[0]))||c(l,"src",d),c(l,"alt",h=n[0].id),ie(l,"height","36%"),c(l,"class","absolute top-0 left-0 right-0 w-full bgImage z-0 object-cover opacity-10 svelte-1dr6gib"),c(_,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),c(m,"class","flex gap-2 max-w-full"),c(F,"class","text-ellipsis whitespace-nowrap overflow-hidden"),c(C,"class","flex gap-1 text-center max-w-full"),c(W,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),c(K,"class","flex gap-2 mt-4 flex-wrap"),c(ee,"class","text-xs font-bold uppercase opacity-40"),c(ue,"class",""),c(x,"class","flex flex-col items-center justify-center flex-1 gap-1"),c(We,"class","bg-surface-900-50-token h-full w-px opacity-20"),c(Ce,"class","text-xs font-bold uppercase opacity-40"),c(Ne,"class",""),c(_e,"class","flex flex-col items-center justify-center flex-1 gap-1"),c(R,"class","flex mt-auto w-full"),c(u,"class","flex flex-col max-w-full w-full absolute items-center p-2 bottom-0"),ie(u,"top","calc("+n[3]*.885+"px - 7.5rem)"),c(o,"class","card !bg-surface-100 dark:!bg-surface-600 shadow-2xl shadow-black absolute top-0 -left-4 -right-4 -bottom-24 -z-1 flex flex-col p-4 gap-0.5 items-center"),ie(e,"left",n[1]+"px"),ie(e,"top",n[2]+"px"),ie(e,"width",n[4]+"px"),ie(e,"height",n[3]+"px"),c(e,"class","popup fixed z-50 pointer-events-none"),c(Ie,"d","M 0,1 L 0,0 L 1,0 L 1,1 C .6 .8, .4, 1.2, 0 1 Z"),c(ke,"id","myCurve"),c(ke,"clipPathUnits","objectBoundingBox"),c(ve,"width","0"),c(ve,"height","0")},m(q,L){se(q,e,L),f(e,t),f(e,a),f(e,o),f(o,l),f(o,p),f(o,u),f(u,m),f(m,_),f(_,O),f(m,b);for(let B=0;B<ae.length;B+=1)ae[B]&&ae[B].m(m,null);f(u,P),f(u,C),f(C,F),f(F,M),f(C,k),f(C,T),f(T,U),f(T,D),f(T,G),f(u,N),f(u,W),f(W,le),f(u,I),f(u,K);for(let B=0;B<ce.length;B+=1)ce[B]&&ce[B].m(K,null);f(u,$),f(u,R),f(R,x),f(x,ee),f(x,fe),f(x,ue),f(ue,ge),f(R,kt),f(R,We),f(R,Me),f(R,_e),f(_e,Ce),f(_e,Ge),f(_e,Ne),f(Ne,Se),se(q,$e,L),se(q,ve,L),f(ve,De),f(De,ke),f(ke,Ie),ne=!0,Ae||(et=bt(t,"outroend",function(){di(n[5])&&n[5].apply(this,arguments)}),Ae=!0)},p(q,[L]){var B;if(n=q,(!ne||L&1&&!pe(t.src,r=Pt(n[0])))&&c(t,"src",r),(!ne||L&1&&i!==(i=n[0].id))&&c(t,"alt",i),(!ne||L&1&&!pe(l.src,d=Pt(n[0])))&&c(l,"src",d),(!ne||L&1&&h!==(h=n[0].id))&&c(l,"alt",h),(!ne||L&1)&&A!==(A=n[0].name+"")&&Q(O,A),L&64){we=Fe(n[6]);let z;for(z=0;z<we.length;z+=1){const re=Yr(n,we,z);ae[z]?ae[z].p(re,L):(ae[z]=Qr(re),ae[z].c(),ae[z].m(m,null))}for(;z<ae.length;z+=1)ae[z].d(1);ae.length=we.length}if((!ne||L&1)&&S!==(S=n[0].manufacturer+"")&&Q(M,S),(!ne||L&1)&&v!==(v=n[0].year+"")&&Q(D,v),(!ne||L&1)&&Y!==(Y=(((B=n[0].designers)==null?void 0:B.join(", "))||"-")+"")&&Q(le,Y),L&1){Z=Fe(n[0].theme||[]);let z;for(z=0;z<Z.length;z+=1){const re=Xr(n,Z,z);ce[z]?ce[z].p(re,L):(ce[z]=Zr(re),ce[z].c(),ce[z].m(K,null))}for(;z<ce.length;z+=1)ce[z].d(1);ce.length=Z.length}(!ne||L&1)&&de!==(de=Rt(n[0].updatedAt)+"")&&Q(ge,de),(!ne||L&1)&&be!==(be=(n[0].type||"-")+"")&&Q(Se,be),(!ne||L&8)&&ie(u,"top","calc("+n[3]*.885+"px - 7.5rem)"),(!ne||L&2)&&ie(e,"left",n[1]+"px"),(!ne||L&4)&&ie(e,"top",n[2]+"px"),(!ne||L&16)&&ie(e,"width",n[4]+"px"),(!ne||L&8)&&ie(e,"height",n[3]+"px")},i(q){ne||(q&&En(()=>{ne&&(s||(s=at(t,n[7],{duration:mn},!0)),s.run(1))}),q&&En(()=>{ne&&(Pe||(Pe=at(o,n[8],{duration:mn},!0)),Pe.run(1))}),ne=!0)},o(q){q&&(s||(s=at(t,n[7],{duration:mn},!1)),s.run(0)),q&&(Pe||(Pe=at(o,n[8],{duration:mn},!1)),Pe.run(0)),ne=!1},d(q){q&&(g(e),g($e),g(ve)),q&&s&&s.end(),Xt(ae,q),Xt(ce,q),q&&Pe&&Pe.end(),Ae=!1,et()}}}const mn=100;function Jc(n,e,t){let r,{game:i=Nn}=e,{left:s=0}=e,{top:a=0}=e,{height:o=0}=e,{width:l=0}=e,{onEnd:d=()=>{}}=e;const h=(u,{duration:m,delay:_})=>({duration:m,delay:_,css:A=>{const O=Tn(A);return`
					transform: translateY(${O*-8}rem) scale(${1-O*.25});
					`}}),p=(u,{duration:m,delay:_})=>({duration:m,delay:_,css:A=>`
					transform: scale(${Tn(A)});
					`});return n.$$set=u=>{"game"in u&&t(0,i=u.game),"left"in u&&t(1,s=u.left),"top"in u&&t(2,a=u.top),"height"in u&&t(3,o=u.height),"width"in u&&t(4,l=u.width),"onEnd"in u&&t(5,d=u.onEnd)},n.$$.update=()=>{n.$$.dirty&1&&t(6,r=Array.from(new Set((i.tableFiles||[]).map(u=>u.tableFormat).filter(u=>!!u))))},[i,s,a,o,l,d,r,h,p]}class Xc extends Qe{constructor(e){super(),Ze(this,e,Jc,Kc,Ye,{game:0,left:1,top:2,height:3,width:4,onEnd:5})}}const hs=gi({width:0,height:0,mobile:!1});function $r(n,e,t){const r=n.slice();return r[16]=e[t],r}function ei(n){let e,t;return e=new Xc({props:{game:n[0],left:n[3],top:n[4],width:n[6],height:n[5],onEnd:n[12]}}),{c(){It(e.$$.fragment)},l(r){wt(e.$$.fragment,r)},m(r,i){yt(e,r,i),t=!0},p(r,i){const s={};i&1&&(s.game=r[0]),i&8&&(s.left=r[3]),i&16&&(s.top=r[4]),i&64&&(s.width=r[6]),i&32&&(s.height=r[5]),i&256&&(s.onEnd=r[12]),e.$set(s)},i(r){t||(he(e.$$.fragment,r),t=!0)},o(r){Te(e.$$.fragment,r),t=!1},d(r){Et(e,r)}}}function ti(n){let e,t=n[16]+"",r,i;return{c(){e=y("div"),r=J(t),i=H(),this.h()},l(s){e=E(s,"DIV",{class:!0});var a=w(e);r=X(a,t),i=V(a),a.forEach(g),this.h()},h(){c(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(s,a){se(s,e,a),f(e,r),f(e,i)},p(s,a){a&512&&t!==(t=s[16]+"")&&Q(r,t)},d(s){s&&g(e)}}}function Yc(n){var le;let e,t,r,i,s,a,o,l,d,h=n[0].name+"",p,u,m,_,A=n[0].manufacturer+"",O,b,P=n[0].year+"",C,F,S,M,k=((le=n[0].designers)==null?void 0:le.join(", "))+"",T,U,v,D,G,N=n[7]&&ei(n),W=Fe(n[9]),Y=[];for(let I=0;I<W.length;I+=1)Y[I]=ti($r(n,W,I));return{c(){e=y("a"),N&&N.c(),t=H(),r=y("img"),a=H(),o=y("div"),l=y("div"),d=y("p"),p=J(h),u=H();for(let I=0;I<Y.length;I+=1)Y[I].c();m=H(),_=y("p"),O=J(A),b=J(" ("),C=J(P),F=J(")"),S=H(),M=y("p"),T=J(k),this.h()},l(I){e=E(I,"A",{class:!0,href:!0,id:!0});var K=w(e);N&&N.l(K),t=V(K),r=E(K,"IMG",{src:!0,alt:!0,class:!0}),a=V(K),o=E(K,"DIV",{class:!0});var $=w(o);l=E($,"DIV",{class:!0});var R=w(l);d=E(R,"P",{class:!0});var x=w(d);p=X(x,h),x.forEach(g),u=V(R);for(let fe=0;fe<Y.length;fe+=1)Y[fe].l(R);R.forEach(g),m=V($),_=E($,"P",{});var ee=w(_);O=X(ee,A),b=X(ee," ("),C=X(ee,P),F=X(ee,")"),ee.forEach(g),S=V($),M=E($,"P",{class:!0});var oe=w(M);T=X(oe,k),oe.forEach(g),$.forEach(g),K.forEach(g),this.h()},h(){pe(r.src,i=Pt(n[0]))||c(r,"src",i),c(r,"alt",s=n[0].name),c(r,"class","card pinImage bg-surface-300-600-token svelte-1rbl6pa"),st(r,"hide",n[7]||n[8]),c(d,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),c(l,"class","flex gap-2"),c(M,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),c(o,"class","flex flex-col py-4"),c(e,"class","wrapper relative z-0"),c(e,"href",n[1]),c(e,"id",U=n[0].id)},m(I,K){se(I,e,K),N&&N.m(e,null),f(e,t),f(e,r),n[13](r),f(e,a),f(e,o),f(o,l),f(l,d),f(d,p),f(l,u);for(let $=0;$<Y.length;$+=1)Y[$]&&Y[$].m(l,null);f(o,m),f(o,_),f(_,O),f(_,b),f(_,C),f(_,F),f(o,S),f(o,M),f(M,T),v=!0,D||(G=[bt(e,"mouseenter",n[10]),bt(e,"mouseleave",n[11])],D=!0)},p(I,[K]){var $;if(I[7]?N?(N.p(I,K),K&128&&he(N,1)):(N=ei(I),N.c(),he(N,1),N.m(e,t)):N&&(nr(),Te(N,1,1,()=>{N=null}),rr()),(!v||K&1&&!pe(r.src,i=Pt(I[0])))&&c(r,"src",i),(!v||K&1&&s!==(s=I[0].name))&&c(r,"alt",s),(!v||K&384)&&st(r,"hide",I[7]||I[8]),(!v||K&1)&&h!==(h=I[0].name+"")&&Q(p,h),K&512){W=Fe(I[9]);let R;for(R=0;R<W.length;R+=1){const x=$r(I,W,R);Y[R]?Y[R].p(x,K):(Y[R]=ti(x),Y[R].c(),Y[R].m(l,null))}for(;R<Y.length;R+=1)Y[R].d(1);Y.length=W.length}(!v||K&1)&&A!==(A=I[0].manufacturer+"")&&Q(O,A),(!v||K&1)&&P!==(P=I[0].year+"")&&Q(C,P),(!v||K&1)&&k!==(k=(($=I[0].designers)==null?void 0:$.join(", "))+"")&&Q(T,k),(!v||K&2)&&c(e,"href",I[1]),(!v||K&1&&U!==(U=I[0].id))&&c(e,"id",U)},i(I){v||(he(N),v=!0)},o(I){Te(N),v=!1},d(I){I&&g(e),N&&N.d(),n[13](null),Xt(Y,I),D=!1,tr(G)}}}const Qc=200;function Zc(n,e,t){let r,i;ot(n,hs,C=>t(15,i=C));let{file:s=Nn}=e,{href:a=""}=e,o,l=0,d=0,h=0,p=0,u=!1,m=!1,_;const A=()=>{var F;if(i.mobile)return;const C=o.getBoundingClientRect();t(3,l=C.left),t(4,d=C.top),t(6,p=C.width),t(5,h=C.height),(F=document.getElementById("page"))==null||F.addEventListener("scroll",O),_=setTimeout(()=>{t(7,u=!0),_=void 0},Qc)},O=()=>{var C;i.mobile||((C=document.getElementById("page"))==null||C.removeEventListener("scroll",O),_?(t(7,u=!1),clearTimeout(_)):u&&(t(7,u=!1),t(8,m=!0)))},b=()=>t(8,m=!1);function P(C){fi[C?"unshift":"push"](()=>{o=C,t(2,o)})}return n.$$set=C=>{"file"in C&&t(0,s=C.file),"href"in C&&t(1,a=C.href)},n.$$.update=()=>{n.$$.dirty&1&&t(9,r=Array.from(new Set((s.tableFiles||[]).map(C=>C.tableFormat).filter(C=>!!C))))},[s,a,o,l,d,h,p,u,m,r,A,O,b,P]}class $c extends Qe{constructor(e){super(),Ze(this,e,Zc,Yc,Ye,{file:0,href:1})}}/*! Fast Average Color | © 2022 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */function eu(n){var e=n.toString(16);return e.length===1?"0"+e:e}function ni(n){return"#"+n.map(eu).join("")}function tu(n){var e=(n[0]*299+n[1]*587+n[2]*114)/1e3;return e<128}function nu(n){return n?ru(n)?n:[n]:[]}function ru(n){return Array.isArray(n[0])}function _r(n,e,t){for(var r=0;r<t.length;r++)if(iu(n,e,t[r]))return!0;return!1}function iu(n,e,t){switch(t.length){case 3:if(su(n,e,t))return!0;break;case 4:if(au(n,e,t))return!0;break;case 5:if(ou(n,e,t))return!0;break;default:return!1}}function su(n,e,t){return n[e+3]!==255||n[e]===t[0]&&n[e+1]===t[1]&&n[e+2]===t[2]}function au(n,e,t){return n[e+3]&&t[3]?n[e]===t[0]&&n[e+1]===t[1]&&n[e+2]===t[2]&&n[e+3]===t[3]:n[e+3]===t[3]}function gn(n,e,t){return n>=e-t&&n<=e+t}function ou(n,e,t){var r=t[0],i=t[1],s=t[2],a=t[3],o=t[4],l=n[e+3],d=gn(l,a,o);return a?!!(!l&&d||gn(n[e],r,o)&&gn(n[e+1],i,o)&&gn(n[e+2],s,o)&&d):d}function lu(n,e,t){for(var r={},i=24,s=t.ignoredColor,a=t.step,o=[0,0,0,0,0],l=0;l<e;l+=a){var d=n[l],h=n[l+1],p=n[l+2],u=n[l+3];if(!(s&&_r(n,l,s))){var m=Math.round(d/i)+","+Math.round(h/i)+","+Math.round(p/i);r[m]?r[m]=[r[m][0]+d*u,r[m][1]+h*u,r[m][2]+p*u,r[m][3]+u,r[m][4]+1]:r[m]=[d*u,h*u,p*u,u,1],o[4]<r[m][4]&&(o=r[m])}}var _=o[0],A=o[1],O=o[2],b=o[3],P=o[4];return b?[Math.round(_/b),Math.round(A/b),Math.round(O/b),Math.round(b/P)]:t.defaultColor}function cu(n,e,t){for(var r=0,i=0,s=0,a=0,o=0,l=t.ignoredColor,d=t.step,h=0;h<e;h+=d){var p=n[h+3],u=n[h]*p,m=n[h+1]*p,_=n[h+2]*p;l&&_r(n,h,l)||(r+=u,i+=m,s+=_,a+=p,o++)}return a?[Math.round(r/a),Math.round(i/a),Math.round(s/a),Math.round(a/o)]:t.defaultColor}function uu(n,e,t){for(var r=0,i=0,s=0,a=0,o=0,l=t.ignoredColor,d=t.step,h=0;h<e;h+=d){var p=n[h],u=n[h+1],m=n[h+2],_=n[h+3];l&&_r(n,h,l)||(r+=p*p*_,i+=u*u*_,s+=m*m*_,a+=_,o++)}return a?[Math.round(Math.sqrt(r/a)),Math.round(Math.sqrt(i/a)),Math.round(Math.sqrt(s/a)),Math.round(a/o)]:t.defaultColor}function ri(n){return qt(n,"defaultColor",[0,0,0,0])}function qt(n,e,t){return n[e]===void 0?t:n[e]}var ii=10,er=100;function du(n){return n.search(/\.svg(\?|$)/i)!==-1}function fu(n){if(ps(n)){var e=n.naturalWidth,t=n.naturalHeight;return!n.naturalWidth&&du(n.src)&&(e=t=er),{width:e,height:t}}return pu(n)?{width:n.videoWidth,height:n.videoHeight}:{width:n.width,height:n.height}}function si(n){return mu(n)?"canvas":hu(n)?"offscreencanvas":gu(n)?"imagebitmap":n.src}function ps(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement}var ms=typeof OffscreenCanvas<"u";function hu(n){return ms&&n instanceof OffscreenCanvas}function pu(n){return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement}function mu(n){return typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement}function gu(n){return typeof ImageBitmap<"u"&&n instanceof ImageBitmap}function vu(n,e){var t=qt(e,"left",0),r=qt(e,"top",0),i=qt(e,"width",n.width),s=qt(e,"height",n.height),a=i,o=s;if(e.mode==="precision")return{srcLeft:t,srcTop:r,srcWidth:i,srcHeight:s,destWidth:a,destHeight:o};var l;return i>s?(l=i/s,a=er,o=Math.round(a/l)):(l=s/i,o=er,a=Math.round(o/l)),(a>i||o>s||a<ii||o<ii)&&(a=i,o=s),{srcLeft:t,srcTop:r,srcWidth:i,srcHeight:s,destWidth:a,destHeight:o}}var _u=typeof window>"u";function bu(){return _u?ms?new OffscreenCanvas(1,1):null:document.createElement("canvas")}var Iu="FastAverageColor: ";function He(n){return Error(Iu+n)}function xt(n,e){e||console.error(n)}var wu=function(){function n(){this.canvas=null,this.ctx=null}return n.prototype.getColorAsync=function(e,t){if(!e)return Promise.reject(He("call .getColorAsync() without resource."));if(typeof e=="string"){if(typeof Image>"u")return Promise.reject(He("resource as string is not supported in this environment"));var r=new Image;return r.crossOrigin=t&&t.crossOrigin||"",r.src=e,this.bindImageEvents(r,t)}else{if(ps(e)&&!e.complete)return this.bindImageEvents(e,t);var i=this.getColor(e,t);return i.error?Promise.reject(i.error):Promise.resolve(i)}},n.prototype.getColor=function(e,t){t=t||{};var r=ri(t);if(!e){var i=He("call .getColor(null) without resource");return xt(i,t.silent),this.prepareResult(r,i)}var s=fu(e),a=vu(s,t);if(!a.srcWidth||!a.srcHeight||!a.destWidth||!a.destHeight){var i=He('incorrect sizes for resource "'.concat(si(e),'"'));return xt(i,t.silent),this.prepareResult(r,i)}if(!this.canvas&&(this.canvas=bu(),!this.canvas)){var i=He("OffscreenCanvas is not supported in this browser");return xt(i,t.silent),this.prepareResult(r,i)}if(!this.ctx){if(this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx){var i=He("Canvas Context 2D is not supported in this browser");return xt(i,t.silent),this.prepareResult(r)}this.ctx.imageSmoothingEnabled=!1}this.canvas.width=a.destWidth,this.canvas.height=a.destHeight;try{this.ctx.clearRect(0,0,a.destWidth,a.destHeight),this.ctx.drawImage(e,a.srcLeft,a.srcTop,a.srcWidth,a.srcHeight,0,0,a.destWidth,a.destHeight);var o=this.ctx.getImageData(0,0,a.destWidth,a.destHeight).data;return this.prepareResult(this.getColorFromArray4(o,t))}catch(l){var i=He("security error (CORS) for resource ".concat(si(e),`.
Details: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image`));return xt(i,t.silent),!t.silent&&console.error(l),this.prepareResult(r,i)}},n.prototype.getColorFromArray4=function(e,t){t=t||{};var r=4,i=e.length,s=ri(t);if(i<r)return s;var a=i-i%r,o=(t.step||1)*r,l;switch(t.algorithm||"sqrt"){case"simple":l=cu;break;case"sqrt":l=uu;break;case"dominant":l=lu;break;default:throw He("".concat(t.algorithm," is unknown algorithm"))}return l(e,a,{defaultColor:s,ignoredColor:nu(t.ignoredColor),step:o})},n.prototype.prepareResult=function(e,t){var r=e.slice(0,3),i=[e[0],e[1],e[2],e[3]/255],s=tu(e);return{value:[e[0],e[1],e[2],e[3]],rgb:"rgb("+r.join(",")+")",rgba:"rgba("+i.join(",")+")",hex:ni(r),hexa:ni(e),isDark:s,isLight:!s,error:t}},n.prototype.destroy=function(){this.canvas&&(this.canvas.width=1,this.canvas.height=1,this.canvas=null),this.ctx=null},n.prototype.bindImageEvents=function(e,t){var r=this;return new Promise(function(i,s){var a=function(){d();var h=r.getColor(e,t);h.error?s(h.error):i(h)},o=function(){d(),s(He('Error loading image "'.concat(e.src,'".')))},l=function(){d(),s(He('Image "'.concat(e.src,'" loading aborted')))},d=function(){e.removeEventListener("load",a),e.removeEventListener("error",o),e.removeEventListener("abort",l)};e.addEventListener("load",a),e.addEventListener("error",o),e.addEventListener("abort",l)})},n}();const ai={FastFlips:"bg-red-500",SSF:"bg-cyan-500","P-ROC":"bg-bg-yellow-500",FlexDMD:"bg-orange-500",PuP:"bg-sky-500",VR:"bg-cyan-500",Hybrid:"bg-violet-500",Music:"bg-rose-500",FSS:"bg-green-500","4k":"bg-teal-500",MOD:"bg-purple-500",VPX:"bg-emerald-500",VP9:"bg-emerald-500",PM5:"bg-green-500",FX3:"bg-lime-500",FX2:"bg-lime-500",FX:"bg-lime-500",FP:"bg-yellow-500",B2S:"bg-pink-500",ROM:"bg-fuchsia-500",POV:"bg-green-500",Color:"bg-red-500",Sound:"bg-rose-500",Wheel:"bg-purple-500",Rules:"bg-orange-500",MediaPack:"bg-yellow-500",Topper:"bg-red-500","PinX Sound":"bg-sore-500","incl. B2S":"bg-pink-500","incl. ROM":"bg-fuchsia-500","incl. Art":"bg-purple-500","incl. PuP":"bg-sky-500","incl. Video":"bg-sky-500","no ROM":"bg-fuchsia-500",Adult:"bg-slate-500",Kids:"bg-indigo-500",LUT:"bg-gray-500",nFozzy:"bg-blue-500",Scorbit:"bg-indigo-500",Fleep:"bg-yellow-500"};function oi(n,e,t){const r=n.slice();return r[1]=e[t],r}function li(n){let e,t=Fe(n[0]||[]),r=[];for(let i=0;i<t.length;i+=1)r[i]=ci(oi(n,t,i));return{c(){e=y("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=E(i,"DIV",{class:!0});var s=w(e);for(let a=0;a<r.length;a+=1)r[a].l(s);s.forEach(g),this.h()},h(){c(e,"class","flex gap-1 flex-wrap")},m(i,s){se(i,e,s);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null)},p(i,s){if(s&1){t=Fe(i[0]||[]);let a;for(a=0;a<t.length;a+=1){const o=oi(i,t,a);r[a]?r[a].p(o,s):(r[a]=ci(o),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}},d(i){i&&g(e),Xt(r,i)}}}function ci(n){let e,t,r,i=n[1].toUpperCase()+"",s,a;return{c(){e=y("div"),t=y("span"),s=J(i),a=H(),this.h()},l(o){e=E(o,"DIV",{class:!0});var l=w(e);t=E(l,"SPAN",{class:!0}),w(t).forEach(g),s=X(l,i),a=V(l),l.forEach(g),this.h()},h(){c(t,"class",r="rounded-full h-2 w-2 "+(ai[n[1]]||"bg-slate-500")+" mr-2"),c(e,"class","badge variant-ringed-surface px-1.5 py-0.5")},m(o,l){se(o,e,l),f(e,t),f(e,s),f(e,a)},p(o,l){l&1&&r!==(r="rounded-full h-2 w-2 "+(ai[o[1]]||"bg-slate-500")+" mr-2")&&c(t,"class",r),l&1&&i!==(i=o[1].toUpperCase()+"")&&Q(s,i)},d(o){o&&g(e)}}}function yu(n){var r;let e,t=((r=n[0])==null?void 0:r.length)&&li(n);return{c(){t&&t.c(),e=Lt()},l(i){t&&t.l(i),e=Lt()},m(i,s){t&&t.m(i,s),se(i,e,s)},p(i,[s]){var a;(a=i[0])!=null&&a.length?t?t.p(i,s):(t=li(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Jt,o:Jt,d(i){i&&g(e),t&&t.d(i)}}}function Eu(n,e,t){let{data:r=[]}=e;return n.$$set=i=>{"data"in i&&t(0,r=i.data)},[r]}class Tu extends Qe{constructor(e){super(),Ze(this,e,Eu,yu,Ye,{data:0})}}function Cu(n){var q;let e,t,r,i,s,a,o,l,d,h,p,u,m,_,A=((q=n[0].game)==null?void 0:q.name)+"",O,b,P,C=n[0].tableFormat+"",F,S,M,k,T,U,v=n[8].manufacturer+"",D,G,N,W,Y=n[8].year+"",le,I,K,$,R=n[0].authors.join(", ")+"",x,ee,oe,fe,ue,de,ge,kt="Updated at",We,Me,_e=Rt(n[0].updatedAt)+"",Ce,At,Ge,Ne,be,Se,Pe="Added at",$e,ve,De=Rt(n[0].createdAt||n[0].updatedAt)+"",ke,Ie,ne,Ae,et,we,ae,Z,ce,Ft;return M=new vr({props:{game:n[8]}}),oe=new Tu({props:{data:n[0].features}}),{c(){e=y("div"),t=y("img"),a=H(),o=y("div"),l=y("img"),p=H(),u=y("div"),m=y("div"),_=y("p"),O=J(A),b=H(),P=y("div"),F=J(C),S=H(),It(M.$$.fragment),k=H(),T=y("div"),U=y("p"),D=J(v),G=H(),N=y("p"),W=J("("),le=J(Y),I=J(")"),K=H(),$=y("p"),x=J(R),ee=H(),It(oe.$$.fragment),fe=H(),ue=y("div"),de=y("div"),ge=y("p"),ge.textContent=kt,We=H(),Me=y("p"),Ce=J(_e),At=H(),Ge=y("div"),Ne=H(),be=y("div"),Se=y("p"),Se.textContent=Pe,$e=H(),ve=y("p"),ke=J(De),ne=H(),Ae=ye("svg"),et=ye("defs"),we=ye("clipPath"),ae=ye("path"),this.h()},l(L){e=E(L,"DIV",{style:!0,class:!0});var B=w(e);t=E(B,"IMG",{src:!0,alt:!0,class:!0}),a=V(B),o=E(B,"DIV",{style:!0,class:!0});var z=w(o);l=E(z,"IMG",{src:!0,alt:!0,style:!0,class:!0}),p=V(z),u=E(z,"DIV",{class:!0,style:!0});var re=w(u);m=E(re,"DIV",{class:!0});var Re=w(m);_=E(Re,"P",{class:!0});var dt=w(_);O=X(dt,A),dt.forEach(g),b=V(Re),P=E(Re,"DIV",{class:!0});var Bt=w(P);F=X(Bt,C),Bt.forEach(g),S=V(Re),wt(M.$$.fragment,Re),Re.forEach(g),k=V(re),T=E(re,"DIV",{class:!0});var xe=w(T);U=E(xe,"P",{class:!0});var zt=w(U);D=X(zt,v),zt.forEach(g),G=V(xe),N=E(xe,"P",{});var ft=w(N);W=X(ft,"("),le=X(ft,Y),I=X(ft,")"),ft.forEach(g),xe.forEach(g),K=V(re),$=E(re,"P",{class:!0});var qe=w($);x=X(qe,R),qe.forEach(g),ee=V(re),wt(oe.$$.fragment,re),fe=V(re),ue=E(re,"DIV",{class:!0});var Oe=w(ue);de=E(Oe,"DIV",{class:!0});var ht=w(de);ge=E(ht,"P",{class:!0,"data-svelte-h":!0}),yn(ge)!=="svelte-g6tq99"&&(ge.textContent=kt),We=V(ht),Me=E(ht,"P",{class:!0});var pt=w(Me);Ce=X(pt,_e),pt.forEach(g),ht.forEach(g),At=V(Oe),Ge=E(Oe,"DIV",{class:!0}),w(Ge).forEach(g),Ne=V(Oe),be=E(Oe,"DIV",{class:!0});var mt=w(be);Se=E(mt,"P",{class:!0,"data-svelte-h":!0}),yn(Se)!=="svelte-1gbi7dm"&&(Se.textContent=Pe),$e=V(mt),ve=E(mt,"P",{class:!0});var jt=w(ve);ke=X(jt,De),jt.forEach(g),mt.forEach(g),Oe.forEach(g),re.forEach(g),z.forEach(g),B.forEach(g),ne=V(L),Ae=Ee(L,"svg",{width:!0,height:!0});var Wt=w(Ae);et=Ee(Wt,"defs",{});var Gt=w(et);we=Ee(Gt,"clipPath",{id:!0,clipPathUnits:!0});var Le=w(we);ae=Ee(Le,"path",{d:!0}),w(ae).forEach(g),Le.forEach(g),Gt.forEach(g),Wt.forEach(g),this.h()},h(){pe(t.src,r=n[0].imgUrl||Dt)||c(t,"src",r),c(t,"alt",i=n[0].id),c(t,"class","card pinImage bg-surface-100 dark:bg-surface-600 z-10 absolute top-0 left-0 right-0 bottom-0 shadow-lg shadow-black svelte-1nresji"),pe(l.src,d=n[0].imgUrl||Dt)||c(l,"src",d),c(l,"alt",h=n[0].id),ie(l,"height","35%"),c(l,"class","absolute top-0 left-0 right-0 w-full bgImage z-0 object-cover opacity-60 svelte-1nresji"),c(_,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),c(P,"class","badge badge-glass my-auto py-0.5 px-1"),c(m,"class","flex gap-2 max-w-full"),c(U,"class","text-ellipsis whitespace-nowrap overflow-hidden"),c(T,"class","flex gap-1 text-center"),c($,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full mb-4"),c(ge,"class","text-xs font-bold uppercase opacity-40"),c(Me,"class",""),c(de,"class","flex flex-col items-center justify-center flex-1 gap-1"),c(Ge,"class","bg-surface-900-50-token h-full w-px opacity-20"),c(Se,"class","text-xs font-bold uppercase opacity-40"),c(ve,"class",""),c(be,"class","flex flex-col items-center justify-center flex-1 gap-1"),c(ue,"class","flex mt-auto w-full"),c(u,"class","flex flex-col max-w-full w-full absolute items-center p-4 gap-0.5 bottom-0"),ie(u,"top","calc("+n[3]*.885+"px - 8rem)"),ie(o,"background","color-mix(in lch, rgb(var(--color-surface-"+(n[6]?100:900)+")) "+(n[6]?80:60)+"%, "+(n[7]||`rgb(var(--color-surface-${n[6]?100:600})`)+")",1),c(o,"class","card !bg-surface-100 dark:!bg-surface-600 shadow-2xl shadow-black absolute top-0 -left-4 -right-4 -bottom-24 -z-1 flex flex-col p-4 gap-0.5 items-center"),ie(e,"left",n[1]+"px"),ie(e,"top",n[2]+"px"),ie(e,"width",n[4]+"px"),ie(e,"height",n[3]+"px"),c(e,"class","popup fixed z-50 pointer-events-none"),c(ae,"d","M 0,1 L 0,0 L 1,0 L 1,1 C .6 .8, .4, 1.2, 0 1 Z"),c(we,"id","myCurve"),c(we,"clipPathUnits","objectBoundingBox"),c(Ae,"width","0"),c(Ae,"height","0")},m(L,B){se(L,e,B),f(e,t),f(e,a),f(e,o),f(o,l),f(o,p),f(o,u),f(u,m),f(m,_),f(_,O),f(m,b),f(m,P),f(P,F),f(m,S),yt(M,m,null),f(u,k),f(u,T),f(T,U),f(U,D),f(T,G),f(T,N),f(N,W),f(N,le),f(N,I),f(u,K),f(u,$),f($,x),f(u,ee),yt(oe,u,null),f(u,fe),f(u,ue),f(ue,de),f(de,ge),f(de,We),f(de,Me),f(Me,Ce),f(ue,At),f(ue,Ge),f(ue,Ne),f(ue,be),f(be,Se),f(be,$e),f(be,ve),f(ve,ke),se(L,ne,B),se(L,Ae,B),f(Ae,et),f(et,we),f(we,ae),Z=!0,ce||(Ft=bt(t,"outroend",function(){di(n[5])&&n[5].apply(this,arguments)}),ce=!0)},p(L,[B]){var Re;n=L,(!Z||B&1&&!pe(t.src,r=n[0].imgUrl||Dt))&&c(t,"src",r),(!Z||B&1&&i!==(i=n[0].id))&&c(t,"alt",i),(!Z||B&1&&!pe(l.src,d=n[0].imgUrl||Dt))&&c(l,"src",d),(!Z||B&1&&h!==(h=n[0].id))&&c(l,"alt",h),(!Z||B&1)&&A!==(A=((Re=n[0].game)==null?void 0:Re.name)+"")&&Q(O,A),(!Z||B&1)&&C!==(C=n[0].tableFormat+"")&&Q(F,C);const z={};B&256&&(z.game=n[8]),M.$set(z),(!Z||B&256)&&v!==(v=n[8].manufacturer+"")&&Q(D,v),(!Z||B&256)&&Y!==(Y=n[8].year+"")&&Q(le,Y),(!Z||B&1)&&R!==(R=n[0].authors.join(", ")+"")&&Q(x,R);const re={};B&1&&(re.data=n[0].features),oe.$set(re),(!Z||B&1)&&_e!==(_e=Rt(n[0].updatedAt)+"")&&Q(Ce,_e),(!Z||B&1)&&De!==(De=Rt(n[0].createdAt||n[0].updatedAt)+"")&&Q(ke,De),(!Z||B&8)&&ie(u,"top","calc("+n[3]*.885+"px - 8rem)"),(!Z||B&192)&&ie(o,"background","color-mix(in lch, rgb(var(--color-surface-"+(n[6]?100:900)+")) "+(n[6]?80:60)+"%, "+(n[7]||`rgb(var(--color-surface-${n[6]?100:600})`)+")",1),(!Z||B&2)&&ie(e,"left",n[1]+"px"),(!Z||B&4)&&ie(e,"top",n[2]+"px"),(!Z||B&16)&&ie(e,"width",n[4]+"px"),(!Z||B&8)&&ie(e,"height",n[3]+"px")},i(L){Z||(L&&En(()=>{Z&&(s||(s=at(t,n[10],{duration:vn},!0)),s.run(1))}),he(M.$$.fragment,L),he(oe.$$.fragment,L),L&&En(()=>{Z&&(Ie||(Ie=at(o,n[11],{duration:vn},!0)),Ie.run(1))}),Z=!0)},o(L){L&&(s||(s=at(t,n[10],{duration:vn},!1)),s.run(0)),Te(M.$$.fragment,L),Te(oe.$$.fragment,L),L&&(Ie||(Ie=at(o,n[11],{duration:vn},!1)),Ie.run(0)),Z=!1},d(L){L&&(g(e),g(ne),g(Ae)),L&&s&&s.end(),Et(M),Et(oe),L&&Ie&&Ie.end(),ce=!1,Ft()}}}const vn=100;function Su(n,e,t){let r,i,s;ot(n,ws,b=>t(6,i=b));const{dbStore:a}=Ut;ot(n,a,b=>t(12,s=b));let{table:o=mi}=e,{left:l=0}=e,{top:d=0}=e,{height:h=0}=e,{width:p=0}=e,{onEnd:u=()=>{}}=e;const m=new wu;let _="";const A=(b,{duration:P,delay:C})=>({duration:P,delay:C,css:F=>{const S=Tn(F);return`
					transform: translateY(${S*-8}rem) scale(${1-S*.25});
					`}}),O=(b,{duration:P,delay:C})=>({duration:P,delay:C,css:F=>`
					transform: scale(${Tn(F)});
					`});return n.$$set=b=>{"table"in b&&t(0,o=b.table),"left"in b&&t(1,l=b.left),"top"in b&&t(2,d=b.top),"height"in b&&t(3,h=b.height),"width"in b&&t(4,p=b.width),"onEnd"in b&&t(5,u=b.onEnd)},n.$$.update=()=>{var b;n.$$.dirty&4097&&t(8,r=(b=o==null?void 0:o.game)!=null&&b.id?s[o.game.id]:Nn),n.$$.dirty&1&&o.imgUrl&&m.getColorAsync(o.imgUrl).then(P=>{P&&t(7,_=P.rgb)}),n.$$.dirty&64&&console.log(i)},[o,l,d,h,p,u,i,_,r,a,A,O,s]}class ku extends Qe{constructor(e){super(),Ze(this,e,Su,Cu,Ye,{table:0,left:1,top:2,height:3,width:4,onEnd:5})}}function ui(n){let e,t;return e=new ku({props:{table:n[0],left:n[3],top:n[4],width:n[6],height:n[5],onEnd:n[14]}}),{c(){It(e.$$.fragment)},l(r){wt(e.$$.fragment,r)},m(r,i){yt(e,r,i),t=!0},p(r,i){const s={};i&1&&(s.table=r[0]),i&8&&(s.left=r[3]),i&16&&(s.top=r[4]),i&64&&(s.width=r[6]),i&32&&(s.height=r[5]),i&256&&(s.onEnd=r[14]),e.$set(s)},i(r){t||(he(e.$$.fragment,r),t=!0)},o(r){Te(e.$$.fragment,r),t=!1},d(r){Et(e,r)}}}function Au(n){var K,$;let e,t,r,i,s,a,o,l,d,h=((K=n[0].game)==null?void 0:K.name)+"",p,u,m,_=n[0].tableFormat+"",A,O,b,P=n[9].manufacturer+"",C,F,S=n[9].year+"",M,k,T,U,v=(($=n[0].authors)==null?void 0:$.join(", "))+"",D,G,N,W,Y,le,I=n[7]&&ui(n);return{c(){e=y("a"),I&&I.c(),t=H(),r=y("img"),a=H(),o=y("div"),l=y("div"),d=y("p"),p=J(h),u=H(),m=y("div"),A=J(_),O=H(),b=y("p"),C=J(P),F=J(" ("),M=J(S),k=J(")"),T=H(),U=y("p"),D=J(v),this.h()},l(R){e=E(R,"A",{class:!0,href:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var x=w(e);I&&I.l(x),t=V(x),r=E(x,"IMG",{src:!0,alt:!0,class:!0}),a=V(x),o=E(x,"DIV",{class:!0});var ee=w(o);l=E(ee,"DIV",{class:!0});var oe=w(l);d=E(oe,"P",{class:!0});var fe=w(d);p=X(fe,h),fe.forEach(g),u=V(oe),m=E(oe,"DIV",{class:!0});var ue=w(m);A=X(ue,_),ue.forEach(g),oe.forEach(g),O=V(ee),b=E(ee,"P",{});var de=w(b);C=X(de,P),F=X(de," ("),M=X(de,S),k=X(de,")"),de.forEach(g),T=V(ee),U=E(ee,"P",{class:!0});var ge=w(U);D=X(ge,v),ge.forEach(g),ee.forEach(g),x.forEach(g),this.h()},h(){var R;pe(r.src,i=n[0].imgUrl||Dt)||c(r,"src",i),c(r,"alt",s=n[0].id),c(r,"class","card pinImage bg-surface-300-600-token svelte-134rv7p"),st(r,"hide",n[7]||n[8]),c(d,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),c(m,"class","badge badge-glass my-auto py-0.5 px-1"),c(l,"class","flex gap-2"),c(U,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),c(o,"class","flex flex-col py-4"),c(e,"class","wrapper relative z-0"),c(e,"href",n[1]),c(e,"id",G=n[0].id),c(e,"data-gameid",N=(R=n[0].game)==null?void 0:R.id),c(e,"data-filetype","tableFiles")},m(R,x){se(R,e,x),I&&I.m(e,null),f(e,t),f(e,r),n[15](r),f(e,a),f(e,o),f(o,l),f(l,d),f(d,p),f(l,u),f(l,m),f(m,A),f(o,O),f(o,b),f(b,C),f(b,F),f(b,M),f(b,k),f(o,T),f(o,U),f(U,D),W=!0,Y||(le=[bt(e,"mouseenter",n[11]),bt(e,"mouseleave",n[12])],Y=!0)},p(R,[x]){var ee,oe,fe;R[7]?I?(I.p(R,x),x&128&&he(I,1)):(I=ui(R),I.c(),he(I,1),I.m(e,t)):I&&(nr(),Te(I,1,1,()=>{I=null}),rr()),(!W||x&1&&!pe(r.src,i=R[0].imgUrl||Dt))&&c(r,"src",i),(!W||x&1&&s!==(s=R[0].id))&&c(r,"alt",s),(!W||x&384)&&st(r,"hide",R[7]||R[8]),(!W||x&1)&&h!==(h=((ee=R[0].game)==null?void 0:ee.name)+"")&&Q(p,h),(!W||x&1)&&_!==(_=R[0].tableFormat+"")&&Q(A,_),(!W||x&512)&&P!==(P=R[9].manufacturer+"")&&Q(C,P),(!W||x&512)&&S!==(S=R[9].year+"")&&Q(M,S),(!W||x&1)&&v!==(v=((oe=R[0].authors)==null?void 0:oe.join(", "))+"")&&Q(D,v),(!W||x&2)&&c(e,"href",R[1]),(!W||x&1&&G!==(G=R[0].id))&&c(e,"id",G),(!W||x&1&&N!==(N=(fe=R[0].game)==null?void 0:fe.id))&&c(e,"data-gameid",N)},i(R){W||(he(I),W=!0)},o(R){Te(I),W=!1},d(R){R&&g(e),I&&I.d(),n[15](null),Y=!1,tr(le)}}}const Ru=200;function Pu(n,e,t){let r,i,s;ot(n,hs,S=>t(17,i=S));const{dbStore:a}=Ut;ot(n,a,S=>t(13,s=S));let{file:o=mi}=e,{href:l=""}=e,d,h=0,p=0,u=0,m=0,_=!1,A=!1,O;const b=()=>{var M;if(i.mobile)return;const S=d.getBoundingClientRect();t(3,h=S.left),t(4,p=S.top),t(6,m=S.width),t(5,u=S.height),(M=document.getElementById("page"))==null||M.addEventListener("scroll",P),O=setTimeout(()=>{t(7,_=!0),O=void 0},Ru)},P=()=>{var S;i.mobile||((S=document.getElementById("page"))==null||S.removeEventListener("scroll",P),O?(t(7,_=!1),clearTimeout(O)):_&&(t(7,_=!1),t(8,A=!0)))},C=()=>t(8,A=!1);function F(S){fi[S?"unshift":"push"](()=>{d=S,t(2,d)})}return n.$$set=S=>{"file"in S&&t(0,o=S.file),"href"in S&&t(1,l=S.href)},n.$$.update=()=>{var S;n.$$.dirty&8193&&t(9,r=(S=o==null?void 0:o.game)!=null&&S.id?s[o.game.id]:Nn)},[o,l,d,h,p,u,m,_,A,r,a,b,P,s,C,F]}class Du extends Qe{constructor(e){super(),Ze(this,e,Pu,Au,Ye,{file:0,href:1})}}const rd={game:{route:"games",name:"Games",component:$c},tableFiles:{route:"tables",name:"Tables",component:Du},b2sFiles:{route:"b2s",name:"Backglasses",component:Gc},pupPackFiles:{route:"puppacks",name:"PuP Packs",component:Ue,icon:mc},altColorFiles:{route:"altcolors",name:"Alt. Colors",component:Ue,icon:Lc},altSoundFiles:{route:"altsounds",name:"Alt. Sounds",component:Ue,icon:Nc},topperFiles:{route:"toppers",name:"Toppers",component:Ue,icon:_c},romFiles:{route:"roms",name:"Roms",component:Ue,icon:Cc},povFiles:{route:"pov",name:"POVs",component:Ue,icon:Rc},soundFiles:{route:"sounds",name:"Sounds",component:Ue,icon:kc},mediaPackFiles:{route:"mediapacks",name:"Media Packs",component:Ue,icon:bc},wheelArtFiles:{route:"wheelart",name:"Wheelart",component:Ue,icon:yc},ruleFiles:{route:"rules",name:"Rules",component:Ue,icon:Pc}};export{qu as A,Ju as B,Qu as C,ju as D,Fc as E,pc as F,yc as G,On as P,Du as T,gr as U,Yu as a,Ec as b,Fu as c,Xu as d,Fe as e,Hu as f,Gu as g,Ku as h,Zu as i,hs as j,Tu as k,Dt as l,rd as m,Pt as n,ys as o,xu as p,vc as q,zu as r,$u as s,wu as t,Vu as u,ed as v,Wu as w,Bu as x,nd as y,td as z};
