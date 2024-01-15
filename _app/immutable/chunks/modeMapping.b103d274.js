import{a2 as qr,s as Vt,e as Zt,i as ae,r as Nt,d as g,F as Kt,G as Jt,h as I,j as l,W as ne,H as u,C as _t,f as v,l as O,g as _,m as M,I as ar,Z as Ds,a as k,c as R,U as Pe,n as x,a0 as ir,_ as Hr,k as vt,J as Ti}from"./scheduler.4bea28c8.js";import{S as Ft,i as Bt,a as bt,g as Os,t as Lt,c as Ms,b as or,d as cr,m as lr,e as ur}from"./index.10be7516.js";import{e as Je,P as Vr}from"./bgPlaceholder.386b87e8.js";import{l as Ci,D as dr,c as Ns,j as Ls,f as qt,m as Si,e as Ai,d as Us}from"./formatDate.91306456.js";import{_ as Mn}from"./preload-helper.a4192956.js";import{w as pn}from"./index.56f04d27.js";import{D as _r,a as br,b as ki,c as Hs,d as Vs}from"./env.c1bfc129.js";/**
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
 */const Ri=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Fs=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],a=r[t++],c=r[t++],o=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(o>>10)),e[n++]=String.fromCharCode(56320+(o&1023))}else{const s=r[t++],a=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Pi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],a=i+1<r.length,c=a?r[i+1]:0,o=i+2<r.length,d=o?r[i+2]:0,f=s>>2,h=(s&3)<<4|c>>4;let p=(c&15)<<2|d>>6,m=d&63;o||(m=64,a||(p=64)),n.push(t[f],t[h],t[p],t[m])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ri(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Fs(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const d=i<r.length?t[r.charAt(i)]:64;++i;const h=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||c==null||d==null||h==null)throw new Bs;const p=s<<2|c>>4;if(n.push(p),d!==64){const m=c<<4&240|d>>2;if(n.push(m),h!==64){const w=d<<6&192|h;n.push(w)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Bs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zs=function(r){const e=Ri(r);return Pi.encodeByteArray(e,!0)},Di=function(r){return zs(r).replace(/\./g,"")},Oi=function(r){try{return Pi.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function js(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ws=()=>js().__FIREBASE_DEFAULTS__,xs=()=>{if(typeof process>"u"||typeof process.env>"u")return;const r={}.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Gs=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Oi(r[1]);return e&&JSON.parse(e)},mn=()=>{try{return Ws()||xs()||Gs()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},qs=r=>{var e,t;return(t=(e=mn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Mi=()=>{var r;return(r=mn())===null||r===void 0?void 0:r.config},Ni=r=>{var e;return(e=mn())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class Ks{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Js(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function Xs(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Ys(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qs(){const r=he();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Zs(){try{return typeof indexedDB=="object"}catch{return!1}}function $s(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const ea="FirebaseError";class wt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=ea,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ir.prototype.create)}}class Ir{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?ta(s,n):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new wt(i,c,n)}}function ta(r,e){return r.replace(ra,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const ra=/\{\$([^}]+)}/g;function na(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Fr(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],a=e[i];if(Nn(s)&&Nn(a)){if(!Fr(s,a))return!1}else if(s!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Nn(r){return r!==null&&typeof r=="object"}/**
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
 */function yr(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ia(r,e){const t=new sa(r,e);return t.subscribe.bind(t)}class sa{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");aa(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Qr),i.error===void 0&&(i.error=Qr),i.complete===void 0&&(i.complete=Qr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aa(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Qr(){}/**
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
 */function zt(r){return r&&r._delegate?r._delegate:r}class $t{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class oa{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Ks;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(la(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ca(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ca(r){return r===Dt?void 0:r}function la(r){return r.instantiationMode==="EAGER"}/**
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
 */class ua{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new oa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(K||(K={}));const da={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},ha=K.INFO,fa={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},pa=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=fa[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Li{constructor(e){this.name=e,this._logLevel=ha,this._logHandler=pa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?da[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const ma=(r,e)=>e.some(t=>r instanceof t);let Ln,Un;function ga(){return Ln||(Ln=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function va(){return Un||(Un=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ui=new WeakMap,sn=new WeakMap,Hi=new WeakMap,Zr=new WeakMap,gn=new WeakMap;function _a(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",a)},s=()=>{t(It(r.result)),i()},a=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ui.set(t,r)}).catch(()=>{}),gn.set(e,r),e}function ba(r){if(sn.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",a),r.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",a),r.addEventListener("abort",a)});sn.set(r,e)}let an={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return sn.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Hi.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return It(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Ia(r){an=r(an)}function ya(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call($r(this),e,...t);return Hi.set(n,e.sort?e.sort():[e]),It(n)}:va().includes(r)?function(...e){return r.apply($r(this),e),It(Ui.get(this))}:function(...e){return It(r.apply($r(this),e))}}function wa(r){return typeof r=="function"?ya(r):(r instanceof IDBTransaction&&ba(r),ma(r,ga())?new Proxy(r,an):r)}function It(r){if(r instanceof IDBRequest)return _a(r);if(Zr.has(r))return Zr.get(r);const e=wa(r);return e!==r&&(Zr.set(r,e),gn.set(e,r)),e}const $r=r=>gn.get(r);function Ea(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(r,e),c=It(a);return n&&a.addEventListener("upgradeneeded",o=>{n(It(a.result),o.oldVersion,o.newVersion,It(a.transaction),o)}),t&&a.addEventListener("blocked",o=>t(o.oldVersion,o.newVersion,o)),c.then(o=>{s&&o.addEventListener("close",()=>s()),i&&o.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Ta=["get","getKey","getAll","getAllKeys","count"],Ca=["put","add","delete","clear"],en=new Map;function Hn(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(en.get(e))return en.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Ca.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Ta.includes(t)))return;const s=async function(a,...c){const o=this.transaction(a,i?"readwrite":"readonly");let d=o.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&o.done]))[0]};return en.set(e,s),s}Ia(r=>({...r,get:(e,t,n)=>Hn(e,t)||r.get(e,t,n),has:(e,t)=>!!Hn(e,t)||r.has(e,t)}));/**
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
 */class Sa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Aa(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Aa(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const on="@firebase/app",Vn="0.9.15";/**
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
 */const Ut=new Li("@firebase/app"),ka="@firebase/app-compat",Ra="@firebase/analytics-compat",Pa="@firebase/analytics",Da="@firebase/app-check-compat",Oa="@firebase/app-check",Ma="@firebase/auth",Na="@firebase/auth-compat",La="@firebase/database",Ua="@firebase/database-compat",Ha="@firebase/functions",Va="@firebase/functions-compat",Fa="@firebase/installations",Ba="@firebase/installations-compat",za="@firebase/messaging",ja="@firebase/messaging-compat",Wa="@firebase/performance",xa="@firebase/performance-compat",Ga="@firebase/remote-config",qa="@firebase/remote-config-compat",Ka="@firebase/storage",Ja="@firebase/storage-compat",Xa="@firebase/firestore",Ya="@firebase/firestore-compat",Qa="firebase",Za="10.1.0";/**
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
 */const cn="[DEFAULT]",$a={[on]:"fire-core",[ka]:"fire-core-compat",[Pa]:"fire-analytics",[Ra]:"fire-analytics-compat",[Oa]:"fire-app-check",[Da]:"fire-app-check-compat",[Ma]:"fire-auth",[Na]:"fire-auth-compat",[La]:"fire-rtdb",[Ua]:"fire-rtdb-compat",[Ha]:"fire-fn",[Va]:"fire-fn-compat",[Fa]:"fire-iid",[Ba]:"fire-iid-compat",[za]:"fire-fcm",[ja]:"fire-fcm-compat",[Wa]:"fire-perf",[xa]:"fire-perf-compat",[Ga]:"fire-rc",[qa]:"fire-rc-compat",[Ka]:"fire-gcs",[Ja]:"fire-gcs-compat",[Xa]:"fire-fst",[Ya]:"fire-fst-compat","fire-js":"fire-js",[Qa]:"fire-js-all"};/**
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
 */const Br=new Map,ln=new Map;function eo(r,e){try{r.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function hr(r){const e=r.name;if(ln.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;ln.set(e,r);for(const t of Br.values())eo(t,r);return!0}function Vi(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}/**
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
 */const to={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yt=new Ir("app","Firebase",to);/**
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
 */class ro{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
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
 */const wr=Za;function Fi(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:cn,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw yt.create("bad-app-name",{appName:String(i)});if(t||(t=Mi()),!t)throw yt.create("no-options");const s=Br.get(i);if(s){if(Fr(t,s.options)&&Fr(n,s.config))return s;throw yt.create("duplicate-app",{appName:i})}const a=new ua(i);for(const o of ln.values())a.addComponent(o);const c=new ro(t,n,a);return Br.set(i,c),c}function no(r=cn){const e=Br.get(r);if(!e&&r===cn&&Mi())return Fi();if(!e)throw yt.create("no-app",{appName:r});return e}function Xt(r,e,t){var n;let i=(n=$a[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(c.join(" "));return}hr(new $t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const io="firebase-heartbeat-database",so=1,fr="firebase-heartbeat-store";let tn=null;function Bi(){return tn||(tn=Ea(io,so,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(fr)}}}).catch(r=>{throw yt.create("idb-open",{originalErrorMessage:r.message})})),tn}async function ao(r){try{return await(await Bi()).transaction(fr).objectStore(fr).get(zi(r))}catch(e){if(e instanceof wt)Ut.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(t.message)}}}async function Fn(r,e){try{const n=(await Bi()).transaction(fr,"readwrite");await n.objectStore(fr).put(e,zi(r)),await n.done}catch(t){if(t instanceof wt)Ut.warn(t.message);else{const n=yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(n.message)}}}function zi(r){return`${r.name}!${r.options.appId}`}/**
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
 */const oo=1024,co=30*24*60*60*1e3;class lo{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ho(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Bn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=co}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bn(),{heartbeatsToSend:t,unsentEntries:n}=uo(this._heartbeatsCache.heartbeats),i=Di(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bn(){return new Date().toISOString().substring(0,10)}function uo(r,e=oo){const t=[];let n=r.slice();for(const i of r){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),zn(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),zn(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class ho{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zs()?$s().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ao(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zn(r){return Di(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function fo(r){hr(new $t("platform-logger",e=>new Sa(e),"PRIVATE")),hr(new $t("heartbeat",e=>new lo(e),"PRIVATE")),Xt(on,Vn,r),Xt(on,Vn,"esm2017"),Xt("fire-js","")}fo("");var po="firebase",mo="10.1.0";/**
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
 */Xt(po,mo,"app");function vn(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function ji(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const go=ji,Wi=new Ir("auth","Firebase",ji());/**
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
 */const zr=new Li("@firebase/auth");function vo(r,...e){zr.logLevel<=K.WARN&&zr.warn(`Auth (${wr}): ${r}`,...e)}function Mr(r,...e){zr.logLevel<=K.ERROR&&zr.error(`Auth (${wr}): ${r}`,...e)}/**
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
 */function Ze(r,...e){throw _n(r,...e)}function Ye(r,...e){return _n(r,...e)}function xi(r,e,t){const n=Object.assign(Object.assign({},go()),{[e]:t});return new Ir("auth","Firebase",n).create(e,{appName:r.name})}function _o(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Ze(r,"argument-error"),xi(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _n(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Wi.create(r,...e)}function P(r,e,...t){if(!r)throw _n(e,...t)}function st(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Mr(e),new Error(e)}function ot(r,e){r||st(e)}/**
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
 */function un(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function bo(){return jn()==="http:"||jn()==="https:"}function jn(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Io(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bo()||Xs()||"connection"in navigator)?navigator.onLine:!0}function yo(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Er{constructor(e,t){this.shortDelay=e,this.longDelay=t,ot(t>e,"Short delay should be less than long delay!"),this.isMobile=Js()||Ys()}get(){return Io()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bn(r,e){ot(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Gi{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Eo=new Er(3e4,6e4);function qi(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Tr(r,e,t,n,i={}){return Ki(r,i,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});const c=yr(Object.assign({key:r.config.apiKey},a)).slice(1),o=await r._getAdditionalHeaders();return o["Content-Type"]="application/json",r.languageCode&&(o["X-Firebase-Locale"]=r.languageCode),Gi.fetch()(Ji(r,r.config.apiHost,t,c),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},s))})}async function Ki(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},wo),e);try{const i=new Co(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Rr(r,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[o,d]=c.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rr(r,"credential-already-in-use",a);if(o==="EMAIL_EXISTS")throw Rr(r,"email-already-in-use",a);if(o==="USER_DISABLED")throw Rr(r,"user-disabled",a);const f=n[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw xi(r,f,d);Ze(r,f)}}catch(i){if(i instanceof wt)throw i;Ze(r,"network-request-failed",{message:String(i)})}}async function To(r,e,t,n,i={}){const s=await Tr(r,e,t,n,i);return"mfaPendingCredential"in s&&Ze(r,"multi-factor-auth-required",{_serverResponse:s}),s}function Ji(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?bn(r.config,i):`${r.config.apiScheme}://${i}`}class Co{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ye(this.auth,"network-request-failed")),Eo.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rr(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Ye(r,e,n);return i.customData._tokenResponse=t,i}/**
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
 */async function So(r,e){return Tr(r,"POST","/v1/accounts:delete",e)}async function Ao(r,e){return Tr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function sr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ko(r,e=!1){const t=zt(r),n=await t.getIdToken(e),i=In(n);P(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:sr(rn(i.auth_time)),issuedAtTime:sr(rn(i.iat)),expirationTime:sr(rn(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rn(r){return Number(r)*1e3}function In(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Mr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Oi(t);return i?JSON.parse(i):(Mr("Failed to decode base64 JWT payload"),null)}catch(i){return Mr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ro(r){const e=In(r);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof wt&&Po(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Po({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Do{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sr(this.lastLoginAt),this.creationTime=sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jr(r){var e;const t=r.auth,n=await r.getIdToken(),i=await pr(r,Ao(t,{idToken:n}));P(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?No(s.providerUserInfo):[],c=Mo(r.providerData,a),o=r.isAnonymous,d=!(r.email&&s.passwordHash)&&!(c!=null&&c.length),f=o?d:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Xi(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,h)}async function Oo(r){const e=zt(r);await jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mo(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function No(r){return r.map(e=>{var{providerId:t}=e,n=vn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Lo(r,e){const t=await Ki(r,{},async()=>{const n=yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,a=Ji(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Gi.fetch()(a,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ro(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await Lo(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,a=new mr;return n&&(P(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(P(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function ft(r,e){P(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Mt{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=vn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Do(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await pr(this,this.stsTokenManager.getToken(this.auth,e));return P(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ko(this,e)}reload(){return Oo(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await jr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pr(this,So(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,a,c,o,d,f;const h=(n=t.displayName)!==null&&n!==void 0?n:void 0,p=(i=t.email)!==null&&i!==void 0?i:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,w=(a=t.photoURL)!==null&&a!==void 0?a:void 0,T=(c=t.tenantId)!==null&&c!==void 0?c:void 0,H=(o=t._redirectEventId)!==null&&o!==void 0?o:void 0,U=(d=t.createdAt)!==null&&d!==void 0?d:void 0,z=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:J,isAnonymous:q,providerData:D,stsTokenManager:Z}=t;P(F&&Z,e,"internal-error");const E=mr.fromJSON(this.name,Z);P(typeof F=="string",e,"internal-error"),ft(h,e.name),ft(p,e.name),P(typeof J=="boolean",e,"internal-error"),P(typeof q=="boolean",e,"internal-error"),ft(m,e.name),ft(w,e.name),ft(T,e.name),ft(H,e.name),ft(U,e.name),ft(z,e.name);const V=new Mt({uid:F,auth:e,email:p,emailVerified:J,displayName:h,isAnonymous:q,photoURL:w,phoneNumber:m,tenantId:T,stsTokenManager:E,createdAt:U,lastLoginAt:z});return D&&Array.isArray(D)&&(V.providerData=D.map(y=>Object.assign({},y))),H&&(V._redirectEventId=H),V}static async _fromIdTokenResponse(e,t,n=!1){const i=new mr;i.updateFromServerResponse(t);const s=new Mt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await jr(s),s}}/**
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
 */const Wn=new Map;function at(r){ot(r instanceof Function,"Expected a class definition");let e=Wn.get(r);return e?(ot(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Wn.set(r,e),e)}/**
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
 */class Yi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yi.type="NONE";const xn=Yi;/**
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
 */function Nr(r,e,t){return`firebase:${r}:${e}:${t}`}class Yt{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Nr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Nr("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Yt(at(xn),e,n);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||at(xn);const a=Nr(n,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(a);if(f){const h=Mt._fromJSON(e,f);d!==s&&(c=h),s=d;break}}catch{}const o=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!o.length?new Yt(s,e,n):(s=o[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new Yt(s,e,n))}}/**
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
 */function Gn(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($i(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ts(e))return"Blackberry";if(rs(e))return"Webos";if(yn(e))return"Safari";if((e.includes("chrome/")||Zi(e))&&!e.includes("edge/"))return"Chrome";if(es(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Qi(r=he()){return/firefox\//i.test(r)}function yn(r=he()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zi(r=he()){return/crios\//i.test(r)}function $i(r=he()){return/iemobile/i.test(r)}function es(r=he()){return/android/i.test(r)}function ts(r=he()){return/blackberry/i.test(r)}function rs(r=he()){return/webos/i.test(r)}function Kr(r=he()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Uo(r=he()){var e;return Kr(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ho(){return Qs()&&document.documentMode===10}function ns(r=he()){return Kr(r)||es(r)||rs(r)||ts(r)||/windows phone/i.test(r)||$i(r)}function Vo(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function is(r,e=[]){let t;switch(r){case"Browser":t=Gn(he());break;case"Worker":t=`${Gn(he())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wr}/${n}`}async function ss(r,e){return Tr(r,"GET","/v2/recaptchaConfig",qi(r,e))}function qn(r){return r!==void 0&&r.enterprise!==void 0}class as{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function Fo(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}function os(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Ye("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",Fo().appendChild(n)})}function Bo(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const zo="https://www.google.com/recaptcha/enterprise.js?render=",jo="recaptcha-enterprise",Wo="NO_RECAPTCHA";class xo{constructor(e){this.type=jo,this.auth=Cr(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{ss(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new as(o);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(o=>{c(o)})})}function i(s,a,c){const o=window.grecaptcha;qn(o)?o.enterprise.ready(()=>{o.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(Wo)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{n(this.auth).then(c=>{if(!t&&qn(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}os(zo+c).then(()=>{i(c,s,a)}).catch(o=>{a(o)})}}).catch(c=>{a(c)})})}}/**
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
 */class Go{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((a,c)=>{try{const o=e(s);a(o)}catch(o){c(o)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */class qo{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kn(this),this.idTokenSubscription=new Kn(this),this.beforeStateQueue=new Go(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=at(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Yt.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!a||a===c)&&(o!=null&&o.user)&&(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await jr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?zt(e):null;return t&&P(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}async initializeRecaptchaConfig(){const e=await ss(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new as(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new xo(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ir("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&at(e)||this._popupRedirectResolver;P(t,this,"argument-error"),this.redirectPersistenceManager=await Yt.create(this,[at(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return P(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=is(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&vo(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Cr(r){return zt(r)}class Kn{constructor(e){this.auth=e,this.observer=null,this.addObserver=ia(t=>this.observer=t)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Ko(r,e){const t=Vi(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Fr(s,e??{}))return i;Ze(i,"already-initialized")}return t.initialize({options:e})}function Jo(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(at);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Xo(r,e,t){const n=Cr(r);P(n._canInitEmulator,n,"emulator-config-failed"),P(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=cs(e),{host:a,port:c}=Yo(e),o=c===null?"":`:${c}`;n.config.emulator={url:`${s}//${a}${o}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Qo()}function cs(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Yo(r){const e=cs(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Jn(n.substr(s.length+1))}}else{const[s,a]=n.split(":");return{host:s,port:Jn(a)}}}function Jn(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Qo(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class ls{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return st("not implemented")}_getIdTokenResponse(e){return st("not implemented")}_linkToIdToken(e,t){return st("not implemented")}_getReauthenticationResolver(e){return st("not implemented")}}/**
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
 */async function Qt(r,e){return To(r,"POST","/v1/accounts:signInWithIdp",qi(r,e))}/**
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
 */const Zo="http://localhost";class Ht extends ls{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=vn(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new Ht(n,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Qt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Qt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qt(e,t)}buildRequest(){const e={requestUri:Zo,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yr(t)}return e}}/**
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
 */class wn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sr extends wn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pt extends Sr{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";pt.PROVIDER_ID="facebook.com";/**
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
 */class mt extends Sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ht._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mt.credential(t,n)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
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
 */class Xe extends Sr{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com";Xe.PROVIDER_ID="github.com";/**
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
 */class gt extends Sr{constructor(){super("twitter.com")}static credential(e,t){return Ht._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return gt.credential(t,n)}catch{return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com";gt.PROVIDER_ID="twitter.com";/**
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
 */class er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Mt._fromIdTokenResponse(e,n,i),a=Xn(n);return new er({user:s,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Xn(n);return new er({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Xn(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Wr extends wt{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Wr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Wr(e,t,n,i)}}function us(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wr._fromErrorAndOperation(r,s,e,n):s})}async function $o(r,e,t=!1){const n=await pr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return er._forOperation(r,"link",n)}/**
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
 */async function ec(r,e,t=!1){const{auth:n}=r,i="reauthenticate";try{const s=await pr(r,us(n,i,e,r),t);P(s.idToken,n,"internal-error");const a=In(s.idToken);P(a,n,"internal-error");const{sub:c}=a;return P(r.uid===c,n,"user-mismatch"),er._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ze(n,"user-mismatch"),s}}/**
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
 */async function tc(r,e,t=!1){const n="signIn",i=await us(r,n,e),s=await er._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function rc(r,e,t,n){return zt(r).onIdTokenChanged(e,t,n)}function nc(r,e,t){return zt(r).beforeAuthStateChanged(e,t)}function ic(r){return zt(r).signOut()}const xr="__sak";/**
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
 */class ds{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xr,"1"),this.storage.removeItem(xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function sc(){const r=he();return yn(r)||Kr(r)}const ac=1e3,oc=10;class hs extends ds{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sc()&&Vo(),this.fallbackToPolling=ns(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,o)=>{this.notifyListeners(a,o)});return}const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);Ho()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oc):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},ac)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hs.type="LOCAL";const cc=hs;/**
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
 */class fs extends ds{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fs.type="SESSION";const ps=fs;/**
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
 */function lc(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Jr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Jr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(a).map(async d=>d(t.origin,s)),o=await lc(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jr.receivers=[];/**
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
 */function En(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class uc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,o)=>{const d=En("",20);i.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===d)switch(p.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(p.data.response);break;default:clearTimeout(f),clearTimeout(s),o(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Qe(){return window}function dc(r){Qe().location.href=r}/**
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
 */function ms(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function hc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fc(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function pc(){return ms()?self:null}/**
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
 */const gs="firebaseLocalStorageDb",mc=1,Gr="firebaseLocalStorage",vs="fbase_key";class Ar{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xr(r,e){return r.transaction([Gr],e?"readwrite":"readonly").objectStore(Gr)}function gc(){const r=indexedDB.deleteDatabase(gs);return new Ar(r).toPromise()}function dn(){const r=indexedDB.open(gs,mc);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Gr,{keyPath:vs})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Gr)?e(n):(n.close(),await gc(),e(await dn()))})})}async function Yn(r,e,t){const n=Xr(r,!0).put({[vs]:e,value:t});return new Ar(n).toPromise()}async function vc(r,e){const t=Xr(r,!1).get(e),n=await new Ar(t).toPromise();return n===void 0?null:n.value}function Qn(r,e){const t=Xr(r,!0).delete(e);return new Ar(t).toPromise()}const _c=800,bc=3;class _s{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>bc)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ms()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jr._getInstance(pc()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await hc(),!this.activeServiceWorker)return;this.sender=new uc(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dn();return await Yn(e,xr,"1"),await Qn(e,xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>vc(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xr(i,!1).getAll();return new Ar(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_c)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_s.type="LOCAL";const Ic=_s;new Er(3e4,6e4);/**
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
 */function bs(r,e){return e?at(e):(P(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Tn extends ls{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yc(r){return tc(r.auth,new Tn(r),r.bypassAuthState)}function wc(r){const{auth:e,user:t}=r;return P(t,e,"internal-error"),ec(t,new Tn(r),r.bypassAuthState)}async function Ec(r){const{auth:e,user:t}=r;return P(t,e,"internal-error"),$o(t,new Tn(r),r.bypassAuthState)}/**
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
 */class Is{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(o))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yc;case"linkViaPopup":case"linkViaRedirect":return Ec;case"reauthViaPopup":case"reauthViaRedirect":return wc;default:Ze(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Tc=new Er(2e3,1e4);async function Cc(r,e,t){const n=Cr(r);_o(r,e,wn);const i=bs(n,t);return new Ot(n,"signInViaPopup",e,i).executeNotNull()}class Ot extends Is{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Ot.currentPopupAction&&Ot.currentPopupAction.cancel(),Ot.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=En();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Tc.get())};e()}}Ot.currentPopupAction=null;/**
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
 */const Sc="pendingRedirect",Lr=new Map;class Ac extends Is{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Lr.get(this.auth._key());if(!e){try{const n=await kc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Lr.set(this.auth._key(),e)}return this.bypassAuthState||Lr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kc(r,e){const t=Dc(e),n=Pc(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function Rc(r,e){Lr.set(r._key(),e)}function Pc(r){return at(r._redirectPersistence)}function Dc(r){return Nr(Sc,r.config.apiKey,r.name)}async function Oc(r,e,t=!1){const n=Cr(r),i=bs(n,e),a=await new Ac(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const Mc=10*60*1e3;class Nc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ys(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ye(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mc&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zn(e))}saveEventToCache(e){this.cachedEventUids.add(Zn(e)),this.lastProcessedEventTime=Date.now()}}function Zn(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function ys({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Lc(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ys(r);default:return!1}}/**
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
 */async function Uc(r,e={}){return Tr(r,"GET","/v1/projects",e)}/**
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
 */const Hc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vc=/^https?/;async function Fc(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Uc(r);for(const t of e)try{if(Bc(t))return}catch{}Ze(r,"unauthorized-domain")}function Bc(r){const e=un(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Vc.test(t))return!1;if(Hc.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const zc=new Er(3e4,6e4);function $n(){const r=Qe().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function jc(r){return new Promise((e,t)=>{var n,i,s;function a(){$n(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$n(),t(Ye(r,"network-request-failed"))},timeout:zc.get()})}if(!((i=(n=Qe().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qe().gapi)===null||s===void 0)&&s.load)a();else{const c=Bo("iframefcb");return Qe()[c]=()=>{gapi.load?a():t(Ye(r,"network-request-failed"))},os(`https://apis.google.com/js/api.js?onload=${c}`).catch(o=>t(o))}}).catch(e=>{throw Ur=null,e})}let Ur=null;function Wc(r){return Ur=Ur||jc(r),Ur}/**
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
 */const xc=new Er(5e3,15e3),Gc="__/auth/iframe",qc="emulator/auth/iframe",Kc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xc(r){const e=r.config;P(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?bn(e,qc):`https://${r.config.authDomain}/${Gc}`,n={apiKey:e.apiKey,appName:r.name,v:wr},i=Jc.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${yr(n).slice(1)}`}async function Yc(r){const e=await Wc(r),t=Qe().gapi;return P(t,r,"internal-error"),e.open({where:document.body,url:Xc(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kc,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const a=Ye(r,"network-request-failed"),c=Qe().setTimeout(()=>{s(a)},xc.get());function o(){Qe().clearTimeout(c),i(n)}n.ping(o).then(o,()=>{s(a)})}))}/**
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
 */const Qc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zc=500,$c=600,el="_blank",tl="http://localhost";class ei{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rl(r,e,t,n=Zc,i=$c){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const o=Object.assign(Object.assign({},Qc),{width:n.toString(),height:i.toString(),top:s,left:a}),d=he().toLowerCase();t&&(c=Zi(d)?el:t),Qi(d)&&(e=e||tl,o.scrollbars="yes");const f=Object.entries(o).reduce((p,[m,w])=>`${p}${m}=${w},`,"");if(Uo(d)&&c!=="_self")return nl(e||"",c),new ei(null);const h=window.open(e||"",c,f);P(h,r,"popup-blocked");try{h.focus()}catch{}return new ei(h)}function nl(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const il="__/auth/handler",sl="emulator/auth/handler",al=encodeURIComponent("fac");async function ti(r,e,t,n,i,s){P(r.config.authDomain,r,"auth-domain-config-required"),P(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:wr,eventId:i};if(e instanceof wn){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",na(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries(s||{}))a[f]=h}if(e instanceof Sr){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(a.scopes=f.join(","))}r.tenantId&&(a.tid=r.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const o=await r._getAppCheckToken(),d=o?`#${al}=${encodeURIComponent(o)}`:"";return`${ol(r)}?${yr(c).slice(1)}${d}`}function ol({config:r}){return r.emulator?bn(r,sl):`https://${r.authDomain}/${il}`}/**
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
 */const nn="webStorageSupport";class cl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ps,this._completeRedirectFn=Oc,this._overrideRedirectResult=Rc}async _openPopup(e,t,n,i){var s;ot((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await ti(e,t,n,un(),i);return rl(e,a,En())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await ti(e,t,n,un(),i);return dc(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ot(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Yc(e),n=new Nc(e);return t.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nn,{type:nn},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[nn];a!==void 0&&t(!!a),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Fc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ns()||yn()||Kr()}}const ll=cl;var ri="@firebase/auth",ni="1.1.0";/**
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
 */class ul{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dl(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hl(r){hr(new $t("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=n.options;P(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:a,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:is(r)},d=new qo(n,i,s,o);return Jo(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),hr(new $t("auth-internal",e=>{const t=Cr(e.getProvider("auth").getImmediate());return(n=>new ul(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(ri,ni,dl(r)),Xt(ri,ni,"esm2017")}/**
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
 */const fl=5*60,pl=Ni("authIdTokenMaxAge")||fl;let ii=null;const ml=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>pl)return;const i=t==null?void 0:t.token;ii!==i&&(ii=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gl(r=no()){const e=Vi(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Ko(r,{popupRedirectResolver:ll,persistence:[Ic,cc,ps]}),n=Ni("authTokenSyncURL");if(n){const s=ml(n);nc(t,s,()=>s(t.currentUser)),rc(t,a=>s(a))}const i=qs("auth");return i&&Xo(t,`http://${i}`),t}hl("Browser");const vl={apiKey:"AIzaSyAjCRLDHuTkfnKU5TTV6ZZasUXecSvlQOE",authDomain:"virtual-pinball-spreadsh-71a64.firebaseapp.com",projectId:"virtual-pinball-spreadsh-71a64",appId:"1:497322440319:web:8a7f7a2997664a9af7f14a",measurementId:"G-DB48L7QGX0"},_l=Fi(vl),ws=gl(_l),Yr=Ci("user",{}),Cn=pn([]),Es=pn(!1);let gr;const bl=()=>{const r=new Xe;return r.addScope("public_repo"),r.setCustomParameters({allow_signup:"false"}),new Promise(e=>{Cc(ws,r).then(async t=>{const n=Xe.credentialFromResult(t),i=t.user;if(i.displayName=t._tokenResponse.screenName,!(n!=null&&n.accessToken))throw new Error;e(Sn(n.accessToken,i))}).catch(t=>{console.error(t),e(!1)})})},Sn=async(r,e)=>{try{const{Octokit:t}=await Mn(()=>import("https://esm.sh/octokit"),[],import.meta.url),{createOrUpdateTextFile:n}=await Mn(()=>import("https://esm.sh/@octokit/plugin-create-or-update-text-file"),[],import.meta.url),i=t.plugin(n),s=new i({auth:r}),c=(await s.request("GET /repos/{owner}/{repo}/collaborators/{username}/permission",{owner:_r,username:e.displayName,repo:br})).data.permission,o=c==="admin"||c==="write"||location.hostname==="localhost"||location.hostname==="127.0.0.1";return Yr.set({user:e,permission:c,token:r,admin:o}),gr=s,(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.octokit=s),o&&await Cs(),!0}catch(t){return console.error(t),await Ts(),!1}},Ts=()=>new Promise(r=>{ic(ws).then(()=>{Yr.set({}),r()})}),Il=async(r,e)=>{const t=`${Hs}${e}_${new Date().getTime()}.webp`,n=await El(r);let i;try{i=(await gr.request(`GET /repos/{owner}/{repo}/contents/${t}`,{owner:_r,repo:br})).data.sha}catch{}try{const s=await gr.rest.repos.createOrUpdateFileContents({owner:"VirtualPinballSpreadsheet",repo:"vps-db",path:t,sha:i,content:n,message:`IMAGE:${e} - updated image`});return`https://virtualpinballspreadsheet.github.io/vps-db/${t}`}catch(s){console.error(s);return}},yl=async r=>{try{const e=await gr.createOrUpdateTextFile({owner:_r,repo:br,branch:ki,path:`${Vs}${r.id}.json`,content:JSON.stringify(r),message:`GAME:${r.id} - Updated ${r.name}`});return Cn.update(t=>{var n;return[...t,{author:((n=qr(An.userStore).user)==null?void 0:n.displayName)||"???",id:r.id,updatedAt:new Date().toISOString()}]}),!0}catch(e){return console.error(e),!1}},wl=async()=>{try{const r=await gr.createOrUpdateTextFile({owner:_r,repo:br,path:"lastUpdated.json",content:JSON.stringify(new Date().getTime()),message:"UPDATE DB"});return await Ss(),!0}catch(r){return console.error(r),!1}},Cs=async()=>{try{await dr.fetchDb();const r=qr(dr.lastUpdated),e=new Date(r+1e3).toISOString();let n=await(await fetch(`https://api.github.com/repos/${_r}/${br}/commits?sha=${ki}&since=${e}`)).json();n=n.filter(i=>{var s,a;return(a=(s=i==null?void 0:i.commit)==null?void 0:s.message)==null?void 0:a.includes("GAME:")}).map(i=>{var s,a,c,o,d,f,h,p,m;return{author:(a=(s=i==null?void 0:i.commit)==null?void 0:s.author)==null?void 0:a.name,id:(h=(f=(d=(o=(c=i==null?void 0:i.commit)==null?void 0:c.message)==null?void 0:o.split(" - "))==null?void 0:d[0])==null?void 0:f.split(":"))==null?void 0:h[1],updatedAt:(m=(p=i==null?void 0:i.commit)==null?void 0:p.author)==null?void 0:m.date}}),Cn.set(n)}catch{}},Ss=async()=>{try{const e=await(await fetch("https://api.github.com/repos/VirtualPinballSpreadsheet/vps-db/actions/runs?status=in_progress")).json(),n=await(await fetch("https://api.github.com/repos/VirtualPinballSpreadsheet/vps-db/actions/runs?status=queued")).json();debugger;Es.set(e.total_count>0||n.total_count>0)}catch{}};(async()=>{const r=qr(Yr),{user:e,token:t}=r;t&&e&&Sn(t,e)})();const An={login:Sn,logout:Ts,triggerLoginPopup:bl,uploadImage:Il,uploadGameFile:yl,updateDb:wl,getUnpublishedChanges:Cs,getPipelineState:Ss,userStore:Yr,unpublishedChanges:Cn,pipelineState:Es},El=r=>new Promise((e,t)=>{const n=new FileReader;n.onload=function(){const s=n.result.split(",")[1];e(s)},n.readAsDataURL(r)}),Pr=parseFloat;function hn(r,e=";"){let t;if(Array.isArray(r))t=r.filter(n=>n);else{t=[];for(const n in r)r[n]&&t.push(`${n}:${r[n]}`)}return t.join(e)}function Tl(r,e,t,n){let i,s;const a="1em";let c,o,d,f="-.125em";const h="visible";return n&&(d="center",s="1.25em"),t&&(i=t),e&&(e=="lg"?(o="1.33333em",c=".75em",f="-.225em"):e=="xs"?o=".75em":e=="sm"?o=".875em":o=e.replace("x","em")),hn([hn({float:i,width:s,height:a,"line-height":c,"font-size":o,"text-align":d,"vertical-align":f,"transform-origin":"center",overflow:h}),r])}function Cl(r,e,t,n,i,s=1,a="",c=""){let o=1,d=1;return i&&(i=="horizontal"?o=-1:i=="vertical"?d=-1:o=d=-1),hn([`translate(${Pr(e)*s}${a},${Pr(t)*s}${a})`,`scale(${o*Pr(r)},${d*Pr(r)})`,n&&`rotate(${n}${c})`]," ")}function si(r){let e,t,n,i,s,a,c,o;function d(p,m){return typeof p[10][4]=="string"?Al:Sl}let f=d(r),h=f(r);return{c(){e=Kt("svg"),t=Kt("g"),n=Kt("g"),h.c(),this.h()},l(p){e=Jt(p,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var m=I(e);t=Jt(m,"g",{transform:!0,"transform-origin":!0});var w=I(t);n=Jt(w,"g",{transform:!0});var T=I(n);h.l(T),T.forEach(g),w.forEach(g),m.forEach(g),this.h()},h(){l(n,"transform",r[12]),l(t,"transform",i="translate("+r[10][0]/2+" "+r[10][1]/2+")"),l(t,"transform-origin",s=r[10][0]/4+" 0"),l(e,"id",a=r[1]||void 0),l(e,"class",c="svelte-fa "+r[0]+" svelte-1cj2gr0"),l(e,"style",r[11]),l(e,"viewBox",o="0 0 "+r[10][0]+" "+r[10][1]),l(e,"aria-hidden","true"),l(e,"role","img"),l(e,"xmlns","http://www.w3.org/2000/svg"),ne(e,"pulse",r[4]),ne(e,"spin",r[3])},m(p,m){ae(p,e,m),u(e,t),u(t,n),h.m(n,null)},p(p,m){f===(f=d(p))&&h?h.p(p,m):(h.d(1),h=f(p),h&&(h.c(),h.m(n,null))),m&4096&&l(n,"transform",p[12]),m&1024&&i!==(i="translate("+p[10][0]/2+" "+p[10][1]/2+")")&&l(t,"transform",i),m&1024&&s!==(s=p[10][0]/4+" 0")&&l(t,"transform-origin",s),m&2&&a!==(a=p[1]||void 0)&&l(e,"id",a),m&1&&c!==(c="svelte-fa "+p[0]+" svelte-1cj2gr0")&&l(e,"class",c),m&2048&&l(e,"style",p[11]),m&1024&&o!==(o="0 0 "+p[10][0]+" "+p[10][1])&&l(e,"viewBox",o),m&17&&ne(e,"pulse",p[4]),m&9&&ne(e,"spin",p[3])},d(p){p&&g(e),h.d()}}}function Sl(r){let e,t,n,i,s,a,c,o,d,f;return{c(){e=Kt("path"),a=Kt("path"),this.h()},l(h){e=Jt(h,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),I(e).forEach(g),a=Jt(h,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),I(a).forEach(g),this.h()},h(){l(e,"d",t=r[10][4][0]),l(e,"fill",n=r[6]||r[2]||"currentColor"),l(e,"fill-opacity",i=r[9]!=!1?r[7]:r[8]),l(e,"transform",s="translate("+r[10][0]/-2+" "+r[10][1]/-2+")"),l(a,"d",c=r[10][4][1]),l(a,"fill",o=r[5]||r[2]||"currentColor"),l(a,"fill-opacity",d=r[9]!=!1?r[8]:r[7]),l(a,"transform",f="translate("+r[10][0]/-2+" "+r[10][1]/-2+")")},m(h,p){ae(h,e,p),ae(h,a,p)},p(h,p){p&1024&&t!==(t=h[10][4][0])&&l(e,"d",t),p&68&&n!==(n=h[6]||h[2]||"currentColor")&&l(e,"fill",n),p&896&&i!==(i=h[9]!=!1?h[7]:h[8])&&l(e,"fill-opacity",i),p&1024&&s!==(s="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&l(e,"transform",s),p&1024&&c!==(c=h[10][4][1])&&l(a,"d",c),p&36&&o!==(o=h[5]||h[2]||"currentColor")&&l(a,"fill",o),p&896&&d!==(d=h[9]!=!1?h[8]:h[7])&&l(a,"fill-opacity",d),p&1024&&f!==(f="translate("+h[10][0]/-2+" "+h[10][1]/-2+")")&&l(a,"transform",f)},d(h){h&&(g(e),g(a))}}}function Al(r){let e,t,n,i;return{c(){e=Kt("path"),this.h()},l(s){e=Jt(s,"path",{d:!0,fill:!0,transform:!0}),I(e).forEach(g),this.h()},h(){l(e,"d",t=r[10][4]),l(e,"fill",n=r[2]||r[5]||"currentColor"),l(e,"transform",i="translate("+r[10][0]/-2+" "+r[10][1]/-2+")")},m(s,a){ae(s,e,a)},p(s,a){a&1024&&t!==(t=s[10][4])&&l(e,"d",t),a&36&&n!==(n=s[2]||s[5]||"currentColor")&&l(e,"fill",n),a&1024&&i!==(i="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")&&l(e,"transform",i)},d(s){s&&g(e)}}}function kl(r){let e,t=r[10][4]&&si(r);return{c(){t&&t.c(),e=Zt()},l(n){t&&t.l(n),e=Zt()},m(n,i){t&&t.m(n,i),ae(n,e,i)},p(n,[i]){n[10][4]?t?t.p(n,i):(t=si(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Nt,o:Nt,d(n){n&&g(e),t&&t.d(n)}}}function Rl(r,e,t){let{class:n=""}=e,{id:i=""}=e,{style:s=""}=e,{icon:a}=e,{size:c=""}=e,{color:o=""}=e,{fw:d=!1}=e,{pull:f=""}=e,{scale:h=1}=e,{translateX:p=0}=e,{translateY:m=0}=e,{rotate:w=""}=e,{flip:T=!1}=e,{spin:H=!1}=e,{pulse:U=!1}=e,{primaryColor:z=""}=e,{secondaryColor:F=""}=e,{primaryOpacity:J=1}=e,{secondaryOpacity:q=.4}=e,{swapOpacity:D=!1}=e,Z,E,V;return r.$$set=y=>{"class"in y&&t(0,n=y.class),"id"in y&&t(1,i=y.id),"style"in y&&t(13,s=y.style),"icon"in y&&t(14,a=y.icon),"size"in y&&t(15,c=y.size),"color"in y&&t(2,o=y.color),"fw"in y&&t(16,d=y.fw),"pull"in y&&t(17,f=y.pull),"scale"in y&&t(18,h=y.scale),"translateX"in y&&t(19,p=y.translateX),"translateY"in y&&t(20,m=y.translateY),"rotate"in y&&t(21,w=y.rotate),"flip"in y&&t(22,T=y.flip),"spin"in y&&t(3,H=y.spin),"pulse"in y&&t(4,U=y.pulse),"primaryColor"in y&&t(5,z=y.primaryColor),"secondaryColor"in y&&t(6,F=y.secondaryColor),"primaryOpacity"in y&&t(7,J=y.primaryOpacity),"secondaryOpacity"in y&&t(8,q=y.secondaryOpacity),"swapOpacity"in y&&t(9,D=y.swapOpacity)},r.$$.update=()=>{r.$$.dirty&16384&&t(10,Z=a&&a.icon||[0,0,"",[],""]),r.$$.dirty&237568&&t(11,E=Tl(s,c,f,d)),r.$$.dirty&8126464&&t(12,V=Cl(h,p,m,w,T,512))},[n,i,o,H,U,z,F,J,q,D,Z,E,V,s,a,c,d,f,h,p,m,w,T]}class Pl extends Ft{constructor(e){super(),Bt(this,e,Rl,kl,Vt,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var Dl={prefix:"fas",iconName:"film",icon:[512,512,[127902],"f008","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"]},qu={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]},Ol={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},Ml=Ol,Ku={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Nl={prefix:"fas",iconName:"box",icon:[448,512,[128230],"f466","M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"]},Ll={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},Ju={prefix:"fas",iconName:"cloud-arrow-down",icon:[640,512,[62337,"cloud-download","cloud-download-alt"],"f0ed","M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"]},Ul={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},Xu=Ul,Yu={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},Hl={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},Qu=Hl,Vl={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},Fl={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Zu=Fl,Bl={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},zl=Bl,jl={prefix:"fas",iconName:"phone-volume",icon:[512,512,["volume-control-phone"],"f2a0","M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]},Wl=jl,xl={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},$u=xl,Gl={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},ai={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]},ed={prefix:"fas",iconName:"earth-americas",icon:[512,512,[127758,"earth","earth-america","globe-americas"],"f57d","M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},ql={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},td=ql,rd={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},nd={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},id={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]},Kl={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},sd=Kl,Jl={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},ad=Jl,od={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},cd={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Xl={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"]},Yl={prefix:"fas",iconName:"brush",icon:[384,512,[],"f55d","M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]};const vr=Ci("edits",{edits:[]}),Ql=()=>{vr.update(r=>{const e=r.cache;if(!e)return r;e.data.updatedAt=new Date().getTime();const t=r.edits.findIndex(n=>n.id===e.id);return t<=-1?r.edits.push(e):r.edits[t].data=e.data,r})},Zl=r=>{vr.update(e=>(e.edits.findIndex(n=>n.id===r.id)<=-1||(e.edits=e.edits.filter(n=>n.id!==r.id)),e))},$l=async()=>{const{edits:r}=qr(vr),e=[];for(const t of r){const{id:n,data:i,action:s}=t;(s==="UPDATE"||s==="CREATE")&&await An.uploadGameFile(i)&&e.push(n)}return vr.update(t=>(t.edits=t.edits.filter(n=>!e.includes(n.id)),t)),{uploaded:e,notUploaded:r.filter(t=>!e.includes(t.id)).map(t=>t.id)}},eu={editStore:vr,saveEdit:Ql,deleteEdit:Zl,submitChanges:$l};function oi(r){let e,t,n,i,s,a;return t=new Pl({props:{icon:Ml}}),{c(){e=v("a"),or(t.$$.fragment),n=O("Edit"),this.h()},l(c){e=_(c,"A",{href:!0,class:!0});var o=I(e);cr(t.$$.fragment,o),n=M(o,"Edit"),o.forEach(g),this.h()},h(){l(e,"href","?edit=true"),l(e,"class","pointer-events-auto chip variant-soft-primary hover:variant-filled-primary gap-2 flex-1")},m(c,o){ae(c,e,o),lr(t,e,null),u(e,n),i=!0,s||(a=ar(e,"click",r[9]),s=!0)},p:Nt,i(c){i||(bt(t.$$.fragment,c),i=!0)},o(c){Lt(t.$$.fragment,c),i=!1},d(c){c&&g(e),ur(t),s=!1,a()}}}function tu(r){let e,t,n=r[0]&&r[1].admin&&oi(r);return{c(){n&&n.c(),e=Zt()},l(i){n&&n.l(i),e=Zt()},m(i,s){n&&n.m(i,s),ae(i,e,s),t=!0},p(i,[s]){i[0]&&i[1].admin?n?(n.p(i,s),s&3&&bt(n,1)):(n=oi(i),n.c(),bt(n,1),n.m(e.parentNode,e)):n&&(Os(),Lt(n,1,1,()=>{n=null}),Ms())},i(i){t||(bt(n),t=!0)},o(i){Lt(n),t=!1},d(i){i&&g(e),n&&n.d(i)}}}function ru(r,e,t){let n,i,s,a;const{userStore:c}=An;_t(r,c,m=>t(1,s=m));const{editStore:o}=eu;_t(r,o,m=>t(2,a=m));const{dbStore:d}=dr;_t(r,d,m=>t(8,i=m));let{file:f=void 0}=e,{game:h=void 0}=e;const p=()=>{Ds(o,a.cache={id:n.id,action:"UPDATE",data:JSON.parse(JSON.stringify(n))},a)};return r.$$set=m=>{"file"in m&&t(6,f=m.file),"game"in m&&t(7,h=m.game)},r.$$.update=()=>{var m;r.$$.dirty&448&&t(0,n=h||((m=f==null?void 0:f.game)!=null&&m.id?i[f.game.id]:void 0))},[n,s,a,c,o,d,f,h,i,p]}class kn extends Ft{constructor(e){super(),Bt(this,e,ru,tu,Vt,{file:6,game:7})}}function ci(r,e,t){const n=r.slice();return n[2]=e[t],n}function li(r){let e,t=r[2]+"",n;return{c(){e=v("div"),n=O(t),this.h()},l(i){e=_(i,"DIV",{class:!0});var s=I(e);n=M(s,t),s.forEach(g),this.h()},h(){l(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(i,s){ae(i,e,s),u(e,n)},p(i,s){s&1&&t!==(t=i[2]+"")&&x(n,t)},d(i){i&&g(e)}}}function nu(r){var V,y;let e,t,n,i,s,a,c,o,d,f,h=((V=r[0].game)==null?void 0:V.name)+"",p,m,w,T,H,U,z=((y=r[0].authors)==null?void 0:y.join(", "))+"",F,J,q,D,Z=Je(r[0].features||[]),E=[];for(let C=0;C<Z.length;C+=1)E[C]=li(ci(r,Z,C));return T=new kn({props:{file:r[0]}}),{c(){e=v("a"),t=v("img"),s=k(),a=v("hr"),c=k(),o=v("div"),d=v("div"),f=v("p"),p=O(h),m=k();for(let C=0;C<E.length;C+=1)E[C].c();w=k(),or(T.$$.fragment),H=k(),U=v("h4"),F=O(z),this.h()},l(C){e=_(C,"A",{href:!0,class:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var B=I(e);t=_(B,"IMG",{src:!0,alt:!0,class:!0}),s=R(B),a=_(B,"HR",{}),c=R(B),o=_(B,"DIV",{class:!0});var j=I(o);d=_(j,"DIV",{class:!0});var $=I(d);f=_($,"P",{class:!0});var X=I(f);p=M(X,h),X.forEach(g),m=R($);for(let G=0;G<E.length;G+=1)E[G].l($);w=R($),cr(T.$$.fragment,$),$.forEach(g),H=R(j),U=_(j,"H4",{class:!0});var ie=I(U);F=M(ie,z),ie.forEach(g),j.forEach(g),B.forEach(g),this.h()},h(){var C;Pe(t.src,n=r[0].imgUrl||Vr)||l(t,"src",n),l(t,"alt",i=r[0].id),l(t,"class","card aspectTable overflow-hidden hover:brightness-125 hover:scale-110 transition-all svelte-1mrpffe"),l(f,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),l(d,"class","flex gap-2"),l(U,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),l(o,"class","flex flex-col py-4"),l(e,"href",r[1]),l(e,"class","flex flex-col"),l(e,"id",J=r[0].id),l(e,"data-gameid",q=(C=r[0].game)==null?void 0:C.id),l(e,"data-filetype","b2sFiles")},m(C,B){ae(C,e,B),u(e,t),u(e,s),u(e,a),u(e,c),u(e,o),u(o,d),u(d,f),u(f,p),u(d,m);for(let j=0;j<E.length;j+=1)E[j]&&E[j].m(d,null);u(d,w),lr(T,d,null),u(o,H),u(o,U),u(U,F),D=!0},p(C,[B]){var $,X,ie;if((!D||B&1&&!Pe(t.src,n=C[0].imgUrl||Vr))&&l(t,"src",n),(!D||B&1&&i!==(i=C[0].id))&&l(t,"alt",i),(!D||B&1)&&h!==(h=(($=C[0].game)==null?void 0:$.name)+"")&&x(p,h),B&1){Z=Je(C[0].features||[]);let G;for(G=0;G<Z.length;G+=1){const me=ci(C,Z,G);E[G]?E[G].p(me,B):(E[G]=li(me),E[G].c(),E[G].m(d,w))}for(;G<E.length;G+=1)E[G].d(1);E.length=Z.length}const j={};B&1&&(j.file=C[0]),T.$set(j),(!D||B&1)&&z!==(z=((X=C[0].authors)==null?void 0:X.join(", "))+"")&&x(F,z),(!D||B&2)&&l(e,"href",C[1]),(!D||B&1&&J!==(J=C[0].id))&&l(e,"id",J),(!D||B&1&&q!==(q=(ie=C[0].game)==null?void 0:ie.id))&&l(e,"data-gameid",q)},i(C){D||(bt(T.$$.fragment,C),D=!0)},o(C){Lt(T.$$.fragment,C),D=!1},d(C){C&&g(e),ir(E,C),ur(T)}}}function iu(r,e,t){let{file:n=Ns}=e,{href:i=""}=e;return r.$$set=s=>{"file"in s&&t(0,n=s.file),"href"in s&&t(1,i=s.href)},[n,i]}class su extends Ft{constructor(e){super(),Bt(this,e,iu,nu,Vt,{file:0,href:1})}}function au(r){var Z;let e,t,n,i,s=(((Z=r[0].game)==null?void 0:Z.name)||"???")+"",a,c,o,d,f=r[0].version+"",h,p,m,w,T,H,U,z,F,J,q,D;return H=new kn({props:{file:r[0]}}),{c(){e=v("a"),t=v("div"),n=v("div"),i=v("span"),a=O(s),c=k(),o=v("div"),d=v("span"),h=O(f),p=k(),m=v("div"),w=k(),T=v("div"),or(H.$$.fragment),U=k(),z=v("img"),this.h()},l(E){e=_(E,"A",{href:!0,id:!0,"data-gameid":!0,"data-filetype":!0,class:!0});var V=I(e);t=_(V,"DIV",{class:!0});var y=I(t);n=_(y,"DIV",{class:!0});var C=I(n);i=_(C,"SPAN",{class:!0});var B=I(i);a=M(B,s),B.forEach(g),c=R(C),o=_(C,"DIV",{class:!0});var j=I(o);d=_(j,"SPAN",{class:!0});var $=I(d);h=M($,f),$.forEach(g),p=R(j),m=_(j,"DIV",{class:!0}),I(m).forEach(g),w=R(j),T=_(j,"DIV",{class:!0});var X=I(T);cr(H.$$.fragment,X),X.forEach(g),j.forEach(g),C.forEach(g),U=R(y),z=_(y,"IMG",{src:!0,class:!0,alt:!0}),y.forEach(g),V.forEach(g),this.h()},h(){var E;l(i,"class","font-bold"),l(d,"class","opacity-60 whitespace-nowrap text-ellipsis overflow-hidden"),l(m,"class","flex-1"),l(T,"class","shrink-0"),l(o,"class","flex justify-between max-w-full"),l(n,"class","p-4 flex flex-col justify-between absolute top-0 left-0 right-0 bottom-0 z-10"),Pe(z.src,F=r[3])||l(z,"src",F),l(z,"class","absolute top-0 left-0 right-0 bottom-0 opacity-10"),l(z,"alt",""),l(t,"class","card !bg-surface-100 dark:!bg-surface-600 aspect relative overflow-hidden hover:brightness-125 hover:scale-110 transition-all text-xs md:text-base svelte-22xih4"),l(e,"href",r[1]),l(e,"id",J=r[0].id),l(e,"data-gameid",q=(E=r[0].game)==null?void 0:E.id),l(e,"data-filetype",r[2]),l(e,"class","aspect svelte-22xih4")},m(E,V){ae(E,e,V),u(e,t),u(t,n),u(n,i),u(i,a),u(n,c),u(n,o),u(o,d),u(d,h),u(o,p),u(o,m),u(o,w),u(o,T),lr(H,T,null),u(t,U),u(t,z),D=!0},p(E,[V]){var C,B;(!D||V&1)&&s!==(s=(((C=E[0].game)==null?void 0:C.name)||"???")+"")&&x(a,s),(!D||V&1)&&f!==(f=E[0].version+"")&&x(h,f);const y={};V&1&&(y.file=E[0]),H.$set(y),(!D||V&8&&!Pe(z.src,F=E[3]))&&l(z,"src",F),(!D||V&2)&&l(e,"href",E[1]),(!D||V&1&&J!==(J=E[0].id))&&l(e,"id",J),(!D||V&1&&q!==(q=(B=E[0].game)==null?void 0:B.id))&&l(e,"data-gameid",q),(!D||V&4)&&l(e,"data-filetype",E[2])},i(E){D||(bt(H.$$.fragment,E),D=!0)},o(E){Lt(H.$$.fragment,E),D=!1},d(E){E&&g(e),ur(H)}}}function ou(r,e,t){let n;const{getGameImage:i}=dr;let{file:s=Ls}=e,{href:a=""}=e,{fileType:c}=e;return r.$$set=o=>{"file"in o&&t(0,s=o.file),"href"in o&&t(1,a=o.href),"fileType"in o&&t(2,c=o.fileType)},r.$$.update=()=>{var o;r.$$.dirty&1&&t(3,n=(o=s.game)!=null&&o.id?i(s.game.id):"")},[s,a,c,n]}class He extends Ft{constructor(e){super(),Bt(this,e,ou,au,Vt,{file:0,href:1,fileType:2})}}const cu=r=>{if(!r)return Vr;if(r.imgUrl)return r.imgUrl;const e=r.b2sFiles||[];if(e.length){const n=[...e].sort((i,s)=>s.updatedAt-i.updatedAt).find(i=>i.imgUrl);if(n)return n.imgUrl}const t=r.tableFiles||[];if(t.length){const n=[...t].sort((i,s)=>s.updatedAt-i.updatedAt).find(i=>i.imgUrl);if(n)return n.imgUrl}return Vr};/*! Fast Average Color | © 2022 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */function lu(r){var e=r.toString(16);return e.length===1?"0"+e:e}function ui(r){return"#"+r.map(lu).join("")}function uu(r){var e=(r[0]*299+r[1]*587+r[2]*114)/1e3;return e<128}function du(r){return r?hu(r)?r:[r]:[]}function hu(r){return Array.isArray(r[0])}function Rn(r,e,t){for(var n=0;n<t.length;n++)if(fu(r,e,t[n]))return!0;return!1}function fu(r,e,t){switch(t.length){case 3:if(pu(r,e,t))return!0;break;case 4:if(mu(r,e,t))return!0;break;case 5:if(gu(r,e,t))return!0;break;default:return!1}}function pu(r,e,t){return r[e+3]!==255||r[e]===t[0]&&r[e+1]===t[1]&&r[e+2]===t[2]}function mu(r,e,t){return r[e+3]&&t[3]?r[e]===t[0]&&r[e+1]===t[1]&&r[e+2]===t[2]&&r[e+3]===t[3]:r[e+3]===t[3]}function Dr(r,e,t){return r>=e-t&&r<=e+t}function gu(r,e,t){var n=t[0],i=t[1],s=t[2],a=t[3],c=t[4],o=r[e+3],d=Dr(o,a,c);return a?!!(!o&&d||Dr(r[e],n,c)&&Dr(r[e+1],i,c)&&Dr(r[e+2],s,c)&&d):d}function vu(r,e,t){for(var n={},i=24,s=t.ignoredColor,a=t.step,c=[0,0,0,0,0],o=0;o<e;o+=a){var d=r[o],f=r[o+1],h=r[o+2],p=r[o+3];if(!(s&&Rn(r,o,s))){var m=Math.round(d/i)+","+Math.round(f/i)+","+Math.round(h/i);n[m]?n[m]=[n[m][0]+d*p,n[m][1]+f*p,n[m][2]+h*p,n[m][3]+p,n[m][4]+1]:n[m]=[d*p,f*p,h*p,p,1],c[4]<n[m][4]&&(c=n[m])}}var w=c[0],T=c[1],H=c[2],U=c[3],z=c[4];return U?[Math.round(w/U),Math.round(T/U),Math.round(H/U),Math.round(U/z)]:t.defaultColor}function _u(r,e,t){for(var n=0,i=0,s=0,a=0,c=0,o=t.ignoredColor,d=t.step,f=0;f<e;f+=d){var h=r[f+3],p=r[f]*h,m=r[f+1]*h,w=r[f+2]*h;o&&Rn(r,f,o)||(n+=p,i+=m,s+=w,a+=h,c++)}return a?[Math.round(n/a),Math.round(i/a),Math.round(s/a),Math.round(a/c)]:t.defaultColor}function bu(r,e,t){for(var n=0,i=0,s=0,a=0,c=0,o=t.ignoredColor,d=t.step,f=0;f<e;f+=d){var h=r[f],p=r[f+1],m=r[f+2],w=r[f+3];o&&Rn(r,f,o)||(n+=h*h*w,i+=p*p*w,s+=m*m*w,a+=w,c++)}return a?[Math.round(Math.sqrt(n/a)),Math.round(Math.sqrt(i/a)),Math.round(Math.sqrt(s/a)),Math.round(a/c)]:t.defaultColor}function di(r){return nr(r,"defaultColor",[0,0,0,0])}function nr(r,e,t){return r[e]===void 0?t:r[e]}var hi=10,fn=100;function Iu(r){return r.search(/\.svg(\?|$)/i)!==-1}function yu(r){if(As(r)){var e=r.naturalWidth,t=r.naturalHeight;return!r.naturalWidth&&Iu(r.src)&&(e=t=fn),{width:e,height:t}}return Eu(r)?{width:r.videoWidth,height:r.videoHeight}:{width:r.width,height:r.height}}function fi(r){return Tu(r)?"canvas":wu(r)?"offscreencanvas":Cu(r)?"imagebitmap":r.src}function As(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement}var ks=typeof OffscreenCanvas<"u";function wu(r){return ks&&r instanceof OffscreenCanvas}function Eu(r){return typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement}function Tu(r){return typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement}function Cu(r){return typeof ImageBitmap<"u"&&r instanceof ImageBitmap}function Su(r,e){var t=nr(e,"left",0),n=nr(e,"top",0),i=nr(e,"width",r.width),s=nr(e,"height",r.height),a=i,c=s;if(e.mode==="precision")return{srcLeft:t,srcTop:n,srcWidth:i,srcHeight:s,destWidth:a,destHeight:c};var o;return i>s?(o=i/s,a=fn,c=Math.round(a/o)):(o=s/i,c=fn,a=Math.round(c/o)),(a>i||c>s||a<hi||c<hi)&&(a=i,c=s),{srcLeft:t,srcTop:n,srcWidth:i,srcHeight:s,destWidth:a,destHeight:c}}var Au=typeof window>"u";function ku(){return Au?ks?new OffscreenCanvas(1,1):null:document.createElement("canvas")}var Ru="FastAverageColor: ";function Ke(r){return Error(Ru+r)}function rr(r,e){e||console.error(r)}var Rs=function(){function r(){this.canvas=null,this.ctx=null}return r.prototype.getColorAsync=function(e,t){if(!e)return Promise.reject(Ke("call .getColorAsync() without resource."));if(typeof e=="string"){if(typeof Image>"u")return Promise.reject(Ke("resource as string is not supported in this environment"));var n=new Image;return n.crossOrigin=t&&t.crossOrigin||"",n.src=e,this.bindImageEvents(n,t)}else{if(As(e)&&!e.complete)return this.bindImageEvents(e,t);var i=this.getColor(e,t);return i.error?Promise.reject(i.error):Promise.resolve(i)}},r.prototype.getColor=function(e,t){t=t||{};var n=di(t);if(!e){var i=Ke("call .getColor(null) without resource");return rr(i,t.silent),this.prepareResult(n,i)}var s=yu(e),a=Su(s,t);if(!a.srcWidth||!a.srcHeight||!a.destWidth||!a.destHeight){var i=Ke('incorrect sizes for resource "'.concat(fi(e),'"'));return rr(i,t.silent),this.prepareResult(n,i)}if(!this.canvas&&(this.canvas=ku(),!this.canvas)){var i=Ke("OffscreenCanvas is not supported in this browser");return rr(i,t.silent),this.prepareResult(n,i)}if(!this.ctx){if(this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx){var i=Ke("Canvas Context 2D is not supported in this browser");return rr(i,t.silent),this.prepareResult(n)}this.ctx.imageSmoothingEnabled=!1}this.canvas.width=a.destWidth,this.canvas.height=a.destHeight;try{this.ctx.clearRect(0,0,a.destWidth,a.destHeight),this.ctx.drawImage(e,a.srcLeft,a.srcTop,a.srcWidth,a.srcHeight,0,0,a.destWidth,a.destHeight);var c=this.ctx.getImageData(0,0,a.destWidth,a.destHeight).data;return this.prepareResult(this.getColorFromArray4(c,t))}catch(o){var i=Ke("security error (CORS) for resource ".concat(fi(e),`.
Details: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image`));return rr(i,t.silent),!t.silent&&console.error(o),this.prepareResult(n,i)}},r.prototype.getColorFromArray4=function(e,t){t=t||{};var n=4,i=e.length,s=di(t);if(i<n)return s;var a=i-i%n,c=(t.step||1)*n,o;switch(t.algorithm||"sqrt"){case"simple":o=_u;break;case"sqrt":o=bu;break;case"dominant":o=vu;break;default:throw Ke("".concat(t.algorithm," is unknown algorithm"))}return o(e,a,{defaultColor:s,ignoredColor:du(t.ignoredColor),step:c})},r.prototype.prepareResult=function(e,t){var n=e.slice(0,3),i=[e[0],e[1],e[2],e[3]/255],s=uu(e);return{value:[e[0],e[1],e[2],e[3]],rgb:"rgb("+n.join(",")+")",rgba:"rgba("+i.join(",")+")",hex:ui(n),hexa:ui(e),isDark:s,isLight:!s,error:t}},r.prototype.destroy=function(){this.canvas&&(this.canvas.width=1,this.canvas.height=1,this.canvas=null),this.ctx=null},r.prototype.bindImageEvents=function(e,t){var n=this;return new Promise(function(i,s){var a=function(){d();var f=n.getColor(e,t);f.error?s(f.error):i(f)},c=function(){d(),s(Ke('Error loading image "'.concat(e.src,'".')))},o=function(){d(),s(Ke('Image "'.concat(e.src,'" loading aborted')))},d=function(){e.removeEventListener("load",a),e.removeEventListener("error",c),e.removeEventListener("abort",o)};e.addEventListener("load",a),e.addEventListener("error",c),e.addEventListener("abort",o)})},r}();const Ps=pn({width:0,height:0,mobile:!1});function pi(r,e,t){const n=r.slice();return n[11]=e[t],n}function mi(r,e,t){const n=r.slice();return n[14]=e[t],n}function gi(r,e,t){const n=r.slice();return n[11]=e[t],n}function vi(r){let e,t=r[11]+"",n,i;return{c(){e=v("div"),n=O(t),i=k(),this.h()},l(s){e=_(s,"DIV",{class:!0});var a=I(e);n=M(a,t),i=R(a),a.forEach(g),this.h()},h(){l(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(s,a){ae(s,e,a),u(e,n),u(e,i)},p(s,a){a&32&&t!==(t=s[11]+"")&&x(n,t)},d(s){s&&g(e)}}}function _i(r){let e,t=r[14].toUpperCase()+"",n;return{c(){e=v("div"),n=O(t),this.h()},l(i){e=_(i,"DIV",{class:!0});var s=I(e);n=M(s,t),s.forEach(g),this.h()},h(){l(e,"class","badge variant-filled-surface")},m(i,s){ae(i,e,s),u(e,n)},p(i,s){s&1&&t!==(t=i[14].toUpperCase()+"")&&x(n,t)},d(i){i&&g(e)}}}function bi(r){let e,t=r[11]+"",n,i;return{c(){e=v("div"),n=O(t),i=k(),this.h()},l(s){e=_(s,"DIV",{class:!0});var a=I(e);n=M(a,t),i=R(a),a.forEach(g),this.h()},h(){l(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(s,a){ae(s,e,a),u(e,n),u(e,i)},p(s,a){a&32&&t!==(t=s[11]+"")&&x(n,t)},d(s){s&&g(e)}}}function Pu(r){var At,W;let e,t,n,i,s,a,c,o,d,f=r[0].name+"",h,p,m,w,T,H=r[0].manufacturer+"",U,z,F,J,q=r[0].year+"",D,Z,E,V,y=(((At=r[0].designers)==null?void 0:At.join(", "))||"-")+"",C,B,j,$,X,ie,G,me="Updated at",Et,oe,ge=qt(r[0].updatedAt)+"",we,jt,$e,Ve,ve,Ee,Wt="Type",et,Fe,_e=(r[0].type||"-")+"",Te,xt,se,De,Be,ct,ce,Q,Oe,ze=r[0].name+"",lt,le,Ce,fe,Me=r[0].manufacturer+"",tt,Tt,Se=r[0].year+"",je,ut,Ct,pe,Ne=((W=r[0].designers)==null?void 0:W.join(", "))+"",rt,dt,nt,St,We=Je(r[5]),re=[];for(let b=0;b<We.length;b+=1)re[b]=vi(gi(r,We,b));let ye=Je(r[0].theme||[]),ee=[];for(let b=0;b<ye.length;b+=1)ee[b]=_i(mi(r,ye,b));let Le=Je(r[5]),te=[];for(let b=0;b<Le.length;b+=1)te[b]=bi(pi(r,Le,b));return{c(){e=v("a"),t=v("div"),n=v("img"),a=k(),c=v("div"),o=v("div"),d=v("p"),h=O(f),p=k();for(let b=0;b<re.length;b+=1)re[b].c();m=k(),w=v("div"),T=v("p"),U=O(H),z=k(),F=v("p"),J=O("("),D=O(q),Z=O(")"),E=k(),V=v("p"),C=O(y),B=k(),j=v("div");for(let b=0;b<ee.length;b+=1)ee[b].c();$=k(),X=v("div"),ie=v("div"),G=v("p"),G.textContent=me,Et=k(),oe=v("p"),we=O(ge),jt=k(),$e=v("div"),Ve=k(),ve=v("div"),Ee=v("p"),Ee.textContent=Wt,et=k(),Fe=v("p"),Te=O(_e),xt=k(),se=v("img"),ct=k(),ce=v("div"),Q=v("div"),Oe=v("p"),lt=O(ze),le=k();for(let b=0;b<te.length;b+=1)te[b].c();Ce=k(),fe=v("p"),tt=O(Me),Tt=O(" ("),je=O(Se),ut=O(")"),Ct=k(),pe=v("p"),rt=O(Ne),this.h()},l(b){e=_(b,"A",{class:!0,href:!0,id:!0});var N=I(e);t=_(N,"DIV",{class:!0,style:!0});var Y=I(t);n=_(Y,"IMG",{src:!0,alt:!0,style:!0,class:!0}),a=R(Y),c=_(Y,"DIV",{class:!0,style:!0});var ue=I(c);o=_(ue,"DIV",{class:!0});var A=I(o);d=_(A,"P",{class:!0});var be=I(d);h=M(be,f),be.forEach(g),p=R(A);for(let Ie=0;Ie<re.length;Ie+=1)re[Ie].l(A);A.forEach(g),m=R(ue),w=_(ue,"DIV",{class:!0});var S=I(w);T=_(S,"P",{class:!0});var L=I(T);U=M(L,H),L.forEach(g),z=R(S),F=_(S,"P",{});var Ae=I(F);J=M(Ae,"("),D=M(Ae,q),Z=M(Ae,")"),Ae.forEach(g),S.forEach(g),E=R(ue),V=_(ue,"P",{class:!0});var de=I(V);C=M(de,y),de.forEach(g),B=R(ue),j=_(ue,"DIV",{class:!0});var ke=I(j);for(let Ie=0;Ie<ee.length;Ie+=1)ee[Ie].l(ke);ke.forEach(g),$=R(ue),X=_(ue,"DIV",{class:!0});var Re=I(X);ie=_(Re,"DIV",{class:!0});var xe=I(ie);G=_(xe,"P",{class:!0,"data-svelte-h":!0}),Hr(G)!=="svelte-g6tq99"&&(G.textContent=me),Et=R(xe),oe=_(xe,"P",{class:!0});var Ge=I(oe);we=M(Ge,ge),Ge.forEach(g),xe.forEach(g),jt=R(Re),$e=_(Re,"DIV",{class:!0}),I($e).forEach(g),Ve=R(Re),ve=_(Re,"DIV",{class:!0});var qe=I(ve);Ee=_(qe,"P",{class:!0,"data-svelte-h":!0}),Hr(Ee)!=="svelte-1h1g7sd"&&(Ee.textContent=Wt),et=R(qe),Fe=_(qe,"P",{class:!0});var kt=I(Fe);Te=M(kt,_e),kt.forEach(g),qe.forEach(g),Re.forEach(g),ue.forEach(g),Y.forEach(g),xt=R(N),se=_(N,"IMG",{src:!0,alt:!0,class:!0}),ct=R(N),ce=_(N,"DIV",{class:!0});var it=I(ce);Q=_(it,"DIV",{class:!0});var Ue=I(Q);Oe=_(Ue,"P",{class:!0});var Rt=I(Oe);lt=M(Rt,ze),Rt.forEach(g),le=R(Ue);for(let Ie=0;Ie<te.length;Ie+=1)te[Ie].l(Ue);Ue.forEach(g),Ce=R(it),fe=_(it,"P",{});var ht=I(fe);tt=M(ht,Me),Tt=M(ht," ("),je=M(ht,Se),ut=M(ht,")"),ht.forEach(g),Ct=R(it),pe=_(it,"P",{class:!0});var Pt=I(pe);rt=M(Pt,Ne),Pt.forEach(g),it.forEach(g),N.forEach(g),this.h()},h(){Pe(n.src,i=r[2])||l(n,"src",i),l(n,"alt",s=r[0].id),vt(n,"height","36%"),l(n,"class","absolute top-0 left-0 right-0 w-full bgImage z-0 object-cover opacity-10"),l(d,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),l(o,"class","flex gap-2 max-w-full"),l(T,"class","text-ellipsis whitespace-nowrap overflow-hidden"),l(w,"class","flex gap-1 text-center max-w-full"),l(V,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),l(j,"class","flex gap-2 mt-4 flex-wrap"),l(G,"class","text-xs font-bold uppercase opacity-40"),l(oe,"class",""),l(ie,"class","flex flex-col items-center justify-center flex-1 gap-1"),l($e,"class","bg-surface-900-50-token h-full w-px opacity-20"),l(Ee,"class","text-xs font-bold uppercase opacity-40"),l(Fe,"class",""),l(ve,"class","flex flex-col items-center justify-center flex-1 gap-1"),l(X,"class","flex mt-auto w-full"),l(c,"class","flex flex-col max-w-full w-full absolute items-center p-2 bottom-0"),vt(c,"top","calc(90% - 13rem)"),l(t,"class","hoverCard card !bg-surface-100 dark:!bg-surface-600 shadow-2xl shadow-black absolute top-0 -left-4 -right-4 bottom-0 -z-1 flex flex-col p-4 gap-0.5 items-center svelte-1jt2e09"),vt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(r[6]?100:900)+")) "+(r[6]?80:60)+"%, "+(r[3]||`rgb(var(--color-surface-${r[6]?100:600})`)+")",1),ne(t,"hovered",r[4]),Pe(se.src,De=r[2])||l(se,"src",De),l(se,"alt",Be=r[0].name),l(se,"class","card pinImage bg-surface-300-600-token shadow-black svelte-1jt2e09"),ne(se,"hovered",r[4]),ne(se,"shadow-lg",r[4]),l(Oe,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),l(Q,"class","flex gap-2"),l(pe,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),l(ce,"class","info flex flex-col py-4 svelte-1jt2e09"),ne(ce,"opacity-0",r[4]),l(e,"class","wrapper relative z-0"),l(e,"href",r[1]),l(e,"id",dt=r[0].id)},m(b,N){ae(b,e,N),u(e,t),u(t,n),u(t,a),u(t,c),u(c,o),u(o,d),u(d,h),u(o,p);for(let Y=0;Y<re.length;Y+=1)re[Y]&&re[Y].m(o,null);u(c,m),u(c,w),u(w,T),u(T,U),u(w,z),u(w,F),u(F,J),u(F,D),u(F,Z),u(c,E),u(c,V),u(V,C),u(c,B),u(c,j);for(let Y=0;Y<ee.length;Y+=1)ee[Y]&&ee[Y].m(j,null);u(c,$),u(c,X),u(X,ie),u(ie,G),u(ie,Et),u(ie,oe),u(oe,we),u(X,jt),u(X,$e),u(X,Ve),u(X,ve),u(ve,Ee),u(ve,et),u(ve,Fe),u(Fe,Te),u(e,xt),u(e,se),u(e,ct),u(e,ce),u(ce,Q),u(Q,Oe),u(Oe,lt),u(Q,le);for(let Y=0;Y<te.length;Y+=1)te[Y]&&te[Y].m(Q,null);u(ce,Ce),u(ce,fe),u(fe,tt),u(fe,Tt),u(fe,je),u(fe,ut),u(ce,Ct),u(ce,pe),u(pe,rt),nt||(St=[ar(e,"mouseenter",r[7]),ar(e,"mouseleave",r[8])],nt=!0)},p(b,[N]){var Y,ue;if(N&4&&!Pe(n.src,i=b[2])&&l(n,"src",i),N&1&&s!==(s=b[0].id)&&l(n,"alt",s),N&1&&f!==(f=b[0].name+"")&&x(h,f),N&32){We=Je(b[5]);let A;for(A=0;A<We.length;A+=1){const be=gi(b,We,A);re[A]?re[A].p(be,N):(re[A]=vi(be),re[A].c(),re[A].m(o,null))}for(;A<re.length;A+=1)re[A].d(1);re.length=We.length}if(N&1&&H!==(H=b[0].manufacturer+"")&&x(U,H),N&1&&q!==(q=b[0].year+"")&&x(D,q),N&1&&y!==(y=(((Y=b[0].designers)==null?void 0:Y.join(", "))||"-")+"")&&x(C,y),N&1){ye=Je(b[0].theme||[]);let A;for(A=0;A<ye.length;A+=1){const be=mi(b,ye,A);ee[A]?ee[A].p(be,N):(ee[A]=_i(be),ee[A].c(),ee[A].m(j,null))}for(;A<ee.length;A+=1)ee[A].d(1);ee.length=ye.length}if(N&1&&ge!==(ge=qt(b[0].updatedAt)+"")&&x(we,ge),N&1&&_e!==(_e=(b[0].type||"-")+"")&&x(Te,_e),N&72&&vt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(b[6]?100:900)+")) "+(b[6]?80:60)+"%, "+(b[3]||`rgb(var(--color-surface-${b[6]?100:600})`)+")",1),N&16&&ne(t,"hovered",b[4]),N&4&&!Pe(se.src,De=b[2])&&l(se,"src",De),N&1&&Be!==(Be=b[0].name)&&l(se,"alt",Be),N&16&&ne(se,"hovered",b[4]),N&16&&ne(se,"shadow-lg",b[4]),N&1&&ze!==(ze=b[0].name+"")&&x(lt,ze),N&32){Le=Je(b[5]);let A;for(A=0;A<Le.length;A+=1){const be=pi(b,Le,A);te[A]?te[A].p(be,N):(te[A]=bi(be),te[A].c(),te[A].m(Q,null))}for(;A<te.length;A+=1)te[A].d(1);te.length=Le.length}N&1&&Me!==(Me=b[0].manufacturer+"")&&x(tt,Me),N&1&&Se!==(Se=b[0].year+"")&&x(je,Se),N&1&&Ne!==(Ne=((ue=b[0].designers)==null?void 0:ue.join(", "))+"")&&x(rt,Ne),N&16&&ne(ce,"opacity-0",b[4]),N&2&&l(e,"href",b[1]),N&1&&dt!==(dt=b[0].id)&&l(e,"id",dt)},i:Nt,o:Nt,d(b){b&&g(e),ir(re,b),ir(ee,b),ir(te,b),nt=!1,Ti(St)}}}function Du(r,e,t){let n,i,s,a;_t(r,Ps,w=>t(9,s=w)),_t(r,Si,w=>t(6,a=w));const c=new Rs;let{file:o=Ai}=e,{href:d=""}=e,f="",h=!1;const p=()=>{s.mobile||t(4,h=!0)},m=()=>{s.mobile||t(4,h=!1)};return r.$$set=w=>{"file"in w&&t(0,o=w.file),"href"in w&&t(1,d=w.href)},r.$$.update=()=>{r.$$.dirty&1&&t(2,n=cu(o)),r.$$.dirty&1&&t(5,i=Array.from(new Set((o.tableFiles||[]).map(w=>w.tableFormat).filter(w=>!!w)))),r.$$.dirty&4&&n&&c.getColorAsync(n).then(w=>{w&&t(3,f=w.rgb)})},[o,d,n,f,h,i,a,p,m]}class Ou extends Ft{constructor(e){super(),Bt(this,e,Du,Pu,Vt,{file:0,href:1})}}const Or=""+new URL("../assets/tablePlaceholder.f13766a0.jpg",import.meta.url).href,Ii={FastFlips:"bg-red-500",SSF:"bg-cyan-500","P-ROC":"bg-bg-yellow-500",FlexDMD:"bg-orange-500",PuP:"bg-sky-500",VR:"bg-cyan-500",Hybrid:"bg-violet-500",Music:"bg-rose-500",FSS:"bg-green-500","4k":"bg-teal-500",MOD:"bg-purple-500",VPX:"bg-emerald-500",VP9:"bg-emerald-500",PM5:"bg-green-500",FX3:"bg-lime-500",FX2:"bg-lime-500",FX:"bg-lime-500",FP:"bg-yellow-500",B2S:"bg-pink-500",ROM:"bg-fuchsia-500",POV:"bg-green-500",Color:"bg-red-500",Sound:"bg-rose-500",Wheel:"bg-purple-500",Rules:"bg-orange-500",MediaPack:"bg-yellow-500",Topper:"bg-red-500","PinX Sound":"bg-sore-500","incl. B2S":"bg-pink-500","incl. ROM":"bg-fuchsia-500","incl. Art":"bg-purple-500","incl. PuP":"bg-sky-500","incl. Video":"bg-sky-500","no ROM":"bg-fuchsia-500",Adult:"bg-slate-500",Kids:"bg-indigo-500",LUT:"bg-gray-500",nFozzy:"bg-blue-500",Scorbit:"bg-indigo-500",Fleep:"bg-yellow-500"};function yi(r,e,t){const n=r.slice();return n[1]=e[t],n}function wi(r){let e,t=Je(r[0]||[]),n=[];for(let i=0;i<t.length;i+=1)n[i]=Ei(yi(r,t,i));return{c(){e=v("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=_(i,"DIV",{class:!0});var s=I(e);for(let a=0;a<n.length;a+=1)n[a].l(s);s.forEach(g),this.h()},h(){l(e,"class","flex gap-1 flex-wrap")},m(i,s){ae(i,e,s);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null)},p(i,s){if(s&1){t=Je(i[0]||[]);let a;for(a=0;a<t.length;a+=1){const c=yi(i,t,a);n[a]?n[a].p(c,s):(n[a]=Ei(c),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(i){i&&g(e),ir(n,i)}}}function Ei(r){let e,t,n,i=r[1].toUpperCase()+"",s,a;return{c(){e=v("div"),t=v("span"),s=O(i),a=k(),this.h()},l(c){e=_(c,"DIV",{class:!0});var o=I(e);t=_(o,"SPAN",{class:!0}),I(t).forEach(g),s=M(o,i),a=R(o),o.forEach(g),this.h()},h(){l(t,"class",n="rounded-full h-2 w-2 "+(Ii[r[1]]||"bg-slate-500")+" mr-2"),l(e,"class","badge variant-ringed-surface px-1.5 py-0.5")},m(c,o){ae(c,e,o),u(e,t),u(e,s),u(e,a)},p(c,o){o&1&&n!==(n="rounded-full h-2 w-2 "+(Ii[c[1]]||"bg-slate-500")+" mr-2")&&l(t,"class",n),o&1&&i!==(i=c[1].toUpperCase()+"")&&x(s,i)},d(c){c&&g(e)}}}function Mu(r){var n;let e,t=((n=r[0])==null?void 0:n.length)&&wi(r);return{c(){t&&t.c(),e=Zt()},l(i){t&&t.l(i),e=Zt()},m(i,s){t&&t.m(i,s),ae(i,e,s)},p(i,[s]){var a;(a=i[0])!=null&&a.length?t?t.p(i,s):(t=wi(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Nt,o:Nt,d(i){i&&g(e),t&&t.d(i)}}}function Nu(r,e,t){let{data:n=[]}=e;return r.$$set=i=>{"data"in i&&t(0,n=i.data)},[n]}class Lu extends Ft{constructor(e){super(),Bt(this,e,Nu,Mu,Vt,{data:0})}}function Uu(r){var Y,ue,A,be;let e,t,n,i,s,a,c,o,d,f=((Y=r[0].game)==null?void 0:Y.name)+"",h,p,m,w=r[0].tableFormat+"",T,H,U,z,F,J,q=r[4].manufacturer+"",D,Z,E,V,y=r[4].year+"",C,B,j,$,X=((ue=r[0].authors)==null?void 0:ue.join(", "))+"",ie,G,me,Et,oe,ge,we,jt="Updated at",$e,Ve,ve=qt(r[0].updatedAt)+"",Ee,Wt,et,Fe,_e,Te,xt="Added at",se,De,Be=qt(r[0].createdAt||r[0].updatedAt)+"",ct,ce,Q,Oe,ze,lt,le,Ce,fe,Me=((A=r[0].game)==null?void 0:A.name)+"",tt,Tt,Se,je=r[0].tableFormat+"",ut,Ct,pe,Ne=r[4].manufacturer+"",rt,dt,nt=r[4].year+"",St,We,re,ye,ee=((be=r[0].authors)==null?void 0:be.join(", "))+"",Le,te,At,W,b,N;return U=new kn({props:{game:r[4]}}),me=new Lu({props:{data:r[0].features}}),{c(){e=v("a"),t=v("div"),n=v("img"),a=k(),c=v("div"),o=v("div"),d=v("p"),h=O(f),p=k(),m=v("div"),T=O(w),H=k(),or(U.$$.fragment),z=k(),F=v("div"),J=v("p"),D=O(q),Z=k(),E=v("p"),V=O("("),C=O(y),B=O(")"),j=k(),$=v("p"),ie=O(X),G=k(),or(me.$$.fragment),Et=k(),oe=v("div"),ge=v("div"),we=v("p"),we.textContent=jt,$e=k(),Ve=v("p"),Ee=O(ve),Wt=k(),et=v("div"),Fe=k(),_e=v("div"),Te=v("p"),Te.textContent=xt,se=k(),De=v("p"),ct=O(Be),ce=k(),Q=v("img"),lt=k(),le=v("div"),Ce=v("div"),fe=v("p"),tt=O(Me),Tt=k(),Se=v("div"),ut=O(je),Ct=k(),pe=v("p"),rt=O(Ne),dt=O(" ("),St=O(nt),We=O(")"),re=k(),ye=v("p"),Le=O(ee),this.h()},l(S){e=_(S,"A",{class:!0,href:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var L=I(e);t=_(L,"DIV",{style:!0,class:!0});var Ae=I(t);n=_(Ae,"IMG",{src:!0,alt:!0,style:!0,class:!0}),a=R(Ae),c=_(Ae,"DIV",{class:!0,style:!0});var de=I(c);o=_(de,"DIV",{class:!0});var ke=I(o);d=_(ke,"P",{class:!0});var Re=I(d);h=M(Re,f),Re.forEach(g),p=R(ke),m=_(ke,"DIV",{class:!0});var xe=I(m);T=M(xe,w),xe.forEach(g),H=R(ke),cr(U.$$.fragment,ke),ke.forEach(g),z=R(de),F=_(de,"DIV",{class:!0});var Ge=I(F);J=_(Ge,"P",{class:!0});var qe=I(J);D=M(qe,q),qe.forEach(g),Z=R(Ge),E=_(Ge,"P",{});var kt=I(E);V=M(kt,"("),C=M(kt,y),B=M(kt,")"),kt.forEach(g),Ge.forEach(g),j=R(de),$=_(de,"P",{class:!0});var it=I($);ie=M(it,X),it.forEach(g),G=R(de),cr(me.$$.fragment,de),Et=R(de),oe=_(de,"DIV",{class:!0});var Ue=I(oe);ge=_(Ue,"DIV",{class:!0});var Rt=I(ge);we=_(Rt,"P",{class:!0,"data-svelte-h":!0}),Hr(we)!=="svelte-g6tq99"&&(we.textContent=jt),$e=R(Rt),Ve=_(Rt,"P",{class:!0});var ht=I(Ve);Ee=M(ht,ve),ht.forEach(g),Rt.forEach(g),Wt=R(Ue),et=_(Ue,"DIV",{class:!0}),I(et).forEach(g),Fe=R(Ue),_e=_(Ue,"DIV",{class:!0});var Pt=I(_e);Te=_(Pt,"P",{class:!0,"data-svelte-h":!0}),Hr(Te)!=="svelte-1gbi7dm"&&(Te.textContent=xt),se=R(Pt),De=_(Pt,"P",{class:!0});var Ie=I(De);ct=M(Ie,Be),Ie.forEach(g),Pt.forEach(g),Ue.forEach(g),de.forEach(g),Ae.forEach(g),ce=R(L),Q=_(L,"IMG",{src:!0,alt:!0,class:!0}),lt=R(L),le=_(L,"DIV",{class:!0});var Gt=I(le);Ce=_(Gt,"DIV",{class:!0});var kr=I(Ce);fe=_(kr,"P",{class:!0});var Pn=I(fe);tt=M(Pn,Me),Pn.forEach(g),Tt=R(kr),Se=_(kr,"DIV",{class:!0});var Dn=I(Se);ut=M(Dn,je),Dn.forEach(g),kr.forEach(g),Ct=R(Gt),pe=_(Gt,"P",{});var tr=I(pe);rt=M(tr,Ne),dt=M(tr," ("),St=M(tr,nt),We=M(tr,")"),tr.forEach(g),re=R(Gt),ye=_(Gt,"P",{class:!0});var On=I(ye);Le=M(On,ee),On.forEach(g),Gt.forEach(g),L.forEach(g),this.h()},h(){var S;Pe(n.src,i=r[0].imgUrl||Or)||l(n,"src",i),l(n,"alt",s=r[0].id),vt(n,"height","35%"),l(n,"class","absolute top-0 left-0 right-0 w-full bgImage z-0 object-cover opacity-60 svelte-gfpzxg"),l(d,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),l(m,"class","badge badge-glass my-auto py-0.5 px-1"),l(o,"class","flex gap-2 max-w-full"),l(J,"class","text-ellipsis whitespace-nowrap overflow-hidden"),l(F,"class","flex gap-1 text-center"),l($,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full mb-4"),l(we,"class","text-xs font-bold uppercase opacity-40"),l(Ve,"class",""),l(ge,"class","flex flex-col items-center justify-center flex-1 gap-1"),l(et,"class","bg-surface-900-50-token h-full w-px opacity-20"),l(Te,"class","text-xs font-bold uppercase opacity-40"),l(De,"class",""),l(_e,"class","flex flex-col items-center justify-center flex-1 gap-1"),l(oe,"class","flex mt-auto w-full"),l(c,"class","flex flex-col max-w-full w-full absolute items-center p-4 gap-0.5 bottom-0"),vt(c,"top","calc(88.5% - 14rem)"),vt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(r[5]?100:900)+")) "+(r[5]?80:60)+"%, "+(r[2]||`rgb(var(--color-surface-${r[5]?100:600})`)+")",1),l(t,"class","card !bg-surface-100 dark:!bg-surface-600 shadow-2xl shadow-black absolute top-0 -left-4 -right-4 bottom-0 -z-1 flex flex-col p-4 gap-0.5 items-center hoverCard svelte-gfpzxg"),ne(t,"hovered",r[3]),Pe(Q.src,Oe=r[0].imgUrl||Or)||l(Q,"src",Oe),l(Q,"alt",ze=r[0].id),l(Q,"class","card pinImage bg-surface-300-600-token shadow-black svelte-gfpzxg"),ne(Q,"hovered",r[3]),ne(Q,"shadow-lg",r[3]),l(fe,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),l(Se,"class","badge badge-glass my-auto py-0.5 px-1"),l(Ce,"class","flex gap-2"),l(ye,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),l(le,"class","flex flex-col py-4 info svelte-gfpzxg"),ne(le,"opacity-0",r[3]),l(e,"class","wrapper relative z-0"),l(e,"href",r[1]),l(e,"id",te=r[0].id),l(e,"data-gameid",At=(S=r[0].game)==null?void 0:S.id),l(e,"data-filetype","tableFiles")},m(S,L){ae(S,e,L),u(e,t),u(t,n),u(t,a),u(t,c),u(c,o),u(o,d),u(d,h),u(o,p),u(o,m),u(m,T),u(o,H),lr(U,o,null),u(c,z),u(c,F),u(F,J),u(J,D),u(F,Z),u(F,E),u(E,V),u(E,C),u(E,B),u(c,j),u(c,$),u($,ie),u(c,G),lr(me,c,null),u(c,Et),u(c,oe),u(oe,ge),u(ge,we),u(ge,$e),u(ge,Ve),u(Ve,Ee),u(oe,Wt),u(oe,et),u(oe,Fe),u(oe,_e),u(_e,Te),u(_e,se),u(_e,De),u(De,ct),u(e,ce),u(e,Q),u(e,lt),u(e,le),u(le,Ce),u(Ce,fe),u(fe,tt),u(Ce,Tt),u(Ce,Se),u(Se,ut),u(le,Ct),u(le,pe),u(pe,rt),u(pe,dt),u(pe,St),u(pe,We),u(le,re),u(le,ye),u(ye,Le),W=!0,b||(N=[ar(e,"mouseenter",r[7]),ar(e,"mouseleave",r[8])],b=!0)},p(S,[L]){var ke,Re,xe,Ge,qe;(!W||L&1&&!Pe(n.src,i=S[0].imgUrl||Or))&&l(n,"src",i),(!W||L&1&&s!==(s=S[0].id))&&l(n,"alt",s),(!W||L&1)&&f!==(f=((ke=S[0].game)==null?void 0:ke.name)+"")&&x(h,f),(!W||L&1)&&w!==(w=S[0].tableFormat+"")&&x(T,w);const Ae={};L&16&&(Ae.game=S[4]),U.$set(Ae),(!W||L&16)&&q!==(q=S[4].manufacturer+"")&&x(D,q),(!W||L&16)&&y!==(y=S[4].year+"")&&x(C,y),(!W||L&1)&&X!==(X=((Re=S[0].authors)==null?void 0:Re.join(", "))+"")&&x(ie,X);const de={};L&1&&(de.data=S[0].features),me.$set(de),(!W||L&1)&&ve!==(ve=qt(S[0].updatedAt)+"")&&x(Ee,ve),(!W||L&1)&&Be!==(Be=qt(S[0].createdAt||S[0].updatedAt)+"")&&x(ct,Be),(!W||L&36)&&vt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(S[5]?100:900)+")) "+(S[5]?80:60)+"%, "+(S[2]||`rgb(var(--color-surface-${S[5]?100:600})`)+")",1),(!W||L&8)&&ne(t,"hovered",S[3]),(!W||L&1&&!Pe(Q.src,Oe=S[0].imgUrl||Or))&&l(Q,"src",Oe),(!W||L&1&&ze!==(ze=S[0].id))&&l(Q,"alt",ze),(!W||L&8)&&ne(Q,"hovered",S[3]),(!W||L&8)&&ne(Q,"shadow-lg",S[3]),(!W||L&1)&&Me!==(Me=((xe=S[0].game)==null?void 0:xe.name)+"")&&x(tt,Me),(!W||L&1)&&je!==(je=S[0].tableFormat+"")&&x(ut,je),(!W||L&16)&&Ne!==(Ne=S[4].manufacturer+"")&&x(rt,Ne),(!W||L&16)&&nt!==(nt=S[4].year+"")&&x(St,nt),(!W||L&1)&&ee!==(ee=((Ge=S[0].authors)==null?void 0:Ge.join(", "))+"")&&x(Le,ee),(!W||L&8)&&ne(le,"opacity-0",S[3]),(!W||L&2)&&l(e,"href",S[1]),(!W||L&1&&te!==(te=S[0].id))&&l(e,"id",te),(!W||L&1&&At!==(At=(qe=S[0].game)==null?void 0:qe.id))&&l(e,"data-gameid",At)},i(S){W||(bt(U.$$.fragment,S),bt(me.$$.fragment,S),W=!0)},o(S){Lt(U.$$.fragment,S),Lt(me.$$.fragment,S),W=!1},d(S){S&&g(e),ur(U),ur(me),b=!1,Ti(N)}}}function Hu(r,e,t){let n,i,s,a;_t(r,Ps,T=>t(10,i=T)),_t(r,Si,T=>t(5,a=T));const c=new Rs,{dbStore:o}=dr;_t(r,o,T=>t(9,s=T));let{file:d=Us}=e,{href:f=""}=e,h="",p=!1;const m=()=>{i.mobile||t(3,p=!0)},w=()=>{i.mobile||t(3,p=!1)};return r.$$set=T=>{"file"in T&&t(0,d=T.file),"href"in T&&t(1,f=T.href)},r.$$.update=()=>{var T;r.$$.dirty&513&&t(4,n=(T=d==null?void 0:d.game)!=null&&T.id?s[d.game.id]:Ai),r.$$.dirty&1&&d.imgUrl&&c.getColorAsync(d.imgUrl).then(H=>{H&&t(2,h=H.rgb)})},[d,f,h,p,n,a,o,m,w,s]}class Vu extends Ft{constructor(e){super(),Bt(this,e,Hu,Uu,Vt,{file:0,href:1})}}const ld={game:{route:"games",name:"Games",component:Ou},tableFiles:{route:"tables",name:"Tables",component:Vu},b2sFiles:{route:"b2s",name:"Backglasses",component:su},pupPackFiles:{route:"puppacks",name:"PuP Packs",component:He,icon:Dl},altColorFiles:{route:"altcolors",name:"Alt. Colors",component:He,icon:Yl},altSoundFiles:{route:"altsounds",name:"Alt. Sounds",component:He,icon:Xl},topperFiles:{route:"toppers",name:"Toppers",component:He,icon:Nl},romFiles:{route:"roms",name:"Roms",component:He,icon:zl},povFiles:{route:"pov",name:"POVs",component:He,icon:Gl},soundFiles:{route:"sounds",name:"Sounds",component:He,icon:Wl},mediaPackFiles:{route:"mediapacks",name:"Media Packs",component:He,icon:Ll},wheelArtFiles:{route:"wheelart",name:"Wheelart",component:He,icon:Vl},ruleFiles:{route:"rules",name:"Rules",component:He,icon:ai},tutorialFiles:{route:"tutorials",name:"Tutorials",component:He,icon:ai}};export{eu as E,Pl as F,Or as P,Vu as T,An as U,Fl as a,td as b,Yu as c,$u as d,id as e,rd as f,Ps as g,Lu as h,cu as i,Qu as j,Ml as k,Ku as l,ld as m,sd as n,Rs as o,ad as p,Xu as q,qu as r,cd as s,od as t,Zu as u,ed as v,nd as w,Ju as x,Vl as y};
