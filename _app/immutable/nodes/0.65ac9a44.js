import{r as ne,u as zs,v as ut,w as yi,x as Ws,y as er,s as ue,z as ke,f as R,a as z,g as D,h as P,c as W,d as w,j as _,i as F,A as T,B as Te,C as Se,D as Ae,E as Ii,F as ae,G as fe,H as j,I as Y,l as le,m as ce,J as _e,K as Dn,n as ve,L as wt,M as Et,N as st,O as Re,P as Rt,Q as gn,R as pn,S as Dt,T as On,U as oi,V as wi,W as et,e as ye,q as tr,X as je,Y as Ba,o as Ei,Z as qs,_ as nr,$ as Ks,a0 as gt,a1 as Va,a2 as Ha,a3 as ir,p as Tt,a4 as ja,a5 as cn,k as rr,a6 as za}from"../chunks/scheduler.dedae0ab.js";import{n as Wa,l as qa,f as Ka,h as Ga,S as de,i as he,a as O,g as re,t as M,c as se,j as ki,k as Ti,o as Ot,b as Z,d as te,m as $,e as ee,p as un}from"../chunks/index.21d01676.js";import{w as xt,r as xa}from"../chunks/index.ac37785c.js";import{c as Pn,e as Ne,u as Si,o as Ja,g as zt,a as sr,f as Gs,S as Xe,m as xs,D as Ya}from"../chunks/modeMapping.5829ed26.js";import{_ as or}from"../chunks/preload-helper.a4192956.js";import{F as _n,f as Xa,a as Qa,b as Za,c as $a}from"../chunks/index.ffc3a22a.js";import{h as el}from"../chunks/singletons.9bcdc39e.js";import{p as Ai}from"../chunks/stores.0c591f5a.js";function Js(n,e,t,i){if(!e)return ne;const r=n.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return ne;const{delay:s=0,duration:o=300,easing:a=zs,start:l=Wa()+s,end:c=l+o,tick:f=ne,css:u}=t(n,{from:e,to:r},i);let d=!0,m=!1,v;function y(){u&&(v=Ka(n,0,1,o,s,a,u)),s||(m=!0)}function p(){u&&Ga(n,v),d=!1}return qa(g=>{if(!m&&g>=l&&(m=!0),m&&g>=c&&(f(1,0),p()),!d)return!1;if(m){const h=g-l,b=0+1*a(h/o);f(b,1-b)}return!0}),y(),f(0,1),p}function Ys(n){const e=getComputedStyle(n);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:t,height:i}=e,r=n.getBoundingClientRect();n.style.position="absolute",n.style.width=t,n.style.height=i,Xs(n,r)}}function Xs(n,e){const t=n.getBoundingClientRect();if(e.left!==t.left||e.top!==t.top){const i=getComputedStyle(n),r=i.transform==="none"?"":i.transform;n.style.transform=`${r} translate(${e.left-t.left}px, ${e.top-t.top}px)`}}const tl=!1,kp=Object.freeze(Object.defineProperty({__proto__:null,ssr:tl},Symbol.toStringTag,{value:"Module"}));const Qs=xt(void 0);function Zs(n,e){const{computePosition:t,autoUpdate:i,offset:r,shift:s,flip:o,arrow:a,size:l,autoPlacement:c,hide:f,inline:u}=ut(Qs),d={open:!1,autoUpdateCleanup:()=>{}},m=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let v;const y="https://www.skeleton.dev/utilities/popups";let p,g;function h(){p=document.querySelector(`[data-popup="${e.target}"]`)??document.createElement("div"),g=p.querySelector(".arrow")??document.createElement("div")}h();function b(){var A,K,G,x,J,oe,ie,me;if(!p)throw new Error(`The data-popup="${e.target}" element was not found. ${y}`);if(!t)throw new Error(`Floating UI 'computePosition' not found for data-popup="${e.target}". ${y}`);if(!r)throw new Error(`Floating UI 'offset' not found for data-popup="${e.target}". ${y}`);if(!s)throw new Error(`Floating UI 'shift' not found for data-popup="${e.target}". ${y}`);if(!o)throw new Error(`Floating UI 'flip' not found for data-popup="${e.target}". ${y}`);if(!a)throw new Error(`Floating UI 'arrow' not found for data-popup="${e.target}". ${y}`);const L=[];l&&L.push(l((A=e.middleware)==null?void 0:A.size)),c&&L.push(c((K=e.middleware)==null?void 0:K.autoPlacement)),f&&L.push(f((G=e.middleware)==null?void 0:G.hide)),u&&L.push(u((x=e.middleware)==null?void 0:x.inline)),t(n,p,{placement:e.placement??"bottom",middleware:[r(((J=e.middleware)==null?void 0:J.offset)??8),s(((oe=e.middleware)==null?void 0:oe.shift)??{padding:8}),o((ie=e.middleware)==null?void 0:ie.flip),a(((me=e.middleware)==null?void 0:me.arrow)??{element:g||null}),...L]}).then(({x:Ie,y:pe,placement:V,middlewareData:H})=>{if(Object.assign(p.style,{left:`${Ie}px`,top:`${pe}px`}),g){const{x:U,y:Q}=H.arrow,xe={top:"bottom",right:"left",bottom:"top",left:"right"}[V.split("-")[0]];Object.assign(g.style,{left:U!=null?`${U}px`:"",top:Q!=null?`${Q}px`:"",right:"",bottom:"",[xe]:"-4px"})}})}function I(){p&&(d.open=!0,e.state&&e.state({state:d.open}),b(),p.style.display="block",p.style.opacity="1",p.style.pointerEvents="auto",p.removeAttribute("inert"),d.autoUpdateCleanup=i(n,p,b),v=Array.from(p==null?void 0:p.querySelectorAll(m)))}function E(L){if(!p)return;const A=parseFloat(window.getComputedStyle(p).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{d.open=!1,e.state&&e.state({state:d.open}),p.style.opacity="0",p.setAttribute("inert",""),d.autoUpdateCleanup&&d.autoUpdateCleanup(),L&&L()},A)}function k(){d.open===!1?I():E()}function C(L){if(d.open===!1||n.contains(L.target))return;if(p&&p.contains(L.target)===!1){E();return}const A=e.closeQuery===void 0?"a[href], button":e.closeQuery,K=p==null?void 0:p.querySelectorAll(A);K==null||K.forEach(G=>{G.contains(L.target)&&E()})}const S=L=>{if(d.open===!1)return;const A=L.key;if(A==="Escape"){L.preventDefault(),n.focus(),E();return}v=Array.from(p==null?void 0:p.querySelectorAll(m)),d.open&&document.activeElement===n&&(A==="ArrowDown"||A==="Tab")&&m.length>0&&v.length>0&&(L.preventDefault(),v[0].focus())};switch(e.event){case"click":n.addEventListener("click",k,!0),window.addEventListener("click",C,!0);break;case"hover":n.addEventListener("mouseover",I,!0),n.addEventListener("mouseleave",()=>E(),!0);break;case"focus-blur":n.addEventListener("focus",k,!0),n.addEventListener("blur",()=>E(),!0);break;case"focus-click":n.addEventListener("focus",I,!0),window.addEventListener("click",C,!0);break;default:throw new Error(`Event value of '${e.event}' is not supported. ${y}`)}return window.addEventListener("keydown",S,!0),b(),{update(L){E(()=>{e=L,b(),h()})},destroy(){n.removeEventListener("click",k,!0),n.removeEventListener("mouseover",I,!0),n.removeEventListener("mouseleave",()=>E(),!0),n.removeEventListener("focus",k,!0),n.removeEventListener("focus",I,!0),n.removeEventListener("blur",()=>E(),!0),window.removeEventListener("click",C,!0),window.removeEventListener("keydown",S,!0)}}}const nl="drawerStore";function il(){const n=rl();return yi(nl,n)}function rl(){const{subscribe:n,set:e,update:t}=xt({});return{subscribe:n,set:e,update:t,open:i=>t(()=>({open:!0,...i})),close:()=>t(i=>(i.open=!1,i))}}const $s="modalStore";function Ci(){const n=Ws($s);if(!n)throw new Error("modalStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return n}function sl(){const n=ol();return yi($s,n)}function ol(){const{subscribe:n,set:e,update:t}=xt([]);return{subscribe:n,set:e,update:t,trigger:i=>t(r=>(r.push(i),r)),close:()=>t(i=>(i.length>0&&i.shift(),i)),clear:()=>e([])}}const al={message:"Missing Toast Message",autohide:!0,timeout:5e3},eo="toastStore";function Vt(){const n=Ws(eo);if(!n)throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return n}function ll(){const n=ul();return yi(eo,n)}function cl(){const n=Math.random();return Number(n).toString(32)}function ul(){const{subscribe:n,set:e,update:t}=xt([]),i=s=>t(o=>{if(o.length>0){const a=o.findIndex(c=>c.id===s),l=o[a];l&&(l.callback&&l.callback({id:s,status:"closed"}),l.timeoutId&&clearTimeout(l.timeoutId),o.splice(a,1))}return o});function r(s){if(s.autohide===!0)return setTimeout(()=>{i(s.id)},s.timeout)}return{subscribe:n,close:i,trigger:s=>{const o=cl();return t(a=>{s&&s.callback&&s.callback({id:o,status:"queued"}),s.hideDismiss&&(s.autohide=!0);const l={...al,...s,id:o};return l.timeoutId=r(l),a.push(l),a}),o},freeze:s=>t(o=>(o.length>0&&clearTimeout(o[s].timeoutId),o)),unfreeze:s=>t(o=>(o.length>0&&(o[s].timeoutId=r(o[s])),o)),clear:()=>e([])}}function fl(){sl(),ll(),il()}const Gn={};function ar(n){return n==="local"?localStorage:sessionStorage}function Ln(n,e,t){const i=(t==null?void 0:t.serializer)??JSON,r=(t==null?void 0:t.storage)??"local";function s(o,a){ar(r).setItem(o,i.stringify(a))}if(!Gn[n]){const o=xt(e,c=>{const f=ar(r).getItem(n);f&&c(i.parse(f));{const u=d=>{d.key===n&&c(d.newValue?i.parse(d.newValue):null)};return window.addEventListener("storage",u),()=>window.removeEventListener("storage",u)}}),{subscribe:a,set:l}=o;Gn[n]={set(c){s(n,c),l(c)},update(c){const f=c(ut(o));s(n,f),l(f)},subscribe:a}}return Gn[n]}const dl=Ln("modeOsPrefers",!1),hl=Ln("modeUserPrefers",void 0),ai=Ln("modeCurrent",!1);function ml(){const n=window.matchMedia("(prefers-color-scheme: light)").matches;return dl.set(n),n}function gl(n){hl.set(n)}function lr(n){const e=document.documentElement.classList,t="dark";n===!0?e.remove(t):e.add(t),ai.set(n)}function pl(){const n=document.documentElement.classList,e=localStorage.getItem("modeUserPrefers")==="false",t=!("modeUserPrefers"in localStorage),i=window.matchMedia("(prefers-color-scheme: dark)").matches;e||t&&i?n.add("dark"):n.remove("dark")}const to="(prefers-reduced-motion: reduce)";function _l(){return window.matchMedia(to).matches}const Ri=xa(_l(),n=>{{const e=i=>{n(i.matches)},t=window.matchMedia(to);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});function bl(n,e){const t='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let i,r;function s(u){u.shiftKey&&u.code==="Tab"&&(u.preventDefault(),r.focus())}function o(u){!u.shiftKey&&u.code==="Tab"&&(u.preventDefault(),i.focus())}const a=u=>{if(e===!1)return;const d=Array.from(n.querySelectorAll(t));d.length&&(i=d[0],r=d[d.length-1],u||i.focus(),i.addEventListener("keydown",s),r.addEventListener("keydown",o))};a(!1);function l(){i&&i.removeEventListener("keydown",s),r&&r.removeEventListener("keydown",o)}const c=(u,d)=>(u.length&&(l(),a(!0)),d),f=new MutationObserver(c);return f.observe(n,{childList:!0,subtree:!0}),{update(u){e=u,u?a(!1):l()},destroy(){l(),f.disconnect()}}}function cr(n,{delay:e=0,duration:t=400,easing:i=zs}={}){const r=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:s=>`opacity: ${s*r}`}}function Pt(n,{delay:e=0,duration:t=400,easing:i=Pn,x:r=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,c=a.transform==="none"?"":a.transform,f=l*(1-o),[u,d]=er(r),[m,v]=er(s);return{delay:e,duration:t,easing:i,css:(y,p)=>`
			transform: ${c} translate(${(1-y)*u}${d}, ${(1-y)*m}${v});
			opacity: ${l-f*p}`}}function ur(n,{delay:e=0,duration:t=400,easing:i=Pn,axis:r="y"}={}){const s=getComputedStyle(n),o=+s.opacity,a=r==="y"?"height":"width",l=parseFloat(s[a]),c=r==="y"?["top","bottom"]:["left","right"],f=c.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),u=parseFloat(s[`padding${f[0]}`]),d=parseFloat(s[`padding${f[1]}`]),m=parseFloat(s[`margin${f[0]}`]),v=parseFloat(s[`margin${f[1]}`]),y=parseFloat(s[`border${f[0]}Width`]),p=parseFloat(s[`border${f[1]}Width`]);return{delay:e,duration:t,easing:i,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*o};${a}: ${g*l}px;padding-${c[0]}: ${g*u}px;padding-${c[1]}: ${g*d}px;margin-${c[0]}: ${g*m}px;margin-${c[1]}: ${g*v}px;border-${c[0]}-width: ${g*y}px;border-${c[1]}-width: ${g*p}px;`}}function fr(n,{delay:e=0,duration:t=400,easing:i=Pn,start:r=0,opacity:s=0}={}){const o=getComputedStyle(n),a=+o.opacity,l=o.transform==="none"?"":o.transform,c=1-r,f=a*(1-s);return{delay:e,duration:t,easing:i,css:(u,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${a-f*d}
		`}}function tt(n,e){const{transition:t,params:i,enabled:r}=e;return r?t(n,i):"duration"in i?t(n,{duration:0}):{duration:0}}const vl=n=>({}),dr=n=>({}),yl=n=>({}),hr=n=>({}),Il=n=>({}),mr=n=>({});function gr(n){let e,t,i;const r=n[22].lead,s=ke(r,n,n[21],mr);return{c(){e=R("div"),s&&s.c(),this.h()},l(o){e=D(o,"DIV",{class:!0});var a=P(e);s&&s.l(a),a.forEach(w),this.h()},h(){_(e,"class",t="app-bar-slot-lead "+n[4])},m(o,a){F(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&Te(s,r,o,o[21],i?Ae(r,o[21],a,Il):Se(o[21]),mr),(!i||a&16&&t!==(t="app-bar-slot-lead "+o[4]))&&_(e,"class",t)},i(o){i||(O(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&w(e),s&&s.d(o)}}}function pr(n){let e,t,i;const r=n[22].trail,s=ke(r,n,n[21],hr);return{c(){e=R("div"),s&&s.c(),this.h()},l(o){e=D(o,"DIV",{class:!0});var a=P(e);s&&s.l(a),a.forEach(w),this.h()},h(){_(e,"class",t="app-bar-slot-trail "+n[2])},m(o,a){F(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&Te(s,r,o,o[21],i?Ae(r,o[21],a,yl):Se(o[21]),hr),(!i||a&4&&t!==(t="app-bar-slot-trail "+o[2]))&&_(e,"class",t)},i(o){i||(O(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&w(e),s&&s.d(o)}}}function _r(n){let e,t,i;const r=n[22].headline,s=ke(r,n,n[21],dr);return{c(){e=R("div"),s&&s.c(),this.h()},l(o){e=D(o,"DIV",{class:!0});var a=P(e);s&&s.l(a),a.forEach(w),this.h()},h(){_(e,"class",t="app-bar-row-headline "+n[5])},m(o,a){F(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&Te(s,r,o,o[21],i?Ae(r,o[21],a,vl):Se(o[21]),dr),(!i||a&32&&t!==(t="app-bar-row-headline "+o[5]))&&_(e,"class",t)},i(o){i||(O(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&w(e),s&&s.d(o)}}}function wl(n){let e,t,i,r,s,o,a,l,c,f,u=n[8].lead&&gr(n);const d=n[22].default,m=ke(d,n,n[21],null);let v=n[8].trail&&pr(n),y=n[8].headline&&_r(n);return{c(){e=R("div"),t=R("div"),u&&u.c(),i=z(),r=R("div"),m&&m.c(),o=z(),v&&v.c(),l=z(),y&&y.c(),this.h()},l(p){e=D(p,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var g=P(e);t=D(g,"DIV",{class:!0});var h=P(t);u&&u.l(h),i=W(h),r=D(h,"DIV",{class:!0});var b=P(r);m&&m.l(b),b.forEach(w),o=W(h),v&&v.l(h),h.forEach(w),l=W(g),y&&y.l(g),g.forEach(w),this.h()},h(){_(r,"class",s="app-bar-slot-default "+n[3]),_(t,"class",a="app-bar-row-main "+n[6]),_(e,"class",c="app-bar "+n[7]),_(e,"data-testid","app-bar"),_(e,"role","toolbar"),_(e,"aria-label",n[0]),_(e,"aria-labelledby",n[1])},m(p,g){F(p,e,g),T(e,t),u&&u.m(t,null),T(t,i),T(t,r),m&&m.m(r,null),T(t,o),v&&v.m(t,null),T(e,l),y&&y.m(e,null),f=!0},p(p,[g]){p[8].lead?u?(u.p(p,g),g&256&&O(u,1)):(u=gr(p),u.c(),O(u,1),u.m(t,i)):u&&(re(),M(u,1,1,()=>{u=null}),se()),m&&m.p&&(!f||g&2097152)&&Te(m,d,p,p[21],f?Ae(d,p[21],g,null):Se(p[21]),null),(!f||g&8&&s!==(s="app-bar-slot-default "+p[3]))&&_(r,"class",s),p[8].trail?v?(v.p(p,g),g&256&&O(v,1)):(v=pr(p),v.c(),O(v,1),v.m(t,null)):v&&(re(),M(v,1,1,()=>{v=null}),se()),(!f||g&64&&a!==(a="app-bar-row-main "+p[6]))&&_(t,"class",a),p[8].headline?y?(y.p(p,g),g&256&&O(y,1)):(y=_r(p),y.c(),O(y,1),y.m(e,null)):y&&(re(),M(y,1,1,()=>{y=null}),se()),(!f||g&128&&c!==(c="app-bar "+p[7]))&&_(e,"class",c),(!f||g&1)&&_(e,"aria-label",p[0]),(!f||g&2)&&_(e,"aria-labelledby",p[1])},i(p){f||(O(u),O(m,p),O(v),O(y),f=!0)},o(p){M(u),M(m,p),M(v),M(y),f=!1},d(p){p&&w(e),u&&u.d(),m&&m.d(p),v&&v.d(),y&&y.d()}}}const El="flex flex-col",kl="grid items-center",Tl="",Sl="flex-none flex justify-between items-center",Al="flex-auto",Cl="flex-none flex items-center space-x-4";function Rl(n,e,t){let i,r,s,o,a,l,{$$slots:c={},$$scope:f}=e;const u=Ii(c);let{background:d="bg-surface-100-800-token"}=e,{border:m=""}=e,{padding:v="p-4"}=e,{shadow:y=""}=e,{spacing:p="space-y-4"}=e,{gridColumns:g="grid-cols-[auto_1fr_auto]"}=e,{gap:h="gap-4"}=e,{regionRowMain:b=""}=e,{regionRowHeadline:I=""}=e,{slotLead:E=""}=e,{slotDefault:k=""}=e,{slotTrail:C=""}=e,{label:S=""}=e,{labelledby:L=""}=e;return n.$$set=A=>{t(23,e=ae(ae({},e),fe(A))),"background"in A&&t(9,d=A.background),"border"in A&&t(10,m=A.border),"padding"in A&&t(11,v=A.padding),"shadow"in A&&t(12,y=A.shadow),"spacing"in A&&t(13,p=A.spacing),"gridColumns"in A&&t(14,g=A.gridColumns),"gap"in A&&t(15,h=A.gap),"regionRowMain"in A&&t(16,b=A.regionRowMain),"regionRowHeadline"in A&&t(17,I=A.regionRowHeadline),"slotLead"in A&&t(18,E=A.slotLead),"slotDefault"in A&&t(19,k=A.slotDefault),"slotTrail"in A&&t(20,C=A.slotTrail),"label"in A&&t(0,S=A.label),"labelledby"in A&&t(1,L=A.labelledby),"$$scope"in A&&t(21,f=A.$$scope)},n.$$.update=()=>{t(7,i=`${El} ${d} ${m} ${p} ${v} ${y} ${e.class??""}`),n.$$.dirty&114688&&t(6,r=`${kl} ${g} ${h} ${b}`),n.$$.dirty&131072&&t(5,s=`${Tl} ${I}`),n.$$.dirty&262144&&t(4,o=`${Sl} ${E}`),n.$$.dirty&524288&&t(3,a=`${Al} ${k}`),n.$$.dirty&1048576&&t(2,l=`${Cl} ${C}`)},e=fe(e),[S,L,l,a,o,s,r,i,u,d,m,v,y,p,g,h,b,I,E,k,C,f,c]}class Dl extends de{constructor(e){super(),he(this,e,Rl,wl,ue,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const Ol=n=>({}),br=n=>({}),Pl=n=>({}),vr=n=>({}),Ll=n=>({}),yr=n=>({}),Nl=n=>({}),Ir=n=>({}),Ml=n=>({}),wr=n=>({}),Ul=n=>({}),Er=n=>({});function kr(n){let e,t,i;const r=n[18].header,s=ke(r,n,n[17],Er);return{c(){e=R("header"),s&&s.c(),this.h()},l(o){e=D(o,"HEADER",{id:!0,class:!0});var a=P(e);s&&s.l(a),a.forEach(w),this.h()},h(){_(e,"id","shell-header"),_(e,"class",t="flex-none "+n[7])},m(o,a){F(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&131072)&&Te(s,r,o,o[17],i?Ae(r,o[17],a,Ul):Se(o[17]),Er),(!i||a&128&&t!==(t="flex-none "+o[7]))&&_(e,"class",t)},i(o){i||(O(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&w(e),s&&s.d(o)}}}function Tr(n){let e,t;const i=n[18].sidebarLeft,r=ke(i,n,n[17],wr);return{c(){e=R("aside"),r&&r.c(),this.h()},l(s){e=D(s,"ASIDE",{id:!0,class:!0});var o=P(e);r&&r.l(o),o.forEach(w),this.h()},h(){_(e,"id","sidebar-left"),_(e,"class",n[6])},m(s,o){F(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&131072)&&Te(r,i,s,s[17],t?Ae(i,s[17],o,Ml):Se(s[17]),wr),(!t||o&64)&&_(e,"class",s[6])},i(s){t||(O(r,s),t=!0)},o(s){M(r,s),t=!1},d(s){s&&w(e),r&&r.d(s)}}}function Sr(n){let e,t,i;const r=n[18].pageHeader,s=ke(r,n,n[17],Ir),o=s||Fl();return{c(){e=R("header"),o&&o.c(),this.h()},l(a){e=D(a,"HEADER",{id:!0,class:!0});var l=P(e);o&&o.l(l),l.forEach(w),this.h()},h(){_(e,"id","page-header"),_(e,"class",t="flex-none "+n[4])},m(a,l){F(a,e,l),o&&o.m(e,null),i=!0},p(a,l){s&&s.p&&(!i||l&131072)&&Te(s,r,a,a[17],i?Ae(r,a[17],l,Nl):Se(a[17]),Ir),(!i||l&16&&t!==(t="flex-none "+a[4]))&&_(e,"class",t)},i(a){i||(O(o,a),i=!0)},o(a){M(o,a),i=!1},d(a){a&&w(e),o&&o.d(a)}}}function Fl(n){let e;return{c(){e=le("(slot:header)")},l(t){e=ce(t,"(slot:header)")},m(t,i){F(t,e,i)},d(t){t&&w(e)}}}function Ar(n){let e,t,i;const r=n[18].pageFooter,s=ke(r,n,n[17],yr),o=s||Bl();return{c(){e=R("footer"),o&&o.c(),this.h()},l(a){e=D(a,"FOOTER",{id:!0,class:!0});var l=P(e);o&&o.l(l),l.forEach(w),this.h()},h(){_(e,"id","page-footer"),_(e,"class",t="flex-none "+n[2])},m(a,l){F(a,e,l),o&&o.m(e,null),i=!0},p(a,l){s&&s.p&&(!i||l&131072)&&Te(s,r,a,a[17],i?Ae(r,a[17],l,Ll):Se(a[17]),yr),(!i||l&4&&t!==(t="flex-none "+a[2]))&&_(e,"class",t)},i(a){i||(O(o,a),i=!0)},o(a){M(o,a),i=!1},d(a){a&&w(e),o&&o.d(a)}}}function Bl(n){let e;return{c(){e=le("(slot:footer)")},l(t){e=ce(t,"(slot:footer)")},m(t,i){F(t,e,i)},d(t){t&&w(e)}}}function Cr(n){let e,t;const i=n[18].sidebarRight,r=ke(i,n,n[17],vr);return{c(){e=R("aside"),r&&r.c(),this.h()},l(s){e=D(s,"ASIDE",{id:!0,class:!0});var o=P(e);r&&r.l(o),o.forEach(w),this.h()},h(){_(e,"id","sidebar-right"),_(e,"class",n[5])},m(s,o){F(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&131072)&&Te(r,i,s,s[17],t?Ae(i,s[17],o,Pl):Se(s[17]),vr),(!t||o&32)&&_(e,"class",s[5])},i(s){t||(O(r,s),t=!0)},o(s){M(r,s),t=!1},d(s){s&&w(e),r&&r.d(s)}}}function Rr(n){let e,t,i;const r=n[18].footer,s=ke(r,n,n[17],br);return{c(){e=R("footer"),s&&s.c(),this.h()},l(o){e=D(o,"FOOTER",{id:!0,class:!0});var a=P(e);s&&s.l(a),a.forEach(w),this.h()},h(){_(e,"id","shell-footer"),_(e,"class",t="flex-none "+n[1])},m(o,a){F(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&131072)&&Te(s,r,o,o[17],i?Ae(r,o[17],a,Ol):Se(o[17]),br),(!i||a&2&&t!==(t="flex-none "+o[1]))&&_(e,"class",t)},i(o){i||(O(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&w(e),s&&s.d(o)}}}function Vl(n){let e,t,i,r,s,o,a,l,c,f,u,d,m,v,y,p=n[9].header&&kr(n),g=n[9].sidebarLeft&&Tr(n),h=n[9].pageHeader&&Sr(n);const b=n[18].default,I=ke(b,n,n[17],null);let E=n[9].pageFooter&&Ar(n),k=n[9].sidebarRight&&Cr(n),C=n[9].footer&&Rr(n);return{c(){e=R("div"),p&&p.c(),t=z(),i=R("div"),g&&g.c(),r=z(),s=R("div"),h&&h.c(),o=z(),a=R("main"),I&&I.c(),c=z(),E&&E.c(),u=z(),k&&k.c(),d=z(),C&&C.c(),this.h()},l(S){e=D(S,"DIV",{id:!0,class:!0,"data-testid":!0});var L=P(e);p&&p.l(L),t=W(L),i=D(L,"DIV",{class:!0});var A=P(i);g&&g.l(A),r=W(A),s=D(A,"DIV",{id:!0,class:!0});var K=P(s);h&&h.l(K),o=W(K),a=D(K,"MAIN",{id:!0,class:!0});var G=P(a);I&&I.l(G),G.forEach(w),c=W(K),E&&E.l(K),K.forEach(w),u=W(A),k&&k.l(A),A.forEach(w),d=W(L),C&&C.l(L),L.forEach(w),this.h()},h(){_(a,"id","page-content"),_(a,"class",l="flex-auto "+n[3]),_(s,"id","page"),_(s,"class",f=n[0]+" "+Dr),_(i,"class","flex-auto "+jl),_(e,"id","appShell"),_(e,"class",n[8]),_(e,"data-testid","app-shell")},m(S,L){F(S,e,L),p&&p.m(e,null),T(e,t),T(e,i),g&&g.m(i,null),T(i,r),T(i,s),h&&h.m(s,null),T(s,o),T(s,a),I&&I.m(a,null),T(s,c),E&&E.m(s,null),T(i,u),k&&k.m(i,null),T(e,d),C&&C.m(e,null),m=!0,v||(y=j(s,"scroll",n[19]),v=!0)},p(S,[L]){S[9].header?p?(p.p(S,L),L&512&&O(p,1)):(p=kr(S),p.c(),O(p,1),p.m(e,t)):p&&(re(),M(p,1,1,()=>{p=null}),se()),S[9].sidebarLeft?g?(g.p(S,L),L&512&&O(g,1)):(g=Tr(S),g.c(),O(g,1),g.m(i,r)):g&&(re(),M(g,1,1,()=>{g=null}),se()),S[9].pageHeader?h?(h.p(S,L),L&512&&O(h,1)):(h=Sr(S),h.c(),O(h,1),h.m(s,o)):h&&(re(),M(h,1,1,()=>{h=null}),se()),I&&I.p&&(!m||L&131072)&&Te(I,b,S,S[17],m?Ae(b,S[17],L,null):Se(S[17]),null),(!m||L&8&&l!==(l="flex-auto "+S[3]))&&_(a,"class",l),S[9].pageFooter?E?(E.p(S,L),L&512&&O(E,1)):(E=Ar(S),E.c(),O(E,1),E.m(s,null)):E&&(re(),M(E,1,1,()=>{E=null}),se()),(!m||L&1&&f!==(f=S[0]+" "+Dr))&&_(s,"class",f),S[9].sidebarRight?k?(k.p(S,L),L&512&&O(k,1)):(k=Cr(S),k.c(),O(k,1),k.m(i,null)):k&&(re(),M(k,1,1,()=>{k=null}),se()),S[9].footer?C?(C.p(S,L),L&512&&O(C,1)):(C=Rr(S),C.c(),O(C,1),C.m(e,null)):C&&(re(),M(C,1,1,()=>{C=null}),se()),(!m||L&256)&&_(e,"class",S[8])},i(S){m||(O(p),O(g),O(h),O(I,S),O(E),O(k),O(C),m=!0)},o(S){M(p),M(g),M(h),M(I,S),M(E),M(k),M(C),m=!1},d(S){S&&w(e),p&&p.d(),g&&g.d(),h&&h.d(),I&&I.d(S),E&&E.d(),k&&k.d(),C&&C.d(),v=!1,y()}}}const Hl="w-full h-full flex flex-col overflow-hidden",jl="w-full h-full flex overflow-hidden",Dr="flex-1 overflow-x-hidden flex flex-col",zl="flex-none overflow-x-hidden overflow-y-auto",Wl="flex-none overflow-x-hidden overflow-y-auto";function ql(n,e,t){let i,r,s,o,a,l,c,f,{$$slots:u={},$$scope:d}=e;const m=Ii(u);let{regionPage:v=""}=e,{slotHeader:y="z-10"}=e,{slotSidebarLeft:p="w-auto"}=e,{slotSidebarRight:g="w-auto"}=e,{slotPageHeader:h=""}=e,{slotPageContent:b=""}=e,{slotPageFooter:I=""}=e,{slotFooter:E=""}=e;function k(C){Y.call(this,n,C)}return n.$$set=C=>{t(20,e=ae(ae({},e),fe(C))),"regionPage"in C&&t(0,v=C.regionPage),"slotHeader"in C&&t(10,y=C.slotHeader),"slotSidebarLeft"in C&&t(11,p=C.slotSidebarLeft),"slotSidebarRight"in C&&t(12,g=C.slotSidebarRight),"slotPageHeader"in C&&t(13,h=C.slotPageHeader),"slotPageContent"in C&&t(14,b=C.slotPageContent),"slotPageFooter"in C&&t(15,I=C.slotPageFooter),"slotFooter"in C&&t(16,E=C.slotFooter),"$$scope"in C&&t(17,d=C.$$scope)},n.$$.update=()=>{t(8,i=`${Hl} ${e.class??""}`),n.$$.dirty&1024&&t(7,r=`${y}`),n.$$.dirty&2048&&t(6,s=`${zl} ${p}`),n.$$.dirty&4096&&t(5,o=`${Wl} ${g}`),n.$$.dirty&8192&&t(4,a=`${h}`),n.$$.dirty&16384&&t(3,l=`${b}`),n.$$.dirty&32768&&t(2,c=`${I}`),n.$$.dirty&65536&&t(1,f=`${E}`)},e=fe(e),[v,f,c,l,a,o,s,r,i,m,y,p,g,h,b,I,E,d,u,k]}class Kl extends de{constructor(e){super(),he(this,e,ql,Vl,ue,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function Or(n,e,t){const i=n.slice();return i[34]=e[t],i}function Gl(n){let e,t,i;return{c(){e=R("div"),t=le(n[0]),this.h()},l(r){e=D(r,"DIV",{class:!0});var s=P(e);t=ce(s,n[0]),s.forEach(w),this.h()},h(){_(e,"class",i="autocomplete-empty "+n[7])},m(r,s){F(r,e,s),T(e,t)},p(r,s){s[0]&1&&ve(t,r[0]),s[0]&128&&i!==(i="autocomplete-empty "+r[7])&&_(e,"class",i)},i:ne,o:ne,d(r){r&&w(e)}}}function xl(n){let e,t,i=[],r=new Map,s,o,a,l=Ne(n[6].slice(0,n[13]));const c=f=>f[34];for(let f=0;f<l.length;f+=1){let u=Or(n,l,f),d=c(u);r.set(d,i[f]=Pr(d,u))}return{c(){e=R("nav"),t=R("ul");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=D(f,"NAV",{class:!0});var u=P(e);t=D(u,"UL",{class:!0});var d=P(t);for(let m=0;m<i.length;m+=1)i[m].l(d);d.forEach(w),u.forEach(w),this.h()},h(){_(t,"class",s="autocomplete-list "+n[10]),_(e,"class",o="autocomplete-nav "+n[11])},m(f,u){F(f,e,u),T(e,t);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(t,null);a=!0},p(f,u){u[0]&25458&&(l=Ne(f[6].slice(0,f[13])),re(),i=Si(i,u,c,1,f,l,r,t,Ja,Pr,null,Or),se()),(!a||u[0]&1024&&s!==(s="autocomplete-list "+f[10]))&&_(t,"class",s),(!a||u[0]&2048&&o!==(o="autocomplete-nav "+f[11]))&&_(e,"class",o)},i(f){if(!a){for(let u=0;u<l.length;u+=1)O(i[u]);a=!0}},o(f){for(let u=0;u<i.length;u+=1)M(i[u]);a=!1},d(f){f&&w(e);for(let u=0;u<i.length;u+=1)i[u].d()}}}function Pr(n,e){let t,i,r,s=e[34].label+"",o,a,l,c,f,u,d,m;function v(){return e[28](e[34])}return{key:n,first:null,c(){t=R("li"),i=R("button"),r=new wt(!1),a=z(),this.h()},l(y){t=D(y,"LI",{class:!0});var p=P(t);i=D(p,"BUTTON",{class:!0,type:!0});var g=P(i);r=Et(g,!1),g.forEach(w),a=W(p),p.forEach(w),this.h()},h(){r.a=null,_(i,"class",o="autocomplete-button "+e[8]),_(i,"type","button"),_(t,"class",l="autocomplete-item "+e[9]),this.first=t},m(y,p){F(y,t,p),T(t,i),r.m(s,i),T(t,a),u=!0,d||(m=[j(i,"click",v),j(i,"click",e[26]),j(i,"keypress",e[27])],d=!0)},p(y,p){e=y,(!u||p[0]&8256)&&s!==(s=e[34].label+"")&&r.p(s),(!u||p[0]&256&&o!==(o="autocomplete-button "+e[8]))&&_(i,"class",o),(!u||p[0]&512&&l!==(l="autocomplete-item "+e[9]))&&_(t,"class",l)},i(y){u||(y&&st(()=>{u&&(f&&f.end(1),c=ki(t,tt,{transition:e[2],params:e[3],enabled:e[1]}),c.start())}),u=!0)},o(y){c&&c.invalidate(),y&&(f=Ti(t,tt,{transition:e[4],params:e[5],enabled:e[1]})),u=!1},d(y){y&&w(t),y&&f&&f.end(),d=!1,Re(m)}}}function Jl(n){let e,t,i,r,s;const o=[xl,Gl],a=[];function l(c,f){return c[6].length>0?0:1}return t=l(n),i=a[t]=o[t](n),{c(){e=R("div"),i.c(),this.h()},l(c){e=D(c,"DIV",{class:!0,"data-testid":!0});var f=P(e);i.l(f),f.forEach(w),this.h()},h(){_(e,"class",r="autocomplete "+n[12]),_(e,"data-testid","autocomplete")},m(c,f){F(c,e,f),a[t].m(e,null),s=!0},p(c,f){let u=t;t=l(c),t===u?a[t].p(c,f):(re(),M(a[u],1,1,()=>{a[u]=null}),se(),i=a[t],i?i.p(c,f):(i=a[t]=o[t](c),i.c()),O(i,1),i.m(e,null)),(!s||f[0]&4096&&r!==(r="autocomplete "+c[12]))&&_(e,"class",r)},i(c){s||(O(i),s=!0)},o(c){M(i),s=!1},d(c){c&&w(e),a[t].d()}}}function Yl(n,e,t){let i,r,s,o,a,l,c,f,u,d;_e(n,Ri,V=>t(29,d=V));const m=Dn();let{input:v=void 0}=e,{options:y=[]}=e,{limit:p=void 0}=e,{allowlist:g=[]}=e,{denylist:h=[]}=e,{emptyState:b="No Results Found."}=e,{regionNav:I=""}=e,{regionList:E="list-nav"}=e,{regionItem:k=""}=e,{regionButton:C="w-full"}=e,{regionEmpty:S="text-center"}=e,{transitions:L=!d}=e,{transitionIn:A=ur}=e,{transitionInParams:K={duration:200}}=e,{transitionOut:G=ur}=e,{transitionOutParams:x={duration:200}}=e;function J(V,H){let U=[...y];V.length&&(U=U.filter(Q=>V.includes(Q.value))),H.length&&(U=U.filter(Q=>!H.includes(Q.value))),!V.length&&!H.length&&(U=y),t(25,i=U)}function oe(){let V=[...i];return V=V.filter(H=>{const U=String(v).toLowerCase().trim();if(JSON.stringify([H.label,H.value,H.keywords]).toLowerCase().includes(U))return H}),V}function ie(V){m("selection",V)}function me(V){Y.call(this,n,V)}function Ie(V){Y.call(this,n,V)}const pe=V=>ie(V);return n.$$set=V=>{t(33,e=ae(ae({},e),fe(V))),"input"in V&&t(15,v=V.input),"options"in V&&t(16,y=V.options),"limit"in V&&t(17,p=V.limit),"allowlist"in V&&t(18,g=V.allowlist),"denylist"in V&&t(19,h=V.denylist),"emptyState"in V&&t(0,b=V.emptyState),"regionNav"in V&&t(20,I=V.regionNav),"regionList"in V&&t(21,E=V.regionList),"regionItem"in V&&t(22,k=V.regionItem),"regionButton"in V&&t(23,C=V.regionButton),"regionEmpty"in V&&t(24,S=V.regionEmpty),"transitions"in V&&t(1,L=V.transitions),"transitionIn"in V&&t(2,A=V.transitionIn),"transitionInParams"in V&&t(3,K=V.transitionInParams),"transitionOut"in V&&t(4,G=V.transitionOut),"transitionOutParams"in V&&t(5,x=V.transitionOutParams)},n.$$.update=()=>{n.$$.dirty[0]&65536&&t(25,i=y),n.$$.dirty[0]&786432&&J(g,h),n.$$.dirty[0]&33587200&&t(6,r=v?oe():i),n.$$.dirty[0]&131136&&t(13,s=p!==void 0?p:r.length),t(12,o=`${e.class??""}`),n.$$.dirty[0]&1048576&&t(11,a=`${I}`),n.$$.dirty[0]&2097152&&t(10,l=`${E}`),n.$$.dirty[0]&4194304&&t(9,c=`${k}`),n.$$.dirty[0]&8388608&&t(8,f=`${C}`),n.$$.dirty[0]&16777216&&t(7,u=`${S}`)},e=fe(e),[b,L,A,K,G,x,r,u,f,c,l,a,o,s,ie,v,y,p,g,h,I,E,k,C,S,i,me,Ie,pe]}class Xl extends de{constructor(e){super(),he(this,e,Yl,Jl,ue,{input:15,options:16,limit:17,allowlist:18,denylist:19,emptyState:0,regionNav:20,regionList:21,regionItem:22,regionButton:23,regionEmpty:24,transitions:1,transitionIn:2,transitionInParams:3,transitionOut:4,transitionOutParams:5},null,[-1,-1])}}function Ql(n){let e,t,i=String(n[1]).substring(0,2).toUpperCase()+"",r,s;return{c(){e=gn("svg"),t=gn("text"),r=le(i),this.h()},l(o){e=pn(o,"svg",{class:!0,viewBox:!0});var a=P(e);t=pn(a,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var l=P(t);r=ce(l,i),l.forEach(w),a.forEach(w),this.h()},h(){_(t,"x","50%"),_(t,"y","50%"),_(t,"dominant-baseline","central"),_(t,"text-anchor","middle"),_(t,"font-weight","bold"),_(t,"font-size",150),_(t,"class",s="avatar-text "+n[2]),_(e,"class","avatar-initials w-full h-full"),_(e,"viewBox","0 0 512 512")},m(o,a){F(o,e,a),T(e,t),T(t,r)},p(o,a){a&2&&i!==(i=String(o[1]).substring(0,2).toUpperCase()+"")&&ve(r,i),a&4&&s!==(s="avatar-text "+o[2])&&_(t,"class",s)},d(o){o&&w(e)}}}function Zl(n){let e,t,i,r,s,o,a,l,c=[{class:t="avatar-image "+tc},{style:i=n[8].style??""},{src:r=n[0]},{alt:s=n[8].alt||""},n[7]()],f={};for(let u=0;u<c.length;u+=1)f=ae(f,c[u]);return{c(){e=R("img"),this.h()},l(u){e=D(u,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){Dt(e,f)},m(u,d){F(u,e,d),a||(l=[On(o=n[4].call(null,e,n[5])),j(e,"error",n[19])],a=!0)},p(u,d){Dt(e,f=zt(c,[{class:t},d&256&&i!==(i=u[8].style??"")&&{style:i},d&1&&!oi(e.src,r=u[0])&&{src:r},d&256&&s!==(s=u[8].alt||"")&&{alt:s},u[7]()])),o&&wi(o.update)&&d&32&&o.update.call(null,u[5])},d(u){u&&w(e),a=!1,Re(l)}}}function $l(n){let e,t,i,r;function s(l,c){return l[0]?Zl:Ql}let o=s(n),a=o(n);return{c(){e=R("figure"),a.c(),this.h()},l(l){e=D(l,"FIGURE",{class:!0,"data-testid":!0});var c=P(e);a.l(c),c.forEach(w),this.h()},h(){_(e,"class",t="avatar "+n[6]),_(e,"data-testid","avatar")},m(l,c){F(l,e,c),a.m(e,null),i||(r=[j(e,"click",n[15]),j(e,"keydown",n[16]),j(e,"keyup",n[17]),j(e,"keypress",n[18])],i=!0)},p(l,[c]){o===(o=s(l))&&a?a.p(l,c):(a.d(1),a=o(l),a&&(a.c(),a.m(e,null))),c&64&&t!==(t="avatar "+l[6])&&_(e,"class",t)},i:ne,o:ne,d(l){l&&w(e),a.d(),i=!1,Re(r)}}}let ec="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",tc="w-full h-full object-cover";function nc(n,e,t){let i;const r=["initials","fill","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let s=Rt(e,r),{initials:o="AB"}=e,{fill:a="fill-token"}=e,{src:l=""}=e,{fallback:c=""}=e,{action:f=()=>{}}=e,{actionParams:u=""}=e,{background:d="bg-surface-400-500-token"}=e,{width:m="w-16"}=e,{border:v=""}=e,{rounded:y="rounded-full"}=e,{shadow:p=""}=e,{cursor:g=""}=e;function h(){return delete s.class,s}function b(S){Y.call(this,n,S)}function I(S){Y.call(this,n,S)}function E(S){Y.call(this,n,S)}function k(S){Y.call(this,n,S)}const C=()=>t(0,l=c);return n.$$set=S=>{t(8,e=ae(ae({},e),fe(S))),t(20,s=Rt(e,r)),"initials"in S&&t(1,o=S.initials),"fill"in S&&t(2,a=S.fill),"src"in S&&t(0,l=S.src),"fallback"in S&&t(3,c=S.fallback),"action"in S&&t(4,f=S.action),"actionParams"in S&&t(5,u=S.actionParams),"background"in S&&t(9,d=S.background),"width"in S&&t(10,m=S.width),"border"in S&&t(11,v=S.border),"rounded"in S&&t(12,y=S.rounded),"shadow"in S&&t(13,p=S.shadow),"cursor"in S&&t(14,g=S.cursor)},n.$$.update=()=>{t(6,i=`${ec} ${d} ${m} ${v} ${y} ${p} ${g} ${e.class??""}`)},e=fe(e),[l,o,a,c,f,u,i,h,e,d,m,v,y,p,g,b,I,E,k,C]}class no extends de{constructor(e){super(),he(this,e,nc,$l,ue,{initials:1,fill:2,src:0,fallback:3,action:4,actionParams:5,background:9,width:10,border:11,rounded:12,shadow:13,cursor:14})}}function io(n,{from:e,to:t},i={}){const r=getComputedStyle(n),s=r.transform==="none"?"":r.transform,[o,a]=r.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/t.width-(t.left+o),c=e.top+e.height*a/t.height-(t.top+a),{delay:f=0,duration:u=m=>Math.sqrt(m)*120,easing:d=Pn}=i;return{delay:f,duration:wi(u)?u(Math.sqrt(l*l+c*c)):u,easing:d,css:(m,v)=>{const y=v*l,p=v*c,g=m+v*e.width/t.width,h=m+v*e.height/t.height;return`transform: ${s} translate(${y}px, ${p}px) scale(${g}, ${h});`}}}function Lr(n){let e,t;const i=n[22].default,r=ke(i,n,n[21],null);return{c(){e=R("div"),r&&r.c(),this.h()},l(s){e=D(s,"DIV",{class:!0});var o=P(e);r&&r.l(o),o.forEach(w),this.h()},h(){_(e,"class","slide-toggle-text ml-3")},m(s,o){F(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o[0]&2097152)&&Te(r,i,s,s[21],t?Ae(i,s[21],o,null):Se(s[21]),null)},i(s){t||(O(r,s),t=!0)},o(s){M(r,s),t=!1},d(s){s&&w(e),r&&r.d(s)}}}function ic(n){let e,t,i,r,s,o,a,l,c,f,u,d,m,v,y,p=[{type:"checkbox"},{class:"slide-toggle-input hidden"},{name:n[1]},n[8](),{disabled:r=n[9].disabled}],g={};for(let b=0;b<p.length;b+=1)g=ae(g,p[b]);let h=n[10].default&&Lr(n);return{c(){e=R("div"),t=R("label"),i=R("input"),s=z(),o=R("div"),a=R("div"),f=z(),h&&h.c(),this.h()},l(b){e=D(b,"DIV",{id:!0,class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-checked":!0,tabindex:!0});var I=P(e);t=D(I,"LABEL",{class:!0});var E=P(t);i=D(E,"INPUT",{type:!0,class:!0,name:!0}),s=W(E),o=D(E,"DIV",{class:!0});var k=P(o);a=D(k,"DIV",{class:!0}),P(a).forEach(w),k.forEach(w),f=W(E),h&&h.l(E),E.forEach(w),I.forEach(w),this.h()},h(){Dt(i,g),_(a,"class",l="slide-toggle-thumb "+n[3]),et(a,"cursor-not-allowed",n[9].disabled),_(o,"class",c="slide-toggle-track "+n[4]),et(o,"cursor-not-allowed",n[9].disabled),_(t,"class",u="slide-toggle-label "+n[5]),_(e,"id",n[2]),_(e,"class",d="slide-toggle "+n[6]),_(e,"data-testid","slide-toggle"),_(e,"role","switch"),_(e,"aria-label",n[2]),_(e,"aria-checked",n[0]),_(e,"tabindex","0")},m(b,I){F(b,e,I),T(e,t),T(t,i),i.autofocus&&i.focus(),i.checked=n[0],T(t,s),T(t,o),T(o,a),T(t,f),h&&h.m(t,null),m=!0,v||(y=[j(i,"change",n[31]),j(i,"click",n[23]),j(i,"keydown",n[24]),j(i,"keyup",n[25]),j(i,"keypress",n[26]),j(i,"mouseover",n[27]),j(i,"change",n[28]),j(i,"focus",n[29]),j(i,"blur",n[30]),j(e,"keydown",n[7])],v=!0)},p(b,I){Dt(i,g=zt(p,[{type:"checkbox"},{class:"slide-toggle-input hidden"},(!m||I[0]&2)&&{name:b[1]},b[8](),(!m||I[0]&512&&r!==(r=b[9].disabled))&&{disabled:r}])),I[0]&1&&(i.checked=b[0]),(!m||I[0]&8&&l!==(l="slide-toggle-thumb "+b[3]))&&_(a,"class",l),(!m||I[0]&520)&&et(a,"cursor-not-allowed",b[9].disabled),(!m||I[0]&16&&c!==(c="slide-toggle-track "+b[4]))&&_(o,"class",c),(!m||I[0]&528)&&et(o,"cursor-not-allowed",b[9].disabled),b[10].default?h?(h.p(b,I),I[0]&1024&&O(h,1)):(h=Lr(b),h.c(),O(h,1),h.m(t,null)):h&&(re(),M(h,1,1,()=>{h=null}),se()),(!m||I[0]&32&&u!==(u="slide-toggle-label "+b[5]))&&_(t,"class",u),(!m||I[0]&4)&&_(e,"id",b[2]),(!m||I[0]&64&&d!==(d="slide-toggle "+b[6]))&&_(e,"class",d),(!m||I[0]&4)&&_(e,"aria-label",b[2]),(!m||I[0]&1)&&_(e,"aria-checked",b[0])},i(b){m||(O(h),m=!0)},o(b){M(h),m=!1},d(b){b&&w(e),h&&h.d(),v=!1,Re(y)}}}const rc="inline-block",sc="unstyled flex items-center",oc="flex transition-all duration-[200ms] cursor-pointer",ac="w-[50%] h-full scale-[0.8] transition-all duration-[200ms] shadow";function lc(n,e,t){let i,r,s,o,a,l,c,f;const u=["name","checked","size","background","active","border","rounded","label"];let d=Rt(e,u),{$$slots:m={},$$scope:v}=e;const y=Ii(m),p=Dn();let{name:g}=e,{checked:h=!1}=e,{size:b="md"}=e,{background:I="bg-surface-400 dark:bg-surface-700"}=e,{active:E="bg-surface-900 dark:bg-surface-300"}=e,{border:k=""}=e,{rounded:C="rounded-full"}=e,{label:S=""}=e,L;switch(b){case"sm":L="w-12 h-6";break;case"lg":L="w-20 h-10";break;default:L="w-16 h-8"}function A(H){["Enter","Space"].includes(H.code)&&(H.preventDefault(),p("keyup",H),H.currentTarget.firstChild.click())}function K(){return delete d.class,d}function G(H){Y.call(this,n,H)}function x(H){Y.call(this,n,H)}function J(H){Y.call(this,n,H)}function oe(H){Y.call(this,n,H)}function ie(H){Y.call(this,n,H)}function me(H){Y.call(this,n,H)}function Ie(H){Y.call(this,n,H)}function pe(H){Y.call(this,n,H)}function V(){h=this.checked,t(0,h)}return n.$$set=H=>{t(9,e=ae(ae({},e),fe(H))),t(33,d=Rt(e,u)),"name"in H&&t(1,g=H.name),"checked"in H&&t(0,h=H.checked),"size"in H&&t(11,b=H.size),"background"in H&&t(12,I=H.background),"active"in H&&t(13,E=H.active),"border"in H&&t(14,k=H.border),"rounded"in H&&t(15,C=H.rounded),"label"in H&&t(2,S=H.label),"$$scope"in H&&t(21,v=H.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&12289&&t(19,i=h?E:`${I} cursor-pointer`),n.$$.dirty[0]&1&&t(18,r=h?"bg-white/75":"bg-white"),n.$$.dirty[0]&1&&t(17,s=h?"translate-x-full":""),t(20,o=e.disabled===!0?"opacity-50":"hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer"),t(6,a=`${rc} ${C} ${o} ${e.class??""}`),n.$$.dirty[0]&638976&&t(4,c=`${oc} ${k} ${C} ${L} ${i}`),n.$$.dirty[0]&425984&&t(3,f=`${ac} ${C} ${r} ${s}`)},t(5,l=`${sc}`),e=fe(e),[h,g,S,f,c,l,a,A,K,e,y,b,I,E,k,C,L,s,r,i,o,v,m,G,x,J,oe,ie,me,Ie,pe,V]}class cc extends de{constructor(e){super(),he(this,e,lc,ic,ue,{name:1,checked:0,size:11,background:12,active:13,border:14,rounded:15,label:2},null,[-1,-1])}}function Nr(n){let e=n[13],t,i,r=Vr(n);return{c(){r.c(),t=ye()},l(s){r.l(s),t=ye()},m(s,o){r.m(s,o),F(s,t,o),i=!0},p(s,o){o[0]&8192&&ue(e,e=s[13])?(re(),M(r,1,1,ne),se(),r=Vr(s),r.c(),O(r,1),r.m(t.parentNode,t)):r.p(s,o)},i(s){i||(O(r),i=!0)},o(s){M(r),i=!1},d(s){s&&w(t),r.d(s)}}}function uc(n){var c,f;let e,t,i,r,s;const o=[(c=n[15])==null?void 0:c.props,{parent:n[16]}];var a=(f=n[15])==null?void 0:f.ref;function l(u,d){var v;let m={$$slots:{default:[dc]},$$scope:{ctx:u}};if(d!==void 0&&d[0]&98304)m=zt(o,[d[0]&32768&&sr((v=u[15])==null?void 0:v.props),d[0]&65536&&{parent:u[16]}]);else for(let y=0;y<o.length;y+=1)m=ae(m,o[y]);return{props:m}}return a&&(t=tr(a,l(n))),{c(){e=R("div"),t&&Z(t.$$.fragment),this.h()},l(u){e=D(u,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var d=P(e);t&&te(t.$$.fragment,d),d.forEach(w),this.h()},h(){var u;_(e,"class",i="modal contents "+(((u=n[13][0])==null?void 0:u.modalClasses)??"")),_(e,"data-testid","modal-component"),_(e,"role","dialog"),_(e,"aria-modal","true"),_(e,"aria-label",r=n[13][0].title??"")},m(u,d){F(u,e,d),t&&$(t,e,null),s=!0},p(u,d){var m,v,y;if(d[0]&32768&&a!==(a=(m=u[15])==null?void 0:m.ref)){if(t){re();const p=t;M(p.$$.fragment,1,0,()=>{ee(p,1)}),se()}a?(t=tr(a,l(u,d)),Z(t.$$.fragment),O(t.$$.fragment,1),$(t,e,null)):t=null}else if(a){const p=d[0]&98304?zt(o,[d[0]&32768&&sr((v=u[15])==null?void 0:v.props),d[0]&65536&&{parent:u[16]}]):{};d[0]&32768|d[1]&65536&&(p.$$scope={dirty:d,ctx:u}),t.$set(p)}(!s||d[0]&8192&&i!==(i="modal contents "+(((y=u[13][0])==null?void 0:y.modalClasses)??"")))&&_(e,"class",i),(!s||d[0]&8192&&r!==(r=u[13][0].title??""))&&_(e,"aria-label",r)},i(u){s||(t&&O(t.$$.fragment,u),s=!0)},o(u){t&&M(t.$$.fragment,u),s=!1},d(u){u&&w(e),t&&ee(t)}}}function fc(n){var m,v,y,p;let e,t,i,r,s,o,a=((m=n[13][0])==null?void 0:m.title)&&Ur(n),l=((v=n[13][0])==null?void 0:v.body)&&Fr(n),c=((y=n[13][0])==null?void 0:y.image)&&typeof((p=n[13][0])==null?void 0:p.image)=="string"&&Br(n);function f(g,h){if(g[13][0].type==="alert")return gc;if(g[13][0].type==="confirm")return mc;if(g[13][0].type==="prompt")return hc}let u=f(n),d=u&&u(n);return{c(){e=R("div"),a&&a.c(),t=z(),l&&l.c(),i=z(),c&&c.c(),r=z(),d&&d.c(),this.h()},l(g){e=D(g,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var h=P(e);a&&a.l(h),t=W(h),l&&l.l(h),i=W(h),c&&c.l(h),r=W(h),d&&d.l(h),h.forEach(w),this.h()},h(){_(e,"class",s="modal "+n[17]),_(e,"data-testid","modal"),_(e,"role","dialog"),_(e,"aria-modal","true"),_(e,"aria-label",o=n[13][0].title??"")},m(g,h){F(g,e,h),a&&a.m(e,null),T(e,t),l&&l.m(e,null),T(e,i),c&&c.m(e,null),T(e,r),d&&d.m(e,null)},p(g,h){var b,I,E,k;(b=g[13][0])!=null&&b.title?a?a.p(g,h):(a=Ur(g),a.c(),a.m(e,t)):a&&(a.d(1),a=null),(I=g[13][0])!=null&&I.body?l?l.p(g,h):(l=Fr(g),l.c(),l.m(e,i)):l&&(l.d(1),l=null),(E=g[13][0])!=null&&E.image&&typeof((k=g[13][0])==null?void 0:k.image)=="string"?c?c.p(g,h):(c=Br(g),c.c(),c.m(e,r)):c&&(c.d(1),c=null),u===(u=f(g))&&d?d.p(g,h):(d&&d.d(1),d=u&&u(g),d&&(d.c(),d.m(e,null))),h[0]&131072&&s!==(s="modal "+g[17])&&_(e,"class",s),h[0]&8192&&o!==(o=g[13][0].title??"")&&_(e,"aria-label",o)},i:ne,o:ne,d(g){g&&w(e),a&&a.d(),l&&l.d(),c&&c.d(),d&&d.d()}}}function Mr(n){var r;let e,t=((r=n[15])==null?void 0:r.slot)+"",i;return{c(){e=new wt(!1),i=ye(),this.h()},l(s){e=Et(s,!1),i=ye(),this.h()},h(){e.a=i},m(s,o){e.m(t,s,o),F(s,i,o)},p(s,o){var a;o[0]&32768&&t!==(t=((a=s[15])==null?void 0:a.slot)+"")&&e.p(t)},d(s){s&&(w(i),e.d())}}}function dc(n){var i;let e,t=((i=n[15])==null?void 0:i.slot)&&Mr(n);return{c(){t&&t.c(),e=ye()},l(r){t&&t.l(r),e=ye()},m(r,s){t&&t.m(r,s),F(r,e,s)},p(r,s){var o;(o=r[15])!=null&&o.slot?t?t.p(r,s):(t=Mr(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){r&&w(e),t&&t.d(r)}}}function Ur(n){let e,t,i=n[13][0].title+"",r;return{c(){e=R("header"),t=new wt(!1),this.h()},l(s){e=D(s,"HEADER",{class:!0});var o=P(e);t=Et(o,!1),o.forEach(w),this.h()},h(){t.a=null,_(e,"class",r="modal-header "+n[5])},m(s,o){F(s,e,o),t.m(i,e)},p(s,o){o[0]&8192&&i!==(i=s[13][0].title+"")&&t.p(i),o[0]&32&&r!==(r="modal-header "+s[5])&&_(e,"class",r)},d(s){s&&w(e)}}}function Fr(n){let e,t,i=n[13][0].body+"",r;return{c(){e=R("article"),t=new wt(!1),this.h()},l(s){e=D(s,"ARTICLE",{class:!0});var o=P(e);t=Et(o,!1),o.forEach(w),this.h()},h(){t.a=null,_(e,"class",r="modal-body "+n[6])},m(s,o){F(s,e,o),t.m(i,e)},p(s,o){o[0]&8192&&i!==(i=s[13][0].body+"")&&t.p(i),o[0]&64&&r!==(r="modal-body "+s[6])&&_(e,"class",r)},d(s){s&&w(e)}}}function Br(n){let e,t;return{c(){e=R("img"),this.h()},l(i){e=D(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){var i;_(e,"class","modal-image "+yc),oi(e.src,t=(i=n[13][0])==null?void 0:i.image)||_(e,"src",t),_(e,"alt","Modal")},m(i,r){F(i,e,r)},p(i,r){var s;r[0]&8192&&!oi(e.src,t=(s=i[13][0])==null?void 0:s.image)&&_(e,"src",t)},d(i){i&&w(e)}}}function hc(n){let e,t,i,r,s,o,a,l,c,f,u,d,m,v,y=[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},n[13][0].valueAttr],p={};for(let g=0;g<y.length;g+=1)p=ae(p,y[g]);return{c(){e=R("form"),t=R("input"),i=z(),r=R("footer"),s=R("button"),o=le(n[0]),l=z(),c=R("button"),f=le(n[2]),this.h()},l(g){e=D(g,"FORM",{class:!0});var h=P(e);t=D(h,"INPUT",{class:!0,name:!0,type:!0}),i=W(h),r=D(h,"FOOTER",{class:!0});var b=P(r);s=D(b,"BUTTON",{type:!0,class:!0});var I=P(s);o=ce(I,n[0]),I.forEach(w),l=W(b),c=D(b,"BUTTON",{type:!0,class:!0});var E=P(c);f=ce(E,n[2]),E.forEach(w),b.forEach(w),h.forEach(w),this.h()},h(){Dt(t,p),_(s,"type","button"),_(s,"class",a="btn "+n[3]),_(c,"type","submit"),_(c,"class",u="btn "+n[4]),_(r,"class",d="modal-footer "+n[7]),_(e,"class","space-y-4")},m(g,h){F(g,e,h),T(e,t),t.autofocus&&t.focus(),je(t,n[14]),T(e,i),T(e,r),T(r,s),T(s,o),T(r,l),T(r,c),T(c,f),m||(v=[j(t,"input",n[41]),j(s,"click",n[23]),j(e,"submit",n[25])],m=!0)},p(g,h){Dt(t,p=zt(y,[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},h[0]&8192&&g[13][0].valueAttr])),h[0]&16384&&t.value!==g[14]&&je(t,g[14]),h[0]&1&&ve(o,g[0]),h[0]&8&&a!==(a="btn "+g[3])&&_(s,"class",a),h[0]&4&&ve(f,g[2]),h[0]&16&&u!==(u="btn "+g[4])&&_(c,"class",u),h[0]&128&&d!==(d="modal-footer "+g[7])&&_(r,"class",d)},d(g){g&&w(e),m=!1,Re(v)}}}function mc(n){let e,t,i,r,s,o,a,l,c,f,u;return{c(){e=R("footer"),t=R("button"),i=le(n[0]),s=z(),o=R("button"),a=le(n[1]),this.h()},l(d){e=D(d,"FOOTER",{class:!0});var m=P(e);t=D(m,"BUTTON",{type:!0,class:!0});var v=P(t);i=ce(v,n[0]),v.forEach(w),s=W(m),o=D(m,"BUTTON",{type:!0,class:!0});var y=P(o);a=ce(y,n[1]),y.forEach(w),m.forEach(w),this.h()},h(){_(t,"type","button"),_(t,"class",r="btn "+n[3]),_(o,"type","button"),_(o,"class",l="btn "+n[4]),_(e,"class",c="modal-footer "+n[7])},m(d,m){F(d,e,m),T(e,t),T(t,i),T(e,s),T(e,o),T(o,a),f||(u=[j(t,"click",n[23]),j(o,"click",n[24])],f=!0)},p(d,m){m[0]&1&&ve(i,d[0]),m[0]&8&&r!==(r="btn "+d[3])&&_(t,"class",r),m[0]&2&&ve(a,d[1]),m[0]&16&&l!==(l="btn "+d[4])&&_(o,"class",l),m[0]&128&&c!==(c="modal-footer "+d[7])&&_(e,"class",c)},d(d){d&&w(e),f=!1,Re(u)}}}function gc(n){let e,t,i,r,s,o,a;return{c(){e=R("footer"),t=R("button"),i=le(n[0]),this.h()},l(l){e=D(l,"FOOTER",{class:!0});var c=P(e);t=D(c,"BUTTON",{type:!0,class:!0});var f=P(t);i=ce(f,n[0]),f.forEach(w),c.forEach(w),this.h()},h(){_(t,"type","button"),_(t,"class",r="btn "+n[3]),_(e,"class",s="modal-footer "+n[7])},m(l,c){F(l,e,c),T(e,t),T(t,i),o||(a=j(t,"click",n[23]),o=!0)},p(l,c){c[0]&1&&ve(i,l[0]),c[0]&8&&r!==(r="btn "+l[3])&&_(t,"class",r),c[0]&128&&s!==(s="modal-footer "+l[7])&&_(e,"class",s)},d(l){l&&w(e),o=!1,a()}}}function Vr(n){let e,t,i,r,s,o,a,l,c,f,u,d;const m=[fc,uc],v=[];function y(p,g){return p[13][0].type!=="component"?0:1}return i=y(n),r=v[i]=m[i](n),{c(){e=R("div"),t=R("div"),r.c(),this.h()},l(p){e=D(p,"DIV",{class:!0,"data-testid":!0});var g=P(e);t=D(g,"DIV",{class:!0});var h=P(t);r.l(h),h.forEach(w),g.forEach(w),this.h()},h(){_(t,"class",s="modal-transition "+n[18]),_(e,"class",l="modal-backdrop "+n[19]),_(e,"data-testid","modal-backdrop")},m(p,g){F(p,e,g),T(e,t),v[i].m(t,null),f=!0,u||(d=[j(e,"mousedown",n[21]),j(e,"mouseup",n[22]),j(e,"touchstart",n[39],{passive:!0}),j(e,"touchend",n[40],{passive:!0}),On(bl.call(null,e,!0))],u=!0)},p(p,g){n=p;let h=i;i=y(n),i===h?v[i].p(n,g):(re(),M(v[h],1,1,()=>{v[h]=null}),se(),r=v[i],r?r.p(n,g):(r=v[i]=m[i](n),r.c()),O(r,1),r.m(t,null)),(!f||g[0]&262144&&s!==(s="modal-transition "+n[18]))&&_(t,"class",s),(!f||g[0]&524288&&l!==(l="modal-backdrop "+n[19]))&&_(e,"class",l)},i(p){f||(O(r),st(()=>{f&&(a&&a.end(1),o=ki(t,tt,{transition:n[9],params:n[10],enabled:n[8]}),o.start())}),st(()=>{f&&(c||(c=Ot(e,tt,{transition:cr,params:{duration:150},enabled:n[8]},!0)),c.run(1))}),f=!0)},o(p){M(r),o&&o.invalidate(),a=Ti(t,tt,{transition:n[11],params:n[12],enabled:n[8]}),c||(c=Ot(e,tt,{transition:cr,params:{duration:150},enabled:n[8]},!1)),c.run(0),f=!1},d(p){p&&w(e),v[i].d(),p&&a&&a.end(),p&&c&&c.end(),u=!1,Re(d)}}}function pc(n){let e,t,i,r,s=n[13].length>0&&Nr(n);return{c(){s&&s.c(),e=ye()},l(o){s&&s.l(o),e=ye()},m(o,a){s&&s.m(o,a),F(o,e,a),t=!0,i||(r=j(window,"keydown",n[26]),i=!0)},p(o,a){o[13].length>0?s?(s.p(o,a),a[0]&8192&&O(s,1)):(s=Nr(o),s.c(),O(s,1),s.m(e.parentNode,e)):s&&(re(),M(s,1,1,()=>{s=null}),se())},i(o){t||(O(s),t=!0)},o(o){M(s),t=!1},d(o){o&&w(e),s&&s.d(o),i=!1,r()}}}const _c="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto",bc="w-full h-fit min-h-full p-4 overflow-y-auto flex justify-center",vc="block overflow-y-auto",yc="w-full h-auto";function Ic(n,e,t){let i,r,s,o,a,l,c;_e(n,Ri,N=>t(43,c=N));const f=Dn();let{position:u="items-center"}=e,{components:d={}}=e,{background:m="bg-surface-100-800-token"}=e,{width:v="w-modal"}=e,{height:y="h-auto"}=e,{padding:p="p-4"}=e,{spacing:g="space-y-4"}=e,{rounded:h="rounded-container-token"}=e,{shadow:b="shadow-xl"}=e,{zIndex:I="z-[999]"}=e,{buttonNeutral:E="variant-ghost-surface"}=e,{buttonPositive:k="variant-filled"}=e,{buttonTextCancel:C="Cancel"}=e,{buttonTextConfirm:S="Confirm"}=e,{buttonTextSubmit:L="Submit"}=e,{regionBackdrop:A="bg-surface-backdrop-token"}=e,{regionHeader:K="text-2xl font-bold"}=e,{regionBody:G="max-h-[200px] overflow-hidden"}=e,{regionFooter:x="flex justify-end space-x-2"}=e,{transitions:J=!c}=e,{transitionIn:oe=Pt}=e,{transitionInParams:ie={duration:150,opacity:0,x:0,y:100}}=e,{transitionOut:me=Pt}=e,{transitionOutParams:Ie={duration:150,opacity:0,x:0,y:100}}=e,pe;const V={buttonTextCancel:C,buttonTextConfirm:S,buttonTextSubmit:L};let H,U=!1;const Q=Ci();_e(n,Q,N=>t(13,l=N)),Q.subscribe(N=>{N.length&&(N[0].type==="prompt"&&t(14,pe=N[0].value),t(0,C=N[0].buttonTextCancel||V.buttonTextCancel),t(1,S=N[0].buttonTextConfirm||V.buttonTextConfirm),t(2,L=N[0].buttonTextSubmit||V.buttonTextSubmit),t(15,H=typeof N[0].component=="string"?d[N[0].component]:N[0].component))});function xe(N){if(!(N.target instanceof Element))return;const Je=N.target.classList;(Je.contains("modal-backdrop")||Je.contains("modal-transition"))&&(U=!0)}function zn(N){if(!(N.target instanceof Element))return;const Je=N.target.classList;(Je.contains("modal-backdrop")||Je.contains("modal-transition"))&&U&&(l[0].response&&l[0].response(void 0),Q.close(),f("backdrop",N)),U=!1}function Ft(){l[0].response&&l[0].response(!1),Q.close()}function Wn(){l[0].response&&l[0].response(!0),Q.close()}function qn(N){N.preventDefault(),l[0].response&&l[0].response(pe),Q.close()}function Kn(N){l.length&&N.code==="Escape"&&Ft()}function B(N){Y.call(this,n,N)}function lt(N){Y.call(this,n,N)}function Bt(){pe=this.value,t(14,pe)}return n.$$set=N=>{t(46,e=ae(ae({},e),fe(N))),"position"in N&&t(27,u=N.position),"components"in N&&t(28,d=N.components),"background"in N&&t(29,m=N.background),"width"in N&&t(30,v=N.width),"height"in N&&t(31,y=N.height),"padding"in N&&t(32,p=N.padding),"spacing"in N&&t(33,g=N.spacing),"rounded"in N&&t(34,h=N.rounded),"shadow"in N&&t(35,b=N.shadow),"zIndex"in N&&t(36,I=N.zIndex),"buttonNeutral"in N&&t(3,E=N.buttonNeutral),"buttonPositive"in N&&t(4,k=N.buttonPositive),"buttonTextCancel"in N&&t(0,C=N.buttonTextCancel),"buttonTextConfirm"in N&&t(1,S=N.buttonTextConfirm),"buttonTextSubmit"in N&&t(2,L=N.buttonTextSubmit),"regionBackdrop"in N&&t(37,A=N.regionBackdrop),"regionHeader"in N&&t(5,K=N.regionHeader),"regionBody"in N&&t(6,G=N.regionBody),"regionFooter"in N&&t(7,x=N.regionFooter),"transitions"in N&&t(8,J=N.transitions),"transitionIn"in N&&t(9,oe=N.transitionIn),"transitionInParams"in N&&t(10,ie=N.transitionInParams),"transitionOut"in N&&t(11,me=N.transitionOut),"transitionOutParams"in N&&t(12,Ie=N.transitionOutParams)},n.$$.update=()=>{var N,Je,$i;n.$$.dirty[0]&134225920&&t(38,i=((N=l[0])==null?void 0:N.position)??u),t(19,r=`${_c} ${A} ${I} ${e.class??""} ${((Je=l[0])==null?void 0:Je.backdropClasses)??""}`),n.$$.dirty[1]&128&&t(18,s=`${bc} ${i??""}`),n.$$.dirty[0]&1610620928|n.$$.dirty[1]&31&&t(17,o=`${vc} ${m} ${v} ${y} ${p} ${g} ${h} ${b} ${(($i=l[0])==null?void 0:$i.modalClasses)??""}`),n.$$.dirty[0]&1744830719|n.$$.dirty[1]&95&&t(16,a={position:u,background:m,width:v,height:y,padding:p,spacing:g,rounded:h,shadow:b,buttonNeutral:E,buttonPositive:k,buttonTextCancel:C,buttonTextConfirm:S,buttonTextSubmit:L,regionBackdrop:A,regionHeader:K,regionBody:G,regionFooter:x,onClose:Ft})},e=fe(e),[C,S,L,E,k,K,G,x,J,oe,ie,me,Ie,l,pe,H,a,o,s,r,Q,xe,zn,Ft,Wn,qn,Kn,u,d,m,v,y,p,g,h,b,I,A,i,B,lt,Bt]}class wc extends de{constructor(e){super(),he(this,e,Ic,pc,ue,{position:27,components:28,background:29,width:30,height:31,padding:32,spacing:33,rounded:34,shadow:35,zIndex:36,buttonNeutral:3,buttonPositive:4,buttonTextCancel:0,buttonTextConfirm:1,buttonTextSubmit:2,regionBackdrop:37,regionHeader:5,regionBody:6,regionFooter:7,transitions:8,transitionIn:9,transitionInParams:10,transitionOut:11,transitionOutParams:12},null,[-1,-1])}}function Ec(n){let e,t=`<script nonce="%sveltekit.nonce%">(${pl.toString()})();<\/script>`,i,r,s,o,a,l,c,f,u,d,m,v,y;return{c(){e=new wt(!1),i=ye(),r=z(),s=R("div"),o=R("div"),a=gn("svg"),l=gn("path"),this.h()},l(p){const g=Ba("svelte-gewkj4",document.head);e=Et(g,!1),i=ye(),g.forEach(w),r=W(p),s=D(p,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var h=P(s);o=D(h,"DIV",{class:!0});var b=P(o);a=pn(b,"svg",{class:!0,xmlns:!0,viewBox:!0});var I=P(a);l=pn(I,"path",{d:!0}),P(l).forEach(w),I.forEach(w),b.forEach(w),h.forEach(w),this.h()},h(){e.a=i,_(l,"d",c=n[0]?n[4].sun:n[4].moon),_(a,"class",f="lightswitch-icon "+n[1]),_(a,"xmlns","http://www.w3.org/2000/svg"),_(a,"viewBox","0 0 512 512"),_(o,"class",u="lightswitch-thumb "+n[2]),_(s,"class",d="lightswitch-track "+n[3]),_(s,"role","switch"),_(s,"aria-label","Light Switch"),_(s,"aria-checked",n[0]),_(s,"title",m="Toggle "+(n[0]===!0?"Dark":"Light")+" Mode"),_(s,"tabindex","0")},m(p,g){e.m(t,document.head),T(document.head,i),F(p,r,g),F(p,s,g),T(s,o),T(o,a),T(a,l),v||(y=[j(s,"click",n[5]),j(s,"click",n[18]),j(s,"keydown",Ac),j(s,"keydown",n[19]),j(s,"keyup",n[20]),j(s,"keypress",n[21])],v=!0)},p(p,[g]){g&1&&c!==(c=p[0]?p[4].sun:p[4].moon)&&_(l,"d",c),g&2&&f!==(f="lightswitch-icon "+p[1])&&_(a,"class",f),g&4&&u!==(u="lightswitch-thumb "+p[2])&&_(o,"class",u),g&8&&d!==(d="lightswitch-track "+p[3])&&_(s,"class",d),g&1&&_(s,"aria-checked",p[0]),g&1&&m!==(m="Toggle "+(p[0]===!0?"Dark":"Light")+" Mode")&&_(s,"title",m)},i:ne,o:ne,d(p){p&&(e.d(),w(r),w(s)),w(i),v=!1,Re(y)}}}const kc="cursor-pointer",Tc="aspect-square scale-[0.8] flex justify-center items-center",Sc="w-[70%] aspect-square";function Ac(n){["Enter","Space"].includes(n.code)&&(n.preventDefault(),n.currentTarget.click())}function Cc(n,e,t){let i,r,s,o,a,l,c,f;_e(n,ai,A=>t(0,f=A));let{bgLight:u="bg-surface-50"}=e,{bgDark:d="bg-surface-900"}=e,{fillLight:m="fill-surface-50"}=e,{fillDark:v="fill-surface-900"}=e,{width:y="w-12"}=e,{height:p="h-6"}=e,{ring:g="ring-[1px] ring-surface-500/30"}=e,{rounded:h="rounded-token"}=e;const b="transition-all duration-[200ms]",I={sun:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",moon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"};function E(){qs(ai,f=!f,f),gl(f),lr(f)}Ei(()=>{"modeCurrent"in localStorage||lr(ml())});function k(A){Y.call(this,n,A)}function C(A){Y.call(this,n,A)}function S(A){Y.call(this,n,A)}function L(A){Y.call(this,n,A)}return n.$$set=A=>{t(23,e=ae(ae({},e),fe(A))),"bgLight"in A&&t(6,u=A.bgLight),"bgDark"in A&&t(7,d=A.bgDark),"fillLight"in A&&t(8,m=A.fillLight),"fillDark"in A&&t(9,v=A.fillDark),"width"in A&&t(10,y=A.width),"height"in A&&t(11,p=A.height),"ring"in A&&t(12,g=A.ring),"rounded"in A&&t(13,h=A.rounded)},n.$$.update=()=>{n.$$.dirty&193&&t(17,i=f===!0?u:d),n.$$.dirty&193&&t(16,r=f===!0?d:u),n.$$.dirty&1&&t(15,s=f===!0?"translate-x-[100%]":""),n.$$.dirty&769&&t(14,o=f===!0?m:v),t(3,a=`${kc} ${b} ${y} ${p} ${g} ${h} ${i} ${e.class??""}`),n.$$.dirty&108544&&t(2,l=`${Tc} ${b} ${p} ${h} ${r} ${s}`),n.$$.dirty&16384&&t(1,c=`${Sc} ${o}`)},e=fe(e),[f,c,l,a,I,E,u,d,m,v,y,p,g,h,o,s,r,i,k,C,S,L]}class Rc extends de{constructor(e){super(),he(this,e,Cc,Ec,ue,{bgLight:6,bgDark:7,fillLight:8,fillDark:9,width:10,height:11,ring:12,rounded:13})}}function Hr(n,e,t){const i=n.slice();return i[36]=e[t],i[38]=t,i}function jr(n){let e,t,i=[],r=new Map,s,o,a,l=Ne(n[11]);const c=f=>f[36];for(let f=0;f<l.length;f+=1){let u=Hr(n,l,f),d=c(u);r.set(d,i[f]=Kr(d,u))}return{c(){e=R("div"),t=R("div");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=D(f,"DIV",{class:!0,"data-testid":!0});var u=P(e);t=D(u,"DIV",{class:!0});var d=P(t);for(let m=0;m<i.length;m+=1)i[m].l(d);d.forEach(w),u.forEach(w),this.h()},h(){_(t,"class",s="snackbar "+n[13]),_(e,"class",o="snackbar-wrapper "+n[14]),_(e,"data-testid","snackbar-wrapper")},m(f,u){F(f,e,u),T(e,t);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(t,null);a=!0},p(f,u){if(u[0]&499103){l=Ne(f[11]),re();for(let d=0;d<i.length;d+=1)i[d].r();i=Si(i,u,c,1,f,l,r,t,Gs,Kr,null,Hr);for(let d=0;d<i.length;d+=1)i[d].a();se()}(!a||u[0]&8192&&s!==(s="snackbar "+f[13]))&&_(t,"class",s),(!a||u[0]&16384&&o!==(o="snackbar-wrapper "+f[14]))&&_(e,"class",o)},i(f){if(!a){for(let u=0;u<l.length;u+=1)O(i[u]);a=!0}},o(f){for(let u=0;u<i.length;u+=1)M(i[u]);a=!1},d(f){f&&w(e);for(let u=0;u<i.length;u+=1)i[u].d()}}}function zr(n){let e,t,i=n[36].action&&Wr(n),r=!n[36].hideDismiss&&qr(n);return{c(){e=R("div"),i&&i.c(),t=z(),r&&r.c(),this.h()},l(s){e=D(s,"DIV",{class:!0});var o=P(e);i&&i.l(o),t=W(o),r&&r.l(o),o.forEach(w),this.h()},h(){_(e,"class","toast-actions "+Nc)},m(s,o){F(s,e,o),i&&i.m(e,null),T(e,t),r&&r.m(e,null)},p(s,o){s[36].action?i?i.p(s,o):(i=Wr(s),i.c(),i.m(e,t)):i&&(i.d(1),i=null),s[36].hideDismiss?r&&(r.d(1),r=null):r?r.p(s,o):(r=qr(s),r.c(),r.m(e,null))},d(s){s&&w(e),i&&i.d(),r&&r.d()}}}function Wr(n){let e,t,i=n[36].action.label+"",r,s;function o(){return n[30](n[38])}return{c(){e=R("button"),t=new wt(!1),this.h()},l(a){e=D(a,"BUTTON",{class:!0});var l=P(e);t=Et(l,!1),l.forEach(w),this.h()},h(){t.a=null,_(e,"class",n[1])},m(a,l){F(a,e,l),t.m(i,e),r||(s=j(e,"click",o),r=!0)},p(a,l){n=a,l[0]&2048&&i!==(i=n[36].action.label+"")&&t.p(i),l[0]&2&&_(e,"class",n[1])},d(a){a&&w(e),r=!1,s()}}}function qr(n){let e,t,i,r;function s(){return n[31](n[36])}return{c(){e=R("button"),t=le(n[3]),this.h()},l(o){e=D(o,"BUTTON",{class:!0,"aria-label":!0});var a=P(e);t=ce(a,n[3]),a.forEach(w),this.h()},h(){_(e,"class",n[2]),_(e,"aria-label","Dismiss toast")},m(o,a){F(o,e,a),T(e,t),i||(r=j(e,"click",s),i=!0)},p(o,a){n=o,a[0]&8&&ve(t,n[3]),a[0]&4&&_(e,"class",n[2])},d(o){o&&w(e),i=!1,r()}}}function Kr(n,e){let t,i,r,s,o=e[36].message+"",a,l,c,f,u,d,m,v=ne,y,p,g,h=(e[36].action||!e[36].hideDismiss)&&zr(e);function b(){return e[32](e[38])}function I(){return e[33](e[38])}return{key:n,first:null,c(){t=R("div"),i=R("div"),r=R("div"),s=new wt(!1),a=z(),h&&h.c(),c=z(),this.h()},l(E){t=D(E,"DIV",{role:!0,"aria-live":!0});var k=P(t);i=D(k,"DIV",{class:!0,"data-testid":!0});var C=P(i);r=D(C,"DIV",{class:!0});var S=P(r);s=Et(S,!1),S.forEach(w),a=W(C),h&&h.l(C),C.forEach(w),c=W(k),k.forEach(w),this.h()},h(){s.a=null,_(r,"class","text-base"),_(i,"class",l="toast "+e[12]+" "+(e[36].background??e[0])+" "+(e[36].classes??"")),_(i,"data-testid","toast"),_(t,"role",f=e[36].hideDismiss?"alert":"alertdialog"),_(t,"aria-live","polite"),this.first=t},m(E,k){F(E,t,k),T(t,i),T(i,r),s.m(o,r),T(i,a),h&&h.m(i,null),T(t,c),y=!0,p||(g=[j(t,"mouseenter",b),j(t,"mouseleave",I)],p=!0)},p(E,k){e=E,(!y||k[0]&2048)&&o!==(o=e[36].message+"")&&s.p(o),e[36].action||!e[36].hideDismiss?h?h.p(e,k):(h=zr(e),h.c(),h.m(i,null)):h&&(h.d(1),h=null),(!y||k[0]&6145&&l!==(l="toast "+e[12]+" "+(e[36].background??e[0])+" "+(e[36].classes??"")))&&_(i,"class",l),(!y||k[0]&2048&&f!==(f=e[36].hideDismiss?"alert":"alertdialog"))&&_(t,"role",f)},r(){m=t.getBoundingClientRect()},f(){Ys(t),v(),Xs(t,m)},a(){v(),v=Js(t,m,io,{duration:e[4]?250:0})},i(E){y||(st(()=>{y&&(d&&d.end(1),u=ki(t,tt,{transition:e[5],params:{x:e[10].x,y:e[10].y,...e[6]},enabled:e[4]}),u.start())}),y=!0)},o(E){u&&u.invalidate(),d=Ti(t,tt,{transition:e[7],params:{x:e[10].x,y:e[10].y,...e[8]},enabled:e[4]}),y=!1},d(E){E&&w(t),h&&h.d(),E&&d&&d.end(),p=!1,Re(g)}}}function Dc(n){let e,t,i=n[9].length&&jr(n);return{c(){i&&i.c(),e=ye()},l(r){i&&i.l(r),e=ye()},m(r,s){i&&i.m(r,s),F(r,e,s),t=!0},p(r,s){r[9].length?i?(i.p(r,s),s[0]&512&&O(i,1)):(i=jr(r),i.c(),O(i,1),i.m(e.parentNode,e)):i&&(re(),M(i,1,1,()=>{i=null}),se())},i(r){t||(O(i),t=!0)},o(r){M(i),t=!1},d(r){r&&w(e),i&&i.d(r)}}}const Oc="flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none",Pc="flex flex-col gap-y-2",Lc="flex justify-between items-center pointer-events-auto",Nc="flex items-center space-x-2";function Mc(n,e,t){let i,r,s,o,a,l;_e(n,Ri,U=>t(34,l=U));const c=Vt();_e(n,c,U=>t(9,a=U));let{position:f="b"}=e,{max:u=3}=e,{background:d="variant-filled-secondary"}=e,{width:m="max-w-[640px]"}=e,{color:v=""}=e,{padding:y="p-4"}=e,{spacing:p="space-x-4"}=e,{rounded:g="rounded-container-token"}=e,{shadow:h="shadow-lg"}=e,{zIndex:b="z-[888]"}=e,{buttonAction:I="btn variant-filled"}=e,{buttonDismiss:E="btn-icon btn-icon-sm variant-filled"}=e,{buttonDismissLabel:k="✕"}=e,{transitions:C=!l}=e,{transitionIn:S=Pt}=e,{transitionInParams:L={duration:250}}=e,{transitionOut:A=Pt}=e,{transitionOutParams:K={duration:250}}=e,G,x,J={x:0,y:0};switch(f){case"t":G="justify-center items-start",x="items-center",J={x:0,y:-100};break;case"b":G="justify-center items-end",x="items-center",J={x:0,y:100};break;case"l":G="justify-start items-center",x="items-start",J={x:-100,y:0};break;case"r":G="justify-end items-center",x="items-end",J={x:100,y:0};break;case"tl":G="justify-start items-start",x="items-start",J={x:-100,y:0};break;case"tr":G="justify-end items-start",x="items-end",J={x:100,y:0};break;case"bl":G="justify-start items-end",x="items-start",J={x:-100,y:0};break;case"br":G="justify-end items-end",x="items-end",J={x:100,y:0};break}function oe(U){var Q,xe;(xe=(Q=a[U])==null?void 0:Q.action)==null||xe.response(),c.close(a[U].id)}function ie(U){var Q;(Q=a[U])!=null&&Q.hoverable&&(c.freeze(U),t(13,r+=" scale-[105%]"))}function me(U){var Q;(Q=a[U])!=null&&Q.hoverable&&(c.unfreeze(U),t(13,r=r.replace(" scale-[105%]","")))}const Ie=U=>oe(U),pe=U=>c.close(U.id),V=U=>ie(U),H=U=>me(U);return n.$$set=U=>{t(35,e=ae(ae({},e),fe(U))),"position"in U&&t(19,f=U.position),"max"in U&&t(20,u=U.max),"background"in U&&t(0,d=U.background),"width"in U&&t(21,m=U.width),"color"in U&&t(22,v=U.color),"padding"in U&&t(23,y=U.padding),"spacing"in U&&t(24,p=U.spacing),"rounded"in U&&t(25,g=U.rounded),"shadow"in U&&t(26,h=U.shadow),"zIndex"in U&&t(27,b=U.zIndex),"buttonAction"in U&&t(1,I=U.buttonAction),"buttonDismiss"in U&&t(2,E=U.buttonDismiss),"buttonDismissLabel"in U&&t(3,k=U.buttonDismissLabel),"transitions"in U&&t(4,C=U.transitions),"transitionIn"in U&&t(5,S=U.transitionIn),"transitionInParams"in U&&t(6,L=U.transitionInParams),"transitionOut"in U&&t(7,A=U.transitionOut),"transitionOutParams"in U&&t(8,K=U.transitionOutParams)},n.$$.update=()=>{t(14,i=`${Oc} ${G} ${b} ${e.class||""}`),n.$$.dirty[0]&545259520&&t(13,r=`${Pc} ${x} ${y}`),n.$$.dirty[0]&132120576&&t(12,s=`${Lc} ${m} ${v} ${y} ${p} ${g} ${h}`),n.$$.dirty[0]&1049088&&t(11,o=Array.from(a).slice(0,u))},e=fe(e),[d,I,E,k,C,S,L,A,K,a,J,o,s,r,i,c,oe,ie,me,f,u,m,v,y,p,g,h,b,G,x,Ie,pe,V,H]}class Uc extends de{constructor(e){super(),he(this,e,Mc,Dc,ue,{position:19,max:20,background:0,width:21,color:22,padding:23,spacing:24,rounded:25,shadow:26,zIndex:27,buttonAction:1,buttonDismiss:2,buttonDismissLabel:3,transitions:4,transitionIn:5,transitionInParams:6,transitionOut:7,transitionOutParams:8},null,[-1,-1])}}const Lt=Math.min,ht=Math.max,bn=Math.round,on=Math.floor,ot=n=>({x:n,y:n}),Fc={left:"right",right:"left",bottom:"top",top:"bottom"},Bc={start:"end",end:"start"};function li(n,e,t){return ht(n,Lt(e,t))}function Jt(n,e){return typeof n=="function"?n(e):n}function pt(n){return n.split("-")[0]}function Yt(n){return n.split("-")[1]}function ro(n){return n==="x"?"y":"x"}function Di(n){return n==="y"?"height":"width"}function Nn(n){return["top","bottom"].includes(pt(n))?"y":"x"}function Oi(n){return ro(Nn(n))}function Vc(n,e,t){t===void 0&&(t=!1);const i=Yt(n),r=Oi(n),s=Di(r);let o=r==="x"?i===(t?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=vn(o)),[o,vn(o)]}function Hc(n){const e=vn(n);return[ci(n),e,ci(e)]}function ci(n){return n.replace(/start|end/g,e=>Bc[e])}function jc(n,e,t){const i=["left","right"],r=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(n){case"top":case"bottom":return t?e?r:i:e?i:r;case"left":case"right":return e?s:o;default:return[]}}function zc(n,e,t,i){const r=Yt(n);let s=jc(pt(n),t==="start",i);return r&&(s=s.map(o=>o+"-"+r),e&&(s=s.concat(s.map(ci)))),s}function vn(n){return n.replace(/left|right|bottom|top/g,e=>Fc[e])}function Wc(n){return{top:0,right:0,bottom:0,left:0,...n}}function so(n){return typeof n!="number"?Wc(n):{top:n,right:n,bottom:n,left:n}}function yn(n){return{...n,top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height}}function Gr(n,e,t){let{reference:i,floating:r}=n;const s=Nn(e),o=Oi(e),a=Di(o),l=pt(e),c=s==="y",f=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,d=i[a]/2-r[a]/2;let m;switch(l){case"top":m={x:f,y:i.y-r.height};break;case"bottom":m={x:f,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:u};break;case"left":m={x:i.x-r.width,y:u};break;default:m={x:i.x,y:i.y}}switch(Yt(e)){case"start":m[o]-=d*(t&&c?-1:1);break;case"end":m[o]+=d*(t&&c?-1:1);break}return m}const qc=async(n,e,t)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=t,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:n,floating:e,strategy:r}),{x:f,y:u}=Gr(c,i,l),d=i,m={},v=0;for(let y=0;y<a.length;y++){const{name:p,fn:g}=a[y],{x:h,y:b,data:I,reset:E}=await g({x:f,y:u,initialPlacement:i,placement:d,strategy:r,middlewareData:m,rects:c,platform:o,elements:{reference:n,floating:e}});if(f=h??f,u=b??u,m={...m,[p]:{...m[p],...I}},E&&v<=50){v++,typeof E=="object"&&(E.placement&&(d=E.placement),E.rects&&(c=E.rects===!0?await o.getElementRects({reference:n,floating:e,strategy:r}):E.rects),{x:f,y:u}=Gr(c,d,l)),y=-1;continue}}return{x:f,y:u,placement:d,strategy:r,middlewareData:m}};async function oo(n,e){var t;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:a,strategy:l}=n,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:d=!1,padding:m=0}=Jt(e,n),v=so(m),p=a[d?u==="floating"?"reference":"floating":u],g=yn(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(p)))==null||t?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:f,strategy:l})),h=u==="floating"?{...o.floating,x:i,y:r}:o.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),I=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},E=yn(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:h,offsetParent:b,strategy:l}):h);return{top:(g.top-E.top+v.top)/I.y,bottom:(E.bottom-g.bottom+v.bottom)/I.y,left:(g.left-E.left+v.left)/I.x,right:(E.right-g.right+v.right)/I.x}}const Kc=n=>({name:"arrow",options:n,async fn(e){const{x:t,y:i,placement:r,rects:s,platform:o,elements:a}=e,{element:l,padding:c=0}=Jt(n,e)||{};if(l==null)return{};const f=so(c),u={x:t,y:i},d=Oi(r),m=Di(d),v=await o.getDimensions(l),y=d==="y",p=y?"top":"left",g=y?"bottom":"right",h=y?"clientHeight":"clientWidth",b=s.reference[m]+s.reference[d]-u[d]-s.floating[m],I=u[d]-s.reference[d],E=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l));let k=E?E[h]:0;(!k||!await(o.isElement==null?void 0:o.isElement(E)))&&(k=a.floating[h]||s.floating[m]);const C=b/2-I/2,S=k/2-v[m]/2-1,L=Lt(f[p],S),A=Lt(f[g],S),K=L,G=k-v[m]-A,x=k/2-v[m]/2+C,J=li(K,x,G),ie=Yt(r)!=null&&x!=J&&s.reference[m]/2-(x<K?L:A)-v[m]/2<0?x<K?K-x:G-x:0;return{[d]:u[d]-ie,data:{[d]:J,centerOffset:x-J+ie}}}}),Gc=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(e){var t;const{placement:i,middlewareData:r,rects:s,initialPlacement:o,platform:a,elements:l}=e,{mainAxis:c=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...y}=Jt(n,e),p=pt(i),g=pt(o)===o,h=await(a.isRTL==null?void 0:a.isRTL(l.floating)),b=u||(g||!v?[vn(o)]:Hc(o));!u&&m!=="none"&&b.push(...zc(o,v,m,h));const I=[o,...b],E=await oo(e,y),k=[];let C=((t=r.flip)==null?void 0:t.overflows)||[];if(c&&k.push(E[p]),f){const K=Vc(i,s,h);k.push(E[K[0]],E[K[1]])}if(C=[...C,{placement:i,overflows:k}],!k.every(K=>K<=0)){var S,L;const K=(((S=r.flip)==null?void 0:S.index)||0)+1,G=I[K];if(G)return{data:{index:K,overflows:C},reset:{placement:G}};let x=(L=C.filter(J=>J.overflows[0]<=0).sort((J,oe)=>J.overflows[1]-oe.overflows[1])[0])==null?void 0:L.placement;if(!x)switch(d){case"bestFit":{var A;const J=(A=C.map(oe=>[oe.placement,oe.overflows.filter(ie=>ie>0).reduce((ie,me)=>ie+me,0)]).sort((oe,ie)=>oe[1]-ie[1])[0])==null?void 0:A[0];J&&(x=J);break}case"initialPlacement":x=o;break}if(i!==x)return{reset:{placement:x}}}return{}}}};async function xc(n,e){const{placement:t,platform:i,elements:r}=n,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),o=pt(t),a=Yt(t),l=Nn(t)==="y",c=["left","top"].includes(o)?-1:1,f=s&&l?-1:1,u=Jt(e,n);let{mainAxis:d,crossAxis:m,alignmentAxis:v}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&typeof v=="number"&&(m=a==="end"?v*-1:v),l?{x:m*f,y:d*c}:{x:d*c,y:m*f}}const Jc=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(e){const{x:t,y:i}=e,r=await xc(e,n);return{x:t+r.x,y:i+r.y,data:r}}}},Yc=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(e){const{x:t,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:p=>{let{x:g,y:h}=p;return{x:g,y:h}}},...l}=Jt(n,e),c={x:t,y:i},f=await oo(e,l),u=Nn(pt(r)),d=ro(u);let m=c[d],v=c[u];if(s){const p=d==="y"?"top":"left",g=d==="y"?"bottom":"right",h=m+f[p],b=m-f[g];m=li(h,m,b)}if(o){const p=u==="y"?"top":"left",g=u==="y"?"bottom":"right",h=v+f[p],b=v-f[g];v=li(h,v,b)}const y=a.fn({...e,[d]:m,[u]:v});return{...y,data:{x:y.x-t,y:y.y-i}}}}};function at(n){return ao(n)?(n.nodeName||"").toLowerCase():"#document"}function we(n){var e;return(n==null||(e=n.ownerDocument)==null?void 0:e.defaultView)||window}function Ke(n){var e;return(e=(ao(n)?n.ownerDocument:n.document)||window.document)==null?void 0:e.documentElement}function ao(n){return n instanceof Node||n instanceof we(n).Node}function ze(n){return n instanceof Element||n instanceof we(n).Element}function Me(n){return n instanceof HTMLElement||n instanceof we(n).HTMLElement}function xr(n){return typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof we(n).ShadowRoot}function Xt(n){const{overflow:e,overflowX:t,overflowY:i,display:r}=Ce(n);return/auto|scroll|overlay|hidden|clip/.test(e+i+t)&&!["inline","contents"].includes(r)}function Xc(n){return["table","td","th"].includes(at(n))}function Pi(n){const e=Li(),t=Ce(n);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(t.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(t.contain||"").includes(i))}function Qc(n){let e=Nt(n);for(;Me(e)&&!Mn(e);){if(Pi(e))return e;e=Nt(e)}return null}function Li(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Mn(n){return["html","body","#document"].includes(at(n))}function Ce(n){return we(n).getComputedStyle(n)}function Un(n){return ze(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function Nt(n){if(at(n)==="html")return n;const e=n.assignedSlot||n.parentNode||xr(n)&&n.host||Ke(n);return xr(e)?e.host:e}function lo(n){const e=Nt(n);return Mn(e)?n.ownerDocument?n.ownerDocument.body:n.body:Me(e)&&Xt(e)?e:lo(e)}function In(n,e){var t;e===void 0&&(e=[]);const i=lo(n),r=i===((t=n.ownerDocument)==null?void 0:t.body),s=we(i);return r?e.concat(s,s.visualViewport||[],Xt(i)?i:[]):e.concat(i,In(i))}function co(n){const e=Ce(n);let t=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Me(n),s=r?n.offsetWidth:t,o=r?n.offsetHeight:i,a=bn(t)!==s||bn(i)!==o;return a&&(t=s,i=o),{width:t,height:i,$:a}}function Ni(n){return ze(n)?n:n.contextElement}function St(n){const e=Ni(n);if(!Me(e))return ot(1);const t=e.getBoundingClientRect(),{width:i,height:r,$:s}=co(e);let o=(s?bn(t.width):t.width)/i,a=(s?bn(t.height):t.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Zc=ot(0);function uo(n){const e=we(n);return!Li()||!e.visualViewport?Zc:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function $c(n,e,t){return e===void 0&&(e=!1),!t||e&&t!==we(n)?!1:e}function _t(n,e,t,i){e===void 0&&(e=!1),t===void 0&&(t=!1);const r=n.getBoundingClientRect(),s=Ni(n);let o=ot(1);e&&(i?ze(i)&&(o=St(i)):o=St(n));const a=$c(s,t,i)?uo(s):ot(0);let l=(r.left+a.x)/o.x,c=(r.top+a.y)/o.y,f=r.width/o.x,u=r.height/o.y;if(s){const d=we(s),m=i&&ze(i)?we(i):i;let v=d.frameElement;for(;v&&i&&m!==d;){const y=St(v),p=v.getBoundingClientRect(),g=Ce(v),h=p.left+(v.clientLeft+parseFloat(g.paddingLeft))*y.x,b=p.top+(v.clientTop+parseFloat(g.paddingTop))*y.y;l*=y.x,c*=y.y,f*=y.x,u*=y.y,l+=h,c+=b,v=we(v).frameElement}}return yn({width:f,height:u,x:l,y:c})}function eu(n){let{rect:e,offsetParent:t,strategy:i}=n;const r=Me(t),s=Ke(t);if(t===s)return e;let o={scrollLeft:0,scrollTop:0},a=ot(1);const l=ot(0);if((r||!r&&i!=="fixed")&&((at(t)!=="body"||Xt(s))&&(o=Un(t)),Me(t))){const c=_t(t);a=St(t),l.x=c.x+t.clientLeft,l.y=c.y+t.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-o.scrollLeft*a.x+l.x,y:e.y*a.y-o.scrollTop*a.y+l.y}}function tu(n){return Array.from(n.getClientRects())}function fo(n){return _t(Ke(n)).left+Un(n).scrollLeft}function nu(n){const e=Ke(n),t=Un(n),i=n.ownerDocument.body,r=ht(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=ht(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-t.scrollLeft+fo(n);const a=-t.scrollTop;return Ce(i).direction==="rtl"&&(o+=ht(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:a}}function iu(n,e){const t=we(n),i=Ke(n),r=t.visualViewport;let s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;const c=Li();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a,y:l}}function ru(n,e){const t=_t(n,!0,e==="fixed"),i=t.top+n.clientTop,r=t.left+n.clientLeft,s=Me(n)?St(n):ot(1),o=n.clientWidth*s.x,a=n.clientHeight*s.y,l=r*s.x,c=i*s.y;return{width:o,height:a,x:l,y:c}}function Jr(n,e,t){let i;if(e==="viewport")i=iu(n,t);else if(e==="document")i=nu(Ke(n));else if(ze(e))i=ru(e,t);else{const r=uo(n);i={...e,x:e.x-r.x,y:e.y-r.y}}return yn(i)}function ho(n,e){const t=Nt(n);return t===e||!ze(t)||Mn(t)?!1:Ce(t).position==="fixed"||ho(t,e)}function su(n,e){const t=e.get(n);if(t)return t;let i=In(n).filter(a=>ze(a)&&at(a)!=="body"),r=null;const s=Ce(n).position==="fixed";let o=s?Nt(n):n;for(;ze(o)&&!Mn(o);){const a=Ce(o),l=Pi(o);!l&&a.position==="fixed"&&(r=null),(s?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Xt(o)&&!l&&ho(n,o))?i=i.filter(f=>f!==o):r=a,o=Nt(o)}return e.set(n,i),i}function ou(n){let{element:e,boundary:t,rootBoundary:i,strategy:r}=n;const o=[...t==="clippingAncestors"?su(e,this._c):[].concat(t),i],a=o[0],l=o.reduce((c,f)=>{const u=Jr(e,f,r);return c.top=ht(u.top,c.top),c.right=Lt(u.right,c.right),c.bottom=Lt(u.bottom,c.bottom),c.left=ht(u.left,c.left),c},Jr(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function au(n){return co(n)}function lu(n,e,t){const i=Me(e),r=Ke(e),s=t==="fixed",o=_t(n,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=ot(0);if(i||!i&&!s)if((at(e)!=="body"||Xt(r))&&(a=Un(e)),i){const c=_t(e,!0,s,e);l.x=c.x+e.clientLeft,l.y=c.y+e.clientTop}else r&&(l.x=fo(r));return{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function Yr(n,e){return!Me(n)||Ce(n).position==="fixed"?null:e?e(n):n.offsetParent}function mo(n,e){const t=we(n);if(!Me(n))return t;let i=Yr(n,e);for(;i&&Xc(i)&&Ce(i).position==="static";)i=Yr(i,e);return i&&(at(i)==="html"||at(i)==="body"&&Ce(i).position==="static"&&!Pi(i))?t:i||Qc(n)||t}const cu=async function(n){let{reference:e,floating:t,strategy:i}=n;const r=this.getOffsetParent||mo,s=this.getDimensions;return{reference:lu(e,await r(t),i),floating:{x:0,y:0,...await s(t)}}};function uu(n){return Ce(n).direction==="rtl"}const fu={convertOffsetParentRelativeRectToViewportRelativeRect:eu,getDocumentElement:Ke,getClippingRect:ou,getOffsetParent:mo,getElementRects:cu,getClientRects:tu,getDimensions:au,getScale:St,isElement:ze,isRTL:uu};function du(n,e){let t=null,i;const r=Ke(n);function s(){clearTimeout(i),t&&t.disconnect(),t=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const{left:c,top:f,width:u,height:d}=n.getBoundingClientRect();if(a||e(),!u||!d)return;const m=on(f),v=on(r.clientWidth-(c+u)),y=on(r.clientHeight-(f+d)),p=on(c),h={rootMargin:-m+"px "+-v+"px "+-y+"px "+-p+"px",threshold:ht(0,Lt(1,l))||1};let b=!0;function I(E){const k=E[0].intersectionRatio;if(k!==l){if(!b)return o();k?o(!1,k):i=setTimeout(()=>{o(!1,1e-7)},100)}b=!1}try{t=new IntersectionObserver(I,{...h,root:r.ownerDocument})}catch{t=new IntersectionObserver(I,h)}t.observe(n)}return o(!0),s}function hu(n,e,t,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Ni(n),f=r||s?[...c?In(c):[],...In(e)]:[];f.forEach(g=>{r&&g.addEventListener("scroll",t,{passive:!0}),s&&g.addEventListener("resize",t)});const u=c&&a?du(c,t):null;let d=-1,m=null;o&&(m=new ResizeObserver(g=>{let[h]=g;h&&h.target===c&&m&&(m.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{m&&m.observe(e)})),t()}),c&&!l&&m.observe(c),m.observe(e));let v,y=l?_t(n):null;l&&p();function p(){const g=_t(n);y&&(g.x!==y.x||g.y!==y.y||g.width!==y.width||g.height!==y.height)&&t(),y=g,v=requestAnimationFrame(p)}return t(),()=>{f.forEach(g=>{r&&g.removeEventListener("scroll",t),s&&g.removeEventListener("resize",t)}),u&&u(),m&&m.disconnect(),m=null,l&&cancelAnimationFrame(v)}}const mu=(n,e,t)=>{const i=new Map,r={platform:fu,...t},s={...r.platform,_c:i};return qc(n,e,{...r,platform:s})},gu=""+new URL("../assets/vpsLogo.a05dfbbc.png",import.meta.url).href;/**
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
 */const go=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},pu=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,l=r+2<n.length,c=l?n[r+2]:0,f=s>>2,u=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(d=64)),i.push(t[f],t[u],t[d],t[m])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(go(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):pu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const c=r<n.length?t[n.charAt(r)]:64;++r;const u=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||c==null||u==null)throw new _u;const d=s<<2|a>>4;if(i.push(d),c!==64){const m=a<<4&240|c>>2;if(i.push(m),u!==64){const v=c<<6&192|u;i.push(v)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bu=function(n){const e=go(n);return po.encodeByteArray(e,!0)},_o=function(n){return bu(n).replace(/\./g,"")},bo=function(n){try{return po.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yu=()=>vu().__FIREBASE_DEFAULTS__,Iu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bo(n[1]);return e&&JSON.parse(e)},Mi=()=>{try{return yu()||Iu()||wu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Eu=n=>{var e,t;return(t=(e=Mi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},vo=()=>{var n;return(n=Mi())===null||n===void 0?void 0:n.config},yo=n=>{var e;return(e=Mi())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ku{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function Io(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Su(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Au(){const n=ge();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function wo(){try{return typeof indexedDB=="object"}catch{return!1}}function Eo(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function Cu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ru="FirebaseError";class Be extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Ru,Object.setPrototypeOf(this,Be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kt.prototype.create)}}class kt{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Du(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Be(r,a,i)}}function Du(n,e){return n.replace(Ou,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Ou=/\{\$([^}]+)}/g;function Pu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Wt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Xr(s)&&Xr(o)){if(!Wt(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Xr(n){return n!==null&&typeof n=="object"}/**
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
 */function Qt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Lu(n,e){const t=new Nu(n,e);return t.subscribe.bind(t)}class Nu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Mu(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=xn),r.error===void 0&&(r.error=xn),r.complete===void 0&&(r.complete=xn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mu(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xn(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=1e3,Fu=2,Bu=4*60*60*1e3,Vu=.5;function Qr(n,e=Uu,t=Fu){const i=e*Math.pow(t,n),r=Math.round(Vu*i*(Math.random()-.5)*2);return Math.min(Bu,i+r)}/**
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
 */function Ge(n){return n&&n._delegate?n._delegate:n}class Ue{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ku;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zu(e))try{this.getOrInitializeService({instanceIdentifier:ct})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ct){return this.instances.has(e)}getOptions(e=ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ju(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ct){return this.component?this.component.multipleInstances?e:ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ju(n){return n===ct?void 0:n}function zu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const qu={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Ku=X.INFO,Gu={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},xu=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=Gu[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ui{constructor(e){this.name=e,this._logLevel=Ku,this._logHandler=xu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Ju=(n,e)=>e.some(t=>n instanceof t);let Zr,$r;function Yu(){return Zr||(Zr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xu(){return $r||($r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ko=new WeakMap,ui=new WeakMap,To=new WeakMap,Jn=new WeakMap,Fi=new WeakMap;function Qu(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(nt(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ko.set(t,n)}).catch(()=>{}),Fi.set(e,n),e}function Zu(n){if(ui.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ui.set(n,e)}let fi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ui.get(n);if(e==="objectStoreNames")return n.objectStoreNames||To.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $u(n){fi=n(fi)}function ef(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Yn(this),e,...t);return To.set(i,e.sort?e.sort():[e]),nt(i)}:Xu().includes(n)?function(...e){return n.apply(Yn(this),e),nt(ko.get(this))}:function(...e){return nt(n.apply(Yn(this),e))}}function tf(n){return typeof n=="function"?ef(n):(n instanceof IDBTransaction&&Zu(n),Ju(n,Yu())?new Proxy(n,fi):n)}function nt(n){if(n instanceof IDBRequest)return Qu(n);if(Jn.has(n))return Jn.get(n);const e=tf(n);return e!==n&&(Jn.set(n,e),Fi.set(e,n)),e}const Yn=n=>Fi.get(n);function nf(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=nt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(nt(o.result),l.oldVersion,l.newVersion,nt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const rf=["get","getKey","getAll","getAllKeys","count"],sf=["put","add","delete","clear"],Xn=new Map;function es(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xn.get(e))return Xn.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=sf.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||rf.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),r&&l.done]))[0]};return Xn.set(e,s),s}$u(n=>({...n,get:(e,t,i)=>es(e,t)||n.get(e,t,i),has:(e,t)=>!!es(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(af(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function af(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const di="@firebase/app",ts="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Ui("@firebase/app"),lf="@firebase/app-compat",cf="@firebase/analytics-compat",uf="@firebase/analytics",ff="@firebase/app-check-compat",df="@firebase/app-check",hf="@firebase/auth",mf="@firebase/auth-compat",gf="@firebase/database",pf="@firebase/database-compat",_f="@firebase/functions",bf="@firebase/functions-compat",vf="@firebase/installations",yf="@firebase/installations-compat",If="@firebase/messaging",wf="@firebase/messaging-compat",Ef="@firebase/performance",kf="@firebase/performance-compat",Tf="@firebase/remote-config",Sf="@firebase/remote-config-compat",Af="@firebase/storage",Cf="@firebase/storage-compat",Rf="@firebase/firestore",Df="@firebase/firestore-compat",Of="firebase",Pf="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi="[DEFAULT]",Lf={[di]:"fire-core",[lf]:"fire-core-compat",[uf]:"fire-analytics",[cf]:"fire-analytics-compat",[df]:"fire-app-check",[ff]:"fire-app-check-compat",[hf]:"fire-auth",[mf]:"fire-auth-compat",[gf]:"fire-rtdb",[pf]:"fire-rtdb-compat",[_f]:"fire-fn",[bf]:"fire-fn-compat",[vf]:"fire-iid",[yf]:"fire-iid-compat",[If]:"fire-fcm",[wf]:"fire-fcm-compat",[Ef]:"fire-perf",[kf]:"fire-perf-compat",[Tf]:"fire-rc",[Sf]:"fire-rc-compat",[Af]:"fire-gcs",[Cf]:"fire-gcs-compat",[Rf]:"fire-fst",[Df]:"fire-fst-compat","fire-js":"fire-js",[Of]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Map,mi=new Map;function Nf(n,e){try{n.container.addComponent(e)}catch(t){bt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function We(n){const e=n.name;if(mi.has(e))return bt.debug(`There were multiple attempts to register component ${e}.`),!1;mi.set(e,n);for(const t of wn.values())Nf(t,n);return!0}function Ut(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},it=new kt("app","Firebase",Mf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw it.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=Pf;function So(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:hi,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw it.create("bad-app-name",{appName:String(r)});if(t||(t=vo()),!t)throw it.create("no-options");const s=wn.get(r);if(s){if(Wt(t,s.options)&&Wt(i,s.config))return s;throw it.create("duplicate-app",{appName:r})}const o=new Wu(r);for(const l of mi.values())o.addComponent(l);const a=new Uf(t,i,o);return wn.set(r,a),a}function Ao(n=hi){const e=wn.get(n);if(!e&&n===hi&&vo())return So();if(!e)throw it.create("no-app",{appName:n});return e}function Oe(n,e,t){var i;let r=(i=Lf[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bt.warn(a.join(" "));return}We(new Ue(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ff="firebase-heartbeat-database",Bf=1,qt="firebase-heartbeat-store";let Qn=null;function Co(){return Qn||(Qn=nf(Ff,Bf,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(qt)}}}).catch(n=>{throw it.create("idb-open",{originalErrorMessage:n.message})})),Qn}async function Vf(n){try{return await(await Co()).transaction(qt).objectStore(qt).get(Ro(n))}catch(e){if(e instanceof Be)bt.warn(e.message);else{const t=it.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bt.warn(t.message)}}}async function ns(n,e){try{const i=(await Co()).transaction(qt,"readwrite");await i.objectStore(qt).put(e,Ro(n)),await i.done}catch(t){if(t instanceof Be)bt.warn(t.message);else{const i=it.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});bt.warn(i.message)}}}function Ro(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Hf=1024,jf=30*24*60*60*1e3;class zf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qf(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=is();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=jf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=is(),{heartbeatsToSend:t,unsentEntries:i}=Wf(this._heartbeatsCache.heartbeats),r=_o(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function is(){return new Date().toISOString().substring(0,10)}function Wf(n,e=Hf){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),rs(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),rs(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class qf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wo()?Eo().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ns(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ns(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function rs(n){return _o(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n){We(new Ue("platform-logger",e=>new of(e),"PRIVATE")),We(new Ue("heartbeat",e=>new zf(e),"PRIVATE")),Oe(di,ts,n),Oe(di,ts,"esm2017"),Oe("fire-js","")}Kf("");var Gf="firebase",xf="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe(Gf,xf,"app");const Jf=(n,e)=>e.some(t=>n instanceof t);let ss,os;function Yf(){return ss||(ss=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xf(){return os||(os=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Do=new WeakMap,gi=new WeakMap,Oo=new WeakMap,Zn=new WeakMap,Bi=new WeakMap;function Qf(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(rt(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Do.set(t,n)}).catch(()=>{}),Bi.set(e,n),e}function Zf(n){if(gi.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});gi.set(n,e)}let pi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return gi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Oo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return rt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $f(n){pi=n(pi)}function ed(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call($n(this),e,...t);return Oo.set(i,e.sort?e.sort():[e]),rt(i)}:Xf().includes(n)?function(...e){return n.apply($n(this),e),rt(Do.get(this))}:function(...e){return rt(n.apply($n(this),e))}}function td(n){return typeof n=="function"?ed(n):(n instanceof IDBTransaction&&Zf(n),Jf(n,Yf())?new Proxy(n,pi):n)}function rt(n){if(n instanceof IDBRequest)return Qf(n);if(Zn.has(n))return Zn.get(n);const e=td(n);return e!==n&&(Zn.set(n,e),Bi.set(e,n)),e}const $n=n=>Bi.get(n);function nd(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=rt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(rt(o.result),l.oldVersion,l.newVersion,rt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const id=["get","getKey","getAll","getAllKeys","count"],rd=["put","add","delete","clear"],ei=new Map;function as(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ei.get(e))return ei.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=rd.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||id.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),r&&l.done]))[0]};return ei.set(e,s),s}$f(n=>({...n,get:(e,t,i)=>as(e,t)||n.get(e,t,i),has:(e,t)=>!!as(e,t)||n.has(e,t)}));const Po="@firebase/installations",Vi="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=1e4,No=`w:${Vi}`,Mo="FIS_v2",sd="https://firebaseinstallations.googleapis.com/v1",od=60*60*1e3,ad="installations",ld="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},vt=new kt(ad,ld,cd);function Uo(n){return n instanceof Be&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo({projectId:n}){return`${sd}/projects/${n}/installations`}function Bo(n){return{token:n.token,requestStatus:2,expiresIn:fd(n.expiresIn),creationTime:Date.now()}}async function Vo(n,e){const i=(await e.json()).error;return vt.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ho({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ud(n,{refreshToken:e}){const t=Ho(n);return t.append("Authorization",dd(e)),t}async function jo(n){const e=await n();return e.status>=500&&e.status<600?n():e}function fd(n){return Number(n.replace("s","000"))}function dd(n){return`${Mo} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hd({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Fo(n),r=Ho(n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:t,authVersion:Mo,appId:n.appId,sdkVersion:No},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await jo(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:Bo(c.authToken)}}else throw await Vo("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=/^[cdef][\w-]{21}$/,_i="";function pd(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=_d(n);return gd.test(t)?t:_i}catch{return _i}}function _d(n){return md(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new Map;function qo(n,e){const t=Fn(n);Ko(t,e),bd(t,e)}function Ko(n,e){const t=Wo.get(n);if(t)for(const i of t)i(e)}function bd(n,e){const t=vd();t&&t.postMessage({key:n,fid:e}),yd()}let ft=null;function vd(){return!ft&&"BroadcastChannel"in self&&(ft=new BroadcastChannel("[Firebase] FID Change"),ft.onmessage=n=>{Ko(n.data.key,n.data.fid)}),ft}function yd(){Wo.size===0&&ft&&(ft.close(),ft=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="firebase-installations-database",wd=1,yt="firebase-installations-store";let ti=null;function Hi(){return ti||(ti=nd(Id,wd,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(yt)}}})),ti}async function En(n,e){const t=Fn(n),r=(await Hi()).transaction(yt,"readwrite"),s=r.objectStore(yt),o=await s.get(t);return await s.put(e,t),await r.done,(!o||o.fid!==e.fid)&&qo(n,e.fid),e}async function Go(n){const e=Fn(n),i=(await Hi()).transaction(yt,"readwrite");await i.objectStore(yt).delete(e),await i.done}async function Bn(n,e){const t=Fn(n),r=(await Hi()).transaction(yt,"readwrite"),s=r.objectStore(yt),o=await s.get(t),a=e(o);return a===void 0?await s.delete(t):await s.put(a,t),await r.done,a&&(!o||o.fid!==a.fid)&&qo(n,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(n){let e;const t=await Bn(n.appConfig,i=>{const r=Ed(i),s=kd(n,r);return e=s.registrationPromise,s.installationEntry});return t.fid===_i?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Ed(n){const e=n||{fid:pd(),registrationStatus:0};return xo(e)}function kd(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(vt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Td(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Sd(n)}:{installationEntry:e}}async function Td(n,e){try{const t=await hd(n,e);return En(n.appConfig,t)}catch(t){throw Uo(t)&&t.customData.serverCode===409?await Go(n.appConfig):await En(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Sd(n){let e=await ls(n.appConfig);for(;e.registrationStatus===1;)await zo(100),e=await ls(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await ji(n);return i||t}return e}function ls(n){return Bn(n,e=>{if(!e)throw vt.create("installation-not-found");return xo(e)})}function xo(n){return Ad(n)?{fid:n.fid,registrationStatus:0}:n}function Ad(n){return n.registrationStatus===1&&n.registrationTime+Lo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cd({appConfig:n,heartbeatServiceProvider:e},t){const i=Rd(n,t),r=ud(n,t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:No,appId:n.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await jo(()=>fetch(i,a));if(l.ok){const c=await l.json();return Bo(c)}else throw await Vo("Generate Auth Token",l)}function Rd(n,{fid:e}){return`${Fo(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(n,e=!1){let t;const i=await Bn(n.appConfig,s=>{if(!Jo(s))throw vt.create("not-registered");const o=s.authToken;if(!e&&Pd(o))return s;if(o.requestStatus===1)return t=Dd(n,e),s;{if(!navigator.onLine)throw vt.create("app-offline");const a=Nd(s);return t=Od(n,a),a}});return t?await t:i.authToken}async function Dd(n,e){let t=await cs(n.appConfig);for(;t.authToken.requestStatus===1;)await zo(100),t=await cs(n.appConfig);const i=t.authToken;return i.requestStatus===0?zi(n,e):i}function cs(n){return Bn(n,e=>{if(!Jo(e))throw vt.create("not-registered");const t=e.authToken;return Md(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Od(n,e){try{const t=await Cd(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await En(n.appConfig,i),t}catch(t){if(Uo(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Go(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await En(n.appConfig,i)}throw t}}function Jo(n){return n!==void 0&&n.registrationStatus===2}function Pd(n){return n.requestStatus===2&&!Ld(n)}function Ld(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+od}function Nd(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Md(n){return n.requestStatus===1&&n.requestTime+Lo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ud(n){const e=n,{installationEntry:t,registrationPromise:i}=await ji(e);return i?i.catch(console.error):zi(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fd(n,e=!1){const t=n;return await Bd(t),(await zi(t,e)).token}async function Bd(n){const{registrationPromise:e}=await ji(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n){if(!n||!n.options)throw ni("App Configuration");if(!n.name)throw ni("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ni(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ni(n){return vt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="installations",Hd="installations-internal",jd=n=>{const e=n.getProvider("app").getImmediate(),t=Vd(e),i=Ut(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},zd=n=>{const e=n.getProvider("app").getImmediate(),t=Ut(e,Yo).getImmediate();return{getId:()=>Ud(t),getToken:r=>Fd(t,r)}};function Wd(){We(new Ue(Yo,jd,"PUBLIC")),We(new Ue(Hd,zd,"PRIVATE"))}Wd();Oe(Po,Vi);Oe(Po,Vi,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="analytics",qd="firebase_id",Kd="origin",Gd=60*1e3,xd="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wi="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new Ui("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ee=new kt("analytics","Analytics",Jd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(n){if(!n.startsWith(Wi)){const e=Ee.create("invalid-gtag-resource",{gtagURL:n});return be.warn(e.message),""}return n}function Xo(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Xd(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Qd(n,e){const t=Xd("firebase-js-sdk-policy",{createScriptURL:Yd}),i=document.createElement("script"),r=`${Wi}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function Zd(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function $d(n,e,t,i,r,s){const o=i[r];try{if(o)await e[o];else{const l=(await Xo(t)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(a){be.error(a)}n("config",r,s)}async function eh(n,e,t,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Xo(t);for(const l of o){const c=a.find(u=>u.measurementId===l),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",i,r||{})}catch(s){be.error(s)}}function th(n,e,t,i){async function r(s,...o){try{if(s==="event"){const[a,l]=o;await eh(n,e,t,a,l)}else if(s==="config"){const[a,l]=o;await $d(n,e,t,i,a,l)}else if(s==="consent"){const[a]=o;n("consent","update",a)}else if(s==="get"){const[a,l,c]=o;n("get",a,l,c)}else if(s==="set"){const[a]=o;n("set",a)}else n(s,...o)}catch(a){be.error(a)}}return r}function nh(n,e,t,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=th(s,n,e,t),{gtagCore:s,wrappedGtag:window[r]}}function ih(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Wi)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=30,sh=1e3;class oh{constructor(e={},t=sh){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Qo=new oh;function ah(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function lh(n){var e;const{appId:t,apiKey:i}=n,r={method:"GET",headers:ah(i)},s=xd.replace("{app-id}",t),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Ee.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function ch(n,e=Qo,t){const{appId:i,apiKey:r,measurementId:s}=n.options;if(!i)throw Ee.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Ee.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new dh;return setTimeout(async()=>{a.abort()},t!==void 0?t:Gd),Zo({appId:i,apiKey:r,measurementId:s},o,a,e)}async function Zo(n,{throttleEndTimeMillis:e,backoffCount:t},i,r=Qo){var s;const{appId:o,measurementId:a}=n;try{await uh(i,e)}catch(l){if(a)return be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await lh(n);return r.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!fh(c)){if(r.deleteThrottleMetadata(o),a)return be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Qr(t,r.intervalMillis,rh):Qr(t,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return r.setThrottleMetadata(o,u),be.debug(`Calling attemptFetch again in ${f} millis`),Zo(n,u,i,r)}}function uh(n,e){return new Promise((t,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(s),i(Ee.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function fh(n){if(!(n instanceof Be)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class dh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function hh(n,e,t,i,r){if(r&&r.global){n("event",t,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mh(){if(wo())try{await Eo()}catch(n){return be.warn(Ee.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return be.warn(Ee.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function gh(n,e,t,i,r,s,o){var a;const l=ch(n);l.then(m=>{t[m.measurementId]=m.appId,n.options.measurementId&&m.measurementId!==n.options.measurementId&&be.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>be.error(m)),e.push(l);const c=mh().then(m=>{if(m)return i.getId()}),[f,u]=await Promise.all([l,c]);ih(s)||Qd(s,f.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[Kd]="firebase",d.update=!0,u!=null&&(d[qd]=u),r("config",f.measurementId,d),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.app=e}_delete(){return delete Ht[this.app.options.appId],Promise.resolve()}}let Ht={},us=[];const fs={};let ii="dataLayer",_h="gtag",ds,$o,hs=!1;function bh(){const n=[];if(Io()&&n.push("This is a browser extension environment."),Cu()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,r)=>`(${r+1}) ${i}`).join(" "),t=Ee.create("invalid-analytics-context",{errorInfo:e});be.warn(t.message)}}function vh(n,e,t){bh();const i=n.options.appId;if(!i)throw Ee.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ee.create("no-api-key");if(Ht[i]!=null)throw Ee.create("already-exists",{id:i});if(!hs){Zd(ii);const{wrappedGtag:s,gtagCore:o}=nh(Ht,us,fs,ii,_h);$o=s,ds=o,hs=!0}return Ht[i]=gh(n,us,fs,e,ds,ii,t),new ph(n)}function yh(n=Ao()){n=Ge(n);const e=Ut(n,kn);return e.isInitialized()?e.getImmediate():Ih(n)}function Ih(n,e={}){const t=Ut(n,kn);if(t.isInitialized()){const r=t.getImmediate();if(Wt(e,t.getOptions()))return r;throw Ee.create("already-initialized")}return t.initialize({options:e})}function wh(n,e,t,i){n=Ge(n),hh($o,Ht[n.app.options.appId],e,t,i).catch(r=>be.error(r))}const ms="@firebase/analytics",gs="0.10.0";function Eh(){We(new Ue(kn,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return vh(i,r,t)},"PUBLIC")),We(new Ue("analytics-internal",n,"PRIVATE")),Oe(ms,gs),Oe(ms,gs,"esm2017");function n(e){try{const t=e.getProvider(kn).getImmediate();return{logEvent:(i,r,s)=>wh(t,i,r,s)}}catch(t){throw Ee.create("interop-component-reg-failed",{reason:t})}}}Eh();function qi(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function ea(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kh=ea,ta=new kt("auth","Firebase",ea());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Ui("@firebase/auth");function Th(n,...e){Tn.logLevel<=X.WARN&&Tn.warn(`Auth (${Zt}): ${n}`,...e)}function fn(n,...e){Tn.logLevel<=X.ERROR&&Tn.error(`Auth (${Zt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n,...e){throw Ki(n,...e)}function Pe(n,...e){return Ki(n,...e)}function na(n,e,t){const i=Object.assign(Object.assign({},kh()),{[e]:t});return new kt("auth","Firebase",i).create(e,{appName:n.name})}function Sh(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Fe(n,"argument-error"),na(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ki(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ta.create(n,...e)}function q(n,e,...t){if(!n)throw Ki(e,...t)}function Ve(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fn(e),new Error(e)}function qe(n,e){n||Ve(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ah(){return ps()==="http:"||ps()==="https:"}function ps(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ah()||Io()||"connection"in navigator)?navigator.onLine:!0}function Rh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){this.shortDelay=e,this.longDelay=t,qe(t>e,"Short delay should be less than long delay!"),this.isMobile=Tu()||Su()}get(){return Ch()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n,e){qe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=new $t(3e4,6e4);function ra(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function en(n,e,t,i,r={}){return sa(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Qt(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),ia.fetch()(oa(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sa(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Dh),e);try{const r=new Lh(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw an(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw an(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw an(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw an(n,"user-disabled",o);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw na(n,f,c);Fe(n,f)}}catch(r){if(r instanceof Be)throw r;Fe(n,"network-request-failed",{message:String(r)})}}async function Ph(n,e,t,i,r={}){const s=await en(n,e,t,i,r);return"mfaPendingCredential"in s&&Fe(n,"multi-factor-auth-required",{_serverResponse:s}),s}function oa(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Gi(n.config,r):`${n.config.apiScheme}://${r}`}class Lh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Pe(this.auth,"network-request-failed")),Oh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function an(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=Pe(n,e,i);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nh(n,e){return en(n,"POST","/v1/accounts:delete",e)}async function Mh(n,e){return en(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Uh(n,e=!1){const t=Ge(n),i=await t.getIdToken(e),r=xi(i);q(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:jt(ri(r.auth_time)),issuedAtTime:jt(ri(r.iat)),expirationTime:jt(ri(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ri(n){return Number(n)*1e3}function xi(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return fn("JWT malformed, contained fewer than 3 sections"),null;try{const r=bo(t);return r?JSON.parse(r):(fn("Failed to decode base64 JWT payload"),null)}catch(r){return fn("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Fh(n){const e=xi(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Be&&Bh(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Bh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=jt(this.lastLoginAt),this.creationTime=jt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(n){var e;const t=n.auth,i=await n.getIdToken(),r=await Kt(n,Mh(t,{idToken:i}));q(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?zh(s.providerUserInfo):[],a=jh(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new aa(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,u)}async function Hh(n){const e=Ge(n);await Sn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jh(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function zh(n){return n.map(e=>{var{providerId:t}=e,i=qi(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(n,e){const t=await sa(n,{},async()=>{const i=Qt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=oa(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ia.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await Wh(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new Gt;return i&&(q(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(q(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gt,this.toJSON())}_performRefresh(){return Ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class mt{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=qi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new aa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Kt(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Uh(this,e)}reload(){return Hh(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Sn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kt(this,Nh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,l,c,f;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(r=t.email)!==null&&r!==void 0?r:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,p=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=t.createdAt)!==null&&c!==void 0?c:void 0,h=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:b,emailVerified:I,isAnonymous:E,providerData:k,stsTokenManager:C}=t;q(b&&C,e,"internal-error");const S=Gt.fromJSON(this.name,C);q(typeof b=="string",e,"internal-error"),Ye(u,e.name),Ye(d,e.name),q(typeof I=="boolean",e,"internal-error"),q(typeof E=="boolean",e,"internal-error"),Ye(m,e.name),Ye(v,e.name),Ye(y,e.name),Ye(p,e.name),Ye(g,e.name),Ye(h,e.name);const L=new mt({uid:b,auth:e,email:d,emailVerified:I,displayName:u,isAnonymous:E,photoURL:v,phoneNumber:m,tenantId:y,stsTokenManager:S,createdAt:g,lastLoginAt:h});return k&&Array.isArray(k)&&(L.providerData=k.map(A=>Object.assign({},A))),p&&(L._redirectEventId=p),L}static async _fromIdTokenResponse(e,t,i=!1){const r=new Gt;r.updateFromServerResponse(t);const s=new mt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Sn(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new Map;function He(n){qe(n instanceof Function,"Expected a class definition");let e=_s.get(n);return e?(qe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_s.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}la.type="NONE";const bs=la;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n,e,t){return`firebase:${n}:${e}:${t}`}class At{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=dn(this.userKey,r.apiKey,s),this.fullPersistenceKey=dn("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new At(He(bs),e,i);const r=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||He(bs);const o=dn(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const f=await c._get(o);if(f){const u=mt._fromJSON(e,f);c!==s&&(a=u),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new At(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new At(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ca(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ha(e))return"Blackberry";if(ma(e))return"Webos";if(Ji(e))return"Safari";if((e.includes("chrome/")||ua(e))&&!e.includes("edge/"))return"Chrome";if(da(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ca(n=ge()){return/firefox\//i.test(n)}function Ji(n=ge()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ua(n=ge()){return/crios\//i.test(n)}function fa(n=ge()){return/iemobile/i.test(n)}function da(n=ge()){return/android/i.test(n)}function ha(n=ge()){return/blackberry/i.test(n)}function ma(n=ge()){return/webos/i.test(n)}function Vn(n=ge()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qh(n=ge()){var e;return Vn(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kh(){return Au()&&document.documentMode===10}function ga(n=ge()){return Vn(n)||da(n)||ma(n)||ha(n)||/windows phone/i.test(n)||fa(n)}function Gh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(n,e=[]){let t;switch(n){case"Browser":t=vs(ge());break;case"Worker":t=`${vs(ge())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zt}/${i}`}async function _a(n,e){return en(n,"GET","/v2/recaptchaConfig",ra(n,e))}function ys(n){return n!==void 0&&n.enterprise!==void 0}class ba{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function va(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=Pe("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",xh().appendChild(i)})}function Jh(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Yh="https://www.google.com/recaptcha/enterprise.js?render=",Xh="recaptcha-enterprise",Qh="NO_RECAPTCHA";class Zh{constructor(e){this.type=Xh,this.auth=tn(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{_a(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ba(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;ys(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Qh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&ys(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}va(Yh+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class $h{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Is(this),this.idTokenSubscription=new Is(this),this.beforeStateQueue=new $h(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ta,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=He(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await At.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Sn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ge(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(He(e))})}async initializeRecaptchaConfig(){const e=await _a(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ba(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Zh(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kt("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&He(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await At.create(this,[He(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Th(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function tn(n){return Ge(n)}class Is{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lu(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(n,e){const t=Ut(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Wt(s,e??{}))return r;Fe(r,"already-initialized")}return t.initialize({options:e})}function nm(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(He);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function im(n,e,t){const i=tn(n);q(i._canInitEmulator,i,"emulator-config-failed"),q(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),s=ya(e),{host:o,port:a}=rm(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||sm()}function ya(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function rm(n){const e=ya(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:ws(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:ws(o)}}}function ws(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function sm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ve("not implemented")}_getIdTokenResponse(e){return Ve("not implemented")}_linkToIdToken(e,t){return Ve("not implemented")}_getReauthenticationResolver(e){return Ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(n,e){return Ph(n,"POST","/v1/accounts:signInWithIdp",ra(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="http://localhost";class It extends Ia{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new It(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=qi(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new It(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ct(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ct(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ct(e,t)}buildRequest(){const e={requestUri:om,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Yi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends nn{constructor(){super("facebook.com")}static credential(e){return It._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qe.credential(e.oauthAccessToken)}catch{return null}}}Qe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends nn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return It._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ze.credential(t,i)}catch{return null}}}Ze.GOOGLE_SIGN_IN_METHOD="google.com";Ze.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends nn{constructor(){super("github.com")}static credential(e){return It._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.GITHUB_SIGN_IN_METHOD="github.com";De.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends nn{constructor(){super("twitter.com")}static credential(e,t){return It._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $e.credentialFromTaggedObject(e)}static credentialFromError(e){return $e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return $e.credential(t,i)}catch{return null}}}$e.TWITTER_SIGN_IN_METHOD="twitter.com";$e.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await mt._fromIdTokenResponse(e,i,r),o=Es(i);return new Mt({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Es(i);return new Mt({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Es(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Be{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,An.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new An(e,t,i,r)}}function wa(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?An._fromErrorAndOperation(n,s,e,i):s})}async function am(n,e,t=!1){const i=await Kt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const s=await Kt(n,wa(i,r,e,n),t);q(s.idToken,i,"internal-error");const o=xi(s.idToken);q(o,i,"internal-error");const{sub:a}=o;return q(n.uid===a,i,"user-mismatch"),Mt._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Fe(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cm(n,e,t=!1){const i="signIn",r=await wa(n,i,e),s=await Mt._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function um(n,e,t,i){return Ge(n).onIdTokenChanged(e,t,i)}function fm(n,e,t){return Ge(n).beforeAuthStateChanged(e,t)}function dm(n){return Ge(n).signOut()}const Cn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cn,"1"),this.storage.removeItem(Cn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(){const n=ge();return Ji(n)||Vn(n)}const mm=1e3,gm=10;class ka extends Ea{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hm()&&Gh(),this.fallbackToPolling=ga(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Kh()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,gm):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},mm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ka.type="LOCAL";const pm=ka;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends Ea{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ta.type="SESSION";const Sa=Ta;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Hn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await _m(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Xi("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(u){const d=u;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return window}function vm(n){Le().location.href=n}/**
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
 */function Aa(){return typeof Le().WorkerGlobalScope<"u"&&typeof Le().importScripts=="function"}async function ym(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Im(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wm(){return Aa()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="firebaseLocalStorageDb",Em=1,Rn="firebaseLocalStorage",Ra="fbase_key";class rn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jn(n,e){return n.transaction([Rn],e?"readwrite":"readonly").objectStore(Rn)}function km(){const n=indexedDB.deleteDatabase(Ca);return new rn(n).toPromise()}function vi(){const n=indexedDB.open(Ca,Em);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Rn,{keyPath:Ra})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Rn)?e(i):(i.close(),await km(),e(await vi()))})})}async function ks(n,e,t){const i=jn(n,!0).put({[Ra]:e,value:t});return new rn(i).toPromise()}async function Tm(n,e){const t=jn(n,!1).get(e),i=await new rn(t).toPromise();return i===void 0?null:i.value}function Ts(n,e){const t=jn(n,!0).delete(e);return new rn(t).toPromise()}const Sm=800,Am=3;class Da{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Am)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Aa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hn._getInstance(wm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ym(),!this.activeServiceWorker)return;this.sender=new bm(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Im()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vi();return await ks(e,Cn,"1"),await Ts(e,Cn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ks(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Tm(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ts(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=jn(r,!1).getAll();return new rn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Da.type="LOCAL";const Cm=Da;new $t(3e4,6e4);/**
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
 */function Oa(n,e){return e?He(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends Ia{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ct(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ct(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ct(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rm(n){return cm(n.auth,new Qi(n),n.bypassAuthState)}function Dm(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),lm(t,new Qi(n),n.bypassAuthState)}async function Om(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),am(t,new Qi(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rm;case"linkViaPopup":case"linkViaRedirect":return Om;case"reauthViaPopup":case"reauthViaRedirect":return Dm;default:Fe(this.auth,"internal-error")}}resolve(e){qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=new $t(2e3,1e4);async function Lm(n,e,t){const i=tn(n);Sh(n,e,Yi);const r=Oa(i,t);return new dt(i,"signInViaPopup",e,r).executeNotNull()}class dt extends Pa{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,dt.currentPopupAction&&dt.currentPopupAction.cancel(),dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){qe(this.filter.length===1,"Popup operations only handle one event");const e=Xi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Pm.get())};e()}}dt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="pendingRedirect",hn=new Map;class Mm extends Pa{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=hn.get(this.auth._key());if(!e){try{const i=await Um(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}hn.set(this.auth._key(),e)}return this.bypassAuthState||hn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Um(n,e){const t=Vm(e),i=Bm(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function Fm(n,e){hn.set(n._key(),e)}function Bm(n){return He(n._redirectPersistence)}function Vm(n){return dn(Nm,n.config.apiKey,n.name)}async function Hm(n,e,t=!1){const i=tn(n),r=Oa(i,e),o=await new Mm(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=10*60*1e3;class zm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!La(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Pe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ss(e))}saveEventToCache(e){this.cachedEventUids.add(Ss(e)),this.lastProcessedEventTime=Date.now()}}function Ss(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function La({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return La(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(n,e={}){return en(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gm=/^https?/;async function xm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qm(n);for(const t of e)try{if(Jm(t))return}catch{}Fe(n,"unauthorized-domain")}function Jm(n){const e=bi(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Gm.test(t))return!1;if(Km.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Ym=new $t(3e4,6e4);function As(){const n=Le().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Xm(n){return new Promise((e,t)=>{var i,r,s;function o(){As(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{As(),t(Pe(n,"network-request-failed"))},timeout:Ym.get()})}if(!((r=(i=Le().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Le().gapi)===null||s===void 0)&&s.load)o();else{const a=Jh("iframefcb");return Le()[a]=()=>{gapi.load?o():t(Pe(n,"network-request-failed"))},va(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw mn=null,e})}let mn=null;function Qm(n){return mn=mn||Xm(n),mn}/**
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
 */const Zm=new $t(5e3,15e3),$m="__/auth/iframe",eg="emulator/auth/iframe",tg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ng=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ig(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gi(e,eg):`https://${n.config.authDomain}/${$m}`,i={apiKey:e.apiKey,appName:n.name,v:Zt},r=ng.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Qt(i).slice(1)}`}async function rg(n){const e=await Qm(n),t=Le().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:ig(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tg,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Pe(n,"network-request-failed"),a=Le().setTimeout(()=>{s(o)},Zm.get());function l(){Le().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const sg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},og=500,ag=600,lg="_blank",cg="http://localhost";class Cs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ug(n,e,t,i=og,r=ag){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sg),{width:i.toString(),height:r.toString(),top:s,left:o}),c=ge().toLowerCase();t&&(a=ua(c)?lg:t),ca(c)&&(e=e||cg,l.scrollbars="yes");const f=Object.entries(l).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(qh(c)&&a!=="_self")return fg(e||"",a),new Cs(null);const u=window.open(e||"",a,f);q(u,n,"popup-blocked");try{u.focus()}catch{}return new Cs(u)}function fg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const dg="__/auth/handler",hg="emulator/auth/handler",mg=encodeURIComponent("fac");async function Rs(n,e,t,i,r,s){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Zt,eventId:r};if(e instanceof Yi){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Pu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(s||{}))o[f]=u}if(e instanceof nn){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await n._getAppCheckToken(),c=l?`#${mg}=${encodeURIComponent(l)}`:"";return`${gg(n)}?${Qt(a).slice(1)}${c}`}function gg({config:n}){return n.emulator?Gi(n,hg):`https://${n.authDomain}/${dg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="webStorageSupport";class pg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sa,this._completeRedirectFn=Hm,this._overrideRedirectResult=Fm}async _openPopup(e,t,i,r){var s;qe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Rs(e,t,i,bi(),r);return ug(e,o,Xi())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await Rs(e,t,i,bi(),r);return vm(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(qe(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await rg(e),i=new zm(e);return t.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(si,{type:si},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[si];o!==void 0&&t(!!o),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ga()||Ji()||Vn()}}const _g=pg;var Ds="@firebase/auth",Os="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yg(n){We(new Ue("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pa(n)},c=new em(i,r,s,l);return nm(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),We(new Ue("auth-internal",e=>{const t=tn(e.getProvider("auth").getImmediate());return(i=>new bg(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Oe(Ds,Os,vg(n)),Oe(Ds,Os,"esm2017")}/**
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
 */const Ig=5*60,wg=yo("authIdTokenMaxAge")||Ig;let Ps=null;const Eg=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>wg)return;const r=t==null?void 0:t.token;Ps!==r&&(Ps=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function kg(n=Ao()){const e=Ut(n,"auth");if(e.isInitialized())return e.getImmediate();const t=tm(n,{popupRedirectResolver:_g,persistence:[Cm,pm,Sa]}),i=yo("authTokenSyncURL");if(i){const s=Eg(i);fm(t,s,()=>s(t.currentUser)),um(t,o=>s(o))}const r=Eu("auth");return r&&im(t,`http://${r}`),t}yg("Browser");const Tg={apiKey:"AIzaSyAjCRLDHuTkfnKU5TTV6ZZasUXecSvlQOE",authDomain:"virtual-pinball-spreadsh-71a64.firebaseapp.com",projectId:"virtual-pinball-spreadsh-71a64",appId:"1:497322440319:web:8a7f7a2997664a9af7f14a",measurementId:"G-DB48L7QGX0"},Na=So(Tg);yh(Na);const Ma=kg(Na),Sg="VirtualPinballSpreadsheet",Ag="vps-db",Zi=Ln("user",{});let Cg;const Rg=()=>{const n=new De;n.addScope("public_repo"),n.setCustomParameters({allow_signup:"false"}),Lm(Ma,n).then(async e=>{const t=De.credentialFromResult(e),i=e.user;if(i.displayName=e._tokenResponse.screenName,!(t!=null&&t.accessToken))throw new Error;Ua(t.accessToken,i)}).catch(e=>{console.error(e)})},Ua=async(n,e)=>{try{const{Octokit:t}=await or(()=>import("https://esm.sh/octokit"),[],import.meta.url),{createOrUpdateTextFile:i}=await or(()=>import("https://esm.sh/@octokit/plugin-create-or-update-text-file"),[],import.meta.url),r=t.plugin(i),s=new r({auth:n}),a=(await s.request("GET /repos/{owner}/{repo}/collaborators/{username}/permission",{owner:Sg,username:e.displayName,repo:Ag})).data.permission;if(!(a==="admin"||a==="write"||location.hostname==="localhost"||location.hostname==="127.0.0.1")){Vt().trigger({message:"You don't have permission to edit on VPS.",background:"variant-filled-error"});return}Cg=s,Zi.set({user:e,permission:a,token:n}),Vt().trigger({message:"Login successfull",background:"variant-filled-success"})}catch(t){console.log(t),Vt().trigger({message:"Login was unsuccessfull.",background:"variant-filled-error"})}},Dg=()=>{dm(Ma).then(()=>{Zi.set({}),Vt().trigger({message:"Logout successfull",background:"variant-filled-success"})})},sn={login:Ua,logout:Dg,triggerLoginPopup:Rg,userStore:Zi};function Ls(n,e,t){const i=n.slice();return i[7]=e[t],i}function Ns(n){let e,t=n[7][1].name+"",i;return{c(){e=R("option"),i=le(t),this.h()},l(r){e=D(r,"OPTION",{});var s=P(e);i=ce(s,t),s.forEach(w),this.h()},h(){e.__value=n[7][0],je(e,e.__value)},m(r,s){F(r,e,s),T(e,i)},p:ne,d(r){r&&w(e)}}}function Og(n){let e,t,i,r,s,o,a,l,c,f,u,d,m,v;r=new _n({props:{icon:Xa}});let y=Ne(n[5]),p=[];for(let g=0;g<y.length;g+=1)p[g]=Ns(Ls(n,y,g));return u=new _n({props:{icon:Qa}}),{c(){e=R("div"),t=R("div"),i=R("div"),Z(r.$$.fragment),s=z(),o=R("input"),a=z(),l=R("select");for(let g=0;g<p.length;g+=1)p[g].c();c=z(),f=R("button"),Z(u.$$.fragment),this.h()},l(g){e=D(g,"DIV",{class:!0});var h=P(e);t=D(h,"DIV",{class:!0});var b=P(t);i=D(b,"DIV",{class:!0});var I=P(i);te(r.$$.fragment,I),I.forEach(w),s=W(b),o=D(b,"INPUT",{type:!0,placeholder:!0}),a=W(b),l=D(b,"SELECT",{class:!0});var E=P(l);for(let C=0;C<p.length;C+=1)p[C].l(E);E.forEach(w),b.forEach(w),c=W(h),f=D(h,"BUTTON",{class:!0});var k=P(f);te(u.$$.fragment,k),k.forEach(w),h.forEach(w),this.h()},h(){_(i,"class","input-group-shim"),_(o,"type","search"),_(o,"placeholder","Search..."),_(l,"class","select rounded-l-none"),n[1]===void 0&&st(()=>n[9].call(l)),_(t,"class","input-group input-group-divider grid-cols-[auto_1fr_auto]"),_(f,"class","btn hover:variant-soft-primary btn-icon"),et(f,"variant-filled-primary",n[2]),_(e,"class","px-4 flex items-center gap-4")},m(g,h){F(g,e,h),T(e,t),T(t,i),$(r,i,null),T(t,s),T(t,o),je(o,n[0]),T(t,a),T(t,l);for(let b=0;b<p.length;b+=1)p[b]&&p[b].m(l,null);nr(l,n[1],!0),T(e,c),T(e,f),$(u,f,null),d=!0,m||(v=[j(o,"input",n[8]),j(l,"change",n[9]),j(f,"click",n[10])],m=!0)},p(g,h){if(h&1&&o.value!==g[0]&&je(o,g[0]),h&32){y=Ne(g[5]);let b;for(b=0;b<y.length;b+=1){const I=Ls(g,y,b);p[b]?p[b].p(I,h):(p[b]=Ns(I),p[b].c(),p[b].m(l,null))}for(;b<p.length;b+=1)p[b].d(1);p.length=y.length}h&34&&nr(l,g[1]),(!d||h&4)&&et(f,"variant-filled-primary",g[2])},i(g){d||(O(r.$$.fragment,g),O(u.$$.fragment,g),d=!0)},o(g){M(r.$$.fragment,g),M(u.$$.fragment,g),d=!1},d(g){g&&w(e),ee(r),Ks(p,g),ee(u),m=!1,Re(v)}}}function Pg(n){let e,t=`<img src="${gu}" alt="VPS" width="36px"/>`;return{c(){e=R("a"),e.innerHTML=t,this.h()},l(i){e=D(i,"A",{href:!0,class:!0,"data-svelte-h":!0}),gt(e)!=="svelte-kw8dyq"&&(e.innerHTML=t),this.h()},h(){_(e,"href","/"),_(e,"class","ml-4 rounded-full logo transition-shadow svelte-tmztqq")},m(i,r){F(i,e,r)},p:ne,d(i){i&&w(e)}}}function Lg(n){let e,t,i="Apps",r,s,o="Links",a,l,c,f,u,d,m,v,y,p;return f=new _n({props:{icon:Za,class:"ml-2",size:"xs"}}),m=new _n({props:{icon:$a}}),{c(){e=R("div"),t=R("a"),t.textContent=i,r=z(),s=R("a"),s.textContent=o,a=z(),l=R("button"),c=le("Settings "),Z(f.$$.fragment),u=z(),d=R("a"),Z(m.$$.fragment),this.h()},l(g){e=D(g,"DIV",{slot:!0,class:!0});var h=P(e);t=D(h,"A",{href:!0,class:!0,"data-svelte-h":!0}),gt(t)!=="svelte-tjfgp6"&&(t.textContent=i),r=W(h),s=D(h,"A",{href:!0,class:!0,"data-svelte-h":!0}),gt(s)!=="svelte-in8qks"&&(s.textContent=o),a=W(h),l=D(h,"BUTTON",{class:!0});var b=P(l);c=ce(b,"Settings "),te(f.$$.fragment,b),b.forEach(w),u=W(h),d=D(h,"A",{href:!0,class:!0});var I=P(d);te(m.$$.fragment,I),I.forEach(w),h.forEach(w),this.h()},h(){_(t,"href","apps/"),_(t,"class","btn btn-sm hover:variant-soft-primary"),_(s,"href","links/"),_(s,"class","btn btn-sm hover:variant-soft-primary"),_(l,"class","btn btn-sm hover:variant-soft-primary"),_(d,"href","help/"),_(d,"class","btn hover:variant-soft-primary btn-icon"),_(e,"slot","trail"),_(e,"class","mr-4 flex items-center gap-4")},m(g,h){F(g,e,h),T(e,t),T(e,r),T(e,s),T(e,a),T(e,l),T(l,c),$(f,l,null),T(e,u),T(e,d),$(m,d,null),v=!0,y||(p=On(Zs.call(null,l,n[6])),y=!0)},p:ne,i(g){v||(O(f.$$.fragment,g),O(m.$$.fragment,g),v=!0)},o(g){M(f.$$.fragment,g),M(m.$$.fragment,g),v=!1},d(g){g&&w(e),ee(f),ee(m),y=!1,p()}}}function Ng(n){let e,t;return e=new Dl({props:{$$slots:{trail:[Lg],lead:[Pg],default:[Og]},$$scope:{ctx:n}}}),{c(){Z(e.$$.fragment)},l(i){te(e.$$.fragment,i)},m(i,r){$(e,i,r),t=!0},p(i,[r]){const s={};r&32775&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){t||(O(e.$$.fragment,i),t=!0)},o(i){M(e.$$.fragment,i),t=!1},d(i){ee(e,i)}}}function Mg(n,e,t){let i,r,s;const{query:o,mode:a,filterActive:l}=Xe;_e(n,o,v=>t(0,i=v)),_e(n,a,v=>t(1,r=v)),_e(n,l,v=>t(2,s=v));const c=Object.entries(xs),f={event:"focus-click",target:"popupSettings",placement:"bottom",closeQuery:".listbox-item"};function u(){i=this.value,o.set(i)}function d(){r=Va(this),a.set(r),t(5,c)}return[i,r,s,o,l,c,f,a,u,d,()=>qs(l,s=!s,s)]}class Ug extends de{constructor(e){super(),he(this,e,Mg,Ng,ue,{})}}const Fa=el("goto");Xe.finalResultsStore.subscribe(()=>{var o;const n=ut(Xe.query),e=ut(Xe.filterActive);if(!n&&!e)return;const t=ut(Ai),i=(o=t==null?void 0:t.url)==null?void 0:o.pathname;if(!i||!ut(Xe.isSearchActive)&&i==="/")return;const r=ut(Xe.mode),s=xs[r].route;i!=null&&i.includes(s)||(console.log(t,i,r,s),Fa("/"+s,{keepFocus:!0}))});function Fg(n){var r,s;let e,t=((s=(r=n[0][0])==null?void 0:r.meta)==null?void 0:s.game)+"",i;return{c(){e=R("div"),i=le(t),this.h()},l(o){e=D(o,"DIV",{class:!0});var a=P(e);i=ce(a,t),a.forEach(w),this.h()},h(){_(e,"class","card p-4")},m(o,a){F(o,e,a),T(e,i)},p(o,[a]){var l,c;a&1&&t!==(t=((c=(l=o[0][0])==null?void 0:l.meta)==null?void 0:c.game)+"")&&ve(i,t)},i:ne,o:ne,d(o){o&&w(e)}}}function Bg(n,e,t){let i,r;_e(n,Ai,o=>t(2,i=o));const s=Ci();return _e(n,s,o=>t(0,r=o)),Ha(()=>{Fa(i.url.pathname)}),[r,s]}class Vg extends de{constructor(e){super(),he(this,e,Bg,Fg,ue,{})}}function Hg(n,e,t){let i;_e(n,Ai,s=>t(0,i=s));const r={ref:Vg,slot:"<p>Skeleton</p>"};return n.$$.update=()=>{var s;if(n.$$.dirty&1){const o=(s=i==null?void 0:i.url)==null?void 0:s.searchParams;if(o){const a=o.get("game");if(a){const l={type:"component",meta:{game:a},component:r};Ci().trigger(l)}}}},[i]}class jg extends de{constructor(e){super(),he(this,e,Hg,null,ue,{})}}function zg(n){let e,t,i,r,s=n[0].user.displayName+"",o,a,l,c="Logout",f,u,d;return t=new no({props:{src:n[0].user.photoURL||"",width:"w-6",rounded:"rounded-full"}}),{c(){e=R("div"),Z(t.$$.fragment),i=z(),r=R("span"),o=le(s),a=z(),l=R("button"),l.textContent=c,this.h()},l(m){e=D(m,"DIV",{class:!0});var v=P(e);te(t.$$.fragment,v),i=W(v),r=D(v,"SPAN",{});var y=P(r);o=ce(y,s),y.forEach(w),v.forEach(w),a=W(m),l=D(m,"BUTTON",{class:!0,"data-svelte-h":!0}),gt(l)!=="svelte-nsylsw"&&(l.textContent=c),this.h()},h(){_(e,"class","space-x-2 flex items-center"),_(l,"class","btn w-full variant-filled-secondary")},m(m,v){F(m,e,v),$(t,e,null),T(e,i),T(e,r),T(r,o),F(m,a,v),F(m,l,v),f=!0,u||(d=j(l,"click",sn.logout),u=!0)},p(m,v){const y={};v&1&&(y.src=m[0].user.photoURL||""),t.$set(y),(!f||v&1)&&s!==(s=m[0].user.displayName+"")&&ve(o,s)},i(m){f||(O(t.$$.fragment,m),f=!0)},o(m){M(t.$$.fragment,m),f=!1},d(m){m&&(w(e),w(a),w(l)),ee(t),u=!1,d()}}}function Wg(n){let e,t="Admin Login",i,r;return{c(){e=R("button"),e.textContent=t,this.h()},l(s){e=D(s,"BUTTON",{class:!0,"data-svelte-h":!0}),gt(e)!=="svelte-e3s47o"&&(e.textContent=t),this.h()},h(){_(e,"class","btn btn-sm variant-ghost-surface")},m(s,o){F(s,e,o),i||(r=j(e,"click",sn.triggerLoginPopup),i=!0)},p:ne,i:ne,o:ne,d(s){s&&w(e),i=!1,r()}}}function qg(n){let e,t,i,r,s,o,a,l,c,f,u,d,m,v;s=new Rc({});const y=[Wg,zg],p=[];function g(h,b){return h[0].user?1:0}return f=g(n),u=p[f]=y[f](n),{c(){e=R("div"),t=R("div"),i=R("div"),r=le("Toggle Dark/Light "),Z(s.$$.fragment),o=z(),a=R("hr"),l=z(),c=R("div"),u.c(),d=z(),m=R("div"),this.h()},l(h){e=D(h,"DIV",{class:!0,"data-popup":!0});var b=P(e);t=D(b,"DIV",{class:!0});var I=P(t);i=D(I,"DIV",{class:!0});var E=P(i);r=ce(E,"Toggle Dark/Light "),te(s.$$.fragment,E),E.forEach(w),I.forEach(w),o=W(b),a=D(b,"HR",{}),l=W(b),c=D(b,"DIV",{class:!0});var k=P(c);u.l(k),k.forEach(w),d=W(b),m=D(b,"DIV",{class:!0}),P(m).forEach(w),b.forEach(w),this.h()},h(){_(i,"class","flex justify-between items-center gap-8 text-sm"),_(t,"class","p-4"),_(c,"class","p-4 flex flex-col gap-4"),_(m,"class","arrow bg-surface-100-800-token"),_(e,"class","card 8 shadow-xl popup"),_(e,"data-popup","popupSettings")},m(h,b){F(h,e,b),T(e,t),T(t,i),T(i,r),$(s,i,null),T(e,o),T(e,a),T(e,l),T(e,c),p[f].m(c,null),T(e,d),T(e,m),v=!0},p(h,[b]){let I=f;f=g(h),f===I?p[f].p(h,b):(re(),M(p[I],1,1,()=>{p[I]=null}),se(),u=p[f],u?u.p(h,b):(u=p[f]=y[f](h),u.c()),O(u,1),u.m(c,null))},i(h){v||(O(s.$$.fragment,h),O(u),v=!0)},o(h){M(s.$$.fragment,h),M(u),v=!1},d(h){h&&w(e),ee(s),p[f].d()}}}function Kg(n,e,t){let i;const{userStore:r}=sn;return _e(n,r,s=>t(0,i=s)),[i,r]}class Gg extends de{constructor(e){super(),he(this,e,Kg,qg,ue,{})}}function xg(n){var p,g;let e,t,i,r,s,o=((p=n[0].user)==null?void 0:p.displayName)+"",a,l,c,f="Logout",u,d,m,v,y;return i=new no({props:{src:((g=n[0].user)==null?void 0:g.photoURL)||"",width:"w-12",rounded:"rounded-full"}}),{c(){e=R("div"),t=R("div"),Z(i.$$.fragment),r=z(),s=R("b"),a=le(o),l=z(),c=R("button"),c.textContent=f,u=z(),d=R("div"),this.h()},l(h){e=D(h,"DIV",{class:!0,"data-popup":!0});var b=P(e);t=D(b,"DIV",{class:!0});var I=P(t);te(i.$$.fragment,I),r=W(I),s=D(I,"B",{});var E=P(s);a=ce(E,o),E.forEach(w),l=W(I),c=D(I,"BUTTON",{class:!0,"data-svelte-h":!0}),gt(c)!=="svelte-nsylsw"&&(c.textContent=f),I.forEach(w),u=W(b),d=D(b,"DIV",{class:!0}),P(d).forEach(w),b.forEach(w),this.h()},h(){_(c,"class","btn w-full variant-filled-secondary"),_(t,"class","flex flex-col space-y-2"),_(d,"class","arrow bg-surface-100-800-token"),_(e,"class","card p-4 w-72 shadow-xl popup"),_(e,"data-popup","popupUser")},m(h,b){F(h,e,b),T(e,t),$(i,t,null),T(t,r),T(t,s),T(s,a),T(t,l),T(t,c),T(e,u),T(e,d),m=!0,v||(y=j(c,"click",sn.logout),v=!0)},p(h,[b]){var E,k;const I={};b&1&&(I.src=((E=h[0].user)==null?void 0:E.photoURL)||""),i.$set(I),(!m||b&1)&&o!==(o=((k=h[0].user)==null?void 0:k.displayName)+"")&&ve(a,o)},i(h){m||(O(i.$$.fragment,h),m=!0)},o(h){M(i.$$.fragment,h),m=!1},d(h){h&&w(e),ee(i),v=!1,y()}}}function Jg(n,e,t){let i;const{userStore:r}=sn;return _e(n,r,s=>t(0,i=s)),[i,r]}class Yg extends de{constructor(e){super(),he(this,e,Jg,xg,ue,{})}}function Xg(n){let e,t,i,r;return e=new Yg({}),i=new Gg({}),{c(){Z(e.$$.fragment),t=z(),Z(i.$$.fragment)},l(s){te(e.$$.fragment,s),t=W(s),te(i.$$.fragment,s)},m(s,o){$(e,s,o),F(s,t,o),$(i,s,o),r=!0},p:ne,i(s){r||(O(e.$$.fragment,s),O(i.$$.fragment,s),r=!0)},o(s){M(e.$$.fragment,s),M(i.$$.fragment,s),r=!1},d(s){s&&w(t),ee(e,s),ee(i,s)}}}class Qg extends de{constructor(e){super(),he(this,e,null,Xg,ue,{})}}function Ms(n,e,t){const i=n.slice();return i[43]=e[t].id,i[44]=e[t].val,i[46]=t,i}function Us(n,e,t){const i=n.slice();return i[47]=e[t],i}function Fs(n){let e,t=n[47]+"",i,r;return{c(){e=R("option"),i=le(t),this.h()},l(s){e=D(s,"OPTION",{});var o=P(e);i=ce(o,t),o.forEach(w),this.h()},h(){e.__value=r=n[47],je(e,e.__value)},m(s,o){F(s,e,o),T(e,i)},p(s,o){o[0]&1&&t!==(t=s[47]+"")&&ve(i,t),o[0]&1&&r!==(r=s[47])&&(e.__value=r,je(e,e.__value))},d(s){s&&w(e)}}}function Bs(n){let e,t=[],i=new Map,r,s,o,a=Ne(n[11]);const l=c=>c[43];for(let c=0;c<a.length;c+=1){let f=Ms(n,a,c),u=l(f);i.set(u,t[c]=Vs(u,f))}return{c(){e=R("div");for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l(c){e=D(c,"DIV",{class:!0});var f=P(e);for(let u=0;u<t.length;u+=1)t[u].l(f);f.forEach(w),this.h()},h(){_(e,"class",r="input-chip-list "+n[8])},m(c,f){F(c,e,f);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(e,null);o=!0},p(c,f){if(n=c,f[0]&18472){a=Ne(n[11]),re();for(let u=0;u<t.length;u+=1)t[u].r();t=Si(t,f,l,1,n,a,i,e,Gs,Vs,null,Ms);for(let u=0;u<t.length;u+=1)t[u].a();se()}(!o||f[0]&256&&r!==(r="input-chip-list "+n[8]))&&_(e,"class",r)},i(c){if(!o){for(let f=0;f<a.length;f+=1)O(t[f]);c&&st(()=>{o&&(s||(s=Ot(e,Pt,{duration:n[3],opacity:0,y:-20},!0)),s.run(1))}),o=!0}},o(c){for(let f=0;f<t.length;f+=1)M(t[f]);c&&(s||(s=Ot(e,Pt,{duration:n[3],opacity:0,y:-20},!1)),s.run(0)),o=!1},d(c){c&&w(e);for(let f=0;f<t.length;f+=1)t[f].d();c&&s&&s.end()}}}function Vs(n,e){let t,i,r,s=e[44]+"",o,a,l,c="✕",f,u,d,m,v=ne,y,p,g;function h(...b){return e[38](e[46],e[44],...b)}return{key:n,first:null,c(){t=R("div"),i=R("button"),r=R("span"),o=le(s),a=z(),l=R("span"),l.textContent=c,d=z(),this.h()},l(b){t=D(b,"DIV",{});var I=P(t);i=D(I,"BUTTON",{type:!0,class:!0});var E=P(i);r=D(E,"SPAN",{});var k=P(r);o=ce(k,s),k.forEach(w),a=W(E),l=D(E,"SPAN",{"data-svelte-h":!0}),gt(l)!=="svelte-1p578dz"&&(l.textContent=c),E.forEach(w),d=W(I),I.forEach(w),this.h()},h(){_(i,"type","button"),_(i,"class",f="chip "+e[5]),this.first=t},m(b,I){F(b,t,I),T(t,i),T(i,r),T(r,o),T(i,a),T(i,l),T(t,d),y=!0,p||(g=[j(i,"click",h),j(i,"click",e[28]),j(i,"keypress",e[29]),j(i,"keydown",e[30]),j(i,"keyup",e[31])],p=!0)},p(b,I){e=b,(!y||I[0]&2048)&&s!==(s=e[44]+"")&&ve(o,s),(!y||I[0]&32&&f!==(f="chip "+e[5]))&&_(i,"class",f)},r(){m=t.getBoundingClientRect()},f(){Ys(t),v()},a(){v(),v=Js(t,m,io,{duration:e[3]})},i(b){y||(b&&st(()=>{y&&(u||(u=Ot(i,fr,{duration:e[3],opacity:0},!0)),u.run(1))}),y=!0)},o(b){b&&(u||(u=Ot(i,fr,{duration:e[3],opacity:0},!1)),u.run(0)),y=!1},d(b){b&&w(t),b&&u&&u.end(),p=!1,Re(g)}}}function Zg(n){let e,t,i,r,s,o,a,l,c,f,u,d,m,v,y,p,g=Ne(n[0]),h=[];for(let I=0;I<g.length;I+=1)h[I]=Fs(Us(n,g,I));let b=n[11].length&&Bs(n);return{c(){e=R("div"),t=R("div"),i=R("select");for(let I=0;I<h.length;I+=1)h[I].c();r=z(),s=R("div"),o=R("form"),a=R("input"),u=z(),b&&b.c(),this.h()},l(I){e=D(I,"DIV",{class:!0});var E=P(e);t=D(E,"DIV",{class:!0});var k=P(t);i=D(k,"SELECT",{name:!0,tabindex:!0});var C=P(i);for(let A=0;A<h.length;A+=1)h[A].l(C);C.forEach(w),k.forEach(w),r=W(E),s=D(E,"DIV",{class:!0});var S=P(s);o=D(S,"FORM",{});var L=P(o);a=D(L,"INPUT",{type:!0,placeholder:!0,class:!0}),L.forEach(w),u=W(S),b&&b.l(S),S.forEach(w),E.forEach(w),this.h()},h(){_(i,"name",n[2]),i.multiple=!0,i.required=n[4],_(i,"tabindex","-1"),n[0]===void 0&&st(()=>n[36].call(i)),_(t,"class","h-0 overflow-hidden"),_(a,"type","text"),_(a,"placeholder",l=n[15].placeholder??"Enter values..."),_(a,"class",c="input-chip-field "+n[7]),a.disabled=f=n[15].disabled,_(s,"class",d="input-chip-interface "+n[9]),_(e,"class",m="input-chip "+n[10]),et(e,"opacity-50",n[15].disabled)},m(I,E){F(I,e,E),T(e,t),T(t,i);for(let k=0;k<h.length;k+=1)h[k]&&h[k].m(i,null);n[35](i),ir(i,n[0]),T(e,r),T(e,s),T(s,o),T(o,a),je(a,n[1]),T(s,u),b&&b.m(s,null),v=!0,y||(p=[j(i,"change",n[36]),j(a,"input",n[37]),j(a,"input",n[12]),j(a,"input",n[32]),j(a,"focus",n[33]),j(a,"blur",n[34]),j(o,"submit",n[13])],y=!0)},p(I,E){if(E[0]&1){g=Ne(I[0]);let k;for(k=0;k<g.length;k+=1){const C=Us(I,g,k);h[k]?h[k].p(C,E):(h[k]=Fs(C),h[k].c(),h[k].m(i,null))}for(;k<h.length;k+=1)h[k].d(1);h.length=g.length}(!v||E[0]&4)&&_(i,"name",I[2]),(!v||E[0]&16)&&(i.required=I[4]),E[0]&1&&ir(i,I[0]),(!v||E[0]&32768&&l!==(l=I[15].placeholder??"Enter values..."))&&_(a,"placeholder",l),(!v||E[0]&128&&c!==(c="input-chip-field "+I[7]))&&_(a,"class",c),(!v||E[0]&32768&&f!==(f=I[15].disabled))&&(a.disabled=f),E[0]&2&&a.value!==I[1]&&je(a,I[1]),I[11].length?b?(b.p(I,E),E[0]&2048&&O(b,1)):(b=Bs(I),b.c(),O(b,1),b.m(s,null)):b&&(re(),M(b,1,1,()=>{b=null}),se()),(!v||E[0]&512&&d!==(d="input-chip-interface "+I[9]))&&_(s,"class",d),(!v||E[0]&1024&&m!==(m="input-chip "+I[10]))&&_(e,"class",m),(!v||E[0]&33792)&&et(e,"opacity-50",I[15].disabled)},i(I){v||(O(b),v=!0)},o(I){M(b),v=!1},d(I){I&&w(e),Ks(h,I),n[35](null),b&&b.d(),y=!1,Re(p)}}}const $g="textarea cursor-pointer",ep="space-y-4",tp="flex flex-wrap gap-2",np="unstyled bg-transparent border-0 !ring-0 p-0 w-full";function ip(n,e,t){let i,r,s,o,a,l;const c=["input","name","value","whitelist","max","minlength","maxlength","allowUpperCase","allowDuplicates","validation","duration","required","chips","invalid","padding","rounded"];let f=Rt(e,c);const u=Dn();let{input:d=""}=e,{name:m}=e,{value:v=[]}=e,{whitelist:y=[]}=e,{max:p=-1}=e,{minlength:g=-1}=e,{maxlength:h=-1}=e,{allowUpperCase:b=!1}=e,{allowDuplicates:I=!1}=e,{validation:E=()=>!0}=e,{duration:k=150}=e,{required:C=!1}=e,{chips:S="variant-filled"}=e,{invalid:L="input-error"}=e,{padding:A="p-2"}=e,{rounded:K="rounded-container-token"}=e,G=!0;function x(){t(0,v=[])}let J;Ei(()=>{if(!J.form)return;const B=J.form;return B.addEventListener("reset",x),()=>{B.removeEventListener("reset",x)}});function oe(){t(26,G=!0)}function ie(){return!(!d||(t(1,d=d.trim()),E!==void 0&&!E(d))||p!==-1&&v.length>=p||g!==-1&&d.length<g||h!==-1&&d.length>h||y.length>0&&!y.includes(d)||I===!1&&v.includes(d))}function me(B){if(B.preventDefault(),t(26,G=ie()),G===!1){u("invalid",{event:B,input:d});return}t(1,d=b?d:d.toLowerCase()),v.push(d),t(0,v),i.push({val:d,id:Math.random()}),t(11,i),t(0,v),u("add",{event:B,chipIndex:v.length-1,chipValue:d}),t(1,d="")}function Ie(B,lt,Bt){f.disabled||(v.splice(lt,1),t(0,v),i.splice(lt,1),t(11,i),t(0,v),u("remove",{event:B,chipIndex:lt,chipValue:Bt}))}function pe(B){Y.call(this,n,B)}function V(B){Y.call(this,n,B)}function H(B){Y.call(this,n,B)}function U(B){Y.call(this,n,B)}function Q(B){Y.call(this,n,B)}function xe(B){Y.call(this,n,B)}function zn(B){Y.call(this,n,B)}function Ft(B){Tt[B?"unshift":"push"](()=>{J=B,t(6,J)})}function Wn(){v=ja(this),t(0,v)}function qn(){d=this.value,t(1,d)}const Kn=(B,lt,Bt)=>{Ie(Bt,B,lt)};return n.$$set=B=>{t(42,e=ae(ae({},e),fe(B))),t(15,f=Rt(e,c)),"input"in B&&t(1,d=B.input),"name"in B&&t(2,m=B.name),"value"in B&&t(0,v=B.value),"whitelist"in B&&t(16,y=B.whitelist),"max"in B&&t(17,p=B.max),"minlength"in B&&t(18,g=B.minlength),"maxlength"in B&&t(19,h=B.maxlength),"allowUpperCase"in B&&t(20,b=B.allowUpperCase),"allowDuplicates"in B&&t(21,I=B.allowDuplicates),"validation"in B&&t(22,E=B.validation),"duration"in B&&t(3,k=B.duration),"required"in B&&t(4,C=B.required),"chips"in B&&t(5,S=B.chips),"invalid"in B&&t(23,L=B.invalid),"padding"in B&&t(24,A=B.padding),"rounded"in B&&t(25,K=B.rounded)},n.$$.update=()=>{n.$$.dirty[0]&1&&t(11,i=(v==null?void 0:v.map(B=>({val:B,id:Math.random()})))||[]),n.$$.dirty[0]&75497472&&t(27,r=G===!1?L:""),t(10,s=`${$g} ${A} ${K} ${e.class??""} ${r}`)},t(9,o=`${ep}`),t(8,a=`${tp}`),t(7,l=`${np}`),e=fe(e),[v,d,m,k,C,S,J,l,a,o,s,i,oe,me,Ie,f,y,p,g,h,b,I,E,L,A,K,G,r,pe,V,H,U,Q,xe,zn,Ft,Wn,qn,Kn]}class rp extends de{constructor(e){super(),he(this,e,ip,Zg,ue,{input:1,name:2,value:0,whitelist:16,max:17,minlength:18,maxlength:19,allowUpperCase:20,allowDuplicates:21,validation:22,duration:3,required:4,chips:5,invalid:23,padding:24,rounded:25},null,[-1,-1])}}function sp(n){let e;return{c(){e=le(n[1])},l(t){e=ce(t,n[1])},m(t,i){F(t,e,i)},p(t,i){i&2&&ve(e,t[1])},d(t){t&&w(e)}}}function Hs(n){let e,t,i,r,s,o,a,l,c,f,u,d,m;function v(b){n[8](b)}function y(b){n[9](b)}let p={name:"chips",chips:"variant-filled-primary"};n[2]!==void 0&&(p.input=n[2]),n[5].value!==void 0&&(p.value=n[5].value),t=new rp({props:p}),Tt.push(()=>un(t,"input",v)),Tt.push(()=>un(t,"value",y));function g(b){n[10](b)}let h={options:n[5].options,denylist:n[6]};return n[2]!==void 0&&(h.input=n[2]),a=new Xl({props:h}),Tt.push(()=>un(a,"input",g)),a.$on("selection",n[11]),{c(){e=R("div"),Z(t.$$.fragment),s=z(),o=R("div"),Z(a.$$.fragment),this.h()},l(b){e=D(b,"DIV",{});var I=P(e);te(t.$$.fragment,I),s=W(I),o=D(I,"DIV",{class:!0,style:!0,tabindex:!0,"data-popup":!0});var E=P(o);te(a.$$.fragment,E),E.forEach(w),I.forEach(w),this.h()},h(){var b;_(o,"class","card max-h-48 p-4 overflow-y-auto z-50"),rr(o,"width",(((b=n[3])==null?void 0:b.clientWidth)||100)+"px"),_(o,"tabindex","-1"),_(o,"data-popup",c=n[1]+"PopupAutocomplete")},m(b,I){F(b,e,I),$(t,e,null),T(e,s),T(e,o),$(a,o,null),n[12](e),u=!0,d||(m=On(f=Zs.call(null,e,n[4])),d=!0)},p(b,I){var C;const E={};!i&&I&4&&(i=!0,E.input=b[2],cn(()=>i=!1)),!r&&I&32&&(r=!0,E.value=b[5].value,cn(()=>r=!1)),t.$set(E);const k={};I&32&&(k.options=b[5].options),!l&&I&4&&(l=!0,k.input=b[2],cn(()=>l=!1)),a.$set(k),(!u||I&8)&&rr(o,"width",(((C=b[3])==null?void 0:C.clientWidth)||100)+"px"),(!u||I&2&&c!==(c=b[1]+"PopupAutocomplete"))&&_(o,"data-popup",c),f&&wi(f.update)&&I&16&&f.update.call(null,b[4])},i(b){u||(O(t.$$.fragment,b),O(a.$$.fragment,b),u=!0)},o(b){M(t.$$.fragment,b),M(a.$$.fragment,b),u=!1},d(b){b&&w(e),ee(t),ee(a),n[12](null),d=!1,m()}}}function op(n){let e,t,i,r,s;function o(c){n[7](c)}let a={size:"sm",active:"variant-filled-primary",name:"slide",$$slots:{default:[sp]},$$scope:{ctx:n}};n[5].active!==void 0&&(a.checked=n[5].active),t=new cc({props:a}),Tt.push(()=>un(t,"checked",o));let l=n[5].active&&Hs(n);return{c(){e=R("div"),Z(t.$$.fragment),r=z(),l&&l.c(),this.h()},l(c){e=D(c,"DIV",{class:!0});var f=P(e);te(t.$$.fragment,f),r=W(f),l&&l.l(f),f.forEach(w),this.h()},h(){_(e,"class","flex flex-col gap-4 w-80")},m(c,f){F(c,e,f),$(t,e,null),T(e,r),l&&l.m(e,null),s=!0},p(c,[f]){const u={};f&8194&&(u.$$scope={dirty:f,ctx:c}),!i&&f&32&&(i=!0,u.checked=c[5].active,cn(()=>i=!1)),t.$set(u),c[5].active?l?(l.p(c,f),f&32&&O(l,1)):(l=Hs(c),l.c(),O(l,1),l.m(e,null)):l&&(re(),M(l,1,1,()=>{l=null}),se())},i(c){s||(O(t.$$.fragment,c),O(l),s=!0)},o(c){M(t.$$.fragment,c),M(l),s=!1},d(c){c&&w(e),ee(t),l&&l.d()}}}function ap(n,e,t){let i,r,s=ne,o=()=>(s(),s=za(a,h=>t(5,r=h)),a);n.$$.on_destroy.push(()=>s());let{store:a}=e;o();let{title:l="???"}=e,c="",f=[],u;function d(h){n.$$.not_equal(r.active,h)&&(r.active=h,a.set(r))}function m(h){c=h,t(2,c)}function v(h){n.$$.not_equal(r.value,h)&&(r.value=h,a.set(r))}function y(h){c=h,t(2,c)}const p=h=>{r.value.push(h.detail.value),a.set(r),t(2,c="")};function g(h){Tt[h?"unshift":"push"](()=>{u=h,t(3,u)})}return n.$$set=h=>{"store"in h&&o(t(0,a=h.store)),"title"in h&&t(1,l=h.title)},n.$$.update=()=>{n.$$.dirty&2&&t(4,i={event:"focus-click",target:l+"PopupAutocomplete",placement:"bottom"})},[a,l,c,u,i,r,f,d,m,v,y,p,g]}class ln extends de{constructor(e){super(),he(this,e,ap,op,ue,{store:0,title:1})}}function lp(n){let e,t,i,r,s,o,a,l,c,f;return i=new ln({props:{store:n[3],title:"Features"}}),s=new ln({props:{store:n[2],title:"Author"}}),a=new ln({props:{store:n[0],title:"Manufacturer"}}),c=new ln({props:{store:n[1],title:"Theme"}}),{c(){e=R("div"),t=R("div"),Z(i.$$.fragment),r=z(),Z(s.$$.fragment),o=z(),Z(a.$$.fragment),l=z(),Z(c.$$.fragment),this.h()},l(u){e=D(u,"DIV",{class:!0});var d=P(e);t=D(d,"DIV",{class:!0});var m=P(t);te(i.$$.fragment,m),r=W(m),te(s.$$.fragment,m),o=W(m),te(a.$$.fragment,m),l=W(m),te(c.$$.fragment,m),m.forEach(w),d.forEach(w),this.h()},h(){_(t,"class","p-4 card w-full border-primary-600 border flex gap-4"),_(e,"class","p-4 flex")},m(u,d){F(u,e,d),T(e,t),$(i,t,null),T(t,r),$(s,t,null),T(t,o),$(a,t,null),T(t,l),$(c,t,null),f=!0},p:ne,i(u){f||(O(i.$$.fragment,u),O(s.$$.fragment,u),O(a.$$.fragment,u),O(c.$$.fragment,u),f=!0)},o(u){M(i.$$.fragment,u),M(s.$$.fragment,u),M(a.$$.fragment,u),M(c.$$.fragment,u),f=!1},d(u){u&&w(e),ee(i),ee(s),ee(a),ee(c)}}}function cp(n){const{manufacturer:e,theme:t,author:i,features:r}=Xe;return[e,t,i,r]}class up extends de{constructor(e){super(),he(this,e,cp,lp,ue,{})}}function fp(n){let e;const t=n[2].default,i=ke(t,n,n[3],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&8)&&Te(i,t,r,r[3],e?Ae(t,r[3],s,null):Se(r[3]),null)},i(r){e||(O(i,r),e=!0)},o(r){M(i,r),e=!1},d(r){i&&i.d(r)}}}function dp(n){let e,t;return e=new Ug({}),{c(){Z(e.$$.fragment)},l(i){te(e.$$.fragment,i)},m(i,r){$(e,i,r),t=!0},i(i){t||(O(e.$$.fragment,i),t=!0)},o(i){M(e.$$.fragment,i),t=!1},d(i){ee(e,i)}}}function js(n){let e,t;return e=new up({}),{c(){Z(e.$$.fragment)},l(i){te(e.$$.fragment,i)},m(i,r){$(e,i,r),t=!0},i(i){t||(O(e.$$.fragment,i),t=!0)},o(i){M(e.$$.fragment,i),t=!1},d(i){ee(e,i)}}}function hp(n){let e,t,i=n[0]&&js();return{c(){i&&i.c(),e=ye()},l(r){i&&i.l(r),e=ye()},m(r,s){i&&i.m(r,s),F(r,e,s),t=!0},p(r,s){r[0]?i?s&1&&O(i,1):(i=js(),i.c(),O(i,1),i.m(e.parentNode,e)):i&&(re(),M(i,1,1,()=>{i=null}),se())},i(r){t||(O(i),t=!0)},o(r){M(i),t=!1},d(r){r&&w(e),i&&i.d(r)}}}function mp(n){let e,t,i,r,s,o,a,l,c,f;return e=new Qg({}),i=new Uc({}),s=new wc({}),a=new jg({}),c=new Kl({props:{$$slots:{pageHeader:[hp],header:[dp],default:[fp]},$$scope:{ctx:n}}}),{c(){Z(e.$$.fragment),t=z(),Z(i.$$.fragment),r=z(),Z(s.$$.fragment),o=z(),Z(a.$$.fragment),l=z(),Z(c.$$.fragment)},l(u){te(e.$$.fragment,u),t=W(u),te(i.$$.fragment,u),r=W(u),te(s.$$.fragment,u),o=W(u),te(a.$$.fragment,u),l=W(u),te(c.$$.fragment,u)},m(u,d){$(e,u,d),F(u,t,d),$(i,u,d),F(u,r,d),$(s,u,d),F(u,o,d),$(a,u,d),F(u,l,d),$(c,u,d),f=!0},p(u,[d]){const m={};d&9&&(m.$$scope={dirty:d,ctx:u}),c.$set(m)},i(u){f||(O(e.$$.fragment,u),O(i.$$.fragment,u),O(s.$$.fragment,u),O(a.$$.fragment,u),O(c.$$.fragment,u),f=!0)},o(u){M(e.$$.fragment,u),M(i.$$.fragment,u),M(s.$$.fragment,u),M(a.$$.fragment,u),M(c.$$.fragment,u),f=!1},d(u){u&&(w(t),w(r),w(o),w(l)),ee(e,u),ee(i,u),ee(s,u),ee(a,u),ee(c,u)}}}function gp(n,e,t){let i,{$$slots:r={},$$scope:s}=e;fl(),Qs.set({computePosition:mu,autoUpdate:hu,offset:Jc,shift:Yc,flip:Gc,arrow:Kc});const{filterActive:o}=Xe;return _e(n,o,a=>t(0,i=a)),Ei(()=>{Ya.fetchDb()}),n.$$set=a=>{"$$scope"in a&&t(3,s=a.$$scope)},[i,o,r,s]}class Tp extends de{constructor(e){super(),he(this,e,gp,mp,ue,{})}}export{Tp as component,kp as universal};
