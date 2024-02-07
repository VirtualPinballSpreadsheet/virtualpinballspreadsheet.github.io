import{a1 as Wr,s as Bt,e as Nr,i as we,d as f,B as _t,f as p,l as O,g,h as b,m as N,j as u,G as c,H as nr,r as Mt,Y as Ci,a as C,c as k,R as Ie,n as H,$ as tr,Z as Mr,k as vt,T as ie,I as Is}from"./scheduler.3343ecfc.js";import{S as Vt,i as Ht,a as bt,g as ki,t as Lt,c as Ri,b as sr,d as ir,m as ar,e as or}from"./index.30a43d8b.js";import{F as Pi,k as Di,e as qe,D as Rn,E as Oi,A as Ni,G as Mi,H as Li,I as Ui,J as Fi,K as Bi,L as Vi,y as Hi}from"./index.92627f02.js";import{d as gr,e as mr,D as lr,f as ws,g as ji,h as xi,a as Wi,i as zi,c as Es,b as Gi,E as $i}from"./DbStore.e6e0ab2b.js";import{P as Lr}from"./bgPlaceholder.f57059f0.js";import{l as ys,m as Ts}from"./ProgressBar.svelte_svelte_type_style_lang.3d0725ef.js";import{_ as Pn}from"./preload-helper.a4192956.js";import{w as un}from"./index.3bf0d6e8.js";import{f as $t}from"./formatDate.b9410829.js";/**
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
 */const Ss=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ki=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],a=r[t++],o=r[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],a=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},As={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,o=a?r[s+1]:0,l=s+2<r.length,d=l?r[s+2]:0,h=i>>2,m=(i&3)<<4|o>>4;let I=(o&15)<<2|d>>6,v=d&63;l||(v=64,a||(I=64)),n.push(t[h],t[m],t[I],t[v])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ss(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Ki(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],o=s<r.length?t[r.charAt(s)]:0;++s;const d=s<r.length?t[r.charAt(s)]:64;++s;const m=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||o==null||d==null||m==null)throw new qi;const I=i<<2|o>>4;if(n.push(I),d!==64){const v=o<<4&240|d>>2;if(n.push(v),m!==64){const w=d<<6&192|m;n.push(w)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class qi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ji=function(r){const e=Ss(r);return As.encodeByteArray(e,!0)},Cs=function(r){return Ji(r).replace(/\./g,"")},ks=function(r){try{return As.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xi(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yi=()=>Xi().__FIREBASE_DEFAULTS__,Qi=()=>{if(typeof process>"u"||typeof process.env>"u")return;const r={}.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Zi=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&ks(r[1]);return e&&JSON.parse(e)},dn=()=>{try{return Yi()||Qi()||Zi()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ea=r=>{var e,t;return(t=(e=dn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Rs=()=>{var r;return(r=dn())===null||r===void 0?void 0:r.config},Ps=r=>{var e;return(e=dn())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class ta{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ra(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function na(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function sa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ia(){const r=de();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function aa(){try{return typeof indexedDB=="object"}catch{return!1}}function oa(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const la="FirebaseError";class Et extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=la,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?ca(i,n):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new Et(s,o,n)}}function ca(r,e){return r.replace(ua,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const ua=/\{\$([^}]+)}/g;function da(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ur(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],a=e[s];if(Dn(i)&&Dn(a)){if(!Ur(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Dn(r){return r!==null&&typeof r=="object"}/**
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
 */function _r(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ha(r,e){const t=new fa(r,e);return t.subscribe.bind(t)}class fa{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");pa(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=qr),s.error===void 0&&(s.error=qr),s.complete===void 0&&(s.complete=qr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pa(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function qr(){}/**
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
 */function jt(r){return r&&r._delegate?r._delegate:r}class Xt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dt="[DEFAULT]";/**
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
 */class ga{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new ta;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(va(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);n===o&&a.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ma(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ma(r){return r===Dt?void 0:r}function va(r){return r.instantiationMode==="EAGER"}/**
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
 */class _a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ga(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})($||($={}));const ba={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Ia=$.INFO,wa={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Ea=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=wa[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ds{constructor(e){this.name=e,this._logLevel=Ia,this._logHandler=Ea,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ba[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const ya=(r,e)=>e.some(t=>r instanceof t);let On,Nn;function Ta(){return On||(On=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sa(){return Nn||(Nn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Os=new WeakMap,tn=new WeakMap,Ns=new WeakMap,Jr=new WeakMap,hn=new WeakMap;function Aa(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{t(It(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Os.set(t,r)}).catch(()=>{}),hn.set(e,r),e}function Ca(r){if(tn.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});tn.set(r,e)}let rn={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return tn.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Ns.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return It(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ka(r){rn=r(rn)}function Ra(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Xr(this),e,...t);return Ns.set(n,e.sort?e.sort():[e]),It(n)}:Sa().includes(r)?function(...e){return r.apply(Xr(this),e),It(Os.get(this))}:function(...e){return It(r.apply(Xr(this),e))}}function Pa(r){return typeof r=="function"?Ra(r):(r instanceof IDBTransaction&&Ca(r),ya(r,Ta())?new Proxy(r,rn):r)}function It(r){if(r instanceof IDBRequest)return Aa(r);if(Jr.has(r))return Jr.get(r);const e=Pa(r);return e!==r&&(Jr.set(r,e),hn.set(e,r)),e}const Xr=r=>hn.get(r);function Da(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,e),o=It(a);return n&&a.addEventListener("upgradeneeded",l=>{n(It(a.result),l.oldVersion,l.newVersion,It(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),o.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),o}const Oa=["get","getKey","getAll","getAllKeys","count"],Na=["put","add","delete","clear"],Yr=new Map;function Mn(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Yr.get(e))return Yr.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Na.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Oa.includes(t)))return;const i=async function(a,...o){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(o.shift())),(await Promise.all([d[t](...o),s&&l.done]))[0]};return Yr.set(e,i),i}ka(r=>({...r,get:(e,t,n)=>Mn(e,t)||r.get(e,t,n),has:(e,t)=>!!Mn(e,t)||r.has(e,t)}));/**
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
 */class Ma{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(La(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function La(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nn="@firebase/app",Ln="0.9.15";/**
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
 */const Ut=new Ds("@firebase/app"),Ua="@firebase/app-compat",Fa="@firebase/analytics-compat",Ba="@firebase/analytics",Va="@firebase/app-check-compat",Ha="@firebase/app-check",ja="@firebase/auth",xa="@firebase/auth-compat",Wa="@firebase/database",za="@firebase/database-compat",Ga="@firebase/functions",$a="@firebase/functions-compat",Ka="@firebase/installations",qa="@firebase/installations-compat",Ja="@firebase/messaging",Xa="@firebase/messaging-compat",Ya="@firebase/performance",Qa="@firebase/performance-compat",Za="@firebase/remote-config",eo="@firebase/remote-config-compat",to="@firebase/storage",ro="@firebase/storage-compat",no="@firebase/firestore",so="@firebase/firestore-compat",io="firebase",ao="10.1.0";/**
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
 */const sn="[DEFAULT]",oo={[nn]:"fire-core",[Ua]:"fire-core-compat",[Ba]:"fire-analytics",[Fa]:"fire-analytics-compat",[Ha]:"fire-app-check",[Va]:"fire-app-check-compat",[ja]:"fire-auth",[xa]:"fire-auth-compat",[Wa]:"fire-rtdb",[za]:"fire-rtdb-compat",[Ga]:"fire-fn",[$a]:"fire-fn-compat",[Ka]:"fire-iid",[qa]:"fire-iid-compat",[Ja]:"fire-fcm",[Xa]:"fire-fcm-compat",[Ya]:"fire-perf",[Qa]:"fire-perf-compat",[Za]:"fire-rc",[eo]:"fire-rc-compat",[to]:"fire-gcs",[ro]:"fire-gcs-compat",[no]:"fire-fst",[so]:"fire-fst-compat","fire-js":"fire-js",[io]:"fire-js-all"};/**
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
 */const Fr=new Map,an=new Map;function lo(r,e){try{r.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function cr(r){const e=r.name;if(an.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;an.set(e,r);for(const t of Fr.values())lo(t,r);return!0}function Ms(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}/**
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
 */const co={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wt=new vr("app","Firebase",co);/**
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
 */class uo{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
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
 */const br=ao;function Ls(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:sn,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw wt.create("bad-app-name",{appName:String(s)});if(t||(t=Rs()),!t)throw wt.create("no-options");const i=Fr.get(s);if(i){if(Ur(t,i.options)&&Ur(n,i.config))return i;throw wt.create("duplicate-app",{appName:s})}const a=new _a(s);for(const l of an.values())a.addComponent(l);const o=new uo(t,n,a);return Fr.set(s,o),o}function ho(r=sn){const e=Fr.get(r);if(!e&&r===sn&&Rs())return Ls();if(!e)throw wt.create("no-app",{appName:r});return e}function Kt(r,e,t){var n;let s=(n=oo[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(o.join(" "));return}cr(new Xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const fo="firebase-heartbeat-database",po=1,ur="firebase-heartbeat-store";let Qr=null;function Us(){return Qr||(Qr=Da(fo,po,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ur)}}}).catch(r=>{throw wt.create("idb-open",{originalErrorMessage:r.message})})),Qr}async function go(r){try{return await(await Us()).transaction(ur).objectStore(ur).get(Fs(r))}catch(e){if(e instanceof Et)Ut.warn(e.message);else{const t=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(t.message)}}}async function Un(r,e){try{const n=(await Us()).transaction(ur,"readwrite");await n.objectStore(ur).put(e,Fs(r)),await n.done}catch(t){if(t instanceof Et)Ut.warn(t.message);else{const n=wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(n.message)}}}function Fs(r){return`${r.name}!${r.options.appId}`}/**
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
 */const mo=1024,vo=30*24*60*60*1e3;class _o{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Io(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Fn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=vo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fn(),{heartbeatsToSend:t,unsentEntries:n}=bo(this._heartbeatsCache.heartbeats),s=Cs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Fn(){return new Date().toISOString().substring(0,10)}function bo(r,e=mo){const t=[];let n=r.slice();for(const s of r){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Bn(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Bn(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Io{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aa()?oa().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await go(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Un(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Un(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bn(r){return Cs(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function wo(r){cr(new Xt("platform-logger",e=>new Ma(e),"PRIVATE")),cr(new Xt("heartbeat",e=>new _o(e),"PRIVATE")),Kt(nn,Ln,r),Kt(nn,Ln,"esm2017"),Kt("fire-js","")}wo("");var Eo="firebase",yo="10.1.0";/**
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
 */Kt(Eo,yo,"app");function fn(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function Bs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const To=Bs,Vs=new vr("auth","Firebase",Bs());/**
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
 */const Br=new Ds("@firebase/auth");function So(r,...e){Br.logLevel<=$.WARN&&Br.warn(`Auth (${br}): ${r}`,...e)}function Rr(r,...e){Br.logLevel<=$.ERROR&&Br.error(`Auth (${br}): ${r}`,...e)}/**
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
 */function Qe(r,...e){throw pn(r,...e)}function Xe(r,...e){return pn(r,...e)}function Hs(r,e,t){const n=Object.assign(Object.assign({},To()),{[e]:t});return new vr("auth","Firebase",n).create(e,{appName:r.name})}function Ao(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Qe(r,"argument-error"),Hs(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pn(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Vs.create(r,...e)}function D(r,e,...t){if(!r)throw pn(e,...t)}function it(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Rr(e),new Error(e)}function ot(r,e){r||it(e)}/**
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
 */function on(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Co(){return Vn()==="http:"||Vn()==="https:"}function Vn(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function ko(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Co()||na()||"connection"in navigator)?navigator.onLine:!0}function Ro(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ir{constructor(e,t){this.shortDelay=e,this.longDelay=t,ot(t>e,"Short delay should be less than long delay!"),this.isMobile=ra()||sa()}get(){return ko()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gn(r,e){ot(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class js{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Po={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Do=new Ir(3e4,6e4);function xs(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function wr(r,e,t,n,s={}){return Ws(r,s,async()=>{let i={},a={};n&&(e==="GET"?a=n:i={body:JSON.stringify(n)});const o=_r(Object.assign({key:r.config.apiKey},a)).slice(1),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode),js.fetch()(zs(r,r.config.apiHost,t,o),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Ws(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Po),e);try{const s=new No(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ar(r,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const o=i.ok?a.errorMessage:a.error.message,[l,d]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(r,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ar(r,"email-already-in-use",a);if(l==="USER_DISABLED")throw Ar(r,"user-disabled",a);const h=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Hs(r,h,d);Qe(r,h)}}catch(s){if(s instanceof Et)throw s;Qe(r,"network-request-failed",{message:String(s)})}}async function Oo(r,e,t,n,s={}){const i=await wr(r,e,t,n,s);return"mfaPendingCredential"in i&&Qe(r,"multi-factor-auth-required",{_serverResponse:i}),i}function zs(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?gn(r.config,s):`${r.config.apiScheme}://${s}`}class No{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Xe(this.auth,"network-request-failed")),Do.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ar(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Xe(r,e,n);return s.customData._tokenResponse=t,s}/**
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
 */async function Mo(r,e){return wr(r,"POST","/v1/accounts:delete",e)}async function Lo(r,e){return wr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function rr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Uo(r,e=!1){const t=jt(r),n=await t.getIdToken(e),s=mn(n);D(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:rr(Zr(s.auth_time)),issuedAtTime:rr(Zr(s.iat)),expirationTime:rr(Zr(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Zr(r){return Number(r)*1e3}function mn(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ks(t);return s?JSON.parse(s):(Rr("Failed to decode base64 JWT payload"),null)}catch(s){return Rr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Fo(r){const e=mn(r);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function dr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Et&&Bo(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Bo({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Vo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rr(this.lastLoginAt),this.creationTime=rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vr(r){var e;const t=r.auth,n=await r.getIdToken(),s=await dr(r,Lo(t,{idToken:n}));D(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?xo(i.providerUserInfo):[],o=jo(r.providerData,a),l=r.isAnonymous,d=!(r.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Gs(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(r,m)}async function Ho(r){const e=jt(r);await Vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jo(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function xo(r){return r.map(e=>{var{providerId:t}=e,n=fn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Wo(r,e){const t=await Ws(r,{},async()=>{const n=_r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,a=zs(r,s,"/v1/token",`key=${i}`),o=await r._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",js.fetch()(a,{method:"POST",headers:o,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await Wo(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,a=new hr;return n&&(D(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),s&&(D(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(D(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hr,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
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
 */function ft(r,e){D(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Nt{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=fn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await dr(this,this.stsTokenManager.getToken(this.auth,e));return D(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Uo(this,e)}reload(){return Ho(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Vr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await dr(this,Mo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,a,o,l,d,h;const m=(n=t.displayName)!==null&&n!==void 0?n:void 0,I=(s=t.email)!==null&&s!==void 0?s:void 0,v=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,w=(a=t.photoURL)!==null&&a!==void 0?a:void 0,y=(o=t.tenantId)!==null&&o!==void 0?o:void 0,B=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,A=(d=t.createdAt)!==null&&d!==void 0?d:void 0,P=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:L,emailVerified:K,isAnonymous:G,providerData:F,stsTokenManager:re}=t;D(L&&re,e,"internal-error");const E=hr.fromJSON(this.name,re);D(typeof L=="string",e,"internal-error"),ft(m,e.name),ft(I,e.name),D(typeof K=="boolean",e,"internal-error"),D(typeof G=="boolean",e,"internal-error"),ft(v,e.name),ft(w,e.name),ft(y,e.name),ft(B,e.name),ft(A,e.name),ft(P,e.name);const j=new Nt({uid:L,auth:e,email:I,emailVerified:K,displayName:m,isAnonymous:G,photoURL:w,phoneNumber:v,tenantId:y,stsTokenManager:E,createdAt:A,lastLoginAt:P});return F&&Array.isArray(F)&&(j.providerData=F.map(X=>Object.assign({},X))),B&&(j._redirectEventId=B),j}static async _fromIdTokenResponse(e,t,n=!1){const s=new hr;s.updateFromServerResponse(t);const i=new Nt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Vr(i),i}}/**
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
 */const Hn=new Map;function at(r){ot(r instanceof Function,"Expected a class definition");let e=Hn.get(r);return e?(ot(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Hn.set(r,e),e)}/**
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
 */class $s{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$s.type="NONE";const jn=$s;/**
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
 */function Pr(r,e,t){return`firebase:${r}:${e}:${t}`}class qt{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Pr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Pr("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new qt(at(jn),e,n);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||at(jn);const a=Pr(n,e.config.apiKey,e.name);let o=null;for(const d of t)try{const h=await d._get(a);if(h){const m=Nt._fromJSON(e,h);d!==i&&(o=m),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new qt(i,e,n):(i=l[0],o&&await i._set(a,o.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new qt(i,e,n))}}/**
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
 */function xn(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Js(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ks(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ys(e))return"Blackberry";if(Qs(e))return"Webos";if(vn(e))return"Safari";if((e.includes("chrome/")||qs(e))&&!e.includes("edge/"))return"Chrome";if(Xs(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Ks(r=de()){return/firefox\//i.test(r)}function vn(r=de()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qs(r=de()){return/crios\//i.test(r)}function Js(r=de()){return/iemobile/i.test(r)}function Xs(r=de()){return/android/i.test(r)}function Ys(r=de()){return/blackberry/i.test(r)}function Qs(r=de()){return/webos/i.test(r)}function zr(r=de()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function zo(r=de()){var e;return zr(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Go(){return ia()&&document.documentMode===10}function Zs(r=de()){return zr(r)||Xs(r)||Qs(r)||Ys(r)||/windows phone/i.test(r)||Js(r)}function $o(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ei(r,e=[]){let t;switch(r){case"Browser":t=xn(de());break;case"Worker":t=`${xn(de())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${br}/${n}`}async function ti(r,e){return wr(r,"GET","/v2/recaptchaConfig",xs(r,e))}function Wn(r){return r!==void 0&&r.enterprise!==void 0}class ri{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function Ko(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}function ni(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Xe("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",Ko().appendChild(n)})}function qo(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const Jo="https://www.google.com/recaptcha/enterprise.js?render=",Xo="recaptcha-enterprise",Yo="NO_RECAPTCHA";class Qo{constructor(e){this.type=Xo,this.auth=Er(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,o)=>{ti(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const d=new ri(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(l=>{o(l)})})}function s(i,a,o){const l=window.grecaptcha;Wn(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Yo)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,a)=>{n(this.auth).then(o=>{if(!t&&Wn(window.grecaptcha))s(o,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}ni(Jo+o).then(()=>{s(o,i,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}/**
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
 */class Zo{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((a,o)=>{try{const l=e(i);a(l)}catch(l){o(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */class el{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zn(this),this.idTokenSubscription=new zn(this),this.beforeStateQueue=new Zo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=at(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await qt.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,o=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===o)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ro()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?jt(e):null;return t&&D(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}async initializeRecaptchaConfig(){const e=await ti(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ri(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Qo(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&at(e)||this._popupRedirectResolver;D(t,this,"argument-error"),this.redirectPersistenceManager=await qt.create(this,[at(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return D(a,this,"internal-error"),a.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,n,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ei(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&So(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Er(r){return jt(r)}class zn{constructor(e){this.auth=e,this.observer=null,this.addObserver=ha(t=>this.observer=t)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function tl(r,e){const t=Ms(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ur(i,e??{}))return s;Qe(s,"already-initialized")}return t.initialize({options:e})}function rl(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(at);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function nl(r,e,t){const n=Er(r);D(n._canInitEmulator,n,"emulator-config-failed"),D(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=si(e),{host:a,port:o}=sl(e),l=o===null?"":`:${o}`;n.config.emulator={url:`${i}//${a}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||il()}function si(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function sl(r){const e=si(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Gn(n.substr(i.length+1))}}else{const[i,a]=n.split(":");return{host:i,port:Gn(a)}}}function Gn(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function il(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class ii{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,t){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}/**
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
 */async function Jt(r,e){return Oo(r,"POST","/v1/accounts:signInWithIdp",xs(r,e))}/**
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
 */const al="http://localhost";class Ft extends ii{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=fn(t,["providerId","signInMethod"]);if(!n||!s)return null;const a=new Ft(n,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Jt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Jt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jt(e,t)}buildRequest(){const e={requestUri:al,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_r(t)}return e}}/**
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
 */class _n{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yr extends _n{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pt extends yr{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";pt.PROVIDER_ID="facebook.com";/**
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
 */class gt extends yr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ft._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gt.credential(t,n)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
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
 */class Je extends yr{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch{return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com";Je.PROVIDER_ID="github.com";/**
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
 */class mt extends yr{constructor(){super("twitter.com")}static credential(e,t){return Ft._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return mt.credential(t,n)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
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
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await Nt._fromIdTokenResponse(e,n,s),a=$n(n);return new Yt({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=$n(n);return new Yt({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function $n(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Hr extends Et{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Hr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Hr(e,t,n,s)}}function ai(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hr._fromErrorAndOperation(r,i,e,n):i})}async function ol(r,e,t=!1){const n=await dr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Yt._forOperation(r,"link",n)}/**
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
 */async function ll(r,e,t=!1){const{auth:n}=r,s="reauthenticate";try{const i=await dr(r,ai(n,s,e,r),t);D(i.idToken,n,"internal-error");const a=mn(i.idToken);D(a,n,"internal-error");const{sub:o}=a;return D(r.uid===o,n,"user-mismatch"),Yt._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qe(n,"user-mismatch"),i}}/**
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
 */async function cl(r,e,t=!1){const n="signIn",s=await ai(r,n,e),i=await Yt._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function ul(r,e,t,n){return jt(r).onIdTokenChanged(e,t,n)}function dl(r,e,t){return jt(r).beforeAuthStateChanged(e,t)}function hl(r){return jt(r).signOut()}const jr="__sak";/**
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
 */class oi{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jr,"1"),this.storage.removeItem(jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function fl(){const r=de();return vn(r)||zr(r)}const pl=1e3,gl=10;class li extends oi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fl()&&$o(),this.fallbackToPolling=Zs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},i=this.storage.getItem(n);Go()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gl):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},pl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}li.type="LOCAL";const ml=li;/**
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
 */class ci extends oi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ci.type="SESSION";const ui=ci;/**
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
 */function vl(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Gr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new Gr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const o=Array.from(a).map(async d=>d(t.origin,i)),l=await vl(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gr.receivers=[];/**
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
 */function bn(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class _l{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((o,l)=>{const d=bn("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},n);a={messageChannel:s,onMessage(m){const I=m;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(I.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ye(){return window}function bl(r){Ye().location.href=r}/**
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
 */function di(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function Il(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wl(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function El(){return di()?self:null}/**
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
 */const hi="firebaseLocalStorageDb",yl=1,xr="firebaseLocalStorage",fi="fbase_key";class Tr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $r(r,e){return r.transaction([xr],e?"readwrite":"readonly").objectStore(xr)}function Tl(){const r=indexedDB.deleteDatabase(hi);return new Tr(r).toPromise()}function ln(){const r=indexedDB.open(hi,yl);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(xr,{keyPath:fi})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(xr)?e(n):(n.close(),await Tl(),e(await ln()))})})}async function Kn(r,e,t){const n=$r(r,!0).put({[fi]:e,value:t});return new Tr(n).toPromise()}async function Sl(r,e){const t=$r(r,!1).get(e),n=await new Tr(t).toPromise();return n===void 0?null:n.value}function qn(r,e){const t=$r(r,!0).delete(e);return new Tr(t).toPromise()}const Al=800,Cl=3;class pi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ln(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Cl)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return di()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gr._getInstance(El()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Il(),!this.activeServiceWorker)return;this.sender=new _l(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ln();return await Kn(e,jr,"1"),await qn(e,jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Sl(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>qn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$r(s,!1).getAll();return new Tr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Al)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pi.type="LOCAL";const kl=pi;new Ir(3e4,6e4);/**
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
 */function gi(r,e){return e?at(e):(D(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class In extends ii{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rl(r){return cl(r.auth,new In(r),r.bypassAuthState)}function Pl(r){const{auth:e,user:t}=r;return D(t,e,"internal-error"),ll(t,new In(r),r.bypassAuthState)}async function Dl(r){const{auth:e,user:t}=r;return D(t,e,"internal-error"),ol(t,new In(r),r.bypassAuthState)}/**
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
 */class mi{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rl;case"linkViaPopup":case"linkViaRedirect":return Dl;case"reauthViaPopup":case"reauthViaRedirect":return Pl;default:Qe(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ol=new Ir(2e3,1e4);async function Nl(r,e,t){const n=Er(r);Ao(r,e,_n);const s=gi(n,t);return new Ot(n,"signInViaPopup",e,s).executeNotNull()}class Ot extends mi{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Ot.currentPopupAction&&Ot.currentPopupAction.cancel(),Ot.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=bn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ol.get())};e()}}Ot.currentPopupAction=null;/**
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
 */const Ml="pendingRedirect",Dr=new Map;class Ll extends mi{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Dr.get(this.auth._key());if(!e){try{const n=await Ul(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Dr.set(this.auth._key(),e)}return this.bypassAuthState||Dr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ul(r,e){const t=Vl(e),n=Bl(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function Fl(r,e){Dr.set(r._key(),e)}function Bl(r){return at(r._redirectPersistence)}function Vl(r){return Pr(Ml,r.config.apiKey,r.name)}async function Hl(r,e,t=!1){const n=Er(r),s=gi(n,e),a=await new Ll(n,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const jl=10*60*1e3;class xl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wl(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!vi(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jl&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jn(e))}saveEventToCache(e){this.cachedEventUids.add(Jn(e)),this.lastProcessedEventTime=Date.now()}}function Jn(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function vi({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wl(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vi(r);default:return!1}}/**
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
 */async function zl(r,e={}){return wr(r,"GET","/v1/projects",e)}/**
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
 */const Gl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$l=/^https?/;async function Kl(r){if(r.config.emulator)return;const{authorizedDomains:e}=await zl(r);for(const t of e)try{if(ql(t))return}catch{}Qe(r,"unauthorized-domain")}function ql(r){const e=on(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!$l.test(t))return!1;if(Gl.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const Jl=new Ir(3e4,6e4);function Xn(){const r=Ye().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function Xl(r){return new Promise((e,t)=>{var n,s,i;function a(){Xn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xn(),t(Xe(r,"network-request-failed"))},timeout:Jl.get()})}if(!((s=(n=Ye().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)a();else{const o=qo("iframefcb");return Ye()[o]=()=>{gapi.load?a():t(Xe(r,"network-request-failed"))},ni(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw Or=null,e})}let Or=null;function Yl(r){return Or=Or||Xl(r),Or}/**
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
 */const Ql=new Ir(5e3,15e3),Zl="__/auth/iframe",ec="emulator/auth/iframe",tc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nc(r){const e=r.config;D(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?gn(e,ec):`https://${r.config.authDomain}/${Zl}`,n={apiKey:e.apiKey,appName:r.name,v:br},s=rc.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${_r(n).slice(1)}`}async function sc(r){const e=await Yl(r),t=Ye().gapi;return D(t,r,"internal-error"),e.open({where:document.body,url:nc(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tc,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const a=Xe(r,"network-request-failed"),o=Ye().setTimeout(()=>{i(a)},Ql.get());function l(){Ye().clearTimeout(o),s(n)}n.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const ic={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ac=500,oc=600,lc="_blank",cc="http://localhost";class Yn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uc(r,e,t,n=ac,s=oc){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const l=Object.assign(Object.assign({},ic),{width:n.toString(),height:s.toString(),top:i,left:a}),d=de().toLowerCase();t&&(o=qs(d)?lc:t),Ks(d)&&(e=e||cc,l.scrollbars="yes");const h=Object.entries(l).reduce((I,[v,w])=>`${I}${v}=${w},`,"");if(zo(d)&&o!=="_self")return dc(e||"",o),new Yn(null);const m=window.open(e||"",o,h);D(m,r,"popup-blocked");try{m.focus()}catch{}return new Yn(m)}function dc(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const hc="__/auth/handler",fc="emulator/auth/handler",pc=encodeURIComponent("fac");async function Qn(r,e,t,n,s,i){D(r.config.authDomain,r,"auth-domain-config-required"),D(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:br,eventId:s};if(e instanceof _n){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",da(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries(i||{}))a[h]=m}if(e instanceof yr){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(a.scopes=h.join(","))}r.tenantId&&(a.tid=r.tenantId);const o=a;for(const h of Object.keys(o))o[h]===void 0&&delete o[h];const l=await r._getAppCheckToken(),d=l?`#${pc}=${encodeURIComponent(l)}`:"";return`${gc(r)}?${_r(o).slice(1)}${d}`}function gc({config:r}){return r.emulator?gn(r,fc):`https://${r.authDomain}/${hc}`}/**
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
 */const en="webStorageSupport";class mc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ui,this._completeRedirectFn=Hl,this._overrideRedirectResult=Fl}async _openPopup(e,t,n,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Qn(e,t,n,on(),s);return uc(e,a,bn())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Qn(e,t,n,on(),s);return bl(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await sc(e),n=new xl(e);return t.register("authEvent",s=>(D(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(en,{type:en},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[en];a!==void 0&&t(!!a),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zs()||vn()||zr()}}const vc=mc;var Zn="@firebase/auth",es="1.1.0";/**
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
 */class _c{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bc(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ic(r){cr(new Xt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;D(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:a,authDomain:o,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ei(r)},d=new el(n,s,i,l);return rl(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),cr(new Xt("auth-internal",e=>{const t=Er(e.getProvider("auth").getImmediate());return(n=>new _c(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(Zn,es,bc(r)),Kt(Zn,es,"esm2017")}/**
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
 */const wc=5*60,Ec=Ps("authIdTokenMaxAge")||wc;let ts=null;const yc=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Ec)return;const s=t==null?void 0:t.token;ts!==s&&(ts=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Tc(r=ho()){const e=Ms(r,"auth");if(e.isInitialized())return e.getImmediate();const t=tl(r,{popupRedirectResolver:vc,persistence:[kl,ml,ui]}),n=Ps("authTokenSyncURL");if(n){const i=yc(n);dl(t,i,()=>i(t.currentUser)),ul(t,a=>i(a))}const s=ea("auth");return s&&nl(t,`http://${s}`),t}Ic("Browser");const Sc={apiKey:"AIzaSyAjCRLDHuTkfnKU5TTV6ZZasUXecSvlQOE",authDomain:"virtual-pinball-spreadsh-71a64.firebaseapp.com",projectId:"virtual-pinball-spreadsh-71a64",appId:"1:497322440319:web:8a7f7a2997664a9af7f14a",measurementId:"G-DB48L7QGX0"},Ac=Ls(Sc),_i=Tc(Ac),Kr=ys("user",{}),wn=un([]),bi=un(!1);let fr;const Cc=()=>{const r=new Je;return r.addScope("public_repo"),r.setCustomParameters({allow_signup:"false"}),new Promise(e=>{Nl(_i,r).then(async t=>{const n=Je.credentialFromResult(t),s=t.user;if(s.displayName=t._tokenResponse.screenName,!(n!=null&&n.accessToken))throw new Error;e(En(n.accessToken,s))}).catch(t=>{console.error(t),e(!1)})})},En=async(r,e)=>{try{const{Octokit:t}=await Pn(()=>import("https://esm.sh/octokit"),[],import.meta.url),{createOrUpdateTextFile:n}=await Pn(()=>import("https://esm.sh/@octokit/plugin-create-or-update-text-file"),[],import.meta.url),s=t.plugin(n),i=new s({auth:r}),o=(await i.request("GET /repos/{owner}/{repo}/collaborators/{username}/permission",{owner:gr,username:e.displayName,repo:mr})).data.permission,l=o==="admin"||o==="write"||location.hostname==="localhost"||location.hostname==="127.0.0.1";return Kr.set({user:e,permission:o,token:r,admin:l}),fr=i,(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.octokit=i),l&&await wi(),!0}catch(t){return console.error(t),await Ii(),!1}},Ii=()=>new Promise(r=>{hl(_i).then(()=>{Kr.set({}),r()})}),kc=async(r,e)=>{const t=`${ji}${e}_${new Date().getTime()}.webp`,n=await Dc(r);let s;try{s=(await fr.request(`GET /repos/{owner}/{repo}/contents/${t}`,{owner:gr,repo:mr})).data.sha}catch{}try{const i=await fr.rest.repos.createOrUpdateFileContents({owner:"VirtualPinballSpreadsheet",repo:"vps-db",path:t,sha:s,content:n,message:`IMAGE:${e} - updated image`});return`https://virtualpinballspreadsheet.github.io/vps-db/${t}`}catch(i){console.error(i);return}},Rc=async r=>{try{const e=await fr.createOrUpdateTextFile({owner:gr,repo:mr,branch:ws,path:`${xi}${r.id}.json`,content:JSON.stringify(r),message:`GAME:${r.id} - Updated ${r.name}`});return wn.update(t=>{var n;return[...t,{author:((n=Wr(yn.userStore).user)==null?void 0:n.displayName)||"???",id:r.id,updatedAt:new Date().toISOString()}]}),!0}catch(e){return console.error(e),!1}},Pc=async()=>{try{const r=await fr.createOrUpdateTextFile({owner:gr,repo:mr,path:"lastUpdated.json",content:JSON.stringify(new Date().getTime()),message:"UPDATE DB"});return await Ei(),!0}catch(r){return console.error(r),!1}},wi=async()=>{try{await lr.fetchDb();const r=Wr(lr.lastUpdated),e=new Date(r+1e3).toISOString();let n=await(await fetch(`https://api.github.com/repos/${gr}/${mr}/commits?sha=${ws}&since=${e}`)).json();n=n.filter(s=>{var i,a;return(a=(i=s==null?void 0:s.commit)==null?void 0:i.message)==null?void 0:a.includes("GAME:")}).map(s=>{var i,a,o,l,d,h,m,I,v;return{author:(a=(i=s==null?void 0:s.commit)==null?void 0:i.author)==null?void 0:a.name,id:(m=(h=(d=(l=(o=s==null?void 0:s.commit)==null?void 0:o.message)==null?void 0:l.split(" - "))==null?void 0:d[0])==null?void 0:h.split(":"))==null?void 0:m[1],updatedAt:(v=(I=s==null?void 0:s.commit)==null?void 0:I.author)==null?void 0:v.date}}),wn.set(n)}catch{}},Ei=async()=>{try{const e=await(await fetch("https://api.github.com/repos/VirtualPinballSpreadsheet/vps-db/actions/runs?status=in_progress")).json(),n=await(await fetch("https://api.github.com/repos/VirtualPinballSpreadsheet/vps-db/actions/runs?status=queued")).json();debugger;bi.set(e.total_count>0||n.total_count>0)}catch{}};(async()=>{const r=Wr(Kr),{user:e,token:t}=r;t&&e&&En(t,e)})();const yn={login:En,logout:Ii,triggerLoginPopup:Cc,uploadImage:kc,uploadGameFile:Rc,updateDb:Pc,getUnpublishedChanges:wi,getPipelineState:Ei,userStore:Kr,unpublishedChanges:wn,pipelineState:bi},Dc=r=>new Promise((e,t)=>{const n=new FileReader;n.onload=function(){const i=n.result.split(",")[1];e(i)},n.readAsDataURL(r)}),rs=(r,e)=>{const t=(r[e]||[]).map(n=>n.createdAt).sort((n,s)=>(s||0)-(n||0));return t.length?t[0]:0},Oc=r=>{let e=0;Nc.forEach(n=>{const s=rs(r,n);s>e&&(e=s)}),r.updatedAt=e;const t=rs(r,"tableFiles");return t&&(r.lastCreatedAt=t),r},Nc=["tableFiles"],pr=ys("edits",{edits:[]}),Mc=()=>{pr.update(r=>{const e=r.cache;if(!e)return r;e.data=Oc(e.data);const t=r.edits.findIndex(n=>n.id===e.id);return t<=-1?r.edits.push(e):r.edits[t].data=e.data,r})},Lc=r=>{pr.update(e=>(e.edits.findIndex(n=>n.id===r.id)<=-1||(e.edits=e.edits.filter(n=>n.id!==r.id)),e))},Uc=async()=>{const{edits:r}=Wr(pr),e=[];for(const t of r){const{id:n,data:s,action:i}=t;(i==="UPDATE"||i==="CREATE")&&await yn.uploadGameFile(s)&&e.push(n)}return pr.update(t=>(t.edits=t.edits.filter(n=>!e.includes(n.id)),t)),{uploaded:e,notUploaded:r.filter(t=>!e.includes(t.id)).map(t=>t.id)}},Fc={editStore:pr,saveEdit:Mc,deleteEdit:Lc,submitChanges:Uc};function ns(r){let e,t,n,s,i,a;return t=new Pi({props:{icon:Di}}),{c(){e=p("a"),sr(t.$$.fragment),n=O("Edit"),this.h()},l(o){e=g(o,"A",{href:!0,class:!0});var l=b(e);ir(t.$$.fragment,l),n=N(l,"Edit"),l.forEach(f),this.h()},h(){u(e,"href","?edit=true"),u(e,"class","pointer-events-auto chip variant-soft-primary hover:variant-filled-primary gap-2 flex-1")},m(o,l){we(o,e,l),ar(t,e,null),c(e,n),s=!0,i||(a=nr(e,"click",r[9]),i=!0)},p:Mt,i(o){s||(bt(t.$$.fragment,o),s=!0)},o(o){Lt(t.$$.fragment,o),s=!1},d(o){o&&f(e),or(t),i=!1,a()}}}function Bc(r){let e,t,n=r[0]&&r[1].admin&&ns(r);return{c(){n&&n.c(),e=Nr()},l(s){n&&n.l(s),e=Nr()},m(s,i){n&&n.m(s,i),we(s,e,i),t=!0},p(s,[i]){s[0]&&s[1].admin?n?(n.p(s,i),i&3&&bt(n,1)):(n=ns(s),n.c(),bt(n,1),n.m(e.parentNode,e)):n&&(ki(),Lt(n,1,1,()=>{n=null}),Ri())},i(s){t||(bt(n),t=!0)},o(s){Lt(n),t=!1},d(s){s&&f(e),n&&n.d(s)}}}function Vc(r,e,t){let n,s,i,a;const{userStore:o}=yn;_t(r,o,v=>t(1,i=v));const{editStore:l}=Fc;_t(r,l,v=>t(2,a=v));const{dbStore:d}=lr;_t(r,d,v=>t(8,s=v));let{file:h=void 0}=e,{game:m=void 0}=e;const I=()=>{Ci(l,a.cache={id:n.id,action:"UPDATE",data:JSON.parse(JSON.stringify(n))},a)};return r.$$set=v=>{"file"in v&&t(6,h=v.file),"game"in v&&t(7,m=v.game)},r.$$.update=()=>{var v;r.$$.dirty&448&&t(0,n=m||((v=h==null?void 0:h.game)!=null&&v.id?s[h.game.id]:void 0))},[n,i,a,o,l,d,h,m,s,I]}class Tn extends Vt{constructor(e){super(),Ht(this,e,Vc,Bc,Bt,{file:6,game:7})}}function ss(r,e,t){const n=r.slice();return n[2]=e[t],n}function is(r){let e,t=r[2]+"",n;return{c(){e=p("div"),n=O(t),this.h()},l(s){e=g(s,"DIV",{class:!0});var i=b(e);n=N(i,t),i.forEach(f),this.h()},h(){u(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(s,i){we(s,e,i),c(e,n)},p(s,i){i&1&&t!==(t=s[2]+"")&&H(n,t)},d(s){s&&f(e)}}}function Hc(r){var j,X;let e,t,n,s,i,a,o,l,d,h,m=((j=r[0].game)==null?void 0:j.name)+"",I,v,w,y,B,A,P=(((X=r[0].authors)==null?void 0:X.join(", "))||"")+"",L,K,G,F,re=qe(r[0].features||[]),E=[];for(let T=0;T<re.length;T+=1)E[T]=is(ss(r,re,T));return y=new Tn({props:{file:r[0]}}),{c(){e=p("a"),t=p("img"),i=C(),a=p("hr"),o=C(),l=p("div"),d=p("div"),h=p("p"),I=O(m),v=C();for(let T=0;T<E.length;T+=1)E[T].c();w=C(),sr(y.$$.fragment),B=C(),A=p("h4"),L=O(P),this.h()},l(T){e=g(T,"A",{href:!0,class:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var V=b(e);t=g(V,"IMG",{src:!0,alt:!0,class:!0}),i=k(V),a=g(V,"HR",{}),o=k(V),l=g(V,"DIV",{class:!0});var x=b(l);d=g(x,"DIV",{class:!0});var Q=b(d);h=g(Q,"P",{class:!0});var q=b(h);I=N(q,m),q.forEach(f),v=k(Q);for(let z=0;z<E.length;z+=1)E[z].l(Q);w=k(Q),ir(y.$$.fragment,Q),Q.forEach(f),B=k(x),A=g(x,"H4",{class:!0});var ne=b(A);L=N(ne,P),ne.forEach(f),x.forEach(f),V.forEach(f),this.h()},h(){var T;Ie(t.src,n=r[0].imgUrl||Lr)||u(t,"src",n),u(t,"alt",s=r[0].id),u(t,"class","card aspectTable overflow-hidden hover:brightness-125 hover:scale-110 transition-all svelte-1mrpffe"),u(h,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),u(d,"class","flex gap-2"),u(A,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),u(l,"class","flex flex-col py-4"),u(e,"href",r[1]),u(e,"class","flex flex-col"),u(e,"id",K=r[0].id),u(e,"data-gameid",G=(T=r[0].game)==null?void 0:T.id),u(e,"data-filetype","b2sFiles")},m(T,V){we(T,e,V),c(e,t),c(e,i),c(e,a),c(e,o),c(e,l),c(l,d),c(d,h),c(h,I),c(d,v);for(let x=0;x<E.length;x+=1)E[x]&&E[x].m(d,null);c(d,w),ar(y,d,null),c(l,B),c(l,A),c(A,L),F=!0},p(T,[V]){var Q,q,ne;if((!F||V&1&&!Ie(t.src,n=T[0].imgUrl||Lr))&&u(t,"src",n),(!F||V&1&&s!==(s=T[0].id))&&u(t,"alt",s),(!F||V&1)&&m!==(m=((Q=T[0].game)==null?void 0:Q.name)+"")&&H(I,m),V&1){re=qe(T[0].features||[]);let z;for(z=0;z<re.length;z+=1){const pe=ss(T,re,z);E[z]?E[z].p(pe,V):(E[z]=is(pe),E[z].c(),E[z].m(d,w))}for(;z<E.length;z+=1)E[z].d(1);E.length=re.length}const x={};V&1&&(x.file=T[0]),y.$set(x),(!F||V&1)&&P!==(P=(((q=T[0].authors)==null?void 0:q.join(", "))||"")+"")&&H(L,P),(!F||V&2)&&u(e,"href",T[1]),(!F||V&1&&K!==(K=T[0].id))&&u(e,"id",K),(!F||V&1&&G!==(G=(ne=T[0].game)==null?void 0:ne.id))&&u(e,"data-gameid",G)},i(T){F||(bt(y.$$.fragment,T),F=!0)},o(T){Lt(y.$$.fragment,T),F=!1},d(T){T&&f(e),tr(E,T),or(y)}}}function jc(r,e,t){let{file:n=Wi}=e,{href:s=""}=e;return r.$$set=i=>{"file"in i&&t(0,n=i.file),"href"in i&&t(1,s=i.href)},[n,s]}class xc extends Vt{constructor(e){super(),Ht(this,e,jc,Hc,Bt,{file:0,href:1})}}function Wc(r){var re;let e,t,n,s,i=(((re=r[0].game)==null?void 0:re.name)||"???")+"",a,o,l,d,h=(r[0].version||"")+"",m,I,v,w,y,B,A,P,L,K,G,F;return B=new Tn({props:{file:r[0]}}),{c(){e=p("a"),t=p("div"),n=p("div"),s=p("span"),a=O(i),o=C(),l=p("div"),d=p("span"),m=O(h),I=C(),v=p("div"),w=C(),y=p("div"),sr(B.$$.fragment),A=C(),P=p("img"),this.h()},l(E){e=g(E,"A",{href:!0,id:!0,"data-gameid":!0,"data-filetype":!0,class:!0});var j=b(e);t=g(j,"DIV",{class:!0});var X=b(t);n=g(X,"DIV",{class:!0});var T=b(n);s=g(T,"SPAN",{class:!0});var V=b(s);a=N(V,i),V.forEach(f),o=k(T),l=g(T,"DIV",{class:!0});var x=b(l);d=g(x,"SPAN",{class:!0});var Q=b(d);m=N(Q,h),Q.forEach(f),I=k(x),v=g(x,"DIV",{class:!0}),b(v).forEach(f),w=k(x),y=g(x,"DIV",{class:!0});var q=b(y);ir(B.$$.fragment,q),q.forEach(f),x.forEach(f),T.forEach(f),A=k(X),P=g(X,"IMG",{src:!0,class:!0,alt:!0}),X.forEach(f),j.forEach(f),this.h()},h(){var E;u(s,"class","font-bold"),u(d,"class","opacity-60 whitespace-nowrap text-ellipsis overflow-hidden"),u(v,"class","flex-1"),u(y,"class","shrink-0"),u(l,"class","flex justify-between max-w-full"),u(n,"class","p-4 flex flex-col justify-between absolute top-0 left-0 right-0 bottom-0 z-10"),Ie(P.src,L=r[3])||u(P,"src",L),u(P,"class","absolute top-0 left-0 right-0 bottom-0 opacity-10"),u(P,"alt",""),u(t,"class","card !bg-surface-100 dark:!bg-surface-600 aspect relative overflow-hidden hover:brightness-125 hover:scale-110 transition-all text-xs md:text-base svelte-22xih4"),u(e,"href",r[1]),u(e,"id",K=r[0].id),u(e,"data-gameid",G=(E=r[0].game)==null?void 0:E.id),u(e,"data-filetype",r[2]),u(e,"class","aspect svelte-22xih4")},m(E,j){we(E,e,j),c(e,t),c(t,n),c(n,s),c(s,a),c(n,o),c(n,l),c(l,d),c(d,m),c(l,I),c(l,v),c(l,w),c(l,y),ar(B,y,null),c(t,A),c(t,P),F=!0},p(E,[j]){var T,V;(!F||j&1)&&i!==(i=(((T=E[0].game)==null?void 0:T.name)||"???")+"")&&H(a,i),(!F||j&1)&&h!==(h=(E[0].version||"")+"")&&H(m,h);const X={};j&1&&(X.file=E[0]),B.$set(X),(!F||j&8&&!Ie(P.src,L=E[3]))&&u(P,"src",L),(!F||j&2)&&u(e,"href",E[1]),(!F||j&1&&K!==(K=E[0].id))&&u(e,"id",K),(!F||j&1&&G!==(G=(V=E[0].game)==null?void 0:V.id))&&u(e,"data-gameid",G),(!F||j&4)&&u(e,"data-filetype",E[2])},i(E){F||(bt(B.$$.fragment,E),F=!0)},o(E){Lt(B.$$.fragment,E),F=!1},d(E){E&&f(e),or(B)}}}function zc(r,e,t){let n;const{getGameImage:s}=lr;let{file:i=zi}=e,{href:a=""}=e,{fileType:o}=e;return r.$$set=l=>{"file"in l&&t(0,i=l.file),"href"in l&&t(1,a=l.href),"fileType"in l&&t(2,o=l.fileType)},r.$$.update=()=>{var l;r.$$.dirty&1&&t(3,n=(l=i.game)!=null&&l.id?s(i.game.id):"")},[i,a,o,n]}class $e extends Vt{constructor(e){super(),Ht(this,e,zc,Wc,Bt,{file:0,href:1,fileType:2})}}const Gc=r=>{if(!r)return Lr;if(r.imgUrl)return r.imgUrl;const e=r.b2sFiles||[];if(e.length){const n=[...e].sort((s,i)=>i.updatedAt-s.updatedAt).find(s=>s.imgUrl);if(n)return n.imgUrl}const t=r.tableFiles||[];if(t.length){const n=[...t].sort((s,i)=>i.updatedAt-s.updatedAt).find(s=>s.imgUrl);if(n)return n.imgUrl}return Lr};/*! Fast Average Color | © 2022 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */function $c(r){var e=r.toString(16);return e.length===1?"0"+e:e}function as(r){return"#"+r.map($c).join("")}function Kc(r){var e=(r[0]*299+r[1]*587+r[2]*114)/1e3;return e<128}function qc(r){return r?Jc(r)?r:[r]:[]}function Jc(r){return Array.isArray(r[0])}function Sn(r,e,t){for(var n=0;n<t.length;n++)if(Xc(r,e,t[n]))return!0;return!1}function Xc(r,e,t){switch(t.length){case 3:if(Yc(r,e,t))return!0;break;case 4:if(Qc(r,e,t))return!0;break;case 5:if(Zc(r,e,t))return!0;break;default:return!1}}function Yc(r,e,t){return r[e+3]!==255||r[e]===t[0]&&r[e+1]===t[1]&&r[e+2]===t[2]}function Qc(r,e,t){return r[e+3]&&t[3]?r[e]===t[0]&&r[e+1]===t[1]&&r[e+2]===t[2]&&r[e+3]===t[3]:r[e+3]===t[3]}function Cr(r,e,t){return r>=e-t&&r<=e+t}function Zc(r,e,t){var n=t[0],s=t[1],i=t[2],a=t[3],o=t[4],l=r[e+3],d=Cr(l,a,o);return a?!!(!l&&d||Cr(r[e],n,o)&&Cr(r[e+1],s,o)&&Cr(r[e+2],i,o)&&d):d}function eu(r,e,t){for(var n={},s=24,i=t.ignoredColor,a=t.step,o=[0,0,0,0,0],l=0;l<e;l+=a){var d=r[l],h=r[l+1],m=r[l+2],I=r[l+3];if(!(i&&Sn(r,l,i))){var v=Math.round(d/s)+","+Math.round(h/s)+","+Math.round(m/s);n[v]?n[v]=[n[v][0]+d*I,n[v][1]+h*I,n[v][2]+m*I,n[v][3]+I,n[v][4]+1]:n[v]=[d*I,h*I,m*I,I,1],o[4]<n[v][4]&&(o=n[v])}}var w=o[0],y=o[1],B=o[2],A=o[3],P=o[4];return A?[Math.round(w/A),Math.round(y/A),Math.round(B/A),Math.round(A/P)]:t.defaultColor}function tu(r,e,t){for(var n=0,s=0,i=0,a=0,o=0,l=t.ignoredColor,d=t.step,h=0;h<e;h+=d){var m=r[h+3],I=r[h]*m,v=r[h+1]*m,w=r[h+2]*m;l&&Sn(r,h,l)||(n+=I,s+=v,i+=w,a+=m,o++)}return a?[Math.round(n/a),Math.round(s/a),Math.round(i/a),Math.round(a/o)]:t.defaultColor}function ru(r,e,t){for(var n=0,s=0,i=0,a=0,o=0,l=t.ignoredColor,d=t.step,h=0;h<e;h+=d){var m=r[h],I=r[h+1],v=r[h+2],w=r[h+3];l&&Sn(r,h,l)||(n+=m*m*w,s+=I*I*w,i+=v*v*w,a+=w,o++)}return a?[Math.round(Math.sqrt(n/a)),Math.round(Math.sqrt(s/a)),Math.round(Math.sqrt(i/a)),Math.round(a/o)]:t.defaultColor}function os(r){return er(r,"defaultColor",[0,0,0,0])}function er(r,e,t){return r[e]===void 0?t:r[e]}var ls=10,cn=100;function nu(r){return r.search(/\.svg(\?|$)/i)!==-1}function su(r){if(yi(r)){var e=r.naturalWidth,t=r.naturalHeight;return!r.naturalWidth&&nu(r.src)&&(e=t=cn),{width:e,height:t}}return au(r)?{width:r.videoWidth,height:r.videoHeight}:{width:r.width,height:r.height}}function cs(r){return ou(r)?"canvas":iu(r)?"offscreencanvas":lu(r)?"imagebitmap":r.src}function yi(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement}var Ti=typeof OffscreenCanvas<"u";function iu(r){return Ti&&r instanceof OffscreenCanvas}function au(r){return typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement}function ou(r){return typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement}function lu(r){return typeof ImageBitmap<"u"&&r instanceof ImageBitmap}function cu(r,e){var t=er(e,"left",0),n=er(e,"top",0),s=er(e,"width",r.width),i=er(e,"height",r.height),a=s,o=i;if(e.mode==="precision")return{srcLeft:t,srcTop:n,srcWidth:s,srcHeight:i,destWidth:a,destHeight:o};var l;return s>i?(l=s/i,a=cn,o=Math.round(a/l)):(l=i/s,o=cn,a=Math.round(o/l)),(a>s||o>i||a<ls||o<ls)&&(a=s,o=i),{srcLeft:t,srcTop:n,srcWidth:s,srcHeight:i,destWidth:a,destHeight:o}}var uu=typeof window>"u";function du(){return uu?Ti?new OffscreenCanvas(1,1):null:document.createElement("canvas")}var hu="FastAverageColor: ";function Ke(r){return Error(hu+r)}function Zt(r,e){e||console.error(r)}var Si=function(){function r(){this.canvas=null,this.ctx=null}return r.prototype.getColorAsync=function(e,t){if(!e)return Promise.reject(Ke("call .getColorAsync() without resource."));if(typeof e=="string"){if(typeof Image>"u")return Promise.reject(Ke("resource as string is not supported in this environment"));var n=new Image;return n.crossOrigin=t&&t.crossOrigin||"",n.src=e,this.bindImageEvents(n,t)}else{if(yi(e)&&!e.complete)return this.bindImageEvents(e,t);var s=this.getColor(e,t);return s.error?Promise.reject(s.error):Promise.resolve(s)}},r.prototype.getColor=function(e,t){t=t||{};var n=os(t);if(!e){var s=Ke("call .getColor(null) without resource");return Zt(s,t.silent),this.prepareResult(n,s)}var i=su(e),a=cu(i,t);if(!a.srcWidth||!a.srcHeight||!a.destWidth||!a.destHeight){var s=Ke('incorrect sizes for resource "'.concat(cs(e),'"'));return Zt(s,t.silent),this.prepareResult(n,s)}if(!this.canvas&&(this.canvas=du(),!this.canvas)){var s=Ke("OffscreenCanvas is not supported in this browser");return Zt(s,t.silent),this.prepareResult(n,s)}if(!this.ctx){if(this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx){var s=Ke("Canvas Context 2D is not supported in this browser");return Zt(s,t.silent),this.prepareResult(n)}this.ctx.imageSmoothingEnabled=!1}this.canvas.width=a.destWidth,this.canvas.height=a.destHeight;try{this.ctx.clearRect(0,0,a.destWidth,a.destHeight),this.ctx.drawImage(e,a.srcLeft,a.srcTop,a.srcWidth,a.srcHeight,0,0,a.destWidth,a.destHeight);var o=this.ctx.getImageData(0,0,a.destWidth,a.destHeight).data;return this.prepareResult(this.getColorFromArray4(o,t))}catch(l){var s=Ke("security error (CORS) for resource ".concat(cs(e),`.
Details: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image`));return Zt(s,t.silent),!t.silent&&console.error(l),this.prepareResult(n,s)}},r.prototype.getColorFromArray4=function(e,t){t=t||{};var n=4,s=e.length,i=os(t);if(s<n)return i;var a=s-s%n,o=(t.step||1)*n,l;switch(t.algorithm||"sqrt"){case"simple":l=tu;break;case"sqrt":l=ru;break;case"dominant":l=eu;break;default:throw Ke("".concat(t.algorithm," is unknown algorithm"))}return l(e,a,{defaultColor:i,ignoredColor:qc(t.ignoredColor),step:o})},r.prototype.prepareResult=function(e,t){var n=e.slice(0,3),s=[e[0],e[1],e[2],e[3]/255],i=Kc(e);return{value:[e[0],e[1],e[2],e[3]],rgb:"rgb("+n.join(",")+")",rgba:"rgba("+s.join(",")+")",hex:as(n),hexa:as(e),isDark:i,isLight:!i,error:t}},r.prototype.destroy=function(){this.canvas&&(this.canvas.width=1,this.canvas.height=1,this.canvas=null),this.ctx=null},r.prototype.bindImageEvents=function(e,t){var n=this;return new Promise(function(s,i){var a=function(){d();var h=n.getColor(e,t);h.error?i(h.error):s(h)},o=function(){d(),i(Ke('Error loading image "'.concat(e.src,'".')))},l=function(){d(),i(Ke('Image "'.concat(e.src,'" loading aborted')))},d=function(){e.removeEventListener("load",a),e.removeEventListener("error",o),e.removeEventListener("abort",l)};e.addEventListener("load",a),e.addEventListener("error",o),e.addEventListener("abort",l)})},r}();const Ai=un({width:0,height:0,mobile:!1});function us(r,e,t){const n=r.slice();return n[11]=e[t],n}function ds(r,e,t){const n=r.slice();return n[14]=e[t],n}function hs(r,e,t){const n=r.slice();return n[11]=e[t],n}function fs(r){let e,t=r[11]+"",n,s;return{c(){e=p("div"),n=O(t),s=C(),this.h()},l(i){e=g(i,"DIV",{class:!0});var a=b(e);n=N(a,t),s=k(a),a.forEach(f),this.h()},h(){u(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(i,a){we(i,e,a),c(e,n),c(e,s)},p(i,a){a&32&&t!==(t=i[11]+"")&&H(n,t)},d(i){i&&f(e)}}}function ps(r){let e,t=r[14].toUpperCase()+"",n;return{c(){e=p("div"),n=O(t),this.h()},l(s){e=g(s,"DIV",{class:!0});var i=b(e);n=N(i,t),i.forEach(f),this.h()},h(){u(e,"class","badge variant-filled-surface")},m(s,i){we(s,e,i),c(e,n)},p(s,i){i&1&&t!==(t=s[14].toUpperCase()+"")&&H(n,t)},d(s){s&&f(e)}}}function gs(r){let e,t=r[11]+"",n,s;return{c(){e=p("div"),n=O(t),s=C(),this.h()},l(i){e=g(i,"DIV",{class:!0});var a=b(e);n=N(a,t),s=k(a),a.forEach(f),this.h()},h(){u(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(i,a){we(i,e,a),c(e,n),c(e,s)},p(i,a){a&32&&t!==(t=i[11]+"")&&H(n,t)},d(i){i&&f(e)}}}function fu(r){var Ct,W;let e,t,n,s,i,a,o,l,d,h=r[0].name+"",m,I,v,w,y,B=r[0].manufacturer+"",A,P,L,K,G=r[0].year+"",F,re,E,j,X=(((Ct=r[0].designers)==null?void 0:Ct.join(", "))||"-")+"",T,V,x,Q,q,ne,z,pe="Updated at",yt,ae,ge=$t(r[0].updatedAt)+"",ye,xt,Ze,Fe,me,Te,Wt="Type",et,Be,ve=(r[0].type||"-")+"",Se,zt,se,De,Ve,lt,oe,Y,Oe,He=r[0].name+"",ct,le,Ae,he,Ne=r[0].manufacturer+"",tt,Tt,Ce=r[0].year+"",je,ut,St,fe,Me=((W=r[0].designers)==null?void 0:W.join(", "))+"",rt,dt,nt,At,xe=qe(r[5]),te=[];for(let _=0;_<xe.length;_+=1)te[_]=fs(hs(r,xe,_));let Ee=qe(r[0].theme||[]),Z=[];for(let _=0;_<Ee.length;_+=1)Z[_]=ps(ds(r,Ee,_));let Le=qe(r[5]),ee=[];for(let _=0;_<Le.length;_+=1)ee[_]=gs(us(r,Le,_));return{c(){e=p("a"),t=p("div"),n=p("img"),a=C(),o=p("div"),l=p("div"),d=p("p"),m=O(h),I=C();for(let _=0;_<te.length;_+=1)te[_].c();v=C(),w=p("div"),y=p("p"),A=O(B),P=C(),L=p("p"),K=O("("),F=O(G),re=O(")"),E=C(),j=p("p"),T=O(X),V=C(),x=p("div");for(let _=0;_<Z.length;_+=1)Z[_].c();Q=C(),q=p("div"),ne=p("div"),z=p("p"),z.textContent=pe,yt=C(),ae=p("p"),ye=O(ge),xt=C(),Ze=p("div"),Fe=C(),me=p("div"),Te=p("p"),Te.textContent=Wt,et=C(),Be=p("p"),Se=O(ve),zt=C(),se=p("img"),lt=C(),oe=p("div"),Y=p("div"),Oe=p("p"),ct=O(He),le=C();for(let _=0;_<ee.length;_+=1)ee[_].c();Ae=C(),he=p("p"),tt=O(Ne),Tt=O(" ("),je=O(Ce),ut=O(")"),St=C(),fe=p("p"),rt=O(Me),this.h()},l(_){e=g(_,"A",{class:!0,href:!0,id:!0});var M=b(e);t=g(M,"DIV",{class:!0,style:!0});var J=b(t);n=g(J,"IMG",{src:!0,alt:!0,style:!0,class:!0}),a=k(J),o=g(J,"DIV",{class:!0,style:!0});var ce=b(o);l=g(ce,"DIV",{class:!0});var R=b(l);d=g(R,"P",{class:!0});var _e=b(d);m=N(_e,h),_e.forEach(f),I=k(R);for(let be=0;be<te.length;be+=1)te[be].l(R);R.forEach(f),v=k(ce),w=g(ce,"DIV",{class:!0});var S=b(w);y=g(S,"P",{class:!0});var U=b(y);A=N(U,B),U.forEach(f),P=k(S),L=g(S,"P",{});var ke=b(L);K=N(ke,"("),F=N(ke,G),re=N(ke,")"),ke.forEach(f),S.forEach(f),E=k(ce),j=g(ce,"P",{class:!0});var ue=b(j);T=N(ue,X),ue.forEach(f),V=k(ce),x=g(ce,"DIV",{class:!0});var Re=b(x);for(let be=0;be<Z.length;be+=1)Z[be].l(Re);Re.forEach(f),Q=k(ce),q=g(ce,"DIV",{class:!0});var Pe=b(q);ne=g(Pe,"DIV",{class:!0});var We=b(ne);z=g(We,"P",{class:!0,"data-svelte-h":!0}),Mr(z)!=="svelte-g6tq99"&&(z.textContent=pe),yt=k(We),ae=g(We,"P",{class:!0});var ze=b(ae);ye=N(ze,ge),ze.forEach(f),We.forEach(f),xt=k(Pe),Ze=g(Pe,"DIV",{class:!0}),b(Ze).forEach(f),Fe=k(Pe),me=g(Pe,"DIV",{class:!0});var Ge=b(me);Te=g(Ge,"P",{class:!0,"data-svelte-h":!0}),Mr(Te)!=="svelte-1h1g7sd"&&(Te.textContent=Wt),et=k(Ge),Be=g(Ge,"P",{class:!0});var kt=b(Be);Se=N(kt,ve),kt.forEach(f),Ge.forEach(f),Pe.forEach(f),ce.forEach(f),J.forEach(f),zt=k(M),se=g(M,"IMG",{src:!0,alt:!0,class:!0}),lt=k(M),oe=g(M,"DIV",{class:!0});var st=b(oe);Y=g(st,"DIV",{class:!0});var Ue=b(Y);Oe=g(Ue,"P",{class:!0});var Rt=b(Oe);ct=N(Rt,He),Rt.forEach(f),le=k(Ue);for(let be=0;be<ee.length;be+=1)ee[be].l(Ue);Ue.forEach(f),Ae=k(st),he=g(st,"P",{});var ht=b(he);tt=N(ht,Ne),Tt=N(ht," ("),je=N(ht,Ce),ut=N(ht,")"),ht.forEach(f),St=k(st),fe=g(st,"P",{class:!0});var Pt=b(fe);rt=N(Pt,Me),Pt.forEach(f),st.forEach(f),M.forEach(f),this.h()},h(){Ie(n.src,s=r[2])||u(n,"src",s),u(n,"alt",i=r[0].id),vt(n,"height","36%"),u(n,"class","absolute top-0 left-0 right-0 w-full bgImage z-0 object-cover opacity-10"),u(d,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),u(l,"class","flex gap-2 max-w-full"),u(y,"class","text-ellipsis whitespace-nowrap overflow-hidden"),u(w,"class","flex gap-1 text-center max-w-full"),u(j,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),u(x,"class","flex gap-2 mt-4 flex-wrap"),u(z,"class","text-xs font-bold uppercase opacity-40"),u(ae,"class",""),u(ne,"class","flex flex-col items-center justify-center flex-1 gap-1"),u(Ze,"class","bg-surface-900-50-token h-full w-px opacity-20"),u(Te,"class","text-xs font-bold uppercase opacity-40"),u(Be,"class",""),u(me,"class","flex flex-col items-center justify-center flex-1 gap-1"),u(q,"class","flex mt-auto w-full"),u(o,"class","flex flex-col max-w-full w-full absolute items-center p-2 bottom-0"),vt(o,"top","calc(90% - 13rem)"),u(t,"class","hoverCard card !bg-surface-100 dark:!bg-surface-600 shadow-2xl shadow-black absolute top-0 -left-4 -right-4 bottom-0 -z-1 flex flex-col p-4 gap-0.5 items-center svelte-1jt2e09"),vt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(r[6]?100:900)+")) "+(r[6]?80:60)+"%, "+(r[3]||`rgb(var(--color-surface-${r[6]?100:600})`)+")",1),ie(t,"hovered",r[4]),Ie(se.src,De=r[2])||u(se,"src",De),u(se,"alt",Ve=r[0].name),u(se,"class","card pinImage bg-surface-300-600-token shadow-black svelte-1jt2e09"),ie(se,"hovered",r[4]),ie(se,"shadow-lg",r[4]),u(Oe,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),u(Y,"class","flex gap-2"),u(fe,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),u(oe,"class","info flex flex-col py-4 svelte-1jt2e09"),ie(oe,"opacity-0",r[4]),u(e,"class","wrapper relative z-0"),u(e,"href",r[1]),u(e,"id",dt=r[0].id)},m(_,M){we(_,e,M),c(e,t),c(t,n),c(t,a),c(t,o),c(o,l),c(l,d),c(d,m),c(l,I);for(let J=0;J<te.length;J+=1)te[J]&&te[J].m(l,null);c(o,v),c(o,w),c(w,y),c(y,A),c(w,P),c(w,L),c(L,K),c(L,F),c(L,re),c(o,E),c(o,j),c(j,T),c(o,V),c(o,x);for(let J=0;J<Z.length;J+=1)Z[J]&&Z[J].m(x,null);c(o,Q),c(o,q),c(q,ne),c(ne,z),c(ne,yt),c(ne,ae),c(ae,ye),c(q,xt),c(q,Ze),c(q,Fe),c(q,me),c(me,Te),c(me,et),c(me,Be),c(Be,Se),c(e,zt),c(e,se),c(e,lt),c(e,oe),c(oe,Y),c(Y,Oe),c(Oe,ct),c(Y,le);for(let J=0;J<ee.length;J+=1)ee[J]&&ee[J].m(Y,null);c(oe,Ae),c(oe,he),c(he,tt),c(he,Tt),c(he,je),c(he,ut),c(oe,St),c(oe,fe),c(fe,rt),nt||(At=[nr(e,"mouseenter",r[7]),nr(e,"mouseleave",r[8])],nt=!0)},p(_,[M]){var J,ce;if(M&4&&!Ie(n.src,s=_[2])&&u(n,"src",s),M&1&&i!==(i=_[0].id)&&u(n,"alt",i),M&1&&h!==(h=_[0].name+"")&&H(m,h),M&32){xe=qe(_[5]);let R;for(R=0;R<xe.length;R+=1){const _e=hs(_,xe,R);te[R]?te[R].p(_e,M):(te[R]=fs(_e),te[R].c(),te[R].m(l,null))}for(;R<te.length;R+=1)te[R].d(1);te.length=xe.length}if(M&1&&B!==(B=_[0].manufacturer+"")&&H(A,B),M&1&&G!==(G=_[0].year+"")&&H(F,G),M&1&&X!==(X=(((J=_[0].designers)==null?void 0:J.join(", "))||"-")+"")&&H(T,X),M&1){Ee=qe(_[0].theme||[]);let R;for(R=0;R<Ee.length;R+=1){const _e=ds(_,Ee,R);Z[R]?Z[R].p(_e,M):(Z[R]=ps(_e),Z[R].c(),Z[R].m(x,null))}for(;R<Z.length;R+=1)Z[R].d(1);Z.length=Ee.length}if(M&1&&ge!==(ge=$t(_[0].updatedAt)+"")&&H(ye,ge),M&1&&ve!==(ve=(_[0].type||"-")+"")&&H(Se,ve),M&72&&vt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(_[6]?100:900)+")) "+(_[6]?80:60)+"%, "+(_[3]||`rgb(var(--color-surface-${_[6]?100:600})`)+")",1),M&16&&ie(t,"hovered",_[4]),M&4&&!Ie(se.src,De=_[2])&&u(se,"src",De),M&1&&Ve!==(Ve=_[0].name)&&u(se,"alt",Ve),M&16&&ie(se,"hovered",_[4]),M&16&&ie(se,"shadow-lg",_[4]),M&1&&He!==(He=_[0].name+"")&&H(ct,He),M&32){Le=qe(_[5]);let R;for(R=0;R<Le.length;R+=1){const _e=us(_,Le,R);ee[R]?ee[R].p(_e,M):(ee[R]=gs(_e),ee[R].c(),ee[R].m(Y,null))}for(;R<ee.length;R+=1)ee[R].d(1);ee.length=Le.length}M&1&&Ne!==(Ne=_[0].manufacturer+"")&&H(tt,Ne),M&1&&Ce!==(Ce=_[0].year+"")&&H(je,Ce),M&1&&Me!==(Me=((ce=_[0].designers)==null?void 0:ce.join(", "))+"")&&H(rt,Me),M&16&&ie(oe,"opacity-0",_[4]),M&2&&u(e,"href",_[1]),M&1&&dt!==(dt=_[0].id)&&u(e,"id",dt)},i:Mt,o:Mt,d(_){_&&f(e),tr(te,_),tr(Z,_),tr(ee,_),nt=!1,Is(At)}}}function pu(r,e,t){let n,s,i,a;_t(r,Ai,w=>t(9,i=w)),_t(r,Ts,w=>t(6,a=w));const o=new Si;let{file:l=Es}=e,{href:d=""}=e,h="",m=!1;const I=()=>{i.mobile||t(4,m=!0)},v=()=>{i.mobile||t(4,m=!1)};return r.$$set=w=>{"file"in w&&t(0,l=w.file),"href"in w&&t(1,d=w.href)},r.$$.update=()=>{r.$$.dirty&1&&t(2,n=Gc(l)),r.$$.dirty&1&&t(5,s=Array.from(new Set((l.tableFiles||[]).map(w=>w.tableFormat).filter(w=>!!w)))),r.$$.dirty&4&&n&&o.getColorAsync(n).then(w=>{w&&t(3,h=w.rgb)})},[l,d,n,h,m,s,a,I,v]}class gu extends Vt{constructor(e){super(),Ht(this,e,pu,fu,Bt,{file:0,href:1})}}const kr=""+new URL("../assets/tablePlaceholder.f13766a0.jpg",import.meta.url).href,ms={FastFlips:"bg-red-500",SSF:"bg-cyan-500","P-ROC":"bg-bg-yellow-500",FlexDMD:"bg-orange-500",PuP:"bg-sky-500",VR:"bg-cyan-500",Hybrid:"bg-violet-500",Music:"bg-rose-500",FSS:"bg-green-500","4k":"bg-teal-500",MOD:"bg-purple-500",VPX:"bg-emerald-500",VP9:"bg-emerald-500",PM5:"bg-green-500",FX3:"bg-lime-500",FX2:"bg-lime-500",FX:"bg-lime-500",FP:"bg-yellow-500",B2S:"bg-pink-500",ROM:"bg-fuchsia-500",POV:"bg-green-500",Color:"bg-red-500",Sound:"bg-rose-500",Wheel:"bg-purple-500",Rules:"bg-orange-500",MediaPack:"bg-yellow-500",Topper:"bg-red-500","PinX Sound":"bg-sore-500","incl. B2S":"bg-pink-500","incl. ROM":"bg-fuchsia-500","incl. Art":"bg-purple-500","incl. PuP":"bg-sky-500","incl. Video":"bg-sky-500","no ROM":"bg-fuchsia-500",Adult:"bg-slate-500",Kids:"bg-indigo-500",LUT:"bg-gray-500",nFozzy:"bg-blue-500",Scorbit:"bg-indigo-500",Fleep:"bg-yellow-500"};function vs(r,e,t){const n=r.slice();return n[1]=e[t],n}function _s(r){let e,t=qe(r[0]||[]),n=[];for(let s=0;s<t.length;s+=1)n[s]=bs(vs(r,t,s));return{c(){e=p("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=g(s,"DIV",{class:!0});var i=b(e);for(let a=0;a<n.length;a+=1)n[a].l(i);i.forEach(f),this.h()},h(){u(e,"class","flex gap-1 flex-wrap")},m(s,i){we(s,e,i);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null)},p(s,i){if(i&1){t=qe(s[0]||[]);let a;for(a=0;a<t.length;a+=1){const o=vs(s,t,a);n[a]?n[a].p(o,i):(n[a]=bs(o),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(s){s&&f(e),tr(n,s)}}}function bs(r){let e,t,n,s=r[1].toUpperCase()+"",i,a;return{c(){e=p("div"),t=p("span"),i=O(s),a=C(),this.h()},l(o){e=g(o,"DIV",{class:!0});var l=b(e);t=g(l,"SPAN",{class:!0}),b(t).forEach(f),i=N(l,s),a=k(l),l.forEach(f),this.h()},h(){u(t,"class",n="rounded-full h-2 w-2 "+(ms[r[1]]||"bg-slate-500")+" mr-2"),u(e,"class","badge variant-ringed-surface px-1.5 py-0.5")},m(o,l){we(o,e,l),c(e,t),c(e,i),c(e,a)},p(o,l){l&1&&n!==(n="rounded-full h-2 w-2 "+(ms[o[1]]||"bg-slate-500")+" mr-2")&&u(t,"class",n),l&1&&s!==(s=o[1].toUpperCase()+"")&&H(i,s)},d(o){o&&f(e)}}}function mu(r){var n;let e,t=((n=r[0])==null?void 0:n.length)&&_s(r);return{c(){t&&t.c(),e=Nr()},l(s){t&&t.l(s),e=Nr()},m(s,i){t&&t.m(s,i),we(s,e,i)},p(s,[i]){var a;(a=s[0])!=null&&a.length?t?t.p(s,i):(t=_s(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Mt,o:Mt,d(s){s&&f(e),t&&t.d(s)}}}function vu(r,e,t){let{data:n=[]}=e;return r.$$set=s=>{"data"in s&&t(0,n=s.data)},[n]}class _u extends Vt{constructor(e){super(),Ht(this,e,vu,mu,Bt,{data:0})}}function bu(r){var J,ce,R,_e;let e,t,n,s,i,a,o,l,d,h=((J=r[0].game)==null?void 0:J.name)+"",m,I,v,w=r[0].tableFormat+"",y,B,A,P,L,K,G=r[4].manufacturer+"",F,re,E,j,X=r[4].year+"",T,V,x,Q,q=((ce=r[0].authors)==null?void 0:ce.join(", "))+"",ne,z,pe,yt,ae,ge,ye,xt="Updated at",Ze,Fe,me=$t(r[0].updatedAt)+"",Te,Wt,et,Be,ve,Se,zt="Added at",se,De,Ve=$t(r[0].createdAt||r[0].updatedAt)+"",lt,oe,Y,Oe,He,ct,le,Ae,he,Ne=((R=r[0].game)==null?void 0:R.name)+"",tt,Tt,Ce,je=r[0].tableFormat+"",ut,St,fe,Me=r[4].manufacturer+"",rt,dt,nt=r[4].year+"",At,xe,te,Ee,Z=((_e=r[0].authors)==null?void 0:_e.join(", "))+"",Le,ee,Ct,W,_,M;return A=new Tn({props:{game:r[4]}}),pe=new _u({props:{data:r[0].features}}),{c(){e=p("a"),t=p("div"),n=p("img"),a=C(),o=p("div"),l=p("div"),d=p("p"),m=O(h),I=C(),v=p("div"),y=O(w),B=C(),sr(A.$$.fragment),P=C(),L=p("div"),K=p("p"),F=O(G),re=C(),E=p("p"),j=O("("),T=O(X),V=O(")"),x=C(),Q=p("p"),ne=O(q),z=C(),sr(pe.$$.fragment),yt=C(),ae=p("div"),ge=p("div"),ye=p("p"),ye.textContent=xt,Ze=C(),Fe=p("p"),Te=O(me),Wt=C(),et=p("div"),Be=C(),ve=p("div"),Se=p("p"),Se.textContent=zt,se=C(),De=p("p"),lt=O(Ve),oe=C(),Y=p("img"),ct=C(),le=p("div"),Ae=p("div"),he=p("p"),tt=O(Ne),Tt=C(),Ce=p("div"),ut=O(je),St=C(),fe=p("p"),rt=O(Me),dt=O(" ("),At=O(nt),xe=O(")"),te=C(),Ee=p("p"),Le=O(Z),this.h()},l(S){e=g(S,"A",{class:!0,href:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var U=b(e);t=g(U,"DIV",{style:!0,class:!0});var ke=b(t);n=g(ke,"IMG",{src:!0,alt:!0,style:!0,class:!0}),a=k(ke),o=g(ke,"DIV",{class:!0,style:!0});var ue=b(o);l=g(ue,"DIV",{class:!0});var Re=b(l);d=g(Re,"P",{class:!0});var Pe=b(d);m=N(Pe,h),Pe.forEach(f),I=k(Re),v=g(Re,"DIV",{class:!0});var We=b(v);y=N(We,w),We.forEach(f),B=k(Re),ir(A.$$.fragment,Re),Re.forEach(f),P=k(ue),L=g(ue,"DIV",{class:!0});var ze=b(L);K=g(ze,"P",{class:!0});var Ge=b(K);F=N(Ge,G),Ge.forEach(f),re=k(ze),E=g(ze,"P",{});var kt=b(E);j=N(kt,"("),T=N(kt,X),V=N(kt,")"),kt.forEach(f),ze.forEach(f),x=k(ue),Q=g(ue,"P",{class:!0});var st=b(Q);ne=N(st,q),st.forEach(f),z=k(ue),ir(pe.$$.fragment,ue),yt=k(ue),ae=g(ue,"DIV",{class:!0});var Ue=b(ae);ge=g(Ue,"DIV",{class:!0});var Rt=b(ge);ye=g(Rt,"P",{class:!0,"data-svelte-h":!0}),Mr(ye)!=="svelte-g6tq99"&&(ye.textContent=xt),Ze=k(Rt),Fe=g(Rt,"P",{class:!0});var ht=b(Fe);Te=N(ht,me),ht.forEach(f),Rt.forEach(f),Wt=k(Ue),et=g(Ue,"DIV",{class:!0}),b(et).forEach(f),Be=k(Ue),ve=g(Ue,"DIV",{class:!0});var Pt=b(ve);Se=g(Pt,"P",{class:!0,"data-svelte-h":!0}),Mr(Se)!=="svelte-1gbi7dm"&&(Se.textContent=zt),se=k(Pt),De=g(Pt,"P",{class:!0});var be=b(De);lt=N(be,Ve),be.forEach(f),Pt.forEach(f),Ue.forEach(f),ue.forEach(f),ke.forEach(f),oe=k(U),Y=g(U,"IMG",{src:!0,alt:!0,class:!0}),ct=k(U),le=g(U,"DIV",{class:!0});var Gt=b(le);Ae=g(Gt,"DIV",{class:!0});var Sr=b(Ae);he=g(Sr,"P",{class:!0});var An=b(he);tt=N(An,Ne),An.forEach(f),Tt=k(Sr),Ce=g(Sr,"DIV",{class:!0});var Cn=b(Ce);ut=N(Cn,je),Cn.forEach(f),Sr.forEach(f),St=k(Gt),fe=g(Gt,"P",{});var Qt=b(fe);rt=N(Qt,Me),dt=N(Qt," ("),At=N(Qt,nt),xe=N(Qt,")"),Qt.forEach(f),te=k(Gt),Ee=g(Gt,"P",{class:!0});var kn=b(Ee);Le=N(kn,Z),kn.forEach(f),Gt.forEach(f),U.forEach(f),this.h()},h(){var S;Ie(n.src,s=r[0].imgUrl||kr)||u(n,"src",s),u(n,"alt",i=r[0].id),vt(n,"height","35%"),u(n,"class","absolute top-0 left-0 right-0 w-full bgImage z-0 object-cover opacity-60 svelte-gfpzxg"),u(d,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),u(v,"class","badge badge-glass my-auto py-0.5 px-1"),u(l,"class","flex gap-2 max-w-full"),u(K,"class","text-ellipsis whitespace-nowrap overflow-hidden"),u(L,"class","flex gap-1 text-center"),u(Q,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full mb-4"),u(ye,"class","text-xs font-bold uppercase opacity-40"),u(Fe,"class",""),u(ge,"class","flex flex-col items-center justify-center flex-1 gap-1"),u(et,"class","bg-surface-900-50-token h-full w-px opacity-20"),u(Se,"class","text-xs font-bold uppercase opacity-40"),u(De,"class",""),u(ve,"class","flex flex-col items-center justify-center flex-1 gap-1"),u(ae,"class","flex mt-auto w-full"),u(o,"class","flex flex-col max-w-full w-full absolute items-center p-4 gap-0.5 bottom-0"),vt(o,"top","calc(88.5% - 14rem)"),vt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(r[5]?100:900)+")) "+(r[5]?80:60)+"%, "+(r[2]||`rgb(var(--color-surface-${r[5]?100:600})`)+")",1),u(t,"class","card !bg-surface-100 dark:!bg-surface-600 shadow-2xl shadow-black absolute top-0 -left-4 -right-4 bottom-0 -z-1 flex flex-col p-4 gap-0.5 items-center hoverCard svelte-gfpzxg"),ie(t,"hovered",r[3]),Ie(Y.src,Oe=r[0].imgUrl||kr)||u(Y,"src",Oe),u(Y,"alt",He=r[0].id),u(Y,"class","card pinImage bg-surface-300-600-token shadow-black svelte-gfpzxg"),ie(Y,"hovered",r[3]),ie(Y,"shadow-lg",r[3]),u(he,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),u(Ce,"class","badge badge-glass my-auto py-0.5 px-1"),u(Ae,"class","flex gap-2"),u(Ee,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),u(le,"class","flex flex-col py-4 info svelte-gfpzxg"),ie(le,"opacity-0",r[3]),u(e,"class","wrapper relative z-0 inline-block max-w-full min-w-0 w-full"),u(e,"href",r[1]),u(e,"id",ee=r[0].id),u(e,"data-gameid",Ct=(S=r[0].game)==null?void 0:S.id),u(e,"data-filetype","tableFiles")},m(S,U){we(S,e,U),c(e,t),c(t,n),c(t,a),c(t,o),c(o,l),c(l,d),c(d,m),c(l,I),c(l,v),c(v,y),c(l,B),ar(A,l,null),c(o,P),c(o,L),c(L,K),c(K,F),c(L,re),c(L,E),c(E,j),c(E,T),c(E,V),c(o,x),c(o,Q),c(Q,ne),c(o,z),ar(pe,o,null),c(o,yt),c(o,ae),c(ae,ge),c(ge,ye),c(ge,Ze),c(ge,Fe),c(Fe,Te),c(ae,Wt),c(ae,et),c(ae,Be),c(ae,ve),c(ve,Se),c(ve,se),c(ve,De),c(De,lt),c(e,oe),c(e,Y),c(e,ct),c(e,le),c(le,Ae),c(Ae,he),c(he,tt),c(Ae,Tt),c(Ae,Ce),c(Ce,ut),c(le,St),c(le,fe),c(fe,rt),c(fe,dt),c(fe,At),c(fe,xe),c(le,te),c(le,Ee),c(Ee,Le),W=!0,_||(M=[nr(e,"mouseenter",r[7]),nr(e,"mouseleave",r[8])],_=!0)},p(S,[U]){var Re,Pe,We,ze,Ge;(!W||U&1&&!Ie(n.src,s=S[0].imgUrl||kr))&&u(n,"src",s),(!W||U&1&&i!==(i=S[0].id))&&u(n,"alt",i),(!W||U&1)&&h!==(h=((Re=S[0].game)==null?void 0:Re.name)+"")&&H(m,h),(!W||U&1)&&w!==(w=S[0].tableFormat+"")&&H(y,w);const ke={};U&16&&(ke.game=S[4]),A.$set(ke),(!W||U&16)&&G!==(G=S[4].manufacturer+"")&&H(F,G),(!W||U&16)&&X!==(X=S[4].year+"")&&H(T,X),(!W||U&1)&&q!==(q=((Pe=S[0].authors)==null?void 0:Pe.join(", "))+"")&&H(ne,q);const ue={};U&1&&(ue.data=S[0].features),pe.$set(ue),(!W||U&1)&&me!==(me=$t(S[0].updatedAt)+"")&&H(Te,me),(!W||U&1)&&Ve!==(Ve=$t(S[0].createdAt||S[0].updatedAt)+"")&&H(lt,Ve),(!W||U&36)&&vt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(S[5]?100:900)+")) "+(S[5]?80:60)+"%, "+(S[2]||`rgb(var(--color-surface-${S[5]?100:600})`)+")",1),(!W||U&8)&&ie(t,"hovered",S[3]),(!W||U&1&&!Ie(Y.src,Oe=S[0].imgUrl||kr))&&u(Y,"src",Oe),(!W||U&1&&He!==(He=S[0].id))&&u(Y,"alt",He),(!W||U&8)&&ie(Y,"hovered",S[3]),(!W||U&8)&&ie(Y,"shadow-lg",S[3]),(!W||U&1)&&Ne!==(Ne=((We=S[0].game)==null?void 0:We.name)+"")&&H(tt,Ne),(!W||U&1)&&je!==(je=S[0].tableFormat+"")&&H(ut,je),(!W||U&16)&&Me!==(Me=S[4].manufacturer+"")&&H(rt,Me),(!W||U&16)&&nt!==(nt=S[4].year+"")&&H(At,nt),(!W||U&1)&&Z!==(Z=((ze=S[0].authors)==null?void 0:ze.join(", "))+"")&&H(Le,Z),(!W||U&8)&&ie(le,"opacity-0",S[3]),(!W||U&2)&&u(e,"href",S[1]),(!W||U&1&&ee!==(ee=S[0].id))&&u(e,"id",ee),(!W||U&1&&Ct!==(Ct=(Ge=S[0].game)==null?void 0:Ge.id))&&u(e,"data-gameid",Ct)},i(S){W||(bt(A.$$.fragment,S),bt(pe.$$.fragment,S),W=!0)},o(S){Lt(A.$$.fragment,S),Lt(pe.$$.fragment,S),W=!1},d(S){S&&f(e),or(A),or(pe),_=!1,Is(M)}}}function Iu(r,e,t){let n,s,i,a;_t(r,Ai,y=>t(10,s=y)),_t(r,Ts,y=>t(5,a=y));const o=new Si,{dbStore:l}=lr;_t(r,l,y=>t(9,i=y));let{file:d=Gi}=e,{href:h=""}=e,m="",I=!1;const v=()=>{s.mobile||t(3,I=!0)},w=()=>{s.mobile||t(3,I=!1)};return r.$$set=y=>{"file"in y&&t(0,d=y.file),"href"in y&&t(1,h=y.href)},r.$$.update=()=>{var y;r.$$.dirty&513&&t(4,n=(y=d==null?void 0:d.game)!=null&&y.id?i[d.game.id]:Es),r.$$.dirty&1&&d.imgUrl&&o.getColorAsync(d.imgUrl).then(B=>{B&&t(2,m=B.rgb)})},[d,h,m,I,n,a,l,v,w,i]}class wu extends Vt{constructor(e){super(),Ht(this,e,Iu,bu,Bt,{file:0,href:1})}}function Eu(r){var B;let e,t,n,s,i,a,o,l,d=r[0].title+"",h,m,I,v=((B=r[0].authors)==null?void 0:B.join(", "))+"",w,y;return{c(){e=p("a"),t=p("img"),a=C(),o=p("div"),l=p("p"),h=O(d),m=C(),I=p("p"),w=O(v),this.h()},l(A){e=g(A,"A",{href:!0,class:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var P=b(e);t=g(P,"IMG",{alt:!0,title:!0,class:!0,width:!0,src:!0}),a=k(P),o=g(P,"DIV",{class:!0});var L=b(o);l=g(L,"P",{class:!0});var K=b(l);h=N(K,d),K.forEach(f),m=k(L),I=g(L,"P",{class:!0});var G=b(I);w=N(G,v),G.forEach(f),L.forEach(f),P.forEach(f),this.h()},h(){u(t,"alt",n=r[0].youtubeId),u(t,"title",s=r[0].title),u(t,"class","card aspectTable hover:brightness-125 hover:scale-110 transition-all svelte-cprdlx"),u(t,"width","352"),Ie(t.src,i=`https://img.youtube.com/vi/${r[0].youtubeId}/0.jpg`)||u(t,"src",i),ie(t,"glow",r[2]),u(l,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden leading-4"),u(I,"class","text-ellipsis whitespace-nowrap overflow-hidden opacity-60 pb-1"),u(o,"class","flex flex-col py-4"),u(e,"href",r[1]),u(e,"class","flex flex-col"),u(e,"id",y=r[0].id),u(e,"data-gameid",r[3]),u(e,"data-filetype","b2sFiles")},m(A,P){we(A,e,P),c(e,t),c(e,a),c(e,o),c(o,l),c(l,h),c(o,m),c(o,I),c(I,w)},p(A,[P]){var L;P&1&&n!==(n=A[0].youtubeId)&&u(t,"alt",n),P&1&&s!==(s=A[0].title)&&u(t,"title",s),P&1&&!Ie(t.src,i=`https://img.youtube.com/vi/${A[0].youtubeId}/0.jpg`)&&u(t,"src",i),P&4&&ie(t,"glow",A[2]),P&1&&d!==(d=A[0].title+"")&&H(h,d),P&1&&v!==(v=((L=A[0].authors)==null?void 0:L.join(", "))+"")&&H(w,v),P&2&&u(e,"href",A[1]),P&1&&y!==(y=A[0].id)&&u(e,"id",y),P&8&&u(e,"data-gameid",A[3])},i:Mt,o:Mt,d(A){A&&f(e)}}}function yu(r,e,t){let{file:n=$i}=e,{href:s=""}=e,{active:i=!1}=e,{gameId:a}=e;return r.$$set=o=>{"file"in o&&t(0,n=o.file),"href"in o&&t(1,s=o.href),"active"in o&&t(2,i=o.active),"gameId"in o&&t(3,a=o.gameId)},[n,s,i,a]}class Tu extends Vt{constructor(e){super(),Ht(this,e,yu,Eu,Bt,{file:0,href:1,active:2,gameId:3})}}const Mu={game:{route:"games",name:"Games",component:gu},tableFiles:{route:"tables",name:"Tables",component:wu},b2sFiles:{route:"b2s",name:"Backglasses",component:xc},tutorialFiles:{route:"tutorials",name:"Tutorials",component:Tu,icon:Rn},pupPackFiles:{route:"puppacks",name:"PuP Packs",component:$e,icon:Oi},romFiles:{route:"roms",name:"Roms",component:$e,icon:Ni},altColorFiles:{route:"coloredroms",name:"Colored Roms",component:$e,icon:Mi},altSoundFiles:{route:"altsounds",name:"Alt. Sounds",component:$e,icon:Li},topperFiles:{route:"toppers",name:"Toppers",component:$e,icon:Ui},povFiles:{route:"pov",name:"POVs",component:$e,icon:Fi},soundFiles:{route:"sounds",name:"Sounds",component:$e,icon:Bi},mediaPackFiles:{route:"mediapacks",name:"Media Packs",component:$e,icon:Vi},wheelArtFiles:{route:"wheelart",name:"Wheelart",component:$e,icon:Hi},ruleFiles:{route:"rules",name:"Rules",component:$e,icon:Rn}};export{Fc as E,_u as F,kr as P,wu as T,yn as U,Ai as a,Si as b,Gc as g,Mu as m};
