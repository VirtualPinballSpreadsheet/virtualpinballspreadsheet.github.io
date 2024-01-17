import{v as Ns,w as Ls,a2 as qr,s as ut,e as rr,i as ie,r as Ft,d as m,F as Qt,G as Zt,h as b,j as c,W as re,H as d,C as Tt,f as v,l as O,g as _,m as M,I as nr,Z as Us,a as R,c as P,U as Ie,n as W,a0 as cr,_ as Hr,k as yt,J as gn,T as Hs,V as Vs}from"./scheduler.4bea28c8.js";import{S as dt,i as ht,a as Ye,g as Fs,t as lt,c as Bs,b as Bt,d as zt,m as jt,e as Wt}from"./index.10be7516.js";import{e as Je,P as Vr}from"./bgPlaceholder.386b87e8.js";import{l as Si,D as dr,c as zs,j as js,f as Et,m as ki,e as Ai,d as Ws,E as xs}from"./formatDate.b0a5b229.js";import{_ as Ln}from"./preload-helper.a4192956.js";import{w as Kr}from"./index.56f04d27.js";import{D as _r,a as br,b as Ri,c as Gs,d as qs}from"./env.c1bfc129.js";const Ks={message:"Missing Toast Message",autohide:!0,timeout:5e3},Pi="toastStore";function Js(){const r=Ls(Pi);if(!r)throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return r}function dd(){const r=Ys();return Ns(Pi,r)}function Xs(){const r=Math.random();return Number(r).toString(32)}function Ys(){const{subscribe:r,set:e,update:t}=Kr([]),n=s=>t(a=>{if(a.length>0){const o=a.findIndex(u=>u.id===s),l=a[o];l&&(l.callback&&l.callback({id:s,status:"closed"}),l.timeoutId&&clearTimeout(l.timeoutId),a.splice(o,1))}return a});function i(s){if(s.autohide===!0)return setTimeout(()=>{n(s.id)},s.timeout)}return{subscribe:r,close:n,trigger:s=>{const a=Xs();return t(o=>{s&&s.callback&&s.callback({id:a,status:"queued"}),s.hideDismiss&&(s.autohide=!0);const l={...Ks,...s,id:a};return l.timeoutId=i(l),o.push(l),o}),a},freeze:s=>t(a=>(a.length>0&&clearTimeout(a[s].timeoutId),a)),unfreeze:s=>t(a=>(a.length>0&&(a[s].timeoutId=i(a[s])),a)),clear:()=>e([])}}function Qs(r,e){const t=()=>{r.dispatchEvent(new CustomEvent("copyComplete"))},n=()=>{if(typeof e=="object"){if("element"in e){const i=document.querySelector(`[data-clipboard="${e.element}"]`);if(!i)throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${e.element}"]`);Zr(i.innerHTML,"text/html").then(t);return}if("input"in e){const i=document.querySelector(`[data-clipboard="${e.input}"]`);if(!i)throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${e.input}"]`);Zr(i.value).then(t);return}}Zr(e).then(t)};return r.addEventListener("click",n),{update(i){e=i},destroy(){r.removeEventListener("click",n)}}}async function Zr(r,e="text/plain"){navigator.clipboard.write?await navigator.clipboard.write([new ClipboardItem({[e]:new Blob([r],{type:e}),"text/plain":new Blob([r],{type:"text/plain"})})]):await new Promise(t=>{t(navigator.clipboard.writeText(String(r)))})}/**
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
 */const Di=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Zs=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],a=r[t++],o=r[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const s=r[t++],a=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Oi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],a=i+1<r.length,o=a?r[i+1]:0,l=i+2<r.length,u=l?r[i+2]:0,h=s>>2,f=(s&3)<<4|o>>4;let p=(o&15)<<2|u>>6,g=u&63;l||(g=64,a||(p=64)),n.push(t[h],t[f],t[p],t[g])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Di(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Zs(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],o=i<r.length?t[r.charAt(i)]:0;++i;const u=i<r.length?t[r.charAt(i)]:64;++i;const f=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||o==null||u==null||f==null)throw new $s;const p=s<<2|o>>4;if(n.push(p),u!==64){const g=o<<4&240|u>>2;if(n.push(g),f!==64){const E=u<<6&192|f;n.push(E)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class $s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ea=function(r){const e=Di(r);return Oi.encodeByteArray(e,!0)},Mi=function(r){return ea(r).replace(/\./g,"")},Ni=function(r){try{return Oi.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ta(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ra=()=>ta().__FIREBASE_DEFAULTS__,na=()=>{if(typeof process>"u"||typeof process.env>"u")return;const r={}.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ia=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Ni(r[1]);return e&&JSON.parse(e)},vn=()=>{try{return ra()||na()||ia()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},sa=r=>{var e,t;return(t=(e=vn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},Li=()=>{var r;return(r=vn())===null||r===void 0?void 0:r.config},Ui=r=>{var e;return(e=vn())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class aa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function la(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function ca(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ua(){const r=he();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function da(){try{return typeof indexedDB=="object"}catch{return!1}}function ha(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const fa="FirebaseError";class kt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=fa,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wr.prototype.create)}}class wr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?pa(s,n):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new kt(i,o,n)}}function pa(r,e){return r.replace(ma,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const ma=/\{\$([^}]+)}/g;function ga(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Fr(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],a=e[i];if(Un(s)&&Un(a)){if(!Fr(s,a))return!1}else if(s!==a)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Un(r){return r!==null&&typeof r=="object"}/**
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
 */function Ir(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function va(r,e){const t=new _a(r,e);return t.subscribe.bind(t)}class _a{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");ba(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=$r),i.error===void 0&&(i.error=$r),i.complete===void 0&&(i.complete=$r);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ba(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function $r(){}/**
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
 */function qt(r){return r&&r._delegate?r._delegate:r}class ir{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class wa{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new aa;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ya(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);n===o&&a.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Ia(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ia(r){return r===Ut?void 0:r}function ya(r){return r.instantiationMode==="EAGER"}/**
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
 */class Ea{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(J||(J={}));const Ta={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Ca=J.INFO,Sa={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},ka=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Sa[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hi{constructor(e){this.name=e,this._logLevel=Ca,this._logHandler=ka,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ta[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Aa=(r,e)=>e.some(t=>r instanceof t);let Hn,Vn;function Ra(){return Hn||(Hn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pa(){return Vn||(Vn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vi=new WeakMap,on=new WeakMap,Fi=new WeakMap,en=new WeakMap,_n=new WeakMap;function Da(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",a)},s=()=>{t(Ct(r.result)),i()},a=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Vi.set(t,r)}).catch(()=>{}),_n.set(e,r),e}function Oa(r){if(on.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",a),r.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",a),r.addEventListener("abort",a)});on.set(r,e)}let ln={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return on.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Fi.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ct(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Ma(r){ln=r(ln)}function Na(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(tn(this),e,...t);return Fi.set(n,e.sort?e.sort():[e]),Ct(n)}:Pa().includes(r)?function(...e){return r.apply(tn(this),e),Ct(Vi.get(this))}:function(...e){return Ct(r.apply(tn(this),e))}}function La(r){return typeof r=="function"?Na(r):(r instanceof IDBTransaction&&Oa(r),Aa(r,Ra())?new Proxy(r,ln):r)}function Ct(r){if(r instanceof IDBRequest)return Da(r);if(en.has(r))return en.get(r);const e=La(r);return e!==r&&(en.set(r,e),_n.set(e,r)),e}const tn=r=>_n.get(r);function Ua(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const a=indexedDB.open(r,e),o=Ct(a);return n&&a.addEventListener("upgradeneeded",l=>{n(Ct(a.result),l.oldVersion,l.newVersion,Ct(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const Ha=["get","getKey","getAll","getAllKeys","count"],Va=["put","add","delete","clear"],rn=new Map;function Fn(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(rn.get(e))return rn.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Va.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Ha.includes(t)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(o.shift())),(await Promise.all([u[t](...o),i&&l.done]))[0]};return rn.set(e,s),s}Ma(r=>({...r,get:(e,t,n)=>Fn(e,t)||r.get(e,t,n),has:(e,t)=>!!Fn(e,t)||r.has(e,t)}));/**
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
 */class Fa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ba(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Ba(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cn="@firebase/app",Bn="0.9.15";/**
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
 */const xt=new Hi("@firebase/app"),za="@firebase/app-compat",ja="@firebase/analytics-compat",Wa="@firebase/analytics",xa="@firebase/app-check-compat",Ga="@firebase/app-check",qa="@firebase/auth",Ka="@firebase/auth-compat",Ja="@firebase/database",Xa="@firebase/database-compat",Ya="@firebase/functions",Qa="@firebase/functions-compat",Za="@firebase/installations",$a="@firebase/installations-compat",eo="@firebase/messaging",to="@firebase/messaging-compat",ro="@firebase/performance",no="@firebase/performance-compat",io="@firebase/remote-config",so="@firebase/remote-config-compat",ao="@firebase/storage",oo="@firebase/storage-compat",lo="@firebase/firestore",co="@firebase/firestore-compat",uo="firebase",ho="10.1.0";/**
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
 */const un="[DEFAULT]",fo={[cn]:"fire-core",[za]:"fire-core-compat",[Wa]:"fire-analytics",[ja]:"fire-analytics-compat",[Ga]:"fire-app-check",[xa]:"fire-app-check-compat",[qa]:"fire-auth",[Ka]:"fire-auth-compat",[Ja]:"fire-rtdb",[Xa]:"fire-rtdb-compat",[Ya]:"fire-fn",[Qa]:"fire-fn-compat",[Za]:"fire-iid",[$a]:"fire-iid-compat",[eo]:"fire-fcm",[to]:"fire-fcm-compat",[ro]:"fire-perf",[no]:"fire-perf-compat",[io]:"fire-rc",[so]:"fire-rc-compat",[ao]:"fire-gcs",[oo]:"fire-gcs-compat",[lo]:"fire-fst",[co]:"fire-fst-compat","fire-js":"fire-js",[uo]:"fire-js-all"};/**
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
 */const Br=new Map,dn=new Map;function po(r,e){try{r.container.addComponent(e)}catch(t){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function hr(r){const e=r.name;if(dn.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;dn.set(e,r);for(const t of Br.values())po(t,r);return!0}function Bi(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}/**
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
 */const mo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new wr("app","Firebase",mo);/**
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
 */class go{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
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
 */const yr=ho;function zi(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:un,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw St.create("bad-app-name",{appName:String(i)});if(t||(t=Li()),!t)throw St.create("no-options");const s=Br.get(i);if(s){if(Fr(t,s.options)&&Fr(n,s.config))return s;throw St.create("duplicate-app",{appName:i})}const a=new Ea(i);for(const l of dn.values())a.addComponent(l);const o=new go(t,n,a);return Br.set(i,o),o}function vo(r=un){const e=Br.get(r);if(!e&&r===un&&Li())return zi();if(!e)throw St.create("no-app",{appName:r});return e}function $t(r,e,t){var n;let i=(n=fo[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(o.join(" "));return}hr(new ir(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _o="firebase-heartbeat-database",bo=1,fr="firebase-heartbeat-store";let nn=null;function ji(){return nn||(nn=Ua(_o,bo,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(fr)}}}).catch(r=>{throw St.create("idb-open",{originalErrorMessage:r.message})})),nn}async function wo(r){try{return await(await ji()).transaction(fr).objectStore(fr).get(Wi(r))}catch(e){if(e instanceof kt)xt.warn(e.message);else{const t=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(t.message)}}}async function zn(r,e){try{const n=(await ji()).transaction(fr,"readwrite");await n.objectStore(fr).put(e,Wi(r)),await n.done}catch(t){if(t instanceof kt)xt.warn(t.message);else{const n=St.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xt.warn(n.message)}}}function Wi(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Io=1024,yo=30*24*60*60*1e3;class Eo{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Co(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=jn();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=yo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jn(),{heartbeatsToSend:t,unsentEntries:n}=To(this._heartbeatsCache.heartbeats),i=Mi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function jn(){return new Date().toISOString().substring(0,10)}function To(r,e=Io){const t=[];let n=r.slice();for(const i of r){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Wn(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Wn(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Co{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return da()?ha().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wo(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return zn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return zn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wn(r){return Mi(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function So(r){hr(new ir("platform-logger",e=>new Fa(e),"PRIVATE")),hr(new ir("heartbeat",e=>new Eo(e),"PRIVATE")),$t(cn,Bn,r),$t(cn,Bn,"esm2017"),$t("fire-js","")}So("");var ko="firebase",Ao="10.1.0";/**
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
 */$t(ko,Ao,"app");function bn(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}function xi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ro=xi,Gi=new wr("auth","Firebase",xi());/**
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
 */const zr=new Hi("@firebase/auth");function Po(r,...e){zr.logLevel<=J.WARN&&zr.warn(`Auth (${yr}): ${r}`,...e)}function Mr(r,...e){zr.logLevel<=J.ERROR&&zr.error(`Auth (${yr}): ${r}`,...e)}/**
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
 */function $e(r,...e){throw wn(r,...e)}function Qe(r,...e){return wn(r,...e)}function qi(r,e,t){const n=Object.assign(Object.assign({},Ro()),{[e]:t});return new wr("auth","Firebase",n).create(e,{appName:r.name})}function Do(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&$e(r,"argument-error"),qi(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wn(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Gi.create(r,...e)}function N(r,e,...t){if(!r)throw wn(e,...t)}function at(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Mr(e),new Error(e)}function ct(r,e){r||at(e)}/**
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
 */function hn(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Oo(){return xn()==="http:"||xn()==="https:"}function xn(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Mo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Oo()||la()||"connection"in navigator)?navigator.onLine:!0}function No(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Er{constructor(e,t){this.shortDelay=e,this.longDelay=t,ct(t>e,"Short delay should be less than long delay!"),this.isMobile=oa()||ca()}get(){return Mo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function In(r,e){ct(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ki{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Uo=new Er(3e4,6e4);function Ji(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Tr(r,e,t,n,i={}){return Xi(r,i,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});const o=Ir(Object.assign({key:r.config.apiKey},a)).slice(1),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode),Ki.fetch()(Yi(r,r.config.apiHost,t,o),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Xi(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Lo),e);try{const i=new Vo(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Rr(r,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,u]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rr(r,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Rr(r,"email-already-in-use",a);if(l==="USER_DISABLED")throw Rr(r,"user-disabled",a);const h=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qi(r,h,u);$e(r,h)}}catch(i){if(i instanceof kt)throw i;$e(r,"network-request-failed",{message:String(i)})}}async function Ho(r,e,t,n,i={}){const s=await Tr(r,e,t,n,i);return"mfaPendingCredential"in s&&$e(r,"multi-factor-auth-required",{_serverResponse:s}),s}function Yi(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?In(r.config,i):`${r.config.apiScheme}://${i}`}class Vo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Qe(this.auth,"network-request-failed")),Uo.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rr(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Qe(r,e,n);return i.customData._tokenResponse=t,i}/**
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
 */async function Fo(r,e){return Tr(r,"POST","/v1/accounts:delete",e)}async function Bo(r,e){return Tr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function ur(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zo(r,e=!1){const t=qt(r),n=await t.getIdToken(e),i=yn(n);N(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:ur(sn(i.auth_time)),issuedAtTime:ur(sn(i.iat)),expirationTime:ur(sn(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sn(r){return Number(r)*1e3}function yn(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Mr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ni(t);return i?JSON.parse(i):(Mr("Failed to decode base64 JWT payload"),null)}catch(i){return Mr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jo(r){const e=yn(r);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof kt&&Wo(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Wo({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class xo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ur(this.lastLoginAt),this.creationTime=ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jr(r){var e;const t=r.auth,n=await r.getIdToken(),i=await pr(r,Bo(t,{idToken:n}));N(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ko(s.providerUserInfo):[],o=qo(r.providerData,a),l=r.isAnonymous,u=!(r.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Qi(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(r,f)}async function Go(r){const e=qt(r);await jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qo(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Ko(r){return r.map(e=>{var{providerId:t}=e,n=bn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Jo(r,e){const t=await Xi(r,{},async()=>{const n=Ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,a=Yi(r,i,"/v1/token",`key=${s}`),o=await r._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ki.fetch()(a,{method:"POST",headers:o,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await Jo(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,a=new mr;return n&&(N(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),i&&(N(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
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
 */function _t(r,e){N(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Vt{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=bn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await pr(this,this.stsTokenManager.getToken(this.auth,e));return N(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zo(this,e)}reload(){return Go(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await jr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await pr(this,Fo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,a,o,l,u,h;const f=(n=t.displayName)!==null&&n!==void 0?n:void 0,p=(i=t.email)!==null&&i!==void 0?i:void 0,g=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,E=(a=t.photoURL)!==null&&a!==void 0?a:void 0,T=(o=t.tenantId)!==null&&o!==void 0?o:void 0,L=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,U=(u=t.createdAt)!==null&&u!==void 0?u:void 0,F=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:H,emailVerified:G,isAnonymous:x,providerData:S,stsTokenManager:X}=t;N(H&&X,e,"internal-error");const w=mr.fromJSON(this.name,X);N(typeof H=="string",e,"internal-error"),_t(f,e.name),_t(p,e.name),N(typeof G=="boolean",e,"internal-error"),N(typeof x=="boolean",e,"internal-error"),_t(g,e.name),_t(E,e.name),_t(T,e.name),_t(L,e.name),_t(U,e.name),_t(F,e.name);const k=new Vt({uid:H,auth:e,email:p,emailVerified:G,displayName:f,isAnonymous:x,photoURL:E,phoneNumber:g,tenantId:T,stsTokenManager:w,createdAt:U,lastLoginAt:F});return S&&Array.isArray(S)&&(k.providerData=S.map(I=>Object.assign({},I))),L&&(k._redirectEventId=L),k}static async _fromIdTokenResponse(e,t,n=!1){const i=new mr;i.updateFromServerResponse(t);const s=new Vt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await jr(s),s}}/**
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
 */const Gn=new Map;function ot(r){ct(r instanceof Function,"Expected a class definition");let e=Gn.get(r);return e?(ct(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Gn.set(r,e),e)}/**
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
 */class Zi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zi.type="NONE";const qn=Zi;/**
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
 */function Nr(r,e,t){return`firebase:${r}:${e}:${t}`}class er{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Nr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Nr("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new er(ot(qn),e,n);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ot(qn);const a=Nr(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const h=await u._get(a);if(h){const f=Vt._fromJSON(e,h);u!==s&&(o=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new er(s,e,n):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new er(s,e,n))}}/**
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
 */function Kn(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ts(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($i(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ns(e))return"Blackberry";if(is(e))return"Webos";if(En(e))return"Safari";if((e.includes("chrome/")||es(e))&&!e.includes("edge/"))return"Chrome";if(rs(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function $i(r=he()){return/firefox\//i.test(r)}function En(r=he()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function es(r=he()){return/crios\//i.test(r)}function ts(r=he()){return/iemobile/i.test(r)}function rs(r=he()){return/android/i.test(r)}function ns(r=he()){return/blackberry/i.test(r)}function is(r=he()){return/webos/i.test(r)}function Jr(r=he()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Xo(r=he()){var e;return Jr(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yo(){return ua()&&document.documentMode===10}function ss(r=he()){return Jr(r)||rs(r)||is(r)||ns(r)||/windows phone/i.test(r)||ts(r)}function Qo(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function as(r,e=[]){let t;switch(r){case"Browser":t=Kn(he());break;case"Worker":t=`${Kn(he())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yr}/${n}`}async function os(r,e){return Tr(r,"GET","/v2/recaptchaConfig",Ji(r,e))}function Jn(r){return r!==void 0&&r.enterprise!==void 0}class ls{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function Zo(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}function cs(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Qe("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",Zo().appendChild(n)})}function $o(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const el="https://www.google.com/recaptcha/enterprise.js?render=",tl="recaptcha-enterprise",rl="NO_RECAPTCHA";class nl{constructor(e){this.type=tl,this.auth=Cr(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{os(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new ls(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,a(u.siteKey)}}).catch(l=>{o(l)})})}function i(s,a,o){const l=window.grecaptcha;Jn(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{a(u)}).catch(()=>{a(rl)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{n(this.auth).then(o=>{if(!t&&Jn(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}cs(el+o).then(()=>{i(o,s,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}/**
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
 */class il{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((a,o)=>{try{const l=e(s);a(l)}catch(l){o(l)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */class sl{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xn(this),this.idTokenSubscription=new Xn(this),this.beforeStateQueue=new il(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ot(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await er.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,o=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===o)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await jr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=No()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?qt(e):null;return t&&N(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}async initializeRecaptchaConfig(){const e=await os(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ls(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new nl(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ot(e)||this._popupRedirectResolver;N(t,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return N(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=as(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Po(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Cr(r){return qt(r)}class Xn{constructor(e){this.auth=e,this.observer=null,this.addObserver=va(t=>this.observer=t)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function al(r,e){const t=Bi(r,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Fr(s,e??{}))return i;$e(i,"already-initialized")}return t.initialize({options:e})}function ol(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(ot);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function ll(r,e,t){const n=Cr(r);N(n._canInitEmulator,n,"emulator-config-failed"),N(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=us(e),{host:a,port:o}=cl(e),l=o===null?"":`:${o}`;n.config.emulator={url:`${s}//${a}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ul()}function us(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function cl(r){const e=us(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Yn(n.substr(s.length+1))}}else{const[s,a]=n.split(":");return{host:s,port:Yn(a)}}}function Yn(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function ul(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class ds{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return at("not implemented")}_getIdTokenResponse(e){return at("not implemented")}_linkToIdToken(e,t){return at("not implemented")}_getReauthenticationResolver(e){return at("not implemented")}}/**
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
 */async function tr(r,e){return Ho(r,"POST","/v1/accounts:signInWithIdp",Ji(r,e))}/**
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
 */const dl="http://localhost";class Gt extends ds{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$e("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=bn(t,["providerId","signInMethod"]);if(!n||!i)return null;const a=new Gt(n,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return tr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,tr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,tr(e,t)}buildRequest(){const e={requestUri:dl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ir(t)}return e}}/**
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
 */class Tn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sr extends Tn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bt extends Sr{constructor(){super("facebook.com")}static credential(e){return Gt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
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
 */class wt extends Sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return wt.credential(t,n)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
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
 */class Xe extends Sr{constructor(){super("github.com")}static credential(e){return Gt._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com";Xe.PROVIDER_ID="github.com";/**
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
 */class It extends Sr{constructor(){super("twitter.com")}static credential(e,t){return Gt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return It.credential(t,n)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
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
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Vt._fromIdTokenResponse(e,n,i),a=Qn(n);return new sr({user:s,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Qn(n);return new sr({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Qn(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Wr extends kt{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Wr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Wr(e,t,n,i)}}function hs(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wr._fromErrorAndOperation(r,s,e,n):s})}async function hl(r,e,t=!1){const n=await pr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return sr._forOperation(r,"link",n)}/**
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
 */async function fl(r,e,t=!1){const{auth:n}=r,i="reauthenticate";try{const s=await pr(r,hs(n,i,e,r),t);N(s.idToken,n,"internal-error");const a=yn(s.idToken);N(a,n,"internal-error");const{sub:o}=a;return N(r.uid===o,n,"user-mismatch"),sr._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$e(n,"user-mismatch"),s}}/**
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
 */async function pl(r,e,t=!1){const n="signIn",i=await hs(r,n,e),s=await sr._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}function ml(r,e,t,n){return qt(r).onIdTokenChanged(e,t,n)}function gl(r,e,t){return qt(r).beforeAuthStateChanged(e,t)}function vl(r){return qt(r).signOut()}const xr="__sak";/**
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
 */class fs{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xr,"1"),this.storage.removeItem(xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _l(){const r=he();return En(r)||Jr(r)}const bl=1e3,wl=10;class ps extends fs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_l()&&Qo(),this.fallbackToPolling=ss(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(n);!t&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);Yo()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wl):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},bl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ps.type="LOCAL";const Il=ps;/**
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
 */function yl(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Xr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new Xr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(a).map(async u=>u(t.origin,s)),l=await yl(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xr.receivers=[];/**
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
 */function Cn(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class El{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const u=Cn("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},n);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ze(){return window}function Tl(r){Ze().location.href=r}/**
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
 */function vs(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function Cl(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sl(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function kl(){return vs()?self:null}/**
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
 */const _s="firebaseLocalStorageDb",Al=1,Gr="firebaseLocalStorage",bs="fbase_key";class kr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yr(r,e){return r.transaction([Gr],e?"readwrite":"readonly").objectStore(Gr)}function Rl(){const r=indexedDB.deleteDatabase(_s);return new kr(r).toPromise()}function fn(){const r=indexedDB.open(_s,Al);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Gr,{keyPath:bs})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Gr)?e(n):(n.close(),await Rl(),e(await fn()))})})}async function Zn(r,e,t){const n=Yr(r,!0).put({[bs]:e,value:t});return new kr(n).toPromise()}async function Pl(r,e){const t=Yr(r,!1).get(e),n=await new kr(t).toPromise();return n===void 0?null:n.value}function $n(r,e){const t=Yr(r,!0).delete(e);return new kr(t).toPromise()}const Dl=800,Ol=3;class ws{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Ol)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xr._getInstance(kl()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Cl(),!this.activeServiceWorker)return;this.sender=new El(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fn();return await Zn(e,xr,"1"),await $n(e,xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Pl(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$n(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yr(i,!1).getAll();return new kr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ws.type="LOCAL";const Ml=ws;new Er(3e4,6e4);/**
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
 */function Is(r,e){return e?ot(e):(N(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Sn extends ds{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Nl(r){return pl(r.auth,new Sn(r),r.bypassAuthState)}function Ll(r){const{auth:e,user:t}=r;return N(t,e,"internal-error"),fl(t,new Sn(r),r.bypassAuthState)}async function Ul(r){const{auth:e,user:t}=r;return N(t,e,"internal-error"),hl(t,new Sn(r),r.bypassAuthState)}/**
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
 */class ys{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nl;case"linkViaPopup":case"linkViaRedirect":return Ul;case"reauthViaPopup":case"reauthViaRedirect":return Ll;default:$e(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hl=new Er(2e3,1e4);async function Vl(r,e,t){const n=Cr(r);Do(r,e,Tn);const i=Is(n,t);return new Ht(n,"signInViaPopup",e,i).executeNotNull()}class Ht extends ys{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Ht.currentPopupAction&&Ht.currentPopupAction.cancel(),Ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=Cn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hl.get())};e()}}Ht.currentPopupAction=null;/**
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
 */const Fl="pendingRedirect",Lr=new Map;class Bl extends ys{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Lr.get(this.auth._key());if(!e){try{const n=await zl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Lr.set(this.auth._key(),e)}return this.bypassAuthState||Lr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zl(r,e){const t=xl(e),n=Wl(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}function jl(r,e){Lr.set(r._key(),e)}function Wl(r){return ot(r._redirectPersistence)}function xl(r){return Nr(Fl,r.config.apiKey,r.name)}async function Gl(r,e,t=!1){const n=Cr(r),i=Is(n,e),a=await new Bl(n,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
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
 */const ql=10*60*1e3;class Kl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jl(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Es(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ql&&this.cachedEventUids.clear(),this.cachedEventUids.has(ei(e))}saveEventToCache(e){this.cachedEventUids.add(ei(e)),this.lastProcessedEventTime=Date.now()}}function ei(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Es({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jl(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Es(r);default:return!1}}/**
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
 */async function Xl(r,e={}){return Tr(r,"GET","/v1/projects",e)}/**
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
 */const Yl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ql=/^https?/;async function Zl(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Xl(r);for(const t of e)try{if($l(t))return}catch{}$e(r,"unauthorized-domain")}function $l(r){const e=hn(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const a=new URL(r);return a.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===n}if(!Ql.test(t))return!1;if(Yl.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const ec=new Er(3e4,6e4);function ti(){const r=Ze().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function tc(r){return new Promise((e,t)=>{var n,i,s;function a(){ti(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ti(),t(Qe(r,"network-request-failed"))},timeout:ec.get()})}if(!((i=(n=Ze().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ze().gapi)===null||s===void 0)&&s.load)a();else{const o=$o("iframefcb");return Ze()[o]=()=>{gapi.load?a():t(Qe(r,"network-request-failed"))},cs(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw Ur=null,e})}let Ur=null;function rc(r){return Ur=Ur||tc(r),Ur}/**
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
 */const nc=new Er(5e3,15e3),ic="__/auth/iframe",sc="emulator/auth/iframe",ac={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lc(r){const e=r.config;N(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?In(e,sc):`https://${r.config.authDomain}/${ic}`,n={apiKey:e.apiKey,appName:r.name,v:yr},i=oc.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${Ir(n).slice(1)}`}async function cc(r){const e=await rc(r),t=Ze().gapi;return N(t,r,"internal-error"),e.open({where:document.body,url:lc(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ac,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const a=Qe(r,"network-request-failed"),o=Ze().setTimeout(()=>{s(a)},nc.get());function l(){Ze().clearTimeout(o),i(n)}n.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const uc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dc=500,hc=600,fc="_blank",pc="http://localhost";class ri{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mc(r,e,t,n=dc,i=hc){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const l=Object.assign(Object.assign({},uc),{width:n.toString(),height:i.toString(),top:s,left:a}),u=he().toLowerCase();t&&(o=es(u)?fc:t),$i(u)&&(e=e||pc,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,E])=>`${p}${g}=${E},`,"");if(Xo(u)&&o!=="_self")return gc(e||"",o),new ri(null);const f=window.open(e||"",o,h);N(f,r,"popup-blocked");try{f.focus()}catch{}return new ri(f)}function gc(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const vc="__/auth/handler",_c="emulator/auth/handler",bc=encodeURIComponent("fac");async function ni(r,e,t,n,i,s){N(r.config.authDomain,r,"auth-domain-config-required"),N(r.config.apiKey,r,"invalid-api-key");const a={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:yr,eventId:i};if(e instanceof Tn){e.setDefaultLanguage(r.languageCode),a.providerId=e.providerId||"",ga(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))a[h]=f}if(e instanceof Sr){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(a.scopes=h.join(","))}r.tenantId&&(a.tid=r.tenantId);const o=a;for(const h of Object.keys(o))o[h]===void 0&&delete o[h];const l=await r._getAppCheckToken(),u=l?`#${bc}=${encodeURIComponent(l)}`:"";return`${wc(r)}?${Ir(o).slice(1)}${u}`}function wc({config:r}){return r.emulator?In(r,_c):`https://${r.authDomain}/${vc}`}/**
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
 */const an="webStorageSupport";class Ic{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gs,this._completeRedirectFn=Gl,this._overrideRedirectResult=jl}async _openPopup(e,t,n,i){var s;ct((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await ni(e,t,n,hn(),i);return mc(e,a,Cn())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await ni(e,t,n,hn(),i);return Tl(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ct(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await cc(e),n=new Kl(e);return t.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(an,{type:an},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[an];a!==void 0&&t(!!a),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Zl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ss()||En()||Jr()}}const yc=Ic;var ii="@firebase/auth",si="1.1.0";/**
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
 */class Ec{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Tc(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Cc(r){hr(new ir("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=n.options;N(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:a,authDomain:o,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:as(r)},u=new sl(n,i,s,l);return ol(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),hr(new ir("auth-internal",e=>{const t=Cr(e.getProvider("auth").getImmediate());return(n=>new Ec(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(ii,si,Tc(r)),$t(ii,si,"esm2017")}/**
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
 */const Sc=5*60,kc=Ui("authIdTokenMaxAge")||Sc;let ai=null;const Ac=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>kc)return;const i=t==null?void 0:t.token;ai!==i&&(ai=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Rc(r=vo()){const e=Bi(r,"auth");if(e.isInitialized())return e.getImmediate();const t=al(r,{popupRedirectResolver:yc,persistence:[Ml,Il,gs]}),n=Ui("authTokenSyncURL");if(n){const s=Ac(n);gl(t,s,()=>s(t.currentUser)),ml(t,a=>s(a))}const i=sa("auth");return i&&ll(t,`http://${i}`),t}Cc("Browser");const Pc={apiKey:"AIzaSyAjCRLDHuTkfnKU5TTV6ZZasUXecSvlQOE",authDomain:"virtual-pinball-spreadsh-71a64.firebaseapp.com",projectId:"virtual-pinball-spreadsh-71a64",appId:"1:497322440319:web:8a7f7a2997664a9af7f14a",measurementId:"G-DB48L7QGX0"},Dc=zi(Pc),Ts=Rc(Dc),Qr=Si("user",{}),kn=Kr([]),Cs=Kr(!1);let gr;const Oc=()=>{const r=new Xe;return r.addScope("public_repo"),r.setCustomParameters({allow_signup:"false"}),new Promise(e=>{Vl(Ts,r).then(async t=>{const n=Xe.credentialFromResult(t),i=t.user;if(i.displayName=t._tokenResponse.screenName,!(n!=null&&n.accessToken))throw new Error;e(An(n.accessToken,i))}).catch(t=>{console.error(t),e(!1)})})},An=async(r,e)=>{try{const{Octokit:t}=await Ln(()=>import("https://esm.sh/octokit"),[],import.meta.url),{createOrUpdateTextFile:n}=await Ln(()=>import("https://esm.sh/@octokit/plugin-create-or-update-text-file"),[],import.meta.url),i=t.plugin(n),s=new i({auth:r}),o=(await s.request("GET /repos/{owner}/{repo}/collaborators/{username}/permission",{owner:_r,username:e.displayName,repo:br})).data.permission,l=o==="admin"||o==="write"||location.hostname==="localhost"||location.hostname==="127.0.0.1";return Qr.set({user:e,permission:o,token:r,admin:l}),gr=s,(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.octokit=s),l&&await ks(),!0}catch(t){return console.error(t),await Ss(),!1}},Ss=()=>new Promise(r=>{vl(Ts).then(()=>{Qr.set({}),r()})}),Mc=async(r,e)=>{const t=`${Gs}${e}_${new Date().getTime()}.webp`,n=await Uc(r);let i;try{i=(await gr.request(`GET /repos/{owner}/{repo}/contents/${t}`,{owner:_r,repo:br})).data.sha}catch{}try{const s=await gr.rest.repos.createOrUpdateFileContents({owner:"VirtualPinballSpreadsheet",repo:"vps-db",path:t,sha:i,content:n,message:`IMAGE:${e} - updated image`});return`https://virtualpinballspreadsheet.github.io/vps-db/${t}`}catch(s){console.error(s);return}},Nc=async r=>{try{const e=await gr.createOrUpdateTextFile({owner:_r,repo:br,branch:Ri,path:`${qs}${r.id}.json`,content:JSON.stringify(r),message:`GAME:${r.id} - Updated ${r.name}`});return kn.update(t=>{var n;return[...t,{author:((n=qr(Rn.userStore).user)==null?void 0:n.displayName)||"???",id:r.id,updatedAt:new Date().toISOString()}]}),!0}catch(e){return console.error(e),!1}},Lc=async()=>{try{const r=await gr.createOrUpdateTextFile({owner:_r,repo:br,path:"lastUpdated.json",content:JSON.stringify(new Date().getTime()),message:"UPDATE DB"});return await As(),!0}catch(r){return console.error(r),!1}},ks=async()=>{try{await dr.fetchDb();const r=qr(dr.lastUpdated),e=new Date(r+1e3).toISOString();let n=await(await fetch(`https://api.github.com/repos/${_r}/${br}/commits?sha=${Ri}&since=${e}`)).json();n=n.filter(i=>{var s,a;return(a=(s=i==null?void 0:i.commit)==null?void 0:s.message)==null?void 0:a.includes("GAME:")}).map(i=>{var s,a,o,l,u,h,f,p,g;return{author:(a=(s=i==null?void 0:i.commit)==null?void 0:s.author)==null?void 0:a.name,id:(f=(h=(u=(l=(o=i==null?void 0:i.commit)==null?void 0:o.message)==null?void 0:l.split(" - "))==null?void 0:u[0])==null?void 0:h.split(":"))==null?void 0:f[1],updatedAt:(g=(p=i==null?void 0:i.commit)==null?void 0:p.author)==null?void 0:g.date}}),kn.set(n)}catch{}},As=async()=>{try{const e=await(await fetch("https://api.github.com/repos/VirtualPinballSpreadsheet/vps-db/actions/runs?status=in_progress")).json(),n=await(await fetch("https://api.github.com/repos/VirtualPinballSpreadsheet/vps-db/actions/runs?status=queued")).json();debugger;Cs.set(e.total_count>0||n.total_count>0)}catch{}};(async()=>{const r=qr(Qr),{user:e,token:t}=r;t&&e&&An(t,e)})();const Rn={login:An,logout:Ss,triggerLoginPopup:Oc,uploadImage:Mc,uploadGameFile:Nc,updateDb:Lc,getUnpublishedChanges:ks,getPipelineState:As,userStore:Qr,unpublishedChanges:kn,pipelineState:Cs},Uc=r=>new Promise((e,t)=>{const n=new FileReader;n.onload=function(){const s=n.result.split(",")[1];e(s)},n.readAsDataURL(r)}),Pr=parseFloat;function pn(r,e=";"){let t;if(Array.isArray(r))t=r.filter(n=>n);else{t=[];for(const n in r)r[n]&&t.push(`${n}:${r[n]}`)}return t.join(e)}function Hc(r,e,t,n){let i,s;const a="1em";let o,l,u,h="-.125em";const f="visible";return n&&(u="center",s="1.25em"),t&&(i=t),e&&(e=="lg"?(l="1.33333em",o=".75em",h="-.225em"):e=="xs"?l=".75em":e=="sm"?l=".875em":l=e.replace("x","em")),pn([pn({float:i,width:s,height:a,"line-height":o,"font-size":l,"text-align":u,"vertical-align":h,"transform-origin":"center",overflow:f}),r])}function Vc(r,e,t,n,i,s=1,a="",o=""){let l=1,u=1;return i&&(i=="horizontal"?l=-1:i=="vertical"?u=-1:l=u=-1),pn([`translate(${Pr(e)*s}${a},${Pr(t)*s}${a})`,`scale(${l*Pr(r)},${u*Pr(r)})`,n&&`rotate(${n}${o})`]," ")}function oi(r){let e,t,n,i,s,a,o,l;function u(p,g){return typeof p[10][4]=="string"?Bc:Fc}let h=u(r),f=h(r);return{c(){e=Qt("svg"),t=Qt("g"),n=Qt("g"),f.c(),this.h()},l(p){e=Zt(p,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var g=b(e);t=Zt(g,"g",{transform:!0,"transform-origin":!0});var E=b(t);n=Zt(E,"g",{transform:!0});var T=b(n);f.l(T),T.forEach(m),E.forEach(m),g.forEach(m),this.h()},h(){c(n,"transform",r[12]),c(t,"transform",i="translate("+r[10][0]/2+" "+r[10][1]/2+")"),c(t,"transform-origin",s=r[10][0]/4+" 0"),c(e,"id",a=r[1]||void 0),c(e,"class",o="svelte-fa "+r[0]+" svelte-1cj2gr0"),c(e,"style",r[11]),c(e,"viewBox",l="0 0 "+r[10][0]+" "+r[10][1]),c(e,"aria-hidden","true"),c(e,"role","img"),c(e,"xmlns","http://www.w3.org/2000/svg"),re(e,"pulse",r[4]),re(e,"spin",r[3])},m(p,g){ie(p,e,g),d(e,t),d(t,n),f.m(n,null)},p(p,g){h===(h=u(p))&&f?f.p(p,g):(f.d(1),f=h(p),f&&(f.c(),f.m(n,null))),g&4096&&c(n,"transform",p[12]),g&1024&&i!==(i="translate("+p[10][0]/2+" "+p[10][1]/2+")")&&c(t,"transform",i),g&1024&&s!==(s=p[10][0]/4+" 0")&&c(t,"transform-origin",s),g&2&&a!==(a=p[1]||void 0)&&c(e,"id",a),g&1&&o!==(o="svelte-fa "+p[0]+" svelte-1cj2gr0")&&c(e,"class",o),g&2048&&c(e,"style",p[11]),g&1024&&l!==(l="0 0 "+p[10][0]+" "+p[10][1])&&c(e,"viewBox",l),g&17&&re(e,"pulse",p[4]),g&9&&re(e,"spin",p[3])},d(p){p&&m(e),f.d()}}}function Fc(r){let e,t,n,i,s,a,o,l,u,h;return{c(){e=Qt("path"),a=Qt("path"),this.h()},l(f){e=Zt(f,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),b(e).forEach(m),a=Zt(f,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),b(a).forEach(m),this.h()},h(){c(e,"d",t=r[10][4][0]),c(e,"fill",n=r[6]||r[2]||"currentColor"),c(e,"fill-opacity",i=r[9]!=!1?r[7]:r[8]),c(e,"transform",s="translate("+r[10][0]/-2+" "+r[10][1]/-2+")"),c(a,"d",o=r[10][4][1]),c(a,"fill",l=r[5]||r[2]||"currentColor"),c(a,"fill-opacity",u=r[9]!=!1?r[8]:r[7]),c(a,"transform",h="translate("+r[10][0]/-2+" "+r[10][1]/-2+")")},m(f,p){ie(f,e,p),ie(f,a,p)},p(f,p){p&1024&&t!==(t=f[10][4][0])&&c(e,"d",t),p&68&&n!==(n=f[6]||f[2]||"currentColor")&&c(e,"fill",n),p&896&&i!==(i=f[9]!=!1?f[7]:f[8])&&c(e,"fill-opacity",i),p&1024&&s!==(s="translate("+f[10][0]/-2+" "+f[10][1]/-2+")")&&c(e,"transform",s),p&1024&&o!==(o=f[10][4][1])&&c(a,"d",o),p&36&&l!==(l=f[5]||f[2]||"currentColor")&&c(a,"fill",l),p&896&&u!==(u=f[9]!=!1?f[8]:f[7])&&c(a,"fill-opacity",u),p&1024&&h!==(h="translate("+f[10][0]/-2+" "+f[10][1]/-2+")")&&c(a,"transform",h)},d(f){f&&(m(e),m(a))}}}function Bc(r){let e,t,n,i;return{c(){e=Qt("path"),this.h()},l(s){e=Zt(s,"path",{d:!0,fill:!0,transform:!0}),b(e).forEach(m),this.h()},h(){c(e,"d",t=r[10][4]),c(e,"fill",n=r[2]||r[5]||"currentColor"),c(e,"transform",i="translate("+r[10][0]/-2+" "+r[10][1]/-2+")")},m(s,a){ie(s,e,a)},p(s,a){a&1024&&t!==(t=s[10][4])&&c(e,"d",t),a&36&&n!==(n=s[2]||s[5]||"currentColor")&&c(e,"fill",n),a&1024&&i!==(i="translate("+s[10][0]/-2+" "+s[10][1]/-2+")")&&c(e,"transform",i)},d(s){s&&m(e)}}}function zc(r){let e,t=r[10][4]&&oi(r);return{c(){t&&t.c(),e=rr()},l(n){t&&t.l(n),e=rr()},m(n,i){t&&t.m(n,i),ie(n,e,i)},p(n,[i]){n[10][4]?t?t.p(n,i):(t=oi(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Ft,o:Ft,d(n){n&&m(e),t&&t.d(n)}}}function jc(r,e,t){let{class:n=""}=e,{id:i=""}=e,{style:s=""}=e,{icon:a}=e,{size:o=""}=e,{color:l=""}=e,{fw:u=!1}=e,{pull:h=""}=e,{scale:f=1}=e,{translateX:p=0}=e,{translateY:g=0}=e,{rotate:E=""}=e,{flip:T=!1}=e,{spin:L=!1}=e,{pulse:U=!1}=e,{primaryColor:F=""}=e,{secondaryColor:H=""}=e,{primaryOpacity:G=1}=e,{secondaryOpacity:x=.4}=e,{swapOpacity:S=!1}=e,X,w,k;return r.$$set=I=>{"class"in I&&t(0,n=I.class),"id"in I&&t(1,i=I.id),"style"in I&&t(13,s=I.style),"icon"in I&&t(14,a=I.icon),"size"in I&&t(15,o=I.size),"color"in I&&t(2,l=I.color),"fw"in I&&t(16,u=I.fw),"pull"in I&&t(17,h=I.pull),"scale"in I&&t(18,f=I.scale),"translateX"in I&&t(19,p=I.translateX),"translateY"in I&&t(20,g=I.translateY),"rotate"in I&&t(21,E=I.rotate),"flip"in I&&t(22,T=I.flip),"spin"in I&&t(3,L=I.spin),"pulse"in I&&t(4,U=I.pulse),"primaryColor"in I&&t(5,F=I.primaryColor),"secondaryColor"in I&&t(6,H=I.secondaryColor),"primaryOpacity"in I&&t(7,G=I.primaryOpacity),"secondaryOpacity"in I&&t(8,x=I.secondaryOpacity),"swapOpacity"in I&&t(9,S=I.swapOpacity)},r.$$.update=()=>{r.$$.dirty&16384&&t(10,X=a&&a.icon||[0,0,"",[],""]),r.$$.dirty&237568&&t(11,w=Hc(s,o,h,u)),r.$$.dirty&8126464&&t(12,k=Vc(f,p,g,E,T,512))},[n,i,l,L,U,F,H,G,x,S,X,w,k,s,a,o,u,h,f,p,g,E,T]}class Rs extends dt{constructor(e){super(),ht(this,e,jc,zc,ut,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var Wc={prefix:"fas",iconName:"film",icon:[512,512,[127902],"f008","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"]},hd={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"]},xc={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},Gc=xc,fd={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},qc={prefix:"fas",iconName:"box",icon:[448,512,[128230],"f466","M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"]},Kc={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},pd={prefix:"fas",iconName:"cloud-arrow-down",icon:[640,512,[62337,"cloud-download","cloud-download-alt"],"f0ed","M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"]},Jc={prefix:"fas",iconName:"arrows-rotate",icon:[512,512,[128472,"refresh","sync"],"f021","M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]},md=Jc,gd={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"]},Xc={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},vd=Xc,Yc={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},Qc={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},_d=Qc,Zc={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},$c=Zc,eu={prefix:"fas",iconName:"phone-volume",icon:[512,512,["volume-control-phone"],"f2a0","M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]},tu=eu,ru={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},bd=ru,nu={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},li={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]},wd={prefix:"fas",iconName:"earth-americas",icon:[512,512,[127758,"earth","earth-america","globe-americas"],"f57d","M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},iu={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Id=iu,yd={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Ed={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},su={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]},au={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Td=au,ou={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Cd=ou,Sd={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},kd={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},lu={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"]},cu={prefix:"fas",iconName:"brush",icon:[384,512,[],"f55d","M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]};const vr=Si("edits",{edits:[]}),uu=()=>{vr.update(r=>{const e=r.cache;if(!e)return r;e.data.updatedAt=new Date().getTime();const t=r.edits.findIndex(n=>n.id===e.id);return t<=-1?r.edits.push(e):r.edits[t].data=e.data,r})},du=r=>{vr.update(e=>(e.edits.findIndex(n=>n.id===r.id)<=-1||(e.edits=e.edits.filter(n=>n.id!==r.id)),e))},hu=async()=>{const{edits:r}=qr(vr),e=[];for(const t of r){const{id:n,data:i,action:s}=t;(s==="UPDATE"||s==="CREATE")&&await Rn.uploadGameFile(i)&&e.push(n)}return vr.update(t=>(t.edits=t.edits.filter(n=>!e.includes(n.id)),t)),{uploaded:e,notUploaded:r.filter(t=>!e.includes(t.id)).map(t=>t.id)}},fu={editStore:vr,saveEdit:uu,deleteEdit:du,submitChanges:hu};function ci(r){let e,t,n,i,s,a;return t=new Rs({props:{icon:Gc}}),{c(){e=v("a"),Bt(t.$$.fragment),n=O("Edit"),this.h()},l(o){e=_(o,"A",{href:!0,class:!0});var l=b(e);zt(t.$$.fragment,l),n=M(l,"Edit"),l.forEach(m),this.h()},h(){c(e,"href","?edit=true"),c(e,"class","pointer-events-auto chip variant-soft-primary hover:variant-filled-primary gap-2 flex-1")},m(o,l){ie(o,e,l),jt(t,e,null),d(e,n),i=!0,s||(a=nr(e,"click",r[9]),s=!0)},p:Ft,i(o){i||(Ye(t.$$.fragment,o),i=!0)},o(o){lt(t.$$.fragment,o),i=!1},d(o){o&&m(e),Wt(t),s=!1,a()}}}function pu(r){let e,t,n=r[0]&&r[1].admin&&ci(r);return{c(){n&&n.c(),e=rr()},l(i){n&&n.l(i),e=rr()},m(i,s){n&&n.m(i,s),ie(i,e,s),t=!0},p(i,[s]){i[0]&&i[1].admin?n?(n.p(i,s),s&3&&Ye(n,1)):(n=ci(i),n.c(),Ye(n,1),n.m(e.parentNode,e)):n&&(Fs(),lt(n,1,1,()=>{n=null}),Bs())},i(i){t||(Ye(n),t=!0)},o(i){lt(n),t=!1},d(i){i&&m(e),n&&n.d(i)}}}function mu(r,e,t){let n,i,s,a;const{userStore:o}=Rn;Tt(r,o,g=>t(1,s=g));const{editStore:l}=fu;Tt(r,l,g=>t(2,a=g));const{dbStore:u}=dr;Tt(r,u,g=>t(8,i=g));let{file:h=void 0}=e,{game:f=void 0}=e;const p=()=>{Us(l,a.cache={id:n.id,action:"UPDATE",data:JSON.parse(JSON.stringify(n))},a)};return r.$$set=g=>{"file"in g&&t(6,h=g.file),"game"in g&&t(7,f=g.game)},r.$$.update=()=>{var g;r.$$.dirty&448&&t(0,n=f||((g=h==null?void 0:h.game)!=null&&g.id?i[h.game.id]:void 0))},[n,s,a,o,l,u,h,f,i,p]}class Pn extends dt{constructor(e){super(),ht(this,e,mu,pu,ut,{file:6,game:7})}}function ui(r,e,t){const n=r.slice();return n[2]=e[t],n}function di(r){let e,t=r[2]+"",n;return{c(){e=v("div"),n=O(t),this.h()},l(i){e=_(i,"DIV",{class:!0});var s=b(e);n=M(s,t),s.forEach(m),this.h()},h(){c(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(i,s){ie(i,e,s),d(e,n)},p(i,s){s&1&&t!==(t=i[2]+"")&&W(n,t)},d(i){i&&m(e)}}}function gu(r){var k,I;let e,t,n,i,s,a,o,l,u,h,f=((k=r[0].game)==null?void 0:k.name)+"",p,g,E,T,L,U,F=((I=r[0].authors)==null?void 0:I.join(", "))+"",H,G,x,S,X=Je(r[0].features||[]),w=[];for(let C=0;C<X.length;C+=1)w[C]=di(ui(r,X,C));return T=new Pn({props:{file:r[0]}}),{c(){e=v("a"),t=v("img"),s=R(),a=v("hr"),o=R(),l=v("div"),u=v("div"),h=v("p"),p=O(f),g=R();for(let C=0;C<w.length;C+=1)w[C].c();E=R(),Bt(T.$$.fragment),L=R(),U=v("h4"),H=O(F),this.h()},l(C){e=_(C,"A",{href:!0,class:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var z=b(e);t=_(z,"IMG",{src:!0,alt:!0,class:!0}),s=P(z),a=_(z,"HR",{}),o=P(z),l=_(z,"DIV",{class:!0});var j=b(l);u=_(j,"DIV",{class:!0});var Y=b(u);h=_(Y,"P",{class:!0});var Q=b(h);p=M(Q,f),Q.forEach(m),g=P(Y);for(let K=0;K<w.length;K+=1)w[K].l(Y);E=P(Y),zt(T.$$.fragment,Y),Y.forEach(m),L=P(j),U=_(j,"H4",{class:!0});var se=b(U);H=M(se,F),se.forEach(m),j.forEach(m),z.forEach(m),this.h()},h(){var C;Ie(t.src,n=r[0].imgUrl||Vr)||c(t,"src",n),c(t,"alt",i=r[0].id),c(t,"class","card aspectTable overflow-hidden hover:brightness-125 hover:scale-110 transition-all svelte-1mrpffe"),c(h,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),c(u,"class","flex gap-2"),c(U,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),c(l,"class","flex flex-col py-4"),c(e,"href",r[1]),c(e,"class","flex flex-col"),c(e,"id",G=r[0].id),c(e,"data-gameid",x=(C=r[0].game)==null?void 0:C.id),c(e,"data-filetype","b2sFiles")},m(C,z){ie(C,e,z),d(e,t),d(e,s),d(e,a),d(e,o),d(e,l),d(l,u),d(u,h),d(h,p),d(u,g);for(let j=0;j<w.length;j+=1)w[j]&&w[j].m(u,null);d(u,E),jt(T,u,null),d(l,L),d(l,U),d(U,H),S=!0},p(C,[z]){var Y,Q,se;if((!S||z&1&&!Ie(t.src,n=C[0].imgUrl||Vr))&&c(t,"src",n),(!S||z&1&&i!==(i=C[0].id))&&c(t,"alt",i),(!S||z&1)&&f!==(f=((Y=C[0].game)==null?void 0:Y.name)+"")&&W(p,f),z&1){X=Je(C[0].features||[]);let K;for(K=0;K<X.length;K+=1){const me=ui(C,X,K);w[K]?w[K].p(me,z):(w[K]=di(me),w[K].c(),w[K].m(u,E))}for(;K<w.length;K+=1)w[K].d(1);w.length=X.length}const j={};z&1&&(j.file=C[0]),T.$set(j),(!S||z&1)&&F!==(F=((Q=C[0].authors)==null?void 0:Q.join(", "))+"")&&W(H,F),(!S||z&2)&&c(e,"href",C[1]),(!S||z&1&&G!==(G=C[0].id))&&c(e,"id",G),(!S||z&1&&x!==(x=(se=C[0].game)==null?void 0:se.id))&&c(e,"data-gameid",x)},i(C){S||(Ye(T.$$.fragment,C),S=!0)},o(C){lt(T.$$.fragment,C),S=!1},d(C){C&&m(e),cr(w,C),Wt(T)}}}function vu(r,e,t){let{file:n=zs}=e,{href:i=""}=e;return r.$$set=s=>{"file"in s&&t(0,n=s.file),"href"in s&&t(1,i=s.href)},[n,i]}class _u extends dt{constructor(e){super(),ht(this,e,vu,gu,ut,{file:0,href:1})}}function bu(r){var X;let e,t,n,i,s=(((X=r[0].game)==null?void 0:X.name)||"???")+"",a,o,l,u,h=r[0].version+"",f,p,g,E,T,L,U,F,H,G,x,S;return L=new Pn({props:{file:r[0]}}),{c(){e=v("a"),t=v("div"),n=v("div"),i=v("span"),a=O(s),o=R(),l=v("div"),u=v("span"),f=O(h),p=R(),g=v("div"),E=R(),T=v("div"),Bt(L.$$.fragment),U=R(),F=v("img"),this.h()},l(w){e=_(w,"A",{href:!0,id:!0,"data-gameid":!0,"data-filetype":!0,class:!0});var k=b(e);t=_(k,"DIV",{class:!0});var I=b(t);n=_(I,"DIV",{class:!0});var C=b(n);i=_(C,"SPAN",{class:!0});var z=b(i);a=M(z,s),z.forEach(m),o=P(C),l=_(C,"DIV",{class:!0});var j=b(l);u=_(j,"SPAN",{class:!0});var Y=b(u);f=M(Y,h),Y.forEach(m),p=P(j),g=_(j,"DIV",{class:!0}),b(g).forEach(m),E=P(j),T=_(j,"DIV",{class:!0});var Q=b(T);zt(L.$$.fragment,Q),Q.forEach(m),j.forEach(m),C.forEach(m),U=P(I),F=_(I,"IMG",{src:!0,class:!0,alt:!0}),I.forEach(m),k.forEach(m),this.h()},h(){var w;c(i,"class","font-bold"),c(u,"class","opacity-60 whitespace-nowrap text-ellipsis overflow-hidden"),c(g,"class","flex-1"),c(T,"class","shrink-0"),c(l,"class","flex justify-between max-w-full"),c(n,"class","p-4 flex flex-col justify-between absolute top-0 left-0 right-0 bottom-0 z-10"),Ie(F.src,H=r[3])||c(F,"src",H),c(F,"class","absolute top-0 left-0 right-0 bottom-0 opacity-10"),c(F,"alt",""),c(t,"class","card !bg-surface-100 dark:!bg-surface-600 aspect relative overflow-hidden hover:brightness-125 hover:scale-110 transition-all text-xs md:text-base svelte-22xih4"),c(e,"href",r[1]),c(e,"id",G=r[0].id),c(e,"data-gameid",x=(w=r[0].game)==null?void 0:w.id),c(e,"data-filetype",r[2]),c(e,"class","aspect svelte-22xih4")},m(w,k){ie(w,e,k),d(e,t),d(t,n),d(n,i),d(i,a),d(n,o),d(n,l),d(l,u),d(u,f),d(l,p),d(l,g),d(l,E),d(l,T),jt(L,T,null),d(t,U),d(t,F),S=!0},p(w,[k]){var C,z;(!S||k&1)&&s!==(s=(((C=w[0].game)==null?void 0:C.name)||"???")+"")&&W(a,s),(!S||k&1)&&h!==(h=w[0].version+"")&&W(f,h);const I={};k&1&&(I.file=w[0]),L.$set(I),(!S||k&8&&!Ie(F.src,H=w[3]))&&c(F,"src",H),(!S||k&2)&&c(e,"href",w[1]),(!S||k&1&&G!==(G=w[0].id))&&c(e,"id",G),(!S||k&1&&x!==(x=(z=w[0].game)==null?void 0:z.id))&&c(e,"data-gameid",x),(!S||k&4)&&c(e,"data-filetype",w[2])},i(w){S||(Ye(L.$$.fragment,w),S=!0)},o(w){lt(L.$$.fragment,w),S=!1},d(w){w&&m(e),Wt(L)}}}function wu(r,e,t){let n;const{getGameImage:i}=dr;let{file:s=js}=e,{href:a=""}=e,{fileType:o}=e;return r.$$set=l=>{"file"in l&&t(0,s=l.file),"href"in l&&t(1,a=l.href),"fileType"in l&&t(2,o=l.fileType)},r.$$.update=()=>{var l;r.$$.dirty&1&&t(3,n=(l=s.game)!=null&&l.id?i(s.game.id):"")},[s,a,o,n]}class qe extends dt{constructor(e){super(),ht(this,e,wu,bu,ut,{file:0,href:1,fileType:2})}}const Iu=r=>{if(!r)return Vr;if(r.imgUrl)return r.imgUrl;const e=r.b2sFiles||[];if(e.length){const n=[...e].sort((i,s)=>s.updatedAt-i.updatedAt).find(i=>i.imgUrl);if(n)return n.imgUrl}const t=r.tableFiles||[];if(t.length){const n=[...t].sort((i,s)=>s.updatedAt-i.updatedAt).find(i=>i.imgUrl);if(n)return n.imgUrl}return Vr};/*! Fast Average Color | © 2022 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */function yu(r){var e=r.toString(16);return e.length===1?"0"+e:e}function hi(r){return"#"+r.map(yu).join("")}function Eu(r){var e=(r[0]*299+r[1]*587+r[2]*114)/1e3;return e<128}function Tu(r){return r?Cu(r)?r:[r]:[]}function Cu(r){return Array.isArray(r[0])}function Dn(r,e,t){for(var n=0;n<t.length;n++)if(Su(r,e,t[n]))return!0;return!1}function Su(r,e,t){switch(t.length){case 3:if(ku(r,e,t))return!0;break;case 4:if(Au(r,e,t))return!0;break;case 5:if(Ru(r,e,t))return!0;break;default:return!1}}function ku(r,e,t){return r[e+3]!==255||r[e]===t[0]&&r[e+1]===t[1]&&r[e+2]===t[2]}function Au(r,e,t){return r[e+3]&&t[3]?r[e]===t[0]&&r[e+1]===t[1]&&r[e+2]===t[2]&&r[e+3]===t[3]:r[e+3]===t[3]}function Dr(r,e,t){return r>=e-t&&r<=e+t}function Ru(r,e,t){var n=t[0],i=t[1],s=t[2],a=t[3],o=t[4],l=r[e+3],u=Dr(l,a,o);return a?!!(!l&&u||Dr(r[e],n,o)&&Dr(r[e+1],i,o)&&Dr(r[e+2],s,o)&&u):u}function Pu(r,e,t){for(var n={},i=24,s=t.ignoredColor,a=t.step,o=[0,0,0,0,0],l=0;l<e;l+=a){var u=r[l],h=r[l+1],f=r[l+2],p=r[l+3];if(!(s&&Dn(r,l,s))){var g=Math.round(u/i)+","+Math.round(h/i)+","+Math.round(f/i);n[g]?n[g]=[n[g][0]+u*p,n[g][1]+h*p,n[g][2]+f*p,n[g][3]+p,n[g][4]+1]:n[g]=[u*p,h*p,f*p,p,1],o[4]<n[g][4]&&(o=n[g])}}var E=o[0],T=o[1],L=o[2],U=o[3],F=o[4];return U?[Math.round(E/U),Math.round(T/U),Math.round(L/U),Math.round(U/F)]:t.defaultColor}function Du(r,e,t){for(var n=0,i=0,s=0,a=0,o=0,l=t.ignoredColor,u=t.step,h=0;h<e;h+=u){var f=r[h+3],p=r[h]*f,g=r[h+1]*f,E=r[h+2]*f;l&&Dn(r,h,l)||(n+=p,i+=g,s+=E,a+=f,o++)}return a?[Math.round(n/a),Math.round(i/a),Math.round(s/a),Math.round(a/o)]:t.defaultColor}function Ou(r,e,t){for(var n=0,i=0,s=0,a=0,o=0,l=t.ignoredColor,u=t.step,h=0;h<e;h+=u){var f=r[h],p=r[h+1],g=r[h+2],E=r[h+3];l&&Dn(r,h,l)||(n+=f*f*E,i+=p*p*E,s+=g*g*E,a+=E,o++)}return a?[Math.round(Math.sqrt(n/a)),Math.round(Math.sqrt(i/a)),Math.round(Math.sqrt(s/a)),Math.round(a/o)]:t.defaultColor}function fi(r){return lr(r,"defaultColor",[0,0,0,0])}function lr(r,e,t){return r[e]===void 0?t:r[e]}var pi=10,mn=100;function Mu(r){return r.search(/\.svg(\?|$)/i)!==-1}function Nu(r){if(Ps(r)){var e=r.naturalWidth,t=r.naturalHeight;return!r.naturalWidth&&Mu(r.src)&&(e=t=mn),{width:e,height:t}}return Uu(r)?{width:r.videoWidth,height:r.videoHeight}:{width:r.width,height:r.height}}function mi(r){return Hu(r)?"canvas":Lu(r)?"offscreencanvas":Vu(r)?"imagebitmap":r.src}function Ps(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement}var Ds=typeof OffscreenCanvas<"u";function Lu(r){return Ds&&r instanceof OffscreenCanvas}function Uu(r){return typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement}function Hu(r){return typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement}function Vu(r){return typeof ImageBitmap<"u"&&r instanceof ImageBitmap}function Fu(r,e){var t=lr(e,"left",0),n=lr(e,"top",0),i=lr(e,"width",r.width),s=lr(e,"height",r.height),a=i,o=s;if(e.mode==="precision")return{srcLeft:t,srcTop:n,srcWidth:i,srcHeight:s,destWidth:a,destHeight:o};var l;return i>s?(l=i/s,a=mn,o=Math.round(a/l)):(l=s/i,o=mn,a=Math.round(o/l)),(a>i||o>s||a<pi||o<pi)&&(a=i,o=s),{srcLeft:t,srcTop:n,srcWidth:i,srcHeight:s,destWidth:a,destHeight:o}}var Bu=typeof window>"u";function zu(){return Bu?Ds?new OffscreenCanvas(1,1):null:document.createElement("canvas")}var ju="FastAverageColor: ";function Ke(r){return Error(ju+r)}function or(r,e){e||console.error(r)}var Os=function(){function r(){this.canvas=null,this.ctx=null}return r.prototype.getColorAsync=function(e,t){if(!e)return Promise.reject(Ke("call .getColorAsync() without resource."));if(typeof e=="string"){if(typeof Image>"u")return Promise.reject(Ke("resource as string is not supported in this environment"));var n=new Image;return n.crossOrigin=t&&t.crossOrigin||"",n.src=e,this.bindImageEvents(n,t)}else{if(Ps(e)&&!e.complete)return this.bindImageEvents(e,t);var i=this.getColor(e,t);return i.error?Promise.reject(i.error):Promise.resolve(i)}},r.prototype.getColor=function(e,t){t=t||{};var n=fi(t);if(!e){var i=Ke("call .getColor(null) without resource");return or(i,t.silent),this.prepareResult(n,i)}var s=Nu(e),a=Fu(s,t);if(!a.srcWidth||!a.srcHeight||!a.destWidth||!a.destHeight){var i=Ke('incorrect sizes for resource "'.concat(mi(e),'"'));return or(i,t.silent),this.prepareResult(n,i)}if(!this.canvas&&(this.canvas=zu(),!this.canvas)){var i=Ke("OffscreenCanvas is not supported in this browser");return or(i,t.silent),this.prepareResult(n,i)}if(!this.ctx){if(this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx){var i=Ke("Canvas Context 2D is not supported in this browser");return or(i,t.silent),this.prepareResult(n)}this.ctx.imageSmoothingEnabled=!1}this.canvas.width=a.destWidth,this.canvas.height=a.destHeight;try{this.ctx.clearRect(0,0,a.destWidth,a.destHeight),this.ctx.drawImage(e,a.srcLeft,a.srcTop,a.srcWidth,a.srcHeight,0,0,a.destWidth,a.destHeight);var o=this.ctx.getImageData(0,0,a.destWidth,a.destHeight).data;return this.prepareResult(this.getColorFromArray4(o,t))}catch(l){var i=Ke("security error (CORS) for resource ".concat(mi(e),`.
Details: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image`));return or(i,t.silent),!t.silent&&console.error(l),this.prepareResult(n,i)}},r.prototype.getColorFromArray4=function(e,t){t=t||{};var n=4,i=e.length,s=fi(t);if(i<n)return s;var a=i-i%n,o=(t.step||1)*n,l;switch(t.algorithm||"sqrt"){case"simple":l=Du;break;case"sqrt":l=Ou;break;case"dominant":l=Pu;break;default:throw Ke("".concat(t.algorithm," is unknown algorithm"))}return l(e,a,{defaultColor:s,ignoredColor:Tu(t.ignoredColor),step:o})},r.prototype.prepareResult=function(e,t){var n=e.slice(0,3),i=[e[0],e[1],e[2],e[3]/255],s=Eu(e);return{value:[e[0],e[1],e[2],e[3]],rgb:"rgb("+n.join(",")+")",rgba:"rgba("+i.join(",")+")",hex:hi(n),hexa:hi(e),isDark:s,isLight:!s,error:t}},r.prototype.destroy=function(){this.canvas&&(this.canvas.width=1,this.canvas.height=1,this.canvas=null),this.ctx=null},r.prototype.bindImageEvents=function(e,t){var n=this;return new Promise(function(i,s){var a=function(){u();var h=n.getColor(e,t);h.error?s(h.error):i(h)},o=function(){u(),s(Ke('Error loading image "'.concat(e.src,'".')))},l=function(){u(),s(Ke('Image "'.concat(e.src,'" loading aborted')))},u=function(){e.removeEventListener("load",a),e.removeEventListener("error",o),e.removeEventListener("abort",l)};e.addEventListener("load",a),e.addEventListener("error",o),e.addEventListener("abort",l)})},r}();const Ms=Kr({width:0,height:0,mobile:!1});function gi(r,e,t){const n=r.slice();return n[11]=e[t],n}function vi(r,e,t){const n=r.slice();return n[14]=e[t],n}function _i(r,e,t){const n=r.slice();return n[11]=e[t],n}function bi(r){let e,t=r[11]+"",n,i;return{c(){e=v("div"),n=O(t),i=R(),this.h()},l(s){e=_(s,"DIV",{class:!0});var a=b(e);n=M(a,t),i=P(a),a.forEach(m),this.h()},h(){c(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(s,a){ie(s,e,a),d(e,n),d(e,i)},p(s,a){a&32&&t!==(t=s[11]+"")&&W(n,t)},d(s){s&&m(e)}}}function wi(r){let e,t=r[14].toUpperCase()+"",n;return{c(){e=v("div"),n=O(t),this.h()},l(i){e=_(i,"DIV",{class:!0});var s=b(e);n=M(s,t),s.forEach(m),this.h()},h(){c(e,"class","badge variant-filled-surface")},m(i,s){ie(i,e,s),d(e,n)},p(i,s){s&1&&t!==(t=i[14].toUpperCase()+"")&&W(n,t)},d(i){i&&m(e)}}}function Ii(r){let e,t=r[11]+"",n,i;return{c(){e=v("div"),n=O(t),i=R(),this.h()},l(s){e=_(s,"DIV",{class:!0});var a=b(e);n=M(a,t),i=P(a),a.forEach(m),this.h()},h(){c(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(s,a){ie(s,e,a),d(e,n),d(e,i)},p(s,a){a&32&&t!==(t=s[11]+"")&&W(n,t)},d(s){s&&m(e)}}}function Wu(r){var Ot,q;let e,t,n,i,s,a,o,l,u,h=r[0].name+"",f,p,g,E,T,L=r[0].manufacturer+"",U,F,H,G,x=r[0].year+"",S,X,w,k,I=(((Ot=r[0].designers)==null?void 0:Ot.join(", "))||"-")+"",C,z,j,Y,Q,se,K,me="Updated at",At,oe,ge=Et(r[0].updatedAt)+"",Ee,Kt,et,He,ve,Te,Jt="Type",tt,Ve,_e=(r[0].type||"-")+"",Ce,Xt,ae,De,Fe,ft,le,$,Oe,Be=r[0].name+"",pt,ce,Se,fe,Me=r[0].manufacturer+"",rt,Rt,ke=r[0].year+"",ze,mt,Pt,pe,Ne=((q=r[0].designers)==null?void 0:q.join(", "))+"",nt,gt,it,Dt,je=Je(r[5]),ne=[];for(let y=0;y<je.length;y+=1)ne[y]=bi(_i(r,je,y));let ye=Je(r[0].theme||[]),ee=[];for(let y=0;y<ye.length;y+=1)ee[y]=wi(vi(r,ye,y));let Le=Je(r[5]),te=[];for(let y=0;y<Le.length;y+=1)te[y]=Ii(gi(r,Le,y));return{c(){e=v("a"),t=v("div"),n=v("img"),a=R(),o=v("div"),l=v("div"),u=v("p"),f=O(h),p=R();for(let y=0;y<ne.length;y+=1)ne[y].c();g=R(),E=v("div"),T=v("p"),U=O(L),F=R(),H=v("p"),G=O("("),S=O(x),X=O(")"),w=R(),k=v("p"),C=O(I),z=R(),j=v("div");for(let y=0;y<ee.length;y+=1)ee[y].c();Y=R(),Q=v("div"),se=v("div"),K=v("p"),K.textContent=me,At=R(),oe=v("p"),Ee=O(ge),Kt=R(),et=v("div"),He=R(),ve=v("div"),Te=v("p"),Te.textContent=Jt,tt=R(),Ve=v("p"),Ce=O(_e),Xt=R(),ae=v("img"),ft=R(),le=v("div"),$=v("div"),Oe=v("p"),pt=O(Be),ce=R();for(let y=0;y<te.length;y+=1)te[y].c();Se=R(),fe=v("p"),rt=O(Me),Rt=O(" ("),ze=O(ke),mt=O(")"),Pt=R(),pe=v("p"),nt=O(Ne),this.h()},l(y){e=_(y,"A",{class:!0,href:!0,id:!0});var V=b(e);t=_(V,"DIV",{class:!0,style:!0});var Z=b(t);n=_(Z,"IMG",{src:!0,alt:!0,style:!0,class:!0}),a=P(Z),o=_(Z,"DIV",{class:!0,style:!0});var ue=b(o);l=_(ue,"DIV",{class:!0});var D=b(l);u=_(D,"P",{class:!0});var be=b(u);f=M(be,h),be.forEach(m),p=P(D);for(let we=0;we<ne.length;we+=1)ne[we].l(D);D.forEach(m),g=P(ue),E=_(ue,"DIV",{class:!0});var A=b(E);T=_(A,"P",{class:!0});var B=b(T);U=M(B,L),B.forEach(m),F=P(A),H=_(A,"P",{});var Ae=b(H);G=M(Ae,"("),S=M(Ae,x),X=M(Ae,")"),Ae.forEach(m),A.forEach(m),w=P(ue),k=_(ue,"P",{class:!0});var de=b(k);C=M(de,I),de.forEach(m),z=P(ue),j=_(ue,"DIV",{class:!0});var Re=b(j);for(let we=0;we<ee.length;we+=1)ee[we].l(Re);Re.forEach(m),Y=P(ue),Q=_(ue,"DIV",{class:!0});var Pe=b(Q);se=_(Pe,"DIV",{class:!0});var We=b(se);K=_(We,"P",{class:!0,"data-svelte-h":!0}),Hr(K)!=="svelte-g6tq99"&&(K.textContent=me),At=P(We),oe=_(We,"P",{class:!0});var xe=b(oe);Ee=M(xe,ge),xe.forEach(m),We.forEach(m),Kt=P(Pe),et=_(Pe,"DIV",{class:!0}),b(et).forEach(m),He=P(Pe),ve=_(Pe,"DIV",{class:!0});var Ge=b(ve);Te=_(Ge,"P",{class:!0,"data-svelte-h":!0}),Hr(Te)!=="svelte-1h1g7sd"&&(Te.textContent=Jt),tt=P(Ge),Ve=_(Ge,"P",{class:!0});var Mt=b(Ve);Ce=M(Mt,_e),Mt.forEach(m),Ge.forEach(m),Pe.forEach(m),ue.forEach(m),Z.forEach(m),Xt=P(V),ae=_(V,"IMG",{src:!0,alt:!0,class:!0}),ft=P(V),le=_(V,"DIV",{class:!0});var st=b(le);$=_(st,"DIV",{class:!0});var Ue=b($);Oe=_(Ue,"P",{class:!0});var Nt=b(Oe);pt=M(Nt,Be),Nt.forEach(m),ce=P(Ue);for(let we=0;we<te.length;we+=1)te[we].l(Ue);Ue.forEach(m),Se=P(st),fe=_(st,"P",{});var vt=b(fe);rt=M(vt,Me),Rt=M(vt," ("),ze=M(vt,ke),mt=M(vt,")"),vt.forEach(m),Pt=P(st),pe=_(st,"P",{class:!0});var Lt=b(pe);nt=M(Lt,Ne),Lt.forEach(m),st.forEach(m),V.forEach(m),this.h()},h(){Ie(n.src,i=r[2])||c(n,"src",i),c(n,"alt",s=r[0].id),yt(n,"height","36%"),c(n,"class","absolute top-0 left-0 right-0 w-full bgImage z-0 object-cover opacity-10"),c(u,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),c(l,"class","flex gap-2 max-w-full"),c(T,"class","text-ellipsis whitespace-nowrap overflow-hidden"),c(E,"class","flex gap-1 text-center max-w-full"),c(k,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),c(j,"class","flex gap-2 mt-4 flex-wrap"),c(K,"class","text-xs font-bold uppercase opacity-40"),c(oe,"class",""),c(se,"class","flex flex-col items-center justify-center flex-1 gap-1"),c(et,"class","bg-surface-900-50-token h-full w-px opacity-20"),c(Te,"class","text-xs font-bold uppercase opacity-40"),c(Ve,"class",""),c(ve,"class","flex flex-col items-center justify-center flex-1 gap-1"),c(Q,"class","flex mt-auto w-full"),c(o,"class","flex flex-col max-w-full w-full absolute items-center p-2 bottom-0"),yt(o,"top","calc(90% - 13rem)"),c(t,"class","hoverCard card !bg-surface-100 dark:!bg-surface-600 shadow-2xl shadow-black absolute top-0 -left-4 -right-4 bottom-0 -z-1 flex flex-col p-4 gap-0.5 items-center svelte-1jt2e09"),yt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(r[6]?100:900)+")) "+(r[6]?80:60)+"%, "+(r[3]||`rgb(var(--color-surface-${r[6]?100:600})`)+")",1),re(t,"hovered",r[4]),Ie(ae.src,De=r[2])||c(ae,"src",De),c(ae,"alt",Fe=r[0].name),c(ae,"class","card pinImage bg-surface-300-600-token shadow-black svelte-1jt2e09"),re(ae,"hovered",r[4]),re(ae,"shadow-lg",r[4]),c(Oe,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),c($,"class","flex gap-2"),c(pe,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),c(le,"class","info flex flex-col py-4 svelte-1jt2e09"),re(le,"opacity-0",r[4]),c(e,"class","wrapper relative z-0"),c(e,"href",r[1]),c(e,"id",gt=r[0].id)},m(y,V){ie(y,e,V),d(e,t),d(t,n),d(t,a),d(t,o),d(o,l),d(l,u),d(u,f),d(l,p);for(let Z=0;Z<ne.length;Z+=1)ne[Z]&&ne[Z].m(l,null);d(o,g),d(o,E),d(E,T),d(T,U),d(E,F),d(E,H),d(H,G),d(H,S),d(H,X),d(o,w),d(o,k),d(k,C),d(o,z),d(o,j);for(let Z=0;Z<ee.length;Z+=1)ee[Z]&&ee[Z].m(j,null);d(o,Y),d(o,Q),d(Q,se),d(se,K),d(se,At),d(se,oe),d(oe,Ee),d(Q,Kt),d(Q,et),d(Q,He),d(Q,ve),d(ve,Te),d(ve,tt),d(ve,Ve),d(Ve,Ce),d(e,Xt),d(e,ae),d(e,ft),d(e,le),d(le,$),d($,Oe),d(Oe,pt),d($,ce);for(let Z=0;Z<te.length;Z+=1)te[Z]&&te[Z].m($,null);d(le,Se),d(le,fe),d(fe,rt),d(fe,Rt),d(fe,ze),d(fe,mt),d(le,Pt),d(le,pe),d(pe,nt),it||(Dt=[nr(e,"mouseenter",r[7]),nr(e,"mouseleave",r[8])],it=!0)},p(y,[V]){var Z,ue;if(V&4&&!Ie(n.src,i=y[2])&&c(n,"src",i),V&1&&s!==(s=y[0].id)&&c(n,"alt",s),V&1&&h!==(h=y[0].name+"")&&W(f,h),V&32){je=Je(y[5]);let D;for(D=0;D<je.length;D+=1){const be=_i(y,je,D);ne[D]?ne[D].p(be,V):(ne[D]=bi(be),ne[D].c(),ne[D].m(l,null))}for(;D<ne.length;D+=1)ne[D].d(1);ne.length=je.length}if(V&1&&L!==(L=y[0].manufacturer+"")&&W(U,L),V&1&&x!==(x=y[0].year+"")&&W(S,x),V&1&&I!==(I=(((Z=y[0].designers)==null?void 0:Z.join(", "))||"-")+"")&&W(C,I),V&1){ye=Je(y[0].theme||[]);let D;for(D=0;D<ye.length;D+=1){const be=vi(y,ye,D);ee[D]?ee[D].p(be,V):(ee[D]=wi(be),ee[D].c(),ee[D].m(j,null))}for(;D<ee.length;D+=1)ee[D].d(1);ee.length=ye.length}if(V&1&&ge!==(ge=Et(y[0].updatedAt)+"")&&W(Ee,ge),V&1&&_e!==(_e=(y[0].type||"-")+"")&&W(Ce,_e),V&72&&yt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(y[6]?100:900)+")) "+(y[6]?80:60)+"%, "+(y[3]||`rgb(var(--color-surface-${y[6]?100:600})`)+")",1),V&16&&re(t,"hovered",y[4]),V&4&&!Ie(ae.src,De=y[2])&&c(ae,"src",De),V&1&&Fe!==(Fe=y[0].name)&&c(ae,"alt",Fe),V&16&&re(ae,"hovered",y[4]),V&16&&re(ae,"shadow-lg",y[4]),V&1&&Be!==(Be=y[0].name+"")&&W(pt,Be),V&32){Le=Je(y[5]);let D;for(D=0;D<Le.length;D+=1){const be=gi(y,Le,D);te[D]?te[D].p(be,V):(te[D]=Ii(be),te[D].c(),te[D].m($,null))}for(;D<te.length;D+=1)te[D].d(1);te.length=Le.length}V&1&&Me!==(Me=y[0].manufacturer+"")&&W(rt,Me),V&1&&ke!==(ke=y[0].year+"")&&W(ze,ke),V&1&&Ne!==(Ne=((ue=y[0].designers)==null?void 0:ue.join(", "))+"")&&W(nt,Ne),V&16&&re(le,"opacity-0",y[4]),V&2&&c(e,"href",y[1]),V&1&&gt!==(gt=y[0].id)&&c(e,"id",gt)},i:Ft,o:Ft,d(y){y&&m(e),cr(ne,y),cr(ee,y),cr(te,y),it=!1,gn(Dt)}}}function xu(r,e,t){let n,i,s,a;Tt(r,Ms,E=>t(9,s=E)),Tt(r,ki,E=>t(6,a=E));const o=new Os;let{file:l=Ai}=e,{href:u=""}=e,h="",f=!1;const p=()=>{s.mobile||t(4,f=!0)},g=()=>{s.mobile||t(4,f=!1)};return r.$$set=E=>{"file"in E&&t(0,l=E.file),"href"in E&&t(1,u=E.href)},r.$$.update=()=>{r.$$.dirty&1&&t(2,n=Iu(l)),r.$$.dirty&1&&t(5,i=Array.from(new Set((l.tableFiles||[]).map(E=>E.tableFormat).filter(E=>!!E)))),r.$$.dirty&4&&n&&o.getColorAsync(n).then(E=>{E&&t(3,h=E.rgb)})},[l,u,n,h,f,i,a,p,g]}class Gu extends dt{constructor(e){super(),ht(this,e,xu,Wu,ut,{file:0,href:1})}}const Or=""+new URL("../assets/tablePlaceholder.f13766a0.jpg",import.meta.url).href,yi={FastFlips:"bg-red-500",SSF:"bg-cyan-500","P-ROC":"bg-bg-yellow-500",FlexDMD:"bg-orange-500",PuP:"bg-sky-500",VR:"bg-cyan-500",Hybrid:"bg-violet-500",Music:"bg-rose-500",FSS:"bg-green-500","4k":"bg-teal-500",MOD:"bg-purple-500",VPX:"bg-emerald-500",VP9:"bg-emerald-500",PM5:"bg-green-500",FX3:"bg-lime-500",FX2:"bg-lime-500",FX:"bg-lime-500",FP:"bg-yellow-500",B2S:"bg-pink-500",ROM:"bg-fuchsia-500",POV:"bg-green-500",Color:"bg-red-500",Sound:"bg-rose-500",Wheel:"bg-purple-500",Rules:"bg-orange-500",MediaPack:"bg-yellow-500",Topper:"bg-red-500","PinX Sound":"bg-sore-500","incl. B2S":"bg-pink-500","incl. ROM":"bg-fuchsia-500","incl. Art":"bg-purple-500","incl. PuP":"bg-sky-500","incl. Video":"bg-sky-500","no ROM":"bg-fuchsia-500",Adult:"bg-slate-500",Kids:"bg-indigo-500",LUT:"bg-gray-500",nFozzy:"bg-blue-500",Scorbit:"bg-indigo-500",Fleep:"bg-yellow-500"};function Ei(r,e,t){const n=r.slice();return n[1]=e[t],n}function Ti(r){let e,t=Je(r[0]||[]),n=[];for(let i=0;i<t.length;i+=1)n[i]=Ci(Ei(r,t,i));return{c(){e=v("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){e=_(i,"DIV",{class:!0});var s=b(e);for(let a=0;a<n.length;a+=1)n[a].l(s);s.forEach(m),this.h()},h(){c(e,"class","flex gap-1 flex-wrap")},m(i,s){ie(i,e,s);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null)},p(i,s){if(s&1){t=Je(i[0]||[]);let a;for(a=0;a<t.length;a+=1){const o=Ei(i,t,a);n[a]?n[a].p(o,s):(n[a]=Ci(o),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(i){i&&m(e),cr(n,i)}}}function Ci(r){let e,t,n,i=r[1].toUpperCase()+"",s,a;return{c(){e=v("div"),t=v("span"),s=O(i),a=R(),this.h()},l(o){e=_(o,"DIV",{class:!0});var l=b(e);t=_(l,"SPAN",{class:!0}),b(t).forEach(m),s=M(l,i),a=P(l),l.forEach(m),this.h()},h(){c(t,"class",n="rounded-full h-2 w-2 "+(yi[r[1]]||"bg-slate-500")+" mr-2"),c(e,"class","badge variant-ringed-surface px-1.5 py-0.5")},m(o,l){ie(o,e,l),d(e,t),d(e,s),d(e,a)},p(o,l){l&1&&n!==(n="rounded-full h-2 w-2 "+(yi[o[1]]||"bg-slate-500")+" mr-2")&&c(t,"class",n),l&1&&i!==(i=o[1].toUpperCase()+"")&&W(s,i)},d(o){o&&m(e)}}}function qu(r){var n;let e,t=((n=r[0])==null?void 0:n.length)&&Ti(r);return{c(){t&&t.c(),e=rr()},l(i){t&&t.l(i),e=rr()},m(i,s){t&&t.m(i,s),ie(i,e,s)},p(i,[s]){var a;(a=i[0])!=null&&a.length?t?t.p(i,s):(t=Ti(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Ft,o:Ft,d(i){i&&m(e),t&&t.d(i)}}}function Ku(r,e,t){let{data:n=[]}=e;return r.$$set=i=>{"data"in i&&t(0,n=i.data)},[n]}class Ju extends dt{constructor(e){super(),ht(this,e,Ku,qu,ut,{data:0})}}function Xu(r){var Z,ue,D,be;let e,t,n,i,s,a,o,l,u,h=((Z=r[0].game)==null?void 0:Z.name)+"",f,p,g,E=r[0].tableFormat+"",T,L,U,F,H,G,x=r[4].manufacturer+"",S,X,w,k,I=r[4].year+"",C,z,j,Y,Q=((ue=r[0].authors)==null?void 0:ue.join(", "))+"",se,K,me,At,oe,ge,Ee,Kt="Updated at",et,He,ve=Et(r[0].updatedAt)+"",Te,Jt,tt,Ve,_e,Ce,Xt="Added at",ae,De,Fe=Et(r[0].createdAt||r[0].updatedAt)+"",ft,le,$,Oe,Be,pt,ce,Se,fe,Me=((D=r[0].game)==null?void 0:D.name)+"",rt,Rt,ke,ze=r[0].tableFormat+"",mt,Pt,pe,Ne=r[4].manufacturer+"",nt,gt,it=r[4].year+"",Dt,je,ne,ye,ee=((be=r[0].authors)==null?void 0:be.join(", "))+"",Le,te,Ot,q,y,V;return U=new Pn({props:{game:r[4]}}),me=new Ju({props:{data:r[0].features}}),{c(){e=v("a"),t=v("div"),n=v("img"),a=R(),o=v("div"),l=v("div"),u=v("p"),f=O(h),p=R(),g=v("div"),T=O(E),L=R(),Bt(U.$$.fragment),F=R(),H=v("div"),G=v("p"),S=O(x),X=R(),w=v("p"),k=O("("),C=O(I),z=O(")"),j=R(),Y=v("p"),se=O(Q),K=R(),Bt(me.$$.fragment),At=R(),oe=v("div"),ge=v("div"),Ee=v("p"),Ee.textContent=Kt,et=R(),He=v("p"),Te=O(ve),Jt=R(),tt=v("div"),Ve=R(),_e=v("div"),Ce=v("p"),Ce.textContent=Xt,ae=R(),De=v("p"),ft=O(Fe),le=R(),$=v("img"),pt=R(),ce=v("div"),Se=v("div"),fe=v("p"),rt=O(Me),Rt=R(),ke=v("div"),mt=O(ze),Pt=R(),pe=v("p"),nt=O(Ne),gt=O(" ("),Dt=O(it),je=O(")"),ne=R(),ye=v("p"),Le=O(ee),this.h()},l(A){e=_(A,"A",{class:!0,href:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var B=b(e);t=_(B,"DIV",{style:!0,class:!0});var Ae=b(t);n=_(Ae,"IMG",{src:!0,alt:!0,style:!0,class:!0}),a=P(Ae),o=_(Ae,"DIV",{class:!0,style:!0});var de=b(o);l=_(de,"DIV",{class:!0});var Re=b(l);u=_(Re,"P",{class:!0});var Pe=b(u);f=M(Pe,h),Pe.forEach(m),p=P(Re),g=_(Re,"DIV",{class:!0});var We=b(g);T=M(We,E),We.forEach(m),L=P(Re),zt(U.$$.fragment,Re),Re.forEach(m),F=P(de),H=_(de,"DIV",{class:!0});var xe=b(H);G=_(xe,"P",{class:!0});var Ge=b(G);S=M(Ge,x),Ge.forEach(m),X=P(xe),w=_(xe,"P",{});var Mt=b(w);k=M(Mt,"("),C=M(Mt,I),z=M(Mt,")"),Mt.forEach(m),xe.forEach(m),j=P(de),Y=_(de,"P",{class:!0});var st=b(Y);se=M(st,Q),st.forEach(m),K=P(de),zt(me.$$.fragment,de),At=P(de),oe=_(de,"DIV",{class:!0});var Ue=b(oe);ge=_(Ue,"DIV",{class:!0});var Nt=b(ge);Ee=_(Nt,"P",{class:!0,"data-svelte-h":!0}),Hr(Ee)!=="svelte-g6tq99"&&(Ee.textContent=Kt),et=P(Nt),He=_(Nt,"P",{class:!0});var vt=b(He);Te=M(vt,ve),vt.forEach(m),Nt.forEach(m),Jt=P(Ue),tt=_(Ue,"DIV",{class:!0}),b(tt).forEach(m),Ve=P(Ue),_e=_(Ue,"DIV",{class:!0});var Lt=b(_e);Ce=_(Lt,"P",{class:!0,"data-svelte-h":!0}),Hr(Ce)!=="svelte-1gbi7dm"&&(Ce.textContent=Xt),ae=P(Lt),De=_(Lt,"P",{class:!0});var we=b(De);ft=M(we,Fe),we.forEach(m),Lt.forEach(m),Ue.forEach(m),de.forEach(m),Ae.forEach(m),le=P(B),$=_(B,"IMG",{src:!0,alt:!0,class:!0}),pt=P(B),ce=_(B,"DIV",{class:!0});var Yt=b(ce);Se=_(Yt,"DIV",{class:!0});var Ar=b(Se);fe=_(Ar,"P",{class:!0});var On=b(fe);rt=M(On,Me),On.forEach(m),Rt=P(Ar),ke=_(Ar,"DIV",{class:!0});var Mn=b(ke);mt=M(Mn,ze),Mn.forEach(m),Ar.forEach(m),Pt=P(Yt),pe=_(Yt,"P",{});var ar=b(pe);nt=M(ar,Ne),gt=M(ar," ("),Dt=M(ar,it),je=M(ar,")"),ar.forEach(m),ne=P(Yt),ye=_(Yt,"P",{class:!0});var Nn=b(ye);Le=M(Nn,ee),Nn.forEach(m),Yt.forEach(m),B.forEach(m),this.h()},h(){var A;Ie(n.src,i=r[0].imgUrl||Or)||c(n,"src",i),c(n,"alt",s=r[0].id),yt(n,"height","35%"),c(n,"class","absolute top-0 left-0 right-0 w-full bgImage z-0 object-cover opacity-60 svelte-gfpzxg"),c(u,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),c(g,"class","badge badge-glass my-auto py-0.5 px-1"),c(l,"class","flex gap-2 max-w-full"),c(G,"class","text-ellipsis whitespace-nowrap overflow-hidden"),c(H,"class","flex gap-1 text-center"),c(Y,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full mb-4"),c(Ee,"class","text-xs font-bold uppercase opacity-40"),c(He,"class",""),c(ge,"class","flex flex-col items-center justify-center flex-1 gap-1"),c(tt,"class","bg-surface-900-50-token h-full w-px opacity-20"),c(Ce,"class","text-xs font-bold uppercase opacity-40"),c(De,"class",""),c(_e,"class","flex flex-col items-center justify-center flex-1 gap-1"),c(oe,"class","flex mt-auto w-full"),c(o,"class","flex flex-col max-w-full w-full absolute items-center p-4 gap-0.5 bottom-0"),yt(o,"top","calc(88.5% - 14rem)"),yt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(r[5]?100:900)+")) "+(r[5]?80:60)+"%, "+(r[2]||`rgb(var(--color-surface-${r[5]?100:600})`)+")",1),c(t,"class","card !bg-surface-100 dark:!bg-surface-600 shadow-2xl shadow-black absolute top-0 -left-4 -right-4 bottom-0 -z-1 flex flex-col p-4 gap-0.5 items-center hoverCard svelte-gfpzxg"),re(t,"hovered",r[3]),Ie($.src,Oe=r[0].imgUrl||Or)||c($,"src",Oe),c($,"alt",Be=r[0].id),c($,"class","card pinImage bg-surface-300-600-token shadow-black svelte-gfpzxg"),re($,"hovered",r[3]),re($,"shadow-lg",r[3]),c(fe,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),c(ke,"class","badge badge-glass my-auto py-0.5 px-1"),c(Se,"class","flex gap-2"),c(ye,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),c(ce,"class","flex flex-col py-4 info svelte-gfpzxg"),re(ce,"opacity-0",r[3]),c(e,"class","wrapper relative z-0"),c(e,"href",r[1]),c(e,"id",te=r[0].id),c(e,"data-gameid",Ot=(A=r[0].game)==null?void 0:A.id),c(e,"data-filetype","tableFiles")},m(A,B){ie(A,e,B),d(e,t),d(t,n),d(t,a),d(t,o),d(o,l),d(l,u),d(u,f),d(l,p),d(l,g),d(g,T),d(l,L),jt(U,l,null),d(o,F),d(o,H),d(H,G),d(G,S),d(H,X),d(H,w),d(w,k),d(w,C),d(w,z),d(o,j),d(o,Y),d(Y,se),d(o,K),jt(me,o,null),d(o,At),d(o,oe),d(oe,ge),d(ge,Ee),d(ge,et),d(ge,He),d(He,Te),d(oe,Jt),d(oe,tt),d(oe,Ve),d(oe,_e),d(_e,Ce),d(_e,ae),d(_e,De),d(De,ft),d(e,le),d(e,$),d(e,pt),d(e,ce),d(ce,Se),d(Se,fe),d(fe,rt),d(Se,Rt),d(Se,ke),d(ke,mt),d(ce,Pt),d(ce,pe),d(pe,nt),d(pe,gt),d(pe,Dt),d(pe,je),d(ce,ne),d(ce,ye),d(ye,Le),q=!0,y||(V=[nr(e,"mouseenter",r[7]),nr(e,"mouseleave",r[8])],y=!0)},p(A,[B]){var Re,Pe,We,xe,Ge;(!q||B&1&&!Ie(n.src,i=A[0].imgUrl||Or))&&c(n,"src",i),(!q||B&1&&s!==(s=A[0].id))&&c(n,"alt",s),(!q||B&1)&&h!==(h=((Re=A[0].game)==null?void 0:Re.name)+"")&&W(f,h),(!q||B&1)&&E!==(E=A[0].tableFormat+"")&&W(T,E);const Ae={};B&16&&(Ae.game=A[4]),U.$set(Ae),(!q||B&16)&&x!==(x=A[4].manufacturer+"")&&W(S,x),(!q||B&16)&&I!==(I=A[4].year+"")&&W(C,I),(!q||B&1)&&Q!==(Q=((Pe=A[0].authors)==null?void 0:Pe.join(", "))+"")&&W(se,Q);const de={};B&1&&(de.data=A[0].features),me.$set(de),(!q||B&1)&&ve!==(ve=Et(A[0].updatedAt)+"")&&W(Te,ve),(!q||B&1)&&Fe!==(Fe=Et(A[0].createdAt||A[0].updatedAt)+"")&&W(ft,Fe),(!q||B&36)&&yt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(A[5]?100:900)+")) "+(A[5]?80:60)+"%, "+(A[2]||`rgb(var(--color-surface-${A[5]?100:600})`)+")",1),(!q||B&8)&&re(t,"hovered",A[3]),(!q||B&1&&!Ie($.src,Oe=A[0].imgUrl||Or))&&c($,"src",Oe),(!q||B&1&&Be!==(Be=A[0].id))&&c($,"alt",Be),(!q||B&8)&&re($,"hovered",A[3]),(!q||B&8)&&re($,"shadow-lg",A[3]),(!q||B&1)&&Me!==(Me=((We=A[0].game)==null?void 0:We.name)+"")&&W(rt,Me),(!q||B&1)&&ze!==(ze=A[0].tableFormat+"")&&W(mt,ze),(!q||B&16)&&Ne!==(Ne=A[4].manufacturer+"")&&W(nt,Ne),(!q||B&16)&&it!==(it=A[4].year+"")&&W(Dt,it),(!q||B&1)&&ee!==(ee=((xe=A[0].authors)==null?void 0:xe.join(", "))+"")&&W(Le,ee),(!q||B&8)&&re(ce,"opacity-0",A[3]),(!q||B&2)&&c(e,"href",A[1]),(!q||B&1&&te!==(te=A[0].id))&&c(e,"id",te),(!q||B&1&&Ot!==(Ot=(Ge=A[0].game)==null?void 0:Ge.id))&&c(e,"data-gameid",Ot)},i(A){q||(Ye(U.$$.fragment,A),Ye(me.$$.fragment,A),q=!0)},o(A){lt(U.$$.fragment,A),lt(me.$$.fragment,A),q=!1},d(A){A&&m(e),Wt(U),Wt(me),y=!1,gn(V)}}}function Yu(r,e,t){let n,i,s,a;Tt(r,Ms,T=>t(10,i=T)),Tt(r,ki,T=>t(5,a=T));const o=new Os,{dbStore:l}=dr;Tt(r,l,T=>t(9,s=T));let{file:u=Ws}=e,{href:h=""}=e,f="",p=!1;const g=()=>{i.mobile||t(3,p=!0)},E=()=>{i.mobile||t(3,p=!1)};return r.$$set=T=>{"file"in T&&t(0,u=T.file),"href"in T&&t(1,h=T.href)},r.$$.update=()=>{var T;r.$$.dirty&513&&t(4,n=(T=u==null?void 0:u.game)!=null&&T.id?s[u.game.id]:Ai),r.$$.dirty&1&&u.imgUrl&&o.getColorAsync(u.imgUrl).then(L=>{L&&t(2,f=L.rgb)})},[u,h,f,p,n,a,l,g,E,s]}class Qu extends dt{constructor(e){super(),ht(this,e,Yu,Xu,ut,{file:0,href:1})}}function Zu(r){let e,t,n,i,s,a,o,l;return i=new Rs({props:{icon:su,size:"8",class:"ml-2"}}),{c(){e=v("button"),t=O(r[0]),n=R(),Bt(i.$$.fragment),this.h()},l(u){e=_(u,"BUTTON",{class:!0});var h=b(e);t=M(h,r[0]),n=P(h),zt(i.$$.fragment,h),h.forEach(m),this.h()},h(){c(e,"class","chip badge-glass py-0.5 px-1")},m(u,h){ie(u,e,h),d(e,t),d(e,n),jt(i,e,null),a=!0,o||(l=[Hs(s=Qs.call(null,e,r[0])),nr(e,"click",r[1])],o=!0)},p(u,[h]){(!a||h&1)&&W(t,u[0]),s&&Vs(s.update)&&h&1&&s.update.call(null,u[0])},i(u){a||(Ye(i.$$.fragment,u),a=!0)},o(u){lt(i.$$.fragment,u),a=!1},d(u){u&&m(e),Wt(i),o=!1,gn(l)}}}function $u(r,e,t){let{id:n=""}=e;const i=()=>{Js().trigger({message:`${n} copied to clipboard.`})};return r.$$set=s=>{"id"in s&&t(0,n=s.id)},[n,i]}class ed extends dt{constructor(e){super(),ht(this,e,$u,Zu,ut,{id:0})}}function td(r){var X;let e,t,n,i,s,a,o,l=r[0].title+"",u,h,f,p=((X=r[0].authors)==null?void 0:X.join(", "))+"",g,E,T,L,U,F,H=(Et(r[0].updatedAt)||"???")+"",G,x,S;return L=new ed({props:{id:r[0].id}}),{c(){e=v("div"),t=v("iframe"),s=R(),a=v("a"),o=v("p"),u=O(l),h=R(),f=v("p"),g=O(p),E=R(),T=v("div"),Bt(L.$$.fragment),U=R(),F=v("h4"),G=O(H),this.h()},l(w){e=_(w,"DIV",{class:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var k=b(e);t=_(k,"IFRAME",{title:!0,class:!0,width:!0,src:!0,allow:!0}),b(t).forEach(m),s=P(k),a=_(k,"A",{href:!0,class:!0});var I=b(a);o=_(I,"P",{class:!0});var C=b(o);u=M(C,l),C.forEach(m),h=P(I),f=_(I,"P",{class:!0});var z=b(f);g=M(z,p),z.forEach(m),E=P(I),T=_(I,"DIV",{class:!0});var j=b(T);zt(L.$$.fragment,j),U=P(j),F=_(j,"H4",{class:!0});var Y=b(F);G=M(Y,H),Y.forEach(m),j.forEach(m),I.forEach(m),k.forEach(m),this.h()},h(){c(t,"title",n=r[0].title),c(t,"class","card aspectTable svelte-cprdlx"),c(t,"width","352"),Ie(t.src,i=`https://www.youtube.com/embed/${r[0].youtubeId}`)||c(t,"src",i),c(t,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),t.allowFullscreen=!0,re(t,"glow",r[2]),c(o,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden leading-4"),c(f,"class","text-ellipsis whitespace-nowrap overflow-hidden opacity-60 pb-1"),c(F,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),c(T,"class","flex justify-between"),c(a,"href",r[1]),c(a,"class","flex flex-col py-4"),c(e,"class","flex flex-col"),c(e,"id",x=r[0].id),c(e,"data-gameid",r[3]),c(e,"data-filetype","b2sFiles")},m(w,k){ie(w,e,k),d(e,t),d(e,s),d(e,a),d(a,o),d(o,u),d(a,h),d(a,f),d(f,g),d(a,E),d(a,T),jt(L,T,null),d(T,U),d(T,F),d(F,G),S=!0},p(w,[k]){var C;(!S||k&1&&n!==(n=w[0].title))&&c(t,"title",n),(!S||k&1&&!Ie(t.src,i=`https://www.youtube.com/embed/${w[0].youtubeId}`))&&c(t,"src",i),(!S||k&4)&&re(t,"glow",w[2]),(!S||k&1)&&l!==(l=w[0].title+"")&&W(u,l),(!S||k&1)&&p!==(p=((C=w[0].authors)==null?void 0:C.join(", "))+"")&&W(g,p);const I={};k&1&&(I.id=w[0].id),L.$set(I),(!S||k&1)&&H!==(H=(Et(w[0].updatedAt)||"???")+"")&&W(G,H),(!S||k&2)&&c(a,"href",w[1]),(!S||k&1&&x!==(x=w[0].id))&&c(e,"id",x),(!S||k&8)&&c(e,"data-gameid",w[3])},i(w){S||(Ye(L.$$.fragment,w),S=!0)},o(w){lt(L.$$.fragment,w),S=!1},d(w){w&&m(e),Wt(L)}}}function rd(r,e,t){let{file:n=xs}=e,{href:i=""}=e,{active:s=!1}=e,{gameId:a}=e;return r.$$set=o=>{"file"in o&&t(0,n=o.file),"href"in o&&t(1,i=o.href),"active"in o&&t(2,s=o.active),"gameId"in o&&t(3,a=o.gameId)},[n,i,s,a]}class nd extends dt{constructor(e){super(),ht(this,e,rd,td,ut,{file:0,href:1,active:2,gameId:3})}}const Ad={game:{route:"games",name:"Games",component:Gu},tableFiles:{route:"tables",name:"Tables",component:Qu},b2sFiles:{route:"b2s",name:"Backglasses",component:_u},pupPackFiles:{route:"puppacks",name:"PuP Packs",component:qe,icon:Wc},altColorFiles:{route:"coloredroms",name:"Colored Roms",component:qe,icon:cu},altSoundFiles:{route:"altsounds",name:"Alt. Sounds",component:qe,icon:lu},topperFiles:{route:"toppers",name:"Toppers",component:qe,icon:qc},romFiles:{route:"roms",name:"Roms",component:qe,icon:$c},povFiles:{route:"pov",name:"POVs",component:qe,icon:nu},soundFiles:{route:"sounds",name:"Sounds",component:qe,icon:tu},mediaPackFiles:{route:"mediapacks",name:"Media Packs",component:qe,icon:Kc},wheelArtFiles:{route:"wheelart",name:"Wheelart",component:qe,icon:Yc},ruleFiles:{route:"rules",name:"Rules",component:qe,icon:li},tutorialFiles:{route:"tutorials",name:"Tutorials",component:nd,icon:li}};export{fu as E,Rs as F,ed as I,Or as P,Qu as T,Rn as U,Qc as a,Id as b,gd as c,bd as d,Ms as e,yd as f,Js as g,Ju as h,dd as i,Iu as j,vd as k,Gc as l,Ad as m,fd as n,Td as o,Os as p,Cd as q,md as r,hd as s,kd as t,Sd as u,_d as v,wd as w,Ed as x,pd as y,Yc as z};
