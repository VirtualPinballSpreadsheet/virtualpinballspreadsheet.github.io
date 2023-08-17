import{r as ye,u as Xo,v as on,w as tr,x as Qo,y as Kr,s as ge,z as je,f as T,a as N,g as S,h as D,c as U,d as I,j as g,i as V,A as y,B as ze,C as We,D as qe,E as nr,F as Ee,G as Pe,H as G,I as fe,l as J,m as Y,J as Ce,K as _i,n as te,L as Zt,M as $t,N as Ot,O as Qe,P as dn,Q as ti,R as ni,S as hn,T as yn,U as gt,V as bi,W as At,e as Te,q as Gr,X as pt,Y as Kl,o as ir,Z as Zo,_ as xr,$ as en,a0 as Ne,a1 as Gl,k as Lt,a2 as xl,a3 as Jr,p as an,a4 as Jl,a5 as Yn,a6 as Yl}from"../chunks/scheduler.dedae0ab.js";import{n as Xl,l as Ql,f as Zl,h as $l,S as _e,i as be,a as O,g as ce,t as M,c as ue,j as rr,k as sr,o as mn,b as X,d as ee,m as Q,e as Z,p as Xn}from"../chunks/index.21d01676.js";import{w as vi}from"../chunks/index.ac37785c.js";import{c as yi,p as or,e as Se,u as ar,o as ec,g as Sn,a as Yr,s as tc,m as ii,b as Xr,d as nc,f as ic,h as $o,l as rc,S as Et,i as ea,j as $e,k as Qr,E as ri,F as sc,P as Zr,D as lr,n as oc,q as $r,r as ta,t as ac}from"../chunks/modeMapping.93b0a658.js";import{_ as es}from"../chunks/preload-helper.a4192956.js";import{F as gn,f as lc,a as cc,b as uc,c as fc,d as na,e as dc,g as hc,h as mc,i as gc,j as pc}from"../chunks/index.f08c9849.js";import{h as _c}from"../chunks/singletons.2a7edc63.js";import{p as cr}from"../chunks/stores.18d2f113.js";function ia(n,e,t,i){if(!e)return ye;const r=n.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return ye;const{delay:s=0,duration:o=300,easing:a=Xo,start:l=Xl()+s,end:u=l+o,tick:f=ye,css:c}=t(n,{from:e,to:r},i);let d=!0,h=!1,v;function w(){c&&(v=Zl(n,0,1,o,s,a,c)),s||(h=!0)}function p(){c&&$l(n,v),d=!1}return Ql(_=>{if(!h&&_>=l&&(h=!0),h&&_>=u&&(f(1,0),p()),!d)return!1;if(h){const m=_-l,b=0+1*a(m/o);f(b,1-b)}return!0}),w(),f(0,1),p}function ra(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:i}=e,r=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=i,sa(n,r)}}function sa(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform;n.style.transform=`${r} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}const bc=!1,cb=Object.freeze(Object.defineProperty({__proto__:null,ssr:bc},Symbol.toStringTag,{value:"Module"}));const oa=vi(void 0);function ur(n,e){const{computePosition:t,autoUpdate:i,offset:r,shift:s,flip:o,arrow:a,size:l,autoPlacement:u,hide:f,inline:c}=on(oa),d={open:!1,autoUpdateCleanup:()=>{}},h=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let v;const w="https://www.skeleton.dev/utilities/popups";let p,_;function m(){p=document.querySelector(`[data-popup="${e.target}"]`)??document.createElement("div"),_=p.querySelector(".arrow")??document.createElement("div")}m();function b(){var R,F,x,q,K,ne,re,de;if(!p)throw new Error(`The data-popup="${e.target}" element was not found. ${w}`);if(!t)throw new Error(`Floating UI 'computePosition' not found for data-popup="${e.target}". ${w}`);if(!r)throw new Error(`Floating UI 'offset' not found for data-popup="${e.target}". ${w}`);if(!s)throw new Error(`Floating UI 'shift' not found for data-popup="${e.target}". ${w}`);if(!o)throw new Error(`Floating UI 'flip' not found for data-popup="${e.target}". ${w}`);if(!a)throw new Error(`Floating UI 'arrow' not found for data-popup="${e.target}". ${w}`);const L=[];l&&L.push(l((R=e.middleware)==null?void 0:R.size)),u&&L.push(u((F=e.middleware)==null?void 0:F.autoPlacement)),f&&L.push(f((x=e.middleware)==null?void 0:x.hide)),c&&L.push(c((q=e.middleware)==null?void 0:q.inline)),t(n,p,{placement:e.placement??"bottom",middleware:[r(((K=e.middleware)==null?void 0:K.offset)??8),s(((ne=e.middleware)==null?void 0:ne.shift)??{padding:8}),o((re=e.middleware)==null?void 0:re.flip),a(((de=e.middleware)==null?void 0:de.arrow)??{element:_||null}),...L]}).then(({x:se,y:ae,placement:j,middlewareData:W})=>{if(Object.assign(p.style,{left:`${se}px`,top:`${ae}px`}),_){const{x:H,y:oe}=W.arrow,Ie={top:"bottom",right:"left",bottom:"top",left:"right"}[j.split("-")[0]];Object.assign(_.style,{left:H!=null?`${H}px`:"",top:oe!=null?`${oe}px`:"",right:"",bottom:"",[Ie]:"-4px"})}})}function E(){p&&(d.open=!0,e.state&&e.state({state:d.open}),b(),p.style.display="block",p.style.opacity="1",p.style.pointerEvents="auto",p.removeAttribute("inert"),d.autoUpdateCleanup=i(n,p,b),v=Array.from(p==null?void 0:p.querySelectorAll(h)))}function k(L){if(!p)return;const R=parseFloat(window.getComputedStyle(p).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{d.open=!1,e.state&&e.state({state:d.open}),p.style.opacity="0",p.setAttribute("inert",""),d.autoUpdateCleanup&&d.autoUpdateCleanup(),L&&L()},R)}function A(){d.open===!1?E():k()}function P(L){if(d.open===!1||n.contains(L.target))return;if(p&&p.contains(L.target)===!1){k();return}const R=e.closeQuery===void 0?"a[href], button":e.closeQuery,F=p==null?void 0:p.querySelectorAll(R);F==null||F.forEach(x=>{x.contains(L.target)&&k()})}const C=L=>{if(d.open===!1)return;const R=L.key;if(R==="Escape"){L.preventDefault(),n.focus(),k();return}v=Array.from(p==null?void 0:p.querySelectorAll(h)),d.open&&document.activeElement===n&&(R==="ArrowDown"||R==="Tab")&&h.length>0&&v.length>0&&(L.preventDefault(),v[0].focus())};switch(e.event){case"click":n.addEventListener("click",A,!0),window.addEventListener("click",P,!0);break;case"hover":n.addEventListener("mouseover",E,!0),n.addEventListener("mouseleave",()=>k(),!0);break;case"focus-blur":n.addEventListener("focus",A,!0),n.addEventListener("blur",()=>k(),!0);break;case"focus-click":n.addEventListener("focus",E,!0),window.addEventListener("click",P,!0);break;default:throw new Error(`Event value of '${e.event}' is not supported. ${w}`)}return window.addEventListener("keydown",C,!0),b(),{update(L){k(()=>{e=L,b(),m()})},destroy(){n.removeEventListener("click",A,!0),n.removeEventListener("mouseover",E,!0),n.removeEventListener("mouseleave",()=>k(),!0),n.removeEventListener("focus",A,!0),n.removeEventListener("focus",E,!0),n.removeEventListener("blur",()=>k(),!0),window.removeEventListener("click",P,!0),window.removeEventListener("keydown",C,!0)}}}const vc="drawerStore";function yc(){const n=Ic();return tr(vc,n)}function Ic(){const{subscribe:n,set:e,update:t}=vi({});return{subscribe:n,set:e,update:t,open:i=>t(()=>({open:!0,...i})),close:()=>t(i=>(i.open=!1,i))}}const aa="modalStore";function fr(){const n=Qo(aa);if(!n)throw new Error("modalStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return n}function wc(){const n=Ec();return tr(aa,n)}function Ec(){const{subscribe:n,set:e,update:t}=vi([]);return{subscribe:n,set:e,update:t,trigger:i=>t(r=>(r.push(i),r)),close:()=>t(i=>(i.length>0&&i.shift(),i)),clear:()=>e([])}}const kc={message:"Missing Toast Message",autohide:!0,timeout:5e3},la="toastStore";function ln(){const n=Qo(la);if(!n)throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return n}function Tc(){const n=Ac();return tr(la,n)}function Sc(){const n=Math.random();return Number(n).toString(32)}function Ac(){const{subscribe:n,set:e,update:t}=vi([]),i=s=>t(o=>{if(o.length>0){const a=o.findIndex(u=>u.id===s),l=o[a];l&&(l.callback&&l.callback({id:s,status:"closed"}),l.timeoutId&&clearTimeout(l.timeoutId),o.splice(a,1))}return o});function r(s){if(s.autohide===!0)return setTimeout(()=>{i(s.id)},s.timeout)}return{subscribe:n,close:i,trigger:s=>{const o=Sc();return t(a=>{s&&s.callback&&s.callback({id:o,status:"queued"}),s.hideDismiss&&(s.autohide=!0);const l={...kc,...s,id:o};return l.timeoutId=r(l),a.push(l),a}),o},freeze:s=>t(o=>(o.length>0&&clearTimeout(o[s].timeoutId),o)),unfreeze:s=>t(o=>(o.length>0&&(o[s].timeoutId=r(o[s])),o)),clear:()=>e([])}}function Cc(){wc(),Tc(),yc()}function Rc(n,e){const t=()=>{n.dispatchEvent(new CustomEvent("copyComplete"))},i=()=>{if(typeof e=="object"){if("element"in e){const r=document.querySelector(`[data-clipboard="${e.element}"]`);if(!r)throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${e.element}"]`);Ri(r.innerHTML,"text/html").then(t);return}if("input"in e){const r=document.querySelector(`[data-clipboard="${e.input}"]`);if(!r)throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${e.input}"]`);Ri(r.value).then(t);return}}Ri(e).then(t)};return n.addEventListener("click",i),{update(r){e=r},destroy(){n.removeEventListener("click",i)}}}async function Ri(n,e="text/plain"){navigator.clipboard.write?await navigator.clipboard.write([new ClipboardItem({[e]:new Blob([n],{type:e}),"text/plain":new Blob([n],{type:"text/plain"})})]):await new Promise(t=>{t(navigator.clipboard.writeText(String(n)))})}function Dc(n,e){const t='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let i,r;function s(c){c.shiftKey&&c.code==="Tab"&&(c.preventDefault(),r.focus())}function o(c){!c.shiftKey&&c.code==="Tab"&&(c.preventDefault(),i.focus())}const a=c=>{if(e===!1)return;const d=Array.from(n.querySelectorAll(t));d.length&&(i=d[0],r=d[d.length-1],c||i.focus(),i.addEventListener("keydown",s),r.addEventListener("keydown",o))};a(!1);function l(){i&&i.removeEventListener("keydown",s),r&&r.removeEventListener("keydown",o)}const u=(c,d)=>(c.length&&(l(),a(!0)),d),f=new MutationObserver(u);return f.observe(n,{childList:!0,subtree:!0}),{update(c){e=c,c?a(!1):l()},destroy(){l(),f.disconnect()}}}function ts(n,{delay:e=0,duration:t=400,easing:i=Xo}={}){const r=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:s=>`opacity: ${s*r}`}}function pn(n,{delay:e=0,duration:t=400,easing:i=yi,x:r=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,u=a.transform==="none"?"":a.transform,f=l*(1-o),[c,d]=Kr(r),[h,v]=Kr(s);return{delay:e,duration:t,easing:i,css:(w,p)=>`
			transform: ${u} translate(${(1-w)*c}${d}, ${(1-w)*h}${v});
			opacity: ${l-f*p}`}}function ns(n,{delay:e=0,duration:t=400,easing:i=yi,axis:r="y"}={}){const s=getComputedStyle(n),o=+s.opacity,a=r==="y"?"height":"width",l=parseFloat(s[a]),u=r==="y"?["top","bottom"]:["left","right"],f=u.map(_=>`${_[0].toUpperCase()}${_.slice(1)}`),c=parseFloat(s[`padding${f[0]}`]),d=parseFloat(s[`padding${f[1]}`]),h=parseFloat(s[`margin${f[0]}`]),v=parseFloat(s[`margin${f[1]}`]),w=parseFloat(s[`border${f[0]}Width`]),p=parseFloat(s[`border${f[1]}Width`]);return{delay:e,duration:t,easing:i,css:_=>`overflow: hidden;opacity: ${Math.min(_*20,1)*o};${a}: ${_*l}px;padding-${u[0]}: ${_*c}px;padding-${u[1]}: ${_*d}px;margin-${u[0]}: ${_*h}px;margin-${u[1]}: ${_*v}px;border-${u[0]}-width: ${_*w}px;border-${u[1]}-width: ${_*p}px;`}}function is(n,{delay:e=0,duration:t=400,easing:i=yi,start:r=0,opacity:s=0}={}){const o=getComputedStyle(n),a=+o.opacity,l=o.transform==="none"?"":o.transform,u=1-r,f=a*(1-s);return{delay:e,duration:t,easing:i,css:(c,d)=>`
			transform: ${l} scale(${1-u*d});
			opacity: ${a-f*d}
		`}}function Ct(n,e){const{transition:t,params:i,enabled:r}=e;return r?t(n,i):"duration"in i?t(n,{duration:0}):{duration:0}}const Pc=n=>({}),rs=n=>({}),Oc=n=>({}),ss=n=>({}),Lc=n=>({}),os=n=>({});function as(n){let e,t,i;const r=n[22].lead,s=je(r,n,n[21],os);return{c(){e=T("div"),s&&s.c(),this.h()},l(o){e=S(o,"DIV",{class:!0});var a=D(e);s&&s.l(a),a.forEach(I),this.h()},h(){g(e,"class",t="app-bar-slot-lead "+n[4])},m(o,a){V(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&ze(s,r,o,o[21],i?qe(r,o[21],a,Lc):We(o[21]),os),(!i||a&16&&t!==(t="app-bar-slot-lead "+o[4]))&&g(e,"class",t)},i(o){i||(O(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&I(e),s&&s.d(o)}}}function ls(n){let e,t,i;const r=n[22].trail,s=je(r,n,n[21],ss);return{c(){e=T("div"),s&&s.c(),this.h()},l(o){e=S(o,"DIV",{class:!0});var a=D(e);s&&s.l(a),a.forEach(I),this.h()},h(){g(e,"class",t="app-bar-slot-trail "+n[2])},m(o,a){V(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&ze(s,r,o,o[21],i?qe(r,o[21],a,Oc):We(o[21]),ss),(!i||a&4&&t!==(t="app-bar-slot-trail "+o[2]))&&g(e,"class",t)},i(o){i||(O(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&I(e),s&&s.d(o)}}}function cs(n){let e,t,i;const r=n[22].headline,s=je(r,n,n[21],rs);return{c(){e=T("div"),s&&s.c(),this.h()},l(o){e=S(o,"DIV",{class:!0});var a=D(e);s&&s.l(a),a.forEach(I),this.h()},h(){g(e,"class",t="app-bar-row-headline "+n[5])},m(o,a){V(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&ze(s,r,o,o[21],i?qe(r,o[21],a,Pc):We(o[21]),rs),(!i||a&32&&t!==(t="app-bar-row-headline "+o[5]))&&g(e,"class",t)},i(o){i||(O(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&I(e),s&&s.d(o)}}}function Mc(n){let e,t,i,r,s,o,a,l,u,f,c=n[8].lead&&as(n);const d=n[22].default,h=je(d,n,n[21],null);let v=n[8].trail&&ls(n),w=n[8].headline&&cs(n);return{c(){e=T("div"),t=T("div"),c&&c.c(),i=N(),r=T("div"),h&&h.c(),o=N(),v&&v.c(),l=N(),w&&w.c(),this.h()},l(p){e=S(p,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var _=D(e);t=S(_,"DIV",{class:!0});var m=D(t);c&&c.l(m),i=U(m),r=S(m,"DIV",{class:!0});var b=D(r);h&&h.l(b),b.forEach(I),o=U(m),v&&v.l(m),m.forEach(I),l=U(_),w&&w.l(_),_.forEach(I),this.h()},h(){g(r,"class",s="app-bar-slot-default "+n[3]),g(t,"class",a="app-bar-row-main "+n[6]),g(e,"class",u="app-bar "+n[7]),g(e,"data-testid","app-bar"),g(e,"role","toolbar"),g(e,"aria-label",n[0]),g(e,"aria-labelledby",n[1])},m(p,_){V(p,e,_),y(e,t),c&&c.m(t,null),y(t,i),y(t,r),h&&h.m(r,null),y(t,o),v&&v.m(t,null),y(e,l),w&&w.m(e,null),f=!0},p(p,[_]){p[8].lead?c?(c.p(p,_),_&256&&O(c,1)):(c=as(p),c.c(),O(c,1),c.m(t,i)):c&&(ce(),M(c,1,1,()=>{c=null}),ue()),h&&h.p&&(!f||_&2097152)&&ze(h,d,p,p[21],f?qe(d,p[21],_,null):We(p[21]),null),(!f||_&8&&s!==(s="app-bar-slot-default "+p[3]))&&g(r,"class",s),p[8].trail?v?(v.p(p,_),_&256&&O(v,1)):(v=ls(p),v.c(),O(v,1),v.m(t,null)):v&&(ce(),M(v,1,1,()=>{v=null}),ue()),(!f||_&64&&a!==(a="app-bar-row-main "+p[6]))&&g(t,"class",a),p[8].headline?w?(w.p(p,_),_&256&&O(w,1)):(w=cs(p),w.c(),O(w,1),w.m(e,null)):w&&(ce(),M(w,1,1,()=>{w=null}),ue()),(!f||_&128&&u!==(u="app-bar "+p[7]))&&g(e,"class",u),(!f||_&1)&&g(e,"aria-label",p[0]),(!f||_&2)&&g(e,"aria-labelledby",p[1])},i(p){f||(O(c),O(h,p),O(v),O(w),f=!0)},o(p){M(c),M(h,p),M(v),M(w),f=!1},d(p){p&&I(e),c&&c.d(),h&&h.d(p),v&&v.d(),w&&w.d()}}}const Nc="flex flex-col",Uc="grid items-center",Fc="",Bc="flex-none flex justify-between items-center",Vc="flex-auto",Hc="flex-none flex items-center space-x-4";function jc(n,e,t){let i,r,s,o,a,l,{$$slots:u={},$$scope:f}=e;const c=nr(u);let{background:d="bg-surface-100-800-token"}=e,{border:h=""}=e,{padding:v="p-4"}=e,{shadow:w=""}=e,{spacing:p="space-y-4"}=e,{gridColumns:_="grid-cols-[auto_1fr_auto]"}=e,{gap:m="gap-4"}=e,{regionRowMain:b=""}=e,{regionRowHeadline:E=""}=e,{slotLead:k=""}=e,{slotDefault:A=""}=e,{slotTrail:P=""}=e,{label:C=""}=e,{labelledby:L=""}=e;return n.$$set=R=>{t(23,e=Ee(Ee({},e),Pe(R))),"background"in R&&t(9,d=R.background),"border"in R&&t(10,h=R.border),"padding"in R&&t(11,v=R.padding),"shadow"in R&&t(12,w=R.shadow),"spacing"in R&&t(13,p=R.spacing),"gridColumns"in R&&t(14,_=R.gridColumns),"gap"in R&&t(15,m=R.gap),"regionRowMain"in R&&t(16,b=R.regionRowMain),"regionRowHeadline"in R&&t(17,E=R.regionRowHeadline),"slotLead"in R&&t(18,k=R.slotLead),"slotDefault"in R&&t(19,A=R.slotDefault),"slotTrail"in R&&t(20,P=R.slotTrail),"label"in R&&t(0,C=R.label),"labelledby"in R&&t(1,L=R.labelledby),"$$scope"in R&&t(21,f=R.$$scope)},n.$$.update=()=>{t(7,i=`${Nc} ${d} ${h} ${p} ${v} ${w} ${e.class??""}`),n.$$.dirty&114688&&t(6,r=`${Uc} ${_} ${m} ${b}`),n.$$.dirty&131072&&t(5,s=`${Fc} ${E}`),n.$$.dirty&262144&&t(4,o=`${Bc} ${k}`),n.$$.dirty&524288&&t(3,a=`${Vc} ${A}`),n.$$.dirty&1048576&&t(2,l=`${Hc} ${P}`)},e=Pe(e),[C,L,l,a,o,s,r,i,c,d,h,v,w,p,_,m,b,E,k,A,P,f,u]}class zc extends _e{constructor(e){super(),be(this,e,jc,Mc,ge,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const Wc=n=>({}),us=n=>({}),qc=n=>({}),fs=n=>({}),Kc=n=>({}),ds=n=>({}),Gc=n=>({}),hs=n=>({}),xc=n=>({}),ms=n=>({}),Jc=n=>({}),gs=n=>({});function ps(n){let e,t,i;const r=n[18].header,s=je(r,n,n[17],gs);return{c(){e=T("header"),s&&s.c(),this.h()},l(o){e=S(o,"HEADER",{id:!0,class:!0});var a=D(e);s&&s.l(a),a.forEach(I),this.h()},h(){g(e,"id","shell-header"),g(e,"class",t="flex-none "+n[7])},m(o,a){V(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&131072)&&ze(s,r,o,o[17],i?qe(r,o[17],a,Jc):We(o[17]),gs),(!i||a&128&&t!==(t="flex-none "+o[7]))&&g(e,"class",t)},i(o){i||(O(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&I(e),s&&s.d(o)}}}function _s(n){let e,t;const i=n[18].sidebarLeft,r=je(i,n,n[17],ms);return{c(){e=T("aside"),r&&r.c(),this.h()},l(s){e=S(s,"ASIDE",{id:!0,class:!0});var o=D(e);r&&r.l(o),o.forEach(I),this.h()},h(){g(e,"id","sidebar-left"),g(e,"class",n[6])},m(s,o){V(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&131072)&&ze(r,i,s,s[17],t?qe(i,s[17],o,xc):We(s[17]),ms),(!t||o&64)&&g(e,"class",s[6])},i(s){t||(O(r,s),t=!0)},o(s){M(r,s),t=!1},d(s){s&&I(e),r&&r.d(s)}}}function bs(n){let e,t,i;const r=n[18].pageHeader,s=je(r,n,n[17],hs),o=s||Yc();return{c(){e=T("header"),o&&o.c(),this.h()},l(a){e=S(a,"HEADER",{id:!0,class:!0});var l=D(e);o&&o.l(l),l.forEach(I),this.h()},h(){g(e,"id","page-header"),g(e,"class",t="flex-none "+n[4])},m(a,l){V(a,e,l),o&&o.m(e,null),i=!0},p(a,l){s&&s.p&&(!i||l&131072)&&ze(s,r,a,a[17],i?qe(r,a[17],l,Gc):We(a[17]),hs),(!i||l&16&&t!==(t="flex-none "+a[4]))&&g(e,"class",t)},i(a){i||(O(o,a),i=!0)},o(a){M(o,a),i=!1},d(a){a&&I(e),o&&o.d(a)}}}function Yc(n){let e;return{c(){e=J("(slot:header)")},l(t){e=Y(t,"(slot:header)")},m(t,i){V(t,e,i)},d(t){t&&I(e)}}}function vs(n){let e,t,i;const r=n[18].pageFooter,s=je(r,n,n[17],ds),o=s||Xc();return{c(){e=T("footer"),o&&o.c(),this.h()},l(a){e=S(a,"FOOTER",{id:!0,class:!0});var l=D(e);o&&o.l(l),l.forEach(I),this.h()},h(){g(e,"id","page-footer"),g(e,"class",t="flex-none "+n[2])},m(a,l){V(a,e,l),o&&o.m(e,null),i=!0},p(a,l){s&&s.p&&(!i||l&131072)&&ze(s,r,a,a[17],i?qe(r,a[17],l,Kc):We(a[17]),ds),(!i||l&4&&t!==(t="flex-none "+a[2]))&&g(e,"class",t)},i(a){i||(O(o,a),i=!0)},o(a){M(o,a),i=!1},d(a){a&&I(e),o&&o.d(a)}}}function Xc(n){let e;return{c(){e=J("(slot:footer)")},l(t){e=Y(t,"(slot:footer)")},m(t,i){V(t,e,i)},d(t){t&&I(e)}}}function ys(n){let e,t;const i=n[18].sidebarRight,r=je(i,n,n[17],fs);return{c(){e=T("aside"),r&&r.c(),this.h()},l(s){e=S(s,"ASIDE",{id:!0,class:!0});var o=D(e);r&&r.l(o),o.forEach(I),this.h()},h(){g(e,"id","sidebar-right"),g(e,"class",n[5])},m(s,o){V(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&131072)&&ze(r,i,s,s[17],t?qe(i,s[17],o,qc):We(s[17]),fs),(!t||o&32)&&g(e,"class",s[5])},i(s){t||(O(r,s),t=!0)},o(s){M(r,s),t=!1},d(s){s&&I(e),r&&r.d(s)}}}function Is(n){let e,t,i;const r=n[18].footer,s=je(r,n,n[17],us);return{c(){e=T("footer"),s&&s.c(),this.h()},l(o){e=S(o,"FOOTER",{id:!0,class:!0});var a=D(e);s&&s.l(a),a.forEach(I),this.h()},h(){g(e,"id","shell-footer"),g(e,"class",t="flex-none "+n[1])},m(o,a){V(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&131072)&&ze(s,r,o,o[17],i?qe(r,o[17],a,Wc):We(o[17]),us),(!i||a&2&&t!==(t="flex-none "+o[1]))&&g(e,"class",t)},i(o){i||(O(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&I(e),s&&s.d(o)}}}function Qc(n){let e,t,i,r,s,o,a,l,u,f,c,d,h,v,w,p=n[9].header&&ps(n),_=n[9].sidebarLeft&&_s(n),m=n[9].pageHeader&&bs(n);const b=n[18].default,E=je(b,n,n[17],null);let k=n[9].pageFooter&&vs(n),A=n[9].sidebarRight&&ys(n),P=n[9].footer&&Is(n);return{c(){e=T("div"),p&&p.c(),t=N(),i=T("div"),_&&_.c(),r=N(),s=T("div"),m&&m.c(),o=N(),a=T("main"),E&&E.c(),u=N(),k&&k.c(),c=N(),A&&A.c(),d=N(),P&&P.c(),this.h()},l(C){e=S(C,"DIV",{id:!0,class:!0,"data-testid":!0});var L=D(e);p&&p.l(L),t=U(L),i=S(L,"DIV",{class:!0});var R=D(i);_&&_.l(R),r=U(R),s=S(R,"DIV",{id:!0,class:!0});var F=D(s);m&&m.l(F),o=U(F),a=S(F,"MAIN",{id:!0,class:!0});var x=D(a);E&&E.l(x),x.forEach(I),u=U(F),k&&k.l(F),F.forEach(I),c=U(R),A&&A.l(R),R.forEach(I),d=U(L),P&&P.l(L),L.forEach(I),this.h()},h(){g(a,"id","page-content"),g(a,"class",l="flex-auto "+n[3]),g(s,"id","page"),g(s,"class",f=n[0]+" "+ws),g(i,"class","flex-auto "+$c),g(e,"id","appShell"),g(e,"class",n[8]),g(e,"data-testid","app-shell")},m(C,L){V(C,e,L),p&&p.m(e,null),y(e,t),y(e,i),_&&_.m(i,null),y(i,r),y(i,s),m&&m.m(s,null),y(s,o),y(s,a),E&&E.m(a,null),y(s,u),k&&k.m(s,null),y(i,c),A&&A.m(i,null),y(e,d),P&&P.m(e,null),h=!0,v||(w=G(s,"scroll",n[19]),v=!0)},p(C,[L]){C[9].header?p?(p.p(C,L),L&512&&O(p,1)):(p=ps(C),p.c(),O(p,1),p.m(e,t)):p&&(ce(),M(p,1,1,()=>{p=null}),ue()),C[9].sidebarLeft?_?(_.p(C,L),L&512&&O(_,1)):(_=_s(C),_.c(),O(_,1),_.m(i,r)):_&&(ce(),M(_,1,1,()=>{_=null}),ue()),C[9].pageHeader?m?(m.p(C,L),L&512&&O(m,1)):(m=bs(C),m.c(),O(m,1),m.m(s,o)):m&&(ce(),M(m,1,1,()=>{m=null}),ue()),E&&E.p&&(!h||L&131072)&&ze(E,b,C,C[17],h?qe(b,C[17],L,null):We(C[17]),null),(!h||L&8&&l!==(l="flex-auto "+C[3]))&&g(a,"class",l),C[9].pageFooter?k?(k.p(C,L),L&512&&O(k,1)):(k=vs(C),k.c(),O(k,1),k.m(s,null)):k&&(ce(),M(k,1,1,()=>{k=null}),ue()),(!h||L&1&&f!==(f=C[0]+" "+ws))&&g(s,"class",f),C[9].sidebarRight?A?(A.p(C,L),L&512&&O(A,1)):(A=ys(C),A.c(),O(A,1),A.m(i,null)):A&&(ce(),M(A,1,1,()=>{A=null}),ue()),C[9].footer?P?(P.p(C,L),L&512&&O(P,1)):(P=Is(C),P.c(),O(P,1),P.m(e,null)):P&&(ce(),M(P,1,1,()=>{P=null}),ue()),(!h||L&256)&&g(e,"class",C[8])},i(C){h||(O(p),O(_),O(m),O(E,C),O(k),O(A),O(P),h=!0)},o(C){M(p),M(_),M(m),M(E,C),M(k),M(A),M(P),h=!1},d(C){C&&I(e),p&&p.d(),_&&_.d(),m&&m.d(),E&&E.d(C),k&&k.d(),A&&A.d(),P&&P.d(),v=!1,w()}}}const Zc="w-full h-full flex flex-col overflow-hidden",$c="w-full h-full flex overflow-hidden",ws="flex-1 overflow-x-hidden flex flex-col",eu="flex-none overflow-x-hidden overflow-y-auto",tu="flex-none overflow-x-hidden overflow-y-auto";function nu(n,e,t){let i,r,s,o,a,l,u,f,{$$slots:c={},$$scope:d}=e;const h=nr(c);let{regionPage:v=""}=e,{slotHeader:w="z-10"}=e,{slotSidebarLeft:p="w-auto"}=e,{slotSidebarRight:_="w-auto"}=e,{slotPageHeader:m=""}=e,{slotPageContent:b=""}=e,{slotPageFooter:E=""}=e,{slotFooter:k=""}=e;function A(P){fe.call(this,n,P)}return n.$$set=P=>{t(20,e=Ee(Ee({},e),Pe(P))),"regionPage"in P&&t(0,v=P.regionPage),"slotHeader"in P&&t(10,w=P.slotHeader),"slotSidebarLeft"in P&&t(11,p=P.slotSidebarLeft),"slotSidebarRight"in P&&t(12,_=P.slotSidebarRight),"slotPageHeader"in P&&t(13,m=P.slotPageHeader),"slotPageContent"in P&&t(14,b=P.slotPageContent),"slotPageFooter"in P&&t(15,E=P.slotPageFooter),"slotFooter"in P&&t(16,k=P.slotFooter),"$$scope"in P&&t(17,d=P.$$scope)},n.$$.update=()=>{t(8,i=`${Zc} ${e.class??""}`),n.$$.dirty&1024&&t(7,r=`${w}`),n.$$.dirty&2048&&t(6,s=`${eu} ${p}`),n.$$.dirty&4096&&t(5,o=`${tu} ${_}`),n.$$.dirty&8192&&t(4,a=`${m}`),n.$$.dirty&16384&&t(3,l=`${b}`),n.$$.dirty&32768&&t(2,u=`${E}`),n.$$.dirty&65536&&t(1,f=`${k}`)},e=Pe(e),[v,f,u,l,a,o,s,r,i,h,w,p,_,m,b,E,k,d,c,A]}class iu extends _e{constructor(e){super(),be(this,e,nu,Qc,ge,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function Es(n,e,t){const i=n.slice();return i[34]=e[t],i}function ru(n){let e,t,i;return{c(){e=T("div"),t=J(n[0]),this.h()},l(r){e=S(r,"DIV",{class:!0});var s=D(e);t=Y(s,n[0]),s.forEach(I),this.h()},h(){g(e,"class",i="autocomplete-empty "+n[7])},m(r,s){V(r,e,s),y(e,t)},p(r,s){s[0]&1&&te(t,r[0]),s[0]&128&&i!==(i="autocomplete-empty "+r[7])&&g(e,"class",i)},i:ye,o:ye,d(r){r&&I(e)}}}function su(n){let e,t,i=[],r=new Map,s,o,a,l=Se(n[6].slice(0,n[13]));const u=f=>f[34];for(let f=0;f<l.length;f+=1){let c=Es(n,l,f),d=u(c);r.set(d,i[f]=ks(d,c))}return{c(){e=T("nav"),t=T("ul");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=S(f,"NAV",{class:!0});var c=D(e);t=S(c,"UL",{class:!0});var d=D(t);for(let h=0;h<i.length;h+=1)i[h].l(d);d.forEach(I),c.forEach(I),this.h()},h(){g(t,"class",s="autocomplete-list "+n[10]),g(e,"class",o="autocomplete-nav "+n[11])},m(f,c){V(f,e,c),y(e,t);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(t,null);a=!0},p(f,c){c[0]&25458&&(l=Se(f[6].slice(0,f[13])),ce(),i=ar(i,c,u,1,f,l,r,t,ec,ks,null,Es),ue()),(!a||c[0]&1024&&s!==(s="autocomplete-list "+f[10]))&&g(t,"class",s),(!a||c[0]&2048&&o!==(o="autocomplete-nav "+f[11]))&&g(e,"class",o)},i(f){if(!a){for(let c=0;c<l.length;c+=1)O(i[c]);a=!0}},o(f){for(let c=0;c<i.length;c+=1)M(i[c]);a=!1},d(f){f&&I(e);for(let c=0;c<i.length;c+=1)i[c].d()}}}function ks(n,e){let t,i,r,s=e[34].label+"",o,a,l,u,f,c,d,h;function v(){return e[28](e[34])}return{key:n,first:null,c(){t=T("li"),i=T("button"),r=new Zt(!1),a=N(),this.h()},l(w){t=S(w,"LI",{class:!0});var p=D(t);i=S(p,"BUTTON",{class:!0,type:!0});var _=D(i);r=$t(_,!1),_.forEach(I),a=U(p),p.forEach(I),this.h()},h(){r.a=null,g(i,"class",o="autocomplete-button "+e[8]),g(i,"type","button"),g(t,"class",l="autocomplete-item "+e[9]),this.first=t},m(w,p){V(w,t,p),y(t,i),r.m(s,i),y(t,a),c=!0,d||(h=[G(i,"click",v),G(i,"click",e[26]),G(i,"keypress",e[27])],d=!0)},p(w,p){e=w,(!c||p[0]&8256)&&s!==(s=e[34].label+"")&&r.p(s),(!c||p[0]&256&&o!==(o="autocomplete-button "+e[8]))&&g(i,"class",o),(!c||p[0]&512&&l!==(l="autocomplete-item "+e[9]))&&g(t,"class",l)},i(w){c||(w&&Ot(()=>{c&&(f&&f.end(1),u=rr(t,Ct,{transition:e[2],params:e[3],enabled:e[1]}),u.start())}),c=!0)},o(w){u&&u.invalidate(),w&&(f=sr(t,Ct,{transition:e[4],params:e[5],enabled:e[1]})),c=!1},d(w){w&&I(t),w&&f&&f.end(),d=!1,Qe(h)}}}function ou(n){let e,t,i,r,s;const o=[su,ru],a=[];function l(u,f){return u[6].length>0?0:1}return t=l(n),i=a[t]=o[t](n),{c(){e=T("div"),i.c(),this.h()},l(u){e=S(u,"DIV",{class:!0,"data-testid":!0});var f=D(e);i.l(f),f.forEach(I),this.h()},h(){g(e,"class",r="autocomplete "+n[12]),g(e,"data-testid","autocomplete")},m(u,f){V(u,e,f),a[t].m(e,null),s=!0},p(u,f){let c=t;t=l(u),t===c?a[t].p(u,f):(ce(),M(a[c],1,1,()=>{a[c]=null}),ue(),i=a[t],i?i.p(u,f):(i=a[t]=o[t](u),i.c()),O(i,1),i.m(e,null)),(!s||f[0]&4096&&r!==(r="autocomplete "+u[12]))&&g(e,"class",r)},i(u){s||(O(i),s=!0)},o(u){M(i),s=!1},d(u){u&&I(e),a[t].d()}}}function au(n,e,t){let i,r,s,o,a,l,u,f,c,d;Ce(n,or,j=>t(29,d=j));const h=_i();let{input:v=void 0}=e,{options:w=[]}=e,{limit:p=void 0}=e,{allowlist:_=[]}=e,{denylist:m=[]}=e,{emptyState:b="No Results Found."}=e,{regionNav:E=""}=e,{regionList:k="list-nav"}=e,{regionItem:A=""}=e,{regionButton:P="w-full"}=e,{regionEmpty:C="text-center"}=e,{transitions:L=!d}=e,{transitionIn:R=ns}=e,{transitionInParams:F={duration:200}}=e,{transitionOut:x=ns}=e,{transitionOutParams:q={duration:200}}=e;function K(j,W){let H=[...w];j.length&&(H=H.filter(oe=>j.includes(oe.value))),W.length&&(H=H.filter(oe=>!W.includes(oe.value))),!j.length&&!W.length&&(H=w),t(25,i=H)}function ne(){let j=[...i];return j=j.filter(W=>{const H=String(v).toLowerCase().trim();if(JSON.stringify([W.label,W.value,W.keywords]).toLowerCase().includes(H))return W}),j}function re(j){h("selection",j)}function de(j){fe.call(this,n,j)}function se(j){fe.call(this,n,j)}const ae=j=>re(j);return n.$$set=j=>{t(33,e=Ee(Ee({},e),Pe(j))),"input"in j&&t(15,v=j.input),"options"in j&&t(16,w=j.options),"limit"in j&&t(17,p=j.limit),"allowlist"in j&&t(18,_=j.allowlist),"denylist"in j&&t(19,m=j.denylist),"emptyState"in j&&t(0,b=j.emptyState),"regionNav"in j&&t(20,E=j.regionNav),"regionList"in j&&t(21,k=j.regionList),"regionItem"in j&&t(22,A=j.regionItem),"regionButton"in j&&t(23,P=j.regionButton),"regionEmpty"in j&&t(24,C=j.regionEmpty),"transitions"in j&&t(1,L=j.transitions),"transitionIn"in j&&t(2,R=j.transitionIn),"transitionInParams"in j&&t(3,F=j.transitionInParams),"transitionOut"in j&&t(4,x=j.transitionOut),"transitionOutParams"in j&&t(5,q=j.transitionOutParams)},n.$$.update=()=>{n.$$.dirty[0]&65536&&t(25,i=w),n.$$.dirty[0]&786432&&K(_,m),n.$$.dirty[0]&33587200&&t(6,r=v?ne():i),n.$$.dirty[0]&131136&&t(13,s=p!==void 0?p:r.length),t(12,o=`${e.class??""}`),n.$$.dirty[0]&1048576&&t(11,a=`${E}`),n.$$.dirty[0]&2097152&&t(10,l=`${k}`),n.$$.dirty[0]&4194304&&t(9,u=`${A}`),n.$$.dirty[0]&8388608&&t(8,f=`${P}`),n.$$.dirty[0]&16777216&&t(7,c=`${C}`)},e=Pe(e),[b,L,R,F,x,q,r,c,f,u,l,a,o,s,re,v,w,p,_,m,E,k,A,P,C,i,de,se,ae]}class lu extends _e{constructor(e){super(),be(this,e,au,ou,ge,{input:15,options:16,limit:17,allowlist:18,denylist:19,emptyState:0,regionNav:20,regionList:21,regionItem:22,regionButton:23,regionEmpty:24,transitions:1,transitionIn:2,transitionInParams:3,transitionOut:4,transitionOutParams:5},null,[-1,-1])}}function cu(n){let e,t,i=String(n[1]).substring(0,2).toUpperCase()+"",r,s;return{c(){e=ti("svg"),t=ti("text"),r=J(i),this.h()},l(o){e=ni(o,"svg",{class:!0,viewBox:!0});var a=D(e);t=ni(a,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var l=D(t);r=Y(l,i),l.forEach(I),a.forEach(I),this.h()},h(){g(t,"x","50%"),g(t,"y","50%"),g(t,"dominant-baseline","central"),g(t,"text-anchor","middle"),g(t,"font-weight","bold"),g(t,"font-size",150),g(t,"class",s="avatar-text "+n[2]),g(e,"class","avatar-initials w-full h-full"),g(e,"viewBox","0 0 512 512")},m(o,a){V(o,e,a),y(e,t),y(t,r)},p(o,a){a&2&&i!==(i=String(o[1]).substring(0,2).toUpperCase()+"")&&te(r,i),a&4&&s!==(s="avatar-text "+o[2])&&g(t,"class",s)},d(o){o&&I(e)}}}function uu(n){let e,t,i,r,s,o,a,l,u=[{class:t="avatar-image "+hu},{style:i=n[8].style??""},{src:r=n[0]},{alt:s=n[8].alt||""},n[7]()],f={};for(let c=0;c<u.length;c+=1)f=Ee(f,u[c]);return{c(){e=T("img"),this.h()},l(c){e=S(c,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){hn(e,f)},m(c,d){V(c,e,d),a||(l=[yn(o=n[4].call(null,e,n[5])),G(e,"error",n[19])],a=!0)},p(c,d){hn(e,f=Sn(u,[{class:t},d&256&&i!==(i=c[8].style??"")&&{style:i},d&1&&!gt(e.src,r=c[0])&&{src:r},d&256&&s!==(s=c[8].alt||"")&&{alt:s},c[7]()])),o&&bi(o.update)&&d&32&&o.update.call(null,c[5])},d(c){c&&I(e),a=!1,Qe(l)}}}function fu(n){let e,t,i,r;function s(l,u){return l[0]?uu:cu}let o=s(n),a=o(n);return{c(){e=T("figure"),a.c(),this.h()},l(l){e=S(l,"FIGURE",{class:!0,"data-testid":!0});var u=D(e);a.l(u),u.forEach(I),this.h()},h(){g(e,"class",t="avatar "+n[6]),g(e,"data-testid","avatar")},m(l,u){V(l,e,u),a.m(e,null),i||(r=[G(e,"click",n[15]),G(e,"keydown",n[16]),G(e,"keyup",n[17]),G(e,"keypress",n[18])],i=!0)},p(l,[u]){o===(o=s(l))&&a?a.p(l,u):(a.d(1),a=o(l),a&&(a.c(),a.m(e,null))),u&64&&t!==(t="avatar "+l[6])&&g(e,"class",t)},i:ye,o:ye,d(l){l&&I(e),a.d(),i=!1,Qe(r)}}}let du="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",hu="w-full h-full object-cover";function mu(n,e,t){let i;const r=["initials","fill","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let s=dn(e,r),{initials:o="AB"}=e,{fill:a="fill-token"}=e,{src:l=""}=e,{fallback:u=""}=e,{action:f=()=>{}}=e,{actionParams:c=""}=e,{background:d="bg-surface-400-500-token"}=e,{width:h="w-16"}=e,{border:v=""}=e,{rounded:w="rounded-full"}=e,{shadow:p=""}=e,{cursor:_=""}=e;function m(){return delete s.class,s}function b(C){fe.call(this,n,C)}function E(C){fe.call(this,n,C)}function k(C){fe.call(this,n,C)}function A(C){fe.call(this,n,C)}const P=()=>t(0,l=u);return n.$$set=C=>{t(8,e=Ee(Ee({},e),Pe(C))),t(20,s=dn(e,r)),"initials"in C&&t(1,o=C.initials),"fill"in C&&t(2,a=C.fill),"src"in C&&t(0,l=C.src),"fallback"in C&&t(3,u=C.fallback),"action"in C&&t(4,f=C.action),"actionParams"in C&&t(5,c=C.actionParams),"background"in C&&t(9,d=C.background),"width"in C&&t(10,h=C.width),"border"in C&&t(11,v=C.border),"rounded"in C&&t(12,w=C.rounded),"shadow"in C&&t(13,p=C.shadow),"cursor"in C&&t(14,_=C.cursor)},n.$$.update=()=>{t(6,i=`${du} ${d} ${h} ${v} ${w} ${p} ${_} ${e.class??""}`)},e=Pe(e),[l,o,a,u,f,c,i,m,e,d,h,v,w,p,_,b,E,k,A,P]}class ca extends _e{constructor(e){super(),be(this,e,mu,fu,ge,{initials:1,fill:2,src:0,fallback:3,action:4,actionParams:5,background:9,width:10,border:11,rounded:12,shadow:13,cursor:14})}}function ua(n,{from:e,to:t},i={}){const r=getComputedStyle(n),s=r.transform==="none"?"":r.transform,[o,a]=r.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),u=e.top+e.height*a/t.height-(t.top+a),{delay:f=0,duration:c=h=>Math.sqrt(h)*120,easing:d=yi}=i;return{delay:f,duration:bi(c)?c(Math.sqrt(l*l+u*u)):c,easing:d,css:(h,v)=>{const w=v*l,p=v*u,_=h+v*e.width/t.width,m=h+v*e.height/t.height;return`transform: ${s} translate(${w}px, ${p}px) scale(${_}, ${m});`}}}function Ts(n){let e,t;const i=n[22].default,r=je(i,n,n[21],null);return{c(){e=T("div"),r&&r.c(),this.h()},l(s){e=S(s,"DIV",{class:!0});var o=D(e);r&&r.l(o),o.forEach(I),this.h()},h(){g(e,"class","slide-toggle-text ml-3")},m(s,o){V(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o[0]&2097152)&&ze(r,i,s,s[21],t?qe(i,s[21],o,null):We(s[21]),null)},i(s){t||(O(r,s),t=!0)},o(s){M(r,s),t=!1},d(s){s&&I(e),r&&r.d(s)}}}function gu(n){let e,t,i,r,s,o,a,l,u,f,c,d,h,v,w,p=[{type:"checkbox"},{class:"slide-toggle-input hidden"},{name:n[1]},n[8](),{disabled:r=n[9].disabled}],_={};for(let b=0;b<p.length;b+=1)_=Ee(_,p[b]);let m=n[10].default&&Ts(n);return{c(){e=T("div"),t=T("label"),i=T("input"),s=N(),o=T("div"),a=T("div"),f=N(),m&&m.c(),this.h()},l(b){e=S(b,"DIV",{id:!0,class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-checked":!0,tabindex:!0});var E=D(e);t=S(E,"LABEL",{class:!0});var k=D(t);i=S(k,"INPUT",{type:!0,class:!0,name:!0}),s=U(k),o=S(k,"DIV",{class:!0});var A=D(o);a=S(A,"DIV",{class:!0}),D(a).forEach(I),A.forEach(I),f=U(k),m&&m.l(k),k.forEach(I),E.forEach(I),this.h()},h(){hn(i,_),g(a,"class",l="slide-toggle-thumb "+n[3]),At(a,"cursor-not-allowed",n[9].disabled),g(o,"class",u="slide-toggle-track "+n[4]),At(o,"cursor-not-allowed",n[9].disabled),g(t,"class",c="slide-toggle-label "+n[5]),g(e,"id",n[2]),g(e,"class",d="slide-toggle "+n[6]),g(e,"data-testid","slide-toggle"),g(e,"role","switch"),g(e,"aria-label",n[2]),g(e,"aria-checked",n[0]),g(e,"tabindex","0")},m(b,E){V(b,e,E),y(e,t),y(t,i),i.autofocus&&i.focus(),i.checked=n[0],y(t,s),y(t,o),y(o,a),y(t,f),m&&m.m(t,null),h=!0,v||(w=[G(i,"change",n[31]),G(i,"click",n[23]),G(i,"keydown",n[24]),G(i,"keyup",n[25]),G(i,"keypress",n[26]),G(i,"mouseover",n[27]),G(i,"change",n[28]),G(i,"focus",n[29]),G(i,"blur",n[30]),G(e,"keydown",n[7])],v=!0)},p(b,E){hn(i,_=Sn(p,[{type:"checkbox"},{class:"slide-toggle-input hidden"},(!h||E[0]&2)&&{name:b[1]},b[8](),(!h||E[0]&512&&r!==(r=b[9].disabled))&&{disabled:r}])),E[0]&1&&(i.checked=b[0]),(!h||E[0]&8&&l!==(l="slide-toggle-thumb "+b[3]))&&g(a,"class",l),(!h||E[0]&520)&&At(a,"cursor-not-allowed",b[9].disabled),(!h||E[0]&16&&u!==(u="slide-toggle-track "+b[4]))&&g(o,"class",u),(!h||E[0]&528)&&At(o,"cursor-not-allowed",b[9].disabled),b[10].default?m?(m.p(b,E),E[0]&1024&&O(m,1)):(m=Ts(b),m.c(),O(m,1),m.m(t,null)):m&&(ce(),M(m,1,1,()=>{m=null}),ue()),(!h||E[0]&32&&c!==(c="slide-toggle-label "+b[5]))&&g(t,"class",c),(!h||E[0]&4)&&g(e,"id",b[2]),(!h||E[0]&64&&d!==(d="slide-toggle "+b[6]))&&g(e,"class",d),(!h||E[0]&4)&&g(e,"aria-label",b[2]),(!h||E[0]&1)&&g(e,"aria-checked",b[0])},i(b){h||(O(m),h=!0)},o(b){M(m),h=!1},d(b){b&&I(e),m&&m.d(),v=!1,Qe(w)}}}const pu="inline-block",_u="unstyled flex items-center",bu="flex transition-all duration-[200ms] cursor-pointer",vu="w-[50%] h-full scale-[0.8] transition-all duration-[200ms] shadow";function yu(n,e,t){let i,r,s,o,a,l,u,f;const c=["name","checked","size","background","active","border","rounded","label"];let d=dn(e,c),{$$slots:h={},$$scope:v}=e;const w=nr(h),p=_i();let{name:_}=e,{checked:m=!1}=e,{size:b="md"}=e,{background:E="bg-surface-400 dark:bg-surface-700"}=e,{active:k="bg-surface-900 dark:bg-surface-300"}=e,{border:A=""}=e,{rounded:P="rounded-full"}=e,{label:C=""}=e,L;switch(b){case"sm":L="w-12 h-6";break;case"lg":L="w-20 h-10";break;default:L="w-16 h-8"}function R(W){["Enter","Space"].includes(W.code)&&(W.preventDefault(),p("keyup",W),W.currentTarget.firstChild.click())}function F(){return delete d.class,d}function x(W){fe.call(this,n,W)}function q(W){fe.call(this,n,W)}function K(W){fe.call(this,n,W)}function ne(W){fe.call(this,n,W)}function re(W){fe.call(this,n,W)}function de(W){fe.call(this,n,W)}function se(W){fe.call(this,n,W)}function ae(W){fe.call(this,n,W)}function j(){m=this.checked,t(0,m)}return n.$$set=W=>{t(9,e=Ee(Ee({},e),Pe(W))),t(33,d=dn(e,c)),"name"in W&&t(1,_=W.name),"checked"in W&&t(0,m=W.checked),"size"in W&&t(11,b=W.size),"background"in W&&t(12,E=W.background),"active"in W&&t(13,k=W.active),"border"in W&&t(14,A=W.border),"rounded"in W&&t(15,P=W.rounded),"label"in W&&t(2,C=W.label),"$$scope"in W&&t(21,v=W.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&12289&&t(19,i=m?k:`${E} cursor-pointer`),n.$$.dirty[0]&1&&t(18,r=m?"bg-white/75":"bg-white"),n.$$.dirty[0]&1&&t(17,s=m?"translate-x-full":""),t(20,o=e.disabled===!0?"opacity-50":"hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer"),t(6,a=`${pu} ${P} ${o} ${e.class??""}`),n.$$.dirty[0]&638976&&t(4,u=`${bu} ${A} ${P} ${L} ${i}`),n.$$.dirty[0]&425984&&t(3,f=`${vu} ${P} ${r} ${s}`)},t(5,l=`${_u}`),e=Pe(e),[m,_,C,f,u,l,a,R,F,e,w,b,E,k,A,P,L,s,r,i,o,v,h,x,q,K,ne,re,de,se,ae,j]}class Iu extends _e{constructor(e){super(),be(this,e,yu,gu,ge,{name:1,checked:0,size:11,background:12,active:13,border:14,rounded:15,label:2},null,[-1,-1])}}function Ss(n){let e=n[13],t,i,r=Ps(n);return{c(){r.c(),t=Te()},l(s){r.l(s),t=Te()},m(s,o){r.m(s,o),V(s,t,o),i=!0},p(s,o){o[0]&8192&&ge(e,e=s[13])?(ce(),M(r,1,1,ye),ue(),r=Ps(s),r.c(),O(r,1),r.m(t.parentNode,t)):r.p(s,o)},i(s){i||(O(r),i=!0)},o(s){M(r),i=!1},d(s){s&&I(t),r.d(s)}}}function wu(n){var u,f;let e,t,i,r,s;const o=[(u=n[15])==null?void 0:u.props,{parent:n[16]}];var a=(f=n[15])==null?void 0:f.ref;function l(c,d){var v;let h={$$slots:{default:[ku]},$$scope:{ctx:c}};if(d!==void 0&&d[0]&98304)h=Sn(o,[d[0]&32768&&Yr((v=c[15])==null?void 0:v.props),d[0]&65536&&{parent:c[16]}]);else for(let w=0;w<o.length;w+=1)h=Ee(h,o[w]);return{props:h}}return a&&(t=Gr(a,l(n))),{c(){e=T("div"),t&&X(t.$$.fragment),this.h()},l(c){e=S(c,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var d=D(e);t&&ee(t.$$.fragment,d),d.forEach(I),this.h()},h(){var c;g(e,"class",i="modal contents "+(((c=n[13][0])==null?void 0:c.modalClasses)??"")),g(e,"data-testid","modal-component"),g(e,"role","dialog"),g(e,"aria-modal","true"),g(e,"aria-label",r=n[13][0].title??"")},m(c,d){V(c,e,d),t&&Q(t,e,null),s=!0},p(c,d){var h,v,w;if(d[0]&32768&&a!==(a=(h=c[15])==null?void 0:h.ref)){if(t){ce();const p=t;M(p.$$.fragment,1,0,()=>{Z(p,1)}),ue()}a?(t=Gr(a,l(c,d)),X(t.$$.fragment),O(t.$$.fragment,1),Q(t,e,null)):t=null}else if(a){const p=d[0]&98304?Sn(o,[d[0]&32768&&Yr((v=c[15])==null?void 0:v.props),d[0]&65536&&{parent:c[16]}]):{};d[0]&32768|d[1]&65536&&(p.$$scope={dirty:d,ctx:c}),t.$set(p)}(!s||d[0]&8192&&i!==(i="modal contents "+(((w=c[13][0])==null?void 0:w.modalClasses)??"")))&&g(e,"class",i),(!s||d[0]&8192&&r!==(r=c[13][0].title??""))&&g(e,"aria-label",r)},i(c){s||(t&&O(t.$$.fragment,c),s=!0)},o(c){t&&M(t.$$.fragment,c),s=!1},d(c){c&&I(e),t&&Z(t)}}}function Eu(n){var h,v,w,p;let e,t,i,r,s,o,a=((h=n[13][0])==null?void 0:h.title)&&Cs(n),l=((v=n[13][0])==null?void 0:v.body)&&Rs(n),u=((w=n[13][0])==null?void 0:w.image)&&typeof((p=n[13][0])==null?void 0:p.image)=="string"&&Ds(n);function f(_,m){if(_[13][0].type==="alert")return Au;if(_[13][0].type==="confirm")return Su;if(_[13][0].type==="prompt")return Tu}let c=f(n),d=c&&c(n);return{c(){e=T("div"),a&&a.c(),t=N(),l&&l.c(),i=N(),u&&u.c(),r=N(),d&&d.c(),this.h()},l(_){e=S(_,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var m=D(e);a&&a.l(m),t=U(m),l&&l.l(m),i=U(m),u&&u.l(m),r=U(m),d&&d.l(m),m.forEach(I),this.h()},h(){g(e,"class",s="modal "+n[17]),g(e,"data-testid","modal"),g(e,"role","dialog"),g(e,"aria-modal","true"),g(e,"aria-label",o=n[13][0].title??"")},m(_,m){V(_,e,m),a&&a.m(e,null),y(e,t),l&&l.m(e,null),y(e,i),u&&u.m(e,null),y(e,r),d&&d.m(e,null)},p(_,m){var b,E,k,A;(b=_[13][0])!=null&&b.title?a?a.p(_,m):(a=Cs(_),a.c(),a.m(e,t)):a&&(a.d(1),a=null),(E=_[13][0])!=null&&E.body?l?l.p(_,m):(l=Rs(_),l.c(),l.m(e,i)):l&&(l.d(1),l=null),(k=_[13][0])!=null&&k.image&&typeof((A=_[13][0])==null?void 0:A.image)=="string"?u?u.p(_,m):(u=Ds(_),u.c(),u.m(e,r)):u&&(u.d(1),u=null),c===(c=f(_))&&d?d.p(_,m):(d&&d.d(1),d=c&&c(_),d&&(d.c(),d.m(e,null))),m[0]&131072&&s!==(s="modal "+_[17])&&g(e,"class",s),m[0]&8192&&o!==(o=_[13][0].title??"")&&g(e,"aria-label",o)},i:ye,o:ye,d(_){_&&I(e),a&&a.d(),l&&l.d(),u&&u.d(),d&&d.d()}}}function As(n){var r;let e,t=((r=n[15])==null?void 0:r.slot)+"",i;return{c(){e=new Zt(!1),i=Te(),this.h()},l(s){e=$t(s,!1),i=Te(),this.h()},h(){e.a=i},m(s,o){e.m(t,s,o),V(s,i,o)},p(s,o){var a;o[0]&32768&&t!==(t=((a=s[15])==null?void 0:a.slot)+"")&&e.p(t)},d(s){s&&(I(i),e.d())}}}function ku(n){var i;let e,t=((i=n[15])==null?void 0:i.slot)&&As(n);return{c(){t&&t.c(),e=Te()},l(r){t&&t.l(r),e=Te()},m(r,s){t&&t.m(r,s),V(r,e,s)},p(r,s){var o;(o=r[15])!=null&&o.slot?t?t.p(r,s):(t=As(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&I(e),t&&t.d(r)}}}function Cs(n){let e,t,i=n[13][0].title+"",r;return{c(){e=T("header"),t=new Zt(!1),this.h()},l(s){e=S(s,"HEADER",{class:!0});var o=D(e);t=$t(o,!1),o.forEach(I),this.h()},h(){t.a=null,g(e,"class",r="modal-header "+n[5])},m(s,o){V(s,e,o),t.m(i,e)},p(s,o){o[0]&8192&&i!==(i=s[13][0].title+"")&&t.p(i),o[0]&32&&r!==(r="modal-header "+s[5])&&g(e,"class",r)},d(s){s&&I(e)}}}function Rs(n){let e,t,i=n[13][0].body+"",r;return{c(){e=T("article"),t=new Zt(!1),this.h()},l(s){e=S(s,"ARTICLE",{class:!0});var o=D(e);t=$t(o,!1),o.forEach(I),this.h()},h(){t.a=null,g(e,"class",r="modal-body "+n[6])},m(s,o){V(s,e,o),t.m(i,e)},p(s,o){o[0]&8192&&i!==(i=s[13][0].body+"")&&t.p(i),o[0]&64&&r!==(r="modal-body "+s[6])&&g(e,"class",r)},d(s){s&&I(e)}}}function Ds(n){let e,t;return{c(){e=T("img"),this.h()},l(i){e=S(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){var i;g(e,"class","modal-image "+Ou),gt(e.src,t=(i=n[13][0])==null?void 0:i.image)||g(e,"src",t),g(e,"alt","Modal")},m(i,r){V(i,e,r)},p(i,r){var s;r[0]&8192&&!gt(e.src,t=(s=i[13][0])==null?void 0:s.image)&&g(e,"src",t)},d(i){i&&I(e)}}}function Tu(n){let e,t,i,r,s,o,a,l,u,f,c,d,h,v,w=[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},n[13][0].valueAttr],p={};for(let _=0;_<w.length;_+=1)p=Ee(p,w[_]);return{c(){e=T("form"),t=T("input"),i=N(),r=T("footer"),s=T("button"),o=J(n[0]),l=N(),u=T("button"),f=J(n[2]),this.h()},l(_){e=S(_,"FORM",{class:!0});var m=D(e);t=S(m,"INPUT",{class:!0,name:!0,type:!0}),i=U(m),r=S(m,"FOOTER",{class:!0});var b=D(r);s=S(b,"BUTTON",{type:!0,class:!0});var E=D(s);o=Y(E,n[0]),E.forEach(I),l=U(b),u=S(b,"BUTTON",{type:!0,class:!0});var k=D(u);f=Y(k,n[2]),k.forEach(I),b.forEach(I),m.forEach(I),this.h()},h(){hn(t,p),g(s,"type","button"),g(s,"class",a="btn "+n[3]),g(u,"type","submit"),g(u,"class",c="btn "+n[4]),g(r,"class",d="modal-footer "+n[7]),g(e,"class","space-y-4")},m(_,m){V(_,e,m),y(e,t),t.autofocus&&t.focus(),pt(t,n[14]),y(e,i),y(e,r),y(r,s),y(s,o),y(r,l),y(r,u),y(u,f),h||(v=[G(t,"input",n[41]),G(s,"click",n[23]),G(e,"submit",n[25])],h=!0)},p(_,m){hn(t,p=Sn(w,[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},m[0]&8192&&_[13][0].valueAttr])),m[0]&16384&&t.value!==_[14]&&pt(t,_[14]),m[0]&1&&te(o,_[0]),m[0]&8&&a!==(a="btn "+_[3])&&g(s,"class",a),m[0]&4&&te(f,_[2]),m[0]&16&&c!==(c="btn "+_[4])&&g(u,"class",c),m[0]&128&&d!==(d="modal-footer "+_[7])&&g(r,"class",d)},d(_){_&&I(e),h=!1,Qe(v)}}}function Su(n){let e,t,i,r,s,o,a,l,u,f,c;return{c(){e=T("footer"),t=T("button"),i=J(n[0]),s=N(),o=T("button"),a=J(n[1]),this.h()},l(d){e=S(d,"FOOTER",{class:!0});var h=D(e);t=S(h,"BUTTON",{type:!0,class:!0});var v=D(t);i=Y(v,n[0]),v.forEach(I),s=U(h),o=S(h,"BUTTON",{type:!0,class:!0});var w=D(o);a=Y(w,n[1]),w.forEach(I),h.forEach(I),this.h()},h(){g(t,"type","button"),g(t,"class",r="btn "+n[3]),g(o,"type","button"),g(o,"class",l="btn "+n[4]),g(e,"class",u="modal-footer "+n[7])},m(d,h){V(d,e,h),y(e,t),y(t,i),y(e,s),y(e,o),y(o,a),f||(c=[G(t,"click",n[23]),G(o,"click",n[24])],f=!0)},p(d,h){h[0]&1&&te(i,d[0]),h[0]&8&&r!==(r="btn "+d[3])&&g(t,"class",r),h[0]&2&&te(a,d[1]),h[0]&16&&l!==(l="btn "+d[4])&&g(o,"class",l),h[0]&128&&u!==(u="modal-footer "+d[7])&&g(e,"class",u)},d(d){d&&I(e),f=!1,Qe(c)}}}function Au(n){let e,t,i,r,s,o,a;return{c(){e=T("footer"),t=T("button"),i=J(n[0]),this.h()},l(l){e=S(l,"FOOTER",{class:!0});var u=D(e);t=S(u,"BUTTON",{type:!0,class:!0});var f=D(t);i=Y(f,n[0]),f.forEach(I),u.forEach(I),this.h()},h(){g(t,"type","button"),g(t,"class",r="btn "+n[3]),g(e,"class",s="modal-footer "+n[7])},m(l,u){V(l,e,u),y(e,t),y(t,i),o||(a=G(t,"click",n[23]),o=!0)},p(l,u){u[0]&1&&te(i,l[0]),u[0]&8&&r!==(r="btn "+l[3])&&g(t,"class",r),u[0]&128&&s!==(s="modal-footer "+l[7])&&g(e,"class",s)},d(l){l&&I(e),o=!1,a()}}}function Ps(n){let e,t,i,r,s,o,a,l,u,f,c,d;const h=[Eu,wu],v=[];function w(p,_){return p[13][0].type!=="component"?0:1}return i=w(n),r=v[i]=h[i](n),{c(){e=T("div"),t=T("div"),r.c(),this.h()},l(p){e=S(p,"DIV",{class:!0,"data-testid":!0});var _=D(e);t=S(_,"DIV",{class:!0});var m=D(t);r.l(m),m.forEach(I),_.forEach(I),this.h()},h(){g(t,"class",s="modal-transition "+n[18]),g(e,"class",l="modal-backdrop "+n[19]),g(e,"data-testid","modal-backdrop")},m(p,_){V(p,e,_),y(e,t),v[i].m(t,null),f=!0,c||(d=[G(e,"mousedown",n[21]),G(e,"mouseup",n[22]),G(e,"touchstart",n[39],{passive:!0}),G(e,"touchend",n[40],{passive:!0}),yn(Dc.call(null,e,!0))],c=!0)},p(p,_){n=p;let m=i;i=w(n),i===m?v[i].p(n,_):(ce(),M(v[m],1,1,()=>{v[m]=null}),ue(),r=v[i],r?r.p(n,_):(r=v[i]=h[i](n),r.c()),O(r,1),r.m(t,null)),(!f||_[0]&262144&&s!==(s="modal-transition "+n[18]))&&g(t,"class",s),(!f||_[0]&524288&&l!==(l="modal-backdrop "+n[19]))&&g(e,"class",l)},i(p){f||(O(r),Ot(()=>{f&&(a&&a.end(1),o=rr(t,Ct,{transition:n[9],params:n[10],enabled:n[8]}),o.start())}),Ot(()=>{f&&(u||(u=mn(e,Ct,{transition:ts,params:{duration:150},enabled:n[8]},!0)),u.run(1))}),f=!0)},o(p){M(r),o&&o.invalidate(),a=sr(t,Ct,{transition:n[11],params:n[12],enabled:n[8]}),u||(u=mn(e,Ct,{transition:ts,params:{duration:150},enabled:n[8]},!1)),u.run(0),f=!1},d(p){p&&I(e),v[i].d(),p&&a&&a.end(),p&&u&&u.end(),c=!1,Qe(d)}}}function Cu(n){let e,t,i,r,s=n[13].length>0&&Ss(n);return{c(){s&&s.c(),e=Te()},l(o){s&&s.l(o),e=Te()},m(o,a){s&&s.m(o,a),V(o,e,a),t=!0,i||(r=G(window,"keydown",n[26]),i=!0)},p(o,a){o[13].length>0?s?(s.p(o,a),a[0]&8192&&O(s,1)):(s=Ss(o),s.c(),O(s,1),s.m(e.parentNode,e)):s&&(ce(),M(s,1,1,()=>{s=null}),ue())},i(o){t||(O(s),t=!0)},o(o){M(s),t=!1},d(o){o&&I(e),s&&s.d(o),i=!1,r()}}}const Ru="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto",Du="w-full h-fit min-h-full p-4 overflow-y-auto flex justify-center",Pu="block overflow-y-auto",Ou="w-full h-auto";function Lu(n,e,t){let i,r,s,o,a,l,u;Ce(n,or,B=>t(43,u=B));const f=_i();let{position:c="items-center"}=e,{components:d={}}=e,{background:h="bg-surface-100-800-token"}=e,{width:v="w-modal"}=e,{height:w="h-auto"}=e,{padding:p="p-4"}=e,{spacing:_="space-y-4"}=e,{rounded:m="rounded-container-token"}=e,{shadow:b="shadow-xl"}=e,{zIndex:E="z-[999]"}=e,{buttonNeutral:k="variant-ghost-surface"}=e,{buttonPositive:A="variant-filled"}=e,{buttonTextCancel:P="Cancel"}=e,{buttonTextConfirm:C="Confirm"}=e,{buttonTextSubmit:L="Submit"}=e,{regionBackdrop:R="bg-surface-backdrop-token"}=e,{regionHeader:F="text-2xl font-bold"}=e,{regionBody:x="max-h-[200px] overflow-hidden"}=e,{regionFooter:q="flex justify-end space-x-2"}=e,{transitions:K=!u}=e,{transitionIn:ne=pn}=e,{transitionInParams:re={duration:150,opacity:0,x:0,y:100}}=e,{transitionOut:de=pn}=e,{transitionOutParams:se={duration:150,opacity:0,x:0,y:100}}=e,ae;const j={buttonTextCancel:P,buttonTextConfirm:C,buttonTextSubmit:L};let W,H=!1;const oe=fr();Ce(n,oe,B=>t(13,l=B)),oe.subscribe(B=>{B.length&&(B[0].type==="prompt"&&t(14,ae=B[0].value),t(0,P=B[0].buttonTextCancel||j.buttonTextCancel),t(1,C=B[0].buttonTextConfirm||j.buttonTextConfirm),t(2,L=B[0].buttonTextSubmit||j.buttonTextSubmit),t(15,W=typeof B[0].component=="string"?d[B[0].component]:B[0].component))});function Ie(B){if(!(B.target instanceof Element))return;const le=B.target.classList;(le.contains("modal-backdrop")||le.contains("modal-transition"))&&(H=!0)}function Oe(B){if(!(B.target instanceof Element))return;const le=B.target.classList;(le.contains("modal-backdrop")||le.contains("modal-transition"))&&H&&(l[0].response&&l[0].response(void 0),oe.close(),f("backdrop",B)),H=!1}function Ke(){l[0].response&&l[0].response(!1),oe.close()}function tt(){l[0].response&&l[0].response(!0),oe.close()}function Le(B){B.preventDefault(),l[0].response&&l[0].response(ae),oe.close()}function Re(B){l.length&&B.code==="Escape"&&Ke()}function z(B){fe.call(this,n,B)}function De(B){fe.call(this,n,B)}function Me(){ae=this.value,t(14,ae)}return n.$$set=B=>{t(46,e=Ee(Ee({},e),Pe(B))),"position"in B&&t(27,c=B.position),"components"in B&&t(28,d=B.components),"background"in B&&t(29,h=B.background),"width"in B&&t(30,v=B.width),"height"in B&&t(31,w=B.height),"padding"in B&&t(32,p=B.padding),"spacing"in B&&t(33,_=B.spacing),"rounded"in B&&t(34,m=B.rounded),"shadow"in B&&t(35,b=B.shadow),"zIndex"in B&&t(36,E=B.zIndex),"buttonNeutral"in B&&t(3,k=B.buttonNeutral),"buttonPositive"in B&&t(4,A=B.buttonPositive),"buttonTextCancel"in B&&t(0,P=B.buttonTextCancel),"buttonTextConfirm"in B&&t(1,C=B.buttonTextConfirm),"buttonTextSubmit"in B&&t(2,L=B.buttonTextSubmit),"regionBackdrop"in B&&t(37,R=B.regionBackdrop),"regionHeader"in B&&t(5,F=B.regionHeader),"regionBody"in B&&t(6,x=B.regionBody),"regionFooter"in B&&t(7,q=B.regionFooter),"transitions"in B&&t(8,K=B.transitions),"transitionIn"in B&&t(9,ne=B.transitionIn),"transitionInParams"in B&&t(10,re=B.transitionInParams),"transitionOut"in B&&t(11,de=B.transitionOut),"transitionOutParams"in B&&t(12,se=B.transitionOutParams)},n.$$.update=()=>{var B,le,he;n.$$.dirty[0]&134225920&&t(38,i=((B=l[0])==null?void 0:B.position)??c),t(19,r=`${Ru} ${R} ${E} ${e.class??""} ${((le=l[0])==null?void 0:le.backdropClasses)??""}`),n.$$.dirty[1]&128&&t(18,s=`${Du} ${i??""}`),n.$$.dirty[0]&1610620928|n.$$.dirty[1]&31&&t(17,o=`${Pu} ${h} ${v} ${w} ${p} ${_} ${m} ${b} ${((he=l[0])==null?void 0:he.modalClasses)??""}`),n.$$.dirty[0]&1744830719|n.$$.dirty[1]&95&&t(16,a={position:c,background:h,width:v,height:w,padding:p,spacing:_,rounded:m,shadow:b,buttonNeutral:k,buttonPositive:A,buttonTextCancel:P,buttonTextConfirm:C,buttonTextSubmit:L,regionBackdrop:R,regionHeader:F,regionBody:x,regionFooter:q,onClose:Ke})},e=Pe(e),[P,C,L,k,A,F,x,q,K,ne,re,de,se,l,ae,W,a,o,s,r,oe,Ie,Oe,Ke,tt,Le,Re,c,d,h,v,w,p,_,m,b,E,R,i,z,De,Me]}class Mu extends _e{constructor(e){super(),be(this,e,Lu,Cu,ge,{position:27,components:28,background:29,width:30,height:31,padding:32,spacing:33,rounded:34,shadow:35,zIndex:36,buttonNeutral:3,buttonPositive:4,buttonTextCancel:0,buttonTextConfirm:1,buttonTextSubmit:2,regionBackdrop:37,regionHeader:5,regionBody:6,regionFooter:7,transitions:8,transitionIn:9,transitionInParams:10,transitionOut:11,transitionOutParams:12},null,[-1,-1])}}function Nu(n){let e,t=`<script nonce="%sveltekit.nonce%">(${tc.toString()})();<\/script>`,i,r,s,o,a,l,u,f,c,d,h,v,w;return{c(){e=new Zt(!1),i=Te(),r=N(),s=T("div"),o=T("div"),a=ti("svg"),l=ti("path"),this.h()},l(p){const _=Kl("svelte-gewkj4",document.head);e=$t(_,!1),i=Te(),_.forEach(I),r=U(p),s=S(p,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var m=D(s);o=S(m,"DIV",{class:!0});var b=D(o);a=ni(b,"svg",{class:!0,xmlns:!0,viewBox:!0});var E=D(a);l=ni(E,"path",{d:!0}),D(l).forEach(I),E.forEach(I),b.forEach(I),m.forEach(I),this.h()},h(){e.a=i,g(l,"d",u=n[0]?n[4].sun:n[4].moon),g(a,"class",f="lightswitch-icon "+n[1]),g(a,"xmlns","http://www.w3.org/2000/svg"),g(a,"viewBox","0 0 512 512"),g(o,"class",c="lightswitch-thumb "+n[2]),g(s,"class",d="lightswitch-track "+n[3]),g(s,"role","switch"),g(s,"aria-label","Light Switch"),g(s,"aria-checked",n[0]),g(s,"title",h="Toggle "+(n[0]===!0?"Dark":"Light")+" Mode"),g(s,"tabindex","0")},m(p,_){e.m(t,document.head),y(document.head,i),V(p,r,_),V(p,s,_),y(s,o),y(o,a),y(a,l),v||(w=[G(s,"click",n[5]),G(s,"click",n[18]),G(s,"keydown",Vu),G(s,"keydown",n[19]),G(s,"keyup",n[20]),G(s,"keypress",n[21])],v=!0)},p(p,[_]){_&1&&u!==(u=p[0]?p[4].sun:p[4].moon)&&g(l,"d",u),_&2&&f!==(f="lightswitch-icon "+p[1])&&g(a,"class",f),_&4&&c!==(c="lightswitch-thumb "+p[2])&&g(o,"class",c),_&8&&d!==(d="lightswitch-track "+p[3])&&g(s,"class",d),_&1&&g(s,"aria-checked",p[0]),_&1&&h!==(h="Toggle "+(p[0]===!0?"Dark":"Light")+" Mode")&&g(s,"title",h)},i:ye,o:ye,d(p){p&&(e.d(),I(r),I(s)),I(i),v=!1,Qe(w)}}}const Uu="cursor-pointer",Fu="aspect-square scale-[0.8] flex justify-center items-center",Bu="w-[70%] aspect-square";function Vu(n){["Enter","Space"].includes(n.code)&&(n.preventDefault(),n.currentTarget.click())}function Hu(n,e,t){let i,r,s,o,a,l,u,f;Ce(n,ii,R=>t(0,f=R));let{bgLight:c="bg-surface-50"}=e,{bgDark:d="bg-surface-900"}=e,{fillLight:h="fill-surface-50"}=e,{fillDark:v="fill-surface-900"}=e,{width:w="w-12"}=e,{height:p="h-6"}=e,{ring:_="ring-[1px] ring-surface-500/30"}=e,{rounded:m="rounded-token"}=e;const b="transition-all duration-[200ms]",E={sun:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",moon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"};function k(){Zo(ii,f=!f,f),ic(f),Xr(f)}ir(()=>{"modeCurrent"in localStorage||Xr(nc())});function A(R){fe.call(this,n,R)}function P(R){fe.call(this,n,R)}function C(R){fe.call(this,n,R)}function L(R){fe.call(this,n,R)}return n.$$set=R=>{t(23,e=Ee(Ee({},e),Pe(R))),"bgLight"in R&&t(6,c=R.bgLight),"bgDark"in R&&t(7,d=R.bgDark),"fillLight"in R&&t(8,h=R.fillLight),"fillDark"in R&&t(9,v=R.fillDark),"width"in R&&t(10,w=R.width),"height"in R&&t(11,p=R.height),"ring"in R&&t(12,_=R.ring),"rounded"in R&&t(13,m=R.rounded)},n.$$.update=()=>{n.$$.dirty&193&&t(17,i=f===!0?c:d),n.$$.dirty&193&&t(16,r=f===!0?d:c),n.$$.dirty&1&&t(15,s=f===!0?"translate-x-[100%]":""),n.$$.dirty&769&&t(14,o=f===!0?h:v),t(3,a=`${Uu} ${b} ${w} ${p} ${_} ${m} ${i} ${e.class??""}`),n.$$.dirty&108544&&t(2,l=`${Fu} ${b} ${p} ${m} ${r} ${s}`),n.$$.dirty&16384&&t(1,u=`${Bu} ${o}`)},e=Pe(e),[f,u,l,a,E,k,c,d,h,v,w,p,_,m,o,s,r,i,A,P,C,L]}class ju extends _e{constructor(e){super(),be(this,e,Hu,Nu,ge,{bgLight:6,bgDark:7,fillLight:8,fillDark:9,width:10,height:11,ring:12,rounded:13})}}function Os(n,e,t){const i=n.slice();return i[36]=e[t],i[38]=t,i}function Ls(n){let e,t,i=[],r=new Map,s,o,a,l=Se(n[11]);const u=f=>f[36];for(let f=0;f<l.length;f+=1){let c=Os(n,l,f),d=u(c);r.set(d,i[f]=Fs(d,c))}return{c(){e=T("div"),t=T("div");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=S(f,"DIV",{class:!0,"data-testid":!0});var c=D(e);t=S(c,"DIV",{class:!0});var d=D(t);for(let h=0;h<i.length;h+=1)i[h].l(d);d.forEach(I),c.forEach(I),this.h()},h(){g(t,"class",s="snackbar "+n[13]),g(e,"class",o="snackbar-wrapper "+n[14]),g(e,"data-testid","snackbar-wrapper")},m(f,c){V(f,e,c),y(e,t);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(t,null);a=!0},p(f,c){if(c[0]&499103){l=Se(f[11]),ce();for(let d=0;d<i.length;d+=1)i[d].r();i=ar(i,c,u,1,f,l,r,t,$o,Fs,null,Os);for(let d=0;d<i.length;d+=1)i[d].a();ue()}(!a||c[0]&8192&&s!==(s="snackbar "+f[13]))&&g(t,"class",s),(!a||c[0]&16384&&o!==(o="snackbar-wrapper "+f[14]))&&g(e,"class",o)},i(f){if(!a){for(let c=0;c<l.length;c+=1)O(i[c]);a=!0}},o(f){for(let c=0;c<i.length;c+=1)M(i[c]);a=!1},d(f){f&&I(e);for(let c=0;c<i.length;c+=1)i[c].d()}}}function Ms(n){let e,t,i=n[36].action&&Ns(n),r=!n[36].hideDismiss&&Us(n);return{c(){e=T("div"),i&&i.c(),t=N(),r&&r.c(),this.h()},l(s){e=S(s,"DIV",{class:!0});var o=D(e);i&&i.l(o),t=U(o),r&&r.l(o),o.forEach(I),this.h()},h(){g(e,"class","toast-actions "+Gu)},m(s,o){V(s,e,o),i&&i.m(e,null),y(e,t),r&&r.m(e,null)},p(s,o){s[36].action?i?i.p(s,o):(i=Ns(s),i.c(),i.m(e,t)):i&&(i.d(1),i=null),s[36].hideDismiss?r&&(r.d(1),r=null):r?r.p(s,o):(r=Us(s),r.c(),r.m(e,null))},d(s){s&&I(e),i&&i.d(),r&&r.d()}}}function Ns(n){let e,t,i=n[36].action.label+"",r,s;function o(){return n[30](n[38])}return{c(){e=T("button"),t=new Zt(!1),this.h()},l(a){e=S(a,"BUTTON",{class:!0});var l=D(e);t=$t(l,!1),l.forEach(I),this.h()},h(){t.a=null,g(e,"class",n[1])},m(a,l){V(a,e,l),t.m(i,e),r||(s=G(e,"click",o),r=!0)},p(a,l){n=a,l[0]&2048&&i!==(i=n[36].action.label+"")&&t.p(i),l[0]&2&&g(e,"class",n[1])},d(a){a&&I(e),r=!1,s()}}}function Us(n){let e,t,i,r;function s(){return n[31](n[36])}return{c(){e=T("button"),t=J(n[3]),this.h()},l(o){e=S(o,"BUTTON",{class:!0,"aria-label":!0});var a=D(e);t=Y(a,n[3]),a.forEach(I),this.h()},h(){g(e,"class",n[2]),g(e,"aria-label","Dismiss toast")},m(o,a){V(o,e,a),y(e,t),i||(r=G(e,"click",s),i=!0)},p(o,a){n=o,a[0]&8&&te(t,n[3]),a[0]&4&&g(e,"class",n[2])},d(o){o&&I(e),i=!1,r()}}}function Fs(n,e){let t,i,r,s,o=e[36].message+"",a,l,u,f,c,d,h,v=ye,w,p,_,m=(e[36].action||!e[36].hideDismiss)&&Ms(e);function b(){return e[32](e[38])}function E(){return e[33](e[38])}return{key:n,first:null,c(){t=T("div"),i=T("div"),r=T("div"),s=new Zt(!1),a=N(),m&&m.c(),u=N(),this.h()},l(k){t=S(k,"DIV",{role:!0,"aria-live":!0});var A=D(t);i=S(A,"DIV",{class:!0,"data-testid":!0});var P=D(i);r=S(P,"DIV",{class:!0});var C=D(r);s=$t(C,!1),C.forEach(I),a=U(P),m&&m.l(P),P.forEach(I),u=U(A),A.forEach(I),this.h()},h(){s.a=null,g(r,"class","text-base"),g(i,"class",l="toast "+e[12]+" "+(e[36].background??e[0])+" "+(e[36].classes??"")),g(i,"data-testid","toast"),g(t,"role",f=e[36].hideDismiss?"alert":"alertdialog"),g(t,"aria-live","polite"),this.first=t},m(k,A){V(k,t,A),y(t,i),y(i,r),s.m(o,r),y(i,a),m&&m.m(i,null),y(t,u),w=!0,p||(_=[G(t,"mouseenter",b),G(t,"mouseleave",E)],p=!0)},p(k,A){e=k,(!w||A[0]&2048)&&o!==(o=e[36].message+"")&&s.p(o),e[36].action||!e[36].hideDismiss?m?m.p(e,A):(m=Ms(e),m.c(),m.m(i,null)):m&&(m.d(1),m=null),(!w||A[0]&6145&&l!==(l="toast "+e[12]+" "+(e[36].background??e[0])+" "+(e[36].classes??"")))&&g(i,"class",l),(!w||A[0]&2048&&f!==(f=e[36].hideDismiss?"alert":"alertdialog"))&&g(t,"role",f)},r(){h=t.getBoundingClientRect()},f(){ra(t),v(),sa(t,h)},a(){v(),v=ia(t,h,ua,{duration:e[4]?250:0})},i(k){w||(Ot(()=>{w&&(d&&d.end(1),c=rr(t,Ct,{transition:e[5],params:{x:e[10].x,y:e[10].y,...e[6]},enabled:e[4]}),c.start())}),w=!0)},o(k){c&&c.invalidate(),d=sr(t,Ct,{transition:e[7],params:{x:e[10].x,y:e[10].y,...e[8]},enabled:e[4]}),w=!1},d(k){k&&I(t),m&&m.d(),k&&d&&d.end(),p=!1,Qe(_)}}}function zu(n){let e,t,i=n[9].length&&Ls(n);return{c(){i&&i.c(),e=Te()},l(r){i&&i.l(r),e=Te()},m(r,s){i&&i.m(r,s),V(r,e,s),t=!0},p(r,s){r[9].length?i?(i.p(r,s),s[0]&512&&O(i,1)):(i=Ls(r),i.c(),O(i,1),i.m(e.parentNode,e)):i&&(ce(),M(i,1,1,()=>{i=null}),ue())},i(r){t||(O(i),t=!0)},o(r){M(i),t=!1},d(r){r&&I(e),i&&i.d(r)}}}const Wu="flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none",qu="flex flex-col gap-y-2",Ku="flex justify-between items-center pointer-events-auto",Gu="flex items-center space-x-2";function xu(n,e,t){let i,r,s,o,a,l;Ce(n,or,H=>t(34,l=H));const u=ln();Ce(n,u,H=>t(9,a=H));let{position:f="b"}=e,{max:c=3}=e,{background:d="variant-filled-secondary"}=e,{width:h="max-w-[640px]"}=e,{color:v=""}=e,{padding:w="p-4"}=e,{spacing:p="space-x-4"}=e,{rounded:_="rounded-container-token"}=e,{shadow:m="shadow-lg"}=e,{zIndex:b="z-[888]"}=e,{buttonAction:E="btn variant-filled"}=e,{buttonDismiss:k="btn-icon btn-icon-sm variant-filled"}=e,{buttonDismissLabel:A="✕"}=e,{transitions:P=!l}=e,{transitionIn:C=pn}=e,{transitionInParams:L={duration:250}}=e,{transitionOut:R=pn}=e,{transitionOutParams:F={duration:250}}=e,x,q,K={x:0,y:0};switch(f){case"t":x="justify-center items-start",q="items-center",K={x:0,y:-100};break;case"b":x="justify-center items-end",q="items-center",K={x:0,y:100};break;case"l":x="justify-start items-center",q="items-start",K={x:-100,y:0};break;case"r":x="justify-end items-center",q="items-end",K={x:100,y:0};break;case"tl":x="justify-start items-start",q="items-start",K={x:-100,y:0};break;case"tr":x="justify-end items-start",q="items-end",K={x:100,y:0};break;case"bl":x="justify-start items-end",q="items-start",K={x:-100,y:0};break;case"br":x="justify-end items-end",q="items-end",K={x:100,y:0};break}function ne(H){var oe,Ie;(Ie=(oe=a[H])==null?void 0:oe.action)==null||Ie.response(),u.close(a[H].id)}function re(H){var oe;(oe=a[H])!=null&&oe.hoverable&&(u.freeze(H),t(13,r+=" scale-[105%]"))}function de(H){var oe;(oe=a[H])!=null&&oe.hoverable&&(u.unfreeze(H),t(13,r=r.replace(" scale-[105%]","")))}const se=H=>ne(H),ae=H=>u.close(H.id),j=H=>re(H),W=H=>de(H);return n.$$set=H=>{t(35,e=Ee(Ee({},e),Pe(H))),"position"in H&&t(19,f=H.position),"max"in H&&t(20,c=H.max),"background"in H&&t(0,d=H.background),"width"in H&&t(21,h=H.width),"color"in H&&t(22,v=H.color),"padding"in H&&t(23,w=H.padding),"spacing"in H&&t(24,p=H.spacing),"rounded"in H&&t(25,_=H.rounded),"shadow"in H&&t(26,m=H.shadow),"zIndex"in H&&t(27,b=H.zIndex),"buttonAction"in H&&t(1,E=H.buttonAction),"buttonDismiss"in H&&t(2,k=H.buttonDismiss),"buttonDismissLabel"in H&&t(3,A=H.buttonDismissLabel),"transitions"in H&&t(4,P=H.transitions),"transitionIn"in H&&t(5,C=H.transitionIn),"transitionInParams"in H&&t(6,L=H.transitionInParams),"transitionOut"in H&&t(7,R=H.transitionOut),"transitionOutParams"in H&&t(8,F=H.transitionOutParams)},n.$$.update=()=>{t(14,i=`${Wu} ${x} ${b} ${e.class||""}`),n.$$.dirty[0]&545259520&&t(13,r=`${qu} ${q} ${w}`),n.$$.dirty[0]&132120576&&t(12,s=`${Ku} ${h} ${v} ${w} ${p} ${_} ${m}`),n.$$.dirty[0]&1049088&&t(11,o=Array.from(a).slice(0,c))},e=Pe(e),[d,E,k,A,P,C,L,R,F,a,K,o,s,r,i,u,ne,re,de,f,c,h,v,w,p,_,m,b,x,q,se,ae,j,W]}class Ju extends _e{constructor(e){super(),be(this,e,xu,zu,ge,{position:19,max:20,background:0,width:21,color:22,padding:23,spacing:24,rounded:25,shadow:26,zIndex:27,buttonAction:1,buttonDismiss:2,buttonDismissLabel:3,transitions:4,transitionIn:5,transitionInParams:6,transitionOut:7,transitionOutParams:8},null,[-1,-1])}}const _n=Math.min,qt=Math.max,si=Math.round,Gn=Math.floor,Mt=n=>({x:n,y:n}),Yu={left:"right",right:"left",bottom:"top",top:"bottom"},Xu={start:"end",end:"start"};function Wi(n,e,t){return qt(n,_n(e,t))}function Pn(n,e){return typeof n=="function"?n(e):n}function Gt(n){return n.split("-")[0]}function On(n){return n.split("-")[1]}function fa(n){return n==="x"?"y":"x"}function dr(n){return n==="y"?"height":"width"}function Ii(n){return["top","bottom"].includes(Gt(n))?"y":"x"}function hr(n){return fa(Ii(n))}function Qu(n,e,t){t===void 0&&(t=!1);const i=On(n),r=hr(n),s=dr(r);let o=r==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=oi(o)),[o,oi(o)]}function Zu(n){const e=oi(n);return[qi(n),e,qi(e)]}function qi(n){return n.replace(/start|end/g,e=>Xu[e])}function $u(n,e,t){const i=["left","right"],r=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(n){case"top":case"bottom":return t?e?r:i:e?i:r;case"left":case"right":return e?s:o;default:return[]}}function ef(n,e,t,i){const r=On(n);let s=$u(Gt(n),t==="start",i);return r&&(s=s.map(o=>o+"-"+r),e&&(s=s.concat(s.map(qi)))),s}function oi(n){return n.replace(/left|right|bottom|top/g,e=>Yu[e])}function tf(n){return{top:0,right:0,bottom:0,left:0,...n}}function da(n){return typeof n!="number"?tf(n):{top:n,right:n,bottom:n,left:n}}function ai(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function Bs(n,e,t){let{reference:i,floating:r}=n;const s=Ii(e),o=hr(e),a=dr(o),l=Gt(e),u=s==="y",f=i.x+i.width/2-r.width/2,c=i.y+i.height/2-r.height/2,d=i[a]/2-r[a]/2;let h;switch(l){case"top":h={x:f,y:i.y-r.height};break;case"bottom":h={x:f,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:c};break;case"left":h={x:i.x-r.width,y:c};break;default:h={x:i.x,y:i.y}}switch(On(e)){case"start":h[o]-=d*(t&&u?-1:1);break;case"end":h[o]+=d*(t&&u?-1:1);break}return h}const nf=async(n,e,t)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=t,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let u=await o.getElementRects({reference:n,floating:e,strategy:r}),{x:f,y:c}=Bs(u,i,l),d=i,h={},v=0;for(let w=0;w<a.length;w++){const{name:p,fn:_}=a[w],{x:m,y:b,data:E,reset:k}=await _({x:f,y:c,initialPlacement:i,placement:d,strategy:r,middlewareData:h,rects:u,platform:o,elements:{reference:n,floating:e}});if(f=m??f,c=b??c,h={...h,[p]:{...h[p],...E}},k&&v<=50){v++,typeof k=="object"&&(k.placement&&(d=k.placement),k.rects&&(u=k.rects===!0?await o.getElementRects({reference:n,floating:e,strategy:r}):k.rects),{x:f,y:c}=Bs(u,d,l)),w=-1;continue}}return{x:f,y:c,placement:d,strategy:r,middlewareData:h}};async function ha(n,e){var t;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:a,strategy:l}=n,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:c="floating",altBoundary:d=!1,padding:h=0}=Pn(e,n),v=da(h),p=a[d?c==="floating"?"reference":"floating":c],_=ai(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(p)))==null||t?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:u,rootBoundary:f,strategy:l})),m=c==="floating"?{...o.floating,x:i,y:r}:o.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),E=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},k=ai(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:m,offsetParent:b,strategy:l}):m);return{top:(_.top-k.top+v.top)/E.y,bottom:(k.bottom-_.bottom+v.bottom)/E.y,left:(_.left-k.left+v.left)/E.x,right:(k.right-_.right+v.right)/E.x}}const rf=n=>({name:"arrow",options:n,async fn(e){const{x:t,y:i,placement:r,rects:s,platform:o,elements:a}=e,{element:l,padding:u=0}=Pn(n,e)||{};if(l==null)return{};const f=da(u),c={x:t,y:i},d=hr(r),h=dr(d),v=await o.getDimensions(l),w=d==="y",p=w?"top":"left",_=w?"bottom":"right",m=w?"clientHeight":"clientWidth",b=s.reference[h]+s.reference[d]-c[d]-s.floating[h],E=c[d]-s.reference[d],k=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l));let A=k?k[m]:0;(!A||!await(o.isElement==null?void 0:o.isElement(k)))&&(A=a.floating[m]||s.floating[h]);const P=b/2-E/2,C=A/2-v[h]/2-1,L=_n(f[p],C),R=_n(f[_],C),F=L,x=A-v[h]-R,q=A/2-v[h]/2+P,K=Wi(F,q,x),re=On(r)!=null&&q!=K&&s.reference[h]/2-(q<F?L:R)-v[h]/2<0?q<F?F-q:x-q:0;return{[d]:c[d]-re,data:{[d]:K,centerOffset:q-K+re}}}}),sf=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var t;const{placement:i,middlewareData:r,rects:s,initialPlacement:o,platform:a,elements:l}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:c,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:v=!0,...w}=Pn(n,e),p=Gt(i),_=Gt(o)===o,m=await(a.isRTL==null?void 0:a.isRTL(l.floating)),b=c||(_||!v?[oi(o)]:Zu(o));!c&&h!=="none"&&b.push(...ef(o,v,h,m));const E=[o,...b],k=await ha(e,w),A=[];let P=((t=r.flip)==null?void 0:t.overflows)||[];if(u&&A.push(k[p]),f){const F=Qu(i,s,m);A.push(k[F[0]],k[F[1]])}if(P=[...P,{placement:i,overflows:A}],!A.every(F=>F<=0)){var C,L;const F=(((C=r.flip)==null?void 0:C.index)||0)+1,x=E[F];if(x)return{data:{index:F,overflows:P},reset:{placement:x}};let q=(L=P.filter(K=>K.overflows[0]<=0).sort((K,ne)=>K.overflows[1]-ne.overflows[1])[0])==null?void 0:L.placement;if(!q)switch(d){case"bestFit":{var R;const K=(R=P.map(ne=>[ne.placement,ne.overflows.filter(re=>re>0).reduce((re,de)=>re+de,0)]).sort((ne,re)=>ne[1]-re[1])[0])==null?void 0:R[0];K&&(q=K);break}case"initialPlacement":q=o;break}if(i!==q)return{reset:{placement:q}}}return{}}}};async function of(n,e){const{placement:t,platform:i,elements:r}=n,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),o=Gt(t),a=On(t),l=Ii(t)==="y",u=["left","top"].includes(o)?-1:1,f=s&&l?-1:1,c=Pn(e,n);let{mainAxis:d,crossAxis:h,alignmentAxis:v}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return a&&typeof v=="number"&&(h=a==="end"?v*-1:v),l?{x:h*f,y:d*u}:{x:d*u,y:h*f}}const af=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){const{x:t,y:i}=e,r=await of(e,n);return{x:t+r.x,y:i+r.y,data:r}}}},lf=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:t,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:p=>{let{x:_,y:m}=p;return{x:_,y:m}}},...l}=Pn(n,e),u={x:t,y:i},f=await ha(e,l),c=Ii(Gt(r)),d=fa(c);let h=u[d],v=u[c];if(s){const p=d==="y"?"top":"left",_=d==="y"?"bottom":"right",m=h+f[p],b=h-f[_];h=Wi(m,h,b)}if(o){const p=c==="y"?"top":"left",_=c==="y"?"bottom":"right",m=v+f[p],b=v-f[_];v=Wi(m,v,b)}const w=a.fn({...e,[d]:h,[c]:v});return{...w,data:{x:w.x-t,y:w.y-i}}}}};function Nt(n){return ma(n)?(n.nodeName||"").toLowerCase():"#document"}function Ye(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function yt(n){var e;return(e=(ma(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function ma(n){return n instanceof Node||n instanceof Ye(n).Node}function _t(n){return n instanceof Element||n instanceof Ye(n).Element}function ct(n){return n instanceof HTMLElement||n instanceof Ye(n).HTMLElement}function Vs(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Ye(n).ShadowRoot}function Ln(n){const{overflow:e,overflowX:t,overflowY:i,display:r}=et(n);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(r)}function cf(n){return["table","td","th"].includes(Nt(n))}function mr(n){const e=gr(),t=et(n);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function uf(n){let e=bn(n);for(;ct(e)&&!wi(e);){if(mr(e))return e;e=bn(e)}return null}function gr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function wi(n){return["html","body","#document"].includes(Nt(n))}function et(n){return Ye(n).getComputedStyle(n)}function Ei(n){return _t(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function bn(n){if(Nt(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Vs(n)&&n.host||yt(n);return Vs(e)?e.host:e}function ga(n){const e=bn(n);return wi(e)?n.ownerDocument?n.ownerDocument.body:n.body:ct(e)&&Ln(e)?e:ga(e)}function li(n,e){var t;e===void 0&&(e=[]);const i=ga(n),r=i===((t=n.ownerDocument)==null?void 0:t.body),s=Ye(i);return r?e.concat(s,s.visualViewport||[],Ln(i)?i:[]):e.concat(i,li(i))}function pa(n){const e=et(n);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=ct(n),s=r?n.offsetWidth:t,o=r?n.offsetHeight:i,a=si(t)!==s||si(i)!==o;return a&&(t=s,i=o),{width:t,height:i,$:a}}function pr(n){return _t(n)?n:n.contextElement}function cn(n){const e=pr(n);if(!ct(e))return Mt(1);const t=e.getBoundingClientRect(),{width:i,height:r,$:s}=pa(e);let o=(s?si(t.width):t.width)/i,a=(s?si(t.height):t.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const ff=Mt(0);function _a(n){const e=Ye(n);return!gr()||!e.visualViewport?ff:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function df(n,e,t){return e===void 0&&(e=!1),!t||e&&t!==Ye(n)?!1:e}function xt(n,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const r=n.getBoundingClientRect(),s=pr(n);let o=Mt(1);e&&(i?_t(i)&&(o=cn(i)):o=cn(n));const a=df(s,t,i)?_a(s):Mt(0);let l=(r.left+a.x)/o.x,u=(r.top+a.y)/o.y,f=r.width/o.x,c=r.height/o.y;if(s){const d=Ye(s),h=i&&_t(i)?Ye(i):i;let v=d.frameElement;for(;v&&i&&h!==d;){const w=cn(v),p=v.getBoundingClientRect(),_=et(v),m=p.left+(v.clientLeft+parseFloat(_.paddingLeft))*w.x,b=p.top+(v.clientTop+parseFloat(_.paddingTop))*w.y;l*=w.x,u*=w.y,f*=w.x,c*=w.y,l+=m,u+=b,v=Ye(v).frameElement}}return ai({width:f,height:c,x:l,y:u})}function hf(n){let{rect:e,offsetParent:t,strategy:i}=n;const r=ct(t),s=yt(t);if(t===s)return e;let o={scrollLeft:0,scrollTop:0},a=Mt(1);const l=Mt(0);if((r||!r&&i!=="fixed")&&((Nt(t)!=="body"||Ln(s))&&(o=Ei(t)),ct(t))){const u=xt(t);a=cn(t),l.x=u.x+t.clientLeft,l.y=u.y+t.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-o.scrollLeft*a.x+l.x,y:e.y*a.y-o.scrollTop*a.y+l.y}}function mf(n){return Array.from(n.getClientRects())}function ba(n){return xt(yt(n)).left+Ei(n).scrollLeft}function gf(n){const e=yt(n),t=Ei(n),i=n.ownerDocument.body,r=qt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=qt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-t.scrollLeft+ba(n);const a=-t.scrollTop;return et(i).direction==="rtl"&&(o+=qt(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:a}}function pf(n,e){const t=Ye(n),i=yt(n),r=t.visualViewport;let s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;const u=gr();(!u||u&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a,y:l}}function _f(n,e){const t=xt(n,!0,e==="fixed"),i=t.top+n.clientTop,r=t.left+n.clientLeft,s=ct(n)?cn(n):Mt(1),o=n.clientWidth*s.x,a=n.clientHeight*s.y,l=r*s.x,u=i*s.y;return{width:o,height:a,x:l,y:u}}function Hs(n,e,t){let i;if(e==="viewport")i=pf(n,t);else if(e==="document")i=gf(yt(n));else if(_t(e))i=_f(e,t);else{const r=_a(n);i={...e,x:e.x-r.x,y:e.y-r.y}}return ai(i)}function va(n,e){const t=bn(n);return t===e||!_t(t)||wi(t)?!1:et(t).position==="fixed"||va(t,e)}function bf(n,e){const t=e.get(n);if(t)return t;let i=li(n).filter(a=>_t(a)&&Nt(a)!=="body"),r=null;const s=et(n).position==="fixed";let o=s?bn(n):n;for(;_t(o)&&!wi(o);){const a=et(o),l=mr(o);!l&&a.position==="fixed"&&(r=null),(s?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Ln(o)&&!l&&va(n,o))?i=i.filter(f=>f!==o):r=a,o=bn(o)}return e.set(n,i),i}function vf(n){let{element:e,boundary:t,rootBoundary:i,strategy:r}=n;const o=[...t==="clippingAncestors"?bf(e,this._c):[].concat(t),i],a=o[0],l=o.reduce((u,f)=>{const c=Hs(e,f,r);return u.top=qt(c.top,u.top),u.right=_n(c.right,u.right),u.bottom=_n(c.bottom,u.bottom),u.left=qt(c.left,u.left),u},Hs(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function yf(n){return pa(n)}function If(n,e,t){const i=ct(e),r=yt(e),s=t==="fixed",o=xt(n,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=Mt(0);if(i||!i&&!s)if((Nt(e)!=="body"||Ln(r))&&(a=Ei(e)),i){const u=xt(e,!0,s,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else r&&(l.x=ba(r));return{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function js(n,e){return!ct(n)||et(n).position==="fixed"?null:e?e(n):n.offsetParent}function ya(n,e){const t=Ye(n);if(!ct(n))return t;let i=js(n,e);for(;i&&cf(i)&&et(i).position==="static";)i=js(i,e);return i&&(Nt(i)==="html"||Nt(i)==="body"&&et(i).position==="static"&&!mr(i))?t:i||uf(n)||t}const wf=async function(n){let{reference:e,floating:t,strategy:i}=n;const r=this.getOffsetParent||ya,s=this.getDimensions;return{reference:If(e,await r(t),i),floating:{x:0,y:0,...await s(t)}}};function Ef(n){return et(n).direction==="rtl"}const kf={convertOffsetParentRelativeRectToViewportRelativeRect:hf,getDocumentElement:yt,getClippingRect:vf,getOffsetParent:ya,getElementRects:wf,getClientRects:mf,getDimensions:yf,getScale:cn,isElement:_t,isRTL:Ef};function Tf(n,e){let t=null,i;const r=yt(n);function s(){clearTimeout(i),t&&t.disconnect(),t=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const{left:u,top:f,width:c,height:d}=n.getBoundingClientRect();if(a||e(),!c||!d)return;const h=Gn(f),v=Gn(r.clientWidth-(u+c)),w=Gn(r.clientHeight-(f+d)),p=Gn(u),m={rootMargin:-h+"px "+-v+"px "+-w+"px "+-p+"px",threshold:qt(0,_n(1,l))||1};let b=!0;function E(k){const A=k[0].intersectionRatio;if(A!==l){if(!b)return o();A?o(!1,A):i=setTimeout(()=>{o(!1,1e-7)},100)}b=!1}try{t=new IntersectionObserver(E,{...m,root:r.ownerDocument})}catch{t=new IntersectionObserver(E,m)}t.observe(n)}return o(!0),s}function Sf(n,e,t,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,u=pr(n),f=r||s?[...u?li(u):[],...li(e)]:[];f.forEach(_=>{r&&_.addEventListener("scroll",t,{passive:!0}),s&&_.addEventListener("resize",t)});const c=u&&a?Tf(u,t):null;let d=-1,h=null;o&&(h=new ResizeObserver(_=>{let[m]=_;m&&m.target===u&&h&&(h.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{h&&h.observe(e)})),t()}),u&&!l&&h.observe(u),h.observe(e));let v,w=l?xt(n):null;l&&p();function p(){const _=xt(n);w&&(_.x!==w.x||_.y!==w.y||_.width!==w.width||_.height!==w.height)&&t(),w=_,v=requestAnimationFrame(p)}return t(),()=>{f.forEach(_=>{r&&_.removeEventListener("scroll",t),s&&_.removeEventListener("resize",t)}),c&&c(),h&&h.disconnect(),h=null,l&&cancelAnimationFrame(v)}}const Af=(n,e,t)=>{const i=new Map,r={platform:kf,...t},s={...r.platform,_c:i};return nf(n,e,{...r,platform:s})},Cf=""+new URL("../assets/vpsLogo.a05dfbbc.png",import.meta.url).href;/**
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
 */const Ia=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Rf=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},wa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,l=r+2<n.length,u=l?n[r+2]:0,f=s>>2,c=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,h=u&63;l||(h=64,o||(d=64)),i.push(t[f],t[c],t[d],t[h])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ia(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Rf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const c=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||u==null||c==null)throw new Df;const d=s<<2|a>>4;if(i.push(d),u!==64){const h=a<<4&240|u>>2;if(i.push(h),c!==64){const v=u<<6&192|c;i.push(v)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Df extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pf=function(n){const e=Ia(n);return wa.encodeByteArray(e,!0)},Ea=function(n){return Pf(n).replace(/\./g,"")},ka=function(n){try{return wa.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Of(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lf=()=>Of().__FIREBASE_DEFAULTS__,Mf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ka(n[1]);return e&&JSON.parse(e)},_r=()=>{try{return Lf()||Mf()||Nf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Uf=n=>{var e,t;return(t=(e=_r())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ta=()=>{var n;return(n=_r())===null||n===void 0?void 0:n.config},Sa=n=>{var e;return(e=_r())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ff{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function Aa(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hf(){const n=Ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ca(){try{return typeof indexedDB=="object"}catch{return!1}}function Ra(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function jf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const zf="FirebaseError";class dt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=zf,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tn.prototype.create)}}class tn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Wf(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new dt(r,a,i)}}function Wf(n,e){return n.replace(qf,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const qf=/\{\$([^}]+)}/g;function Kf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function An(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(zs(s)&&zs(o)){if(!An(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function zs(n){return n!==null&&typeof n=="object"}/**
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
 */function Mn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Gf(n,e){const t=new xf(n,e);return t.subscribe.bind(t)}class xf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Jf(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Di),r.error===void 0&&(r.error=Di),r.complete===void 0&&(r.complete=Di);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Di(){}/**
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
 */const Yf=1e3,Xf=2,Qf=4*60*60*1e3,Zf=.5;function Ws(n,e=Yf,t=Xf){const i=e*Math.pow(t,n),r=Math.round(Zf*i*(Math.random()-.5)*2);return Math.min(Qf,i+r)}/**
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
 */function It(n){return n&&n._delegate?n._delegate:n}class ut{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jt="[DEFAULT]";/**
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
 */class $f{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ff;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(td(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ed(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ed(n){return n===jt?void 0:n}function td(n){return n.instantiationMode==="EAGER"}/**
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
 */class nd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $f(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(me||(me={}));const id={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},rd=me.INFO,sd={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},od=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=sd[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class br{constructor(e){this.name=e,this._logLevel=rd,this._logHandler=od,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?id[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const ad=(n,e)=>e.some(t=>n instanceof t);let qs,Ks;function ld(){return qs||(qs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cd(){return Ks||(Ks=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Da=new WeakMap,Ki=new WeakMap,Pa=new WeakMap,Pi=new WeakMap,vr=new WeakMap;function ud(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Rt(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Da.set(t,n)}).catch(()=>{}),vr.set(e,n),e}function fd(n){if(Ki.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ki.set(n,e)}let Gi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ki.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Pa.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function dd(n){Gi=n(Gi)}function hd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Oi(this),e,...t);return Pa.set(i,e.sort?e.sort():[e]),Rt(i)}:cd().includes(n)?function(...e){return n.apply(Oi(this),e),Rt(Da.get(this))}:function(...e){return Rt(n.apply(Oi(this),e))}}function md(n){return typeof n=="function"?hd(n):(n instanceof IDBTransaction&&fd(n),ad(n,ld())?new Proxy(n,Gi):n)}function Rt(n){if(n instanceof IDBRequest)return ud(n);if(Pi.has(n))return Pi.get(n);const e=md(n);return e!==n&&(Pi.set(n,e),vr.set(e,n)),e}const Oi=n=>vr.get(n);function gd(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=Rt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Rt(o.result),l.oldVersion,l.newVersion,Rt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const pd=["get","getKey","getAll","getAllKeys","count"],_d=["put","add","delete","clear"],Li=new Map;function Gs(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Li.get(e))return Li.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=_d.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||pd.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&l.done]))[0]};return Li.set(e,s),s}dd(n=>({...n,get:(e,t,i)=>Gs(e,t)||n.get(e,t,i),has:(e,t)=>!!Gs(e,t)||n.has(e,t)}));/**
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
 */class bd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function vd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xi="@firebase/app",xs="0.9.15";/**
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
 */const Jt=new br("@firebase/app"),yd="@firebase/app-compat",Id="@firebase/analytics-compat",wd="@firebase/analytics",Ed="@firebase/app-check-compat",kd="@firebase/app-check",Td="@firebase/auth",Sd="@firebase/auth-compat",Ad="@firebase/database",Cd="@firebase/database-compat",Rd="@firebase/functions",Dd="@firebase/functions-compat",Pd="@firebase/installations",Od="@firebase/installations-compat",Ld="@firebase/messaging",Md="@firebase/messaging-compat",Nd="@firebase/performance",Ud="@firebase/performance-compat",Fd="@firebase/remote-config",Bd="@firebase/remote-config-compat",Vd="@firebase/storage",Hd="@firebase/storage-compat",jd="@firebase/firestore",zd="@firebase/firestore-compat",Wd="firebase",qd="10.1.0";/**
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
 */const Ji="[DEFAULT]",Kd={[xi]:"fire-core",[yd]:"fire-core-compat",[wd]:"fire-analytics",[Id]:"fire-analytics-compat",[kd]:"fire-app-check",[Ed]:"fire-app-check-compat",[Td]:"fire-auth",[Sd]:"fire-auth-compat",[Ad]:"fire-rtdb",[Cd]:"fire-rtdb-compat",[Rd]:"fire-fn",[Dd]:"fire-fn-compat",[Pd]:"fire-iid",[Od]:"fire-iid-compat",[Ld]:"fire-fcm",[Md]:"fire-fcm-compat",[Nd]:"fire-perf",[Ud]:"fire-perf-compat",[Fd]:"fire-rc",[Bd]:"fire-rc-compat",[Vd]:"fire-gcs",[Hd]:"fire-gcs-compat",[jd]:"fire-fst",[zd]:"fire-fst-compat","fire-js":"fire-js",[Wd]:"fire-js-all"};/**
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
 */const ci=new Map,Yi=new Map;function Gd(n,e){try{n.container.addComponent(e)}catch(t){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bt(n){const e=n.name;if(Yi.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;Yi.set(e,n);for(const t of ci.values())Gd(t,n);return!0}function In(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const xd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new tn("app","Firebase",xd);/**
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
 */class Jd{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const Nn=qd;function Oa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ji,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Dt.create("bad-app-name",{appName:String(r)});if(t||(t=Ta()),!t)throw Dt.create("no-options");const s=ci.get(r);if(s){if(An(t,s.options)&&An(i,s.config))return s;throw Dt.create("duplicate-app",{appName:r})}const o=new nd(r);for(const l of Yi.values())o.addComponent(l);const a=new Jd(t,i,o);return ci.set(r,a),a}function La(n=Ji){const e=ci.get(n);if(!e&&n===Ji&&Ta())return Oa();if(!e)throw Dt.create("no-app",{appName:n});return e}function ot(n,e,t){var i;let r=(i=Kd[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(a.join(" "));return}bt(new ut(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Yd="firebase-heartbeat-database",Xd=1,Cn="firebase-heartbeat-store";let Mi=null;function Ma(){return Mi||(Mi=gd(Yd,Xd,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Cn)}}}).catch(n=>{throw Dt.create("idb-open",{originalErrorMessage:n.message})})),Mi}async function Qd(n){try{return await(await Ma()).transaction(Cn).objectStore(Cn).get(Na(n))}catch(e){if(e instanceof dt)Jt.warn(e.message);else{const t=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(t.message)}}}async function Js(n,e){try{const i=(await Ma()).transaction(Cn,"readwrite");await i.objectStore(Cn).put(e,Na(n)),await i.done}catch(t){if(t instanceof dt)Jt.warn(t.message);else{const i=Dt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(i.message)}}}function Na(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Zd=1024,$d=30*24*60*60*1e3;class eh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nh(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ys();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=$d}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ys(),{heartbeatsToSend:t,unsentEntries:i}=th(this._heartbeatsCache.heartbeats),r=Ea(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ys(){return new Date().toISOString().substring(0,10)}function th(n,e=Zd){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Xs(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Xs(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class nh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ca()?Ra().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Qd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Js(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Js(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Xs(n){return Ea(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ih(n){bt(new ut("platform-logger",e=>new bd(e),"PRIVATE")),bt(new ut("heartbeat",e=>new eh(e),"PRIVATE")),ot(xi,xs,n),ot(xi,xs,"esm2017"),ot("fire-js","")}ih("");var rh="firebase",sh="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot(rh,sh,"app");const oh=(n,e)=>e.some(t=>n instanceof t);let Qs,Zs;function ah(){return Qs||(Qs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lh(){return Zs||(Zs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ua=new WeakMap,Xi=new WeakMap,Fa=new WeakMap,Ni=new WeakMap,yr=new WeakMap;function ch(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Pt(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ua.set(t,n)}).catch(()=>{}),yr.set(e,n),e}function uh(n){if(Xi.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Xi.set(n,e)}let Qi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fa.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fh(n){Qi=n(Qi)}function dh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ui(this),e,...t);return Fa.set(i,e.sort?e.sort():[e]),Pt(i)}:lh().includes(n)?function(...e){return n.apply(Ui(this),e),Pt(Ua.get(this))}:function(...e){return Pt(n.apply(Ui(this),e))}}function hh(n){return typeof n=="function"?dh(n):(n instanceof IDBTransaction&&uh(n),oh(n,ah())?new Proxy(n,Qi):n)}function Pt(n){if(n instanceof IDBRequest)return ch(n);if(Ni.has(n))return Ni.get(n);const e=hh(n);return e!==n&&(Ni.set(n,e),yr.set(e,n)),e}const Ui=n=>yr.get(n);function mh(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=Pt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Pt(o.result),l.oldVersion,l.newVersion,Pt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const gh=["get","getKey","getAll","getAllKeys","count"],ph=["put","add","delete","clear"],Fi=new Map;function $s(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fi.get(e))return Fi.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=ph.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||gh.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&l.done]))[0]};return Fi.set(e,s),s}fh(n=>({...n,get:(e,t,i)=>$s(e,t)||n.get(e,t,i),has:(e,t)=>!!$s(e,t)||n.has(e,t)}));const Ba="@firebase/installations",Ir="0.6.4";/**
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
 */const Va=1e4,Ha=`w:${Ir}`,ja="FIS_v2",_h="https://firebaseinstallations.googleapis.com/v1",bh=60*60*1e3,vh="installations",yh="Installations";/**
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
 */const Ih={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yt=new tn(vh,yh,Ih);function za(n){return n instanceof dt&&n.code.includes("request-failed")}/**
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
 */function Wa({projectId:n}){return`${_h}/projects/${n}/installations`}function qa(n){return{token:n.token,requestStatus:2,expiresIn:Eh(n.expiresIn),creationTime:Date.now()}}async function Ka(n,e){const i=(await e.json()).error;return Yt.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ga({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function wh(n,{refreshToken:e}){const t=Ga(n);return t.append("Authorization",kh(e)),t}async function xa(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Eh(n){return Number(n.replace("s","000"))}function kh(n){return`${ja} ${n}`}/**
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
 */async function Th({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Wa(n),r=Ga(n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:t,authVersion:ja,appId:n.appId,sdkVersion:Ha},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await xa(()=>fetch(i,a));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:qa(u.authToken)}}else throw await Ka("Create Installation",l)}/**
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
 */function Ja(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Sh(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ah=/^[cdef][\w-]{21}$/,Zi="";function Ch(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Rh(n);return Ah.test(t)?t:Zi}catch{return Zi}}function Rh(n){return Sh(n).substr(0,22)}/**
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
 */function ki(n){return`${n.appName}!${n.appId}`}/**
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
 */const Ya=new Map;function Xa(n,e){const t=ki(n);Qa(t,e),Dh(t,e)}function Qa(n,e){const t=Ya.get(n);if(t)for(const i of t)i(e)}function Dh(n,e){const t=Ph();t&&t.postMessage({key:n,fid:e}),Oh()}let zt=null;function Ph(){return!zt&&"BroadcastChannel"in self&&(zt=new BroadcastChannel("[Firebase] FID Change"),zt.onmessage=n=>{Qa(n.data.key,n.data.fid)}),zt}function Oh(){Ya.size===0&&zt&&(zt.close(),zt=null)}/**
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
 */const Lh="firebase-installations-database",Mh=1,Xt="firebase-installations-store";let Bi=null;function wr(){return Bi||(Bi=mh(Lh,Mh,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Xt)}}})),Bi}async function ui(n,e){const t=ki(n),r=(await wr()).transaction(Xt,"readwrite"),s=r.objectStore(Xt),o=await s.get(t);return await s.put(e,t),await r.done,(!o||o.fid!==e.fid)&&Xa(n,e.fid),e}async function Za(n){const e=ki(n),i=(await wr()).transaction(Xt,"readwrite");await i.objectStore(Xt).delete(e),await i.done}async function Ti(n,e){const t=ki(n),r=(await wr()).transaction(Xt,"readwrite"),s=r.objectStore(Xt),o=await s.get(t),a=e(o);return a===void 0?await s.delete(t):await s.put(a,t),await r.done,a&&(!o||o.fid!==a.fid)&&Xa(n,a.fid),a}/**
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
 */async function Er(n){let e;const t=await Ti(n.appConfig,i=>{const r=Nh(i),s=Uh(n,r);return e=s.registrationPromise,s.installationEntry});return t.fid===Zi?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Nh(n){const e=n||{fid:Ch(),registrationStatus:0};return $a(e)}function Uh(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Yt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Fh(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Bh(n)}:{installationEntry:e}}async function Fh(n,e){try{const t=await Th(n,e);return ui(n.appConfig,t)}catch(t){throw za(t)&&t.customData.serverCode===409?await Za(n.appConfig):await ui(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Bh(n){let e=await eo(n.appConfig);for(;e.registrationStatus===1;)await Ja(100),e=await eo(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Er(n);return i||t}return e}function eo(n){return Ti(n,e=>{if(!e)throw Yt.create("installation-not-found");return $a(e)})}function $a(n){return Vh(n)?{fid:n.fid,registrationStatus:0}:n}function Vh(n){return n.registrationStatus===1&&n.registrationTime+Va<Date.now()}/**
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
 */async function Hh({appConfig:n,heartbeatServiceProvider:e},t){const i=jh(n,t),r=wh(n,t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:Ha,appId:n.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await xa(()=>fetch(i,a));if(l.ok){const u=await l.json();return qa(u)}else throw await Ka("Generate Auth Token",l)}function jh(n,{fid:e}){return`${Wa(n)}/${e}/authTokens:generate`}/**
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
 */async function kr(n,e=!1){let t;const i=await Ti(n.appConfig,s=>{if(!el(s))throw Yt.create("not-registered");const o=s.authToken;if(!e&&qh(o))return s;if(o.requestStatus===1)return t=zh(n,e),s;{if(!navigator.onLine)throw Yt.create("app-offline");const a=Gh(s);return t=Wh(n,a),a}});return t?await t:i.authToken}async function zh(n,e){let t=await to(n.appConfig);for(;t.authToken.requestStatus===1;)await Ja(100),t=await to(n.appConfig);const i=t.authToken;return i.requestStatus===0?kr(n,e):i}function to(n){return Ti(n,e=>{if(!el(e))throw Yt.create("not-registered");const t=e.authToken;return xh(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Wh(n,e){try{const t=await Hh(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await ui(n.appConfig,i),t}catch(t){if(za(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Za(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ui(n.appConfig,i)}throw t}}function el(n){return n!==void 0&&n.registrationStatus===2}function qh(n){return n.requestStatus===2&&!Kh(n)}function Kh(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+bh}function Gh(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function xh(n){return n.requestStatus===1&&n.requestTime+Va<Date.now()}/**
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
 */async function Jh(n){const e=n,{installationEntry:t,registrationPromise:i}=await Er(e);return i?i.catch(console.error):kr(e).catch(console.error),t.fid}/**
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
 */async function Yh(n,e=!1){const t=n;return await Xh(t),(await kr(t,e)).token}async function Xh(n){const{registrationPromise:e}=await Er(n);e&&await e}/**
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
 */function Qh(n){if(!n||!n.options)throw Vi("App Configuration");if(!n.name)throw Vi("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Vi(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Vi(n){return Yt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="installations",Zh="installations-internal",$h=n=>{const e=n.getProvider("app").getImmediate(),t=Qh(e),i=In(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},em=n=>{const e=n.getProvider("app").getImmediate(),t=In(e,tl).getImmediate();return{getId:()=>Jh(t),getToken:r=>Yh(t,r)}};function tm(){bt(new ut(tl,$h,"PUBLIC")),bt(new ut(Zh,em,"PRIVATE"))}tm();ot(Ba,Ir);ot(Ba,Ir,"esm2017");/**
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
 */const fi="analytics",nm="firebase_id",im="origin",rm=60*1e3,sm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Tr="https://www.googletagmanager.com/gtag/js";/**
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
 */const He=new br("@firebase/analytics");/**
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
 */const om={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xe=new tn("analytics","Analytics",om);/**
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
 */function am(n){if(!n.startsWith(Tr)){const e=Xe.create("invalid-gtag-resource",{gtagURL:n});return He.warn(e.message),""}return n}function nl(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function lm(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function cm(n,e){const t=lm("firebase-js-sdk-policy",{createScriptURL:am}),i=document.createElement("script"),r=`${Tr}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function um(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function fm(n,e,t,i,r,s){const o=i[r];try{if(o)await e[o];else{const l=(await nl(t)).find(u=>u.measurementId===r);l&&await e[l.appId]}}catch(a){He.error(a)}n("config",r,s)}async function dm(n,e,t,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await nl(t);for(const l of o){const u=a.find(c=>c.measurementId===l),f=u&&e[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",i,r||{})}catch(s){He.error(s)}}function hm(n,e,t,i){async function r(s,...o){try{if(s==="event"){const[a,l]=o;await dm(n,e,t,a,l)}else if(s==="config"){const[a,l]=o;await fm(n,e,t,i,a,l)}else if(s==="consent"){const[a]=o;n("consent","update",a)}else if(s==="get"){const[a,l,u]=o;n("get",a,l,u)}else if(s==="set"){const[a]=o;n("set",a)}else n(s,...o)}catch(a){He.error(a)}}return r}function mm(n,e,t,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=hm(s,n,e,t),{gtagCore:s,wrappedGtag:window[r]}}function gm(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Tr)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=30,_m=1e3;class bm{constructor(e={},t=_m){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const il=new bm;function vm(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ym(n){var e;const{appId:t,apiKey:i}=n,r={method:"GET",headers:vm(i)},s=sm.replace("{app-id}",t),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Xe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Im(n,e=il,t){const{appId:i,apiKey:r,measurementId:s}=n.options;if(!i)throw Xe.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Xe.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new km;return setTimeout(async()=>{a.abort()},t!==void 0?t:rm),rl({appId:i,apiKey:r,measurementId:s},o,a,e)}async function rl(n,{throttleEndTimeMillis:e,backoffCount:t},i,r=il){var s;const{appId:o,measurementId:a}=n;try{await wm(i,e)}catch(l){if(a)return He.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await ym(n);return r.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Em(u)){if(r.deleteThrottleMetadata(o),a)return He.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const f=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ws(t,r.intervalMillis,pm):Ws(t,r.intervalMillis),c={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return r.setThrottleMetadata(o,c),He.debug(`Calling attemptFetch again in ${f} millis`),rl(n,c,i,r)}}function wm(n,e){return new Promise((t,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(s),i(Xe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Em(n){if(!(n instanceof dt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class km{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Tm(n,e,t,i,r){if(r&&r.global){n("event",t,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sm(){if(Ca())try{await Ra()}catch(n){return He.warn(Xe.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return He.warn(Xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Am(n,e,t,i,r,s,o){var a;const l=Im(n);l.then(h=>{t[h.measurementId]=h.appId,n.options.measurementId&&h.measurementId!==n.options.measurementId&&He.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>He.error(h)),e.push(l);const u=Sm().then(h=>{if(h)return i.getId()}),[f,c]=await Promise.all([l,u]);gm(s)||cm(s,f.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[im]="firebase",d.update=!0,c!=null&&(d[nm]=c),r("config",f.measurementId,d),f.measurementId}/**
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
 */class Cm{constructor(e){this.app=e}_delete(){return delete kn[this.app.options.appId],Promise.resolve()}}let kn={},no=[];const io={};let Hi="dataLayer",Rm="gtag",ro,sl,so=!1;function Dm(){const n=[];if(Aa()&&n.push("This is a browser extension environment."),jf()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,r)=>`(${r+1}) ${i}`).join(" "),t=Xe.create("invalid-analytics-context",{errorInfo:e});He.warn(t.message)}}function Pm(n,e,t){Dm();const i=n.options.appId;if(!i)throw Xe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)He.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xe.create("no-api-key");if(kn[i]!=null)throw Xe.create("already-exists",{id:i});if(!so){um(Hi);const{wrappedGtag:s,gtagCore:o}=mm(kn,no,io,Hi,Rm);sl=s,ro=o,so=!0}return kn[i]=Am(n,no,io,e,ro,Hi,t),new Cm(n)}function Om(n=La()){n=It(n);const e=In(n,fi);return e.isInitialized()?e.getImmediate():Lm(n)}function Lm(n,e={}){const t=In(n,fi);if(t.isInitialized()){const r=t.getImmediate();if(An(e,t.getOptions()))return r;throw Xe.create("already-initialized")}return t.initialize({options:e})}function Mm(n,e,t,i){n=It(n),Tm(sl,kn[n.app.options.appId],e,t,i).catch(r=>He.error(r))}const oo="@firebase/analytics",ao="0.10.0";function Nm(){bt(new ut(fi,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Pm(i,r,t)},"PUBLIC")),bt(new ut("analytics-internal",n,"PRIVATE")),ot(oo,ao),ot(oo,ao,"esm2017");function n(e){try{const t=e.getProvider(fi).getImmediate();return{logEvent:(i,r,s)=>Mm(t,i,r,s)}}catch(t){throw Xe.create("interop-component-reg-failed",{reason:t})}}}Nm();function Sr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function ol(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Um=ol,al=new tn("auth","Firebase",ol());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new br("@firebase/auth");function Fm(n,...e){di.logLevel<=me.WARN&&di.warn(`Auth (${Nn}): ${n}`,...e)}function Qn(n,...e){di.logLevel<=me.ERROR&&di.error(`Auth (${Nn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n,...e){throw Ar(n,...e)}function at(n,...e){return Ar(n,...e)}function ll(n,e,t){const i=Object.assign(Object.assign({},Um()),{[e]:t});return new tn("auth","Firebase",i).create(e,{appName:n.name})}function Bm(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&ft(n,"argument-error"),ll(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ar(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return al.create(n,...e)}function $(n,e,...t){if(!n)throw Ar(e,...t)}function ht(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qn(e),new Error(e)}function vt(n,e){n||ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Vm(){return lo()==="http:"||lo()==="https:"}function lo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vm()||Aa()||"connection"in navigator)?navigator.onLine:!0}function jm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t){this.shortDelay=e,this.longDelay=t,vt(t>e,"Short delay should be less than long delay!"),this.isMobile=Bf()||Vf()}get(){return Hm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n,e){vt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new Un(3e4,6e4);function ul(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Fn(n,e,t,i,r={}){return fl(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Mn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),cl.fetch()(dl(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function fl(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},zm),e);try{const r=new Km(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xn(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw xn(n,"user-disabled",o);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ll(n,f,u);ft(n,f)}}catch(r){if(r instanceof dt)throw r;ft(n,"network-request-failed",{message:String(r)})}}async function qm(n,e,t,i,r={}){const s=await Fn(n,e,t,i,r);return"mfaPendingCredential"in s&&ft(n,"multi-factor-auth-required",{_serverResponse:s}),s}function dl(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Cr(n.config,r):`${n.config.apiScheme}://${r}`}class Km{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(at(this.auth,"network-request-failed")),Wm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=at(n,e,i);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(n,e){return Fn(n,"POST","/v1/accounts:delete",e)}async function xm(n,e){return Fn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jm(n,e=!1){const t=It(n),i=await t.getIdToken(e),r=Rr(i);$(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Tn(ji(r.auth_time)),issuedAtTime:Tn(ji(r.iat)),expirationTime:Tn(ji(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ji(n){return Number(n)*1e3}function Rr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Qn("JWT malformed, contained fewer than 3 sections"),null;try{const r=ka(t);return r?JSON.parse(r):(Qn("Failed to decode base64 JWT payload"),null)}catch(r){return Qn("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ym(n){const e=Rr(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof dt&&Xm(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Xm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tn(this.lastLoginAt),this.creationTime=Tn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hi(n){var e;const t=n.auth,i=await n.getIdToken(),r=await Rn(n,xm(t,{idToken:i}));$(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?eg(s.providerUserInfo):[],a=$m(n.providerData,o),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hl(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,c)}async function Zm(n){const e=It(n);await hi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $m(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function eg(n){return n.map(e=>{var{providerId:t}=e,i=Sr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(n,e){const t=await fl(n,{},async()=>{const i=Mn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=dl(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cl.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ym(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await tg(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new Dn;return i&&($(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&($(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dn,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Sr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Rn(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Jm(this,e)}reload(){return Zm(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await hi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Rn(this,Gm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,l,u,f;const c=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(r=t.email)!==null&&r!==void 0?r:void 0,h=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=t.photoURL)!==null&&o!==void 0?o:void 0,w=(a=t.tenantId)!==null&&a!==void 0?a:void 0,p=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,_=(u=t.createdAt)!==null&&u!==void 0?u:void 0,m=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:b,emailVerified:E,isAnonymous:k,providerData:A,stsTokenManager:P}=t;$(b&&P,e,"internal-error");const C=Dn.fromJSON(this.name,P);$(typeof b=="string",e,"internal-error"),wt(c,e.name),wt(d,e.name),$(typeof E=="boolean",e,"internal-error"),$(typeof k=="boolean",e,"internal-error"),wt(h,e.name),wt(v,e.name),wt(w,e.name),wt(p,e.name),wt(_,e.name),wt(m,e.name);const L=new Kt({uid:b,auth:e,email:d,emailVerified:E,displayName:c,isAnonymous:k,photoURL:v,phoneNumber:h,tenantId:w,stsTokenManager:C,createdAt:_,lastLoginAt:m});return A&&Array.isArray(A)&&(L.providerData=A.map(R=>Object.assign({},R))),p&&(L._redirectEventId=p),L}static async _fromIdTokenResponse(e,t,i=!1){const r=new Dn;r.updateFromServerResponse(t);const s=new Kt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await hi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Map;function mt(n){vt(n instanceof Function,"Expected a class definition");let e=co.get(n);return e?(vt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,co.set(n,e),e)}/**
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
 */class ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ml.type="NONE";const uo=ml;/**
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
 */function Zn(n,e,t){return`firebase:${n}:${e}:${t}`}class un{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Zn(this.userKey,r.apiKey,s),this.fullPersistenceKey=Zn("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new un(mt(uo),e,i);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||mt(uo);const o=Zn(i,e.config.apiKey,e.name);let a=null;for(const u of t)try{const f=await u._get(o);if(f){const c=Kt._fromJSON(e,f);u!==s&&(a=c),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new un(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new un(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_l(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vl(e))return"Blackberry";if(yl(e))return"Webos";if(Dr(e))return"Safari";if((e.includes("chrome/")||pl(e))&&!e.includes("edge/"))return"Chrome";if(bl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function gl(n=Ue()){return/firefox\//i.test(n)}function Dr(n=Ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pl(n=Ue()){return/crios\//i.test(n)}function _l(n=Ue()){return/iemobile/i.test(n)}function bl(n=Ue()){return/android/i.test(n)}function vl(n=Ue()){return/blackberry/i.test(n)}function yl(n=Ue()){return/webos/i.test(n)}function Si(n=Ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ng(n=Ue()){var e;return Si(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ig(){return Hf()&&document.documentMode===10}function Il(n=Ue()){return Si(n)||bl(n)||yl(n)||vl(n)||/windows phone/i.test(n)||_l(n)}function rg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n,e=[]){let t;switch(n){case"Browser":t=fo(Ue());break;case"Worker":t=`${fo(Ue())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Nn}/${i}`}async function El(n,e){return Fn(n,"GET","/v2/recaptchaConfig",ul(n,e))}function ho(n){return n!==void 0&&n.enterprise!==void 0}class kl{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Tl(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=at("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",sg().appendChild(i)})}function og(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ag="https://www.google.com/recaptcha/enterprise.js?render=",lg="recaptcha-enterprise",cg="NO_RECAPTCHA";class ug{constructor(e){this.type=lg,this.auth=Bn(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{El(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new kl(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;ho(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(cg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&ho(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Tl(ag+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class fg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mo(this),this.idTokenSubscription=new mo(this),this.beforeStateQueue=new fg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=al,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mt(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await un.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?It(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}async initializeRecaptchaConfig(){const e=await El(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new kl(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new ug(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new tn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mt(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Fm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Bn(n){return It(n)}class mo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gf(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(n,e){const t=In(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(An(s,e??{}))return r;ft(r,"already-initialized")}return t.initialize({options:e})}function mg(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(mt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function gg(n,e,t){const i=Bn(n);$(i._canInitEmulator,i,"emulator-config-failed"),$(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),s=Sl(e),{host:o,port:a}=pg(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||_g()}function Sl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function pg(n){const e=Sl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:go(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:go(o)}}}function go(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function _g(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,t){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(n,e){return qm(n,"POST","/v1/accounts:signInWithIdp",ul(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="http://localhost";class Qt extends Al{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ft("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Sr(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Qt(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return fn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,fn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fn(e,t)}buildRequest(){const e={requestUri:bg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Mn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vn extends Pr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Vn{constructor(){super("facebook.com")}static credential(e){return Qt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Vn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Tt.credential(t,i)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Vn{constructor(){super("github.com")}static credential(e){return Qt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.GITHUB_SIGN_IN_METHOD="github.com";st.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Vn{constructor(){super("twitter.com")}static credential(e,t){return Qt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return St.credential(t,i)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await Kt._fromIdTokenResponse(e,i,r),o=po(i);return new vn({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=po(i);return new vn({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function po(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends dt{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,mi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new mi(e,t,i,r)}}function Cl(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mi._fromErrorAndOperation(n,s,e,i):s})}async function vg(n,e,t=!1){const i=await Rn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vn._forOperation(n,"link",i)}/**
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
 */async function yg(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const s=await Rn(n,Cl(i,r,e,n),t);$(s.idToken,i,"internal-error");const o=Rr(s.idToken);$(o,i,"internal-error");const{sub:a}=o;return $(n.uid===a,i,"user-mismatch"),vn._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ft(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ig(n,e,t=!1){const i="signIn",r=await Cl(n,i,e),s=await vn._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function wg(n,e,t,i){return It(n).onIdTokenChanged(e,t,i)}function Eg(n,e,t){return It(n).beforeAuthStateChanged(e,t)}function kg(n){return It(n).signOut()}const gi="__sak";/**
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
 */class Rl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gi,"1"),this.storage.removeItem(gi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(){const n=Ue();return Dr(n)||Si(n)}const Sg=1e3,Ag=10;class Dl extends Rl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tg()&&rg(),this.fallbackToPolling=Il(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);ig()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ag):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Sg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dl.type="LOCAL";const Cg=Dl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends Rl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pl.type="SESSION";const Ol=Pl;/**
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
 */class Ai{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Ai(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,s)),l=await Rg(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ai.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Dg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Or("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(c){const d=c;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return window}function Pg(n){lt().location.href=n}/**
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
 */function Ll(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function Og(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Mg(){return Ll()?self:null}/**
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
 */const Ml="firebaseLocalStorageDb",Ng=1,pi="firebaseLocalStorage",Nl="fbase_key";class Hn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ci(n,e){return n.transaction([pi],e?"readwrite":"readonly").objectStore(pi)}function Ug(){const n=indexedDB.deleteDatabase(Ml);return new Hn(n).toPromise()}function er(){const n=indexedDB.open(Ml,Ng);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(pi,{keyPath:Nl})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(pi)?e(i):(i.close(),await Ug(),e(await er()))})})}async function _o(n,e,t){const i=Ci(n,!0).put({[Nl]:e,value:t});return new Hn(i).toPromise()}async function Fg(n,e){const t=Ci(n,!1).get(e),i=await new Hn(t).toPromise();return i===void 0?null:i.value}function bo(n,e){const t=Ci(n,!0).delete(e);return new Hn(t).toPromise()}const Bg=800,Vg=3;class Ul{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await er(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Vg)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ll()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ai._getInstance(Mg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Og(),!this.activeServiceWorker)return;this.sender=new Dg(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await er();return await _o(e,gi,"1"),await bo(e,gi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>_o(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Fg(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Ci(r,!1).getAll();return new Hn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ul.type="LOCAL";const Hg=Ul;new Un(3e4,6e4);/**
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
 */function Fl(n,e){return e?mt(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Lr extends Al{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jg(n){return Ig(n.auth,new Lr(n),n.bypassAuthState)}function zg(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),yg(t,new Lr(n),n.bypassAuthState)}async function Wg(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),vg(t,new Lr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jg;case"linkViaPopup":case"linkViaRedirect":return Wg;case"reauthViaPopup":case"reauthViaRedirect":return zg;default:ft(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=new Un(2e3,1e4);async function Kg(n,e,t){const i=Bn(n);Bm(n,e,Pr);const r=Fl(i,t);return new Wt(i,"signInViaPopup",e,r).executeNotNull()}class Wt extends Bl{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Wt.currentPopupAction&&Wt.currentPopupAction.cancel(),Wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=Or();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qg.get())};e()}}Wt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="pendingRedirect",$n=new Map;class xg extends Bl{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=$n.get(this.auth._key());if(!e){try{const i=await Jg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}$n.set(this.auth._key(),e)}return this.bypassAuthState||$n.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jg(n,e){const t=Qg(e),i=Xg(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function Yg(n,e){$n.set(n._key(),e)}function Xg(n){return mt(n._redirectPersistence)}function Qg(n){return Zn(Gg,n.config.apiKey,n.name)}async function Zg(n,e,t=!1){const i=Bn(n),r=Fl(i,e),o=await new xg(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=10*60*1e3;class ep{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Vl(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(at(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$g&&this.cachedEventUids.clear(),this.cachedEventUids.has(vo(e))}saveEventToCache(e){this.cachedEventUids.add(vo(e)),this.lastProcessedEventTime=Date.now()}}function vo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Vl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(n,e={}){return Fn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rp=/^https?/;async function sp(n){if(n.config.emulator)return;const{authorizedDomains:e}=await np(n);for(const t of e)try{if(op(t))return}catch{}ft(n,"unauthorized-domain")}function op(n){const e=$i(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!rp.test(t))return!1;if(ip.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const ap=new Un(3e4,6e4);function yo(){const n=lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lp(n){return new Promise((e,t)=>{var i,r,s;function o(){yo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yo(),t(at(n,"network-request-failed"))},timeout:ap.get()})}if(!((r=(i=lt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=lt().gapi)===null||s===void 0)&&s.load)o();else{const a=og("iframefcb");return lt()[a]=()=>{gapi.load?o():t(at(n,"network-request-failed"))},Tl(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw ei=null,e})}let ei=null;function cp(n){return ei=ei||lp(n),ei}/**
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
 */const up=new Un(5e3,15e3),fp="__/auth/iframe",dp="emulator/auth/iframe",hp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gp(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Cr(e,dp):`https://${n.config.authDomain}/${fp}`,i={apiKey:e.apiKey,appName:n.name,v:Nn},r=mp.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Mn(i).slice(1)}`}async function pp(n){const e=await cp(n),t=lt().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:gp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hp,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=at(n,"network-request-failed"),a=lt().setTimeout(()=>{s(o)},up.get());function l(){lt().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const _p={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bp=500,vp=600,yp="_blank",Ip="http://localhost";class Io{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wp(n,e,t,i=bp,r=vp){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_p),{width:i.toString(),height:r.toString(),top:s,left:o}),u=Ue().toLowerCase();t&&(a=pl(u)?yp:t),gl(u)&&(e=e||Ip,l.scrollbars="yes");const f=Object.entries(l).reduce((d,[h,v])=>`${d}${h}=${v},`,"");if(ng(u)&&a!=="_self")return Ep(e||"",a),new Io(null);const c=window.open(e||"",a,f);$(c,n,"popup-blocked");try{c.focus()}catch{}return new Io(c)}function Ep(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const kp="__/auth/handler",Tp="emulator/auth/handler",Sp=encodeURIComponent("fac");async function wo(n,e,t,i,r,s){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Nn,eventId:r};if(e instanceof Pr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Kf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,c]of Object.entries(s||{}))o[f]=c}if(e instanceof Vn){const f=e.getScopes().filter(c=>c!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await n._getAppCheckToken(),u=l?`#${Sp}=${encodeURIComponent(l)}`:"";return`${Ap(n)}?${Mn(a).slice(1)}${u}`}function Ap({config:n}){return n.emulator?Cr(n,Tp):`https://${n.authDomain}/${kp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="webStorageSupport";class Cp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ol,this._completeRedirectFn=Zg,this._overrideRedirectResult=Yg}async _openPopup(e,t,i,r){var s;vt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wo(e,t,i,$i(),r);return wp(e,o,Or())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await wo(e,t,i,$i(),r);return Pg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(vt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await pp(e),i=new ep(e);return t.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zi,{type:zi},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[zi];o!==void 0&&t(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Il()||Dr()||Si()}}const Rp=Cp;var Eo="@firebase/auth",ko="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Op(n){bt(new ut("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wl(n)},u=new dg(i,r,s,l);return mg(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),bt(new ut("auth-internal",e=>{const t=Bn(e.getProvider("auth").getImmediate());return(i=>new Dp(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(Eo,ko,Pp(n)),ot(Eo,ko,"esm2017")}/**
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
 */const Lp=5*60,Mp=Sa("authIdTokenMaxAge")||Lp;let To=null;const Np=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Mp)return;const r=t==null?void 0:t.token;To!==r&&(To=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Up(n=La()){const e=In(n,"auth");if(e.isInitialized())return e.getImmediate();const t=hg(n,{popupRedirectResolver:Rp,persistence:[Hg,Cg,Ol]}),i=Sa("authTokenSyncURL");if(i){const s=Np(i);Eg(t,s,()=>s(t.currentUser)),wg(t,o=>s(o))}const r=Uf("auth");return r&&gg(t,`http://${r}`),t}Op("Browser");const Fp={apiKey:"AIzaSyAjCRLDHuTkfnKU5TTV6ZZasUXecSvlQOE",authDomain:"virtual-pinball-spreadsh-71a64.firebaseapp.com",projectId:"virtual-pinball-spreadsh-71a64",appId:"1:497322440319:web:8a7f7a2997664a9af7f14a",measurementId:"G-DB48L7QGX0"},Hl=Oa(Fp);Om(Hl);const jl=Up(Hl),Bp="VirtualPinballSpreadsheet",Vp="vps-db",Mr=rc("user",{});let Hp;const jp=()=>{const n=new st;n.addScope("public_repo"),n.setCustomParameters({allow_signup:"false"}),Kg(jl,n).then(async e=>{const t=st.credentialFromResult(e),i=e.user;if(i.displayName=e._tokenResponse.screenName,!(t!=null&&t.accessToken))throw new Error;zl(t.accessToken,i)}).catch(e=>{console.error(e)})},zl=async(n,e)=>{try{const{Octokit:t}=await es(()=>import("https://esm.sh/octokit"),[],import.meta.url),{createOrUpdateTextFile:i}=await es(()=>import("https://esm.sh/@octokit/plugin-create-or-update-text-file"),[],import.meta.url),r=t.plugin(i),s=new r({auth:n}),a=(await s.request("GET /repos/{owner}/{repo}/collaborators/{username}/permission",{owner:Bp,username:e.displayName,repo:Vp})).data.permission;if(!(a==="admin"||a==="write"||location.hostname==="localhost"||location.hostname==="127.0.0.1")){ln().trigger({message:"You don't have permission to edit on VPS.",background:"variant-filled-error"});return}Hp=s,Mr.set({user:e,permission:a,token:n}),ln().trigger({message:"Login successfull",background:"variant-filled-success"})}catch(t){console.log(t),ln().trigger({message:"Login was unsuccessfull.",background:"variant-filled-error"})}},zp=()=>{kg(jl).then(()=>{Mr.set({}),ln().trigger({message:"Logout successfull",background:"variant-filled-success"})})},jn={login:zl,logout:zp,triggerLoginPopup:jp,userStore:Mr};function So(n,e,t){const i=n.slice();return i[7]=e[t],i}function Ao(n){let e,t=n[7][1].name+"",i;return{c(){e=T("option"),i=J(t),this.h()},l(r){e=S(r,"OPTION",{});var s=D(e);i=Y(s,t),s.forEach(I),this.h()},h(){e.__value=n[7][0],pt(e,e.__value)},m(r,s){V(r,e,s),y(e,i)},p:ye,d(r){r&&I(e)}}}function Wp(n){let e,t,i,r,s,o,a,l,u,f,c,d,h,v;r=new gn({props:{icon:lc}});let w=Se(n[5]),p=[];for(let _=0;_<w.length;_+=1)p[_]=Ao(So(n,w,_));return c=new gn({props:{icon:cc}}),{c(){e=T("div"),t=T("div"),i=T("div"),X(r.$$.fragment),s=N(),o=T("input"),a=N(),l=T("select");for(let _=0;_<p.length;_+=1)p[_].c();u=N(),f=T("button"),X(c.$$.fragment),this.h()},l(_){e=S(_,"DIV",{class:!0});var m=D(e);t=S(m,"DIV",{class:!0});var b=D(t);i=S(b,"DIV",{class:!0});var E=D(i);ee(r.$$.fragment,E),E.forEach(I),s=U(b),o=S(b,"INPUT",{type:!0,placeholder:!0}),a=U(b),l=S(b,"SELECT",{class:!0});var k=D(l);for(let P=0;P<p.length;P+=1)p[P].l(k);k.forEach(I),b.forEach(I),u=U(m),f=S(m,"BUTTON",{class:!0});var A=D(f);ee(c.$$.fragment,A),A.forEach(I),m.forEach(I),this.h()},h(){g(i,"class","input-group-shim"),g(o,"type","search"),g(o,"placeholder","Search..."),g(l,"class","select rounded-l-none"),n[1]===void 0&&Ot(()=>n[9].call(l)),g(t,"class","input-group input-group-divider grid-cols-[auto_1fr_auto]"),g(f,"class","btn hover:variant-soft-primary btn-icon"),At(f,"variant-filled-primary",n[2]),g(e,"class","px-4 flex items-center gap-4")},m(_,m){V(_,e,m),y(e,t),y(t,i),Q(r,i,null),y(t,s),y(t,o),pt(o,n[0]),y(t,a),y(t,l);for(let b=0;b<p.length;b+=1)p[b]&&p[b].m(l,null);xr(l,n[1],!0),y(e,u),y(e,f),Q(c,f,null),d=!0,h||(v=[G(o,"input",n[8]),G(l,"change",n[9]),G(f,"click",n[10])],h=!0)},p(_,m){if(m&1&&o.value!==_[0]&&pt(o,_[0]),m&32){w=Se(_[5]);let b;for(b=0;b<w.length;b+=1){const E=So(_,w,b);p[b]?p[b].p(E,m):(p[b]=Ao(E),p[b].c(),p[b].m(l,null))}for(;b<p.length;b+=1)p[b].d(1);p.length=w.length}m&34&&xr(l,_[1]),(!d||m&4)&&At(f,"variant-filled-primary",_[2])},i(_){d||(O(r.$$.fragment,_),O(c.$$.fragment,_),d=!0)},o(_){M(r.$$.fragment,_),M(c.$$.fragment,_),d=!1},d(_){_&&I(e),Z(r),en(p,_),Z(c),h=!1,Qe(v)}}}function qp(n){let e,t=`<img src="${Cf}" alt="VPS" width="36px"/>`;return{c(){e=T("a"),e.innerHTML=t,this.h()},l(i){e=S(i,"A",{href:!0,class:!0,"data-svelte-h":!0}),Ne(e)!=="svelte-kw8dyq"&&(e.innerHTML=t),this.h()},h(){g(e,"href","/"),g(e,"class","ml-4 rounded-full logo transition-shadow svelte-tmztqq")},m(i,r){V(i,e,r)},p:ye,d(i){i&&I(e)}}}function Kp(n){let e,t,i="Apps",r,s,o="Links",a,l,u,f,c,d,h,v,w,p;return f=new gn({props:{icon:uc,class:"ml-2",size:"xs"}}),h=new gn({props:{icon:fc}}),{c(){e=T("div"),t=T("a"),t.textContent=i,r=N(),s=T("a"),s.textContent=o,a=N(),l=T("button"),u=J("Settings "),X(f.$$.fragment),c=N(),d=T("a"),X(h.$$.fragment),this.h()},l(_){e=S(_,"DIV",{slot:!0,class:!0});var m=D(e);t=S(m,"A",{href:!0,class:!0,"data-svelte-h":!0}),Ne(t)!=="svelte-tjfgp6"&&(t.textContent=i),r=U(m),s=S(m,"A",{href:!0,class:!0,"data-svelte-h":!0}),Ne(s)!=="svelte-in8qks"&&(s.textContent=o),a=U(m),l=S(m,"BUTTON",{class:!0});var b=D(l);u=Y(b,"Settings "),ee(f.$$.fragment,b),b.forEach(I),c=U(m),d=S(m,"A",{href:!0,class:!0});var E=D(d);ee(h.$$.fragment,E),E.forEach(I),m.forEach(I),this.h()},h(){g(t,"href","apps/"),g(t,"class","btn btn-sm hover:variant-soft-primary"),g(s,"href","links/"),g(s,"class","btn btn-sm hover:variant-soft-primary"),g(l,"class","btn btn-sm hover:variant-soft-primary"),g(d,"href","help/"),g(d,"class","btn hover:variant-soft-primary btn-icon"),g(e,"slot","trail"),g(e,"class","mr-4 flex items-center gap-4")},m(_,m){V(_,e,m),y(e,t),y(e,r),y(e,s),y(e,a),y(e,l),y(l,u),Q(f,l,null),y(e,c),y(e,d),Q(h,d,null),v=!0,w||(p=yn(ur.call(null,l,n[6])),w=!0)},p:ye,i(_){v||(O(f.$$.fragment,_),O(h.$$.fragment,_),v=!0)},o(_){M(f.$$.fragment,_),M(h.$$.fragment,_),v=!1},d(_){_&&I(e),Z(f),Z(h),w=!1,p()}}}function Gp(n){let e,t;return e=new zc({props:{$$slots:{trail:[Kp],lead:[qp],default:[Wp]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment)},l(i){ee(e.$$.fragment,i)},m(i,r){Q(e,i,r),t=!0},p(i,[r]){const s={};r&32775&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){t||(O(e.$$.fragment,i),t=!0)},o(i){M(e.$$.fragment,i),t=!1},d(i){Z(e,i)}}}function xp(n,e,t){let i,r,s;const{query:o,mode:a,filterActive:l}=Et;Ce(n,o,v=>t(0,i=v)),Ce(n,a,v=>t(1,r=v)),Ce(n,l,v=>t(2,s=v));const u=Object.entries(ea),f={event:"focus-click",target:"popupSettings",placement:"bottom",closeQuery:".listbox-item"};function c(){i=this.value,o.set(i)}function d(){r=Gl(this),a.set(r),t(5,u)}return[i,r,s,o,l,u,f,a,c,d,()=>Zo(l,s=!s,s)]}class Jp extends _e{constructor(e){super(),be(this,e,xp,Gp,ge,{})}}const Wl=_c("goto");Et.finalResultsStore.subscribe(()=>{var o;const n=on(Et.query),e=on(Et.filterActive);if(!n&&!e)return;const t=on(cr),i=(o=t==null?void 0:t.url)==null?void 0:o.pathname;if(!i||!on(Et.isSearchActive)&&i==="/")return;const r=on(Et.mode),s=ea[r].route;i!=null&&i.includes(s)||(console.log(t,i,r,s),Wl("/"+s,{keepFocus:!0}))});function Co(n){let e,t,i,r,s;return t=new gn({props:{icon:na}}),{c(){e=T("a"),X(t.$$.fragment),i=J("IPDB"),this.h()},l(o){e=S(o,"A",{class:!0,target:!0,href:!0});var a=D(e);ee(t.$$.fragment,a),i=Y(a,"IPDB"),a.forEach(I),this.h()},h(){g(e,"class","chip variant-soft-tertiary hover:variant-filled-tertiary gap-2"),g(e,"target","_blank"),g(e,"href",r=n[0].ipdbUrl)},m(o,a){V(o,e,a),Q(t,e,null),y(e,i),s=!0},p(o,a){(!s||a&1&&r!==(r=o[0].ipdbUrl))&&g(e,"href",r)},i(o){s||(O(t.$$.fragment,o),s=!0)},o(o){M(t.$$.fragment,o),s=!1},d(o){o&&I(e),Z(t)}}}function Yp(n){var Ur,Fr;let e,t,i,r,s,o,a,l,u=(((Ur=n[0].theme)==null?void 0:Ur.join(" • "))||"")+"",f,c,d,h,v=n[0].name+"",w,p,_,m=n[0].manufacturer+"",b,E,k=n[0].year+"",A,P,C,L,R=(((Fr=n[0].designers)==null?void 0:Fr.join(", "))||"")+"",F,x,q,K,ne,re="Players",de,se,ae=(n[0].players||"-")+"",j,W,H,oe,Ie,Oe,Ke="Type",tt,Le,Re=(n[0].type||"-")+"",z,De,Me,B,le,he,wn="Updated at",nn,ie,pe=$e(n[0].updatedAt)+"",Ze,Fe,nt,Ge,xe,it,Ut="ID",rn,Be,rt=n[0].id+"",Ft,Bt,Ae,sn,Nr,ke=n[0].ipdbUrl&&Co(n);return{c(){e=T("div"),t=T("img"),s=N(),o=T("div"),a=T("div"),l=T("p"),f=J(u),c=N(),ke&&ke.c(),d=N(),h=T("h1"),w=J(v),p=N(),_=T("h4"),b=J(m),E=J(" ("),A=J(k),P=J(")"),C=N(),L=T("p"),F=J(R),x=N(),q=T("div"),K=T("div"),ne=T("p"),ne.textContent=re,de=N(),se=T("p"),j=J(ae),W=N(),H=T("div"),oe=N(),Ie=T("div"),Oe=T("p"),Oe.textContent=Ke,tt=N(),Le=T("p"),z=J(Re),De=N(),Me=T("div"),B=N(),le=T("div"),he=T("p"),he.textContent=wn,nn=N(),ie=T("p"),Ze=J(pe),Fe=N(),nt=T("div"),Ge=N(),xe=T("div"),it=T("p"),it.textContent=Ut,rn=N(),Be=T("button"),Ft=J(rt),this.h()},l(ve){e=S(ve,"DIV",{class:!0});var we=D(e);t=S(we,"IMG",{class:!0,src:!0,alt:!0}),s=U(we),o=S(we,"DIV",{class:!0});var Je=D(o);a=S(Je,"DIV",{class:!0});var Vt=D(a);l=S(Vt,"P",{class:!0});var Br=D(l);f=Y(Br,u),Br.forEach(I),c=U(Vt),ke&&ke.l(Vt),Vt.forEach(I),d=U(Je),h=S(Je,"H1",{class:!0});var Vr=D(h);w=Y(Vr,v),Vr.forEach(I),p=U(Je),_=S(Je,"H4",{class:!0});var En=D(_);b=Y(En,m),E=Y(En," ("),A=Y(En,k),P=Y(En,")"),En.forEach(I),C=U(Je),L=S(Je,"P",{class:!0});var Hr=D(L);F=Y(Hr,R),Hr.forEach(I),x=U(Je),q=S(Je,"DIV",{class:!0,style:!0});var Ve=D(q);K=S(Ve,"DIV",{class:!0});var zn=D(K);ne=S(zn,"P",{class:!0,"data-svelte-h":!0}),Ne(ne)!=="svelte-1vi5dc3"&&(ne.textContent=re),de=U(zn),se=S(zn,"P",{class:!0});var jr=D(se);j=Y(jr,ae),jr.forEach(I),zn.forEach(I),W=U(Ve),H=S(Ve,"DIV",{class:!0}),D(H).forEach(I),oe=U(Ve),Ie=S(Ve,"DIV",{class:!0});var Wn=D(Ie);Oe=S(Wn,"P",{class:!0,"data-svelte-h":!0}),Ne(Oe)!=="svelte-1h1g7sd"&&(Oe.textContent=Ke),tt=U(Wn),Le=S(Wn,"P",{class:!0});var zr=D(Le);z=Y(zr,Re),zr.forEach(I),Wn.forEach(I),De=U(Ve),Me=S(Ve,"DIV",{class:!0}),D(Me).forEach(I),B=U(Ve),le=S(Ve,"DIV",{class:!0});var qn=D(le);he=S(qn,"P",{class:!0,"data-svelte-h":!0}),Ne(he)!=="svelte-g6tq99"&&(he.textContent=wn),nn=U(qn),ie=S(qn,"P",{class:!0});var Wr=D(ie);Ze=Y(Wr,pe),Wr.forEach(I),qn.forEach(I),Fe=U(Ve),nt=S(Ve,"DIV",{class:!0}),D(nt).forEach(I),Ge=U(Ve),xe=S(Ve,"DIV",{class:!0});var Kn=D(xe);it=S(Kn,"P",{class:!0,"data-svelte-h":!0}),Ne(it)!=="svelte-lju6x8"&&(it.textContent=Ut),rn=U(Kn),Be=S(Kn,"BUTTON",{class:!0});var qr=D(Be);Ft=Y(qr,rt),qr.forEach(I),Kn.forEach(I),Ve.forEach(I),Je.forEach(I),we.forEach(I),this.h()},h(){g(t,"class","rounded-md aspectBG w-96 svelte-v17uty"),gt(t.src,i=n[0].imgUrl||Qr(n[0]))||g(t,"src",i),g(t,"alt",r=n[0].name),g(l,"class","flex-1 uppercase font-bold text-sm opacity-40"),g(a,"class","flex"),g(h,"class","h1"),g(_,"class","h4"),g(L,"class","opacity-60"),g(ne,"class","text-xs font-bold uppercase opacity-40"),g(se,"class",""),g(K,"class","flex flex-col items-center justify-center flex-1 gap-1 my-3"),g(H,"class","bg-surface-900-50-token h-full w-px opacity-10"),g(Oe,"class","text-xs font-bold uppercase opacity-40"),g(Le,"class",""),g(Ie,"class","flex flex-col items-center justify-center flex-1 gap-1"),g(Me,"class","bg-surface-900-50-token h-full w-px opacity-10"),g(he,"class","text-xs font-bold uppercase opacity-40"),g(ie,"class",""),g(le,"class","flex flex-col items-center justify-center flex-1 gap-1"),g(nt,"class","bg-surface-900-50-token h-full w-px opacity-10"),g(it,"class","text-xs font-bold uppercase opacity-40"),g(Be,"class","chip badge-glass py-0.5 px-1"),g(xe,"class","flex flex-col items-center justify-center flex-1 gap-1"),g(q,"class","flex w-full mt-auto card items-center"),Lt(q,"background",n[1]?"rgba(255,255,255,.1)":"rgba(0,0,0,.1)",1),g(o,"class","flex flex-col flex-1 gap-2"),g(e,"class","flex gap-8")},m(ve,we){V(ve,e,we),y(e,t),y(e,s),y(e,o),y(o,a),y(a,l),y(l,f),y(a,c),ke&&ke.m(a,null),y(o,d),y(o,h),y(h,w),y(o,p),y(o,_),y(_,b),y(_,E),y(_,A),y(_,P),y(o,C),y(o,L),y(L,F),y(o,x),y(o,q),y(q,K),y(K,ne),y(K,de),y(K,se),y(se,j),y(q,W),y(q,H),y(q,oe),y(q,Ie),y(Ie,Oe),y(Ie,tt),y(Ie,Le),y(Le,z),y(q,De),y(q,Me),y(q,B),y(q,le),y(le,he),y(le,nn),y(le,ie),y(ie,Ze),y(q,Fe),y(q,nt),y(q,Ge),y(q,xe),y(xe,it),y(xe,rn),y(xe,Be),y(Be,Ft),Ae=!0,sn||(Nr=[yn(Bt=Rc.call(null,Be,n[0].id)),G(Be,"click",n[3])],sn=!0)},p(ve,[we]){var Je,Vt;(!Ae||we&1&&!gt(t.src,i=ve[0].imgUrl||Qr(ve[0])))&&g(t,"src",i),(!Ae||we&1&&r!==(r=ve[0].name))&&g(t,"alt",r),(!Ae||we&1)&&u!==(u=(((Je=ve[0].theme)==null?void 0:Je.join(" • "))||"")+"")&&te(f,u),ve[0].ipdbUrl?ke?(ke.p(ve,we),we&1&&O(ke,1)):(ke=Co(ve),ke.c(),O(ke,1),ke.m(a,null)):ke&&(ce(),M(ke,1,1,()=>{ke=null}),ue()),(!Ae||we&1)&&v!==(v=ve[0].name+"")&&te(w,v),(!Ae||we&1)&&m!==(m=ve[0].manufacturer+"")&&te(b,m),(!Ae||we&1)&&k!==(k=ve[0].year+"")&&te(A,k),(!Ae||we&1)&&R!==(R=(((Vt=ve[0].designers)==null?void 0:Vt.join(", "))||"")+"")&&te(F,R),(!Ae||we&1)&&ae!==(ae=(ve[0].players||"-")+"")&&te(j,ae),(!Ae||we&1)&&Re!==(Re=(ve[0].type||"-")+"")&&te(z,Re),(!Ae||we&1)&&pe!==(pe=$e(ve[0].updatedAt)+"")&&te(Ze,pe),(!Ae||we&1)&&rt!==(rt=ve[0].id+"")&&te(Ft,rt),Bt&&bi(Bt.update)&&we&1&&Bt.update.call(null,ve[0].id),(!Ae||we&2)&&Lt(q,"background",ve[1]?"rgba(255,255,255,.1)":"rgba(0,0,0,.1)",1)},i(ve){Ae||(O(ke),Ae=!0)},o(ve){M(ke),Ae=!1},d(ve){ve&&I(e),ke&&ke.d(),sn=!1,Qe(Nr)}}}function Xp(n,e,t){let i;Ce(n,ii,a=>t(1,i=a));const r=ln();let{game:s=ri}=e;const o=()=>{r.trigger({message:`${s.id} copied to clipboard.`})};return n.$$set=a=>{"game"in a&&t(0,s=a.game)},[s,i,r,o]}class Qp extends _e{constructor(e){super(),be(this,e,Xp,Yp,ge,{game:0})}}var Zp={prefix:"fab",iconName:"dropbox",icon:[528,512,[],"f16b","M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"]},$p={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},e_={prefix:"fab",iconName:"google-drive",icon:[512,512,[],"f3aa","M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"]};let t_=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((e,t)=>(t&=63,t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");function n_(n){let e,t,i,r,s,o,a,l,u,f;const c=n[4].default,d=je(c,n,n[3],null);return{c(){e=T("div"),d&&d.c(),t=N(),i=T("div"),r=T("p"),s=J(n[0]),o=N(),a=T("div"),this.h()},l(h){e=S(h,"DIV",{});var v=D(e);d&&d.l(v),v.forEach(I),t=U(h),i=S(h,"DIV",{class:!0,"data-popup":!0});var w=D(i);r=S(w,"P",{});var p=D(r);s=Y(p,n[0]),p.forEach(I),o=U(w),a=S(w,"DIV",{class:!0}),D(a).forEach(I),w.forEach(I),this.h()},h(){g(a,"class","arrow variant-filled-secondary"),g(i,"class","card px-2 py-1 variant-filled-secondary"),g(i,"data-popup",n[1])},m(h,v){V(h,e,v),d&&d.m(e,null),V(h,t,v),V(h,i,v),y(i,r),y(r,s),y(i,o),y(i,a),l=!0,u||(f=yn(ur.call(null,e,n[2])),u=!0)},p(h,[v]){d&&d.p&&(!l||v&8)&&ze(d,c,h,h[3],l?qe(c,h[3],v,null):We(h[3]),null),(!l||v&1)&&te(s,h[0])},i(h){l||(O(d,h),l=!0)},o(h){M(d,h),l=!1},d(h){h&&(I(e),I(t),I(i)),d&&d.d(h),u=!1,f()}}}function i_(n,e,t){let{$$slots:i={},$$scope:r}=e,{content:s=""}=e;const o=t_(),a={event:"hover",target:o,placement:"top"};return n.$$set=l=>{"content"in l&&t(0,s=l.content),"$$scope"in l&&t(3,r=l.$$scope)},[s,o,a,r,i]}class r_ extends _e{constructor(e){super(),be(this,e,i_,n_,ge,{content:0})}}function Ro(n,e,t){const i=n.slice();return i[4]=e[t],i}function s_(n){let e,t,i,r=n[4].title+"",s,o,a,l,u;return t=new gn({props:{icon:n[4].icon}}),{c(){e=T("a"),X(t.$$.fragment),i=T("span"),s=J(r),l=N(),this.h()},l(f){e=S(f,"A",{href:!0,target:!0,class:!0});var c=D(e);ee(t.$$.fragment,c),i=S(c,"SPAN",{});var d=D(i);s=Y(d,r),d.forEach(I),c.forEach(I),l=U(f),this.h()},h(){g(e,"href",o=n[4].url),g(e,"target","_blank"),g(e,"class",a="chip "+n[4].class)},m(f,c){V(f,e,c),Q(t,e,null),y(e,i),y(i,s),V(f,l,c),u=!0},p(f,c){const d={};c&1&&(d.icon=f[4].icon),t.$set(d),(!u||c&1)&&r!==(r=f[4].title+"")&&te(s,r),(!u||c&1&&o!==(o=f[4].url))&&g(e,"href",o),(!u||c&1&&a!==(a="chip "+f[4].class))&&g(e,"class",a)},i(f){u||(O(t.$$.fragment,f),u=!0)},o(f){M(t.$$.fragment,f),u=!1},d(f){f&&(I(e),I(l)),Z(t)}}}function Do(n){let e,t;return e=new r_({props:{content:n[1](n[4]),$$slots:{default:[s_]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment)},l(i){ee(e.$$.fragment,i)},m(i,r){Q(e,i,r),t=!0},p(i,r){const s={};r&1&&(s.content=i[1](i[4])),r&129&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){t||(O(e.$$.fragment,i),t=!0)},o(i){M(e.$$.fragment,i),t=!1},d(i){Z(e,i)}}}function o_(n){let e,t,i=Se(n[0]),r=[];for(let o=0;o<i.length;o+=1)r[o]=Do(Ro(n,i,o));const s=o=>M(r[o],1,1,()=>{r[o]=null});return{c(){e=T("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=S(o,"DIV",{class:!0});var a=D(e);for(let l=0;l<r.length;l+=1)r[l].l(a);a.forEach(I),this.h()},h(){g(e,"class","flex gap-1")},m(o,a){V(o,e,a);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);t=!0},p(o,[a]){if(a&3){i=Se(o[0]);let l;for(l=0;l<i.length;l+=1){const u=Ro(o,i,l);r[l]?(r[l].p(u,a),O(r[l],1)):(r[l]=Do(u),r[l].c(),O(r[l],1),r[l].m(e,null))}for(ce(),l=i.length;l<r.length;l+=1)s(l);ue()}},i(o){if(!t){for(let a=0;a<i.length;a+=1)O(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)M(r[a]);t=!1},d(o){o&&I(e),en(r,o)}}}function a_(n,e,t){let i,{urls:r=[]}=e;const s=a=>a.url?a.url.includes("vpuniverse")?{class:"variant-ghost-tertiary",icon:hc,title:"VPU",...a}:a.url.includes("vpforums")?{class:"variant-ghost-warning",icon:mc,title:"VPF",...a}:a.url.includes("drive.google")?{class:"variant-ghost-surface",icon:e_,title:"GDrive",...a}:a.url.includes("facebook")?{class:"variant-ghost-tertiary",icon:$p,title:"Facebook",...a}:a.url.includes("mega")?{class:"variant-ghost-primary",icon:gc,title:"Mega",...a}:a.url.includes("dropbox")?{class:"variant-ghost-secondary",icon:Zp,title:"Dropbox",...a}:a.url.includes("zen")?{class:"variant-ghost-surface",icon:pc,title:"Zen",...a}:{class:"variant-soft",icon:na,title:"Ext",...a}:{class:"",icon:dc,title:"???",...a},o=a=>a.broken||!a.url?"This link is broken and needs to be updated.":a.url.includes("vpuniverse")?"VPUniverse":a.url.includes("vpforums")?"VP Forums":a.url.includes("zen")?"Zen Pinball":a.url.includes("dropbox")?"Dropbox":a.url.includes("mega")?"Mega":a.url.includes("facebook")?"Facebook":(a.url.includes("drive.google"),a.url);return n.$$set=a=>{"urls"in a&&t(2,r=a.urls)},n.$$.update=()=>{n.$$.dirty&4&&t(0,i=r.map(a=>s(a)).filter(a=>!!a))},[i,o,r]}class ql extends _e{constructor(e){super(),be(this,e,a_,o_,ge,{urls:2})}}function Po(n){let e,t=n[0].comment+"",i;return{c(){e=T("p"),i=J(t)},l(r){e=S(r,"P",{});var s=D(e);i=Y(s,t),s.forEach(I)},m(r,s){V(r,e,s),y(e,i)},p(r,s){s&1&&t!==(t=r[0].comment+"")&&te(i,t)},d(r){r&&I(e)}}}function l_(n){var wn,nn;let e,t,i,r,s=((wn=n[0].authors)==null?void 0:wn.join(", "))+"",o,a,l,u,f,c,d,h,v="Updated at",w,p,_=$e(n[0].updatedAt)+"",m,b,E,k,A,P,C="Added at",L,R,F=$e(n[0].createdAt||n[0].updatedAt)+"",x,q,K,ne,re,de,se,ae,j,W=((nn=n[0].authors)==null?void 0:nn.join(", "))+"",H,oe,Ie,Oe=n[0].tableFormat+"",Ke,tt,Le,Re,z,De,Me=$e(n[0].createdAt||n[0].updatedAt)+"",B,le,he=n[0].comment&&Po(n);return u=new ql({props:{urls:n[0].urls}}),Re=new sc({props:{data:n[0].features}}),{c(){e=T("a"),t=T("div"),i=T("div"),r=T("p"),o=J(s),a=N(),he&&he.c(),l=N(),X(u.$$.fragment),f=N(),c=T("div"),d=T("div"),h=T("p"),h.textContent=v,w=N(),p=T("p"),m=J(_),b=N(),E=T("div"),k=N(),A=T("div"),P=T("p"),P.textContent=C,L=N(),R=T("p"),x=J(F),q=N(),K=T("img"),de=N(),se=T("div"),ae=T("div"),j=T("p"),H=J(W),oe=N(),Ie=T("div"),Ke=J(Oe),tt=N(),Le=T("div"),X(Re.$$.fragment),z=N(),De=T("p"),B=J(Me),this.h()},l(ie){e=S(ie,"A",{class:!0,href:!0,target:!0});var pe=D(e);t=S(pe,"DIV",{class:!0});var Ze=D(t);i=S(Ze,"DIV",{style:!0,class:!0});var Fe=D(i);r=S(Fe,"P",{class:!0});var nt=D(r);o=Y(nt,s),nt.forEach(I),a=U(Fe),he&&he.l(Fe),l=U(Fe),ee(u.$$.fragment,Fe),f=U(Fe),c=S(Fe,"DIV",{class:!0});var Ge=D(c);d=S(Ge,"DIV",{class:!0});var xe=D(d);h=S(xe,"P",{class:!0,"data-svelte-h":!0}),Ne(h)!=="svelte-g6tq99"&&(h.textContent=v),w=U(xe),p=S(xe,"P",{class:!0});var it=D(p);m=Y(it,_),it.forEach(I),xe.forEach(I),b=U(Ge),E=S(Ge,"DIV",{class:!0}),D(E).forEach(I),k=U(Ge),A=S(Ge,"DIV",{class:!0});var Ut=D(A);P=S(Ut,"P",{class:!0,"data-svelte-h":!0}),Ne(P)!=="svelte-1gbi7dm"&&(P.textContent=C),L=U(Ut),R=S(Ut,"P",{class:!0});var rn=D(R);x=Y(rn,F),rn.forEach(I),Ut.forEach(I),Ge.forEach(I),Fe.forEach(I),q=U(Ze),K=S(Ze,"IMG",{src:!0,alt:!0,class:!0}),Ze.forEach(I),de=U(pe),se=S(pe,"DIV",{class:!0});var Be=D(se);ae=S(Be,"DIV",{class:!0});var rt=D(ae);j=S(rt,"P",{class:!0});var Ft=D(j);H=Y(Ft,W),Ft.forEach(I),oe=U(rt),Ie=S(rt,"DIV",{class:!0});var Bt=D(Ie);Ke=Y(Bt,Oe),Bt.forEach(I),rt.forEach(I),tt=U(Be),Le=S(Be,"DIV",{class:!0});var Ae=D(Le);ee(Re.$$.fragment,Ae),Ae.forEach(I),z=U(Be),De=S(Be,"P",{class:!0});var sn=D(De);B=Y(sn,Me),sn.forEach(I),Be.forEach(I),pe.forEach(I),this.h()},h(){g(r,"class","font-bold"),g(h,"class","text-xs font-bold uppercase opacity-40"),g(p,"class",""),g(d,"class","flex flex-col items-center justify-center flex-1 gap-1"),g(E,"class","bg-surface-900-50-token h-full w-px opacity-20"),g(P,"class","text-xs font-bold uppercase opacity-40"),g(R,"class",""),g(A,"class","flex flex-col items-center justify-center flex-1 gap-1"),g(c,"class","flex mt-auto w-full"),Lt(i,"background",n[2]?"rgba(255,255,255,.4)":"rgba(0,0,0,.4)",1),g(i,"class","card absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md p-4 gap-4 flex flex-col"),gt(K.src,ne=n[0].imgUrl||Zr)||g(K,"src",ne),g(K,"alt",re=n[0].id),g(K,"class","card pinImage bg-surface-300-600-token svelte-12btdzh"),g(t,"class","relative group"),g(j,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),g(Ie,"class","badge badge-glass my-auto py-0.5 px-1"),g(ae,"class","flex gap-2"),g(Le,"class","my-2"),g(De,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),g(se,"class","flex flex-col py-4"),g(e,"class","wrapper relative z-0"),g(e,"href",n[1]),g(e,"target","_blank")},m(ie,pe){V(ie,e,pe),y(e,t),y(t,i),y(i,r),y(r,o),y(i,a),he&&he.m(i,null),y(i,l),Q(u,i,null),y(i,f),y(i,c),y(c,d),y(d,h),y(d,w),y(d,p),y(p,m),y(c,b),y(c,E),y(c,k),y(c,A),y(A,P),y(A,L),y(A,R),y(R,x),y(t,q),y(t,K),y(e,de),y(e,se),y(se,ae),y(ae,j),y(j,H),y(ae,oe),y(ae,Ie),y(Ie,Ke),y(se,tt),y(se,Le),Q(Re,Le,null),y(se,z),y(se,De),y(De,B),le=!0},p(ie,[pe]){var nt,Ge;(!le||pe&1)&&s!==(s=((nt=ie[0].authors)==null?void 0:nt.join(", "))+"")&&te(o,s),ie[0].comment?he?he.p(ie,pe):(he=Po(ie),he.c(),he.m(i,l)):he&&(he.d(1),he=null);const Ze={};pe&1&&(Ze.urls=ie[0].urls),u.$set(Ze),(!le||pe&1)&&_!==(_=$e(ie[0].updatedAt)+"")&&te(m,_),(!le||pe&1)&&F!==(F=$e(ie[0].createdAt||ie[0].updatedAt)+"")&&te(x,F),(!le||pe&4)&&Lt(i,"background",ie[2]?"rgba(255,255,255,.4)":"rgba(0,0,0,.4)",1),(!le||pe&1&&!gt(K.src,ne=ie[0].imgUrl||Zr))&&g(K,"src",ne),(!le||pe&1&&re!==(re=ie[0].id))&&g(K,"alt",re),(!le||pe&1)&&W!==(W=((Ge=ie[0].authors)==null?void 0:Ge.join(", "))+"")&&te(H,W),(!le||pe&1)&&Oe!==(Oe=ie[0].tableFormat+"")&&te(Ke,Oe);const Fe={};pe&1&&(Fe.data=ie[0].features),Re.$set(Fe),(!le||pe&1)&&Me!==(Me=$e(ie[0].createdAt||ie[0].updatedAt)+"")&&te(B,Me),(!le||pe&2)&&g(e,"href",ie[1])},i(ie){le||(O(u.$$.fragment,ie),O(Re.$$.fragment,ie),le=!0)},o(ie){M(u.$$.fragment,ie),M(Re.$$.fragment,ie),le=!1},d(ie){ie&&I(e),he&&he.d(),Z(u),Z(Re)}}}function c_(n,e,t){let i,r;Ce(n,ii,l=>t(2,r=l));const{dbStore:s}=lr;Ce(n,s,l=>t(4,i=l));let{file:o=oc}=e,{href:a=""}=e;return n.$$set=l=>{"file"in l&&t(0,o=l.file),"href"in l&&t(1,a=l.href)},n.$$.update=()=>{var l;n.$$.dirty&17&&((l=o==null?void 0:o.game)!=null&&l.id?i[o.game.id]:ri)},[o,a,r,s,i]}class u_ extends _e{constructor(e){super(),be(this,e,c_,l_,ge,{file:0,href:1})}}function Oo(n,e,t){const i=n.slice();return i[1]=e[t],i}function Lo(n){let e,t,i='<h3 class="h3">Tables</h3>',r,s,o,a=Se(n[0]),l=[];for(let f=0;f<a.length;f+=1)l[f]=Mo(Oo(n,a,f));const u=f=>M(l[f],1,1,()=>{l[f]=null});return{c(){e=T("div"),t=T("div"),t.innerHTML=i,r=N(),s=T("div");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=S(f,"DIV",{class:!0});var c=D(e);t=S(c,"DIV",{class:!0,"data-svelte-h":!0}),Ne(t)!=="svelte-1s1r7y4"&&(t.innerHTML=i),r=U(c),s=S(c,"DIV",{class:!0});var d=D(s);for(let h=0;h<l.length;h+=1)l[h].l(d);d.forEach(I),c.forEach(I),this.h()},h(){g(t,"class","flex items-end gap-4"),g(s,"class","grid layout gap-y-10 gap-x-4 svelte-193p9ri"),g(e,"class","flex flex-col gap-4")},m(f,c){V(f,e,c),y(e,t),y(e,r),y(e,s);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(s,null);o=!0},p(f,c){if(c&1){a=Se(f[0]);let d;for(d=0;d<a.length;d+=1){const h=Oo(f,a,d);l[d]?(l[d].p(h,c),O(l[d],1)):(l[d]=Mo(h),l[d].c(),O(l[d],1),l[d].m(s,null))}for(ce(),d=a.length;d<l.length;d+=1)u(d);ue()}},i(f){if(!o){for(let c=0;c<a.length;c+=1)O(l[c]);o=!0}},o(f){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)M(l[c]);o=!1},d(f){f&&I(e),en(l,f)}}}function Mo(n){var i,r;let e,t;return e=new u_({props:{file:n[1],href:((r=(i=n[1].urls)==null?void 0:i[0])==null?void 0:r.url)||""}}),{c(){X(e.$$.fragment)},l(s){ee(e.$$.fragment,s)},m(s,o){Q(e,s,o),t=!0},p(s,o){var l,u;const a={};o&1&&(a.file=s[1]),o&1&&(a.href=((u=(l=s[1].urls)==null?void 0:l[0])==null?void 0:u.url)||""),e.$set(a)},i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){M(e.$$.fragment,s),t=!1},d(s){Z(e,s)}}}function f_(n){var r;let e,t,i=((r=n[0])==null?void 0:r.length)&&Lo(n);return{c(){i&&i.c(),e=Te()},l(s){i&&i.l(s),e=Te()},m(s,o){i&&i.m(s,o),V(s,e,o),t=!0},p(s,[o]){var a;(a=s[0])!=null&&a.length?i?(i.p(s,o),o&1&&O(i,1)):(i=Lo(s),i.c(),O(i,1),i.m(e.parentNode,e)):i&&(ce(),M(i,1,1,()=>{i=null}),ue())},i(s){t||(O(i),t=!0)},o(s){M(i),t=!1},d(s){s&&I(e),i&&i.d(s)}}}function d_(n,e,t){let{tables:i=[]}=e;return n.$$set=r=>{"tables"in r&&t(0,i=r.tables)},[i]}class h_ extends _e{constructor(e){super(),be(this,e,d_,f_,ge,{tables:0})}}function No(n,e,t){const i=n.slice();return i[2]=e[t],i}function Uo(n){let e,t=n[2]+"",i,r;return{c(){e=T("div"),i=J(t),r=N(),this.h()},l(s){e=S(s,"DIV",{class:!0});var o=D(e);i=Y(o,t),r=U(o),o.forEach(I),this.h()},h(){g(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(s,o){V(s,e,o),y(e,i),y(e,r)},p(s,o){o&1&&t!==(t=s[2]+"")&&te(i,t)},d(s){s&&I(e)}}}function m_(n){var E;let e,t,i,r,s,o,a,l,u,f,c=((E=n[0].authors)==null?void 0:E.join(", "))+"",d,h,v,w,p=($e(n[0].updatedAt)||"???")+"",_,m=Se(n[0].features||[]),b=[];for(let k=0;k<m.length;k+=1)b[k]=Uo(No(n,m,k));return{c(){e=T("a"),t=T("img"),s=N(),o=T("hr"),a=N(),l=T("div"),u=T("div"),f=T("p"),d=J(c),h=N();for(let k=0;k<b.length;k+=1)b[k].c();v=N(),w=T("h4"),_=J(p),this.h()},l(k){e=S(k,"A",{href:!0,class:!0,target:!0});var A=D(e);t=S(A,"IMG",{src:!0,alt:!0,class:!0}),s=U(A),o=S(A,"HR",{}),a=U(A),l=S(A,"DIV",{class:!0});var P=D(l);u=S(P,"DIV",{class:!0});var C=D(u);f=S(C,"P",{class:!0});var L=D(f);d=Y(L,c),L.forEach(I),h=U(C);for(let F=0;F<b.length;F+=1)b[F].l(C);C.forEach(I),v=U(P),w=S(P,"H4",{class:!0});var R=D(w);_=Y(R,p),R.forEach(I),P.forEach(I),A.forEach(I),this.h()},h(){gt(t.src,i=n[0].imgUrl||$r)||g(t,"src",i),g(t,"alt",r=n[0].id),g(t,"class","card aspectTable svelte-1mrpffe"),g(f,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),g(u,"class","flex gap-2"),g(w,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),g(l,"class","flex flex-col py-4"),g(e,"href",n[1]),g(e,"class","overflow-hidden flex flex-col"),g(e,"target","_blank")},m(k,A){V(k,e,A),y(e,t),y(e,s),y(e,o),y(e,a),y(e,l),y(l,u),y(u,f),y(f,d),y(u,h);for(let P=0;P<b.length;P+=1)b[P]&&b[P].m(u,null);y(l,v),y(l,w),y(w,_)},p(k,[A]){var P;if(A&1&&!gt(t.src,i=k[0].imgUrl||$r)&&g(t,"src",i),A&1&&r!==(r=k[0].id)&&g(t,"alt",r),A&1&&c!==(c=((P=k[0].authors)==null?void 0:P.join(", "))+"")&&te(d,c),A&1){m=Se(k[0].features||[]);let C;for(C=0;C<m.length;C+=1){const L=No(k,m,C);b[C]?b[C].p(L,A):(b[C]=Uo(L),b[C].c(),b[C].m(u,null))}for(;C<b.length;C+=1)b[C].d(1);b.length=m.length}A&1&&p!==(p=($e(k[0].updatedAt)||"???")+"")&&te(_,p),A&2&&g(e,"href",k[1])},i:ye,o:ye,d(k){k&&I(e),en(b,k)}}}function g_(n,e,t){let{file:i=ta}=e,{href:r=""}=e;return n.$$set=s=>{"file"in s&&t(0,i=s.file),"href"in s&&t(1,r=s.href)},[i,r]}class p_ extends _e{constructor(e){super(),be(this,e,g_,m_,ge,{file:0,href:1})}}function Fo(n,e,t){const i=n.slice();return i[1]=e[t],i}function Bo(n){let e,t,i='<h3 class="h3">Backglasses</h3>',r,s,o,a=Se(n[0]),l=[];for(let f=0;f<a.length;f+=1)l[f]=Vo(Fo(n,a,f));const u=f=>M(l[f],1,1,()=>{l[f]=null});return{c(){e=T("div"),t=T("div"),t.innerHTML=i,r=N(),s=T("div");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=S(f,"DIV",{class:!0});var c=D(e);t=S(c,"DIV",{class:!0,"data-svelte-h":!0}),Ne(t)!=="svelte-cu5gg"&&(t.innerHTML=i),r=U(c),s=S(c,"DIV",{class:!0});var d=D(s);for(let h=0;h<l.length;h+=1)l[h].l(d);d.forEach(I),c.forEach(I),this.h()},h(){g(t,"class","flex items-end gap-4"),g(s,"class","grid layout gap-y-10 gap-x-4 svelte-193p9ri"),g(e,"class","flex flex-col gap-4")},m(f,c){V(f,e,c),y(e,t),y(e,r),y(e,s);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(s,null);o=!0},p(f,c){if(c&1){a=Se(f[0]);let d;for(d=0;d<a.length;d+=1){const h=Fo(f,a,d);l[d]?(l[d].p(h,c),O(l[d],1)):(l[d]=Vo(h),l[d].c(),O(l[d],1),l[d].m(s,null))}for(ce(),d=a.length;d<l.length;d+=1)u(d);ue()}},i(f){if(!o){for(let c=0;c<a.length;c+=1)O(l[c]);o=!0}},o(f){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)M(l[c]);o=!1},d(f){f&&I(e),en(l,f)}}}function Vo(n){var i,r;let e,t;return e=new p_({props:{file:n[1],href:((r=(i=n[1].urls)==null?void 0:i[0])==null?void 0:r.url)||""}}),{c(){X(e.$$.fragment)},l(s){ee(e.$$.fragment,s)},m(s,o){Q(e,s,o),t=!0},p(s,o){var l,u;const a={};o&1&&(a.file=s[1]),o&1&&(a.href=((u=(l=s[1].urls)==null?void 0:l[0])==null?void 0:u.url)||""),e.$set(a)},i(s){t||(O(e.$$.fragment,s),t=!0)},o(s){M(e.$$.fragment,s),t=!1},d(s){Z(e,s)}}}function __(n){var r;let e,t,i=((r=n[0])==null?void 0:r.length)&&Bo(n);return{c(){i&&i.c(),e=Te()},l(s){i&&i.l(s),e=Te()},m(s,o){i&&i.m(s,o),V(s,e,o),t=!0},p(s,[o]){var a;(a=s[0])!=null&&a.length?i?(i.p(s,o),o&1&&O(i,1)):(i=Bo(s),i.c(),O(i,1),i.m(e.parentNode,e)):i&&(ce(),M(i,1,1,()=>{i=null}),ue())},i(s){t||(O(i),t=!0)},o(s){M(i),t=!1},d(s){s&&I(e),i&&i.d(s)}}}function b_(n,e,t){let{b2ss:i=[ta]}=e;return n.$$set=r=>{"b2ss"in r&&t(0,i=r.b2ss)},[i]}class v_ extends _e{constructor(e){super(),be(this,e,b_,__,ge,{b2ss:0})}}function Ho(n,e,t){const i=n.slice();return i[2]=e[t],i[4]=t,i}function jo(n){let e,t,i,r,s,o,a,l,u,f,c="<tr><th>Version</th> <th>Authors</th> <th>Comment</th> <th>URLs</th> <th>Updated at</th></tr>",d,h,v,w=Se(n[1]),p=[];for(let m=0;m<w.length;m+=1)p[m]=zo(Ho(n,w,m));const _=m=>M(p[m],1,1,()=>{p[m]=null});return{c(){e=T("hr"),t=N(),i=T("div"),r=T("div"),s=T("h3"),o=J(n[0]),a=N(),l=T("div"),u=T("table"),f=T("thead"),f.innerHTML=c,d=N(),h=T("tbody");for(let m=0;m<p.length;m+=1)p[m].c();this.h()},l(m){e=S(m,"HR",{class:!0}),t=U(m),i=S(m,"DIV",{class:!0});var b=D(i);r=S(b,"DIV",{class:!0});var E=D(r);s=S(E,"H3",{class:!0});var k=D(s);o=Y(k,n[0]),k.forEach(I),E.forEach(I),a=U(b),l=S(b,"DIV",{class:!0});var A=D(l);u=S(A,"TABLE",{class:!0});var P=D(u);f=S(P,"THEAD",{"data-svelte-h":!0}),Ne(f)!=="svelte-9x0ged"&&(f.innerHTML=c),d=U(P),h=S(P,"TBODY",{});var C=D(h);for(let L=0;L<p.length;L+=1)p[L].l(C);C.forEach(I),P.forEach(I),A.forEach(I),b.forEach(I),this.h()},h(){g(e,"class","-mx-8"),g(s,"class","h3"),g(r,"class","flex items-end gap-4"),g(u,"class","table table-hover table-compact"),g(l,"class","table-container"),g(i,"class","flex flex-col gap-4")},m(m,b){V(m,e,b),V(m,t,b),V(m,i,b),y(i,r),y(r,s),y(s,o),y(i,a),y(i,l),y(l,u),y(u,f),y(u,d),y(u,h);for(let E=0;E<p.length;E+=1)p[E]&&p[E].m(h,null);v=!0},p(m,b){if((!v||b&1)&&te(o,m[0]),b&2){w=Se(m[1]);let E;for(E=0;E<w.length;E+=1){const k=Ho(m,w,E);p[E]?(p[E].p(k,b),O(p[E],1)):(p[E]=zo(k),p[E].c(),O(p[E],1),p[E].m(h,null))}for(ce(),E=w.length;E<p.length;E+=1)_(E);ue()}},i(m){if(!v){for(let b=0;b<w.length;b+=1)O(p[b]);v=!0}},o(m){p=p.filter(Boolean);for(let b=0;b<p.length;b+=1)M(p[b]);v=!1},d(m){m&&(I(e),I(t),I(i)),en(p,m)}}}function zo(n){var A;let e,t,i=(n[2].version||"")+"",r,s,o,a=(((A=n[2].authors)==null?void 0:A.join(", "))||"")+"",l,u,f,c=(n[2].comment||"")+"",d,h,v,w,p,_,m=$e(n[2].updatedAt)+"",b,E,k;return w=new ql({props:{urls:n[2].urls}}),{c(){e=T("tr"),t=T("td"),r=J(i),s=N(),o=T("td"),l=J(a),u=N(),f=T("td"),d=J(c),h=N(),v=T("td"),X(w.$$.fragment),p=N(),_=T("td"),b=J(m),E=N(),this.h()},l(P){e=S(P,"TR",{});var C=D(e);t=S(C,"TD",{class:!0});var L=D(t);r=Y(L,i),L.forEach(I),s=U(C),o=S(C,"TD",{class:!0});var R=D(o);l=Y(R,a),R.forEach(I),u=U(C),f=S(C,"TD",{});var F=D(f);d=Y(F,c),F.forEach(I),h=U(C),v=S(C,"TD",{class:!0});var x=D(v);ee(w.$$.fragment,x),x.forEach(I),p=U(C),_=S(C,"TD",{class:!0});var q=D(_);b=Y(q,m),q.forEach(I),E=U(C),C.forEach(I),this.h()},h(){g(t,"class","w-20"),g(o,"class","w-56"),g(v,"class","w-40"),g(_,"class","w-32")},m(P,C){V(P,e,C),y(e,t),y(t,r),y(e,s),y(e,o),y(o,l),y(e,u),y(e,f),y(f,d),y(e,h),y(e,v),Q(w,v,null),y(e,p),y(e,_),y(_,b),y(e,E),k=!0},p(P,C){var R;(!k||C&2)&&i!==(i=(P[2].version||"")+"")&&te(r,i),(!k||C&2)&&a!==(a=(((R=P[2].authors)==null?void 0:R.join(", "))||"")+"")&&te(l,a),(!k||C&2)&&c!==(c=(P[2].comment||"")+"")&&te(d,c);const L={};C&2&&(L.urls=P[2].urls),w.$set(L),(!k||C&2)&&m!==(m=$e(P[2].updatedAt)+"")&&te(b,m)},i(P){k||(O(w.$$.fragment,P),k=!0)},o(P){M(w.$$.fragment,P),k=!1},d(P){P&&I(e),Z(w)}}}function y_(n){var r;let e,t,i=((r=n[1])==null?void 0:r.length)&&jo(n);return{c(){i&&i.c(),e=Te()},l(s){i&&i.l(s),e=Te()},m(s,o){i&&i.m(s,o),V(s,e,o),t=!0},p(s,[o]){var a;(a=s[1])!=null&&a.length?i?(i.p(s,o),o&2&&O(i,1)):(i=jo(s),i.c(),O(i,1),i.m(e.parentNode,e)):i&&(ce(),M(i,1,1,()=>{i=null}),ue())},i(s){t||(O(i),t=!0)},o(s){M(i),t=!1},d(s){s&&I(e),i&&i.d(s)}}}function I_(n,e,t){let{title:i="???"}=e,{files:r=[]}=e;return n.$$set=s=>{"title"in s&&t(0,i=s.title),"files"in s&&t(1,r=s.files)},[i,r]}class Ht extends _e{constructor(e){super(),be(this,e,I_,y_,ge,{title:0,files:1})}}function w_(n){let e,t,i,r,s,o,a,l,u,f,c,d,h,v,w,p,_,m,b,E,k,A,P,C,L;return t=new Qp({props:{game:n[0]}}),o=new h_({props:{tables:n[0].tableFiles}}),f=new v_({props:{b2ss:n[0].b2sFiles}}),d=new Ht({props:{files:n[0].pupPackFiles,title:"Roms"}}),v=new Ht({props:{files:n[0].altColorFiles,title:"Alt. Color"}}),p=new Ht({props:{files:n[0].altSoundFiles,title:"Alt. Sound"}}),m=new Ht({props:{files:n[0].povFiles,title:"POV"}}),E=new Ht({props:{files:n[0].wheelArtFiles,title:"Wheelart"}}),A=new Ht({props:{files:n[0].topperFiles,title:"Topper"}}),C=new Ht({props:{files:n[0].mediaPackFiles,title:"Media Packs"}}),{c(){e=T("div"),X(t.$$.fragment),i=N(),r=T("hr"),s=N(),X(o.$$.fragment),a=N(),l=T("hr"),u=N(),X(f.$$.fragment),c=N(),X(d.$$.fragment),h=N(),X(v.$$.fragment),w=N(),X(p.$$.fragment),_=N(),X(m.$$.fragment),b=N(),X(E.$$.fragment),k=N(),X(A.$$.fragment),P=N(),X(C.$$.fragment),this.h()},l(R){e=S(R,"DIV",{class:!0,style:!0});var F=D(e);ee(t.$$.fragment,F),i=U(F),r=S(F,"HR",{class:!0}),s=U(F),ee(o.$$.fragment,F),a=U(F),l=S(F,"HR",{class:!0}),u=U(F),ee(f.$$.fragment,F),c=U(F),ee(d.$$.fragment,F),h=U(F),ee(v.$$.fragment,F),w=U(F),ee(p.$$.fragment,F),_=U(F),ee(m.$$.fragment,F),b=U(F),ee(E.$$.fragment,F),k=U(F),ee(A.$$.fragment,F),P=U(F),ee(C.$$.fragment,F),F.forEach(I),this.h()},h(){g(r,"class","-mx-8"),g(l,"class","-mx-8"),g(e,"class","card p-8 py-10 w-full max-w-5xl flex flex-col gap-12 bg-top"),Lt(e,"background-image","radial-gradient( at 0% -40%, "+n[1]+" 0px, transparent 50% ), radial-gradient(at 98% -40%, "+n[2]+" 0px, transparent 50%)")},m(R,F){V(R,e,F),Q(t,e,null),y(e,i),y(e,r),y(e,s),Q(o,e,null),y(e,a),y(e,l),y(e,u),Q(f,e,null),y(e,c),Q(d,e,null),y(e,h),Q(v,e,null),y(e,w),Q(p,e,null),y(e,_),Q(m,e,null),y(e,b),Q(E,e,null),y(e,k),Q(A,e,null),y(e,P),Q(C,e,null),L=!0},p(R,[F]){const x={};F&1&&(x.game=R[0]),t.$set(x);const q={};F&1&&(q.tables=R[0].tableFiles),o.$set(q);const K={};F&1&&(K.b2ss=R[0].b2sFiles),f.$set(K);const ne={};F&1&&(ne.files=R[0].pupPackFiles),d.$set(ne);const re={};F&1&&(re.files=R[0].altColorFiles),v.$set(re);const de={};F&1&&(de.files=R[0].altSoundFiles),p.$set(de);const se={};F&1&&(se.files=R[0].povFiles),m.$set(se);const ae={};F&1&&(ae.files=R[0].wheelArtFiles),E.$set(ae);const j={};F&1&&(j.files=R[0].topperFiles),A.$set(j);const W={};F&1&&(W.files=R[0].mediaPackFiles),C.$set(W),(!L||F&6)&&Lt(e,"background-image","radial-gradient( at 0% -40%, "+R[1]+" 0px, transparent 50% ), radial-gradient(at 98% -40%, "+R[2]+" 0px, transparent 50%)")},i(R){L||(O(t.$$.fragment,R),O(o.$$.fragment,R),O(f.$$.fragment,R),O(d.$$.fragment,R),O(v.$$.fragment,R),O(p.$$.fragment,R),O(m.$$.fragment,R),O(E.$$.fragment,R),O(A.$$.fragment,R),O(C.$$.fragment,R),L=!0)},o(R){M(t.$$.fragment,R),M(o.$$.fragment,R),M(f.$$.fragment,R),M(d.$$.fragment,R),M(v.$$.fragment,R),M(p.$$.fragment,R),M(m.$$.fragment,R),M(E.$$.fragment,R),M(A.$$.fragment,R),M(C.$$.fragment,R),L=!1},d(R){R&&I(e),Z(t),Z(o),Z(f),Z(d),Z(v),Z(p),Z(m),Z(E),Z(A),Z(C)}}}function E_(n,e,t){let i,r,s,o,a;Ce(n,cr,h=>t(8,s=h));const{dbStore:l}=lr;Ce(n,l,h=>t(6,o=h));const u=fr();Ce(n,u,h=>t(7,a=h));let f="rgba(var(--color-tertiary-500) / 0.1)",c="rgba(var(--color-primary-500) / 0.1)";const d=new ac;return xl(()=>{Wl(s.url.pathname)}),n.$$.update=()=>{var h,v;n.$$.dirty&128&&t(5,i=(v=(h=a[0])==null?void 0:h.meta)==null?void 0:v.game),n.$$.dirty&96&&t(0,r=(i?o[i]:ri)||ri),n.$$.dirty&1&&r.imgUrl&&(d.getColorAsync(r.imgUrl,{left:0,width:80}).then(w=>{t(1,f=w.rgba.replace(",1)",",0.6)"))}),d.getColorAsync(r.imgUrl,{left:200,width:80}).then(w=>{t(2,c=w.rgba.replace(",1)",",0.6)"))}))},[r,f,c,l,u,i,o,a]}class k_ extends _e{constructor(e){super(),be(this,e,E_,w_,ge,{})}}function T_(n,e,t){let i;Ce(n,cr,s=>t(0,i=s));const r={ref:k_,slot:"<p>Skeleton</p>"};return n.$$.update=()=>{var s;if(n.$$.dirty&1){const o=(s=i==null?void 0:i.url)==null?void 0:s.searchParams;if(o){const a=o.get("game");if(a){const l={type:"component",meta:{game:a},component:r};fr().trigger(l)}}}},[i]}class S_ extends _e{constructor(e){super(),be(this,e,T_,null,ge,{})}}function A_(n){let e,t,i,r,s=n[0].user.displayName+"",o,a,l,u="Logout",f,c,d;return t=new ca({props:{src:n[0].user.photoURL||"",width:"w-6",rounded:"rounded-full"}}),{c(){e=T("div"),X(t.$$.fragment),i=N(),r=T("span"),o=J(s),a=N(),l=T("button"),l.textContent=u,this.h()},l(h){e=S(h,"DIV",{class:!0});var v=D(e);ee(t.$$.fragment,v),i=U(v),r=S(v,"SPAN",{});var w=D(r);o=Y(w,s),w.forEach(I),v.forEach(I),a=U(h),l=S(h,"BUTTON",{class:!0,"data-svelte-h":!0}),Ne(l)!=="svelte-nsylsw"&&(l.textContent=u),this.h()},h(){g(e,"class","space-x-2 flex items-center"),g(l,"class","btn w-full variant-filled-secondary")},m(h,v){V(h,e,v),Q(t,e,null),y(e,i),y(e,r),y(r,o),V(h,a,v),V(h,l,v),f=!0,c||(d=G(l,"click",jn.logout),c=!0)},p(h,v){const w={};v&1&&(w.src=h[0].user.photoURL||""),t.$set(w),(!f||v&1)&&s!==(s=h[0].user.displayName+"")&&te(o,s)},i(h){f||(O(t.$$.fragment,h),f=!0)},o(h){M(t.$$.fragment,h),f=!1},d(h){h&&(I(e),I(a),I(l)),Z(t),c=!1,d()}}}function C_(n){let e,t="Admin Login",i,r;return{c(){e=T("button"),e.textContent=t,this.h()},l(s){e=S(s,"BUTTON",{class:!0,"data-svelte-h":!0}),Ne(e)!=="svelte-e3s47o"&&(e.textContent=t),this.h()},h(){g(e,"class","btn btn-sm variant-ghost-surface")},m(s,o){V(s,e,o),i||(r=G(e,"click",jn.triggerLoginPopup),i=!0)},p:ye,i:ye,o:ye,d(s){s&&I(e),i=!1,r()}}}function R_(n){let e,t,i,r,s,o,a,l,u,f,c,d,h,v;s=new ju({});const w=[C_,A_],p=[];function _(m,b){return m[0].user?1:0}return f=_(n),c=p[f]=w[f](n),{c(){e=T("div"),t=T("div"),i=T("div"),r=J("Toggle Dark/Light "),X(s.$$.fragment),o=N(),a=T("hr"),l=N(),u=T("div"),c.c(),d=N(),h=T("div"),this.h()},l(m){e=S(m,"DIV",{class:!0,"data-popup":!0});var b=D(e);t=S(b,"DIV",{class:!0});var E=D(t);i=S(E,"DIV",{class:!0});var k=D(i);r=Y(k,"Toggle Dark/Light "),ee(s.$$.fragment,k),k.forEach(I),E.forEach(I),o=U(b),a=S(b,"HR",{}),l=U(b),u=S(b,"DIV",{class:!0});var A=D(u);c.l(A),A.forEach(I),d=U(b),h=S(b,"DIV",{class:!0}),D(h).forEach(I),b.forEach(I),this.h()},h(){g(i,"class","flex justify-between items-center gap-8 text-sm"),g(t,"class","p-4"),g(u,"class","p-4 flex flex-col gap-4"),g(h,"class","arrow bg-surface-100-800-token"),g(e,"class","card 8 shadow-xl popup"),g(e,"data-popup","popupSettings")},m(m,b){V(m,e,b),y(e,t),y(t,i),y(i,r),Q(s,i,null),y(e,o),y(e,a),y(e,l),y(e,u),p[f].m(u,null),y(e,d),y(e,h),v=!0},p(m,[b]){let E=f;f=_(m),f===E?p[f].p(m,b):(ce(),M(p[E],1,1,()=>{p[E]=null}),ue(),c=p[f],c?c.p(m,b):(c=p[f]=w[f](m),c.c()),O(c,1),c.m(u,null))},i(m){v||(O(s.$$.fragment,m),O(c),v=!0)},o(m){M(s.$$.fragment,m),M(c),v=!1},d(m){m&&I(e),Z(s),p[f].d()}}}function D_(n,e,t){let i;const{userStore:r}=jn;return Ce(n,r,s=>t(0,i=s)),[i,r]}class P_ extends _e{constructor(e){super(),be(this,e,D_,R_,ge,{})}}function O_(n){var p,_;let e,t,i,r,s,o=((p=n[0].user)==null?void 0:p.displayName)+"",a,l,u,f="Logout",c,d,h,v,w;return i=new ca({props:{src:((_=n[0].user)==null?void 0:_.photoURL)||"",width:"w-12",rounded:"rounded-full"}}),{c(){e=T("div"),t=T("div"),X(i.$$.fragment),r=N(),s=T("b"),a=J(o),l=N(),u=T("button"),u.textContent=f,c=N(),d=T("div"),this.h()},l(m){e=S(m,"DIV",{class:!0,"data-popup":!0});var b=D(e);t=S(b,"DIV",{class:!0});var E=D(t);ee(i.$$.fragment,E),r=U(E),s=S(E,"B",{});var k=D(s);a=Y(k,o),k.forEach(I),l=U(E),u=S(E,"BUTTON",{class:!0,"data-svelte-h":!0}),Ne(u)!=="svelte-nsylsw"&&(u.textContent=f),E.forEach(I),c=U(b),d=S(b,"DIV",{class:!0}),D(d).forEach(I),b.forEach(I),this.h()},h(){g(u,"class","btn w-full variant-filled-secondary"),g(t,"class","flex flex-col space-y-2"),g(d,"class","arrow bg-surface-100-800-token"),g(e,"class","card p-4 w-72 shadow-xl popup"),g(e,"data-popup","popupUser")},m(m,b){V(m,e,b),y(e,t),Q(i,t,null),y(t,r),y(t,s),y(s,a),y(t,l),y(t,u),y(e,c),y(e,d),h=!0,v||(w=G(u,"click",jn.logout),v=!0)},p(m,[b]){var k,A;const E={};b&1&&(E.src=((k=m[0].user)==null?void 0:k.photoURL)||""),i.$set(E),(!h||b&1)&&o!==(o=((A=m[0].user)==null?void 0:A.displayName)+"")&&te(a,o)},i(m){h||(O(i.$$.fragment,m),h=!0)},o(m){M(i.$$.fragment,m),h=!1},d(m){m&&I(e),Z(i),v=!1,w()}}}function L_(n,e,t){let i;const{userStore:r}=jn;return Ce(n,r,s=>t(0,i=s)),[i,r]}class M_ extends _e{constructor(e){super(),be(this,e,L_,O_,ge,{})}}function N_(n){let e,t,i,r;return e=new M_({}),i=new P_({}),{c(){X(e.$$.fragment),t=N(),X(i.$$.fragment)},l(s){ee(e.$$.fragment,s),t=U(s),ee(i.$$.fragment,s)},m(s,o){Q(e,s,o),V(s,t,o),Q(i,s,o),r=!0},p:ye,i(s){r||(O(e.$$.fragment,s),O(i.$$.fragment,s),r=!0)},o(s){M(e.$$.fragment,s),M(i.$$.fragment,s),r=!1},d(s){s&&I(t),Z(e,s),Z(i,s)}}}class U_ extends _e{constructor(e){super(),be(this,e,null,N_,ge,{})}}function Wo(n,e,t){const i=n.slice();return i[43]=e[t].id,i[44]=e[t].val,i[46]=t,i}function qo(n,e,t){const i=n.slice();return i[47]=e[t],i}function Ko(n){let e,t=n[47]+"",i,r;return{c(){e=T("option"),i=J(t),this.h()},l(s){e=S(s,"OPTION",{});var o=D(e);i=Y(o,t),o.forEach(I),this.h()},h(){e.__value=r=n[47],pt(e,e.__value)},m(s,o){V(s,e,o),y(e,i)},p(s,o){o[0]&1&&t!==(t=s[47]+"")&&te(i,t),o[0]&1&&r!==(r=s[47])&&(e.__value=r,pt(e,e.__value))},d(s){s&&I(e)}}}function Go(n){let e,t=[],i=new Map,r,s,o,a=Se(n[11]);const l=u=>u[43];for(let u=0;u<a.length;u+=1){let f=Wo(n,a,u),c=l(f);i.set(c,t[u]=xo(c,f))}return{c(){e=T("div");for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=S(u,"DIV",{class:!0});var f=D(e);for(let c=0;c<t.length;c+=1)t[c].l(f);f.forEach(I),this.h()},h(){g(e,"class",r="input-chip-list "+n[8])},m(u,f){V(u,e,f);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);o=!0},p(u,f){if(n=u,f[0]&18472){a=Se(n[11]),ce();for(let c=0;c<t.length;c+=1)t[c].r();t=ar(t,f,l,1,n,a,i,e,$o,xo,null,Wo);for(let c=0;c<t.length;c+=1)t[c].a();ue()}(!o||f[0]&256&&r!==(r="input-chip-list "+n[8]))&&g(e,"class",r)},i(u){if(!o){for(let f=0;f<a.length;f+=1)O(t[f]);u&&Ot(()=>{o&&(s||(s=mn(e,pn,{duration:n[3],opacity:0,y:-20},!0)),s.run(1))}),o=!0}},o(u){for(let f=0;f<t.length;f+=1)M(t[f]);u&&(s||(s=mn(e,pn,{duration:n[3],opacity:0,y:-20},!1)),s.run(0)),o=!1},d(u){u&&I(e);for(let f=0;f<t.length;f+=1)t[f].d();u&&s&&s.end()}}}function xo(n,e){let t,i,r,s=e[44]+"",o,a,l,u="✕",f,c,d,h,v=ye,w,p,_;function m(...b){return e[38](e[46],e[44],...b)}return{key:n,first:null,c(){t=T("div"),i=T("button"),r=T("span"),o=J(s),a=N(),l=T("span"),l.textContent=u,d=N(),this.h()},l(b){t=S(b,"DIV",{});var E=D(t);i=S(E,"BUTTON",{type:!0,class:!0});var k=D(i);r=S(k,"SPAN",{});var A=D(r);o=Y(A,s),A.forEach(I),a=U(k),l=S(k,"SPAN",{"data-svelte-h":!0}),Ne(l)!=="svelte-1p578dz"&&(l.textContent=u),k.forEach(I),d=U(E),E.forEach(I),this.h()},h(){g(i,"type","button"),g(i,"class",f="chip "+e[5]),this.first=t},m(b,E){V(b,t,E),y(t,i),y(i,r),y(r,o),y(i,a),y(i,l),y(t,d),w=!0,p||(_=[G(i,"click",m),G(i,"click",e[28]),G(i,"keypress",e[29]),G(i,"keydown",e[30]),G(i,"keyup",e[31])],p=!0)},p(b,E){e=b,(!w||E[0]&2048)&&s!==(s=e[44]+"")&&te(o,s),(!w||E[0]&32&&f!==(f="chip "+e[5]))&&g(i,"class",f)},r(){h=t.getBoundingClientRect()},f(){ra(t),v()},a(){v(),v=ia(t,h,ua,{duration:e[3]})},i(b){w||(b&&Ot(()=>{w&&(c||(c=mn(i,is,{duration:e[3],opacity:0},!0)),c.run(1))}),w=!0)},o(b){b&&(c||(c=mn(i,is,{duration:e[3],opacity:0},!1)),c.run(0)),w=!1},d(b){b&&I(t),b&&c&&c.end(),p=!1,Qe(_)}}}function F_(n){let e,t,i,r,s,o,a,l,u,f,c,d,h,v,w,p,_=Se(n[0]),m=[];for(let E=0;E<_.length;E+=1)m[E]=Ko(qo(n,_,E));let b=n[11].length&&Go(n);return{c(){e=T("div"),t=T("div"),i=T("select");for(let E=0;E<m.length;E+=1)m[E].c();r=N(),s=T("div"),o=T("form"),a=T("input"),c=N(),b&&b.c(),this.h()},l(E){e=S(E,"DIV",{class:!0});var k=D(e);t=S(k,"DIV",{class:!0});var A=D(t);i=S(A,"SELECT",{name:!0,tabindex:!0});var P=D(i);for(let R=0;R<m.length;R+=1)m[R].l(P);P.forEach(I),A.forEach(I),r=U(k),s=S(k,"DIV",{class:!0});var C=D(s);o=S(C,"FORM",{});var L=D(o);a=S(L,"INPUT",{type:!0,placeholder:!0,class:!0}),L.forEach(I),c=U(C),b&&b.l(C),C.forEach(I),k.forEach(I),this.h()},h(){g(i,"name",n[2]),i.multiple=!0,i.required=n[4],g(i,"tabindex","-1"),n[0]===void 0&&Ot(()=>n[36].call(i)),g(t,"class","h-0 overflow-hidden"),g(a,"type","text"),g(a,"placeholder",l=n[15].placeholder??"Enter values..."),g(a,"class",u="input-chip-field "+n[7]),a.disabled=f=n[15].disabled,g(s,"class",d="input-chip-interface "+n[9]),g(e,"class",h="input-chip "+n[10]),At(e,"opacity-50",n[15].disabled)},m(E,k){V(E,e,k),y(e,t),y(t,i);for(let A=0;A<m.length;A+=1)m[A]&&m[A].m(i,null);n[35](i),Jr(i,n[0]),y(e,r),y(e,s),y(s,o),y(o,a),pt(a,n[1]),y(s,c),b&&b.m(s,null),v=!0,w||(p=[G(i,"change",n[36]),G(a,"input",n[37]),G(a,"input",n[12]),G(a,"input",n[32]),G(a,"focus",n[33]),G(a,"blur",n[34]),G(o,"submit",n[13])],w=!0)},p(E,k){if(k[0]&1){_=Se(E[0]);let A;for(A=0;A<_.length;A+=1){const P=qo(E,_,A);m[A]?m[A].p(P,k):(m[A]=Ko(P),m[A].c(),m[A].m(i,null))}for(;A<m.length;A+=1)m[A].d(1);m.length=_.length}(!v||k[0]&4)&&g(i,"name",E[2]),(!v||k[0]&16)&&(i.required=E[4]),k[0]&1&&Jr(i,E[0]),(!v||k[0]&32768&&l!==(l=E[15].placeholder??"Enter values..."))&&g(a,"placeholder",l),(!v||k[0]&128&&u!==(u="input-chip-field "+E[7]))&&g(a,"class",u),(!v||k[0]&32768&&f!==(f=E[15].disabled))&&(a.disabled=f),k[0]&2&&a.value!==E[1]&&pt(a,E[1]),E[11].length?b?(b.p(E,k),k[0]&2048&&O(b,1)):(b=Go(E),b.c(),O(b,1),b.m(s,null)):b&&(ce(),M(b,1,1,()=>{b=null}),ue()),(!v||k[0]&512&&d!==(d="input-chip-interface "+E[9]))&&g(s,"class",d),(!v||k[0]&1024&&h!==(h="input-chip "+E[10]))&&g(e,"class",h),(!v||k[0]&33792)&&At(e,"opacity-50",E[15].disabled)},i(E){v||(O(b),v=!0)},o(E){M(b),v=!1},d(E){E&&I(e),en(m,E),n[35](null),b&&b.d(),w=!1,Qe(p)}}}const B_="textarea cursor-pointer",V_="space-y-4",H_="flex flex-wrap gap-2",j_="unstyled bg-transparent border-0 !ring-0 p-0 w-full";function z_(n,e,t){let i,r,s,o,a,l;const u=["input","name","value","whitelist","max","minlength","maxlength","allowUpperCase","allowDuplicates","validation","duration","required","chips","invalid","padding","rounded"];let f=dn(e,u);const c=_i();let{input:d=""}=e,{name:h}=e,{value:v=[]}=e,{whitelist:w=[]}=e,{max:p=-1}=e,{minlength:_=-1}=e,{maxlength:m=-1}=e,{allowUpperCase:b=!1}=e,{allowDuplicates:E=!1}=e,{validation:k=()=>!0}=e,{duration:A=150}=e,{required:P=!1}=e,{chips:C="variant-filled"}=e,{invalid:L="input-error"}=e,{padding:R="p-2"}=e,{rounded:F="rounded-container-token"}=e,x=!0;function q(){t(0,v=[])}let K;ir(()=>{if(!K.form)return;const z=K.form;return z.addEventListener("reset",q),()=>{z.removeEventListener("reset",q)}});function ne(){t(26,x=!0)}function re(){return!(!d||(t(1,d=d.trim()),k!==void 0&&!k(d))||p!==-1&&v.length>=p||_!==-1&&d.length<_||m!==-1&&d.length>m||w.length>0&&!w.includes(d)||E===!1&&v.includes(d))}function de(z){if(z.preventDefault(),t(26,x=re()),x===!1){c("invalid",{event:z,input:d});return}t(1,d=b?d:d.toLowerCase()),v.push(d),t(0,v),i.push({val:d,id:Math.random()}),t(11,i),t(0,v),c("add",{event:z,chipIndex:v.length-1,chipValue:d}),t(1,d="")}function se(z,De,Me){f.disabled||(v.splice(De,1),t(0,v),i.splice(De,1),t(11,i),t(0,v),c("remove",{event:z,chipIndex:De,chipValue:Me}))}function ae(z){fe.call(this,n,z)}function j(z){fe.call(this,n,z)}function W(z){fe.call(this,n,z)}function H(z){fe.call(this,n,z)}function oe(z){fe.call(this,n,z)}function Ie(z){fe.call(this,n,z)}function Oe(z){fe.call(this,n,z)}function Ke(z){an[z?"unshift":"push"](()=>{K=z,t(6,K)})}function tt(){v=Jl(this),t(0,v)}function Le(){d=this.value,t(1,d)}const Re=(z,De,Me)=>{se(Me,z,De)};return n.$$set=z=>{t(42,e=Ee(Ee({},e),Pe(z))),t(15,f=dn(e,u)),"input"in z&&t(1,d=z.input),"name"in z&&t(2,h=z.name),"value"in z&&t(0,v=z.value),"whitelist"in z&&t(16,w=z.whitelist),"max"in z&&t(17,p=z.max),"minlength"in z&&t(18,_=z.minlength),"maxlength"in z&&t(19,m=z.maxlength),"allowUpperCase"in z&&t(20,b=z.allowUpperCase),"allowDuplicates"in z&&t(21,E=z.allowDuplicates),"validation"in z&&t(22,k=z.validation),"duration"in z&&t(3,A=z.duration),"required"in z&&t(4,P=z.required),"chips"in z&&t(5,C=z.chips),"invalid"in z&&t(23,L=z.invalid),"padding"in z&&t(24,R=z.padding),"rounded"in z&&t(25,F=z.rounded)},n.$$.update=()=>{n.$$.dirty[0]&1&&t(11,i=(v==null?void 0:v.map(z=>({val:z,id:Math.random()})))||[]),n.$$.dirty[0]&75497472&&t(27,r=x===!1?L:""),t(10,s=`${B_} ${R} ${F} ${e.class??""} ${r}`)},t(9,o=`${V_}`),t(8,a=`${H_}`),t(7,l=`${j_}`),e=Pe(e),[v,d,h,A,P,C,K,l,a,o,s,i,ne,de,se,f,w,p,_,m,b,E,k,L,R,F,x,r,ae,j,W,H,oe,Ie,Oe,Ke,tt,Le,Re]}class W_ extends _e{constructor(e){super(),be(this,e,z_,F_,ge,{input:1,name:2,value:0,whitelist:16,max:17,minlength:18,maxlength:19,allowUpperCase:20,allowDuplicates:21,validation:22,duration:3,required:4,chips:5,invalid:23,padding:24,rounded:25},null,[-1,-1])}}function q_(n){let e;return{c(){e=J(n[1])},l(t){e=Y(t,n[1])},m(t,i){V(t,e,i)},p(t,i){i&2&&te(e,t[1])},d(t){t&&I(e)}}}function Jo(n){let e,t,i,r,s,o,a,l,u,f,c,d,h;function v(b){n[8](b)}function w(b){n[9](b)}let p={name:"chips",placeholder:"Select filters...",chips:"variant-filled-primary"};n[2]!==void 0&&(p.input=n[2]),n[5].value!==void 0&&(p.value=n[5].value),t=new W_({props:p}),an.push(()=>Xn(t,"input",v)),an.push(()=>Xn(t,"value",w));function _(b){n[10](b)}let m={options:n[5].options,denylist:n[6]};return n[2]!==void 0&&(m.input=n[2]),a=new lu({props:m}),an.push(()=>Xn(a,"input",_)),a.$on("selection",n[11]),{c(){e=T("div"),X(t.$$.fragment),s=N(),o=T("div"),X(a.$$.fragment),this.h()},l(b){e=S(b,"DIV",{});var E=D(e);ee(t.$$.fragment,E),s=U(E),o=S(E,"DIV",{class:!0,style:!0,tabindex:!0,"data-popup":!0});var k=D(o);ee(a.$$.fragment,k),k.forEach(I),E.forEach(I),this.h()},h(){var b;g(o,"class","card max-h-48 p-4 overflow-y-auto z-50"),Lt(o,"width",(((b=n[3])==null?void 0:b.clientWidth)||100)+"px"),g(o,"tabindex","-1"),g(o,"data-popup",u=n[1]+"PopupAutocomplete")},m(b,E){V(b,e,E),Q(t,e,null),y(e,s),y(e,o),Q(a,o,null),n[12](e),c=!0,d||(h=yn(f=ur.call(null,e,n[4])),d=!0)},p(b,E){var P;const k={};!i&&E&4&&(i=!0,k.input=b[2],Yn(()=>i=!1)),!r&&E&32&&(r=!0,k.value=b[5].value,Yn(()=>r=!1)),t.$set(k);const A={};E&32&&(A.options=b[5].options),!l&&E&4&&(l=!0,A.input=b[2],Yn(()=>l=!1)),a.$set(A),(!c||E&8)&&Lt(o,"width",(((P=b[3])==null?void 0:P.clientWidth)||100)+"px"),(!c||E&2&&u!==(u=b[1]+"PopupAutocomplete"))&&g(o,"data-popup",u),f&&bi(f.update)&&E&16&&f.update.call(null,b[4])},i(b){c||(O(t.$$.fragment,b),O(a.$$.fragment,b),c=!0)},o(b){M(t.$$.fragment,b),M(a.$$.fragment,b),c=!1},d(b){b&&I(e),Z(t),Z(a),n[12](null),d=!1,h()}}}function K_(n){let e,t,i,r,s;function o(u){n[7](u)}let a={size:"sm",active:"variant-filled-primary",name:"slide",$$slots:{default:[q_]},$$scope:{ctx:n}};n[5].active!==void 0&&(a.checked=n[5].active),t=new Iu({props:a}),an.push(()=>Xn(t,"checked",o));let l=n[5].active&&Jo(n);return{c(){e=T("div"),X(t.$$.fragment),r=N(),l&&l.c(),this.h()},l(u){e=S(u,"DIV",{class:!0});var f=D(e);ee(t.$$.fragment,f),r=U(f),l&&l.l(f),f.forEach(I),this.h()},h(){g(e,"class","flex flex-col gap-4 flex-1")},m(u,f){V(u,e,f),Q(t,e,null),y(e,r),l&&l.m(e,null),s=!0},p(u,[f]){const c={};f&8194&&(c.$$scope={dirty:f,ctx:u}),!i&&f&32&&(i=!0,c.checked=u[5].active,Yn(()=>i=!1)),t.$set(c),u[5].active?l?(l.p(u,f),f&32&&O(l,1)):(l=Jo(u),l.c(),O(l,1),l.m(e,null)):l&&(ce(),M(l,1,1,()=>{l=null}),ue())},i(u){s||(O(t.$$.fragment,u),O(l),s=!0)},o(u){M(t.$$.fragment,u),M(l),s=!1},d(u){u&&I(e),Z(t),l&&l.d()}}}function G_(n,e,t){let i,r,s=ye,o=()=>(s(),s=Yl(a,m=>t(5,r=m)),a);n.$$.on_destroy.push(()=>s());let{store:a}=e;o();let{title:l="???"}=e,u="",f=[],c;function d(m){n.$$.not_equal(r.active,m)&&(r.active=m,a.set(r))}function h(m){u=m,t(2,u)}function v(m){n.$$.not_equal(r.value,m)&&(r.value=m,a.set(r))}function w(m){u=m,t(2,u)}const p=m=>{r.value.push(m.detail.value),a.set(r),t(2,u="")};function _(m){an[m?"unshift":"push"](()=>{c=m,t(3,c)})}return n.$$set=m=>{"store"in m&&o(t(0,a=m.store)),"title"in m&&t(1,l=m.title)},n.$$.update=()=>{n.$$.dirty&2&&t(4,i={event:"focus-click",target:l+"PopupAutocomplete",placement:"bottom"})},[a,l,u,c,i,r,f,d,h,v,w,p,_]}class Jn extends _e{constructor(e){super(),be(this,e,G_,K_,ge,{store:0,title:1})}}function x_(n){let e,t,i,r,s,o,a,l,u,f;return i=new Jn({props:{store:n[3],title:"Features"}}),s=new Jn({props:{store:n[2],title:"Author"}}),a=new Jn({props:{store:n[0],title:"Manufacturer"}}),u=new Jn({props:{store:n[1],title:"Theme"}}),{c(){e=T("div"),t=T("div"),X(i.$$.fragment),r=N(),X(s.$$.fragment),o=N(),X(a.$$.fragment),l=N(),X(u.$$.fragment),this.h()},l(c){e=S(c,"DIV",{class:!0});var d=D(e);t=S(d,"DIV",{class:!0});var h=D(t);ee(i.$$.fragment,h),r=U(h),ee(s.$$.fragment,h),o=U(h),ee(a.$$.fragment,h),l=U(h),ee(u.$$.fragment,h),h.forEach(I),d.forEach(I),this.h()},h(){g(t,"class","p-4 card w-full border-primary-600 border flex gap-4"),g(e,"class","p-4 flex")},m(c,d){V(c,e,d),y(e,t),Q(i,t,null),y(t,r),Q(s,t,null),y(t,o),Q(a,t,null),y(t,l),Q(u,t,null),f=!0},p:ye,i(c){f||(O(i.$$.fragment,c),O(s.$$.fragment,c),O(a.$$.fragment,c),O(u.$$.fragment,c),f=!0)},o(c){M(i.$$.fragment,c),M(s.$$.fragment,c),M(a.$$.fragment,c),M(u.$$.fragment,c),f=!1},d(c){c&&I(e),Z(i),Z(s),Z(a),Z(u)}}}function J_(n){const{manufacturer:e,theme:t,author:i,features:r}=Et;return[e,t,i,r]}class Y_ extends _e{constructor(e){super(),be(this,e,J_,x_,ge,{})}}function X_(n){let e;const t=n[2].default,i=je(t,n,n[3],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&8)&&ze(i,t,r,r[3],e?qe(t,r[3],s,null):We(r[3]),null)},i(r){e||(O(i,r),e=!0)},o(r){M(i,r),e=!1},d(r){i&&i.d(r)}}}function Q_(n){let e,t;return e=new Jp({}),{c(){X(e.$$.fragment)},l(i){ee(e.$$.fragment,i)},m(i,r){Q(e,i,r),t=!0},i(i){t||(O(e.$$.fragment,i),t=!0)},o(i){M(e.$$.fragment,i),t=!1},d(i){Z(e,i)}}}function Yo(n){let e,t;return e=new Y_({}),{c(){X(e.$$.fragment)},l(i){ee(e.$$.fragment,i)},m(i,r){Q(e,i,r),t=!0},i(i){t||(O(e.$$.fragment,i),t=!0)},o(i){M(e.$$.fragment,i),t=!1},d(i){Z(e,i)}}}function Z_(n){let e,t,i=n[0]&&Yo();return{c(){i&&i.c(),e=Te()},l(r){i&&i.l(r),e=Te()},m(r,s){i&&i.m(r,s),V(r,e,s),t=!0},p(r,s){r[0]?i?s&1&&O(i,1):(i=Yo(),i.c(),O(i,1),i.m(e.parentNode,e)):i&&(ce(),M(i,1,1,()=>{i=null}),ue())},i(r){t||(O(i),t=!0)},o(r){M(i),t=!1},d(r){r&&I(e),i&&i.d(r)}}}function $_(n){let e,t,i,r,s,o,a,l,u,f;return e=new U_({}),i=new Mu({}),s=new Ju({props:{zIndex:"1000"}}),a=new S_({}),u=new iu({props:{$$slots:{pageHeader:[Z_],header:[Q_],default:[X_]},$$scope:{ctx:n}}}),{c(){X(e.$$.fragment),t=N(),X(i.$$.fragment),r=N(),X(s.$$.fragment),o=N(),X(a.$$.fragment),l=N(),X(u.$$.fragment)},l(c){ee(e.$$.fragment,c),t=U(c),ee(i.$$.fragment,c),r=U(c),ee(s.$$.fragment,c),o=U(c),ee(a.$$.fragment,c),l=U(c),ee(u.$$.fragment,c)},m(c,d){Q(e,c,d),V(c,t,d),Q(i,c,d),V(c,r,d),Q(s,c,d),V(c,o,d),Q(a,c,d),V(c,l,d),Q(u,c,d),f=!0},p(c,[d]){const h={};d&9&&(h.$$scope={dirty:d,ctx:c}),u.$set(h)},i(c){f||(O(e.$$.fragment,c),O(i.$$.fragment,c),O(s.$$.fragment,c),O(a.$$.fragment,c),O(u.$$.fragment,c),f=!0)},o(c){M(e.$$.fragment,c),M(i.$$.fragment,c),M(s.$$.fragment,c),M(a.$$.fragment,c),M(u.$$.fragment,c),f=!1},d(c){c&&(I(t),I(r),I(o),I(l)),Z(e,c),Z(i,c),Z(s,c),Z(a,c),Z(u,c)}}}function eb(n,e,t){let i,{$$slots:r={},$$scope:s}=e;Cc(),oa.set({computePosition:Af,autoUpdate:Sf,offset:af,shift:lf,flip:sf,arrow:rf});const{filterActive:o}=Et;return Ce(n,o,a=>t(0,i=a)),ir(()=>{lr.fetchDb()}),n.$$set=a=>{"$$scope"in a&&t(3,s=a.$$scope)},[i,o,r,s]}class ub extends _e{constructor(e){super(),be(this,e,eb,$_,ge,{})}}export{ub as component,cb as universal};
