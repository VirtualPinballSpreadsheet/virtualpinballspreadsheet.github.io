import{r as me,u as qo,v as Wt,w as Zi,x as Ko,y as Wr,s as ce,z as Pe,f as A,a as N,g as C,h as D,c as U,d as I,j as b,i as V,A as w,B as Oe,C as Le,D as Me,E as $i,F as ge,G as Ie,H as q,I as ae,l as $,m as ee,J as Te,K as li,n as oe,L as Vt,M as Ht,N as It,O as Be,P as Yt,Q as Gn,R as xn,S as Xt,T as rn,U as hn,V as ci,W as pt,e as ye,q as qr,X as nt,Y as Bl,o as er,Z as Go,_ as Kr,$ as sn,a0 as Re,a1 as Vl,k as Jn,a2 as Hl,a3 as Gr,p as qt,a4 as jl,a5 as Hn,a6 as zl}from"../chunks/scheduler.dedae0ab.js";import{n as Wl,l as ql,f as Kl,h as Gl,S as fe,i as de,a as P,g as ne,t as L,c as ie,j as tr,k as nr,o as Qt,b as Y,d as Z,m as X,e as Q,p as jn}from"../chunks/index.21d01676.js";import{w as ui}from"../chunks/index.ac37785c.js";import{c as fi,p as ir,e as we,u as rr,o as xl,g as mn,a as xr,s as Jl,m as Jr,b as Yr,d as Yl,f as Xl,h as xo,l as Ql,S as dt,i as Jo,j as Yn,k as Xr,E as Vi,T as Zl,B as $l,n as ec,D as Yo,F as tc}from"../chunks/modeMapping.3905fb33.js";import{_ as Qr}from"../chunks/preload-helper.a4192956.js";import{F as Zt,f as nc,a as ic,b as rc,c as sc,d as Xo,e as oc,g as ac,h as lc,i as cc,j as uc}from"../chunks/index.f08c9849.js";import{h as fc}from"../chunks/singletons.608eb527.js";import{p as sr}from"../chunks/stores.57257c13.js";function Qo(n,e,t,i){if(!e)return me;const r=n.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return me;const{delay:s=0,duration:o=300,easing:a=qo,start:l=Wl()+s,end:u=l+o,tick:f=me,css:c}=t(n,{from:e,to:r},i);let d=!0,h=!1,_;function y(){c&&(_=Kl(n,0,1,o,s,a,c)),s||(h=!0)}function p(){c&&Gl(n,_),d=!1}return ql(g=>{if(!h&&g>=l&&(h=!0),h&&g>=u&&(f(1,0),p()),!d)return!1;if(h){const m=g-l,v=0+1*a(m/o);f(v,1-v)}return!0}),y(),f(0,1),p}function Zo(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:i}=e,r=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=i,$o(n,r)}}function $o(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform;n.style.transform=`${r} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}const dc=!1,Z_=Object.freeze(Object.defineProperty({__proto__:null,ssr:dc},Symbol.toStringTag,{value:"Module"}));const ea=ui(void 0);function or(n,e){const{computePosition:t,autoUpdate:i,offset:r,shift:s,flip:o,arrow:a,size:l,autoPlacement:u,hide:f,inline:c}=Wt(ea),d={open:!1,autoUpdateCleanup:()=>{}},h=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let _;const y="https://www.skeleton.dev/utilities/popups";let p,g;function m(){p=document.querySelector(`[data-popup="${e.target}"]`)??document.createElement("div"),g=p.querySelector(".arrow")??document.createElement("div")}m();function v(){var O,K,G,z,x,te,re,he;if(!p)throw new Error(`The data-popup="${e.target}" element was not found. ${y}`);if(!t)throw new Error(`Floating UI 'computePosition' not found for data-popup="${e.target}". ${y}`);if(!r)throw new Error(`Floating UI 'offset' not found for data-popup="${e.target}". ${y}`);if(!s)throw new Error(`Floating UI 'shift' not found for data-popup="${e.target}". ${y}`);if(!o)throw new Error(`Floating UI 'flip' not found for data-popup="${e.target}". ${y}`);if(!a)throw new Error(`Floating UI 'arrow' not found for data-popup="${e.target}". ${y}`);const M=[];l&&M.push(l((O=e.middleware)==null?void 0:O.size)),u&&M.push(u((K=e.middleware)==null?void 0:K.autoPlacement)),f&&M.push(f((G=e.middleware)==null?void 0:G.hide)),c&&M.push(c((z=e.middleware)==null?void 0:z.inline)),t(n,p,{placement:e.placement??"bottom",middleware:[r(((x=e.middleware)==null?void 0:x.offset)??8),s(((te=e.middleware)==null?void 0:te.shift)??{padding:8}),o((re=e.middleware)==null?void 0:re.flip),a(((he=e.middleware)==null?void 0:he.arrow)??{element:g||null}),...M]}).then(({x:be,y:pe,placement:j,middlewareData:W})=>{if(Object.assign(p.style,{left:`${be}px`,top:`${pe}px`}),g){const{x:B,y:se}=W.arrow,Ee={top:"bottom",right:"left",bottom:"top",left:"right"}[j.split("-")[0]];Object.assign(g.style,{left:B!=null?`${B}px`:"",top:se!=null?`${se}px`:"",right:"",bottom:"",[Ee]:"-4px"})}})}function E(){p&&(d.open=!0,e.state&&e.state({state:d.open}),v(),p.style.display="block",p.style.opacity="1",p.style.pointerEvents="auto",p.removeAttribute("inert"),d.autoUpdateCleanup=i(n,p,v),_=Array.from(p==null?void 0:p.querySelectorAll(h)))}function k(M){if(!p)return;const O=parseFloat(window.getComputedStyle(p).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{d.open=!1,e.state&&e.state({state:d.open}),p.style.opacity="0",p.setAttribute("inert",""),d.autoUpdateCleanup&&d.autoUpdateCleanup(),M&&M()},O)}function T(){d.open===!1?E():k()}function S(M){if(d.open===!1||n.contains(M.target))return;if(p&&p.contains(M.target)===!1){k();return}const O=e.closeQuery===void 0?"a[href], button":e.closeQuery,K=p==null?void 0:p.querySelectorAll(O);K==null||K.forEach(G=>{G.contains(M.target)&&k()})}const R=M=>{if(d.open===!1)return;const O=M.key;if(O==="Escape"){M.preventDefault(),n.focus(),k();return}_=Array.from(p==null?void 0:p.querySelectorAll(h)),d.open&&document.activeElement===n&&(O==="ArrowDown"||O==="Tab")&&h.length>0&&_.length>0&&(M.preventDefault(),_[0].focus())};switch(e.event){case"click":n.addEventListener("click",T,!0),window.addEventListener("click",S,!0);break;case"hover":n.addEventListener("mouseover",E,!0),n.addEventListener("mouseleave",()=>k(),!0);break;case"focus-blur":n.addEventListener("focus",T,!0),n.addEventListener("blur",()=>k(),!0);break;case"focus-click":n.addEventListener("focus",E,!0),window.addEventListener("click",S,!0);break;default:throw new Error(`Event value of '${e.event}' is not supported. ${y}`)}return window.addEventListener("keydown",R,!0),v(),{update(M){k(()=>{e=M,v(),m()})},destroy(){n.removeEventListener("click",T,!0),n.removeEventListener("mouseover",E,!0),n.removeEventListener("mouseleave",()=>k(),!0),n.removeEventListener("focus",T,!0),n.removeEventListener("focus",E,!0),n.removeEventListener("blur",()=>k(),!0),window.removeEventListener("click",S,!0),window.removeEventListener("keydown",R,!0)}}}const hc="drawerStore";function mc(){const n=gc();return Zi(hc,n)}function gc(){const{subscribe:n,set:e,update:t}=ui({});return{subscribe:n,set:e,update:t,open:i=>t(()=>({open:!0,...i})),close:()=>t(i=>(i.open=!1,i))}}const ta="modalStore";function ar(){const n=Ko(ta);if(!n)throw new Error("modalStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return n}function pc(){const n=_c();return Zi(ta,n)}function _c(){const{subscribe:n,set:e,update:t}=ui([]);return{subscribe:n,set:e,update:t,trigger:i=>t(r=>(r.push(i),r)),close:()=>t(i=>(i.length>0&&i.shift(),i)),clear:()=>e([])}}const bc={message:"Missing Toast Message",autohide:!0,timeout:5e3},na="toastStore";function Kt(){const n=Ko(na);if(!n)throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return n}function vc(){const n=Ic();return Zi(na,n)}function yc(){const n=Math.random();return Number(n).toString(32)}function Ic(){const{subscribe:n,set:e,update:t}=ui([]),i=s=>t(o=>{if(o.length>0){const a=o.findIndex(u=>u.id===s),l=o[a];l&&(l.callback&&l.callback({id:s,status:"closed"}),l.timeoutId&&clearTimeout(l.timeoutId),o.splice(a,1))}return o});function r(s){if(s.autohide===!0)return setTimeout(()=>{i(s.id)},s.timeout)}return{subscribe:n,close:i,trigger:s=>{const o=yc();return t(a=>{s&&s.callback&&s.callback({id:o,status:"queued"}),s.hideDismiss&&(s.autohide=!0);const l={...bc,...s,id:o};return l.timeoutId=r(l),a.push(l),a}),o},freeze:s=>t(o=>(o.length>0&&clearTimeout(o[s].timeoutId),o)),unfreeze:s=>t(o=>(o.length>0&&(o[s].timeoutId=r(o[s])),o)),clear:()=>e([])}}function wc(){pc(),vc(),mc()}function Ec(n,e){const t=()=>{n.dispatchEvent(new CustomEvent("copyComplete"))},i=()=>{if(typeof e=="object"){if("element"in e){const r=document.querySelector(`[data-clipboard="${e.element}"]`);if(!r)throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${e.element}"]`);Ti(r.innerHTML,"text/html").then(t);return}if("input"in e){const r=document.querySelector(`[data-clipboard="${e.input}"]`);if(!r)throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${e.input}"]`);Ti(r.value).then(t);return}}Ti(e).then(t)};return n.addEventListener("click",i),{update(r){e=r},destroy(){n.removeEventListener("click",i)}}}async function Ti(n,e="text/plain"){navigator.clipboard.write?await navigator.clipboard.write([new ClipboardItem({[e]:new Blob([n],{type:e}),"text/plain":new Blob([n],{type:"text/plain"})})]):await new Promise(t=>{t(navigator.clipboard.writeText(String(n)))})}function kc(n,e){const t='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let i,r;function s(c){c.shiftKey&&c.code==="Tab"&&(c.preventDefault(),r.focus())}function o(c){!c.shiftKey&&c.code==="Tab"&&(c.preventDefault(),i.focus())}const a=c=>{if(e===!1)return;const d=Array.from(n.querySelectorAll(t));d.length&&(i=d[0],r=d[d.length-1],c||i.focus(),i.addEventListener("keydown",s),r.addEventListener("keydown",o))};a(!1);function l(){i&&i.removeEventListener("keydown",s),r&&r.removeEventListener("keydown",o)}const u=(c,d)=>(c.length&&(l(),a(!0)),d),f=new MutationObserver(u);return f.observe(n,{childList:!0,subtree:!0}),{update(c){e=c,c?a(!1):l()},destroy(){l(),f.disconnect()}}}function Zr(n,{delay:e=0,duration:t=400,easing:i=qo}={}){const r=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:s=>`opacity: ${s*r}`}}function $t(n,{delay:e=0,duration:t=400,easing:i=fi,x:r=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,u=a.transform==="none"?"":a.transform,f=l*(1-o),[c,d]=Wr(r),[h,_]=Wr(s);return{delay:e,duration:t,easing:i,css:(y,p)=>`
			transform: ${u} translate(${(1-y)*c}${d}, ${(1-y)*h}${_});
			opacity: ${l-f*p}`}}function $r(n,{delay:e=0,duration:t=400,easing:i=fi,axis:r="y"}={}){const s=getComputedStyle(n),o=+s.opacity,a=r==="y"?"height":"width",l=parseFloat(s[a]),u=r==="y"?["top","bottom"]:["left","right"],f=u.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),c=parseFloat(s[`padding${f[0]}`]),d=parseFloat(s[`padding${f[1]}`]),h=parseFloat(s[`margin${f[0]}`]),_=parseFloat(s[`margin${f[1]}`]),y=parseFloat(s[`border${f[0]}Width`]),p=parseFloat(s[`border${f[1]}Width`]);return{delay:e,duration:t,easing:i,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*o};${a}: ${g*l}px;padding-${u[0]}: ${g*c}px;padding-${u[1]}: ${g*d}px;margin-${u[0]}: ${g*h}px;margin-${u[1]}: ${g*_}px;border-${u[0]}-width: ${g*y}px;border-${u[1]}-width: ${g*p}px;`}}function es(n,{delay:e=0,duration:t=400,easing:i=fi,start:r=0,opacity:s=0}={}){const o=getComputedStyle(n),a=+o.opacity,l=o.transform==="none"?"":o.transform,u=1-r,f=a*(1-s);return{delay:e,duration:t,easing:i,css:(c,d)=>`
			transform: ${l} scale(${1-u*d});
			opacity: ${a-f*d}
		`}}function _t(n,e){const{transition:t,params:i,enabled:r}=e;return r?t(n,i):"duration"in i?t(n,{duration:0}):{duration:0}}const Tc=n=>({}),ts=n=>({}),Sc=n=>({}),ns=n=>({}),Ac=n=>({}),is=n=>({});function rs(n){let e,t,i;const r=n[22].lead,s=Pe(r,n,n[21],is);return{c(){e=A("div"),s&&s.c(),this.h()},l(o){e=C(o,"DIV",{class:!0});var a=D(e);s&&s.l(a),a.forEach(I),this.h()},h(){b(e,"class",t="app-bar-slot-lead "+n[4])},m(o,a){V(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&Oe(s,r,o,o[21],i?Me(r,o[21],a,Ac):Le(o[21]),is),(!i||a&16&&t!==(t="app-bar-slot-lead "+o[4]))&&b(e,"class",t)},i(o){i||(P(s,o),i=!0)},o(o){L(s,o),i=!1},d(o){o&&I(e),s&&s.d(o)}}}function ss(n){let e,t,i;const r=n[22].trail,s=Pe(r,n,n[21],ns);return{c(){e=A("div"),s&&s.c(),this.h()},l(o){e=C(o,"DIV",{class:!0});var a=D(e);s&&s.l(a),a.forEach(I),this.h()},h(){b(e,"class",t="app-bar-slot-trail "+n[2])},m(o,a){V(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&Oe(s,r,o,o[21],i?Me(r,o[21],a,Sc):Le(o[21]),ns),(!i||a&4&&t!==(t="app-bar-slot-trail "+o[2]))&&b(e,"class",t)},i(o){i||(P(s,o),i=!0)},o(o){L(s,o),i=!1},d(o){o&&I(e),s&&s.d(o)}}}function os(n){let e,t,i;const r=n[22].headline,s=Pe(r,n,n[21],ts);return{c(){e=A("div"),s&&s.c(),this.h()},l(o){e=C(o,"DIV",{class:!0});var a=D(e);s&&s.l(a),a.forEach(I),this.h()},h(){b(e,"class",t="app-bar-row-headline "+n[5])},m(o,a){V(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&Oe(s,r,o,o[21],i?Me(r,o[21],a,Tc):Le(o[21]),ts),(!i||a&32&&t!==(t="app-bar-row-headline "+o[5]))&&b(e,"class",t)},i(o){i||(P(s,o),i=!0)},o(o){L(s,o),i=!1},d(o){o&&I(e),s&&s.d(o)}}}function Cc(n){let e,t,i,r,s,o,a,l,u,f,c=n[8].lead&&rs(n);const d=n[22].default,h=Pe(d,n,n[21],null);let _=n[8].trail&&ss(n),y=n[8].headline&&os(n);return{c(){e=A("div"),t=A("div"),c&&c.c(),i=N(),r=A("div"),h&&h.c(),o=N(),_&&_.c(),l=N(),y&&y.c(),this.h()},l(p){e=C(p,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var g=D(e);t=C(g,"DIV",{class:!0});var m=D(t);c&&c.l(m),i=U(m),r=C(m,"DIV",{class:!0});var v=D(r);h&&h.l(v),v.forEach(I),o=U(m),_&&_.l(m),m.forEach(I),l=U(g),y&&y.l(g),g.forEach(I),this.h()},h(){b(r,"class",s="app-bar-slot-default "+n[3]),b(t,"class",a="app-bar-row-main "+n[6]),b(e,"class",u="app-bar "+n[7]),b(e,"data-testid","app-bar"),b(e,"role","toolbar"),b(e,"aria-label",n[0]),b(e,"aria-labelledby",n[1])},m(p,g){V(p,e,g),w(e,t),c&&c.m(t,null),w(t,i),w(t,r),h&&h.m(r,null),w(t,o),_&&_.m(t,null),w(e,l),y&&y.m(e,null),f=!0},p(p,[g]){p[8].lead?c?(c.p(p,g),g&256&&P(c,1)):(c=rs(p),c.c(),P(c,1),c.m(t,i)):c&&(ne(),L(c,1,1,()=>{c=null}),ie()),h&&h.p&&(!f||g&2097152)&&Oe(h,d,p,p[21],f?Me(d,p[21],g,null):Le(p[21]),null),(!f||g&8&&s!==(s="app-bar-slot-default "+p[3]))&&b(r,"class",s),p[8].trail?_?(_.p(p,g),g&256&&P(_,1)):(_=ss(p),_.c(),P(_,1),_.m(t,null)):_&&(ne(),L(_,1,1,()=>{_=null}),ie()),(!f||g&64&&a!==(a="app-bar-row-main "+p[6]))&&b(t,"class",a),p[8].headline?y?(y.p(p,g),g&256&&P(y,1)):(y=os(p),y.c(),P(y,1),y.m(e,null)):y&&(ne(),L(y,1,1,()=>{y=null}),ie()),(!f||g&128&&u!==(u="app-bar "+p[7]))&&b(e,"class",u),(!f||g&1)&&b(e,"aria-label",p[0]),(!f||g&2)&&b(e,"aria-labelledby",p[1])},i(p){f||(P(c),P(h,p),P(_),P(y),f=!0)},o(p){L(c),L(h,p),L(_),L(y),f=!1},d(p){p&&I(e),c&&c.d(),h&&h.d(p),_&&_.d(),y&&y.d()}}}const Rc="flex flex-col",Dc="grid items-center",Pc="",Oc="flex-none flex justify-between items-center",Lc="flex-auto",Mc="flex-none flex items-center space-x-4";function Nc(n,e,t){let i,r,s,o,a,l,{$$slots:u={},$$scope:f}=e;const c=$i(u);let{background:d="bg-surface-100-800-token"}=e,{border:h=""}=e,{padding:_="p-4"}=e,{shadow:y=""}=e,{spacing:p="space-y-4"}=e,{gridColumns:g="grid-cols-[auto_1fr_auto]"}=e,{gap:m="gap-4"}=e,{regionRowMain:v=""}=e,{regionRowHeadline:E=""}=e,{slotLead:k=""}=e,{slotDefault:T=""}=e,{slotTrail:S=""}=e,{label:R=""}=e,{labelledby:M=""}=e;return n.$$set=O=>{t(23,e=ge(ge({},e),Ie(O))),"background"in O&&t(9,d=O.background),"border"in O&&t(10,h=O.border),"padding"in O&&t(11,_=O.padding),"shadow"in O&&t(12,y=O.shadow),"spacing"in O&&t(13,p=O.spacing),"gridColumns"in O&&t(14,g=O.gridColumns),"gap"in O&&t(15,m=O.gap),"regionRowMain"in O&&t(16,v=O.regionRowMain),"regionRowHeadline"in O&&t(17,E=O.regionRowHeadline),"slotLead"in O&&t(18,k=O.slotLead),"slotDefault"in O&&t(19,T=O.slotDefault),"slotTrail"in O&&t(20,S=O.slotTrail),"label"in O&&t(0,R=O.label),"labelledby"in O&&t(1,M=O.labelledby),"$$scope"in O&&t(21,f=O.$$scope)},n.$$.update=()=>{t(7,i=`${Rc} ${d} ${h} ${p} ${_} ${y} ${e.class??""}`),n.$$.dirty&114688&&t(6,r=`${Dc} ${g} ${m} ${v}`),n.$$.dirty&131072&&t(5,s=`${Pc} ${E}`),n.$$.dirty&262144&&t(4,o=`${Oc} ${k}`),n.$$.dirty&524288&&t(3,a=`${Lc} ${T}`),n.$$.dirty&1048576&&t(2,l=`${Mc} ${S}`)},e=Ie(e),[R,M,l,a,o,s,r,i,c,d,h,_,y,p,g,m,v,E,k,T,S,f,u]}class Uc extends fe{constructor(e){super(),de(this,e,Nc,Cc,ce,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const Fc=n=>({}),as=n=>({}),Bc=n=>({}),ls=n=>({}),Vc=n=>({}),cs=n=>({}),Hc=n=>({}),us=n=>({}),jc=n=>({}),fs=n=>({}),zc=n=>({}),ds=n=>({});function hs(n){let e,t,i;const r=n[18].header,s=Pe(r,n,n[17],ds);return{c(){e=A("header"),s&&s.c(),this.h()},l(o){e=C(o,"HEADER",{id:!0,class:!0});var a=D(e);s&&s.l(a),a.forEach(I),this.h()},h(){b(e,"id","shell-header"),b(e,"class",t="flex-none "+n[7])},m(o,a){V(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&131072)&&Oe(s,r,o,o[17],i?Me(r,o[17],a,zc):Le(o[17]),ds),(!i||a&128&&t!==(t="flex-none "+o[7]))&&b(e,"class",t)},i(o){i||(P(s,o),i=!0)},o(o){L(s,o),i=!1},d(o){o&&I(e),s&&s.d(o)}}}function ms(n){let e,t;const i=n[18].sidebarLeft,r=Pe(i,n,n[17],fs);return{c(){e=A("aside"),r&&r.c(),this.h()},l(s){e=C(s,"ASIDE",{id:!0,class:!0});var o=D(e);r&&r.l(o),o.forEach(I),this.h()},h(){b(e,"id","sidebar-left"),b(e,"class",n[6])},m(s,o){V(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&131072)&&Oe(r,i,s,s[17],t?Me(i,s[17],o,jc):Le(s[17]),fs),(!t||o&64)&&b(e,"class",s[6])},i(s){t||(P(r,s),t=!0)},o(s){L(r,s),t=!1},d(s){s&&I(e),r&&r.d(s)}}}function gs(n){let e,t,i;const r=n[18].pageHeader,s=Pe(r,n,n[17],us),o=s||Wc();return{c(){e=A("header"),o&&o.c(),this.h()},l(a){e=C(a,"HEADER",{id:!0,class:!0});var l=D(e);o&&o.l(l),l.forEach(I),this.h()},h(){b(e,"id","page-header"),b(e,"class",t="flex-none "+n[4])},m(a,l){V(a,e,l),o&&o.m(e,null),i=!0},p(a,l){s&&s.p&&(!i||l&131072)&&Oe(s,r,a,a[17],i?Me(r,a[17],l,Hc):Le(a[17]),us),(!i||l&16&&t!==(t="flex-none "+a[4]))&&b(e,"class",t)},i(a){i||(P(o,a),i=!0)},o(a){L(o,a),i=!1},d(a){a&&I(e),o&&o.d(a)}}}function Wc(n){let e;return{c(){e=$("(slot:header)")},l(t){e=ee(t,"(slot:header)")},m(t,i){V(t,e,i)},d(t){t&&I(e)}}}function ps(n){let e,t,i;const r=n[18].pageFooter,s=Pe(r,n,n[17],cs),o=s||qc();return{c(){e=A("footer"),o&&o.c(),this.h()},l(a){e=C(a,"FOOTER",{id:!0,class:!0});var l=D(e);o&&o.l(l),l.forEach(I),this.h()},h(){b(e,"id","page-footer"),b(e,"class",t="flex-none "+n[2])},m(a,l){V(a,e,l),o&&o.m(e,null),i=!0},p(a,l){s&&s.p&&(!i||l&131072)&&Oe(s,r,a,a[17],i?Me(r,a[17],l,Vc):Le(a[17]),cs),(!i||l&4&&t!==(t="flex-none "+a[2]))&&b(e,"class",t)},i(a){i||(P(o,a),i=!0)},o(a){L(o,a),i=!1},d(a){a&&I(e),o&&o.d(a)}}}function qc(n){let e;return{c(){e=$("(slot:footer)")},l(t){e=ee(t,"(slot:footer)")},m(t,i){V(t,e,i)},d(t){t&&I(e)}}}function _s(n){let e,t;const i=n[18].sidebarRight,r=Pe(i,n,n[17],ls);return{c(){e=A("aside"),r&&r.c(),this.h()},l(s){e=C(s,"ASIDE",{id:!0,class:!0});var o=D(e);r&&r.l(o),o.forEach(I),this.h()},h(){b(e,"id","sidebar-right"),b(e,"class",n[5])},m(s,o){V(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&131072)&&Oe(r,i,s,s[17],t?Me(i,s[17],o,Bc):Le(s[17]),ls),(!t||o&32)&&b(e,"class",s[5])},i(s){t||(P(r,s),t=!0)},o(s){L(r,s),t=!1},d(s){s&&I(e),r&&r.d(s)}}}function bs(n){let e,t,i;const r=n[18].footer,s=Pe(r,n,n[17],as);return{c(){e=A("footer"),s&&s.c(),this.h()},l(o){e=C(o,"FOOTER",{id:!0,class:!0});var a=D(e);s&&s.l(a),a.forEach(I),this.h()},h(){b(e,"id","shell-footer"),b(e,"class",t="flex-none "+n[1])},m(o,a){V(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&131072)&&Oe(s,r,o,o[17],i?Me(r,o[17],a,Fc):Le(o[17]),as),(!i||a&2&&t!==(t="flex-none "+o[1]))&&b(e,"class",t)},i(o){i||(P(s,o),i=!0)},o(o){L(s,o),i=!1},d(o){o&&I(e),s&&s.d(o)}}}function Kc(n){let e,t,i,r,s,o,a,l,u,f,c,d,h,_,y,p=n[9].header&&hs(n),g=n[9].sidebarLeft&&ms(n),m=n[9].pageHeader&&gs(n);const v=n[18].default,E=Pe(v,n,n[17],null);let k=n[9].pageFooter&&ps(n),T=n[9].sidebarRight&&_s(n),S=n[9].footer&&bs(n);return{c(){e=A("div"),p&&p.c(),t=N(),i=A("div"),g&&g.c(),r=N(),s=A("div"),m&&m.c(),o=N(),a=A("main"),E&&E.c(),u=N(),k&&k.c(),c=N(),T&&T.c(),d=N(),S&&S.c(),this.h()},l(R){e=C(R,"DIV",{id:!0,class:!0,"data-testid":!0});var M=D(e);p&&p.l(M),t=U(M),i=C(M,"DIV",{class:!0});var O=D(i);g&&g.l(O),r=U(O),s=C(O,"DIV",{id:!0,class:!0});var K=D(s);m&&m.l(K),o=U(K),a=C(K,"MAIN",{id:!0,class:!0});var G=D(a);E&&E.l(G),G.forEach(I),u=U(K),k&&k.l(K),K.forEach(I),c=U(O),T&&T.l(O),O.forEach(I),d=U(M),S&&S.l(M),M.forEach(I),this.h()},h(){b(a,"id","page-content"),b(a,"class",l="flex-auto "+n[3]),b(s,"id","page"),b(s,"class",f=n[0]+" "+vs),b(i,"class","flex-auto "+xc),b(e,"id","appShell"),b(e,"class",n[8]),b(e,"data-testid","app-shell")},m(R,M){V(R,e,M),p&&p.m(e,null),w(e,t),w(e,i),g&&g.m(i,null),w(i,r),w(i,s),m&&m.m(s,null),w(s,o),w(s,a),E&&E.m(a,null),w(s,u),k&&k.m(s,null),w(i,c),T&&T.m(i,null),w(e,d),S&&S.m(e,null),h=!0,_||(y=q(s,"scroll",n[19]),_=!0)},p(R,[M]){R[9].header?p?(p.p(R,M),M&512&&P(p,1)):(p=hs(R),p.c(),P(p,1),p.m(e,t)):p&&(ne(),L(p,1,1,()=>{p=null}),ie()),R[9].sidebarLeft?g?(g.p(R,M),M&512&&P(g,1)):(g=ms(R),g.c(),P(g,1),g.m(i,r)):g&&(ne(),L(g,1,1,()=>{g=null}),ie()),R[9].pageHeader?m?(m.p(R,M),M&512&&P(m,1)):(m=gs(R),m.c(),P(m,1),m.m(s,o)):m&&(ne(),L(m,1,1,()=>{m=null}),ie()),E&&E.p&&(!h||M&131072)&&Oe(E,v,R,R[17],h?Me(v,R[17],M,null):Le(R[17]),null),(!h||M&8&&l!==(l="flex-auto "+R[3]))&&b(a,"class",l),R[9].pageFooter?k?(k.p(R,M),M&512&&P(k,1)):(k=ps(R),k.c(),P(k,1),k.m(s,null)):k&&(ne(),L(k,1,1,()=>{k=null}),ie()),(!h||M&1&&f!==(f=R[0]+" "+vs))&&b(s,"class",f),R[9].sidebarRight?T?(T.p(R,M),M&512&&P(T,1)):(T=_s(R),T.c(),P(T,1),T.m(i,null)):T&&(ne(),L(T,1,1,()=>{T=null}),ie()),R[9].footer?S?(S.p(R,M),M&512&&P(S,1)):(S=bs(R),S.c(),P(S,1),S.m(e,null)):S&&(ne(),L(S,1,1,()=>{S=null}),ie()),(!h||M&256)&&b(e,"class",R[8])},i(R){h||(P(p),P(g),P(m),P(E,R),P(k),P(T),P(S),h=!0)},o(R){L(p),L(g),L(m),L(E,R),L(k),L(T),L(S),h=!1},d(R){R&&I(e),p&&p.d(),g&&g.d(),m&&m.d(),E&&E.d(R),k&&k.d(),T&&T.d(),S&&S.d(),_=!1,y()}}}const Gc="w-full h-full flex flex-col overflow-hidden",xc="w-full h-full flex overflow-hidden",vs="flex-1 overflow-x-hidden flex flex-col",Jc="flex-none overflow-x-hidden overflow-y-auto",Yc="flex-none overflow-x-hidden overflow-y-auto";function Xc(n,e,t){let i,r,s,o,a,l,u,f,{$$slots:c={},$$scope:d}=e;const h=$i(c);let{regionPage:_=""}=e,{slotHeader:y="z-10"}=e,{slotSidebarLeft:p="w-auto"}=e,{slotSidebarRight:g="w-auto"}=e,{slotPageHeader:m=""}=e,{slotPageContent:v=""}=e,{slotPageFooter:E=""}=e,{slotFooter:k=""}=e;function T(S){ae.call(this,n,S)}return n.$$set=S=>{t(20,e=ge(ge({},e),Ie(S))),"regionPage"in S&&t(0,_=S.regionPage),"slotHeader"in S&&t(10,y=S.slotHeader),"slotSidebarLeft"in S&&t(11,p=S.slotSidebarLeft),"slotSidebarRight"in S&&t(12,g=S.slotSidebarRight),"slotPageHeader"in S&&t(13,m=S.slotPageHeader),"slotPageContent"in S&&t(14,v=S.slotPageContent),"slotPageFooter"in S&&t(15,E=S.slotPageFooter),"slotFooter"in S&&t(16,k=S.slotFooter),"$$scope"in S&&t(17,d=S.$$scope)},n.$$.update=()=>{t(8,i=`${Gc} ${e.class??""}`),n.$$.dirty&1024&&t(7,r=`${y}`),n.$$.dirty&2048&&t(6,s=`${Jc} ${p}`),n.$$.dirty&4096&&t(5,o=`${Yc} ${g}`),n.$$.dirty&8192&&t(4,a=`${m}`),n.$$.dirty&16384&&t(3,l=`${v}`),n.$$.dirty&32768&&t(2,u=`${E}`),n.$$.dirty&65536&&t(1,f=`${k}`)},e=Ie(e),[_,f,u,l,a,o,s,r,i,h,y,p,g,m,v,E,k,d,c,T]}class Qc extends fe{constructor(e){super(),de(this,e,Xc,Kc,ce,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function ys(n,e,t){const i=n.slice();return i[34]=e[t],i}function Zc(n){let e,t,i;return{c(){e=A("div"),t=$(n[0]),this.h()},l(r){e=C(r,"DIV",{class:!0});var s=D(e);t=ee(s,n[0]),s.forEach(I),this.h()},h(){b(e,"class",i="autocomplete-empty "+n[7])},m(r,s){V(r,e,s),w(e,t)},p(r,s){s[0]&1&&oe(t,r[0]),s[0]&128&&i!==(i="autocomplete-empty "+r[7])&&b(e,"class",i)},i:me,o:me,d(r){r&&I(e)}}}function $c(n){let e,t,i=[],r=new Map,s,o,a,l=we(n[6].slice(0,n[13]));const u=f=>f[34];for(let f=0;f<l.length;f+=1){let c=ys(n,l,f),d=u(c);r.set(d,i[f]=Is(d,c))}return{c(){e=A("nav"),t=A("ul");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=C(f,"NAV",{class:!0});var c=D(e);t=C(c,"UL",{class:!0});var d=D(t);for(let h=0;h<i.length;h+=1)i[h].l(d);d.forEach(I),c.forEach(I),this.h()},h(){b(t,"class",s="autocomplete-list "+n[10]),b(e,"class",o="autocomplete-nav "+n[11])},m(f,c){V(f,e,c),w(e,t);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(t,null);a=!0},p(f,c){c[0]&25458&&(l=we(f[6].slice(0,f[13])),ne(),i=rr(i,c,u,1,f,l,r,t,xl,Is,null,ys),ie()),(!a||c[0]&1024&&s!==(s="autocomplete-list "+f[10]))&&b(t,"class",s),(!a||c[0]&2048&&o!==(o="autocomplete-nav "+f[11]))&&b(e,"class",o)},i(f){if(!a){for(let c=0;c<l.length;c+=1)P(i[c]);a=!0}},o(f){for(let c=0;c<i.length;c+=1)L(i[c]);a=!1},d(f){f&&I(e);for(let c=0;c<i.length;c+=1)i[c].d()}}}function Is(n,e){let t,i,r,s=e[34].label+"",o,a,l,u,f,c,d,h;function _(){return e[28](e[34])}return{key:n,first:null,c(){t=A("li"),i=A("button"),r=new Vt(!1),a=N(),this.h()},l(y){t=C(y,"LI",{class:!0});var p=D(t);i=C(p,"BUTTON",{class:!0,type:!0});var g=D(i);r=Ht(g,!1),g.forEach(I),a=U(p),p.forEach(I),this.h()},h(){r.a=null,b(i,"class",o="autocomplete-button "+e[8]),b(i,"type","button"),b(t,"class",l="autocomplete-item "+e[9]),this.first=t},m(y,p){V(y,t,p),w(t,i),r.m(s,i),w(t,a),c=!0,d||(h=[q(i,"click",_),q(i,"click",e[26]),q(i,"keypress",e[27])],d=!0)},p(y,p){e=y,(!c||p[0]&8256)&&s!==(s=e[34].label+"")&&r.p(s),(!c||p[0]&256&&o!==(o="autocomplete-button "+e[8]))&&b(i,"class",o),(!c||p[0]&512&&l!==(l="autocomplete-item "+e[9]))&&b(t,"class",l)},i(y){c||(y&&It(()=>{c&&(f&&f.end(1),u=tr(t,_t,{transition:e[2],params:e[3],enabled:e[1]}),u.start())}),c=!0)},o(y){u&&u.invalidate(),y&&(f=nr(t,_t,{transition:e[4],params:e[5],enabled:e[1]})),c=!1},d(y){y&&I(t),y&&f&&f.end(),d=!1,Be(h)}}}function eu(n){let e,t,i,r,s;const o=[$c,Zc],a=[];function l(u,f){return u[6].length>0?0:1}return t=l(n),i=a[t]=o[t](n),{c(){e=A("div"),i.c(),this.h()},l(u){e=C(u,"DIV",{class:!0,"data-testid":!0});var f=D(e);i.l(f),f.forEach(I),this.h()},h(){b(e,"class",r="autocomplete "+n[12]),b(e,"data-testid","autocomplete")},m(u,f){V(u,e,f),a[t].m(e,null),s=!0},p(u,f){let c=t;t=l(u),t===c?a[t].p(u,f):(ne(),L(a[c],1,1,()=>{a[c]=null}),ie(),i=a[t],i?i.p(u,f):(i=a[t]=o[t](u),i.c()),P(i,1),i.m(e,null)),(!s||f[0]&4096&&r!==(r="autocomplete "+u[12]))&&b(e,"class",r)},i(u){s||(P(i),s=!0)},o(u){L(i),s=!1},d(u){u&&I(e),a[t].d()}}}function tu(n,e,t){let i,r,s,o,a,l,u,f,c,d;Te(n,ir,j=>t(29,d=j));const h=li();let{input:_=void 0}=e,{options:y=[]}=e,{limit:p=void 0}=e,{allowlist:g=[]}=e,{denylist:m=[]}=e,{emptyState:v="No Results Found."}=e,{regionNav:E=""}=e,{regionList:k="list-nav"}=e,{regionItem:T=""}=e,{regionButton:S="w-full"}=e,{regionEmpty:R="text-center"}=e,{transitions:M=!d}=e,{transitionIn:O=$r}=e,{transitionInParams:K={duration:200}}=e,{transitionOut:G=$r}=e,{transitionOutParams:z={duration:200}}=e;function x(j,W){let B=[...y];j.length&&(B=B.filter(se=>j.includes(se.value))),W.length&&(B=B.filter(se=>!W.includes(se.value))),!j.length&&!W.length&&(B=y),t(25,i=B)}function te(){let j=[...i];return j=j.filter(W=>{const B=String(_).toLowerCase().trim();if(JSON.stringify([W.label,W.value,W.keywords]).toLowerCase().includes(B))return W}),j}function re(j){h("selection",j)}function he(j){ae.call(this,n,j)}function be(j){ae.call(this,n,j)}const pe=j=>re(j);return n.$$set=j=>{t(33,e=ge(ge({},e),Ie(j))),"input"in j&&t(15,_=j.input),"options"in j&&t(16,y=j.options),"limit"in j&&t(17,p=j.limit),"allowlist"in j&&t(18,g=j.allowlist),"denylist"in j&&t(19,m=j.denylist),"emptyState"in j&&t(0,v=j.emptyState),"regionNav"in j&&t(20,E=j.regionNav),"regionList"in j&&t(21,k=j.regionList),"regionItem"in j&&t(22,T=j.regionItem),"regionButton"in j&&t(23,S=j.regionButton),"regionEmpty"in j&&t(24,R=j.regionEmpty),"transitions"in j&&t(1,M=j.transitions),"transitionIn"in j&&t(2,O=j.transitionIn),"transitionInParams"in j&&t(3,K=j.transitionInParams),"transitionOut"in j&&t(4,G=j.transitionOut),"transitionOutParams"in j&&t(5,z=j.transitionOutParams)},n.$$.update=()=>{n.$$.dirty[0]&65536&&t(25,i=y),n.$$.dirty[0]&786432&&x(g,m),n.$$.dirty[0]&33587200&&t(6,r=_?te():i),n.$$.dirty[0]&131136&&t(13,s=p!==void 0?p:r.length),t(12,o=`${e.class??""}`),n.$$.dirty[0]&1048576&&t(11,a=`${E}`),n.$$.dirty[0]&2097152&&t(10,l=`${k}`),n.$$.dirty[0]&4194304&&t(9,u=`${T}`),n.$$.dirty[0]&8388608&&t(8,f=`${S}`),n.$$.dirty[0]&16777216&&t(7,c=`${R}`)},e=Ie(e),[v,M,O,K,G,z,r,c,f,u,l,a,o,s,re,_,y,p,g,m,E,k,T,S,R,i,he,be,pe]}class nu extends fe{constructor(e){super(),de(this,e,tu,eu,ce,{input:15,options:16,limit:17,allowlist:18,denylist:19,emptyState:0,regionNav:20,regionList:21,regionItem:22,regionButton:23,regionEmpty:24,transitions:1,transitionIn:2,transitionInParams:3,transitionOut:4,transitionOutParams:5},null,[-1,-1])}}function iu(n){let e,t,i=String(n[1]).substring(0,2).toUpperCase()+"",r,s;return{c(){e=Gn("svg"),t=Gn("text"),r=$(i),this.h()},l(o){e=xn(o,"svg",{class:!0,viewBox:!0});var a=D(e);t=xn(a,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var l=D(t);r=ee(l,i),l.forEach(I),a.forEach(I),this.h()},h(){b(t,"x","50%"),b(t,"y","50%"),b(t,"dominant-baseline","central"),b(t,"text-anchor","middle"),b(t,"font-weight","bold"),b(t,"font-size",150),b(t,"class",s="avatar-text "+n[2]),b(e,"class","avatar-initials w-full h-full"),b(e,"viewBox","0 0 512 512")},m(o,a){V(o,e,a),w(e,t),w(t,r)},p(o,a){a&2&&i!==(i=String(o[1]).substring(0,2).toUpperCase()+"")&&oe(r,i),a&4&&s!==(s="avatar-text "+o[2])&&b(t,"class",s)},d(o){o&&I(e)}}}function ru(n){let e,t,i,r,s,o,a,l,u=[{class:t="avatar-image "+au},{style:i=n[8].style??""},{src:r=n[0]},{alt:s=n[8].alt||""},n[7]()],f={};for(let c=0;c<u.length;c+=1)f=ge(f,u[c]);return{c(){e=A("img"),this.h()},l(c){e=C(c,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){Xt(e,f)},m(c,d){V(c,e,d),a||(l=[rn(o=n[4].call(null,e,n[5])),q(e,"error",n[19])],a=!0)},p(c,d){Xt(e,f=mn(u,[{class:t},d&256&&i!==(i=c[8].style??"")&&{style:i},d&1&&!hn(e.src,r=c[0])&&{src:r},d&256&&s!==(s=c[8].alt||"")&&{alt:s},c[7]()])),o&&ci(o.update)&&d&32&&o.update.call(null,c[5])},d(c){c&&I(e),a=!1,Be(l)}}}function su(n){let e,t,i,r;function s(l,u){return l[0]?ru:iu}let o=s(n),a=o(n);return{c(){e=A("figure"),a.c(),this.h()},l(l){e=C(l,"FIGURE",{class:!0,"data-testid":!0});var u=D(e);a.l(u),u.forEach(I),this.h()},h(){b(e,"class",t="avatar "+n[6]),b(e,"data-testid","avatar")},m(l,u){V(l,e,u),a.m(e,null),i||(r=[q(e,"click",n[15]),q(e,"keydown",n[16]),q(e,"keyup",n[17]),q(e,"keypress",n[18])],i=!0)},p(l,[u]){o===(o=s(l))&&a?a.p(l,u):(a.d(1),a=o(l),a&&(a.c(),a.m(e,null))),u&64&&t!==(t="avatar "+l[6])&&b(e,"class",t)},i:me,o:me,d(l){l&&I(e),a.d(),i=!1,Be(r)}}}let ou="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",au="w-full h-full object-cover";function lu(n,e,t){let i;const r=["initials","fill","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let s=Yt(e,r),{initials:o="AB"}=e,{fill:a="fill-token"}=e,{src:l=""}=e,{fallback:u=""}=e,{action:f=()=>{}}=e,{actionParams:c=""}=e,{background:d="bg-surface-400-500-token"}=e,{width:h="w-16"}=e,{border:_=""}=e,{rounded:y="rounded-full"}=e,{shadow:p=""}=e,{cursor:g=""}=e;function m(){return delete s.class,s}function v(R){ae.call(this,n,R)}function E(R){ae.call(this,n,R)}function k(R){ae.call(this,n,R)}function T(R){ae.call(this,n,R)}const S=()=>t(0,l=u);return n.$$set=R=>{t(8,e=ge(ge({},e),Ie(R))),t(20,s=Yt(e,r)),"initials"in R&&t(1,o=R.initials),"fill"in R&&t(2,a=R.fill),"src"in R&&t(0,l=R.src),"fallback"in R&&t(3,u=R.fallback),"action"in R&&t(4,f=R.action),"actionParams"in R&&t(5,c=R.actionParams),"background"in R&&t(9,d=R.background),"width"in R&&t(10,h=R.width),"border"in R&&t(11,_=R.border),"rounded"in R&&t(12,y=R.rounded),"shadow"in R&&t(13,p=R.shadow),"cursor"in R&&t(14,g=R.cursor)},n.$$.update=()=>{t(6,i=`${ou} ${d} ${h} ${_} ${y} ${p} ${g} ${e.class??""}`)},e=Ie(e),[l,o,a,u,f,c,i,m,e,d,h,_,y,p,g,v,E,k,T,S]}class ia extends fe{constructor(e){super(),de(this,e,lu,su,ce,{initials:1,fill:2,src:0,fallback:3,action:4,actionParams:5,background:9,width:10,border:11,rounded:12,shadow:13,cursor:14})}}function ra(n,{from:e,to:t},i={}){const r=getComputedStyle(n),s=r.transform==="none"?"":r.transform,[o,a]=r.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),u=e.top+e.height*a/t.height-(t.top+a),{delay:f=0,duration:c=h=>Math.sqrt(h)*120,easing:d=fi}=i;return{delay:f,duration:ci(c)?c(Math.sqrt(l*l+u*u)):c,easing:d,css:(h,_)=>{const y=_*l,p=_*u,g=h+_*e.width/t.width,m=h+_*e.height/t.height;return`transform: ${s} translate(${y}px, ${p}px) scale(${g}, ${m});`}}}function ws(n){let e,t;const i=n[22].default,r=Pe(i,n,n[21],null);return{c(){e=A("div"),r&&r.c(),this.h()},l(s){e=C(s,"DIV",{class:!0});var o=D(e);r&&r.l(o),o.forEach(I),this.h()},h(){b(e,"class","slide-toggle-text ml-3")},m(s,o){V(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o[0]&2097152)&&Oe(r,i,s,s[21],t?Me(i,s[21],o,null):Le(s[21]),null)},i(s){t||(P(r,s),t=!0)},o(s){L(r,s),t=!1},d(s){s&&I(e),r&&r.d(s)}}}function cu(n){let e,t,i,r,s,o,a,l,u,f,c,d,h,_,y,p=[{type:"checkbox"},{class:"slide-toggle-input hidden"},{name:n[1]},n[8](),{disabled:r=n[9].disabled}],g={};for(let v=0;v<p.length;v+=1)g=ge(g,p[v]);let m=n[10].default&&ws(n);return{c(){e=A("div"),t=A("label"),i=A("input"),s=N(),o=A("div"),a=A("div"),f=N(),m&&m.c(),this.h()},l(v){e=C(v,"DIV",{id:!0,class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-checked":!0,tabindex:!0});var E=D(e);t=C(E,"LABEL",{class:!0});var k=D(t);i=C(k,"INPUT",{type:!0,class:!0,name:!0}),s=U(k),o=C(k,"DIV",{class:!0});var T=D(o);a=C(T,"DIV",{class:!0}),D(a).forEach(I),T.forEach(I),f=U(k),m&&m.l(k),k.forEach(I),E.forEach(I),this.h()},h(){Xt(i,g),b(a,"class",l="slide-toggle-thumb "+n[3]),pt(a,"cursor-not-allowed",n[9].disabled),b(o,"class",u="slide-toggle-track "+n[4]),pt(o,"cursor-not-allowed",n[9].disabled),b(t,"class",c="slide-toggle-label "+n[5]),b(e,"id",n[2]),b(e,"class",d="slide-toggle "+n[6]),b(e,"data-testid","slide-toggle"),b(e,"role","switch"),b(e,"aria-label",n[2]),b(e,"aria-checked",n[0]),b(e,"tabindex","0")},m(v,E){V(v,e,E),w(e,t),w(t,i),i.autofocus&&i.focus(),i.checked=n[0],w(t,s),w(t,o),w(o,a),w(t,f),m&&m.m(t,null),h=!0,_||(y=[q(i,"change",n[31]),q(i,"click",n[23]),q(i,"keydown",n[24]),q(i,"keyup",n[25]),q(i,"keypress",n[26]),q(i,"mouseover",n[27]),q(i,"change",n[28]),q(i,"focus",n[29]),q(i,"blur",n[30]),q(e,"keydown",n[7])],_=!0)},p(v,E){Xt(i,g=mn(p,[{type:"checkbox"},{class:"slide-toggle-input hidden"},(!h||E[0]&2)&&{name:v[1]},v[8](),(!h||E[0]&512&&r!==(r=v[9].disabled))&&{disabled:r}])),E[0]&1&&(i.checked=v[0]),(!h||E[0]&8&&l!==(l="slide-toggle-thumb "+v[3]))&&b(a,"class",l),(!h||E[0]&520)&&pt(a,"cursor-not-allowed",v[9].disabled),(!h||E[0]&16&&u!==(u="slide-toggle-track "+v[4]))&&b(o,"class",u),(!h||E[0]&528)&&pt(o,"cursor-not-allowed",v[9].disabled),v[10].default?m?(m.p(v,E),E[0]&1024&&P(m,1)):(m=ws(v),m.c(),P(m,1),m.m(t,null)):m&&(ne(),L(m,1,1,()=>{m=null}),ie()),(!h||E[0]&32&&c!==(c="slide-toggle-label "+v[5]))&&b(t,"class",c),(!h||E[0]&4)&&b(e,"id",v[2]),(!h||E[0]&64&&d!==(d="slide-toggle "+v[6]))&&b(e,"class",d),(!h||E[0]&4)&&b(e,"aria-label",v[2]),(!h||E[0]&1)&&b(e,"aria-checked",v[0])},i(v){h||(P(m),h=!0)},o(v){L(m),h=!1},d(v){v&&I(e),m&&m.d(),_=!1,Be(y)}}}const uu="inline-block",fu="unstyled flex items-center",du="flex transition-all duration-[200ms] cursor-pointer",hu="w-[50%] h-full scale-[0.8] transition-all duration-[200ms] shadow";function mu(n,e,t){let i,r,s,o,a,l,u,f;const c=["name","checked","size","background","active","border","rounded","label"];let d=Yt(e,c),{$$slots:h={},$$scope:_}=e;const y=$i(h),p=li();let{name:g}=e,{checked:m=!1}=e,{size:v="md"}=e,{background:E="bg-surface-400 dark:bg-surface-700"}=e,{active:k="bg-surface-900 dark:bg-surface-300"}=e,{border:T=""}=e,{rounded:S="rounded-full"}=e,{label:R=""}=e,M;switch(v){case"sm":M="w-12 h-6";break;case"lg":M="w-20 h-10";break;default:M="w-16 h-8"}function O(W){["Enter","Space"].includes(W.code)&&(W.preventDefault(),p("keyup",W),W.currentTarget.firstChild.click())}function K(){return delete d.class,d}function G(W){ae.call(this,n,W)}function z(W){ae.call(this,n,W)}function x(W){ae.call(this,n,W)}function te(W){ae.call(this,n,W)}function re(W){ae.call(this,n,W)}function he(W){ae.call(this,n,W)}function be(W){ae.call(this,n,W)}function pe(W){ae.call(this,n,W)}function j(){m=this.checked,t(0,m)}return n.$$set=W=>{t(9,e=ge(ge({},e),Ie(W))),t(33,d=Yt(e,c)),"name"in W&&t(1,g=W.name),"checked"in W&&t(0,m=W.checked),"size"in W&&t(11,v=W.size),"background"in W&&t(12,E=W.background),"active"in W&&t(13,k=W.active),"border"in W&&t(14,T=W.border),"rounded"in W&&t(15,S=W.rounded),"label"in W&&t(2,R=W.label),"$$scope"in W&&t(21,_=W.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&12289&&t(19,i=m?k:`${E} cursor-pointer`),n.$$.dirty[0]&1&&t(18,r=m?"bg-white/75":"bg-white"),n.$$.dirty[0]&1&&t(17,s=m?"translate-x-full":""),t(20,o=e.disabled===!0?"opacity-50":"hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer"),t(6,a=`${uu} ${S} ${o} ${e.class??""}`),n.$$.dirty[0]&638976&&t(4,u=`${du} ${T} ${S} ${M} ${i}`),n.$$.dirty[0]&425984&&t(3,f=`${hu} ${S} ${r} ${s}`)},t(5,l=`${fu}`),e=Ie(e),[m,g,R,f,u,l,a,O,K,e,y,v,E,k,T,S,M,s,r,i,o,_,h,G,z,x,te,re,he,be,pe,j]}class gu extends fe{constructor(e){super(),de(this,e,mu,cu,ce,{name:1,checked:0,size:11,background:12,active:13,border:14,rounded:15,label:2},null,[-1,-1])}}function Es(n){let e=n[13],t,i,r=Cs(n);return{c(){r.c(),t=ye()},l(s){r.l(s),t=ye()},m(s,o){r.m(s,o),V(s,t,o),i=!0},p(s,o){o[0]&8192&&ce(e,e=s[13])?(ne(),L(r,1,1,me),ie(),r=Cs(s),r.c(),P(r,1),r.m(t.parentNode,t)):r.p(s,o)},i(s){i||(P(r),i=!0)},o(s){L(r),i=!1},d(s){s&&I(t),r.d(s)}}}function pu(n){var u,f;let e,t,i,r,s;const o=[(u=n[15])==null?void 0:u.props,{parent:n[16]}];var a=(f=n[15])==null?void 0:f.ref;function l(c,d){var _;let h={$$slots:{default:[bu]},$$scope:{ctx:c}};if(d!==void 0&&d[0]&98304)h=mn(o,[d[0]&32768&&xr((_=c[15])==null?void 0:_.props),d[0]&65536&&{parent:c[16]}]);else for(let y=0;y<o.length;y+=1)h=ge(h,o[y]);return{props:h}}return a&&(t=qr(a,l(n))),{c(){e=A("div"),t&&Y(t.$$.fragment),this.h()},l(c){e=C(c,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var d=D(e);t&&Z(t.$$.fragment,d),d.forEach(I),this.h()},h(){var c;b(e,"class",i="modal contents "+(((c=n[13][0])==null?void 0:c.modalClasses)??"")),b(e,"data-testid","modal-component"),b(e,"role","dialog"),b(e,"aria-modal","true"),b(e,"aria-label",r=n[13][0].title??"")},m(c,d){V(c,e,d),t&&X(t,e,null),s=!0},p(c,d){var h,_,y;if(d[0]&32768&&a!==(a=(h=c[15])==null?void 0:h.ref)){if(t){ne();const p=t;L(p.$$.fragment,1,0,()=>{Q(p,1)}),ie()}a?(t=qr(a,l(c,d)),Y(t.$$.fragment),P(t.$$.fragment,1),X(t,e,null)):t=null}else if(a){const p=d[0]&98304?mn(o,[d[0]&32768&&xr((_=c[15])==null?void 0:_.props),d[0]&65536&&{parent:c[16]}]):{};d[0]&32768|d[1]&65536&&(p.$$scope={dirty:d,ctx:c}),t.$set(p)}(!s||d[0]&8192&&i!==(i="modal contents "+(((y=c[13][0])==null?void 0:y.modalClasses)??"")))&&b(e,"class",i),(!s||d[0]&8192&&r!==(r=c[13][0].title??""))&&b(e,"aria-label",r)},i(c){s||(t&&P(t.$$.fragment,c),s=!0)},o(c){t&&L(t.$$.fragment,c),s=!1},d(c){c&&I(e),t&&Q(t)}}}function _u(n){var h,_,y,p;let e,t,i,r,s,o,a=((h=n[13][0])==null?void 0:h.title)&&Ts(n),l=((_=n[13][0])==null?void 0:_.body)&&Ss(n),u=((y=n[13][0])==null?void 0:y.image)&&typeof((p=n[13][0])==null?void 0:p.image)=="string"&&As(n);function f(g,m){if(g[13][0].type==="alert")return Iu;if(g[13][0].type==="confirm")return yu;if(g[13][0].type==="prompt")return vu}let c=f(n),d=c&&c(n);return{c(){e=A("div"),a&&a.c(),t=N(),l&&l.c(),i=N(),u&&u.c(),r=N(),d&&d.c(),this.h()},l(g){e=C(g,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var m=D(e);a&&a.l(m),t=U(m),l&&l.l(m),i=U(m),u&&u.l(m),r=U(m),d&&d.l(m),m.forEach(I),this.h()},h(){b(e,"class",s="modal "+n[17]),b(e,"data-testid","modal"),b(e,"role","dialog"),b(e,"aria-modal","true"),b(e,"aria-label",o=n[13][0].title??"")},m(g,m){V(g,e,m),a&&a.m(e,null),w(e,t),l&&l.m(e,null),w(e,i),u&&u.m(e,null),w(e,r),d&&d.m(e,null)},p(g,m){var v,E,k,T;(v=g[13][0])!=null&&v.title?a?a.p(g,m):(a=Ts(g),a.c(),a.m(e,t)):a&&(a.d(1),a=null),(E=g[13][0])!=null&&E.body?l?l.p(g,m):(l=Ss(g),l.c(),l.m(e,i)):l&&(l.d(1),l=null),(k=g[13][0])!=null&&k.image&&typeof((T=g[13][0])==null?void 0:T.image)=="string"?u?u.p(g,m):(u=As(g),u.c(),u.m(e,r)):u&&(u.d(1),u=null),c===(c=f(g))&&d?d.p(g,m):(d&&d.d(1),d=c&&c(g),d&&(d.c(),d.m(e,null))),m[0]&131072&&s!==(s="modal "+g[17])&&b(e,"class",s),m[0]&8192&&o!==(o=g[13][0].title??"")&&b(e,"aria-label",o)},i:me,o:me,d(g){g&&I(e),a&&a.d(),l&&l.d(),u&&u.d(),d&&d.d()}}}function ks(n){var r;let e,t=((r=n[15])==null?void 0:r.slot)+"",i;return{c(){e=new Vt(!1),i=ye(),this.h()},l(s){e=Ht(s,!1),i=ye(),this.h()},h(){e.a=i},m(s,o){e.m(t,s,o),V(s,i,o)},p(s,o){var a;o[0]&32768&&t!==(t=((a=s[15])==null?void 0:a.slot)+"")&&e.p(t)},d(s){s&&(I(i),e.d())}}}function bu(n){var i;let e,t=((i=n[15])==null?void 0:i.slot)&&ks(n);return{c(){t&&t.c(),e=ye()},l(r){t&&t.l(r),e=ye()},m(r,s){t&&t.m(r,s),V(r,e,s)},p(r,s){var o;(o=r[15])!=null&&o.slot?t?t.p(r,s):(t=ks(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&I(e),t&&t.d(r)}}}function Ts(n){let e,t,i=n[13][0].title+"",r;return{c(){e=A("header"),t=new Vt(!1),this.h()},l(s){e=C(s,"HEADER",{class:!0});var o=D(e);t=Ht(o,!1),o.forEach(I),this.h()},h(){t.a=null,b(e,"class",r="modal-header "+n[5])},m(s,o){V(s,e,o),t.m(i,e)},p(s,o){o[0]&8192&&i!==(i=s[13][0].title+"")&&t.p(i),o[0]&32&&r!==(r="modal-header "+s[5])&&b(e,"class",r)},d(s){s&&I(e)}}}function Ss(n){let e,t,i=n[13][0].body+"",r;return{c(){e=A("article"),t=new Vt(!1),this.h()},l(s){e=C(s,"ARTICLE",{class:!0});var o=D(e);t=Ht(o,!1),o.forEach(I),this.h()},h(){t.a=null,b(e,"class",r="modal-body "+n[6])},m(s,o){V(s,e,o),t.m(i,e)},p(s,o){o[0]&8192&&i!==(i=s[13][0].body+"")&&t.p(i),o[0]&64&&r!==(r="modal-body "+s[6])&&b(e,"class",r)},d(s){s&&I(e)}}}function As(n){let e,t;return{c(){e=A("img"),this.h()},l(i){e=C(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){var i;b(e,"class","modal-image "+Su),hn(e.src,t=(i=n[13][0])==null?void 0:i.image)||b(e,"src",t),b(e,"alt","Modal")},m(i,r){V(i,e,r)},p(i,r){var s;r[0]&8192&&!hn(e.src,t=(s=i[13][0])==null?void 0:s.image)&&b(e,"src",t)},d(i){i&&I(e)}}}function vu(n){let e,t,i,r,s,o,a,l,u,f,c,d,h,_,y=[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},n[13][0].valueAttr],p={};for(let g=0;g<y.length;g+=1)p=ge(p,y[g]);return{c(){e=A("form"),t=A("input"),i=N(),r=A("footer"),s=A("button"),o=$(n[0]),l=N(),u=A("button"),f=$(n[2]),this.h()},l(g){e=C(g,"FORM",{class:!0});var m=D(e);t=C(m,"INPUT",{class:!0,name:!0,type:!0}),i=U(m),r=C(m,"FOOTER",{class:!0});var v=D(r);s=C(v,"BUTTON",{type:!0,class:!0});var E=D(s);o=ee(E,n[0]),E.forEach(I),l=U(v),u=C(v,"BUTTON",{type:!0,class:!0});var k=D(u);f=ee(k,n[2]),k.forEach(I),v.forEach(I),m.forEach(I),this.h()},h(){Xt(t,p),b(s,"type","button"),b(s,"class",a="btn "+n[3]),b(u,"type","submit"),b(u,"class",c="btn "+n[4]),b(r,"class",d="modal-footer "+n[7]),b(e,"class","space-y-4")},m(g,m){V(g,e,m),w(e,t),t.autofocus&&t.focus(),nt(t,n[14]),w(e,i),w(e,r),w(r,s),w(s,o),w(r,l),w(r,u),w(u,f),h||(_=[q(t,"input",n[41]),q(s,"click",n[23]),q(e,"submit",n[25])],h=!0)},p(g,m){Xt(t,p=mn(y,[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},m[0]&8192&&g[13][0].valueAttr])),m[0]&16384&&t.value!==g[14]&&nt(t,g[14]),m[0]&1&&oe(o,g[0]),m[0]&8&&a!==(a="btn "+g[3])&&b(s,"class",a),m[0]&4&&oe(f,g[2]),m[0]&16&&c!==(c="btn "+g[4])&&b(u,"class",c),m[0]&128&&d!==(d="modal-footer "+g[7])&&b(r,"class",d)},d(g){g&&I(e),h=!1,Be(_)}}}function yu(n){let e,t,i,r,s,o,a,l,u,f,c;return{c(){e=A("footer"),t=A("button"),i=$(n[0]),s=N(),o=A("button"),a=$(n[1]),this.h()},l(d){e=C(d,"FOOTER",{class:!0});var h=D(e);t=C(h,"BUTTON",{type:!0,class:!0});var _=D(t);i=ee(_,n[0]),_.forEach(I),s=U(h),o=C(h,"BUTTON",{type:!0,class:!0});var y=D(o);a=ee(y,n[1]),y.forEach(I),h.forEach(I),this.h()},h(){b(t,"type","button"),b(t,"class",r="btn "+n[3]),b(o,"type","button"),b(o,"class",l="btn "+n[4]),b(e,"class",u="modal-footer "+n[7])},m(d,h){V(d,e,h),w(e,t),w(t,i),w(e,s),w(e,o),w(o,a),f||(c=[q(t,"click",n[23]),q(o,"click",n[24])],f=!0)},p(d,h){h[0]&1&&oe(i,d[0]),h[0]&8&&r!==(r="btn "+d[3])&&b(t,"class",r),h[0]&2&&oe(a,d[1]),h[0]&16&&l!==(l="btn "+d[4])&&b(o,"class",l),h[0]&128&&u!==(u="modal-footer "+d[7])&&b(e,"class",u)},d(d){d&&I(e),f=!1,Be(c)}}}function Iu(n){let e,t,i,r,s,o,a;return{c(){e=A("footer"),t=A("button"),i=$(n[0]),this.h()},l(l){e=C(l,"FOOTER",{class:!0});var u=D(e);t=C(u,"BUTTON",{type:!0,class:!0});var f=D(t);i=ee(f,n[0]),f.forEach(I),u.forEach(I),this.h()},h(){b(t,"type","button"),b(t,"class",r="btn "+n[3]),b(e,"class",s="modal-footer "+n[7])},m(l,u){V(l,e,u),w(e,t),w(t,i),o||(a=q(t,"click",n[23]),o=!0)},p(l,u){u[0]&1&&oe(i,l[0]),u[0]&8&&r!==(r="btn "+l[3])&&b(t,"class",r),u[0]&128&&s!==(s="modal-footer "+l[7])&&b(e,"class",s)},d(l){l&&I(e),o=!1,a()}}}function Cs(n){let e,t,i,r,s,o,a,l,u,f,c,d;const h=[_u,pu],_=[];function y(p,g){return p[13][0].type!=="component"?0:1}return i=y(n),r=_[i]=h[i](n),{c(){e=A("div"),t=A("div"),r.c(),this.h()},l(p){e=C(p,"DIV",{class:!0,"data-testid":!0});var g=D(e);t=C(g,"DIV",{class:!0});var m=D(t);r.l(m),m.forEach(I),g.forEach(I),this.h()},h(){b(t,"class",s="modal-transition "+n[18]),b(e,"class",l="modal-backdrop "+n[19]),b(e,"data-testid","modal-backdrop")},m(p,g){V(p,e,g),w(e,t),_[i].m(t,null),f=!0,c||(d=[q(e,"mousedown",n[21]),q(e,"mouseup",n[22]),q(e,"touchstart",n[39],{passive:!0}),q(e,"touchend",n[40],{passive:!0}),rn(kc.call(null,e,!0))],c=!0)},p(p,g){n=p;let m=i;i=y(n),i===m?_[i].p(n,g):(ne(),L(_[m],1,1,()=>{_[m]=null}),ie(),r=_[i],r?r.p(n,g):(r=_[i]=h[i](n),r.c()),P(r,1),r.m(t,null)),(!f||g[0]&262144&&s!==(s="modal-transition "+n[18]))&&b(t,"class",s),(!f||g[0]&524288&&l!==(l="modal-backdrop "+n[19]))&&b(e,"class",l)},i(p){f||(P(r),It(()=>{f&&(a&&a.end(1),o=tr(t,_t,{transition:n[9],params:n[10],enabled:n[8]}),o.start())}),It(()=>{f&&(u||(u=Qt(e,_t,{transition:Zr,params:{duration:150},enabled:n[8]},!0)),u.run(1))}),f=!0)},o(p){L(r),o&&o.invalidate(),a=nr(t,_t,{transition:n[11],params:n[12],enabled:n[8]}),u||(u=Qt(e,_t,{transition:Zr,params:{duration:150},enabled:n[8]},!1)),u.run(0),f=!1},d(p){p&&I(e),_[i].d(),p&&a&&a.end(),p&&u&&u.end(),c=!1,Be(d)}}}function wu(n){let e,t,i,r,s=n[13].length>0&&Es(n);return{c(){s&&s.c(),e=ye()},l(o){s&&s.l(o),e=ye()},m(o,a){s&&s.m(o,a),V(o,e,a),t=!0,i||(r=q(window,"keydown",n[26]),i=!0)},p(o,a){o[13].length>0?s?(s.p(o,a),a[0]&8192&&P(s,1)):(s=Es(o),s.c(),P(s,1),s.m(e.parentNode,e)):s&&(ne(),L(s,1,1,()=>{s=null}),ie())},i(o){t||(P(s),t=!0)},o(o){L(s),t=!1},d(o){o&&I(e),s&&s.d(o),i=!1,r()}}}const Eu="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto",ku="w-full h-fit min-h-full p-4 overflow-y-auto flex justify-center",Tu="block overflow-y-auto",Su="w-full h-auto";function Au(n,e,t){let i,r,s,o,a,l,u;Te(n,ir,F=>t(43,u=F));const f=li();let{position:c="items-center"}=e,{components:d={}}=e,{background:h="bg-surface-100-800-token"}=e,{width:_="w-modal"}=e,{height:y="h-auto"}=e,{padding:p="p-4"}=e,{spacing:g="space-y-4"}=e,{rounded:m="rounded-container-token"}=e,{shadow:v="shadow-xl"}=e,{zIndex:E="z-[999]"}=e,{buttonNeutral:k="variant-ghost-surface"}=e,{buttonPositive:T="variant-filled"}=e,{buttonTextCancel:S="Cancel"}=e,{buttonTextConfirm:R="Confirm"}=e,{buttonTextSubmit:M="Submit"}=e,{regionBackdrop:O="bg-surface-backdrop-token"}=e,{regionHeader:K="text-2xl font-bold"}=e,{regionBody:G="max-h-[200px] overflow-hidden"}=e,{regionFooter:z="flex justify-end space-x-2"}=e,{transitions:x=!u}=e,{transitionIn:te=$t}=e,{transitionInParams:re={duration:150,opacity:0,x:0,y:100}}=e,{transitionOut:he=$t}=e,{transitionOutParams:be={duration:150,opacity:0,x:0,y:100}}=e,pe;const j={buttonTextCancel:S,buttonTextConfirm:R,buttonTextSubmit:M};let W,B=!1;const se=ar();Te(n,se,F=>t(13,l=F)),se.subscribe(F=>{F.length&&(F[0].type==="prompt"&&t(14,pe=F[0].value),t(0,S=F[0].buttonTextCancel||j.buttonTextCancel),t(1,R=F[0].buttonTextConfirm||j.buttonTextConfirm),t(2,M=F[0].buttonTextSubmit||j.buttonTextSubmit),t(15,W=typeof F[0].component=="string"?d[F[0].component]:F[0].component))});function Ee(F){if(!(F.target instanceof Element))return;const ke=F.target.classList;(ke.contains("modal-backdrop")||ke.contains("modal-transition"))&&(B=!0)}function He(F){if(!(F.target instanceof Element))return;const ke=F.target.classList;(ke.contains("modal-backdrop")||ke.contains("modal-transition"))&&B&&(l[0].response&&l[0].response(void 0),se.close(),f("backdrop",F)),B=!1}function lt(){l[0].response&&l[0].response(!1),se.close()}function kt(){l[0].response&&l[0].response(!0),se.close()}function We(F){F.preventDefault(),l[0].response&&l[0].response(pe),se.close()}function $e(F){l.length&&F.code==="Escape"&&lt()}function H(F){ae.call(this,n,F)}function je(F){ae.call(this,n,F)}function ze(){pe=this.value,t(14,pe)}return n.$$set=F=>{t(46,e=ge(ge({},e),Ie(F))),"position"in F&&t(27,c=F.position),"components"in F&&t(28,d=F.components),"background"in F&&t(29,h=F.background),"width"in F&&t(30,_=F.width),"height"in F&&t(31,y=F.height),"padding"in F&&t(32,p=F.padding),"spacing"in F&&t(33,g=F.spacing),"rounded"in F&&t(34,m=F.rounded),"shadow"in F&&t(35,v=F.shadow),"zIndex"in F&&t(36,E=F.zIndex),"buttonNeutral"in F&&t(3,k=F.buttonNeutral),"buttonPositive"in F&&t(4,T=F.buttonPositive),"buttonTextCancel"in F&&t(0,S=F.buttonTextCancel),"buttonTextConfirm"in F&&t(1,R=F.buttonTextConfirm),"buttonTextSubmit"in F&&t(2,M=F.buttonTextSubmit),"regionBackdrop"in F&&t(37,O=F.regionBackdrop),"regionHeader"in F&&t(5,K=F.regionHeader),"regionBody"in F&&t(6,G=F.regionBody),"regionFooter"in F&&t(7,z=F.regionFooter),"transitions"in F&&t(8,x=F.transitions),"transitionIn"in F&&t(9,te=F.transitionIn),"transitionInParams"in F&&t(10,re=F.transitionInParams),"transitionOut"in F&&t(11,he=F.transitionOut),"transitionOutParams"in F&&t(12,be=F.transitionOutParams)},n.$$.update=()=>{var F,ke,qe;n.$$.dirty[0]&134225920&&t(38,i=((F=l[0])==null?void 0:F.position)??c),t(19,r=`${Eu} ${O} ${E} ${e.class??""} ${((ke=l[0])==null?void 0:ke.backdropClasses)??""}`),n.$$.dirty[1]&128&&t(18,s=`${ku} ${i??""}`),n.$$.dirty[0]&1610620928|n.$$.dirty[1]&31&&t(17,o=`${Tu} ${h} ${_} ${y} ${p} ${g} ${m} ${v} ${((qe=l[0])==null?void 0:qe.modalClasses)??""}`),n.$$.dirty[0]&1744830719|n.$$.dirty[1]&95&&t(16,a={position:c,background:h,width:_,height:y,padding:p,spacing:g,rounded:m,shadow:v,buttonNeutral:k,buttonPositive:T,buttonTextCancel:S,buttonTextConfirm:R,buttonTextSubmit:M,regionBackdrop:O,regionHeader:K,regionBody:G,regionFooter:z,onClose:lt})},e=Ie(e),[S,R,M,k,T,K,G,z,x,te,re,he,be,l,pe,W,a,o,s,r,se,Ee,He,lt,kt,We,$e,c,d,h,_,y,p,g,m,v,E,O,i,H,je,ze]}class Cu extends fe{constructor(e){super(),de(this,e,Au,wu,ce,{position:27,components:28,background:29,width:30,height:31,padding:32,spacing:33,rounded:34,shadow:35,zIndex:36,buttonNeutral:3,buttonPositive:4,buttonTextCancel:0,buttonTextConfirm:1,buttonTextSubmit:2,regionBackdrop:37,regionHeader:5,regionBody:6,regionFooter:7,transitions:8,transitionIn:9,transitionInParams:10,transitionOut:11,transitionOutParams:12},null,[-1,-1])}}function Ru(n){let e,t=`<script nonce="%sveltekit.nonce%">(${Jl.toString()})();<\/script>`,i,r,s,o,a,l,u,f,c,d,h,_,y;return{c(){e=new Vt(!1),i=ye(),r=N(),s=A("div"),o=A("div"),a=Gn("svg"),l=Gn("path"),this.h()},l(p){const g=Bl("svelte-gewkj4",document.head);e=Ht(g,!1),i=ye(),g.forEach(I),r=U(p),s=C(p,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var m=D(s);o=C(m,"DIV",{class:!0});var v=D(o);a=xn(v,"svg",{class:!0,xmlns:!0,viewBox:!0});var E=D(a);l=xn(E,"path",{d:!0}),D(l).forEach(I),E.forEach(I),v.forEach(I),m.forEach(I),this.h()},h(){e.a=i,b(l,"d",u=n[0]?n[4].sun:n[4].moon),b(a,"class",f="lightswitch-icon "+n[1]),b(a,"xmlns","http://www.w3.org/2000/svg"),b(a,"viewBox","0 0 512 512"),b(o,"class",c="lightswitch-thumb "+n[2]),b(s,"class",d="lightswitch-track "+n[3]),b(s,"role","switch"),b(s,"aria-label","Light Switch"),b(s,"aria-checked",n[0]),b(s,"title",h="Toggle "+(n[0]===!0?"Dark":"Light")+" Mode"),b(s,"tabindex","0")},m(p,g){e.m(t,document.head),w(document.head,i),V(p,r,g),V(p,s,g),w(s,o),w(o,a),w(a,l),_||(y=[q(s,"click",n[5]),q(s,"click",n[18]),q(s,"keydown",Lu),q(s,"keydown",n[19]),q(s,"keyup",n[20]),q(s,"keypress",n[21])],_=!0)},p(p,[g]){g&1&&u!==(u=p[0]?p[4].sun:p[4].moon)&&b(l,"d",u),g&2&&f!==(f="lightswitch-icon "+p[1])&&b(a,"class",f),g&4&&c!==(c="lightswitch-thumb "+p[2])&&b(o,"class",c),g&8&&d!==(d="lightswitch-track "+p[3])&&b(s,"class",d),g&1&&b(s,"aria-checked",p[0]),g&1&&h!==(h="Toggle "+(p[0]===!0?"Dark":"Light")+" Mode")&&b(s,"title",h)},i:me,o:me,d(p){p&&(e.d(),I(r),I(s)),I(i),_=!1,Be(y)}}}const Du="cursor-pointer",Pu="aspect-square scale-[0.8] flex justify-center items-center",Ou="w-[70%] aspect-square";function Lu(n){["Enter","Space"].includes(n.code)&&(n.preventDefault(),n.currentTarget.click())}function Mu(n,e,t){let i,r,s,o,a,l,u,f;Te(n,Jr,O=>t(0,f=O));let{bgLight:c="bg-surface-50"}=e,{bgDark:d="bg-surface-900"}=e,{fillLight:h="fill-surface-50"}=e,{fillDark:_="fill-surface-900"}=e,{width:y="w-12"}=e,{height:p="h-6"}=e,{ring:g="ring-[1px] ring-surface-500/30"}=e,{rounded:m="rounded-token"}=e;const v="transition-all duration-[200ms]",E={sun:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",moon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"};function k(){Go(Jr,f=!f,f),Xl(f),Yr(f)}er(()=>{"modeCurrent"in localStorage||Yr(Yl())});function T(O){ae.call(this,n,O)}function S(O){ae.call(this,n,O)}function R(O){ae.call(this,n,O)}function M(O){ae.call(this,n,O)}return n.$$set=O=>{t(23,e=ge(ge({},e),Ie(O))),"bgLight"in O&&t(6,c=O.bgLight),"bgDark"in O&&t(7,d=O.bgDark),"fillLight"in O&&t(8,h=O.fillLight),"fillDark"in O&&t(9,_=O.fillDark),"width"in O&&t(10,y=O.width),"height"in O&&t(11,p=O.height),"ring"in O&&t(12,g=O.ring),"rounded"in O&&t(13,m=O.rounded)},n.$$.update=()=>{n.$$.dirty&193&&t(17,i=f===!0?c:d),n.$$.dirty&193&&t(16,r=f===!0?d:c),n.$$.dirty&1&&t(15,s=f===!0?"translate-x-[100%]":""),n.$$.dirty&769&&t(14,o=f===!0?h:_),t(3,a=`${Du} ${v} ${y} ${p} ${g} ${m} ${i} ${e.class??""}`),n.$$.dirty&108544&&t(2,l=`${Pu} ${v} ${p} ${m} ${r} ${s}`),n.$$.dirty&16384&&t(1,u=`${Ou} ${o}`)},e=Ie(e),[f,u,l,a,E,k,c,d,h,_,y,p,g,m,o,s,r,i,T,S,R,M]}class Nu extends fe{constructor(e){super(),de(this,e,Mu,Ru,ce,{bgLight:6,bgDark:7,fillLight:8,fillDark:9,width:10,height:11,ring:12,rounded:13})}}function Rs(n,e,t){const i=n.slice();return i[36]=e[t],i[38]=t,i}function Ds(n){let e,t,i=[],r=new Map,s,o,a,l=we(n[11]);const u=f=>f[36];for(let f=0;f<l.length;f+=1){let c=Rs(n,l,f),d=u(c);r.set(d,i[f]=Ms(d,c))}return{c(){e=A("div"),t=A("div");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=C(f,"DIV",{class:!0,"data-testid":!0});var c=D(e);t=C(c,"DIV",{class:!0});var d=D(t);for(let h=0;h<i.length;h+=1)i[h].l(d);d.forEach(I),c.forEach(I),this.h()},h(){b(t,"class",s="snackbar "+n[13]),b(e,"class",o="snackbar-wrapper "+n[14]),b(e,"data-testid","snackbar-wrapper")},m(f,c){V(f,e,c),w(e,t);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(t,null);a=!0},p(f,c){if(c[0]&499103){l=we(f[11]),ne();for(let d=0;d<i.length;d+=1)i[d].r();i=rr(i,c,u,1,f,l,r,t,xo,Ms,null,Rs);for(let d=0;d<i.length;d+=1)i[d].a();ie()}(!a||c[0]&8192&&s!==(s="snackbar "+f[13]))&&b(t,"class",s),(!a||c[0]&16384&&o!==(o="snackbar-wrapper "+f[14]))&&b(e,"class",o)},i(f){if(!a){for(let c=0;c<l.length;c+=1)P(i[c]);a=!0}},o(f){for(let c=0;c<i.length;c+=1)L(i[c]);a=!1},d(f){f&&I(e);for(let c=0;c<i.length;c+=1)i[c].d()}}}function Ps(n){let e,t,i=n[36].action&&Os(n),r=!n[36].hideDismiss&&Ls(n);return{c(){e=A("div"),i&&i.c(),t=N(),r&&r.c(),this.h()},l(s){e=C(s,"DIV",{class:!0});var o=D(e);i&&i.l(o),t=U(o),r&&r.l(o),o.forEach(I),this.h()},h(){b(e,"class","toast-actions "+Hu)},m(s,o){V(s,e,o),i&&i.m(e,null),w(e,t),r&&r.m(e,null)},p(s,o){s[36].action?i?i.p(s,o):(i=Os(s),i.c(),i.m(e,t)):i&&(i.d(1),i=null),s[36].hideDismiss?r&&(r.d(1),r=null):r?r.p(s,o):(r=Ls(s),r.c(),r.m(e,null))},d(s){s&&I(e),i&&i.d(),r&&r.d()}}}function Os(n){let e,t,i=n[36].action.label+"",r,s;function o(){return n[30](n[38])}return{c(){e=A("button"),t=new Vt(!1),this.h()},l(a){e=C(a,"BUTTON",{class:!0});var l=D(e);t=Ht(l,!1),l.forEach(I),this.h()},h(){t.a=null,b(e,"class",n[1])},m(a,l){V(a,e,l),t.m(i,e),r||(s=q(e,"click",o),r=!0)},p(a,l){n=a,l[0]&2048&&i!==(i=n[36].action.label+"")&&t.p(i),l[0]&2&&b(e,"class",n[1])},d(a){a&&I(e),r=!1,s()}}}function Ls(n){let e,t,i,r;function s(){return n[31](n[36])}return{c(){e=A("button"),t=$(n[3]),this.h()},l(o){e=C(o,"BUTTON",{class:!0,"aria-label":!0});var a=D(e);t=ee(a,n[3]),a.forEach(I),this.h()},h(){b(e,"class",n[2]),b(e,"aria-label","Dismiss toast")},m(o,a){V(o,e,a),w(e,t),i||(r=q(e,"click",s),i=!0)},p(o,a){n=o,a[0]&8&&oe(t,n[3]),a[0]&4&&b(e,"class",n[2])},d(o){o&&I(e),i=!1,r()}}}function Ms(n,e){let t,i,r,s,o=e[36].message+"",a,l,u,f,c,d,h,_=me,y,p,g,m=(e[36].action||!e[36].hideDismiss)&&Ps(e);function v(){return e[32](e[38])}function E(){return e[33](e[38])}return{key:n,first:null,c(){t=A("div"),i=A("div"),r=A("div"),s=new Vt(!1),a=N(),m&&m.c(),u=N(),this.h()},l(k){t=C(k,"DIV",{role:!0,"aria-live":!0});var T=D(t);i=C(T,"DIV",{class:!0,"data-testid":!0});var S=D(i);r=C(S,"DIV",{class:!0});var R=D(r);s=Ht(R,!1),R.forEach(I),a=U(S),m&&m.l(S),S.forEach(I),u=U(T),T.forEach(I),this.h()},h(){s.a=null,b(r,"class","text-base"),b(i,"class",l="toast "+e[12]+" "+(e[36].background??e[0])+" "+(e[36].classes??"")),b(i,"data-testid","toast"),b(t,"role",f=e[36].hideDismiss?"alert":"alertdialog"),b(t,"aria-live","polite"),this.first=t},m(k,T){V(k,t,T),w(t,i),w(i,r),s.m(o,r),w(i,a),m&&m.m(i,null),w(t,u),y=!0,p||(g=[q(t,"mouseenter",v),q(t,"mouseleave",E)],p=!0)},p(k,T){e=k,(!y||T[0]&2048)&&o!==(o=e[36].message+"")&&s.p(o),e[36].action||!e[36].hideDismiss?m?m.p(e,T):(m=Ps(e),m.c(),m.m(i,null)):m&&(m.d(1),m=null),(!y||T[0]&6145&&l!==(l="toast "+e[12]+" "+(e[36].background??e[0])+" "+(e[36].classes??"")))&&b(i,"class",l),(!y||T[0]&2048&&f!==(f=e[36].hideDismiss?"alert":"alertdialog"))&&b(t,"role",f)},r(){h=t.getBoundingClientRect()},f(){Zo(t),_(),$o(t,h)},a(){_(),_=Qo(t,h,ra,{duration:e[4]?250:0})},i(k){y||(It(()=>{y&&(d&&d.end(1),c=tr(t,_t,{transition:e[5],params:{x:e[10].x,y:e[10].y,...e[6]},enabled:e[4]}),c.start())}),y=!0)},o(k){c&&c.invalidate(),d=nr(t,_t,{transition:e[7],params:{x:e[10].x,y:e[10].y,...e[8]},enabled:e[4]}),y=!1},d(k){k&&I(t),m&&m.d(),k&&d&&d.end(),p=!1,Be(g)}}}function Uu(n){let e,t,i=n[9].length&&Ds(n);return{c(){i&&i.c(),e=ye()},l(r){i&&i.l(r),e=ye()},m(r,s){i&&i.m(r,s),V(r,e,s),t=!0},p(r,s){r[9].length?i?(i.p(r,s),s[0]&512&&P(i,1)):(i=Ds(r),i.c(),P(i,1),i.m(e.parentNode,e)):i&&(ne(),L(i,1,1,()=>{i=null}),ie())},i(r){t||(P(i),t=!0)},o(r){L(i),t=!1},d(r){r&&I(e),i&&i.d(r)}}}const Fu="flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none",Bu="flex flex-col gap-y-2",Vu="flex justify-between items-center pointer-events-auto",Hu="flex items-center space-x-2";function ju(n,e,t){let i,r,s,o,a,l;Te(n,ir,B=>t(34,l=B));const u=Kt();Te(n,u,B=>t(9,a=B));let{position:f="b"}=e,{max:c=3}=e,{background:d="variant-filled-secondary"}=e,{width:h="max-w-[640px]"}=e,{color:_=""}=e,{padding:y="p-4"}=e,{spacing:p="space-x-4"}=e,{rounded:g="rounded-container-token"}=e,{shadow:m="shadow-lg"}=e,{zIndex:v="z-[888]"}=e,{buttonAction:E="btn variant-filled"}=e,{buttonDismiss:k="btn-icon btn-icon-sm variant-filled"}=e,{buttonDismissLabel:T="✕"}=e,{transitions:S=!l}=e,{transitionIn:R=$t}=e,{transitionInParams:M={duration:250}}=e,{transitionOut:O=$t}=e,{transitionOutParams:K={duration:250}}=e,G,z,x={x:0,y:0};switch(f){case"t":G="justify-center items-start",z="items-center",x={x:0,y:-100};break;case"b":G="justify-center items-end",z="items-center",x={x:0,y:100};break;case"l":G="justify-start items-center",z="items-start",x={x:-100,y:0};break;case"r":G="justify-end items-center",z="items-end",x={x:100,y:0};break;case"tl":G="justify-start items-start",z="items-start",x={x:-100,y:0};break;case"tr":G="justify-end items-start",z="items-end",x={x:100,y:0};break;case"bl":G="justify-start items-end",z="items-start",x={x:-100,y:0};break;case"br":G="justify-end items-end",z="items-end",x={x:100,y:0};break}function te(B){var se,Ee;(Ee=(se=a[B])==null?void 0:se.action)==null||Ee.response(),u.close(a[B].id)}function re(B){var se;(se=a[B])!=null&&se.hoverable&&(u.freeze(B),t(13,r+=" scale-[105%]"))}function he(B){var se;(se=a[B])!=null&&se.hoverable&&(u.unfreeze(B),t(13,r=r.replace(" scale-[105%]","")))}const be=B=>te(B),pe=B=>u.close(B.id),j=B=>re(B),W=B=>he(B);return n.$$set=B=>{t(35,e=ge(ge({},e),Ie(B))),"position"in B&&t(19,f=B.position),"max"in B&&t(20,c=B.max),"background"in B&&t(0,d=B.background),"width"in B&&t(21,h=B.width),"color"in B&&t(22,_=B.color),"padding"in B&&t(23,y=B.padding),"spacing"in B&&t(24,p=B.spacing),"rounded"in B&&t(25,g=B.rounded),"shadow"in B&&t(26,m=B.shadow),"zIndex"in B&&t(27,v=B.zIndex),"buttonAction"in B&&t(1,E=B.buttonAction),"buttonDismiss"in B&&t(2,k=B.buttonDismiss),"buttonDismissLabel"in B&&t(3,T=B.buttonDismissLabel),"transitions"in B&&t(4,S=B.transitions),"transitionIn"in B&&t(5,R=B.transitionIn),"transitionInParams"in B&&t(6,M=B.transitionInParams),"transitionOut"in B&&t(7,O=B.transitionOut),"transitionOutParams"in B&&t(8,K=B.transitionOutParams)},n.$$.update=()=>{t(14,i=`${Fu} ${G} ${v} ${e.class||""}`),n.$$.dirty[0]&545259520&&t(13,r=`${Bu} ${z} ${y}`),n.$$.dirty[0]&132120576&&t(12,s=`${Vu} ${h} ${_} ${y} ${p} ${g} ${m}`),n.$$.dirty[0]&1049088&&t(11,o=Array.from(a).slice(0,c))},e=Ie(e),[d,E,k,T,S,R,M,O,K,a,x,o,s,r,i,u,te,re,he,f,c,h,_,y,p,g,m,v,G,z,be,pe,j,W]}class zu extends fe{constructor(e){super(),de(this,e,ju,Uu,ce,{position:19,max:20,background:0,width:21,color:22,padding:23,spacing:24,rounded:25,shadow:26,zIndex:27,buttonAction:1,buttonDismiss:2,buttonDismissLabel:3,transitions:4,transitionIn:5,transitionInParams:6,transitionOut:7,transitionOutParams:8},null,[-1,-1])}}const en=Math.min,Pt=Math.max,Xn=Math.round,Fn=Math.floor,wt=n=>({x:n,y:n}),Wu={left:"right",right:"left",bottom:"top",top:"bottom"},qu={start:"end",end:"start"};function Hi(n,e,t){return Pt(n,en(e,t))}function vn(n,e){return typeof n=="function"?n(e):n}function Lt(n){return n.split("-")[0]}function yn(n){return n.split("-")[1]}function sa(n){return n==="x"?"y":"x"}function lr(n){return n==="y"?"height":"width"}function di(n){return["top","bottom"].includes(Lt(n))?"y":"x"}function cr(n){return sa(di(n))}function Ku(n,e,t){t===void 0&&(t=!1);const i=yn(n),r=cr(n),s=lr(r);let o=r==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=Qn(o)),[o,Qn(o)]}function Gu(n){const e=Qn(n);return[ji(n),e,ji(e)]}function ji(n){return n.replace(/start|end/g,e=>qu[e])}function xu(n,e,t){const i=["left","right"],r=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(n){case"top":case"bottom":return t?e?r:i:e?i:r;case"left":case"right":return e?s:o;default:return[]}}function Ju(n,e,t,i){const r=yn(n);let s=xu(Lt(n),t==="start",i);return r&&(s=s.map(o=>o+"-"+r),e&&(s=s.concat(s.map(ji)))),s}function Qn(n){return n.replace(/left|right|bottom|top/g,e=>Wu[e])}function Yu(n){return{top:0,right:0,bottom:0,left:0,...n}}function oa(n){return typeof n!="number"?Yu(n):{top:n,right:n,bottom:n,left:n}}function Zn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function Ns(n,e,t){let{reference:i,floating:r}=n;const s=di(e),o=cr(e),a=lr(o),l=Lt(e),u=s==="y",f=i.x+i.width/2-r.width/2,c=i.y+i.height/2-r.height/2,d=i[a]/2-r[a]/2;let h;switch(l){case"top":h={x:f,y:i.y-r.height};break;case"bottom":h={x:f,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:c};break;case"left":h={x:i.x-r.width,y:c};break;default:h={x:i.x,y:i.y}}switch(yn(e)){case"start":h[o]-=d*(t&&u?-1:1);break;case"end":h[o]+=d*(t&&u?-1:1);break}return h}const Xu=async(n,e,t)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=t,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let u=await o.getElementRects({reference:n,floating:e,strategy:r}),{x:f,y:c}=Ns(u,i,l),d=i,h={},_=0;for(let y=0;y<a.length;y++){const{name:p,fn:g}=a[y],{x:m,y:v,data:E,reset:k}=await g({x:f,y:c,initialPlacement:i,placement:d,strategy:r,middlewareData:h,rects:u,platform:o,elements:{reference:n,floating:e}});if(f=m??f,c=v??c,h={...h,[p]:{...h[p],...E}},k&&_<=50){_++,typeof k=="object"&&(k.placement&&(d=k.placement),k.rects&&(u=k.rects===!0?await o.getElementRects({reference:n,floating:e,strategy:r}):k.rects),{x:f,y:c}=Ns(u,d,l)),y=-1;continue}}return{x:f,y:c,placement:d,strategy:r,middlewareData:h}};async function aa(n,e){var t;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:a,strategy:l}=n,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:c="floating",altBoundary:d=!1,padding:h=0}=vn(e,n),_=oa(h),p=a[d?c==="floating"?"reference":"floating":c],g=Zn(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(p)))==null||t?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:u,rootBoundary:f,strategy:l})),m=c==="floating"?{...o.floating,x:i,y:r}:o.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),E=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},k=Zn(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:m,offsetParent:v,strategy:l}):m);return{top:(g.top-k.top+_.top)/E.y,bottom:(k.bottom-g.bottom+_.bottom)/E.y,left:(g.left-k.left+_.left)/E.x,right:(k.right-g.right+_.right)/E.x}}const Qu=n=>({name:"arrow",options:n,async fn(e){const{x:t,y:i,placement:r,rects:s,platform:o,elements:a}=e,{element:l,padding:u=0}=vn(n,e)||{};if(l==null)return{};const f=oa(u),c={x:t,y:i},d=cr(r),h=lr(d),_=await o.getDimensions(l),y=d==="y",p=y?"top":"left",g=y?"bottom":"right",m=y?"clientHeight":"clientWidth",v=s.reference[h]+s.reference[d]-c[d]-s.floating[h],E=c[d]-s.reference[d],k=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l));let T=k?k[m]:0;(!T||!await(o.isElement==null?void 0:o.isElement(k)))&&(T=a.floating[m]||s.floating[h]);const S=v/2-E/2,R=T/2-_[h]/2-1,M=en(f[p],R),O=en(f[g],R),K=M,G=T-_[h]-O,z=T/2-_[h]/2+S,x=Hi(K,z,G),re=yn(r)!=null&&z!=x&&s.reference[h]/2-(z<K?M:O)-_[h]/2<0?z<K?K-z:G-z:0;return{[d]:c[d]-re,data:{[d]:x,centerOffset:z-x+re}}}}),Zu=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var t;const{placement:i,middlewareData:r,rects:s,initialPlacement:o,platform:a,elements:l}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:c,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:_=!0,...y}=vn(n,e),p=Lt(i),g=Lt(o)===o,m=await(a.isRTL==null?void 0:a.isRTL(l.floating)),v=c||(g||!_?[Qn(o)]:Gu(o));!c&&h!=="none"&&v.push(...Ju(o,_,h,m));const E=[o,...v],k=await aa(e,y),T=[];let S=((t=r.flip)==null?void 0:t.overflows)||[];if(u&&T.push(k[p]),f){const K=Ku(i,s,m);T.push(k[K[0]],k[K[1]])}if(S=[...S,{placement:i,overflows:T}],!T.every(K=>K<=0)){var R,M;const K=(((R=r.flip)==null?void 0:R.index)||0)+1,G=E[K];if(G)return{data:{index:K,overflows:S},reset:{placement:G}};let z=(M=S.filter(x=>x.overflows[0]<=0).sort((x,te)=>x.overflows[1]-te.overflows[1])[0])==null?void 0:M.placement;if(!z)switch(d){case"bestFit":{var O;const x=(O=S.map(te=>[te.placement,te.overflows.filter(re=>re>0).reduce((re,he)=>re+he,0)]).sort((te,re)=>te[1]-re[1])[0])==null?void 0:O[0];x&&(z=x);break}case"initialPlacement":z=o;break}if(i!==z)return{reset:{placement:z}}}return{}}}};async function $u(n,e){const{placement:t,platform:i,elements:r}=n,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),o=Lt(t),a=yn(t),l=di(t)==="y",u=["left","top"].includes(o)?-1:1,f=s&&l?-1:1,c=vn(e,n);let{mainAxis:d,crossAxis:h,alignmentAxis:_}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return a&&typeof _=="number"&&(h=a==="end"?_*-1:_),l?{x:h*f,y:d*u}:{x:d*u,y:h*f}}const ef=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){const{x:t,y:i}=e,r=await $u(e,n);return{x:t+r.x,y:i+r.y,data:r}}}},tf=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:t,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:p=>{let{x:g,y:m}=p;return{x:g,y:m}}},...l}=vn(n,e),u={x:t,y:i},f=await aa(e,l),c=di(Lt(r)),d=sa(c);let h=u[d],_=u[c];if(s){const p=d==="y"?"top":"left",g=d==="y"?"bottom":"right",m=h+f[p],v=h-f[g];h=Hi(m,h,v)}if(o){const p=c==="y"?"top":"left",g=c==="y"?"bottom":"right",m=_+f[p],v=_-f[g];_=Hi(m,_,v)}const y=a.fn({...e,[d]:h,[c]:_});return{...y,data:{x:y.x-t,y:y.y-i}}}}};function Et(n){return la(n)?(n.nodeName||"").toLowerCase():"#document"}function Ue(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function ot(n){var e;return(e=(la(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function la(n){return n instanceof Node||n instanceof Ue(n).Node}function it(n){return n instanceof Element||n instanceof Ue(n).Element}function Ye(n){return n instanceof HTMLElement||n instanceof Ue(n).HTMLElement}function Us(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Ue(n).ShadowRoot}function In(n){const{overflow:e,overflowX:t,overflowY:i,display:r}=Ve(n);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(r)}function nf(n){return["table","td","th"].includes(Et(n))}function ur(n){const e=fr(),t=Ve(n);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function rf(n){let e=tn(n);for(;Ye(e)&&!hi(e);){if(ur(e))return e;e=tn(e)}return null}function fr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function hi(n){return["html","body","#document"].includes(Et(n))}function Ve(n){return Ue(n).getComputedStyle(n)}function mi(n){return it(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function tn(n){if(Et(n)==="html")return n;const e=n.assignedSlot||n.parentNode||Us(n)&&n.host||ot(n);return Us(e)?e.host:e}function ca(n){const e=tn(n);return hi(e)?n.ownerDocument?n.ownerDocument.body:n.body:Ye(e)&&In(e)?e:ca(e)}function $n(n,e){var t;e===void 0&&(e=[]);const i=ca(n),r=i===((t=n.ownerDocument)==null?void 0:t.body),s=Ue(i);return r?e.concat(s,s.visualViewport||[],In(i)?i:[]):e.concat(i,$n(i))}function ua(n){const e=Ve(n);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Ye(n),s=r?n.offsetWidth:t,o=r?n.offsetHeight:i,a=Xn(t)!==s||Xn(i)!==o;return a&&(t=s,i=o),{width:t,height:i,$:a}}function dr(n){return it(n)?n:n.contextElement}function Gt(n){const e=dr(n);if(!Ye(e))return wt(1);const t=e.getBoundingClientRect(),{width:i,height:r,$:s}=ua(e);let o=(s?Xn(t.width):t.width)/i,a=(s?Xn(t.height):t.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const sf=wt(0);function fa(n){const e=Ue(n);return!fr()||!e.visualViewport?sf:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function of(n,e,t){return e===void 0&&(e=!1),!t||e&&t!==Ue(n)?!1:e}function Mt(n,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const r=n.getBoundingClientRect(),s=dr(n);let o=wt(1);e&&(i?it(i)&&(o=Gt(i)):o=Gt(n));const a=of(s,t,i)?fa(s):wt(0);let l=(r.left+a.x)/o.x,u=(r.top+a.y)/o.y,f=r.width/o.x,c=r.height/o.y;if(s){const d=Ue(s),h=i&&it(i)?Ue(i):i;let _=d.frameElement;for(;_&&i&&h!==d;){const y=Gt(_),p=_.getBoundingClientRect(),g=Ve(_),m=p.left+(_.clientLeft+parseFloat(g.paddingLeft))*y.x,v=p.top+(_.clientTop+parseFloat(g.paddingTop))*y.y;l*=y.x,u*=y.y,f*=y.x,c*=y.y,l+=m,u+=v,_=Ue(_).frameElement}}return Zn({width:f,height:c,x:l,y:u})}function af(n){let{rect:e,offsetParent:t,strategy:i}=n;const r=Ye(t),s=ot(t);if(t===s)return e;let o={scrollLeft:0,scrollTop:0},a=wt(1);const l=wt(0);if((r||!r&&i!=="fixed")&&((Et(t)!=="body"||In(s))&&(o=mi(t)),Ye(t))){const u=Mt(t);a=Gt(t),l.x=u.x+t.clientLeft,l.y=u.y+t.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-o.scrollLeft*a.x+l.x,y:e.y*a.y-o.scrollTop*a.y+l.y}}function lf(n){return Array.from(n.getClientRects())}function da(n){return Mt(ot(n)).left+mi(n).scrollLeft}function cf(n){const e=ot(n),t=mi(n),i=n.ownerDocument.body,r=Pt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=Pt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-t.scrollLeft+da(n);const a=-t.scrollTop;return Ve(i).direction==="rtl"&&(o+=Pt(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:a}}function uf(n,e){const t=Ue(n),i=ot(n),r=t.visualViewport;let s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;const u=fr();(!u||u&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a,y:l}}function ff(n,e){const t=Mt(n,!0,e==="fixed"),i=t.top+n.clientTop,r=t.left+n.clientLeft,s=Ye(n)?Gt(n):wt(1),o=n.clientWidth*s.x,a=n.clientHeight*s.y,l=r*s.x,u=i*s.y;return{width:o,height:a,x:l,y:u}}function Fs(n,e,t){let i;if(e==="viewport")i=uf(n,t);else if(e==="document")i=cf(ot(n));else if(it(e))i=ff(e,t);else{const r=fa(n);i={...e,x:e.x-r.x,y:e.y-r.y}}return Zn(i)}function ha(n,e){const t=tn(n);return t===e||!it(t)||hi(t)?!1:Ve(t).position==="fixed"||ha(t,e)}function df(n,e){const t=e.get(n);if(t)return t;let i=$n(n).filter(a=>it(a)&&Et(a)!=="body"),r=null;const s=Ve(n).position==="fixed";let o=s?tn(n):n;for(;it(o)&&!hi(o);){const a=Ve(o),l=ur(o);!l&&a.position==="fixed"&&(r=null),(s?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||In(o)&&!l&&ha(n,o))?i=i.filter(f=>f!==o):r=a,o=tn(o)}return e.set(n,i),i}function hf(n){let{element:e,boundary:t,rootBoundary:i,strategy:r}=n;const o=[...t==="clippingAncestors"?df(e,this._c):[].concat(t),i],a=o[0],l=o.reduce((u,f)=>{const c=Fs(e,f,r);return u.top=Pt(c.top,u.top),u.right=en(c.right,u.right),u.bottom=en(c.bottom,u.bottom),u.left=Pt(c.left,u.left),u},Fs(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function mf(n){return ua(n)}function gf(n,e,t){const i=Ye(e),r=ot(e),s=t==="fixed",o=Mt(n,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=wt(0);if(i||!i&&!s)if((Et(e)!=="body"||In(r))&&(a=mi(e)),i){const u=Mt(e,!0,s,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else r&&(l.x=da(r));return{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function Bs(n,e){return!Ye(n)||Ve(n).position==="fixed"?null:e?e(n):n.offsetParent}function ma(n,e){const t=Ue(n);if(!Ye(n))return t;let i=Bs(n,e);for(;i&&nf(i)&&Ve(i).position==="static";)i=Bs(i,e);return i&&(Et(i)==="html"||Et(i)==="body"&&Ve(i).position==="static"&&!ur(i))?t:i||rf(n)||t}const pf=async function(n){let{reference:e,floating:t,strategy:i}=n;const r=this.getOffsetParent||ma,s=this.getDimensions;return{reference:gf(e,await r(t),i),floating:{x:0,y:0,...await s(t)}}};function _f(n){return Ve(n).direction==="rtl"}const bf={convertOffsetParentRelativeRectToViewportRelativeRect:af,getDocumentElement:ot,getClippingRect:hf,getOffsetParent:ma,getElementRects:pf,getClientRects:lf,getDimensions:mf,getScale:Gt,isElement:it,isRTL:_f};function vf(n,e){let t=null,i;const r=ot(n);function s(){clearTimeout(i),t&&t.disconnect(),t=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const{left:u,top:f,width:c,height:d}=n.getBoundingClientRect();if(a||e(),!c||!d)return;const h=Fn(f),_=Fn(r.clientWidth-(u+c)),y=Fn(r.clientHeight-(f+d)),p=Fn(u),m={rootMargin:-h+"px "+-_+"px "+-y+"px "+-p+"px",threshold:Pt(0,en(1,l))||1};let v=!0;function E(k){const T=k[0].intersectionRatio;if(T!==l){if(!v)return o();T?o(!1,T):i=setTimeout(()=>{o(!1,1e-7)},100)}v=!1}try{t=new IntersectionObserver(E,{...m,root:r.ownerDocument})}catch{t=new IntersectionObserver(E,m)}t.observe(n)}return o(!0),s}function yf(n,e,t,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,u=dr(n),f=r||s?[...u?$n(u):[],...$n(e)]:[];f.forEach(g=>{r&&g.addEventListener("scroll",t,{passive:!0}),s&&g.addEventListener("resize",t)});const c=u&&a?vf(u,t):null;let d=-1,h=null;o&&(h=new ResizeObserver(g=>{let[m]=g;m&&m.target===u&&h&&(h.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{h&&h.observe(e)})),t()}),u&&!l&&h.observe(u),h.observe(e));let _,y=l?Mt(n):null;l&&p();function p(){const g=Mt(n);y&&(g.x!==y.x||g.y!==y.y||g.width!==y.width||g.height!==y.height)&&t(),y=g,_=requestAnimationFrame(p)}return t(),()=>{f.forEach(g=>{r&&g.removeEventListener("scroll",t),s&&g.removeEventListener("resize",t)}),c&&c(),h&&h.disconnect(),h=null,l&&cancelAnimationFrame(_)}}const If=(n,e,t)=>{const i=new Map,r={platform:bf,...t},s={...r.platform,_c:i};return Xu(n,e,{...r,platform:s})},wf=""+new URL("../assets/vpsLogo.a05dfbbc.png",import.meta.url).href;/**
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
 */const ga=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ef=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,l=r+2<n.length,u=l?n[r+2]:0,f=s>>2,c=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,h=u&63;l||(h=64,o||(d=64)),i.push(t[f],t[c],t[d],t[h])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ga(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ef(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const c=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||u==null||c==null)throw new kf;const d=s<<2|a>>4;if(i.push(d),u!==64){const h=a<<4&240|u>>2;if(i.push(h),c!==64){const _=u<<6&192|c;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tf=function(n){const e=ga(n);return pa.encodeByteArray(e,!0)},_a=function(n){return Tf(n).replace(/\./g,"")},ba=function(n){try{return pa.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Af=()=>Sf().__FIREBASE_DEFAULTS__,Cf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ba(n[1]);return e&&JSON.parse(e)},hr=()=>{try{return Af()||Cf()||Rf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Df=n=>{var e,t;return(t=(e=hr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},va=()=>{var n;return(n=hr())===null||n===void 0?void 0:n.config},ya=n=>{var e;return(e=hr())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Pf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Of(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Ia(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Lf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mf(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function wa(){try{return typeof indexedDB=="object"}catch{return!1}}function Ea(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function Nf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Uf="FirebaseError";class Ze extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Uf,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jt.prototype.create)}}class jt{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Ff(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ze(r,a,i)}}function Ff(n,e){return n.replace(Bf,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Bf=/\{\$([^}]+)}/g;function Vf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function gn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Vs(s)&&Vs(o)){if(!gn(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Vs(n){return n!==null&&typeof n=="object"}/**
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
 */function wn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Hf(n,e){const t=new jf(n,e);return t.subscribe.bind(t)}class jf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");zf(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Si),r.error===void 0&&(r.error=Si),r.complete===void 0&&(r.complete=Si);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Si(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=1e3,qf=2,Kf=4*60*60*1e3,Gf=.5;function Hs(n,e=Wf,t=qf){const i=e*Math.pow(t,n),r=Math.round(Gf*i*(Math.random()-.5)*2);return Math.min(Kf,i+r)}/**
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
 */const Ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Pf;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yf(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Jf(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jf(n){return n===Ct?void 0:n}function Yf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(le||(le={}));const Qf={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Zf=le.INFO,$f={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},ed=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=$f[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mr{constructor(e){this.name=e,this._logLevel=Zf,this._logHandler=ed,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const td=(n,e)=>e.some(t=>n instanceof t);let js,zs;function nd(){return js||(js=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function id(){return zs||(zs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ka=new WeakMap,zi=new WeakMap,Ta=new WeakMap,Ai=new WeakMap,gr=new WeakMap;function rd(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(bt(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ka.set(t,n)}).catch(()=>{}),gr.set(e,n),e}function sd(n){if(zi.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});zi.set(n,e)}let Wi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ta.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function od(n){Wi=n(Wi)}function ad(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ci(this),e,...t);return Ta.set(i,e.sort?e.sort():[e]),bt(i)}:id().includes(n)?function(...e){return n.apply(Ci(this),e),bt(ka.get(this))}:function(...e){return bt(n.apply(Ci(this),e))}}function ld(n){return typeof n=="function"?ad(n):(n instanceof IDBTransaction&&sd(n),td(n,nd())?new Proxy(n,Wi):n)}function bt(n){if(n instanceof IDBRequest)return rd(n);if(Ai.has(n))return Ai.get(n);const e=ld(n);return e!==n&&(Ai.set(n,e),gr.set(e,n)),e}const Ci=n=>gr.get(n);function cd(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=bt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(bt(o.result),l.oldVersion,l.newVersion,bt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ud=["get","getKey","getAll","getAllKeys","count"],fd=["put","add","delete","clear"],Ri=new Map;function Ws(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ri.get(e))return Ri.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=fd.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||ud.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&l.done]))[0]};return Ri.set(e,s),s}od(n=>({...n,get:(e,t,i)=>Ws(e,t)||n.get(e,t,i),has:(e,t)=>!!Ws(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function hd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qi="@firebase/app",qs="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new mr("@firebase/app"),md="@firebase/app-compat",gd="@firebase/analytics-compat",pd="@firebase/analytics",_d="@firebase/app-check-compat",bd="@firebase/app-check",vd="@firebase/auth",yd="@firebase/auth-compat",Id="@firebase/database",wd="@firebase/database-compat",Ed="@firebase/functions",kd="@firebase/functions-compat",Td="@firebase/installations",Sd="@firebase/installations-compat",Ad="@firebase/messaging",Cd="@firebase/messaging-compat",Rd="@firebase/performance",Dd="@firebase/performance-compat",Pd="@firebase/remote-config",Od="@firebase/remote-config-compat",Ld="@firebase/storage",Md="@firebase/storage-compat",Nd="@firebase/firestore",Ud="@firebase/firestore-compat",Fd="firebase",Bd="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="[DEFAULT]",Vd={[qi]:"fire-core",[md]:"fire-core-compat",[pd]:"fire-analytics",[gd]:"fire-analytics-compat",[bd]:"fire-app-check",[_d]:"fire-app-check-compat",[vd]:"fire-auth",[yd]:"fire-auth-compat",[Id]:"fire-rtdb",[wd]:"fire-rtdb-compat",[Ed]:"fire-fn",[kd]:"fire-fn-compat",[Td]:"fire-iid",[Sd]:"fire-iid-compat",[Ad]:"fire-fcm",[Cd]:"fire-fcm-compat",[Rd]:"fire-perf",[Dd]:"fire-perf-compat",[Pd]:"fire-rc",[Od]:"fire-rc-compat",[Ld]:"fire-gcs",[Md]:"fire-gcs-compat",[Nd]:"fire-fst",[Ud]:"fire-fst-compat","fire-js":"fire-js",[Fd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new Map,Gi=new Map;function Hd(n,e){try{n.container.addComponent(e)}catch(t){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rt(n){const e=n.name;if(Gi.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;Gi.set(e,n);for(const t of ei.values())Hd(t,n);return!0}function on(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vt=new jt("app","Firebase",jd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=Bd;function Sa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ki,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw vt.create("bad-app-name",{appName:String(r)});if(t||(t=va()),!t)throw vt.create("no-options");const s=ei.get(r);if(s){if(gn(t,s.options)&&gn(i,s.config))return s;throw vt.create("duplicate-app",{appName:r})}const o=new Xf(r);for(const l of Gi.values())o.addComponent(l);const a=new zd(t,i,o);return ei.set(r,a),a}function Aa(n=Ki){const e=ei.get(n);if(!e&&n===Ki&&va())return Sa();if(!e)throw vt.create("no-app",{appName:n});return e}function Ge(n,e,t){var i;let r=(i=Vd[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(a.join(" "));return}rt(new Xe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Wd="firebase-heartbeat-database",qd=1,pn="firebase-heartbeat-store";let Di=null;function Ca(){return Di||(Di=cd(Wd,qd,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(pn)}}}).catch(n=>{throw vt.create("idb-open",{originalErrorMessage:n.message})})),Di}async function Kd(n){try{return await(await Ca()).transaction(pn).objectStore(pn).get(Ra(n))}catch(e){if(e instanceof Ze)Nt.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(t.message)}}}async function Ks(n,e){try{const i=(await Ca()).transaction(pn,"readwrite");await i.objectStore(pn).put(e,Ra(n)),await i.done}catch(t){if(t instanceof Ze)Nt.warn(t.message);else{const i=vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Nt.warn(i.message)}}}function Ra(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gd=1024,xd=30*24*60*60*1e3;class Jd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xd(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gs();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=xd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gs(),{heartbeatsToSend:t,unsentEntries:i}=Yd(this._heartbeatsCache.heartbeats),r=_a(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Gs(){return new Date().toISOString().substring(0,10)}function Yd(n,e=Gd){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),xs(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),xs(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Xd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wa()?Ea().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Kd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ks(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ks(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xs(n){return _a(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(n){rt(new Xe("platform-logger",e=>new dd(e),"PRIVATE")),rt(new Xe("heartbeat",e=>new Jd(e),"PRIVATE")),Ge(qi,qs,n),Ge(qi,qs,"esm2017"),Ge("fire-js","")}Qd("");var Zd="firebase",$d="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(Zd,$d,"app");const eh=(n,e)=>e.some(t=>n instanceof t);let Js,Ys;function th(){return Js||(Js=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nh(){return Ys||(Ys=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Da=new WeakMap,xi=new WeakMap,Pa=new WeakMap,Pi=new WeakMap,pr=new WeakMap;function ih(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(yt(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Da.set(t,n)}).catch(()=>{}),pr.set(e,n),e}function rh(n){if(xi.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});xi.set(n,e)}let Ji={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Pa.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sh(n){Ji=n(Ji)}function oh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Oi(this),e,...t);return Pa.set(i,e.sort?e.sort():[e]),yt(i)}:nh().includes(n)?function(...e){return n.apply(Oi(this),e),yt(Da.get(this))}:function(...e){return yt(n.apply(Oi(this),e))}}function ah(n){return typeof n=="function"?oh(n):(n instanceof IDBTransaction&&rh(n),eh(n,th())?new Proxy(n,Ji):n)}function yt(n){if(n instanceof IDBRequest)return ih(n);if(Pi.has(n))return Pi.get(n);const e=ah(n);return e!==n&&(Pi.set(n,e),pr.set(e,n)),e}const Oi=n=>pr.get(n);function lh(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=yt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(yt(o.result),l.oldVersion,l.newVersion,yt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const ch=["get","getKey","getAll","getAllKeys","count"],uh=["put","add","delete","clear"],Li=new Map;function Xs(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Li.get(e))return Li.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=uh.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||ch.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&l.done]))[0]};return Li.set(e,s),s}sh(n=>({...n,get:(e,t,i)=>Xs(e,t)||n.get(e,t,i),has:(e,t)=>!!Xs(e,t)||n.has(e,t)}));const Oa="@firebase/installations",_r="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=1e4,Ma=`w:${_r}`,Na="FIS_v2",fh="https://firebaseinstallations.googleapis.com/v1",dh=60*60*1e3,hh="installations",mh="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ut=new jt(hh,mh,gh);function Ua(n){return n instanceof Ze&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa({projectId:n}){return`${fh}/projects/${n}/installations`}function Ba(n){return{token:n.token,requestStatus:2,expiresIn:_h(n.expiresIn),creationTime:Date.now()}}async function Va(n,e){const i=(await e.json()).error;return Ut.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ha({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ph(n,{refreshToken:e}){const t=Ha(n);return t.append("Authorization",bh(e)),t}async function ja(n){const e=await n();return e.status>=500&&e.status<600?n():e}function _h(n){return Number(n.replace("s","000"))}function bh(n){return`${Na} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Fa(n),r=Ha(n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:t,authVersion:Na,appId:n.appId,sdkVersion:Ma},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await ja(()=>fetch(i,a));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Ba(u.authToken)}}else throw await Va("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=/^[cdef][\w-]{21}$/,Yi="";function wh(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Eh(n);return Ih.test(t)?t:Yi}catch{return Yi}}function Eh(n){return yh(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Wa=new Map;function qa(n,e){const t=gi(n);Ka(t,e),kh(t,e)}function Ka(n,e){const t=Wa.get(n);if(t)for(const i of t)i(e)}function kh(n,e){const t=Th();t&&t.postMessage({key:n,fid:e}),Sh()}let Rt=null;function Th(){return!Rt&&"BroadcastChannel"in self&&(Rt=new BroadcastChannel("[Firebase] FID Change"),Rt.onmessage=n=>{Ka(n.data.key,n.data.fid)}),Rt}function Sh(){Wa.size===0&&Rt&&(Rt.close(),Rt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="firebase-installations-database",Ch=1,Ft="firebase-installations-store";let Mi=null;function br(){return Mi||(Mi=lh(Ah,Ch,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ft)}}})),Mi}async function ti(n,e){const t=gi(n),r=(await br()).transaction(Ft,"readwrite"),s=r.objectStore(Ft),o=await s.get(t);return await s.put(e,t),await r.done,(!o||o.fid!==e.fid)&&qa(n,e.fid),e}async function Ga(n){const e=gi(n),i=(await br()).transaction(Ft,"readwrite");await i.objectStore(Ft).delete(e),await i.done}async function pi(n,e){const t=gi(n),r=(await br()).transaction(Ft,"readwrite"),s=r.objectStore(Ft),o=await s.get(t),a=e(o);return a===void 0?await s.delete(t):await s.put(a,t),await r.done,a&&(!o||o.fid!==a.fid)&&qa(n,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(n){let e;const t=await pi(n.appConfig,i=>{const r=Rh(i),s=Dh(n,r);return e=s.registrationPromise,s.installationEntry});return t.fid===Yi?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Rh(n){const e=n||{fid:wh(),registrationStatus:0};return xa(e)}function Dh(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Ut.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Ph(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Oh(n)}:{installationEntry:e}}async function Ph(n,e){try{const t=await vh(n,e);return ti(n.appConfig,t)}catch(t){throw Ua(t)&&t.customData.serverCode===409?await Ga(n.appConfig):await ti(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Oh(n){let e=await Qs(n.appConfig);for(;e.registrationStatus===1;)await za(100),e=await Qs(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await vr(n);return i||t}return e}function Qs(n){return pi(n,e=>{if(!e)throw Ut.create("installation-not-found");return xa(e)})}function xa(n){return Lh(n)?{fid:n.fid,registrationStatus:0}:n}function Lh(n){return n.registrationStatus===1&&n.registrationTime+La<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh({appConfig:n,heartbeatServiceProvider:e},t){const i=Nh(n,t),r=ph(n,t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:Ma,appId:n.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await ja(()=>fetch(i,a));if(l.ok){const u=await l.json();return Ba(u)}else throw await Va("Generate Auth Token",l)}function Nh(n,{fid:e}){return`${Fa(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(n,e=!1){let t;const i=await pi(n.appConfig,s=>{if(!Ja(s))throw Ut.create("not-registered");const o=s.authToken;if(!e&&Bh(o))return s;if(o.requestStatus===1)return t=Uh(n,e),s;{if(!navigator.onLine)throw Ut.create("app-offline");const a=Hh(s);return t=Fh(n,a),a}});return t?await t:i.authToken}async function Uh(n,e){let t=await Zs(n.appConfig);for(;t.authToken.requestStatus===1;)await za(100),t=await Zs(n.appConfig);const i=t.authToken;return i.requestStatus===0?yr(n,e):i}function Zs(n){return pi(n,e=>{if(!Ja(e))throw Ut.create("not-registered");const t=e.authToken;return jh(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Fh(n,e){try{const t=await Mh(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await ti(n.appConfig,i),t}catch(t){if(Ua(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ga(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ti(n.appConfig,i)}throw t}}function Ja(n){return n!==void 0&&n.registrationStatus===2}function Bh(n){return n.requestStatus===2&&!Vh(n)}function Vh(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+dh}function Hh(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function jh(n){return n.requestStatus===1&&n.requestTime+La<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zh(n){const e=n,{installationEntry:t,registrationPromise:i}=await vr(e);return i?i.catch(console.error):yr(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(n,e=!1){const t=n;return await qh(t),(await yr(t,e)).token}async function qh(n){const{registrationPromise:e}=await vr(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(n){if(!n||!n.options)throw Ni("App Configuration");if(!n.name)throw Ni("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ni(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ni(n){return Ut.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="installations",Gh="installations-internal",xh=n=>{const e=n.getProvider("app").getImmediate(),t=Kh(e),i=on(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Jh=n=>{const e=n.getProvider("app").getImmediate(),t=on(e,Ya).getImmediate();return{getId:()=>zh(t),getToken:r=>Wh(t,r)}};function Yh(){rt(new Xe(Ya,xh,"PUBLIC")),rt(new Xe(Gh,Jh,"PRIVATE"))}Yh();Ge(Oa,_r);Ge(Oa,_r,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="analytics",Xh="firebase_id",Qh="origin",Zh=60*1e3,$h="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ir="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De=new mr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Fe=new jt("analytics","Analytics",em);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(n){if(!n.startsWith(Ir)){const e=Fe.create("invalid-gtag-resource",{gtagURL:n});return De.warn(e.message),""}return n}function Xa(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function nm(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function im(n,e){const t=nm("firebase-js-sdk-policy",{createScriptURL:tm}),i=document.createElement("script"),r=`${Ir}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function rm(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function sm(n,e,t,i,r,s){const o=i[r];try{if(o)await e[o];else{const l=(await Xa(t)).find(u=>u.measurementId===r);l&&await e[l.appId]}}catch(a){De.error(a)}n("config",r,s)}async function om(n,e,t,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Xa(t);for(const l of o){const u=a.find(c=>c.measurementId===l),f=u&&e[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",i,r||{})}catch(s){De.error(s)}}function am(n,e,t,i){async function r(s,...o){try{if(s==="event"){const[a,l]=o;await om(n,e,t,a,l)}else if(s==="config"){const[a,l]=o;await sm(n,e,t,i,a,l)}else if(s==="consent"){const[a]=o;n("consent","update",a)}else if(s==="get"){const[a,l,u]=o;n("get",a,l,u)}else if(s==="set"){const[a]=o;n("set",a)}else n(s,...o)}catch(a){De.error(a)}}return r}function lm(n,e,t,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=am(s,n,e,t),{gtagCore:s,wrappedGtag:window[r]}}function cm(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ir)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=30,fm=1e3;class dm{constructor(e={},t=fm){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Qa=new dm;function hm(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function mm(n){var e;const{appId:t,apiKey:i}=n,r={method:"GET",headers:hm(i)},s=$h.replace("{app-id}",t),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Fe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function gm(n,e=Qa,t){const{appId:i,apiKey:r,measurementId:s}=n.options;if(!i)throw Fe.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Fe.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new bm;return setTimeout(async()=>{a.abort()},t!==void 0?t:Zh),Za({appId:i,apiKey:r,measurementId:s},o,a,e)}async function Za(n,{throttleEndTimeMillis:e,backoffCount:t},i,r=Qa){var s;const{appId:o,measurementId:a}=n;try{await pm(i,e)}catch(l){if(a)return De.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await mm(n);return r.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!_m(u)){if(r.deleteThrottleMetadata(o),a)return De.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const f=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Hs(t,r.intervalMillis,um):Hs(t,r.intervalMillis),c={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return r.setThrottleMetadata(o,c),De.debug(`Calling attemptFetch again in ${f} millis`),Za(n,c,i,r)}}function pm(n,e){return new Promise((t,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(s),i(Fe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _m(n){if(!(n instanceof Ze)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class bm{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function vm(n,e,t,i,r){if(r&&r.global){n("event",t,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ym(){if(wa())try{await Ea()}catch(n){return De.warn(Fe.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return De.warn(Fe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Im(n,e,t,i,r,s,o){var a;const l=gm(n);l.then(h=>{t[h.measurementId]=h.appId,n.options.measurementId&&h.measurementId!==n.options.measurementId&&De.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>De.error(h)),e.push(l);const u=ym().then(h=>{if(h)return i.getId()}),[f,c]=await Promise.all([l,u]);cm(s)||im(s,f.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Qh]="firebase",d.update=!0,c!=null&&(d[Xh]=c),r("config",f.measurementId,d),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.app=e}_delete(){return delete fn[this.app.options.appId],Promise.resolve()}}let fn={},$s=[];const eo={};let Ui="dataLayer",Em="gtag",to,$a,no=!1;function km(){const n=[];if(Ia()&&n.push("This is a browser extension environment."),Nf()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,r)=>`(${r+1}) ${i}`).join(" "),t=Fe.create("invalid-analytics-context",{errorInfo:e});De.warn(t.message)}}function Tm(n,e,t){km();const i=n.options.appId;if(!i)throw Fe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)De.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Fe.create("no-api-key");if(fn[i]!=null)throw Fe.create("already-exists",{id:i});if(!no){rm(Ui);const{wrappedGtag:s,gtagCore:o}=lm(fn,$s,eo,Ui,Em);$a=s,to=o,no=!0}return fn[i]=Im(n,$s,eo,e,to,Ui,t),new wm(n)}function Sm(n=Aa()){n=at(n);const e=on(n,ni);return e.isInitialized()?e.getImmediate():Am(n)}function Am(n,e={}){const t=on(n,ni);if(t.isInitialized()){const r=t.getImmediate();if(gn(e,t.getOptions()))return r;throw Fe.create("already-initialized")}return t.initialize({options:e})}function Cm(n,e,t,i){n=at(n),vm($a,fn[n.app.options.appId],e,t,i).catch(r=>De.error(r))}const io="@firebase/analytics",ro="0.10.0";function Rm(){rt(new Xe(ni,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Tm(i,r,t)},"PUBLIC")),rt(new Xe("analytics-internal",n,"PRIVATE")),Ge(io,ro),Ge(io,ro,"esm2017");function n(e){try{const t=e.getProvider(ni).getImmediate();return{logEvent:(i,r,s)=>Cm(t,i,r,s)}}catch(t){throw Fe.create("interop-component-reg-failed",{reason:t})}}}Rm();function wr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function el(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dm=el,tl=new jt("auth","Firebase",el());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new mr("@firebase/auth");function Pm(n,...e){ii.logLevel<=le.WARN&&ii.warn(`Auth (${En}): ${n}`,...e)}function zn(n,...e){ii.logLevel<=le.ERROR&&ii.error(`Auth (${En}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n,...e){throw Er(n,...e)}function xe(n,...e){return Er(n,...e)}function nl(n,e,t){const i=Object.assign(Object.assign({},Dm()),{[e]:t});return new jt("auth","Firebase",i).create(e,{appName:n.name})}function Om(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Qe(n,"argument-error"),nl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Er(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return tl.create(n,...e)}function J(n,e,...t){if(!n)throw Er(e,...t)}function et(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zn(e),new Error(e)}function st(n,e){n||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Lm(){return so()==="http:"||so()==="https:"}function so(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lm()||Ia()||"connection"in navigator)?navigator.onLine:!0}function Nm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){this.shortDelay=e,this.longDelay=t,st(t>e,"Short delay should be less than long delay!"),this.isMobile=Of()||Lf()}get(){return Mm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(n,e){st(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=new kn(3e4,6e4);function rl(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Tn(n,e,t,i,r={}){return sl(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=wn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),il.fetch()(ol(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sl(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Um),e);try{const r=new Vm(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Bn(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Bn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Bn(n,"user-disabled",o);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw nl(n,f,u);Qe(n,f)}}catch(r){if(r instanceof Ze)throw r;Qe(n,"network-request-failed",{message:String(r)})}}async function Bm(n,e,t,i,r={}){const s=await Tn(n,e,t,i,r);return"mfaPendingCredential"in s&&Qe(n,"multi-factor-auth-required",{_serverResponse:s}),s}function ol(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?kr(n.config,r):`${n.config.apiScheme}://${r}`}class Vm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(xe(this.auth,"network-request-failed")),Fm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=xe(n,e,i);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(n,e){return Tn(n,"POST","/v1/accounts:delete",e)}async function jm(n,e){return Tn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zm(n,e=!1){const t=at(n),i=await t.getIdToken(e),r=Tr(i);J(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:dn(Fi(r.auth_time)),issuedAtTime:dn(Fi(r.iat)),expirationTime:dn(Fi(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fi(n){return Number(n)*1e3}function Tr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return zn("JWT malformed, contained fewer than 3 sections"),null;try{const r=ba(t);return r?JSON.parse(r):(zn("Failed to decode base64 JWT payload"),null)}catch(r){return zn("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Wm(n){const e=Tr(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ze&&qm(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function qm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=dn(this.lastLoginAt),this.creationTime=dn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(n){var e;const t=n.auth,i=await n.getIdToken(),r=await _n(n,jm(t,{idToken:i}));J(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Jm(s.providerUserInfo):[],a=xm(n.providerData,o),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new al(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,c)}async function Gm(n){const e=at(n);await ri(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xm(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Jm(n){return n.map(e=>{var{providerId:t}=e,i=wr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(n,e){const t=await sl(n,{},async()=>{const i=wn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=ol(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",il.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await Ym(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new bn;return i&&(J(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(J(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ot{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=wr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Km(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new al(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await _n(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return zm(this,e)}reload(){return Gm(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ri(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _n(this,Hm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,l,u,f;const c=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(r=t.email)!==null&&r!==void 0?r:void 0,h=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,p=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=t.createdAt)!==null&&u!==void 0?u:void 0,m=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:v,emailVerified:E,isAnonymous:k,providerData:T,stsTokenManager:S}=t;J(v&&S,e,"internal-error");const R=bn.fromJSON(this.name,S);J(typeof v=="string",e,"internal-error"),ft(c,e.name),ft(d,e.name),J(typeof E=="boolean",e,"internal-error"),J(typeof k=="boolean",e,"internal-error"),ft(h,e.name),ft(_,e.name),ft(y,e.name),ft(p,e.name),ft(g,e.name),ft(m,e.name);const M=new Ot({uid:v,auth:e,email:d,emailVerified:E,displayName:c,isAnonymous:k,photoURL:_,phoneNumber:h,tenantId:y,stsTokenManager:R,createdAt:g,lastLoginAt:m});return T&&Array.isArray(T)&&(M.providerData=T.map(O=>Object.assign({},O))),p&&(M._redirectEventId=p),M}static async _fromIdTokenResponse(e,t,i=!1){const r=new bn;r.updateFromServerResponse(t);const s=new Ot({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await ri(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=new Map;function tt(n){st(n instanceof Function,"Expected a class definition");let e=oo.get(n);return e?(st(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,oo.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ll.type="NONE";const ao=ll;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n,e,t){return`firebase:${n}:${e}:${t}`}class xt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Wn(this.userKey,r.apiKey,s),this.fullPersistenceKey=Wn("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new xt(tt(ao),e,i);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||tt(ao);const o=Wn(i,e.config.apiKey,e.name);let a=null;for(const u of t)try{const f=await u._get(o);if(f){const c=Ot._fromJSON(e,f);u!==s&&(a=c),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new xt(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new xt(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hl(e))return"Blackberry";if(ml(e))return"Webos";if(Sr(e))return"Safari";if((e.includes("chrome/")||ul(e))&&!e.includes("edge/"))return"Chrome";if(dl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function cl(n=Se()){return/firefox\//i.test(n)}function Sr(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ul(n=Se()){return/crios\//i.test(n)}function fl(n=Se()){return/iemobile/i.test(n)}function dl(n=Se()){return/android/i.test(n)}function hl(n=Se()){return/blackberry/i.test(n)}function ml(n=Se()){return/webos/i.test(n)}function _i(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Xm(n=Se()){var e;return _i(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qm(){return Mf()&&document.documentMode===10}function gl(n=Se()){return _i(n)||dl(n)||ml(n)||hl(n)||/windows phone/i.test(n)||fl(n)}function Zm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n,e=[]){let t;switch(n){case"Browser":t=lo(Se());break;case"Worker":t=`${lo(Se())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${En}/${i}`}async function _l(n,e){return Tn(n,"GET","/v2/recaptchaConfig",rl(n,e))}function co(n){return n!==void 0&&n.enterprise!==void 0}class bl{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function vl(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=xe("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",$m().appendChild(i)})}function eg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const tg="https://www.google.com/recaptcha/enterprise.js?render=",ng="recaptcha-enterprise",ig="NO_RECAPTCHA";class rg{constructor(e){this.type=ng,this.auth=Sn(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{_l(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new bl(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;co(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ig)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&co(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}vl(tg+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class sg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uo(this),this.idTokenSubscription=new uo(this),this.beforeStateQueue=new sg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tt(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await xt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ri(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?at(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}async initializeRecaptchaConfig(){const e=await _l(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new bl(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new rg(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jt("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tt(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await xt.create(this,[tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Pm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Sn(n){return at(n)}class uo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hf(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(n,e){const t=on(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(gn(s,e??{}))return r;Qe(r,"already-initialized")}return t.initialize({options:e})}function lg(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(tt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function cg(n,e,t){const i=Sn(n);J(i._canInitEmulator,i,"emulator-config-failed"),J(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),s=yl(e),{host:o,port:a}=ug(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||fg()}function yl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ug(n){const e=yl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:fo(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:fo(o)}}}function fo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function fg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,t){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(n,e){return Bm(n,"POST","/v1/accounts:signInWithIdp",rl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="http://localhost";class Bt extends Il{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Bt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=wr(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Bt(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Jt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Jt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jt(e,t)}buildRequest(){const e={requestUri:dg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Ar{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends An{constructor(){super("facebook.com")}static credential(e){return Bt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends An{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Bt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return mt.credential(t,i)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends An{constructor(){super("github.com")}static credential(e){return Bt._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch{return null}}}Ke.GITHUB_SIGN_IN_METHOD="github.com";Ke.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends An{constructor(){super("twitter.com")}static credential(e,t){return Bt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return gt.credential(t,i)}catch{return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com";gt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await Ot._fromIdTokenResponse(e,i,r),o=ho(i);return new nn({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=ho(i);return new nn({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function ho(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Ze{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,si.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new si(e,t,i,r)}}function wl(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?si._fromErrorAndOperation(n,s,e,i):s})}async function hg(n,e,t=!1){const i=await _n(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return nn._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const s=await _n(n,wl(i,r,e,n),t);J(s.idToken,i,"internal-error");const o=Tr(s.idToken);J(o,i,"internal-error");const{sub:a}=o;return J(n.uid===a,i,"user-mismatch"),nn._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qe(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(n,e,t=!1){const i="signIn",r=await wl(n,i,e),s=await nn._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function pg(n,e,t,i){return at(n).onIdTokenChanged(e,t,i)}function _g(n,e,t){return at(n).beforeAuthStateChanged(e,t)}function bg(n){return at(n).signOut()}const oi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(oi,"1"),this.storage.removeItem(oi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(){const n=Se();return Sr(n)||_i(n)}const yg=1e3,Ig=10;class kl extends El{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vg()&&Zm(),this.fallbackToPolling=gl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Qm()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ig):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},yg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kl.type="LOCAL";const wg=kl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends El{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Tl.type="SESSION";const Sl=Tl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new bi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,s)),l=await Eg(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Cr("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(c){const d=c;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function Tg(n){Je().location.href=n}/**
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
 */function Al(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function Sg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ag(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Cg(){return Al()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="firebaseLocalStorageDb",Rg=1,ai="firebaseLocalStorage",Rl="fbase_key";class Cn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vi(n,e){return n.transaction([ai],e?"readwrite":"readonly").objectStore(ai)}function Dg(){const n=indexedDB.deleteDatabase(Cl);return new Cn(n).toPromise()}function Qi(){const n=indexedDB.open(Cl,Rg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ai,{keyPath:Rl})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(ai)?e(i):(i.close(),await Dg(),e(await Qi()))})})}async function mo(n,e,t){const i=vi(n,!0).put({[Rl]:e,value:t});return new Cn(i).toPromise()}async function Pg(n,e){const t=vi(n,!1).get(e),i=await new Cn(t).toPromise();return i===void 0?null:i.value}function go(n,e){const t=vi(n,!0).delete(e);return new Cn(t).toPromise()}const Og=800,Lg=3;class Dl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Lg)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Al()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bi._getInstance(Cg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Sg(),!this.activeServiceWorker)return;this.sender=new kg(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ag()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qi();return await mo(e,oi,"1"),await go(e,oi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>mo(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Pg(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>go(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=vi(r,!1).getAll();return new Cn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dl.type="LOCAL";const Mg=Dl;new kn(3e4,6e4);/**
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
 */function Pl(n,e){return e?tt(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Il{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ng(n){return gg(n.auth,new Rr(n),n.bypassAuthState)}function Ug(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),mg(t,new Rr(n),n.bypassAuthState)}async function Fg(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),hg(t,new Rr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ng;case"linkViaPopup":case"linkViaRedirect":return Fg;case"reauthViaPopup":case"reauthViaRedirect":return Ug;default:Qe(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new kn(2e3,1e4);async function Vg(n,e,t){const i=Sn(n);Om(n,e,Ar);const r=Pl(i,t);return new Dt(i,"signInViaPopup",e,r).executeNotNull()}class Dt extends Ol{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Dt.currentPopupAction&&Dt.currentPopupAction.cancel(),Dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const e=Cr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bg.get())};e()}}Dt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="pendingRedirect",qn=new Map;class jg extends Ol{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=qn.get(this.auth._key());if(!e){try{const i=await zg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}qn.set(this.auth._key(),e)}return this.bypassAuthState||qn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zg(n,e){const t=Kg(e),i=qg(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function Wg(n,e){qn.set(n._key(),e)}function qg(n){return tt(n._redirectPersistence)}function Kg(n){return Wn(Hg,n.config.apiKey,n.name)}async function Gg(n,e,t=!1){const i=Sn(n),r=Pl(i,e),o=await new jg(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=10*60*1e3;class Jg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ll(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(xe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xg&&this.cachedEventUids.clear(),this.cachedEventUids.has(po(e))}saveEventToCache(e){this.cachedEventUids.add(po(e)),this.lastProcessedEventTime=Date.now()}}function po(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ll({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ll(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(n,e={}){return Tn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zg=/^https?/;async function $g(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Xg(n);for(const t of e)try{if(ep(t))return}catch{}Qe(n,"unauthorized-domain")}function ep(n){const e=Xi(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Zg.test(t))return!1;if(Qg.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const tp=new kn(3e4,6e4);function _o(){const n=Je().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function np(n){return new Promise((e,t)=>{var i,r,s;function o(){_o(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_o(),t(xe(n,"network-request-failed"))},timeout:tp.get()})}if(!((r=(i=Je().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Je().gapi)===null||s===void 0)&&s.load)o();else{const a=eg("iframefcb");return Je()[a]=()=>{gapi.load?o():t(xe(n,"network-request-failed"))},vl(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Kn=null,e})}let Kn=null;function ip(n){return Kn=Kn||np(n),Kn}/**
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
 */const rp=new kn(5e3,15e3),sp="__/auth/iframe",op="emulator/auth/iframe",ap={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cp(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?kr(e,op):`https://${n.config.authDomain}/${sp}`,i={apiKey:e.apiKey,appName:n.name,v:En},r=lp.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${wn(i).slice(1)}`}async function up(n){const e=await ip(n),t=Je().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:cp(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ap,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=xe(n,"network-request-failed"),a=Je().setTimeout(()=>{s(o)},rp.get());function l(){Je().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const fp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dp=500,hp=600,mp="_blank",gp="http://localhost";class bo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pp(n,e,t,i=dp,r=hp){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},fp),{width:i.toString(),height:r.toString(),top:s,left:o}),u=Se().toLowerCase();t&&(a=ul(u)?mp:t),cl(u)&&(e=e||gp,l.scrollbars="yes");const f=Object.entries(l).reduce((d,[h,_])=>`${d}${h}=${_},`,"");if(Xm(u)&&a!=="_self")return _p(e||"",a),new bo(null);const c=window.open(e||"",a,f);J(c,n,"popup-blocked");try{c.focus()}catch{}return new bo(c)}function _p(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const bp="__/auth/handler",vp="emulator/auth/handler",yp=encodeURIComponent("fac");async function vo(n,e,t,i,r,s){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:En,eventId:r};if(e instanceof Ar){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Vf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,c]of Object.entries(s||{}))o[f]=c}if(e instanceof An){const f=e.getScopes().filter(c=>c!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await n._getAppCheckToken(),u=l?`#${yp}=${encodeURIComponent(l)}`:"";return`${Ip(n)}?${wn(a).slice(1)}${u}`}function Ip({config:n}){return n.emulator?kr(n,vp):`https://${n.authDomain}/${bp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="webStorageSupport";class wp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sl,this._completeRedirectFn=Gg,this._overrideRedirectResult=Wg}async _openPopup(e,t,i,r){var s;st((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await vo(e,t,i,Xi(),r);return pp(e,o,Cr())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await vo(e,t,i,Xi(),r);return Tg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(st(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await up(e),i=new Jg(e);return t.register("authEvent",r=>(J(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bi,{type:Bi},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Bi];o!==void 0&&t(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$g(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gl()||Sr()||_i()}}const Ep=wp;var yo="@firebase/auth",Io="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Sp(n){rt(new Xe("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pl(n)},u=new og(i,r,s,l);return lg(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),rt(new Xe("auth-internal",e=>{const t=Sn(e.getProvider("auth").getImmediate());return(i=>new kp(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(yo,Io,Tp(n)),Ge(yo,Io,"esm2017")}/**
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
 */const Ap=5*60,Cp=ya("authIdTokenMaxAge")||Ap;let wo=null;const Rp=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Cp)return;const r=t==null?void 0:t.token;wo!==r&&(wo=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Dp(n=Aa()){const e=on(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ag(n,{popupRedirectResolver:Ep,persistence:[Mg,wg,Sl]}),i=ya("authTokenSyncURL");if(i){const s=Rp(i);_g(t,s,()=>s(t.currentUser)),pg(t,o=>s(o))}const r=Df("auth");return r&&cg(t,`http://${r}`),t}Sp("Browser");const Pp={apiKey:"AIzaSyAjCRLDHuTkfnKU5TTV6ZZasUXecSvlQOE",authDomain:"virtual-pinball-spreadsh-71a64.firebaseapp.com",projectId:"virtual-pinball-spreadsh-71a64",appId:"1:497322440319:web:8a7f7a2997664a9af7f14a",measurementId:"G-DB48L7QGX0"},Ml=Sa(Pp);Sm(Ml);const Nl=Dp(Ml),Op="VirtualPinballSpreadsheet",Lp="vps-db",Dr=Ql("user",{});let Mp;const Np=()=>{const n=new Ke;n.addScope("public_repo"),n.setCustomParameters({allow_signup:"false"}),Vg(Nl,n).then(async e=>{const t=Ke.credentialFromResult(e),i=e.user;if(i.displayName=e._tokenResponse.screenName,!(t!=null&&t.accessToken))throw new Error;Ul(t.accessToken,i)}).catch(e=>{console.error(e)})},Ul=async(n,e)=>{try{const{Octokit:t}=await Qr(()=>import("https://esm.sh/octokit"),[],import.meta.url),{createOrUpdateTextFile:i}=await Qr(()=>import("https://esm.sh/@octokit/plugin-create-or-update-text-file"),[],import.meta.url),r=t.plugin(i),s=new r({auth:n}),a=(await s.request("GET /repos/{owner}/{repo}/collaborators/{username}/permission",{owner:Op,username:e.displayName,repo:Lp})).data.permission;if(!(a==="admin"||a==="write"||location.hostname==="localhost"||location.hostname==="127.0.0.1")){Kt().trigger({message:"You don't have permission to edit on VPS.",background:"variant-filled-error"});return}Mp=s,Dr.set({user:e,permission:a,token:n}),Kt().trigger({message:"Login successfull",background:"variant-filled-success"})}catch(t){console.log(t),Kt().trigger({message:"Login was unsuccessfull.",background:"variant-filled-error"})}},Up=()=>{bg(Nl).then(()=>{Dr.set({}),Kt().trigger({message:"Logout successfull",background:"variant-filled-success"})})},Rn={login:Ul,logout:Up,triggerLoginPopup:Np,userStore:Dr};function Eo(n,e,t){const i=n.slice();return i[7]=e[t],i}function ko(n){let e,t=n[7][1].name+"",i;return{c(){e=A("option"),i=$(t),this.h()},l(r){e=C(r,"OPTION",{});var s=D(e);i=ee(s,t),s.forEach(I),this.h()},h(){e.__value=n[7][0],nt(e,e.__value)},m(r,s){V(r,e,s),w(e,i)},p:me,d(r){r&&I(e)}}}function Fp(n){let e,t,i,r,s,o,a,l,u,f,c,d,h,_;r=new Zt({props:{icon:nc}});let y=we(n[5]),p=[];for(let g=0;g<y.length;g+=1)p[g]=ko(Eo(n,y,g));return c=new Zt({props:{icon:ic}}),{c(){e=A("div"),t=A("div"),i=A("div"),Y(r.$$.fragment),s=N(),o=A("input"),a=N(),l=A("select");for(let g=0;g<p.length;g+=1)p[g].c();u=N(),f=A("button"),Y(c.$$.fragment),this.h()},l(g){e=C(g,"DIV",{class:!0});var m=D(e);t=C(m,"DIV",{class:!0});var v=D(t);i=C(v,"DIV",{class:!0});var E=D(i);Z(r.$$.fragment,E),E.forEach(I),s=U(v),o=C(v,"INPUT",{type:!0,placeholder:!0}),a=U(v),l=C(v,"SELECT",{class:!0});var k=D(l);for(let S=0;S<p.length;S+=1)p[S].l(k);k.forEach(I),v.forEach(I),u=U(m),f=C(m,"BUTTON",{class:!0});var T=D(f);Z(c.$$.fragment,T),T.forEach(I),m.forEach(I),this.h()},h(){b(i,"class","input-group-shim"),b(o,"type","search"),b(o,"placeholder","Search..."),b(l,"class","select rounded-l-none"),n[1]===void 0&&It(()=>n[9].call(l)),b(t,"class","input-group input-group-divider grid-cols-[auto_1fr_auto]"),b(f,"class","btn hover:variant-soft-primary btn-icon"),pt(f,"variant-filled-primary",n[2]),b(e,"class","px-4 flex items-center gap-4")},m(g,m){V(g,e,m),w(e,t),w(t,i),X(r,i,null),w(t,s),w(t,o),nt(o,n[0]),w(t,a),w(t,l);for(let v=0;v<p.length;v+=1)p[v]&&p[v].m(l,null);Kr(l,n[1],!0),w(e,u),w(e,f),X(c,f,null),d=!0,h||(_=[q(o,"input",n[8]),q(l,"change",n[9]),q(f,"click",n[10])],h=!0)},p(g,m){if(m&1&&o.value!==g[0]&&nt(o,g[0]),m&32){y=we(g[5]);let v;for(v=0;v<y.length;v+=1){const E=Eo(g,y,v);p[v]?p[v].p(E,m):(p[v]=ko(E),p[v].c(),p[v].m(l,null))}for(;v<p.length;v+=1)p[v].d(1);p.length=y.length}m&34&&Kr(l,g[1]),(!d||m&4)&&pt(f,"variant-filled-primary",g[2])},i(g){d||(P(r.$$.fragment,g),P(c.$$.fragment,g),d=!0)},o(g){L(r.$$.fragment,g),L(c.$$.fragment,g),d=!1},d(g){g&&I(e),Q(r),sn(p,g),Q(c),h=!1,Be(_)}}}function Bp(n){let e,t=`<img src="${wf}" alt="VPS" width="36px"/>`;return{c(){e=A("a"),e.innerHTML=t,this.h()},l(i){e=C(i,"A",{href:!0,class:!0,"data-svelte-h":!0}),Re(e)!=="svelte-kw8dyq"&&(e.innerHTML=t),this.h()},h(){b(e,"href","/"),b(e,"class","ml-4 rounded-full logo transition-shadow svelte-tmztqq")},m(i,r){V(i,e,r)},p:me,d(i){i&&I(e)}}}function Vp(n){let e,t,i="Apps",r,s,o="Links",a,l,u,f,c,d,h,_,y,p;return f=new Zt({props:{icon:rc,class:"ml-2",size:"xs"}}),h=new Zt({props:{icon:sc}}),{c(){e=A("div"),t=A("a"),t.textContent=i,r=N(),s=A("a"),s.textContent=o,a=N(),l=A("button"),u=$("Settings "),Y(f.$$.fragment),c=N(),d=A("a"),Y(h.$$.fragment),this.h()},l(g){e=C(g,"DIV",{slot:!0,class:!0});var m=D(e);t=C(m,"A",{href:!0,class:!0,"data-svelte-h":!0}),Re(t)!=="svelte-tjfgp6"&&(t.textContent=i),r=U(m),s=C(m,"A",{href:!0,class:!0,"data-svelte-h":!0}),Re(s)!=="svelte-in8qks"&&(s.textContent=o),a=U(m),l=C(m,"BUTTON",{class:!0});var v=D(l);u=ee(v,"Settings "),Z(f.$$.fragment,v),v.forEach(I),c=U(m),d=C(m,"A",{href:!0,class:!0});var E=D(d);Z(h.$$.fragment,E),E.forEach(I),m.forEach(I),this.h()},h(){b(t,"href","apps/"),b(t,"class","btn btn-sm hover:variant-soft-primary"),b(s,"href","links/"),b(s,"class","btn btn-sm hover:variant-soft-primary"),b(l,"class","btn btn-sm hover:variant-soft-primary"),b(d,"href","help/"),b(d,"class","btn hover:variant-soft-primary btn-icon"),b(e,"slot","trail"),b(e,"class","mr-4 flex items-center gap-4")},m(g,m){V(g,e,m),w(e,t),w(e,r),w(e,s),w(e,a),w(e,l),w(l,u),X(f,l,null),w(e,c),w(e,d),X(h,d,null),_=!0,y||(p=rn(or.call(null,l,n[6])),y=!0)},p:me,i(g){_||(P(f.$$.fragment,g),P(h.$$.fragment,g),_=!0)},o(g){L(f.$$.fragment,g),L(h.$$.fragment,g),_=!1},d(g){g&&I(e),Q(f),Q(h),y=!1,p()}}}function Hp(n){let e,t;return e=new Uc({props:{$$slots:{trail:[Vp],lead:[Bp],default:[Fp]},$$scope:{ctx:n}}}),{c(){Y(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,r){X(e,i,r),t=!0},p(i,[r]){const s={};r&32775&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){t||(P(e.$$.fragment,i),t=!0)},o(i){L(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function jp(n,e,t){let i,r,s;const{query:o,mode:a,filterActive:l}=dt;Te(n,o,_=>t(0,i=_)),Te(n,a,_=>t(1,r=_)),Te(n,l,_=>t(2,s=_));const u=Object.entries(Jo),f={event:"focus-click",target:"popupSettings",placement:"bottom",closeQuery:".listbox-item"};function c(){i=this.value,o.set(i)}function d(){r=Vl(this),a.set(r),t(5,u)}return[i,r,s,o,l,u,f,a,c,d,()=>Go(l,s=!s,s)]}class zp extends fe{constructor(e){super(),de(this,e,jp,Hp,ce,{})}}const Fl=fc("goto");dt.finalResultsStore.subscribe(()=>{var o;const n=Wt(dt.query),e=Wt(dt.filterActive);if(!n&&!e)return;const t=Wt(sr),i=(o=t==null?void 0:t.url)==null?void 0:o.pathname;if(!i||!Wt(dt.isSearchActive)&&i==="/")return;const r=Wt(dt.mode),s=Jo[r].route;i!=null&&i.includes(s)||(console.log(t,i,r,s),Fl("/"+s,{keepFocus:!0}))});function To(n){let e,t,i,r,s;return t=new Zt({props:{icon:Xo}}),{c(){e=A("a"),Y(t.$$.fragment),i=$("IPDB"),this.h()},l(o){e=C(o,"A",{class:!0,href:!0});var a=D(e);Z(t.$$.fragment,a),i=ee(a,"IPDB"),a.forEach(I),this.h()},h(){b(e,"class","chip variant-soft hover:variant-filled-primary gap-2"),b(e,"href",r=n[0].ipdbUrl)},m(o,a){V(o,e,a),X(t,e,null),w(e,i),s=!0},p(o,a){(!s||a&1&&r!==(r=o[0].ipdbUrl))&&b(e,"href",r)},i(o){s||(P(t.$$.fragment,o),s=!0)},o(o){L(t.$$.fragment,o),s=!1},d(o){o&&I(e),Q(t)}}}function Wp(n){var Mr,Nr;let e,t,i,r,s,o,a,l,u=(((Mr=n[0].theme)==null?void 0:Mr.join(" • "))||"")+"",f,c,d,h,_=n[0].name+"",y,p,g,m=n[0].manufacturer+"",v,E,k=n[0].year+"",T,S,R,M,O=(((Nr=n[0].designers)==null?void 0:Nr.join(", "))||"")+"",K,G,z,x,te,re="Players",he,be,pe=(n[0].players||"-")+"",j,W,B,se,Ee,He,lt="Type",kt,We,$e=(n[0].type||"-")+"",H,je,ze,F,ke,qe,Pr="Updated at",yi,zt,an=Yn(n[0].updatedAt)+"",Dn,Ii,ln,wi,ct,Tt,Or="ID",Ei,ut,cn=n[0].id+"",Pn,On,Ae,ki,Lr,ve=n[0].ipdbUrl&&To(n);return{c(){e=A("div"),t=A("img"),s=N(),o=A("div"),a=A("div"),l=A("p"),f=$(u),c=N(),ve&&ve.c(),d=N(),h=A("h1"),y=$(_),p=N(),g=A("h4"),v=$(m),E=$(" ("),T=$(k),S=$(")"),R=N(),M=A("p"),K=$(O),G=N(),z=A("div"),x=A("div"),te=A("p"),te.textContent=re,he=N(),be=A("p"),j=$(pe),W=N(),B=A("div"),se=N(),Ee=A("div"),He=A("p"),He.textContent=lt,kt=N(),We=A("p"),H=$($e),je=N(),ze=A("div"),F=N(),ke=A("div"),qe=A("p"),qe.textContent=Pr,yi=N(),zt=A("p"),Dn=$(an),Ii=N(),ln=A("div"),wi=N(),ct=A("div"),Tt=A("p"),Tt.textContent=Or,Ei=N(),ut=A("button"),Pn=$(cn),this.h()},l(ue){e=C(ue,"DIV",{class:!0});var _e=D(e);t=C(_e,"IMG",{class:!0,src:!0,alt:!0}),s=U(_e),o=C(_e,"DIV",{class:!0});var Ne=D(o);a=C(Ne,"DIV",{class:!0});var St=D(a);l=C(St,"P",{class:!0});var Ur=D(l);f=ee(Ur,u),Ur.forEach(I),c=U(St),ve&&ve.l(St),St.forEach(I),d=U(Ne),h=C(Ne,"H1",{class:!0});var Fr=D(h);y=ee(Fr,_),Fr.forEach(I),p=U(Ne),g=C(Ne,"H4",{class:!0});var un=D(g);v=ee(un,m),E=ee(un," ("),T=ee(un,k),S=ee(un,")"),un.forEach(I),R=U(Ne),M=C(Ne,"P",{class:!0});var Br=D(M);K=ee(Br,O),Br.forEach(I),G=U(Ne),z=C(Ne,"DIV",{class:!0});var Ce=D(z);x=C(Ce,"DIV",{class:!0});var Ln=D(x);te=C(Ln,"P",{class:!0,"data-svelte-h":!0}),Re(te)!=="svelte-1vi5dc3"&&(te.textContent=re),he=U(Ln),be=C(Ln,"P",{class:!0});var Vr=D(be);j=ee(Vr,pe),Vr.forEach(I),Ln.forEach(I),W=U(Ce),B=C(Ce,"DIV",{class:!0}),D(B).forEach(I),se=U(Ce),Ee=C(Ce,"DIV",{class:!0});var Mn=D(Ee);He=C(Mn,"P",{class:!0,"data-svelte-h":!0}),Re(He)!=="svelte-1h1g7sd"&&(He.textContent=lt),kt=U(Mn),We=C(Mn,"P",{class:!0});var Hr=D(We);H=ee(Hr,$e),Hr.forEach(I),Mn.forEach(I),je=U(Ce),ze=C(Ce,"DIV",{class:!0}),D(ze).forEach(I),F=U(Ce),ke=C(Ce,"DIV",{class:!0});var Nn=D(ke);qe=C(Nn,"P",{class:!0,"data-svelte-h":!0}),Re(qe)!=="svelte-g6tq99"&&(qe.textContent=Pr),yi=U(Nn),zt=C(Nn,"P",{class:!0});var jr=D(zt);Dn=ee(jr,an),jr.forEach(I),Nn.forEach(I),Ii=U(Ce),ln=C(Ce,"DIV",{class:!0}),D(ln).forEach(I),wi=U(Ce),ct=C(Ce,"DIV",{class:!0});var Un=D(ct);Tt=C(Un,"P",{class:!0,"data-svelte-h":!0}),Re(Tt)!=="svelte-lju6x8"&&(Tt.textContent=Or),Ei=U(Un),ut=C(Un,"BUTTON",{class:!0});var zr=D(ut);Pn=ee(zr,cn),zr.forEach(I),Un.forEach(I),Ce.forEach(I),Ne.forEach(I),_e.forEach(I),this.h()},h(){b(t,"class","rounded-md aspectBG w-96 svelte-v17uty"),hn(t.src,i=n[0].imgUrl||Xr(n[0]))||b(t,"src",i),b(t,"alt",r=n[0].name),b(l,"class","flex-1 uppercase font-bold text-sm opacity-40"),b(a,"class","flex"),b(h,"class","h1"),b(g,"class","h4"),b(M,"class","opacity-60"),b(te,"class","text-xs font-bold uppercase opacity-40"),b(be,"class",""),b(x,"class","flex flex-col items-center justify-center flex-1 gap-1"),b(B,"class","bg-surface-900-50-token h-full w-px opacity-20"),b(He,"class","text-xs font-bold uppercase opacity-40"),b(We,"class",""),b(Ee,"class","flex flex-col items-center justify-center flex-1 gap-1"),b(ze,"class","bg-surface-900-50-token h-full w-px opacity-20"),b(qe,"class","text-xs font-bold uppercase opacity-40"),b(zt,"class",""),b(ke,"class","flex flex-col items-center justify-center flex-1 gap-1"),b(ln,"class","bg-surface-900-50-token h-full w-px opacity-20"),b(Tt,"class","text-xs font-bold uppercase opacity-40"),b(ut,"class","chip badge-glass py-0.5 px-1"),b(ct,"class","flex flex-col items-center justify-center flex-1 gap-1"),b(z,"class","flex w-full mt-auto"),b(o,"class","flex flex-col flex-1 gap-2"),b(e,"class","flex gap-8")},m(ue,_e){V(ue,e,_e),w(e,t),w(e,s),w(e,o),w(o,a),w(a,l),w(l,f),w(a,c),ve&&ve.m(a,null),w(o,d),w(o,h),w(h,y),w(o,p),w(o,g),w(g,v),w(g,E),w(g,T),w(g,S),w(o,R),w(o,M),w(M,K),w(o,G),w(o,z),w(z,x),w(x,te),w(x,he),w(x,be),w(be,j),w(z,W),w(z,B),w(z,se),w(z,Ee),w(Ee,He),w(Ee,kt),w(Ee,We),w(We,H),w(z,je),w(z,ze),w(z,F),w(z,ke),w(ke,qe),w(ke,yi),w(ke,zt),w(zt,Dn),w(z,Ii),w(z,ln),w(z,wi),w(z,ct),w(ct,Tt),w(ct,Ei),w(ct,ut),w(ut,Pn),Ae=!0,ki||(Lr=[rn(On=Ec.call(null,ut,n[0].id)),q(ut,"click",n[2])],ki=!0)},p(ue,[_e]){var Ne,St;(!Ae||_e&1&&!hn(t.src,i=ue[0].imgUrl||Xr(ue[0])))&&b(t,"src",i),(!Ae||_e&1&&r!==(r=ue[0].name))&&b(t,"alt",r),(!Ae||_e&1)&&u!==(u=(((Ne=ue[0].theme)==null?void 0:Ne.join(" • "))||"")+"")&&oe(f,u),ue[0].ipdbUrl?ve?(ve.p(ue,_e),_e&1&&P(ve,1)):(ve=To(ue),ve.c(),P(ve,1),ve.m(a,null)):ve&&(ne(),L(ve,1,1,()=>{ve=null}),ie()),(!Ae||_e&1)&&_!==(_=ue[0].name+"")&&oe(y,_),(!Ae||_e&1)&&m!==(m=ue[0].manufacturer+"")&&oe(v,m),(!Ae||_e&1)&&k!==(k=ue[0].year+"")&&oe(T,k),(!Ae||_e&1)&&O!==(O=(((St=ue[0].designers)==null?void 0:St.join(", "))||"")+"")&&oe(K,O),(!Ae||_e&1)&&pe!==(pe=(ue[0].players||"-")+"")&&oe(j,pe),(!Ae||_e&1)&&$e!==($e=(ue[0].type||"-")+"")&&oe(H,$e),(!Ae||_e&1)&&an!==(an=Yn(ue[0].updatedAt)+"")&&oe(Dn,an),(!Ae||_e&1)&&cn!==(cn=ue[0].id+"")&&oe(Pn,cn),On&&ci(On.update)&&_e&1&&On.update.call(null,ue[0].id)},i(ue){Ae||(P(ve),Ae=!0)},o(ue){L(ve),Ae=!1},d(ue){ue&&I(e),ve&&ve.d(),ki=!1,Be(Lr)}}}function qp(n,e,t){const i=Kt();let{game:r=Vi}=e;const s=()=>{i.trigger({message:`${r.id} copied to clipboard.`})};return n.$$set=o=>{"game"in o&&t(0,r=o.game)},[r,i,s]}class Kp extends fe{constructor(e){super(),de(this,e,qp,Wp,ce,{game:0})}}function So(n,e,t){const i=n.slice();return i[1]=e[t],i}function Ao(n){let e,t,i='<h3 class="h3">Tables</h3>',r,s,o,a=we(n[0]),l=[];for(let f=0;f<a.length;f+=1)l[f]=Co(So(n,a,f));const u=f=>L(l[f],1,1,()=>{l[f]=null});return{c(){e=A("div"),t=A("div"),t.innerHTML=i,r=N(),s=A("div");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=C(f,"DIV",{class:!0});var c=D(e);t=C(c,"DIV",{class:!0,"data-svelte-h":!0}),Re(t)!=="svelte-1s1r7y4"&&(t.innerHTML=i),r=U(c),s=C(c,"DIV",{class:!0});var d=D(s);for(let h=0;h<l.length;h+=1)l[h].l(d);d.forEach(I),c.forEach(I),this.h()},h(){b(t,"class","flex items-end gap-4"),b(s,"class","grid layout gap-y-10 gap-x-4 svelte-193p9ri"),b(e,"class","flex flex-col gap-4")},m(f,c){V(f,e,c),w(e,t),w(e,r),w(e,s);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(s,null);o=!0},p(f,c){if(c&1){a=we(f[0]);let d;for(d=0;d<a.length;d+=1){const h=So(f,a,d);l[d]?(l[d].p(h,c),P(l[d],1)):(l[d]=Co(h),l[d].c(),P(l[d],1),l[d].m(s,null))}for(ne(),d=a.length;d<l.length;d+=1)u(d);ie()}},i(f){if(!o){for(let c=0;c<a.length;c+=1)P(l[c]);o=!0}},o(f){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)L(l[c]);o=!1},d(f){f&&I(e),sn(l,f)}}}function Co(n){var i,r;let e,t;return e=new Zl({props:{file:n[1],href:((r=(i=n[1].urls)==null?void 0:i[0])==null?void 0:r.url)||""}}),{c(){Y(e.$$.fragment)},l(s){Z(e.$$.fragment,s)},m(s,o){X(e,s,o),t=!0},p(s,o){var l,u;const a={};o&1&&(a.file=s[1]),o&1&&(a.href=((u=(l=s[1].urls)==null?void 0:l[0])==null?void 0:u.url)||""),e.$set(a)},i(s){t||(P(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){Q(e,s)}}}function Gp(n){var r;let e,t,i=((r=n[0])==null?void 0:r.length)&&Ao(n);return{c(){i&&i.c(),e=ye()},l(s){i&&i.l(s),e=ye()},m(s,o){i&&i.m(s,o),V(s,e,o),t=!0},p(s,[o]){var a;(a=s[0])!=null&&a.length?i?(i.p(s,o),o&1&&P(i,1)):(i=Ao(s),i.c(),P(i,1),i.m(e.parentNode,e)):i&&(ne(),L(i,1,1,()=>{i=null}),ie())},i(s){t||(P(i),t=!0)},o(s){L(i),t=!1},d(s){s&&I(e),i&&i.d(s)}}}function xp(n,e,t){let{tables:i=[]}=e;return n.$$set=r=>{"tables"in r&&t(0,i=r.tables)},[i]}class Jp extends fe{constructor(e){super(),de(this,e,xp,Gp,ce,{tables:0})}}function Ro(n,e,t){const i=n.slice();return i[1]=e[t],i}function Do(n){let e,t,i='<h3 class="h3">Backglasses</h3>',r,s,o,a=we(n[0]),l=[];for(let f=0;f<a.length;f+=1)l[f]=Po(Ro(n,a,f));const u=f=>L(l[f],1,1,()=>{l[f]=null});return{c(){e=A("div"),t=A("div"),t.innerHTML=i,r=N(),s=A("div");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=C(f,"DIV",{class:!0});var c=D(e);t=C(c,"DIV",{class:!0,"data-svelte-h":!0}),Re(t)!=="svelte-cu5gg"&&(t.innerHTML=i),r=U(c),s=C(c,"DIV",{class:!0});var d=D(s);for(let h=0;h<l.length;h+=1)l[h].l(d);d.forEach(I),c.forEach(I),this.h()},h(){b(t,"class","flex items-end gap-4"),b(s,"class","grid layout gap-y-10 gap-x-4 svelte-193p9ri"),b(e,"class","flex flex-col gap-4")},m(f,c){V(f,e,c),w(e,t),w(e,r),w(e,s);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(s,null);o=!0},p(f,c){if(c&1){a=we(f[0]);let d;for(d=0;d<a.length;d+=1){const h=Ro(f,a,d);l[d]?(l[d].p(h,c),P(l[d],1)):(l[d]=Po(h),l[d].c(),P(l[d],1),l[d].m(s,null))}for(ne(),d=a.length;d<l.length;d+=1)u(d);ie()}},i(f){if(!o){for(let c=0;c<a.length;c+=1)P(l[c]);o=!0}},o(f){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)L(l[c]);o=!1},d(f){f&&I(e),sn(l,f)}}}function Po(n){var i,r;let e,t;return e=new $l({props:{file:n[1],href:((r=(i=n[1].urls)==null?void 0:i[0])==null?void 0:r.url)||""}}),{c(){Y(e.$$.fragment)},l(s){Z(e.$$.fragment,s)},m(s,o){X(e,s,o),t=!0},p(s,o){var l,u;const a={};o&1&&(a.file=s[1]),o&1&&(a.href=((u=(l=s[1].urls)==null?void 0:l[0])==null?void 0:u.url)||""),e.$set(a)},i(s){t||(P(e.$$.fragment,s),t=!0)},o(s){L(e.$$.fragment,s),t=!1},d(s){Q(e,s)}}}function Yp(n){var r;let e,t,i=((r=n[0])==null?void 0:r.length)&&Do(n);return{c(){i&&i.c(),e=ye()},l(s){i&&i.l(s),e=ye()},m(s,o){i&&i.m(s,o),V(s,e,o),t=!0},p(s,[o]){var a;(a=s[0])!=null&&a.length?i?(i.p(s,o),o&1&&P(i,1)):(i=Do(s),i.c(),P(i,1),i.m(e.parentNode,e)):i&&(ne(),L(i,1,1,()=>{i=null}),ie())},i(s){t||(P(i),t=!0)},o(s){L(i),t=!1},d(s){s&&I(e),i&&i.d(s)}}}function Xp(n,e,t){let{b2ss:i=[ec]}=e;return n.$$set=r=>{"b2ss"in r&&t(0,i=r.b2ss)},[i]}class Qp extends fe{constructor(e){super(),de(this,e,Xp,Yp,ce,{b2ss:0})}}var Zp={prefix:"fab",iconName:"dropbox",icon:[528,512,[],"f16b","M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"]},$p={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},e_={prefix:"fab",iconName:"google-drive",icon:[512,512,[],"f3aa","M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"]};let t_=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((e,t)=>(t&=63,t<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");function n_(n){let e,t,i,r,s,o,a,l,u,f;const c=n[4].default,d=Pe(c,n,n[3],null);return{c(){e=A("div"),d&&d.c(),t=N(),i=A("div"),r=A("p"),s=$(n[0]),o=N(),a=A("div"),this.h()},l(h){e=C(h,"DIV",{});var _=D(e);d&&d.l(_),_.forEach(I),t=U(h),i=C(h,"DIV",{class:!0,"data-popup":!0});var y=D(i);r=C(y,"P",{});var p=D(r);s=ee(p,n[0]),p.forEach(I),o=U(y),a=C(y,"DIV",{class:!0}),D(a).forEach(I),y.forEach(I),this.h()},h(){b(a,"class","arrow variant-filled-secondary"),b(i,"class","card p-2 variant-filled-secondary"),b(i,"data-popup",n[1])},m(h,_){V(h,e,_),d&&d.m(e,null),V(h,t,_),V(h,i,_),w(i,r),w(r,s),w(i,o),w(i,a),l=!0,u||(f=rn(or.call(null,e,n[2])),u=!0)},p(h,[_]){d&&d.p&&(!l||_&8)&&Oe(d,c,h,h[3],l?Me(c,h[3],_,null):Le(h[3]),null),(!l||_&1)&&oe(s,h[0])},i(h){l||(P(d,h),l=!0)},o(h){L(d,h),l=!1},d(h){h&&(I(e),I(t),I(i)),d&&d.d(h),u=!1,f()}}}function i_(n,e,t){let{$$slots:i={},$$scope:r}=e,{content:s=""}=e;const o=t_(),a={event:"hover",target:o,placement:"top"};return n.$$set=l=>{"content"in l&&t(0,s=l.content),"$$scope"in l&&t(3,r=l.$$scope)},[s,o,a,r,i]}class r_ extends fe{constructor(e){super(),de(this,e,i_,n_,ce,{content:0})}}function Oo(n,e,t){const i=n.slice();return i[4]=e[t],i}function s_(n){let e,t,i,r=n[4].title+"",s,o,a,l,u;return t=new Zt({props:{icon:n[4].icon}}),{c(){e=A("a"),Y(t.$$.fragment),i=A("span"),s=$(r),l=N(),this.h()},l(f){e=C(f,"A",{href:!0,target:!0,class:!0});var c=D(e);Z(t.$$.fragment,c),i=C(c,"SPAN",{});var d=D(i);s=ee(d,r),d.forEach(I),c.forEach(I),l=U(f),this.h()},h(){b(e,"href",o=n[4].url),b(e,"target","_blank"),b(e,"class",a="chip "+n[4].class)},m(f,c){V(f,e,c),X(t,e,null),w(e,i),w(i,s),V(f,l,c),u=!0},p(f,c){const d={};c&1&&(d.icon=f[4].icon),t.$set(d),(!u||c&1)&&r!==(r=f[4].title+"")&&oe(s,r),(!u||c&1&&o!==(o=f[4].url))&&b(e,"href",o),(!u||c&1&&a!==(a="chip "+f[4].class))&&b(e,"class",a)},i(f){u||(P(t.$$.fragment,f),u=!0)},o(f){L(t.$$.fragment,f),u=!1},d(f){f&&(I(e),I(l)),Q(t)}}}function Lo(n){let e,t;return e=new r_({props:{content:n[1](n[4]),$$slots:{default:[s_]},$$scope:{ctx:n}}}),{c(){Y(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,r){X(e,i,r),t=!0},p(i,r){const s={};r&1&&(s.content=i[1](i[4])),r&129&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){t||(P(e.$$.fragment,i),t=!0)},o(i){L(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function o_(n){let e,t,i=we(n[0]),r=[];for(let o=0;o<i.length;o+=1)r[o]=Lo(Oo(n,i,o));const s=o=>L(r[o],1,1,()=>{r[o]=null});return{c(){e=A("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=C(o,"DIV",{class:!0});var a=D(e);for(let l=0;l<r.length;l+=1)r[l].l(a);a.forEach(I),this.h()},h(){b(e,"class","flex")},m(o,a){V(o,e,a);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);t=!0},p(o,[a]){if(a&3){i=we(o[0]);let l;for(l=0;l<i.length;l+=1){const u=Oo(o,i,l);r[l]?(r[l].p(u,a),P(r[l],1)):(r[l]=Lo(u),r[l].c(),P(r[l],1),r[l].m(e,null))}for(ne(),l=i.length;l<r.length;l+=1)s(l);ie()}},i(o){if(!t){for(let a=0;a<i.length;a+=1)P(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)L(r[a]);t=!1},d(o){o&&I(e),sn(r,o)}}}function a_(n,e,t){let i,{urls:r=[]}=e;const s=a=>a.url?a.url.includes("vpuniverse")?{class:"variant-filled-tertiary",icon:ac,title:"VPU",...a}:a.url.includes("vpforums")?{class:"variant-filled-warning",icon:lc,title:"VPF",...a}:a.url.includes("drive.google")?{class:"variant-filled-surface",icon:e_,title:"GDrive",...a}:a.url.includes("facebook")?{class:"variant-filled-tertiary",icon:$p,title:"Facebook",...a}:a.url.includes("mega")?{class:"variant-filled-primary",icon:cc,title:"Mega",...a}:a.url.includes("dropbox")?{class:"variant-filled-secondary",icon:Zp,title:"Dropbox",...a}:a.url.includes("zen")?{class:"variant-glass",icon:uc,title:"Zen",...a}:{class:"variant-soft",icon:Xo,title:"Ext",...a}:{class:"",icon:oc,title:"???",...a},o=a=>a.broken||!a.url?"This link is broken and needs to be updated.":a.url.includes("vpuniverse")?"VPUniverse":a.url.includes("vpforums")?"VP Forums":a.url.includes("zen")?"Zen Pinball":a.url.includes("dropbox")?"Dropbox":a.url.includes("mega")?"Mega":a.url.includes("facebook")?"Facebook":(a.url.includes("drive.google"),a.url);return n.$$set=a=>{"urls"in a&&t(2,r=a.urls)},n.$$.update=()=>{n.$$.dirty&4&&t(0,i=r.map(a=>s(a)).filter(a=>!!a))},[i,o,r]}class l_ extends fe{constructor(e){super(),de(this,e,a_,o_,ce,{urls:2})}}function Mo(n,e,t){const i=n.slice();return i[2]=e[t],i[4]=t,i}function No(n){let e,t,i,r,s,o,a,l,u="<tr><th>Version</th> <th>Authors</th> <th>Comment</th> <th>URLs</th> <th>Updated at</th></tr>",f,c,d,h=we(n[1]),_=[];for(let p=0;p<h.length;p+=1)_[p]=Uo(Mo(n,h,p));const y=p=>L(_[p],1,1,()=>{_[p]=null});return{c(){e=A("div"),t=A("div"),i=A("h3"),r=$(n[0]),s=N(),o=A("div"),a=A("table"),l=A("thead"),l.innerHTML=u,f=N(),c=A("tbody");for(let p=0;p<_.length;p+=1)_[p].c();this.h()},l(p){e=C(p,"DIV",{class:!0});var g=D(e);t=C(g,"DIV",{class:!0});var m=D(t);i=C(m,"H3",{class:!0});var v=D(i);r=ee(v,n[0]),v.forEach(I),m.forEach(I),s=U(g),o=C(g,"DIV",{class:!0});var E=D(o);a=C(E,"TABLE",{class:!0});var k=D(a);l=C(k,"THEAD",{"data-svelte-h":!0}),Re(l)!=="svelte-9x0ged"&&(l.innerHTML=u),f=U(k),c=C(k,"TBODY",{});var T=D(c);for(let S=0;S<_.length;S+=1)_[S].l(T);T.forEach(I),k.forEach(I),E.forEach(I),g.forEach(I),this.h()},h(){b(i,"class","h3"),b(t,"class","flex items-end gap-4"),b(a,"class","table table-hover table-compact"),b(o,"class","table-container"),b(e,"class","flex flex-col gap-4")},m(p,g){V(p,e,g),w(e,t),w(t,i),w(i,r),w(e,s),w(e,o),w(o,a),w(a,l),w(a,f),w(a,c);for(let m=0;m<_.length;m+=1)_[m]&&_[m].m(c,null);d=!0},p(p,g){if((!d||g&1)&&oe(r,p[0]),g&2){h=we(p[1]);let m;for(m=0;m<h.length;m+=1){const v=Mo(p,h,m);_[m]?(_[m].p(v,g),P(_[m],1)):(_[m]=Uo(v),_[m].c(),P(_[m],1),_[m].m(c,null))}for(ne(),m=h.length;m<_.length;m+=1)y(m);ie()}},i(p){if(!d){for(let g=0;g<h.length;g+=1)P(_[g]);d=!0}},o(p){_=_.filter(Boolean);for(let g=0;g<_.length;g+=1)L(_[g]);d=!1},d(p){p&&I(e),sn(_,p)}}}function Uo(n){var T;let e,t,i=(n[2].version||"")+"",r,s,o,a=(((T=n[2].authors)==null?void 0:T.join(", "))||"")+"",l,u,f,c=(n[2].comment||"")+"",d,h,_,y,p,g,m=Yn(n[2].updatedAt)+"",v,E,k;return y=new l_({props:{urls:n[2].urls}}),{c(){e=A("tr"),t=A("td"),r=$(i),s=N(),o=A("td"),l=$(a),u=N(),f=A("td"),d=$(c),h=N(),_=A("td"),Y(y.$$.fragment),p=N(),g=A("td"),v=$(m),E=N(),this.h()},l(S){e=C(S,"TR",{});var R=D(e);t=C(R,"TD",{class:!0});var M=D(t);r=ee(M,i),M.forEach(I),s=U(R),o=C(R,"TD",{class:!0});var O=D(o);l=ee(O,a),O.forEach(I),u=U(R),f=C(R,"TD",{});var K=D(f);d=ee(K,c),K.forEach(I),h=U(R),_=C(R,"TD",{class:!0});var G=D(_);Z(y.$$.fragment,G),G.forEach(I),p=U(R),g=C(R,"TD",{class:!0});var z=D(g);v=ee(z,m),z.forEach(I),E=U(R),R.forEach(I),this.h()},h(){b(t,"class","w-20"),b(o,"class","w-56"),b(_,"class","w-40"),b(g,"class","w-32")},m(S,R){V(S,e,R),w(e,t),w(t,r),w(e,s),w(e,o),w(o,l),w(e,u),w(e,f),w(f,d),w(e,h),w(e,_),X(y,_,null),w(e,p),w(e,g),w(g,v),w(e,E),k=!0},p(S,R){var O;(!k||R&2)&&i!==(i=(S[2].version||"")+"")&&oe(r,i),(!k||R&2)&&a!==(a=(((O=S[2].authors)==null?void 0:O.join(", "))||"")+"")&&oe(l,a),(!k||R&2)&&c!==(c=(S[2].comment||"")+"")&&oe(d,c);const M={};R&2&&(M.urls=S[2].urls),y.$set(M),(!k||R&2)&&m!==(m=Yn(S[2].updatedAt)+"")&&oe(v,m)},i(S){k||(P(y.$$.fragment,S),k=!0)},o(S){L(y.$$.fragment,S),k=!1},d(S){S&&I(e),Q(y)}}}function c_(n){var r;let e,t,i=((r=n[1])==null?void 0:r.length)&&No(n);return{c(){i&&i.c(),e=ye()},l(s){i&&i.l(s),e=ye()},m(s,o){i&&i.m(s,o),V(s,e,o),t=!0},p(s,[o]){var a;(a=s[1])!=null&&a.length?i?(i.p(s,o),o&2&&P(i,1)):(i=No(s),i.c(),P(i,1),i.m(e.parentNode,e)):i&&(ne(),L(i,1,1,()=>{i=null}),ie())},i(s){t||(P(i),t=!0)},o(s){L(i),t=!1},d(s){s&&I(e),i&&i.d(s)}}}function u_(n,e,t){let{title:i="???"}=e,{files:r=[]}=e;return n.$$set=s=>{"title"in s&&t(0,i=s.title),"files"in s&&t(1,r=s.files)},[i,r]}class At extends fe{constructor(e){super(),de(this,e,u_,c_,ce,{title:0,files:1})}}function f_(n){let e,t,i,r,s,o,a,l,u,f,c,d,h,_,y,p,g,m,v,E,k;return t=new Kp({props:{game:n[0]}}),r=new Jp({props:{tables:n[0].tableFiles}}),o=new Qp({props:{b2ss:n[0].b2sFiles}}),l=new At({props:{files:n[0].pupPackFiles,title:"Roms"}}),f=new At({props:{files:n[0].altColorFiles,title:"Alt. Color"}}),d=new At({props:{files:n[0].altSoundFiles,title:"Alt. Sound"}}),_=new At({props:{files:n[0].povFiles,title:"POV"}}),p=new At({props:{files:n[0].wheelArtFiles,title:"Wheelart"}}),m=new At({props:{files:n[0].topperFiles,title:"Topper"}}),E=new At({props:{files:n[0].mediaPackFiles,title:"Media Packs"}}),{c(){e=A("div"),Y(t.$$.fragment),i=N(),Y(r.$$.fragment),s=N(),Y(o.$$.fragment),a=N(),Y(l.$$.fragment),u=N(),Y(f.$$.fragment),c=N(),Y(d.$$.fragment),h=N(),Y(_.$$.fragment),y=N(),Y(p.$$.fragment),g=N(),Y(m.$$.fragment),v=N(),Y(E.$$.fragment),this.h()},l(T){e=C(T,"DIV",{class:!0,style:!0});var S=D(e);Z(t.$$.fragment,S),i=U(S),Z(r.$$.fragment,S),s=U(S),Z(o.$$.fragment,S),a=U(S),Z(l.$$.fragment,S),u=U(S),Z(f.$$.fragment,S),c=U(S),Z(d.$$.fragment,S),h=U(S),Z(_.$$.fragment,S),y=U(S),Z(p.$$.fragment,S),g=U(S),Z(m.$$.fragment,S),v=U(S),Z(E.$$.fragment,S),S.forEach(I),this.h()},h(){b(e,"class","card p-8 py-10 w-full max-w-5xl flex flex-col gap-12 bg-top"),Jn(e,"background-image","radial-gradient( at 0% -40%, "+n[1]+" 0px, transparent 50% ), radial-gradient(at 98% -40%, "+n[2]+" 0px, transparent 50%)")},m(T,S){V(T,e,S),X(t,e,null),w(e,i),X(r,e,null),w(e,s),X(o,e,null),w(e,a),X(l,e,null),w(e,u),X(f,e,null),w(e,c),X(d,e,null),w(e,h),X(_,e,null),w(e,y),X(p,e,null),w(e,g),X(m,e,null),w(e,v),X(E,e,null),k=!0},p(T,[S]){const R={};S&1&&(R.game=T[0]),t.$set(R);const M={};S&1&&(M.tables=T[0].tableFiles),r.$set(M);const O={};S&1&&(O.b2ss=T[0].b2sFiles),o.$set(O);const K={};S&1&&(K.files=T[0].pupPackFiles),l.$set(K);const G={};S&1&&(G.files=T[0].altColorFiles),f.$set(G);const z={};S&1&&(z.files=T[0].altSoundFiles),d.$set(z);const x={};S&1&&(x.files=T[0].povFiles),_.$set(x);const te={};S&1&&(te.files=T[0].wheelArtFiles),p.$set(te);const re={};S&1&&(re.files=T[0].topperFiles),m.$set(re);const he={};S&1&&(he.files=T[0].mediaPackFiles),E.$set(he),(!k||S&6)&&Jn(e,"background-image","radial-gradient( at 0% -40%, "+T[1]+" 0px, transparent 50% ), radial-gradient(at 98% -40%, "+T[2]+" 0px, transparent 50%)")},i(T){k||(P(t.$$.fragment,T),P(r.$$.fragment,T),P(o.$$.fragment,T),P(l.$$.fragment,T),P(f.$$.fragment,T),P(d.$$.fragment,T),P(_.$$.fragment,T),P(p.$$.fragment,T),P(m.$$.fragment,T),P(E.$$.fragment,T),k=!0)},o(T){L(t.$$.fragment,T),L(r.$$.fragment,T),L(o.$$.fragment,T),L(l.$$.fragment,T),L(f.$$.fragment,T),L(d.$$.fragment,T),L(_.$$.fragment,T),L(p.$$.fragment,T),L(m.$$.fragment,T),L(E.$$.fragment,T),k=!1},d(T){T&&I(e),Q(t),Q(r),Q(o),Q(l),Q(f),Q(d),Q(_),Q(p),Q(m),Q(E)}}}function d_(n,e,t){let i,r,s,o,a;Te(n,sr,h=>t(8,s=h));const{dbStore:l}=Yo;Te(n,l,h=>t(6,o=h));const u=ar();Te(n,u,h=>t(7,a=h));let f="rgba(var(--color-tertiary-500) / 0.1)",c="rgba(var(--color-primary-500) / 0.1)";const d=new tc;return Hl(()=>{Fl(s.url.pathname)}),n.$$.update=()=>{var h,_;n.$$.dirty&128&&t(5,i=(_=(h=a[0])==null?void 0:h.meta)==null?void 0:_.game),n.$$.dirty&96&&t(0,r=(i?o[i]:Vi)||Vi),n.$$.dirty&1&&r.imgUrl&&(d.getColorAsync(r.imgUrl,{left:0,width:80}).then(y=>{t(1,f=y.rgba.replace(",1)",",0.6)"))}),d.getColorAsync(r.imgUrl,{left:200,width:80}).then(y=>{t(2,c=y.rgba.replace(",1)",",0.6)"))}))},[r,f,c,l,u,i,o,a]}class h_ extends fe{constructor(e){super(),de(this,e,d_,f_,ce,{})}}function m_(n,e,t){let i;Te(n,sr,s=>t(0,i=s));const r={ref:h_,slot:"<p>Skeleton</p>"};return n.$$.update=()=>{var s;if(n.$$.dirty&1){const o=(s=i==null?void 0:i.url)==null?void 0:s.searchParams;if(o){const a=o.get("game");if(a){const l={type:"component",meta:{game:a},component:r};ar().trigger(l)}}}},[i]}class g_ extends fe{constructor(e){super(),de(this,e,m_,null,ce,{})}}function p_(n){let e,t,i,r,s=n[0].user.displayName+"",o,a,l,u="Logout",f,c,d;return t=new ia({props:{src:n[0].user.photoURL||"",width:"w-6",rounded:"rounded-full"}}),{c(){e=A("div"),Y(t.$$.fragment),i=N(),r=A("span"),o=$(s),a=N(),l=A("button"),l.textContent=u,this.h()},l(h){e=C(h,"DIV",{class:!0});var _=D(e);Z(t.$$.fragment,_),i=U(_),r=C(_,"SPAN",{});var y=D(r);o=ee(y,s),y.forEach(I),_.forEach(I),a=U(h),l=C(h,"BUTTON",{class:!0,"data-svelte-h":!0}),Re(l)!=="svelte-nsylsw"&&(l.textContent=u),this.h()},h(){b(e,"class","space-x-2 flex items-center"),b(l,"class","btn w-full variant-filled-secondary")},m(h,_){V(h,e,_),X(t,e,null),w(e,i),w(e,r),w(r,o),V(h,a,_),V(h,l,_),f=!0,c||(d=q(l,"click",Rn.logout),c=!0)},p(h,_){const y={};_&1&&(y.src=h[0].user.photoURL||""),t.$set(y),(!f||_&1)&&s!==(s=h[0].user.displayName+"")&&oe(o,s)},i(h){f||(P(t.$$.fragment,h),f=!0)},o(h){L(t.$$.fragment,h),f=!1},d(h){h&&(I(e),I(a),I(l)),Q(t),c=!1,d()}}}function __(n){let e,t="Admin Login",i,r;return{c(){e=A("button"),e.textContent=t,this.h()},l(s){e=C(s,"BUTTON",{class:!0,"data-svelte-h":!0}),Re(e)!=="svelte-e3s47o"&&(e.textContent=t),this.h()},h(){b(e,"class","btn btn-sm variant-ghost-surface")},m(s,o){V(s,e,o),i||(r=q(e,"click",Rn.triggerLoginPopup),i=!0)},p:me,i:me,o:me,d(s){s&&I(e),i=!1,r()}}}function b_(n){let e,t,i,r,s,o,a,l,u,f,c,d,h,_;s=new Nu({});const y=[__,p_],p=[];function g(m,v){return m[0].user?1:0}return f=g(n),c=p[f]=y[f](n),{c(){e=A("div"),t=A("div"),i=A("div"),r=$("Toggle Dark/Light "),Y(s.$$.fragment),o=N(),a=A("hr"),l=N(),u=A("div"),c.c(),d=N(),h=A("div"),this.h()},l(m){e=C(m,"DIV",{class:!0,"data-popup":!0});var v=D(e);t=C(v,"DIV",{class:!0});var E=D(t);i=C(E,"DIV",{class:!0});var k=D(i);r=ee(k,"Toggle Dark/Light "),Z(s.$$.fragment,k),k.forEach(I),E.forEach(I),o=U(v),a=C(v,"HR",{}),l=U(v),u=C(v,"DIV",{class:!0});var T=D(u);c.l(T),T.forEach(I),d=U(v),h=C(v,"DIV",{class:!0}),D(h).forEach(I),v.forEach(I),this.h()},h(){b(i,"class","flex justify-between items-center gap-8 text-sm"),b(t,"class","p-4"),b(u,"class","p-4 flex flex-col gap-4"),b(h,"class","arrow bg-surface-100-800-token"),b(e,"class","card 8 shadow-xl popup"),b(e,"data-popup","popupSettings")},m(m,v){V(m,e,v),w(e,t),w(t,i),w(i,r),X(s,i,null),w(e,o),w(e,a),w(e,l),w(e,u),p[f].m(u,null),w(e,d),w(e,h),_=!0},p(m,[v]){let E=f;f=g(m),f===E?p[f].p(m,v):(ne(),L(p[E],1,1,()=>{p[E]=null}),ie(),c=p[f],c?c.p(m,v):(c=p[f]=y[f](m),c.c()),P(c,1),c.m(u,null))},i(m){_||(P(s.$$.fragment,m),P(c),_=!0)},o(m){L(s.$$.fragment,m),L(c),_=!1},d(m){m&&I(e),Q(s),p[f].d()}}}function v_(n,e,t){let i;const{userStore:r}=Rn;return Te(n,r,s=>t(0,i=s)),[i,r]}class y_ extends fe{constructor(e){super(),de(this,e,v_,b_,ce,{})}}function I_(n){var p,g;let e,t,i,r,s,o=((p=n[0].user)==null?void 0:p.displayName)+"",a,l,u,f="Logout",c,d,h,_,y;return i=new ia({props:{src:((g=n[0].user)==null?void 0:g.photoURL)||"",width:"w-12",rounded:"rounded-full"}}),{c(){e=A("div"),t=A("div"),Y(i.$$.fragment),r=N(),s=A("b"),a=$(o),l=N(),u=A("button"),u.textContent=f,c=N(),d=A("div"),this.h()},l(m){e=C(m,"DIV",{class:!0,"data-popup":!0});var v=D(e);t=C(v,"DIV",{class:!0});var E=D(t);Z(i.$$.fragment,E),r=U(E),s=C(E,"B",{});var k=D(s);a=ee(k,o),k.forEach(I),l=U(E),u=C(E,"BUTTON",{class:!0,"data-svelte-h":!0}),Re(u)!=="svelte-nsylsw"&&(u.textContent=f),E.forEach(I),c=U(v),d=C(v,"DIV",{class:!0}),D(d).forEach(I),v.forEach(I),this.h()},h(){b(u,"class","btn w-full variant-filled-secondary"),b(t,"class","flex flex-col space-y-2"),b(d,"class","arrow bg-surface-100-800-token"),b(e,"class","card p-4 w-72 shadow-xl popup"),b(e,"data-popup","popupUser")},m(m,v){V(m,e,v),w(e,t),X(i,t,null),w(t,r),w(t,s),w(s,a),w(t,l),w(t,u),w(e,c),w(e,d),h=!0,_||(y=q(u,"click",Rn.logout),_=!0)},p(m,[v]){var k,T;const E={};v&1&&(E.src=((k=m[0].user)==null?void 0:k.photoURL)||""),i.$set(E),(!h||v&1)&&o!==(o=((T=m[0].user)==null?void 0:T.displayName)+"")&&oe(a,o)},i(m){h||(P(i.$$.fragment,m),h=!0)},o(m){L(i.$$.fragment,m),h=!1},d(m){m&&I(e),Q(i),_=!1,y()}}}function w_(n,e,t){let i;const{userStore:r}=Rn;return Te(n,r,s=>t(0,i=s)),[i,r]}class E_ extends fe{constructor(e){super(),de(this,e,w_,I_,ce,{})}}function k_(n){let e,t,i,r;return e=new E_({}),i=new y_({}),{c(){Y(e.$$.fragment),t=N(),Y(i.$$.fragment)},l(s){Z(e.$$.fragment,s),t=U(s),Z(i.$$.fragment,s)},m(s,o){X(e,s,o),V(s,t,o),X(i,s,o),r=!0},p:me,i(s){r||(P(e.$$.fragment,s),P(i.$$.fragment,s),r=!0)},o(s){L(e.$$.fragment,s),L(i.$$.fragment,s),r=!1},d(s){s&&I(t),Q(e,s),Q(i,s)}}}class T_ extends fe{constructor(e){super(),de(this,e,null,k_,ce,{})}}function Fo(n,e,t){const i=n.slice();return i[43]=e[t].id,i[44]=e[t].val,i[46]=t,i}function Bo(n,e,t){const i=n.slice();return i[47]=e[t],i}function Vo(n){let e,t=n[47]+"",i,r;return{c(){e=A("option"),i=$(t),this.h()},l(s){e=C(s,"OPTION",{});var o=D(e);i=ee(o,t),o.forEach(I),this.h()},h(){e.__value=r=n[47],nt(e,e.__value)},m(s,o){V(s,e,o),w(e,i)},p(s,o){o[0]&1&&t!==(t=s[47]+"")&&oe(i,t),o[0]&1&&r!==(r=s[47])&&(e.__value=r,nt(e,e.__value))},d(s){s&&I(e)}}}function Ho(n){let e,t=[],i=new Map,r,s,o,a=we(n[11]);const l=u=>u[43];for(let u=0;u<a.length;u+=1){let f=Fo(n,a,u),c=l(f);i.set(c,t[u]=jo(c,f))}return{c(){e=A("div");for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=C(u,"DIV",{class:!0});var f=D(e);for(let c=0;c<t.length;c+=1)t[c].l(f);f.forEach(I),this.h()},h(){b(e,"class",r="input-chip-list "+n[8])},m(u,f){V(u,e,f);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null);o=!0},p(u,f){if(n=u,f[0]&18472){a=we(n[11]),ne();for(let c=0;c<t.length;c+=1)t[c].r();t=rr(t,f,l,1,n,a,i,e,xo,jo,null,Fo);for(let c=0;c<t.length;c+=1)t[c].a();ie()}(!o||f[0]&256&&r!==(r="input-chip-list "+n[8]))&&b(e,"class",r)},i(u){if(!o){for(let f=0;f<a.length;f+=1)P(t[f]);u&&It(()=>{o&&(s||(s=Qt(e,$t,{duration:n[3],opacity:0,y:-20},!0)),s.run(1))}),o=!0}},o(u){for(let f=0;f<t.length;f+=1)L(t[f]);u&&(s||(s=Qt(e,$t,{duration:n[3],opacity:0,y:-20},!1)),s.run(0)),o=!1},d(u){u&&I(e);for(let f=0;f<t.length;f+=1)t[f].d();u&&s&&s.end()}}}function jo(n,e){let t,i,r,s=e[44]+"",o,a,l,u="✕",f,c,d,h,_=me,y,p,g;function m(...v){return e[38](e[46],e[44],...v)}return{key:n,first:null,c(){t=A("div"),i=A("button"),r=A("span"),o=$(s),a=N(),l=A("span"),l.textContent=u,d=N(),this.h()},l(v){t=C(v,"DIV",{});var E=D(t);i=C(E,"BUTTON",{type:!0,class:!0});var k=D(i);r=C(k,"SPAN",{});var T=D(r);o=ee(T,s),T.forEach(I),a=U(k),l=C(k,"SPAN",{"data-svelte-h":!0}),Re(l)!=="svelte-1p578dz"&&(l.textContent=u),k.forEach(I),d=U(E),E.forEach(I),this.h()},h(){b(i,"type","button"),b(i,"class",f="chip "+e[5]),this.first=t},m(v,E){V(v,t,E),w(t,i),w(i,r),w(r,o),w(i,a),w(i,l),w(t,d),y=!0,p||(g=[q(i,"click",m),q(i,"click",e[28]),q(i,"keypress",e[29]),q(i,"keydown",e[30]),q(i,"keyup",e[31])],p=!0)},p(v,E){e=v,(!y||E[0]&2048)&&s!==(s=e[44]+"")&&oe(o,s),(!y||E[0]&32&&f!==(f="chip "+e[5]))&&b(i,"class",f)},r(){h=t.getBoundingClientRect()},f(){Zo(t),_()},a(){_(),_=Qo(t,h,ra,{duration:e[3]})},i(v){y||(v&&It(()=>{y&&(c||(c=Qt(i,es,{duration:e[3],opacity:0},!0)),c.run(1))}),y=!0)},o(v){v&&(c||(c=Qt(i,es,{duration:e[3],opacity:0},!1)),c.run(0)),y=!1},d(v){v&&I(t),v&&c&&c.end(),p=!1,Be(g)}}}function S_(n){let e,t,i,r,s,o,a,l,u,f,c,d,h,_,y,p,g=we(n[0]),m=[];for(let E=0;E<g.length;E+=1)m[E]=Vo(Bo(n,g,E));let v=n[11].length&&Ho(n);return{c(){e=A("div"),t=A("div"),i=A("select");for(let E=0;E<m.length;E+=1)m[E].c();r=N(),s=A("div"),o=A("form"),a=A("input"),c=N(),v&&v.c(),this.h()},l(E){e=C(E,"DIV",{class:!0});var k=D(e);t=C(k,"DIV",{class:!0});var T=D(t);i=C(T,"SELECT",{name:!0,tabindex:!0});var S=D(i);for(let O=0;O<m.length;O+=1)m[O].l(S);S.forEach(I),T.forEach(I),r=U(k),s=C(k,"DIV",{class:!0});var R=D(s);o=C(R,"FORM",{});var M=D(o);a=C(M,"INPUT",{type:!0,placeholder:!0,class:!0}),M.forEach(I),c=U(R),v&&v.l(R),R.forEach(I),k.forEach(I),this.h()},h(){b(i,"name",n[2]),i.multiple=!0,i.required=n[4],b(i,"tabindex","-1"),n[0]===void 0&&It(()=>n[36].call(i)),b(t,"class","h-0 overflow-hidden"),b(a,"type","text"),b(a,"placeholder",l=n[15].placeholder??"Enter values..."),b(a,"class",u="input-chip-field "+n[7]),a.disabled=f=n[15].disabled,b(s,"class",d="input-chip-interface "+n[9]),b(e,"class",h="input-chip "+n[10]),pt(e,"opacity-50",n[15].disabled)},m(E,k){V(E,e,k),w(e,t),w(t,i);for(let T=0;T<m.length;T+=1)m[T]&&m[T].m(i,null);n[35](i),Gr(i,n[0]),w(e,r),w(e,s),w(s,o),w(o,a),nt(a,n[1]),w(s,c),v&&v.m(s,null),_=!0,y||(p=[q(i,"change",n[36]),q(a,"input",n[37]),q(a,"input",n[12]),q(a,"input",n[32]),q(a,"focus",n[33]),q(a,"blur",n[34]),q(o,"submit",n[13])],y=!0)},p(E,k){if(k[0]&1){g=we(E[0]);let T;for(T=0;T<g.length;T+=1){const S=Bo(E,g,T);m[T]?m[T].p(S,k):(m[T]=Vo(S),m[T].c(),m[T].m(i,null))}for(;T<m.length;T+=1)m[T].d(1);m.length=g.length}(!_||k[0]&4)&&b(i,"name",E[2]),(!_||k[0]&16)&&(i.required=E[4]),k[0]&1&&Gr(i,E[0]),(!_||k[0]&32768&&l!==(l=E[15].placeholder??"Enter values..."))&&b(a,"placeholder",l),(!_||k[0]&128&&u!==(u="input-chip-field "+E[7]))&&b(a,"class",u),(!_||k[0]&32768&&f!==(f=E[15].disabled))&&(a.disabled=f),k[0]&2&&a.value!==E[1]&&nt(a,E[1]),E[11].length?v?(v.p(E,k),k[0]&2048&&P(v,1)):(v=Ho(E),v.c(),P(v,1),v.m(s,null)):v&&(ne(),L(v,1,1,()=>{v=null}),ie()),(!_||k[0]&512&&d!==(d="input-chip-interface "+E[9]))&&b(s,"class",d),(!_||k[0]&1024&&h!==(h="input-chip "+E[10]))&&b(e,"class",h),(!_||k[0]&33792)&&pt(e,"opacity-50",E[15].disabled)},i(E){_||(P(v),_=!0)},o(E){L(v),_=!1},d(E){E&&I(e),sn(m,E),n[35](null),v&&v.d(),y=!1,Be(p)}}}const A_="textarea cursor-pointer",C_="space-y-4",R_="flex flex-wrap gap-2",D_="unstyled bg-transparent border-0 !ring-0 p-0 w-full";function P_(n,e,t){let i,r,s,o,a,l;const u=["input","name","value","whitelist","max","minlength","maxlength","allowUpperCase","allowDuplicates","validation","duration","required","chips","invalid","padding","rounded"];let f=Yt(e,u);const c=li();let{input:d=""}=e,{name:h}=e,{value:_=[]}=e,{whitelist:y=[]}=e,{max:p=-1}=e,{minlength:g=-1}=e,{maxlength:m=-1}=e,{allowUpperCase:v=!1}=e,{allowDuplicates:E=!1}=e,{validation:k=()=>!0}=e,{duration:T=150}=e,{required:S=!1}=e,{chips:R="variant-filled"}=e,{invalid:M="input-error"}=e,{padding:O="p-2"}=e,{rounded:K="rounded-container-token"}=e,G=!0;function z(){t(0,_=[])}let x;er(()=>{if(!x.form)return;const H=x.form;return H.addEventListener("reset",z),()=>{H.removeEventListener("reset",z)}});function te(){t(26,G=!0)}function re(){return!(!d||(t(1,d=d.trim()),k!==void 0&&!k(d))||p!==-1&&_.length>=p||g!==-1&&d.length<g||m!==-1&&d.length>m||y.length>0&&!y.includes(d)||E===!1&&_.includes(d))}function he(H){if(H.preventDefault(),t(26,G=re()),G===!1){c("invalid",{event:H,input:d});return}t(1,d=v?d:d.toLowerCase()),_.push(d),t(0,_),i.push({val:d,id:Math.random()}),t(11,i),t(0,_),c("add",{event:H,chipIndex:_.length-1,chipValue:d}),t(1,d="")}function be(H,je,ze){f.disabled||(_.splice(je,1),t(0,_),i.splice(je,1),t(11,i),t(0,_),c("remove",{event:H,chipIndex:je,chipValue:ze}))}function pe(H){ae.call(this,n,H)}function j(H){ae.call(this,n,H)}function W(H){ae.call(this,n,H)}function B(H){ae.call(this,n,H)}function se(H){ae.call(this,n,H)}function Ee(H){ae.call(this,n,H)}function He(H){ae.call(this,n,H)}function lt(H){qt[H?"unshift":"push"](()=>{x=H,t(6,x)})}function kt(){_=jl(this),t(0,_)}function We(){d=this.value,t(1,d)}const $e=(H,je,ze)=>{be(ze,H,je)};return n.$$set=H=>{t(42,e=ge(ge({},e),Ie(H))),t(15,f=Yt(e,u)),"input"in H&&t(1,d=H.input),"name"in H&&t(2,h=H.name),"value"in H&&t(0,_=H.value),"whitelist"in H&&t(16,y=H.whitelist),"max"in H&&t(17,p=H.max),"minlength"in H&&t(18,g=H.minlength),"maxlength"in H&&t(19,m=H.maxlength),"allowUpperCase"in H&&t(20,v=H.allowUpperCase),"allowDuplicates"in H&&t(21,E=H.allowDuplicates),"validation"in H&&t(22,k=H.validation),"duration"in H&&t(3,T=H.duration),"required"in H&&t(4,S=H.required),"chips"in H&&t(5,R=H.chips),"invalid"in H&&t(23,M=H.invalid),"padding"in H&&t(24,O=H.padding),"rounded"in H&&t(25,K=H.rounded)},n.$$.update=()=>{n.$$.dirty[0]&1&&t(11,i=(_==null?void 0:_.map(H=>({val:H,id:Math.random()})))||[]),n.$$.dirty[0]&75497472&&t(27,r=G===!1?M:""),t(10,s=`${A_} ${O} ${K} ${e.class??""} ${r}`)},t(9,o=`${C_}`),t(8,a=`${R_}`),t(7,l=`${D_}`),e=Ie(e),[_,d,h,T,S,R,x,l,a,o,s,i,te,he,be,f,y,p,g,m,v,E,k,M,O,K,G,r,pe,j,W,B,se,Ee,He,lt,kt,We,$e]}class O_ extends fe{constructor(e){super(),de(this,e,P_,S_,ce,{input:1,name:2,value:0,whitelist:16,max:17,minlength:18,maxlength:19,allowUpperCase:20,allowDuplicates:21,validation:22,duration:3,required:4,chips:5,invalid:23,padding:24,rounded:25},null,[-1,-1])}}function L_(n){let e;return{c(){e=$(n[1])},l(t){e=ee(t,n[1])},m(t,i){V(t,e,i)},p(t,i){i&2&&oe(e,t[1])},d(t){t&&I(e)}}}function zo(n){let e,t,i,r,s,o,a,l,u,f,c,d,h;function _(v){n[8](v)}function y(v){n[9](v)}let p={name:"chips",placeholder:"Select filters...",chips:"variant-filled-primary"};n[2]!==void 0&&(p.input=n[2]),n[5].value!==void 0&&(p.value=n[5].value),t=new O_({props:p}),qt.push(()=>jn(t,"input",_)),qt.push(()=>jn(t,"value",y));function g(v){n[10](v)}let m={options:n[5].options,denylist:n[6]};return n[2]!==void 0&&(m.input=n[2]),a=new nu({props:m}),qt.push(()=>jn(a,"input",g)),a.$on("selection",n[11]),{c(){e=A("div"),Y(t.$$.fragment),s=N(),o=A("div"),Y(a.$$.fragment),this.h()},l(v){e=C(v,"DIV",{});var E=D(e);Z(t.$$.fragment,E),s=U(E),o=C(E,"DIV",{class:!0,style:!0,tabindex:!0,"data-popup":!0});var k=D(o);Z(a.$$.fragment,k),k.forEach(I),E.forEach(I),this.h()},h(){var v;b(o,"class","card max-h-48 p-4 overflow-y-auto z-50"),Jn(o,"width",(((v=n[3])==null?void 0:v.clientWidth)||100)+"px"),b(o,"tabindex","-1"),b(o,"data-popup",u=n[1]+"PopupAutocomplete")},m(v,E){V(v,e,E),X(t,e,null),w(e,s),w(e,o),X(a,o,null),n[12](e),c=!0,d||(h=rn(f=or.call(null,e,n[4])),d=!0)},p(v,E){var S;const k={};!i&&E&4&&(i=!0,k.input=v[2],Hn(()=>i=!1)),!r&&E&32&&(r=!0,k.value=v[5].value,Hn(()=>r=!1)),t.$set(k);const T={};E&32&&(T.options=v[5].options),!l&&E&4&&(l=!0,T.input=v[2],Hn(()=>l=!1)),a.$set(T),(!c||E&8)&&Jn(o,"width",(((S=v[3])==null?void 0:S.clientWidth)||100)+"px"),(!c||E&2&&u!==(u=v[1]+"PopupAutocomplete"))&&b(o,"data-popup",u),f&&ci(f.update)&&E&16&&f.update.call(null,v[4])},i(v){c||(P(t.$$.fragment,v),P(a.$$.fragment,v),c=!0)},o(v){L(t.$$.fragment,v),L(a.$$.fragment,v),c=!1},d(v){v&&I(e),Q(t),Q(a),n[12](null),d=!1,h()}}}function M_(n){let e,t,i,r,s;function o(u){n[7](u)}let a={size:"sm",active:"variant-filled-primary",name:"slide",$$slots:{default:[L_]},$$scope:{ctx:n}};n[5].active!==void 0&&(a.checked=n[5].active),t=new gu({props:a}),qt.push(()=>jn(t,"checked",o));let l=n[5].active&&zo(n);return{c(){e=A("div"),Y(t.$$.fragment),r=N(),l&&l.c(),this.h()},l(u){e=C(u,"DIV",{class:!0});var f=D(e);Z(t.$$.fragment,f),r=U(f),l&&l.l(f),f.forEach(I),this.h()},h(){b(e,"class","flex flex-col gap-4 flex-1")},m(u,f){V(u,e,f),X(t,e,null),w(e,r),l&&l.m(e,null),s=!0},p(u,[f]){const c={};f&8194&&(c.$$scope={dirty:f,ctx:u}),!i&&f&32&&(i=!0,c.checked=u[5].active,Hn(()=>i=!1)),t.$set(c),u[5].active?l?(l.p(u,f),f&32&&P(l,1)):(l=zo(u),l.c(),P(l,1),l.m(e,null)):l&&(ne(),L(l,1,1,()=>{l=null}),ie())},i(u){s||(P(t.$$.fragment,u),P(l),s=!0)},o(u){L(t.$$.fragment,u),L(l),s=!1},d(u){u&&I(e),Q(t),l&&l.d()}}}function N_(n,e,t){let i,r,s=me,o=()=>(s(),s=zl(a,m=>t(5,r=m)),a);n.$$.on_destroy.push(()=>s());let{store:a}=e;o();let{title:l="???"}=e,u="",f=[],c;function d(m){n.$$.not_equal(r.active,m)&&(r.active=m,a.set(r))}function h(m){u=m,t(2,u)}function _(m){n.$$.not_equal(r.value,m)&&(r.value=m,a.set(r))}function y(m){u=m,t(2,u)}const p=m=>{r.value.push(m.detail.value),a.set(r),t(2,u="")};function g(m){qt[m?"unshift":"push"](()=>{c=m,t(3,c)})}return n.$$set=m=>{"store"in m&&o(t(0,a=m.store)),"title"in m&&t(1,l=m.title)},n.$$.update=()=>{n.$$.dirty&2&&t(4,i={event:"focus-click",target:l+"PopupAutocomplete",placement:"bottom"})},[a,l,u,c,i,r,f,d,h,_,y,p,g]}class Vn extends fe{constructor(e){super(),de(this,e,N_,M_,ce,{store:0,title:1})}}function U_(n){let e,t,i,r,s,o,a,l,u,f;return i=new Vn({props:{store:n[3],title:"Features"}}),s=new Vn({props:{store:n[2],title:"Author"}}),a=new Vn({props:{store:n[0],title:"Manufacturer"}}),u=new Vn({props:{store:n[1],title:"Theme"}}),{c(){e=A("div"),t=A("div"),Y(i.$$.fragment),r=N(),Y(s.$$.fragment),o=N(),Y(a.$$.fragment),l=N(),Y(u.$$.fragment),this.h()},l(c){e=C(c,"DIV",{class:!0});var d=D(e);t=C(d,"DIV",{class:!0});var h=D(t);Z(i.$$.fragment,h),r=U(h),Z(s.$$.fragment,h),o=U(h),Z(a.$$.fragment,h),l=U(h),Z(u.$$.fragment,h),h.forEach(I),d.forEach(I),this.h()},h(){b(t,"class","p-4 card w-full border-primary-600 border flex gap-4"),b(e,"class","p-4 flex")},m(c,d){V(c,e,d),w(e,t),X(i,t,null),w(t,r),X(s,t,null),w(t,o),X(a,t,null),w(t,l),X(u,t,null),f=!0},p:me,i(c){f||(P(i.$$.fragment,c),P(s.$$.fragment,c),P(a.$$.fragment,c),P(u.$$.fragment,c),f=!0)},o(c){L(i.$$.fragment,c),L(s.$$.fragment,c),L(a.$$.fragment,c),L(u.$$.fragment,c),f=!1},d(c){c&&I(e),Q(i),Q(s),Q(a),Q(u)}}}function F_(n){const{manufacturer:e,theme:t,author:i,features:r}=dt;return[e,t,i,r]}class B_ extends fe{constructor(e){super(),de(this,e,F_,U_,ce,{})}}function V_(n){let e;const t=n[2].default,i=Pe(t,n,n[3],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&8)&&Oe(i,t,r,r[3],e?Me(t,r[3],s,null):Le(r[3]),null)},i(r){e||(P(i,r),e=!0)},o(r){L(i,r),e=!1},d(r){i&&i.d(r)}}}function H_(n){let e,t;return e=new zp({}),{c(){Y(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,r){X(e,i,r),t=!0},i(i){t||(P(e.$$.fragment,i),t=!0)},o(i){L(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function Wo(n){let e,t;return e=new B_({}),{c(){Y(e.$$.fragment)},l(i){Z(e.$$.fragment,i)},m(i,r){X(e,i,r),t=!0},i(i){t||(P(e.$$.fragment,i),t=!0)},o(i){L(e.$$.fragment,i),t=!1},d(i){Q(e,i)}}}function j_(n){let e,t,i=n[0]&&Wo();return{c(){i&&i.c(),e=ye()},l(r){i&&i.l(r),e=ye()},m(r,s){i&&i.m(r,s),V(r,e,s),t=!0},p(r,s){r[0]?i?s&1&&P(i,1):(i=Wo(),i.c(),P(i,1),i.m(e.parentNode,e)):i&&(ne(),L(i,1,1,()=>{i=null}),ie())},i(r){t||(P(i),t=!0)},o(r){L(i),t=!1},d(r){r&&I(e),i&&i.d(r)}}}function z_(n){let e,t,i,r,s,o,a,l,u,f;return e=new T_({}),i=new Cu({}),s=new zu({props:{zIndex:"1000"}}),a=new g_({}),u=new Qc({props:{$$slots:{pageHeader:[j_],header:[H_],default:[V_]},$$scope:{ctx:n}}}),{c(){Y(e.$$.fragment),t=N(),Y(i.$$.fragment),r=N(),Y(s.$$.fragment),o=N(),Y(a.$$.fragment),l=N(),Y(u.$$.fragment)},l(c){Z(e.$$.fragment,c),t=U(c),Z(i.$$.fragment,c),r=U(c),Z(s.$$.fragment,c),o=U(c),Z(a.$$.fragment,c),l=U(c),Z(u.$$.fragment,c)},m(c,d){X(e,c,d),V(c,t,d),X(i,c,d),V(c,r,d),X(s,c,d),V(c,o,d),X(a,c,d),V(c,l,d),X(u,c,d),f=!0},p(c,[d]){const h={};d&9&&(h.$$scope={dirty:d,ctx:c}),u.$set(h)},i(c){f||(P(e.$$.fragment,c),P(i.$$.fragment,c),P(s.$$.fragment,c),P(a.$$.fragment,c),P(u.$$.fragment,c),f=!0)},o(c){L(e.$$.fragment,c),L(i.$$.fragment,c),L(s.$$.fragment,c),L(a.$$.fragment,c),L(u.$$.fragment,c),f=!1},d(c){c&&(I(t),I(r),I(o),I(l)),Q(e,c),Q(i,c),Q(s,c),Q(a,c),Q(u,c)}}}function W_(n,e,t){let i,{$$slots:r={},$$scope:s}=e;wc(),ea.set({computePosition:If,autoUpdate:yf,offset:ef,shift:tf,flip:Zu,arrow:Qu});const{filterActive:o}=dt;return Te(n,o,a=>t(0,i=a)),er(()=>{Yo.fetchDb()}),n.$$set=a=>{"$$scope"in a&&t(3,s=a.$$scope)},[i,o,r,s]}class $_ extends fe{constructor(e){super(),de(this,e,W_,z_,ce,{})}}export{$_ as component,Z_ as universal};
