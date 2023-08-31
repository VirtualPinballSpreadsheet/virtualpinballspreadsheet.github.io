import{a2 as me,s as J,y as he,f as L,a as q,l as N,g as y,h as g,d as _,c as B,m as ee,j as E,i as U,H as D,T as ve,z as we,A as _e,B as be,n as te,a0 as ke,W as Z}from"./scheduler.4bea28c8.js";import{S as oe,i as ne,a as A,t as S,g as Ee,c as $e,b as ae,d as re,m as se,e as ie}from"./index.10be7516.js";import{A as Le,B as ye,C as ge,D as De,G as Ue,p as Ae,e as K,F as Fe}from"./modeMapping.a9071498.js";import{w as Se,d as Ce}from"./index.56f04d27.js";import{l as le,D as Ve}from"./formatDate.6aa4704f.js";const ze=Se(void 0);function Me(t,e){const{computePosition:a,autoUpdate:n,offset:o,shift:l,flip:s,arrow:i,size:r,autoPlacement:d,hide:f,inline:m}=me(ze),c={open:!1,autoUpdateCleanup:()=>{}},p=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let h;const w="https://www.skeleton.dev/utilities/popups";let u,C;function I(){u=document.querySelector(`[data-popup="${e.target}"]`)??document.createElement("div"),C=u.querySelector(".arrow")??document.createElement("div")}I();function V(){var b,$,M,x,G,H,O,Q;if(!u)throw new Error(`The data-popup="${e.target}" element was not found. ${w}`);if(!a)throw new Error(`Floating UI 'computePosition' not found for data-popup="${e.target}". ${w}`);if(!o)throw new Error(`Floating UI 'offset' not found for data-popup="${e.target}". ${w}`);if(!l)throw new Error(`Floating UI 'shift' not found for data-popup="${e.target}". ${w}`);if(!s)throw new Error(`Floating UI 'flip' not found for data-popup="${e.target}". ${w}`);if(!i)throw new Error(`Floating UI 'arrow' not found for data-popup="${e.target}". ${w}`);const v=[];r&&v.push(r((b=e.middleware)==null?void 0:b.size)),d&&v.push(d(($=e.middleware)==null?void 0:$.autoPlacement)),f&&v.push(f((M=e.middleware)==null?void 0:M.hide)),m&&v.push(m((x=e.middleware)==null?void 0:x.inline)),a(t,u,{placement:e.placement??"bottom",middleware:[o(((G=e.middleware)==null?void 0:G.offset)??8),l(((H=e.middleware)==null?void 0:H.shift)??{padding:8}),s((O=e.middleware)==null?void 0:O.flip),i(((Q=e.middleware)==null?void 0:Q.arrow)??{element:C||null}),...v]}).then(({x:ce,y:ue,placement:fe,middlewareData:pe})=>{if(Object.assign(u.style,{left:`${ce}px`,top:`${ue}px`}),C){const{x:R,y:W}=pe.arrow,de={top:"bottom",right:"left",bottom:"top",left:"right"}[fe.split("-")[0]];Object.assign(C.style,{left:R!=null?`${R}px`:"",top:W!=null?`${W}px`:"",right:"",bottom:"",[de]:"-4px"})}})}function F(){u&&(c.open=!0,e.state&&e.state({state:c.open}),V(),u.style.display="block",u.style.opacity="1",u.style.pointerEvents="auto",u.removeAttribute("inert"),c.autoUpdateCleanup=n(t,u,V),h=Array.from(u==null?void 0:u.querySelectorAll(p)))}function k(v){if(!u)return;const b=parseFloat(window.getComputedStyle(u).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{c.open=!1,e.state&&e.state({state:c.open}),u.style.opacity="0",u.setAttribute("inert",""),c.autoUpdateCleanup&&c.autoUpdateCleanup(),v&&v()},b)}function z(){c.open===!1?F():k()}function T(v){if(c.open===!1||t.contains(v.target))return;if(u&&u.contains(v.target)===!1){k();return}const b=e.closeQuery===void 0?"a[href], button":e.closeQuery,$=u==null?void 0:u.querySelectorAll(b);$==null||$.forEach(M=>{M.contains(v.target)&&k()})}const j=v=>{if(c.open===!1)return;const b=v.key;if(b==="Escape"){v.preventDefault(),t.focus(),k();return}h=Array.from(u==null?void 0:u.querySelectorAll(p)),c.open&&document.activeElement===t&&(b==="ArrowDown"||b==="Tab")&&p.length>0&&h.length>0&&(v.preventDefault(),h[0].focus())};switch(e.event){case"click":t.addEventListener("click",z,!0),window.addEventListener("click",T,!0);break;case"hover":t.addEventListener("mouseover",F,!0),t.addEventListener("mouseleave",()=>k(),!0);break;case"focus-blur":t.addEventListener("focus",z,!0),t.addEventListener("blur",()=>k(),!0);break;case"focus-click":t.addEventListener("focus",F,!0),window.addEventListener("click",T,!0);break;default:throw new Error(`Event value of '${e.event}' is not supported. ${w}`)}return window.addEventListener("keydown",j,!0),V(),{update(v){k(()=>{e=v,V(),I()})},destroy(){t.removeEventListener("click",z,!0),t.removeEventListener("mouseover",F,!0),t.removeEventListener("mouseleave",()=>k(),!0),t.removeEventListener("focus",z,!0),t.removeEventListener("focus",F,!0),t.removeEventListener("blur",()=>k(),!0),window.removeEventListener("click",T,!0),window.removeEventListener("keydown",j,!0)}}}let Pe=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,a)=>(a&=63,a<36?e+=a.toString(36):a<62?e+=(a-26).toString(36).toUpperCase():a>62?e+="-":e+="_",e),"");function Te(t){let e,a,n,o,l,s,i,r,d,f;const m=t[4].default,c=he(m,t,t[3],null);return{c(){e=L("div"),c&&c.c(),a=q(),n=L("div"),o=L("p"),l=N(t[0]),s=q(),i=L("div"),this.h()},l(p){e=y(p,"DIV",{});var h=g(e);c&&c.l(h),h.forEach(_),a=B(p),n=y(p,"DIV",{class:!0,"data-popup":!0});var w=g(n);o=y(w,"P",{});var u=g(o);l=ee(u,t[0]),u.forEach(_),s=B(w),i=y(w,"DIV",{class:!0}),g(i).forEach(_),w.forEach(_),this.h()},h(){E(i,"class","arrow variant-filled-surface border-primary-500 border-r border-b"),E(n,"class","card px-2 py-1 variant-filled-surface z-50 border-primary-500 border shadow-md"),E(n,"data-popup",t[1])},m(p,h){U(p,e,h),c&&c.m(e,null),U(p,a,h),U(p,n,h),D(n,o),D(o,l),D(n,s),D(n,i),r=!0,d||(f=ve(Me.call(null,e,t[2])),d=!0)},p(p,[h]){c&&c.p&&(!r||h&8)&&we(c,m,p,p[3],r?be(m,p[3],h,null):_e(p[3]),null),(!r||h&1)&&te(l,p[0])},i(p){r||(A(c,p),r=!0)},o(p){S(c,p),r=!1},d(p){p&&(_(e),_(a),_(n)),c&&c.d(p),d=!1,f()}}}function qe(t,e,a){let{$$slots:n={},$$scope:o}=e,{content:l=""}=e;const s=Pe(),i={event:"hover",target:s,placement:"top"};return t.$$set=r=>{"content"in r&&a(0,l=r.content),"$$scope"in r&&a(3,o=r.$$scope)},[l,s,i,o,n]}class Be extends oe{constructor(e){super(),ne(this,e,qe,Te,J,{content:0})}}var Ie={prefix:"fab",iconName:"dropbox",icon:[528,512,[],"f16b","M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"]},je={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},xe={prefix:"fab",iconName:"google-drive",icon:[512,512,[],"f3aa","M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"]};const Ge=t=>t.url?t.url.includes("vpuniverse")?{tooltip:"VPUniverse",class:"variant-ghost-tertiary",icon:ye,title:"VPU",...t}:t.url.includes("vpforums")?{tooltip:"VP Forums",class:"variant-ghost-warning",icon:ge,title:"VPF",...t}:t.url.includes("drive.google")?{tooltip:"Google Drive",class:"variant-ghost-surface",icon:xe,title:"GDrive",...t}:t.url.includes("facebook")?{tooltip:"Facebook",class:"variant-ghost-tertiary",icon:je,title:"Facebook",...t}:t.url.includes("mega")?{tooltip:"Mega",class:"variant-ghost-primary",icon:De,title:"Mega",...t}:t.url.includes("dropbox")?{tooltip:"Dropbox",class:"variant-ghost-secondary",icon:Ie,title:"Dropbox",...t}:t.url.includes("zen")?{tooltip:"Zen Pinball",class:"variant-ghost-surface",icon:Ue,title:"Zen",...t}:{tooltip:"External",class:"variant-ghost-success",icon:Ae,title:"Ext",...t}:{tooltip:"???",class:"variant-soft",icon:Le,title:"???",...t};function X(t,e,a){const n=t.slice();return n[2]=e[a],n}function He(t){let e,a,n,o=t[2].title+"",l,s,i,r,d;return a=new Fe({props:{icon:t[2].icon}}),{c(){e=L("a"),ae(a.$$.fragment),n=L("span"),l=N(o),r=q(),this.h()},l(f){e=y(f,"A",{href:!0,target:!0,class:!0});var m=g(e);re(a.$$.fragment,m),n=y(m,"SPAN",{});var c=g(n);l=ee(c,o),c.forEach(_),m.forEach(_),r=B(f),this.h()},h(){E(e,"href",s=t[2].broken?"":t[2].url),E(e,"target","_blank"),E(e,"class",i="chip "+t[2].class),Z(e,"opacity-20",t[2].broken)},m(f,m){U(f,e,m),se(a,e,null),D(e,n),D(n,l),U(f,r,m),d=!0},p(f,m){const c={};m&1&&(c.icon=f[2].icon),a.$set(c),(!d||m&1)&&o!==(o=f[2].title+"")&&te(l,o),(!d||m&1&&s!==(s=f[2].broken?"":f[2].url))&&E(e,"href",s),(!d||m&1&&i!==(i="chip "+f[2].class))&&E(e,"class",i),(!d||m&1)&&Z(e,"opacity-20",f[2].broken)},i(f){d||(A(a.$$.fragment,f),d=!0)},o(f){S(a.$$.fragment,f),d=!1},d(f){f&&(_(e),_(r)),ie(a)}}}function Y(t){let e,a;return e=new Be({props:{content:t[2].broken?"This link is broken and needs to be updated. If you are aware of a working upload, please contact us!":t[2].tooltip,$$slots:{default:[He]},$$scope:{ctx:t}}}),{c(){ae(e.$$.fragment)},l(n){re(e.$$.fragment,n)},m(n,o){se(e,n,o),a=!0},p(n,o){const l={};o&1&&(l.content=n[2].broken?"This link is broken and needs to be updated. If you are aware of a working upload, please contact us!":n[2].tooltip),o&33&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){a||(A(e.$$.fragment,n),a=!0)},o(n){S(e.$$.fragment,n),a=!1},d(n){ie(e,n)}}}function Oe(t){let e,a,n=K(t[0]),o=[];for(let s=0;s<n.length;s+=1)o[s]=Y(X(t,n,s));const l=s=>S(o[s],1,1,()=>{o[s]=null});return{c(){e=L("div");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){e=y(s,"DIV",{class:!0});var i=g(e);for(let r=0;r<o.length;r+=1)o[r].l(i);i.forEach(_),this.h()},h(){E(e,"class","flex gap-1")},m(s,i){U(s,e,i);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(e,null);a=!0},p(s,[i]){if(i&1){n=K(s[0]);let r;for(r=0;r<n.length;r+=1){const d=X(s,n,r);o[r]?(o[r].p(d,i),A(o[r],1)):(o[r]=Y(d),o[r].c(),A(o[r],1),o[r].m(e,null))}for(Ee(),r=n.length;r<o.length;r+=1)l(r);$e()}},i(s){if(!a){for(let i=0;i<n.length;i+=1)A(o[i]);a=!0}},o(s){o=o.filter(Boolean);for(let i=0;i<o.length;i+=1)S(o[i]);a=!1},d(s){s&&_(e),ke(o,s)}}}function Qe(t,e,a){let n,{urls:o=[]}=e;return t.$$set=l=>{"urls"in l&&a(1,o=l.urls)},t.$$.update=()=>{t.$$.dirty&2&&a(0,n=o.map(l=>Ge(l)).filter(l=>!!l))},[n,o]}class tt extends oe{constructor(e){super(),ne(this,e,Qe,Oe,J,{urls:1})}}const P=le("lists",{}),Re=le("ckechedBookmarks",[]),We=Ce([P,Ve.dbStore],([t,e])=>{const a=t.bookmarks||[],n=[];return Object.entries(a).forEach(([o,l])=>{var r;const s=(r=e[o])==null?void 0:r.name;if(!s)return;const i={name:s,id:o,files:{}};Object.entries(l).sort((d,f)=>d[0]<f[0]?-1:1).forEach(([d,f])=>{const m=f.map(c=>{var h,w;return(w=(h=e[o])==null?void 0:h[d])==null?void 0:w.find(u=>u.id===c)});i.files[d]=m}),n.push(i)}),n}),Ze=(t,e,a,n)=>{P.update(o=>{var s,i;o[t]||(o[t]={});const l=o[t];return l[e]||(l[e]={}),l[e][a]||(l[e][a]=[]),(s=l[e][a])!=null&&s.includes(n)||(i=l[e][a])==null||i.push(n),o})},Ke=(t,e)=>{P.update(a=>{var o;const n=a[t];if(n){if(n[e])return delete n[e],a;for(const l in n){const s=n[l];for(const i in s)if((o=s[i])!=null&&o.includes(e))return s[i]=s[i].filter(r=>e!==r),a}return a}})},ot={listStore:P,bookmarks:We,checkedBookmarks:Re,addToList:Ze,deleteFromList:Ke};export{ot as L,Be as T,tt as U,Ge as g,Pe as n,Me as p,ze as s};
