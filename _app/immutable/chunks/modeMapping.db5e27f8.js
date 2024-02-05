import{v as Ps,w as Ds,a1 as $n,s as Tt,e as Mn,i as pe,d as f,B as wt,f as p,l as P,g,h as _,m as D,j as d,G as c,H as Zt,r as ln,Y as Os,a as A,c as k,R as we,n as j,$ as an,Z as Ln,k as bt,T as se,I as hr,Q as Ns,S as Ms}from"./scheduler.3343ecfc.js";import{S as St,i as Ct,a as Xe,g as Ls,t as lt,c as Us,b as Ht,d as Vt,m as xt,e as jt}from"./index.30a43d8b.js";import{F as Ei,j as Fs,e as Ke,C as Bs,D as Dr,E as Hs,z as Vs,G as xs,H as js,I as Ws,J as $s,K as zs,L as Gs,x as qs}from"./index.3b442ebd.js";import{d as mn,e as vn,D as cn,f as yi,g as Ks,h as Js,a as Xs,i as Ys,c as Ti,b as Qs,E as Zs}from"./DbStore.e6e0ab2b.js";import{P as Un}from"./bgPlaceholder.f57059f0.js";import{l as Si,m as Ci}from"./ProgressBar.svelte_svelte_type_style_lang.3d0725ef.js";import{_ as Or}from"./preload-helper.a4192956.js";import{w as zn}from"./index.3bf0d6e8.js";import{f as It}from"./formatDate.b9410829.js";const ea={message:"Missing Toast Message",autohide:!0,timeout:5e3},Ai="toastStore";function ta(){const n=Ds(Ai);if(!n)throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return n}function Ju(){const n=ra();return Ps(Ai,n)}function na(){const n=Math.random();return Number(n).toString(32)}function ra(){const{subscribe:n,set:e,update:t}=zn([]),r=s=>t(a=>{if(a.length>0){const o=a.findIndex(u=>u.id===s),l=a[o];l&&(l.callback&&l.callback({id:s,status:"closed"}),l.timeoutId&&clearTimeout(l.timeoutId),a.splice(o,1))}return a});function i(s){if(s.autohide===!0)return setTimeout(()=>{r(s.id)},s.timeout)}return{subscribe:n,close:r,trigger:s=>{const a=na();return t(o=>{s&&s.callback&&s.callback({id:a,status:"queued"}),s.hideDismiss&&(s.autohide=!0);const l={...ea,...s,id:a};return l.timeoutId=i(l),o.push(l),o}),a},freeze:s=>t(a=>(a.length>0&&clearTimeout(a[s].timeoutId),a)),unfreeze:s=>t(a=>(a.length>0&&(a[s].timeoutId=i(a[s])),a)),clear:()=>e([])}}function ia(n,e){const t=()=>{n.dispatchEvent(new CustomEvent("copyComplete"))},r=()=>{if(typeof e=="object"){if("element"in e){const i=document.querySelector(`[data-clipboard="${e.element}"]`);if(!i)throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${e.element}"]`);Xn(i.innerHTML,"text/html").then(t);return}if("input"in e){const i=document.querySelector(`[data-clipboard="${e.input}"]`);if(!i)throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${e.input}"]`);Xn(i.value).then(t);return}}Xn(e).then(t)};return n.addEventListener("click",r),{update(i){e=i},destroy(){n.removeEventListener("click",r)}}}async function Xn(n,e="text/plain"){navigator.clipboard.write?await navigator.clipboard.write([new ClipboardItem({[e]:new Blob([n],{type:e}),"text/plain":new Blob([n],{type:"text/plain"})})]):await new Promise(t=>{t(navigator.clipboard.writeText(String(n)))})}/**
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
 */const ki=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},sa=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],o=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Ri={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,o=a?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,h=s>>2,m=(s&3)<<4|o>>4;let I=(o&15)<<2|u>>6,v=u&63;l||(v=64,a||(I=64)),r.push(t[h],t[m],t[I],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ki(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sa(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],o=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||o==null||u==null||m==null)throw new aa;const I=s<<2|o>>4;if(r.push(I),u!==64){const v=o<<4&240|u>>2;if(r.push(v),m!==64){const w=u<<6&192|m;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class aa extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oa=function(n){const e=ki(n);return Ri.encodeByteArray(e,!0)},Pi=function(n){return oa(n).replace(/\./g,"")},Di=function(n){try{return Ri.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function la(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ca=()=>la().__FIREBASE_DEFAULTS__,ua=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},da=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Di(n[1]);return e&&JSON.parse(e)},fr=()=>{try{return ca()||ua()||da()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ha=n=>{var e,t;return(t=(e=fr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Oi=()=>{var n;return(n=fr())===null||n===void 0?void 0:n.config},Ni=n=>{var e;return(e=fr())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class fa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function ga(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ma(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function va(){const n=de();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _a(){try{return typeof indexedDB=="object"}catch{return!1}}function ba(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ia="FirebaseError";class At extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ia,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_n.prototype.create)}}class _n{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?wa(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new At(i,o,r)}}function wa(n,e){return n.replace(Ea,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ea=/\{\$([^}]+)}/g;function ya(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Fn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Nr(s)&&Nr(a)){if(!Fn(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Nr(n){return n!==null&&typeof n=="object"}/**
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
 */function bn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ta(n,e){const t=new Sa(n,e);return t.subscribe.bind(t)}class Sa{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ca(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Yn),i.error===void 0&&(i.error=Yn),i.complete===void 0&&(i.complete=Yn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ca(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yn(){}/**
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
 */function zt(n){return n&&n._delegate?n._delegate:n}class en{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Aa{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new fa;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ra(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ka(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ka(n){return n===Ut?void 0:n}function Ra(n){return n.instantiationMode==="EAGER"}/**
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
 */class Pa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Aa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const Da={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Oa=Y.INFO,Na={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Ma=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Na[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mi{constructor(e){this.name=e,this._logLevel=Oa,this._logHandler=Ma,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Da[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const La=(n,e)=>e.some(t=>n instanceof t);let Mr,Lr;function Ua(){return Mr||(Mr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fa(){return Lr||(Lr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Li=new WeakMap,ir=new WeakMap,Ui=new WeakMap,Qn=new WeakMap,pr=new WeakMap;function Ba(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Et(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Li.set(t,n)}).catch(()=>{}),pr.set(e,n),e}function Ha(n){if(ir.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});ir.set(n,e)}let sr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ir.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ui.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Et(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Va(n){sr=n(sr)}function xa(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Zn(this),e,...t);return Ui.set(r,e.sort?e.sort():[e]),Et(r)}:Fa().includes(n)?function(...e){return n.apply(Zn(this),e),Et(Li.get(this))}:function(...e){return Et(n.apply(Zn(this),e))}}function ja(n){return typeof n=="function"?xa(n):(n instanceof IDBTransaction&&Ha(n),La(n,Ua())?new Proxy(n,sr):n)}function Et(n){if(n instanceof IDBRequest)return Ba(n);if(Qn.has(n))return Qn.get(n);const e=ja(n);return e!==n&&(Qn.set(n,e),pr.set(e,n)),e}const Zn=n=>pr.get(n);function Wa(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),o=Et(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Et(a.result),l.oldVersion,l.newVersion,Et(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const $a=["get","getKey","getAll","getAllKeys","count"],za=["put","add","delete","clear"],er=new Map;function Ur(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(er.get(e))return er.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=za.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$a.includes(t)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[t](...o),i&&l.done]))[0]};return er.set(e,s),s}Va(n=>({...n,get:(e,t,r)=>Ur(e,t)||n.get(e,t,r),has:(e,t)=>!!Ur(e,t)||n.has(e,t)}));/**
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
 */class Ga{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qa(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function qa(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ar="@firebase/app",Fr="0.9.15";/**
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
 */const Wt=new Mi("@firebase/app"),Ka="@firebase/app-compat",Ja="@firebase/analytics-compat",Xa="@firebase/analytics",Ya="@firebase/app-check-compat",Qa="@firebase/app-check",Za="@firebase/auth",eo="@firebase/auth-compat",to="@firebase/database",no="@firebase/database-compat",ro="@firebase/functions",io="@firebase/functions-compat",so="@firebase/installations",ao="@firebase/installations-compat",oo="@firebase/messaging",lo="@firebase/messaging-compat",co="@firebase/performance",uo="@firebase/performance-compat",ho="@firebase/remote-config",fo="@firebase/remote-config-compat",po="@firebase/storage",go="@firebase/storage-compat",mo="@firebase/firestore",vo="@firebase/firestore-compat",_o="firebase",bo="10.1.0";/**
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
 */const or="[DEFAULT]",Io={[ar]:"fire-core",[Ka]:"fire-core-compat",[Xa]:"fire-analytics",[Ja]:"fire-analytics-compat",[Qa]:"fire-app-check",[Ya]:"fire-app-check-compat",[Za]:"fire-auth",[eo]:"fire-auth-compat",[to]:"fire-rtdb",[no]:"fire-rtdb-compat",[ro]:"fire-fn",[io]:"fire-fn-compat",[so]:"fire-iid",[ao]:"fire-iid-compat",[oo]:"fire-fcm",[lo]:"fire-fcm-compat",[co]:"fire-perf",[uo]:"fire-perf-compat",[ho]:"fire-rc",[fo]:"fire-rc-compat",[po]:"fire-gcs",[go]:"fire-gcs-compat",[mo]:"fire-fst",[vo]:"fire-fst-compat","fire-js":"fire-js",[_o]:"fire-js-all"};/**
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
 */const Bn=new Map,lr=new Map;function wo(n,e){try{n.container.addComponent(e)}catch(t){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function un(n){const e=n.name;if(lr.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;lr.set(e,n);for(const t of Bn.values())wo(t,n);return!0}function Fi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Eo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yt=new _n("app","Firebase",Eo);/**
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
 */class yo{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
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
 */const In=bo;function Bi(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:or,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yt.create("bad-app-name",{appName:String(i)});if(t||(t=Oi()),!t)throw yt.create("no-options");const s=Bn.get(i);if(s){if(Fn(t,s.options)&&Fn(r,s.config))return s;throw yt.create("duplicate-app",{appName:i})}const a=new Pa(i);for(const l of lr.values())a.addComponent(l);const o=new yo(t,r,a);return Bn.set(i,o),o}function To(n=or){const e=Bn.get(n);if(!e&&n===or&&Oi())return Bi();if(!e)throw yt.create("no-app",{appName:n});return e}function Xt(n,e,t){var r;let i=(r=Io[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(o.join(" "));return}un(new en(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const So="firebase-heartbeat-database",Co=1,dn="firebase-heartbeat-store";let tr=null;function Hi(){return tr||(tr=Wa(So,Co,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(dn)}}}).catch(n=>{throw yt.create("idb-open",{originalErrorMessage:n.message})})),tr}async function Ao(n){try{return await(await Hi()).transaction(dn).objectStore(dn).get(Vi(n))}catch(e){if(e instanceof At)Wt.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(t.message)}}}async function Br(n,e){try{const r=(await Hi()).transaction(dn,"readwrite");await r.objectStore(dn).put(e,Vi(n)),await r.done}catch(t){if(t instanceof At)Wt.warn(t.message);else{const r=yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wt.warn(r.message)}}}function Vi(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ko=1024,Ro=30*24*60*60*1e3;class Po{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Oo(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Hr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ro}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hr(),{heartbeatsToSend:t,unsentEntries:r}=Do(this._heartbeatsCache.heartbeats),i=Pi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Hr(){return new Date().toISOString().substring(0,10)}function Do(n,e=ko){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Vr(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Vr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Oo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _a()?ba().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ao(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Br(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Br(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vr(n){return Pi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function No(n){un(new en("platform-logger",e=>new Ga(e),"PRIVATE")),un(new en("heartbeat",e=>new Po(e),"PRIVATE")),Xt(ar,Fr,n),Xt(ar,Fr,"esm2017"),Xt("fire-js","")}No("");var Mo="firebase",Lo="10.1.0";/**
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
 */Xt(Mo,Lo,"app");function gr(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function xi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uo=xi,ji=new _n("auth","Firebase",xi());/**
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
 */const Hn=new Mi("@firebase/auth");function Fo(n,...e){Hn.logLevel<=Y.WARN&&Hn.warn(`Auth (${In}): ${n}`,...e)}function Pn(n,...e){Hn.logLevel<=Y.ERROR&&Hn.error(`Auth (${In}): ${n}`,...e)}/**
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
 */function Ze(n,...e){throw mr(n,...e)}function Ye(n,...e){return mr(n,...e)}function Wi(n,e,t){const r=Object.assign(Object.assign({},Uo()),{[e]:t});return new _n("auth","Firebase",r).create(e,{appName:n.name})}function Bo(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ze(n,"argument-error"),Wi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mr(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ji.create(n,...e)}function O(n,e,...t){if(!n)throw mr(e,...t)}function at(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Pn(e),new Error(e)}function ct(n,e){n||at(e)}/**
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
 */function cr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ho(){return xr()==="http:"||xr()==="https:"}function xr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Vo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ho()||ga()||"connection"in navigator)?navigator.onLine:!0}function xo(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class wn{constructor(e,t){this.shortDelay=e,this.longDelay=t,ct(t>e,"Short delay should be less than long delay!"),this.isMobile=pa()||ma()}get(){return Vo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vr(n,e){ct(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class $i{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Wo=new wn(3e4,6e4);function zi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function En(n,e,t,r,i={}){return Gi(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=bn(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),$i.fetch()(qi(n,n.config.apiHost,t,o),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Gi(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},jo),e);try{const i=new zo(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw An(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,u]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw An(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw An(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw An(n,"user-disabled",a);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wi(n,h,u);Ze(n,h)}}catch(i){if(i instanceof At)throw i;Ze(n,"network-request-failed",{message:String(i)})}}async function $o(n,e,t,r,i={}){const s=await En(n,e,t,r,i);return"mfaPendingCredential"in s&&Ze(n,"multi-factor-auth-required",{_serverResponse:s}),s}function qi(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?vr(n.config,i):`${n.config.apiScheme}://${i}`}class zo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),Wo.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function An(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ye(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function Go(n,e){return En(n,"POST","/v1/accounts:delete",e)}async function qo(n,e){return En(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function on(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ko(n,e=!1){const t=zt(n),r=await t.getIdToken(e),i=_r(r);O(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:on(nr(i.auth_time)),issuedAtTime:on(nr(i.iat)),expirationTime:on(nr(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nr(n){return Number(n)*1e3}function _r(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Pn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Di(t);return i?JSON.parse(i):(Pn("Failed to decode base64 JWT payload"),null)}catch(i){return Pn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jo(n){const e=_r(n);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof At&&Xo(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Xo({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Yo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ki{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=on(this.lastLoginAt),this.creationTime=on(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vn(n){var e;const t=n.auth,r=await n.getIdToken(),i=await hn(n,qo(t,{idToken:r}));O(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?el(s.providerUserInfo):[],o=Zo(n.providerData,a),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ki(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,m)}async function Qo(n){const e=zt(n);await Vn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zo(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function el(n){return n.map(e=>{var{providerId:t}=e,r=gr(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tl(n,e){const t=await Gi(n,{},async()=>{const r=bn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=qi(n,i,"/v1/token",`key=${s}`),o=await n._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",$i.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await tl(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new fn;return r&&(O(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fn,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
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
 */function gt(n,e){O(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=gr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ki(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await hn(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ko(this,e)}reload(){return Qo(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Vn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hn(this,Go(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,o,l,u,h;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(i=t.email)!==null&&i!==void 0?i:void 0,v=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,w=(a=t.photoURL)!==null&&a!==void 0?a:void 0,S=(o=t.tenantId)!==null&&o!==void 0?o:void 0,U=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,M=(u=t.createdAt)!==null&&u!==void 0?u:void 0,$=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:V,emailVerified:G,isAnonymous:q,providerData:L,stsTokenManager:x}=t;O(V&&x,e,"internal-error");const y=fn.fromJSON(this.name,x);O(typeof V=="string",e,"internal-error"),gt(m,e.name),gt(I,e.name),O(typeof G=="boolean",e,"internal-error"),O(typeof q=="boolean",e,"internal-error"),gt(v,e.name),gt(w,e.name),gt(S,e.name),gt(U,e.name),gt(M,e.name),gt($,e.name);const T=new Bt({uid:V,auth:e,email:I,emailVerified:G,displayName:m,isAnonymous:q,photoURL:w,phoneNumber:v,tenantId:S,stsTokenManager:y,createdAt:M,lastLoginAt:$});return L&&Array.isArray(L)&&(T.providerData=L.map(N=>Object.assign({},N))),U&&(T._redirectEventId=U),T}static async _fromIdTokenResponse(e,t,r=!1){const i=new fn;i.updateFromServerResponse(t);const s=new Bt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vn(s),s}}/**
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
 */const jr=new Map;function ot(n){ct(n instanceof Function,"Expected a class definition");let e=jr.get(n);return e?(ct(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jr.set(n,e),e)}/**
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
 */class Ji{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ji.type="NONE";const Wr=Ji;/**
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
 */function Dn(n,e,t){return`firebase:${n}:${e}:${t}`}class Yt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Yt(ot(Wr),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ot(Wr);const a=Dn(r,e.config.apiKey,e.name);let o=null;for(const u of t)try{const h=await u._get(a);if(h){const m=Bt._fromJSON(e,h);u!==s&&(o=m),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Yt(s,e,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new Yt(s,e,r))}}/**
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
 */function $r(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(es(e))return"Blackberry";if(ts(e))return"Webos";if(br(e))return"Safari";if((e.includes("chrome/")||Yi(e))&&!e.includes("edge/"))return"Chrome";if(Zi(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xi(n=de()){return/firefox\//i.test(n)}function br(n=de()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yi(n=de()){return/crios\//i.test(n)}function Qi(n=de()){return/iemobile/i.test(n)}function Zi(n=de()){return/android/i.test(n)}function es(n=de()){return/blackberry/i.test(n)}function ts(n=de()){return/webos/i.test(n)}function Gn(n=de()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function nl(n=de()){var e;return Gn(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rl(){return va()&&document.documentMode===10}function ns(n=de()){return Gn(n)||Zi(n)||ts(n)||es(n)||/windows phone/i.test(n)||Qi(n)}function il(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function rs(n,e=[]){let t;switch(n){case"Browser":t=$r(de());break;case"Worker":t=`${$r(de())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${In}/${r}`}async function is(n,e){return En(n,"GET","/v2/recaptchaConfig",zi(n,e))}function zr(n){return n!==void 0&&n.enterprise!==void 0}class ss{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function sl(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function as(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Ye("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",sl().appendChild(r)})}function al(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ol="https://www.google.com/recaptcha/enterprise.js?render=",ll="recaptcha-enterprise",cl="NO_RECAPTCHA";class ul{constructor(e){this.type=ll,this.auth=yn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{is(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new ss(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,a(u.siteKey)}}).catch(l=>{o(l)})})}function i(s,a,o){const l=window.grecaptcha;zr(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{a(u)}).catch(()=>{a(cl)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!t&&zr(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}as(ol+o).then(()=>{i(o,s,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}/**
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
 */class dl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,o)=>{try{const l=e(s);a(l)}catch(l){o(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class hl{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gr(this),this.idTokenSubscription=new Gr(this),this.beforeStateQueue=new dl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ji,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ot(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Yt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,o=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===o)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?zt(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}async initializeRecaptchaConfig(){const e=await is(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ss(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new ul(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _n("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ot(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await Yt.create(this,[ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return O(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Fo(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yn(n){return zt(n)}class Gr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ta(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function fl(n,e){const t=Fi(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Fn(s,e??{}))return i;Ze(i,"already-initialized")}return t.initialize({options:e})}function pl(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ot);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gl(n,e,t){const r=yn(n);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=os(e),{host:a,port:o}=ml(e),l=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||vl()}function os(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ml(n){const e=os(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:qr(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:qr(a)}}}function qr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function vl(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ls{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return at("not implemented")}_getIdTokenResponse(e){return at("not implemented")}_linkToIdToken(e,t){return at("not implemented")}_getReauthenticationResolver(e){return at("not implemented")}}/**
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
 */async function Qt(n,e){return $o(n,"POST","/v1/accounts:signInWithIdp",zi(n,e))}/**
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
 */const _l="http://localhost";class $t extends ls{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=gr(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new $t(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Qt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Qt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qt(e,t)}buildRequest(){const e={requestUri:_l,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bn(t)}return e}}/**
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
 */class Ir{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Tn extends Ir{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mt extends Tn{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
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
 */class vt extends Tn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return vt.credential(t,r)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
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
 */class Je extends Tn{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch{return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com";Je.PROVIDER_ID="github.com";/**
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
 */class _t extends Tn{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return _t.credential(t,r)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
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
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Bt._fromIdTokenResponse(e,r,i),a=Kr(r);return new tn({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Kr(r);return new tn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Kr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class xn extends At{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new xn(e,t,r,i)}}function cs(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xn._fromErrorAndOperation(n,s,e,r):s})}async function bl(n,e,t=!1){const r=await hn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return tn._forOperation(n,"link",r)}/**
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
 */async function Il(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await hn(n,cs(r,i,e,n),t);O(s.idToken,r,"internal-error");const a=_r(s.idToken);O(a,r,"internal-error");const{sub:o}=a;return O(n.uid===o,r,"user-mismatch"),tn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ze(r,"user-mismatch"),s}}/**
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
 */async function wl(n,e,t=!1){const r="signIn",i=await cs(n,r,e),s=await tn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function El(n,e,t,r){return zt(n).onIdTokenChanged(e,t,r)}function yl(n,e,t){return zt(n).beforeAuthStateChanged(e,t)}function Tl(n){return zt(n).signOut()}const jn="__sak";/**
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
 */class us{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jn,"1"),this.storage.removeItem(jn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Sl(){const n=de();return br(n)||Gn(n)}const Cl=1e3,Al=10;class ds extends us{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sl()&&il(),this.fallbackToPolling=ns(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);rl()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Al):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Cl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ds.type="LOCAL";const kl=ds;/**
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
 */class hs extends us{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hs.type="SESSION";const fs=hs;/**
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
 */function Rl(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class qn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new qn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async u=>u(t.origin,s)),l=await Rl(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qn.receivers=[];/**
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
 */function wr(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Pl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const u=wr("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const I=m;if(I.data.eventId===u)switch(I.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(I.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Qe(){return window}function Dl(n){Qe().location.href=n}/**
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
 */function ps(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function Ol(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nl(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ml(){return ps()?self:null}/**
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
 */const gs="firebaseLocalStorageDb",Ll=1,Wn="firebaseLocalStorage",ms="fbase_key";class Sn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Kn(n,e){return n.transaction([Wn],e?"readwrite":"readonly").objectStore(Wn)}function Ul(){const n=indexedDB.deleteDatabase(gs);return new Sn(n).toPromise()}function ur(){const n=indexedDB.open(gs,Ll);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Wn,{keyPath:ms})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Wn)?e(r):(r.close(),await Ul(),e(await ur()))})})}async function Jr(n,e,t){const r=Kn(n,!0).put({[ms]:e,value:t});return new Sn(r).toPromise()}async function Fl(n,e){const t=Kn(n,!1).get(e),r=await new Sn(t).toPromise();return r===void 0?null:r.value}function Xr(n,e){const t=Kn(n,!0).delete(e);return new Sn(t).toPromise()}const Bl=800,Hl=3;class vs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ur(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Hl)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ps()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qn._getInstance(Ml()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ol(),!this.activeServiceWorker)return;this.sender=new Pl(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ur();return await Jr(e,jn,"1"),await Xr(e,jn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jr(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Fl(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kn(i,!1).getAll();return new Sn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vs.type="LOCAL";const Vl=vs;new wn(3e4,6e4);/**
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
 */function _s(n,e){return e?ot(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Er extends ls{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xl(n){return wl(n.auth,new Er(n),n.bypassAuthState)}function jl(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),Il(t,new Er(n),n.bypassAuthState)}async function Wl(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),bl(t,new Er(n),n.bypassAuthState)}/**
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
 */class bs{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xl;case"linkViaPopup":case"linkViaRedirect":return Wl;case"reauthViaPopup":case"reauthViaRedirect":return jl;default:Ze(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $l=new wn(2e3,1e4);async function zl(n,e,t){const r=yn(n);Bo(n,e,Ir);const i=_s(r,t);return new Ft(r,"signInViaPopup",e,i).executeNotNull()}class Ft extends bs{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ft.currentPopupAction&&Ft.currentPopupAction.cancel(),Ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=wr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$l.get())};e()}}Ft.currentPopupAction=null;/**
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
 */const Gl="pendingRedirect",On=new Map;class ql extends bs{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=On.get(this.auth._key());if(!e){try{const r=await Kl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}On.set(this.auth._key(),e)}return this.bypassAuthState||On.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kl(n,e){const t=Yl(e),r=Xl(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Jl(n,e){On.set(n._key(),e)}function Xl(n){return ot(n._redirectPersistence)}function Yl(n){return Dn(Gl,n.config.apiKey,n.name)}async function Ql(n,e,t=!1){const r=yn(n),i=_s(r,e),a=await new ql(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Zl=10*60*1e3;class ec{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Is(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ye(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zl&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yr(e))}saveEventToCache(e){this.cachedEventUids.add(Yr(e)),this.lastProcessedEventTime=Date.now()}}function Yr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Is({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tc(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Is(n);default:return!1}}/**
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
 */async function nc(n,e={}){return En(n,"GET","/v1/projects",e)}/**
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
 */const rc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ic=/^https?/;async function sc(n){if(n.config.emulator)return;const{authorizedDomains:e}=await nc(n);for(const t of e)try{if(ac(t))return}catch{}Ze(n,"unauthorized-domain")}function ac(n){const e=cr(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!ic.test(t))return!1;if(rc.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const oc=new wn(3e4,6e4);function Qr(){const n=Qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lc(n){return new Promise((e,t)=>{var r,i,s;function a(){Qr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qr(),t(Ye(n,"network-request-failed"))},timeout:oc.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qe().gapi)===null||s===void 0)&&s.load)a();else{const o=al("iframefcb");return Qe()[o]=()=>{gapi.load?a():t(Ye(n,"network-request-failed"))},as(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw Nn=null,e})}let Nn=null;function cc(n){return Nn=Nn||lc(n),Nn}/**
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
 */const uc=new wn(5e3,15e3),dc="__/auth/iframe",hc="emulator/auth/iframe",fc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gc(n){const e=n.config;O(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vr(e,hc):`https://${n.config.authDomain}/${dc}`,r={apiKey:e.apiKey,appName:n.name,v:In},i=pc.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${bn(r).slice(1)}`}async function mc(n){const e=await cc(n),t=Qe().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:gc(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fc,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Ye(n,"network-request-failed"),o=Qe().setTimeout(()=>{s(a)},uc.get());function l(){Qe().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const vc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_c=500,bc=600,Ic="_blank",wc="http://localhost";class Zr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ec(n,e,t,r=_c,i=bc){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},vc),{width:r.toString(),height:i.toString(),top:s,left:a}),u=de().toLowerCase();t&&(o=Yi(u)?Ic:t),Xi(u)&&(e=e||wc,l.scrollbars="yes");const h=Object.entries(l).reduce((I,[v,w])=>`${I}${v}=${w},`,"");if(nl(u)&&o!=="_self")return yc(e||"",o),new Zr(null);const m=window.open(e||"",o,h);O(m,n,"popup-blocked");try{m.focus()}catch{}return new Zr(m)}function yc(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Tc="__/auth/handler",Sc="emulator/auth/handler",Cc=encodeURIComponent("fac");async function ei(n,e,t,r,i,s){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:In,eventId:i};if(e instanceof Ir){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ya(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries(s||{}))a[h]=m}if(e instanceof Tn){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(a.scopes=h.join(","))}n.tenantId&&(a.tid=n.tenantId);const o=a;for(const h of Object.keys(o))o[h]===void 0&&delete o[h];const l=await n._getAppCheckToken(),u=l?`#${Cc}=${encodeURIComponent(l)}`:"";return`${Ac(n)}?${bn(o).slice(1)}${u}`}function Ac({config:n}){return n.emulator?vr(n,Sc):`https://${n.authDomain}/${Tc}`}/**
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
 */const rr="webStorageSupport";class kc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fs,this._completeRedirectFn=Ql,this._overrideRedirectResult=Jl}async _openPopup(e,t,r,i){var s;ct((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await ei(e,t,r,cr(),i);return Ec(e,a,wr())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await ei(e,t,r,cr(),i);return Dl(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(ct(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await mc(e),r=new ec(e);return t.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rr,{type:rr},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rr];a!==void 0&&t(!!a),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ns()||br()||Gn()}}const Rc=kc;var ti="@firebase/auth",ni="1.1.0";/**
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
 */class Pc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Dc(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Oc(n){un(new en("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;O(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rs(n)},u=new hl(r,i,s,l);return pl(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),un(new en("auth-internal",e=>{const t=yn(e.getProvider("auth").getImmediate());return(r=>new Pc(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(ti,ni,Dc(n)),Xt(ti,ni,"esm2017")}/**
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
 */const Nc=5*60,Mc=Ni("authIdTokenMaxAge")||Nc;let ri=null;const Lc=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Mc)return;const i=t==null?void 0:t.token;ri!==i&&(ri=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Uc(n=To()){const e=Fi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=fl(n,{popupRedirectResolver:Rc,persistence:[Vl,kl,fs]}),r=Ni("authTokenSyncURL");if(r){const s=Lc(r);yl(t,s,()=>s(t.currentUser)),El(t,a=>s(a))}const i=ha("auth");return i&&gl(t,`http://${i}`),t}Oc("Browser");const Fc={apiKey:"AIzaSyAjCRLDHuTkfnKU5TTV6ZZasUXecSvlQOE",authDomain:"virtual-pinball-spreadsh-71a64.firebaseapp.com",projectId:"virtual-pinball-spreadsh-71a64",appId:"1:497322440319:web:8a7f7a2997664a9af7f14a",measurementId:"G-DB48L7QGX0"},Bc=Bi(Fc),ws=Uc(Bc),Jn=Si("user",{}),yr=zn([]),Es=zn(!1);let pn;const Hc=()=>{const n=new Je;return n.addScope("public_repo"),n.setCustomParameters({allow_signup:"false"}),new Promise(e=>{zl(ws,n).then(async t=>{const r=Je.credentialFromResult(t),i=t.user;if(i.displayName=t._tokenResponse.screenName,!(r!=null&&r.accessToken))throw new Error;e(Tr(r.accessToken,i))}).catch(t=>{console.error(t),e(!1)})})},Tr=async(n,e)=>{try{const{Octokit:t}=await Or(()=>import("https://esm.sh/octokit"),[],import.meta.url),{createOrUpdateTextFile:r}=await Or(()=>import("https://esm.sh/@octokit/plugin-create-or-update-text-file"),[],import.meta.url),i=t.plugin(r),s=new i({auth:n}),o=(await s.request("GET /repos/{owner}/{repo}/collaborators/{username}/permission",{owner:mn,username:e.displayName,repo:vn})).data.permission,l=o==="admin"||o==="write"||location.hostname==="localhost"||location.hostname==="127.0.0.1";return Jn.set({user:e,permission:o,token:n,admin:l}),pn=s,(location.hostname==="localhost"||location.hostname==="127.0.0.1")&&(window.octokit=s),l&&await Ts(),!0}catch(t){return console.error(t),await ys(),!1}},ys=()=>new Promise(n=>{Tl(ws).then(()=>{Jn.set({}),n()})}),Vc=async(n,e)=>{const t=`${Ks}${e}_${new Date().getTime()}.webp`,r=await Wc(n);let i;try{i=(await pn.request(`GET /repos/{owner}/{repo}/contents/${t}`,{owner:mn,repo:vn})).data.sha}catch{}try{const s=await pn.rest.repos.createOrUpdateFileContents({owner:"VirtualPinballSpreadsheet",repo:"vps-db",path:t,sha:i,content:r,message:`IMAGE:${e} - updated image`});return`https://virtualpinballspreadsheet.github.io/vps-db/${t}`}catch(s){console.error(s);return}},xc=async n=>{try{const e=await pn.createOrUpdateTextFile({owner:mn,repo:vn,branch:yi,path:`${Js}${n.id}.json`,content:JSON.stringify(n),message:`GAME:${n.id} - Updated ${n.name}`});return yr.update(t=>{var r;return[...t,{author:((r=$n(Sr.userStore).user)==null?void 0:r.displayName)||"???",id:n.id,updatedAt:new Date().toISOString()}]}),!0}catch(e){return console.error(e),!1}},jc=async()=>{try{const n=await pn.createOrUpdateTextFile({owner:mn,repo:vn,path:"lastUpdated.json",content:JSON.stringify(new Date().getTime()),message:"UPDATE DB"});return await Ss(),!0}catch(n){return console.error(n),!1}},Ts=async()=>{try{await cn.fetchDb();const n=$n(cn.lastUpdated),e=new Date(n+1e3).toISOString();let r=await(await fetch(`https://api.github.com/repos/${mn}/${vn}/commits?sha=${yi}&since=${e}`)).json();r=r.filter(i=>{var s,a;return(a=(s=i==null?void 0:i.commit)==null?void 0:s.message)==null?void 0:a.includes("GAME:")}).map(i=>{var s,a,o,l,u,h,m,I,v;return{author:(a=(s=i==null?void 0:i.commit)==null?void 0:s.author)==null?void 0:a.name,id:(m=(h=(u=(l=(o=i==null?void 0:i.commit)==null?void 0:o.message)==null?void 0:l.split(" - "))==null?void 0:u[0])==null?void 0:h.split(":"))==null?void 0:m[1],updatedAt:(v=(I=i==null?void 0:i.commit)==null?void 0:I.author)==null?void 0:v.date}}),yr.set(r)}catch{}},Ss=async()=>{try{const e=await(await fetch("https://api.github.com/repos/VirtualPinballSpreadsheet/vps-db/actions/runs?status=in_progress")).json(),r=await(await fetch("https://api.github.com/repos/VirtualPinballSpreadsheet/vps-db/actions/runs?status=queued")).json();debugger;Es.set(e.total_count>0||r.total_count>0)}catch{}};(async()=>{const n=$n(Jn),{user:e,token:t}=n;t&&e&&Tr(t,e)})();const Sr={login:Tr,logout:ys,triggerLoginPopup:Hc,uploadImage:Vc,uploadGameFile:xc,updateDb:jc,getUnpublishedChanges:Ts,getPipelineState:Ss,userStore:Jn,unpublishedChanges:yr,pipelineState:Es},Wc=n=>new Promise((e,t)=>{const r=new FileReader;r.onload=function(){const s=r.result.split(",")[1];e(s)},r.readAsDataURL(n)}),ii=(n,e)=>{const t=(n[e]||[]).map(r=>r.createdAt).sort((r,i)=>(i||0)-(r||0));return t.length?t[0]:0},$c=n=>{let e=0;zc.forEach(r=>{const i=ii(n,r);i>e&&(e=i)}),n.updatedAt=e;const t=ii(n,"tableFiles");return t&&(n.lastCreatedAt=t),n},zc=["tableFiles"],gn=Si("edits",{edits:[]}),Gc=()=>{gn.update(n=>{const e=n.cache;if(!e)return n;e.data=$c(e.data);const t=n.edits.findIndex(r=>r.id===e.id);return t<=-1?n.edits.push(e):n.edits[t].data=e.data,n})},qc=n=>{gn.update(e=>(e.edits.findIndex(r=>r.id===n.id)<=-1||(e.edits=e.edits.filter(r=>r.id!==n.id)),e))},Kc=async()=>{const{edits:n}=$n(gn),e=[];for(const t of n){const{id:r,data:i,action:s}=t;(s==="UPDATE"||s==="CREATE")&&await Sr.uploadGameFile(i)&&e.push(r)}return gn.update(t=>(t.edits=t.edits.filter(r=>!e.includes(r.id)),t)),{uploaded:e,notUploaded:n.filter(t=>!e.includes(t.id)).map(t=>t.id)}},Jc={editStore:gn,saveEdit:Gc,deleteEdit:qc,submitChanges:Kc};function si(n){let e,t,r,i,s,a;return t=new Ei({props:{icon:Fs}}),{c(){e=p("a"),Ht(t.$$.fragment),r=P("Edit"),this.h()},l(o){e=g(o,"A",{href:!0,class:!0});var l=_(e);Vt(t.$$.fragment,l),r=D(l,"Edit"),l.forEach(f),this.h()},h(){d(e,"href","?edit=true"),d(e,"class","pointer-events-auto chip variant-soft-primary hover:variant-filled-primary gap-2 flex-1")},m(o,l){pe(o,e,l),xt(t,e,null),c(e,r),i=!0,s||(a=Zt(e,"click",n[9]),s=!0)},p:ln,i(o){i||(Xe(t.$$.fragment,o),i=!0)},o(o){lt(t.$$.fragment,o),i=!1},d(o){o&&f(e),jt(t),s=!1,a()}}}function Xc(n){let e,t,r=n[0]&&n[1].admin&&si(n);return{c(){r&&r.c(),e=Mn()},l(i){r&&r.l(i),e=Mn()},m(i,s){r&&r.m(i,s),pe(i,e,s),t=!0},p(i,[s]){i[0]&&i[1].admin?r?(r.p(i,s),s&3&&Xe(r,1)):(r=si(i),r.c(),Xe(r,1),r.m(e.parentNode,e)):r&&(Ls(),lt(r,1,1,()=>{r=null}),Us())},i(i){t||(Xe(r),t=!0)},o(i){lt(r),t=!1},d(i){i&&f(e),r&&r.d(i)}}}function Yc(n,e,t){let r,i,s,a;const{userStore:o}=Sr;wt(n,o,v=>t(1,s=v));const{editStore:l}=Jc;wt(n,l,v=>t(2,a=v));const{dbStore:u}=cn;wt(n,u,v=>t(8,i=v));let{file:h=void 0}=e,{game:m=void 0}=e;const I=()=>{Os(l,a.cache={id:r.id,action:"UPDATE",data:JSON.parse(JSON.stringify(r))},a)};return n.$$set=v=>{"file"in v&&t(6,h=v.file),"game"in v&&t(7,m=v.game)},n.$$.update=()=>{var v;n.$$.dirty&448&&t(0,r=m||((v=h==null?void 0:h.game)!=null&&v.id?i[h.game.id]:void 0))},[r,s,a,o,l,u,h,m,i,I]}class Cr extends St{constructor(e){super(),Ct(this,e,Yc,Xc,Tt,{file:6,game:7})}}function ai(n,e,t){const r=n.slice();return r[2]=e[t],r}function oi(n){let e,t=n[2]+"",r;return{c(){e=p("div"),r=P(t),this.h()},l(i){e=g(i,"DIV",{class:!0});var s=_(e);r=D(s,t),s.forEach(f),this.h()},h(){d(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(i,s){pe(i,e,s),c(e,r)},p(i,s){s&1&&t!==(t=i[2]+"")&&j(r,t)},d(i){i&&f(e)}}}function Qc(n){var T,N;let e,t,r,i,s,a,o,l,u,h,m=((T=n[0].game)==null?void 0:T.name)+"",I,v,w,S,U,M,$=(((N=n[0].authors)==null?void 0:N.join(", "))||"")+"",V,G,q,L,x=Ke(n[0].features||[]),y=[];for(let E=0;E<x.length;E+=1)y[E]=oi(ai(n,x,E));return S=new Cr({props:{file:n[0]}}),{c(){e=p("a"),t=p("img"),s=A(),a=p("hr"),o=A(),l=p("div"),u=p("div"),h=p("p"),I=P(m),v=A();for(let E=0;E<y.length;E+=1)y[E].c();w=A(),Ht(S.$$.fragment),U=A(),M=p("h4"),V=P($),this.h()},l(E){e=g(E,"A",{href:!0,class:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var F=_(e);t=g(F,"IMG",{src:!0,alt:!0,class:!0}),s=k(F),a=g(F,"HR",{}),o=k(F),l=g(F,"DIV",{class:!0});var W=_(l);u=g(W,"DIV",{class:!0});var K=_(u);h=g(K,"P",{class:!0});var J=_(h);I=D(J,m),J.forEach(f),v=k(K);for(let X=0;X<y.length;X+=1)y[X].l(K);w=k(K),Vt(S.$$.fragment,K),K.forEach(f),U=k(W),M=g(W,"H4",{class:!0});var re=_(M);V=D(re,$),re.forEach(f),W.forEach(f),F.forEach(f),this.h()},h(){var E;we(t.src,r=n[0].imgUrl||Un)||d(t,"src",r),d(t,"alt",i=n[0].id),d(t,"class","card aspectTable overflow-hidden hover:brightness-125 hover:scale-110 transition-all svelte-1mrpffe"),d(h,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),d(u,"class","flex gap-2"),d(M,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),d(l,"class","flex flex-col py-4"),d(e,"href",n[1]),d(e,"class","flex flex-col"),d(e,"id",G=n[0].id),d(e,"data-gameid",q=(E=n[0].game)==null?void 0:E.id),d(e,"data-filetype","b2sFiles")},m(E,F){pe(E,e,F),c(e,t),c(e,s),c(e,a),c(e,o),c(e,l),c(l,u),c(u,h),c(h,I),c(u,v);for(let W=0;W<y.length;W+=1)y[W]&&y[W].m(u,null);c(u,w),xt(S,u,null),c(l,U),c(l,M),c(M,V),L=!0},p(E,[F]){var K,J,re;if((!L||F&1&&!we(t.src,r=E[0].imgUrl||Un))&&d(t,"src",r),(!L||F&1&&i!==(i=E[0].id))&&d(t,"alt",i),(!L||F&1)&&m!==(m=((K=E[0].game)==null?void 0:K.name)+"")&&j(I,m),F&1){x=Ke(E[0].features||[]);let X;for(X=0;X<x.length;X+=1){const ge=ai(E,x,X);y[X]?y[X].p(ge,F):(y[X]=oi(ge),y[X].c(),y[X].m(u,w))}for(;X<y.length;X+=1)y[X].d(1);y.length=x.length}const W={};F&1&&(W.file=E[0]),S.$set(W),(!L||F&1)&&$!==($=(((J=E[0].authors)==null?void 0:J.join(", "))||"")+"")&&j(V,$),(!L||F&2)&&d(e,"href",E[1]),(!L||F&1&&G!==(G=E[0].id))&&d(e,"id",G),(!L||F&1&&q!==(q=(re=E[0].game)==null?void 0:re.id))&&d(e,"data-gameid",q)},i(E){L||(Xe(S.$$.fragment,E),L=!0)},o(E){lt(S.$$.fragment,E),L=!1},d(E){E&&f(e),an(y,E),jt(S)}}}function Zc(n,e,t){let{file:r=Xs}=e,{href:i=""}=e;return n.$$set=s=>{"file"in s&&t(0,r=s.file),"href"in s&&t(1,i=s.href)},[r,i]}class eu extends St{constructor(e){super(),Ct(this,e,Zc,Qc,Tt,{file:0,href:1})}}function tu(n){var x;let e,t,r,i,s=(((x=n[0].game)==null?void 0:x.name)||"???")+"",a,o,l,u,h=(n[0].version||"")+"",m,I,v,w,S,U,M,$,V,G,q,L;return U=new Cr({props:{file:n[0]}}),{c(){e=p("a"),t=p("div"),r=p("div"),i=p("span"),a=P(s),o=A(),l=p("div"),u=p("span"),m=P(h),I=A(),v=p("div"),w=A(),S=p("div"),Ht(U.$$.fragment),M=A(),$=p("img"),this.h()},l(y){e=g(y,"A",{href:!0,id:!0,"data-gameid":!0,"data-filetype":!0,class:!0});var T=_(e);t=g(T,"DIV",{class:!0});var N=_(t);r=g(N,"DIV",{class:!0});var E=_(r);i=g(E,"SPAN",{class:!0});var F=_(i);a=D(F,s),F.forEach(f),o=k(E),l=g(E,"DIV",{class:!0});var W=_(l);u=g(W,"SPAN",{class:!0});var K=_(u);m=D(K,h),K.forEach(f),I=k(W),v=g(W,"DIV",{class:!0}),_(v).forEach(f),w=k(W),S=g(W,"DIV",{class:!0});var J=_(S);Vt(U.$$.fragment,J),J.forEach(f),W.forEach(f),E.forEach(f),M=k(N),$=g(N,"IMG",{src:!0,class:!0,alt:!0}),N.forEach(f),T.forEach(f),this.h()},h(){var y;d(i,"class","font-bold"),d(u,"class","opacity-60 whitespace-nowrap text-ellipsis overflow-hidden"),d(v,"class","flex-1"),d(S,"class","shrink-0"),d(l,"class","flex justify-between max-w-full"),d(r,"class","p-4 flex flex-col justify-between absolute top-0 left-0 right-0 bottom-0 z-10"),we($.src,V=n[3])||d($,"src",V),d($,"class","absolute top-0 left-0 right-0 bottom-0 opacity-10"),d($,"alt",""),d(t,"class","card !bg-surface-100 dark:!bg-surface-600 aspect relative overflow-hidden hover:brightness-125 hover:scale-110 transition-all text-xs md:text-base svelte-22xih4"),d(e,"href",n[1]),d(e,"id",G=n[0].id),d(e,"data-gameid",q=(y=n[0].game)==null?void 0:y.id),d(e,"data-filetype",n[2]),d(e,"class","aspect svelte-22xih4")},m(y,T){pe(y,e,T),c(e,t),c(t,r),c(r,i),c(i,a),c(r,o),c(r,l),c(l,u),c(u,m),c(l,I),c(l,v),c(l,w),c(l,S),xt(U,S,null),c(t,M),c(t,$),L=!0},p(y,[T]){var E,F;(!L||T&1)&&s!==(s=(((E=y[0].game)==null?void 0:E.name)||"???")+"")&&j(a,s),(!L||T&1)&&h!==(h=(y[0].version||"")+"")&&j(m,h);const N={};T&1&&(N.file=y[0]),U.$set(N),(!L||T&8&&!we($.src,V=y[3]))&&d($,"src",V),(!L||T&2)&&d(e,"href",y[1]),(!L||T&1&&G!==(G=y[0].id))&&d(e,"id",G),(!L||T&1&&q!==(q=(F=y[0].game)==null?void 0:F.id))&&d(e,"data-gameid",q),(!L||T&4)&&d(e,"data-filetype",y[2])},i(y){L||(Xe(U.$$.fragment,y),L=!0)},o(y){lt(U.$$.fragment,y),L=!1},d(y){y&&f(e),jt(U)}}}function nu(n,e,t){let r;const{getGameImage:i}=cn;let{file:s=Ys}=e,{href:a=""}=e,{fileType:o}=e;return n.$$set=l=>{"file"in l&&t(0,s=l.file),"href"in l&&t(1,a=l.href),"fileType"in l&&t(2,o=l.fileType)},n.$$.update=()=>{var l;n.$$.dirty&1&&t(3,r=(l=s.game)!=null&&l.id?i(s.game.id):"")},[s,a,o,r]}class Ge extends St{constructor(e){super(),Ct(this,e,nu,tu,Tt,{file:0,href:1,fileType:2})}}const ru=n=>{if(!n)return Un;if(n.imgUrl)return n.imgUrl;const e=n.b2sFiles||[];if(e.length){const r=[...e].sort((i,s)=>s.updatedAt-i.updatedAt).find(i=>i.imgUrl);if(r)return r.imgUrl}const t=n.tableFiles||[];if(t.length){const r=[...t].sort((i,s)=>s.updatedAt-i.updatedAt).find(i=>i.imgUrl);if(r)return r.imgUrl}return Un};/*! Fast Average Color | © 2022 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */function iu(n){var e=n.toString(16);return e.length===1?"0"+e:e}function li(n){return"#"+n.map(iu).join("")}function su(n){var e=(n[0]*299+n[1]*587+n[2]*114)/1e3;return e<128}function au(n){return n?ou(n)?n:[n]:[]}function ou(n){return Array.isArray(n[0])}function Ar(n,e,t){for(var r=0;r<t.length;r++)if(lu(n,e,t[r]))return!0;return!1}function lu(n,e,t){switch(t.length){case 3:if(cu(n,e,t))return!0;break;case 4:if(uu(n,e,t))return!0;break;case 5:if(du(n,e,t))return!0;break;default:return!1}}function cu(n,e,t){return n[e+3]!==255||n[e]===t[0]&&n[e+1]===t[1]&&n[e+2]===t[2]}function uu(n,e,t){return n[e+3]&&t[3]?n[e]===t[0]&&n[e+1]===t[1]&&n[e+2]===t[2]&&n[e+3]===t[3]:n[e+3]===t[3]}function kn(n,e,t){return n>=e-t&&n<=e+t}function du(n,e,t){var r=t[0],i=t[1],s=t[2],a=t[3],o=t[4],l=n[e+3],u=kn(l,a,o);return a?!!(!l&&u||kn(n[e],r,o)&&kn(n[e+1],i,o)&&kn(n[e+2],s,o)&&u):u}function hu(n,e,t){for(var r={},i=24,s=t.ignoredColor,a=t.step,o=[0,0,0,0,0],l=0;l<e;l+=a){var u=n[l],h=n[l+1],m=n[l+2],I=n[l+3];if(!(s&&Ar(n,l,s))){var v=Math.round(u/i)+","+Math.round(h/i)+","+Math.round(m/i);r[v]?r[v]=[r[v][0]+u*I,r[v][1]+h*I,r[v][2]+m*I,r[v][3]+I,r[v][4]+1]:r[v]=[u*I,h*I,m*I,I,1],o[4]<r[v][4]&&(o=r[v])}}var w=o[0],S=o[1],U=o[2],M=o[3],$=o[4];return M?[Math.round(w/M),Math.round(S/M),Math.round(U/M),Math.round(M/$)]:t.defaultColor}function fu(n,e,t){for(var r=0,i=0,s=0,a=0,o=0,l=t.ignoredColor,u=t.step,h=0;h<e;h+=u){var m=n[h+3],I=n[h]*m,v=n[h+1]*m,w=n[h+2]*m;l&&Ar(n,h,l)||(r+=I,i+=v,s+=w,a+=m,o++)}return a?[Math.round(r/a),Math.round(i/a),Math.round(s/a),Math.round(a/o)]:t.defaultColor}function pu(n,e,t){for(var r=0,i=0,s=0,a=0,o=0,l=t.ignoredColor,u=t.step,h=0;h<e;h+=u){var m=n[h],I=n[h+1],v=n[h+2],w=n[h+3];l&&Ar(n,h,l)||(r+=m*m*w,i+=I*I*w,s+=v*v*w,a+=w,o++)}return a?[Math.round(Math.sqrt(r/a)),Math.round(Math.sqrt(i/a)),Math.round(Math.sqrt(s/a)),Math.round(a/o)]:t.defaultColor}function ci(n){return sn(n,"defaultColor",[0,0,0,0])}function sn(n,e,t){return n[e]===void 0?t:n[e]}var ui=10,dr=100;function gu(n){return n.search(/\.svg(\?|$)/i)!==-1}function mu(n){if(Cs(n)){var e=n.naturalWidth,t=n.naturalHeight;return!n.naturalWidth&&gu(n.src)&&(e=t=dr),{width:e,height:t}}return _u(n)?{width:n.videoWidth,height:n.videoHeight}:{width:n.width,height:n.height}}function di(n){return bu(n)?"canvas":vu(n)?"offscreencanvas":Iu(n)?"imagebitmap":n.src}function Cs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement}var As=typeof OffscreenCanvas<"u";function vu(n){return As&&n instanceof OffscreenCanvas}function _u(n){return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement}function bu(n){return typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement}function Iu(n){return typeof ImageBitmap<"u"&&n instanceof ImageBitmap}function wu(n,e){var t=sn(e,"left",0),r=sn(e,"top",0),i=sn(e,"width",n.width),s=sn(e,"height",n.height),a=i,o=s;if(e.mode==="precision")return{srcLeft:t,srcTop:r,srcWidth:i,srcHeight:s,destWidth:a,destHeight:o};var l;return i>s?(l=i/s,a=dr,o=Math.round(a/l)):(l=s/i,o=dr,a=Math.round(o/l)),(a>i||o>s||a<ui||o<ui)&&(a=i,o=s),{srcLeft:t,srcTop:r,srcWidth:i,srcHeight:s,destWidth:a,destHeight:o}}var Eu=typeof window>"u";function yu(){return Eu?As?new OffscreenCanvas(1,1):null:document.createElement("canvas")}var Tu="FastAverageColor: ";function qe(n){return Error(Tu+n)}function rn(n,e){e||console.error(n)}var ks=function(){function n(){this.canvas=null,this.ctx=null}return n.prototype.getColorAsync=function(e,t){if(!e)return Promise.reject(qe("call .getColorAsync() without resource."));if(typeof e=="string"){if(typeof Image>"u")return Promise.reject(qe("resource as string is not supported in this environment"));var r=new Image;return r.crossOrigin=t&&t.crossOrigin||"",r.src=e,this.bindImageEvents(r,t)}else{if(Cs(e)&&!e.complete)return this.bindImageEvents(e,t);var i=this.getColor(e,t);return i.error?Promise.reject(i.error):Promise.resolve(i)}},n.prototype.getColor=function(e,t){t=t||{};var r=ci(t);if(!e){var i=qe("call .getColor(null) without resource");return rn(i,t.silent),this.prepareResult(r,i)}var s=mu(e),a=wu(s,t);if(!a.srcWidth||!a.srcHeight||!a.destWidth||!a.destHeight){var i=qe('incorrect sizes for resource "'.concat(di(e),'"'));return rn(i,t.silent),this.prepareResult(r,i)}if(!this.canvas&&(this.canvas=yu(),!this.canvas)){var i=qe("OffscreenCanvas is not supported in this browser");return rn(i,t.silent),this.prepareResult(r,i)}if(!this.ctx){if(this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx){var i=qe("Canvas Context 2D is not supported in this browser");return rn(i,t.silent),this.prepareResult(r)}this.ctx.imageSmoothingEnabled=!1}this.canvas.width=a.destWidth,this.canvas.height=a.destHeight;try{this.ctx.clearRect(0,0,a.destWidth,a.destHeight),this.ctx.drawImage(e,a.srcLeft,a.srcTop,a.srcWidth,a.srcHeight,0,0,a.destWidth,a.destHeight);var o=this.ctx.getImageData(0,0,a.destWidth,a.destHeight).data;return this.prepareResult(this.getColorFromArray4(o,t))}catch(l){var i=qe("security error (CORS) for resource ".concat(di(e),`.
Details: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image`));return rn(i,t.silent),!t.silent&&console.error(l),this.prepareResult(r,i)}},n.prototype.getColorFromArray4=function(e,t){t=t||{};var r=4,i=e.length,s=ci(t);if(i<r)return s;var a=i-i%r,o=(t.step||1)*r,l;switch(t.algorithm||"sqrt"){case"simple":l=fu;break;case"sqrt":l=pu;break;case"dominant":l=hu;break;default:throw qe("".concat(t.algorithm," is unknown algorithm"))}return l(e,a,{defaultColor:s,ignoredColor:au(t.ignoredColor),step:o})},n.prototype.prepareResult=function(e,t){var r=e.slice(0,3),i=[e[0],e[1],e[2],e[3]/255],s=su(e);return{value:[e[0],e[1],e[2],e[3]],rgb:"rgb("+r.join(",")+")",rgba:"rgba("+i.join(",")+")",hex:li(r),hexa:li(e),isDark:s,isLight:!s,error:t}},n.prototype.destroy=function(){this.canvas&&(this.canvas.width=1,this.canvas.height=1,this.canvas=null),this.ctx=null},n.prototype.bindImageEvents=function(e,t){var r=this;return new Promise(function(i,s){var a=function(){u();var h=r.getColor(e,t);h.error?s(h.error):i(h)},o=function(){u(),s(qe('Error loading image "'.concat(e.src,'".')))},l=function(){u(),s(qe('Image "'.concat(e.src,'" loading aborted')))},u=function(){e.removeEventListener("load",a),e.removeEventListener("error",o),e.removeEventListener("abort",l)};e.addEventListener("load",a),e.addEventListener("error",o),e.addEventListener("abort",l)})},n}();const Rs=zn({width:0,height:0,mobile:!1});function hi(n,e,t){const r=n.slice();return r[11]=e[t],r}function fi(n,e,t){const r=n.slice();return r[14]=e[t],r}function pi(n,e,t){const r=n.slice();return r[11]=e[t],r}function gi(n){let e,t=n[11]+"",r,i;return{c(){e=p("div"),r=P(t),i=A(),this.h()},l(s){e=g(s,"DIV",{class:!0});var a=_(e);r=D(a,t),i=k(a),a.forEach(f),this.h()},h(){d(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(s,a){pe(s,e,a),c(e,r),c(e,i)},p(s,a){a&32&&t!==(t=s[11]+"")&&j(r,t)},d(s){s&&f(e)}}}function mi(n){let e,t=n[14].toUpperCase()+"",r;return{c(){e=p("div"),r=P(t),this.h()},l(i){e=g(i,"DIV",{class:!0});var s=_(e);r=D(s,t),s.forEach(f),this.h()},h(){d(e,"class","badge variant-filled-surface")},m(i,s){pe(i,e,s),c(e,r)},p(i,s){s&1&&t!==(t=i[14].toUpperCase()+"")&&j(r,t)},d(i){i&&f(e)}}}function vi(n){let e,t=n[11]+"",r,i;return{c(){e=p("div"),r=P(t),i=A(),this.h()},l(s){e=g(s,"DIV",{class:!0});var a=_(e);r=D(a,t),i=k(a),a.forEach(f),this.h()},h(){d(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(s,a){pe(s,e,a),c(e,r),c(e,i)},p(s,a){a&32&&t!==(t=s[11]+"")&&j(r,t)},d(s){s&&f(e)}}}function Su(n){var Ot,z;let e,t,r,i,s,a,o,l,u,h=n[0].name+"",m,I,v,w,S,U=n[0].manufacturer+"",M,$,V,G,q=n[0].year+"",L,x,y,T,N=(((Ot=n[0].designers)==null?void 0:Ot.join(", "))||"-")+"",E,F,W,K,J,re,X,ge="Updated at",kt,ae,me=It(n[0].updatedAt)+"",ye,Gt,et,Fe,ve,Te,qt="Type",tt,Be,_e=(n[0].type||"-")+"",Se,Kt,ie,De,He,ut,oe,Z,Oe,Ve=n[0].name+"",dt,le,Ce,he,Ne=n[0].manufacturer+"",nt,Rt,Ae=n[0].year+"",xe,ht,Pt,fe,Me=((z=n[0].designers)==null?void 0:z.join(", "))+"",rt,ft,it,Dt,je=Ke(n[5]),ne=[];for(let b=0;b<je.length;b+=1)ne[b]=gi(pi(n,je,b));let Ee=Ke(n[0].theme||[]),ee=[];for(let b=0;b<Ee.length;b+=1)ee[b]=mi(fi(n,Ee,b));let Le=Ke(n[5]),te=[];for(let b=0;b<Le.length;b+=1)te[b]=vi(hi(n,Le,b));return{c(){e=p("a"),t=p("div"),r=p("img"),a=A(),o=p("div"),l=p("div"),u=p("p"),m=P(h),I=A();for(let b=0;b<ne.length;b+=1)ne[b].c();v=A(),w=p("div"),S=p("p"),M=P(U),$=A(),V=p("p"),G=P("("),L=P(q),x=P(")"),y=A(),T=p("p"),E=P(N),F=A(),W=p("div");for(let b=0;b<ee.length;b+=1)ee[b].c();K=A(),J=p("div"),re=p("div"),X=p("p"),X.textContent=ge,kt=A(),ae=p("p"),ye=P(me),Gt=A(),et=p("div"),Fe=A(),ve=p("div"),Te=p("p"),Te.textContent=qt,tt=A(),Be=p("p"),Se=P(_e),Kt=A(),ie=p("img"),ut=A(),oe=p("div"),Z=p("div"),Oe=p("p"),dt=P(Ve),le=A();for(let b=0;b<te.length;b+=1)te[b].c();Ce=A(),he=p("p"),nt=P(Ne),Rt=P(" ("),xe=P(Ae),ht=P(")"),Pt=A(),fe=p("p"),rt=P(Me),this.h()},l(b){e=g(b,"A",{class:!0,href:!0,id:!0});var B=_(e);t=g(B,"DIV",{class:!0,style:!0});var Q=_(t);r=g(Q,"IMG",{src:!0,alt:!0,style:!0,class:!0}),a=k(Q),o=g(Q,"DIV",{class:!0,style:!0});var ce=_(o);l=g(ce,"DIV",{class:!0});var R=_(l);u=g(R,"P",{class:!0});var be=_(u);m=D(be,h),be.forEach(f),I=k(R);for(let Ie=0;Ie<ne.length;Ie+=1)ne[Ie].l(R);R.forEach(f),v=k(ce),w=g(ce,"DIV",{class:!0});var C=_(w);S=g(C,"P",{class:!0});var H=_(S);M=D(H,U),H.forEach(f),$=k(C),V=g(C,"P",{});var ke=_(V);G=D(ke,"("),L=D(ke,q),x=D(ke,")"),ke.forEach(f),C.forEach(f),y=k(ce),T=g(ce,"P",{class:!0});var ue=_(T);E=D(ue,N),ue.forEach(f),F=k(ce),W=g(ce,"DIV",{class:!0});var Re=_(W);for(let Ie=0;Ie<ee.length;Ie+=1)ee[Ie].l(Re);Re.forEach(f),K=k(ce),J=g(ce,"DIV",{class:!0});var Pe=_(J);re=g(Pe,"DIV",{class:!0});var We=_(re);X=g(We,"P",{class:!0,"data-svelte-h":!0}),Ln(X)!=="svelte-g6tq99"&&(X.textContent=ge),kt=k(We),ae=g(We,"P",{class:!0});var $e=_(ae);ye=D($e,me),$e.forEach(f),We.forEach(f),Gt=k(Pe),et=g(Pe,"DIV",{class:!0}),_(et).forEach(f),Fe=k(Pe),ve=g(Pe,"DIV",{class:!0});var ze=_(ve);Te=g(ze,"P",{class:!0,"data-svelte-h":!0}),Ln(Te)!=="svelte-1h1g7sd"&&(Te.textContent=qt),tt=k(ze),Be=g(ze,"P",{class:!0});var Nt=_(Be);Se=D(Nt,_e),Nt.forEach(f),ze.forEach(f),Pe.forEach(f),ce.forEach(f),Q.forEach(f),Kt=k(B),ie=g(B,"IMG",{src:!0,alt:!0,class:!0}),ut=k(B),oe=g(B,"DIV",{class:!0});var st=_(oe);Z=g(st,"DIV",{class:!0});var Ue=_(Z);Oe=g(Ue,"P",{class:!0});var Mt=_(Oe);dt=D(Mt,Ve),Mt.forEach(f),le=k(Ue);for(let Ie=0;Ie<te.length;Ie+=1)te[Ie].l(Ue);Ue.forEach(f),Ce=k(st),he=g(st,"P",{});var pt=_(he);nt=D(pt,Ne),Rt=D(pt," ("),xe=D(pt,Ae),ht=D(pt,")"),pt.forEach(f),Pt=k(st),fe=g(st,"P",{class:!0});var Lt=_(fe);rt=D(Lt,Me),Lt.forEach(f),st.forEach(f),B.forEach(f),this.h()},h(){we(r.src,i=n[2])||d(r,"src",i),d(r,"alt",s=n[0].id),bt(r,"height","36%"),d(r,"class","absolute top-0 left-0 right-0 w-full bgImage z-0 object-cover opacity-10"),d(u,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),d(l,"class","flex gap-2 max-w-full"),d(S,"class","text-ellipsis whitespace-nowrap overflow-hidden"),d(w,"class","flex gap-1 text-center max-w-full"),d(T,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),d(W,"class","flex gap-2 mt-4 flex-wrap"),d(X,"class","text-xs font-bold uppercase opacity-40"),d(ae,"class",""),d(re,"class","flex flex-col items-center justify-center flex-1 gap-1"),d(et,"class","bg-surface-900-50-token h-full w-px opacity-20"),d(Te,"class","text-xs font-bold uppercase opacity-40"),d(Be,"class",""),d(ve,"class","flex flex-col items-center justify-center flex-1 gap-1"),d(J,"class","flex mt-auto w-full"),d(o,"class","flex flex-col max-w-full w-full absolute items-center p-2 bottom-0"),bt(o,"top","calc(90% - 13rem)"),d(t,"class","hoverCard card !bg-surface-100 dark:!bg-surface-600 shadow-2xl shadow-black absolute top-0 -left-4 -right-4 bottom-0 -z-1 flex flex-col p-4 gap-0.5 items-center svelte-1jt2e09"),bt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(n[6]?100:900)+")) "+(n[6]?80:60)+"%, "+(n[3]||`rgb(var(--color-surface-${n[6]?100:600})`)+")",1),se(t,"hovered",n[4]),we(ie.src,De=n[2])||d(ie,"src",De),d(ie,"alt",He=n[0].name),d(ie,"class","card pinImage bg-surface-300-600-token shadow-black svelte-1jt2e09"),se(ie,"hovered",n[4]),se(ie,"shadow-lg",n[4]),d(Oe,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),d(Z,"class","flex gap-2"),d(fe,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),d(oe,"class","info flex flex-col py-4 svelte-1jt2e09"),se(oe,"opacity-0",n[4]),d(e,"class","wrapper relative z-0"),d(e,"href",n[1]),d(e,"id",ft=n[0].id)},m(b,B){pe(b,e,B),c(e,t),c(t,r),c(t,a),c(t,o),c(o,l),c(l,u),c(u,m),c(l,I);for(let Q=0;Q<ne.length;Q+=1)ne[Q]&&ne[Q].m(l,null);c(o,v),c(o,w),c(w,S),c(S,M),c(w,$),c(w,V),c(V,G),c(V,L),c(V,x),c(o,y),c(o,T),c(T,E),c(o,F),c(o,W);for(let Q=0;Q<ee.length;Q+=1)ee[Q]&&ee[Q].m(W,null);c(o,K),c(o,J),c(J,re),c(re,X),c(re,kt),c(re,ae),c(ae,ye),c(J,Gt),c(J,et),c(J,Fe),c(J,ve),c(ve,Te),c(ve,tt),c(ve,Be),c(Be,Se),c(e,Kt),c(e,ie),c(e,ut),c(e,oe),c(oe,Z),c(Z,Oe),c(Oe,dt),c(Z,le);for(let Q=0;Q<te.length;Q+=1)te[Q]&&te[Q].m(Z,null);c(oe,Ce),c(oe,he),c(he,nt),c(he,Rt),c(he,xe),c(he,ht),c(oe,Pt),c(oe,fe),c(fe,rt),it||(Dt=[Zt(e,"mouseenter",n[7]),Zt(e,"mouseleave",n[8])],it=!0)},p(b,[B]){var Q,ce;if(B&4&&!we(r.src,i=b[2])&&d(r,"src",i),B&1&&s!==(s=b[0].id)&&d(r,"alt",s),B&1&&h!==(h=b[0].name+"")&&j(m,h),B&32){je=Ke(b[5]);let R;for(R=0;R<je.length;R+=1){const be=pi(b,je,R);ne[R]?ne[R].p(be,B):(ne[R]=gi(be),ne[R].c(),ne[R].m(l,null))}for(;R<ne.length;R+=1)ne[R].d(1);ne.length=je.length}if(B&1&&U!==(U=b[0].manufacturer+"")&&j(M,U),B&1&&q!==(q=b[0].year+"")&&j(L,q),B&1&&N!==(N=(((Q=b[0].designers)==null?void 0:Q.join(", "))||"-")+"")&&j(E,N),B&1){Ee=Ke(b[0].theme||[]);let R;for(R=0;R<Ee.length;R+=1){const be=fi(b,Ee,R);ee[R]?ee[R].p(be,B):(ee[R]=mi(be),ee[R].c(),ee[R].m(W,null))}for(;R<ee.length;R+=1)ee[R].d(1);ee.length=Ee.length}if(B&1&&me!==(me=It(b[0].updatedAt)+"")&&j(ye,me),B&1&&_e!==(_e=(b[0].type||"-")+"")&&j(Se,_e),B&72&&bt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(b[6]?100:900)+")) "+(b[6]?80:60)+"%, "+(b[3]||`rgb(var(--color-surface-${b[6]?100:600})`)+")",1),B&16&&se(t,"hovered",b[4]),B&4&&!we(ie.src,De=b[2])&&d(ie,"src",De),B&1&&He!==(He=b[0].name)&&d(ie,"alt",He),B&16&&se(ie,"hovered",b[4]),B&16&&se(ie,"shadow-lg",b[4]),B&1&&Ve!==(Ve=b[0].name+"")&&j(dt,Ve),B&32){Le=Ke(b[5]);let R;for(R=0;R<Le.length;R+=1){const be=hi(b,Le,R);te[R]?te[R].p(be,B):(te[R]=vi(be),te[R].c(),te[R].m(Z,null))}for(;R<te.length;R+=1)te[R].d(1);te.length=Le.length}B&1&&Ne!==(Ne=b[0].manufacturer+"")&&j(nt,Ne),B&1&&Ae!==(Ae=b[0].year+"")&&j(xe,Ae),B&1&&Me!==(Me=((ce=b[0].designers)==null?void 0:ce.join(", "))+"")&&j(rt,Me),B&16&&se(oe,"opacity-0",b[4]),B&2&&d(e,"href",b[1]),B&1&&ft!==(ft=b[0].id)&&d(e,"id",ft)},i:ln,o:ln,d(b){b&&f(e),an(ne,b),an(ee,b),an(te,b),it=!1,hr(Dt)}}}function Cu(n,e,t){let r,i,s,a;wt(n,Rs,w=>t(9,s=w)),wt(n,Ci,w=>t(6,a=w));const o=new ks;let{file:l=Ti}=e,{href:u=""}=e,h="",m=!1;const I=()=>{s.mobile||t(4,m=!0)},v=()=>{s.mobile||t(4,m=!1)};return n.$$set=w=>{"file"in w&&t(0,l=w.file),"href"in w&&t(1,u=w.href)},n.$$.update=()=>{n.$$.dirty&1&&t(2,r=ru(l)),n.$$.dirty&1&&t(5,i=Array.from(new Set((l.tableFiles||[]).map(w=>w.tableFormat).filter(w=>!!w)))),n.$$.dirty&4&&r&&o.getColorAsync(r).then(w=>{w&&t(3,h=w.rgb)})},[l,u,r,h,m,i,a,I,v]}class Au extends St{constructor(e){super(),Ct(this,e,Cu,Su,Tt,{file:0,href:1})}}const Rn=""+new URL("../assets/tablePlaceholder.f13766a0.jpg",import.meta.url).href,_i={FastFlips:"bg-red-500",SSF:"bg-cyan-500","P-ROC":"bg-bg-yellow-500",FlexDMD:"bg-orange-500",PuP:"bg-sky-500",VR:"bg-cyan-500",Hybrid:"bg-violet-500",Music:"bg-rose-500",FSS:"bg-green-500","4k":"bg-teal-500",MOD:"bg-purple-500",VPX:"bg-emerald-500",VP9:"bg-emerald-500",PM5:"bg-green-500",FX3:"bg-lime-500",FX2:"bg-lime-500",FX:"bg-lime-500",FP:"bg-yellow-500",B2S:"bg-pink-500",ROM:"bg-fuchsia-500",POV:"bg-green-500",Color:"bg-red-500",Sound:"bg-rose-500",Wheel:"bg-purple-500",Rules:"bg-orange-500",MediaPack:"bg-yellow-500",Topper:"bg-red-500","PinX Sound":"bg-sore-500","incl. B2S":"bg-pink-500","incl. ROM":"bg-fuchsia-500","incl. Art":"bg-purple-500","incl. PuP":"bg-sky-500","incl. Video":"bg-sky-500","no ROM":"bg-fuchsia-500",Adult:"bg-slate-500",Kids:"bg-indigo-500",LUT:"bg-gray-500",nFozzy:"bg-blue-500",Scorbit:"bg-indigo-500",Fleep:"bg-yellow-500"};function bi(n,e,t){const r=n.slice();return r[1]=e[t],r}function Ii(n){let e,t=Ke(n[0]||[]),r=[];for(let i=0;i<t.length;i+=1)r[i]=wi(bi(n,t,i));return{c(){e=p("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=g(i,"DIV",{class:!0});var s=_(e);for(let a=0;a<r.length;a+=1)r[a].l(s);s.forEach(f),this.h()},h(){d(e,"class","flex gap-1 flex-wrap")},m(i,s){pe(i,e,s);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null)},p(i,s){if(s&1){t=Ke(i[0]||[]);let a;for(a=0;a<t.length;a+=1){const o=bi(i,t,a);r[a]?r[a].p(o,s):(r[a]=wi(o),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=t.length}},d(i){i&&f(e),an(r,i)}}}function wi(n){let e,t,r,i=n[1].toUpperCase()+"",s,a;return{c(){e=p("div"),t=p("span"),s=P(i),a=A(),this.h()},l(o){e=g(o,"DIV",{class:!0});var l=_(e);t=g(l,"SPAN",{class:!0}),_(t).forEach(f),s=D(l,i),a=k(l),l.forEach(f),this.h()},h(){d(t,"class",r="rounded-full h-2 w-2 "+(_i[n[1]]||"bg-slate-500")+" mr-2"),d(e,"class","badge variant-ringed-surface px-1.5 py-0.5")},m(o,l){pe(o,e,l),c(e,t),c(e,s),c(e,a)},p(o,l){l&1&&r!==(r="rounded-full h-2 w-2 "+(_i[o[1]]||"bg-slate-500")+" mr-2")&&d(t,"class",r),l&1&&i!==(i=o[1].toUpperCase()+"")&&j(s,i)},d(o){o&&f(e)}}}function ku(n){var r;let e,t=((r=n[0])==null?void 0:r.length)&&Ii(n);return{c(){t&&t.c(),e=Mn()},l(i){t&&t.l(i),e=Mn()},m(i,s){t&&t.m(i,s),pe(i,e,s)},p(i,[s]){var a;(a=i[0])!=null&&a.length?t?t.p(i,s):(t=Ii(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:ln,o:ln,d(i){i&&f(e),t&&t.d(i)}}}function Ru(n,e,t){let{data:r=[]}=e;return n.$$set=i=>{"data"in i&&t(0,r=i.data)},[r]}class Pu extends St{constructor(e){super(),Ct(this,e,Ru,ku,Tt,{data:0})}}function Du(n){var Q,ce,R,be;let e,t,r,i,s,a,o,l,u,h=((Q=n[0].game)==null?void 0:Q.name)+"",m,I,v,w=n[0].tableFormat+"",S,U,M,$,V,G,q=n[4].manufacturer+"",L,x,y,T,N=n[4].year+"",E,F,W,K,J=((ce=n[0].authors)==null?void 0:ce.join(", "))+"",re,X,ge,kt,ae,me,ye,Gt="Updated at",et,Fe,ve=It(n[0].updatedAt)+"",Te,qt,tt,Be,_e,Se,Kt="Added at",ie,De,He=It(n[0].createdAt||n[0].updatedAt)+"",ut,oe,Z,Oe,Ve,dt,le,Ce,he,Ne=((R=n[0].game)==null?void 0:R.name)+"",nt,Rt,Ae,xe=n[0].tableFormat+"",ht,Pt,fe,Me=n[4].manufacturer+"",rt,ft,it=n[4].year+"",Dt,je,ne,Ee,ee=((be=n[0].authors)==null?void 0:be.join(", "))+"",Le,te,Ot,z,b,B;return M=new Cr({props:{game:n[4]}}),ge=new Pu({props:{data:n[0].features}}),{c(){e=p("a"),t=p("div"),r=p("img"),a=A(),o=p("div"),l=p("div"),u=p("p"),m=P(h),I=A(),v=p("div"),S=P(w),U=A(),Ht(M.$$.fragment),$=A(),V=p("div"),G=p("p"),L=P(q),x=A(),y=p("p"),T=P("("),E=P(N),F=P(")"),W=A(),K=p("p"),re=P(J),X=A(),Ht(ge.$$.fragment),kt=A(),ae=p("div"),me=p("div"),ye=p("p"),ye.textContent=Gt,et=A(),Fe=p("p"),Te=P(ve),qt=A(),tt=p("div"),Be=A(),_e=p("div"),Se=p("p"),Se.textContent=Kt,ie=A(),De=p("p"),ut=P(He),oe=A(),Z=p("img"),dt=A(),le=p("div"),Ce=p("div"),he=p("p"),nt=P(Ne),Rt=A(),Ae=p("div"),ht=P(xe),Pt=A(),fe=p("p"),rt=P(Me),ft=P(" ("),Dt=P(it),je=P(")"),ne=A(),Ee=p("p"),Le=P(ee),this.h()},l(C){e=g(C,"A",{class:!0,href:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var H=_(e);t=g(H,"DIV",{style:!0,class:!0});var ke=_(t);r=g(ke,"IMG",{src:!0,alt:!0,style:!0,class:!0}),a=k(ke),o=g(ke,"DIV",{class:!0,style:!0});var ue=_(o);l=g(ue,"DIV",{class:!0});var Re=_(l);u=g(Re,"P",{class:!0});var Pe=_(u);m=D(Pe,h),Pe.forEach(f),I=k(Re),v=g(Re,"DIV",{class:!0});var We=_(v);S=D(We,w),We.forEach(f),U=k(Re),Vt(M.$$.fragment,Re),Re.forEach(f),$=k(ue),V=g(ue,"DIV",{class:!0});var $e=_(V);G=g($e,"P",{class:!0});var ze=_(G);L=D(ze,q),ze.forEach(f),x=k($e),y=g($e,"P",{});var Nt=_(y);T=D(Nt,"("),E=D(Nt,N),F=D(Nt,")"),Nt.forEach(f),$e.forEach(f),W=k(ue),K=g(ue,"P",{class:!0});var st=_(K);re=D(st,J),st.forEach(f),X=k(ue),Vt(ge.$$.fragment,ue),kt=k(ue),ae=g(ue,"DIV",{class:!0});var Ue=_(ae);me=g(Ue,"DIV",{class:!0});var Mt=_(me);ye=g(Mt,"P",{class:!0,"data-svelte-h":!0}),Ln(ye)!=="svelte-g6tq99"&&(ye.textContent=Gt),et=k(Mt),Fe=g(Mt,"P",{class:!0});var pt=_(Fe);Te=D(pt,ve),pt.forEach(f),Mt.forEach(f),qt=k(Ue),tt=g(Ue,"DIV",{class:!0}),_(tt).forEach(f),Be=k(Ue),_e=g(Ue,"DIV",{class:!0});var Lt=_(_e);Se=g(Lt,"P",{class:!0,"data-svelte-h":!0}),Ln(Se)!=="svelte-1gbi7dm"&&(Se.textContent=Kt),ie=k(Lt),De=g(Lt,"P",{class:!0});var Ie=_(De);ut=D(Ie,He),Ie.forEach(f),Lt.forEach(f),Ue.forEach(f),ue.forEach(f),ke.forEach(f),oe=k(H),Z=g(H,"IMG",{src:!0,alt:!0,class:!0}),dt=k(H),le=g(H,"DIV",{class:!0});var Jt=_(le);Ce=g(Jt,"DIV",{class:!0});var Cn=_(Ce);he=g(Cn,"P",{class:!0});var kr=_(he);nt=D(kr,Ne),kr.forEach(f),Rt=k(Cn),Ae=g(Cn,"DIV",{class:!0});var Rr=_(Ae);ht=D(Rr,xe),Rr.forEach(f),Cn.forEach(f),Pt=k(Jt),fe=g(Jt,"P",{});var nn=_(fe);rt=D(nn,Me),ft=D(nn," ("),Dt=D(nn,it),je=D(nn,")"),nn.forEach(f),ne=k(Jt),Ee=g(Jt,"P",{class:!0});var Pr=_(Ee);Le=D(Pr,ee),Pr.forEach(f),Jt.forEach(f),H.forEach(f),this.h()},h(){var C;we(r.src,i=n[0].imgUrl||Rn)||d(r,"src",i),d(r,"alt",s=n[0].id),bt(r,"height","35%"),d(r,"class","absolute top-0 left-0 right-0 w-full bgImage z-0 object-cover opacity-60 svelte-gfpzxg"),d(u,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),d(v,"class","badge badge-glass my-auto py-0.5 px-1"),d(l,"class","flex gap-2 max-w-full"),d(G,"class","text-ellipsis whitespace-nowrap overflow-hidden"),d(V,"class","flex gap-1 text-center"),d(K,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full mb-4"),d(ye,"class","text-xs font-bold uppercase opacity-40"),d(Fe,"class",""),d(me,"class","flex flex-col items-center justify-center flex-1 gap-1"),d(tt,"class","bg-surface-900-50-token h-full w-px opacity-20"),d(Se,"class","text-xs font-bold uppercase opacity-40"),d(De,"class",""),d(_e,"class","flex flex-col items-center justify-center flex-1 gap-1"),d(ae,"class","flex mt-auto w-full"),d(o,"class","flex flex-col max-w-full w-full absolute items-center p-4 gap-0.5 bottom-0"),bt(o,"top","calc(88.5% - 14rem)"),bt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(n[5]?100:900)+")) "+(n[5]?80:60)+"%, "+(n[2]||`rgb(var(--color-surface-${n[5]?100:600})`)+")",1),d(t,"class","card !bg-surface-100 dark:!bg-surface-600 shadow-2xl shadow-black absolute top-0 -left-4 -right-4 bottom-0 -z-1 flex flex-col p-4 gap-0.5 items-center hoverCard svelte-gfpzxg"),se(t,"hovered",n[3]),we(Z.src,Oe=n[0].imgUrl||Rn)||d(Z,"src",Oe),d(Z,"alt",Ve=n[0].id),d(Z,"class","card pinImage bg-surface-300-600-token shadow-black svelte-gfpzxg"),se(Z,"hovered",n[3]),se(Z,"shadow-lg",n[3]),d(he,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),d(Ae,"class","badge badge-glass my-auto py-0.5 px-1"),d(Ce,"class","flex gap-2"),d(Ee,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),d(le,"class","flex flex-col py-4 info svelte-gfpzxg"),se(le,"opacity-0",n[3]),d(e,"class","wrapper relative z-0 inline-block max-w-full min-w-0 w-full"),d(e,"href",n[1]),d(e,"id",te=n[0].id),d(e,"data-gameid",Ot=(C=n[0].game)==null?void 0:C.id),d(e,"data-filetype","tableFiles")},m(C,H){pe(C,e,H),c(e,t),c(t,r),c(t,a),c(t,o),c(o,l),c(l,u),c(u,m),c(l,I),c(l,v),c(v,S),c(l,U),xt(M,l,null),c(o,$),c(o,V),c(V,G),c(G,L),c(V,x),c(V,y),c(y,T),c(y,E),c(y,F),c(o,W),c(o,K),c(K,re),c(o,X),xt(ge,o,null),c(o,kt),c(o,ae),c(ae,me),c(me,ye),c(me,et),c(me,Fe),c(Fe,Te),c(ae,qt),c(ae,tt),c(ae,Be),c(ae,_e),c(_e,Se),c(_e,ie),c(_e,De),c(De,ut),c(e,oe),c(e,Z),c(e,dt),c(e,le),c(le,Ce),c(Ce,he),c(he,nt),c(Ce,Rt),c(Ce,Ae),c(Ae,ht),c(le,Pt),c(le,fe),c(fe,rt),c(fe,ft),c(fe,Dt),c(fe,je),c(le,ne),c(le,Ee),c(Ee,Le),z=!0,b||(B=[Zt(e,"mouseenter",n[7]),Zt(e,"mouseleave",n[8])],b=!0)},p(C,[H]){var Re,Pe,We,$e,ze;(!z||H&1&&!we(r.src,i=C[0].imgUrl||Rn))&&d(r,"src",i),(!z||H&1&&s!==(s=C[0].id))&&d(r,"alt",s),(!z||H&1)&&h!==(h=((Re=C[0].game)==null?void 0:Re.name)+"")&&j(m,h),(!z||H&1)&&w!==(w=C[0].tableFormat+"")&&j(S,w);const ke={};H&16&&(ke.game=C[4]),M.$set(ke),(!z||H&16)&&q!==(q=C[4].manufacturer+"")&&j(L,q),(!z||H&16)&&N!==(N=C[4].year+"")&&j(E,N),(!z||H&1)&&J!==(J=((Pe=C[0].authors)==null?void 0:Pe.join(", "))+"")&&j(re,J);const ue={};H&1&&(ue.data=C[0].features),ge.$set(ue),(!z||H&1)&&ve!==(ve=It(C[0].updatedAt)+"")&&j(Te,ve),(!z||H&1)&&He!==(He=It(C[0].createdAt||C[0].updatedAt)+"")&&j(ut,He),(!z||H&36)&&bt(t,"background","color-mix(in lch, rgb(var(--color-surface-"+(C[5]?100:900)+")) "+(C[5]?80:60)+"%, "+(C[2]||`rgb(var(--color-surface-${C[5]?100:600})`)+")",1),(!z||H&8)&&se(t,"hovered",C[3]),(!z||H&1&&!we(Z.src,Oe=C[0].imgUrl||Rn))&&d(Z,"src",Oe),(!z||H&1&&Ve!==(Ve=C[0].id))&&d(Z,"alt",Ve),(!z||H&8)&&se(Z,"hovered",C[3]),(!z||H&8)&&se(Z,"shadow-lg",C[3]),(!z||H&1)&&Ne!==(Ne=((We=C[0].game)==null?void 0:We.name)+"")&&j(nt,Ne),(!z||H&1)&&xe!==(xe=C[0].tableFormat+"")&&j(ht,xe),(!z||H&16)&&Me!==(Me=C[4].manufacturer+"")&&j(rt,Me),(!z||H&16)&&it!==(it=C[4].year+"")&&j(Dt,it),(!z||H&1)&&ee!==(ee=(($e=C[0].authors)==null?void 0:$e.join(", "))+"")&&j(Le,ee),(!z||H&8)&&se(le,"opacity-0",C[3]),(!z||H&2)&&d(e,"href",C[1]),(!z||H&1&&te!==(te=C[0].id))&&d(e,"id",te),(!z||H&1&&Ot!==(Ot=(ze=C[0].game)==null?void 0:ze.id))&&d(e,"data-gameid",Ot)},i(C){z||(Xe(M.$$.fragment,C),Xe(ge.$$.fragment,C),z=!0)},o(C){lt(M.$$.fragment,C),lt(ge.$$.fragment,C),z=!1},d(C){C&&f(e),jt(M),jt(ge),b=!1,hr(B)}}}function Ou(n,e,t){let r,i,s,a;wt(n,Rs,S=>t(10,i=S)),wt(n,Ci,S=>t(5,a=S));const o=new ks,{dbStore:l}=cn;wt(n,l,S=>t(9,s=S));let{file:u=Qs}=e,{href:h=""}=e,m="",I=!1;const v=()=>{i.mobile||t(3,I=!0)},w=()=>{i.mobile||t(3,I=!1)};return n.$$set=S=>{"file"in S&&t(0,u=S.file),"href"in S&&t(1,h=S.href)},n.$$.update=()=>{var S;n.$$.dirty&513&&t(4,r=(S=u==null?void 0:u.game)!=null&&S.id?s[u.game.id]:Ti),n.$$.dirty&1&&u.imgUrl&&o.getColorAsync(u.imgUrl).then(U=>{U&&t(2,m=U.rgb)})},[u,h,m,I,r,a,l,v,w,s]}class Nu extends St{constructor(e){super(),Ct(this,e,Ou,Du,Tt,{file:0,href:1})}}function Mu(n){let e,t,r,i,s,a,o,l;return i=new Ei({props:{icon:Bs,size:"8",class:"ml-2"}}),{c(){e=p("button"),t=P(n[0]),r=A(),Ht(i.$$.fragment),this.h()},l(u){e=g(u,"BUTTON",{class:!0});var h=_(e);t=D(h,n[0]),r=k(h),Vt(i.$$.fragment,h),h.forEach(f),this.h()},h(){d(e,"class","chip badge-glass py-0.5 px-1 cursor-pointer")},m(u,h){pe(u,e,h),c(e,t),c(e,r),xt(i,e,null),a=!0,o||(l=[Ns(s=ia.call(null,e,n[0])),Zt(e,"click",n[1])],o=!0)},p(u,[h]){(!a||h&1)&&j(t,u[0]),s&&Ms(s.update)&&h&1&&s.update.call(null,u[0])},i(u){a||(Xe(i.$$.fragment,u),a=!0)},o(u){lt(i.$$.fragment,u),a=!1},d(u){u&&f(e),jt(i),o=!1,hr(l)}}}function Lu(n,e,t){let{id:r=""}=e;const i=()=>{ta().trigger({message:`${r} copied to clipboard.`})};return n.$$set=s=>{"id"in s&&t(0,r=s.id)},[r,i]}class Uu extends St{constructor(e){super(),Ct(this,e,Lu,Mu,Tt,{id:0})}}function Fu(n){var y;let e,t,r,i,s,a,o,l,u=n[0].title+"",h,m,I,v=((y=n[0].authors)==null?void 0:y.join(", "))+"",w,S,U,M,$,V,G=(It(n[0].updatedAt)||"???")+"",q,L,x;return M=new Uu({props:{id:n[0].id}}),{c(){e=p("a"),t=p("img"),a=A(),o=p("div"),l=p("p"),h=P(u),m=A(),I=p("p"),w=P(v),S=A(),U=p("div"),Ht(M.$$.fragment),$=A(),V=p("h4"),q=P(G),this.h()},l(T){e=g(T,"A",{href:!0,class:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var N=_(e);t=g(N,"IMG",{alt:!0,title:!0,class:!0,width:!0,src:!0}),a=k(N),o=g(N,"DIV",{class:!0});var E=_(o);l=g(E,"P",{class:!0});var F=_(l);h=D(F,u),F.forEach(f),m=k(E),I=g(E,"P",{class:!0});var W=_(I);w=D(W,v),W.forEach(f),S=k(E),U=g(E,"DIV",{class:!0});var K=_(U);Vt(M.$$.fragment,K),$=k(K),V=g(K,"H4",{class:!0});var J=_(V);q=D(J,G),J.forEach(f),K.forEach(f),E.forEach(f),N.forEach(f),this.h()},h(){d(t,"alt",r=n[0].youtubeId),d(t,"title",i=n[0].title),d(t,"class","card aspectTable hover:brightness-125 hover:scale-110 transition-all svelte-cprdlx"),d(t,"width","352"),we(t.src,s=`https://img.youtube.com/vi/${n[0].youtubeId}/0.jpg`)||d(t,"src",s),se(t,"glow",n[2]),d(l,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden leading-4"),d(I,"class","text-ellipsis whitespace-nowrap overflow-hidden opacity-60 pb-1"),d(V,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),d(U,"class","flex justify-between"),d(o,"class","flex flex-col py-4"),d(e,"href",n[1]),d(e,"class","flex flex-col"),d(e,"id",L=n[0].id),d(e,"data-gameid",n[3]),d(e,"data-filetype","b2sFiles")},m(T,N){pe(T,e,N),c(e,t),c(e,a),c(e,o),c(o,l),c(l,h),c(o,m),c(o,I),c(I,w),c(o,S),c(o,U),xt(M,U,null),c(U,$),c(U,V),c(V,q),x=!0},p(T,[N]){var F;(!x||N&1&&r!==(r=T[0].youtubeId))&&d(t,"alt",r),(!x||N&1&&i!==(i=T[0].title))&&d(t,"title",i),(!x||N&1&&!we(t.src,s=`https://img.youtube.com/vi/${T[0].youtubeId}/0.jpg`))&&d(t,"src",s),(!x||N&4)&&se(t,"glow",T[2]),(!x||N&1)&&u!==(u=T[0].title+"")&&j(h,u),(!x||N&1)&&v!==(v=((F=T[0].authors)==null?void 0:F.join(", "))+"")&&j(w,v);const E={};N&1&&(E.id=T[0].id),M.$set(E),(!x||N&1)&&G!==(G=(It(T[0].updatedAt)||"???")+"")&&j(q,G),(!x||N&2)&&d(e,"href",T[1]),(!x||N&1&&L!==(L=T[0].id))&&d(e,"id",L),(!x||N&8)&&d(e,"data-gameid",T[3])},i(T){x||(Xe(M.$$.fragment,T),x=!0)},o(T){lt(M.$$.fragment,T),x=!1},d(T){T&&f(e),jt(M)}}}function Bu(n,e,t){let{file:r=Zs}=e,{href:i=""}=e,{active:s=!1}=e,{gameId:a}=e;return n.$$set=o=>{"file"in o&&t(0,r=o.file),"href"in o&&t(1,i=o.href),"active"in o&&t(2,s=o.active),"gameId"in o&&t(3,a=o.gameId)},[r,i,s,a]}class Hu extends St{constructor(e){super(),Ct(this,e,Bu,Fu,Tt,{file:0,href:1,active:2,gameId:3})}}const Xu={game:{route:"games",name:"Games",component:Au},tableFiles:{route:"tables",name:"Tables",component:Nu},b2sFiles:{route:"b2s",name:"Backglasses",component:eu},tutorialFiles:{route:"tutorials",name:"Tutorials",component:Hu,icon:Dr},pupPackFiles:{route:"puppacks",name:"PuP Packs",component:Ge,icon:Hs},romFiles:{route:"roms",name:"Roms",component:Ge,icon:Vs},altColorFiles:{route:"coloredroms",name:"Colored Roms",component:Ge,icon:xs},altSoundFiles:{route:"altsounds",name:"Alt. Sounds",component:Ge,icon:js},topperFiles:{route:"toppers",name:"Toppers",component:Ge,icon:Ws},povFiles:{route:"pov",name:"POVs",component:Ge,icon:$s},soundFiles:{route:"sounds",name:"Sounds",component:Ge,icon:zs},mediaPackFiles:{route:"mediapacks",name:"Media Packs",component:Ge,icon:Gs},wheelArtFiles:{route:"wheelart",name:"Wheelart",component:Ge,icon:qs},ruleFiles:{route:"rules",name:"Rules",component:Ge,icon:Dr}};export{Jc as E,Pu as F,Uu as I,Rn as P,Nu as T,Sr as U,Rs as a,ru as b,ia as c,ks as d,ta as g,Ju as i,Xu as m};
