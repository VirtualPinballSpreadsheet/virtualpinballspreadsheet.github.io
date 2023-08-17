import{r as me,u as Xa,v as ln,w as sr,x as xa,y as Wr,s as ge,z as Ge,f as T,a as U,g as S,h as C,c as F,d as w,j as m,i as j,A as I,B as Je,C as Ye,D as Xe,E as ar,F as Ce,G as Be,H as Y,I as pe,l as ee,m as te,J as Te,K as vi,n as se,L as tn,M as nn,N as Ft,O as tt,P as hn,Q as ii,R as ri,S as mn,T as rn,U as bt,V as yi,W as qe,e as Oe,q as qr,X as vt,Y as Kl,o as or,Z as Qa,_ as Kr,$ as sn,a0 as Fe,a1 as Gl,k as ut,a2 as Jl,a3 as Gr,p as cn,a4 as Yl,a5 as Qn,a6 as Xl}from"../chunks/scheduler.dedae0ab.js";import{n as xl,l as Ql,f as Zl,h as $l,S as _e,i as be,a as R,g as de,t as N,c as he,j as lr,k as cr,o as gn,b as X,d as $,m as x,e as Q,p as Zn}from"../chunks/index.21d01676.js";import{w as Ii}from"../chunks/index.ac37785c.js";import{c as wi,p as ur,e as Le,u as fr,o as ec,g as An,a as Jr,s as tc,m as Cn,b as Yr,d as nc,f as ic,h as Za,l as rc,S as Dt,i as $a,j as nt,k as Xr,E as si,F as sc,P as xr,D as dr,n as ac,q as Qr,r as eo,t as oc}from"../chunks/modeMapping.78bc00b9.js";import{_ as Zr}from"../chunks/preload-helper.a4192956.js";import{F as Yt,f as lc,a as cc,b as uc,c as fc,d as to,e as dc,g as hc,h as mc,i as gc,j as pc,k as _c}from"../chunks/index.0b89e077.js";import{h as bc}from"../chunks/singletons.924d09e6.js";import{p as yn}from"../chunks/stores.1f593548.js";function no(n,e,t,i){if(!e)return me;const r=n.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return me;const{delay:s=0,duration:a=300,easing:o=Xa,start:l=xl()+s,end:c=l+a,tick:f=me,css:u}=t(n,{from:e,to:r},i);let d=!0,h=!1,b;function y(){u&&(b=Zl(n,0,1,a,s,o,u)),s||(h=!0)}function _(){u&&$l(n,b),d=!1}return Ql(g=>{if(!h&&g>=l&&(h=!0),h&&g>=c&&(f(1,0),_()),!d)return!1;if(h){const p=g-l,v=0+1*o(p/a);f(v,1-v)}return!0}),y(),f(0,1),_}function io(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:i}=e,r=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=i,ro(n,r)}}function ro(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform;n.style.transform=`${r} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}const vc=!1,vb=Object.freeze(Object.defineProperty({__proto__:null,ssr:vc},Symbol.toStringTag,{value:"Module"}));const so=Ii(void 0);function Ei(n,e){const{computePosition:t,autoUpdate:i,offset:r,shift:s,flip:a,arrow:o,size:l,autoPlacement:c,hide:f,inline:u}=ln(so),d={open:!1,autoUpdateCleanup:()=>{}},h=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let b;const y="https://www.skeleton.dev/utilities/popups";let _,g;function p(){_=document.querySelector(`[data-popup="${e.target}"]`)??document.createElement("div"),g=_.querySelector(".arrow")??document.createElement("div")}p();function v(){var P,J,B,M,q,ne,Z,ue;if(!_)throw new Error(`The data-popup="${e.target}" element was not found. ${y}`);if(!t)throw new Error(`Floating UI 'computePosition' not found for data-popup="${e.target}". ${y}`);if(!r)throw new Error(`Floating UI 'offset' not found for data-popup="${e.target}". ${y}`);if(!s)throw new Error(`Floating UI 'shift' not found for data-popup="${e.target}". ${y}`);if(!a)throw new Error(`Floating UI 'flip' not found for data-popup="${e.target}". ${y}`);if(!o)throw new Error(`Floating UI 'arrow' not found for data-popup="${e.target}". ${y}`);const L=[];l&&L.push(l((P=e.middleware)==null?void 0:P.size)),c&&L.push(c((J=e.middleware)==null?void 0:J.autoPlacement)),f&&L.push(f((B=e.middleware)==null?void 0:B.hide)),u&&L.push(u((M=e.middleware)==null?void 0:M.inline)),t(n,_,{placement:e.placement??"bottom",middleware:[r(((q=e.middleware)==null?void 0:q.offset)??8),s(((ne=e.middleware)==null?void 0:ne.shift)??{padding:8}),a((Z=e.middleware)==null?void 0:Z.flip),o(((ue=e.middleware)==null?void 0:ue.arrow)??{element:g||null}),...L]}).then(({x:oe,y:G,placement:H,middlewareData:W})=>{if(Object.assign(_.style,{left:`${oe}px`,top:`${G}px`}),g){const{x:V,y:re}=W.arrow,le={top:"bottom",right:"left",bottom:"top",left:"right"}[H.split("-")[0]];Object.assign(g.style,{left:V!=null?`${V}px`:"",top:re!=null?`${re}px`:"",right:"",bottom:"",[le]:"-4px"})}})}function E(){_&&(d.open=!0,e.state&&e.state({state:d.open}),v(),_.style.display="block",_.style.opacity="1",_.style.pointerEvents="auto",_.removeAttribute("inert"),d.autoUpdateCleanup=i(n,_,v),b=Array.from(_==null?void 0:_.querySelectorAll(h)))}function k(L){if(!_)return;const P=parseFloat(window.getComputedStyle(_).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{d.open=!1,e.state&&e.state({state:d.open}),_.style.opacity="0",_.setAttribute("inert",""),d.autoUpdateCleanup&&d.autoUpdateCleanup(),L&&L()},P)}function A(){d.open===!1?E():k()}function O(L){if(d.open===!1||n.contains(L.target))return;if(_&&_.contains(L.target)===!1){k();return}const P=e.closeQuery===void 0?"a[href], button":e.closeQuery,J=_==null?void 0:_.querySelectorAll(P);J==null||J.forEach(B=>{B.contains(L.target)&&k()})}const D=L=>{if(d.open===!1)return;const P=L.key;if(P==="Escape"){L.preventDefault(),n.focus(),k();return}b=Array.from(_==null?void 0:_.querySelectorAll(h)),d.open&&document.activeElement===n&&(P==="ArrowDown"||P==="Tab")&&h.length>0&&b.length>0&&(L.preventDefault(),b[0].focus())};switch(e.event){case"click":n.addEventListener("click",A,!0),window.addEventListener("click",O,!0);break;case"hover":n.addEventListener("mouseover",E,!0),n.addEventListener("mouseleave",()=>k(),!0);break;case"focus-blur":n.addEventListener("focus",A,!0),n.addEventListener("blur",()=>k(),!0);break;case"focus-click":n.addEventListener("focus",E,!0),window.addEventListener("click",O,!0);break;default:throw new Error(`Event value of '${e.event}' is not supported. ${y}`)}return window.addEventListener("keydown",D,!0),v(),{update(L){k(()=>{e=L,v(),p()})},destroy(){n.removeEventListener("click",A,!0),n.removeEventListener("mouseover",E,!0),n.removeEventListener("mouseleave",()=>k(),!0),n.removeEventListener("focus",A,!0),n.removeEventListener("focus",E,!0),n.removeEventListener("blur",()=>k(),!0),window.removeEventListener("click",O,!0),window.removeEventListener("keydown",D,!0)}}}const yc="drawerStore";function Ic(){const n=wc();return sr(yc,n)}function wc(){const{subscribe:n,set:e,update:t}=Ii({});return{subscribe:n,set:e,update:t,open:i=>t(()=>({open:!0,...i})),close:()=>t(i=>(i.open=!1,i))}}const ao="modalStore";function hr(){const n=xa(ao);if(!n)throw new Error("modalStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return n}function Ec(){const n=kc();return sr(ao,n)}function kc(){const{subscribe:n,set:e,update:t}=Ii([]);return{subscribe:n,set:e,update:t,trigger:i=>t(r=>(r.push(i),r)),close:()=>t(i=>(i.length>0&&i.shift(),i)),clear:()=>e([])}}const Tc={message:"Missing Toast Message",autohide:!0,timeout:5e3},oo="toastStore";function Kt(){const n=xa(oo);if(!n)throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return n}function Sc(){const n=Cc();return sr(oo,n)}function Ac(){const n=Math.random();return Number(n).toString(32)}function Cc(){const{subscribe:n,set:e,update:t}=Ii([]),i=s=>t(a=>{if(a.length>0){const o=a.findIndex(c=>c.id===s),l=a[o];l&&(l.callback&&l.callback({id:s,status:"closed"}),l.timeoutId&&clearTimeout(l.timeoutId),a.splice(o,1))}return a});function r(s){if(s.autohide===!0)return setTimeout(()=>{i(s.id)},s.timeout)}return{subscribe:n,close:i,trigger:s=>{const a=Ac();return t(o=>{s&&s.callback&&s.callback({id:a,status:"queued"}),s.hideDismiss&&(s.autohide=!0);const l={...Tc,...s,id:a};return l.timeoutId=r(l),o.push(l),o}),a},freeze:s=>t(a=>(a.length>0&&clearTimeout(a[s].timeoutId),a)),unfreeze:s=>t(a=>(a.length>0&&(a[s].timeoutId=r(a[s])),a)),clear:()=>e([])}}function Dc(){Ec(),Sc(),Ic()}function Rc(n,e){const t=()=>{n.dispatchEvent(new CustomEvent("copyComplete"))},i=()=>{if(typeof e=="object"){if("element"in e){const r=document.querySelector(`[data-clipboard="${e.element}"]`);if(!r)throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${e.element}"]`);Li(r.innerHTML,"text/html").then(t);return}if("input"in e){const r=document.querySelector(`[data-clipboard="${e.input}"]`);if(!r)throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${e.input}"]`);Li(r.value).then(t);return}}Li(e).then(t)};return n.addEventListener("click",i),{update(r){e=r},destroy(){n.removeEventListener("click",i)}}}async function Li(n,e="text/plain"){navigator.clipboard.write?await navigator.clipboard.write([new ClipboardItem({[e]:new Blob([n],{type:e}),"text/plain":new Blob([n],{type:"text/plain"})})]):await new Promise(t=>{t(navigator.clipboard.writeText(String(n)))})}function Pc(n,e){const t='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let i,r;function s(u){u.shiftKey&&u.code==="Tab"&&(u.preventDefault(),r.focus())}function a(u){!u.shiftKey&&u.code==="Tab"&&(u.preventDefault(),i.focus())}const o=u=>{if(e===!1)return;const d=Array.from(n.querySelectorAll(t));d.length&&(i=d[0],r=d[d.length-1],u||i.focus(),i.addEventListener("keydown",s),r.addEventListener("keydown",a))};o(!1);function l(){i&&i.removeEventListener("keydown",s),r&&r.removeEventListener("keydown",a)}const c=(u,d)=>(u.length&&(l(),o(!0)),d),f=new MutationObserver(c);return f.observe(n,{childList:!0,subtree:!0}),{update(u){e=u,u?o(!1):l()},destroy(){l(),f.disconnect()}}}function $r(n,{delay:e=0,duration:t=400,easing:i=Xa}={}){const r=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:s=>`opacity: ${s*r}`}}function pn(n,{delay:e=0,duration:t=400,easing:i=wi,x:r=0,y:s=0,opacity:a=0}={}){const o=getComputedStyle(n),l=+o.opacity,c=o.transform==="none"?"":o.transform,f=l*(1-a),[u,d]=Wr(r),[h,b]=Wr(s);return{delay:e,duration:t,easing:i,css:(y,_)=>`
			transform: ${c} translate(${(1-y)*u}${d}, ${(1-y)*h}${b});
			opacity: ${l-f*_}`}}function es(n,{delay:e=0,duration:t=400,easing:i=wi,axis:r="y"}={}){const s=getComputedStyle(n),a=+s.opacity,o=r==="y"?"height":"width",l=parseFloat(s[o]),c=r==="y"?["top","bottom"]:["left","right"],f=c.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),u=parseFloat(s[`padding${f[0]}`]),d=parseFloat(s[`padding${f[1]}`]),h=parseFloat(s[`margin${f[0]}`]),b=parseFloat(s[`margin${f[1]}`]),y=parseFloat(s[`border${f[0]}Width`]),_=parseFloat(s[`border${f[1]}Width`]);return{delay:e,duration:t,easing:i,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*a};${o}: ${g*l}px;padding-${c[0]}: ${g*u}px;padding-${c[1]}: ${g*d}px;margin-${c[0]}: ${g*h}px;margin-${c[1]}: ${g*b}px;border-${c[0]}-width: ${g*y}px;border-${c[1]}-width: ${g*_}px;`}}function ts(n,{delay:e=0,duration:t=400,easing:i=wi,start:r=0,opacity:s=0}={}){const a=getComputedStyle(n),o=+a.opacity,l=a.transform==="none"?"":a.transform,c=1-r,f=o*(1-s);return{delay:e,duration:t,easing:i,css:(u,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${o-f*d}
		`}}function Lt(n,e){const{transition:t,params:i,enabled:r}=e;return r?t(n,i):"duration"in i?t(n,{duration:0}):{duration:0}}const Oc=n=>({}),ns=n=>({}),Lc=n=>({}),is=n=>({}),Mc=n=>({}),rs=n=>({});function ss(n){let e,t,i;const r=n[22].lead,s=Ge(r,n,n[21],rs);return{c(){e=T("div"),s&&s.c(),this.h()},l(a){e=S(a,"DIV",{class:!0});var o=C(e);s&&s.l(o),o.forEach(w),this.h()},h(){m(e,"class",t="app-bar-slot-lead "+n[4])},m(a,o){j(a,e,o),s&&s.m(e,null),i=!0},p(a,o){s&&s.p&&(!i||o&2097152)&&Je(s,r,a,a[21],i?Xe(r,a[21],o,Mc):Ye(a[21]),rs),(!i||o&16&&t!==(t="app-bar-slot-lead "+a[4]))&&m(e,"class",t)},i(a){i||(R(s,a),i=!0)},o(a){N(s,a),i=!1},d(a){a&&w(e),s&&s.d(a)}}}function as(n){let e,t,i;const r=n[22].trail,s=Ge(r,n,n[21],is);return{c(){e=T("div"),s&&s.c(),this.h()},l(a){e=S(a,"DIV",{class:!0});var o=C(e);s&&s.l(o),o.forEach(w),this.h()},h(){m(e,"class",t="app-bar-slot-trail "+n[2])},m(a,o){j(a,e,o),s&&s.m(e,null),i=!0},p(a,o){s&&s.p&&(!i||o&2097152)&&Je(s,r,a,a[21],i?Xe(r,a[21],o,Lc):Ye(a[21]),is),(!i||o&4&&t!==(t="app-bar-slot-trail "+a[2]))&&m(e,"class",t)},i(a){i||(R(s,a),i=!0)},o(a){N(s,a),i=!1},d(a){a&&w(e),s&&s.d(a)}}}function os(n){let e,t,i;const r=n[22].headline,s=Ge(r,n,n[21],ns);return{c(){e=T("div"),s&&s.c(),this.h()},l(a){e=S(a,"DIV",{class:!0});var o=C(e);s&&s.l(o),o.forEach(w),this.h()},h(){m(e,"class",t="app-bar-row-headline "+n[5])},m(a,o){j(a,e,o),s&&s.m(e,null),i=!0},p(a,o){s&&s.p&&(!i||o&2097152)&&Je(s,r,a,a[21],i?Xe(r,a[21],o,Oc):Ye(a[21]),ns),(!i||o&32&&t!==(t="app-bar-row-headline "+a[5]))&&m(e,"class",t)},i(a){i||(R(s,a),i=!0)},o(a){N(s,a),i=!1},d(a){a&&w(e),s&&s.d(a)}}}function Nc(n){let e,t,i,r,s,a,o,l,c,f,u=n[8].lead&&ss(n);const d=n[22].default,h=Ge(d,n,n[21],null);let b=n[8].trail&&as(n),y=n[8].headline&&os(n);return{c(){e=T("div"),t=T("div"),u&&u.c(),i=U(),r=T("div"),h&&h.c(),a=U(),b&&b.c(),l=U(),y&&y.c(),this.h()},l(_){e=S(_,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var g=C(e);t=S(g,"DIV",{class:!0});var p=C(t);u&&u.l(p),i=F(p),r=S(p,"DIV",{class:!0});var v=C(r);h&&h.l(v),v.forEach(w),a=F(p),b&&b.l(p),p.forEach(w),l=F(g),y&&y.l(g),g.forEach(w),this.h()},h(){m(r,"class",s="app-bar-slot-default "+n[3]),m(t,"class",o="app-bar-row-main "+n[6]),m(e,"class",c="app-bar "+n[7]),m(e,"data-testid","app-bar"),m(e,"role","toolbar"),m(e,"aria-label",n[0]),m(e,"aria-labelledby",n[1])},m(_,g){j(_,e,g),I(e,t),u&&u.m(t,null),I(t,i),I(t,r),h&&h.m(r,null),I(t,a),b&&b.m(t,null),I(e,l),y&&y.m(e,null),f=!0},p(_,[g]){_[8].lead?u?(u.p(_,g),g&256&&R(u,1)):(u=ss(_),u.c(),R(u,1),u.m(t,i)):u&&(de(),N(u,1,1,()=>{u=null}),he()),h&&h.p&&(!f||g&2097152)&&Je(h,d,_,_[21],f?Xe(d,_[21],g,null):Ye(_[21]),null),(!f||g&8&&s!==(s="app-bar-slot-default "+_[3]))&&m(r,"class",s),_[8].trail?b?(b.p(_,g),g&256&&R(b,1)):(b=as(_),b.c(),R(b,1),b.m(t,null)):b&&(de(),N(b,1,1,()=>{b=null}),he()),(!f||g&64&&o!==(o="app-bar-row-main "+_[6]))&&m(t,"class",o),_[8].headline?y?(y.p(_,g),g&256&&R(y,1)):(y=os(_),y.c(),R(y,1),y.m(e,null)):y&&(de(),N(y,1,1,()=>{y=null}),he()),(!f||g&128&&c!==(c="app-bar "+_[7]))&&m(e,"class",c),(!f||g&1)&&m(e,"aria-label",_[0]),(!f||g&2)&&m(e,"aria-labelledby",_[1])},i(_){f||(R(u),R(h,_),R(b),R(y),f=!0)},o(_){N(u),N(h,_),N(b),N(y),f=!1},d(_){_&&w(e),u&&u.d(),h&&h.d(_),b&&b.d(),y&&y.d()}}}const Uc="flex flex-col",Fc="grid items-center",Bc="",Vc="flex-none flex justify-between items-center",Hc="flex-auto",jc="flex-none flex items-center space-x-4";function zc(n,e,t){let i,r,s,a,o,l,{$$slots:c={},$$scope:f}=e;const u=ar(c);let{background:d="bg-surface-100-800-token"}=e,{border:h=""}=e,{padding:b="p-4"}=e,{shadow:y=""}=e,{spacing:_="space-y-4"}=e,{gridColumns:g="grid-cols-[auto_1fr_auto]"}=e,{gap:p="gap-4"}=e,{regionRowMain:v=""}=e,{regionRowHeadline:E=""}=e,{slotLead:k=""}=e,{slotDefault:A=""}=e,{slotTrail:O=""}=e,{label:D=""}=e,{labelledby:L=""}=e;return n.$$set=P=>{t(23,e=Ce(Ce({},e),Be(P))),"background"in P&&t(9,d=P.background),"border"in P&&t(10,h=P.border),"padding"in P&&t(11,b=P.padding),"shadow"in P&&t(12,y=P.shadow),"spacing"in P&&t(13,_=P.spacing),"gridColumns"in P&&t(14,g=P.gridColumns),"gap"in P&&t(15,p=P.gap),"regionRowMain"in P&&t(16,v=P.regionRowMain),"regionRowHeadline"in P&&t(17,E=P.regionRowHeadline),"slotLead"in P&&t(18,k=P.slotLead),"slotDefault"in P&&t(19,A=P.slotDefault),"slotTrail"in P&&t(20,O=P.slotTrail),"label"in P&&t(0,D=P.label),"labelledby"in P&&t(1,L=P.labelledby),"$$scope"in P&&t(21,f=P.$$scope)},n.$$.update=()=>{t(7,i=`${Uc} ${d} ${h} ${_} ${b} ${y} ${e.class??""}`),n.$$.dirty&114688&&t(6,r=`${Fc} ${g} ${p} ${v}`),n.$$.dirty&131072&&t(5,s=`${Bc} ${E}`),n.$$.dirty&262144&&t(4,a=`${Vc} ${k}`),n.$$.dirty&524288&&t(3,o=`${Hc} ${A}`),n.$$.dirty&1048576&&t(2,l=`${jc} ${O}`)},e=Be(e),[D,L,l,o,a,s,r,i,u,d,h,b,y,_,g,p,v,E,k,A,O,f,c]}class Wc extends _e{constructor(e){super(),be(this,e,zc,Nc,ge,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const qc=n=>({}),ls=n=>({}),Kc=n=>({}),cs=n=>({}),Gc=n=>({}),us=n=>({}),Jc=n=>({}),fs=n=>({}),Yc=n=>({}),ds=n=>({}),Xc=n=>({}),hs=n=>({});function ms(n){let e,t,i;const r=n[18].header,s=Ge(r,n,n[17],hs);return{c(){e=T("header"),s&&s.c(),this.h()},l(a){e=S(a,"HEADER",{id:!0,class:!0});var o=C(e);s&&s.l(o),o.forEach(w),this.h()},h(){m(e,"id","shell-header"),m(e,"class",t="flex-none "+n[7])},m(a,o){j(a,e,o),s&&s.m(e,null),i=!0},p(a,o){s&&s.p&&(!i||o&131072)&&Je(s,r,a,a[17],i?Xe(r,a[17],o,Xc):Ye(a[17]),hs),(!i||o&128&&t!==(t="flex-none "+a[7]))&&m(e,"class",t)},i(a){i||(R(s,a),i=!0)},o(a){N(s,a),i=!1},d(a){a&&w(e),s&&s.d(a)}}}function gs(n){let e,t;const i=n[18].sidebarLeft,r=Ge(i,n,n[17],ds);return{c(){e=T("aside"),r&&r.c(),this.h()},l(s){e=S(s,"ASIDE",{id:!0,class:!0});var a=C(e);r&&r.l(a),a.forEach(w),this.h()},h(){m(e,"id","sidebar-left"),m(e,"class",n[6])},m(s,a){j(s,e,a),r&&r.m(e,null),t=!0},p(s,a){r&&r.p&&(!t||a&131072)&&Je(r,i,s,s[17],t?Xe(i,s[17],a,Yc):Ye(s[17]),ds),(!t||a&64)&&m(e,"class",s[6])},i(s){t||(R(r,s),t=!0)},o(s){N(r,s),t=!1},d(s){s&&w(e),r&&r.d(s)}}}function ps(n){let e,t,i;const r=n[18].pageHeader,s=Ge(r,n,n[17],fs),a=s||xc();return{c(){e=T("header"),a&&a.c(),this.h()},l(o){e=S(o,"HEADER",{id:!0,class:!0});var l=C(e);a&&a.l(l),l.forEach(w),this.h()},h(){m(e,"id","page-header"),m(e,"class",t="flex-none "+n[4])},m(o,l){j(o,e,l),a&&a.m(e,null),i=!0},p(o,l){s&&s.p&&(!i||l&131072)&&Je(s,r,o,o[17],i?Xe(r,o[17],l,Jc):Ye(o[17]),fs),(!i||l&16&&t!==(t="flex-none "+o[4]))&&m(e,"class",t)},i(o){i||(R(a,o),i=!0)},o(o){N(a,o),i=!1},d(o){o&&w(e),a&&a.d(o)}}}function xc(n){let e;return{c(){e=ee("(slot:header)")},l(t){e=te(t,"(slot:header)")},m(t,i){j(t,e,i)},d(t){t&&w(e)}}}function _s(n){let e,t,i;const r=n[18].pageFooter,s=Ge(r,n,n[17],us),a=s||Qc();return{c(){e=T("footer"),a&&a.c(),this.h()},l(o){e=S(o,"FOOTER",{id:!0,class:!0});var l=C(e);a&&a.l(l),l.forEach(w),this.h()},h(){m(e,"id","page-footer"),m(e,"class",t="flex-none "+n[2])},m(o,l){j(o,e,l),a&&a.m(e,null),i=!0},p(o,l){s&&s.p&&(!i||l&131072)&&Je(s,r,o,o[17],i?Xe(r,o[17],l,Gc):Ye(o[17]),us),(!i||l&4&&t!==(t="flex-none "+o[2]))&&m(e,"class",t)},i(o){i||(R(a,o),i=!0)},o(o){N(a,o),i=!1},d(o){o&&w(e),a&&a.d(o)}}}function Qc(n){let e;return{c(){e=ee("(slot:footer)")},l(t){e=te(t,"(slot:footer)")},m(t,i){j(t,e,i)},d(t){t&&w(e)}}}function bs(n){let e,t;const i=n[18].sidebarRight,r=Ge(i,n,n[17],cs);return{c(){e=T("aside"),r&&r.c(),this.h()},l(s){e=S(s,"ASIDE",{id:!0,class:!0});var a=C(e);r&&r.l(a),a.forEach(w),this.h()},h(){m(e,"id","sidebar-right"),m(e,"class",n[5])},m(s,a){j(s,e,a),r&&r.m(e,null),t=!0},p(s,a){r&&r.p&&(!t||a&131072)&&Je(r,i,s,s[17],t?Xe(i,s[17],a,Kc):Ye(s[17]),cs),(!t||a&32)&&m(e,"class",s[5])},i(s){t||(R(r,s),t=!0)},o(s){N(r,s),t=!1},d(s){s&&w(e),r&&r.d(s)}}}function vs(n){let e,t,i;const r=n[18].footer,s=Ge(r,n,n[17],ls);return{c(){e=T("footer"),s&&s.c(),this.h()},l(a){e=S(a,"FOOTER",{id:!0,class:!0});var o=C(e);s&&s.l(o),o.forEach(w),this.h()},h(){m(e,"id","shell-footer"),m(e,"class",t="flex-none "+n[1])},m(a,o){j(a,e,o),s&&s.m(e,null),i=!0},p(a,o){s&&s.p&&(!i||o&131072)&&Je(s,r,a,a[17],i?Xe(r,a[17],o,qc):Ye(a[17]),ls),(!i||o&2&&t!==(t="flex-none "+a[1]))&&m(e,"class",t)},i(a){i||(R(s,a),i=!0)},o(a){N(s,a),i=!1},d(a){a&&w(e),s&&s.d(a)}}}function Zc(n){let e,t,i,r,s,a,o,l,c,f,u,d,h,b,y,_=n[9].header&&ms(n),g=n[9].sidebarLeft&&gs(n),p=n[9].pageHeader&&ps(n);const v=n[18].default,E=Ge(v,n,n[17],null);let k=n[9].pageFooter&&_s(n),A=n[9].sidebarRight&&bs(n),O=n[9].footer&&vs(n);return{c(){e=T("div"),_&&_.c(),t=U(),i=T("div"),g&&g.c(),r=U(),s=T("div"),p&&p.c(),a=U(),o=T("main"),E&&E.c(),c=U(),k&&k.c(),u=U(),A&&A.c(),d=U(),O&&O.c(),this.h()},l(D){e=S(D,"DIV",{id:!0,class:!0,"data-testid":!0});var L=C(e);_&&_.l(L),t=F(L),i=S(L,"DIV",{class:!0});var P=C(i);g&&g.l(P),r=F(P),s=S(P,"DIV",{id:!0,class:!0});var J=C(s);p&&p.l(J),a=F(J),o=S(J,"MAIN",{id:!0,class:!0});var B=C(o);E&&E.l(B),B.forEach(w),c=F(J),k&&k.l(J),J.forEach(w),u=F(P),A&&A.l(P),P.forEach(w),d=F(L),O&&O.l(L),L.forEach(w),this.h()},h(){m(o,"id","page-content"),m(o,"class",l="flex-auto "+n[3]),m(s,"id","page"),m(s,"class",f=n[0]+" "+ys),m(i,"class","flex-auto "+eu),m(e,"id","appShell"),m(e,"class",n[8]),m(e,"data-testid","app-shell")},m(D,L){j(D,e,L),_&&_.m(e,null),I(e,t),I(e,i),g&&g.m(i,null),I(i,r),I(i,s),p&&p.m(s,null),I(s,a),I(s,o),E&&E.m(o,null),I(s,c),k&&k.m(s,null),I(i,u),A&&A.m(i,null),I(e,d),O&&O.m(e,null),h=!0,b||(y=Y(s,"scroll",n[19]),b=!0)},p(D,[L]){D[9].header?_?(_.p(D,L),L&512&&R(_,1)):(_=ms(D),_.c(),R(_,1),_.m(e,t)):_&&(de(),N(_,1,1,()=>{_=null}),he()),D[9].sidebarLeft?g?(g.p(D,L),L&512&&R(g,1)):(g=gs(D),g.c(),R(g,1),g.m(i,r)):g&&(de(),N(g,1,1,()=>{g=null}),he()),D[9].pageHeader?p?(p.p(D,L),L&512&&R(p,1)):(p=ps(D),p.c(),R(p,1),p.m(s,a)):p&&(de(),N(p,1,1,()=>{p=null}),he()),E&&E.p&&(!h||L&131072)&&Je(E,v,D,D[17],h?Xe(v,D[17],L,null):Ye(D[17]),null),(!h||L&8&&l!==(l="flex-auto "+D[3]))&&m(o,"class",l),D[9].pageFooter?k?(k.p(D,L),L&512&&R(k,1)):(k=_s(D),k.c(),R(k,1),k.m(s,null)):k&&(de(),N(k,1,1,()=>{k=null}),he()),(!h||L&1&&f!==(f=D[0]+" "+ys))&&m(s,"class",f),D[9].sidebarRight?A?(A.p(D,L),L&512&&R(A,1)):(A=bs(D),A.c(),R(A,1),A.m(i,null)):A&&(de(),N(A,1,1,()=>{A=null}),he()),D[9].footer?O?(O.p(D,L),L&512&&R(O,1)):(O=vs(D),O.c(),R(O,1),O.m(e,null)):O&&(de(),N(O,1,1,()=>{O=null}),he()),(!h||L&256)&&m(e,"class",D[8])},i(D){h||(R(_),R(g),R(p),R(E,D),R(k),R(A),R(O),h=!0)},o(D){N(_),N(g),N(p),N(E,D),N(k),N(A),N(O),h=!1},d(D){D&&w(e),_&&_.d(),g&&g.d(),p&&p.d(),E&&E.d(D),k&&k.d(),A&&A.d(),O&&O.d(),b=!1,y()}}}const $c="w-full h-full flex flex-col overflow-hidden",eu="w-full h-full flex overflow-hidden",ys="flex-1 overflow-x-hidden flex flex-col",tu="flex-none overflow-x-hidden overflow-y-auto",nu="flex-none overflow-x-hidden overflow-y-auto";function iu(n,e,t){let i,r,s,a,o,l,c,f,{$$slots:u={},$$scope:d}=e;const h=ar(u);let{regionPage:b=""}=e,{slotHeader:y="z-10"}=e,{slotSidebarLeft:_="w-auto"}=e,{slotSidebarRight:g="w-auto"}=e,{slotPageHeader:p=""}=e,{slotPageContent:v=""}=e,{slotPageFooter:E=""}=e,{slotFooter:k=""}=e;function A(O){pe.call(this,n,O)}return n.$$set=O=>{t(20,e=Ce(Ce({},e),Be(O))),"regionPage"in O&&t(0,b=O.regionPage),"slotHeader"in O&&t(10,y=O.slotHeader),"slotSidebarLeft"in O&&t(11,_=O.slotSidebarLeft),"slotSidebarRight"in O&&t(12,g=O.slotSidebarRight),"slotPageHeader"in O&&t(13,p=O.slotPageHeader),"slotPageContent"in O&&t(14,v=O.slotPageContent),"slotPageFooter"in O&&t(15,E=O.slotPageFooter),"slotFooter"in O&&t(16,k=O.slotFooter),"$$scope"in O&&t(17,d=O.$$scope)},n.$$.update=()=>{t(8,i=`${$c} ${e.class??""}`),n.$$.dirty&1024&&t(7,r=`${y}`),n.$$.dirty&2048&&t(6,s=`${tu} ${_}`),n.$$.dirty&4096&&t(5,a=`${nu} ${g}`),n.$$.dirty&8192&&t(4,o=`${p}`),n.$$.dirty&16384&&t(3,l=`${v}`),n.$$.dirty&32768&&t(2,c=`${E}`),n.$$.dirty&65536&&t(1,f=`${k}`)},e=Be(e),[b,f,c,l,o,a,s,r,i,h,y,_,g,p,v,E,k,d,u,A]}class ru extends _e{constructor(e){super(),be(this,e,iu,Zc,ge,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function Is(n,e,t){const i=n.slice();return i[34]=e[t],i}function su(n){let e,t,i;return{c(){e=T("div"),t=ee(n[0]),this.h()},l(r){e=S(r,"DIV",{class:!0});var s=C(e);t=te(s,n[0]),s.forEach(w),this.h()},h(){m(e,"class",i="autocomplete-empty "+n[7])},m(r,s){j(r,e,s),I(e,t)},p(r,s){s[0]&1&&se(t,r[0]),s[0]&128&&i!==(i="autocomplete-empty "+r[7])&&m(e,"class",i)},i:me,o:me,d(r){r&&w(e)}}}function au(n){let e,t,i=[],r=new Map,s,a,o,l=Le(n[6].slice(0,n[13]));const c=f=>f[34];for(let f=0;f<l.length;f+=1){let u=Is(n,l,f),d=c(u);r.set(d,i[f]=ws(d,u))}return{c(){e=T("nav"),t=T("ul");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=S(f,"NAV",{class:!0});var u=C(e);t=S(u,"UL",{class:!0});var d=C(t);for(let h=0;h<i.length;h+=1)i[h].l(d);d.forEach(w),u.forEach(w),this.h()},h(){m(t,"class",s="autocomplete-list "+n[10]),m(e,"class",a="autocomplete-nav "+n[11])},m(f,u){j(f,e,u),I(e,t);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(t,null);o=!0},p(f,u){u[0]&25458&&(l=Le(f[6].slice(0,f[13])),de(),i=fr(i,u,c,1,f,l,r,t,ec,ws,null,Is),he()),(!o||u[0]&1024&&s!==(s="autocomplete-list "+f[10]))&&m(t,"class",s),(!o||u[0]&2048&&a!==(a="autocomplete-nav "+f[11]))&&m(e,"class",a)},i(f){if(!o){for(let u=0;u<l.length;u+=1)R(i[u]);o=!0}},o(f){for(let u=0;u<i.length;u+=1)N(i[u]);o=!1},d(f){f&&w(e);for(let u=0;u<i.length;u+=1)i[u].d()}}}function ws(n,e){let t,i,r,s=e[34].label+"",a,o,l,c,f,u,d,h;function b(){return e[28](e[34])}return{key:n,first:null,c(){t=T("li"),i=T("button"),r=new tn(!1),o=U(),this.h()},l(y){t=S(y,"LI",{class:!0});var _=C(t);i=S(_,"BUTTON",{class:!0,type:!0});var g=C(i);r=nn(g,!1),g.forEach(w),o=F(_),_.forEach(w),this.h()},h(){r.a=null,m(i,"class",a="autocomplete-button "+e[8]),m(i,"type","button"),m(t,"class",l="autocomplete-item "+e[9]),this.first=t},m(y,_){j(y,t,_),I(t,i),r.m(s,i),I(t,o),u=!0,d||(h=[Y(i,"click",b),Y(i,"click",e[26]),Y(i,"keypress",e[27])],d=!0)},p(y,_){e=y,(!u||_[0]&8256)&&s!==(s=e[34].label+"")&&r.p(s),(!u||_[0]&256&&a!==(a="autocomplete-button "+e[8]))&&m(i,"class",a),(!u||_[0]&512&&l!==(l="autocomplete-item "+e[9]))&&m(t,"class",l)},i(y){u||(y&&Ft(()=>{u&&(f&&f.end(1),c=lr(t,Lt,{transition:e[2],params:e[3],enabled:e[1]}),c.start())}),u=!0)},o(y){c&&c.invalidate(),y&&(f=cr(t,Lt,{transition:e[4],params:e[5],enabled:e[1]})),u=!1},d(y){y&&w(t),y&&f&&f.end(),d=!1,tt(h)}}}function ou(n){let e,t,i,r,s;const a=[au,su],o=[];function l(c,f){return c[6].length>0?0:1}return t=l(n),i=o[t]=a[t](n),{c(){e=T("div"),i.c(),this.h()},l(c){e=S(c,"DIV",{class:!0,"data-testid":!0});var f=C(e);i.l(f),f.forEach(w),this.h()},h(){m(e,"class",r="autocomplete "+n[12]),m(e,"data-testid","autocomplete")},m(c,f){j(c,e,f),o[t].m(e,null),s=!0},p(c,f){let u=t;t=l(c),t===u?o[t].p(c,f):(de(),N(o[u],1,1,()=>{o[u]=null}),he(),i=o[t],i?i.p(c,f):(i=o[t]=a[t](c),i.c()),R(i,1),i.m(e,null)),(!s||f[0]&4096&&r!==(r="autocomplete "+c[12]))&&m(e,"class",r)},i(c){s||(R(i),s=!0)},o(c){N(i),s=!1},d(c){c&&w(e),o[t].d()}}}function lu(n,e,t){let i,r,s,a,o,l,c,f,u,d;Te(n,ur,H=>t(29,d=H));const h=vi();let{input:b=void 0}=e,{options:y=[]}=e,{limit:_=void 0}=e,{allowlist:g=[]}=e,{denylist:p=[]}=e,{emptyState:v="No Results Found."}=e,{regionNav:E=""}=e,{regionList:k="list-nav"}=e,{regionItem:A=""}=e,{regionButton:O="w-full"}=e,{regionEmpty:D="text-center"}=e,{transitions:L=!d}=e,{transitionIn:P=es}=e,{transitionInParams:J={duration:200}}=e,{transitionOut:B=es}=e,{transitionOutParams:M={duration:200}}=e;function q(H,W){let V=[...y];H.length&&(V=V.filter(re=>H.includes(re.value))),W.length&&(V=V.filter(re=>!W.includes(re.value))),!H.length&&!W.length&&(V=y),t(25,i=V)}function ne(){let H=[...i];return H=H.filter(W=>{const V=String(b).toLowerCase().trim();if(JSON.stringify([W.label,W.value,W.keywords]).toLowerCase().includes(V))return W}),H}function Z(H){h("selection",H)}function ue(H){pe.call(this,n,H)}function oe(H){pe.call(this,n,H)}const G=H=>Z(H);return n.$$set=H=>{t(33,e=Ce(Ce({},e),Be(H))),"input"in H&&t(15,b=H.input),"options"in H&&t(16,y=H.options),"limit"in H&&t(17,_=H.limit),"allowlist"in H&&t(18,g=H.allowlist),"denylist"in H&&t(19,p=H.denylist),"emptyState"in H&&t(0,v=H.emptyState),"regionNav"in H&&t(20,E=H.regionNav),"regionList"in H&&t(21,k=H.regionList),"regionItem"in H&&t(22,A=H.regionItem),"regionButton"in H&&t(23,O=H.regionButton),"regionEmpty"in H&&t(24,D=H.regionEmpty),"transitions"in H&&t(1,L=H.transitions),"transitionIn"in H&&t(2,P=H.transitionIn),"transitionInParams"in H&&t(3,J=H.transitionInParams),"transitionOut"in H&&t(4,B=H.transitionOut),"transitionOutParams"in H&&t(5,M=H.transitionOutParams)},n.$$.update=()=>{n.$$.dirty[0]&65536&&t(25,i=y),n.$$.dirty[0]&786432&&q(g,p),n.$$.dirty[0]&33587200&&t(6,r=b?ne():i),n.$$.dirty[0]&131136&&t(13,s=_!==void 0?_:r.length),t(12,a=`${e.class??""}`),n.$$.dirty[0]&1048576&&t(11,o=`${E}`),n.$$.dirty[0]&2097152&&t(10,l=`${k}`),n.$$.dirty[0]&4194304&&t(9,c=`${A}`),n.$$.dirty[0]&8388608&&t(8,f=`${O}`),n.$$.dirty[0]&16777216&&t(7,u=`${D}`)},e=Be(e),[v,L,P,J,B,M,r,u,f,c,l,o,a,s,Z,b,y,_,g,p,E,k,A,O,D,i,ue,oe,G]}class cu extends _e{constructor(e){super(),be(this,e,lu,ou,ge,{input:15,options:16,limit:17,allowlist:18,denylist:19,emptyState:0,regionNav:20,regionList:21,regionItem:22,regionButton:23,regionEmpty:24,transitions:1,transitionIn:2,transitionInParams:3,transitionOut:4,transitionOutParams:5},null,[-1,-1])}}function uu(n){let e,t,i=String(n[1]).substring(0,2).toUpperCase()+"",r,s;return{c(){e=ii("svg"),t=ii("text"),r=ee(i),this.h()},l(a){e=ri(a,"svg",{class:!0,viewBox:!0});var o=C(e);t=ri(o,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var l=C(t);r=te(l,i),l.forEach(w),o.forEach(w),this.h()},h(){m(t,"x","50%"),m(t,"y","50%"),m(t,"dominant-baseline","central"),m(t,"text-anchor","middle"),m(t,"font-weight","bold"),m(t,"font-size",150),m(t,"class",s="avatar-text "+n[2]),m(e,"class","avatar-initials w-full h-full"),m(e,"viewBox","0 0 512 512")},m(a,o){j(a,e,o),I(e,t),I(t,r)},p(a,o){o&2&&i!==(i=String(a[1]).substring(0,2).toUpperCase()+"")&&se(r,i),o&4&&s!==(s="avatar-text "+a[2])&&m(t,"class",s)},d(a){a&&w(e)}}}function fu(n){let e,t,i,r,s,a,o,l,c=[{class:t="avatar-image "+mu},{style:i=n[8].style??""},{src:r=n[0]},{alt:s=n[8].alt||""},n[7]()],f={};for(let u=0;u<c.length;u+=1)f=Ce(f,c[u]);return{c(){e=T("img"),this.h()},l(u){e=S(u,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){mn(e,f)},m(u,d){j(u,e,d),o||(l=[rn(a=n[4].call(null,e,n[5])),Y(e,"error",n[19])],o=!0)},p(u,d){mn(e,f=An(c,[{class:t},d&256&&i!==(i=u[8].style??"")&&{style:i},d&1&&!bt(e.src,r=u[0])&&{src:r},d&256&&s!==(s=u[8].alt||"")&&{alt:s},u[7]()])),a&&yi(a.update)&&d&32&&a.update.call(null,u[5])},d(u){u&&w(e),o=!1,tt(l)}}}function du(n){let e,t,i,r;function s(l,c){return l[0]?fu:uu}let a=s(n),o=a(n);return{c(){e=T("figure"),o.c(),this.h()},l(l){e=S(l,"FIGURE",{class:!0,"data-testid":!0});var c=C(e);o.l(c),c.forEach(w),this.h()},h(){m(e,"class",t="avatar "+n[6]),m(e,"data-testid","avatar")},m(l,c){j(l,e,c),o.m(e,null),i||(r=[Y(e,"click",n[15]),Y(e,"keydown",n[16]),Y(e,"keyup",n[17]),Y(e,"keypress",n[18])],i=!0)},p(l,[c]){a===(a=s(l))&&o?o.p(l,c):(o.d(1),o=a(l),o&&(o.c(),o.m(e,null))),c&64&&t!==(t="avatar "+l[6])&&m(e,"class",t)},i:me,o:me,d(l){l&&w(e),o.d(),i=!1,tt(r)}}}let hu="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",mu="w-full h-full object-cover";function gu(n,e,t){let i;const r=["initials","fill","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let s=hn(e,r),{initials:a="AB"}=e,{fill:o="fill-token"}=e,{src:l=""}=e,{fallback:c=""}=e,{action:f=()=>{}}=e,{actionParams:u=""}=e,{background:d="bg-surface-400-500-token"}=e,{width:h="w-16"}=e,{border:b=""}=e,{rounded:y="rounded-full"}=e,{shadow:_=""}=e,{cursor:g=""}=e;function p(){return delete s.class,s}function v(D){pe.call(this,n,D)}function E(D){pe.call(this,n,D)}function k(D){pe.call(this,n,D)}function A(D){pe.call(this,n,D)}const O=()=>t(0,l=c);return n.$$set=D=>{t(8,e=Ce(Ce({},e),Be(D))),t(20,s=hn(e,r)),"initials"in D&&t(1,a=D.initials),"fill"in D&&t(2,o=D.fill),"src"in D&&t(0,l=D.src),"fallback"in D&&t(3,c=D.fallback),"action"in D&&t(4,f=D.action),"actionParams"in D&&t(5,u=D.actionParams),"background"in D&&t(9,d=D.background),"width"in D&&t(10,h=D.width),"border"in D&&t(11,b=D.border),"rounded"in D&&t(12,y=D.rounded),"shadow"in D&&t(13,_=D.shadow),"cursor"in D&&t(14,g=D.cursor)},n.$$.update=()=>{t(6,i=`${hu} ${d} ${h} ${b} ${y} ${_} ${g} ${e.class??""}`)},e=Be(e),[l,a,o,c,f,u,i,p,e,d,h,b,y,_,g,v,E,k,A,O]}class lo extends _e{constructor(e){super(),be(this,e,gu,du,ge,{initials:1,fill:2,src:0,fallback:3,action:4,actionParams:5,background:9,width:10,border:11,rounded:12,shadow:13,cursor:14})}}function co(n,{from:e,to:t},i={}){const r=getComputedStyle(n),s=r.transform==="none"?"":r.transform,[a,o]=r.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*a/t.width-(t.left+a),c=e.top+e.height*o/t.height-(t.top+o),{delay:f=0,duration:u=h=>Math.sqrt(h)*120,easing:d=wi}=i;return{delay:f,duration:yi(u)?u(Math.sqrt(l*l+c*c)):u,easing:d,css:(h,b)=>{const y=b*l,_=b*c,g=h+b*e.width/t.width,p=h+b*e.height/t.height;return`transform: ${s} translate(${y}px, ${_}px) scale(${g}, ${p});`}}}function Es(n){let e,t;const i=n[22].default,r=Ge(i,n,n[21],null);return{c(){e=T("div"),r&&r.c(),this.h()},l(s){e=S(s,"DIV",{class:!0});var a=C(e);r&&r.l(a),a.forEach(w),this.h()},h(){m(e,"class","slide-toggle-text ml-3")},m(s,a){j(s,e,a),r&&r.m(e,null),t=!0},p(s,a){r&&r.p&&(!t||a[0]&2097152)&&Je(r,i,s,s[21],t?Xe(i,s[21],a,null):Ye(s[21]),null)},i(s){t||(R(r,s),t=!0)},o(s){N(r,s),t=!1},d(s){s&&w(e),r&&r.d(s)}}}function pu(n){let e,t,i,r,s,a,o,l,c,f,u,d,h,b,y,_=[{type:"checkbox"},{class:"slide-toggle-input hidden"},{name:n[1]},n[8](),{disabled:r=n[9].disabled}],g={};for(let v=0;v<_.length;v+=1)g=Ce(g,_[v]);let p=n[10].default&&Es(n);return{c(){e=T("div"),t=T("label"),i=T("input"),s=U(),a=T("div"),o=T("div"),f=U(),p&&p.c(),this.h()},l(v){e=S(v,"DIV",{id:!0,class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-checked":!0,tabindex:!0});var E=C(e);t=S(E,"LABEL",{class:!0});var k=C(t);i=S(k,"INPUT",{type:!0,class:!0,name:!0}),s=F(k),a=S(k,"DIV",{class:!0});var A=C(a);o=S(A,"DIV",{class:!0}),C(o).forEach(w),A.forEach(w),f=F(k),p&&p.l(k),k.forEach(w),E.forEach(w),this.h()},h(){mn(i,g),m(o,"class",l="slide-toggle-thumb "+n[3]),qe(o,"cursor-not-allowed",n[9].disabled),m(a,"class",c="slide-toggle-track "+n[4]),qe(a,"cursor-not-allowed",n[9].disabled),m(t,"class",u="slide-toggle-label "+n[5]),m(e,"id",n[2]),m(e,"class",d="slide-toggle "+n[6]),m(e,"data-testid","slide-toggle"),m(e,"role","switch"),m(e,"aria-label",n[2]),m(e,"aria-checked",n[0]),m(e,"tabindex","0")},m(v,E){j(v,e,E),I(e,t),I(t,i),i.autofocus&&i.focus(),i.checked=n[0],I(t,s),I(t,a),I(a,o),I(t,f),p&&p.m(t,null),h=!0,b||(y=[Y(i,"change",n[31]),Y(i,"click",n[23]),Y(i,"keydown",n[24]),Y(i,"keyup",n[25]),Y(i,"keypress",n[26]),Y(i,"mouseover",n[27]),Y(i,"change",n[28]),Y(i,"focus",n[29]),Y(i,"blur",n[30]),Y(e,"keydown",n[7])],b=!0)},p(v,E){mn(i,g=An(_,[{type:"checkbox"},{class:"slide-toggle-input hidden"},(!h||E[0]&2)&&{name:v[1]},v[8](),(!h||E[0]&512&&r!==(r=v[9].disabled))&&{disabled:r}])),E[0]&1&&(i.checked=v[0]),(!h||E[0]&8&&l!==(l="slide-toggle-thumb "+v[3]))&&m(o,"class",l),(!h||E[0]&520)&&qe(o,"cursor-not-allowed",v[9].disabled),(!h||E[0]&16&&c!==(c="slide-toggle-track "+v[4]))&&m(a,"class",c),(!h||E[0]&528)&&qe(a,"cursor-not-allowed",v[9].disabled),v[10].default?p?(p.p(v,E),E[0]&1024&&R(p,1)):(p=Es(v),p.c(),R(p,1),p.m(t,null)):p&&(de(),N(p,1,1,()=>{p=null}),he()),(!h||E[0]&32&&u!==(u="slide-toggle-label "+v[5]))&&m(t,"class",u),(!h||E[0]&4)&&m(e,"id",v[2]),(!h||E[0]&64&&d!==(d="slide-toggle "+v[6]))&&m(e,"class",d),(!h||E[0]&4)&&m(e,"aria-label",v[2]),(!h||E[0]&1)&&m(e,"aria-checked",v[0])},i(v){h||(R(p),h=!0)},o(v){N(p),h=!1},d(v){v&&w(e),p&&p.d(),b=!1,tt(y)}}}const _u="inline-block",bu="unstyled flex items-center",vu="flex transition-all duration-[200ms] cursor-pointer",yu="w-[50%] h-full scale-[0.8] transition-all duration-[200ms] shadow";function Iu(n,e,t){let i,r,s,a,o,l,c,f;const u=["name","checked","size","background","active","border","rounded","label"];let d=hn(e,u),{$$slots:h={},$$scope:b}=e;const y=ar(h),_=vi();let{name:g}=e,{checked:p=!1}=e,{size:v="md"}=e,{background:E="bg-surface-400 dark:bg-surface-700"}=e,{active:k="bg-surface-900 dark:bg-surface-300"}=e,{border:A=""}=e,{rounded:O="rounded-full"}=e,{label:D=""}=e,L;switch(v){case"sm":L="w-12 h-6";break;case"lg":L="w-20 h-10";break;default:L="w-16 h-8"}function P(W){["Enter","Space"].includes(W.code)&&(W.preventDefault(),_("keyup",W),W.currentTarget.firstChild.click())}function J(){return delete d.class,d}function B(W){pe.call(this,n,W)}function M(W){pe.call(this,n,W)}function q(W){pe.call(this,n,W)}function ne(W){pe.call(this,n,W)}function Z(W){pe.call(this,n,W)}function ue(W){pe.call(this,n,W)}function oe(W){pe.call(this,n,W)}function G(W){pe.call(this,n,W)}function H(){p=this.checked,t(0,p)}return n.$$set=W=>{t(9,e=Ce(Ce({},e),Be(W))),t(33,d=hn(e,u)),"name"in W&&t(1,g=W.name),"checked"in W&&t(0,p=W.checked),"size"in W&&t(11,v=W.size),"background"in W&&t(12,E=W.background),"active"in W&&t(13,k=W.active),"border"in W&&t(14,A=W.border),"rounded"in W&&t(15,O=W.rounded),"label"in W&&t(2,D=W.label),"$$scope"in W&&t(21,b=W.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&12289&&t(19,i=p?k:`${E} cursor-pointer`),n.$$.dirty[0]&1&&t(18,r=p?"bg-white/75":"bg-white"),n.$$.dirty[0]&1&&t(17,s=p?"translate-x-full":""),t(20,a=e.disabled===!0?"opacity-50":"hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer"),t(6,o=`${_u} ${O} ${a} ${e.class??""}`),n.$$.dirty[0]&638976&&t(4,c=`${vu} ${A} ${O} ${L} ${i}`),n.$$.dirty[0]&425984&&t(3,f=`${yu} ${O} ${r} ${s}`)},t(5,l=`${bu}`),e=Be(e),[p,g,D,f,c,l,o,P,J,e,y,v,E,k,A,O,L,s,r,i,a,b,h,B,M,q,ne,Z,ue,oe,G,H]}class wu extends _e{constructor(e){super(),be(this,e,Iu,pu,ge,{name:1,checked:0,size:11,background:12,active:13,border:14,rounded:15,label:2},null,[-1,-1])}}function ks(n){let e=n[13],t,i,r=Ds(n);return{c(){r.c(),t=Oe()},l(s){r.l(s),t=Oe()},m(s,a){r.m(s,a),j(s,t,a),i=!0},p(s,a){a[0]&8192&&ge(e,e=s[13])?(de(),N(r,1,1,me),he(),r=Ds(s),r.c(),R(r,1),r.m(t.parentNode,t)):r.p(s,a)},i(s){i||(R(r),i=!0)},o(s){N(r),i=!1},d(s){s&&w(t),r.d(s)}}}function Eu(n){var c,f;let e,t,i,r,s;const a=[(c=n[15])==null?void 0:c.props,{parent:n[16]}];var o=(f=n[15])==null?void 0:f.ref;function l(u,d){var b;let h={$$slots:{default:[Tu]},$$scope:{ctx:u}};if(d!==void 0&&d[0]&98304)h=An(a,[d[0]&32768&&Jr((b=u[15])==null?void 0:b.props),d[0]&65536&&{parent:u[16]}]);else for(let y=0;y<a.length;y+=1)h=Ce(h,a[y]);return{props:h}}return o&&(t=qr(o,l(n))),{c(){e=T("div"),t&&X(t.$$.fragment),this.h()},l(u){e=S(u,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var d=C(e);t&&$(t.$$.fragment,d),d.forEach(w),this.h()},h(){var u;m(e,"class",i="modal contents "+(((u=n[13][0])==null?void 0:u.modalClasses)??"")),m(e,"data-testid","modal-component"),m(e,"role","dialog"),m(e,"aria-modal","true"),m(e,"aria-label",r=n[13][0].title??"")},m(u,d){j(u,e,d),t&&x(t,e,null),s=!0},p(u,d){var h,b,y;if(d[0]&32768&&o!==(o=(h=u[15])==null?void 0:h.ref)){if(t){de();const _=t;N(_.$$.fragment,1,0,()=>{Q(_,1)}),he()}o?(t=qr(o,l(u,d)),X(t.$$.fragment),R(t.$$.fragment,1),x(t,e,null)):t=null}else if(o){const _=d[0]&98304?An(a,[d[0]&32768&&Jr((b=u[15])==null?void 0:b.props),d[0]&65536&&{parent:u[16]}]):{};d[0]&32768|d[1]&65536&&(_.$$scope={dirty:d,ctx:u}),t.$set(_)}(!s||d[0]&8192&&i!==(i="modal contents "+(((y=u[13][0])==null?void 0:y.modalClasses)??"")))&&m(e,"class",i),(!s||d[0]&8192&&r!==(r=u[13][0].title??""))&&m(e,"aria-label",r)},i(u){s||(t&&R(t.$$.fragment,u),s=!0)},o(u){t&&N(t.$$.fragment,u),s=!1},d(u){u&&w(e),t&&Q(t)}}}function ku(n){var h,b,y,_;let e,t,i,r,s,a,o=((h=n[13][0])==null?void 0:h.title)&&Ss(n),l=((b=n[13][0])==null?void 0:b.body)&&As(n),c=((y=n[13][0])==null?void 0:y.image)&&typeof((_=n[13][0])==null?void 0:_.image)=="string"&&Cs(n);function f(g,p){if(g[13][0].type==="alert")return Cu;if(g[13][0].type==="confirm")return Au;if(g[13][0].type==="prompt")return Su}let u=f(n),d=u&&u(n);return{c(){e=T("div"),o&&o.c(),t=U(),l&&l.c(),i=U(),c&&c.c(),r=U(),d&&d.c(),this.h()},l(g){e=S(g,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var p=C(e);o&&o.l(p),t=F(p),l&&l.l(p),i=F(p),c&&c.l(p),r=F(p),d&&d.l(p),p.forEach(w),this.h()},h(){m(e,"class",s="modal "+n[17]),m(e,"data-testid","modal"),m(e,"role","dialog"),m(e,"aria-modal","true"),m(e,"aria-label",a=n[13][0].title??"")},m(g,p){j(g,e,p),o&&o.m(e,null),I(e,t),l&&l.m(e,null),I(e,i),c&&c.m(e,null),I(e,r),d&&d.m(e,null)},p(g,p){var v,E,k,A;(v=g[13][0])!=null&&v.title?o?o.p(g,p):(o=Ss(g),o.c(),o.m(e,t)):o&&(o.d(1),o=null),(E=g[13][0])!=null&&E.body?l?l.p(g,p):(l=As(g),l.c(),l.m(e,i)):l&&(l.d(1),l=null),(k=g[13][0])!=null&&k.image&&typeof((A=g[13][0])==null?void 0:A.image)=="string"?c?c.p(g,p):(c=Cs(g),c.c(),c.m(e,r)):c&&(c.d(1),c=null),u===(u=f(g))&&d?d.p(g,p):(d&&d.d(1),d=u&&u(g),d&&(d.c(),d.m(e,null))),p[0]&131072&&s!==(s="modal "+g[17])&&m(e,"class",s),p[0]&8192&&a!==(a=g[13][0].title??"")&&m(e,"aria-label",a)},i:me,o:me,d(g){g&&w(e),o&&o.d(),l&&l.d(),c&&c.d(),d&&d.d()}}}function Ts(n){var r;let e,t=((r=n[15])==null?void 0:r.slot)+"",i;return{c(){e=new tn(!1),i=Oe(),this.h()},l(s){e=nn(s,!1),i=Oe(),this.h()},h(){e.a=i},m(s,a){e.m(t,s,a),j(s,i,a)},p(s,a){var o;a[0]&32768&&t!==(t=((o=s[15])==null?void 0:o.slot)+"")&&e.p(t)},d(s){s&&(w(i),e.d())}}}function Tu(n){var i;let e,t=((i=n[15])==null?void 0:i.slot)&&Ts(n);return{c(){t&&t.c(),e=Oe()},l(r){t&&t.l(r),e=Oe()},m(r,s){t&&t.m(r,s),j(r,e,s)},p(r,s){var a;(a=r[15])!=null&&a.slot?t?t.p(r,s):(t=Ts(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&w(e),t&&t.d(r)}}}function Ss(n){let e,t,i=n[13][0].title+"",r;return{c(){e=T("header"),t=new tn(!1),this.h()},l(s){e=S(s,"HEADER",{class:!0});var a=C(e);t=nn(a,!1),a.forEach(w),this.h()},h(){t.a=null,m(e,"class",r="modal-header "+n[5])},m(s,a){j(s,e,a),t.m(i,e)},p(s,a){a[0]&8192&&i!==(i=s[13][0].title+"")&&t.p(i),a[0]&32&&r!==(r="modal-header "+s[5])&&m(e,"class",r)},d(s){s&&w(e)}}}function As(n){let e,t,i=n[13][0].body+"",r;return{c(){e=T("article"),t=new tn(!1),this.h()},l(s){e=S(s,"ARTICLE",{class:!0});var a=C(e);t=nn(a,!1),a.forEach(w),this.h()},h(){t.a=null,m(e,"class",r="modal-body "+n[6])},m(s,a){j(s,e,a),t.m(i,e)},p(s,a){a[0]&8192&&i!==(i=s[13][0].body+"")&&t.p(i),a[0]&64&&r!==(r="modal-body "+s[6])&&m(e,"class",r)},d(s){s&&w(e)}}}function Cs(n){let e,t;return{c(){e=T("img"),this.h()},l(i){e=S(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){var i;m(e,"class","modal-image "+Lu),bt(e.src,t=(i=n[13][0])==null?void 0:i.image)||m(e,"src",t),m(e,"alt","Modal")},m(i,r){j(i,e,r)},p(i,r){var s;r[0]&8192&&!bt(e.src,t=(s=i[13][0])==null?void 0:s.image)&&m(e,"src",t)},d(i){i&&w(e)}}}function Su(n){let e,t,i,r,s,a,o,l,c,f,u,d,h,b,y=[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},n[13][0].valueAttr],_={};for(let g=0;g<y.length;g+=1)_=Ce(_,y[g]);return{c(){e=T("form"),t=T("input"),i=U(),r=T("footer"),s=T("button"),a=ee(n[0]),l=U(),c=T("button"),f=ee(n[2]),this.h()},l(g){e=S(g,"FORM",{class:!0});var p=C(e);t=S(p,"INPUT",{class:!0,name:!0,type:!0}),i=F(p),r=S(p,"FOOTER",{class:!0});var v=C(r);s=S(v,"BUTTON",{type:!0,class:!0});var E=C(s);a=te(E,n[0]),E.forEach(w),l=F(v),c=S(v,"BUTTON",{type:!0,class:!0});var k=C(c);f=te(k,n[2]),k.forEach(w),v.forEach(w),p.forEach(w),this.h()},h(){mn(t,_),m(s,"type","button"),m(s,"class",o="btn "+n[3]),m(c,"type","submit"),m(c,"class",u="btn "+n[4]),m(r,"class",d="modal-footer "+n[7]),m(e,"class","space-y-4")},m(g,p){j(g,e,p),I(e,t),t.autofocus&&t.focus(),vt(t,n[14]),I(e,i),I(e,r),I(r,s),I(s,a),I(r,l),I(r,c),I(c,f),h||(b=[Y(t,"input",n[41]),Y(s,"click",n[23]),Y(e,"submit",n[25])],h=!0)},p(g,p){mn(t,_=An(y,[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},p[0]&8192&&g[13][0].valueAttr])),p[0]&16384&&t.value!==g[14]&&vt(t,g[14]),p[0]&1&&se(a,g[0]),p[0]&8&&o!==(o="btn "+g[3])&&m(s,"class",o),p[0]&4&&se(f,g[2]),p[0]&16&&u!==(u="btn "+g[4])&&m(c,"class",u),p[0]&128&&d!==(d="modal-footer "+g[7])&&m(r,"class",d)},d(g){g&&w(e),h=!1,tt(b)}}}function Au(n){let e,t,i,r,s,a,o,l,c,f,u;return{c(){e=T("footer"),t=T("button"),i=ee(n[0]),s=U(),a=T("button"),o=ee(n[1]),this.h()},l(d){e=S(d,"FOOTER",{class:!0});var h=C(e);t=S(h,"BUTTON",{type:!0,class:!0});var b=C(t);i=te(b,n[0]),b.forEach(w),s=F(h),a=S(h,"BUTTON",{type:!0,class:!0});var y=C(a);o=te(y,n[1]),y.forEach(w),h.forEach(w),this.h()},h(){m(t,"type","button"),m(t,"class",r="btn "+n[3]),m(a,"type","button"),m(a,"class",l="btn "+n[4]),m(e,"class",c="modal-footer "+n[7])},m(d,h){j(d,e,h),I(e,t),I(t,i),I(e,s),I(e,a),I(a,o),f||(u=[Y(t,"click",n[23]),Y(a,"click",n[24])],f=!0)},p(d,h){h[0]&1&&se(i,d[0]),h[0]&8&&r!==(r="btn "+d[3])&&m(t,"class",r),h[0]&2&&se(o,d[1]),h[0]&16&&l!==(l="btn "+d[4])&&m(a,"class",l),h[0]&128&&c!==(c="modal-footer "+d[7])&&m(e,"class",c)},d(d){d&&w(e),f=!1,tt(u)}}}function Cu(n){let e,t,i,r,s,a,o;return{c(){e=T("footer"),t=T("button"),i=ee(n[0]),this.h()},l(l){e=S(l,"FOOTER",{class:!0});var c=C(e);t=S(c,"BUTTON",{type:!0,class:!0});var f=C(t);i=te(f,n[0]),f.forEach(w),c.forEach(w),this.h()},h(){m(t,"type","button"),m(t,"class",r="btn "+n[3]),m(e,"class",s="modal-footer "+n[7])},m(l,c){j(l,e,c),I(e,t),I(t,i),a||(o=Y(t,"click",n[23]),a=!0)},p(l,c){c[0]&1&&se(i,l[0]),c[0]&8&&r!==(r="btn "+l[3])&&m(t,"class",r),c[0]&128&&s!==(s="modal-footer "+l[7])&&m(e,"class",s)},d(l){l&&w(e),a=!1,o()}}}function Ds(n){let e,t,i,r,s,a,o,l,c,f,u,d;const h=[ku,Eu],b=[];function y(_,g){return _[13][0].type!=="component"?0:1}return i=y(n),r=b[i]=h[i](n),{c(){e=T("div"),t=T("div"),r.c(),this.h()},l(_){e=S(_,"DIV",{class:!0,"data-testid":!0});var g=C(e);t=S(g,"DIV",{class:!0});var p=C(t);r.l(p),p.forEach(w),g.forEach(w),this.h()},h(){m(t,"class",s="modal-transition "+n[18]),m(e,"class",l="modal-backdrop "+n[19]),m(e,"data-testid","modal-backdrop")},m(_,g){j(_,e,g),I(e,t),b[i].m(t,null),f=!0,u||(d=[Y(e,"mousedown",n[21]),Y(e,"mouseup",n[22]),Y(e,"touchstart",n[39],{passive:!0}),Y(e,"touchend",n[40],{passive:!0}),rn(Pc.call(null,e,!0))],u=!0)},p(_,g){n=_;let p=i;i=y(n),i===p?b[i].p(n,g):(de(),N(b[p],1,1,()=>{b[p]=null}),he(),r=b[i],r?r.p(n,g):(r=b[i]=h[i](n),r.c()),R(r,1),r.m(t,null)),(!f||g[0]&262144&&s!==(s="modal-transition "+n[18]))&&m(t,"class",s),(!f||g[0]&524288&&l!==(l="modal-backdrop "+n[19]))&&m(e,"class",l)},i(_){f||(R(r),Ft(()=>{f&&(o&&o.end(1),a=lr(t,Lt,{transition:n[9],params:n[10],enabled:n[8]}),a.start())}),Ft(()=>{f&&(c||(c=gn(e,Lt,{transition:$r,params:{duration:150},enabled:n[8]},!0)),c.run(1))}),f=!0)},o(_){N(r),a&&a.invalidate(),o=cr(t,Lt,{transition:n[11],params:n[12],enabled:n[8]}),c||(c=gn(e,Lt,{transition:$r,params:{duration:150},enabled:n[8]},!1)),c.run(0),f=!1},d(_){_&&w(e),b[i].d(),_&&o&&o.end(),_&&c&&c.end(),u=!1,tt(d)}}}function Du(n){let e,t,i,r,s=n[13].length>0&&ks(n);return{c(){s&&s.c(),e=Oe()},l(a){s&&s.l(a),e=Oe()},m(a,o){s&&s.m(a,o),j(a,e,o),t=!0,i||(r=Y(window,"keydown",n[26]),i=!0)},p(a,o){a[13].length>0?s?(s.p(a,o),o[0]&8192&&R(s,1)):(s=ks(a),s.c(),R(s,1),s.m(e.parentNode,e)):s&&(de(),N(s,1,1,()=>{s=null}),he())},i(a){t||(R(s),t=!0)},o(a){N(s),t=!1},d(a){a&&w(e),s&&s.d(a),i=!1,r()}}}const Ru="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto",Pu="w-full h-fit min-h-full p-4 overflow-y-auto flex justify-center",Ou="block overflow-y-auto",Lu="w-full h-auto";function Mu(n,e,t){let i,r,s,a,o,l,c;Te(n,ur,z=>t(43,c=z));const f=vi();let{position:u="items-center"}=e,{components:d={}}=e,{background:h="bg-surface-100-800-token"}=e,{width:b="w-modal"}=e,{height:y="h-auto"}=e,{padding:_="p-4"}=e,{spacing:g="space-y-4"}=e,{rounded:p="rounded-container-token"}=e,{shadow:v="shadow-xl"}=e,{zIndex:E="z-[999]"}=e,{buttonNeutral:k="variant-ghost-surface"}=e,{buttonPositive:A="variant-filled"}=e,{buttonTextCancel:O="Cancel"}=e,{buttonTextConfirm:D="Confirm"}=e,{buttonTextSubmit:L="Submit"}=e,{regionBackdrop:P="bg-surface-backdrop-token"}=e,{regionHeader:J="text-2xl font-bold"}=e,{regionBody:B="max-h-[200px] overflow-hidden"}=e,{regionFooter:M="flex justify-end space-x-2"}=e,{transitions:q=!c}=e,{transitionIn:ne=pn}=e,{transitionInParams:Z={duration:150,opacity:0,x:0,y:100}}=e,{transitionOut:ue=pn}=e,{transitionOutParams:oe={duration:150,opacity:0,x:0,y:100}}=e,G;const H={buttonTextCancel:O,buttonTextConfirm:D,buttonTextSubmit:L};let W,V=!1;const re=hr();Te(n,re,z=>t(13,l=z)),re.subscribe(z=>{z.length&&(z[0].type==="prompt"&&t(14,G=z[0].value),t(0,O=z[0].buttonTextCancel||H.buttonTextCancel),t(1,D=z[0].buttonTextConfirm||H.buttonTextConfirm),t(2,L=z[0].buttonTextSubmit||H.buttonTextSubmit),t(15,W=typeof z[0].component=="string"?d[z[0].component]:z[0].component))});function le(z){if(!(z.target instanceof Element))return;const we=z.target.classList;(we.contains("modal-backdrop")||we.contains("modal-transition"))&&(V=!0)}function ce(z){if(!(z.target instanceof Element))return;const we=z.target.classList;(we.contains("modal-backdrop")||we.contains("modal-transition"))&&V&&(l[0].response&&l[0].response(void 0),re.close(),f("backdrop",z)),V=!1}function Me(){l[0].response&&l[0].response(!1),re.close()}function Ve(){l[0].response&&l[0].response(!0),re.close()}function De(z){z.preventDefault(),l[0].response&&l[0].response(G),re.close()}function Se(z){l.length&&z.code==="Escape"&&Me()}function K(z){pe.call(this,n,z)}function Re(z){pe.call(this,n,z)}function Pe(){G=this.value,t(14,G)}return n.$$set=z=>{t(46,e=Ce(Ce({},e),Be(z))),"position"in z&&t(27,u=z.position),"components"in z&&t(28,d=z.components),"background"in z&&t(29,h=z.background),"width"in z&&t(30,b=z.width),"height"in z&&t(31,y=z.height),"padding"in z&&t(32,_=z.padding),"spacing"in z&&t(33,g=z.spacing),"rounded"in z&&t(34,p=z.rounded),"shadow"in z&&t(35,v=z.shadow),"zIndex"in z&&t(36,E=z.zIndex),"buttonNeutral"in z&&t(3,k=z.buttonNeutral),"buttonPositive"in z&&t(4,A=z.buttonPositive),"buttonTextCancel"in z&&t(0,O=z.buttonTextCancel),"buttonTextConfirm"in z&&t(1,D=z.buttonTextConfirm),"buttonTextSubmit"in z&&t(2,L=z.buttonTextSubmit),"regionBackdrop"in z&&t(37,P=z.regionBackdrop),"regionHeader"in z&&t(5,J=z.regionHeader),"regionBody"in z&&t(6,B=z.regionBody),"regionFooter"in z&&t(7,M=z.regionFooter),"transitions"in z&&t(8,q=z.transitions),"transitionIn"in z&&t(9,ne=z.transitionIn),"transitionInParams"in z&&t(10,Z=z.transitionInParams),"transitionOut"in z&&t(11,ue=z.transitionOut),"transitionOutParams"in z&&t(12,oe=z.transitionOutParams)},n.$$.update=()=>{var z,we,He;n.$$.dirty[0]&134225920&&t(38,i=((z=l[0])==null?void 0:z.position)??u),t(19,r=`${Ru} ${P} ${E} ${e.class??""} ${((we=l[0])==null?void 0:we.backdropClasses)??""}`),n.$$.dirty[1]&128&&t(18,s=`${Pu} ${i??""}`),n.$$.dirty[0]&1610620928|n.$$.dirty[1]&31&&t(17,a=`${Ou} ${h} ${b} ${y} ${_} ${g} ${p} ${v} ${((He=l[0])==null?void 0:He.modalClasses)??""}`),n.$$.dirty[0]&1744830719|n.$$.dirty[1]&95&&t(16,o={position:u,background:h,width:b,height:y,padding:_,spacing:g,rounded:p,shadow:v,buttonNeutral:k,buttonPositive:A,buttonTextCancel:O,buttonTextConfirm:D,buttonTextSubmit:L,regionBackdrop:P,regionHeader:J,regionBody:B,regionFooter:M,onClose:Me})},e=Be(e),[O,D,L,k,A,J,B,M,q,ne,Z,ue,oe,l,G,W,o,a,s,r,re,le,ce,Me,Ve,De,Se,u,d,h,b,y,_,g,p,v,E,P,i,K,Re,Pe]}class Nu extends _e{constructor(e){super(),be(this,e,Mu,Du,ge,{position:27,components:28,background:29,width:30,height:31,padding:32,spacing:33,rounded:34,shadow:35,zIndex:36,buttonNeutral:3,buttonPositive:4,buttonTextCancel:0,buttonTextConfirm:1,buttonTextSubmit:2,regionBackdrop:37,regionHeader:5,regionBody:6,regionFooter:7,transitions:8,transitionIn:9,transitionInParams:10,transitionOut:11,transitionOutParams:12},null,[-1,-1])}}function Uu(n){let e,t=`<script nonce="%sveltekit.nonce%">(${tc.toString()})();<\/script>`,i,r,s,a,o,l,c,f,u,d,h,b,y;return{c(){e=new tn(!1),i=Oe(),r=U(),s=T("div"),a=T("div"),o=ii("svg"),l=ii("path"),this.h()},l(_){const g=Kl("svelte-gewkj4",document.head);e=nn(g,!1),i=Oe(),g.forEach(w),r=F(_),s=S(_,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var p=C(s);a=S(p,"DIV",{class:!0});var v=C(a);o=ri(v,"svg",{class:!0,xmlns:!0,viewBox:!0});var E=C(o);l=ri(E,"path",{d:!0}),C(l).forEach(w),E.forEach(w),v.forEach(w),p.forEach(w),this.h()},h(){e.a=i,m(l,"d",c=n[0]?n[4].sun:n[4].moon),m(o,"class",f="lightswitch-icon "+n[1]),m(o,"xmlns","http://www.w3.org/2000/svg"),m(o,"viewBox","0 0 512 512"),m(a,"class",u="lightswitch-thumb "+n[2]),m(s,"class",d="lightswitch-track "+n[3]),m(s,"role","switch"),m(s,"aria-label","Light Switch"),m(s,"aria-checked",n[0]),m(s,"title",h="Toggle "+(n[0]===!0?"Dark":"Light")+" Mode"),m(s,"tabindex","0")},m(_,g){e.m(t,document.head),I(document.head,i),j(_,r,g),j(_,s,g),I(s,a),I(a,o),I(o,l),b||(y=[Y(s,"click",n[5]),Y(s,"click",n[18]),Y(s,"keydown",Hu),Y(s,"keydown",n[19]),Y(s,"keyup",n[20]),Y(s,"keypress",n[21])],b=!0)},p(_,[g]){g&1&&c!==(c=_[0]?_[4].sun:_[4].moon)&&m(l,"d",c),g&2&&f!==(f="lightswitch-icon "+_[1])&&m(o,"class",f),g&4&&u!==(u="lightswitch-thumb "+_[2])&&m(a,"class",u),g&8&&d!==(d="lightswitch-track "+_[3])&&m(s,"class",d),g&1&&m(s,"aria-checked",_[0]),g&1&&h!==(h="Toggle "+(_[0]===!0?"Dark":"Light")+" Mode")&&m(s,"title",h)},i:me,o:me,d(_){_&&(e.d(),w(r),w(s)),w(i),b=!1,tt(y)}}}const Fu="cursor-pointer",Bu="aspect-square scale-[0.8] flex justify-center items-center",Vu="w-[70%] aspect-square";function Hu(n){["Enter","Space"].includes(n.code)&&(n.preventDefault(),n.currentTarget.click())}function ju(n,e,t){let i,r,s,a,o,l,c,f;Te(n,Cn,P=>t(0,f=P));let{bgLight:u="bg-surface-50"}=e,{bgDark:d="bg-surface-900"}=e,{fillLight:h="fill-surface-50"}=e,{fillDark:b="fill-surface-900"}=e,{width:y="w-12"}=e,{height:_="h-6"}=e,{ring:g="ring-[1px] ring-surface-500/30"}=e,{rounded:p="rounded-token"}=e;const v="transition-all duration-[200ms]",E={sun:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",moon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"};function k(){Qa(Cn,f=!f,f),ic(f),Yr(f)}or(()=>{"modeCurrent"in localStorage||Yr(nc())});function A(P){pe.call(this,n,P)}function O(P){pe.call(this,n,P)}function D(P){pe.call(this,n,P)}function L(P){pe.call(this,n,P)}return n.$$set=P=>{t(23,e=Ce(Ce({},e),Be(P))),"bgLight"in P&&t(6,u=P.bgLight),"bgDark"in P&&t(7,d=P.bgDark),"fillLight"in P&&t(8,h=P.fillLight),"fillDark"in P&&t(9,b=P.fillDark),"width"in P&&t(10,y=P.width),"height"in P&&t(11,_=P.height),"ring"in P&&t(12,g=P.ring),"rounded"in P&&t(13,p=P.rounded)},n.$$.update=()=>{n.$$.dirty&193&&t(17,i=f===!0?u:d),n.$$.dirty&193&&t(16,r=f===!0?d:u),n.$$.dirty&1&&t(15,s=f===!0?"translate-x-[100%]":""),n.$$.dirty&769&&t(14,a=f===!0?h:b),t(3,o=`${Fu} ${v} ${y} ${_} ${g} ${p} ${i} ${e.class??""}`),n.$$.dirty&108544&&t(2,l=`${Bu} ${v} ${_} ${p} ${r} ${s}`),n.$$.dirty&16384&&t(1,c=`${Vu} ${a}`)},e=Be(e),[f,c,l,o,E,k,u,d,h,b,y,_,g,p,a,s,r,i,A,O,D,L]}class zu extends _e{constructor(e){super(),be(this,e,ju,Uu,ge,{bgLight:6,bgDark:7,fillLight:8,fillDark:9,width:10,height:11,ring:12,rounded:13})}}function Rs(n,e,t){const i=n.slice();return i[36]=e[t],i[38]=t,i}function Ps(n){let e,t,i=[],r=new Map,s,a,o,l=Le(n[11]);const c=f=>f[36];for(let f=0;f<l.length;f+=1){let u=Rs(n,l,f),d=c(u);r.set(d,i[f]=Ns(d,u))}return{c(){e=T("div"),t=T("div");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=S(f,"DIV",{class:!0,"data-testid":!0});var u=C(e);t=S(u,"DIV",{class:!0});var d=C(t);for(let h=0;h<i.length;h+=1)i[h].l(d);d.forEach(w),u.forEach(w),this.h()},h(){m(t,"class",s="snackbar "+n[13]),m(e,"class",a="snackbar-wrapper "+n[14]),m(e,"data-testid","snackbar-wrapper")},m(f,u){j(f,e,u),I(e,t);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(t,null);o=!0},p(f,u){if(u[0]&499103){l=Le(f[11]),de();for(let d=0;d<i.length;d+=1)i[d].r();i=fr(i,u,c,1,f,l,r,t,Za,Ns,null,Rs);for(let d=0;d<i.length;d+=1)i[d].a();he()}(!o||u[0]&8192&&s!==(s="snackbar "+f[13]))&&m(t,"class",s),(!o||u[0]&16384&&a!==(a="snackbar-wrapper "+f[14]))&&m(e,"class",a)},i(f){if(!o){for(let u=0;u<l.length;u+=1)R(i[u]);o=!0}},o(f){for(let u=0;u<i.length;u+=1)N(i[u]);o=!1},d(f){f&&w(e);for(let u=0;u<i.length;u+=1)i[u].d()}}}function Os(n){let e,t,i=n[36].action&&Ls(n),r=!n[36].hideDismiss&&Ms(n);return{c(){e=T("div"),i&&i.c(),t=U(),r&&r.c(),this.h()},l(s){e=S(s,"DIV",{class:!0});var a=C(e);i&&i.l(a),t=F(a),r&&r.l(a),a.forEach(w),this.h()},h(){m(e,"class","toast-actions "+Ju)},m(s,a){j(s,e,a),i&&i.m(e,null),I(e,t),r&&r.m(e,null)},p(s,a){s[36].action?i?i.p(s,a):(i=Ls(s),i.c(),i.m(e,t)):i&&(i.d(1),i=null),s[36].hideDismiss?r&&(r.d(1),r=null):r?r.p(s,a):(r=Ms(s),r.c(),r.m(e,null))},d(s){s&&w(e),i&&i.d(),r&&r.d()}}}function Ls(n){let e,t,i=n[36].action.label+"",r,s;function a(){return n[30](n[38])}return{c(){e=T("button"),t=new tn(!1),this.h()},l(o){e=S(o,"BUTTON",{class:!0});var l=C(e);t=nn(l,!1),l.forEach(w),this.h()},h(){t.a=null,m(e,"class",n[1])},m(o,l){j(o,e,l),t.m(i,e),r||(s=Y(e,"click",a),r=!0)},p(o,l){n=o,l[0]&2048&&i!==(i=n[36].action.label+"")&&t.p(i),l[0]&2&&m(e,"class",n[1])},d(o){o&&w(e),r=!1,s()}}}function Ms(n){let e,t,i,r;function s(){return n[31](n[36])}return{c(){e=T("button"),t=ee(n[3]),this.h()},l(a){e=S(a,"BUTTON",{class:!0,"aria-label":!0});var o=C(e);t=te(o,n[3]),o.forEach(w),this.h()},h(){m(e,"class",n[2]),m(e,"aria-label","Dismiss toast")},m(a,o){j(a,e,o),I(e,t),i||(r=Y(e,"click",s),i=!0)},p(a,o){n=a,o[0]&8&&se(t,n[3]),o[0]&4&&m(e,"class",n[2])},d(a){a&&w(e),i=!1,r()}}}function Ns(n,e){let t,i,r,s,a=e[36].message+"",o,l,c,f,u,d,h,b=me,y,_,g,p=(e[36].action||!e[36].hideDismiss)&&Os(e);function v(){return e[32](e[38])}function E(){return e[33](e[38])}return{key:n,first:null,c(){t=T("div"),i=T("div"),r=T("div"),s=new tn(!1),o=U(),p&&p.c(),c=U(),this.h()},l(k){t=S(k,"DIV",{role:!0,"aria-live":!0});var A=C(t);i=S(A,"DIV",{class:!0,"data-testid":!0});var O=C(i);r=S(O,"DIV",{class:!0});var D=C(r);s=nn(D,!1),D.forEach(w),o=F(O),p&&p.l(O),O.forEach(w),c=F(A),A.forEach(w),this.h()},h(){s.a=null,m(r,"class","text-base"),m(i,"class",l="toast "+e[12]+" "+(e[36].background??e[0])+" "+(e[36].classes??"")),m(i,"data-testid","toast"),m(t,"role",f=e[36].hideDismiss?"alert":"alertdialog"),m(t,"aria-live","polite"),this.first=t},m(k,A){j(k,t,A),I(t,i),I(i,r),s.m(a,r),I(i,o),p&&p.m(i,null),I(t,c),y=!0,_||(g=[Y(t,"mouseenter",v),Y(t,"mouseleave",E)],_=!0)},p(k,A){e=k,(!y||A[0]&2048)&&a!==(a=e[36].message+"")&&s.p(a),e[36].action||!e[36].hideDismiss?p?p.p(e,A):(p=Os(e),p.c(),p.m(i,null)):p&&(p.d(1),p=null),(!y||A[0]&6145&&l!==(l="toast "+e[12]+" "+(e[36].background??e[0])+" "+(e[36].classes??"")))&&m(i,"class",l),(!y||A[0]&2048&&f!==(f=e[36].hideDismiss?"alert":"alertdialog"))&&m(t,"role",f)},r(){h=t.getBoundingClientRect()},f(){io(t),b(),ro(t,h)},a(){b(),b=no(t,h,co,{duration:e[4]?250:0})},i(k){y||(Ft(()=>{y&&(d&&d.end(1),u=lr(t,Lt,{transition:e[5],params:{x:e[10].x,y:e[10].y,...e[6]},enabled:e[4]}),u.start())}),y=!0)},o(k){u&&u.invalidate(),d=cr(t,Lt,{transition:e[7],params:{x:e[10].x,y:e[10].y,...e[8]},enabled:e[4]}),y=!1},d(k){k&&w(t),p&&p.d(),k&&d&&d.end(),_=!1,tt(g)}}}function Wu(n){let e,t,i=n[9].length&&Ps(n);return{c(){i&&i.c(),e=Oe()},l(r){i&&i.l(r),e=Oe()},m(r,s){i&&i.m(r,s),j(r,e,s),t=!0},p(r,s){r[9].length?i?(i.p(r,s),s[0]&512&&R(i,1)):(i=Ps(r),i.c(),R(i,1),i.m(e.parentNode,e)):i&&(de(),N(i,1,1,()=>{i=null}),he())},i(r){t||(R(i),t=!0)},o(r){N(i),t=!1},d(r){r&&w(e),i&&i.d(r)}}}const qu="flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none",Ku="flex flex-col gap-y-2",Gu="flex justify-between items-center pointer-events-auto",Ju="flex items-center space-x-2";function Yu(n,e,t){let i,r,s,a,o,l;Te(n,ur,V=>t(34,l=V));const c=Kt();Te(n,c,V=>t(9,o=V));let{position:f="b"}=e,{max:u=3}=e,{background:d="variant-filled-secondary"}=e,{width:h="max-w-[640px]"}=e,{color:b=""}=e,{padding:y="p-4"}=e,{spacing:_="space-x-4"}=e,{rounded:g="rounded-container-token"}=e,{shadow:p="shadow-lg"}=e,{zIndex:v="z-[888]"}=e,{buttonAction:E="btn variant-filled"}=e,{buttonDismiss:k="btn-icon btn-icon-sm variant-filled"}=e,{buttonDismissLabel:A="✕"}=e,{transitions:O=!l}=e,{transitionIn:D=pn}=e,{transitionInParams:L={duration:250}}=e,{transitionOut:P=pn}=e,{transitionOutParams:J={duration:250}}=e,B,M,q={x:0,y:0};switch(f){case"t":B="justify-center items-start",M="items-center",q={x:0,y:-100};break;case"b":B="justify-center items-end",M="items-center",q={x:0,y:100};break;case"l":B="justify-start items-center",M="items-start",q={x:-100,y:0};break;case"r":B="justify-end items-center",M="items-end",q={x:100,y:0};break;case"tl":B="justify-start items-start",M="items-start",q={x:-100,y:0};break;case"tr":B="justify-end items-start",M="items-end",q={x:100,y:0};break;case"bl":B="justify-start items-end",M="items-start",q={x:-100,y:0};break;case"br":B="justify-end items-end",M="items-end",q={x:100,y:0};break}function ne(V){var re,le;(le=(re=o[V])==null?void 0:re.action)==null||le.response(),c.close(o[V].id)}function Z(V){var re;(re=o[V])!=null&&re.hoverable&&(c.freeze(V),t(13,r+=" scale-[105%]"))}function ue(V){var re;(re=o[V])!=null&&re.hoverable&&(c.unfreeze(V),t(13,r=r.replace(" scale-[105%]","")))}const oe=V=>ne(V),G=V=>c.close(V.id),H=V=>Z(V),W=V=>ue(V);return n.$$set=V=>{t(35,e=Ce(Ce({},e),Be(V))),"position"in V&&t(19,f=V.position),"max"in V&&t(20,u=V.max),"background"in V&&t(0,d=V.background),"width"in V&&t(21,h=V.width),"color"in V&&t(22,b=V.color),"padding"in V&&t(23,y=V.padding),"spacing"in V&&t(24,_=V.spacing),"rounded"in V&&t(25,g=V.rounded),"shadow"in V&&t(26,p=V.shadow),"zIndex"in V&&t(27,v=V.zIndex),"buttonAction"in V&&t(1,E=V.buttonAction),"buttonDismiss"in V&&t(2,k=V.buttonDismiss),"buttonDismissLabel"in V&&t(3,A=V.buttonDismissLabel),"transitions"in V&&t(4,O=V.transitions),"transitionIn"in V&&t(5,D=V.transitionIn),"transitionInParams"in V&&t(6,L=V.transitionInParams),"transitionOut"in V&&t(7,P=V.transitionOut),"transitionOutParams"in V&&t(8,J=V.transitionOutParams)},n.$$.update=()=>{t(14,i=`${qu} ${B} ${v} ${e.class||""}`),n.$$.dirty[0]&545259520&&t(13,r=`${Ku} ${M} ${y}`),n.$$.dirty[0]&132120576&&t(12,s=`${Gu} ${h} ${b} ${y} ${_} ${g} ${p}`),n.$$.dirty[0]&1049088&&t(11,a=Array.from(o).slice(0,u))},e=Be(e),[d,E,k,A,O,D,L,P,J,o,q,a,s,r,i,c,ne,Z,ue,f,u,h,b,y,_,g,p,v,B,M,oe,G,H,W]}class Xu extends _e{constructor(e){super(),be(this,e,Yu,Wu,ge,{position:19,max:20,background:0,width:21,color:22,padding:23,spacing:24,rounded:25,shadow:26,zIndex:27,buttonAction:1,buttonDismiss:2,buttonDismissLabel:3,transitions:4,transitionIn:5,transitionInParams:6,transitionOut:7,transitionOutParams:8},null,[-1,-1])}}const _n=Math.min,Gt=Math.max,ai=Math.round,Yn=Math.floor,Bt=n=>({x:n,y:n}),xu={left:"right",right:"left",bottom:"top",top:"bottom"},Qu={start:"end",end:"start"};function Ji(n,e,t){return Gt(n,_n(e,t))}function Ln(n,e){return typeof n=="function"?n(e):n}function Xt(n){return n.split("-")[0]}function Mn(n){return n.split("-")[1]}function uo(n){return n==="x"?"y":"x"}function mr(n){return n==="y"?"height":"width"}function ki(n){return["top","bottom"].includes(Xt(n))?"y":"x"}function gr(n){return uo(ki(n))}function Zu(n,e,t){t===void 0&&(t=!1);const i=Mn(n),r=gr(n),s=mr(r);let a=r==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(a=oi(a)),[a,oi(a)]}function $u(n){const e=oi(n);return[Yi(n),e,Yi(e)]}function Yi(n){return n.replace(/start|end/g,e=>Qu[e])}function ef(n,e,t){const i=["left","right"],r=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(n){case"top":case"bottom":return t?e?r:i:e?i:r;case"left":case"right":return e?s:a;default:return[]}}function tf(n,e,t,i){const r=Mn(n);let s=ef(Xt(n),t==="start",i);return r&&(s=s.map(a=>a+"-"+r),e&&(s=s.concat(s.map(Yi)))),s}function oi(n){return n.replace(/left|right|bottom|top/g,e=>xu[e])}function nf(n){return{top:0,right:0,bottom:0,left:0,...n}}function fo(n){return typeof n!="number"?nf(n):{top:n,right:n,bottom:n,left:n}}function li(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function Us(n,e,t){let{reference:i,floating:r}=n;const s=ki(e),a=gr(e),o=mr(a),l=Xt(e),c=s==="y",f=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,d=i[o]/2-r[o]/2;let h;switch(l){case"top":h={x:f,y:i.y-r.height};break;case"bottom":h={x:f,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:u};break;case"left":h={x:i.x-r.width,y:u};break;default:h={x:i.x,y:i.y}}switch(Mn(e)){case"start":h[a]-=d*(t&&c?-1:1);break;case"end":h[a]+=d*(t&&c?-1:1);break}return h}const rf=async(n,e,t)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:a}=t,o=s.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let c=await a.getElementRects({reference:n,floating:e,strategy:r}),{x:f,y:u}=Us(c,i,l),d=i,h={},b=0;for(let y=0;y<o.length;y++){const{name:_,fn:g}=o[y],{x:p,y:v,data:E,reset:k}=await g({x:f,y:u,initialPlacement:i,placement:d,strategy:r,middlewareData:h,rects:c,platform:a,elements:{reference:n,floating:e}});if(f=p??f,u=v??u,h={...h,[_]:{...h[_],...E}},k&&b<=50){b++,typeof k=="object"&&(k.placement&&(d=k.placement),k.rects&&(c=k.rects===!0?await a.getElementRects({reference:n,floating:e,strategy:r}):k.rects),{x:f,y:u}=Us(c,d,l)),y=-1;continue}}return{x:f,y:u,placement:d,strategy:r,middlewareData:h}};async function ho(n,e){var t;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:a,elements:o,strategy:l}=n,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:d=!1,padding:h=0}=Ln(e,n),b=fo(h),_=o[d?u==="floating"?"reference":"floating":u],g=li(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(_)))==null||t?_:_.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(o.floating)),boundary:c,rootBoundary:f,strategy:l})),p=u==="floating"?{...a.floating,x:i,y:r}:a.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(o.floating)),E=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},k=li(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:p,offsetParent:v,strategy:l}):p);return{top:(g.top-k.top+b.top)/E.y,bottom:(k.bottom-g.bottom+b.bottom)/E.y,left:(g.left-k.left+b.left)/E.x,right:(k.right-g.right+b.right)/E.x}}const sf=n=>({name:"arrow",options:n,async fn(e){const{x:t,y:i,placement:r,rects:s,platform:a,elements:o}=e,{element:l,padding:c=0}=Ln(n,e)||{};if(l==null)return{};const f=fo(c),u={x:t,y:i},d=gr(r),h=mr(d),b=await a.getDimensions(l),y=d==="y",_=y?"top":"left",g=y?"bottom":"right",p=y?"clientHeight":"clientWidth",v=s.reference[h]+s.reference[d]-u[d]-s.floating[h],E=u[d]-s.reference[d],k=await(a.getOffsetParent==null?void 0:a.getOffsetParent(l));let A=k?k[p]:0;(!A||!await(a.isElement==null?void 0:a.isElement(k)))&&(A=o.floating[p]||s.floating[h]);const O=v/2-E/2,D=A/2-b[h]/2-1,L=_n(f[_],D),P=_n(f[g],D),J=L,B=A-b[h]-P,M=A/2-b[h]/2+O,q=Ji(J,M,B),Z=Mn(r)!=null&&M!=q&&s.reference[h]/2-(M<J?L:P)-b[h]/2<0?M<J?J-M:B-M:0;return{[d]:u[d]-Z,data:{[d]:q,centerOffset:M-q+Z}}}}),af=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var t;const{placement:i,middlewareData:r,rects:s,initialPlacement:a,platform:o,elements:l}=e,{mainAxis:c=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:b=!0,...y}=Ln(n,e),_=Xt(i),g=Xt(a)===a,p=await(o.isRTL==null?void 0:o.isRTL(l.floating)),v=u||(g||!b?[oi(a)]:$u(a));!u&&h!=="none"&&v.push(...tf(a,b,h,p));const E=[a,...v],k=await ho(e,y),A=[];let O=((t=r.flip)==null?void 0:t.overflows)||[];if(c&&A.push(k[_]),f){const J=Zu(i,s,p);A.push(k[J[0]],k[J[1]])}if(O=[...O,{placement:i,overflows:A}],!A.every(J=>J<=0)){var D,L;const J=(((D=r.flip)==null?void 0:D.index)||0)+1,B=E[J];if(B)return{data:{index:J,overflows:O},reset:{placement:B}};let M=(L=O.filter(q=>q.overflows[0]<=0).sort((q,ne)=>q.overflows[1]-ne.overflows[1])[0])==null?void 0:L.placement;if(!M)switch(d){case"bestFit":{var P;const q=(P=O.map(ne=>[ne.placement,ne.overflows.filter(Z=>Z>0).reduce((Z,ue)=>Z+ue,0)]).sort((ne,Z)=>ne[1]-Z[1])[0])==null?void 0:P[0];q&&(M=q);break}case"initialPlacement":M=a;break}if(i!==M)return{reset:{placement:M}}}return{}}}};async function of(n,e){const{placement:t,platform:i,elements:r}=n,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),a=Xt(t),o=Mn(t),l=ki(t)==="y",c=["left","top"].includes(a)?-1:1,f=s&&l?-1:1,u=Ln(e,n);let{mainAxis:d,crossAxis:h,alignmentAxis:b}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return o&&typeof b=="number"&&(h=o==="end"?b*-1:b),l?{x:h*f,y:d*c}:{x:d*c,y:h*f}}const lf=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){const{x:t,y:i}=e,r=await of(e,n);return{x:t+r.x,y:i+r.y,data:r}}}},cf=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:t,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:o={fn:_=>{let{x:g,y:p}=_;return{x:g,y:p}}},...l}=Ln(n,e),c={x:t,y:i},f=await ho(e,l),u=ki(Xt(r)),d=uo(u);let h=c[d],b=c[u];if(s){const _=d==="y"?"top":"left",g=d==="y"?"bottom":"right",p=h+f[_],v=h-f[g];h=Ji(p,h,v)}if(a){const _=u==="y"?"top":"left",g=u==="y"?"bottom":"right",p=b+f[_],v=b-f[g];b=Ji(p,b,v)}const y=o.fn({...e,[d]:h,[u]:b});return{...y,data:{x:y.x-t,y:y.y-i}}}}};function Vt(n){return mo(n)?(n.nodeName||"").toLowerCase():"#document"}function $e(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Et(n){var e;return(e=(mo(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function mo(n){return n instanceof Node||n instanceof $e(n).Node}function yt(n){return n instanceof Element||n instanceof $e(n).Element}function ft(n){return n instanceof HTMLElement||n instanceof $e(n).HTMLElement}function Fs(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof $e(n).ShadowRoot}function Nn(n){const{overflow:e,overflowX:t,overflowY:i,display:r}=it(n);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(r)}function uf(n){return["table","td","th"].includes(Vt(n))}function pr(n){const e=_r(),t=it(n);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function ff(n){let e=bn(n);for(;ft(e)&&!Ti(e);){if(pr(e))return e;e=bn(e)}return null}function _r(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ti(n){return["html","body","#document"].includes(Vt(n))}function it(n){return $e(n).getComputedStyle(n)}function Si(n){return yt(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function bn(n){if(Vt(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Fs(n)&&n.host||Et(n);return Fs(e)?e.host:e}function go(n){const e=bn(n);return Ti(e)?n.ownerDocument?n.ownerDocument.body:n.body:ft(e)&&Nn(e)?e:go(e)}function ci(n,e){var t;e===void 0&&(e=[]);const i=go(n),r=i===((t=n.ownerDocument)==null?void 0:t.body),s=$e(i);return r?e.concat(s,s.visualViewport||[],Nn(i)?i:[]):e.concat(i,ci(i))}function po(n){const e=it(n);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=ft(n),s=r?n.offsetWidth:t,a=r?n.offsetHeight:i,o=ai(t)!==s||ai(i)!==a;return o&&(t=s,i=a),{width:t,height:i,$:o}}function br(n){return yt(n)?n:n.contextElement}function un(n){const e=br(n);if(!ft(e))return Bt(1);const t=e.getBoundingClientRect(),{width:i,height:r,$:s}=po(e);let a=(s?ai(t.width):t.width)/i,o=(s?ai(t.height):t.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const df=Bt(0);function _o(n){const e=$e(n);return!_r()||!e.visualViewport?df:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function hf(n,e,t){return e===void 0&&(e=!1),!t||e&&t!==$e(n)?!1:e}function xt(n,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const r=n.getBoundingClientRect(),s=br(n);let a=Bt(1);e&&(i?yt(i)&&(a=un(i)):a=un(n));const o=hf(s,t,i)?_o(s):Bt(0);let l=(r.left+o.x)/a.x,c=(r.top+o.y)/a.y,f=r.width/a.x,u=r.height/a.y;if(s){const d=$e(s),h=i&&yt(i)?$e(i):i;let b=d.frameElement;for(;b&&i&&h!==d;){const y=un(b),_=b.getBoundingClientRect(),g=it(b),p=_.left+(b.clientLeft+parseFloat(g.paddingLeft))*y.x,v=_.top+(b.clientTop+parseFloat(g.paddingTop))*y.y;l*=y.x,c*=y.y,f*=y.x,u*=y.y,l+=p,c+=v,b=$e(b).frameElement}}return li({width:f,height:u,x:l,y:c})}function mf(n){let{rect:e,offsetParent:t,strategy:i}=n;const r=ft(t),s=Et(t);if(t===s)return e;let a={scrollLeft:0,scrollTop:0},o=Bt(1);const l=Bt(0);if((r||!r&&i!=="fixed")&&((Vt(t)!=="body"||Nn(s))&&(a=Si(t)),ft(t))){const c=xt(t);o=un(t),l.x=c.x+t.clientLeft,l.y=c.y+t.clientTop}return{width:e.width*o.x,height:e.height*o.y,x:e.x*o.x-a.scrollLeft*o.x+l.x,y:e.y*o.y-a.scrollTop*o.y+l.y}}function gf(n){return Array.from(n.getClientRects())}function bo(n){return xt(Et(n)).left+Si(n).scrollLeft}function pf(n){const e=Et(n),t=Si(n),i=n.ownerDocument.body,r=Gt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=Gt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-t.scrollLeft+bo(n);const o=-t.scrollTop;return it(i).direction==="rtl"&&(a+=Gt(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:a,y:o}}function _f(n,e){const t=$e(n),i=Et(n),r=t.visualViewport;let s=i.clientWidth,a=i.clientHeight,o=0,l=0;if(r){s=r.width,a=r.height;const c=_r();(!c||c&&e==="fixed")&&(o=r.offsetLeft,l=r.offsetTop)}return{width:s,height:a,x:o,y:l}}function bf(n,e){const t=xt(n,!0,e==="fixed"),i=t.top+n.clientTop,r=t.left+n.clientLeft,s=ft(n)?un(n):Bt(1),a=n.clientWidth*s.x,o=n.clientHeight*s.y,l=r*s.x,c=i*s.y;return{width:a,height:o,x:l,y:c}}function Bs(n,e,t){let i;if(e==="viewport")i=_f(n,t);else if(e==="document")i=pf(Et(n));else if(yt(e))i=bf(e,t);else{const r=_o(n);i={...e,x:e.x-r.x,y:e.y-r.y}}return li(i)}function vo(n,e){const t=bn(n);return t===e||!yt(t)||Ti(t)?!1:it(t).position==="fixed"||vo(t,e)}function vf(n,e){const t=e.get(n);if(t)return t;let i=ci(n).filter(o=>yt(o)&&Vt(o)!=="body"),r=null;const s=it(n).position==="fixed";let a=s?bn(n):n;for(;yt(a)&&!Ti(a);){const o=it(a),l=pr(a);!l&&o.position==="fixed"&&(r=null),(s?!l&&!r:!l&&o.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Nn(a)&&!l&&vo(n,a))?i=i.filter(f=>f!==a):r=o,a=bn(a)}return e.set(n,i),i}function yf(n){let{element:e,boundary:t,rootBoundary:i,strategy:r}=n;const a=[...t==="clippingAncestors"?vf(e,this._c):[].concat(t),i],o=a[0],l=a.reduce((c,f)=>{const u=Bs(e,f,r);return c.top=Gt(u.top,c.top),c.right=_n(u.right,c.right),c.bottom=_n(u.bottom,c.bottom),c.left=Gt(u.left,c.left),c},Bs(e,o,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function If(n){return po(n)}function wf(n,e,t){const i=ft(e),r=Et(e),s=t==="fixed",a=xt(n,!0,s,e);let o={scrollLeft:0,scrollTop:0};const l=Bt(0);if(i||!i&&!s)if((Vt(e)!=="body"||Nn(r))&&(o=Si(e)),i){const c=xt(e,!0,s,e);l.x=c.x+e.clientLeft,l.y=c.y+e.clientTop}else r&&(l.x=bo(r));return{x:a.left+o.scrollLeft-l.x,y:a.top+o.scrollTop-l.y,width:a.width,height:a.height}}function Vs(n,e){return!ft(n)||it(n).position==="fixed"?null:e?e(n):n.offsetParent}function yo(n,e){const t=$e(n);if(!ft(n))return t;let i=Vs(n,e);for(;i&&uf(i)&&it(i).position==="static";)i=Vs(i,e);return i&&(Vt(i)==="html"||Vt(i)==="body"&&it(i).position==="static"&&!pr(i))?t:i||ff(n)||t}const Ef=async function(n){let{reference:e,floating:t,strategy:i}=n;const r=this.getOffsetParent||yo,s=this.getDimensions;return{reference:wf(e,await r(t),i),floating:{x:0,y:0,...await s(t)}}};function kf(n){return it(n).direction==="rtl"}const Tf={convertOffsetParentRelativeRectToViewportRelativeRect:mf,getDocumentElement:Et,getClippingRect:yf,getOffsetParent:yo,getElementRects:Ef,getClientRects:gf,getDimensions:If,getScale:un,isElement:yt,isRTL:kf};function Sf(n,e){let t=null,i;const r=Et(n);function s(){clearTimeout(i),t&&t.disconnect(),t=null}function a(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),s();const{left:c,top:f,width:u,height:d}=n.getBoundingClientRect();if(o||e(),!u||!d)return;const h=Yn(f),b=Yn(r.clientWidth-(c+u)),y=Yn(r.clientHeight-(f+d)),_=Yn(c),p={rootMargin:-h+"px "+-b+"px "+-y+"px "+-_+"px",threshold:Gt(0,_n(1,l))||1};let v=!0;function E(k){const A=k[0].intersectionRatio;if(A!==l){if(!v)return a();A?a(!1,A):i=setTimeout(()=>{a(!1,1e-7)},100)}v=!1}try{t=new IntersectionObserver(E,{...p,root:r.ownerDocument})}catch{t=new IntersectionObserver(E,p)}t.observe(n)}return a(!0),s}function Af(n,e,t,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=br(n),f=r||s?[...c?ci(c):[],...ci(e)]:[];f.forEach(g=>{r&&g.addEventListener("scroll",t,{passive:!0}),s&&g.addEventListener("resize",t)});const u=c&&o?Sf(c,t):null;let d=-1,h=null;a&&(h=new ResizeObserver(g=>{let[p]=g;p&&p.target===c&&h&&(h.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{h&&h.observe(e)})),t()}),c&&!l&&h.observe(c),h.observe(e));let b,y=l?xt(n):null;l&&_();function _(){const g=xt(n);y&&(g.x!==y.x||g.y!==y.y||g.width!==y.width||g.height!==y.height)&&t(),y=g,b=requestAnimationFrame(_)}return t(),()=>{f.forEach(g=>{r&&g.removeEventListener("scroll",t),s&&g.removeEventListener("resize",t)}),u&&u(),h&&h.disconnect(),h=null,l&&cancelAnimationFrame(b)}}const Cf=(n,e,t)=>{const i=new Map,r={platform:Tf,...t},s={...r.platform,_c:i};return rf(n,e,{...r,platform:s})},Df=""+new URL("../assets/vpsLogo.a05dfbbc.png",import.meta.url).href;/**
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
 */const Io=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Rf=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],a=n[t++],o=n[t++],l=((r&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return e.join("")},wo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],a=r+1<n.length,o=a?n[r+1]:0,l=r+2<n.length,c=l?n[r+2]:0,f=s>>2,u=(s&3)<<4|o>>4;let d=(o&15)<<2|c>>6,h=c&63;l||(h=64,a||(d=64)),i.push(t[f],t[u],t[d],t[h])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Io(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Rf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],o=r<n.length?t[n.charAt(r)]:0;++r;const c=r<n.length?t[n.charAt(r)]:64;++r;const u=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||o==null||c==null||u==null)throw new Pf;const d=s<<2|o>>4;if(i.push(d),c!==64){const h=o<<4&240|c>>2;if(i.push(h),u!==64){const b=c<<6&192|u;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Of=function(n){const e=Io(n);return wo.encodeByteArray(e,!0)},Eo=function(n){return Of(n).replace(/\./g,"")},ko=function(n){try{return wo.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mf=()=>Lf().__FIREBASE_DEFAULTS__,Nf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Uf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ko(n[1]);return e&&JSON.parse(e)},vr=()=>{try{return Mf()||Nf()||Uf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ff=n=>{var e,t;return(t=(e=vr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},To=()=>{var n;return(n=vr())===null||n===void 0?void 0:n.config},So=n=>{var e;return(e=vr())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Bf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function Ao(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Hf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jf(){const n=Ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Co(){try{return typeof indexedDB=="object"}catch{return!1}}function Do(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function zf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Wf="FirebaseError";class mt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Wf,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,an.prototype.create)}}class an{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],a=s?qf(s,i):"Error",o=`${this.serviceName}: ${a} (${r}).`;return new mt(r,o,i)}}function qf(n,e){return n.replace(Kf,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Kf=/\{\$([^}]+)}/g;function Gf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Dn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],a=e[r];if(Hs(s)&&Hs(a)){if(!Dn(s,a))return!1}else if(s!==a)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Hs(n){return n!==null&&typeof n=="object"}/**
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
 */function Un(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Jf(n,e){const t=new Yf(n,e);return t.subscribe.bind(t)}class Yf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Xf(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Mi),r.error===void 0&&(r.error=Mi),r.complete===void 0&&(r.complete=Mi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Mi(){}/**
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
 */const xf=1e3,Qf=2,Zf=4*60*60*1e3,$f=.5;function js(n,e=xf,t=Qf){const i=e*Math.pow(t,n),r=Math.round($f*i*(Math.random()-.5)*2);return Math.min(Zf,i+r)}/**
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
 */function kt(n){return n&&n._delegate?n._delegate:n}class dt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zt="[DEFAULT]";/**
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
 */class ed{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Bf;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nd(e))try{this.getOrInitializeService({instanceIdentifier:zt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zt){return this.instances.has(e)}getOptions(e=zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);i===o&&a.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&e(a,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:td(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=zt){return this.component?this.component.multipleInstances?e:zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function td(n){return n===zt?void 0:n}function nd(n){return n.instantiationMode==="EAGER"}/**
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
 */class id{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ed(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ye||(ye={}));const rd={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},sd=ye.INFO,ad={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},od=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=ad[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yr{constructor(e){this.name=e,this._logLevel=sd,this._logHandler=od,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const ld=(n,e)=>e.some(t=>n instanceof t);let zs,Ws;function cd(){return zs||(zs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ud(){return Ws||(Ws=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ro=new WeakMap,Xi=new WeakMap,Po=new WeakMap,Ni=new WeakMap,Ir=new WeakMap;function fd(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Mt(n.result)),r()},a=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ro.set(t,n)}).catch(()=>{}),Ir.set(e,n),e}function dd(n){if(Xi.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),r()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Xi.set(n,e)}let xi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Po.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hd(n){xi=n(xi)}function md(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ui(this),e,...t);return Po.set(i,e.sort?e.sort():[e]),Mt(i)}:ud().includes(n)?function(...e){return n.apply(Ui(this),e),Mt(Ro.get(this))}:function(...e){return Mt(n.apply(Ui(this),e))}}function gd(n){return typeof n=="function"?md(n):(n instanceof IDBTransaction&&dd(n),ld(n,cd())?new Proxy(n,xi):n)}function Mt(n){if(n instanceof IDBRequest)return fd(n);if(Ni.has(n))return Ni.get(n);const e=gd(n);return e!==n&&(Ni.set(n,e),Ir.set(e,n)),e}const Ui=n=>Ir.get(n);function pd(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(n,e),o=Mt(a);return i&&a.addEventListener("upgradeneeded",l=>{i(Mt(a.result),l.oldVersion,l.newVersion,Mt(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const _d=["get","getKey","getAll","getAllKeys","count"],bd=["put","add","delete","clear"],Fi=new Map;function qs(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fi.get(e))return Fi.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=bd.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||_d.includes(t)))return;const s=async function(a,...o){const l=this.transaction(a,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(o.shift())),(await Promise.all([c[t](...o),r&&l.done]))[0]};return Fi.set(e,s),s}hd(n=>({...n,get:(e,t,i)=>qs(e,t)||n.get(e,t,i),has:(e,t)=>!!qs(e,t)||n.has(e,t)}));/**
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
 */class vd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function yd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qi="@firebase/app",Ks="0.9.15";/**
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
 */const Qt=new yr("@firebase/app"),Id="@firebase/app-compat",wd="@firebase/analytics-compat",Ed="@firebase/analytics",kd="@firebase/app-check-compat",Td="@firebase/app-check",Sd="@firebase/auth",Ad="@firebase/auth-compat",Cd="@firebase/database",Dd="@firebase/database-compat",Rd="@firebase/functions",Pd="@firebase/functions-compat",Od="@firebase/installations",Ld="@firebase/installations-compat",Md="@firebase/messaging",Nd="@firebase/messaging-compat",Ud="@firebase/performance",Fd="@firebase/performance-compat",Bd="@firebase/remote-config",Vd="@firebase/remote-config-compat",Hd="@firebase/storage",jd="@firebase/storage-compat",zd="@firebase/firestore",Wd="@firebase/firestore-compat",qd="firebase",Kd="10.1.0";/**
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
 */const Zi="[DEFAULT]",Gd={[Qi]:"fire-core",[Id]:"fire-core-compat",[Ed]:"fire-analytics",[wd]:"fire-analytics-compat",[Td]:"fire-app-check",[kd]:"fire-app-check-compat",[Sd]:"fire-auth",[Ad]:"fire-auth-compat",[Cd]:"fire-rtdb",[Dd]:"fire-rtdb-compat",[Rd]:"fire-fn",[Pd]:"fire-fn-compat",[Od]:"fire-iid",[Ld]:"fire-iid-compat",[Md]:"fire-fcm",[Nd]:"fire-fcm-compat",[Ud]:"fire-perf",[Fd]:"fire-perf-compat",[Bd]:"fire-rc",[Vd]:"fire-rc-compat",[Hd]:"fire-gcs",[jd]:"fire-gcs-compat",[zd]:"fire-fst",[Wd]:"fire-fst-compat","fire-js":"fire-js",[qd]:"fire-js-all"};/**
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
 */const ui=new Map,$i=new Map;function Jd(n,e){try{n.container.addComponent(e)}catch(t){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function It(n){const e=n.name;if($i.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;$i.set(e,n);for(const t of ui.values())Jd(t,n);return!0}function In(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Yd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nt=new an("app","Firebase",Yd);/**
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
 */class Xd{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const Fn=Kd;function Oo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Zi,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Nt.create("bad-app-name",{appName:String(r)});if(t||(t=To()),!t)throw Nt.create("no-options");const s=ui.get(r);if(s){if(Dn(t,s.options)&&Dn(i,s.config))return s;throw Nt.create("duplicate-app",{appName:r})}const a=new id(r);for(const l of $i.values())a.addComponent(l);const o=new Xd(t,i,a);return ui.set(r,o),o}function Lo(n=Zi){const e=ui.get(n);if(!e&&n===Zi&&To())return Oo();if(!e)throw Nt.create("no-app",{appName:n});return e}function ot(n,e,t){var i;let r=(i=Gd[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(o.join(" "));return}It(new dt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const xd="firebase-heartbeat-database",Qd=1,Rn="firebase-heartbeat-store";let Bi=null;function Mo(){return Bi||(Bi=pd(xd,Qd,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Rn)}}}).catch(n=>{throw Nt.create("idb-open",{originalErrorMessage:n.message})})),Bi}async function Zd(n){try{return await(await Mo()).transaction(Rn).objectStore(Rn).get(No(n))}catch(e){if(e instanceof mt)Qt.warn(e.message);else{const t=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(t.message)}}}async function Gs(n,e){try{const i=(await Mo()).transaction(Rn,"readwrite");await i.objectStore(Rn).put(e,No(n)),await i.done}catch(t){if(t instanceof mt)Qt.warn(t.message);else{const i=Nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(i.message)}}}function No(n){return`${n.name}!${n.options.appId}`}/**
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
 */const $d=1024,eh=30*24*60*60*1e3;class th{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ih(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Js();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=eh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Js(),{heartbeatsToSend:t,unsentEntries:i}=nh(this._heartbeatsCache.heartbeats),r=Eo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Js(){return new Date().toISOString().substring(0,10)}function nh(n,e=$d){const t=[];let i=n.slice();for(const r of n){const s=t.find(a=>a.agent===r.agent);if(s){if(s.dates.push(r.date),Ys(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Ys(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ih{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Co()?Do().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Zd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Gs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ys(n){return Eo(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function rh(n){It(new dt("platform-logger",e=>new vd(e),"PRIVATE")),It(new dt("heartbeat",e=>new th(e),"PRIVATE")),ot(Qi,Ks,n),ot(Qi,Ks,"esm2017"),ot("fire-js","")}rh("");var sh="firebase",ah="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot(sh,ah,"app");const oh=(n,e)=>e.some(t=>n instanceof t);let Xs,xs;function lh(){return Xs||(Xs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ch(){return xs||(xs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uo=new WeakMap,er=new WeakMap,Fo=new WeakMap,Vi=new WeakMap,wr=new WeakMap;function uh(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Ut(n.result)),r()},a=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Uo.set(t,n)}).catch(()=>{}),wr.set(e,n),e}function fh(n){if(er.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),r()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});er.set(n,e)}let tr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return er.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ut(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function dh(n){tr=n(tr)}function hh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Hi(this),e,...t);return Fo.set(i,e.sort?e.sort():[e]),Ut(i)}:ch().includes(n)?function(...e){return n.apply(Hi(this),e),Ut(Uo.get(this))}:function(...e){return Ut(n.apply(Hi(this),e))}}function mh(n){return typeof n=="function"?hh(n):(n instanceof IDBTransaction&&fh(n),oh(n,lh())?new Proxy(n,tr):n)}function Ut(n){if(n instanceof IDBRequest)return uh(n);if(Vi.has(n))return Vi.get(n);const e=mh(n);return e!==n&&(Vi.set(n,e),wr.set(e,n)),e}const Hi=n=>wr.get(n);function gh(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(n,e),o=Ut(a);return i&&a.addEventListener("upgradeneeded",l=>{i(Ut(a.result),l.oldVersion,l.newVersion,Ut(a.transaction))}),t&&a.addEventListener("blocked",()=>t()),o.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),o}const ph=["get","getKey","getAll","getAllKeys","count"],_h=["put","add","delete","clear"],ji=new Map;function Qs(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ji.get(e))return ji.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=_h.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||ph.includes(t)))return;const s=async function(a,...o){const l=this.transaction(a,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(o.shift())),(await Promise.all([c[t](...o),r&&l.done]))[0]};return ji.set(e,s),s}dh(n=>({...n,get:(e,t,i)=>Qs(e,t)||n.get(e,t,i),has:(e,t)=>!!Qs(e,t)||n.has(e,t)}));const Bo="@firebase/installations",Er="0.6.4";/**
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
 */const Vo=1e4,Ho=`w:${Er}`,jo="FIS_v2",bh="https://firebaseinstallations.googleapis.com/v1",vh=60*60*1e3,yh="installations",Ih="Installations";/**
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
 */const wh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zt=new an(yh,Ih,wh);function zo(n){return n instanceof mt&&n.code.includes("request-failed")}/**
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
 */function Wo({projectId:n}){return`${bh}/projects/${n}/installations`}function qo(n){return{token:n.token,requestStatus:2,expiresIn:kh(n.expiresIn),creationTime:Date.now()}}async function Ko(n,e){const i=(await e.json()).error;return Zt.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Go({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Eh(n,{refreshToken:e}){const t=Go(n);return t.append("Authorization",Th(e)),t}async function Jo(n){const e=await n();return e.status>=500&&e.status<600?n():e}function kh(n){return Number(n.replace("s","000"))}function Th(n){return`${jo} ${n}`}/**
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
 */async function Sh({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Wo(n),r=Go(n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const a={fid:t,authVersion:jo,appId:n.appId,sdkVersion:Ho},o={method:"POST",headers:r,body:JSON.stringify(a)},l=await Jo(()=>fetch(i,o));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:qo(c.authToken)}}else throw await Ko("Create Installation",l)}/**
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
 */function Yo(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Ah(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ch=/^[cdef][\w-]{21}$/,nr="";function Dh(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Rh(n);return Ch.test(t)?t:nr}catch{return nr}}function Rh(n){return Ah(n).substr(0,22)}/**
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
 */function Ai(n){return`${n.appName}!${n.appId}`}/**
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
 */const Xo=new Map;function xo(n,e){const t=Ai(n);Qo(t,e),Ph(t,e)}function Qo(n,e){const t=Xo.get(n);if(t)for(const i of t)i(e)}function Ph(n,e){const t=Oh();t&&t.postMessage({key:n,fid:e}),Lh()}let Wt=null;function Oh(){return!Wt&&"BroadcastChannel"in self&&(Wt=new BroadcastChannel("[Firebase] FID Change"),Wt.onmessage=n=>{Qo(n.data.key,n.data.fid)}),Wt}function Lh(){Xo.size===0&&Wt&&(Wt.close(),Wt=null)}/**
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
 */const Mh="firebase-installations-database",Nh=1,$t="firebase-installations-store";let zi=null;function kr(){return zi||(zi=gh(Mh,Nh,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore($t)}}})),zi}async function fi(n,e){const t=Ai(n),r=(await kr()).transaction($t,"readwrite"),s=r.objectStore($t),a=await s.get(t);return await s.put(e,t),await r.done,(!a||a.fid!==e.fid)&&xo(n,e.fid),e}async function Zo(n){const e=Ai(n),i=(await kr()).transaction($t,"readwrite");await i.objectStore($t).delete(e),await i.done}async function Ci(n,e){const t=Ai(n),r=(await kr()).transaction($t,"readwrite"),s=r.objectStore($t),a=await s.get(t),o=e(a);return o===void 0?await s.delete(t):await s.put(o,t),await r.done,o&&(!a||a.fid!==o.fid)&&xo(n,o.fid),o}/**
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
 */async function Tr(n){let e;const t=await Ci(n.appConfig,i=>{const r=Uh(i),s=Fh(n,r);return e=s.registrationPromise,s.installationEntry});return t.fid===nr?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Uh(n){const e=n||{fid:Dh(),registrationStatus:0};return $o(e)}function Fh(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Zt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Bh(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Vh(n)}:{installationEntry:e}}async function Bh(n,e){try{const t=await Sh(n,e);return fi(n.appConfig,t)}catch(t){throw zo(t)&&t.customData.serverCode===409?await Zo(n.appConfig):await fi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Vh(n){let e=await Zs(n.appConfig);for(;e.registrationStatus===1;)await Yo(100),e=await Zs(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Tr(n);return i||t}return e}function Zs(n){return Ci(n,e=>{if(!e)throw Zt.create("installation-not-found");return $o(e)})}function $o(n){return Hh(n)?{fid:n.fid,registrationStatus:0}:n}function Hh(n){return n.registrationStatus===1&&n.registrationTime+Vo<Date.now()}/**
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
 */async function jh({appConfig:n,heartbeatServiceProvider:e},t){const i=zh(n,t),r=Eh(n,t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const a={installation:{sdkVersion:Ho,appId:n.appId}},o={method:"POST",headers:r,body:JSON.stringify(a)},l=await Jo(()=>fetch(i,o));if(l.ok){const c=await l.json();return qo(c)}else throw await Ko("Generate Auth Token",l)}function zh(n,{fid:e}){return`${Wo(n)}/${e}/authTokens:generate`}/**
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
 */async function Sr(n,e=!1){let t;const i=await Ci(n.appConfig,s=>{if(!el(s))throw Zt.create("not-registered");const a=s.authToken;if(!e&&Kh(a))return s;if(a.requestStatus===1)return t=Wh(n,e),s;{if(!navigator.onLine)throw Zt.create("app-offline");const o=Jh(s);return t=qh(n,o),o}});return t?await t:i.authToken}async function Wh(n,e){let t=await $s(n.appConfig);for(;t.authToken.requestStatus===1;)await Yo(100),t=await $s(n.appConfig);const i=t.authToken;return i.requestStatus===0?Sr(n,e):i}function $s(n){return Ci(n,e=>{if(!el(e))throw Zt.create("not-registered");const t=e.authToken;return Yh(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qh(n,e){try{const t=await jh(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await fi(n.appConfig,i),t}catch(t){if(zo(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Zo(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await fi(n.appConfig,i)}throw t}}function el(n){return n!==void 0&&n.registrationStatus===2}function Kh(n){return n.requestStatus===2&&!Gh(n)}function Gh(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+vh}function Jh(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Yh(n){return n.requestStatus===1&&n.requestTime+Vo<Date.now()}/**
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
 */async function Xh(n){const e=n,{installationEntry:t,registrationPromise:i}=await Tr(e);return i?i.catch(console.error):Sr(e).catch(console.error),t.fid}/**
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
 */async function xh(n,e=!1){const t=n;return await Qh(t),(await Sr(t,e)).token}async function Qh(n){const{registrationPromise:e}=await Tr(n);e&&await e}/**
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
 */function Zh(n){if(!n||!n.options)throw Wi("App Configuration");if(!n.name)throw Wi("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Wi(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Wi(n){return Zt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="installations",$h="installations-internal",em=n=>{const e=n.getProvider("app").getImmediate(),t=Zh(e),i=In(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},tm=n=>{const e=n.getProvider("app").getImmediate(),t=In(e,tl).getImmediate();return{getId:()=>Xh(t),getToken:r=>xh(t,r)}};function nm(){It(new dt(tl,em,"PUBLIC")),It(new dt($h,tm,"PRIVATE"))}nm();ot(Bo,Er);ot(Bo,Er,"esm2017");/**
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
 */const di="analytics",im="firebase_id",rm="origin",sm=60*1e3,am="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ar="https://www.googletagmanager.com/gtag/js";/**
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
 */const Qe=new yr("@firebase/analytics");/**
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
 */const om={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},et=new an("analytics","Analytics",om);/**
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
 */function lm(n){if(!n.startsWith(Ar)){const e=et.create("invalid-gtag-resource",{gtagURL:n});return Qe.warn(e.message),""}return n}function nl(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function cm(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function um(n,e){const t=cm("firebase-js-sdk-policy",{createScriptURL:lm}),i=document.createElement("script"),r=`${Ar}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function fm(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function dm(n,e,t,i,r,s){const a=i[r];try{if(a)await e[a];else{const l=(await nl(t)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(o){Qe.error(o)}n("config",r,s)}async function hm(n,e,t,i,r){try{let s=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const o=await nl(t);for(const l of a){const c=o.find(u=>u.measurementId===l),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",i,r||{})}catch(s){Qe.error(s)}}function mm(n,e,t,i){async function r(s,...a){try{if(s==="event"){const[o,l]=a;await hm(n,e,t,o,l)}else if(s==="config"){const[o,l]=a;await dm(n,e,t,i,o,l)}else if(s==="consent"){const[o]=a;n("consent","update",o)}else if(s==="get"){const[o,l,c]=a;n("get",o,l,c)}else if(s==="set"){const[o]=a;n("set",o)}else n(s,...a)}catch(o){Qe.error(o)}}return r}function gm(n,e,t,i,r){let s=function(...a){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=mm(s,n,e,t),{gtagCore:s,wrappedGtag:window[r]}}function pm(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ar)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=30,bm=1e3;class vm{constructor(e={},t=bm){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const il=new vm;function ym(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Im(n){var e;const{appId:t,apiKey:i}=n,r={method:"GET",headers:ym(i)},s=am.replace("{app-id}",t),a=await fetch(s,r);if(a.status!==200&&a.status!==304){let o="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(o=l.error.message)}catch{}throw et.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function wm(n,e=il,t){const{appId:i,apiKey:r,measurementId:s}=n.options;if(!i)throw et.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw et.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Tm;return setTimeout(async()=>{o.abort()},t!==void 0?t:sm),rl({appId:i,apiKey:r,measurementId:s},a,o,e)}async function rl(n,{throttleEndTimeMillis:e,backoffCount:t},i,r=il){var s;const{appId:a,measurementId:o}=n;try{await Em(i,e)}catch(l){if(o)return Qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:o};throw l}try{const l=await Im(n);return r.deleteThrottleMetadata(a),l}catch(l){const c=l;if(!km(c)){if(r.deleteThrottleMetadata(a),o)return Qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:o};throw l}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?js(t,r.intervalMillis,_m):js(t,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return r.setThrottleMetadata(a,u),Qe.debug(`Calling attemptFetch again in ${f} millis`),rl(n,u,i,r)}}function Em(n,e){return new Promise((t,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(s),i(et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function km(n){if(!(n instanceof mt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Tm{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Sm(n,e,t,i,r){if(r&&r.global){n("event",t,i);return}else{const s=await e,a=Object.assign(Object.assign({},i),{send_to:s});n("event",t,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Am(){if(Co())try{await Do()}catch(n){return Qe.warn(et.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Qe.warn(et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Cm(n,e,t,i,r,s,a){var o;const l=wm(n);l.then(h=>{t[h.measurementId]=h.appId,n.options.measurementId&&h.measurementId!==n.options.measurementId&&Qe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>Qe.error(h)),e.push(l);const c=Am().then(h=>{if(h)return i.getId()}),[f,u]=await Promise.all([l,c]);pm(s)||um(s,f.measurementId),r("js",new Date);const d=(o=a==null?void 0:a.config)!==null&&o!==void 0?o:{};return d[rm]="firebase",d.update=!0,u!=null&&(d[im]=u),r("config",f.measurementId,d),f.measurementId}/**
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
 */class Dm{constructor(e){this.app=e}_delete(){return delete Tn[this.app.options.appId],Promise.resolve()}}let Tn={},ea=[];const ta={};let qi="dataLayer",Rm="gtag",na,sl,ia=!1;function Pm(){const n=[];if(Ao()&&n.push("This is a browser extension environment."),zf()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,r)=>`(${r+1}) ${i}`).join(" "),t=et.create("invalid-analytics-context",{errorInfo:e});Qe.warn(t.message)}}function Om(n,e,t){Pm();const i=n.options.appId;if(!i)throw et.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw et.create("no-api-key");if(Tn[i]!=null)throw et.create("already-exists",{id:i});if(!ia){fm(qi);const{wrappedGtag:s,gtagCore:a}=gm(Tn,ea,ta,qi,Rm);sl=s,na=a,ia=!0}return Tn[i]=Cm(n,ea,ta,e,na,qi,t),new Dm(n)}function Lm(n=Lo()){n=kt(n);const e=In(n,di);return e.isInitialized()?e.getImmediate():Mm(n)}function Mm(n,e={}){const t=In(n,di);if(t.isInitialized()){const r=t.getImmediate();if(Dn(e,t.getOptions()))return r;throw et.create("already-initialized")}return t.initialize({options:e})}function Nm(n,e,t,i){n=kt(n),Sm(sl,Tn[n.app.options.appId],e,t,i).catch(r=>Qe.error(r))}const ra="@firebase/analytics",sa="0.10.0";function Um(){It(new dt(di,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Om(i,r,t)},"PUBLIC")),It(new dt("analytics-internal",n,"PRIVATE")),ot(ra,sa),ot(ra,sa,"esm2017");function n(e){try{const t=e.getProvider(di).getImmediate();return{logEvent:(i,r,s)=>Nm(t,i,r,s)}}catch(t){throw et.create("interop-component-reg-failed",{reason:t})}}}Um();function Cr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function al(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fm=al,ol=new an("auth","Firebase",al());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new yr("@firebase/auth");function Bm(n,...e){hi.logLevel<=ye.WARN&&hi.warn(`Auth (${Fn}): ${n}`,...e)}function $n(n,...e){hi.logLevel<=ye.ERROR&&hi.error(`Auth (${Fn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n,...e){throw Dr(n,...e)}function lt(n,...e){return Dr(n,...e)}function ll(n,e,t){const i=Object.assign(Object.assign({},Fm()),{[e]:t});return new an("auth","Firebase",i).create(e,{appName:n.name})}function Vm(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&ht(n,"argument-error"),ll(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dr(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ol.create(n,...e)}function ie(n,e,...t){if(!n)throw Dr(e,...t)}function pt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $n(e),new Error(e)}function wt(n,e){n||pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Hm(){return aa()==="http:"||aa()==="https:"}function aa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hm()||Ao()||"connection"in navigator)?navigator.onLine:!0}function zm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.shortDelay=e,this.longDelay=t,wt(t>e,"Short delay should be less than long delay!"),this.isMobile=Vf()||Hf()}get(){return jm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n,e){wt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=new Bn(3e4,6e4);function ul(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Vn(n,e,t,i,r={}){return fl(n,r,async()=>{let s={},a={};i&&(e==="GET"?a=i:s={body:JSON.stringify(i)});const o=Un(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),cl.fetch()(dl(n,n.config.apiHost,t,o),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function fl(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Wm),e);try{const r=new Gm(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Xn(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,c]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xn(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Xn(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Xn(n,"user-disabled",a);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ll(n,f,c);ht(n,f)}}catch(r){if(r instanceof mt)throw r;ht(n,"network-request-failed",{message:String(r)})}}async function Km(n,e,t,i,r={}){const s=await Vn(n,e,t,i,r);return"mfaPendingCredential"in s&&ht(n,"multi-factor-auth-required",{_serverResponse:s}),s}function dl(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Rr(n.config,r):`${n.config.apiScheme}://${r}`}class Gm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(lt(this.auth,"network-request-failed")),qm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=lt(n,e,i);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jm(n,e){return Vn(n,"POST","/v1/accounts:delete",e)}async function Ym(n,e){return Vn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xm(n,e=!1){const t=kt(n),i=await t.getIdToken(e),r=Pr(i);ie(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Sn(Ki(r.auth_time)),issuedAtTime:Sn(Ki(r.iat)),expirationTime:Sn(Ki(r.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ki(n){return Number(n)*1e3}function Pr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return $n("JWT malformed, contained fewer than 3 sections"),null;try{const r=ko(t);return r?JSON.parse(r):($n("Failed to decode base64 JWT payload"),null)}catch(r){return $n("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function xm(n){const e=Pr(n);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof mt&&Qm(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Qm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sn(this.lastLoginAt),this.creationTime=Sn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mi(n){var e;const t=n.auth,i=await n.getIdToken(),r=await Pn(n,Ym(t,{idToken:i}));ie(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tg(s.providerUserInfo):[],o=eg(n.providerData,a),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),f=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new hl(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,u)}async function $m(n){const e=kt(n);await mi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eg(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function tg(n){return n.map(e=>{var{providerId:t}=e,i=Cr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(n,e){const t=await fl(n,{},async()=>{const i=Un({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,a=dl(n,r,"/v1/token",`key=${s}`),o=await n._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",cl.fetch()(a,{method:"POST",headers:o,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ie(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await ng(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,a=new On;return i&&(ie(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),r&&(ie(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),s&&(ie(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new On,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n,e){ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Cr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Pn(this,this.stsTokenManager.getToken(this.auth,e));return ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xm(this,e)}reload(){return $m(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await mi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pn(this,Jm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,a,o,l,c,f;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(r=t.email)!==null&&r!==void 0?r:void 0,h=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,b=(a=t.photoURL)!==null&&a!==void 0?a:void 0,y=(o=t.tenantId)!==null&&o!==void 0?o:void 0,_=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=t.createdAt)!==null&&c!==void 0?c:void 0,p=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:v,emailVerified:E,isAnonymous:k,providerData:A,stsTokenManager:O}=t;ie(v&&O,e,"internal-error");const D=On.fromJSON(this.name,O);ie(typeof v=="string",e,"internal-error"),At(u,e.name),At(d,e.name),ie(typeof E=="boolean",e,"internal-error"),ie(typeof k=="boolean",e,"internal-error"),At(h,e.name),At(b,e.name),At(y,e.name),At(_,e.name),At(g,e.name),At(p,e.name);const L=new Jt({uid:v,auth:e,email:d,emailVerified:E,displayName:u,isAnonymous:k,photoURL:b,phoneNumber:h,tenantId:y,stsTokenManager:D,createdAt:g,lastLoginAt:p});return A&&Array.isArray(A)&&(L.providerData=A.map(P=>Object.assign({},P))),_&&(L._redirectEventId=_),L}static async _fromIdTokenResponse(e,t,i=!1){const r=new On;r.updateFromServerResponse(t);const s=new Jt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await mi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=new Map;function _t(n){wt(n instanceof Function,"Expected a class definition");let e=oa.get(n);return e?(wt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,oa.set(n,e),e)}/**
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
 */class ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ml.type="NONE";const la=ml;/**
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
 */function ei(n,e,t){return`firebase:${n}:${e}:${t}`}class fn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=ei(this.userKey,r.apiKey,s),this.fullPersistenceKey=ei("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new fn(_t(la),e,i);const r=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||_t(la);const a=ei(i,e.config.apiKey,e.name);let o=null;for(const c of t)try{const f=await c._get(a);if(f){const u=Jt._fromJSON(e,f);c!==s&&(o=u),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new fn(s,e,i):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(a)}catch{}})),new fn(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_l(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vl(e))return"Blackberry";if(yl(e))return"Webos";if(Or(e))return"Safari";if((e.includes("chrome/")||pl(e))&&!e.includes("edge/"))return"Chrome";if(bl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function gl(n=Ke()){return/firefox\//i.test(n)}function Or(n=Ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pl(n=Ke()){return/crios\//i.test(n)}function _l(n=Ke()){return/iemobile/i.test(n)}function bl(n=Ke()){return/android/i.test(n)}function vl(n=Ke()){return/blackberry/i.test(n)}function yl(n=Ke()){return/webos/i.test(n)}function Di(n=Ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ig(n=Ke()){var e;return Di(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rg(){return jf()&&document.documentMode===10}function Il(n=Ke()){return Di(n)||bl(n)||yl(n)||vl(n)||/windows phone/i.test(n)||_l(n)}function sg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n,e=[]){let t;switch(n){case"Browser":t=ca(Ke());break;case"Worker":t=`${ca(Ke())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Fn}/${i}`}async function El(n,e){return Vn(n,"GET","/v2/recaptchaConfig",ul(n,e))}function ua(n){return n!==void 0&&n.enterprise!==void 0}class kl{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Tl(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=lt("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",ag().appendChild(i)})}function og(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const lg="https://www.google.com/recaptcha/enterprise.js?render=",cg="recaptcha-enterprise",ug="NO_RECAPTCHA";class fg{constructor(e){this.type=cg,this.auth=Hn(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{El(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const c=new kl(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,a(c.siteKey)}}).catch(l=>{o(l)})})}function r(s,a,o){const l=window.grecaptcha;ua(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{a(c)}).catch(()=>{a(ug)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{i(this.auth).then(o=>{if(!t&&ua(window.grecaptcha))r(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}Tl(lg+o).then(()=>{r(o,s,a)}).catch(l=>{a(l)})}}).catch(o=>{a(o)})})}}/**
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
 */class dg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((a,o)=>{try{const l=e(s);a(l)}catch(l){o(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fa(this),this.idTokenSubscription=new fa(this),this.beforeStateQueue=new dg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ol,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await fn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,o=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===o)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await mi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?kt(e):null;return t&&ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}async initializeRecaptchaConfig(){const e=await El(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new kl(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new fg(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new an("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;ie(t,this,"argument-error"),this.redirectPersistenceManager=await fn.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return ie(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Bm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Hn(n){return kt(n)}class fa{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jf(t=>this.observer=t)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(n,e){const t=In(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Dn(s,e??{}))return r;ht(r,"already-initialized")}return t.initialize({options:e})}function gg(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(_t);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function pg(n,e,t){const i=Hn(n);ie(i._canInitEmulator,i,"emulator-config-failed"),ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),s=Sl(e),{host:a,port:o}=_g(e),l=o===null?"":`:${o}`;i.config.emulator={url:`${s}//${a}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||bg()}function Sl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _g(n){const e=Sl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:da(i.substr(s.length+1))}}else{const[s,a]=i.split(":");return{host:s,port:da(a)}}}function da(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function bg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,t){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(n,e){return Km(n,"POST","/v1/accounts:signInWithIdp",ul(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="http://localhost";class en extends Al{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Cr(t,["providerId","signInMethod"]);if(!i||!r)return null;const a=new en(i,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return dn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,dn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dn(e,t)}buildRequest(){const e={requestUri:vg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Un(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jn extends Lr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends jn{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends jn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return en._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Pt.credential(t,i)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends jn{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.GITHUB_SIGN_IN_METHOD="github.com";at.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends jn{constructor(){super("twitter.com")}static credential(e,t){return en._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ot.credential(t,i)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await Jt._fromIdTokenResponse(e,i,r),a=ha(i);return new vn({user:s,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=ha(i);return new vn({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function ha(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends mt{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,gi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new gi(e,t,i,r)}}function Cl(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gi._fromErrorAndOperation(n,s,e,i):s})}async function yg(n,e,t=!1){const i=await Pn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vn._forOperation(n,"link",i)}/**
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
 */async function Ig(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const s=await Pn(n,Cl(i,r,e,n),t);ie(s.idToken,i,"internal-error");const a=Pr(s.idToken);ie(a,i,"internal-error");const{sub:o}=a;return ie(n.uid===o,i,"user-mismatch"),vn._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(n,e,t=!1){const i="signIn",r=await Cl(n,i,e),s=await vn._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function Eg(n,e,t,i){return kt(n).onIdTokenChanged(e,t,i)}function kg(n,e,t){return kt(n).beforeAuthStateChanged(e,t)}function Tg(n){return kt(n).signOut()}const pi="__sak";/**
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
 */class Dl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pi,"1"),this.storage.removeItem(pi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(){const n=Ke();return Or(n)||Di(n)}const Ag=1e3,Cg=10;class Rl extends Dl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sg()&&sg(),this.fallbackToPolling=Il(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},s=this.storage.getItem(i);rg()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Cg):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Ag)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rl.type="LOCAL";const Dg=Rl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends Dl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pl.type="SESSION";const Ol=Pl;/**
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
 */function Rg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ri{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Ri(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const o=Array.from(a).map(async c=>c(t.origin,s)),l=await Rg(o);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ri.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Pg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const c=Mr("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(u){const d=u;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(d.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return window}function Og(n){ct().location.href=n}/**
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
 */function Ll(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function Lg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ng(){return Ll()?self:null}/**
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
 */const Ml="firebaseLocalStorageDb",Ug=1,_i="firebaseLocalStorage",Nl="fbase_key";class zn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pi(n,e){return n.transaction([_i],e?"readwrite":"readonly").objectStore(_i)}function Fg(){const n=indexedDB.deleteDatabase(Ml);return new zn(n).toPromise()}function rr(){const n=indexedDB.open(Ml,Ug);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(_i,{keyPath:Nl})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(_i)?e(i):(i.close(),await Fg(),e(await rr()))})})}async function ma(n,e,t){const i=Pi(n,!0).put({[Nl]:e,value:t});return new zn(i).toPromise()}async function Bg(n,e){const t=Pi(n,!1).get(e),i=await new zn(t).toPromise();return i===void 0?null:i.value}function ga(n,e){const t=Pi(n,!0).delete(e);return new zn(t).toPromise()}const Vg=800,Hg=3;class Ul{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Hg)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ll()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ri._getInstance(Ng()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Lg(),!this.activeServiceWorker)return;this.sender=new Pg(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rr();return await ma(e,pi,"1"),await ga(e,pi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ma(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Bg(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ga(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Pi(r,!1).getAll();return new zn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ul.type="LOCAL";const jg=Ul;new Bn(3e4,6e4);/**
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
 */function Fl(n,e){return e?_t(e):(ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Nr extends Al{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return dn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zg(n){return wg(n.auth,new Nr(n),n.bypassAuthState)}function Wg(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),Ig(t,new Nr(n),n.bypassAuthState)}async function qg(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),yg(t,new Nr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zg;case"linkViaPopup":case"linkViaRedirect":return qg;case"reauthViaPopup":case"reauthViaRedirect":return Wg;default:ht(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Bn(2e3,1e4);async function Gg(n,e,t){const i=Hn(n);Vm(n,e,Lr);const r=Fl(i,t);return new qt(i,"signInViaPopup",e,r).executeNotNull()}class qt extends Bl{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,qt.currentPopupAction&&qt.currentPopupAction.cancel(),qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=Mr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kg.get())};e()}}qt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="pendingRedirect",ti=new Map;class Yg extends Bl{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ti.get(this.auth._key());if(!e){try{const i=await Xg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ti.set(this.auth._key(),e)}return this.bypassAuthState||ti.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xg(n,e){const t=Zg(e),i=Qg(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function xg(n,e){ti.set(n._key(),e)}function Qg(n){return _t(n._redirectPersistence)}function Zg(n){return ei(Jg,n.config.apiKey,n.name)}async function $g(n,e,t=!1){const i=Hn(n),r=Fl(i,e),a=await new Yg(i,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=10*60*1e3;class tp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!np(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Vl(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(lt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ep&&this.cachedEventUids.clear(),this.cachedEventUids.has(pa(e))}saveEventToCache(e){this.cachedEventUids.add(pa(e)),this.lastProcessedEventTime=Date.now()}}function pa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Vl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function np(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ip(n,e={}){return Vn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sp=/^https?/;async function ap(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ip(n);for(const t of e)try{if(op(t))return}catch{}ht(n,"unauthorized-domain")}function op(n){const e=ir(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!sp.test(t))return!1;if(rp.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const lp=new Bn(3e4,6e4);function _a(){const n=ct().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function cp(n){return new Promise((e,t)=>{var i,r,s;function a(){_a(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_a(),t(lt(n,"network-request-failed"))},timeout:lp.get()})}if(!((r=(i=ct().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=ct().gapi)===null||s===void 0)&&s.load)a();else{const o=og("iframefcb");return ct()[o]=()=>{gapi.load?a():t(lt(n,"network-request-failed"))},Tl(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>t(l))}}).catch(e=>{throw ni=null,e})}let ni=null;function up(n){return ni=ni||cp(n),ni}/**
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
 */const fp=new Bn(5e3,15e3),dp="__/auth/iframe",hp="emulator/auth/iframe",mp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pp(n){const e=n.config;ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Rr(e,hp):`https://${n.config.authDomain}/${dp}`,i={apiKey:e.apiKey,appName:n.name,v:Fn},r=gp.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Un(i).slice(1)}`}async function _p(n){const e=await up(n),t=ct().gapi;return ie(t,n,"internal-error"),e.open({where:document.body,url:pp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mp,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const a=lt(n,"network-request-failed"),o=ct().setTimeout(()=>{s(a)},fp.get());function l(){ct().clearTimeout(o),r(i)}i.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const bp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vp=500,yp=600,Ip="_blank",wp="http://localhost";class ba{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ep(n,e,t,i=vp,r=yp){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const l=Object.assign(Object.assign({},bp),{width:i.toString(),height:r.toString(),top:s,left:a}),c=Ke().toLowerCase();t&&(o=pl(c)?Ip:t),gl(c)&&(e=e||wp,l.scrollbars="yes");const f=Object.entries(l).reduce((d,[h,b])=>`${d}${h}=${b},`,"");if(ig(c)&&o!=="_self")return kp(e||"",o),new ba(null);const u=window.open(e||"",o,f);ie(u,n,"popup-blocked");try{u.focus()}catch{}return new ba(u)}function kp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Tp="__/auth/handler",Sp="emulator/auth/handler",Ap=encodeURIComponent("fac");async function va(n,e,t,i,r,s){ie(n.config.authDomain,n,"auth-domain-config-required"),ie(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Fn,eventId:r};if(e instanceof Lr){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Gf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(s||{}))a[f]=u}if(e instanceof jn){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const o=a;for(const f of Object.keys(o))o[f]===void 0&&delete o[f];const l=await n._getAppCheckToken(),c=l?`#${Ap}=${encodeURIComponent(l)}`:"";return`${Cp(n)}?${Un(o).slice(1)}${c}`}function Cp({config:n}){return n.emulator?Rr(n,Sp):`https://${n.authDomain}/${Tp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="webStorageSupport";class Dp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ol,this._completeRedirectFn=$g,this._overrideRedirectResult=xg}async _openPopup(e,t,i,r){var s;wt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await va(e,t,i,ir(),r);return Ep(e,a,Mr())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await va(e,t,i,ir(),r);return Og(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(wt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await _p(e),i=new tp(e);return t.register("authEvent",r=>(ie(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gi,{type:Gi},r=>{var s;const a=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Gi];a!==void 0&&t(!!a),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ap(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Il()||Or()||Di()}}const Rp=Dp;var ya="@firebase/auth",Ia="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Lp(n){It(new dt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=i.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:a,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wl(n)},c=new hg(i,r,s,l);return gg(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),It(new dt("auth-internal",e=>{const t=Hn(e.getProvider("auth").getImmediate());return(i=>new Pp(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(ya,Ia,Op(n)),ot(ya,Ia,"esm2017")}/**
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
 */const Mp=5*60,Np=So("authIdTokenMaxAge")||Mp;let wa=null;const Up=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Np)return;const r=t==null?void 0:t.token;wa!==r&&(wa=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Fp(n=Lo()){const e=In(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mg(n,{popupRedirectResolver:Rp,persistence:[jg,Dg,Ol]}),i=So("authTokenSyncURL");if(i){const s=Up(i);kg(t,s,()=>s(t.currentUser)),Eg(t,a=>s(a))}const r=Ff("auth");return r&&pg(t,`http://${r}`),t}Lp("Browser");const Bp={apiKey:"AIzaSyAjCRLDHuTkfnKU5TTV6ZZasUXecSvlQOE",authDomain:"virtual-pinball-spreadsh-71a64.firebaseapp.com",projectId:"virtual-pinball-spreadsh-71a64",appId:"1:497322440319:web:8a7f7a2997664a9af7f14a",measurementId:"G-DB48L7QGX0"},Hl=Oo(Bp);Lm(Hl);const jl=Fp(Hl),Vp="VirtualPinballSpreadsheet",Hp="vps-db",Ur=rc("user",{});let jp;const zp=()=>{const n=new at;n.addScope("public_repo"),n.setCustomParameters({allow_signup:"false"}),Gg(jl,n).then(async e=>{const t=at.credentialFromResult(e),i=e.user;if(i.displayName=e._tokenResponse.screenName,!(t!=null&&t.accessToken))throw new Error;zl(t.accessToken,i)}).catch(e=>{console.error(e)})},zl=async(n,e)=>{try{const{Octokit:t}=await Zr(()=>import("https://esm.sh/octokit"),[],import.meta.url),{createOrUpdateTextFile:i}=await Zr(()=>import("https://esm.sh/@octokit/plugin-create-or-update-text-file"),[],import.meta.url),r=t.plugin(i),s=new r({auth:n}),o=(await s.request("GET /repos/{owner}/{repo}/collaborators/{username}/permission",{owner:Vp,username:e.displayName,repo:Hp})).data.permission;if(!(o==="admin"||o==="write"||location.hostname==="localhost"||location.hostname==="127.0.0.1")){Kt().trigger({message:"You don't have permission to edit on VPS.",background:"variant-filled-error"});return}jp=s,Ur.set({user:e,permission:o,token:n}),Kt().trigger({message:"Login successfull",background:"variant-filled-success"})}catch(t){console.log(t),Kt().trigger({message:"Login was unsuccessfull.",background:"variant-filled-error"})}},Wp=()=>{Tg(jl).then(()=>{Ur.set({}),Kt().trigger({message:"Logout successfull",background:"variant-filled-success"})})},Wn={login:zl,logout:Wp,triggerLoginPopup:zp,userStore:Ur};function Ea(n,e,t){const i=n.slice();return i[7]=e[t],i}function ka(n){let e,t=n[7][1].name+"",i;return{c(){e=T("option"),i=ee(t),this.h()},l(r){e=S(r,"OPTION",{});var s=C(e);i=te(s,t),s.forEach(w),this.h()},h(){e.__value=n[7][0],vt(e,e.__value)},m(r,s){j(r,e,s),I(e,i)},p:me,d(r){r&&w(e)}}}function qp(n){let e,t,i,r,s,a,o,l,c,f,u,d,h,b;r=new Yt({props:{icon:lc}});let y=Le(n[5]),_=[];for(let g=0;g<y.length;g+=1)_[g]=ka(Ea(n,y,g));return u=new Yt({props:{icon:cc}}),{c(){e=T("div"),t=T("div"),i=T("div"),X(r.$$.fragment),s=U(),a=T("input"),o=U(),l=T("select");for(let g=0;g<_.length;g+=1)_[g].c();c=U(),f=T("button"),X(u.$$.fragment),this.h()},l(g){e=S(g,"DIV",{class:!0});var p=C(e);t=S(p,"DIV",{class:!0});var v=C(t);i=S(v,"DIV",{class:!0});var E=C(i);$(r.$$.fragment,E),E.forEach(w),s=F(v),a=S(v,"INPUT",{type:!0,placeholder:!0}),o=F(v),l=S(v,"SELECT",{class:!0});var k=C(l);for(let O=0;O<_.length;O+=1)_[O].l(k);k.forEach(w),v.forEach(w),c=F(p),f=S(p,"BUTTON",{class:!0});var A=C(f);$(u.$$.fragment,A),A.forEach(w),p.forEach(w),this.h()},h(){m(i,"class","input-group-shim"),m(a,"type","search"),m(a,"placeholder","Search..."),m(l,"class","select rounded-l-none"),n[1]===void 0&&Ft(()=>n[9].call(l)),m(t,"class","input-group input-group-divider grid-cols-[auto_1fr_auto]"),m(f,"class","btn hover:variant-soft-primary btn-icon"),qe(f,"variant-filled-primary",n[2]),m(e,"class","px-4 flex items-center gap-4")},m(g,p){j(g,e,p),I(e,t),I(t,i),x(r,i,null),I(t,s),I(t,a),vt(a,n[0]),I(t,o),I(t,l);for(let v=0;v<_.length;v+=1)_[v]&&_[v].m(l,null);Kr(l,n[1],!0),I(e,c),I(e,f),x(u,f,null),d=!0,h||(b=[Y(a,"input",n[8]),Y(l,"change",n[9]),Y(f,"click",n[10])],h=!0)},p(g,p){if(p&1&&a.value!==g[0]&&vt(a,g[0]),p&32){y=Le(g[5]);let v;for(v=0;v<y.length;v+=1){const E=Ea(g,y,v);_[v]?_[v].p(E,p):(_[v]=ka(E),_[v].c(),_[v].m(l,null))}for(;v<_.length;v+=1)_[v].d(1);_.length=y.length}p&34&&Kr(l,g[1]),(!d||p&4)&&qe(f,"variant-filled-primary",g[2])},i(g){d||(R(r.$$.fragment,g),R(u.$$.fragment,g),d=!0)},o(g){N(r.$$.fragment,g),N(u.$$.fragment,g),d=!1},d(g){g&&w(e),Q(r),sn(_,g),Q(u),h=!1,tt(b)}}}function Kp(n){let e,t=`<img src="${Df}" alt="VPS" width="36px"/>`;return{c(){e=T("a"),e.innerHTML=t,this.h()},l(i){e=S(i,"A",{href:!0,class:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-kw8dyq"&&(e.innerHTML=t),this.h()},h(){m(e,"href","/"),m(e,"class","ml-4 rounded-full logo transition-shadow svelte-tmztqq")},m(i,r){j(i,e,r)},p:me,d(i){i&&w(e)}}}function Gp(n){let e,t,i="Apps",r,s,a="Links",o,l,c,f,u,d,h,b,y,_;return f=new Yt({props:{icon:uc,class:"ml-2",size:"xs"}}),h=new Yt({props:{icon:fc}}),{c(){e=T("div"),t=T("a"),t.textContent=i,r=U(),s=T("a"),s.textContent=a,o=U(),l=T("button"),c=ee("Settings "),X(f.$$.fragment),u=U(),d=T("a"),X(h.$$.fragment),this.h()},l(g){e=S(g,"DIV",{slot:!0,class:!0});var p=C(e);t=S(p,"A",{href:!0,class:!0,"data-svelte-h":!0}),Fe(t)!=="svelte-tjfgp6"&&(t.textContent=i),r=F(p),s=S(p,"A",{href:!0,class:!0,"data-svelte-h":!0}),Fe(s)!=="svelte-in8qks"&&(s.textContent=a),o=F(p),l=S(p,"BUTTON",{class:!0});var v=C(l);c=te(v,"Settings "),$(f.$$.fragment,v),v.forEach(w),u=F(p),d=S(p,"A",{href:!0,class:!0});var E=C(d);$(h.$$.fragment,E),E.forEach(w),p.forEach(w),this.h()},h(){m(t,"href","apps/"),m(t,"class","btn btn-sm hover:variant-soft-primary"),m(s,"href","links/"),m(s,"class","btn btn-sm hover:variant-soft-primary"),m(l,"class","btn btn-sm hover:variant-soft-primary"),m(d,"href","help/"),m(d,"class","btn hover:variant-soft-primary btn-icon"),m(e,"slot","trail"),m(e,"class","mr-4 flex items-center gap-4")},m(g,p){j(g,e,p),I(e,t),I(e,r),I(e,s),I(e,o),I(e,l),I(l,c),x(f,l,null),I(e,u),I(e,d),x(h,d,null),b=!0,y||(_=rn(Ei.call(null,l,n[6])),y=!0)},p:me,i(g){b||(R(f.$$.fragment,g),R(h.$$.fragment,g),b=!0)},o(g){N(f.$$.fragment,g),N(h.$$.fragment,g),b=!1},d(g){g&&w(e),Q(f),Q(h),y=!1,_()}}}function Jp(n){let e,t;return e=new Wc({props:{$$slots:{trail:[Gp],lead:[Kp],default:[qp]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,r){x(e,i,r),t=!0},p(i,[r]){const s={};r&32775&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){t||(R(e.$$.fragment,i),t=!0)},o(i){N(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function Yp(n,e,t){let i,r,s;const{query:a,mode:o,filterActive:l}=Dt;Te(n,a,b=>t(0,i=b)),Te(n,o,b=>t(1,r=b)),Te(n,l,b=>t(2,s=b));const c=Object.entries($a),f={event:"focus-click",target:"popupSettings",placement:"bottom",closeQuery:".listbox-item"};function u(){i=this.value,a.set(i)}function d(){r=Gl(this),o.set(r),t(5,c)}return[i,r,s,a,l,c,f,o,u,d,()=>Qa(l,s=!s,s)]}class Xp extends _e{constructor(e){super(),be(this,e,Yp,Jp,ge,{})}}const Wl=bc("goto");Dt.finalResultsStore.subscribe(()=>{var a;const n=ln(Dt.query),e=ln(Dt.filterActive);if(!n&&!e)return;const t=ln(yn),i=(a=t==null?void 0:t.url)==null?void 0:a.pathname;if(!i||!ln(Dt.isSearchActive)&&i==="/")return;const r=ln(Dt.mode),s=$a[r].route;i!=null&&i.includes(s)||(console.log(t,i,r,s),Wl("/"+s,{keepFocus:!0}))});function xp(n){let e,t,i,r,s;return{c(){e=T("button"),t=ee(n[0]),this.h()},l(a){e=S(a,"BUTTON",{class:!0});var o=C(e);t=te(o,n[0]),o.forEach(w),this.h()},h(){m(e,"class","chip badge-glass py-0.5 px-1")},m(a,o){j(a,e,o),I(e,t),r||(s=[rn(i=Rc.call(null,e,n[0])),Y(e,"click",n[1])],r=!0)},p(a,[o]){o&1&&se(t,a[0]),i&&yi(i.update)&&o&1&&i.update.call(null,a[0])},i:me,o:me,d(a){a&&w(e),r=!1,tt(s)}}}function Qp(n,e,t){let{id:i=""}=e;const r=()=>{Kt().trigger({message:`${i} copied to clipboard.`})};return n.$$set=s=>{"id"in s&&t(0,i=s.id)},[i,r]}class Fr extends _e{constructor(e){super(),be(this,e,Qp,xp,ge,{id:0})}}function Ta(n){let e,t,i,r,s;return t=new Yt({props:{icon:to}}),{c(){e=T("a"),X(t.$$.fragment),i=ee("IPDB"),this.h()},l(a){e=S(a,"A",{class:!0,target:!0,href:!0});var o=C(e);$(t.$$.fragment,o),i=te(o,"IPDB"),o.forEach(w),this.h()},h(){m(e,"class","chip variant-soft-tertiary hover:variant-filled-tertiary gap-2"),m(e,"target","_blank"),m(e,"href",r=n[0].ipdbUrl)},m(a,o){j(a,e,o),x(t,e,null),I(e,i),s=!0},p(a,o){(!s||o&1&&r!==(r=a[0].ipdbUrl))&&m(e,"href",r)},i(a){s||(R(t.$$.fragment,a),s=!0)},o(a){N(t.$$.fragment,a),s=!1},d(a){a&&w(e),Q(t)}}}function Zp(n){var wn,gt;let e,t,i,r,s,a,o,l,c=(((wn=n[0].theme)==null?void 0:wn.join(" • "))||"")+"",f,u,d,h,b=n[0].name+"",y,_,g,p=n[0].manufacturer+"",v,E,k=n[0].year+"",A,O,D,L,P=(((gt=n[0].designers)==null?void 0:gt.join(", "))||"")+"",J,B,M,q,ne,Z="Players",ue,oe,G=(n[0].players||"-")+"",H,W,V,re,le,ce,Me="Type",Ve,De,Se=(n[0].type||"-")+"",K,Re,Pe,z,we,He,Ht="Updated at",Tt,ke,Ae=nt(n[0].updatedAt)+"",jt,on,ae,ve,je,Ne,St="ID",Ze,ze,Ue,Ie=n[0].ipdbUrl&&Ta(n);return ze=new Fr({props:{id:n[0].id}}),{c(){e=T("div"),t=T("img"),s=U(),a=T("div"),o=T("div"),l=T("p"),f=ee(c),u=U(),Ie&&Ie.c(),d=U(),h=T("h1"),y=ee(b),_=U(),g=T("h4"),v=ee(p),E=ee(" ("),A=ee(k),O=ee(")"),D=U(),L=T("p"),J=ee(P),B=U(),M=T("div"),q=T("div"),ne=T("p"),ne.textContent=Z,ue=U(),oe=T("p"),H=ee(G),W=U(),V=T("div"),re=U(),le=T("div"),ce=T("p"),ce.textContent=Me,Ve=U(),De=T("p"),K=ee(Se),Re=U(),Pe=T("div"),z=U(),we=T("div"),He=T("p"),He.textContent=Ht,Tt=U(),ke=T("p"),jt=ee(Ae),on=U(),ae=T("div"),ve=U(),je=T("div"),Ne=T("p"),Ne.textContent=St,Ze=U(),X(ze.$$.fragment),this.h()},l(fe){e=S(fe,"DIV",{class:!0});var Ee=C(e);t=S(Ee,"IMG",{class:!0,src:!0,alt:!0}),s=F(Ee),a=S(Ee,"DIV",{class:!0});var We=C(a);o=S(We,"DIV",{class:!0});var rt=C(o);l=S(rt,"P",{class:!0});var st=C(l);f=te(st,c),st.forEach(w),u=F(rt),Ie&&Ie.l(rt),rt.forEach(w),d=F(We),h=S(We,"H1",{class:!0});var En=C(h);y=te(En,b),En.forEach(w),_=F(We),g=S(We,"H4",{class:!0});var kn=C(g);v=te(kn,p),E=te(kn," ("),A=te(kn,k),O=te(kn,")"),kn.forEach(w),D=F(We),L=S(We,"P",{class:!0});var Vr=C(L);J=te(Vr,P),Vr.forEach(w),B=F(We),M=S(We,"DIV",{class:!0,style:!0});var xe=C(M);q=S(xe,"DIV",{class:!0});var qn=C(q);ne=S(qn,"P",{class:!0,"data-svelte-h":!0}),Fe(ne)!=="svelte-1vi5dc3"&&(ne.textContent=Z),ue=F(qn),oe=S(qn,"P",{class:!0});var Hr=C(oe);H=te(Hr,G),Hr.forEach(w),qn.forEach(w),W=F(xe),V=S(xe,"DIV",{class:!0}),C(V).forEach(w),re=F(xe),le=S(xe,"DIV",{class:!0});var Kn=C(le);ce=S(Kn,"P",{class:!0,"data-svelte-h":!0}),Fe(ce)!=="svelte-1h1g7sd"&&(ce.textContent=Me),Ve=F(Kn),De=S(Kn,"P",{class:!0});var jr=C(De);K=te(jr,Se),jr.forEach(w),Kn.forEach(w),Re=F(xe),Pe=S(xe,"DIV",{class:!0}),C(Pe).forEach(w),z=F(xe),we=S(xe,"DIV",{class:!0});var Gn=C(we);He=S(Gn,"P",{class:!0,"data-svelte-h":!0}),Fe(He)!=="svelte-g6tq99"&&(He.textContent=Ht),Tt=F(Gn),ke=S(Gn,"P",{class:!0});var zr=C(ke);jt=te(zr,Ae),zr.forEach(w),Gn.forEach(w),on=F(xe),ae=S(xe,"DIV",{class:!0}),C(ae).forEach(w),ve=F(xe),je=S(xe,"DIV",{class:!0});var Jn=C(je);Ne=S(Jn,"P",{class:!0,"data-svelte-h":!0}),Fe(Ne)!=="svelte-lju6x8"&&(Ne.textContent=St),Ze=F(Jn),$(ze.$$.fragment,Jn),Jn.forEach(w),xe.forEach(w),We.forEach(w),Ee.forEach(w),this.h()},h(){m(t,"class","rounded-md aspectBG w-96 svelte-v17uty"),bt(t.src,i=n[0].imgUrl||Xr(n[0]))||m(t,"src",i),m(t,"alt",r=n[0].name),m(l,"class","flex-1 uppercase font-bold text-sm opacity-40"),m(o,"class","flex"),m(h,"class","h1"),m(g,"class","h4"),m(L,"class","opacity-60"),m(ne,"class","text-xs font-bold uppercase opacity-40"),m(oe,"class",""),m(q,"class","flex flex-col items-center justify-center flex-1 gap-1 my-3"),m(V,"class","bg-surface-900-50-token h-full w-px opacity-10"),m(ce,"class","text-xs font-bold uppercase opacity-40"),m(De,"class",""),m(le,"class","flex flex-col items-center justify-center flex-1 gap-1"),m(Pe,"class","bg-surface-900-50-token h-full w-px opacity-10"),m(He,"class","text-xs font-bold uppercase opacity-40"),m(ke,"class",""),m(we,"class","flex flex-col items-center justify-center flex-1 gap-1"),m(ae,"class","bg-surface-900-50-token h-full w-px opacity-10"),m(Ne,"class","text-xs font-bold uppercase opacity-40"),m(je,"class","flex flex-col items-center justify-center flex-1 gap-1"),m(M,"class","flex w-full mt-auto card items-center"),ut(M,"background",n[1]?"rgba(255,255,255,.1)":"rgba(0,0,0,.1)",1),m(a,"class","flex flex-col flex-1 gap-2"),m(e,"class","flex gap-8")},m(fe,Ee){j(fe,e,Ee),I(e,t),I(e,s),I(e,a),I(a,o),I(o,l),I(l,f),I(o,u),Ie&&Ie.m(o,null),I(a,d),I(a,h),I(h,y),I(a,_),I(a,g),I(g,v),I(g,E),I(g,A),I(g,O),I(a,D),I(a,L),I(L,J),I(a,B),I(a,M),I(M,q),I(q,ne),I(q,ue),I(q,oe),I(oe,H),I(M,W),I(M,V),I(M,re),I(M,le),I(le,ce),I(le,Ve),I(le,De),I(De,K),I(M,Re),I(M,Pe),I(M,z),I(M,we),I(we,He),I(we,Tt),I(we,ke),I(ke,jt),I(M,on),I(M,ae),I(M,ve),I(M,je),I(je,Ne),I(je,Ze),x(ze,je,null),Ue=!0},p(fe,[Ee]){var rt,st;(!Ue||Ee&1&&!bt(t.src,i=fe[0].imgUrl||Xr(fe[0])))&&m(t,"src",i),(!Ue||Ee&1&&r!==(r=fe[0].name))&&m(t,"alt",r),(!Ue||Ee&1)&&c!==(c=(((rt=fe[0].theme)==null?void 0:rt.join(" • "))||"")+"")&&se(f,c),fe[0].ipdbUrl?Ie?(Ie.p(fe,Ee),Ee&1&&R(Ie,1)):(Ie=Ta(fe),Ie.c(),R(Ie,1),Ie.m(o,null)):Ie&&(de(),N(Ie,1,1,()=>{Ie=null}),he()),(!Ue||Ee&1)&&b!==(b=fe[0].name+"")&&se(y,b),(!Ue||Ee&1)&&p!==(p=fe[0].manufacturer+"")&&se(v,p),(!Ue||Ee&1)&&k!==(k=fe[0].year+"")&&se(A,k),(!Ue||Ee&1)&&P!==(P=(((st=fe[0].designers)==null?void 0:st.join(", "))||"")+"")&&se(J,P),(!Ue||Ee&1)&&G!==(G=(fe[0].players||"-")+"")&&se(H,G),(!Ue||Ee&1)&&Se!==(Se=(fe[0].type||"-")+"")&&se(K,Se),(!Ue||Ee&1)&&Ae!==(Ae=nt(fe[0].updatedAt)+"")&&se(jt,Ae);const We={};Ee&1&&(We.id=fe[0].id),ze.$set(We),(!Ue||Ee&2)&&ut(M,"background",fe[1]?"rgba(255,255,255,.1)":"rgba(0,0,0,.1)",1)},i(fe){Ue||(R(Ie),R(ze.$$.fragment,fe),Ue=!0)},o(fe){N(Ie),N(ze.$$.fragment,fe),Ue=!1},d(fe){fe&&w(e),Ie&&Ie.d(),Q(ze)}}}function $p(n,e,t){let i;Te(n,Cn,s=>t(1,i=s)),Kt();let{game:r=si}=e;return n.$$set=s=>{"game"in s&&t(0,r=s.game)},[r,i]}class e_ extends _e{constructor(e){super(),be(this,e,$p,Zp,ge,{game:0})}}const bi=n=>{const e=n.filter(t=>!t.broken);return e.length?e[0].url:""};var t_={prefix:"fab",iconName:"dropbox",icon:[528,512,[],"f16b","M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"]},n_={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},i_={prefix:"fab",iconName:"google-drive",icon:[512,512,[],"f3aa","M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"]};let ql=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((e,t)=>(t&=63,t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");function r_(n){let e,t,i,r,s,a,o,l,c,f;const u=n[4].default,d=Ge(u,n,n[3],null);return{c(){e=T("div"),d&&d.c(),t=U(),i=T("div"),r=T("p"),s=ee(n[0]),a=U(),o=T("div"),this.h()},l(h){e=S(h,"DIV",{});var b=C(e);d&&d.l(b),b.forEach(w),t=F(h),i=S(h,"DIV",{class:!0,"data-popup":!0});var y=C(i);r=S(y,"P",{});var _=C(r);s=te(_,n[0]),_.forEach(w),a=F(y),o=S(y,"DIV",{class:!0}),C(o).forEach(w),y.forEach(w),this.h()},h(){m(o,"class","arrow variant-filled-surface border-primary-500 border-r border-b"),m(i,"class","card px-2 py-1 variant-filled-surface z-50 border-primary-500 border shadow-md"),m(i,"data-popup",n[1])},m(h,b){j(h,e,b),d&&d.m(e,null),j(h,t,b),j(h,i,b),I(i,r),I(r,s),I(i,a),I(i,o),l=!0,c||(f=rn(Ei.call(null,e,n[2])),c=!0)},p(h,[b]){d&&d.p&&(!l||b&8)&&Je(d,u,h,h[3],l?Xe(u,h[3],b,null):Ye(h[3]),null),(!l||b&1)&&se(s,h[0])},i(h){l||(R(d,h),l=!0)},o(h){N(d,h),l=!1},d(h){h&&(w(e),w(t),w(i)),d&&d.d(h),c=!1,f()}}}function s_(n,e,t){let{$$slots:i={},$$scope:r}=e,{content:s=""}=e;const a=ql(),o={event:"hover",target:a,placement:"top"};return n.$$set=l=>{"content"in l&&t(0,s=l.content),"$$scope"in l&&t(3,r=l.$$scope)},[s,a,o,r,i]}class a_ extends _e{constructor(e){super(),be(this,e,s_,r_,ge,{content:0})}}function Sa(n,e,t){const i=n.slice();return i[4]=e[t],i}function o_(n){let e,t,i,r=n[4].title+"",s,a,o,l,c;return t=new Yt({props:{icon:n[4].icon}}),{c(){e=T("a"),X(t.$$.fragment),i=T("span"),s=ee(r),l=U(),this.h()},l(f){e=S(f,"A",{href:!0,target:!0,class:!0});var u=C(e);$(t.$$.fragment,u),i=S(u,"SPAN",{});var d=C(i);s=te(d,r),d.forEach(w),u.forEach(w),l=F(f),this.h()},h(){m(e,"href",a=n[4].broken?"":n[4].url),m(e,"target","_blank"),m(e,"class",o="chip "+n[4].class),qe(e,"opacity-20",n[4].broken)},m(f,u){j(f,e,u),x(t,e,null),I(e,i),I(i,s),j(f,l,u),c=!0},p(f,u){const d={};u&1&&(d.icon=f[4].icon),t.$set(d),(!c||u&1)&&r!==(r=f[4].title+"")&&se(s,r),(!c||u&1&&a!==(a=f[4].broken?"":f[4].url))&&m(e,"href",a),(!c||u&1&&o!==(o="chip "+f[4].class))&&m(e,"class",o),(!c||u&1)&&qe(e,"opacity-20",f[4].broken)},i(f){c||(R(t.$$.fragment,f),c=!0)},o(f){N(t.$$.fragment,f),c=!1},d(f){f&&(w(e),w(l)),Q(t)}}}function Aa(n){let e,t;return e=new a_({props:{content:n[1](n[4]),$$slots:{default:[o_]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,r){x(e,i,r),t=!0},p(i,r){const s={};r&1&&(s.content=i[1](i[4])),r&129&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){t||(R(e.$$.fragment,i),t=!0)},o(i){N(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function l_(n){let e,t,i=Le(n[0]),r=[];for(let a=0;a<i.length;a+=1)r[a]=Aa(Sa(n,i,a));const s=a=>N(r[a],1,1,()=>{r[a]=null});return{c(){e=T("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=S(a,"DIV",{class:!0});var o=C(e);for(let l=0;l<r.length;l+=1)r[l].l(o);o.forEach(w),this.h()},h(){m(e,"class","flex gap-1")},m(a,o){j(a,e,o);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);t=!0},p(a,[o]){if(o&3){i=Le(a[0]);let l;for(l=0;l<i.length;l+=1){const c=Sa(a,i,l);r[l]?(r[l].p(c,o),R(r[l],1)):(r[l]=Aa(c),r[l].c(),R(r[l],1),r[l].m(e,null))}for(de(),l=i.length;l<r.length;l+=1)s(l);he()}},i(a){if(!t){for(let o=0;o<i.length;o+=1)R(r[o]);t=!0}},o(a){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)N(r[o]);t=!1},d(a){a&&w(e),sn(r,a)}}}function c_(n,e,t){let i,{urls:r=[]}=e;const s=o=>o.url?o.url.includes("vpuniverse")?{class:"variant-ghost-tertiary",icon:hc,title:"VPU",...o}:o.url.includes("vpforums")?{class:"variant-ghost-warning",icon:mc,title:"VPF",...o}:o.url.includes("drive.google")?{class:"variant-ghost-surface",icon:i_,title:"GDrive",...o}:o.url.includes("facebook")?{class:"variant-ghost-tertiary",icon:n_,title:"Facebook",...o}:o.url.includes("mega")?{class:"variant-ghost-primary",icon:gc,title:"Mega",...o}:o.url.includes("dropbox")?{class:"variant-ghost-secondary",icon:t_,title:"Dropbox",...o}:o.url.includes("zen")?{class:"variant-ghost-surface",icon:pc,title:"Zen",...o}:{class:"variant-ghost-success",icon:to,title:"Ext",...o}:{class:"variant-soft",icon:dc,title:"???",...o},a=o=>o.broken||!o.url?"This link is broken and needs to be updated.":o.url.includes("vpuniverse")?"VPUniverse":o.url.includes("vpforums")?"VP Forums":o.url.includes("zen")?"Zen Pinball":o.url.includes("dropbox")?"Dropbox":o.url.includes("mega")?"Mega":o.url.includes("facebook")?"Facebook":(o.url.includes("drive.google"),o.url);return n.$$set=o=>{"urls"in o&&t(2,r=o.urls)},n.$$.update=()=>{n.$$.dirty&4&&t(0,i=r.map(o=>s(o)).filter(o=>!!o))},[i,a,r]}class Br extends _e{constructor(e){super(),be(this,e,c_,l_,ge,{urls:2})}}function Ca(n){let e,t=n[0].comment+"",i;return{c(){e=T("p"),i=ee(t)},l(r){e=S(r,"P",{});var s=C(e);i=te(s,t),s.forEach(w)},m(r,s){j(r,e,s),I(e,i)},p(r,s){s&1&&t!==(t=r[0].comment+"")&&se(i,t)},d(r){r&&w(e)}}}function u_(n){var jt,on;let e,t,i,r,s=((jt=n[0].authors)==null?void 0:jt.join(", "))+"",a,o,l,c,f,u,d,h,b="Updated at",y,_,g=nt(n[0].updatedAt)+"",p,v,E,k,A,O,D="Added at",L,P,J=nt(n[0].createdAt||n[0].updatedAt)+"",B,M,q,ne,Z,ue,oe,G,H,W=((on=n[0].authors)==null?void 0:on.join(", "))+"",V,re,le,ce=n[0].tableFormat+"",Me,Ve,De,Se,K,Re,Pe,z,we,He=nt(n[0].createdAt||n[0].updatedAt)+"",Ht,Tt,ke,Ae=n[0].comment&&Ca(n);return c=new Br({props:{urls:n[0].urls}}),Se=new sc({props:{data:n[0].features}}),Pe=new Fr({props:{id:n[0].id}}),{c(){e=T("div"),t=T("a"),i=T("div"),r=T("p"),a=ee(s),o=U(),Ae&&Ae.c(),l=U(),X(c.$$.fragment),f=U(),u=T("div"),d=T("div"),h=T("p"),h.textContent=b,y=U(),_=T("p"),p=ee(g),v=U(),E=T("div"),k=U(),A=T("div"),O=T("p"),O.textContent=D,L=U(),P=T("p"),B=ee(J),M=U(),q=T("img"),ue=U(),oe=T("div"),G=T("div"),H=T("p"),V=ee(W),re=U(),le=T("div"),Me=ee(ce),Ve=U(),De=T("div"),X(Se.$$.fragment),K=U(),Re=T("div"),X(Pe.$$.fragment),z=U(),we=T("p"),Ht=ee(He),this.h()},l(ae){e=S(ae,"DIV",{class:!0,id:!0});var ve=C(e);t=S(ve,"A",{href:!0,target:!0,class:!0});var je=C(t);i=S(je,"DIV",{style:!0,class:!0});var Ne=C(i);r=S(Ne,"P",{class:!0});var St=C(r);a=te(St,s),St.forEach(w),o=F(Ne),Ae&&Ae.l(Ne),l=F(Ne),$(c.$$.fragment,Ne),f=F(Ne),u=S(Ne,"DIV",{class:!0});var Ze=C(u);d=S(Ze,"DIV",{class:!0});var ze=C(d);h=S(ze,"P",{class:!0,"data-svelte-h":!0}),Fe(h)!=="svelte-g6tq99"&&(h.textContent=b),y=F(ze),_=S(ze,"P",{class:!0});var Ue=C(_);p=te(Ue,g),Ue.forEach(w),ze.forEach(w),v=F(Ze),E=S(Ze,"DIV",{class:!0}),C(E).forEach(w),k=F(Ze),A=S(Ze,"DIV",{class:!0});var Ie=C(A);O=S(Ie,"P",{class:!0,"data-svelte-h":!0}),Fe(O)!=="svelte-1gbi7dm"&&(O.textContent=D),L=F(Ie),P=S(Ie,"P",{class:!0});var wn=C(P);B=te(wn,J),wn.forEach(w),Ie.forEach(w),Ze.forEach(w),Ne.forEach(w),M=F(je),q=S(je,"IMG",{src:!0,alt:!0,class:!0}),je.forEach(w),ue=F(ve),oe=S(ve,"DIV",{class:!0});var gt=C(oe);G=S(gt,"DIV",{class:!0});var fe=C(G);H=S(fe,"P",{class:!0});var Ee=C(H);V=te(Ee,W),Ee.forEach(w),re=F(fe),le=S(fe,"DIV",{class:!0});var We=C(le);Me=te(We,ce),We.forEach(w),fe.forEach(w),Ve=F(gt),De=S(gt,"DIV",{class:!0});var rt=C(De);$(Se.$$.fragment,rt),rt.forEach(w),K=F(gt),Re=S(gt,"DIV",{class:!0});var st=C(Re);$(Pe.$$.fragment,st),z=F(st),we=S(st,"P",{class:!0});var En=C(we);Ht=te(En,He),En.forEach(w),st.forEach(w),gt.forEach(w),ve.forEach(w),this.h()},h(){m(r,"class","font-bold max-h-48 overflow-hidden max-w-full"),m(h,"class","text-xs font-bold uppercase opacity-40"),m(_,"class",""),m(d,"class","flex flex-col items-center justify-center flex-1 gap-1"),m(E,"class","bg-surface-900-50-token h-full w-px opacity-20"),m(O,"class","text-xs font-bold uppercase opacity-40"),m(P,"class",""),m(A,"class","flex flex-col items-center justify-center flex-1 gap-1"),m(u,"class","flex mt-auto w-full"),ut(i,"background",n[3]?"rgba(255,255,255,.4)":"rgba(0,0,0,.4)",1),m(i,"class","card absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md p-4 gap-4 flex flex-col items-start"),bt(q.src,ne=n[0].imgUrl||xr)||m(q,"src",ne),m(q,"alt",Z=n[0].id),m(q,"class","card pinImage bg-surface-300-600-token svelte-1pai844"),qe(q,"glow",n[1]),m(t,"href",n[2]),m(t,"target","_blank"),m(t,"class","relative group"),m(H,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),m(le,"class","badge badge-glass my-auto py-0.5 px-1"),m(G,"class","flex gap-2"),m(De,"class","my-2"),m(we,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),m(Re,"class","flex justify-between"),m(oe,"class","flex flex-col py-4"),m(e,"class","wrapper relative z-0"),m(e,"id",Tt=n[0].id)},m(ae,ve){j(ae,e,ve),I(e,t),I(t,i),I(i,r),I(r,a),I(i,o),Ae&&Ae.m(i,null),I(i,l),x(c,i,null),I(i,f),I(i,u),I(u,d),I(d,h),I(d,y),I(d,_),I(_,p),I(u,v),I(u,E),I(u,k),I(u,A),I(A,O),I(A,L),I(A,P),I(P,B),I(t,M),I(t,q),I(e,ue),I(e,oe),I(oe,G),I(G,H),I(H,V),I(G,re),I(G,le),I(le,Me),I(oe,Ve),I(oe,De),x(Se,De,null),I(oe,K),I(oe,Re),x(Pe,Re,null),I(Re,z),I(Re,we),I(we,Ht),ke=!0},p(ae,[ve]){var Ze,ze;(!ke||ve&1)&&s!==(s=((Ze=ae[0].authors)==null?void 0:Ze.join(", "))+"")&&se(a,s),ae[0].comment?Ae?Ae.p(ae,ve):(Ae=Ca(ae),Ae.c(),Ae.m(i,l)):Ae&&(Ae.d(1),Ae=null);const je={};ve&1&&(je.urls=ae[0].urls),c.$set(je),(!ke||ve&1)&&g!==(g=nt(ae[0].updatedAt)+"")&&se(p,g),(!ke||ve&1)&&J!==(J=nt(ae[0].createdAt||ae[0].updatedAt)+"")&&se(B,J),(!ke||ve&8)&&ut(i,"background",ae[3]?"rgba(255,255,255,.4)":"rgba(0,0,0,.4)",1),(!ke||ve&1&&!bt(q.src,ne=ae[0].imgUrl||xr))&&m(q,"src",ne),(!ke||ve&1&&Z!==(Z=ae[0].id))&&m(q,"alt",Z),(!ke||ve&2)&&qe(q,"glow",ae[1]),(!ke||ve&4)&&m(t,"href",ae[2]),(!ke||ve&1)&&W!==(W=((ze=ae[0].authors)==null?void 0:ze.join(", "))+"")&&se(V,W),(!ke||ve&1)&&ce!==(ce=ae[0].tableFormat+"")&&se(Me,ce);const Ne={};ve&1&&(Ne.data=ae[0].features),Se.$set(Ne);const St={};ve&1&&(St.id=ae[0].id),Pe.$set(St),(!ke||ve&1)&&He!==(He=nt(ae[0].createdAt||ae[0].updatedAt)+"")&&se(Ht,He),(!ke||ve&1&&Tt!==(Tt=ae[0].id))&&m(e,"id",Tt)},i(ae){ke||(R(c.$$.fragment,ae),R(Se.$$.fragment,ae),R(Pe.$$.fragment,ae),ke=!0)},o(ae){N(c.$$.fragment,ae),N(Se.$$.fragment,ae),N(Pe.$$.fragment,ae),ke=!1},d(ae){ae&&w(e),Ae&&Ae.d(),Q(c),Q(Se),Q(Pe)}}}function f_(n,e,t){let i,r;Te(n,Cn,c=>t(3,r=c));const{dbStore:s}=dr;Te(n,s,c=>t(5,i=c));let{file:a=ac}=e,{active:o=!1}=e,{href:l=""}=e;return n.$$set=c=>{"file"in c&&t(0,a=c.file),"active"in c&&t(1,o=c.active),"href"in c&&t(2,l=c.href)},n.$$.update=()=>{var c;n.$$.dirty&33&&((c=a==null?void 0:a.game)!=null&&c.id?i[a.game.id]:si)},[a,o,l,r,s,i]}class d_ extends _e{constructor(e){super(),be(this,e,f_,u_,ge,{file:0,active:1,href:2})}}function h_(n){let e,t,i,r,s,a,o,l,c,f,u,d;s=new Yt({props:{size:"16",class:"mt-2.5",icon:_c}});const h=n[4].default,b=Ge(h,n,n[3],null);return{c(){e=T("div"),t=T("button"),i=ee(n[0]),r=U(),X(s.$$.fragment),a=U(),o=T("div"),b&&b.c(),l=U(),c=T("div"),this.h()},l(y){e=S(y,"DIV",{class:!0});var _=C(e);t=S(_,"BUTTON",{class:!0});var g=C(t);i=te(g,n[0]),r=F(g),$(s.$$.fragment,g),g.forEach(w),_.forEach(w),a=F(y),o=S(y,"DIV",{class:!0,"data-popup":!0});var p=C(o);b&&b.l(p),l=F(p),c=S(p,"DIV",{class:!0}),C(c).forEach(w),p.forEach(w),this.h()},h(){m(t,"class","h3 flex gap-2"),m(e,"class","flex items-end gap-4"),m(c,"class","arrow variant-filled-surface border-primary-500 border-s border-l border-t"),m(o,"class","card p-3 variant-filled-surface z-50 border-primary-500 border shadow-lg"),m(o,"data-popup",n[1])},m(y,_){j(y,e,_),I(e,t),I(t,i),I(t,r),x(s,t,null),j(y,a,_),j(y,o,_),b&&b.m(o,null),I(o,l),I(o,c),f=!0,u||(d=rn(Ei.call(null,t,n[2])),u=!0)},p(y,[_]){(!f||_&1)&&se(i,y[0]),b&&b.p&&(!f||_&8)&&Je(b,h,y,y[3],f?Xe(h,y[3],_,null):Ye(y[3]),null)},i(y){f||(R(s.$$.fragment,y),R(b,y),f=!0)},o(y){N(s.$$.fragment,y),N(b,y),f=!1},d(y){y&&(w(e),w(a),w(o)),Q(s),b&&b.d(y),u=!1,d()}}}function m_(n,e,t){let{$$slots:i={},$$scope:r}=e;const s=ql();let{title:a="???"}=e;const o={event:"click",target:s,placement:"bottom"};return n.$$set=l=>{"title"in l&&t(0,a=l.title),"$$scope"in l&&t(3,r=l.$$scope)},[a,s,o,r,i]}class Oi extends _e{constructor(e){super(),be(this,e,m_,h_,ge,{title:0})}}function Da(n,e,t){const i=n.slice();return i[3]=e[t],i}function Ra(n){let e,t,i,r,s;t=new Oi({props:{title:"Tables",$$slots:{default:[g_]},$$scope:{ctx:n}}});let a=Le(n[0]),o=[];for(let c=0;c<a.length;c+=1)o[c]=Pa(Da(n,a,c));const l=c=>N(o[c],1,1,()=>{o[c]=null});return{c(){e=T("div"),X(t.$$.fragment),i=U(),r=T("div");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=S(c,"DIV",{class:!0});var f=C(e);$(t.$$.fragment,f),i=F(f),r=S(f,"DIV",{class:!0});var u=C(r);for(let d=0;d<o.length;d+=1)o[d].l(u);u.forEach(w),f.forEach(w),this.h()},h(){m(r,"class","grid layout gap-y-10 gap-x-4 svelte-193p9ri"),m(e,"class","flex flex-col gap-4")},m(c,f){j(c,e,f),x(t,e,null),I(e,i),I(e,r);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(r,null);s=!0},p(c,f){const u={};if(f&64&&(u.$$scope={dirty:f,ctx:c}),t.$set(u),f&3){a=Le(c[0]);let d;for(d=0;d<a.length;d+=1){const h=Da(c,a,d);o[d]?(o[d].p(h,f),R(o[d],1)):(o[d]=Pa(h),o[d].c(),R(o[d],1),o[d].m(r,null))}for(de(),d=a.length;d<o.length;d+=1)l(d);he()}},i(c){if(!s){R(t.$$.fragment,c);for(let f=0;f<a.length;f+=1)R(o[f]);s=!0}},o(c){N(t.$$.fragment,c),o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)N(o[f]);s=!1},d(c){c&&w(e),Q(t),sn(o,c)}}}function g_(n){let e,t=`<p>Add tables to your Tables folder.</p> <p class="pre p-2 my-2">C:/PATH_TO_VPX/tables</p> <p>If you&#39;re using Popper, don&#39;t forget to add them to you Popper library and possibly a
					playlist!</p>`;return{c(){e=T("div"),e.innerHTML=t,this.h()},l(i){e=S(i,"DIV",{class:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-1w2853m"&&(e.innerHTML=t),this.h()},h(){m(e,"class","w-60")},m(i,r){j(i,e,r)},p:me,d(i){i&&w(e)}}}function Pa(n){let e,t;return e=new d_({props:{file:n[3],href:bi(n[3].urls),active:n[1]===n[3].id}}),{c(){X(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,r){x(e,i,r),t=!0},p(i,r){const s={};r&1&&(s.file=i[3]),r&1&&(s.href=bi(i[3].urls)),r&3&&(s.active=i[1]===i[3].id),e.$set(s)},i(i){t||(R(e.$$.fragment,i),t=!0)},o(i){N(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function p_(n){var r;let e,t,i=((r=n[0])==null?void 0:r.length)&&Ra(n);return{c(){i&&i.c(),e=Oe()},l(s){i&&i.l(s),e=Oe()},m(s,a){i&&i.m(s,a),j(s,e,a),t=!0},p(s,[a]){var o;(o=s[0])!=null&&o.length?i?(i.p(s,a),a&1&&R(i,1)):(i=Ra(s),i.c(),R(i,1),i.m(e.parentNode,e)):i&&(de(),N(i,1,1,()=>{i=null}),he())},i(s){t||(R(i),t=!0)},o(s){N(i),t=!1},d(s){s&&w(e),i&&i.d(s)}}}function __(n,e,t){let i,r;Te(n,yn,a=>t(2,r=a));let{tables:s=[]}=e;return n.$$set=a=>{"tables"in a&&t(0,s=a.tables)},n.$$.update=()=>{n.$$.dirty&4&&t(1,i=r.url.searchParams.get("fileId"))},[s,i,r]}class b_ extends _e{constructor(e){super(),be(this,e,__,p_,ge,{tables:0})}}function Oa(n,e,t){const i=n.slice();return i[4]=e[t],i}function La(n){let e,t=n[0].comment+"",i;return{c(){e=T("p"),i=ee(t)},l(r){e=S(r,"P",{});var s=C(e);i=te(s,t),s.forEach(w)},m(r,s){j(r,e,s),I(e,i)},p(r,s){s&1&&t!==(t=r[0].comment+"")&&se(i,t)},d(r){r&&w(e)}}}function Ma(n){let e,t=n[4]+"",i,r;return{c(){e=T("div"),i=ee(t),r=U(),this.h()},l(s){e=S(s,"DIV",{class:!0});var a=C(e);i=te(a,t),r=F(a),a.forEach(w),this.h()},h(){m(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(s,a){j(s,e,a),I(e,i),I(e,r)},p(s,a){a&1&&t!==(t=s[4]+"")&&se(i,t)},d(s){s&&w(e)}}}function v_(n){var ue,oe;let e,t,i,r,s=((ue=n[0].authors)==null?void 0:ue.join(", "))+"",a,o,l,c,f,u,d,h,b,y,_,g,p=((oe=n[0].authors)==null?void 0:oe.join(", "))+"",v,E,k,A,O,D,L,P=(nt(n[0].updatedAt)||"???")+"",J,B,M,q=n[0].comment&&La(n);c=new Br({props:{urls:n[0].urls}});let ne=Le(n[0].features||[]),Z=[];for(let G=0;G<ne.length;G+=1)Z[G]=Ma(Oa(n,ne,G));return O=new Fr({props:{id:n[0].id}}),{c(){e=T("div"),t=T("a"),i=T("div"),r=T("p"),a=ee(s),o=U(),q&&q.c(),l=U(),X(c.$$.fragment),f=U(),u=T("img"),b=U(),y=T("div"),_=T("div"),g=T("p"),v=ee(p),E=U();for(let G=0;G<Z.length;G+=1)Z[G].c();k=U(),A=T("div"),X(O.$$.fragment),D=U(),L=T("h4"),J=ee(P),this.h()},l(G){e=S(G,"DIV",{class:!0,id:!0});var H=C(e);t=S(H,"A",{href:!0,target:!0,class:!0});var W=C(t);i=S(W,"DIV",{style:!0,class:!0});var V=C(i);r=S(V,"P",{class:!0});var re=C(r);a=te(re,s),re.forEach(w),o=F(V),q&&q.l(V),l=F(V),$(c.$$.fragment,V),V.forEach(w),f=F(W),u=S(W,"IMG",{src:!0,alt:!0,class:!0}),W.forEach(w),b=F(H),y=S(H,"DIV",{class:!0});var le=C(y);_=S(le,"DIV",{class:!0});var ce=C(_);g=S(ce,"P",{class:!0});var Me=C(g);v=te(Me,p),Me.forEach(w),E=F(ce);for(let Se=0;Se<Z.length;Se+=1)Z[Se].l(ce);ce.forEach(w),k=F(le),A=S(le,"DIV",{class:!0});var Ve=C(A);$(O.$$.fragment,Ve),D=F(Ve),L=S(Ve,"H4",{class:!0});var De=C(L);J=te(De,P),De.forEach(w),Ve.forEach(w),le.forEach(w),H.forEach(w),this.h()},h(){m(r,"class","font-bold"),ut(i,"background",n[3]?"rgba(255,255,255,.4)":"rgba(0,0,0,.4)",1),m(i,"class","card absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md p-4 gap-4 flex flex-col"),bt(u.src,d=n[0].imgUrl||Qr)||m(u,"src",d),m(u,"alt",h=n[0].id),m(u,"class","card aspectTable svelte-975snz"),qe(u,"glow",n[2]),m(t,"href",n[1]),m(t,"target","_blank"),m(t,"class","relative group"),m(g,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),m(_,"class","flex gap-2"),m(L,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),m(A,"class","flex justify-between"),m(y,"class","flex flex-col py-4"),m(e,"class","flex flex-col"),m(e,"id",B=n[0].id)},m(G,H){j(G,e,H),I(e,t),I(t,i),I(i,r),I(r,a),I(i,o),q&&q.m(i,null),I(i,l),x(c,i,null),I(t,f),I(t,u),I(e,b),I(e,y),I(y,_),I(_,g),I(g,v),I(_,E);for(let W=0;W<Z.length;W+=1)Z[W]&&Z[W].m(_,null);I(y,k),I(y,A),x(O,A,null),I(A,D),I(A,L),I(L,J),M=!0},p(G,[H]){var re,le;(!M||H&1)&&s!==(s=((re=G[0].authors)==null?void 0:re.join(", "))+"")&&se(a,s),G[0].comment?q?q.p(G,H):(q=La(G),q.c(),q.m(i,l)):q&&(q.d(1),q=null);const W={};if(H&1&&(W.urls=G[0].urls),c.$set(W),(!M||H&8)&&ut(i,"background",G[3]?"rgba(255,255,255,.4)":"rgba(0,0,0,.4)",1),(!M||H&1&&!bt(u.src,d=G[0].imgUrl||Qr))&&m(u,"src",d),(!M||H&1&&h!==(h=G[0].id))&&m(u,"alt",h),(!M||H&4)&&qe(u,"glow",G[2]),(!M||H&2)&&m(t,"href",G[1]),(!M||H&1)&&p!==(p=((le=G[0].authors)==null?void 0:le.join(", "))+"")&&se(v,p),H&1){ne=Le(G[0].features||[]);let ce;for(ce=0;ce<ne.length;ce+=1){const Me=Oa(G,ne,ce);Z[ce]?Z[ce].p(Me,H):(Z[ce]=Ma(Me),Z[ce].c(),Z[ce].m(_,null))}for(;ce<Z.length;ce+=1)Z[ce].d(1);Z.length=ne.length}const V={};H&1&&(V.id=G[0].id),O.$set(V),(!M||H&1)&&P!==(P=(nt(G[0].updatedAt)||"???")+"")&&se(J,P),(!M||H&1&&B!==(B=G[0].id))&&m(e,"id",B)},i(G){M||(R(c.$$.fragment,G),R(O.$$.fragment,G),M=!0)},o(G){N(c.$$.fragment,G),N(O.$$.fragment,G),M=!1},d(G){G&&w(e),q&&q.d(),Q(c),sn(Z,G),Q(O)}}}function y_(n,e,t){let i;Te(n,Cn,o=>t(3,i=o));let{file:r=eo}=e,{href:s=""}=e,{active:a=!1}=e;return n.$$set=o=>{"file"in o&&t(0,r=o.file),"href"in o&&t(1,s=o.href),"active"in o&&t(2,a=o.active)},[r,s,a,i]}class I_ extends _e{constructor(e){super(),be(this,e,y_,v_,ge,{file:0,href:1,active:2})}}function Na(n,e,t){const i=n.slice();return i[3]=e[t],i}function Ua(n){let e,t,i,r,s;t=new Oi({props:{title:"Backglasses",$$slots:{default:[w_]},$$scope:{ctx:n}}});let a=Le(n[0]),o=[];for(let c=0;c<a.length;c+=1)o[c]=Fa(Na(n,a,c));const l=c=>N(o[c],1,1,()=>{o[c]=null});return{c(){e=T("div"),X(t.$$.fragment),i=U(),r=T("div");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=S(c,"DIV",{class:!0});var f=C(e);$(t.$$.fragment,f),i=F(f),r=S(f,"DIV",{class:!0});var u=C(r);for(let d=0;d<o.length;d+=1)o[d].l(u);u.forEach(w),f.forEach(w),this.h()},h(){m(r,"class","grid layout gap-y-10 gap-x-4 svelte-193p9ri"),m(e,"class","flex flex-col gap-4")},m(c,f){j(c,e,f),x(t,e,null),I(e,i),I(e,r);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(r,null);s=!0},p(c,f){const u={};if(f&64&&(u.$$scope={dirty:f,ctx:c}),t.$set(u),f&3){a=Le(c[0]);let d;for(d=0;d<a.length;d+=1){const h=Na(c,a,d);o[d]?(o[d].p(h,f),R(o[d],1)):(o[d]=Fa(h),o[d].c(),R(o[d],1),o[d].m(r,null))}for(de(),d=a.length;d<o.length;d+=1)l(d);he()}},i(c){if(!s){R(t.$$.fragment,c);for(let f=0;f<a.length;f+=1)R(o[f]);s=!0}},o(c){N(t.$$.fragment,c),o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)N(o[f]);s=!1},d(c){c&&w(e),Q(t),sn(o,c)}}}function w_(n){let e,t=`<p>Add backglasses the same folder as your table.</p> <p class="pre p-2 my-2">C:/PATH_TO_VPX/tables</p> <p>Name the file exactly the same as your table to be safe. B2S will find similar files to
					the table, this can lead to conflicts though.</p>`;return{c(){e=T("div"),e.innerHTML=t,this.h()},l(i){e=S(i,"DIV",{class:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-128m9g5"&&(e.innerHTML=t),this.h()},h(){m(e,"class","w-60")},m(i,r){j(i,e,r)},p:me,d(i){i&&w(e)}}}function Fa(n){let e,t;return e=new I_({props:{file:n[3],href:bi(n[3].urls),active:n[1]===n[3].id}}),{c(){X(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,r){x(e,i,r),t=!0},p(i,r){const s={};r&1&&(s.file=i[3]),r&1&&(s.href=bi(i[3].urls)),r&3&&(s.active=i[1]===i[3].id),e.$set(s)},i(i){t||(R(e.$$.fragment,i),t=!0)},o(i){N(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function E_(n){var r;let e,t,i=((r=n[0])==null?void 0:r.length)&&Ua(n);return{c(){i&&i.c(),e=Oe()},l(s){i&&i.l(s),e=Oe()},m(s,a){i&&i.m(s,a),j(s,e,a),t=!0},p(s,[a]){var o;(o=s[0])!=null&&o.length?i?(i.p(s,a),a&1&&R(i,1)):(i=Ua(s),i.c(),R(i,1),i.m(e.parentNode,e)):i&&(de(),N(i,1,1,()=>{i=null}),he())},i(s){t||(R(i),t=!0)},o(s){N(i),t=!1},d(s){s&&w(e),i&&i.d(s)}}}function k_(n,e,t){let i,r;Te(n,yn,a=>t(2,r=a));let{b2ss:s=[eo]}=e;return n.$$set=a=>{"b2ss"in a&&t(0,s=a.b2ss)},n.$$.update=()=>{n.$$.dirty&4&&t(1,i=r.url.searchParams.get("fileId"))},[s,i,r]}class T_ extends _e{constructor(e){super(),be(this,e,k_,E_,ge,{b2ss:0})}}function Ba(n,e,t){const i=n.slice();return i[6]=e[t],i[8]=t,i}function Va(n){let e,t,i,r,s,a,o,l,c="<tr><th>Version</th> <th>Authors</th> <th>Comment</th> <th>URLs</th> <th>Updated at</th></tr>",f,u,d;const h=n[5].default,b=Ge(h,n,n[4],null);let y=n[0]&&Ha(n),_=Le(n[1]),g=[];for(let v=0;v<_.length;v+=1)g[v]=ja(Ba(n,_,v));const p=v=>N(g[v],1,1,()=>{g[v]=null});return{c(){e=T("hr"),t=U(),i=T("div"),b&&b.c(),r=U(),y&&y.c(),s=U(),a=T("div"),o=T("table"),l=T("thead"),l.innerHTML=c,f=U(),u=T("tbody");for(let v=0;v<g.length;v+=1)g[v].c();this.h()},l(v){e=S(v,"HR",{class:!0}),t=F(v),i=S(v,"DIV",{class:!0});var E=C(i);b&&b.l(E),r=F(E),y&&y.l(E),s=F(E),a=S(E,"DIV",{class:!0});var k=C(a);o=S(k,"TABLE",{class:!0});var A=C(o);l=S(A,"THEAD",{"data-svelte-h":!0}),Fe(l)!=="svelte-9x0ged"&&(l.innerHTML=c),f=F(A),u=S(A,"TBODY",{});var O=C(u);for(let D=0;D<g.length;D+=1)g[D].l(O);O.forEach(w),A.forEach(w),k.forEach(w),E.forEach(w),this.h()},h(){m(e,"class","-mx-8"),m(o,"class","table table-hover table-compact"),m(a,"class","table-container"),m(i,"class","flex flex-col gap-4")},m(v,E){j(v,e,E),j(v,t,E),j(v,i,E),b&&b.m(i,null),I(i,r),y&&y.m(i,null),I(i,s),I(i,a),I(a,o),I(o,l),I(o,f),I(o,u);for(let k=0;k<g.length;k+=1)g[k]&&g[k].m(u,null);d=!0},p(v,E){if(b&&b.p&&(!d||E&16)&&Je(b,h,v,v[4],d?Xe(h,v[4],E,null):Ye(v[4]),null),v[0]?y?y.p(v,E):(y=Ha(v),y.c(),y.m(i,s)):y&&(y.d(1),y=null),E&6){_=Le(v[1]);let k;for(k=0;k<_.length;k+=1){const A=Ba(v,_,k);g[k]?(g[k].p(A,E),R(g[k],1)):(g[k]=ja(A),g[k].c(),R(g[k],1),g[k].m(u,null))}for(de(),k=_.length;k<g.length;k+=1)p(k);he()}},i(v){if(!d){R(b,v);for(let E=0;E<_.length;E+=1)R(g[E]);d=!0}},o(v){N(b,v),g=g.filter(Boolean);for(let E=0;E<g.length;E+=1)N(g[E]);d=!1},d(v){v&&(w(e),w(t),w(i)),b&&b.d(v),y&&y.d(),sn(g,v)}}}function Ha(n){let e,t;return{c(){e=T("h3"),t=ee(n[0]),this.h()},l(i){e=S(i,"H3",{class:!0});var r=C(e);t=te(r,n[0]),r.forEach(w),this.h()},h(){m(e,"class","h3 flex gap-2")},m(i,r){j(i,e,r),I(e,t)},p(i,r){r&1&&se(t,i[0])},d(i){i&&w(e)}}}function ja(n){var O;let e,t,i=(n[6].version||"")+"",r,s,a,o=(((O=n[6].authors)==null?void 0:O.join(", "))||"")+"",l,c,f,u=(n[6].comment||"")+"",d,h,b,y,_,g,p=nt(n[6].updatedAt)+"",v,E,k,A;return y=new Br({props:{urls:n[6].urls}}),{c(){e=T("tr"),t=T("td"),r=ee(i),s=U(),a=T("td"),l=ee(o),c=U(),f=T("td"),d=ee(u),h=U(),b=T("td"),X(y.$$.fragment),_=U(),g=T("td"),v=ee(p),E=U(),this.h()},l(D){e=S(D,"TR",{id:!0,class:!0});var L=C(e);t=S(L,"TD",{class:!0});var P=C(t);r=te(P,i),P.forEach(w),s=F(L),a=S(L,"TD",{class:!0});var J=C(a);l=te(J,o),J.forEach(w),c=F(L),f=S(L,"TD",{});var B=C(f);d=te(B,u),B.forEach(w),h=F(L),b=S(L,"TD",{class:!0});var M=C(b);$(y.$$.fragment,M),M.forEach(w),_=F(L),g=S(L,"TD",{class:!0});var q=C(g);v=te(q,p),q.forEach(w),E=F(L),L.forEach(w),this.h()},h(){m(t,"class","w-20"),m(a,"class","w-56"),m(b,"class","w-40"),m(g,"class","w-32"),m(e,"id",k=n[6].id),m(e,"class","svelte-11un9m4"),qe(e,"glow",n[2]===n[6].id)},m(D,L){j(D,e,L),I(e,t),I(t,r),I(e,s),I(e,a),I(a,l),I(e,c),I(e,f),I(f,d),I(e,h),I(e,b),x(y,b,null),I(e,_),I(e,g),I(g,v),I(e,E),A=!0},p(D,L){var J;(!A||L&2)&&i!==(i=(D[6].version||"")+"")&&se(r,i),(!A||L&2)&&o!==(o=(((J=D[6].authors)==null?void 0:J.join(", "))||"")+"")&&se(l,o),(!A||L&2)&&u!==(u=(D[6].comment||"")+"")&&se(d,u);const P={};L&2&&(P.urls=D[6].urls),y.$set(P),(!A||L&2)&&p!==(p=nt(D[6].updatedAt)+"")&&se(v,p),(!A||L&2&&k!==(k=D[6].id))&&m(e,"id",k),(!A||L&6)&&qe(e,"glow",D[2]===D[6].id)},i(D){A||(R(y.$$.fragment,D),A=!0)},o(D){N(y.$$.fragment,D),A=!1},d(D){D&&w(e),Q(y)}}}function S_(n){var r;let e,t,i=((r=n[1])==null?void 0:r.length)&&Va(n);return{c(){i&&i.c(),e=Oe()},l(s){i&&i.l(s),e=Oe()},m(s,a){i&&i.m(s,a),j(s,e,a),t=!0},p(s,[a]){var o;(o=s[1])!=null&&o.length?i?(i.p(s,a),a&2&&R(i,1)):(i=Va(s),i.c(),R(i,1),i.m(e.parentNode,e)):i&&(de(),N(i,1,1,()=>{i=null}),he())},i(s){t||(R(i),t=!0)},o(s){N(i),t=!1},d(s){s&&w(e),i&&i.d(s)}}}function A_(n,e,t){let i,r;Te(n,yn,c=>t(3,r=c));let{$$slots:s={},$$scope:a}=e,{title:o}=e,{files:l=[]}=e;return n.$$set=c=>{"title"in c&&t(0,o=c.title),"files"in c&&t(1,l=c.files),"$$scope"in c&&t(4,a=c.$$scope)},n.$$.update=()=>{n.$$.dirty&8&&t(2,i=r.url.searchParams.get("fileId"))},[o,l,i,r,a,s]}class Ct extends _e{constructor(e){super(),be(this,e,A_,S_,ge,{title:0,files:1})}}function C_(n){let e,t='<p>Add roms to your rom folder.</p> <p class="pre p-2 my-2">C:/PATH_TO_VPX/vpinmame/roms</p> <p>Roms are in a zip. Don&#39;t unpack them, don&#39;t rename them :)</p>';return{c(){e=T("div"),e.innerHTML=t,this.h()},l(i){e=S(i,"DIV",{class:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-3gps4w"&&(e.innerHTML=t),this.h()},h(){m(e,"class","w-60")},m(i,r){j(i,e,r)},p:me,d(i){i&&w(e)}}}function D_(n){let e,t;return e=new Oi({props:{title:"Roms",$$slots:{default:[C_]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,r){x(e,i,r),t=!0},p(i,r){const s={};r&1024&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){t||(R(e.$$.fragment,i),t=!0)},o(i){N(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function R_(n){let e,t='<p>Open your table in VPX and go to.</p> <p class="pre p-2 my-2">File -&gt; Import -&gt; POV</p> <p>to import the POV.</p>';return{c(){e=T("div"),e.innerHTML=t,this.h()},l(i){e=S(i,"DIV",{class:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-1p4gn1b"&&(e.innerHTML=t),this.h()},h(){m(e,"class","w-60")},m(i,r){j(i,e,r)},p:me,d(i){i&&w(e)}}}function P_(n){let e,t;return e=new Oi({props:{title:"POV",$$slots:{default:[R_]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,r){x(e,i,r),t=!0},p(i,r){const s={};r&1024&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){t||(R(e.$$.fragment,i),t=!0)},o(i){N(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function O_(n){let e,t,i,r,s,a,o,l,c,f,u,d,h,b,y,_,g,p,v,E,k,A,O,D,L,P,J;return t=new e_({props:{game:n[0]}}),a=new b_({props:{tables:n[0].tableFiles}}),f=new T_({props:{b2ss:n[0].b2sFiles}}),d=new Ct({props:{files:n[0].romFiles,$$slots:{default:[D_]},$$scope:{ctx:n}}}),b=new Ct({props:{files:n[0].pupPackFiles,title:"PuP Packs"}}),_=new Ct({props:{files:n[0].altColorFiles,title:"Alt. Color"}}),p=new Ct({props:{files:n[0].altSoundFiles,title:"Alt. Sound"}}),E=new Ct({props:{files:n[0].povFiles,$$slots:{default:[P_]},$$scope:{ctx:n}}}),A=new Ct({props:{files:n[0].wheelArtFiles,title:"Wheelart"}}),D=new Ct({props:{files:n[0].topperFiles,title:"Topper"}}),P=new Ct({props:{files:n[0].mediaPackFiles,title:"Media Packs"}}),{c(){e=T("div"),X(t.$$.fragment),i=U(),r=T("hr"),s=U(),X(a.$$.fragment),o=U(),l=T("hr"),c=U(),X(f.$$.fragment),u=U(),X(d.$$.fragment),h=U(),X(b.$$.fragment),y=U(),X(_.$$.fragment),g=U(),X(p.$$.fragment),v=U(),X(E.$$.fragment),k=U(),X(A.$$.fragment),O=U(),X(D.$$.fragment),L=U(),X(P.$$.fragment),this.h()},l(B){e=S(B,"DIV",{class:!0,style:!0});var M=C(e);$(t.$$.fragment,M),i=F(M),r=S(M,"HR",{class:!0}),s=F(M),$(a.$$.fragment,M),o=F(M),l=S(M,"HR",{class:!0}),c=F(M),$(f.$$.fragment,M),u=F(M),$(d.$$.fragment,M),h=F(M),$(b.$$.fragment,M),y=F(M),$(_.$$.fragment,M),g=F(M),$(p.$$.fragment,M),v=F(M),$(E.$$.fragment,M),k=F(M),$(A.$$.fragment,M),O=F(M),$(D.$$.fragment,M),L=F(M),$(P.$$.fragment,M),M.forEach(w),this.h()},h(){m(r,"class","-mx-8"),m(l,"class","-mx-8"),m(e,"class","card p-8 py-10 w-full max-w-5xl flex flex-col gap-12 bg-top"),ut(e,"background-image","radial-gradient( at 0% -40%, "+n[1]+" 0px, transparent 50% ), radial-gradient(at 98% -40%, "+n[2]+" 0px, transparent 50%)")},m(B,M){j(B,e,M),x(t,e,null),I(e,i),I(e,r),I(e,s),x(a,e,null),I(e,o),I(e,l),I(e,c),x(f,e,null),I(e,u),x(d,e,null),I(e,h),x(b,e,null),I(e,y),x(_,e,null),I(e,g),x(p,e,null),I(e,v),x(E,e,null),I(e,k),x(A,e,null),I(e,O),x(D,e,null),I(e,L),x(P,e,null),J=!0},p(B,[M]){const q={};M&1&&(q.game=B[0]),t.$set(q);const ne={};M&1&&(ne.tables=B[0].tableFiles),a.$set(ne);const Z={};M&1&&(Z.b2ss=B[0].b2sFiles),f.$set(Z);const ue={};M&1&&(ue.files=B[0].romFiles),M&1024&&(ue.$$scope={dirty:M,ctx:B}),d.$set(ue);const oe={};M&1&&(oe.files=B[0].pupPackFiles),b.$set(oe);const G={};M&1&&(G.files=B[0].altColorFiles),_.$set(G);const H={};M&1&&(H.files=B[0].altSoundFiles),p.$set(H);const W={};M&1&&(W.files=B[0].povFiles),M&1024&&(W.$$scope={dirty:M,ctx:B}),E.$set(W);const V={};M&1&&(V.files=B[0].wheelArtFiles),A.$set(V);const re={};M&1&&(re.files=B[0].topperFiles),D.$set(re);const le={};M&1&&(le.files=B[0].mediaPackFiles),P.$set(le),(!J||M&6)&&ut(e,"background-image","radial-gradient( at 0% -40%, "+B[1]+" 0px, transparent 50% ), radial-gradient(at 98% -40%, "+B[2]+" 0px, transparent 50%)")},i(B){J||(R(t.$$.fragment,B),R(a.$$.fragment,B),R(f.$$.fragment,B),R(d.$$.fragment,B),R(b.$$.fragment,B),R(_.$$.fragment,B),R(p.$$.fragment,B),R(E.$$.fragment,B),R(A.$$.fragment,B),R(D.$$.fragment,B),R(P.$$.fragment,B),J=!0)},o(B){N(t.$$.fragment,B),N(a.$$.fragment,B),N(f.$$.fragment,B),N(d.$$.fragment,B),N(b.$$.fragment,B),N(_.$$.fragment,B),N(p.$$.fragment,B),N(E.$$.fragment,B),N(A.$$.fragment,B),N(D.$$.fragment,B),N(P.$$.fragment,B),J=!1},d(B){B&&w(e),Q(t),Q(a),Q(f),Q(d),Q(b),Q(_),Q(p),Q(E),Q(A),Q(D),Q(P)}}}function L_(n,e,t){let i,r,s,a,o;Te(n,yn,h=>t(6,s=h));const{dbStore:l}=dr;Te(n,l,h=>t(7,a=h));const c=hr();Te(n,c,h=>t(8,o=h));let f="rgba(var(--color-tertiary-500) / 0.1)",u="rgba(var(--color-primary-500) / 0.1)";const d=new oc;return Jl(()=>{Wl(s.url.pathname)}),n.$$.update=()=>{var h,b;if(n.$$.dirty&256&&t(5,i=(b=(h=o[0])==null?void 0:h.meta)==null?void 0:b.game),n.$$.dirty&160&&t(0,r=(i?a[i]:si)||si),n.$$.dirty&64)e:{const y=s.url.searchParams.get("fileId");if(console.log(y),!y)break e;setTimeout(()=>{const _=document.getElementById(y);console.log(_),_==null||_.scrollIntoView({behavior:"smooth",block:"center"})},100)}n.$$.dirty&1&&r.imgUrl&&(d.getColorAsync(r.imgUrl,{left:0,width:80}).then(y=>{t(1,f=y.rgba.replace(",1)",",0.6)"))}),d.getColorAsync(r.imgUrl,{left:200,width:80}).then(y=>{t(2,u=y.rgba.replace(",1)",",0.6)"))}))},[r,f,u,l,c,i,s,a,o]}class M_ extends _e{constructor(e){super(),be(this,e,L_,O_,ge,{})}}function N_(n,e,t){let i;Te(n,yn,s=>t(0,i=s));const r={ref:M_,slot:"<p>Skeleton</p>"};return n.$$.update=()=>{var s;if(n.$$.dirty&1){const a=(s=i==null?void 0:i.url)==null?void 0:s.searchParams;if(a){const o=a.get("game");if(o){const l={type:"component",meta:{game:o},component:r};hr().trigger(l)}}}},[i]}class U_ extends _e{constructor(e){super(),be(this,e,N_,null,ge,{})}}function F_(n){let e,t,i,r,s=n[0].user.displayName+"",a,o,l,c="Logout",f,u,d;return t=new lo({props:{src:n[0].user.photoURL||"",width:"w-6",rounded:"rounded-full"}}),{c(){e=T("div"),X(t.$$.fragment),i=U(),r=T("span"),a=ee(s),o=U(),l=T("button"),l.textContent=c,this.h()},l(h){e=S(h,"DIV",{class:!0});var b=C(e);$(t.$$.fragment,b),i=F(b),r=S(b,"SPAN",{});var y=C(r);a=te(y,s),y.forEach(w),b.forEach(w),o=F(h),l=S(h,"BUTTON",{class:!0,"data-svelte-h":!0}),Fe(l)!=="svelte-nsylsw"&&(l.textContent=c),this.h()},h(){m(e,"class","space-x-2 flex items-center"),m(l,"class","btn w-full variant-filled-secondary")},m(h,b){j(h,e,b),x(t,e,null),I(e,i),I(e,r),I(r,a),j(h,o,b),j(h,l,b),f=!0,u||(d=Y(l,"click",Wn.logout),u=!0)},p(h,b){const y={};b&1&&(y.src=h[0].user.photoURL||""),t.$set(y),(!f||b&1)&&s!==(s=h[0].user.displayName+"")&&se(a,s)},i(h){f||(R(t.$$.fragment,h),f=!0)},o(h){N(t.$$.fragment,h),f=!1},d(h){h&&(w(e),w(o),w(l)),Q(t),u=!1,d()}}}function B_(n){let e,t="Admin Login",i,r;return{c(){e=T("button"),e.textContent=t,this.h()},l(s){e=S(s,"BUTTON",{class:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-e3s47o"&&(e.textContent=t),this.h()},h(){m(e,"class","btn btn-sm variant-ghost-surface")},m(s,a){j(s,e,a),i||(r=Y(e,"click",Wn.triggerLoginPopup),i=!0)},p:me,i:me,o:me,d(s){s&&w(e),i=!1,r()}}}function V_(n){let e,t,i,r,s,a,o,l,c,f,u,d,h,b;s=new zu({});const y=[B_,F_],_=[];function g(p,v){return p[0].user?1:0}return f=g(n),u=_[f]=y[f](n),{c(){e=T("div"),t=T("div"),i=T("div"),r=ee("Toggle Dark/Light "),X(s.$$.fragment),a=U(),o=T("hr"),l=U(),c=T("div"),u.c(),d=U(),h=T("div"),this.h()},l(p){e=S(p,"DIV",{class:!0,"data-popup":!0});var v=C(e);t=S(v,"DIV",{class:!0});var E=C(t);i=S(E,"DIV",{class:!0});var k=C(i);r=te(k,"Toggle Dark/Light "),$(s.$$.fragment,k),k.forEach(w),E.forEach(w),a=F(v),o=S(v,"HR",{}),l=F(v),c=S(v,"DIV",{class:!0});var A=C(c);u.l(A),A.forEach(w),d=F(v),h=S(v,"DIV",{class:!0}),C(h).forEach(w),v.forEach(w),this.h()},h(){m(i,"class","flex justify-between items-center gap-8 text-sm"),m(t,"class","p-4"),m(c,"class","p-4 flex flex-col gap-4"),m(h,"class","arrow bg-surface-100-800-token"),m(e,"class","card 8 shadow-xl popup"),m(e,"data-popup","popupSettings")},m(p,v){j(p,e,v),I(e,t),I(t,i),I(i,r),x(s,i,null),I(e,a),I(e,o),I(e,l),I(e,c),_[f].m(c,null),I(e,d),I(e,h),b=!0},p(p,[v]){let E=f;f=g(p),f===E?_[f].p(p,v):(de(),N(_[E],1,1,()=>{_[E]=null}),he(),u=_[f],u?u.p(p,v):(u=_[f]=y[f](p),u.c()),R(u,1),u.m(c,null))},i(p){b||(R(s.$$.fragment,p),R(u),b=!0)},o(p){N(s.$$.fragment,p),N(u),b=!1},d(p){p&&w(e),Q(s),_[f].d()}}}function H_(n,e,t){let i;const{userStore:r}=Wn;return Te(n,r,s=>t(0,i=s)),[i,r]}class j_ extends _e{constructor(e){super(),be(this,e,H_,V_,ge,{})}}function z_(n){var _,g;let e,t,i,r,s,a=((_=n[0].user)==null?void 0:_.displayName)+"",o,l,c,f="Logout",u,d,h,b,y;return i=new lo({props:{src:((g=n[0].user)==null?void 0:g.photoURL)||"",width:"w-12",rounded:"rounded-full"}}),{c(){e=T("div"),t=T("div"),X(i.$$.fragment),r=U(),s=T("b"),o=ee(a),l=U(),c=T("button"),c.textContent=f,u=U(),d=T("div"),this.h()},l(p){e=S(p,"DIV",{class:!0,"data-popup":!0});var v=C(e);t=S(v,"DIV",{class:!0});var E=C(t);$(i.$$.fragment,E),r=F(E),s=S(E,"B",{});var k=C(s);o=te(k,a),k.forEach(w),l=F(E),c=S(E,"BUTTON",{class:!0,"data-svelte-h":!0}),Fe(c)!=="svelte-nsylsw"&&(c.textContent=f),E.forEach(w),u=F(v),d=S(v,"DIV",{class:!0}),C(d).forEach(w),v.forEach(w),this.h()},h(){m(c,"class","btn w-full variant-filled-secondary"),m(t,"class","flex flex-col space-y-2"),m(d,"class","arrow bg-surface-100-800-token"),m(e,"class","card p-4 w-72 shadow-xl popup"),m(e,"data-popup","popupUser")},m(p,v){j(p,e,v),I(e,t),x(i,t,null),I(t,r),I(t,s),I(s,o),I(t,l),I(t,c),I(e,u),I(e,d),h=!0,b||(y=Y(c,"click",Wn.logout),b=!0)},p(p,[v]){var k,A;const E={};v&1&&(E.src=((k=p[0].user)==null?void 0:k.photoURL)||""),i.$set(E),(!h||v&1)&&a!==(a=((A=p[0].user)==null?void 0:A.displayName)+"")&&se(o,a)},i(p){h||(R(i.$$.fragment,p),h=!0)},o(p){N(i.$$.fragment,p),h=!1},d(p){p&&w(e),Q(i),b=!1,y()}}}function W_(n,e,t){let i;const{userStore:r}=Wn;return Te(n,r,s=>t(0,i=s)),[i,r]}class q_ extends _e{constructor(e){super(),be(this,e,W_,z_,ge,{})}}function K_(n){let e,t,i,r;return e=new q_({}),i=new j_({}),{c(){X(e.$$.fragment),t=U(),X(i.$$.fragment)},l(s){$(e.$$.fragment,s),t=F(s),$(i.$$.fragment,s)},m(s,a){x(e,s,a),j(s,t,a),x(i,s,a),r=!0},p:me,i(s){r||(R(e.$$.fragment,s),R(i.$$.fragment,s),r=!0)},o(s){N(e.$$.fragment,s),N(i.$$.fragment,s),r=!1},d(s){s&&w(t),Q(e,s),Q(i,s)}}}class G_ extends _e{constructor(e){super(),be(this,e,null,K_,ge,{})}}function za(n,e,t){const i=n.slice();return i[43]=e[t].id,i[44]=e[t].val,i[46]=t,i}function Wa(n,e,t){const i=n.slice();return i[47]=e[t],i}function qa(n){let e,t=n[47]+"",i,r;return{c(){e=T("option"),i=ee(t),this.h()},l(s){e=S(s,"OPTION",{});var a=C(e);i=te(a,t),a.forEach(w),this.h()},h(){e.__value=r=n[47],vt(e,e.__value)},m(s,a){j(s,e,a),I(e,i)},p(s,a){a[0]&1&&t!==(t=s[47]+"")&&se(i,t),a[0]&1&&r!==(r=s[47])&&(e.__value=r,vt(e,e.__value))},d(s){s&&w(e)}}}function Ka(n){let e,t=[],i=new Map,r,s,a,o=Le(n[11]);const l=c=>c[43];for(let c=0;c<o.length;c+=1){let f=za(n,o,c),u=l(f);i.set(u,t[c]=Ga(u,f))}return{c(){e=T("div");for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l(c){e=S(c,"DIV",{class:!0});var f=C(e);for(let u=0;u<t.length;u+=1)t[u].l(f);f.forEach(w),this.h()},h(){m(e,"class",r="input-chip-list "+n[8])},m(c,f){j(c,e,f);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null);a=!0},p(c,f){if(n=c,f[0]&18472){o=Le(n[11]),de();for(let u=0;u<t.length;u+=1)t[u].r();t=fr(t,f,l,1,n,o,i,e,Za,Ga,null,za);for(let u=0;u<t.length;u+=1)t[u].a();he()}(!a||f[0]&256&&r!==(r="input-chip-list "+n[8]))&&m(e,"class",r)},i(c){if(!a){for(let f=0;f<o.length;f+=1)R(t[f]);c&&Ft(()=>{a&&(s||(s=gn(e,pn,{duration:n[3],opacity:0,y:-20},!0)),s.run(1))}),a=!0}},o(c){for(let f=0;f<t.length;f+=1)N(t[f]);c&&(s||(s=gn(e,pn,{duration:n[3],opacity:0,y:-20},!1)),s.run(0)),a=!1},d(c){c&&w(e);for(let f=0;f<t.length;f+=1)t[f].d();c&&s&&s.end()}}}function Ga(n,e){let t,i,r,s=e[44]+"",a,o,l,c="✕",f,u,d,h,b=me,y,_,g;function p(...v){return e[38](e[46],e[44],...v)}return{key:n,first:null,c(){t=T("div"),i=T("button"),r=T("span"),a=ee(s),o=U(),l=T("span"),l.textContent=c,d=U(),this.h()},l(v){t=S(v,"DIV",{});var E=C(t);i=S(E,"BUTTON",{type:!0,class:!0});var k=C(i);r=S(k,"SPAN",{});var A=C(r);a=te(A,s),A.forEach(w),o=F(k),l=S(k,"SPAN",{"data-svelte-h":!0}),Fe(l)!=="svelte-1p578dz"&&(l.textContent=c),k.forEach(w),d=F(E),E.forEach(w),this.h()},h(){m(i,"type","button"),m(i,"class",f="chip "+e[5]),this.first=t},m(v,E){j(v,t,E),I(t,i),I(i,r),I(r,a),I(i,o),I(i,l),I(t,d),y=!0,_||(g=[Y(i,"click",p),Y(i,"click",e[28]),Y(i,"keypress",e[29]),Y(i,"keydown",e[30]),Y(i,"keyup",e[31])],_=!0)},p(v,E){e=v,(!y||E[0]&2048)&&s!==(s=e[44]+"")&&se(a,s),(!y||E[0]&32&&f!==(f="chip "+e[5]))&&m(i,"class",f)},r(){h=t.getBoundingClientRect()},f(){io(t),b()},a(){b(),b=no(t,h,co,{duration:e[3]})},i(v){y||(v&&Ft(()=>{y&&(u||(u=gn(i,ts,{duration:e[3],opacity:0},!0)),u.run(1))}),y=!0)},o(v){v&&(u||(u=gn(i,ts,{duration:e[3],opacity:0},!1)),u.run(0)),y=!1},d(v){v&&w(t),v&&u&&u.end(),_=!1,tt(g)}}}function J_(n){let e,t,i,r,s,a,o,l,c,f,u,d,h,b,y,_,g=Le(n[0]),p=[];for(let E=0;E<g.length;E+=1)p[E]=qa(Wa(n,g,E));let v=n[11].length&&Ka(n);return{c(){e=T("div"),t=T("div"),i=T("select");for(let E=0;E<p.length;E+=1)p[E].c();r=U(),s=T("div"),a=T("form"),o=T("input"),u=U(),v&&v.c(),this.h()},l(E){e=S(E,"DIV",{class:!0});var k=C(e);t=S(k,"DIV",{class:!0});var A=C(t);i=S(A,"SELECT",{name:!0,tabindex:!0});var O=C(i);for(let P=0;P<p.length;P+=1)p[P].l(O);O.forEach(w),A.forEach(w),r=F(k),s=S(k,"DIV",{class:!0});var D=C(s);a=S(D,"FORM",{});var L=C(a);o=S(L,"INPUT",{type:!0,placeholder:!0,class:!0}),L.forEach(w),u=F(D),v&&v.l(D),D.forEach(w),k.forEach(w),this.h()},h(){m(i,"name",n[2]),i.multiple=!0,i.required=n[4],m(i,"tabindex","-1"),n[0]===void 0&&Ft(()=>n[36].call(i)),m(t,"class","h-0 overflow-hidden"),m(o,"type","text"),m(o,"placeholder",l=n[15].placeholder??"Enter values..."),m(o,"class",c="input-chip-field "+n[7]),o.disabled=f=n[15].disabled,m(s,"class",d="input-chip-interface "+n[9]),m(e,"class",h="input-chip "+n[10]),qe(e,"opacity-50",n[15].disabled)},m(E,k){j(E,e,k),I(e,t),I(t,i);for(let A=0;A<p.length;A+=1)p[A]&&p[A].m(i,null);n[35](i),Gr(i,n[0]),I(e,r),I(e,s),I(s,a),I(a,o),vt(o,n[1]),I(s,u),v&&v.m(s,null),b=!0,y||(_=[Y(i,"change",n[36]),Y(o,"input",n[37]),Y(o,"input",n[12]),Y(o,"input",n[32]),Y(o,"focus",n[33]),Y(o,"blur",n[34]),Y(a,"submit",n[13])],y=!0)},p(E,k){if(k[0]&1){g=Le(E[0]);let A;for(A=0;A<g.length;A+=1){const O=Wa(E,g,A);p[A]?p[A].p(O,k):(p[A]=qa(O),p[A].c(),p[A].m(i,null))}for(;A<p.length;A+=1)p[A].d(1);p.length=g.length}(!b||k[0]&4)&&m(i,"name",E[2]),(!b||k[0]&16)&&(i.required=E[4]),k[0]&1&&Gr(i,E[0]),(!b||k[0]&32768&&l!==(l=E[15].placeholder??"Enter values..."))&&m(o,"placeholder",l),(!b||k[0]&128&&c!==(c="input-chip-field "+E[7]))&&m(o,"class",c),(!b||k[0]&32768&&f!==(f=E[15].disabled))&&(o.disabled=f),k[0]&2&&o.value!==E[1]&&vt(o,E[1]),E[11].length?v?(v.p(E,k),k[0]&2048&&R(v,1)):(v=Ka(E),v.c(),R(v,1),v.m(s,null)):v&&(de(),N(v,1,1,()=>{v=null}),he()),(!b||k[0]&512&&d!==(d="input-chip-interface "+E[9]))&&m(s,"class",d),(!b||k[0]&1024&&h!==(h="input-chip "+E[10]))&&m(e,"class",h),(!b||k[0]&33792)&&qe(e,"opacity-50",E[15].disabled)},i(E){b||(R(v),b=!0)},o(E){N(v),b=!1},d(E){E&&w(e),sn(p,E),n[35](null),v&&v.d(),y=!1,tt(_)}}}const Y_="textarea cursor-pointer",X_="space-y-4",x_="flex flex-wrap gap-2",Q_="unstyled bg-transparent border-0 !ring-0 p-0 w-full";function Z_(n,e,t){let i,r,s,a,o,l;const c=["input","name","value","whitelist","max","minlength","maxlength","allowUpperCase","allowDuplicates","validation","duration","required","chips","invalid","padding","rounded"];let f=hn(e,c);const u=vi();let{input:d=""}=e,{name:h}=e,{value:b=[]}=e,{whitelist:y=[]}=e,{max:_=-1}=e,{minlength:g=-1}=e,{maxlength:p=-1}=e,{allowUpperCase:v=!1}=e,{allowDuplicates:E=!1}=e,{validation:k=()=>!0}=e,{duration:A=150}=e,{required:O=!1}=e,{chips:D="variant-filled"}=e,{invalid:L="input-error"}=e,{padding:P="p-2"}=e,{rounded:J="rounded-container-token"}=e,B=!0;function M(){t(0,b=[])}let q;or(()=>{if(!q.form)return;const K=q.form;return K.addEventListener("reset",M),()=>{K.removeEventListener("reset",M)}});function ne(){t(26,B=!0)}function Z(){return!(!d||(t(1,d=d.trim()),k!==void 0&&!k(d))||_!==-1&&b.length>=_||g!==-1&&d.length<g||p!==-1&&d.length>p||y.length>0&&!y.includes(d)||E===!1&&b.includes(d))}function ue(K){if(K.preventDefault(),t(26,B=Z()),B===!1){u("invalid",{event:K,input:d});return}t(1,d=v?d:d.toLowerCase()),b.push(d),t(0,b),i.push({val:d,id:Math.random()}),t(11,i),t(0,b),u("add",{event:K,chipIndex:b.length-1,chipValue:d}),t(1,d="")}function oe(K,Re,Pe){f.disabled||(b.splice(Re,1),t(0,b),i.splice(Re,1),t(11,i),t(0,b),u("remove",{event:K,chipIndex:Re,chipValue:Pe}))}function G(K){pe.call(this,n,K)}function H(K){pe.call(this,n,K)}function W(K){pe.call(this,n,K)}function V(K){pe.call(this,n,K)}function re(K){pe.call(this,n,K)}function le(K){pe.call(this,n,K)}function ce(K){pe.call(this,n,K)}function Me(K){cn[K?"unshift":"push"](()=>{q=K,t(6,q)})}function Ve(){b=Yl(this),t(0,b)}function De(){d=this.value,t(1,d)}const Se=(K,Re,Pe)=>{oe(Pe,K,Re)};return n.$$set=K=>{t(42,e=Ce(Ce({},e),Be(K))),t(15,f=hn(e,c)),"input"in K&&t(1,d=K.input),"name"in K&&t(2,h=K.name),"value"in K&&t(0,b=K.value),"whitelist"in K&&t(16,y=K.whitelist),"max"in K&&t(17,_=K.max),"minlength"in K&&t(18,g=K.minlength),"maxlength"in K&&t(19,p=K.maxlength),"allowUpperCase"in K&&t(20,v=K.allowUpperCase),"allowDuplicates"in K&&t(21,E=K.allowDuplicates),"validation"in K&&t(22,k=K.validation),"duration"in K&&t(3,A=K.duration),"required"in K&&t(4,O=K.required),"chips"in K&&t(5,D=K.chips),"invalid"in K&&t(23,L=K.invalid),"padding"in K&&t(24,P=K.padding),"rounded"in K&&t(25,J=K.rounded)},n.$$.update=()=>{n.$$.dirty[0]&1&&t(11,i=(b==null?void 0:b.map(K=>({val:K,id:Math.random()})))||[]),n.$$.dirty[0]&75497472&&t(27,r=B===!1?L:""),t(10,s=`${Y_} ${P} ${J} ${e.class??""} ${r}`)},t(9,a=`${X_}`),t(8,o=`${x_}`),t(7,l=`${Q_}`),e=Be(e),[b,d,h,A,O,D,q,l,o,a,s,i,ne,ue,oe,f,y,_,g,p,v,E,k,L,P,J,B,r,G,H,W,V,re,le,ce,Me,Ve,De,Se]}class $_ extends _e{constructor(e){super(),be(this,e,Z_,J_,ge,{input:1,name:2,value:0,whitelist:16,max:17,minlength:18,maxlength:19,allowUpperCase:20,allowDuplicates:21,validation:22,duration:3,required:4,chips:5,invalid:23,padding:24,rounded:25},null,[-1,-1])}}function eb(n){let e;return{c(){e=ee(n[1])},l(t){e=te(t,n[1])},m(t,i){j(t,e,i)},p(t,i){i&2&&se(e,t[1])},d(t){t&&w(e)}}}function Ja(n){let e,t,i,r,s,a,o,l,c,f,u,d,h;function b(v){n[8](v)}function y(v){n[9](v)}let _={name:"chips",placeholder:"Select filters...",chips:"variant-filled-primary"};n[2]!==void 0&&(_.input=n[2]),n[5].value!==void 0&&(_.value=n[5].value),t=new $_({props:_}),cn.push(()=>Zn(t,"input",b)),cn.push(()=>Zn(t,"value",y));function g(v){n[10](v)}let p={options:n[5].options,denylist:n[6]};return n[2]!==void 0&&(p.input=n[2]),o=new cu({props:p}),cn.push(()=>Zn(o,"input",g)),o.$on("selection",n[11]),{c(){e=T("div"),X(t.$$.fragment),s=U(),a=T("div"),X(o.$$.fragment),this.h()},l(v){e=S(v,"DIV",{});var E=C(e);$(t.$$.fragment,E),s=F(E),a=S(E,"DIV",{class:!0,style:!0,tabindex:!0,"data-popup":!0});var k=C(a);$(o.$$.fragment,k),k.forEach(w),E.forEach(w),this.h()},h(){var v;m(a,"class","card max-h-48 p-4 overflow-y-auto z-50"),ut(a,"width",(((v=n[3])==null?void 0:v.clientWidth)||100)+"px"),m(a,"tabindex","-1"),m(a,"data-popup",c=n[1]+"PopupAutocomplete")},m(v,E){j(v,e,E),x(t,e,null),I(e,s),I(e,a),x(o,a,null),n[12](e),u=!0,d||(h=rn(f=Ei.call(null,e,n[4])),d=!0)},p(v,E){var O;const k={};!i&&E&4&&(i=!0,k.input=v[2],Qn(()=>i=!1)),!r&&E&32&&(r=!0,k.value=v[5].value,Qn(()=>r=!1)),t.$set(k);const A={};E&32&&(A.options=v[5].options),!l&&E&4&&(l=!0,A.input=v[2],Qn(()=>l=!1)),o.$set(A),(!u||E&8)&&ut(a,"width",(((O=v[3])==null?void 0:O.clientWidth)||100)+"px"),(!u||E&2&&c!==(c=v[1]+"PopupAutocomplete"))&&m(a,"data-popup",c),f&&yi(f.update)&&E&16&&f.update.call(null,v[4])},i(v){u||(R(t.$$.fragment,v),R(o.$$.fragment,v),u=!0)},o(v){N(t.$$.fragment,v),N(o.$$.fragment,v),u=!1},d(v){v&&w(e),Q(t),Q(o),n[12](null),d=!1,h()}}}function tb(n){let e,t,i,r,s;function a(c){n[7](c)}let o={size:"sm",active:"variant-filled-primary",name:"slide",$$slots:{default:[eb]},$$scope:{ctx:n}};n[5].active!==void 0&&(o.checked=n[5].active),t=new wu({props:o}),cn.push(()=>Zn(t,"checked",a));let l=n[5].active&&Ja(n);return{c(){e=T("div"),X(t.$$.fragment),r=U(),l&&l.c(),this.h()},l(c){e=S(c,"DIV",{class:!0});var f=C(e);$(t.$$.fragment,f),r=F(f),l&&l.l(f),f.forEach(w),this.h()},h(){m(e,"class","flex flex-col gap-4 flex-1")},m(c,f){j(c,e,f),x(t,e,null),I(e,r),l&&l.m(e,null),s=!0},p(c,[f]){const u={};f&8194&&(u.$$scope={dirty:f,ctx:c}),!i&&f&32&&(i=!0,u.checked=c[5].active,Qn(()=>i=!1)),t.$set(u),c[5].active?l?(l.p(c,f),f&32&&R(l,1)):(l=Ja(c),l.c(),R(l,1),l.m(e,null)):l&&(de(),N(l,1,1,()=>{l=null}),he())},i(c){s||(R(t.$$.fragment,c),R(l),s=!0)},o(c){N(t.$$.fragment,c),N(l),s=!1},d(c){c&&w(e),Q(t),l&&l.d()}}}function nb(n,e,t){let i,r,s=me,a=()=>(s(),s=Xl(o,p=>t(5,r=p)),o);n.$$.on_destroy.push(()=>s());let{store:o}=e;a();let{title:l="???"}=e,c="",f=[],u;function d(p){n.$$.not_equal(r.active,p)&&(r.active=p,o.set(r))}function h(p){c=p,t(2,c)}function b(p){n.$$.not_equal(r.value,p)&&(r.value=p,o.set(r))}function y(p){c=p,t(2,c)}const _=p=>{r.value.push(p.detail.value),o.set(r),t(2,c="")};function g(p){cn[p?"unshift":"push"](()=>{u=p,t(3,u)})}return n.$$set=p=>{"store"in p&&a(t(0,o=p.store)),"title"in p&&t(1,l=p.title)},n.$$.update=()=>{n.$$.dirty&2&&t(4,i={event:"focus-click",target:l+"PopupAutocomplete",placement:"bottom"})},[o,l,c,u,i,r,f,d,h,b,y,_,g]}class xn extends _e{constructor(e){super(),be(this,e,nb,tb,ge,{store:0,title:1})}}function ib(n){let e,t,i,r,s,a,o,l,c,f;return i=new xn({props:{store:n[3],title:"Features"}}),s=new xn({props:{store:n[2],title:"Author"}}),o=new xn({props:{store:n[0],title:"Manufacturer"}}),c=new xn({props:{store:n[1],title:"Theme"}}),{c(){e=T("div"),t=T("div"),X(i.$$.fragment),r=U(),X(s.$$.fragment),a=U(),X(o.$$.fragment),l=U(),X(c.$$.fragment),this.h()},l(u){e=S(u,"DIV",{class:!0});var d=C(e);t=S(d,"DIV",{class:!0});var h=C(t);$(i.$$.fragment,h),r=F(h),$(s.$$.fragment,h),a=F(h),$(o.$$.fragment,h),l=F(h),$(c.$$.fragment,h),h.forEach(w),d.forEach(w),this.h()},h(){m(t,"class","p-4 card w-full border-primary-600 border flex gap-4"),m(e,"class","p-4 flex")},m(u,d){j(u,e,d),I(e,t),x(i,t,null),I(t,r),x(s,t,null),I(t,a),x(o,t,null),I(t,l),x(c,t,null),f=!0},p:me,i(u){f||(R(i.$$.fragment,u),R(s.$$.fragment,u),R(o.$$.fragment,u),R(c.$$.fragment,u),f=!0)},o(u){N(i.$$.fragment,u),N(s.$$.fragment,u),N(o.$$.fragment,u),N(c.$$.fragment,u),f=!1},d(u){u&&w(e),Q(i),Q(s),Q(o),Q(c)}}}function rb(n){const{manufacturer:e,theme:t,author:i,features:r}=Dt;return[e,t,i,r]}class sb extends _e{constructor(e){super(),be(this,e,rb,ib,ge,{})}}function ab(n){let e;const t=n[2].default,i=Ge(t,n,n[3],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&8)&&Je(i,t,r,r[3],e?Xe(t,r[3],s,null):Ye(r[3]),null)},i(r){e||(R(i,r),e=!0)},o(r){N(i,r),e=!1},d(r){i&&i.d(r)}}}function ob(n){let e,t;return e=new Xp({}),{c(){X(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,r){x(e,i,r),t=!0},i(i){t||(R(e.$$.fragment,i),t=!0)},o(i){N(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function Ya(n){let e,t;return e=new sb({}),{c(){X(e.$$.fragment)},l(i){$(e.$$.fragment,i)},m(i,r){x(e,i,r),t=!0},i(i){t||(R(e.$$.fragment,i),t=!0)},o(i){N(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function lb(n){let e,t,i=n[0]&&Ya();return{c(){i&&i.c(),e=Oe()},l(r){i&&i.l(r),e=Oe()},m(r,s){i&&i.m(r,s),j(r,e,s),t=!0},p(r,s){r[0]?i?s&1&&R(i,1):(i=Ya(),i.c(),R(i,1),i.m(e.parentNode,e)):i&&(de(),N(i,1,1,()=>{i=null}),he())},i(r){t||(R(i),t=!0)},o(r){N(i),t=!1},d(r){r&&w(e),i&&i.d(r)}}}function cb(n){let e,t,i,r,s,a,o,l,c,f;return e=new G_({}),i=new Nu({}),s=new Xu({props:{zIndex:"1000"}}),o=new U_({}),c=new ru({props:{$$slots:{pageHeader:[lb],header:[ob],default:[ab]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment),t=U(),X(i.$$.fragment),r=U(),X(s.$$.fragment),a=U(),X(o.$$.fragment),l=U(),X(c.$$.fragment)},l(u){$(e.$$.fragment,u),t=F(u),$(i.$$.fragment,u),r=F(u),$(s.$$.fragment,u),a=F(u),$(o.$$.fragment,u),l=F(u),$(c.$$.fragment,u)},m(u,d){x(e,u,d),j(u,t,d),x(i,u,d),j(u,r,d),x(s,u,d),j(u,a,d),x(o,u,d),j(u,l,d),x(c,u,d),f=!0},p(u,[d]){const h={};d&9&&(h.$$scope={dirty:d,ctx:u}),c.$set(h)},i(u){f||(R(e.$$.fragment,u),R(i.$$.fragment,u),R(s.$$.fragment,u),R(o.$$.fragment,u),R(c.$$.fragment,u),f=!0)},o(u){N(e.$$.fragment,u),N(i.$$.fragment,u),N(s.$$.fragment,u),N(o.$$.fragment,u),N(c.$$.fragment,u),f=!1},d(u){u&&(w(t),w(r),w(a),w(l)),Q(e,u),Q(i,u),Q(s,u),Q(o,u),Q(c,u)}}}function ub(n,e,t){let i,{$$slots:r={},$$scope:s}=e;Dc(),so.set({computePosition:Cf,autoUpdate:Af,offset:lf,shift:cf,flip:af,arrow:sf});const{filterActive:a}=Dt;return Te(n,a,o=>t(0,i=o)),or(()=>{dr.fetchDb()}),n.$$set=o=>{"$$scope"in o&&t(3,s=o.$$scope)},[i,a,r,s]}class yb extends _e{constructor(e){super(),be(this,e,ub,cb,ge,{})}}export{yb as component,vb as universal};
