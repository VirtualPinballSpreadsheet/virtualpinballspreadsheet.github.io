import{r as ce,u as qo,v as Rt,w as es,x as Ko,y as qs,s as de,z as Me,f as C,a as U,g as A,h as R,c as F,d as I,j as _,i as V,A as E,B as Ne,C as Ue,D as Fe,E as ts,F as he,G as Ie,H as q,I as se,l as $,m as ee,J as ke,K as li,n as le,L as Ht,M as jt,N as It,O as Be,P as Yt,Q as xn,R as Jn,S as Xt,T as _n,U as un,V as ci,W as pt,e as ye,q as Ks,X as nt,Y as Vl,o as ns,Z as Go,_ as Gs,$ as bn,a0 as Ae,a1 as Hl,a2 as jl,a3 as xs,p as qt,a4 as zl,a5 as jn,k as Js,a6 as Wl}from"../chunks/scheduler.dedae0ab.js";import{n as ql,l as Kl,f as Gl,h as xl,S as me,i as ge,a as P,g as re,t as L,c as oe,j as is,k as ss,o as Qt,b as Y,d as Z,m as X,e as Q,p as zn}from"../chunks/index.21d01676.js";import{w as vn,r as Jl}from"../chunks/index.ac37785c.js";import{c as ui,e as Te,u as rs,o as Yl,g as fn,a as Ys,f as xo,S as dt,m as Jo,b as Yn,d as Xs,E as Hi,T as Xl,B as Ql,h as Zl,D as Yo}from"../chunks/modeMapping.a5764982.js";import{_ as Qs}from"../chunks/preload-helper.a4192956.js";import{F as dn,f as $l,a as ec,b as tc,c as nc,d as ic}from"../chunks/index.1d35238c.js";import{h as sc}from"../chunks/singletons.c615b545.js";import{p as os}from"../chunks/stores.7128abf8.js";function Xo(n,e,t,i){if(!e)return ce;const s=n.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return ce;const{delay:r=0,duration:o=300,easing:a=qo,start:l=ql()+r,end:u=l+o,tick:f=ce,css:c}=t(n,{from:e,to:s},i);let d=!0,h=!1,b;function y(){c&&(b=Gl(n,0,1,o,r,a,c)),r||(h=!0)}function p(){c&&xl(n,b),d=!1}return Kl(g=>{if(!h&&g>=l&&(h=!0),h&&g>=u&&(f(1,0),p()),!d)return!1;if(h){const m=g-l,v=0+1*a(m/o);f(v,1-v)}return!0}),y(),f(0,1),p}function Qo(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:i}=e,s=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=i,Zo(n,s)}}function Zo(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const i=getComputedStyle(n),s=i.transform==="none"?"":i.transform;n.style.transform=`${s} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}const rc=!1,H_=Object.freeze(Object.defineProperty({__proto__:null,ssr:rc},Symbol.toStringTag,{value:"Module"}));const $o=vn(void 0);function ea(n,e){const{computePosition:t,autoUpdate:i,offset:s,shift:r,flip:o,arrow:a,size:l,autoPlacement:u,hide:f,inline:c}=Rt($o),d={open:!1,autoUpdateCleanup:()=>{}},h=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let b;const y="https://www.skeleton.dev/utilities/popups";let p,g;function m(){p=document.querySelector(`[data-popup="${e.target}"]`)??document.createElement("div"),g=p.querySelector(".arrow")??document.createElement("div")}m();function v(){var O,K,x,W,G,te,ne,fe;if(!p)throw new Error(`The data-popup="${e.target}" element was not found. ${y}`);if(!t)throw new Error(`Floating UI 'computePosition' not found for data-popup="${e.target}". ${y}`);if(!s)throw new Error(`Floating UI 'offset' not found for data-popup="${e.target}". ${y}`);if(!r)throw new Error(`Floating UI 'shift' not found for data-popup="${e.target}". ${y}`);if(!o)throw new Error(`Floating UI 'flip' not found for data-popup="${e.target}". ${y}`);if(!a)throw new Error(`Floating UI 'arrow' not found for data-popup="${e.target}". ${y}`);const M=[];l&&M.push(l((O=e.middleware)==null?void 0:O.size)),u&&M.push(u((K=e.middleware)==null?void 0:K.autoPlacement)),f&&M.push(f((x=e.middleware)==null?void 0:x.hide)),c&&M.push(c((W=e.middleware)==null?void 0:W.inline)),t(n,p,{placement:e.placement??"bottom",middleware:[s(((G=e.middleware)==null?void 0:G.offset)??8),r(((te=e.middleware)==null?void 0:te.shift)??{padding:8}),o((ne=e.middleware)==null?void 0:ne.flip),a(((fe=e.middleware)==null?void 0:fe.arrow)??{element:g||null}),...M]}).then(({x:be,y:pe,placement:j,middlewareData:z})=>{if(Object.assign(p.style,{left:`${be}px`,top:`${pe}px`}),g){const{x:B,y:ie}=z.arrow,we={top:"bottom",right:"left",bottom:"top",left:"right"}[j.split("-")[0]];Object.assign(g.style,{left:B!=null?`${B}px`:"",top:ie!=null?`${ie}px`:"",right:"",bottom:"",[we]:"-4px"})}})}function w(){p&&(d.open=!0,e.state&&e.state({state:d.open}),v(),p.style.display="block",p.style.opacity="1",p.style.pointerEvents="auto",p.removeAttribute("inert"),d.autoUpdateCleanup=i(n,p,v),b=Array.from(p==null?void 0:p.querySelectorAll(h)))}function T(M){if(!p)return;const O=parseFloat(window.getComputedStyle(p).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{d.open=!1,e.state&&e.state({state:d.open}),p.style.opacity="0",p.setAttribute("inert",""),d.autoUpdateCleanup&&d.autoUpdateCleanup(),M&&M()},O)}function k(){d.open===!1?w():T()}function S(M){if(d.open===!1||n.contains(M.target))return;if(p&&p.contains(M.target)===!1){T();return}const O=e.closeQuery===void 0?"a[href], button":e.closeQuery,K=p==null?void 0:p.querySelectorAll(O);K==null||K.forEach(x=>{x.contains(M.target)&&T()})}const D=M=>{if(d.open===!1)return;const O=M.key;if(O==="Escape"){M.preventDefault(),n.focus(),T();return}b=Array.from(p==null?void 0:p.querySelectorAll(h)),d.open&&document.activeElement===n&&(O==="ArrowDown"||O==="Tab")&&h.length>0&&b.length>0&&(M.preventDefault(),b[0].focus())};switch(e.event){case"click":n.addEventListener("click",k,!0),window.addEventListener("click",S,!0);break;case"hover":n.addEventListener("mouseover",w,!0),n.addEventListener("mouseleave",()=>T(),!0);break;case"focus-blur":n.addEventListener("focus",k,!0),n.addEventListener("blur",()=>T(),!0);break;case"focus-click":n.addEventListener("focus",w,!0),window.addEventListener("click",S,!0);break;default:throw new Error(`Event value of '${e.event}' is not supported. ${y}`)}return window.addEventListener("keydown",D,!0),v(),{update(M){T(()=>{e=M,v(),m()})},destroy(){n.removeEventListener("click",k,!0),n.removeEventListener("mouseover",w,!0),n.removeEventListener("mouseleave",()=>T(),!0),n.removeEventListener("focus",k,!0),n.removeEventListener("focus",w,!0),n.removeEventListener("blur",()=>T(),!0),window.removeEventListener("click",S,!0),window.removeEventListener("keydown",D,!0)}}}const oc="drawerStore";function ac(){const n=lc();return es(oc,n)}function lc(){const{subscribe:n,set:e,update:t}=vn({});return{subscribe:n,set:e,update:t,open:i=>t(()=>({open:!0,...i})),close:()=>t(i=>(i.open=!1,i))}}const ta="modalStore";function as(){const n=Ko(ta);if(!n)throw new Error("modalStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return n}function cc(){const n=uc();return es(ta,n)}function uc(){const{subscribe:n,set:e,update:t}=vn([]);return{subscribe:n,set:e,update:t,trigger:i=>t(s=>(s.push(i),s)),close:()=>t(i=>(i.length>0&&i.shift(),i)),clear:()=>e([])}}const fc={message:"Missing Toast Message",autohide:!0,timeout:5e3},na="toastStore";function Kt(){const n=Ko(na);if(!n)throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return n}function dc(){const n=mc();return es(na,n)}function hc(){const n=Math.random();return Number(n).toString(32)}function mc(){const{subscribe:n,set:e,update:t}=vn([]),i=r=>t(o=>{if(o.length>0){const a=o.findIndex(u=>u.id===r),l=o[a];l&&(l.callback&&l.callback({id:r,status:"closed"}),l.timeoutId&&clearTimeout(l.timeoutId),o.splice(a,1))}return o});function s(r){if(r.autohide===!0)return setTimeout(()=>{i(r.id)},r.timeout)}return{subscribe:n,close:i,trigger:r=>{const o=hc();return t(a=>{r&&r.callback&&r.callback({id:o,status:"queued"}),r.hideDismiss&&(r.autohide=!0);const l={...fc,...r,id:o};return l.timeoutId=s(l),a.push(l),a}),o},freeze:r=>t(o=>(o.length>0&&clearTimeout(o[r].timeoutId),o)),unfreeze:r=>t(o=>(o.length>0&&(o[r].timeoutId=s(o[r])),o)),clear:()=>e([])}}function gc(){cc(),dc(),ac()}const Ti={};function Zs(n){return n==="local"?localStorage:sessionStorage}function fi(n,e,t){const i=(t==null?void 0:t.serializer)??JSON,s=(t==null?void 0:t.storage)??"local";function r(o,a){Zs(s).setItem(o,i.stringify(a))}if(!Ti[n]){const o=vn(e,u=>{const f=Zs(s).getItem(n);f&&u(i.parse(f));{const c=d=>{d.key===n&&u(d.newValue?i.parse(d.newValue):null)};return window.addEventListener("storage",c),()=>window.removeEventListener("storage",c)}}),{subscribe:a,set:l}=o;Ti[n]={set(u){r(n,u),l(u)},update(u){const f=u(Rt(o));r(n,f),l(f)},subscribe:a}}return Ti[n]}const pc=fi("modeOsPrefers",!1),_c=fi("modeUserPrefers",void 0),ji=fi("modeCurrent",!1);function bc(){const n=window.matchMedia("(prefers-color-scheme: light)").matches;return pc.set(n),n}function vc(n){_c.set(n)}function $s(n){const e=document.documentElement.classList,t="dark";n===!0?e.remove(t):e.add(t),ji.set(n)}function yc(){const n=document.documentElement.classList,e=localStorage.getItem("modeUserPrefers")==="false",t=!("modeUserPrefers"in localStorage),i=window.matchMedia("(prefers-color-scheme: dark)").matches;e||t&&i?n.add("dark"):n.remove("dark")}const ia="(prefers-reduced-motion: reduce)";function Ic(){return window.matchMedia(ia).matches}const ls=Jl(Ic(),n=>{{const e=i=>{n(i.matches)},t=window.matchMedia(ia);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});function wc(n,e){const t=()=>{n.dispatchEvent(new CustomEvent("copyComplete"))},i=()=>{if(typeof e=="object"){if("element"in e){const s=document.querySelector(`[data-clipboard="${e.element}"]`);if(!s)throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${e.element}"]`);Si(s.innerHTML,"text/html").then(t);return}if("input"in e){const s=document.querySelector(`[data-clipboard="${e.input}"]`);if(!s)throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${e.input}"]`);Si(s.value).then(t);return}}Si(e).then(t)};return n.addEventListener("click",i),{update(s){e=s},destroy(){n.removeEventListener("click",i)}}}async function Si(n,e="text/plain"){navigator.clipboard.write?await navigator.clipboard.write([new ClipboardItem({[e]:new Blob([n],{type:e}),"text/plain":new Blob([n],{type:"text/plain"})})]):await new Promise(t=>{t(navigator.clipboard.writeText(String(n)))})}function Ec(n,e){const t='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let i,s;function r(c){c.shiftKey&&c.code==="Tab"&&(c.preventDefault(),s.focus())}function o(c){!c.shiftKey&&c.code==="Tab"&&(c.preventDefault(),i.focus())}const a=c=>{if(e===!1)return;const d=Array.from(n.querySelectorAll(t));d.length&&(i=d[0],s=d[d.length-1],c||i.focus(),i.addEventListener("keydown",r),s.addEventListener("keydown",o))};a(!1);function l(){i&&i.removeEventListener("keydown",r),s&&s.removeEventListener("keydown",o)}const u=(c,d)=>(c.length&&(l(),a(!0)),d),f=new MutationObserver(u);return f.observe(n,{childList:!0,subtree:!0}),{update(c){e=c,c?a(!1):l()},destroy(){l(),f.disconnect()}}}function er(n,{delay:e=0,duration:t=400,easing:i=qo}={}){const s=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:r=>`opacity: ${r*s}`}}function Zt(n,{delay:e=0,duration:t=400,easing:i=ui,x:s=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,u=a.transform==="none"?"":a.transform,f=l*(1-o),[c,d]=qs(s),[h,b]=qs(r);return{delay:e,duration:t,easing:i,css:(y,p)=>`
			transform: ${u} translate(${(1-y)*c}${d}, ${(1-y)*h}${b});
			opacity: ${l-f*p}`}}function tr(n,{delay:e=0,duration:t=400,easing:i=ui,axis:s="y"}={}){const r=getComputedStyle(n),o=+r.opacity,a=s==="y"?"height":"width",l=parseFloat(r[a]),u=s==="y"?["top","bottom"]:["left","right"],f=u.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),c=parseFloat(r[`padding${f[0]}`]),d=parseFloat(r[`padding${f[1]}`]),h=parseFloat(r[`margin${f[0]}`]),b=parseFloat(r[`margin${f[1]}`]),y=parseFloat(r[`border${f[0]}Width`]),p=parseFloat(r[`border${f[1]}Width`]);return{delay:e,duration:t,easing:i,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*o};${a}: ${g*l}px;padding-${u[0]}: ${g*c}px;padding-${u[1]}: ${g*d}px;margin-${u[0]}: ${g*h}px;margin-${u[1]}: ${g*b}px;border-${u[0]}-width: ${g*y}px;border-${u[1]}-width: ${g*p}px;`}}function nr(n,{delay:e=0,duration:t=400,easing:i=ui,start:s=0,opacity:r=0}={}){const o=getComputedStyle(n),a=+o.opacity,l=o.transform==="none"?"":o.transform,u=1-s,f=a*(1-r);return{delay:e,duration:t,easing:i,css:(c,d)=>`
			transform: ${l} scale(${1-u*d});
			opacity: ${a-f*d}
		`}}function _t(n,e){const{transition:t,params:i,enabled:s}=e;return s?t(n,i):"duration"in i?t(n,{duration:0}):{duration:0}}const kc=n=>({}),ir=n=>({}),Tc=n=>({}),sr=n=>({}),Sc=n=>({}),rr=n=>({});function or(n){let e,t,i;const s=n[22].lead,r=Me(s,n,n[21],rr);return{c(){e=C("div"),r&&r.c(),this.h()},l(o){e=A(o,"DIV",{class:!0});var a=R(e);r&&r.l(a),a.forEach(I),this.h()},h(){_(e,"class",t="app-bar-slot-lead "+n[4])},m(o,a){V(o,e,a),r&&r.m(e,null),i=!0},p(o,a){r&&r.p&&(!i||a&2097152)&&Ne(r,s,o,o[21],i?Fe(s,o[21],a,Sc):Ue(o[21]),rr),(!i||a&16&&t!==(t="app-bar-slot-lead "+o[4]))&&_(e,"class",t)},i(o){i||(P(r,o),i=!0)},o(o){L(r,o),i=!1},d(o){o&&I(e),r&&r.d(o)}}}function ar(n){let e,t,i;const s=n[22].trail,r=Me(s,n,n[21],sr);return{c(){e=C("div"),r&&r.c(),this.h()},l(o){e=A(o,"DIV",{class:!0});var a=R(e);r&&r.l(a),a.forEach(I),this.h()},h(){_(e,"class",t="app-bar-slot-trail "+n[2])},m(o,a){V(o,e,a),r&&r.m(e,null),i=!0},p(o,a){r&&r.p&&(!i||a&2097152)&&Ne(r,s,o,o[21],i?Fe(s,o[21],a,Tc):Ue(o[21]),sr),(!i||a&4&&t!==(t="app-bar-slot-trail "+o[2]))&&_(e,"class",t)},i(o){i||(P(r,o),i=!0)},o(o){L(r,o),i=!1},d(o){o&&I(e),r&&r.d(o)}}}function lr(n){let e,t,i;const s=n[22].headline,r=Me(s,n,n[21],ir);return{c(){e=C("div"),r&&r.c(),this.h()},l(o){e=A(o,"DIV",{class:!0});var a=R(e);r&&r.l(a),a.forEach(I),this.h()},h(){_(e,"class",t="app-bar-row-headline "+n[5])},m(o,a){V(o,e,a),r&&r.m(e,null),i=!0},p(o,a){r&&r.p&&(!i||a&2097152)&&Ne(r,s,o,o[21],i?Fe(s,o[21],a,kc):Ue(o[21]),ir),(!i||a&32&&t!==(t="app-bar-row-headline "+o[5]))&&_(e,"class",t)},i(o){i||(P(r,o),i=!0)},o(o){L(r,o),i=!1},d(o){o&&I(e),r&&r.d(o)}}}function Cc(n){let e,t,i,s,r,o,a,l,u,f,c=n[8].lead&&or(n);const d=n[22].default,h=Me(d,n,n[21],null);let b=n[8].trail&&ar(n),y=n[8].headline&&lr(n);return{c(){e=C("div"),t=C("div"),c&&c.c(),i=U(),s=C("div"),h&&h.c(),o=U(),b&&b.c(),l=U(),y&&y.c(),this.h()},l(p){e=A(p,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var g=R(e);t=A(g,"DIV",{class:!0});var m=R(t);c&&c.l(m),i=F(m),s=A(m,"DIV",{class:!0});var v=R(s);h&&h.l(v),v.forEach(I),o=F(m),b&&b.l(m),m.forEach(I),l=F(g),y&&y.l(g),g.forEach(I),this.h()},h(){_(s,"class",r="app-bar-slot-default "+n[3]),_(t,"class",a="app-bar-row-main "+n[6]),_(e,"class",u="app-bar "+n[7]),_(e,"data-testid","app-bar"),_(e,"role","toolbar"),_(e,"aria-label",n[0]),_(e,"aria-labelledby",n[1])},m(p,g){V(p,e,g),E(e,t),c&&c.m(t,null),E(t,i),E(t,s),h&&h.m(s,null),E(t,o),b&&b.m(t,null),E(e,l),y&&y.m(e,null),f=!0},p(p,[g]){p[8].lead?c?(c.p(p,g),g&256&&P(c,1)):(c=or(p),c.c(),P(c,1),c.m(t,i)):c&&(re(),L(c,1,1,()=>{c=null}),oe()),h&&h.p&&(!f||g&2097152)&&Ne(h,d,p,p[21],f?Fe(d,p[21],g,null):Ue(p[21]),null),(!f||g&8&&r!==(r="app-bar-slot-default "+p[3]))&&_(s,"class",r),p[8].trail?b?(b.p(p,g),g&256&&P(b,1)):(b=ar(p),b.c(),P(b,1),b.m(t,null)):b&&(re(),L(b,1,1,()=>{b=null}),oe()),(!f||g&64&&a!==(a="app-bar-row-main "+p[6]))&&_(t,"class",a),p[8].headline?y?(y.p(p,g),g&256&&P(y,1)):(y=lr(p),y.c(),P(y,1),y.m(e,null)):y&&(re(),L(y,1,1,()=>{y=null}),oe()),(!f||g&128&&u!==(u="app-bar "+p[7]))&&_(e,"class",u),(!f||g&1)&&_(e,"aria-label",p[0]),(!f||g&2)&&_(e,"aria-labelledby",p[1])},i(p){f||(P(c),P(h,p),P(b),P(y),f=!0)},o(p){L(c),L(h,p),L(b),L(y),f=!1},d(p){p&&I(e),c&&c.d(),h&&h.d(p),b&&b.d(),y&&y.d()}}}const Ac="flex flex-col",Rc="grid items-center",Dc="",Pc="flex-none flex justify-between items-center",Oc="flex-auto",Lc="flex-none flex items-center space-x-4";function Mc(n,e,t){let i,s,r,o,a,l,{$$slots:u={},$$scope:f}=e;const c=ts(u);let{background:d="bg-surface-100-800-token"}=e,{border:h=""}=e,{padding:b="p-4"}=e,{shadow:y=""}=e,{spacing:p="space-y-4"}=e,{gridColumns:g="grid-cols-[auto_1fr_auto]"}=e,{gap:m="gap-4"}=e,{regionRowMain:v=""}=e,{regionRowHeadline:w=""}=e,{slotLead:T=""}=e,{slotDefault:k=""}=e,{slotTrail:S=""}=e,{label:D=""}=e,{labelledby:M=""}=e;return n.$$set=O=>{t(23,e=he(he({},e),Ie(O))),"background"in O&&t(9,d=O.background),"border"in O&&t(10,h=O.border),"padding"in O&&t(11,b=O.padding),"shadow"in O&&t(12,y=O.shadow),"spacing"in O&&t(13,p=O.spacing),"gridColumns"in O&&t(14,g=O.gridColumns),"gap"in O&&t(15,m=O.gap),"regionRowMain"in O&&t(16,v=O.regionRowMain),"regionRowHeadline"in O&&t(17,w=O.regionRowHeadline),"slotLead"in O&&t(18,T=O.slotLead),"slotDefault"in O&&t(19,k=O.slotDefault),"slotTrail"in O&&t(20,S=O.slotTrail),"label"in O&&t(0,D=O.label),"labelledby"in O&&t(1,M=O.labelledby),"$$scope"in O&&t(21,f=O.$$scope)},n.$$.update=()=>{t(7,i=`${Ac} ${d} ${h} ${p} ${b} ${y} ${e.class??""}`),n.$$.dirty&114688&&t(6,s=`${Rc} ${g} ${m} ${v}`),n.$$.dirty&131072&&t(5,r=`${Dc} ${w}`),n.$$.dirty&262144&&t(4,o=`${Pc} ${T}`),n.$$.dirty&524288&&t(3,a=`${Oc} ${k}`),n.$$.dirty&1048576&&t(2,l=`${Lc} ${S}`)},e=Ie(e),[D,M,l,a,o,r,s,i,c,d,h,b,y,p,g,m,v,w,T,k,S,f,u]}class Nc extends me{constructor(e){super(),ge(this,e,Mc,Cc,de,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const Uc=n=>({}),cr=n=>({}),Fc=n=>({}),ur=n=>({}),Bc=n=>({}),fr=n=>({}),Vc=n=>({}),dr=n=>({}),Hc=n=>({}),hr=n=>({}),jc=n=>({}),mr=n=>({});function gr(n){let e,t,i;const s=n[18].header,r=Me(s,n,n[17],mr);return{c(){e=C("header"),r&&r.c(),this.h()},l(o){e=A(o,"HEADER",{id:!0,class:!0});var a=R(e);r&&r.l(a),a.forEach(I),this.h()},h(){_(e,"id","shell-header"),_(e,"class",t="flex-none "+n[7])},m(o,a){V(o,e,a),r&&r.m(e,null),i=!0},p(o,a){r&&r.p&&(!i||a&131072)&&Ne(r,s,o,o[17],i?Fe(s,o[17],a,jc):Ue(o[17]),mr),(!i||a&128&&t!==(t="flex-none "+o[7]))&&_(e,"class",t)},i(o){i||(P(r,o),i=!0)},o(o){L(r,o),i=!1},d(o){o&&I(e),r&&r.d(o)}}}function pr(n){let e,t;const i=n[18].sidebarLeft,s=Me(i,n,n[17],hr);return{c(){e=C("aside"),s&&s.c(),this.h()},l(r){e=A(r,"ASIDE",{id:!0,class:!0});var o=R(e);s&&s.l(o),o.forEach(I),this.h()},h(){_(e,"id","sidebar-left"),_(e,"class",n[6])},m(r,o){V(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&131072)&&Ne(s,i,r,r[17],t?Fe(i,r[17],o,Hc):Ue(r[17]),hr),(!t||o&64)&&_(e,"class",r[6])},i(r){t||(P(s,r),t=!0)},o(r){L(s,r),t=!1},d(r){r&&I(e),s&&s.d(r)}}}function _r(n){let e,t,i;const s=n[18].pageHeader,r=Me(s,n,n[17],dr),o=r||zc();return{c(){e=C("header"),o&&o.c(),this.h()},l(a){e=A(a,"HEADER",{id:!0,class:!0});var l=R(e);o&&o.l(l),l.forEach(I),this.h()},h(){_(e,"id","page-header"),_(e,"class",t="flex-none "+n[4])},m(a,l){V(a,e,l),o&&o.m(e,null),i=!0},p(a,l){r&&r.p&&(!i||l&131072)&&Ne(r,s,a,a[17],i?Fe(s,a[17],l,Vc):Ue(a[17]),dr),(!i||l&16&&t!==(t="flex-none "+a[4]))&&_(e,"class",t)},i(a){i||(P(o,a),i=!0)},o(a){L(o,a),i=!1},d(a){a&&I(e),o&&o.d(a)}}}function zc(n){let e;return{c(){e=$("(slot:header)")},l(t){e=ee(t,"(slot:header)")},m(t,i){V(t,e,i)},d(t){t&&I(e)}}}function br(n){let e,t,i;const s=n[18].pageFooter,r=Me(s,n,n[17],fr),o=r||Wc();return{c(){e=C("footer"),o&&o.c(),this.h()},l(a){e=A(a,"FOOTER",{id:!0,class:!0});var l=R(e);o&&o.l(l),l.forEach(I),this.h()},h(){_(e,"id","page-footer"),_(e,"class",t="flex-none "+n[2])},m(a,l){V(a,e,l),o&&o.m(e,null),i=!0},p(a,l){r&&r.p&&(!i||l&131072)&&Ne(r,s,a,a[17],i?Fe(s,a[17],l,Bc):Ue(a[17]),fr),(!i||l&4&&t!==(t="flex-none "+a[2]))&&_(e,"class",t)},i(a){i||(P(o,a),i=!0)},o(a){L(o,a),i=!1},d(a){a&&I(e),o&&o.d(a)}}}function Wc(n){let e;return{c(){e=$("(slot:footer)")},l(t){e=ee(t,"(slot:footer)")},m(t,i){V(t,e,i)},d(t){t&&I(e)}}}function vr(n){let e,t;const i=n[18].sidebarRight,s=Me(i,n,n[17],ur);return{c(){e=C("aside"),s&&s.c(),this.h()},l(r){e=A(r,"ASIDE",{id:!0,class:!0});var o=R(e);s&&s.l(o),o.forEach(I),this.h()},h(){_(e,"id","sidebar-right"),_(e,"class",n[5])},m(r,o){V(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&131072)&&Ne(s,i,r,r[17],t?Fe(i,r[17],o,Fc):Ue(r[17]),ur),(!t||o&32)&&_(e,"class",r[5])},i(r){t||(P(s,r),t=!0)},o(r){L(s,r),t=!1},d(r){r&&I(e),s&&s.d(r)}}}function yr(n){let e,t,i;const s=n[18].footer,r=Me(s,n,n[17],cr);return{c(){e=C("footer"),r&&r.c(),this.h()},l(o){e=A(o,"FOOTER",{id:!0,class:!0});var a=R(e);r&&r.l(a),a.forEach(I),this.h()},h(){_(e,"id","shell-footer"),_(e,"class",t="flex-none "+n[1])},m(o,a){V(o,e,a),r&&r.m(e,null),i=!0},p(o,a){r&&r.p&&(!i||a&131072)&&Ne(r,s,o,o[17],i?Fe(s,o[17],a,Uc):Ue(o[17]),cr),(!i||a&2&&t!==(t="flex-none "+o[1]))&&_(e,"class",t)},i(o){i||(P(r,o),i=!0)},o(o){L(r,o),i=!1},d(o){o&&I(e),r&&r.d(o)}}}function qc(n){let e,t,i,s,r,o,a,l,u,f,c,d,h,b,y,p=n[9].header&&gr(n),g=n[9].sidebarLeft&&pr(n),m=n[9].pageHeader&&_r(n);const v=n[18].default,w=Me(v,n,n[17],null);let T=n[9].pageFooter&&br(n),k=n[9].sidebarRight&&vr(n),S=n[9].footer&&yr(n);return{c(){e=C("div"),p&&p.c(),t=U(),i=C("div"),g&&g.c(),s=U(),r=C("div"),m&&m.c(),o=U(),a=C("main"),w&&w.c(),u=U(),T&&T.c(),c=U(),k&&k.c(),d=U(),S&&S.c(),this.h()},l(D){e=A(D,"DIV",{id:!0,class:!0,"data-testid":!0});var M=R(e);p&&p.l(M),t=F(M),i=A(M,"DIV",{class:!0});var O=R(i);g&&g.l(O),s=F(O),r=A(O,"DIV",{id:!0,class:!0});var K=R(r);m&&m.l(K),o=F(K),a=A(K,"MAIN",{id:!0,class:!0});var x=R(a);w&&w.l(x),x.forEach(I),u=F(K),T&&T.l(K),K.forEach(I),c=F(O),k&&k.l(O),O.forEach(I),d=F(M),S&&S.l(M),M.forEach(I),this.h()},h(){_(a,"id","page-content"),_(a,"class",l="flex-auto "+n[3]),_(r,"id","page"),_(r,"class",f=n[0]+" "+Ir),_(i,"class","flex-auto "+Gc),_(e,"id","appShell"),_(e,"class",n[8]),_(e,"data-testid","app-shell")},m(D,M){V(D,e,M),p&&p.m(e,null),E(e,t),E(e,i),g&&g.m(i,null),E(i,s),E(i,r),m&&m.m(r,null),E(r,o),E(r,a),w&&w.m(a,null),E(r,u),T&&T.m(r,null),E(i,c),k&&k.m(i,null),E(e,d),S&&S.m(e,null),h=!0,b||(y=q(r,"scroll",n[19]),b=!0)},p(D,[M]){D[9].header?p?(p.p(D,M),M&512&&P(p,1)):(p=gr(D),p.c(),P(p,1),p.m(e,t)):p&&(re(),L(p,1,1,()=>{p=null}),oe()),D[9].sidebarLeft?g?(g.p(D,M),M&512&&P(g,1)):(g=pr(D),g.c(),P(g,1),g.m(i,s)):g&&(re(),L(g,1,1,()=>{g=null}),oe()),D[9].pageHeader?m?(m.p(D,M),M&512&&P(m,1)):(m=_r(D),m.c(),P(m,1),m.m(r,o)):m&&(re(),L(m,1,1,()=>{m=null}),oe()),w&&w.p&&(!h||M&131072)&&Ne(w,v,D,D[17],h?Fe(v,D[17],M,null):Ue(D[17]),null),(!h||M&8&&l!==(l="flex-auto "+D[3]))&&_(a,"class",l),D[9].pageFooter?T?(T.p(D,M),M&512&&P(T,1)):(T=br(D),T.c(),P(T,1),T.m(r,null)):T&&(re(),L(T,1,1,()=>{T=null}),oe()),(!h||M&1&&f!==(f=D[0]+" "+Ir))&&_(r,"class",f),D[9].sidebarRight?k?(k.p(D,M),M&512&&P(k,1)):(k=vr(D),k.c(),P(k,1),k.m(i,null)):k&&(re(),L(k,1,1,()=>{k=null}),oe()),D[9].footer?S?(S.p(D,M),M&512&&P(S,1)):(S=yr(D),S.c(),P(S,1),S.m(e,null)):S&&(re(),L(S,1,1,()=>{S=null}),oe()),(!h||M&256)&&_(e,"class",D[8])},i(D){h||(P(p),P(g),P(m),P(w,D),P(T),P(k),P(S),h=!0)},o(D){L(p),L(g),L(m),L(w,D),L(T),L(k),L(S),h=!1},d(D){D&&I(e),p&&p.d(),g&&g.d(),m&&m.d(),w&&w.d(D),T&&T.d(),k&&k.d(),S&&S.d(),b=!1,y()}}}const Kc="w-full h-full flex flex-col overflow-hidden",Gc="w-full h-full flex overflow-hidden",Ir="flex-1 overflow-x-hidden flex flex-col",xc="flex-none overflow-x-hidden overflow-y-auto",Jc="flex-none overflow-x-hidden overflow-y-auto";function Yc(n,e,t){let i,s,r,o,a,l,u,f,{$$slots:c={},$$scope:d}=e;const h=ts(c);let{regionPage:b=""}=e,{slotHeader:y="z-10"}=e,{slotSidebarLeft:p="w-auto"}=e,{slotSidebarRight:g="w-auto"}=e,{slotPageHeader:m=""}=e,{slotPageContent:v=""}=e,{slotPageFooter:w=""}=e,{slotFooter:T=""}=e;function k(S){se.call(this,n,S)}return n.$$set=S=>{t(20,e=he(he({},e),Ie(S))),"regionPage"in S&&t(0,b=S.regionPage),"slotHeader"in S&&t(10,y=S.slotHeader),"slotSidebarLeft"in S&&t(11,p=S.slotSidebarLeft),"slotSidebarRight"in S&&t(12,g=S.slotSidebarRight),"slotPageHeader"in S&&t(13,m=S.slotPageHeader),"slotPageContent"in S&&t(14,v=S.slotPageContent),"slotPageFooter"in S&&t(15,w=S.slotPageFooter),"slotFooter"in S&&t(16,T=S.slotFooter),"$$scope"in S&&t(17,d=S.$$scope)},n.$$.update=()=>{t(8,i=`${Kc} ${e.class??""}`),n.$$.dirty&1024&&t(7,s=`${y}`),n.$$.dirty&2048&&t(6,r=`${xc} ${p}`),n.$$.dirty&4096&&t(5,o=`${Jc} ${g}`),n.$$.dirty&8192&&t(4,a=`${m}`),n.$$.dirty&16384&&t(3,l=`${v}`),n.$$.dirty&32768&&t(2,u=`${w}`),n.$$.dirty&65536&&t(1,f=`${T}`)},e=Ie(e),[b,f,u,l,a,o,r,s,i,h,y,p,g,m,v,w,T,d,c,k]}class Xc extends me{constructor(e){super(),ge(this,e,Yc,qc,de,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function wr(n,e,t){const i=n.slice();return i[34]=e[t],i}function Qc(n){let e,t,i;return{c(){e=C("div"),t=$(n[0]),this.h()},l(s){e=A(s,"DIV",{class:!0});var r=R(e);t=ee(r,n[0]),r.forEach(I),this.h()},h(){_(e,"class",i="autocomplete-empty "+n[7])},m(s,r){V(s,e,r),E(e,t)},p(s,r){r[0]&1&&le(t,s[0]),r[0]&128&&i!==(i="autocomplete-empty "+s[7])&&_(e,"class",i)},i:ce,o:ce,d(s){s&&I(e)}}}function Zc(n){let e,t,i=[],s=new Map,r,o,a,l=Te(n[6].slice(0,n[13]));const u=f=>f[34];for(let f=0;f<l.length;f+=1){let c=wr(n,l,f),d=u(c);s.set(d,i[f]=Er(d,c))}return{c(){e=C("nav"),t=C("ul");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=A(f,"NAV",{class:!0});var c=R(e);t=A(c,"UL",{class:!0});var d=R(t);for(let h=0;h<i.length;h+=1)i[h].l(d);d.forEach(I),c.forEach(I),this.h()},h(){_(t,"class",r="autocomplete-list "+n[10]),_(e,"class",o="autocomplete-nav "+n[11])},m(f,c){V(f,e,c),E(e,t);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(t,null);a=!0},p(f,c){c[0]&25458&&(l=Te(f[6].slice(0,f[13])),re(),i=rs(i,c,u,1,f,l,s,t,Yl,Er,null,wr),oe()),(!a||c[0]&1024&&r!==(r="autocomplete-list "+f[10]))&&_(t,"class",r),(!a||c[0]&2048&&o!==(o="autocomplete-nav "+f[11]))&&_(e,"class",o)},i(f){if(!a){for(let c=0;c<l.length;c+=1)P(i[c]);a=!0}},o(f){for(let c=0;c<i.length;c+=1)L(i[c]);a=!1},d(f){f&&I(e);for(let c=0;c<i.length;c+=1)i[c].d()}}}function Er(n,e){let t,i,s,r=e[34].label+"",o,a,l,u,f,c,d,h;function b(){return e[28](e[34])}return{key:n,first:null,c(){t=C("li"),i=C("button"),s=new Ht(!1),a=U(),this.h()},l(y){t=A(y,"LI",{class:!0});var p=R(t);i=A(p,"BUTTON",{class:!0,type:!0});var g=R(i);s=jt(g,!1),g.forEach(I),a=F(p),p.forEach(I),this.h()},h(){s.a=null,_(i,"class",o="autocomplete-button "+e[8]),_(i,"type","button"),_(t,"class",l="autocomplete-item "+e[9]),this.first=t},m(y,p){V(y,t,p),E(t,i),s.m(r,i),E(t,a),c=!0,d||(h=[q(i,"click",b),q(i,"click",e[26]),q(i,"keypress",e[27])],d=!0)},p(y,p){e=y,(!c||p[0]&8256)&&r!==(r=e[34].label+"")&&s.p(r),(!c||p[0]&256&&o!==(o="autocomplete-button "+e[8]))&&_(i,"class",o),(!c||p[0]&512&&l!==(l="autocomplete-item "+e[9]))&&_(t,"class",l)},i(y){c||(y&&It(()=>{c&&(f&&f.end(1),u=is(t,_t,{transition:e[2],params:e[3],enabled:e[1]}),u.start())}),c=!0)},o(y){u&&u.invalidate(),y&&(f=ss(t,_t,{transition:e[4],params:e[5],enabled:e[1]})),c=!1},d(y){y&&I(t),y&&f&&f.end(),d=!1,Be(h)}}}function $c(n){let e,t,i,s,r;const o=[Zc,Qc],a=[];function l(u,f){return u[6].length>0?0:1}return t=l(n),i=a[t]=o[t](n),{c(){e=C("div"),i.c(),this.h()},l(u){e=A(u,"DIV",{class:!0,"data-testid":!0});var f=R(e);i.l(f),f.forEach(I),this.h()},h(){_(e,"class",s="autocomplete "+n[12]),_(e,"data-testid","autocomplete")},m(u,f){V(u,e,f),a[t].m(e,null),r=!0},p(u,f){let c=t;t=l(u),t===c?a[t].p(u,f):(re(),L(a[c],1,1,()=>{a[c]=null}),oe(),i=a[t],i?i.p(u,f):(i=a[t]=o[t](u),i.c()),P(i,1),i.m(e,null)),(!r||f[0]&4096&&s!==(s="autocomplete "+u[12]))&&_(e,"class",s)},i(u){r||(P(i),r=!0)},o(u){L(i),r=!1},d(u){u&&I(e),a[t].d()}}}function eu(n,e,t){let i,s,r,o,a,l,u,f,c,d;ke(n,ls,j=>t(29,d=j));const h=li();let{input:b=void 0}=e,{options:y=[]}=e,{limit:p=void 0}=e,{allowlist:g=[]}=e,{denylist:m=[]}=e,{emptyState:v="No Results Found."}=e,{regionNav:w=""}=e,{regionList:T="list-nav"}=e,{regionItem:k=""}=e,{regionButton:S="w-full"}=e,{regionEmpty:D="text-center"}=e,{transitions:M=!d}=e,{transitionIn:O=tr}=e,{transitionInParams:K={duration:200}}=e,{transitionOut:x=tr}=e,{transitionOutParams:W={duration:200}}=e;function G(j,z){let B=[...y];j.length&&(B=B.filter(ie=>j.includes(ie.value))),z.length&&(B=B.filter(ie=>!z.includes(ie.value))),!j.length&&!z.length&&(B=y),t(25,i=B)}function te(){let j=[...i];return j=j.filter(z=>{const B=String(b).toLowerCase().trim();if(JSON.stringify([z.label,z.value,z.keywords]).toLowerCase().includes(B))return z}),j}function ne(j){h("selection",j)}function fe(j){se.call(this,n,j)}function be(j){se.call(this,n,j)}const pe=j=>ne(j);return n.$$set=j=>{t(33,e=he(he({},e),Ie(j))),"input"in j&&t(15,b=j.input),"options"in j&&t(16,y=j.options),"limit"in j&&t(17,p=j.limit),"allowlist"in j&&t(18,g=j.allowlist),"denylist"in j&&t(19,m=j.denylist),"emptyState"in j&&t(0,v=j.emptyState),"regionNav"in j&&t(20,w=j.regionNav),"regionList"in j&&t(21,T=j.regionList),"regionItem"in j&&t(22,k=j.regionItem),"regionButton"in j&&t(23,S=j.regionButton),"regionEmpty"in j&&t(24,D=j.regionEmpty),"transitions"in j&&t(1,M=j.transitions),"transitionIn"in j&&t(2,O=j.transitionIn),"transitionInParams"in j&&t(3,K=j.transitionInParams),"transitionOut"in j&&t(4,x=j.transitionOut),"transitionOutParams"in j&&t(5,W=j.transitionOutParams)},n.$$.update=()=>{n.$$.dirty[0]&65536&&t(25,i=y),n.$$.dirty[0]&786432&&G(g,m),n.$$.dirty[0]&33587200&&t(6,s=b?te():i),n.$$.dirty[0]&131136&&t(13,r=p!==void 0?p:s.length),t(12,o=`${e.class??""}`),n.$$.dirty[0]&1048576&&t(11,a=`${w}`),n.$$.dirty[0]&2097152&&t(10,l=`${T}`),n.$$.dirty[0]&4194304&&t(9,u=`${k}`),n.$$.dirty[0]&8388608&&t(8,f=`${S}`),n.$$.dirty[0]&16777216&&t(7,c=`${D}`)},e=Ie(e),[v,M,O,K,x,W,s,c,f,u,l,a,o,r,ne,b,y,p,g,m,w,T,k,S,D,i,fe,be,pe]}class tu extends me{constructor(e){super(),ge(this,e,eu,$c,de,{input:15,options:16,limit:17,allowlist:18,denylist:19,emptyState:0,regionNav:20,regionList:21,regionItem:22,regionButton:23,regionEmpty:24,transitions:1,transitionIn:2,transitionInParams:3,transitionOut:4,transitionOutParams:5},null,[-1,-1])}}function nu(n){let e,t,i=String(n[1]).substring(0,2).toUpperCase()+"",s,r;return{c(){e=xn("svg"),t=xn("text"),s=$(i),this.h()},l(o){e=Jn(o,"svg",{class:!0,viewBox:!0});var a=R(e);t=Jn(a,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var l=R(t);s=ee(l,i),l.forEach(I),a.forEach(I),this.h()},h(){_(t,"x","50%"),_(t,"y","50%"),_(t,"dominant-baseline","central"),_(t,"text-anchor","middle"),_(t,"font-weight","bold"),_(t,"font-size",150),_(t,"class",r="avatar-text "+n[2]),_(e,"class","avatar-initials w-full h-full"),_(e,"viewBox","0 0 512 512")},m(o,a){V(o,e,a),E(e,t),E(t,s)},p(o,a){a&2&&i!==(i=String(o[1]).substring(0,2).toUpperCase()+"")&&le(s,i),a&4&&r!==(r="avatar-text "+o[2])&&_(t,"class",r)},d(o){o&&I(e)}}}function iu(n){let e,t,i,s,r,o,a,l,u=[{class:t="avatar-image "+ou},{style:i=n[8].style??""},{src:s=n[0]},{alt:r=n[8].alt||""},n[7]()],f={};for(let c=0;c<u.length;c+=1)f=he(f,u[c]);return{c(){e=C("img"),this.h()},l(c){e=A(c,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){Xt(e,f)},m(c,d){V(c,e,d),a||(l=[_n(o=n[4].call(null,e,n[5])),q(e,"error",n[19])],a=!0)},p(c,d){Xt(e,f=fn(u,[{class:t},d&256&&i!==(i=c[8].style??"")&&{style:i},d&1&&!un(e.src,s=c[0])&&{src:s},d&256&&r!==(r=c[8].alt||"")&&{alt:r},c[7]()])),o&&ci(o.update)&&d&32&&o.update.call(null,c[5])},d(c){c&&I(e),a=!1,Be(l)}}}function su(n){let e,t,i,s;function r(l,u){return l[0]?iu:nu}let o=r(n),a=o(n);return{c(){e=C("figure"),a.c(),this.h()},l(l){e=A(l,"FIGURE",{class:!0,"data-testid":!0});var u=R(e);a.l(u),u.forEach(I),this.h()},h(){_(e,"class",t="avatar "+n[6]),_(e,"data-testid","avatar")},m(l,u){V(l,e,u),a.m(e,null),i||(s=[q(e,"click",n[15]),q(e,"keydown",n[16]),q(e,"keyup",n[17]),q(e,"keypress",n[18])],i=!0)},p(l,[u]){o===(o=r(l))&&a?a.p(l,u):(a.d(1),a=o(l),a&&(a.c(),a.m(e,null))),u&64&&t!==(t="avatar "+l[6])&&_(e,"class",t)},i:ce,o:ce,d(l){l&&I(e),a.d(),i=!1,Be(s)}}}let ru="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",ou="w-full h-full object-cover";function au(n,e,t){let i;const s=["initials","fill","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let r=Yt(e,s),{initials:o="AB"}=e,{fill:a="fill-token"}=e,{src:l=""}=e,{fallback:u=""}=e,{action:f=()=>{}}=e,{actionParams:c=""}=e,{background:d="bg-surface-400-500-token"}=e,{width:h="w-16"}=e,{border:b=""}=e,{rounded:y="rounded-full"}=e,{shadow:p=""}=e,{cursor:g=""}=e;function m(){return delete r.class,r}function v(D){se.call(this,n,D)}function w(D){se.call(this,n,D)}function T(D){se.call(this,n,D)}function k(D){se.call(this,n,D)}const S=()=>t(0,l=u);return n.$$set=D=>{t(8,e=he(he({},e),Ie(D))),t(20,r=Yt(e,s)),"initials"in D&&t(1,o=D.initials),"fill"in D&&t(2,a=D.fill),"src"in D&&t(0,l=D.src),"fallback"in D&&t(3,u=D.fallback),"action"in D&&t(4,f=D.action),"actionParams"in D&&t(5,c=D.actionParams),"background"in D&&t(9,d=D.background),"width"in D&&t(10,h=D.width),"border"in D&&t(11,b=D.border),"rounded"in D&&t(12,y=D.rounded),"shadow"in D&&t(13,p=D.shadow),"cursor"in D&&t(14,g=D.cursor)},n.$$.update=()=>{t(6,i=`${ru} ${d} ${h} ${b} ${y} ${p} ${g} ${e.class??""}`)},e=Ie(e),[l,o,a,u,f,c,i,m,e,d,h,b,y,p,g,v,w,T,k,S]}class sa extends me{constructor(e){super(),ge(this,e,au,su,de,{initials:1,fill:2,src:0,fallback:3,action:4,actionParams:5,background:9,width:10,border:11,rounded:12,shadow:13,cursor:14})}}function ra(n,{from:e,to:t},i={}){const s=getComputedStyle(n),r=s.transform==="none"?"":s.transform,[o,a]=s.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),u=e.top+e.height*a/t.height-(t.top+a),{delay:f=0,duration:c=h=>Math.sqrt(h)*120,easing:d=ui}=i;return{delay:f,duration:ci(c)?c(Math.sqrt(l*l+u*u)):c,easing:d,css:(h,b)=>{const y=b*l,p=b*u,g=h+b*e.width/t.width,m=h+b*e.height/t.height;return`transform: ${r} translate(${y}px, ${p}px) scale(${g}, ${m});`}}}function kr(n){let e,t;const i=n[22].default,s=Me(i,n,n[21],null);return{c(){e=C("div"),s&&s.c(),this.h()},l(r){e=A(r,"DIV",{class:!0});var o=R(e);s&&s.l(o),o.forEach(I),this.h()},h(){_(e,"class","slide-toggle-text ml-3")},m(r,o){V(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o[0]&2097152)&&Ne(s,i,r,r[21],t?Fe(i,r[21],o,null):Ue(r[21]),null)},i(r){t||(P(s,r),t=!0)},o(r){L(s,r),t=!1},d(r){r&&I(e),s&&s.d(r)}}}function lu(n){let e,t,i,s,r,o,a,l,u,f,c,d,h,b,y,p=[{type:"checkbox"},{class:"slide-toggle-input hidden"},{name:n[1]},n[8](),{disabled:s=n[9].disabled}],g={};for(let v=0;v<p.length;v+=1)g=he(g,p[v]);let m=n[10].default&&kr(n);return{c(){e=C("div"),t=C("label"),i=C("input"),r=U(),o=C("div"),a=C("div"),f=U(),m&&m.c(),this.h()},l(v){e=A(v,"DIV",{id:!0,class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-checked":!0,tabindex:!0});var w=R(e);t=A(w,"LABEL",{class:!0});var T=R(t);i=A(T,"INPUT",{type:!0,class:!0,name:!0}),r=F(T),o=A(T,"DIV",{class:!0});var k=R(o);a=A(k,"DIV",{class:!0}),R(a).forEach(I),k.forEach(I),f=F(T),m&&m.l(T),T.forEach(I),w.forEach(I),this.h()},h(){Xt(i,g),_(a,"class",l="slide-toggle-thumb "+n[3]),pt(a,"cursor-not-allowed",n[9].disabled),_(o,"class",u="slide-toggle-track "+n[4]),pt(o,"cursor-not-allowed",n[9].disabled),_(t,"class",c="slide-toggle-label "+n[5]),_(e,"id",n[2]),_(e,"class",d="slide-toggle "+n[6]),_(e,"data-testid","slide-toggle"),_(e,"role","switch"),_(e,"aria-label",n[2]),_(e,"aria-checked",n[0]),_(e,"tabindex","0")},m(v,w){V(v,e,w),E(e,t),E(t,i),i.autofocus&&i.focus(),i.checked=n[0],E(t,r),E(t,o),E(o,a),E(t,f),m&&m.m(t,null),h=!0,b||(y=[q(i,"change",n[31]),q(i,"click",n[23]),q(i,"keydown",n[24]),q(i,"keyup",n[25]),q(i,"keypress",n[26]),q(i,"mouseover",n[27]),q(i,"change",n[28]),q(i,"focus",n[29]),q(i,"blur",n[30]),q(e,"keydown",n[7])],b=!0)},p(v,w){Xt(i,g=fn(p,[{type:"checkbox"},{class:"slide-toggle-input hidden"},(!h||w[0]&2)&&{name:v[1]},v[8](),(!h||w[0]&512&&s!==(s=v[9].disabled))&&{disabled:s}])),w[0]&1&&(i.checked=v[0]),(!h||w[0]&8&&l!==(l="slide-toggle-thumb "+v[3]))&&_(a,"class",l),(!h||w[0]&520)&&pt(a,"cursor-not-allowed",v[9].disabled),(!h||w[0]&16&&u!==(u="slide-toggle-track "+v[4]))&&_(o,"class",u),(!h||w[0]&528)&&pt(o,"cursor-not-allowed",v[9].disabled),v[10].default?m?(m.p(v,w),w[0]&1024&&P(m,1)):(m=kr(v),m.c(),P(m,1),m.m(t,null)):m&&(re(),L(m,1,1,()=>{m=null}),oe()),(!h||w[0]&32&&c!==(c="slide-toggle-label "+v[5]))&&_(t,"class",c),(!h||w[0]&4)&&_(e,"id",v[2]),(!h||w[0]&64&&d!==(d="slide-toggle "+v[6]))&&_(e,"class",d),(!h||w[0]&4)&&_(e,"aria-label",v[2]),(!h||w[0]&1)&&_(e,"aria-checked",v[0])},i(v){h||(P(m),h=!0)},o(v){L(m),h=!1},d(v){v&&I(e),m&&m.d(),b=!1,Be(y)}}}const cu="inline-block",uu="unstyled flex items-center",fu="flex transition-all duration-[200ms] cursor-pointer",du="w-[50%] h-full scale-[0.8] transition-all duration-[200ms] shadow";function hu(n,e,t){let i,s,r,o,a,l,u,f;const c=["name","checked","size","background","active","border","rounded","label"];let d=Yt(e,c),{$$slots:h={},$$scope:b}=e;const y=ts(h),p=li();let{name:g}=e,{checked:m=!1}=e,{size:v="md"}=e,{background:w="bg-surface-400 dark:bg-surface-700"}=e,{active:T="bg-surface-900 dark:bg-surface-300"}=e,{border:k=""}=e,{rounded:S="rounded-full"}=e,{label:D=""}=e,M;switch(v){case"sm":M="w-12 h-6";break;case"lg":M="w-20 h-10";break;default:M="w-16 h-8"}function O(z){["Enter","Space"].includes(z.code)&&(z.preventDefault(),p("keyup",z),z.currentTarget.firstChild.click())}function K(){return delete d.class,d}function x(z){se.call(this,n,z)}function W(z){se.call(this,n,z)}function G(z){se.call(this,n,z)}function te(z){se.call(this,n,z)}function ne(z){se.call(this,n,z)}function fe(z){se.call(this,n,z)}function be(z){se.call(this,n,z)}function pe(z){se.call(this,n,z)}function j(){m=this.checked,t(0,m)}return n.$$set=z=>{t(9,e=he(he({},e),Ie(z))),t(33,d=Yt(e,c)),"name"in z&&t(1,g=z.name),"checked"in z&&t(0,m=z.checked),"size"in z&&t(11,v=z.size),"background"in z&&t(12,w=z.background),"active"in z&&t(13,T=z.active),"border"in z&&t(14,k=z.border),"rounded"in z&&t(15,S=z.rounded),"label"in z&&t(2,D=z.label),"$$scope"in z&&t(21,b=z.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&12289&&t(19,i=m?T:`${w} cursor-pointer`),n.$$.dirty[0]&1&&t(18,s=m?"bg-white/75":"bg-white"),n.$$.dirty[0]&1&&t(17,r=m?"translate-x-full":""),t(20,o=e.disabled===!0?"opacity-50":"hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer"),t(6,a=`${cu} ${S} ${o} ${e.class??""}`),n.$$.dirty[0]&638976&&t(4,u=`${fu} ${k} ${S} ${M} ${i}`),n.$$.dirty[0]&425984&&t(3,f=`${du} ${S} ${s} ${r}`)},t(5,l=`${uu}`),e=Ie(e),[m,g,D,f,u,l,a,O,K,e,y,v,w,T,k,S,M,r,s,i,o,b,h,x,W,G,te,ne,fe,be,pe,j]}class mu extends me{constructor(e){super(),ge(this,e,hu,lu,de,{name:1,checked:0,size:11,background:12,active:13,border:14,rounded:15,label:2},null,[-1,-1])}}function Tr(n){let e=n[13],t,i,s=Dr(n);return{c(){s.c(),t=ye()},l(r){s.l(r),t=ye()},m(r,o){s.m(r,o),V(r,t,o),i=!0},p(r,o){o[0]&8192&&de(e,e=r[13])?(re(),L(s,1,1,ce),oe(),s=Dr(r),s.c(),P(s,1),s.m(t.parentNode,t)):s.p(r,o)},i(r){i||(P(s),i=!0)},o(r){L(s),i=!1},d(r){r&&I(t),s.d(r)}}}function gu(n){var u,f;let e,t,i,s,r;const o=[(u=n[15])==null?void 0:u.props,{parent:n[16]}];var a=(f=n[15])==null?void 0:f.ref;function l(c,d){var b;let h={$$slots:{default:[_u]},$$scope:{ctx:c}};if(d!==void 0&&d[0]&98304)h=fn(o,[d[0]&32768&&Ys((b=c[15])==null?void 0:b.props),d[0]&65536&&{parent:c[16]}]);else for(let y=0;y<o.length;y+=1)h=he(h,o[y]);return{props:h}}return a&&(t=Ks(a,l(n))),{c(){e=C("div"),t&&Y(t.$$.fragment),this.h()},l(c){e=A(c,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var d=R(e);t&&Z(t.$$.fragment,d),d.forEach(I),this.h()},h(){var c;_(e,"class",i="modal contents "+(((c=n[13][0])==null?void 0:c.modalClasses)??"")),_(e,"data-testid","modal-component"),_(e,"role","dialog"),_(e,"aria-modal","true"),_(e,"aria-label",s=n[13][0].title??"")},m(c,d){V(c,e,d),t&&X(t,e,null),r=!0},p(c,d){var h,b,y;if(d[0]&32768&&a!==(a=(h=c[15])==null?void 0:h.ref)){if(t){re();const p=t;L(p.$$.fragment,1,0,()=>{Q(p,1)}),oe()}a?(t=Ks(a,l(c,d)),Y(t.$$.fragment),P(t.$$.fragment,1),X(t,e,null)):t=null}else if(a){const p=d[0]&98304?fn(o,[d[0]&32768&&Ys((b=c[15])==null?void 0:b.props),d[0]&65536&&{parent:c[16]}]):{};d[0]&32768|d[1]&65536&&(p.$$scope={dirty:d,ctx:c}),t.$set(p)}(!r||d[0]&8192&&i!==(i="modal contents "+(((y=c[13][0])==null?void 0:y.modalClasses)??"")))&&_(e,"class",i),(!r||d[0]&8192&&s!==(s=c[13][0].title??""))&&_(e,"aria-label",s)},i(c){r||(t&&P(t.$$.fragment,c),r=!0)},o(c){t&&L(t.$$.fragment,c),r=!1},d(c){c&&I(e),t&&Q(t)}}}function pu(n){var h,b,y,p;let e,t,i,s,r,o,a=((h=n[13][0])==null?void 0:h.title)&&Cr(n),l=((b=n[13][0])==null?void 0:b.body)&&Ar(n),u=((y=n[13][0])==null?void 0:y.image)&&typeof((p=n[13][0])==null?void 0:p.image)=="string"&&Rr(n);function f(g,m){if(g[13][0].type==="alert")return yu;if(g[13][0].type==="confirm")return vu;if(g[13][0].type==="prompt")return bu}let c=f(n),d=c&&c(n);return{c(){e=C("div"),a&&a.c(),t=U(),l&&l.c(),i=U(),u&&u.c(),s=U(),d&&d.c(),this.h()},l(g){e=A(g,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var m=R(e);a&&a.l(m),t=F(m),l&&l.l(m),i=F(m),u&&u.l(m),s=F(m),d&&d.l(m),m.forEach(I),this.h()},h(){_(e,"class",r="modal "+n[17]),_(e,"data-testid","modal"),_(e,"role","dialog"),_(e,"aria-modal","true"),_(e,"aria-label",o=n[13][0].title??"")},m(g,m){V(g,e,m),a&&a.m(e,null),E(e,t),l&&l.m(e,null),E(e,i),u&&u.m(e,null),E(e,s),d&&d.m(e,null)},p(g,m){var v,w,T,k;(v=g[13][0])!=null&&v.title?a?a.p(g,m):(a=Cr(g),a.c(),a.m(e,t)):a&&(a.d(1),a=null),(w=g[13][0])!=null&&w.body?l?l.p(g,m):(l=Ar(g),l.c(),l.m(e,i)):l&&(l.d(1),l=null),(T=g[13][0])!=null&&T.image&&typeof((k=g[13][0])==null?void 0:k.image)=="string"?u?u.p(g,m):(u=Rr(g),u.c(),u.m(e,s)):u&&(u.d(1),u=null),c===(c=f(g))&&d?d.p(g,m):(d&&d.d(1),d=c&&c(g),d&&(d.c(),d.m(e,null))),m[0]&131072&&r!==(r="modal "+g[17])&&_(e,"class",r),m[0]&8192&&o!==(o=g[13][0].title??"")&&_(e,"aria-label",o)},i:ce,o:ce,d(g){g&&I(e),a&&a.d(),l&&l.d(),u&&u.d(),d&&d.d()}}}function Sr(n){var s;let e,t=((s=n[15])==null?void 0:s.slot)+"",i;return{c(){e=new Ht(!1),i=ye(),this.h()},l(r){e=jt(r,!1),i=ye(),this.h()},h(){e.a=i},m(r,o){e.m(t,r,o),V(r,i,o)},p(r,o){var a;o[0]&32768&&t!==(t=((a=r[15])==null?void 0:a.slot)+"")&&e.p(t)},d(r){r&&(I(i),e.d())}}}function _u(n){var i;let e,t=((i=n[15])==null?void 0:i.slot)&&Sr(n);return{c(){t&&t.c(),e=ye()},l(s){t&&t.l(s),e=ye()},m(s,r){t&&t.m(s,r),V(s,e,r)},p(s,r){var o;(o=s[15])!=null&&o.slot?t?t.p(s,r):(t=Sr(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(s){s&&I(e),t&&t.d(s)}}}function Cr(n){let e,t,i=n[13][0].title+"",s;return{c(){e=C("header"),t=new Ht(!1),this.h()},l(r){e=A(r,"HEADER",{class:!0});var o=R(e);t=jt(o,!1),o.forEach(I),this.h()},h(){t.a=null,_(e,"class",s="modal-header "+n[5])},m(r,o){V(r,e,o),t.m(i,e)},p(r,o){o[0]&8192&&i!==(i=r[13][0].title+"")&&t.p(i),o[0]&32&&s!==(s="modal-header "+r[5])&&_(e,"class",s)},d(r){r&&I(e)}}}function Ar(n){let e,t,i=n[13][0].body+"",s;return{c(){e=C("article"),t=new Ht(!1),this.h()},l(r){e=A(r,"ARTICLE",{class:!0});var o=R(e);t=jt(o,!1),o.forEach(I),this.h()},h(){t.a=null,_(e,"class",s="modal-body "+n[6])},m(r,o){V(r,e,o),t.m(i,e)},p(r,o){o[0]&8192&&i!==(i=r[13][0].body+"")&&t.p(i),o[0]&64&&s!==(s="modal-body "+r[6])&&_(e,"class",s)},d(r){r&&I(e)}}}function Rr(n){let e,t;return{c(){e=C("img"),this.h()},l(i){e=A(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){var i;_(e,"class","modal-image "+Tu),un(e.src,t=(i=n[13][0])==null?void 0:i.image)||_(e,"src",t),_(e,"alt","Modal")},m(i,s){V(i,e,s)},p(i,s){var r;s[0]&8192&&!un(e.src,t=(r=i[13][0])==null?void 0:r.image)&&_(e,"src",t)},d(i){i&&I(e)}}}function bu(n){let e,t,i,s,r,o,a,l,u,f,c,d,h,b,y=[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},n[13][0].valueAttr],p={};for(let g=0;g<y.length;g+=1)p=he(p,y[g]);return{c(){e=C("form"),t=C("input"),i=U(),s=C("footer"),r=C("button"),o=$(n[0]),l=U(),u=C("button"),f=$(n[2]),this.h()},l(g){e=A(g,"FORM",{class:!0});var m=R(e);t=A(m,"INPUT",{class:!0,name:!0,type:!0}),i=F(m),s=A(m,"FOOTER",{class:!0});var v=R(s);r=A(v,"BUTTON",{type:!0,class:!0});var w=R(r);o=ee(w,n[0]),w.forEach(I),l=F(v),u=A(v,"BUTTON",{type:!0,class:!0});var T=R(u);f=ee(T,n[2]),T.forEach(I),v.forEach(I),m.forEach(I),this.h()},h(){Xt(t,p),_(r,"type","button"),_(r,"class",a="btn "+n[3]),_(u,"type","submit"),_(u,"class",c="btn "+n[4]),_(s,"class",d="modal-footer "+n[7]),_(e,"class","space-y-4")},m(g,m){V(g,e,m),E(e,t),t.autofocus&&t.focus(),nt(t,n[14]),E(e,i),E(e,s),E(s,r),E(r,o),E(s,l),E(s,u),E(u,f),h||(b=[q(t,"input",n[41]),q(r,"click",n[23]),q(e,"submit",n[25])],h=!0)},p(g,m){Xt(t,p=fn(y,[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},m[0]&8192&&g[13][0].valueAttr])),m[0]&16384&&t.value!==g[14]&&nt(t,g[14]),m[0]&1&&le(o,g[0]),m[0]&8&&a!==(a="btn "+g[3])&&_(r,"class",a),m[0]&4&&le(f,g[2]),m[0]&16&&c!==(c="btn "+g[4])&&_(u,"class",c),m[0]&128&&d!==(d="modal-footer "+g[7])&&_(s,"class",d)},d(g){g&&I(e),h=!1,Be(b)}}}function vu(n){let e,t,i,s,r,o,a,l,u,f,c;return{c(){e=C("footer"),t=C("button"),i=$(n[0]),r=U(),o=C("button"),a=$(n[1]),this.h()},l(d){e=A(d,"FOOTER",{class:!0});var h=R(e);t=A(h,"BUTTON",{type:!0,class:!0});var b=R(t);i=ee(b,n[0]),b.forEach(I),r=F(h),o=A(h,"BUTTON",{type:!0,class:!0});var y=R(o);a=ee(y,n[1]),y.forEach(I),h.forEach(I),this.h()},h(){_(t,"type","button"),_(t,"class",s="btn "+n[3]),_(o,"type","button"),_(o,"class",l="btn "+n[4]),_(e,"class",u="modal-footer "+n[7])},m(d,h){V(d,e,h),E(e,t),E(t,i),E(e,r),E(e,o),E(o,a),f||(c=[q(t,"click",n[23]),q(o,"click",n[24])],f=!0)},p(d,h){h[0]&1&&le(i,d[0]),h[0]&8&&s!==(s="btn "+d[3])&&_(t,"class",s),h[0]&2&&le(a,d[1]),h[0]&16&&l!==(l="btn "+d[4])&&_(o,"class",l),h[0]&128&&u!==(u="modal-footer "+d[7])&&_(e,"class",u)},d(d){d&&I(e),f=!1,Be(c)}}}function yu(n){let e,t,i,s,r,o,a;return{c(){e=C("footer"),t=C("button"),i=$(n[0]),this.h()},l(l){e=A(l,"FOOTER",{class:!0});var u=R(e);t=A(u,"BUTTON",{type:!0,class:!0});var f=R(t);i=ee(f,n[0]),f.forEach(I),u.forEach(I),this.h()},h(){_(t,"type","button"),_(t,"class",s="btn "+n[3]),_(e,"class",r="modal-footer "+n[7])},m(l,u){V(l,e,u),E(e,t),E(t,i),o||(a=q(t,"click",n[23]),o=!0)},p(l,u){u[0]&1&&le(i,l[0]),u[0]&8&&s!==(s="btn "+l[3])&&_(t,"class",s),u[0]&128&&r!==(r="modal-footer "+l[7])&&_(e,"class",r)},d(l){l&&I(e),o=!1,a()}}}function Dr(n){let e,t,i,s,r,o,a,l,u,f,c,d;const h=[pu,gu],b=[];function y(p,g){return p[13][0].type!=="component"?0:1}return i=y(n),s=b[i]=h[i](n),{c(){e=C("div"),t=C("div"),s.c(),this.h()},l(p){e=A(p,"DIV",{class:!0,"data-testid":!0});var g=R(e);t=A(g,"DIV",{class:!0});var m=R(t);s.l(m),m.forEach(I),g.forEach(I),this.h()},h(){_(t,"class",r="modal-transition "+n[18]),_(e,"class",l="modal-backdrop "+n[19]),_(e,"data-testid","modal-backdrop")},m(p,g){V(p,e,g),E(e,t),b[i].m(t,null),f=!0,c||(d=[q(e,"mousedown",n[21]),q(e,"mouseup",n[22]),q(e,"touchstart",n[39],{passive:!0}),q(e,"touchend",n[40],{passive:!0}),_n(Ec.call(null,e,!0))],c=!0)},p(p,g){n=p;let m=i;i=y(n),i===m?b[i].p(n,g):(re(),L(b[m],1,1,()=>{b[m]=null}),oe(),s=b[i],s?s.p(n,g):(s=b[i]=h[i](n),s.c()),P(s,1),s.m(t,null)),(!f||g[0]&262144&&r!==(r="modal-transition "+n[18]))&&_(t,"class",r),(!f||g[0]&524288&&l!==(l="modal-backdrop "+n[19]))&&_(e,"class",l)},i(p){f||(P(s),It(()=>{f&&(a&&a.end(1),o=is(t,_t,{transition:n[9],params:n[10],enabled:n[8]}),o.start())}),It(()=>{f&&(u||(u=Qt(e,_t,{transition:er,params:{duration:150},enabled:n[8]},!0)),u.run(1))}),f=!0)},o(p){L(s),o&&o.invalidate(),a=ss(t,_t,{transition:n[11],params:n[12],enabled:n[8]}),u||(u=Qt(e,_t,{transition:er,params:{duration:150},enabled:n[8]},!1)),u.run(0),f=!1},d(p){p&&I(e),b[i].d(),p&&a&&a.end(),p&&u&&u.end(),c=!1,Be(d)}}}function Iu(n){let e,t,i,s,r=n[13].length>0&&Tr(n);return{c(){r&&r.c(),e=ye()},l(o){r&&r.l(o),e=ye()},m(o,a){r&&r.m(o,a),V(o,e,a),t=!0,i||(s=q(window,"keydown",n[26]),i=!0)},p(o,a){o[13].length>0?r?(r.p(o,a),a[0]&8192&&P(r,1)):(r=Tr(o),r.c(),P(r,1),r.m(e.parentNode,e)):r&&(re(),L(r,1,1,()=>{r=null}),oe())},i(o){t||(P(r),t=!0)},o(o){L(r),t=!1},d(o){o&&I(e),r&&r.d(o),i=!1,s()}}}const wu="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto",Eu="w-full h-fit min-h-full p-4 overflow-y-auto flex justify-center",ku="block overflow-y-auto",Tu="w-full h-auto";function Su(n,e,t){let i,s,r,o,a,l,u;ke(n,ls,N=>t(43,u=N));const f=li();let{position:c="items-center"}=e,{components:d={}}=e,{background:h="bg-surface-100-800-token"}=e,{width:b="w-modal"}=e,{height:y="h-auto"}=e,{padding:p="p-4"}=e,{spacing:g="space-y-4"}=e,{rounded:m="rounded-container-token"}=e,{shadow:v="shadow-xl"}=e,{zIndex:w="z-[999]"}=e,{buttonNeutral:T="variant-ghost-surface"}=e,{buttonPositive:k="variant-filled"}=e,{buttonTextCancel:S="Cancel"}=e,{buttonTextConfirm:D="Confirm"}=e,{buttonTextSubmit:M="Submit"}=e,{regionBackdrop:O="bg-surface-backdrop-token"}=e,{regionHeader:K="text-2xl font-bold"}=e,{regionBody:x="max-h-[200px] overflow-hidden"}=e,{regionFooter:W="flex justify-end space-x-2"}=e,{transitions:G=!u}=e,{transitionIn:te=Zt}=e,{transitionInParams:ne={duration:150,opacity:0,x:0,y:100}}=e,{transitionOut:fe=Zt}=e,{transitionOutParams:be={duration:150,opacity:0,x:0,y:100}}=e,pe;const j={buttonTextCancel:S,buttonTextConfirm:D,buttonTextSubmit:M};let z,B=!1;const ie=as();ke(n,ie,N=>t(13,l=N)),ie.subscribe(N=>{N.length&&(N[0].type==="prompt"&&t(14,pe=N[0].value),t(0,S=N[0].buttonTextCancel||j.buttonTextCancel),t(1,D=N[0].buttonTextConfirm||j.buttonTextConfirm),t(2,M=N[0].buttonTextSubmit||j.buttonTextSubmit),t(15,z=typeof N[0].component=="string"?d[N[0].component]:N[0].component))});function we(N){if(!(N.target instanceof Element))return;const Ee=N.target.classList;(Ee.contains("modal-backdrop")||Ee.contains("modal-transition"))&&(B=!0)}function He(N){if(!(N.target instanceof Element))return;const Ee=N.target.classList;(Ee.contains("modal-backdrop")||Ee.contains("modal-transition"))&&B&&(l[0].response&&l[0].response(void 0),ie.close(),f("backdrop",N)),B=!1}function lt(){l[0].response&&l[0].response(!1),ie.close()}function kt(){l[0].response&&l[0].response(!0),ie.close()}function We(N){N.preventDefault(),l[0].response&&l[0].response(pe),ie.close()}function $e(N){l.length&&N.code==="Escape"&&lt()}function H(N){se.call(this,n,N)}function je(N){se.call(this,n,N)}function ze(){pe=this.value,t(14,pe)}return n.$$set=N=>{t(46,e=he(he({},e),Ie(N))),"position"in N&&t(27,c=N.position),"components"in N&&t(28,d=N.components),"background"in N&&t(29,h=N.background),"width"in N&&t(30,b=N.width),"height"in N&&t(31,y=N.height),"padding"in N&&t(32,p=N.padding),"spacing"in N&&t(33,g=N.spacing),"rounded"in N&&t(34,m=N.rounded),"shadow"in N&&t(35,v=N.shadow),"zIndex"in N&&t(36,w=N.zIndex),"buttonNeutral"in N&&t(3,T=N.buttonNeutral),"buttonPositive"in N&&t(4,k=N.buttonPositive),"buttonTextCancel"in N&&t(0,S=N.buttonTextCancel),"buttonTextConfirm"in N&&t(1,D=N.buttonTextConfirm),"buttonTextSubmit"in N&&t(2,M=N.buttonTextSubmit),"regionBackdrop"in N&&t(37,O=N.regionBackdrop),"regionHeader"in N&&t(5,K=N.regionHeader),"regionBody"in N&&t(6,x=N.regionBody),"regionFooter"in N&&t(7,W=N.regionFooter),"transitions"in N&&t(8,G=N.transitions),"transitionIn"in N&&t(9,te=N.transitionIn),"transitionInParams"in N&&t(10,ne=N.transitionInParams),"transitionOut"in N&&t(11,fe=N.transitionOut),"transitionOutParams"in N&&t(12,be=N.transitionOutParams)},n.$$.update=()=>{var N,Ee,qe;n.$$.dirty[0]&134225920&&t(38,i=((N=l[0])==null?void 0:N.position)??c),t(19,s=`${wu} ${O} ${w} ${e.class??""} ${((Ee=l[0])==null?void 0:Ee.backdropClasses)??""}`),n.$$.dirty[1]&128&&t(18,r=`${Eu} ${i??""}`),n.$$.dirty[0]&1610620928|n.$$.dirty[1]&31&&t(17,o=`${ku} ${h} ${b} ${y} ${p} ${g} ${m} ${v} ${((qe=l[0])==null?void 0:qe.modalClasses)??""}`),n.$$.dirty[0]&1744830719|n.$$.dirty[1]&95&&t(16,a={position:c,background:h,width:b,height:y,padding:p,spacing:g,rounded:m,shadow:v,buttonNeutral:T,buttonPositive:k,buttonTextCancel:S,buttonTextConfirm:D,buttonTextSubmit:M,regionBackdrop:O,regionHeader:K,regionBody:x,regionFooter:W,onClose:lt})},e=Ie(e),[S,D,M,T,k,K,x,W,G,te,ne,fe,be,l,pe,z,a,o,r,s,ie,we,He,lt,kt,We,$e,c,d,h,b,y,p,g,m,v,w,O,i,H,je,ze]}class Cu extends me{constructor(e){super(),ge(this,e,Su,Iu,de,{position:27,components:28,background:29,width:30,height:31,padding:32,spacing:33,rounded:34,shadow:35,zIndex:36,buttonNeutral:3,buttonPositive:4,buttonTextCancel:0,buttonTextConfirm:1,buttonTextSubmit:2,regionBackdrop:37,regionHeader:5,regionBody:6,regionFooter:7,transitions:8,transitionIn:9,transitionInParams:10,transitionOut:11,transitionOutParams:12},null,[-1,-1])}}function Au(n){let e,t=`<script nonce="%sveltekit.nonce%">(${yc.toString()})();<\/script>`,i,s,r,o,a,l,u,f,c,d,h,b,y;return{c(){e=new Ht(!1),i=ye(),s=U(),r=C("div"),o=C("div"),a=xn("svg"),l=xn("path"),this.h()},l(p){const g=Vl("svelte-gewkj4",document.head);e=jt(g,!1),i=ye(),g.forEach(I),s=F(p),r=A(p,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var m=R(r);o=A(m,"DIV",{class:!0});var v=R(o);a=Jn(v,"svg",{class:!0,xmlns:!0,viewBox:!0});var w=R(a);l=Jn(w,"path",{d:!0}),R(l).forEach(I),w.forEach(I),v.forEach(I),m.forEach(I),this.h()},h(){e.a=i,_(l,"d",u=n[0]?n[4].sun:n[4].moon),_(a,"class",f="lightswitch-icon "+n[1]),_(a,"xmlns","http://www.w3.org/2000/svg"),_(a,"viewBox","0 0 512 512"),_(o,"class",c="lightswitch-thumb "+n[2]),_(r,"class",d="lightswitch-track "+n[3]),_(r,"role","switch"),_(r,"aria-label","Light Switch"),_(r,"aria-checked",n[0]),_(r,"title",h="Toggle "+(n[0]===!0?"Dark":"Light")+" Mode"),_(r,"tabindex","0")},m(p,g){e.m(t,document.head),E(document.head,i),V(p,s,g),V(p,r,g),E(r,o),E(o,a),E(a,l),b||(y=[q(r,"click",n[5]),q(r,"click",n[18]),q(r,"keydown",Ou),q(r,"keydown",n[19]),q(r,"keyup",n[20]),q(r,"keypress",n[21])],b=!0)},p(p,[g]){g&1&&u!==(u=p[0]?p[4].sun:p[4].moon)&&_(l,"d",u),g&2&&f!==(f="lightswitch-icon "+p[1])&&_(a,"class",f),g&4&&c!==(c="lightswitch-thumb "+p[2])&&_(o,"class",c),g&8&&d!==(d="lightswitch-track "+p[3])&&_(r,"class",d),g&1&&_(r,"aria-checked",p[0]),g&1&&h!==(h="Toggle "+(p[0]===!0?"Dark":"Light")+" Mode")&&_(r,"title",h)},i:ce,o:ce,d(p){p&&(e.d(),I(s),I(r)),I(i),b=!1,Be(y)}}}const Ru="cursor-pointer",Du="aspect-square scale-[0.8] flex justify-center items-center",Pu="w-[70%] aspect-square";function Ou(n){["Enter","Space"].includes(n.code)&&(n.preventDefault(),n.currentTarget.click())}function Lu(n,e,t){let i,s,r,o,a,l,u,f;ke(n,ji,O=>t(0,f=O));let{bgLight:c="bg-surface-50"}=e,{bgDark:d="bg-surface-900"}=e,{fillLight:h="fill-surface-50"}=e,{fillDark:b="fill-surface-900"}=e,{width:y="w-12"}=e,{height:p="h-6"}=e,{ring:g="ring-[1px] ring-surface-500/30"}=e,{rounded:m="rounded-token"}=e;const v="transition-all duration-[200ms]",w={sun:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",moon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"};function T(){Go(ji,f=!f,f),vc(f),$s(f)}ns(()=>{"modeCurrent"in localStorage||$s(bc())});function k(O){se.call(this,n,O)}function S(O){se.call(this,n,O)}function D(O){se.call(this,n,O)}function M(O){se.call(this,n,O)}return n.$$set=O=>{t(23,e=he(he({},e),Ie(O))),"bgLight"in O&&t(6,c=O.bgLight),"bgDark"in O&&t(7,d=O.bgDark),"fillLight"in O&&t(8,h=O.fillLight),"fillDark"in O&&t(9,b=O.fillDark),"width"in O&&t(10,y=O.width),"height"in O&&t(11,p=O.height),"ring"in O&&t(12,g=O.ring),"rounded"in O&&t(13,m=O.rounded)},n.$$.update=()=>{n.$$.dirty&193&&t(17,i=f===!0?c:d),n.$$.dirty&193&&t(16,s=f===!0?d:c),n.$$.dirty&1&&t(15,r=f===!0?"translate-x-[100%]":""),n.$$.dirty&769&&t(14,o=f===!0?h:b),t(3,a=`${Ru} ${v} ${y} ${p} ${g} ${m} ${i} ${e.class??""}`),n.$$.dirty&108544&&t(2,l=`${Du} ${v} ${p} ${m} ${s} ${r}`),n.$$.dirty&16384&&t(1,u=`${Pu} ${o}`)},e=Ie(e),[f,u,l,a,w,T,c,d,h,b,y,p,g,m,o,r,s,i,k,S,D,M]}class Mu extends me{constructor(e){super(),ge(this,e,Lu,Au,de,{bgLight:6,bgDark:7,fillLight:8,fillDark:9,width:10,height:11,ring:12,rounded:13})}}function Pr(n,e,t){const i=n.slice();return i[36]=e[t],i[38]=t,i}function Or(n){let e,t,i=[],s=new Map,r,o,a,l=Te(n[11]);const u=f=>f[36];for(let f=0;f<l.length;f+=1){let c=Pr(n,l,f),d=u(c);s.set(d,i[f]=Ur(d,c))}return{c(){e=C("div"),t=C("div");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=A(f,"DIV",{class:!0,"data-testid":!0});var c=R(e);t=A(c,"DIV",{class:!0});var d=R(t);for(let h=0;h<i.length;h+=1)i[h].l(d);d.forEach(I),c.forEach(I),this.h()},h(){_(t,"class",r="snackbar "+n[13]),_(e,"class",o="snackbar-wrapper "+n[14]),_(e,"data-testid","snackbar-wrapper")},m(f,c){V(f,e,c),E(e,t);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(t,null);a=!0},p(f,c){if(c[0]&499103){l=Te(f[11]),re();for(let d=0;d<i.length;d+=1)i[d].r();i=rs(i,c,u,1,f,l,s,t,xo,Ur,null,Pr);for(let d=0;d<i.length;d+=1)i[d].a();oe()}(!a||c[0]&8192&&r!==(r="snackbar "+f[13]))&&_(t,"class",r),(!a||c[0]&16384&&o!==(o="snackbar-wrapper "+f[14]))&&_(e,"class",o)},i(f){if(!a){for(let c=0;c<l.length;c+=1)P(i[c]);a=!0}},o(f){for(let c=0;c<i.length;c+=1)L(i[c]);a=!1},d(f){f&&I(e);for(let c=0;c<i.length;c+=1)i[c].d()}}}function Lr(n){let e,t,i=n[36].action&&Mr(n),s=!n[36].hideDismiss&&Nr(n);return{c(){e=C("div"),i&&i.c(),t=U(),s&&s.c(),this.h()},l(r){e=A(r,"DIV",{class:!0});var o=R(e);i&&i.l(o),t=F(o),s&&s.l(o),o.forEach(I),this.h()},h(){_(e,"class","toast-actions "+Vu)},m(r,o){V(r,e,o),i&&i.m(e,null),E(e,t),s&&s.m(e,null)},p(r,o){r[36].action?i?i.p(r,o):(i=Mr(r),i.c(),i.m(e,t)):i&&(i.d(1),i=null),r[36].hideDismiss?s&&(s.d(1),s=null):s?s.p(r,o):(s=Nr(r),s.c(),s.m(e,null))},d(r){r&&I(e),i&&i.d(),s&&s.d()}}}function Mr(n){let e,t,i=n[36].action.label+"",s,r;function o(){return n[30](n[38])}return{c(){e=C("button"),t=new Ht(!1),this.h()},l(a){e=A(a,"BUTTON",{class:!0});var l=R(e);t=jt(l,!1),l.forEach(I),this.h()},h(){t.a=null,_(e,"class",n[1])},m(a,l){V(a,e,l),t.m(i,e),s||(r=q(e,"click",o),s=!0)},p(a,l){n=a,l[0]&2048&&i!==(i=n[36].action.label+"")&&t.p(i),l[0]&2&&_(e,"class",n[1])},d(a){a&&I(e),s=!1,r()}}}function Nr(n){let e,t,i,s;function r(){return n[31](n[36])}return{c(){e=C("button"),t=$(n[3]),this.h()},l(o){e=A(o,"BUTTON",{class:!0,"aria-label":!0});var a=R(e);t=ee(a,n[3]),a.forEach(I),this.h()},h(){_(e,"class",n[2]),_(e,"aria-label","Dismiss toast")},m(o,a){V(o,e,a),E(e,t),i||(s=q(e,"click",r),i=!0)},p(o,a){n=o,a[0]&8&&le(t,n[3]),a[0]&4&&_(e,"class",n[2])},d(o){o&&I(e),i=!1,s()}}}function Ur(n,e){let t,i,s,r,o=e[36].message+"",a,l,u,f,c,d,h,b=ce,y,p,g,m=(e[36].action||!e[36].hideDismiss)&&Lr(e);function v(){return e[32](e[38])}function w(){return e[33](e[38])}return{key:n,first:null,c(){t=C("div"),i=C("div"),s=C("div"),r=new Ht(!1),a=U(),m&&m.c(),u=U(),this.h()},l(T){t=A(T,"DIV",{role:!0,"aria-live":!0});var k=R(t);i=A(k,"DIV",{class:!0,"data-testid":!0});var S=R(i);s=A(S,"DIV",{class:!0});var D=R(s);r=jt(D,!1),D.forEach(I),a=F(S),m&&m.l(S),S.forEach(I),u=F(k),k.forEach(I),this.h()},h(){r.a=null,_(s,"class","text-base"),_(i,"class",l="toast "+e[12]+" "+(e[36].background??e[0])+" "+(e[36].classes??"")),_(i,"data-testid","toast"),_(t,"role",f=e[36].hideDismiss?"alert":"alertdialog"),_(t,"aria-live","polite"),this.first=t},m(T,k){V(T,t,k),E(t,i),E(i,s),r.m(o,s),E(i,a),m&&m.m(i,null),E(t,u),y=!0,p||(g=[q(t,"mouseenter",v),q(t,"mouseleave",w)],p=!0)},p(T,k){e=T,(!y||k[0]&2048)&&o!==(o=e[36].message+"")&&r.p(o),e[36].action||!e[36].hideDismiss?m?m.p(e,k):(m=Lr(e),m.c(),m.m(i,null)):m&&(m.d(1),m=null),(!y||k[0]&6145&&l!==(l="toast "+e[12]+" "+(e[36].background??e[0])+" "+(e[36].classes??"")))&&_(i,"class",l),(!y||k[0]&2048&&f!==(f=e[36].hideDismiss?"alert":"alertdialog"))&&_(t,"role",f)},r(){h=t.getBoundingClientRect()},f(){Qo(t),b(),Zo(t,h)},a(){b(),b=Xo(t,h,ra,{duration:e[4]?250:0})},i(T){y||(It(()=>{y&&(d&&d.end(1),c=is(t,_t,{transition:e[5],params:{x:e[10].x,y:e[10].y,...e[6]},enabled:e[4]}),c.start())}),y=!0)},o(T){c&&c.invalidate(),d=ss(t,_t,{transition:e[7],params:{x:e[10].x,y:e[10].y,...e[8]},enabled:e[4]}),y=!1},d(T){T&&I(t),m&&m.d(),T&&d&&d.end(),p=!1,Be(g)}}}function Nu(n){let e,t,i=n[9].length&&Or(n);return{c(){i&&i.c(),e=ye()},l(s){i&&i.l(s),e=ye()},m(s,r){i&&i.m(s,r),V(s,e,r),t=!0},p(s,r){s[9].length?i?(i.p(s,r),r[0]&512&&P(i,1)):(i=Or(s),i.c(),P(i,1),i.m(e.parentNode,e)):i&&(re(),L(i,1,1,()=>{i=null}),oe())},i(s){t||(P(i),t=!0)},o(s){L(i),t=!1},d(s){s&&I(e),i&&i.d(s)}}}const Uu="flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none",Fu="flex flex-col gap-y-2",Bu="flex justify-between items-center pointer-events-auto",Vu="flex items-center space-x-2";function Hu(n,e,t){let i,s,r,o,a,l;ke(n,ls,B=>t(34,l=B));const u=Kt();ke(n,u,B=>t(9,a=B));let{position:f="b"}=e,{max:c=3}=e,{background:d="variant-filled-secondary"}=e,{width:h="max-w-[640px]"}=e,{color:b=""}=e,{padding:y="p-4"}=e,{spacing:p="space-x-4"}=e,{rounded:g="rounded-container-token"}=e,{shadow:m="shadow-lg"}=e,{zIndex:v="z-[888]"}=e,{buttonAction:w="btn variant-filled"}=e,{buttonDismiss:T="btn-icon btn-icon-sm variant-filled"}=e,{buttonDismissLabel:k="✕"}=e,{transitions:S=!l}=e,{transitionIn:D=Zt}=e,{transitionInParams:M={duration:250}}=e,{transitionOut:O=Zt}=e,{transitionOutParams:K={duration:250}}=e,x,W,G={x:0,y:0};switch(f){case"t":x="justify-center items-start",W="items-center",G={x:0,y:-100};break;case"b":x="justify-center items-end",W="items-center",G={x:0,y:100};break;case"l":x="justify-start items-center",W="items-start",G={x:-100,y:0};break;case"r":x="justify-end items-center",W="items-end",G={x:100,y:0};break;case"tl":x="justify-start items-start",W="items-start",G={x:-100,y:0};break;case"tr":x="justify-end items-start",W="items-end",G={x:100,y:0};break;case"bl":x="justify-start items-end",W="items-start",G={x:-100,y:0};break;case"br":x="justify-end items-end",W="items-end",G={x:100,y:0};break}function te(B){var ie,we;(we=(ie=a[B])==null?void 0:ie.action)==null||we.response(),u.close(a[B].id)}function ne(B){var ie;(ie=a[B])!=null&&ie.hoverable&&(u.freeze(B),t(13,s+=" scale-[105%]"))}function fe(B){var ie;(ie=a[B])!=null&&ie.hoverable&&(u.unfreeze(B),t(13,s=s.replace(" scale-[105%]","")))}const be=B=>te(B),pe=B=>u.close(B.id),j=B=>ne(B),z=B=>fe(B);return n.$$set=B=>{t(35,e=he(he({},e),Ie(B))),"position"in B&&t(19,f=B.position),"max"in B&&t(20,c=B.max),"background"in B&&t(0,d=B.background),"width"in B&&t(21,h=B.width),"color"in B&&t(22,b=B.color),"padding"in B&&t(23,y=B.padding),"spacing"in B&&t(24,p=B.spacing),"rounded"in B&&t(25,g=B.rounded),"shadow"in B&&t(26,m=B.shadow),"zIndex"in B&&t(27,v=B.zIndex),"buttonAction"in B&&t(1,w=B.buttonAction),"buttonDismiss"in B&&t(2,T=B.buttonDismiss),"buttonDismissLabel"in B&&t(3,k=B.buttonDismissLabel),"transitions"in B&&t(4,S=B.transitions),"transitionIn"in B&&t(5,D=B.transitionIn),"transitionInParams"in B&&t(6,M=B.transitionInParams),"transitionOut"in B&&t(7,O=B.transitionOut),"transitionOutParams"in B&&t(8,K=B.transitionOutParams)},n.$$.update=()=>{t(14,i=`${Uu} ${x} ${v} ${e.class||""}`),n.$$.dirty[0]&545259520&&t(13,s=`${Fu} ${W} ${y}`),n.$$.dirty[0]&132120576&&t(12,r=`${Bu} ${h} ${b} ${y} ${p} ${g} ${m}`),n.$$.dirty[0]&1049088&&t(11,o=Array.from(a).slice(0,c))},e=Ie(e),[d,w,T,k,S,D,M,O,K,a,G,o,r,s,i,u,te,ne,fe,f,c,h,b,y,p,g,m,v,x,W,be,pe,j,z]}class ju extends me{constructor(e){super(),ge(this,e,Hu,Nu,de,{position:19,max:20,background:0,width:21,color:22,padding:23,spacing:24,rounded:25,shadow:26,zIndex:27,buttonAction:1,buttonDismiss:2,buttonDismissLabel:3,transitions:4,transitionIn:5,transitionInParams:6,transitionOut:7,transitionOutParams:8},null,[-1,-1])}}const $t=Math.min,Ot=Math.max,Xn=Math.round,Bn=Math.floor,wt=n=>({x:n,y:n}),zu={left:"right",right:"left",bottom:"top",top:"bottom"},Wu={start:"end",end:"start"};function zi(n,e,t){return Ot(n,$t(e,t))}function yn(n,e){return typeof n=="function"?n(e):n}function Mt(n){return n.split("-")[0]}function In(n){return n.split("-")[1]}function oa(n){return n==="x"?"y":"x"}function cs(n){return n==="y"?"height":"width"}function di(n){return["top","bottom"].includes(Mt(n))?"y":"x"}function us(n){return oa(di(n))}function qu(n,e,t){t===void 0&&(t=!1);const i=In(n),s=us(n),r=cs(s);let o=s==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(o=Qn(o)),[o,Qn(o)]}function Ku(n){const e=Qn(n);return[Wi(n),e,Wi(e)]}function Wi(n){return n.replace(/start|end/g,e=>Wu[e])}function Gu(n,e,t){const i=["left","right"],s=["right","left"],r=["top","bottom"],o=["bottom","top"];switch(n){case"top":case"bottom":return t?e?s:i:e?i:s;case"left":case"right":return e?r:o;default:return[]}}function xu(n,e,t,i){const s=In(n);let r=Gu(Mt(n),t==="start",i);return s&&(r=r.map(o=>o+"-"+s),e&&(r=r.concat(r.map(Wi)))),r}function Qn(n){return n.replace(/left|right|bottom|top/g,e=>zu[e])}function Ju(n){return{top:0,right:0,bottom:0,left:0,...n}}function aa(n){return typeof n!="number"?Ju(n):{top:n,right:n,bottom:n,left:n}}function Zn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function Fr(n,e,t){let{reference:i,floating:s}=n;const r=di(e),o=us(e),a=cs(o),l=Mt(e),u=r==="y",f=i.x+i.width/2-s.width/2,c=i.y+i.height/2-s.height/2,d=i[a]/2-s[a]/2;let h;switch(l){case"top":h={x:f,y:i.y-s.height};break;case"bottom":h={x:f,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:c};break;case"left":h={x:i.x-s.width,y:c};break;default:h={x:i.x,y:i.y}}switch(In(e)){case"start":h[o]-=d*(t&&u?-1:1);break;case"end":h[o]+=d*(t&&u?-1:1);break}return h}const Yu=async(n,e,t)=>{const{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:o}=t,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let u=await o.getElementRects({reference:n,floating:e,strategy:s}),{x:f,y:c}=Fr(u,i,l),d=i,h={},b=0;for(let y=0;y<a.length;y++){const{name:p,fn:g}=a[y],{x:m,y:v,data:w,reset:T}=await g({x:f,y:c,initialPlacement:i,placement:d,strategy:s,middlewareData:h,rects:u,platform:o,elements:{reference:n,floating:e}});if(f=m??f,c=v??c,h={...h,[p]:{...h[p],...w}},T&&b<=50){b++,typeof T=="object"&&(T.placement&&(d=T.placement),T.rects&&(u=T.rects===!0?await o.getElementRects({reference:n,floating:e,strategy:s}):T.rects),{x:f,y:c}=Fr(u,d,l)),y=-1;continue}}return{x:f,y:c,placement:d,strategy:s,middlewareData:h}};async function la(n,e){var t;e===void 0&&(e={});const{x:i,y:s,platform:r,rects:o,elements:a,strategy:l}=n,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:c="floating",altBoundary:d=!1,padding:h=0}=yn(e,n),b=aa(h),p=a[d?c==="floating"?"reference":"floating":c],g=Zn(await r.getClippingRect({element:(t=await(r.isElement==null?void 0:r.isElement(p)))==null||t?p:p.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:u,rootBoundary:f,strategy:l})),m=c==="floating"?{...o.floating,x:i,y:s}:o.reference,v=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),w=await(r.isElement==null?void 0:r.isElement(v))?await(r.getScale==null?void 0:r.getScale(v))||{x:1,y:1}:{x:1,y:1},T=Zn(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:m,offsetParent:v,strategy:l}):m);return{top:(g.top-T.top+b.top)/w.y,bottom:(T.bottom-g.bottom+b.bottom)/w.y,left:(g.left-T.left+b.left)/w.x,right:(T.right-g.right+b.right)/w.x}}const Xu=n=>({name:"arrow",options:n,async fn(e){const{x:t,y:i,placement:s,rects:r,platform:o,elements:a}=e,{element:l,padding:u=0}=yn(n,e)||{};if(l==null)return{};const f=aa(u),c={x:t,y:i},d=us(s),h=cs(d),b=await o.getDimensions(l),y=d==="y",p=y?"top":"left",g=y?"bottom":"right",m=y?"clientHeight":"clientWidth",v=r.reference[h]+r.reference[d]-c[d]-r.floating[h],w=c[d]-r.reference[d],T=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l));let k=T?T[m]:0;(!k||!await(o.isElement==null?void 0:o.isElement(T)))&&(k=a.floating[m]||r.floating[h]);const S=v/2-w/2,D=k/2-b[h]/2-1,M=$t(f[p],D),O=$t(f[g],D),K=M,x=k-b[h]-O,W=k/2-b[h]/2+S,G=zi(K,W,x),ne=In(s)!=null&&W!=G&&r.reference[h]/2-(W<K?M:O)-b[h]/2<0?W<K?K-W:x-W:0;return{[d]:c[d]-ne,data:{[d]:G,centerOffset:W-G+ne}}}}),Qu=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var t;const{placement:i,middlewareData:s,rects:r,initialPlacement:o,platform:a,elements:l}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:c,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:b=!0,...y}=yn(n,e),p=Mt(i),g=Mt(o)===o,m=await(a.isRTL==null?void 0:a.isRTL(l.floating)),v=c||(g||!b?[Qn(o)]:Ku(o));!c&&h!=="none"&&v.push(...xu(o,b,h,m));const w=[o,...v],T=await la(e,y),k=[];let S=((t=s.flip)==null?void 0:t.overflows)||[];if(u&&k.push(T[p]),f){const K=qu(i,r,m);k.push(T[K[0]],T[K[1]])}if(S=[...S,{placement:i,overflows:k}],!k.every(K=>K<=0)){var D,M;const K=(((D=s.flip)==null?void 0:D.index)||0)+1,x=w[K];if(x)return{data:{index:K,overflows:S},reset:{placement:x}};let W=(M=S.filter(G=>G.overflows[0]<=0).sort((G,te)=>G.overflows[1]-te.overflows[1])[0])==null?void 0:M.placement;if(!W)switch(d){case"bestFit":{var O;const G=(O=S.map(te=>[te.placement,te.overflows.filter(ne=>ne>0).reduce((ne,fe)=>ne+fe,0)]).sort((te,ne)=>te[1]-ne[1])[0])==null?void 0:O[0];G&&(W=G);break}case"initialPlacement":W=o;break}if(i!==W)return{reset:{placement:W}}}return{}}}};async function Zu(n,e){const{placement:t,platform:i,elements:s}=n,r=await(i.isRTL==null?void 0:i.isRTL(s.floating)),o=Mt(t),a=In(t),l=di(t)==="y",u=["left","top"].includes(o)?-1:1,f=r&&l?-1:1,c=yn(e,n);let{mainAxis:d,crossAxis:h,alignmentAxis:b}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return a&&typeof b=="number"&&(h=a==="end"?b*-1:b),l?{x:h*f,y:d*u}:{x:d*u,y:h*f}}const $u=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){const{x:t,y:i}=e,s=await Zu(e,n);return{x:t+s.x,y:i+s.y,data:s}}}},ef=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:t,y:i,placement:s}=e,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:p=>{let{x:g,y:m}=p;return{x:g,y:m}}},...l}=yn(n,e),u={x:t,y:i},f=await la(e,l),c=di(Mt(s)),d=oa(c);let h=u[d],b=u[c];if(r){const p=d==="y"?"top":"left",g=d==="y"?"bottom":"right",m=h+f[p],v=h-f[g];h=zi(m,h,v)}if(o){const p=c==="y"?"top":"left",g=c==="y"?"bottom":"right",m=b+f[p],v=b-f[g];b=zi(m,b,v)}const y=a.fn({...e,[d]:h,[c]:b});return{...y,data:{x:y.x-t,y:y.y-i}}}}};function Et(n){return ca(n)?(n.nodeName||"").toLowerCase():"#document"}function Oe(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function ot(n){var e;return(e=(ca(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function ca(n){return n instanceof Node||n instanceof Oe(n).Node}function it(n){return n instanceof Element||n instanceof Oe(n).Element}function Ye(n){return n instanceof HTMLElement||n instanceof Oe(n).HTMLElement}function Br(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Oe(n).ShadowRoot}function wn(n){const{overflow:e,overflowX:t,overflowY:i,display:s}=Ve(n);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(s)}function tf(n){return["table","td","th"].includes(Et(n))}function fs(n){const e=ds(),t=Ve(n);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function nf(n){let e=en(n);for(;Ye(e)&&!hi(e);){if(fs(e))return e;e=en(e)}return null}function ds(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function hi(n){return["html","body","#document"].includes(Et(n))}function Ve(n){return Oe(n).getComputedStyle(n)}function mi(n){return it(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function en(n){if(Et(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Br(n)&&n.host||ot(n);return Br(e)?e.host:e}function ua(n){const e=en(n);return hi(e)?n.ownerDocument?n.ownerDocument.body:n.body:Ye(e)&&wn(e)?e:ua(e)}function $n(n,e){var t;e===void 0&&(e=[]);const i=ua(n),s=i===((t=n.ownerDocument)==null?void 0:t.body),r=Oe(i);return s?e.concat(r,r.visualViewport||[],wn(i)?i:[]):e.concat(i,$n(i))}function fa(n){const e=Ve(n);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Ye(n),r=s?n.offsetWidth:t,o=s?n.offsetHeight:i,a=Xn(t)!==r||Xn(i)!==o;return a&&(t=r,i=o),{width:t,height:i,$:a}}function hs(n){return it(n)?n:n.contextElement}function Gt(n){const e=hs(n);if(!Ye(e))return wt(1);const t=e.getBoundingClientRect(),{width:i,height:s,$:r}=fa(e);let o=(r?Xn(t.width):t.width)/i,a=(r?Xn(t.height):t.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const sf=wt(0);function da(n){const e=Oe(n);return!ds()||!e.visualViewport?sf:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function rf(n,e,t){return e===void 0&&(e=!1),!t||e&&t!==Oe(n)?!1:e}function Nt(n,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=n.getBoundingClientRect(),r=hs(n);let o=wt(1);e&&(i?it(i)&&(o=Gt(i)):o=Gt(n));const a=rf(r,t,i)?da(r):wt(0);let l=(s.left+a.x)/o.x,u=(s.top+a.y)/o.y,f=s.width/o.x,c=s.height/o.y;if(r){const d=Oe(r),h=i&&it(i)?Oe(i):i;let b=d.frameElement;for(;b&&i&&h!==d;){const y=Gt(b),p=b.getBoundingClientRect(),g=Ve(b),m=p.left+(b.clientLeft+parseFloat(g.paddingLeft))*y.x,v=p.top+(b.clientTop+parseFloat(g.paddingTop))*y.y;l*=y.x,u*=y.y,f*=y.x,c*=y.y,l+=m,u+=v,b=Oe(b).frameElement}}return Zn({width:f,height:c,x:l,y:u})}function of(n){let{rect:e,offsetParent:t,strategy:i}=n;const s=Ye(t),r=ot(t);if(t===r)return e;let o={scrollLeft:0,scrollTop:0},a=wt(1);const l=wt(0);if((s||!s&&i!=="fixed")&&((Et(t)!=="body"||wn(r))&&(o=mi(t)),Ye(t))){const u=Nt(t);a=Gt(t),l.x=u.x+t.clientLeft,l.y=u.y+t.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-o.scrollLeft*a.x+l.x,y:e.y*a.y-o.scrollTop*a.y+l.y}}function af(n){return Array.from(n.getClientRects())}function ha(n){return Nt(ot(n)).left+mi(n).scrollLeft}function lf(n){const e=ot(n),t=mi(n),i=n.ownerDocument.body,s=Ot(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=Ot(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-t.scrollLeft+ha(n);const a=-t.scrollTop;return Ve(i).direction==="rtl"&&(o+=Ot(e.clientWidth,i.clientWidth)-s),{width:s,height:r,x:o,y:a}}function cf(n,e){const t=Oe(n),i=ot(n),s=t.visualViewport;let r=i.clientWidth,o=i.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;const u=ds();(!u||u&&e==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:o,x:a,y:l}}function uf(n,e){const t=Nt(n,!0,e==="fixed"),i=t.top+n.clientTop,s=t.left+n.clientLeft,r=Ye(n)?Gt(n):wt(1),o=n.clientWidth*r.x,a=n.clientHeight*r.y,l=s*r.x,u=i*r.y;return{width:o,height:a,x:l,y:u}}function Vr(n,e,t){let i;if(e==="viewport")i=cf(n,t);else if(e==="document")i=lf(ot(n));else if(it(e))i=uf(e,t);else{const s=da(n);i={...e,x:e.x-s.x,y:e.y-s.y}}return Zn(i)}function ma(n,e){const t=en(n);return t===e||!it(t)||hi(t)?!1:Ve(t).position==="fixed"||ma(t,e)}function ff(n,e){const t=e.get(n);if(t)return t;let i=$n(n).filter(a=>it(a)&&Et(a)!=="body"),s=null;const r=Ve(n).position==="fixed";let o=r?en(n):n;for(;it(o)&&!hi(o);){const a=Ve(o),l=fs(o);!l&&a.position==="fixed"&&(s=null),(r?!l&&!s:!l&&a.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||wn(o)&&!l&&ma(n,o))?i=i.filter(f=>f!==o):s=a,o=en(o)}return e.set(n,i),i}function df(n){let{element:e,boundary:t,rootBoundary:i,strategy:s}=n;const o=[...t==="clippingAncestors"?ff(e,this._c):[].concat(t),i],a=o[0],l=o.reduce((u,f)=>{const c=Vr(e,f,s);return u.top=Ot(c.top,u.top),u.right=$t(c.right,u.right),u.bottom=$t(c.bottom,u.bottom),u.left=Ot(c.left,u.left),u},Vr(e,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function hf(n){return fa(n)}function mf(n,e,t){const i=Ye(e),s=ot(e),r=t==="fixed",o=Nt(n,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=wt(0);if(i||!i&&!r)if((Et(e)!=="body"||wn(s))&&(a=mi(e)),i){const u=Nt(e,!0,r,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else s&&(l.x=ha(s));return{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function Hr(n,e){return!Ye(n)||Ve(n).position==="fixed"?null:e?e(n):n.offsetParent}function ga(n,e){const t=Oe(n);if(!Ye(n))return t;let i=Hr(n,e);for(;i&&tf(i)&&Ve(i).position==="static";)i=Hr(i,e);return i&&(Et(i)==="html"||Et(i)==="body"&&Ve(i).position==="static"&&!fs(i))?t:i||nf(n)||t}const gf=async function(n){let{reference:e,floating:t,strategy:i}=n;const s=this.getOffsetParent||ga,r=this.getDimensions;return{reference:mf(e,await s(t),i),floating:{x:0,y:0,...await r(t)}}};function pf(n){return Ve(n).direction==="rtl"}const _f={convertOffsetParentRelativeRectToViewportRelativeRect:of,getDocumentElement:ot,getClippingRect:df,getOffsetParent:ga,getElementRects:gf,getClientRects:af,getDimensions:hf,getScale:Gt,isElement:it,isRTL:pf};function bf(n,e){let t=null,i;const s=ot(n);function r(){clearTimeout(i),t&&t.disconnect(),t=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const{left:u,top:f,width:c,height:d}=n.getBoundingClientRect();if(a||e(),!c||!d)return;const h=Bn(f),b=Bn(s.clientWidth-(u+c)),y=Bn(s.clientHeight-(f+d)),p=Bn(u),m={rootMargin:-h+"px "+-b+"px "+-y+"px "+-p+"px",threshold:Ot(0,$t(1,l))||1};let v=!0;function w(T){const k=T[0].intersectionRatio;if(k!==l){if(!v)return o();k?o(!1,k):i=setTimeout(()=>{o(!1,1e-7)},100)}v=!1}try{t=new IntersectionObserver(w,{...m,root:s.ownerDocument})}catch{t=new IntersectionObserver(w,m)}t.observe(n)}return o(!0),r}function vf(n,e,t,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,u=hs(n),f=s||r?[...u?$n(u):[],...$n(e)]:[];f.forEach(g=>{s&&g.addEventListener("scroll",t,{passive:!0}),r&&g.addEventListener("resize",t)});const c=u&&a?bf(u,t):null;let d=-1,h=null;o&&(h=new ResizeObserver(g=>{let[m]=g;m&&m.target===u&&h&&(h.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{h&&h.observe(e)})),t()}),u&&!l&&h.observe(u),h.observe(e));let b,y=l?Nt(n):null;l&&p();function p(){const g=Nt(n);y&&(g.x!==y.x||g.y!==y.y||g.width!==y.width||g.height!==y.height)&&t(),y=g,b=requestAnimationFrame(p)}return t(),()=>{f.forEach(g=>{s&&g.removeEventListener("scroll",t),r&&g.removeEventListener("resize",t)}),c&&c(),h&&h.disconnect(),h=null,l&&cancelAnimationFrame(b)}}const yf=(n,e,t)=>{const i=new Map,s={platform:_f,...t},r={...s.platform,_c:i};return Yu(n,e,{...s,platform:r})},If=""+new URL("../assets/vpsLogo.a05dfbbc.png",import.meta.url).href;/**
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
 */const pa=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},wf=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,f=r>>2,c=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,h=u&63;l||(h=64,o||(d=64)),i.push(t[f],t[c],t[d],t[h])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(pa(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const c=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||u==null||c==null)throw new Ef;const d=r<<2|a>>4;if(i.push(d),u!==64){const h=a<<4&240|u>>2;if(i.push(h),c!==64){const b=u<<6&192|c;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ef extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kf=function(n){const e=pa(n);return _a.encodeByteArray(e,!0)},ba=function(n){return kf(n).replace(/\./g,"")},va=function(n){try{return _a.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sf=()=>Tf().__FIREBASE_DEFAULTS__,Cf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Af=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&va(n[1]);return e&&JSON.parse(e)},ms=()=>{try{return Sf()||Cf()||Af()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rf=n=>{var e,t;return(t=(e=ms())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ya=()=>{var n;return(n=ms())===null||n===void 0?void 0:n.config},Ia=n=>{var e;return(e=ms())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Df{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function wa(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Of(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lf(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ea(){try{return typeof indexedDB=="object"}catch{return!1}}function ka(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function Mf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Nf="FirebaseError";class Ze extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Nf,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zt.prototype.create)}}class zt{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Uf(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ze(s,a,i)}}function Uf(n,e){return n.replace(Ff,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ff=/\{\$([^}]+)}/g;function Bf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function hn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(jr(r)&&jr(o)){if(!hn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function jr(n){return n!==null&&typeof n=="object"}/**
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
 */function En(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Vf(n,e){const t=new Hf(n,e);return t.subscribe.bind(t)}class Hf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");jf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Ci),s.error===void 0&&(s.error=Ci),s.complete===void 0&&(s.complete=Ci);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ci(){}/**
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
 */const zf=1e3,Wf=2,qf=4*60*60*1e3,Kf=.5;function zr(n,e=zf,t=Wf){const i=e*Math.pow(t,n),s=Math.round(Kf*i*(Math.random()-.5)*2);return Math.min(qf,i+s)}/**
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
 */function at(n){return n&&n._delegate?n._delegate:n}class Xe{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const At="[DEFAULT]";/**
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
 */class Gf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Df;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jf(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=At){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=At){return this.instances.has(e)}getOptions(e=At){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:xf(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=At){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xf(n){return n===At?void 0:n}function Jf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Yf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ae||(ae={}));const Xf={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Qf=ae.INFO,Zf={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},$f=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Zf[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gs{constructor(e){this.name=e,this._logLevel=Qf,this._logHandler=$f,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const ed=(n,e)=>e.some(t=>n instanceof t);let Wr,qr;function td(){return Wr||(Wr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nd(){return qr||(qr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ta=new WeakMap,qi=new WeakMap,Sa=new WeakMap,Ai=new WeakMap,ps=new WeakMap;function id(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(bt(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ta.set(t,n)}).catch(()=>{}),ps.set(e,n),e}function sd(n){if(qi.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});qi.set(n,e)}let Ki={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Sa.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rd(n){Ki=n(Ki)}function od(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ri(this),e,...t);return Sa.set(i,e.sort?e.sort():[e]),bt(i)}:nd().includes(n)?function(...e){return n.apply(Ri(this),e),bt(Ta.get(this))}:function(...e){return bt(n.apply(Ri(this),e))}}function ad(n){return typeof n=="function"?od(n):(n instanceof IDBTransaction&&sd(n),ed(n,td())?new Proxy(n,Ki):n)}function bt(n){if(n instanceof IDBRequest)return id(n);if(Ai.has(n))return Ai.get(n);const e=ad(n);return e!==n&&(Ai.set(n,e),ps.set(e,n)),e}const Ri=n=>ps.get(n);function ld(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=bt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(bt(o.result),l.oldVersion,l.newVersion,bt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const cd=["get","getKey","getAll","getAllKeys","count"],ud=["put","add","delete","clear"],Di=new Map;function Kr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Di.get(e))return Di.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=ud.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||cd.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&l.done]))[0]};return Di.set(e,r),r}rd(n=>({...n,get:(e,t,i)=>Kr(e,t)||n.get(e,t,i),has:(e,t)=>!!Kr(e,t)||n.has(e,t)}));/**
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
 */class fd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function dd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gi="@firebase/app",Gr="0.9.15";/**
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
 */const Ut=new gs("@firebase/app"),hd="@firebase/app-compat",md="@firebase/analytics-compat",gd="@firebase/analytics",pd="@firebase/app-check-compat",_d="@firebase/app-check",bd="@firebase/auth",vd="@firebase/auth-compat",yd="@firebase/database",Id="@firebase/database-compat",wd="@firebase/functions",Ed="@firebase/functions-compat",kd="@firebase/installations",Td="@firebase/installations-compat",Sd="@firebase/messaging",Cd="@firebase/messaging-compat",Ad="@firebase/performance",Rd="@firebase/performance-compat",Dd="@firebase/remote-config",Pd="@firebase/remote-config-compat",Od="@firebase/storage",Ld="@firebase/storage-compat",Md="@firebase/firestore",Nd="@firebase/firestore-compat",Ud="firebase",Fd="10.1.0";/**
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
 */const xi="[DEFAULT]",Bd={[Gi]:"fire-core",[hd]:"fire-core-compat",[gd]:"fire-analytics",[md]:"fire-analytics-compat",[_d]:"fire-app-check",[pd]:"fire-app-check-compat",[bd]:"fire-auth",[vd]:"fire-auth-compat",[yd]:"fire-rtdb",[Id]:"fire-rtdb-compat",[wd]:"fire-fn",[Ed]:"fire-fn-compat",[kd]:"fire-iid",[Td]:"fire-iid-compat",[Sd]:"fire-fcm",[Cd]:"fire-fcm-compat",[Ad]:"fire-perf",[Rd]:"fire-perf-compat",[Dd]:"fire-rc",[Pd]:"fire-rc-compat",[Od]:"fire-gcs",[Ld]:"fire-gcs-compat",[Md]:"fire-fst",[Nd]:"fire-fst-compat","fire-js":"fire-js",[Ud]:"fire-js-all"};/**
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
 */const ei=new Map,Ji=new Map;function Vd(n,e){try{n.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function st(n){const e=n.name;if(Ji.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;Ji.set(e,n);for(const t of ei.values())Vd(t,n);return!0}function nn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Hd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vt=new zt("app","Firebase",Hd);/**
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
 */class jd{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
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
 */const kn=Fd;function Ca(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:xi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw vt.create("bad-app-name",{appName:String(s)});if(t||(t=ya()),!t)throw vt.create("no-options");const r=ei.get(s);if(r){if(hn(t,r.options)&&hn(i,r.config))return r;throw vt.create("duplicate-app",{appName:s})}const o=new Yf(s);for(const l of Ji.values())o.addComponent(l);const a=new jd(t,i,o);return ei.set(s,a),a}function Aa(n=xi){const e=ei.get(n);if(!e&&n===xi&&ya())return Ca();if(!e)throw vt.create("no-app",{appName:n});return e}function Ge(n,e,t){var i;let s=(i=Bd[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(a.join(" "));return}st(new Xe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zd="firebase-heartbeat-database",Wd=1,mn="firebase-heartbeat-store";let Pi=null;function Ra(){return Pi||(Pi=ld(zd,Wd,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(mn)}}}).catch(n=>{throw vt.create("idb-open",{originalErrorMessage:n.message})})),Pi}async function qd(n){try{return await(await Ra()).transaction(mn).objectStore(mn).get(Da(n))}catch(e){if(e instanceof Ze)Ut.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(t.message)}}}async function xr(n,e){try{const i=(await Ra()).transaction(mn,"readwrite");await i.objectStore(mn).put(e,Da(n)),await i.done}catch(t){if(t instanceof Ze)Ut.warn(t.message);else{const i=vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(i.message)}}}function Da(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Kd=1024,Gd=30*24*60*60*1e3;class xd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yd(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Jr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Gd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jr(),{heartbeatsToSend:t,unsentEntries:i}=Jd(this._heartbeatsCache.heartbeats),s=ba(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Jr(){return new Date().toISOString().substring(0,10)}function Jd(n,e=Kd){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Yr(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Yr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Yd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ea()?ka().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return xr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return xr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yr(n){return ba(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Xd(n){st(new Xe("platform-logger",e=>new fd(e),"PRIVATE")),st(new Xe("heartbeat",e=>new xd(e),"PRIVATE")),Ge(Gi,Gr,n),Ge(Gi,Gr,"esm2017"),Ge("fire-js","")}Xd("");var Qd="firebase",Zd="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(Qd,Zd,"app");const $d=(n,e)=>e.some(t=>n instanceof t);let Xr,Qr;function eh(){return Xr||(Xr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function th(){return Qr||(Qr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pa=new WeakMap,Yi=new WeakMap,Oa=new WeakMap,Oi=new WeakMap,_s=new WeakMap;function nh(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(yt(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Pa.set(t,n)}).catch(()=>{}),_s.set(e,n),e}function ih(n){if(Yi.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Yi.set(n,e)}let Xi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Oa.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sh(n){Xi=n(Xi)}function rh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Li(this),e,...t);return Oa.set(i,e.sort?e.sort():[e]),yt(i)}:th().includes(n)?function(...e){return n.apply(Li(this),e),yt(Pa.get(this))}:function(...e){return yt(n.apply(Li(this),e))}}function oh(n){return typeof n=="function"?rh(n):(n instanceof IDBTransaction&&ih(n),$d(n,eh())?new Proxy(n,Xi):n)}function yt(n){if(n instanceof IDBRequest)return nh(n);if(Oi.has(n))return Oi.get(n);const e=oh(n);return e!==n&&(Oi.set(n,e),_s.set(e,n)),e}const Li=n=>_s.get(n);function ah(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=yt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(yt(o.result),l.oldVersion,l.newVersion,yt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const lh=["get","getKey","getAll","getAllKeys","count"],ch=["put","add","delete","clear"],Mi=new Map;function Zr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Mi.get(e))return Mi.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=ch.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||lh.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&l.done]))[0]};return Mi.set(e,r),r}sh(n=>({...n,get:(e,t,i)=>Zr(e,t)||n.get(e,t,i),has:(e,t)=>!!Zr(e,t)||n.has(e,t)}));const La="@firebase/installations",bs="0.6.4";/**
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
 */const Ma=1e4,Na=`w:${bs}`,Ua="FIS_v2",uh="https://firebaseinstallations.googleapis.com/v1",fh=60*60*1e3,dh="installations",hh="Installations";/**
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
 */const mh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ft=new zt(dh,hh,mh);function Fa(n){return n instanceof Ze&&n.code.includes("request-failed")}/**
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
 */function Ba({projectId:n}){return`${uh}/projects/${n}/installations`}function Va(n){return{token:n.token,requestStatus:2,expiresIn:ph(n.expiresIn),creationTime:Date.now()}}async function Ha(n,e){const i=(await e.json()).error;return Ft.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function ja({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function gh(n,{refreshToken:e}){const t=ja(n);return t.append("Authorization",_h(e)),t}async function za(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ph(n){return Number(n.replace("s","000"))}function _h(n){return`${Ua} ${n}`}/**
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
 */async function bh({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Ba(n),s=ja(n),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:t,authVersion:Ua,appId:n.appId,sdkVersion:Na},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await za(()=>fetch(i,a));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Va(u.authToken)}}else throw await Ha("Create Installation",l)}/**
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
 */function Wa(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function vh(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const yh=/^[cdef][\w-]{21}$/,Qi="";function Ih(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=wh(n);return yh.test(t)?t:Qi}catch{return Qi}}function wh(n){return vh(n).substr(0,22)}/**
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
 */function gi(n){return`${n.appName}!${n.appId}`}/**
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
 */const qa=new Map;function Ka(n,e){const t=gi(n);Ga(t,e),Eh(t,e)}function Ga(n,e){const t=qa.get(n);if(t)for(const i of t)i(e)}function Eh(n,e){const t=kh();t&&t.postMessage({key:n,fid:e}),Th()}let Dt=null;function kh(){return!Dt&&"BroadcastChannel"in self&&(Dt=new BroadcastChannel("[Firebase] FID Change"),Dt.onmessage=n=>{Ga(n.data.key,n.data.fid)}),Dt}function Th(){qa.size===0&&Dt&&(Dt.close(),Dt=null)}/**
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
 */const Sh="firebase-installations-database",Ch=1,Bt="firebase-installations-store";let Ni=null;function vs(){return Ni||(Ni=ah(Sh,Ch,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Bt)}}})),Ni}async function ti(n,e){const t=gi(n),s=(await vs()).transaction(Bt,"readwrite"),r=s.objectStore(Bt),o=await r.get(t);return await r.put(e,t),await s.done,(!o||o.fid!==e.fid)&&Ka(n,e.fid),e}async function xa(n){const e=gi(n),i=(await vs()).transaction(Bt,"readwrite");await i.objectStore(Bt).delete(e),await i.done}async function pi(n,e){const t=gi(n),s=(await vs()).transaction(Bt,"readwrite"),r=s.objectStore(Bt),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await s.done,a&&(!o||o.fid!==a.fid)&&Ka(n,a.fid),a}/**
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
 */async function ys(n){let e;const t=await pi(n.appConfig,i=>{const s=Ah(i),r=Rh(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===Qi?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Ah(n){const e=n||{fid:Ih(),registrationStatus:0};return Ja(e)}function Rh(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ft.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Dh(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ph(n)}:{installationEntry:e}}async function Dh(n,e){try{const t=await bh(n,e);return ti(n.appConfig,t)}catch(t){throw Fa(t)&&t.customData.serverCode===409?await xa(n.appConfig):await ti(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Ph(n){let e=await $r(n.appConfig);for(;e.registrationStatus===1;)await Wa(100),e=await $r(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await ys(n);return i||t}return e}function $r(n){return pi(n,e=>{if(!e)throw Ft.create("installation-not-found");return Ja(e)})}function Ja(n){return Oh(n)?{fid:n.fid,registrationStatus:0}:n}function Oh(n){return n.registrationStatus===1&&n.registrationTime+Ma<Date.now()}/**
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
 */async function Lh({appConfig:n,heartbeatServiceProvider:e},t){const i=Mh(n,t),s=gh(n,t),r=e.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Na,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await za(()=>fetch(i,a));if(l.ok){const u=await l.json();return Va(u)}else throw await Ha("Generate Auth Token",l)}function Mh(n,{fid:e}){return`${Ba(n)}/${e}/authTokens:generate`}/**
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
 */async function Is(n,e=!1){let t;const i=await pi(n.appConfig,r=>{if(!Ya(r))throw Ft.create("not-registered");const o=r.authToken;if(!e&&Fh(o))return r;if(o.requestStatus===1)return t=Nh(n,e),r;{if(!navigator.onLine)throw Ft.create("app-offline");const a=Vh(r);return t=Uh(n,a),a}});return t?await t:i.authToken}async function Nh(n,e){let t=await eo(n.appConfig);for(;t.authToken.requestStatus===1;)await Wa(100),t=await eo(n.appConfig);const i=t.authToken;return i.requestStatus===0?Is(n,e):i}function eo(n){return pi(n,e=>{if(!Ya(e))throw Ft.create("not-registered");const t=e.authToken;return Hh(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Uh(n,e){try{const t=await Lh(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await ti(n.appConfig,i),t}catch(t){if(Fa(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await xa(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ti(n.appConfig,i)}throw t}}function Ya(n){return n!==void 0&&n.registrationStatus===2}function Fh(n){return n.requestStatus===2&&!Bh(n)}function Bh(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+fh}function Vh(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Hh(n){return n.requestStatus===1&&n.requestTime+Ma<Date.now()}/**
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
 */async function jh(n){const e=n,{installationEntry:t,registrationPromise:i}=await ys(e);return i?i.catch(console.error):Is(e).catch(console.error),t.fid}/**
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
 */async function zh(n,e=!1){const t=n;return await Wh(t),(await Is(t,e)).token}async function Wh(n){const{registrationPromise:e}=await ys(n);e&&await e}/**
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
 */function qh(n){if(!n||!n.options)throw Ui("App Configuration");if(!n.name)throw Ui("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ui(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ui(n){return Ft.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="installations",Kh="installations-internal",Gh=n=>{const e=n.getProvider("app").getImmediate(),t=qh(e),i=nn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},xh=n=>{const e=n.getProvider("app").getImmediate(),t=nn(e,Xa).getImmediate();return{getId:()=>jh(t),getToken:s=>zh(t,s)}};function Jh(){st(new Xe(Xa,Gh,"PUBLIC")),st(new Xe(Kh,xh,"PRIVATE"))}Jh();Ge(La,bs);Ge(La,bs,"esm2017");/**
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
 */const ni="analytics",Yh="firebase_id",Xh="origin",Qh=60*1e3,Zh="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ws="https://www.googletagmanager.com/gtag/js";/**
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
 */const De=new gs("@firebase/analytics");/**
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
 */const $h={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Le=new zt("analytics","Analytics",$h);/**
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
 */function em(n){if(!n.startsWith(ws)){const e=Le.create("invalid-gtag-resource",{gtagURL:n});return De.warn(e.message),""}return n}function Qa(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function tm(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function nm(n,e){const t=tm("firebase-js-sdk-policy",{createScriptURL:em}),i=document.createElement("script"),s=`${ws}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function im(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function sm(n,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await Qa(t)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(a){De.error(a)}n("config",s,r)}async function rm(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Qa(t);for(const l of o){const u=a.find(c=>c.measurementId===l),f=u&&e[u.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){De.error(r)}}function om(n,e,t,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await rm(n,e,t,a,l)}else if(r==="config"){const[a,l]=o;await sm(n,e,t,i,a,l)}else if(r==="consent"){const[a]=o;n("consent","update",a)}else if(r==="get"){const[a,l,u]=o;n("get",a,l,u)}else if(r==="set"){const[a]=o;n("set",a)}else n(r,...o)}catch(a){De.error(a)}}return s}function am(n,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=om(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function lm(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ws)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=30,um=1e3;class fm{constructor(e={},t=um){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Za=new fm;function dm(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function hm(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:dm(i)},r=Zh.replace("{app-id}",t),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Le.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function mm(n,e=Za,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw Le.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Le.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new _m;return setTimeout(async()=>{a.abort()},t!==void 0?t:Qh),$a({appId:i,apiKey:s,measurementId:r},o,a,e)}async function $a(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=Za){var r;const{appId:o,measurementId:a}=n;try{await gm(i,e)}catch(l){if(a)return De.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await hm(n);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!pm(u)){if(s.deleteThrottleMetadata(o),a)return De.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const f=Number((r=u==null?void 0:u.customData)===null||r===void 0?void 0:r.httpStatus)===503?zr(t,s.intervalMillis,cm):zr(t,s.intervalMillis),c={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return s.setThrottleMetadata(o,c),De.debug(`Calling attemptFetch again in ${f} millis`),$a(n,c,i,s)}}function gm(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(Le.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pm(n){if(!(n instanceof Ze)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class _m{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function bm(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(){if(Ea())try{await ka()}catch(n){return De.warn(Le.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return De.warn(Le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ym(n,e,t,i,s,r,o){var a;const l=mm(n);l.then(h=>{t[h.measurementId]=h.appId,n.options.measurementId&&h.measurementId!==n.options.measurementId&&De.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>De.error(h)),e.push(l);const u=vm().then(h=>{if(h)return i.getId()}),[f,c]=await Promise.all([l,u]);lm(r)||nm(r,f.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Xh]="firebase",d.update=!0,c!=null&&(d[Yh]=c),s("config",f.measurementId,d),f.measurementId}/**
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
 */class Im{constructor(e){this.app=e}_delete(){return delete ln[this.app.options.appId],Promise.resolve()}}let ln={},to=[];const no={};let Fi="dataLayer",wm="gtag",io,el,so=!1;function Em(){const n=[];if(wa()&&n.push("This is a browser extension environment."),Mf()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=Le.create("invalid-analytics-context",{errorInfo:e});De.warn(t.message)}}function km(n,e,t){Em();const i=n.options.appId;if(!i)throw Le.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)De.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Le.create("no-api-key");if(ln[i]!=null)throw Le.create("already-exists",{id:i});if(!so){im(Fi);const{wrappedGtag:r,gtagCore:o}=am(ln,to,no,Fi,wm);el=r,io=o,so=!0}return ln[i]=ym(n,to,no,e,io,Fi,t),new Im(n)}function Tm(n=Aa()){n=at(n);const e=nn(n,ni);return e.isInitialized()?e.getImmediate():Sm(n)}function Sm(n,e={}){const t=nn(n,ni);if(t.isInitialized()){const s=t.getImmediate();if(hn(e,t.getOptions()))return s;throw Le.create("already-initialized")}return t.initialize({options:e})}function Cm(n,e,t,i){n=at(n),bm(el,ln[n.app.options.appId],e,t,i).catch(s=>De.error(s))}const ro="@firebase/analytics",oo="0.10.0";function Am(){st(new Xe(ni,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return km(i,s,t)},"PUBLIC")),st(new Xe("analytics-internal",n,"PRIVATE")),Ge(ro,oo),Ge(ro,oo,"esm2017");function n(e){try{const t=e.getProvider(ni).getImmediate();return{logEvent:(i,s,r)=>Cm(t,i,s,r)}}catch(t){throw Le.create("interop-component-reg-failed",{reason:t})}}}Am();function Es(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function tl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rm=tl,nl=new zt("auth","Firebase",tl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new gs("@firebase/auth");function Dm(n,...e){ii.logLevel<=ae.WARN&&ii.warn(`Auth (${kn}): ${n}`,...e)}function Wn(n,...e){ii.logLevel<=ae.ERROR&&ii.error(`Auth (${kn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n,...e){throw ks(n,...e)}function xe(n,...e){return ks(n,...e)}function il(n,e,t){const i=Object.assign(Object.assign({},Rm()),{[e]:t});return new zt("auth","Firebase",i).create(e,{appName:n.name})}function Pm(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Qe(n,"argument-error"),il(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ks(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return nl.create(n,...e)}function J(n,e,...t){if(!n)throw ks(e,...t)}function et(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Wn(e),new Error(e)}function rt(n,e){n||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Om(){return ao()==="http:"||ao()==="https:"}function ao(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Om()||wa()||"connection"in navigator)?navigator.onLine:!0}function Mm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t){this.shortDelay=e,this.longDelay=t,rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Pf()||Of()}get(){return Lm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n,e){rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=new Tn(3e4,6e4);function rl(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Sn(n,e,t,i,s={}){return ol(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=En(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),sl.fetch()(al(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function ol(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Nm),e);try{const s=new Bm(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Vn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Vn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Vn(n,"user-disabled",o);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw il(n,f,u);Qe(n,f)}}catch(s){if(s instanceof Ze)throw s;Qe(n,"network-request-failed",{message:String(s)})}}async function Fm(n,e,t,i,s={}){const r=await Sn(n,e,t,i,s);return"mfaPendingCredential"in r&&Qe(n,"multi-factor-auth-required",{_serverResponse:r}),r}function al(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Ts(n.config,s):`${n.config.apiScheme}://${s}`}class Bm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(xe(this.auth,"network-request-failed")),Um.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=xe(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(n,e){return Sn(n,"POST","/v1/accounts:delete",e)}async function Hm(n,e){return Sn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jm(n,e=!1){const t=at(n),i=await t.getIdToken(e),s=Ss(i);J(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:cn(Bi(s.auth_time)),issuedAtTime:cn(Bi(s.iat)),expirationTime:cn(Bi(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Bi(n){return Number(n)*1e3}function Ss(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Wn("JWT malformed, contained fewer than 3 sections"),null;try{const s=va(t);return s?JSON.parse(s):(Wn("Failed to decode base64 JWT payload"),null)}catch(s){return Wn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zm(n){const e=Ss(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ze&&Wm(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Wm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=cn(this.lastLoginAt),this.creationTime=cn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function si(n){var e;const t=n.auth,i=await n.getIdToken(),s=await gn(n,Hm(t,{idToken:i}));J(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?xm(r.providerUserInfo):[],a=Gm(n.providerData,o),l=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ll(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(n,c)}async function Km(n){const e=at(n);await si(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gm(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function xm(n){return n.map(e=>{var{providerId:t}=e,i=Es(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jm(n,e){const t=await ol(n,{},async()=>{const i=En({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=al(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sl.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Jm(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new pn;return i&&(J(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(J(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Lt{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Es(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ll(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await gn(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jm(this,e)}reload(){return Km(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await si(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gn(this,Vm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,u,f;const c=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,h=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,b=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,p=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=t.createdAt)!==null&&u!==void 0?u:void 0,m=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:v,emailVerified:w,isAnonymous:T,providerData:k,stsTokenManager:S}=t;J(v&&S,e,"internal-error");const D=pn.fromJSON(this.name,S);J(typeof v=="string",e,"internal-error"),ft(c,e.name),ft(d,e.name),J(typeof w=="boolean",e,"internal-error"),J(typeof T=="boolean",e,"internal-error"),ft(h,e.name),ft(b,e.name),ft(y,e.name),ft(p,e.name),ft(g,e.name),ft(m,e.name);const M=new Lt({uid:v,auth:e,email:d,emailVerified:w,displayName:c,isAnonymous:T,photoURL:b,phoneNumber:h,tenantId:y,stsTokenManager:D,createdAt:g,lastLoginAt:m});return k&&Array.isArray(k)&&(M.providerData=k.map(O=>Object.assign({},O))),p&&(M._redirectEventId=p),M}static async _fromIdTokenResponse(e,t,i=!1){const s=new pn;s.updateFromServerResponse(t);const r=new Lt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await si(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Map;function tt(n){rt(n instanceof Function,"Expected a class definition");let e=lo.get(n);return e?(rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,lo.set(n,e),e)}/**
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
 */class cl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cl.type="NONE";const co=cl;/**
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
 */function qn(n,e,t){return`firebase:${n}:${e}:${t}`}class xt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=qn(this.userKey,s.apiKey,r),this.fullPersistenceKey=qn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new xt(tt(co),e,i);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||tt(co);const o=qn(i,e.config.apiKey,e.name);let a=null;for(const u of t)try{const f=await u._get(o);if(f){const c=Lt._fromJSON(e,f);u!==r&&(a=c),r=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new xt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new xt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ul(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ml(e))return"Blackberry";if(gl(e))return"Webos";if(Cs(e))return"Safari";if((e.includes("chrome/")||fl(e))&&!e.includes("edge/"))return"Chrome";if(hl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ul(n=Se()){return/firefox\//i.test(n)}function Cs(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fl(n=Se()){return/crios\//i.test(n)}function dl(n=Se()){return/iemobile/i.test(n)}function hl(n=Se()){return/android/i.test(n)}function ml(n=Se()){return/blackberry/i.test(n)}function gl(n=Se()){return/webos/i.test(n)}function _i(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ym(n=Se()){var e;return _i(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xm(){return Lf()&&document.documentMode===10}function pl(n=Se()){return _i(n)||hl(n)||gl(n)||ml(n)||/windows phone/i.test(n)||dl(n)}function Qm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n,e=[]){let t;switch(n){case"Browser":t=uo(Se());break;case"Worker":t=`${uo(Se())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${kn}/${i}`}async function bl(n,e){return Sn(n,"GET","/v2/recaptchaConfig",rl(n,e))}function fo(n){return n!==void 0&&n.enterprise!==void 0}class vl{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function yl(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=xe("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Zm().appendChild(i)})}function $m(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const eg="https://www.google.com/recaptcha/enterprise.js?render=",tg="recaptcha-enterprise",ng="NO_RECAPTCHA";class ig{constructor(e){this.type=tg,this.auth=Cn(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{bl(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new vl(l);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;fo(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(ng)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&fo(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}yl(eg+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class sg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ho(this),this.idTokenSubscription=new ho(this),this.beforeStateQueue=new sg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tt(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await xt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await si(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?at(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}async initializeRecaptchaConfig(){const e=await bl(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new vl(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new ig(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zt("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tt(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await xt.create(this,[tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_l(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Dm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Cn(n){return at(n)}class ho{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vf(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n,e){const t=nn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(hn(r,e??{}))return s;Qe(s,"already-initialized")}return t.initialize({options:e})}function ag(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(tt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function lg(n,e,t){const i=Cn(n);J(i._canInitEmulator,i,"emulator-config-failed"),J(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Il(e),{host:o,port:a}=cg(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ug()}function Il(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function cg(n){const e=Il(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:mo(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:mo(o)}}}function mo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ug(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,t){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(n,e){return Fm(n,"POST","/v1/accounts:signInWithIdp",rl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="http://localhost";class Vt extends wl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Es(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Vt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Jt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Jt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jt(e,t)}buildRequest(){const e={requestUri:fg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=En(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class An extends As{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends An{constructor(){super("facebook.com")}static credential(e){return Vt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends An{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return mt.credential(t,i)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends An{constructor(){super("github.com")}static credential(e){return Vt._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch{return null}}}Ke.GITHUB_SIGN_IN_METHOD="github.com";Ke.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends An{constructor(){super("twitter.com")}static credential(e,t){return Vt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return gt.credential(t,i)}catch{return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com";gt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Lt._fromIdTokenResponse(e,i,s),o=go(i);return new tn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=go(i);return new tn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function go(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Ze{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ri.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new ri(e,t,i,s)}}function El(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ri._fromErrorAndOperation(n,r,e,i):r})}async function dg(n,e,t=!1){const i=await gn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return tn._forOperation(n,"link",i)}/**
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
 */async function hg(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await gn(n,El(i,s,e,n),t);J(r.idToken,i,"internal-error");const o=Ss(r.idToken);J(o,i,"internal-error");const{sub:a}=o;return J(n.uid===a,i,"user-mismatch"),tn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Qe(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(n,e,t=!1){const i="signIn",s=await El(n,i,e),r=await tn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}function gg(n,e,t,i){return at(n).onIdTokenChanged(e,t,i)}function pg(n,e,t){return at(n).beforeAuthStateChanged(e,t)}function _g(n){return at(n).signOut()}const oi="__sak";/**
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
 */class kl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(oi,"1"),this.storage.removeItem(oi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(){const n=Se();return Cs(n)||_i(n)}const vg=1e3,yg=10;class Tl extends kl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bg()&&Qm(),this.fallbackToPolling=pl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Xm()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yg):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tl.type="LOCAL";const Ig=Tl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends kl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Sl.type="SESSION";const Cl=Sl;/**
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
 */function wg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class bi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new bi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,r)),l=await wg(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Eg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=Rs("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(c){const d=c;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(f),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function kg(n){Je().location.href=n}/**
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
 */function Al(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function Tg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Cg(){return Al()?self:null}/**
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
 */const Rl="firebaseLocalStorageDb",Ag=1,ai="firebaseLocalStorage",Dl="fbase_key";class Rn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vi(n,e){return n.transaction([ai],e?"readwrite":"readonly").objectStore(ai)}function Rg(){const n=indexedDB.deleteDatabase(Rl);return new Rn(n).toPromise()}function $i(){const n=indexedDB.open(Rl,Ag);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ai,{keyPath:Dl})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(ai)?e(i):(i.close(),await Rg(),e(await $i()))})})}async function po(n,e,t){const i=vi(n,!0).put({[Dl]:e,value:t});return new Rn(i).toPromise()}async function Dg(n,e){const t=vi(n,!1).get(e),i=await new Rn(t).toPromise();return i===void 0?null:i.value}function _o(n,e){const t=vi(n,!0).delete(e);return new Rn(t).toPromise()}const Pg=800,Og=3;class Pl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $i(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Og)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Al()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bi._getInstance(Cg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Tg(),!this.activeServiceWorker)return;this.sender=new Eg(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $i();return await po(e,oi,"1"),await _o(e,oi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>po(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Dg(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_o(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=vi(s,!1).getAll();return new Rn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pl.type="LOCAL";const Lg=Pl;new Tn(3e4,6e4);/**
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
 */function Ol(n,e){return e?tt(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ds extends wl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mg(n){return mg(n.auth,new Ds(n),n.bypassAuthState)}function Ng(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),hg(t,new Ds(n),n.bypassAuthState)}async function Ug(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),dg(t,new Ds(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mg;case"linkViaPopup":case"linkViaRedirect":return Ug;case"reauthViaPopup":case"reauthViaRedirect":return Ng;default:Qe(this.auth,"internal-error")}}resolve(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=new Tn(2e3,1e4);async function Bg(n,e,t){const i=Cn(n);Pm(n,e,As);const s=Ol(i,t);return new Pt(i,"signInViaPopup",e,s).executeNotNull()}class Pt extends Ll{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Pt.currentPopupAction&&Pt.currentPopupAction.cancel(),Pt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){rt(this.filter.length===1,"Popup operations only handle one event");const e=Rs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Fg.get())};e()}}Pt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="pendingRedirect",Kn=new Map;class Hg extends Ll{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Kn.get(this.auth._key());if(!e){try{const i=await jg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Kn.set(this.auth._key(),e)}return this.bypassAuthState||Kn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jg(n,e){const t=qg(e),i=Wg(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function zg(n,e){Kn.set(n._key(),e)}function Wg(n){return tt(n._redirectPersistence)}function qg(n){return qn(Vg,n.config.apiKey,n.name)}async function Kg(n,e,t=!1){const i=Cn(n),s=Ol(i,e),o=await new Hg(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=10*60*1e3;class xg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ml(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(xe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gg&&this.cachedEventUids.clear(),this.cachedEventUids.has(bo(e))}saveEventToCache(e){this.cachedEventUids.add(bo(e)),this.lastProcessedEventTime=Date.now()}}function bo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ml({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ml(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(n,e={}){return Sn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qg=/^https?/;async function Zg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Yg(n);for(const t of e)try{if($g(t))return}catch{}Qe(n,"unauthorized-domain")}function $g(n){const e=Zi(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Qg.test(t))return!1;if(Xg.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const ep=new Tn(3e4,6e4);function vo(){const n=Je().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function tp(n){return new Promise((e,t)=>{var i,s,r;function o(){vo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vo(),t(xe(n,"network-request-failed"))},timeout:ep.get()})}if(!((s=(i=Je().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Je().gapi)===null||r===void 0)&&r.load)o();else{const a=$m("iframefcb");return Je()[a]=()=>{gapi.load?o():t(xe(n,"network-request-failed"))},yl(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Gn=null,e})}let Gn=null;function np(n){return Gn=Gn||tp(n),Gn}/**
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
 */const ip=new Tn(5e3,15e3),sp="__/auth/iframe",rp="emulator/auth/iframe",op={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ap=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lp(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ts(e,rp):`https://${n.config.authDomain}/${sp}`,i={apiKey:e.apiKey,appName:n.name,v:kn},s=ap.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${En(i).slice(1)}`}async function cp(n){const e=await np(n),t=Je().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:lp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:op,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=xe(n,"network-request-failed"),a=Je().setTimeout(()=>{r(o)},ip.get());function l(){Je().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const up={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fp=500,dp=600,hp="_blank",mp="http://localhost";class yo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gp(n,e,t,i=fp,s=dp){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},up),{width:i.toString(),height:s.toString(),top:r,left:o}),u=Se().toLowerCase();t&&(a=fl(u)?hp:t),ul(u)&&(e=e||mp,l.scrollbars="yes");const f=Object.entries(l).reduce((d,[h,b])=>`${d}${h}=${b},`,"");if(Ym(u)&&a!=="_self")return pp(e||"",a),new yo(null);const c=window.open(e||"",a,f);J(c,n,"popup-blocked");try{c.focus()}catch{}return new yo(c)}function pp(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const _p="__/auth/handler",bp="emulator/auth/handler",vp=encodeURIComponent("fac");async function Io(n,e,t,i,s,r){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:kn,eventId:s};if(e instanceof As){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Bf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,c]of Object.entries(r||{}))o[f]=c}if(e instanceof An){const f=e.getScopes().filter(c=>c!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await n._getAppCheckToken(),u=l?`#${vp}=${encodeURIComponent(l)}`:"";return`${yp(n)}?${En(a).slice(1)}${u}`}function yp({config:n}){return n.emulator?Ts(n,bp):`https://${n.authDomain}/${_p}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="webStorageSupport";class Ip{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cl,this._completeRedirectFn=Kg,this._overrideRedirectResult=zg}async _openPopup(e,t,i,s){var r;rt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Io(e,t,i,Zi(),s);return gp(e,o,Rs())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Io(e,t,i,Zi(),s);return kg(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(rt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await cp(e),i=new xg(e);return t.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vi,{type:Vi},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Vi];o!==void 0&&t(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Zg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pl()||Cs()||_i()}}const wp=Ip;var wo="@firebase/auth",Eo="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Tp(n){st(new Xe("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_l(n)},u=new rg(i,s,r,l);return ag(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),st(new Xe("auth-internal",e=>{const t=Cn(e.getProvider("auth").getImmediate());return(i=>new Ep(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(wo,Eo,kp(n)),Ge(wo,Eo,"esm2017")}/**
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
 */const Sp=5*60,Cp=Ia("authIdTokenMaxAge")||Sp;let ko=null;const Ap=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Cp)return;const s=t==null?void 0:t.token;ko!==s&&(ko=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Rp(n=Aa()){const e=nn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=og(n,{popupRedirectResolver:wp,persistence:[Lg,Ig,Cl]}),i=Ia("authTokenSyncURL");if(i){const r=Ap(i);pg(t,r,()=>r(t.currentUser)),gg(t,o=>r(o))}const s=Rf("auth");return s&&lg(t,`http://${s}`),t}Tp("Browser");const Dp={apiKey:"AIzaSyAjCRLDHuTkfnKU5TTV6ZZasUXecSvlQOE",authDomain:"virtual-pinball-spreadsh-71a64.firebaseapp.com",projectId:"virtual-pinball-spreadsh-71a64",appId:"1:497322440319:web:8a7f7a2997664a9af7f14a",measurementId:"G-DB48L7QGX0"},Nl=Ca(Dp);Tm(Nl);const Ul=Rp(Nl),Pp="VirtualPinballSpreadsheet",Op="vps-db",Ps=fi("user",{});let Lp;const Mp=()=>{const n=new Ke;n.addScope("public_repo"),n.setCustomParameters({allow_signup:"false"}),Bg(Ul,n).then(async e=>{const t=Ke.credentialFromResult(e),i=e.user;if(i.displayName=e._tokenResponse.screenName,!(t!=null&&t.accessToken))throw new Error;Fl(t.accessToken,i)}).catch(e=>{console.error(e)})},Fl=async(n,e)=>{try{const{Octokit:t}=await Qs(()=>import("https://esm.sh/octokit"),[],import.meta.url),{createOrUpdateTextFile:i}=await Qs(()=>import("https://esm.sh/@octokit/plugin-create-or-update-text-file"),[],import.meta.url),s=t.plugin(i),r=new s({auth:n}),a=(await r.request("GET /repos/{owner}/{repo}/collaborators/{username}/permission",{owner:Pp,username:e.displayName,repo:Op})).data.permission;if(!(a==="admin"||a==="write"||location.hostname==="localhost"||location.hostname==="127.0.0.1")){Kt().trigger({message:"You don't have permission to edit on VPS.",background:"variant-filled-error"});return}Lp=r,Ps.set({user:e,permission:a,token:n}),Kt().trigger({message:"Login successfull",background:"variant-filled-success"})}catch(t){console.log(t),Kt().trigger({message:"Login was unsuccessfull.",background:"variant-filled-error"})}},Np=()=>{_g(Ul).then(()=>{Ps.set({}),Kt().trigger({message:"Logout successfull",background:"variant-filled-success"})})},Dn={login:Fl,logout:Np,triggerLoginPopup:Mp,userStore:Ps};function To(n,e,t){const i=n.slice();return i[7]=e[t],i}function So(n){let e,t=n[7][1].name+"",i;return{c(){e=C("option"),i=$(t),this.h()},l(s){e=A(s,"OPTION",{});var r=R(e);i=ee(r,t),r.forEach(I),this.h()},h(){e.__value=n[7][0],nt(e,e.__value)},m(s,r){V(s,e,r),E(e,i)},p:ce,d(s){s&&I(e)}}}function Up(n){let e,t,i,s,r,o,a,l,u,f,c,d,h,b;s=new dn({props:{icon:$l}});let y=Te(n[5]),p=[];for(let g=0;g<y.length;g+=1)p[g]=So(To(n,y,g));return c=new dn({props:{icon:ec}}),{c(){e=C("div"),t=C("div"),i=C("div"),Y(s.$$.fragment),r=U(),o=C("input"),a=U(),l=C("select");for(let g=0;g<p.length;g+=1)p[g].c();u=U(),f=C("button"),Y(c.$$.fragment),this.h()},l(g){e=A(g,"DIV",{class:!0});var m=R(e);t=A(m,"DIV",{class:!0});var v=R(t);i=A(v,"DIV",{class:!0});var w=R(i);Z(s.$$.fragment,w),w.forEach(I),r=F(v),o=A(v,"INPUT",{type:!0,placeholder:!0}),a=F(v),l=A(v,"SELECT",{class:!0});var T=R(l);for(let S=0;S<p.length;S+=1)p[S].l(T);T.forEach(I),v.forEach(I),u=F(m),f=A(m,"BUTTON",{class:!0});var k=R(f);Z(c.$$.fragment,k),k.forEach(I),m.forEach(I),this.h()},h(){_(i,"class","input-group-shim"),_(o,"type","search"),_(o,"placeholder","Search..."),_(l,"class","select rounded-l-none"),n[1]===void 0&&It(()=>n[9].call(l)),_(t,"class","input-group input-group-divider grid-cols-[auto_1fr_auto]"),_(f,"class","btn hover:variant-soft-primary btn-icon"),pt(f,"variant-filled-primary",n[2]),_(e,"class","px-4 flex items-center gap-4")},m(g,m){V(g,e,m),E(e,t),E(t,i),X(s,i,null),E(t,r),E(t,o),nt(o,n[0]),E(t,a),E(t,l);for(let v=0;v<p.length;v+=1)p[v]&&p[v].m(l,null);Gs(l,n[1],!0),E(e,u),E(e,f),X(c,f,null),d=!0,h||(b=[q(o,"input",n[8]),q(l,"change",n[9]),q(f,"click",n[10])],h=!0)},p(g,m){if(m&1&&o.value!==g[0]&&nt(o,g[0]),m&32){y=Te(g[5]);let v;for(v=0;v<y.length;v+=1){const w=To(g,y,v);p[v]?p[v].p(w,m):(p[v]=So(w),p[v].c(),p[v].m(l,null))}for(;v<p.length;v+=1)p[v].d(1);p.length=y.length}m&34&&Gs(l,g[1]),(!d||m&4)&&pt(f,"variant-filled-primary",g[2])},i(g){d||(P(s.$$.fragment,g),P(c.$$.fragment,g),d=!0)},o(g){L(s.$$.fragment,g),L(c.$$.fragment,g),d=!1},d(g){g&&I(e),Q(s),bn(p,g),Q(c),h=!1,Be(b)}}}function Fp(n){let e,t=`<img src="${If}" alt="VPS" width="36px"/>`;return{c(){e=C("a"),e.innerHTML=t,this.h()},l(i){e=A(i,"A",{href:!0,class:!0,"data-svelte-h":!0}),Ae(e)!=="svelte-kw8dyq"&&(e.innerHTML=t),this.h()},h(){_(e,"href","/"),_(e,"class","ml-4 rounded-full logo transition-shadow svelte-tmztqq")},m(i,s){V(i,e,s)},p:ce,d(i){i&&I(e)}}}function Bp(n){let e,t,i="Apps",s,r,o="Links",a,l,u,f,c,d,h,b,y,p;return f=new dn({props:{icon:tc,class:"ml-2",size:"xs"}}),h=new dn({props:{icon:nc}}),{c(){e=C("div"),t=C("a"),t.textContent=i,s=U(),r=C("a"),r.textContent=o,a=U(),l=C("button"),u=$("Settings "),Y(f.$$.fragment),c=U(),d=C("a"),Y(h.$$.fragment),this.h()},l(g){e=A(g,"DIV",{slot:!0,class:!0});var m=R(e);t=A(m,"A",{href:!0,class:!0,"data-svelte-h":!0}),Ae(t)!=="svelte-tjfgp6"&&(t.textContent=i),s=F(m),r=A(m,"A",{href:!0,class:!0,"data-svelte-h":!0}),Ae(r)!=="svelte-in8qks"&&(r.textContent=o),a=F(m),l=A(m,"BUTTON",{class:!0});var v=R(l);u=ee(v,"Settings "),Z(f.$$.fragment,v),v.forEach(I),c=F(m),d=A(m,"A",{href:!0,class:!0});var w=R(d);Z(h.$$.fragment,w),w.forEach(I),m.forEach(I),this.h()},h(){_(t,"href","apps/"),_(t,"class","btn btn-sm hover:variant-soft-primary"),_(r,"href","links/"),_(r,"class","btn btn-sm hover:variant-soft-primary"),_(l,"class","btn btn-sm hover:variant-soft-primary"),_(d,"href","help/"),_(d,"class","btn hover:variant-soft-primary btn-icon"),_(e,"slot","trail"),_(e,"class","mr-4 flex items-center gap-4")},m(g,m){V(g,e,m),E(e,t),E(e,s),E(e,r),E(e,a),E(e,l),E(l,u),X(f,l,null),E(e,c),E(e,d),X(h,d,null),b=!0,y||(p=_n(ea.call(null,l,n[6])),y=!0)},p:ce,i(g){b||(P(f.$$.fragment,g),P(h.$$.fragment,g),b=!0)},o(g){L(f.$$.fragment,g),L(h.$$.fragment,g),b=!1},d(g){g&&I(e),Q(f),Q(h),y=!1,p()}}}function Vp(n){let e,t;return e=new Nc({props:{$$slots:{trail:[Bp],lead:[Fp],default:[Up]},$$scope:{ctx:n}}}),{c(){Y(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,s){X(e,i,s),t=!0},p(i,[s]){const r={};s&32775&&(r.$$scope={dirty:s,ctx:i}),e.$set(r)},i(i){t||(P(e.$$.fragment,i),t=!0)},o(i){L(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function Hp(n,e,t){let i,s,r;const{query:o,mode:a,filterActive:l}=dt;ke(n,o,b=>t(0,i=b)),ke(n,a,b=>t(1,s=b)),ke(n,l,b=>t(2,r=b));const u=Object.entries(Jo),f={event:"focus-click",target:"popupSettings",placement:"bottom",closeQuery:".listbox-item"};function c(){i=this.value,o.set(i)}function d(){s=Hl(this),a.set(s),t(5,u)}return[i,s,r,o,l,u,f,a,c,d,()=>Go(l,r=!r,r)]}class jp extends me{constructor(e){super(),ge(this,e,Hp,Vp,de,{})}}const Bl=sc("goto");dt.finalResultsStore.subscribe(()=>{var o;const n=Rt(dt.query),e=Rt(dt.filterActive);if(!n&&!e)return;const t=Rt(os),i=(o=t==null?void 0:t.url)==null?void 0:o.pathname;if(!i||!Rt(dt.isSearchActive)&&i==="/")return;const s=Rt(dt.mode),r=Jo[s].route;i!=null&&i.includes(r)||(console.log(t,i,s,r),Bl("/"+r,{keepFocus:!0}))});function Co(n){let e,t,i,s,r;return t=new dn({props:{icon:ic}}),{c(){e=C("a"),Y(t.$$.fragment),i=$("IPDB"),this.h()},l(o){e=A(o,"A",{class:!0,href:!0});var a=R(e);Z(t.$$.fragment,a),i=ee(a,"IPDB"),a.forEach(I),this.h()},h(){_(e,"class","chip variant-soft hover:variant-filled-primary gap-2"),_(e,"href",s=n[0].ipdbUrl)},m(o,a){V(o,e,a),X(t,e,null),E(e,i),r=!0},p(o,a){(!r||a&1&&s!==(s=o[0].ipdbUrl))&&_(e,"href",s)},i(o){r||(P(t.$$.fragment,o),r=!0)},o(o){L(t.$$.fragment,o),r=!1},d(o){o&&I(e),Q(t)}}}function zp(n){var Ns,Us;let e,t,i,s,r,o,a,l,u=(((Ns=n[0].theme)==null?void 0:Ns.join(" • "))||"")+"",f,c,d,h,b=n[0].name+"",y,p,g,m=n[0].manufacturer+"",v,w,T=n[0].year+"",k,S,D,M,O=(((Us=n[0].designers)==null?void 0:Us.join(", "))||"")+"",K,x,W,G,te,ne="Players",fe,be,pe=(n[0].players||"-")+"",j,z,B,ie,we,He,lt="Type",kt,We,$e=(n[0].type||"-")+"",H,je,ze,N,Ee,qe,Os="Updated at",yi,Wt,sn=Yn(n[0].updatedAt)+"",Pn,Ii,rn,wi,ct,Tt,Ls="ID",Ei,ut,on=n[0].id+"",On,Ln,Ce,ki,Ms,ve=n[0].ipdbUrl&&Co(n);return{c(){e=C("div"),t=C("img"),r=U(),o=C("div"),a=C("div"),l=C("p"),f=$(u),c=U(),ve&&ve.c(),d=U(),h=C("h1"),y=$(b),p=U(),g=C("h4"),v=$(m),w=$(" ("),k=$(T),S=$(")"),D=U(),M=C("p"),K=$(O),x=U(),W=C("div"),G=C("div"),te=C("p"),te.textContent=ne,fe=U(),be=C("p"),j=$(pe),z=U(),B=C("div"),ie=U(),we=C("div"),He=C("p"),He.textContent=lt,kt=U(),We=C("p"),H=$($e),je=U(),ze=C("div"),N=U(),Ee=C("div"),qe=C("p"),qe.textContent=Os,yi=U(),Wt=C("p"),Pn=$(sn),Ii=U(),rn=C("div"),wi=U(),ct=C("div"),Tt=C("p"),Tt.textContent=Ls,Ei=U(),ut=C("button"),On=$(on),this.h()},l(ue){e=A(ue,"DIV",{class:!0});var _e=R(e);t=A(_e,"IMG",{class:!0,src:!0,alt:!0}),r=F(_e),o=A(_e,"DIV",{class:!0});var Pe=R(o);a=A(Pe,"DIV",{class:!0});var St=R(a);l=A(St,"P",{class:!0});var Fs=R(l);f=ee(Fs,u),Fs.forEach(I),c=F(St),ve&&ve.l(St),St.forEach(I),d=F(Pe),h=A(Pe,"H1",{class:!0});var Bs=R(h);y=ee(Bs,b),Bs.forEach(I),p=F(Pe),g=A(Pe,"H4",{class:!0});var an=R(g);v=ee(an,m),w=ee(an," ("),k=ee(an,T),S=ee(an,")"),an.forEach(I),D=F(Pe),M=A(Pe,"P",{class:!0});var Vs=R(M);K=ee(Vs,O),Vs.forEach(I),x=F(Pe),W=A(Pe,"DIV",{class:!0});var Re=R(W);G=A(Re,"DIV",{class:!0});var Mn=R(G);te=A(Mn,"P",{class:!0,"data-svelte-h":!0}),Ae(te)!=="svelte-1vi5dc3"&&(te.textContent=ne),fe=F(Mn),be=A(Mn,"P",{class:!0});var Hs=R(be);j=ee(Hs,pe),Hs.forEach(I),Mn.forEach(I),z=F(Re),B=A(Re,"DIV",{class:!0}),R(B).forEach(I),ie=F(Re),we=A(Re,"DIV",{class:!0});var Nn=R(we);He=A(Nn,"P",{class:!0,"data-svelte-h":!0}),Ae(He)!=="svelte-1h1g7sd"&&(He.textContent=lt),kt=F(Nn),We=A(Nn,"P",{class:!0});var js=R(We);H=ee(js,$e),js.forEach(I),Nn.forEach(I),je=F(Re),ze=A(Re,"DIV",{class:!0}),R(ze).forEach(I),N=F(Re),Ee=A(Re,"DIV",{class:!0});var Un=R(Ee);qe=A(Un,"P",{class:!0,"data-svelte-h":!0}),Ae(qe)!=="svelte-g6tq99"&&(qe.textContent=Os),yi=F(Un),Wt=A(Un,"P",{class:!0});var zs=R(Wt);Pn=ee(zs,sn),zs.forEach(I),Un.forEach(I),Ii=F(Re),rn=A(Re,"DIV",{class:!0}),R(rn).forEach(I),wi=F(Re),ct=A(Re,"DIV",{class:!0});var Fn=R(ct);Tt=A(Fn,"P",{class:!0,"data-svelte-h":!0}),Ae(Tt)!=="svelte-lju6x8"&&(Tt.textContent=Ls),Ei=F(Fn),ut=A(Fn,"BUTTON",{class:!0});var Ws=R(ut);On=ee(Ws,on),Ws.forEach(I),Fn.forEach(I),Re.forEach(I),Pe.forEach(I),_e.forEach(I),this.h()},h(){_(t,"class","rounded-md aspectBG w-96 svelte-v17uty"),un(t.src,i=n[0].imgUrl||Xs(n[0]))||_(t,"src",i),_(t,"alt",s=n[0].name),_(l,"class","flex-1 uppercase font-bold text-sm opacity-40"),_(a,"class","flex"),_(h,"class","h1"),_(g,"class","h4"),_(M,"class","opacity-60"),_(te,"class","text-xs font-bold uppercase opacity-40"),_(be,"class",""),_(G,"class","flex flex-col items-center justify-center flex-1 gap-1"),_(B,"class","bg-surface-900-50-token h-full w-px opacity-20"),_(He,"class","text-xs font-bold uppercase opacity-40"),_(We,"class",""),_(we,"class","flex flex-col items-center justify-center flex-1 gap-1"),_(ze,"class","bg-surface-900-50-token h-full w-px opacity-20"),_(qe,"class","text-xs font-bold uppercase opacity-40"),_(Wt,"class",""),_(Ee,"class","flex flex-col items-center justify-center flex-1 gap-1"),_(rn,"class","bg-surface-900-50-token h-full w-px opacity-20"),_(Tt,"class","text-xs font-bold uppercase opacity-40"),_(ut,"class","chip badge-glass py-0.5 px-1"),_(ct,"class","flex flex-col items-center justify-center flex-1 gap-1"),_(W,"class","flex w-full mt-auto"),_(o,"class","flex flex-col flex-1 gap-2"),_(e,"class","flex gap-8")},m(ue,_e){V(ue,e,_e),E(e,t),E(e,r),E(e,o),E(o,a),E(a,l),E(l,f),E(a,c),ve&&ve.m(a,null),E(o,d),E(o,h),E(h,y),E(o,p),E(o,g),E(g,v),E(g,w),E(g,k),E(g,S),E(o,D),E(o,M),E(M,K),E(o,x),E(o,W),E(W,G),E(G,te),E(G,fe),E(G,be),E(be,j),E(W,z),E(W,B),E(W,ie),E(W,we),E(we,He),E(we,kt),E(we,We),E(We,H),E(W,je),E(W,ze),E(W,N),E(W,Ee),E(Ee,qe),E(Ee,yi),E(Ee,Wt),E(Wt,Pn),E(W,Ii),E(W,rn),E(W,wi),E(W,ct),E(ct,Tt),E(ct,Ei),E(ct,ut),E(ut,On),Ce=!0,ki||(Ms=[_n(Ln=wc.call(null,ut,n[0].id)),q(ut,"click",n[2])],ki=!0)},p(ue,[_e]){var Pe,St;(!Ce||_e&1&&!un(t.src,i=ue[0].imgUrl||Xs(ue[0])))&&_(t,"src",i),(!Ce||_e&1&&s!==(s=ue[0].name))&&_(t,"alt",s),(!Ce||_e&1)&&u!==(u=(((Pe=ue[0].theme)==null?void 0:Pe.join(" • "))||"")+"")&&le(f,u),ue[0].ipdbUrl?ve?(ve.p(ue,_e),_e&1&&P(ve,1)):(ve=Co(ue),ve.c(),P(ve,1),ve.m(a,null)):ve&&(re(),L(ve,1,1,()=>{ve=null}),oe()),(!Ce||_e&1)&&b!==(b=ue[0].name+"")&&le(y,b),(!Ce||_e&1)&&m!==(m=ue[0].manufacturer+"")&&le(v,m),(!Ce||_e&1)&&T!==(T=ue[0].year+"")&&le(k,T),(!Ce||_e&1)&&O!==(O=(((St=ue[0].designers)==null?void 0:St.join(", "))||"")+"")&&le(K,O),(!Ce||_e&1)&&pe!==(pe=(ue[0].players||"-")+"")&&le(j,pe),(!Ce||_e&1)&&$e!==($e=(ue[0].type||"-")+"")&&le(H,$e),(!Ce||_e&1)&&sn!==(sn=Yn(ue[0].updatedAt)+"")&&le(Pn,sn),(!Ce||_e&1)&&on!==(on=ue[0].id+"")&&le(On,on),Ln&&ci(Ln.update)&&_e&1&&Ln.update.call(null,ue[0].id)},i(ue){Ce||(P(ve),Ce=!0)},o(ue){L(ve),Ce=!1},d(ue){ue&&I(e),ve&&ve.d(),ki=!1,Be(Ms)}}}function Wp(n,e,t){const i=Kt();let{game:s=Hi}=e;const r=()=>{i.trigger({message:`${s.id} copied to clipboard.`})};return n.$$set=o=>{"game"in o&&t(0,s=o.game)},[s,i,r]}class qp extends me{constructor(e){super(),ge(this,e,Wp,zp,de,{game:0})}}function Ao(n,e,t){const i=n.slice();return i[1]=e[t],i}function Ro(n){let e,t,i='<h3 class="h3">Tables</h3>',s,r,o,a=Te(n[0]),l=[];for(let f=0;f<a.length;f+=1)l[f]=Do(Ao(n,a,f));const u=f=>L(l[f],1,1,()=>{l[f]=null});return{c(){e=C("div"),t=C("div"),t.innerHTML=i,s=U(),r=C("div");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=A(f,"DIV",{class:!0});var c=R(e);t=A(c,"DIV",{class:!0,"data-svelte-h":!0}),Ae(t)!=="svelte-1s1r7y4"&&(t.innerHTML=i),s=F(c),r=A(c,"DIV",{class:!0});var d=R(r);for(let h=0;h<l.length;h+=1)l[h].l(d);d.forEach(I),c.forEach(I),this.h()},h(){_(t,"class","flex items-end gap-4"),_(r,"class","grid layout gap-y-10 gap-x-4 svelte-193p9ri"),_(e,"class","flex flex-col gap-4")},m(f,c){V(f,e,c),E(e,t),E(e,s),E(e,r);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(r,null);o=!0},p(f,c){if(c&1){a=Te(f[0]);let d;for(d=0;d<a.length;d+=1){const h=Ao(f,a,d);l[d]?(l[d].p(h,c),P(l[d],1)):(l[d]=Do(h),l[d].c(),P(l[d],1),l[d].m(r,null))}for(re(),d=a.length;d<l.length;d+=1)u(d);oe()}},i(f){if(!o){for(let c=0;c<a.length;c+=1)P(l[c]);o=!0}},o(f){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)L(l[c]);o=!1},d(f){f&&I(e),bn(l,f)}}}function Do(n){var i,s;let e,t;return e=new Xl({props:{file:n[1],href:((s=(i=n[1].urls)==null?void 0:i[0])==null?void 0:s.url)||""}}),{c(){Y(e.$$.fragment)},l(r){Z(e.$$.fragment,r)},m(r,o){X(e,r,o),t=!0},p(r,o){var l,u;const a={};o&1&&(a.file=r[1]),o&1&&(a.href=((u=(l=r[1].urls)==null?void 0:l[0])==null?void 0:u.url)||""),e.$set(a)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Q(e,r)}}}function Kp(n){var s;let e,t,i=((s=n[0])==null?void 0:s.length)&&Ro(n);return{c(){i&&i.c(),e=ye()},l(r){i&&i.l(r),e=ye()},m(r,o){i&&i.m(r,o),V(r,e,o),t=!0},p(r,[o]){var a;(a=r[0])!=null&&a.length?i?(i.p(r,o),o&1&&P(i,1)):(i=Ro(r),i.c(),P(i,1),i.m(e.parentNode,e)):i&&(re(),L(i,1,1,()=>{i=null}),oe())},i(r){t||(P(i),t=!0)},o(r){L(i),t=!1},d(r){r&&I(e),i&&i.d(r)}}}function Gp(n,e,t){let{tables:i=[]}=e;return n.$$set=s=>{"tables"in s&&t(0,i=s.tables)},[i]}class xp extends me{constructor(e){super(),ge(this,e,Gp,Kp,de,{tables:0})}}function Po(n,e,t){const i=n.slice();return i[1]=e[t],i}function Oo(n){let e,t,i='<h3 class="h3">Backglasses</h3>',s,r,o,a=Te(n[0]),l=[];for(let f=0;f<a.length;f+=1)l[f]=Lo(Po(n,a,f));const u=f=>L(l[f],1,1,()=>{l[f]=null});return{c(){e=C("div"),t=C("div"),t.innerHTML=i,s=U(),r=C("div");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=A(f,"DIV",{class:!0});var c=R(e);t=A(c,"DIV",{class:!0,"data-svelte-h":!0}),Ae(t)!=="svelte-cu5gg"&&(t.innerHTML=i),s=F(c),r=A(c,"DIV",{class:!0});var d=R(r);for(let h=0;h<l.length;h+=1)l[h].l(d);d.forEach(I),c.forEach(I),this.h()},h(){_(t,"class","flex items-end gap-4"),_(r,"class","grid layout gap-y-10 gap-x-4 svelte-193p9ri"),_(e,"class","flex flex-col gap-4")},m(f,c){V(f,e,c),E(e,t),E(e,s),E(e,r);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(r,null);o=!0},p(f,c){if(c&1){a=Te(f[0]);let d;for(d=0;d<a.length;d+=1){const h=Po(f,a,d);l[d]?(l[d].p(h,c),P(l[d],1)):(l[d]=Lo(h),l[d].c(),P(l[d],1),l[d].m(r,null))}for(re(),d=a.length;d<l.length;d+=1)u(d);oe()}},i(f){if(!o){for(let c=0;c<a.length;c+=1)P(l[c]);o=!0}},o(f){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)L(l[c]);o=!1},d(f){f&&I(e),bn(l,f)}}}function Lo(n){var i,s;let e,t;return e=new Ql({props:{file:n[1],href:((s=(i=n[1].urls)==null?void 0:i[0])==null?void 0:s.url)||""}}),{c(){Y(e.$$.fragment)},l(r){Z(e.$$.fragment,r)},m(r,o){X(e,r,o),t=!0},p(r,o){var l,u;const a={};o&1&&(a.file=r[1]),o&1&&(a.href=((u=(l=r[1].urls)==null?void 0:l[0])==null?void 0:u.url)||""),e.$set(a)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){L(e.$$.fragment,r),t=!1},d(r){Q(e,r)}}}function Jp(n){var s;let e,t,i=((s=n[0])==null?void 0:s.length)&&Oo(n);return{c(){i&&i.c(),e=ye()},l(r){i&&i.l(r),e=ye()},m(r,o){i&&i.m(r,o),V(r,e,o),t=!0},p(r,[o]){var a;(a=r[0])!=null&&a.length?i?(i.p(r,o),o&1&&P(i,1)):(i=Oo(r),i.c(),P(i,1),i.m(e.parentNode,e)):i&&(re(),L(i,1,1,()=>{i=null}),oe())},i(r){t||(P(i),t=!0)},o(r){L(i),t=!1},d(r){r&&I(e),i&&i.d(r)}}}function Yp(n,e,t){let{b2ss:i=[Zl]}=e;return n.$$set=s=>{"b2ss"in s&&t(0,i=s.b2ss)},[i]}class Xp extends me{constructor(e){super(),ge(this,e,Yp,Jp,de,{b2ss:0})}}function Mo(n,e,t){const i=n.slice();return i[2]=e[t],i[4]=t,i}function No(n){let e,t,i,s,r,o,a,l,u="<tr><th>Version</th> <th>Authors</th> <th>Comment</th> <th>URLs</th> <th>Updated at</th></tr>",f,c,d=Te(n[1]),h=[];for(let b=0;b<d.length;b+=1)h[b]=Uo(Mo(n,d,b));return{c(){e=C("div"),t=C("div"),i=C("h3"),s=$(n[0]),r=U(),o=C("div"),a=C("table"),l=C("thead"),l.innerHTML=u,f=U(),c=C("tbody");for(let b=0;b<h.length;b+=1)h[b].c();this.h()},l(b){e=A(b,"DIV",{class:!0});var y=R(e);t=A(y,"DIV",{class:!0});var p=R(t);i=A(p,"H3",{class:!0});var g=R(i);s=ee(g,n[0]),g.forEach(I),p.forEach(I),r=F(y),o=A(y,"DIV",{class:!0});var m=R(o);a=A(m,"TABLE",{class:!0});var v=R(a);l=A(v,"THEAD",{"data-svelte-h":!0}),Ae(l)!=="svelte-9x0ged"&&(l.innerHTML=u),f=F(v),c=A(v,"TBODY",{});var w=R(c);for(let T=0;T<h.length;T+=1)h[T].l(w);w.forEach(I),v.forEach(I),m.forEach(I),y.forEach(I),this.h()},h(){_(i,"class","h3"),_(t,"class","flex items-end gap-4"),_(a,"class","table table-hover table-compact"),_(o,"class","table-container"),_(e,"class","flex flex-col gap-4")},m(b,y){V(b,e,y),E(e,t),E(t,i),E(i,s),E(e,r),E(e,o),E(o,a),E(a,l),E(a,f),E(a,c);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(c,null)},p(b,y){if(y&1&&le(s,b[0]),y&2){d=Te(b[1]);let p;for(p=0;p<d.length;p+=1){const g=Mo(b,d,p);h[p]?h[p].p(g,y):(h[p]=Uo(g),h[p].c(),h[p].m(c,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=d.length}},d(b){b&&I(e),bn(h,b)}}}function Uo(n){var T;let e,t,i=(n[2].version||"")+"",s,r,o,a=(((T=n[2].authors)==null?void 0:T.join(", "))||"")+"",l,u,f,c=(n[2].comment||"")+"",d,h,b,y="URLS",p,g,m=Yn(n[2].updatedAt)+"",v,w;return{c(){e=C("tr"),t=C("td"),s=$(i),r=U(),o=C("td"),l=$(a),u=U(),f=C("td"),d=$(c),h=U(),b=C("td"),b.textContent=y,p=U(),g=C("td"),v=$(m),w=U(),this.h()},l(k){e=A(k,"TR",{});var S=R(e);t=A(S,"TD",{class:!0});var D=R(t);s=ee(D,i),D.forEach(I),r=F(S),o=A(S,"TD",{class:!0});var M=R(o);l=ee(M,a),M.forEach(I),u=F(S),f=A(S,"TD",{});var O=R(f);d=ee(O,c),O.forEach(I),h=F(S),b=A(S,"TD",{class:!0,"data-svelte-h":!0}),Ae(b)!=="svelte-u1n3rv"&&(b.textContent=y),p=F(S),g=A(S,"TD",{class:!0});var K=R(g);v=ee(K,m),K.forEach(I),w=F(S),S.forEach(I),this.h()},h(){_(t,"class","w-20"),_(o,"class","w-56"),_(b,"class","w-40"),_(g,"class","w-32")},m(k,S){V(k,e,S),E(e,t),E(t,s),E(e,r),E(e,o),E(o,l),E(e,u),E(e,f),E(f,d),E(e,h),E(e,b),E(e,p),E(e,g),E(g,v),E(e,w)},p(k,S){var D;S&2&&i!==(i=(k[2].version||"")+"")&&le(s,i),S&2&&a!==(a=(((D=k[2].authors)==null?void 0:D.join(", "))||"")+"")&&le(l,a),S&2&&c!==(c=(k[2].comment||"")+"")&&le(d,c),S&2&&m!==(m=Yn(k[2].updatedAt)+"")&&le(v,m)},d(k){k&&I(e)}}}function Qp(n){var i;let e,t=((i=n[1])==null?void 0:i.length)&&No(n);return{c(){t&&t.c(),e=ye()},l(s){t&&t.l(s),e=ye()},m(s,r){t&&t.m(s,r),V(s,e,r)},p(s,[r]){var o;(o=s[1])!=null&&o.length?t?t.p(s,r):(t=No(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:ce,o:ce,d(s){s&&I(e),t&&t.d(s)}}}function Zp(n,e,t){let{title:i="???"}=e,{files:s=[]}=e;return n.$$set=r=>{"title"in r&&t(0,i=r.title),"files"in r&&t(1,s=r.files)},[i,s]}class Ct extends me{constructor(e){super(),ge(this,e,Zp,Qp,de,{title:0,files:1})}}function $p(n){let e,t,i,s,r,o,a,l,u,f,c,d,h,b,y,p,g,m,v,w,T;return t=new qp({props:{game:n[0]}}),s=new xp({props:{tables:n[0].tableFiles}}),o=new Xp({props:{b2ss:n[0].b2sFiles}}),l=new Ct({props:{files:n[0].pupPackFiles,title:"Roms"}}),f=new Ct({props:{files:n[0].altColorFiles,title:"Alt. Color"}}),d=new Ct({props:{files:n[0].altSoundFiles,title:"Alt. Sound"}}),b=new Ct({props:{files:n[0].povFiles,title:"POV"}}),p=new Ct({props:{files:n[0].wheelArtFiles,title:"Wheelart"}}),m=new Ct({props:{files:n[0].topperFiles,title:"Topper"}}),w=new Ct({props:{files:n[0].mediaPackFiles,title:"Media Packs"}}),{c(){e=C("div"),Y(t.$$.fragment),i=U(),Y(s.$$.fragment),r=U(),Y(o.$$.fragment),a=U(),Y(l.$$.fragment),u=U(),Y(f.$$.fragment),c=U(),Y(d.$$.fragment),h=U(),Y(b.$$.fragment),y=U(),Y(p.$$.fragment),g=U(),Y(m.$$.fragment),v=U(),Y(w.$$.fragment),this.h()},l(k){e=A(k,"DIV",{class:!0});var S=R(e);Z(t.$$.fragment,S),i=F(S),Z(s.$$.fragment,S),r=F(S),Z(o.$$.fragment,S),a=F(S),Z(l.$$.fragment,S),u=F(S),Z(f.$$.fragment,S),c=F(S),Z(d.$$.fragment,S),h=F(S),Z(b.$$.fragment,S),y=F(S),Z(p.$$.fragment,S),g=F(S),Z(m.$$.fragment,S),v=F(S),Z(w.$$.fragment,S),S.forEach(I),this.h()},h(){_(e,"class","card p-8 py-10 w-full max-w-5xl flex flex-col gap-12")},m(k,S){V(k,e,S),X(t,e,null),E(e,i),X(s,e,null),E(e,r),X(o,e,null),E(e,a),X(l,e,null),E(e,u),X(f,e,null),E(e,c),X(d,e,null),E(e,h),X(b,e,null),E(e,y),X(p,e,null),E(e,g),X(m,e,null),E(e,v),X(w,e,null),T=!0},p(k,[S]){const D={};S&1&&(D.game=k[0]),t.$set(D);const M={};S&1&&(M.tables=k[0].tableFiles),s.$set(M);const O={};S&1&&(O.b2ss=k[0].b2sFiles),o.$set(O);const K={};S&1&&(K.files=k[0].pupPackFiles),l.$set(K);const x={};S&1&&(x.files=k[0].altColorFiles),f.$set(x);const W={};S&1&&(W.files=k[0].altSoundFiles),d.$set(W);const G={};S&1&&(G.files=k[0].povFiles),b.$set(G);const te={};S&1&&(te.files=k[0].wheelArtFiles),p.$set(te);const ne={};S&1&&(ne.files=k[0].topperFiles),m.$set(ne);const fe={};S&1&&(fe.files=k[0].mediaPackFiles),w.$set(fe)},i(k){T||(P(t.$$.fragment,k),P(s.$$.fragment,k),P(o.$$.fragment,k),P(l.$$.fragment,k),P(f.$$.fragment,k),P(d.$$.fragment,k),P(b.$$.fragment,k),P(p.$$.fragment,k),P(m.$$.fragment,k),P(w.$$.fragment,k),T=!0)},o(k){L(t.$$.fragment,k),L(s.$$.fragment,k),L(o.$$.fragment,k),L(l.$$.fragment,k),L(f.$$.fragment,k),L(d.$$.fragment,k),L(b.$$.fragment,k),L(p.$$.fragment,k),L(m.$$.fragment,k),L(w.$$.fragment,k),T=!1},d(k){k&&I(e),Q(t),Q(s),Q(o),Q(l),Q(f),Q(d),Q(b),Q(p),Q(m),Q(w)}}}function e_(n,e,t){let i,s,r,o,a;ke(n,os,f=>t(6,r=f));const{dbStore:l}=Yo;ke(n,l,f=>t(4,o=f));const u=as();return ke(n,u,f=>t(5,a=f)),jl(()=>{Bl(r.url.pathname)}),n.$$.update=()=>{var f,c;n.$$.dirty&32&&t(3,i=(c=(f=a[0])==null?void 0:f.meta)==null?void 0:c.game),n.$$.dirty&24&&t(0,s=(i?o[i]:Hi)||Hi)},[s,l,u,i,o,a]}class t_ extends me{constructor(e){super(),ge(this,e,e_,$p,de,{})}}function n_(n,e,t){let i;ke(n,os,r=>t(0,i=r));const s={ref:t_,slot:"<p>Skeleton</p>"};return n.$$.update=()=>{var r;if(n.$$.dirty&1){const o=(r=i==null?void 0:i.url)==null?void 0:r.searchParams;if(o){const a=o.get("game");if(a){const l={type:"component",meta:{game:a},component:s};as().trigger(l)}}}},[i]}class i_ extends me{constructor(e){super(),ge(this,e,n_,null,de,{})}}function s_(n){let e,t,i,s,r=n[0].user.displayName+"",o,a,l,u="Logout",f,c,d;return t=new sa({props:{src:n[0].user.photoURL||"",width:"w-6",rounded:"rounded-full"}}),{c(){e=C("div"),Y(t.$$.fragment),i=U(),s=C("span"),o=$(r),a=U(),l=C("button"),l.textContent=u,this.h()},l(h){e=A(h,"DIV",{class:!0});var b=R(e);Z(t.$$.fragment,b),i=F(b),s=A(b,"SPAN",{});var y=R(s);o=ee(y,r),y.forEach(I),b.forEach(I),a=F(h),l=A(h,"BUTTON",{class:!0,"data-svelte-h":!0}),Ae(l)!=="svelte-nsylsw"&&(l.textContent=u),this.h()},h(){_(e,"class","space-x-2 flex items-center"),_(l,"class","btn w-full variant-filled-secondary")},m(h,b){V(h,e,b),X(t,e,null),E(e,i),E(e,s),E(s,o),V(h,a,b),V(h,l,b),f=!0,c||(d=q(l,"click",Dn.logout),c=!0)},p(h,b){const y={};b&1&&(y.src=h[0].user.photoURL||""),t.$set(y),(!f||b&1)&&r!==(r=h[0].user.displayName+"")&&le(o,r)},i(h){f||(P(t.$$.fragment,h),f=!0)},o(h){L(t.$$.fragment,h),f=!1},d(h){h&&(I(e),I(a),I(l)),Q(t),c=!1,d()}}}function r_(n){let e,t="Admin Login",i,s;return{c(){e=C("button"),e.textContent=t,this.h()},l(r){e=A(r,"BUTTON",{class:!0,"data-svelte-h":!0}),Ae(e)!=="svelte-e3s47o"&&(e.textContent=t),this.h()},h(){_(e,"class","btn btn-sm variant-ghost-surface")},m(r,o){V(r,e,o),i||(s=q(e,"click",Dn.triggerLoginPopup),i=!0)},p:ce,i:ce,o:ce,d(r){r&&I(e),i=!1,s()}}}function o_(n){let e,t,i,s,r,o,a,l,u,f,c,d,h,b;r=new Mu({});const y=[r_,s_],p=[];function g(m,v){return m[0].user?1:0}return f=g(n),c=p[f]=y[f](n),{c(){e=C("div"),t=C("div"),i=C("div"),s=$("Toggle Dark/Light "),Y(r.$$.fragment),o=U(),a=C("hr"),l=U(),u=C("div"),c.c(),d=U(),h=C("div"),this.h()},l(m){e=A(m,"DIV",{class:!0,"data-popup":!0});var v=R(e);t=A(v,"DIV",{class:!0});var w=R(t);i=A(w,"DIV",{class:!0});var T=R(i);s=ee(T,"Toggle Dark/Light "),Z(r.$$.fragment,T),T.forEach(I),w.forEach(I),o=F(v),a=A(v,"HR",{}),l=F(v),u=A(v,"DIV",{class:!0});var k=R(u);c.l(k),k.forEach(I),d=F(v),h=A(v,"DIV",{class:!0}),R(h).forEach(I),v.forEach(I),this.h()},h(){_(i,"class","flex justify-between items-center gap-8 text-sm"),_(t,"class","p-4"),_(u,"class","p-4 flex flex-col gap-4"),_(h,"class","arrow bg-surface-100-800-token"),_(e,"class","card 8 shadow-xl popup"),_(e,"data-popup","popupSettings")},m(m,v){V(m,e,v),E(e,t),E(t,i),E(i,s),X(r,i,null),E(e,o),E(e,a),E(e,l),E(e,u),p[f].m(u,null),E(e,d),E(e,h),b=!0},p(m,[v]){let w=f;f=g(m),f===w?p[f].p(m,v):(re(),L(p[w],1,1,()=>{p[w]=null}),oe(),c=p[f],c?c.p(m,v):(c=p[f]=y[f](m),c.c()),P(c,1),c.m(u,null))},i(m){b||(P(r.$$.fragment,m),P(c),b=!0)},o(m){L(r.$$.fragment,m),L(c),b=!1},d(m){m&&I(e),Q(r),p[f].d()}}}function a_(n,e,t){let i;const{userStore:s}=Dn;return ke(n,s,r=>t(0,i=r)),[i,s]}class l_ extends me{constructor(e){super(),ge(this,e,a_,o_,de,{})}}function c_(n){var p,g;let e,t,i,s,r,o=((p=n[0].user)==null?void 0:p.displayName)+"",a,l,u,f="Logout",c,d,h,b,y;return i=new sa({props:{src:((g=n[0].user)==null?void 0:g.photoURL)||"",width:"w-12",rounded:"rounded-full"}}),{c(){e=C("div"),t=C("div"),Y(i.$$.fragment),s=U(),r=C("b"),a=$(o),l=U(),u=C("button"),u.textContent=f,c=U(),d=C("div"),this.h()},l(m){e=A(m,"DIV",{class:!0,"data-popup":!0});var v=R(e);t=A(v,"DIV",{class:!0});var w=R(t);Z(i.$$.fragment,w),s=F(w),r=A(w,"B",{});var T=R(r);a=ee(T,o),T.forEach(I),l=F(w),u=A(w,"BUTTON",{class:!0,"data-svelte-h":!0}),Ae(u)!=="svelte-nsylsw"&&(u.textContent=f),w.forEach(I),c=F(v),d=A(v,"DIV",{class:!0}),R(d).forEach(I),v.forEach(I),this.h()},h(){_(u,"class","btn w-full variant-filled-secondary"),_(t,"class","flex flex-col space-y-2"),_(d,"class","arrow bg-surface-100-800-token"),_(e,"class","card p-4 w-72 shadow-xl popup"),_(e,"data-popup","popupUser")},m(m,v){V(m,e,v),E(e,t),X(i,t,null),E(t,s),E(t,r),E(r,a),E(t,l),E(t,u),E(e,c),E(e,d),h=!0,b||(y=q(u,"click",Dn.logout),b=!0)},p(m,[v]){var T,k;const w={};v&1&&(w.src=((T=m[0].user)==null?void 0:T.photoURL)||""),i.$set(w),(!h||v&1)&&o!==(o=((k=m[0].user)==null?void 0:k.displayName)+"")&&le(a,o)},i(m){h||(P(i.$$.fragment,m),h=!0)},o(m){L(i.$$.fragment,m),h=!1},d(m){m&&I(e),Q(i),b=!1,y()}}}function u_(n,e,t){let i;const{userStore:s}=Dn;return ke(n,s,r=>t(0,i=r)),[i,s]}class f_ extends me{constructor(e){super(),ge(this,e,u_,c_,de,{})}}function d_(n){let e,t,i,s;return e=new f_({}),i=new l_({}),{c(){Y(e.$$.fragment),t=U(),Y(i.$$.fragment)},l(r){Z(e.$$.fragment,r),t=F(r),Z(i.$$.fragment,r)},m(r,o){X(e,r,o),V(r,t,o),X(i,r,o),s=!0},p:ce,i(r){s||(P(e.$$.fragment,r),P(i.$$.fragment,r),s=!0)},o(r){L(e.$$.fragment,r),L(i.$$.fragment,r),s=!1},d(r){r&&I(t),Q(e,r),Q(i,r)}}}class h_ extends me{constructor(e){super(),ge(this,e,null,d_,de,{})}}function Fo(n,e,t){const i=n.slice();return i[43]=e[t].id,i[44]=e[t].val,i[46]=t,i}function Bo(n,e,t){const i=n.slice();return i[47]=e[t],i}function Vo(n){let e,t=n[47]+"",i,s;return{c(){e=C("option"),i=$(t),this.h()},l(r){e=A(r,"OPTION",{});var o=R(e);i=ee(o,t),o.forEach(I),this.h()},h(){e.__value=s=n[47],nt(e,e.__value)},m(r,o){V(r,e,o),E(e,i)},p(r,o){o[0]&1&&t!==(t=r[47]+"")&&le(i,t),o[0]&1&&s!==(s=r[47])&&(e.__value=s,nt(e,e.__value))},d(r){r&&I(e)}}}function Ho(n){let e,t=[],i=new Map,s,r,o,a=Te(n[11]);const l=u=>u[43];for(let u=0;u<a.length;u+=1){let f=Fo(n,a,u),c=l(f);i.set(c,t[u]=jo(c,f))}return{c(){e=C("div");for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=A(u,"DIV",{class:!0});var f=R(e);for(let c=0;c<t.length;c+=1)t[c].l(f);f.forEach(I),this.h()},h(){_(e,"class",s="input-chip-list "+n[8])},m(u,f){V(u,e,f);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);o=!0},p(u,f){if(n=u,f[0]&18472){a=Te(n[11]),re();for(let c=0;c<t.length;c+=1)t[c].r();t=rs(t,f,l,1,n,a,i,e,xo,jo,null,Fo);for(let c=0;c<t.length;c+=1)t[c].a();oe()}(!o||f[0]&256&&s!==(s="input-chip-list "+n[8]))&&_(e,"class",s)},i(u){if(!o){for(let f=0;f<a.length;f+=1)P(t[f]);u&&It(()=>{o&&(r||(r=Qt(e,Zt,{duration:n[3],opacity:0,y:-20},!0)),r.run(1))}),o=!0}},o(u){for(let f=0;f<t.length;f+=1)L(t[f]);u&&(r||(r=Qt(e,Zt,{duration:n[3],opacity:0,y:-20},!1)),r.run(0)),o=!1},d(u){u&&I(e);for(let f=0;f<t.length;f+=1)t[f].d();u&&r&&r.end()}}}function jo(n,e){let t,i,s,r=e[44]+"",o,a,l,u="✕",f,c,d,h,b=ce,y,p,g;function m(...v){return e[38](e[46],e[44],...v)}return{key:n,first:null,c(){t=C("div"),i=C("button"),s=C("span"),o=$(r),a=U(),l=C("span"),l.textContent=u,d=U(),this.h()},l(v){t=A(v,"DIV",{});var w=R(t);i=A(w,"BUTTON",{type:!0,class:!0});var T=R(i);s=A(T,"SPAN",{});var k=R(s);o=ee(k,r),k.forEach(I),a=F(T),l=A(T,"SPAN",{"data-svelte-h":!0}),Ae(l)!=="svelte-1p578dz"&&(l.textContent=u),T.forEach(I),d=F(w),w.forEach(I),this.h()},h(){_(i,"type","button"),_(i,"class",f="chip "+e[5]),this.first=t},m(v,w){V(v,t,w),E(t,i),E(i,s),E(s,o),E(i,a),E(i,l),E(t,d),y=!0,p||(g=[q(i,"click",m),q(i,"click",e[28]),q(i,"keypress",e[29]),q(i,"keydown",e[30]),q(i,"keyup",e[31])],p=!0)},p(v,w){e=v,(!y||w[0]&2048)&&r!==(r=e[44]+"")&&le(o,r),(!y||w[0]&32&&f!==(f="chip "+e[5]))&&_(i,"class",f)},r(){h=t.getBoundingClientRect()},f(){Qo(t),b()},a(){b(),b=Xo(t,h,ra,{duration:e[3]})},i(v){y||(v&&It(()=>{y&&(c||(c=Qt(i,nr,{duration:e[3],opacity:0},!0)),c.run(1))}),y=!0)},o(v){v&&(c||(c=Qt(i,nr,{duration:e[3],opacity:0},!1)),c.run(0)),y=!1},d(v){v&&I(t),v&&c&&c.end(),p=!1,Be(g)}}}function m_(n){let e,t,i,s,r,o,a,l,u,f,c,d,h,b,y,p,g=Te(n[0]),m=[];for(let w=0;w<g.length;w+=1)m[w]=Vo(Bo(n,g,w));let v=n[11].length&&Ho(n);return{c(){e=C("div"),t=C("div"),i=C("select");for(let w=0;w<m.length;w+=1)m[w].c();s=U(),r=C("div"),o=C("form"),a=C("input"),c=U(),v&&v.c(),this.h()},l(w){e=A(w,"DIV",{class:!0});var T=R(e);t=A(T,"DIV",{class:!0});var k=R(t);i=A(k,"SELECT",{name:!0,tabindex:!0});var S=R(i);for(let O=0;O<m.length;O+=1)m[O].l(S);S.forEach(I),k.forEach(I),s=F(T),r=A(T,"DIV",{class:!0});var D=R(r);o=A(D,"FORM",{});var M=R(o);a=A(M,"INPUT",{type:!0,placeholder:!0,class:!0}),M.forEach(I),c=F(D),v&&v.l(D),D.forEach(I),T.forEach(I),this.h()},h(){_(i,"name",n[2]),i.multiple=!0,i.required=n[4],_(i,"tabindex","-1"),n[0]===void 0&&It(()=>n[36].call(i)),_(t,"class","h-0 overflow-hidden"),_(a,"type","text"),_(a,"placeholder",l=n[15].placeholder??"Enter values..."),_(a,"class",u="input-chip-field "+n[7]),a.disabled=f=n[15].disabled,_(r,"class",d="input-chip-interface "+n[9]),_(e,"class",h="input-chip "+n[10]),pt(e,"opacity-50",n[15].disabled)},m(w,T){V(w,e,T),E(e,t),E(t,i);for(let k=0;k<m.length;k+=1)m[k]&&m[k].m(i,null);n[35](i),xs(i,n[0]),E(e,s),E(e,r),E(r,o),E(o,a),nt(a,n[1]),E(r,c),v&&v.m(r,null),b=!0,y||(p=[q(i,"change",n[36]),q(a,"input",n[37]),q(a,"input",n[12]),q(a,"input",n[32]),q(a,"focus",n[33]),q(a,"blur",n[34]),q(o,"submit",n[13])],y=!0)},p(w,T){if(T[0]&1){g=Te(w[0]);let k;for(k=0;k<g.length;k+=1){const S=Bo(w,g,k);m[k]?m[k].p(S,T):(m[k]=Vo(S),m[k].c(),m[k].m(i,null))}for(;k<m.length;k+=1)m[k].d(1);m.length=g.length}(!b||T[0]&4)&&_(i,"name",w[2]),(!b||T[0]&16)&&(i.required=w[4]),T[0]&1&&xs(i,w[0]),(!b||T[0]&32768&&l!==(l=w[15].placeholder??"Enter values..."))&&_(a,"placeholder",l),(!b||T[0]&128&&u!==(u="input-chip-field "+w[7]))&&_(a,"class",u),(!b||T[0]&32768&&f!==(f=w[15].disabled))&&(a.disabled=f),T[0]&2&&a.value!==w[1]&&nt(a,w[1]),w[11].length?v?(v.p(w,T),T[0]&2048&&P(v,1)):(v=Ho(w),v.c(),P(v,1),v.m(r,null)):v&&(re(),L(v,1,1,()=>{v=null}),oe()),(!b||T[0]&512&&d!==(d="input-chip-interface "+w[9]))&&_(r,"class",d),(!b||T[0]&1024&&h!==(h="input-chip "+w[10]))&&_(e,"class",h),(!b||T[0]&33792)&&pt(e,"opacity-50",w[15].disabled)},i(w){b||(P(v),b=!0)},o(w){L(v),b=!1},d(w){w&&I(e),bn(m,w),n[35](null),v&&v.d(),y=!1,Be(p)}}}const g_="textarea cursor-pointer",p_="space-y-4",__="flex flex-wrap gap-2",b_="unstyled bg-transparent border-0 !ring-0 p-0 w-full";function v_(n,e,t){let i,s,r,o,a,l;const u=["input","name","value","whitelist","max","minlength","maxlength","allowUpperCase","allowDuplicates","validation","duration","required","chips","invalid","padding","rounded"];let f=Yt(e,u);const c=li();let{input:d=""}=e,{name:h}=e,{value:b=[]}=e,{whitelist:y=[]}=e,{max:p=-1}=e,{minlength:g=-1}=e,{maxlength:m=-1}=e,{allowUpperCase:v=!1}=e,{allowDuplicates:w=!1}=e,{validation:T=()=>!0}=e,{duration:k=150}=e,{required:S=!1}=e,{chips:D="variant-filled"}=e,{invalid:M="input-error"}=e,{padding:O="p-2"}=e,{rounded:K="rounded-container-token"}=e,x=!0;function W(){t(0,b=[])}let G;ns(()=>{if(!G.form)return;const H=G.form;return H.addEventListener("reset",W),()=>{H.removeEventListener("reset",W)}});function te(){t(26,x=!0)}function ne(){return!(!d||(t(1,d=d.trim()),T!==void 0&&!T(d))||p!==-1&&b.length>=p||g!==-1&&d.length<g||m!==-1&&d.length>m||y.length>0&&!y.includes(d)||w===!1&&b.includes(d))}function fe(H){if(H.preventDefault(),t(26,x=ne()),x===!1){c("invalid",{event:H,input:d});return}t(1,d=v?d:d.toLowerCase()),b.push(d),t(0,b),i.push({val:d,id:Math.random()}),t(11,i),t(0,b),c("add",{event:H,chipIndex:b.length-1,chipValue:d}),t(1,d="")}function be(H,je,ze){f.disabled||(b.splice(je,1),t(0,b),i.splice(je,1),t(11,i),t(0,b),c("remove",{event:H,chipIndex:je,chipValue:ze}))}function pe(H){se.call(this,n,H)}function j(H){se.call(this,n,H)}function z(H){se.call(this,n,H)}function B(H){se.call(this,n,H)}function ie(H){se.call(this,n,H)}function we(H){se.call(this,n,H)}function He(H){se.call(this,n,H)}function lt(H){qt[H?"unshift":"push"](()=>{G=H,t(6,G)})}function kt(){b=zl(this),t(0,b)}function We(){d=this.value,t(1,d)}const $e=(H,je,ze)=>{be(ze,H,je)};return n.$$set=H=>{t(42,e=he(he({},e),Ie(H))),t(15,f=Yt(e,u)),"input"in H&&t(1,d=H.input),"name"in H&&t(2,h=H.name),"value"in H&&t(0,b=H.value),"whitelist"in H&&t(16,y=H.whitelist),"max"in H&&t(17,p=H.max),"minlength"in H&&t(18,g=H.minlength),"maxlength"in H&&t(19,m=H.maxlength),"allowUpperCase"in H&&t(20,v=H.allowUpperCase),"allowDuplicates"in H&&t(21,w=H.allowDuplicates),"validation"in H&&t(22,T=H.validation),"duration"in H&&t(3,k=H.duration),"required"in H&&t(4,S=H.required),"chips"in H&&t(5,D=H.chips),"invalid"in H&&t(23,M=H.invalid),"padding"in H&&t(24,O=H.padding),"rounded"in H&&t(25,K=H.rounded)},n.$$.update=()=>{n.$$.dirty[0]&1&&t(11,i=(b==null?void 0:b.map(H=>({val:H,id:Math.random()})))||[]),n.$$.dirty[0]&75497472&&t(27,s=x===!1?M:""),t(10,r=`${g_} ${O} ${K} ${e.class??""} ${s}`)},t(9,o=`${p_}`),t(8,a=`${__}`),t(7,l=`${b_}`),e=Ie(e),[b,d,h,k,S,D,G,l,a,o,r,i,te,fe,be,f,y,p,g,m,v,w,T,M,O,K,x,s,pe,j,z,B,ie,we,He,lt,kt,We,$e]}class y_ extends me{constructor(e){super(),ge(this,e,v_,m_,de,{input:1,name:2,value:0,whitelist:16,max:17,minlength:18,maxlength:19,allowUpperCase:20,allowDuplicates:21,validation:22,duration:3,required:4,chips:5,invalid:23,padding:24,rounded:25},null,[-1,-1])}}function I_(n){let e;return{c(){e=$(n[1])},l(t){e=ee(t,n[1])},m(t,i){V(t,e,i)},p(t,i){i&2&&le(e,t[1])},d(t){t&&I(e)}}}function zo(n){let e,t,i,s,r,o,a,l,u,f,c,d,h;function b(v){n[8](v)}function y(v){n[9](v)}let p={name:"chips",chips:"variant-filled-primary"};n[2]!==void 0&&(p.input=n[2]),n[5].value!==void 0&&(p.value=n[5].value),t=new y_({props:p}),qt.push(()=>zn(t,"input",b)),qt.push(()=>zn(t,"value",y));function g(v){n[10](v)}let m={options:n[5].options,denylist:n[6]};return n[2]!==void 0&&(m.input=n[2]),a=new tu({props:m}),qt.push(()=>zn(a,"input",g)),a.$on("selection",n[11]),{c(){e=C("div"),Y(t.$$.fragment),r=U(),o=C("div"),Y(a.$$.fragment),this.h()},l(v){e=A(v,"DIV",{});var w=R(e);Z(t.$$.fragment,w),r=F(w),o=A(w,"DIV",{class:!0,style:!0,tabindex:!0,"data-popup":!0});var T=R(o);Z(a.$$.fragment,T),T.forEach(I),w.forEach(I),this.h()},h(){var v;_(o,"class","card max-h-48 p-4 overflow-y-auto z-50"),Js(o,"width",(((v=n[3])==null?void 0:v.clientWidth)||100)+"px"),_(o,"tabindex","-1"),_(o,"data-popup",u=n[1]+"PopupAutocomplete")},m(v,w){V(v,e,w),X(t,e,null),E(e,r),E(e,o),X(a,o,null),n[12](e),c=!0,d||(h=_n(f=ea.call(null,e,n[4])),d=!0)},p(v,w){var S;const T={};!i&&w&4&&(i=!0,T.input=v[2],jn(()=>i=!1)),!s&&w&32&&(s=!0,T.value=v[5].value,jn(()=>s=!1)),t.$set(T);const k={};w&32&&(k.options=v[5].options),!l&&w&4&&(l=!0,k.input=v[2],jn(()=>l=!1)),a.$set(k),(!c||w&8)&&Js(o,"width",(((S=v[3])==null?void 0:S.clientWidth)||100)+"px"),(!c||w&2&&u!==(u=v[1]+"PopupAutocomplete"))&&_(o,"data-popup",u),f&&ci(f.update)&&w&16&&f.update.call(null,v[4])},i(v){c||(P(t.$$.fragment,v),P(a.$$.fragment,v),c=!0)},o(v){L(t.$$.fragment,v),L(a.$$.fragment,v),c=!1},d(v){v&&I(e),Q(t),Q(a),n[12](null),d=!1,h()}}}function w_(n){let e,t,i,s,r;function o(u){n[7](u)}let a={size:"sm",active:"variant-filled-primary",name:"slide",$$slots:{default:[I_]},$$scope:{ctx:n}};n[5].active!==void 0&&(a.checked=n[5].active),t=new mu({props:a}),qt.push(()=>zn(t,"checked",o));let l=n[5].active&&zo(n);return{c(){e=C("div"),Y(t.$$.fragment),s=U(),l&&l.c(),this.h()},l(u){e=A(u,"DIV",{class:!0});var f=R(e);Z(t.$$.fragment,f),s=F(f),l&&l.l(f),f.forEach(I),this.h()},h(){_(e,"class","flex flex-col gap-4 flex-1")},m(u,f){V(u,e,f),X(t,e,null),E(e,s),l&&l.m(e,null),r=!0},p(u,[f]){const c={};f&8194&&(c.$$scope={dirty:f,ctx:u}),!i&&f&32&&(i=!0,c.checked=u[5].active,jn(()=>i=!1)),t.$set(c),u[5].active?l?(l.p(u,f),f&32&&P(l,1)):(l=zo(u),l.c(),P(l,1),l.m(e,null)):l&&(re(),L(l,1,1,()=>{l=null}),oe())},i(u){r||(P(t.$$.fragment,u),P(l),r=!0)},o(u){L(t.$$.fragment,u),L(l),r=!1},d(u){u&&I(e),Q(t),l&&l.d()}}}function E_(n,e,t){let i,s,r=ce,o=()=>(r(),r=Wl(a,m=>t(5,s=m)),a);n.$$.on_destroy.push(()=>r());let{store:a}=e;o();let{title:l="???"}=e,u="",f=[],c;function d(m){n.$$.not_equal(s.active,m)&&(s.active=m,a.set(s))}function h(m){u=m,t(2,u)}function b(m){n.$$.not_equal(s.value,m)&&(s.value=m,a.set(s))}function y(m){u=m,t(2,u)}const p=m=>{s.value.push(m.detail.value),a.set(s),t(2,u="")};function g(m){qt[m?"unshift":"push"](()=>{c=m,t(3,c)})}return n.$$set=m=>{"store"in m&&o(t(0,a=m.store)),"title"in m&&t(1,l=m.title)},n.$$.update=()=>{n.$$.dirty&2&&t(4,i={event:"focus-click",target:l+"PopupAutocomplete",placement:"bottom"})},[a,l,u,c,i,s,f,d,h,b,y,p,g]}class Hn extends me{constructor(e){super(),ge(this,e,E_,w_,de,{store:0,title:1})}}function k_(n){let e,t,i,s,r,o,a,l,u,f;return i=new Hn({props:{store:n[3],title:"Features"}}),r=new Hn({props:{store:n[2],title:"Author"}}),a=new Hn({props:{store:n[0],title:"Manufacturer"}}),u=new Hn({props:{store:n[1],title:"Theme"}}),{c(){e=C("div"),t=C("div"),Y(i.$$.fragment),s=U(),Y(r.$$.fragment),o=U(),Y(a.$$.fragment),l=U(),Y(u.$$.fragment),this.h()},l(c){e=A(c,"DIV",{class:!0});var d=R(e);t=A(d,"DIV",{class:!0});var h=R(t);Z(i.$$.fragment,h),s=F(h),Z(r.$$.fragment,h),o=F(h),Z(a.$$.fragment,h),l=F(h),Z(u.$$.fragment,h),h.forEach(I),d.forEach(I),this.h()},h(){_(t,"class","p-4 card w-full border-primary-600 border flex gap-4"),_(e,"class","p-4 flex")},m(c,d){V(c,e,d),E(e,t),X(i,t,null),E(t,s),X(r,t,null),E(t,o),X(a,t,null),E(t,l),X(u,t,null),f=!0},p:ce,i(c){f||(P(i.$$.fragment,c),P(r.$$.fragment,c),P(a.$$.fragment,c),P(u.$$.fragment,c),f=!0)},o(c){L(i.$$.fragment,c),L(r.$$.fragment,c),L(a.$$.fragment,c),L(u.$$.fragment,c),f=!1},d(c){c&&I(e),Q(i),Q(r),Q(a),Q(u)}}}function T_(n){const{manufacturer:e,theme:t,author:i,features:s}=dt;return[e,t,i,s]}class S_ extends me{constructor(e){super(),ge(this,e,T_,k_,de,{})}}function C_(n){let e;const t=n[2].default,i=Me(t,n,n[3],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,r){i&&i.p&&(!e||r&8)&&Ne(i,t,s,s[3],e?Fe(t,s[3],r,null):Ue(s[3]),null)},i(s){e||(P(i,s),e=!0)},o(s){L(i,s),e=!1},d(s){i&&i.d(s)}}}function A_(n){let e,t;return e=new jp({}),{c(){Y(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,s){X(e,i,s),t=!0},i(i){t||(P(e.$$.fragment,i),t=!0)},o(i){L(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function Wo(n){let e,t;return e=new S_({}),{c(){Y(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,s){X(e,i,s),t=!0},i(i){t||(P(e.$$.fragment,i),t=!0)},o(i){L(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function R_(n){let e,t,i=n[0]&&Wo();return{c(){i&&i.c(),e=ye()},l(s){i&&i.l(s),e=ye()},m(s,r){i&&i.m(s,r),V(s,e,r),t=!0},p(s,r){s[0]?i?r&1&&P(i,1):(i=Wo(),i.c(),P(i,1),i.m(e.parentNode,e)):i&&(re(),L(i,1,1,()=>{i=null}),oe())},i(s){t||(P(i),t=!0)},o(s){L(i),t=!1},d(s){s&&I(e),i&&i.d(s)}}}function D_(n){let e,t,i,s,r,o,a,l,u,f;return e=new h_({}),i=new Cu({}),r=new ju({props:{zIndex:"1000"}}),a=new i_({}),u=new Xc({props:{$$slots:{pageHeader:[R_],header:[A_],default:[C_]},$$scope:{ctx:n}}}),{c(){Y(e.$$.fragment),t=U(),Y(i.$$.fragment),s=U(),Y(r.$$.fragment),o=U(),Y(a.$$.fragment),l=U(),Y(u.$$.fragment)},l(c){Z(e.$$.fragment,c),t=F(c),Z(i.$$.fragment,c),s=F(c),Z(r.$$.fragment,c),o=F(c),Z(a.$$.fragment,c),l=F(c),Z(u.$$.fragment,c)},m(c,d){X(e,c,d),V(c,t,d),X(i,c,d),V(c,s,d),X(r,c,d),V(c,o,d),X(a,c,d),V(c,l,d),X(u,c,d),f=!0},p(c,[d]){const h={};d&9&&(h.$$scope={dirty:d,ctx:c}),u.$set(h)},i(c){f||(P(e.$$.fragment,c),P(i.$$.fragment,c),P(r.$$.fragment,c),P(a.$$.fragment,c),P(u.$$.fragment,c),f=!0)},o(c){L(e.$$.fragment,c),L(i.$$.fragment,c),L(r.$$.fragment,c),L(a.$$.fragment,c),L(u.$$.fragment,c),f=!1},d(c){c&&(I(t),I(s),I(o),I(l)),Q(e,c),Q(i,c),Q(r,c),Q(a,c),Q(u,c)}}}function P_(n,e,t){let i,{$$slots:s={},$$scope:r}=e;gc(),$o.set({computePosition:yf,autoUpdate:vf,offset:$u,shift:ef,flip:Qu,arrow:Xu});const{filterActive:o}=dt;return ke(n,o,a=>t(0,i=a)),ns(()=>{Yo.fetchDb()}),n.$$set=a=>{"$$scope"in a&&t(3,r=a.$$scope)},[i,o,s,r]}class j_ extends me{constructor(e){super(),ge(this,e,P_,D_,de,{})}}export{j_ as component,H_ as universal};
