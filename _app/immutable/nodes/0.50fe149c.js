import{r as G,u as as,v as kt,w as Oi,x as Z,y as ii,s as ue,z as ge,f as D,a as V,g as O,h as N,c as H,d as w,j as b,i as B,A as C,B as pe,C as _e,D as be,E as ls,F as de,G as j,H as we,l as se,m as oe,I as Ze,J as Pi,K as Zt,L as $t,n as Ce,M as en,N as ri,O as zn,e as he,P as Me,Q as $o,R as Ct,q as Li,S as It,T as Et,U as Rt,V as ea,o as cs,W as ta,X as Ni,Y as na,Z as bt,_ as ia,$ as ra}from"../chunks/scheduler.abef909c.js";import{n as sa,l as oa,f as aa,h as la,S as ve,i as ye,a as P,g as te,t as U,c as ne,j as mt,b as Y,d as ie,m as X,e as Q,k as ca,o as ua}from"../chunks/index.d055a64f.js";import{w as bn}from"../chunks/index.c772b3f9.js";import{c as si,g as tn,a as Mi,e as nn,u as fa,f as da,b as ha,S as Gt,m as us,D as ma}from"../chunks/modeMapping.5e2f06a6.js";import{_ as Ui}from"../chunks/preload-helper.a4192956.js";import{F as rn,f as ga,a as pa,b as _a,c as ba}from"../chunks/index.387c2971.js";import{h as va}from"../chunks/singletons.b4cdc583.js";import{p as oi}from"../chunks/stores.a7644ccc.js";function ya(t,e,n,i){if(!e)return G;const r=t.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return G;const{delay:s=0,duration:o=300,easing:a=as,start:l=sa()+s,end:c=l+o,tick:f=G,css:u}=n(t,{from:e,to:r},i);let h=!0,d=!1,p;function v(){u&&(p=aa(t,0,1,o,s,a,u)),s||(d=!0)}function m(){u&&la(t,p),h=!1}return oa(g=>{if(!d&&g>=l&&(d=!0),d&&g>=c&&(f(1,0),m()),!h)return!1;if(d){const _=g-l,y=0+1*a(_/o);f(y,1-y)}return!0}),v(),f(0,1),m}function wa(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,fs(t,r)}}function fs(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),r=i.transform==="none"?"":i.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}const Ia=!1,mg=Object.freeze(Object.defineProperty({__proto__:null,ssr:Ia},Symbol.toStringTag,{value:"Module"}));const vt=Math.min,it=Math.max,sn=Math.round,qt=Math.floor,Xe=t=>({x:t,y:t}),Ea={left:"right",right:"left",bottom:"top",top:"bottom"},Ta={start:"end",end:"start"};function Wn(t,e,n){return it(t,vt(e,n))}function Nt(t,e){return typeof t=="function"?t(e):t}function st(t){return t.split("-")[0]}function Mt(t){return t.split("-")[1]}function ds(t){return t==="x"?"y":"x"}function ai(t){return t==="y"?"height":"width"}function vn(t){return["top","bottom"].includes(st(t))?"y":"x"}function li(t){return ds(vn(t))}function ka(t,e,n){n===void 0&&(n=!1);const i=Mt(t),r=li(t),s=ai(r);let o=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=on(o)),[o,on(o)]}function Sa(t){const e=on(t);return[qn(t),e,qn(e)]}function qn(t){return t.replace(/start|end/g,e=>Ta[e])}function Aa(t,e,n){const i=["left","right"],r=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:i:e?i:r;case"left":case"right":return e?s:o;default:return[]}}function Ca(t,e,n,i){const r=Mt(t);let s=Aa(st(t),n==="start",i);return r&&(s=s.map(o=>o+"-"+r),e&&(s=s.concat(s.map(qn)))),s}function on(t){return t.replace(/left|right|bottom|top/g,e=>Ea[e])}function Ra(t){return{top:0,right:0,bottom:0,left:0,...t}}function hs(t){return typeof t!="number"?Ra(t):{top:t,right:t,bottom:t,left:t}}function an(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Bi(t,e,n){let{reference:i,floating:r}=t;const s=vn(e),o=li(e),a=ai(o),l=st(e),c=s==="y",f=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,h=i[a]/2-r[a]/2;let d;switch(l){case"top":d={x:f,y:i.y-r.height};break;case"bottom":d={x:f,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:u};break;case"left":d={x:i.x-r.width,y:u};break;default:d={x:i.x,y:i.y}}switch(Mt(e)){case"start":d[o]-=h*(n&&c?-1:1);break;case"end":d[o]+=h*(n&&c?-1:1);break}return d}const Da=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:u}=Bi(c,i,l),h=i,d={},p=0;for(let v=0;v<a.length;v++){const{name:m,fn:g}=a[v],{x:_,y,data:I,reset:E}=await g({x:f,y:u,initialPlacement:i,placement:h,strategy:r,middlewareData:d,rects:c,platform:o,elements:{reference:t,floating:e}});if(f=_??f,u=y??u,d={...d,[m]:{...d[m],...I}},E&&p<=50){p++,typeof E=="object"&&(E.placement&&(h=E.placement),E.rects&&(c=E.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:r}):E.rects),{x:f,y:u}=Bi(c,h,l)),v=-1;continue}}return{x:f,y:u,placement:h,strategy:r,middlewareData:d}};async function ms(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:h=!1,padding:d=0}=Nt(e,t),p=hs(d),m=a[h?u==="floating"?"reference":"floating":u],g=an(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(m)))==null||n?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:f,strategy:l})),_=u==="floating"?{...o.floating,x:i,y:r}:o.reference,y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),I=await(s.isElement==null?void 0:s.isElement(y))?await(s.getScale==null?void 0:s.getScale(y))||{x:1,y:1}:{x:1,y:1},E=an(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:_,offsetParent:y,strategy:l}):_);return{top:(g.top-E.top+p.top)/I.y,bottom:(E.bottom-g.bottom+p.bottom)/I.y,left:(g.left-E.left+p.left)/I.x,right:(E.right-g.right+p.right)/I.x}}const Oa=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:o,elements:a}=e,{element:l,padding:c=0}=Nt(t,e)||{};if(l==null)return{};const f=hs(c),u={x:n,y:i},h=li(r),d=ai(h),p=await o.getDimensions(l),v=h==="y",m=v?"top":"left",g=v?"bottom":"right",_=v?"clientHeight":"clientWidth",y=s.reference[d]+s.reference[h]-u[h]-s.floating[d],I=u[h]-s.reference[h],E=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l));let k=E?E[_]:0;(!k||!await(o.isElement==null?void 0:o.isElement(E)))&&(k=a.floating[_]||s.floating[d]);const S=y/2-I/2,T=k/2-p[d]/2-1,L=vt(f[m],T),A=vt(f[g],T),x=L,q=k-p[d]-A,W=k/2-p[d]/2+S,K=Wn(x,W,q),J=Mt(r)!=null&&W!=K&&s.reference[d]/2-(W<x?L:A)-p[d]/2<0?W<x?x-W:q-W:0;return{[h]:u[h]-J,data:{[h]:K,centerOffset:W-K+J}}}}),Pa=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:i,middlewareData:r,rects:s,initialPlacement:o,platform:a,elements:l}=e,{mainAxis:c=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:p=!0,...v}=Nt(t,e),m=st(i),g=st(o)===o,_=await(a.isRTL==null?void 0:a.isRTL(l.floating)),y=u||(g||!p?[on(o)]:Sa(o));!u&&d!=="none"&&y.push(...Ca(o,p,d,_));const I=[o,...y],E=await ms(e,v),k=[];let S=((n=r.flip)==null?void 0:n.overflows)||[];if(c&&k.push(E[m]),f){const x=ka(i,s,_);k.push(E[x[0]],E[x[1]])}if(S=[...S,{placement:i,overflows:k}],!k.every(x=>x<=0)){var T,L;const x=(((T=r.flip)==null?void 0:T.index)||0)+1,q=I[x];if(q)return{data:{index:x,overflows:S},reset:{placement:q}};let W=(L=S.filter(K=>K.overflows[0]<=0).sort((K,$)=>K.overflows[1]-$.overflows[1])[0])==null?void 0:L.placement;if(!W)switch(h){case"bestFit":{var A;const K=(A=S.map($=>[$.placement,$.overflows.filter(J=>J>0).reduce((J,fe)=>J+fe,0)]).sort(($,J)=>$[1]-J[1])[0])==null?void 0:A[0];K&&(W=K);break}case"initialPlacement":W=o;break}if(i!==W)return{reset:{placement:W}}}return{}}}};async function La(t,e){const{placement:n,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),o=st(n),a=Mt(n),l=vn(n)==="y",c=["left","top"].includes(o)?-1:1,f=s&&l?-1:1,u=Nt(e,t);let{mainAxis:h,crossAxis:d,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&typeof p=="number"&&(d=a==="end"?p*-1:p),l?{x:d*f,y:h*c}:{x:h*c,y:d*f}}const Na=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:i}=e,r=await La(e,t);return{x:n+r.x,y:i+r.y,data:r}}}},Ma=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:m=>{let{x:g,y:_}=m;return{x:g,y:_}}},...l}=Nt(t,e),c={x:n,y:i},f=await ms(e,l),u=vn(st(r)),h=ds(u);let d=c[h],p=c[u];if(s){const m=h==="y"?"top":"left",g=h==="y"?"bottom":"right",_=d+f[m],y=d-f[g];d=Wn(_,d,y)}if(o){const m=u==="y"?"top":"left",g=u==="y"?"bottom":"right",_=p+f[m],y=p-f[g];p=Wn(_,p,y)}const v=a.fn({...e,[h]:d,[u]:p});return{...v,data:{x:v.x-n,y:v.y-i}}}}};function Qe(t){return gs(t)?(t.nodeName||"").toLowerCase():"#document"}function le(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ve(t){var e;return(e=(gs(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function gs(t){return t instanceof Node||t instanceof le(t).Node}function Ue(t){return t instanceof Element||t instanceof le(t).Element}function Re(t){return t instanceof HTMLElement||t instanceof le(t).HTMLElement}function Fi(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof le(t).ShadowRoot}function Ut(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=me(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function Ua(t){return["table","td","th"].includes(Qe(t))}function ci(t){const e=ui(),n=me(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function Ba(t){let e=yt(t);for(;Re(e)&&!yn(e);){if(ci(e))return e;e=yt(e)}return null}function ui(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function yn(t){return["html","body","#document"].includes(Qe(t))}function me(t){return le(t).getComputedStyle(t)}function wn(t){return Ue(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function yt(t){if(Qe(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Fi(t)&&t.host||Ve(t);return Fi(e)?e.host:e}function ps(t){const e=yt(t);return yn(e)?t.ownerDocument?t.ownerDocument.body:t.body:Re(e)&&Ut(e)?e:ps(e)}function ln(t,e){var n;e===void 0&&(e=[]);const i=ps(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=le(i);return r?e.concat(s,s.visualViewport||[],Ut(i)?i:[]):e.concat(i,ln(i))}function _s(t){const e=me(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Re(t),s=r?t.offsetWidth:n,o=r?t.offsetHeight:i,a=sn(n)!==s||sn(i)!==o;return a&&(n=s,i=o),{width:n,height:i,$:a}}function fi(t){return Ue(t)?t:t.contextElement}function gt(t){const e=fi(t);if(!Re(e))return Xe(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:s}=_s(e);let o=(s?sn(n.width):n.width)/i,a=(s?sn(n.height):n.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Fa=Xe(0);function bs(t){const e=le(t);return!ui()||!e.visualViewport?Fa:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Va(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==le(t)?!1:e}function ot(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=fi(t);let o=Xe(1);e&&(i?Ue(i)&&(o=gt(i)):o=gt(t));const a=Va(s,n,i)?bs(s):Xe(0);let l=(r.left+a.x)/o.x,c=(r.top+a.y)/o.y,f=r.width/o.x,u=r.height/o.y;if(s){const h=le(s),d=i&&Ue(i)?le(i):i;let p=h.frameElement;for(;p&&i&&d!==h;){const v=gt(p),m=p.getBoundingClientRect(),g=me(p),_=m.left+(p.clientLeft+parseFloat(g.paddingLeft))*v.x,y=m.top+(p.clientTop+parseFloat(g.paddingTop))*v.y;l*=v.x,c*=v.y,f*=v.x,u*=v.y,l+=_,c+=y,p=le(p).frameElement}}return an({width:f,height:u,x:l,y:c})}function Ha(t){let{rect:e,offsetParent:n,strategy:i}=t;const r=Re(n),s=Ve(n);if(n===s)return e;let o={scrollLeft:0,scrollTop:0},a=Xe(1);const l=Xe(0);if((r||!r&&i!=="fixed")&&((Qe(n)!=="body"||Ut(s))&&(o=wn(n)),Re(n))){const c=ot(n);a=gt(n),l.x=c.x+n.clientLeft,l.y=c.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-o.scrollLeft*a.x+l.x,y:e.y*a.y-o.scrollTop*a.y+l.y}}function xa(t){return Array.from(t.getClientRects())}function vs(t){return ot(Ve(t)).left+wn(t).scrollLeft}function ja(t){const e=Ve(t),n=wn(t),i=t.ownerDocument.body,r=it(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=it(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-n.scrollLeft+vs(t);const a=-n.scrollTop;return me(i).direction==="rtl"&&(o+=it(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:a}}function za(t,e){const n=le(t),i=Ve(t),r=n.visualViewport;let s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;const c=ui();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a,y:l}}function Wa(t,e){const n=ot(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,s=Re(t)?gt(t):Xe(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,l=r*s.x,c=i*s.y;return{width:o,height:a,x:l,y:c}}function Vi(t,e,n){let i;if(e==="viewport")i=za(t,n);else if(e==="document")i=ja(Ve(t));else if(Ue(e))i=Wa(e,n);else{const r=bs(t);i={...e,x:e.x-r.x,y:e.y-r.y}}return an(i)}function ys(t,e){const n=yt(t);return n===e||!Ue(n)||yn(n)?!1:me(n).position==="fixed"||ys(n,e)}function qa(t,e){const n=e.get(t);if(n)return n;let i=ln(t).filter(a=>Ue(a)&&Qe(a)!=="body"),r=null;const s=me(t).position==="fixed";let o=s?yt(t):t;for(;Ue(o)&&!yn(o);){const a=me(o),l=ci(o);!l&&a.position==="fixed"&&(r=null),(s?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Ut(o)&&!l&&ys(t,o))?i=i.filter(f=>f!==o):r=a,o=yt(o)}return e.set(t,i),i}function Ka(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const o=[...n==="clippingAncestors"?qa(e,this._c):[].concat(n),i],a=o[0],l=o.reduce((c,f)=>{const u=Vi(e,f,r);return c.top=it(u.top,c.top),c.right=vt(u.right,c.right),c.bottom=vt(u.bottom,c.bottom),c.left=it(u.left,c.left),c},Vi(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ga(t){return _s(t)}function Ja(t,e,n){const i=Re(e),r=Ve(e),s=n==="fixed",o=ot(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=Xe(0);if(i||!i&&!s)if((Qe(e)!=="body"||Ut(r))&&(a=wn(e)),i){const c=ot(e,!0,s,e);l.x=c.x+e.clientLeft,l.y=c.y+e.clientTop}else r&&(l.x=vs(r));return{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function Hi(t,e){return!Re(t)||me(t).position==="fixed"?null:e?e(t):t.offsetParent}function ws(t,e){const n=le(t);if(!Re(t))return n;let i=Hi(t,e);for(;i&&Ua(i)&&me(i).position==="static";)i=Hi(i,e);return i&&(Qe(i)==="html"||Qe(i)==="body"&&me(i).position==="static"&&!ci(i))?n:i||Ba(t)||n}const Ya=async function(t){let{reference:e,floating:n,strategy:i}=t;const r=this.getOffsetParent||ws,s=this.getDimensions;return{reference:Ja(e,await r(n),i),floating:{x:0,y:0,...await s(n)}}};function Xa(t){return me(t).direction==="rtl"}const Qa={convertOffsetParentRelativeRectToViewportRelativeRect:Ha,getDocumentElement:Ve,getClippingRect:Ka,getOffsetParent:ws,getElementRects:Ya,getClientRects:xa,getDimensions:Ga,getScale:gt,isElement:Ue,isRTL:Xa};function Za(t,e){let n=null,i;const r=Ve(t);function s(){clearTimeout(i),n&&n.disconnect(),n=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const{left:c,top:f,width:u,height:h}=t.getBoundingClientRect();if(a||e(),!u||!h)return;const d=qt(f),p=qt(r.clientWidth-(c+u)),v=qt(r.clientHeight-(f+h)),m=qt(c),_={rootMargin:-d+"px "+-p+"px "+-v+"px "+-m+"px",threshold:it(0,vt(1,l))||1};let y=!0;function I(E){const k=E[0].intersectionRatio;if(k!==l){if(!y)return o();k?o(!1,k):i=setTimeout(()=>{o(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(I,{..._,root:r.ownerDocument})}catch{n=new IntersectionObserver(I,_)}n.observe(t)}return o(!0),s}function $a(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=fi(t),f=r||s?[...c?ln(c):[],...ln(e)]:[];f.forEach(g=>{r&&g.addEventListener("scroll",n,{passive:!0}),s&&g.addEventListener("resize",n)});const u=c&&a?Za(c,n):null;let h=-1,d=null;o&&(d=new ResizeObserver(g=>{let[_]=g;_&&_.target===c&&d&&(d.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{d&&d.observe(e)})),n()}),c&&!l&&d.observe(c),d.observe(e));let p,v=l?ot(t):null;l&&m();function m(){const g=ot(t);v&&(g.x!==v.x||g.y!==v.y||g.width!==v.width||g.height!==v.height)&&n(),v=g,p=requestAnimationFrame(m)}return n(),()=>{f.forEach(g=>{r&&g.removeEventListener("scroll",n),s&&g.removeEventListener("resize",n)}),u&&u(),d&&d.disconnect(),d=null,l&&cancelAnimationFrame(p)}}const el=(t,e,n)=>{const i=new Map,r={platform:Qa,...n},s={...r.platform,_c:i};return Da(t,e,{...r,platform:s})},Is=bn(void 0);function tl(t,e){const{computePosition:n,autoUpdate:i,offset:r,shift:s,flip:o,arrow:a,size:l,autoPlacement:c,hide:f,inline:u}=kt(Is),h={open:!1,autoUpdateCleanup:()=>{}},d=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let p;const v="https://www.skeleton.dev/utilities/popups";let m,g;function _(){m=document.querySelector(`[data-popup="${e.target}"]`)??document.createElement("div"),g=m.querySelector(".arrow")??document.createElement("div")}_();function y(){var A,x,q,W,K,$,J,fe;if(!m)throw new Error(`The data-popup="${e.target}" element was not found. ${v}`);if(!n)throw new Error(`Floating UI 'computePosition' not found for data-popup="${e.target}". ${v}`);if(!r)throw new Error(`Floating UI 'offset' not found for data-popup="${e.target}". ${v}`);if(!s)throw new Error(`Floating UI 'shift' not found for data-popup="${e.target}". ${v}`);if(!o)throw new Error(`Floating UI 'flip' not found for data-popup="${e.target}". ${v}`);if(!a)throw new Error(`Floating UI 'arrow' not found for data-popup="${e.target}". ${v}`);const L=[];l&&L.push(l((A=e.middleware)==null?void 0:A.size)),c&&L.push(c((x=e.middleware)==null?void 0:x.autoPlacement)),f&&L.push(f((q=e.middleware)==null?void 0:q.hide)),u&&L.push(u((W=e.middleware)==null?void 0:W.inline)),n(t,m,{placement:e.placement??"bottom",middleware:[r(((K=e.middleware)==null?void 0:K.offset)??8),s((($=e.middleware)==null?void 0:$.shift)??{padding:8}),o((J=e.middleware)==null?void 0:J.flip),a(((fe=e.middleware)==null?void 0:fe.arrow)??{element:g||null}),...L]}).then(({x:M,y:ee,placement:Ie,middlewareData:dt})=>{if(Object.assign(m.style,{left:`${M}px`,top:`${ee}px`}),g){const{x:$e,y:ht}=dt.arrow,Cn={top:"bottom",right:"left",bottom:"top",left:"right"}[Ie.split("-")[0]];Object.assign(g.style,{left:$e!=null?`${$e}px`:"",top:ht!=null?`${ht}px`:"",right:"",bottom:"",[Cn]:"-4px"})}})}function I(){m&&(h.open=!0,e.state&&e.state({state:h.open}),y(),m.style.display="block",m.style.opacity="1",m.style.pointerEvents="auto",m.removeAttribute("inert"),h.autoUpdateCleanup=i(t,m,y),p=Array.from(m==null?void 0:m.querySelectorAll(d)))}function E(L){if(!m)return;const A=parseFloat(window.getComputedStyle(m).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{h.open=!1,e.state&&e.state({state:h.open}),m.style.opacity="0",m.setAttribute("inert",""),h.autoUpdateCleanup&&h.autoUpdateCleanup(),L&&L()},A)}function k(){h.open===!1?I():E()}function S(L){if(h.open===!1||t.contains(L.target))return;if(m&&m.contains(L.target)===!1){E();return}const A=e.closeQuery===void 0?"a[href], button":e.closeQuery,x=m==null?void 0:m.querySelectorAll(A);x==null||x.forEach(q=>{q.contains(L.target)&&E()})}const T=L=>{if(h.open===!1)return;const A=L.key;if(A==="Escape"){L.preventDefault(),t.focus(),E();return}p=Array.from(m==null?void 0:m.querySelectorAll(d)),h.open&&document.activeElement===t&&(A==="ArrowDown"||A==="Tab")&&d.length>0&&p.length>0&&(L.preventDefault(),p[0].focus())};switch(e.event){case"click":t.addEventListener("click",k,!0),window.addEventListener("click",S,!0);break;case"hover":t.addEventListener("mouseover",I,!0),t.addEventListener("mouseleave",()=>E(),!0);break;case"focus-blur":t.addEventListener("focus",k,!0),t.addEventListener("blur",()=>E(),!0);break;case"focus-click":t.addEventListener("focus",I,!0),window.addEventListener("click",S,!0);break;default:throw new Error(`Event value of '${e.event}' is not supported. ${v}`)}return window.addEventListener("keydown",T,!0),y(),{update(L){E(()=>{e=L,y(),_()})},destroy(){t.removeEventListener("click",k,!0),t.removeEventListener("mouseover",I,!0),t.removeEventListener("mouseleave",()=>E(),!0),t.removeEventListener("focus",k,!0),t.removeEventListener("focus",I,!0),t.removeEventListener("blur",()=>E(),!0),window.removeEventListener("click",S,!0),window.removeEventListener("keydown",T,!0)}}}function nl(){const{subscribe:t,set:e,update:n}=bn([]);return{subscribe:t,set:e,update:n,trigger:i=>n(r=>(r.push(i),r)),close:()=>n(i=>(i.length>0&&i.shift(),i)),clear:()=>e([])}}const ze=nl(),il={message:"Missing Toast Message",autohide:!0,timeout:5e3};function rl(){const t=Math.random();return Number(t).toString(32)}function xi(t){if(t.autohide===!0)return setTimeout(()=>{Ee.close(t.id)},t.timeout)}function sl(){const{subscribe:t,set:e,update:n}=bn([]);return{subscribe:t,trigger:i=>{const r=rl();return n(s=>{i&&i.callback&&i.callback({id:r,status:"queued"}),i.hideDismiss&&(i.autohide=!0);const o={...il,...i,id:r};return o.timeoutId=xi(o),s.push(o),s}),r},close:i=>n(r=>{if(r.length>0){const s=r.findIndex(a=>a.id===i),o=r[s];o&&(o.callback&&o.callback({id:i,status:"closed"}),o.timeoutId&&clearTimeout(o.timeoutId),r.splice(s,1))}return r}),freeze:i=>n(r=>(r.length>0&&clearTimeout(r[i].timeoutId),r)),unfreeze:i=>n(r=>(r.length>0&&(r[i].timeoutId=xi(r[i])),r)),clear:()=>e([])}}const Ee=sl(),Rn={};function ji(t){return t==="local"?localStorage:sessionStorage}function In(t,e,n){const i=(n==null?void 0:n.serializer)??JSON,r=(n==null?void 0:n.storage)??"local";function s(o,a){ji(r).setItem(o,i.stringify(a))}if(!Rn[t]){const o=bn(e,c=>{const f=ji(r).getItem(t);f&&c(i.parse(f));{const u=h=>{h.key===t&&c(h.newValue?i.parse(h.newValue):null)};return window.addEventListener("storage",u),()=>window.removeEventListener("storage",u)}}),{subscribe:a,set:l}=o;Rn[t]={set(c){s(t,c),l(c)},update(c){const f=c(kt(o));s(t,f),l(f)},subscribe:a}}return Rn[t]}const ol=In("modeOsPrefers",!1),al=In("modeUserPrefers",void 0),Kn=In("modeCurrent",!1);function ll(){const t=window.matchMedia("(prefers-color-scheme: light)").matches;return ol.set(t),t}function cl(t){al.set(t)}function zi(t){const e=document.documentElement.classList,n="dark";t===!0?e.remove(n):e.add(n),Kn.set(t)}function ul(){const t=document.documentElement.classList,e=localStorage.getItem("modeUserPrefers")==="false",n=!("modeUserPrefers"in localStorage),i=window.matchMedia("(prefers-color-scheme: dark)").matches;e||n&&i?t.add("dark"):t.remove("dark")}function fl(t,e){const n='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let i,r;function s(u){u.shiftKey&&u.code==="Tab"&&(u.preventDefault(),r.focus())}function o(u){!u.shiftKey&&u.code==="Tab"&&(u.preventDefault(),i.focus())}const a=u=>{if(e===!1)return;const h=Array.from(t.querySelectorAll(n));h.length&&(i=h[0],r=h[h.length-1],u||i.focus(),i.addEventListener("keydown",s),r.addEventListener("keydown",o))};a(!1);function l(){i&&i.removeEventListener("keydown",s),r&&r.removeEventListener("keydown",o)}const c=(u,h)=>(u.length&&(l(),a(!0)),h),f=new MutationObserver(c);return f.observe(t,{childList:!0,subtree:!0}),{update(u){e=u,u?a(!1):l()},destroy(){l(),f.disconnect()}}}function Wi(t,{delay:e=0,duration:n=400,easing:i=as}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:s=>`opacity: ${s*r}`}}function cn(t,{delay:e=0,duration:n=400,easing:i=si,x:r=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(t),l=+a.opacity,c=a.transform==="none"?"":a.transform,f=l*(1-o),[u,h]=Oi(r),[d,p]=Oi(s);return{delay:e,duration:n,easing:i,css:(v,m)=>`
			transform: ${c} translate(${(1-v)*u}${h}, ${(1-v)*d}${p});
			opacity: ${l-f*m}`}}function dl({fallback:t,...e}){const n=new Map,i=new Map;function r(o,a,l){const{delay:c=0,duration:f=k=>Math.sqrt(k)*30,easing:u=si}=Z(Z({},e),l),h=o.getBoundingClientRect(),d=a.getBoundingClientRect(),p=h.left-d.left,v=h.top-d.top,m=h.width/d.width,g=h.height/d.height,_=Math.sqrt(p*p+v*v),y=getComputedStyle(a),I=y.transform==="none"?"":y.transform,E=+y.opacity;return{delay:c,duration:ii(f)?f(_):f,easing:u,css:(k,S)=>`
				opacity: ${k*E};
				transform-origin: top left;
				transform: ${I} translate(${S*p}px,${S*v}px) scale(${k+(1-k)*m}, ${k+(1-k)*g});
			`}}function s(o,a,l){return(c,f)=>(o.set(f.key,c),()=>{if(a.has(f.key)){const u=a.get(f.key);return a.delete(f.key),r(u,c,f)}return o.delete(f.key),t&&t(c,f,l)})}return[s(i,n,!1),s(n,i,!0)]}const hl=t=>({}),qi=t=>({}),ml=t=>({}),Ki=t=>({}),gl=t=>({}),Gi=t=>({});function Ji(t){let e,n,i;const r=t[22].lead,s=ge(r,t,t[21],Gi);return{c(){e=D("div"),s&&s.c(),this.h()},l(o){e=O(o,"DIV",{class:!0});var a=N(e);s&&s.l(a),a.forEach(w),this.h()},h(){b(e,"class",n="app-bar-slot-lead "+t[4])},m(o,a){B(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&pe(s,r,o,o[21],i?be(r,o[21],a,gl):_e(o[21]),Gi),(!i||a&16&&n!==(n="app-bar-slot-lead "+o[4]))&&b(e,"class",n)},i(o){i||(P(s,o),i=!0)},o(o){U(s,o),i=!1},d(o){o&&w(e),s&&s.d(o)}}}function Yi(t){let e,n,i;const r=t[22].trail,s=ge(r,t,t[21],Ki);return{c(){e=D("div"),s&&s.c(),this.h()},l(o){e=O(o,"DIV",{class:!0});var a=N(e);s&&s.l(a),a.forEach(w),this.h()},h(){b(e,"class",n="app-bar-slot-trail "+t[2])},m(o,a){B(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&pe(s,r,o,o[21],i?be(r,o[21],a,ml):_e(o[21]),Ki),(!i||a&4&&n!==(n="app-bar-slot-trail "+o[2]))&&b(e,"class",n)},i(o){i||(P(s,o),i=!0)},o(o){U(s,o),i=!1},d(o){o&&w(e),s&&s.d(o)}}}function Xi(t){let e,n,i;const r=t[22].headline,s=ge(r,t,t[21],qi);return{c(){e=D("div"),s&&s.c(),this.h()},l(o){e=O(o,"DIV",{class:!0});var a=N(e);s&&s.l(a),a.forEach(w),this.h()},h(){b(e,"class",n="app-bar-row-headline "+t[5])},m(o,a){B(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&pe(s,r,o,o[21],i?be(r,o[21],a,hl):_e(o[21]),qi),(!i||a&32&&n!==(n="app-bar-row-headline "+o[5]))&&b(e,"class",n)},i(o){i||(P(s,o),i=!0)},o(o){U(s,o),i=!1},d(o){o&&w(e),s&&s.d(o)}}}function pl(t){let e,n,i,r,s,o,a,l,c,f,u=t[8].lead&&Ji(t);const h=t[22].default,d=ge(h,t,t[21],null);let p=t[8].trail&&Yi(t),v=t[8].headline&&Xi(t);return{c(){e=D("div"),n=D("div"),u&&u.c(),i=V(),r=D("div"),d&&d.c(),o=V(),p&&p.c(),l=V(),v&&v.c(),this.h()},l(m){e=O(m,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var g=N(e);n=O(g,"DIV",{class:!0});var _=N(n);u&&u.l(_),i=H(_),r=O(_,"DIV",{class:!0});var y=N(r);d&&d.l(y),y.forEach(w),o=H(_),p&&p.l(_),_.forEach(w),l=H(g),v&&v.l(g),g.forEach(w),this.h()},h(){b(r,"class",s="app-bar-slot-default "+t[3]),b(n,"class",a="app-bar-row-main "+t[6]),b(e,"class",c="app-bar "+t[7]),b(e,"data-testid","app-bar"),b(e,"role","toolbar"),b(e,"aria-label",t[0]),b(e,"aria-labelledby",t[1])},m(m,g){B(m,e,g),C(e,n),u&&u.m(n,null),C(n,i),C(n,r),d&&d.m(r,null),C(n,o),p&&p.m(n,null),C(e,l),v&&v.m(e,null),f=!0},p(m,[g]){m[8].lead?u?(u.p(m,g),g&256&&P(u,1)):(u=Ji(m),u.c(),P(u,1),u.m(n,i)):u&&(te(),U(u,1,1,()=>{u=null}),ne()),d&&d.p&&(!f||g&2097152)&&pe(d,h,m,m[21],f?be(h,m[21],g,null):_e(m[21]),null),(!f||g&8&&s!==(s="app-bar-slot-default "+m[3]))&&b(r,"class",s),m[8].trail?p?(p.p(m,g),g&256&&P(p,1)):(p=Yi(m),p.c(),P(p,1),p.m(n,null)):p&&(te(),U(p,1,1,()=>{p=null}),ne()),(!f||g&64&&a!==(a="app-bar-row-main "+m[6]))&&b(n,"class",a),m[8].headline?v?(v.p(m,g),g&256&&P(v,1)):(v=Xi(m),v.c(),P(v,1),v.m(e,null)):v&&(te(),U(v,1,1,()=>{v=null}),ne()),(!f||g&128&&c!==(c="app-bar "+m[7]))&&b(e,"class",c),(!f||g&1)&&b(e,"aria-label",m[0]),(!f||g&2)&&b(e,"aria-labelledby",m[1])},i(m){f||(P(u),P(d,m),P(p),P(v),f=!0)},o(m){U(u),U(d,m),U(p),U(v),f=!1},d(m){m&&w(e),u&&u.d(),d&&d.d(m),p&&p.d(),v&&v.d()}}}const _l="flex flex-col",bl="grid items-center",vl="",yl="flex-none flex justify-between items-center",wl="flex-auto",Il="flex-none flex items-center space-x-4";function El(t,e,n){let i,r,s,o,a,l,{$$slots:c={},$$scope:f}=e;const u=ls(c);let{background:h="bg-surface-100-800-token"}=e,{border:d=""}=e,{padding:p="p-4"}=e,{shadow:v=""}=e,{spacing:m="space-y-4"}=e,{gridColumns:g="grid-cols-[auto_1fr_auto]"}=e,{gap:_="gap-4"}=e,{regionRowMain:y=""}=e,{regionRowHeadline:I=""}=e,{slotLead:E=""}=e,{slotDefault:k=""}=e,{slotTrail:S=""}=e,{label:T=""}=e,{labelledby:L=""}=e;return t.$$set=A=>{n(23,e=Z(Z({},e),de(A))),"background"in A&&n(9,h=A.background),"border"in A&&n(10,d=A.border),"padding"in A&&n(11,p=A.padding),"shadow"in A&&n(12,v=A.shadow),"spacing"in A&&n(13,m=A.spacing),"gridColumns"in A&&n(14,g=A.gridColumns),"gap"in A&&n(15,_=A.gap),"regionRowMain"in A&&n(16,y=A.regionRowMain),"regionRowHeadline"in A&&n(17,I=A.regionRowHeadline),"slotLead"in A&&n(18,E=A.slotLead),"slotDefault"in A&&n(19,k=A.slotDefault),"slotTrail"in A&&n(20,S=A.slotTrail),"label"in A&&n(0,T=A.label),"labelledby"in A&&n(1,L=A.labelledby),"$$scope"in A&&n(21,f=A.$$scope)},t.$$.update=()=>{n(7,i=`${_l} ${h} ${d} ${m} ${p} ${v} ${e.class??""}`),t.$$.dirty&114688&&n(6,r=`${bl} ${g} ${_} ${y}`),t.$$.dirty&131072&&n(5,s=`${vl} ${I}`),t.$$.dirty&262144&&n(4,o=`${yl} ${E}`),t.$$.dirty&524288&&n(3,a=`${wl} ${k}`),t.$$.dirty&1048576&&n(2,l=`${Il} ${S}`)},e=de(e),[T,L,l,a,o,s,r,i,u,h,d,p,v,m,g,_,y,I,E,k,S,f,c]}class Tl extends ve{constructor(e){super(),ye(this,e,El,pl,ue,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const kl=t=>({}),Qi=t=>({}),Sl=t=>({}),Zi=t=>({}),Al=t=>({}),$i=t=>({}),Cl=t=>({}),er=t=>({}),Rl=t=>({}),tr=t=>({}),Dl=t=>({}),nr=t=>({});function ir(t){let e,n,i;const r=t[18].header,s=ge(r,t,t[17],nr);return{c(){e=D("header"),s&&s.c(),this.h()},l(o){e=O(o,"HEADER",{id:!0,class:!0});var a=N(e);s&&s.l(a),a.forEach(w),this.h()},h(){b(e,"id","shell-header"),b(e,"class",n="flex-none "+t[7])},m(o,a){B(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&131072)&&pe(s,r,o,o[17],i?be(r,o[17],a,Dl):_e(o[17]),nr),(!i||a&128&&n!==(n="flex-none "+o[7]))&&b(e,"class",n)},i(o){i||(P(s,o),i=!0)},o(o){U(s,o),i=!1},d(o){o&&w(e),s&&s.d(o)}}}function rr(t){let e,n;const i=t[18].sidebarLeft,r=ge(i,t,t[17],tr);return{c(){e=D("aside"),r&&r.c(),this.h()},l(s){e=O(s,"ASIDE",{id:!0,class:!0});var o=N(e);r&&r.l(o),o.forEach(w),this.h()},h(){b(e,"id","sidebar-left"),b(e,"class",t[6])},m(s,o){B(s,e,o),r&&r.m(e,null),n=!0},p(s,o){r&&r.p&&(!n||o&131072)&&pe(r,i,s,s[17],n?be(i,s[17],o,Rl):_e(s[17]),tr),(!n||o&64)&&b(e,"class",s[6])},i(s){n||(P(r,s),n=!0)},o(s){U(r,s),n=!1},d(s){s&&w(e),r&&r.d(s)}}}function sr(t){let e,n,i;const r=t[18].pageHeader,s=ge(r,t,t[17],er),o=s||Ol();return{c(){e=D("header"),o&&o.c(),this.h()},l(a){e=O(a,"HEADER",{id:!0,class:!0});var l=N(e);o&&o.l(l),l.forEach(w),this.h()},h(){b(e,"id","page-header"),b(e,"class",n="flex-none "+t[4])},m(a,l){B(a,e,l),o&&o.m(e,null),i=!0},p(a,l){s&&s.p&&(!i||l&131072)&&pe(s,r,a,a[17],i?be(r,a[17],l,Cl):_e(a[17]),er),(!i||l&16&&n!==(n="flex-none "+a[4]))&&b(e,"class",n)},i(a){i||(P(o,a),i=!0)},o(a){U(o,a),i=!1},d(a){a&&w(e),o&&o.d(a)}}}function Ol(t){let e;return{c(){e=se("(slot:header)")},l(n){e=oe(n,"(slot:header)")},m(n,i){B(n,e,i)},d(n){n&&w(e)}}}function or(t){let e,n,i;const r=t[18].pageFooter,s=ge(r,t,t[17],$i),o=s||Pl();return{c(){e=D("footer"),o&&o.c(),this.h()},l(a){e=O(a,"FOOTER",{id:!0,class:!0});var l=N(e);o&&o.l(l),l.forEach(w),this.h()},h(){b(e,"id","page-footer"),b(e,"class",n="flex-none "+t[2])},m(a,l){B(a,e,l),o&&o.m(e,null),i=!0},p(a,l){s&&s.p&&(!i||l&131072)&&pe(s,r,a,a[17],i?be(r,a[17],l,Al):_e(a[17]),$i),(!i||l&4&&n!==(n="flex-none "+a[2]))&&b(e,"class",n)},i(a){i||(P(o,a),i=!0)},o(a){U(o,a),i=!1},d(a){a&&w(e),o&&o.d(a)}}}function Pl(t){let e;return{c(){e=se("(slot:footer)")},l(n){e=oe(n,"(slot:footer)")},m(n,i){B(n,e,i)},d(n){n&&w(e)}}}function ar(t){let e,n;const i=t[18].sidebarRight,r=ge(i,t,t[17],Zi);return{c(){e=D("aside"),r&&r.c(),this.h()},l(s){e=O(s,"ASIDE",{id:!0,class:!0});var o=N(e);r&&r.l(o),o.forEach(w),this.h()},h(){b(e,"id","sidebar-right"),b(e,"class",t[5])},m(s,o){B(s,e,o),r&&r.m(e,null),n=!0},p(s,o){r&&r.p&&(!n||o&131072)&&pe(r,i,s,s[17],n?be(i,s[17],o,Sl):_e(s[17]),Zi),(!n||o&32)&&b(e,"class",s[5])},i(s){n||(P(r,s),n=!0)},o(s){U(r,s),n=!1},d(s){s&&w(e),r&&r.d(s)}}}function lr(t){let e,n,i;const r=t[18].footer,s=ge(r,t,t[17],Qi);return{c(){e=D("footer"),s&&s.c(),this.h()},l(o){e=O(o,"FOOTER",{id:!0,class:!0});var a=N(e);s&&s.l(a),a.forEach(w),this.h()},h(){b(e,"id","shell-footer"),b(e,"class",n="flex-none "+t[1])},m(o,a){B(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&131072)&&pe(s,r,o,o[17],i?be(r,o[17],a,kl):_e(o[17]),Qi),(!i||a&2&&n!==(n="flex-none "+o[1]))&&b(e,"class",n)},i(o){i||(P(s,o),i=!0)},o(o){U(s,o),i=!1},d(o){o&&w(e),s&&s.d(o)}}}function Ll(t){let e,n,i,r,s,o,a,l,c,f,u,h,d,p,v,m=t[9].header&&ir(t),g=t[9].sidebarLeft&&rr(t),_=t[9].pageHeader&&sr(t);const y=t[18].default,I=ge(y,t,t[17],null);let E=t[9].pageFooter&&or(t),k=t[9].sidebarRight&&ar(t),S=t[9].footer&&lr(t);return{c(){e=D("div"),m&&m.c(),n=V(),i=D("div"),g&&g.c(),r=V(),s=D("div"),_&&_.c(),o=V(),a=D("main"),I&&I.c(),c=V(),E&&E.c(),u=V(),k&&k.c(),h=V(),S&&S.c(),this.h()},l(T){e=O(T,"DIV",{id:!0,class:!0,"data-testid":!0});var L=N(e);m&&m.l(L),n=H(L),i=O(L,"DIV",{class:!0});var A=N(i);g&&g.l(A),r=H(A),s=O(A,"DIV",{id:!0,class:!0});var x=N(s);_&&_.l(x),o=H(x),a=O(x,"MAIN",{id:!0,class:!0});var q=N(a);I&&I.l(q),q.forEach(w),c=H(x),E&&E.l(x),x.forEach(w),u=H(A),k&&k.l(A),A.forEach(w),h=H(L),S&&S.l(L),L.forEach(w),this.h()},h(){b(a,"id","page-content"),b(a,"class",l="flex-auto "+t[3]),b(s,"id","page"),b(s,"class",f=t[0]+" "+cr),b(i,"class","flex-auto "+Ml),b(e,"id","appShell"),b(e,"class",t[8]),b(e,"data-testid","app-shell")},m(T,L){B(T,e,L),m&&m.m(e,null),C(e,n),C(e,i),g&&g.m(i,null),C(i,r),C(i,s),_&&_.m(s,null),C(s,o),C(s,a),I&&I.m(a,null),C(s,c),E&&E.m(s,null),C(i,u),k&&k.m(i,null),C(e,h),S&&S.m(e,null),d=!0,p||(v=j(s,"scroll",t[19]),p=!0)},p(T,[L]){T[9].header?m?(m.p(T,L),L&512&&P(m,1)):(m=ir(T),m.c(),P(m,1),m.m(e,n)):m&&(te(),U(m,1,1,()=>{m=null}),ne()),T[9].sidebarLeft?g?(g.p(T,L),L&512&&P(g,1)):(g=rr(T),g.c(),P(g,1),g.m(i,r)):g&&(te(),U(g,1,1,()=>{g=null}),ne()),T[9].pageHeader?_?(_.p(T,L),L&512&&P(_,1)):(_=sr(T),_.c(),P(_,1),_.m(s,o)):_&&(te(),U(_,1,1,()=>{_=null}),ne()),I&&I.p&&(!d||L&131072)&&pe(I,y,T,T[17],d?be(y,T[17],L,null):_e(T[17]),null),(!d||L&8&&l!==(l="flex-auto "+T[3]))&&b(a,"class",l),T[9].pageFooter?E?(E.p(T,L),L&512&&P(E,1)):(E=or(T),E.c(),P(E,1),E.m(s,null)):E&&(te(),U(E,1,1,()=>{E=null}),ne()),(!d||L&1&&f!==(f=T[0]+" "+cr))&&b(s,"class",f),T[9].sidebarRight?k?(k.p(T,L),L&512&&P(k,1)):(k=ar(T),k.c(),P(k,1),k.m(i,null)):k&&(te(),U(k,1,1,()=>{k=null}),ne()),T[9].footer?S?(S.p(T,L),L&512&&P(S,1)):(S=lr(T),S.c(),P(S,1),S.m(e,null)):S&&(te(),U(S,1,1,()=>{S=null}),ne()),(!d||L&256)&&b(e,"class",T[8])},i(T){d||(P(m),P(g),P(_),P(I,T),P(E),P(k),P(S),d=!0)},o(T){U(m),U(g),U(_),U(I,T),U(E),U(k),U(S),d=!1},d(T){T&&w(e),m&&m.d(),g&&g.d(),_&&_.d(),I&&I.d(T),E&&E.d(),k&&k.d(),S&&S.d(),p=!1,v()}}}const Nl="w-full h-full flex flex-col overflow-hidden",Ml="w-full h-full flex overflow-hidden",cr="flex-1 overflow-x-hidden flex flex-col",Ul="flex-none overflow-x-hidden overflow-y-auto",Bl="flex-none overflow-x-hidden overflow-y-auto";function Fl(t,e,n){let i,r,s,o,a,l,c,f,{$$slots:u={},$$scope:h}=e;const d=ls(u);let{regionPage:p=""}=e,{slotHeader:v="z-10"}=e,{slotSidebarLeft:m="w-auto"}=e,{slotSidebarRight:g="w-auto"}=e,{slotPageHeader:_=""}=e,{slotPageContent:y=""}=e,{slotPageFooter:I=""}=e,{slotFooter:E=""}=e;function k(S){we.call(this,t,S)}return t.$$set=S=>{n(20,e=Z(Z({},e),de(S))),"regionPage"in S&&n(0,p=S.regionPage),"slotHeader"in S&&n(10,v=S.slotHeader),"slotSidebarLeft"in S&&n(11,m=S.slotSidebarLeft),"slotSidebarRight"in S&&n(12,g=S.slotSidebarRight),"slotPageHeader"in S&&n(13,_=S.slotPageHeader),"slotPageContent"in S&&n(14,y=S.slotPageContent),"slotPageFooter"in S&&n(15,I=S.slotPageFooter),"slotFooter"in S&&n(16,E=S.slotFooter),"$$scope"in S&&n(17,h=S.$$scope)},t.$$.update=()=>{n(8,i=`${Nl} ${e.class??""}`),t.$$.dirty&1024&&n(7,r=`${v}`),t.$$.dirty&2048&&n(6,s=`${Ul} ${m}`),t.$$.dirty&4096&&n(5,o=`${Bl} ${g}`),t.$$.dirty&8192&&n(4,a=`${_}`),t.$$.dirty&16384&&n(3,l=`${y}`),t.$$.dirty&32768&&n(2,c=`${I}`),t.$$.dirty&65536&&n(1,f=`${E}`)},e=de(e),[p,f,c,l,a,o,s,r,i,d,v,m,g,_,y,I,E,h,u,k]}class Vl extends ve{constructor(e){super(),ye(this,e,Fl,Ll,ue,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function Hl(t){let e,n,i=String(t[1]).substring(0,2).toUpperCase()+"",r,s;return{c(){e=Zt("svg"),n=Zt("text"),r=se(i),this.h()},l(o){e=$t(o,"svg",{class:!0,viewBox:!0});var a=N(e);n=$t(a,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var l=N(n);r=oe(l,i),l.forEach(w),a.forEach(w),this.h()},h(){b(n,"x","50%"),b(n,"y","50%"),b(n,"dominant-baseline","central"),b(n,"text-anchor","middle"),b(n,"font-weight","bold"),b(n,"font-size",150),b(n,"class",s="avatar-text "+t[2]),b(e,"class","avatar-initials w-full h-full"),b(e,"viewBox","0 0 512 512")},m(o,a){B(o,e,a),C(e,n),C(n,r)},p(o,a){a&2&&i!==(i=String(o[1]).substring(0,2).toUpperCase()+"")&&Ce(r,i),a&4&&s!==(s="avatar-text "+o[2])&&b(n,"class",s)},d(o){o&&w(e)}}}function xl(t){let e,n,i,r,s,o,a,l,c=[{class:n="avatar-image "+Wl},{style:i=t[8].style??""},{src:r=t[0]},{alt:s=t[8].alt||""},t[7]()],f={};for(let u=0;u<c.length;u+=1)f=Z(f,c[u]);return{c(){e=D("img"),this.h()},l(u){e=O(u,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){en(e,f)},m(u,h){B(u,e,h),a||(l=[ri(o=t[4].call(null,e,t[5])),j(e,"error",t[19])],a=!0)},p(u,h){en(e,f=tn(c,[{class:n},h&256&&i!==(i=u[8].style??"")&&{style:i},h&1&&!zn(e.src,r=u[0])&&{src:r},h&256&&s!==(s=u[8].alt||"")&&{alt:s},u[7]()])),o&&ii(o.update)&&h&32&&o.update.call(null,u[5])},d(u){u&&w(e),a=!1,Ze(l)}}}function jl(t){let e,n,i,r;function s(l,c){return l[0]?xl:Hl}let o=s(t),a=o(t);return{c(){e=D("figure"),a.c(),this.h()},l(l){e=O(l,"FIGURE",{class:!0,"data-testid":!0});var c=N(e);a.l(c),c.forEach(w),this.h()},h(){b(e,"class",n="avatar "+t[6]),b(e,"data-testid","avatar")},m(l,c){B(l,e,c),a.m(e,null),i||(r=[j(e,"click",t[15]),j(e,"keydown",t[16]),j(e,"keyup",t[17]),j(e,"keypress",t[18])],i=!0)},p(l,[c]){o===(o=s(l))&&a?a.p(l,c):(a.d(1),a=o(l),a&&(a.c(),a.m(e,null))),c&64&&n!==(n="avatar "+l[6])&&b(e,"class",n)},i:G,o:G,d(l){l&&w(e),a.d(),i=!1,Ze(r)}}}let zl="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",Wl="w-full h-full object-cover";function ql(t,e,n){let i;const r=["initials","fill","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let s=Pi(e,r),{initials:o="AB"}=e,{fill:a="fill-token"}=e,{src:l=""}=e,{fallback:c=""}=e,{action:f=()=>{}}=e,{actionParams:u=""}=e,{background:h="bg-surface-400-500-token"}=e,{width:d="w-16"}=e,{border:p=""}=e,{rounded:v="rounded-full"}=e,{shadow:m=""}=e,{cursor:g=""}=e;function _(){return delete s.class,s}function y(T){we.call(this,t,T)}function I(T){we.call(this,t,T)}function E(T){we.call(this,t,T)}function k(T){we.call(this,t,T)}const S=()=>n(0,l=c);return t.$$set=T=>{n(8,e=Z(Z({},e),de(T))),n(20,s=Pi(e,r)),"initials"in T&&n(1,o=T.initials),"fill"in T&&n(2,a=T.fill),"src"in T&&n(0,l=T.src),"fallback"in T&&n(3,c=T.fallback),"action"in T&&n(4,f=T.action),"actionParams"in T&&n(5,u=T.actionParams),"background"in T&&n(9,h=T.background),"width"in T&&n(10,d=T.width),"border"in T&&n(11,p=T.border),"rounded"in T&&n(12,v=T.rounded),"shadow"in T&&n(13,m=T.shadow),"cursor"in T&&n(14,g=T.cursor)},t.$$.update=()=>{n(6,i=`${zl} ${h} ${d} ${p} ${v} ${m} ${g} ${e.class??""}`)},e=de(e),[l,o,a,c,f,u,i,_,e,h,d,p,v,m,g,y,I,E,k,S]}class Es extends ve{constructor(e){super(),ye(this,e,ql,jl,ue,{initials:1,fill:2,src:0,fallback:3,action:4,actionParams:5,background:9,width:10,border:11,rounded:12,shadow:13,cursor:14})}}function Kl(t,{from:e,to:n},i={}){const r=getComputedStyle(t),s=r.transform==="none"?"":r.transform,[o,a]=r.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*o/n.width-(n.left+o),c=e.top+e.height*a/n.height-(n.top+a),{delay:f=0,duration:u=d=>Math.sqrt(d)*120,easing:h=si}=i;return{delay:f,duration:ii(u)?u(Math.sqrt(l*l+c*c)):u,easing:h,css:(d,p)=>{const v=p*l,m=p*c,g=d+p*e.width/n.width,_=d+p*e.height/n.height;return`transform: ${s} translate(${v}px, ${m}px) scale(${g}, ${_});`}}}function ur(t){let e=t[12],n,i,r=gr(t);return{c(){r.c(),n=he()},l(s){r.l(s),n=he()},m(s,o){r.m(s,o),B(s,n,o),i=!0},p(s,o){o[0]&4096&&ue(e,e=s[12])?(te(),U(r,1,1,G),ne(),r=gr(s),r.c(),P(r,1),r.m(n.parentNode,n)):r.p(s,o)},i(s){i||(P(r),i=!0)},o(s){U(r),i=!1},d(s){s&&w(n),r.d(s)}}}function Gl(t){var c,f;let e,n,i,r,s;const o=[(c=t[14])==null?void 0:c.props,{parent:t[15]}];var a=(f=t[14])==null?void 0:f.ref;function l(u,h){var p;let d={$$slots:{default:[Yl]},$$scope:{ctx:u}};if(h!==void 0&&h[0]&49152)d=tn(o,[h[0]&16384&&Mi((p=u[14])==null?void 0:p.props),h[0]&32768&&{parent:u[15]}]);else for(let v=0;v<o.length;v+=1)d=Z(d,o[v]);return{props:d}}return a&&(n=Li(a,l(t))),{c(){e=D("div"),n&&Y(n.$$.fragment),this.h()},l(u){e=O(u,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var h=N(e);n&&ie(n.$$.fragment,h),h.forEach(w),this.h()},h(){var u;b(e,"class",i="modal contents "+(((u=t[12][0])==null?void 0:u.modalClasses)??"")),b(e,"data-testid","modal-component"),b(e,"role","dialog"),b(e,"aria-modal","true"),b(e,"aria-label",r=t[12][0].title??"")},m(u,h){B(u,e,h),n&&X(n,e,null),s=!0},p(u,h){var d,p,v;if(h[0]&16384&&a!==(a=(d=u[14])==null?void 0:d.ref)){if(n){te();const m=n;U(m.$$.fragment,1,0,()=>{Q(m,1)}),ne()}a?(n=Li(a,l(u,h)),Y(n.$$.fragment),P(n.$$.fragment,1),X(n,e,null)):n=null}else if(a){const m=h[0]&49152?tn(o,[h[0]&16384&&Mi((p=u[14])==null?void 0:p.props),h[0]&32768&&{parent:u[15]}]):{};h[0]&16384|h[1]&8192&&(m.$$scope={dirty:h,ctx:u}),n.$set(m)}(!s||h[0]&4096&&i!==(i="modal contents "+(((v=u[12][0])==null?void 0:v.modalClasses)??"")))&&b(e,"class",i),(!s||h[0]&4096&&r!==(r=u[12][0].title??""))&&b(e,"aria-label",r)},i(u){s||(n&&P(n.$$.fragment,u),s=!0)},o(u){n&&U(n.$$.fragment,u),s=!1},d(u){u&&w(e),n&&Q(n)}}}function Jl(t){var v,m,g,_;let e,n,i,r,s,o,a,l,c=((v=t[12][0])==null?void 0:v.title)&&dr(t),f=((m=t[12][0])==null?void 0:m.body)&&hr(t),u=((g=t[12][0])==null?void 0:g.image)&&typeof((_=t[12][0])==null?void 0:_.image)=="string"&&mr(t);function h(y,I){if(y[12][0].type==="alert")return Zl;if(y[12][0].type==="confirm")return Ql;if(y[12][0].type==="prompt")return Xl}let d=h(t),p=d&&d(t);return{c(){e=D("div"),c&&c.c(),n=V(),f&&f.c(),i=V(),u&&u.c(),r=V(),p&&p.c(),this.h()},l(y){e=O(y,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var I=N(e);c&&c.l(I),n=H(I),f&&f.l(I),i=H(I),u&&u.l(I),r=H(I),p&&p.l(I),I.forEach(w),this.h()},h(){b(e,"class",s="modal "+t[16]),b(e,"data-testid","modal"),b(e,"role","dialog"),b(e,"aria-modal","true"),b(e,"aria-label",o=t[12][0].title??"")},m(y,I){B(y,e,I),c&&c.m(e,null),C(e,n),f&&f.m(e,null),C(e,i),u&&u.m(e,null),C(e,r),p&&p.m(e,null),l=!0},p(y,I){var E,k,S,T;t=y,(E=t[12][0])!=null&&E.title?c?c.p(t,I):(c=dr(t),c.c(),c.m(e,n)):c&&(c.d(1),c=null),(k=t[12][0])!=null&&k.body?f?f.p(t,I):(f=hr(t),f.c(),f.m(e,i)):f&&(f.d(1),f=null),(S=t[12][0])!=null&&S.image&&typeof((T=t[12][0])==null?void 0:T.image)=="string"?u?u.p(t,I):(u=mr(t),u.c(),u.m(e,r)):u&&(u.d(1),u=null),d===(d=h(t))&&p?p.p(t,I):(p&&p.d(1),p=d&&d(t),p&&(p.c(),p.m(e,null))),(!l||I[0]&65536&&s!==(s="modal "+t[16]))&&b(e,"class",s),(!l||I[0]&4096&&o!==(o=t[12][0].title??""))&&b(e,"aria-label",o)},i(y){l||(Ct(()=>{l&&(a||(a=mt(e,cn,{duration:t[3],opacity:0,y:100},!0)),a.run(1))}),l=!0)},o(y){a||(a=mt(e,cn,{duration:t[3],opacity:0,y:100},!1)),a.run(0),l=!1},d(y){y&&w(e),c&&c.d(),f&&f.d(),u&&u.d(),p&&p.d(),y&&a&&a.end()}}}function fr(t){var r;let e,n=((r=t[14])==null?void 0:r.slot)+"",i;return{c(){e=new It(!1),i=he(),this.h()},l(s){e=Et(s,!1),i=he(),this.h()},h(){e.a=i},m(s,o){e.m(n,s,o),B(s,i,o)},p(s,o){var a;o[0]&16384&&n!==(n=((a=s[14])==null?void 0:a.slot)+"")&&e.p(n)},d(s){s&&(w(i),e.d())}}}function Yl(t){var i;let e,n=((i=t[14])==null?void 0:i.slot)&&fr(t);return{c(){n&&n.c(),e=he()},l(r){n&&n.l(r),e=he()},m(r,s){n&&n.m(r,s),B(r,e,s)},p(r,s){var o;(o=r[14])!=null&&o.slot?n?n.p(r,s):(n=fr(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&w(e),n&&n.d(r)}}}function dr(t){let e,n,i=t[12][0].title+"",r;return{c(){e=D("header"),n=new It(!1),this.h()},l(s){e=O(s,"HEADER",{class:!0});var o=N(e);n=Et(o,!1),o.forEach(w),this.h()},h(){n.a=null,b(e,"class",r="modal-header "+t[9])},m(s,o){B(s,e,o),n.m(i,e)},p(s,o){o[0]&4096&&i!==(i=s[12][0].title+"")&&n.p(i),o[0]&512&&r!==(r="modal-header "+s[9])&&b(e,"class",r)},d(s){s&&w(e)}}}function hr(t){let e,n,i=t[12][0].body+"",r;return{c(){e=D("article"),n=new It(!1),this.h()},l(s){e=O(s,"ARTICLE",{class:!0});var o=N(e);n=Et(o,!1),o.forEach(w),this.h()},h(){n.a=null,b(e,"class",r="modal-body "+t[10])},m(s,o){B(s,e,o),n.m(i,e)},p(s,o){o[0]&4096&&i!==(i=s[12][0].body+"")&&n.p(i),o[0]&1024&&r!==(r="modal-body "+s[10])&&b(e,"class",r)},d(s){s&&w(e)}}}function mr(t){let e,n;return{c(){e=D("img"),this.h()},l(i){e=O(i,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){var i;b(e,"class","modal-image "+ic),zn(e.src,n=(i=t[12][0])==null?void 0:i.image)||b(e,"src",n),b(e,"alt","Modal")},m(i,r){B(i,e,r)},p(i,r){var s;r[0]&4096&&!zn(e.src,n=(s=i[12][0])==null?void 0:s.image)&&b(e,"src",n)},d(i){i&&w(e)}}}function Xl(t){let e,n,i,r,s,o,a,l,c,f,u,h,d,p,v=[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},t[12][0].valueAttr],m={};for(let g=0;g<v.length;g+=1)m=Z(m,v[g]);return{c(){e=D("form"),n=D("input"),i=V(),r=D("footer"),s=D("button"),o=se(t[0]),l=V(),c=D("button"),f=se(t[2]),this.h()},l(g){e=O(g,"FORM",{class:!0});var _=N(e);n=O(_,"INPUT",{class:!0,name:!0,type:!0}),i=H(_),r=O(_,"FOOTER",{class:!0});var y=N(r);s=O(y,"BUTTON",{type:!0,class:!0});var I=N(s);o=oe(I,t[0]),I.forEach(w),l=H(y),c=O(y,"BUTTON",{type:!0,class:!0});var E=N(c);f=oe(E,t[2]),E.forEach(w),y.forEach(w),_.forEach(w),this.h()},h(){en(n,m),b(s,"type","button"),b(s,"class",a="btn "+t[7]),b(c,"type","submit"),b(c,"class",u="btn "+t[8]),b(r,"class",h="modal-footer "+t[11]),b(e,"class","space-y-4")},m(g,_){B(g,e,_),C(e,n),n.autofocus&&n.focus(),Rt(n,t[13]),C(e,i),C(e,r),C(r,s),C(s,o),C(r,l),C(r,c),C(c,f),d||(p=[j(n,"input",t[39]),j(s,"click",t[21]),j(e,"submit",t[23])],d=!0)},p(g,_){en(n,m=tn(v,[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},_[0]&4096&&g[12][0].valueAttr])),_[0]&8192&&n.value!==g[13]&&Rt(n,g[13]),_[0]&1&&Ce(o,g[0]),_[0]&128&&a!==(a="btn "+g[7])&&b(s,"class",a),_[0]&4&&Ce(f,g[2]),_[0]&256&&u!==(u="btn "+g[8])&&b(c,"class",u),_[0]&2048&&h!==(h="modal-footer "+g[11])&&b(r,"class",h)},d(g){g&&w(e),d=!1,Ze(p)}}}function Ql(t){let e,n,i,r,s,o,a,l,c,f,u;return{c(){e=D("footer"),n=D("button"),i=se(t[0]),s=V(),o=D("button"),a=se(t[1]),this.h()},l(h){e=O(h,"FOOTER",{class:!0});var d=N(e);n=O(d,"BUTTON",{type:!0,class:!0});var p=N(n);i=oe(p,t[0]),p.forEach(w),s=H(d),o=O(d,"BUTTON",{type:!0,class:!0});var v=N(o);a=oe(v,t[1]),v.forEach(w),d.forEach(w),this.h()},h(){b(n,"type","button"),b(n,"class",r="btn "+t[7]),b(o,"type","button"),b(o,"class",l="btn "+t[8]),b(e,"class",c="modal-footer "+t[11])},m(h,d){B(h,e,d),C(e,n),C(n,i),C(e,s),C(e,o),C(o,a),f||(u=[j(n,"click",t[21]),j(o,"click",t[22])],f=!0)},p(h,d){d[0]&1&&Ce(i,h[0]),d[0]&128&&r!==(r="btn "+h[7])&&b(n,"class",r),d[0]&2&&Ce(a,h[1]),d[0]&256&&l!==(l="btn "+h[8])&&b(o,"class",l),d[0]&2048&&c!==(c="modal-footer "+h[11])&&b(e,"class",c)},d(h){h&&w(e),f=!1,Ze(u)}}}function Zl(t){let e,n,i,r,s,o,a;return{c(){e=D("footer"),n=D("button"),i=se(t[0]),this.h()},l(l){e=O(l,"FOOTER",{class:!0});var c=N(e);n=O(c,"BUTTON",{type:!0,class:!0});var f=N(n);i=oe(f,t[0]),f.forEach(w),c.forEach(w),this.h()},h(){b(n,"type","button"),b(n,"class",r="btn "+t[7]),b(e,"class",s="modal-footer "+t[11])},m(l,c){B(l,e,c),C(e,n),C(n,i),o||(a=j(n,"click",t[21]),o=!0)},p(l,c){c[0]&1&&Ce(i,l[0]),c[0]&128&&r!==(r="btn "+l[7])&&b(n,"class",r),c[0]&2048&&s!==(s="modal-footer "+l[11])&&b(e,"class",s)},d(l){l&&w(e),o=!1,a()}}}function gr(t){let e,n,i,r,s,o,a,l,c,f,u;const h=[Jl,Gl],d=[];function p(v,m){return v[12][0].type!=="component"?0:1}return i=p(t),r=d[i]=h[i](t),{c(){e=D("div"),n=D("div"),r.c(),this.h()},l(v){e=O(v,"DIV",{class:!0,"data-testid":!0});var m=N(e);n=O(m,"DIV",{class:!0});var g=N(n);r.l(g),g.forEach(w),m.forEach(w),this.h()},h(){b(n,"class",s="modal-transition "+t[17]),b(e,"class",a="modal-backdrop "+t[18]),b(e,"data-testid","modal-backdrop")},m(v,m){B(v,e,m),C(e,n),d[i].m(n,null),c=!0,f||(u=[j(e,"mousedown",t[19]),j(e,"mouseup",t[20]),j(e,"touchstart",t[37],{passive:!0}),j(e,"touchend",t[38],{passive:!0}),ri(fl.call(null,e,!0))],f=!0)},p(v,m){t=v;let g=i;i=p(t),i===g?d[i].p(t,m):(te(),U(d[g],1,1,()=>{d[g]=null}),ne(),r=d[i],r?r.p(t,m):(r=d[i]=h[i](t),r.c()),P(r,1),r.m(n,null)),(!c||m[0]&131072&&s!==(s="modal-transition "+t[17]))&&b(n,"class",s),(!c||m[0]&262144&&a!==(a="modal-backdrop "+t[18]))&&b(e,"class",a)},i(v){c||(P(r),Ct(()=>{c&&(o||(o=mt(n,cn,{duration:t[3],opacity:t[4],x:t[5],y:t[6]},!0)),o.run(1))}),Ct(()=>{c&&(l||(l=mt(e,Wi,{duration:t[3]},!0)),l.run(1))}),c=!0)},o(v){U(r),o||(o=mt(n,cn,{duration:t[3],opacity:t[4],x:t[5],y:t[6]},!1)),o.run(0),l||(l=mt(e,Wi,{duration:t[3]},!1)),l.run(0),c=!1},d(v){v&&w(e),d[i].d(),v&&o&&o.end(),v&&l&&l.end(),f=!1,Ze(u)}}}function $l(t){let e,n,i,r,s=t[12].length>0&&ur(t);return{c(){s&&s.c(),e=he()},l(o){s&&s.l(o),e=he()},m(o,a){s&&s.m(o,a),B(o,e,a),n=!0,i||(r=j(window,"keydown",t[24]),i=!0)},p(o,a){o[12].length>0?s?(s.p(o,a),a[0]&4096&&P(s,1)):(s=ur(o),s.c(),P(s,1),s.m(e.parentNode,e)):s&&(te(),U(s,1,1,()=>{s=null}),ne())},i(o){n||(P(s),n=!0)},o(o){U(s),n=!1},d(o){o&&w(e),s&&s.d(o),i=!1,r()}}}const ec="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto",tc="w-full h-fit min-h-full p-4 overflow-y-auto flex justify-center",nc="block overflow-y-auto",ic="w-full h-auto";function rc(t,e,n){let i,r,s,o,a,l;Me(t,ze,R=>n(12,l=R));const c=$o();let{position:f="items-center"}=e,{components:u={}}=e,{duration:h=150}=e,{flyOpacity:d=0}=e,{flyX:p=0}=e,{flyY:v=100}=e,{background:m="bg-surface-100-800-token"}=e,{width:g="w-modal"}=e,{height:_="h-auto"}=e,{padding:y="p-4"}=e,{spacing:I="space-y-4"}=e,{rounded:E="rounded-container-token"}=e,{shadow:k="shadow-xl"}=e,{zIndex:S="z-[999]"}=e,{buttonNeutral:T="variant-ghost-surface"}=e,{buttonPositive:L="variant-filled"}=e,{buttonTextCancel:A="Cancel"}=e,{buttonTextConfirm:x="Confirm"}=e,{buttonTextSubmit:q="Submit"}=e,{regionBackdrop:W="bg-surface-backdrop-token"}=e,{regionHeader:K="text-2xl font-bold"}=e,{regionBody:$="max-h-[200px] overflow-hidden"}=e,{regionFooter:J="flex justify-end space-x-2"}=e,fe;const M={buttonTextCancel:A,buttonTextConfirm:x,buttonTextSubmit:q};let ee,Ie=!1;ze.subscribe(R=>{R.length&&(R[0].type==="prompt"&&n(13,fe=R[0].value),n(0,A=R[0].buttonTextCancel||M.buttonTextCancel),n(1,x=R[0].buttonTextConfirm||M.buttonTextConfirm),n(2,q=R[0].buttonTextSubmit||M.buttonTextSubmit),n(14,ee=typeof R[0].component=="string"?u[R[0].component]:R[0].component))});function dt(R){if(!(R.target instanceof Element))return;const xe=R.target.classList;(xe.contains("modal-backdrop")||xe.contains("modal-transition"))&&(Ie=!0)}function $e(R){if(!(R.target instanceof Element))return;const xe=R.target.classList;(xe.contains("modal-backdrop")||xe.contains("modal-transition"))&&Ie&&(l[0].response&&l[0].response(void 0),ze.close(),c("backdrop",R)),Ie=!1}function ht(){l[0].response&&l[0].response(!1),ze.close()}function Cn(){l[0].response&&l[0].response(!0),ze.close()}function Jo(R){R.preventDefault(),l[0].response&&l[0].response(fe),ze.close()}function Yo(R){l.length&&R.code==="Escape"&&ht()}function Xo(R){we.call(this,t,R)}function Qo(R){we.call(this,t,R)}function Zo(){fe=this.value,n(13,fe)}return t.$$set=R=>{n(43,e=Z(Z({},e),de(R))),"position"in R&&n(25,f=R.position),"components"in R&&n(26,u=R.components),"duration"in R&&n(3,h=R.duration),"flyOpacity"in R&&n(4,d=R.flyOpacity),"flyX"in R&&n(5,p=R.flyX),"flyY"in R&&n(6,v=R.flyY),"background"in R&&n(27,m=R.background),"width"in R&&n(28,g=R.width),"height"in R&&n(29,_=R.height),"padding"in R&&n(30,y=R.padding),"spacing"in R&&n(31,I=R.spacing),"rounded"in R&&n(32,E=R.rounded),"shadow"in R&&n(33,k=R.shadow),"zIndex"in R&&n(34,S=R.zIndex),"buttonNeutral"in R&&n(7,T=R.buttonNeutral),"buttonPositive"in R&&n(8,L=R.buttonPositive),"buttonTextCancel"in R&&n(0,A=R.buttonTextCancel),"buttonTextConfirm"in R&&n(1,x=R.buttonTextConfirm),"buttonTextSubmit"in R&&n(2,q=R.buttonTextSubmit),"regionBackdrop"in R&&n(35,W=R.regionBackdrop),"regionHeader"in R&&n(9,K=R.regionHeader),"regionBody"in R&&n(10,$=R.regionBody),"regionFooter"in R&&n(11,J=R.regionFooter)},t.$$.update=()=>{var R,xe,Di;t.$$.dirty[0]&33558528&&n(36,i=((R=l[0])==null?void 0:R.position)??f),n(18,r=`${ec} ${W} ${S} ${e.class??""} ${((xe=l[0])==null?void 0:xe.backdropClasses)??""}`),t.$$.dirty[1]&32&&n(17,s=`${tc} ${i??""}`),t.$$.dirty[0]&2013270016|t.$$.dirty[1]&7&&n(16,o=`${nc} ${m} ${g} ${_} ${y} ${I} ${E} ${k} ${((Di=l[0])==null?void 0:Di.modalClasses)??""}`),t.$$.dirty[0]&2046824447|t.$$.dirty[1]&23&&n(15,a={position:f,duration:h,flyOpacity:d,flyX:p,flyY:v,background:m,width:g,height:_,padding:y,spacing:I,rounded:E,shadow:k,buttonNeutral:T,buttonPositive:L,buttonTextCancel:A,buttonTextConfirm:x,buttonTextSubmit:q,regionBackdrop:W,regionHeader:K,regionBody:$,regionFooter:J,onClose:ht})},e=de(e),[A,x,q,h,d,p,v,T,L,K,$,J,l,fe,ee,a,o,s,r,dt,$e,ht,Cn,Jo,Yo,f,u,m,g,_,y,I,E,k,S,W,i,Xo,Qo,Zo]}class sc extends ve{constructor(e){super(),ye(this,e,rc,$l,ue,{position:25,components:26,duration:3,flyOpacity:4,flyX:5,flyY:6,background:27,width:28,height:29,padding:30,spacing:31,rounded:32,shadow:33,zIndex:34,buttonNeutral:7,buttonPositive:8,buttonTextCancel:0,buttonTextConfirm:1,buttonTextSubmit:2,regionBackdrop:35,regionHeader:9,regionBody:10,regionFooter:11},null,[-1,-1])}}function oc(t){let e,n=`<script nonce="%sveltekit.nonce%">(${ul.toString()})();<\/script>`,i,r,s,o,a,l,c,f,u,h,d,p,v;return{c(){e=new It(!1),i=he(),r=V(),s=D("div"),o=D("div"),a=Zt("svg"),l=Zt("path"),this.h()},l(m){const g=ea("svelte-gewkj4",document.head);e=Et(g,!1),i=he(),g.forEach(w),r=H(m),s=O(m,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var _=N(s);o=O(_,"DIV",{class:!0});var y=N(o);a=$t(y,"svg",{class:!0,xmlns:!0,viewBox:!0});var I=N(a);l=$t(I,"path",{d:!0}),N(l).forEach(w),I.forEach(w),y.forEach(w),_.forEach(w),this.h()},h(){e.a=i,b(l,"d",c=t[0]?t[4].sun:t[4].moon),b(a,"class",f="lightswitch-icon "+t[1]),b(a,"xmlns","http://www.w3.org/2000/svg"),b(a,"viewBox","0 0 512 512"),b(o,"class",u="lightswitch-thumb "+t[2]),b(s,"class",h="lightswitch-track "+t[3]),b(s,"role","switch"),b(s,"aria-label","Light Switch"),b(s,"aria-checked",t[0]),b(s,"title",d="Toggle "+(t[0]===!0?"Dark":"Light")+" Mode"),b(s,"tabindex","0")},m(m,g){e.m(n,document.head),C(document.head,i),B(m,r,g),B(m,s,g),C(s,o),C(o,a),C(a,l),p||(v=[j(s,"click",t[5]),j(s,"click",t[18]),j(s,"keydown",uc),j(s,"keydown",t[19]),j(s,"keyup",t[20]),j(s,"keypress",t[21])],p=!0)},p(m,[g]){g&1&&c!==(c=m[0]?m[4].sun:m[4].moon)&&b(l,"d",c),g&2&&f!==(f="lightswitch-icon "+m[1])&&b(a,"class",f),g&4&&u!==(u="lightswitch-thumb "+m[2])&&b(o,"class",u),g&8&&h!==(h="lightswitch-track "+m[3])&&b(s,"class",h),g&1&&b(s,"aria-checked",m[0]),g&1&&d!==(d="Toggle "+(m[0]===!0?"Dark":"Light")+" Mode")&&b(s,"title",d)},i:G,o:G,d(m){m&&(e.d(),w(r),w(s)),w(i),p=!1,Ze(v)}}}const ac="cursor-pointer",lc="aspect-square scale-[0.8] flex justify-center items-center",cc="w-[70%] aspect-square";function uc(t){["Enter","Space"].includes(t.code)&&(t.preventDefault(),t.currentTarget.click())}function fc(t,e,n){let i,r,s,o,a,l,c,f;Me(t,Kn,A=>n(0,f=A));let{bgLight:u="bg-surface-50"}=e,{bgDark:h="bg-surface-900"}=e,{fillLight:d="fill-surface-50"}=e,{fillDark:p="fill-surface-900"}=e,{width:v="w-12"}=e,{height:m="h-6"}=e,{ring:g="ring-[1px] ring-surface-500/30"}=e,{rounded:_="rounded-token"}=e;const y="transition-all duration-[200ms]",I={sun:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",moon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"};function E(){ta(Kn,f=!f,f),cl(f),zi(f)}cs(()=>{"modeCurrent"in localStorage||zi(ll())});function k(A){we.call(this,t,A)}function S(A){we.call(this,t,A)}function T(A){we.call(this,t,A)}function L(A){we.call(this,t,A)}return t.$$set=A=>{n(23,e=Z(Z({},e),de(A))),"bgLight"in A&&n(6,u=A.bgLight),"bgDark"in A&&n(7,h=A.bgDark),"fillLight"in A&&n(8,d=A.fillLight),"fillDark"in A&&n(9,p=A.fillDark),"width"in A&&n(10,v=A.width),"height"in A&&n(11,m=A.height),"ring"in A&&n(12,g=A.ring),"rounded"in A&&n(13,_=A.rounded)},t.$$.update=()=>{t.$$.dirty&193&&n(17,i=f===!0?u:h),t.$$.dirty&193&&n(16,r=f===!0?h:u),t.$$.dirty&1&&n(15,s=f===!0?"translate-x-[100%]":""),t.$$.dirty&769&&n(14,o=f===!0?d:p),n(3,a=`${ac} ${y} ${v} ${m} ${g} ${_} ${i} ${e.class??""}`),t.$$.dirty&108544&&n(2,l=`${lc} ${y} ${m} ${_} ${r} ${s}`),t.$$.dirty&16384&&n(1,c=`${cc} ${o}`)},e=de(e),[f,c,l,a,I,E,u,h,d,p,v,m,g,_,o,s,r,i,k,S,T,L]}class dc extends ve{constructor(e){super(),ye(this,e,fc,oc,ue,{bgLight:6,bgDark:7,fillLight:8,fillDark:9,width:10,height:11,ring:12,rounded:13})}}function pr(t,e,n){const i=t.slice();return i[32]=e[n],i[34]=n,i}function _r(t){let e,n,i=[],r=new Map,s,o,a,l=nn(t[6]);const c=f=>f[32];for(let f=0;f<l.length;f+=1){let u=pr(t,l,f),h=c(u);r.set(h,i[f]=wr(h,u))}return{c(){e=D("div"),n=D("div");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=O(f,"DIV",{class:!0,"data-testid":!0});var u=N(e);n=O(u,"DIV",{class:!0});var h=N(n);for(let d=0;d<i.length;d+=1)i[d].l(h);h.forEach(w),u.forEach(w),this.h()},h(){b(n,"class",s="snackbar "+t[8]),b(e,"class",o="snackbar-wrapper "+t[9]),b(e,"data-testid","snackbar-wrapper")},m(f,u){B(f,e,u),C(e,n);for(let h=0;h<i.length;h+=1)i[h]&&i[h].m(n,null);a=!0},p(f,u){if(u[0]&7390){l=nn(f[6]),te();for(let h=0;h<i.length;h+=1)i[h].r();i=fa(i,u,c,1,f,l,r,n,da,wr,null,pr);for(let h=0;h<i.length;h+=1)i[h].a();ne()}(!a||u[0]&256&&s!==(s="snackbar "+f[8]))&&b(n,"class",s),(!a||u[0]&512&&o!==(o="snackbar-wrapper "+f[9]))&&b(e,"class",o)},i(f){if(!a){for(let u=0;u<l.length;u+=1)P(i[u]);a=!0}},o(f){for(let u=0;u<i.length;u+=1)U(i[u]);a=!1},d(f){f&&w(e);for(let u=0;u<i.length;u+=1)i[u].d()}}}function br(t){let e,n,i=t[32].action&&vr(t),r=!t[32].hideDismiss&&yr(t);return{c(){e=D("div"),i&&i.c(),n=V(),r&&r.c(),this.h()},l(s){e=O(s,"DIV",{class:!0});var o=N(e);i&&i.l(o),n=H(o),r&&r.l(o),o.forEach(w),this.h()},h(){b(e,"class","toast-actions "+_c)},m(s,o){B(s,e,o),i&&i.m(e,null),C(e,n),r&&r.m(e,null)},p(s,o){s[32].action?i?i.p(s,o):(i=vr(s),i.c(),i.m(e,n)):i&&(i.d(1),i=null),s[32].hideDismiss?r&&(r.d(1),r=null):r?r.p(s,o):(r=yr(s),r.c(),r.m(e,null))},d(s){s&&w(e),i&&i.d(),r&&r.d()}}}function vr(t){let e,n,i=t[32].action.label+"",r,s;function o(){return t[26](t[34])}return{c(){e=D("button"),n=new It(!1),this.h()},l(a){e=O(a,"BUTTON",{class:!0});var l=N(e);n=Et(l,!1),l.forEach(w),this.h()},h(){n.a=null,b(e,"class",t[2])},m(a,l){B(a,e,l),n.m(i,e),r||(s=j(e,"click",o),r=!0)},p(a,l){t=a,l[0]&64&&i!==(i=t[32].action.label+"")&&n.p(i),l[0]&4&&b(e,"class",t[2])},d(a){a&&w(e),r=!1,s()}}}function yr(t){let e,n,i,r;function s(){return t[27](t[32])}return{c(){e=D("button"),n=se(t[4]),this.h()},l(o){e=O(o,"BUTTON",{class:!0,"aria-label":!0});var a=N(e);n=oe(a,t[4]),a.forEach(w),this.h()},h(){b(e,"class",t[3]),b(e,"aria-label","Dismiss toast")},m(o,a){B(o,e,a),C(e,n),i||(r=j(e,"click",s),i=!0)},p(o,a){t=o,a[0]&16&&Ce(n,t[4]),a[0]&8&&b(e,"class",t[3])},d(o){o&&w(e),i=!1,r()}}}function wr(t,e){let n,i,r,s,o=e[32].message+"",a,l,c,f,u,h,d,p=G,v,m,g,_=(e[32].action||!e[32].hideDismiss)&&br(e);function y(){return e[28](e[34])}function I(){return e[29](e[34])}return{key:t,first:null,c(){n=D("div"),i=D("div"),r=D("div"),s=new It(!1),a=V(),_&&_.c(),c=V(),this.h()},l(E){n=O(E,"DIV",{role:!0,"aria-live":!0});var k=N(n);i=O(k,"DIV",{class:!0,"data-testid":!0});var S=N(i);r=O(S,"DIV",{class:!0});var T=N(r);s=Et(T,!1),T.forEach(w),a=H(S),_&&_.l(S),S.forEach(w),c=H(k),k.forEach(w),this.h()},h(){s.a=null,b(r,"class","text-base"),b(i,"class",l="toast "+e[7]+" "+(e[32].background??e[1])+" "+(e[32].classes??"")),b(i,"data-testid","toast"),b(n,"role",f=e[32].hideDismiss?"alert":"alertdialog"),b(n,"aria-live","polite"),this.first=n},m(E,k){B(E,n,k),C(n,i),C(i,r),s.m(o,r),C(i,a),_&&_.m(i,null),C(n,c),v=!0,m||(g=[j(n,"mouseenter",y),j(n,"mouseleave",I)],m=!0)},p(E,k){e=E,(!v||k[0]&64)&&o!==(o=e[32].message+"")&&s.p(o),e[32].action||!e[32].hideDismiss?_?_.p(e,k):(_=br(e),_.c(),_.m(i,null)):_&&(_.d(1),_=null),(!v||k[0]&194&&l!==(l="toast "+e[7]+" "+(e[32].background??e[1])+" "+(e[32].classes??"")))&&b(i,"class",l),(!v||k[0]&64&&f!==(f=e[32].hideDismiss?"alert":"alertdialog"))&&b(n,"role",f)},r(){d=n.getBoundingClientRect()},f(){wa(n),p(),fs(n,d)},a(){p(),p=ya(n,d,Kl,{duration:e[0]})},i(E){v||(Ct(()=>{v&&(h&&h.end(1),u=ca(n,e[14],{key:e[32].id}),u.start())}),v=!0)},o(E){u&&u.invalidate(),h=ua(n,e[13],{key:e[32].id}),v=!1},d(E){E&&w(n),_&&_.d(),E&&h&&h.end(),m=!1,Ze(g)}}}function hc(t){let e,n,i=t[5].length&&_r(t);return{c(){i&&i.c(),e=he()},l(r){i&&i.l(r),e=he()},m(r,s){i&&i.m(r,s),B(r,e,s),n=!0},p(r,s){r[5].length?i?(i.p(r,s),s[0]&32&&P(i,1)):(i=_r(r),i.c(),P(i,1),i.m(e.parentNode,e)):i&&(te(),U(i,1,1,()=>{i=null}),ne())},i(r){n||(P(i),n=!0)},o(r){U(i),n=!1},d(r){r&&w(e),i&&i.d(r)}}}const mc="flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none",gc="flex flex-col gap-y-2",pc="flex justify-between items-center pointer-events-auto",_c="flex items-center space-x-2";function bc(t,e,n){let i,r,s,o,a;Me(t,Ee,M=>n(5,a=M));let{position:l="b"}=e,{max:c=3}=e,{duration:f=250}=e,{background:u="variant-filled-secondary"}=e,{width:h="max-w-[640px]"}=e,{color:d=""}=e,{padding:p="p-4"}=e,{spacing:v="space-x-4"}=e,{rounded:m="rounded-container-token"}=e,{shadow:g="shadow-lg"}=e,{zIndex:_="z-[888]"}=e,{buttonAction:y="btn variant-filled"}=e,{buttonDismiss:I="btn-icon btn-icon-sm variant-filled"}=e,{buttonDismissLabel:E="✕"}=e,k,S,T={x:0,y:0};switch(l){case"t":k="justify-center items-start",S="items-center",T={x:0,y:-100};break;case"b":k="justify-center items-end",S="items-center",T={x:0,y:100};break;case"l":k="justify-start items-center",S="items-start",T={x:-100,y:0};break;case"r":k="justify-end items-center",S="items-end",T={x:100,y:0};break;case"tl":k="justify-start items-start",S="items-start",T={x:-100,y:0};break;case"tr":k="justify-end items-start",S="items-end",T={x:100,y:0};break;case"bl":k="justify-start items-end",S="items-start",T={x:-100,y:0};break;case"br":k="justify-end items-end",S="items-end",T={x:100,y:0};break}function L(M){var ee,Ie;(Ie=(ee=a[M])==null?void 0:ee.action)==null||Ie.response(),Ee.close(a[M].id)}function A(M){var ee;(ee=a[M])!=null&&ee.hoverable&&(Ee.freeze(M),n(8,r+=" scale-[105%]"))}function x(M){var ee;(ee=a[M])!=null&&ee.hoverable&&(Ee.unfreeze(M),n(8,r=r.replace(" scale-[105%]","")))}const[q,W]=dl({duration:M=>Math.sqrt(M*f),fallback(M){const ee=getComputedStyle(M),Ie=ee.transform==="none"?"":ee.transform;return{duration:f,easing:ha,css:(dt,$e)=>`
					transform: ${Ie} scale(${dt}) translate(${$e*T.x}%, ${$e*T.y}%);
					opacity: ${dt}
				`}}}),K=M=>L(M),$=M=>Ee.close(M.id),J=M=>A(M),fe=M=>x(M);return t.$$set=M=>{n(31,e=Z(Z({},e),de(M))),"position"in M&&n(15,l=M.position),"max"in M&&n(16,c=M.max),"duration"in M&&n(0,f=M.duration),"background"in M&&n(1,u=M.background),"width"in M&&n(17,h=M.width),"color"in M&&n(18,d=M.color),"padding"in M&&n(19,p=M.padding),"spacing"in M&&n(20,v=M.spacing),"rounded"in M&&n(21,m=M.rounded),"shadow"in M&&n(22,g=M.shadow),"zIndex"in M&&n(23,_=M.zIndex),"buttonAction"in M&&n(2,y=M.buttonAction),"buttonDismiss"in M&&n(3,I=M.buttonDismiss),"buttonDismissLabel"in M&&n(4,E=M.buttonDismissLabel)},t.$$.update=()=>{n(9,i=`${mc} ${k} ${_} ${e.class||""}`),t.$$.dirty[0]&34078720&&n(8,r=`${gc} ${S} ${p}`),t.$$.dirty[0]&8257536&&n(7,s=`${pc} ${h} ${d} ${p} ${v} ${m} ${g}`),t.$$.dirty[0]&65568&&n(6,o=Array.from(a).slice(0,c))},e=de(e),[f,u,y,I,E,a,o,s,r,i,L,A,x,q,W,l,c,h,d,p,v,m,g,_,k,S,K,$,J,fe]}class vc extends ve{constructor(e){super(),ye(this,e,bc,hc,ue,{position:15,max:16,duration:0,background:1,width:17,color:18,padding:19,spacing:20,rounded:21,shadow:22,zIndex:23,buttonAction:2,buttonDismiss:3,buttonDismissLabel:4},null,[-1,-1])}}const yc=""+new URL("../assets/vpsLogo.a05dfbbc.png",import.meta.url).href;/**
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
 */const Ts=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},wc=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ks={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,f=s>>2,u=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(h=64)),i.push(n[f],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ts(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const u=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||u==null)throw new Ic;const h=s<<2|a>>4;if(i.push(h),c!==64){const d=a<<4&240|c>>2;if(i.push(d),u!==64){const p=c<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ic extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ec=function(t){const e=Ts(t);return ks.encodeByteArray(e,!0)},Ss=function(t){return Ec(t).replace(/\./g,"")},As=function(t){try{return ks.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kc=()=>Tc().__FIREBASE_DEFAULTS__,Sc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ac=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&As(t[1]);return e&&JSON.parse(e)},di=()=>{try{return kc()||Sc()||Ac()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cc=t=>{var e,n;return(n=(e=di())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Cs=()=>{var t;return(t=di())===null||t===void 0?void 0:t.config},Rs=t=>{var e;return(e=di())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Rc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function Ds(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Oc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pc(){const t=re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Os(){try{return typeof indexedDB=="object"}catch{return!1}}function Ps(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Lc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Nc="FirebaseError";class Pe extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Nc,Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ft.prototype.create)}}class ft{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Mc(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Pe(r,a,i)}}function Mc(t,e){return t.replace(Uc,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Uc=/\{\$([^}]+)}/g;function Bc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Ir(s)&&Ir(o)){if(!Dt(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Ir(t){return t!==null&&typeof t=="object"}/**
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
 */function Bt(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Fc(t,e){const n=new Vc(t,e);return n.subscribe.bind(n)}class Vc{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Hc(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Dn),r.error===void 0&&(r.error=Dn),r.complete===void 0&&(r.complete=Dn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hc(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dn(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=1e3,jc=2,zc=4*60*60*1e3,Wc=.5;function Er(t,e=xc,n=jc){const i=e*Math.pow(n,t),r=Math.round(Wc*i*(Math.random()-.5)*2);return Math.min(zc,i+r)}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class De{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Rc;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gc(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Kc(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kc(t){return t===et?void 0:t}function Gc(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));const Yc={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Xc=z.INFO,Qc={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Zc=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Qc[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hi{constructor(e){this.name=e,this._logLevel=Xc,this._logHandler=Zc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const $c=(t,e)=>e.some(n=>t instanceof n);let Tr,kr;function eu(){return Tr||(Tr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tu(){return kr||(kr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ls=new WeakMap,Gn=new WeakMap,Ns=new WeakMap,On=new WeakMap,mi=new WeakMap;function nu(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ge(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ls.set(n,t)}).catch(()=>{}),mi.set(e,t),e}function iu(t){if(Gn.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Gn.set(t,e)}let Jn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ns.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ge(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ru(t){Jn=t(Jn)}function su(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Pn(this),e,...n);return Ns.set(i,e.sort?e.sort():[e]),Ge(i)}:tu().includes(t)?function(...e){return t.apply(Pn(this),e),Ge(Ls.get(this))}:function(...e){return Ge(t.apply(Pn(this),e))}}function ou(t){return typeof t=="function"?su(t):(t instanceof IDBTransaction&&iu(t),$c(t,eu())?new Proxy(t,Jn):t)}function Ge(t){if(t instanceof IDBRequest)return nu(t);if(On.has(t))return On.get(t);const e=ou(t);return e!==t&&(On.set(t,e),mi.set(e,t)),e}const Pn=t=>mi.get(t);function au(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Ge(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ge(o.result),l.oldVersion,l.newVersion,Ge(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const lu=["get","getKey","getAll","getAllKeys","count"],cu=["put","add","delete","clear"],Ln=new Map;function Sr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ln.get(e))return Ln.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=cu.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||lu.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Ln.set(e,s),s}ru(t=>({...t,get:(e,n,i)=>Sr(e,n)||t.get(e,n,i),has:(e,n)=>!!Sr(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fu(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function fu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yn="@firebase/app",Ar="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new hi("@firebase/app"),du="@firebase/app-compat",hu="@firebase/analytics-compat",mu="@firebase/analytics",gu="@firebase/app-check-compat",pu="@firebase/app-check",_u="@firebase/auth",bu="@firebase/auth-compat",vu="@firebase/database",yu="@firebase/database-compat",wu="@firebase/functions",Iu="@firebase/functions-compat",Eu="@firebase/installations",Tu="@firebase/installations-compat",ku="@firebase/messaging",Su="@firebase/messaging-compat",Au="@firebase/performance",Cu="@firebase/performance-compat",Ru="@firebase/remote-config",Du="@firebase/remote-config-compat",Ou="@firebase/storage",Pu="@firebase/storage-compat",Lu="@firebase/firestore",Nu="@firebase/firestore-compat",Mu="firebase",Uu="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="[DEFAULT]",Bu={[Yn]:"fire-core",[du]:"fire-core-compat",[mu]:"fire-analytics",[hu]:"fire-analytics-compat",[pu]:"fire-app-check",[gu]:"fire-app-check-compat",[_u]:"fire-auth",[bu]:"fire-auth-compat",[vu]:"fire-rtdb",[yu]:"fire-rtdb-compat",[wu]:"fire-fn",[Iu]:"fire-fn-compat",[Eu]:"fire-iid",[Tu]:"fire-iid-compat",[ku]:"fire-fcm",[Su]:"fire-fcm-compat",[Au]:"fire-perf",[Cu]:"fire-perf-compat",[Ru]:"fire-rc",[Du]:"fire-rc-compat",[Ou]:"fire-gcs",[Pu]:"fire-gcs-compat",[Lu]:"fire-fst",[Nu]:"fire-fst-compat","fire-js":"fire-js",[Mu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Map,Qn=new Map;function Fu(t,e){try{t.container.addComponent(e)}catch(n){at.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Be(t){const e=t.name;if(Qn.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;Qn.set(e,t);for(const n of un.values())Fu(n,t);return!0}function Tt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Je=new ft("app","Firebase",Vu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new De("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Je.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=Uu;function Ms(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Xn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Je.create("bad-app-name",{appName:String(r)});if(n||(n=Cs()),!n)throw Je.create("no-options");const s=un.get(r);if(s){if(Dt(n,s.options)&&Dt(i,s.config))return s;throw Je.create("duplicate-app",{appName:r})}const o=new Jc(r);for(const l of Qn.values())o.addComponent(l);const a=new Hu(n,i,o);return un.set(r,a),a}function Us(t=Xn){const e=un.get(t);if(!e&&t===Xn&&Cs())return Ms();if(!e)throw Je.create("no-app",{appName:t});return e}function ke(t,e,n){var i;let r=(i=Bu[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(a.join(" "));return}Be(new De(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const xu="firebase-heartbeat-database",ju=1,Ot="firebase-heartbeat-store";let Nn=null;function Bs(){return Nn||(Nn=au(xu,ju,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ot)}}}).catch(t=>{throw Je.create("idb-open",{originalErrorMessage:t.message})})),Nn}async function zu(t){try{return await(await Bs()).transaction(Ot).objectStore(Ot).get(Fs(t))}catch(e){if(e instanceof Pe)at.warn(e.message);else{const n=Je.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(n.message)}}}async function Cr(t,e){try{const i=(await Bs()).transaction(Ot,"readwrite");await i.objectStore(Ot).put(e,Fs(t)),await i.done}catch(n){if(n instanceof Pe)at.warn(n.message);else{const i=Je.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});at.warn(i.message)}}}function Fs(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wu=1024,qu=30*24*60*60*1e3;class Ku{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ju(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Rr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=qu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Rr(),{heartbeatsToSend:n,unsentEntries:i}=Gu(this._heartbeatsCache.heartbeats),r=Ss(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Rr(){return new Date().toISOString().substring(0,10)}function Gu(t,e=Wu){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Dr(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Dr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ju{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Os()?Ps().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Cr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Dr(t){return Ss(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){Be(new De("platform-logger",e=>new uu(e),"PRIVATE")),Be(new De("heartbeat",e=>new Ku(e),"PRIVATE")),ke(Yn,Ar,t),ke(Yn,Ar,"esm2017"),ke("fire-js","")}Yu("");var Xu="firebase",Qu="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke(Xu,Qu,"app");const Zu=(t,e)=>e.some(n=>t instanceof n);let Or,Pr;function $u(){return Or||(Or=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ef(){return Pr||(Pr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vs=new WeakMap,Zn=new WeakMap,Hs=new WeakMap,Mn=new WeakMap,gi=new WeakMap;function tf(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ye(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vs.set(n,t)}).catch(()=>{}),gi.set(e,t),e}function nf(t){if(Zn.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zn.set(t,e)}let $n={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hs.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ye(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rf(t){$n=t($n)}function sf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Un(this),e,...n);return Hs.set(i,e.sort?e.sort():[e]),Ye(i)}:ef().includes(t)?function(...e){return t.apply(Un(this),e),Ye(Vs.get(this))}:function(...e){return Ye(t.apply(Un(this),e))}}function of(t){return typeof t=="function"?sf(t):(t instanceof IDBTransaction&&nf(t),Zu(t,$u())?new Proxy(t,$n):t)}function Ye(t){if(t instanceof IDBRequest)return tf(t);if(Mn.has(t))return Mn.get(t);const e=of(t);return e!==t&&(Mn.set(t,e),gi.set(e,t)),e}const Un=t=>gi.get(t);function af(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Ye(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ye(o.result),l.oldVersion,l.newVersion,Ye(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const lf=["get","getKey","getAll","getAllKeys","count"],cf=["put","add","delete","clear"],Bn=new Map;function Lr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bn.get(e))return Bn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=cf.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||lf.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Bn.set(e,s),s}rf(t=>({...t,get:(e,n,i)=>Lr(e,n)||t.get(e,n,i),has:(e,n)=>!!Lr(e,n)||t.has(e,n)}));const xs="@firebase/installations",pi="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=1e4,zs=`w:${pi}`,Ws="FIS_v2",uf="https://firebaseinstallations.googleapis.com/v1",ff=60*60*1e3,df="installations",hf="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},lt=new ft(df,hf,mf);function qs(t){return t instanceof Pe&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks({projectId:t}){return`${uf}/projects/${t}/installations`}function Gs(t){return{token:t.token,requestStatus:2,expiresIn:pf(t.expiresIn),creationTime:Date.now()}}async function Js(t,e){const i=(await e.json()).error;return lt.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ys({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function gf(t,{refreshToken:e}){const n=Ys(t);return n.append("Authorization",_f(e)),n}async function Xs(t){const e=await t();return e.status>=500&&e.status<600?t():e}function pf(t){return Number(t.replace("s","000"))}function _f(t){return`${Ws} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bf({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Ks(t),r=Ys(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:n,authVersion:Ws,appId:t.appId,sdkVersion:zs},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Xs(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Gs(c.authToken)}}else throw await Js("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=/^[cdef][\w-]{21}$/,ei="";function wf(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=If(t);return yf.test(n)?n:ei}catch{return ei}}function If(t){return vf(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Map;function $s(t,e){const n=En(t);eo(n,e),Ef(n,e)}function eo(t,e){const n=Zs.get(t);if(n)for(const i of n)i(e)}function Ef(t,e){const n=Tf();n&&n.postMessage({key:t,fid:e}),kf()}let tt=null;function Tf(){return!tt&&"BroadcastChannel"in self&&(tt=new BroadcastChannel("[Firebase] FID Change"),tt.onmessage=t=>{eo(t.data.key,t.data.fid)}),tt}function kf(){Zs.size===0&&tt&&(tt.close(),tt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="firebase-installations-database",Af=1,ct="firebase-installations-store";let Fn=null;function _i(){return Fn||(Fn=af(Sf,Af,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ct)}}})),Fn}async function fn(t,e){const n=En(t),r=(await _i()).transaction(ct,"readwrite"),s=r.objectStore(ct),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&$s(t,e.fid),e}async function to(t){const e=En(t),i=(await _i()).transaction(ct,"readwrite");await i.objectStore(ct).delete(e),await i.done}async function Tn(t,e){const n=En(t),r=(await _i()).transaction(ct,"readwrite"),s=r.objectStore(ct),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&$s(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t){let e;const n=await Tn(t.appConfig,i=>{const r=Cf(i),s=Rf(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===ei?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Cf(t){const e=t||{fid:wf(),registrationStatus:0};return no(e)}function Rf(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(lt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Df(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Of(t)}:{installationEntry:e}}async function Df(t,e){try{const n=await bf(t,e);return fn(t.appConfig,n)}catch(n){throw qs(n)&&n.customData.serverCode===409?await to(t.appConfig):await fn(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Of(t){let e=await Nr(t.appConfig);for(;e.registrationStatus===1;)await Qs(100),e=await Nr(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await bi(t);return i||n}return e}function Nr(t){return Tn(t,e=>{if(!e)throw lt.create("installation-not-found");return no(e)})}function no(t){return Pf(t)?{fid:t.fid,registrationStatus:0}:t}function Pf(t){return t.registrationStatus===1&&t.registrationTime+js<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lf({appConfig:t,heartbeatServiceProvider:e},n){const i=Nf(t,n),r=gf(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:zs,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await Xs(()=>fetch(i,a));if(l.ok){const c=await l.json();return Gs(c)}else throw await Js("Generate Auth Token",l)}function Nf(t,{fid:e}){return`${Ks(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(t,e=!1){let n;const i=await Tn(t.appConfig,s=>{if(!io(s))throw lt.create("not-registered");const o=s.authToken;if(!e&&Bf(o))return s;if(o.requestStatus===1)return n=Mf(t,e),s;{if(!navigator.onLine)throw lt.create("app-offline");const a=Vf(s);return n=Uf(t,a),a}});return n?await n:i.authToken}async function Mf(t,e){let n=await Mr(t.appConfig);for(;n.authToken.requestStatus===1;)await Qs(100),n=await Mr(t.appConfig);const i=n.authToken;return i.requestStatus===0?vi(t,e):i}function Mr(t){return Tn(t,e=>{if(!io(e))throw lt.create("not-registered");const n=e.authToken;return Hf(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Uf(t,e){try{const n=await Lf(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await fn(t.appConfig,i),n}catch(n){if(qs(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await to(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await fn(t.appConfig,i)}throw n}}function io(t){return t!==void 0&&t.registrationStatus===2}function Bf(t){return t.requestStatus===2&&!Ff(t)}function Ff(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ff}function Vf(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Hf(t){return t.requestStatus===1&&t.requestTime+js<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xf(t){const e=t,{installationEntry:n,registrationPromise:i}=await bi(e);return i?i.catch(console.error):vi(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jf(t,e=!1){const n=t;return await zf(n),(await vi(n,e)).token}async function zf(t){const{registrationPromise:e}=await bi(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t){if(!t||!t.options)throw Vn("App Configuration");if(!t.name)throw Vn("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Vn(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Vn(t){return lt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="installations",qf="installations-internal",Kf=t=>{const e=t.getProvider("app").getImmediate(),n=Wf(e),i=Tt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Gf=t=>{const e=t.getProvider("app").getImmediate(),n=Tt(e,ro).getImmediate();return{getId:()=>xf(n),getToken:r=>jf(n,r)}};function Jf(){Be(new De(ro,Kf,"PUBLIC")),Be(new De(qf,Gf,"PRIVATE"))}Jf();ke(xs,pi);ke(xs,pi,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="analytics",Yf="firebase_id",Xf="origin",Qf=60*1e3,Zf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yi="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new hi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ce=new ft("analytics","Analytics",$f);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t){if(!t.startsWith(yi)){const e=ce.create("invalid-gtag-resource",{gtagURL:t});return ae.warn(e.message),""}return t}function so(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function td(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function nd(t,e){const n=td("firebase-js-sdk-policy",{createScriptURL:ed}),i=document.createElement("script"),r=`${yi}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function id(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function rd(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const l=(await so(n)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(a){ae.error(a)}t("config",r,s)}async function sd(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await so(n);for(const l of o){const c=a.find(u=>u.measurementId===l),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(s){ae.error(s)}}function od(t,e,n,i){async function r(s,...o){try{if(s==="event"){const[a,l]=o;await sd(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await rd(t,e,n,i,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){ae.error(a)}}return r}function ad(t,e,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=od(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}function ld(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(yi)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=30,ud=1e3;class fd{constructor(e={},n=ud){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const oo=new fd;function dd(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function hd(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:dd(i)},s=Zf.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ce.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function md(t,e=oo,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw ce.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw ce.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new _d;return setTimeout(async()=>{a.abort()},n!==void 0?n:Qf),ao({appId:i,apiKey:r,measurementId:s},o,a,e)}async function ao(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=oo){var s;const{appId:o,measurementId:a}=t;try{await gd(i,e)}catch(l){if(a)return ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await hd(t);return r.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!pd(c)){if(r.deleteThrottleMetadata(o),a)return ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const f=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Er(n,r.intervalMillis,cd):Er(n,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return r.setThrottleMetadata(o,u),ae.debug(`Calling attemptFetch again in ${f} millis`),ao(t,u,i,r)}}function gd(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(s),i(ce.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pd(t){if(!(t instanceof Pe)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class _d{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function bd(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vd(){if(Os())try{await Ps()}catch(t){return ae.warn(ce.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ae.warn(ce.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function yd(t,e,n,i,r,s,o){var a;const l=md(t);l.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&ae.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>ae.error(d)),e.push(l);const c=vd().then(d=>{if(d)return i.getId()}),[f,u]=await Promise.all([l,c]);ld(s)||nd(s,f.measurementId),r("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[Xf]="firebase",h.update=!0,u!=null&&(h[Yf]=u),r("config",f.measurementId,h),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.app=e}_delete(){return delete St[this.app.options.appId],Promise.resolve()}}let St={},Ur=[];const Br={};let Hn="dataLayer",Id="gtag",Fr,lo,Vr=!1;function Ed(){const t=[];if(Ds()&&t.push("This is a browser extension environment."),Lc()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=ce.create("invalid-analytics-context",{errorInfo:e});ae.warn(n.message)}}function Td(t,e,n){Ed();const i=t.options.appId;if(!i)throw ce.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ce.create("no-api-key");if(St[i]!=null)throw ce.create("already-exists",{id:i});if(!Vr){id(Hn);const{wrappedGtag:s,gtagCore:o}=ad(St,Ur,Br,Hn,Id);lo=s,Fr=o,Vr=!0}return St[i]=yd(t,Ur,Br,e,Fr,Hn,n),new wd(t)}function kd(t=Us()){t=He(t);const e=Tt(t,dn);return e.isInitialized()?e.getImmediate():Sd(t)}function Sd(t,e={}){const n=Tt(t,dn);if(n.isInitialized()){const r=n.getImmediate();if(Dt(e,n.getOptions()))return r;throw ce.create("already-initialized")}return n.initialize({options:e})}function Ad(t,e,n,i){t=He(t),bd(lo,St[t.app.options.appId],e,n,i).catch(r=>ae.error(r))}const Hr="@firebase/analytics",xr="0.10.0";function Cd(){Be(new De(dn,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Td(i,r,n)},"PUBLIC")),Be(new De("analytics-internal",t,"PRIVATE")),ke(Hr,xr),ke(Hr,xr,"esm2017");function t(e){try{const n=e.getProvider(dn).getImmediate();return{logEvent:(i,r,s)=>Ad(n,i,r,s)}}catch(n){throw ce.create("interop-component-reg-failed",{reason:n})}}}Cd();function wi(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function co(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rd=co,uo=new ft("auth","Firebase",co());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new hi("@firebase/auth");function Dd(t,...e){hn.logLevel<=z.WARN&&hn.warn(`Auth (${Ft}): ${t}`,...e)}function Jt(t,...e){hn.logLevel<=z.ERROR&&hn.error(`Auth (${Ft}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t,...e){throw Ii(t,...e)}function Se(t,...e){return Ii(t,...e)}function fo(t,e,n){const i=Object.assign(Object.assign({},Rd()),{[e]:n});return new ft("auth","Firebase",i).create(e,{appName:t.name})}function Od(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Oe(t,"argument-error"),fo(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ii(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return uo.create(t,...e)}function F(t,e,...n){if(!t)throw Ii(e,...n)}function Le(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jt(e),new Error(e)}function Fe(t,e){t||Le(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pd(){return jr()==="http:"||jr()==="https:"}function jr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pd()||Ds()||"connection"in navigator)?navigator.onLine:!0}function Nd(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fe(n>e,"Short delay should be less than long delay!"),this.isMobile=Dc()||Oc()}get(){return Ld()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t,e){Fe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=new Vt(3e4,6e4);function mo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ht(t,e,n,i,r={}){return go(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Bt(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ho.fetch()(po(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function go(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Md),e);try{const r=new Fd(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Kt(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kt(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Kt(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Kt(t,"user-disabled",o);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fo(t,f,c);Oe(t,f)}}catch(r){if(r instanceof Pe)throw r;Oe(t,"network-request-failed",{message:String(r)})}}async function Bd(t,e,n,i,r={}){const s=await Ht(t,e,n,i,r);return"mfaPendingCredential"in s&&Oe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function po(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Ei(t.config,r):`${t.config.apiScheme}://${r}`}class Fd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Se(this.auth,"network-request-failed")),Ud.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kt(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Se(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vd(t,e){return Ht(t,"POST","/v1/accounts:delete",e)}async function Hd(t,e){return Ht(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xd(t,e=!1){const n=He(t),i=await n.getIdToken(e),r=Ti(i);F(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:At(xn(r.auth_time)),issuedAtTime:At(xn(r.iat)),expirationTime:At(xn(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xn(t){return Number(t)*1e3}function Ti(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Jt("JWT malformed, contained fewer than 3 sections"),null;try{const r=As(n);return r?JSON.parse(r):(Jt("Failed to decode base64 JWT payload"),null)}catch(r){return Jt("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function jd(t){const e=Ti(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Pe&&zd(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function zd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=At(this.lastLoginAt),this.creationTime=At(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Pt(t,Hd(n,{idToken:i}));F(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Gd(s.providerUserInfo):[],a=Kd(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _o(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function qd(t){const e=He(t);await mn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kd(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Gd(t){return t.map(e=>{var{providerId:n}=e,i=wi(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jd(t,e){const n=await go(t,{},async()=>{const i=Bt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=po(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ho.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Jd(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Lt;return i&&(F(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(F(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lt,this.toJSON())}_performRefresh(){return Le("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=wi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _o(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Pt(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xd(this,e)}reload(){return qd(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await mn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pt(this,Vd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,f;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:y,emailVerified:I,isAnonymous:E,providerData:k,stsTokenManager:S}=n;F(y&&S,e,"internal-error");const T=Lt.fromJSON(this.name,S);F(typeof y=="string",e,"internal-error"),je(u,e.name),je(h,e.name),F(typeof I=="boolean",e,"internal-error"),F(typeof E=="boolean",e,"internal-error"),je(d,e.name),je(p,e.name),je(v,e.name),je(m,e.name),je(g,e.name),je(_,e.name);const L=new rt({uid:y,auth:e,email:h,emailVerified:I,displayName:u,isAnonymous:E,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:T,createdAt:g,lastLoginAt:_});return k&&Array.isArray(k)&&(L.providerData=k.map(A=>Object.assign({},A))),m&&(L._redirectEventId=m),L}static async _fromIdTokenResponse(e,n,i=!1){const r=new Lt;r.updateFromServerResponse(n);const s=new rt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await mn(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Map;function Ne(t){Fe(t instanceof Function,"Expected a class definition");let e=zr.get(t);return e?(Fe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zr.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bo.type="NONE";const Wr=bo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,e,n){return`firebase:${t}:${e}:${n}`}class pt{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Yt(this.userKey,r.apiKey,s),this.fullPersistenceKey=Yt("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new pt(Ne(Wr),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Ne(Wr);const o=Yt(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){const u=rt._fromJSON(e,f);c!==s&&(a=u),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new pt(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new pt(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Eo(e))return"Blackberry";if(To(e))return"Webos";if(ki(e))return"Safari";if((e.includes("chrome/")||yo(e))&&!e.includes("edge/"))return"Chrome";if(Io(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function vo(t=re()){return/firefox\//i.test(t)}function ki(t=re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yo(t=re()){return/crios\//i.test(t)}function wo(t=re()){return/iemobile/i.test(t)}function Io(t=re()){return/android/i.test(t)}function Eo(t=re()){return/blackberry/i.test(t)}function To(t=re()){return/webos/i.test(t)}function kn(t=re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yd(t=re()){var e;return kn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xd(){return Pc()&&document.documentMode===10}function ko(t=re()){return kn(t)||Io(t)||To(t)||Eo(t)||/windows phone/i.test(t)||wo(t)}function Qd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t,e=[]){let n;switch(t){case"Browser":n=qr(re());break;case"Worker":n=`${qr(re())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ft}/${i}`}async function Ao(t,e){return Ht(t,"GET","/v2/recaptchaConfig",mo(t,e))}function Kr(t){return t!==void 0&&t.enterprise!==void 0}class Co{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ro(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Se("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Zd().appendChild(i)})}function $d(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eh="https://www.google.com/recaptcha/enterprise.js?render=",th="recaptcha-enterprise",nh="NO_RECAPTCHA";class ih{constructor(e){this.type=th,this.auth=xt(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ao(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Co(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;Kr(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(nh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&Kr(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ro(eh+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class rh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gr(this),this.idTokenSubscription=new Gr(this),this.beforeStateQueue=new rh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ne(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await pt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ne(e))})}async initializeRecaptchaConfig(){const e=await Ao(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Co(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new ih(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ft("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ne(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[Ne(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=So(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Dd(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xt(t){return He(t)}class Gr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fc(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(t,e){const n=Tt(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Dt(s,e??{}))return r;Oe(r,"already-initialized")}return n.initialize({options:e})}function ah(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ne);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function lh(t,e,n){const i=xt(t);F(i._canInitEmulator,i,"emulator-config-failed"),F(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=Do(e),{host:o,port:a}=ch(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||uh()}function Do(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ch(t){const e=Do(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Jr(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Jr(o)}}}function Jr(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Le("not implemented")}_getIdTokenResponse(e){return Le("not implemented")}_linkToIdToken(e,n){return Le("not implemented")}_getReauthenticationResolver(e){return Le("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(t,e){return Bd(t,"POST","/v1/accounts:signInWithIdp",mo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="http://localhost";class ut extends Oo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Oe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=wi(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new ut(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _t(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,_t(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_t(e,n)}buildRequest(){const e={requestUri:fh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Si{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends jt{constructor(){super("facebook.com")}static credential(e){return ut._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch{return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com";We.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends jt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ut._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return qe.credential(n,i)}catch{return null}}}qe.GOOGLE_SIGN_IN_METHOD="google.com";qe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends jt{constructor(){super("github.com")}static credential(e){return ut._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch{return null}}}Te.GITHUB_SIGN_IN_METHOD="github.com";Te.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends jt{constructor(){super("twitter.com")}static credential(e,n){return ut._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Ke.credential(n,i)}catch{return null}}}Ke.TWITTER_SIGN_IN_METHOD="twitter.com";Ke.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await rt._fromIdTokenResponse(e,i,r),o=Yr(i);return new wt({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Yr(i);return new wt({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Yr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Pe{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,gn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new gn(e,n,i,r)}}function Po(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gn._fromErrorAndOperation(t,s,e,i):s})}async function dh(t,e,n=!1){const i=await Pt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wt._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Pt(t,Po(i,r,e,t),n);F(s.idToken,i,"internal-error");const o=Ti(s.idToken);F(o,i,"internal-error");const{sub:a}=o;return F(t.uid===a,i,"user-mismatch"),wt._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Oe(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mh(t,e,n=!1){const i="signIn",r=await Po(t,i,e),s=await wt._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function gh(t,e,n,i){return He(t).onIdTokenChanged(e,n,i)}function ph(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function _h(t){return He(t).signOut()}const pn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pn,"1"),this.storage.removeItem(pn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){const t=re();return ki(t)||kn(t)}const vh=1e3,yh=10;class No extends Lo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bh()&&Qd(),this.fallbackToPolling=ko(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Xd()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,yh):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},vh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}No.type="LOCAL";const wh=No;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends Lo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mo.type="SESSION";const Uo=Mo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Sn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Ih(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ai("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return window}function Th(t){Ae().location.href=t}/**
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
 */function Bo(){return typeof Ae().WorkerGlobalScope<"u"&&typeof Ae().importScripts=="function"}async function kh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ah(){return Bo()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="firebaseLocalStorageDb",Ch=1,_n="firebaseLocalStorage",Vo="fbase_key";class zt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function An(t,e){return t.transaction([_n],e?"readwrite":"readonly").objectStore(_n)}function Rh(){const t=indexedDB.deleteDatabase(Fo);return new zt(t).toPromise()}function ni(){const t=indexedDB.open(Fo,Ch);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(_n,{keyPath:Vo})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(_n)?e(i):(i.close(),await Rh(),e(await ni()))})})}async function Xr(t,e,n){const i=An(t,!0).put({[Vo]:e,value:n});return new zt(i).toPromise()}async function Dh(t,e){const n=An(t,!1).get(e),i=await new zt(n).toPromise();return i===void 0?null:i.value}function Qr(t,e){const n=An(t,!0).delete(e);return new zt(n).toPromise()}const Oh=800,Ph=3;class Ho{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ni(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Ph)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sn._getInstance(Ah()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kh(),!this.activeServiceWorker)return;this.sender=new Eh(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ni();return await Xr(e,pn,"1"),await Qr(e,pn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Xr(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Dh(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=An(r,!1).getAll();return new zt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Oh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ho.type="LOCAL";const Lh=Ho;new Vt(3e4,6e4);/**
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
 */function xo(t,e){return e?Ne(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Oo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _t(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _t(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _t(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Nh(t){return mh(t.auth,new Ci(t),t.bypassAuthState)}function Mh(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),hh(n,new Ci(t),t.bypassAuthState)}async function Uh(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),dh(n,new Ci(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Nh;case"linkViaPopup":case"linkViaRedirect":return Uh;case"reauthViaPopup":case"reauthViaRedirect":return Mh;default:Oe(this.auth,"internal-error")}}resolve(e){Fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new Vt(2e3,1e4);async function Fh(t,e,n){const i=xt(t);Od(t,e,Si);const r=xo(i,n);return new nt(i,"signInViaPopup",e,r).executeNotNull()}class nt extends jo{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,nt.currentPopupAction&&nt.currentPopupAction.cancel(),nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Fe(this.filter.length===1,"Popup operations only handle one event");const e=Ai();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Se(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bh.get())};e()}}nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="pendingRedirect",Xt=new Map;class Hh extends jo{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Xt.get(this.auth._key());if(!e){try{const i=await xh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Xt.set(this.auth._key(),e)}return this.bypassAuthState||Xt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xh(t,e){const n=Wh(e),i=zh(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function jh(t,e){Xt.set(t._key(),e)}function zh(t){return Ne(t._redirectPersistence)}function Wh(t){return Yt(Vh,t.config.apiKey,t.name)}async function qh(t,e,n=!1){const i=xt(t),r=xo(i,e),o=await new Hh(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=10*60*1e3;class Gh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!zo(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Se(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zr(e))}saveEventToCache(e){this.cachedEventUids.add(Zr(e)),this.lastProcessedEventTime=Date.now()}}function Zr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zo({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zo(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(t,e={}){return Ht(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qh=/^https?/;async function Zh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yh(t);for(const n of e)try{if($h(n))return}catch{}Oe(t,"unauthorized-domain")}function $h(t){const e=ti(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Qh.test(n))return!1;if(Xh.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const em=new Vt(3e4,6e4);function $r(){const t=Ae().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tm(t){return new Promise((e,n)=>{var i,r,s;function o(){$r(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$r(),n(Se(t,"network-request-failed"))},timeout:em.get()})}if(!((r=(i=Ae().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Ae().gapi)===null||s===void 0)&&s.load)o();else{const a=$d("iframefcb");return Ae()[a]=()=>{gapi.load?o():n(Se(t,"network-request-failed"))},Ro(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Qt=null,e})}let Qt=null;function nm(t){return Qt=Qt||tm(t),Qt}/**
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
 */const im=new Vt(5e3,15e3),rm="__/auth/iframe",sm="emulator/auth/iframe",om={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},am=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lm(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ei(e,sm):`https://${t.config.authDomain}/${rm}`,i={apiKey:e.apiKey,appName:t.name,v:Ft},r=am.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Bt(i).slice(1)}`}async function cm(t){const e=await nm(t),n=Ae().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:lm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:om,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Se(t,"network-request-failed"),a=Ae().setTimeout(()=>{s(o)},im.get());function l(){Ae().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const um={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fm=500,dm=600,hm="_blank",mm="http://localhost";class es{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gm(t,e,n,i=fm,r=dm){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},um),{width:i.toString(),height:r.toString(),top:s,left:o}),c=re().toLowerCase();n&&(a=yo(c)?hm:n),vo(c)&&(e=e||mm,l.scrollbars="yes");const f=Object.entries(l).reduce((h,[d,p])=>`${h}${d}=${p},`,"");if(Yd(c)&&a!=="_self")return pm(e||"",a),new es(null);const u=window.open(e||"",a,f);F(u,t,"popup-blocked");try{u.focus()}catch{}return new es(u)}function pm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const _m="__/auth/handler",bm="emulator/auth/handler",vm=encodeURIComponent("fac");async function ts(t,e,n,i,r,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ft,eventId:r};if(e instanceof Si){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(s||{}))o[f]=u}if(e instanceof jt){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),c=l?`#${vm}=${encodeURIComponent(l)}`:"";return`${ym(t)}?${Bt(a).slice(1)}${c}`}function ym({config:t}){return t.emulator?Ei(t,bm):`https://${t.authDomain}/${_m}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="webStorageSupport";class wm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uo,this._completeRedirectFn=qh,this._overrideRedirectResult=jh}async _openPopup(e,n,i,r){var s;Fe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ts(e,n,i,ti(),r);return gm(e,o,Ai())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await ts(e,n,i,ti(),r);return Th(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Fe(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await cm(e),i=new Gh(e);return n.register("authEvent",r=>(F(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jn,{type:jn},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[jn];o!==void 0&&n(!!o),Oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ko()||ki()||kn()}}const Im=wm;var ns="@firebase/auth",is="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function km(t){Be(new De("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:So(t)},c=new sh(i,r,s,l);return ah(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Be(new De("auth-internal",e=>{const n=xt(e.getProvider("auth").getImmediate());return(i=>new Em(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ke(ns,is,Tm(t)),ke(ns,is,"esm2017")}/**
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
 */const Sm=5*60,Am=Rs("authIdTokenMaxAge")||Sm;let rs=null;const Cm=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Am)return;const r=n==null?void 0:n.token;rs!==r&&(rs=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Rm(t=Us()){const e=Tt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oh(t,{popupRedirectResolver:Im,persistence:[Lh,wh,Uo]}),i=Rs("authTokenSyncURL");if(i){const s=Cm(i);ph(n,s,()=>s(n.currentUser)),gh(n,o=>s(o))}const r=Cc("auth");return r&&lh(n,`http://${r}`),n}km("Browser");const Dm={apiKey:"AIzaSyAjCRLDHuTkfnKU5TTV6ZZasUXecSvlQOE",authDomain:"virtual-pinball-spreadsh-71a64.firebaseapp.com",projectId:"virtual-pinball-spreadsh-71a64",appId:"1:497322440319:web:8a7f7a2997664a9af7f14a",measurementId:"G-DB48L7QGX0"},Wo=Ms(Dm);kd(Wo);const qo=Rm(Wo),Om="VirtualPinballSpreadsheet",Pm="vps-db",Ri=In("user",{});let Lm;const Nm=()=>{const t=new Te;t.addScope("public_repo"),t.setCustomParameters({allow_signup:"false"}),Fh(qo,t).then(async e=>{const n=Te.credentialFromResult(e),i=e.user;if(i.displayName=e._tokenResponse.screenName,!(n!=null&&n.accessToken))throw new Error;Ko(n.accessToken,i)}).catch(e=>{console.error(e)})},Ko=async(t,e)=>{try{const{Octokit:n}=await Ui(()=>import("https://esm.sh/octokit"),[],import.meta.url),{createOrUpdateTextFile:i}=await Ui(()=>import("https://esm.sh/@octokit/plugin-create-or-update-text-file"),[],import.meta.url),r=n.plugin(i),s=new r({auth:t}),a=(await s.request("GET /repos/{owner}/{repo}/collaborators/{username}/permission",{owner:Om,username:e.displayName,repo:Pm})).data.permission;if(!(a==="admin"||a==="write"||location.hostname==="localhost"||location.hostname==="127.0.0.1")){Ee.trigger({message:"You don't have permission to edit on VPS.",background:"variant-filled-error"});return}Lm=s,Ri.set({user:e,permission:a,token:t}),Ee.trigger({message:"Login successfull",background:"variant-filled-success"})}catch(n){console.log(n),Ee.trigger({message:"Login was unsuccessfull.",background:"variant-filled-error"})}},Mm=()=>{_h(qo).then(()=>{Ri.set({}),Ee.trigger({message:"Logout successfull",background:"variant-filled-success"})})},Wt={login:Ko,logout:Mm,triggerLoginPopup:Nm,userStore:Ri};function ss(t,e,n){const i=t.slice();return i[5]=e[n],i}function os(t){let e,n=t[5][1].name+"",i;return{c(){e=D("option"),i=se(n),this.h()},l(r){e=O(r,"OPTION",{});var s=N(e);i=oe(s,n),s.forEach(w),this.h()},h(){e.__value=t[5][0],Rt(e,e.__value)},m(r,s){B(r,e,s),C(e,i)},p:G,d(r){r&&w(e)}}}function Um(t){let e,n,i,r,s,o,a,l,c,f,u,h,d,p;r=new rn({props:{icon:ga}});let v=nn(t[3]),m=[];for(let g=0;g<v.length;g+=1)m[g]=os(ss(t,v,g));return u=new rn({props:{icon:pa}}),{c(){e=D("div"),n=D("div"),i=D("div"),Y(r.$$.fragment),s=V(),o=D("input"),a=V(),l=D("select");for(let g=0;g<m.length;g+=1)m[g].c();c=V(),f=D("button"),Y(u.$$.fragment),this.h()},l(g){e=O(g,"DIV",{class:!0});var _=N(e);n=O(_,"DIV",{class:!0});var y=N(n);i=O(y,"DIV",{});var I=N(i);ie(r.$$.fragment,I),I.forEach(w),s=H(y),o=O(y,"INPUT",{type:!0,placeholder:!0}),a=H(y),l=O(y,"SELECT",{class:!0});var E=N(l);for(let S=0;S<m.length;S+=1)m[S].l(E);E.forEach(w),y.forEach(w),c=H(_),f=O(_,"BUTTON",{class:!0});var k=N(f);ie(u.$$.fragment,k),k.forEach(w),_.forEach(w),this.h()},h(){b(o,"type","search"),b(o,"placeholder","Search..."),b(l,"class","select"),t[1]===void 0&&Ct(()=>t[7].call(l)),b(n,"class","input-group grid-cols-[auto_1fr_auto] border-none"),b(f,"class","btn hover:variant-soft-primary btn-icon"),b(e,"class","px-4 flex items-center gap-4")},m(g,_){B(g,e,_),C(e,n),C(n,i),X(r,i,null),C(n,s),C(n,o),Rt(o,t[0]),C(n,a),C(n,l);for(let y=0;y<m.length;y+=1)m[y]&&m[y].m(l,null);Ni(l,t[1],!0),C(e,c),C(e,f),X(u,f,null),h=!0,d||(p=[j(o,"input",t[6]),j(l,"change",t[7])],d=!0)},p(g,_){if(_&1&&o.value!==g[0]&&Rt(o,g[0]),_&8){v=nn(g[3]);let y;for(y=0;y<v.length;y+=1){const I=ss(g,v,y);m[y]?m[y].p(I,_):(m[y]=os(I),m[y].c(),m[y].m(l,null))}for(;y<m.length;y+=1)m[y].d(1);m.length=v.length}_&10&&Ni(l,g[1])},i(g){h||(P(r.$$.fragment,g),P(u.$$.fragment,g),h=!0)},o(g){U(r.$$.fragment,g),U(u.$$.fragment,g),h=!1},d(g){g&&w(e),Q(r),na(m,g),Q(u),d=!1,Ze(p)}}}function Bm(t){let e,n=`<img src="${yc}" alt="VPS" width="36px" class="ml-4"/>`;return{c(){e=D("a"),e.innerHTML=n,this.h()},l(i){e=O(i,"A",{href:!0,"data-svelte-h":!0}),bt(e)!=="svelte-1mikpwk"&&(e.innerHTML=n),this.h()},h(){b(e,"href","/")},m(i,r){B(i,e,r)},p:G,d(i){i&&w(e)}}}function Fm(t){let e,n,i="Apps",r,s,o="Links",a,l,c,f,u,h,d,p,v,m;return f=new rn({props:{icon:_a,class:"ml-2",size:"xs"}}),d=new rn({props:{icon:ba}}),{c(){e=D("div"),n=D("a"),n.textContent=i,r=V(),s=D("a"),s.textContent=o,a=V(),l=D("button"),c=se("Settings "),Y(f.$$.fragment),u=V(),h=D("a"),Y(d.$$.fragment),this.h()},l(g){e=O(g,"DIV",{slot:!0,class:!0});var _=N(e);n=O(_,"A",{href:!0,class:!0,"data-svelte-h":!0}),bt(n)!=="svelte-tjfgp6"&&(n.textContent=i),r=H(_),s=O(_,"A",{href:!0,class:!0,"data-svelte-h":!0}),bt(s)!=="svelte-in8qks"&&(s.textContent=o),a=H(_),l=O(_,"BUTTON",{class:!0});var y=N(l);c=oe(y,"Settings "),ie(f.$$.fragment,y),y.forEach(w),u=H(_),h=O(_,"A",{href:!0,class:!0});var I=N(h);ie(d.$$.fragment,I),I.forEach(w),_.forEach(w),this.h()},h(){b(n,"href","apps/"),b(n,"class","btn btn-sm hover:variant-soft-primary"),b(s,"href","links/"),b(s,"class","btn btn-sm hover:variant-soft-primary"),b(l,"class","btn btn-sm hover:variant-soft-primary"),b(h,"href","help/"),b(h,"class","btn hover:variant-soft-primary btn-icon"),b(e,"slot","trail"),b(e,"class","mr-4 flex items-center gap-4")},m(g,_){B(g,e,_),C(e,n),C(e,r),C(e,s),C(e,a),C(e,l),C(l,c),X(f,l,null),C(e,u),C(e,h),X(d,h,null),p=!0,v||(m=ri(tl.call(null,l,t[4])),v=!0)},p:G,i(g){p||(P(f.$$.fragment,g),P(d.$$.fragment,g),p=!0)},o(g){U(f.$$.fragment,g),U(d.$$.fragment,g),p=!1},d(g){g&&w(e),Q(f),Q(d),v=!1,m()}}}function Vm(t){let e,n;return e=new Tl({props:{$$slots:{trail:[Fm],lead:[Bm],default:[Um]},$$scope:{ctx:t}}}),{c(){Y(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,r){X(e,i,r),n=!0},p(i,[r]){const s={};r&4099&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){n||(P(e.$$.fragment,i),n=!0)},o(i){U(e.$$.fragment,i),n=!1},d(i){Q(e,i)}}}function Hm(t,e,n){let i,r;const{query:s,mode:o}=Gt;Me(t,s,u=>n(0,i=u)),Me(t,o,u=>n(1,r=u));const a=Object.entries(us),l={event:"focus-click",target:"popupSettings",placement:"bottom",closeQuery:".listbox-item"};function c(){i=this.value,s.set(i)}function f(){r=ia(this),o.set(r),n(3,a)}return[i,r,s,a,l,o,c,f]}class xm extends ve{constructor(e){super(),ye(this,e,Hm,Vm,ue,{})}}const Go=va("goto");Gt.finalResultsStore.subscribe(()=>{var r;const t=kt(oi),e=(r=t==null?void 0:t.url)==null?void 0:r.pathname;if(!e||!kt(Gt.isSearchActive)&&e==="/")return;const n=kt(Gt.mode),i=us[n].route;e!=null&&e.includes(i)||Go("/"+i,{keepFocus:!0})});function jm(t){var r,s;let e,n=((s=(r=t[0][0])==null?void 0:r.meta)==null?void 0:s.game)+"",i;return{c(){e=D("div"),i=se(n),this.h()},l(o){e=O(o,"DIV",{class:!0});var a=N(e);i=oe(a,n),a.forEach(w),this.h()},h(){b(e,"class","card p-4")},m(o,a){B(o,e,a),C(e,i)},p(o,[a]){var l,c;a&1&&n!==(n=((c=(l=o[0][0])==null?void 0:l.meta)==null?void 0:c.game)+"")&&Ce(i,n)},i:G,o:G,d(o){o&&w(e)}}}function zm(t,e,n){let i,r;return Me(t,oi,s=>n(1,i=s)),Me(t,ze,s=>n(0,r=s)),ra(()=>{Go(i.url.pathname)}),[r]}class Wm extends ve{constructor(e){super(),ye(this,e,zm,jm,ue,{})}}const qm={ref:Wm,slot:"<p>Skeleton</p>"};oi.subscribe(t=>{var r;const e=(r=t==null?void 0:t.url)==null?void 0:r.searchParams;if(!e)return;const n=e.get("game");if(!n)return;const i={type:"component",meta:{game:n},component:qm};ze.trigger(i)});function Km(t){let e,n,i,r,s=t[0].user.displayName+"",o,a,l,c="Logout",f,u,h;return n=new Es({props:{src:t[0].user.photoURL||"",width:"w-6",rounded:"rounded-full"}}),{c(){e=D("div"),Y(n.$$.fragment),i=V(),r=D("span"),o=se(s),a=V(),l=D("button"),l.textContent=c,this.h()},l(d){e=O(d,"DIV",{class:!0});var p=N(e);ie(n.$$.fragment,p),i=H(p),r=O(p,"SPAN",{});var v=N(r);o=oe(v,s),v.forEach(w),p.forEach(w),a=H(d),l=O(d,"BUTTON",{class:!0,"data-svelte-h":!0}),bt(l)!=="svelte-nsylsw"&&(l.textContent=c),this.h()},h(){b(e,"class","space-x-2 flex items-center"),b(l,"class","btn w-full variant-filled-secondary")},m(d,p){B(d,e,p),X(n,e,null),C(e,i),C(e,r),C(r,o),B(d,a,p),B(d,l,p),f=!0,u||(h=j(l,"click",Wt.logout),u=!0)},p(d,p){const v={};p&1&&(v.src=d[0].user.photoURL||""),n.$set(v),(!f||p&1)&&s!==(s=d[0].user.displayName+"")&&Ce(o,s)},i(d){f||(P(n.$$.fragment,d),f=!0)},o(d){U(n.$$.fragment,d),f=!1},d(d){d&&(w(e),w(a),w(l)),Q(n),u=!1,h()}}}function Gm(t){let e,n="Admin Login",i,r;return{c(){e=D("button"),e.textContent=n,this.h()},l(s){e=O(s,"BUTTON",{class:!0,"data-svelte-h":!0}),bt(e)!=="svelte-e3s47o"&&(e.textContent=n),this.h()},h(){b(e,"class","btn btn-sm variant-ghost-surface")},m(s,o){B(s,e,o),i||(r=j(e,"click",Wt.triggerLoginPopup),i=!0)},p:G,i:G,o:G,d(s){s&&w(e),i=!1,r()}}}function Jm(t){let e,n,i,r,s,o,a,l,c,f,u,h,d,p;s=new dc({});const v=[Gm,Km],m=[];function g(_,y){return _[0].user?1:0}return f=g(t),u=m[f]=v[f](t),{c(){e=D("div"),n=D("div"),i=D("div"),r=se("Toggle Dark/Light "),Y(s.$$.fragment),o=V(),a=D("hr"),l=V(),c=D("div"),u.c(),h=V(),d=D("div"),this.h()},l(_){e=O(_,"DIV",{class:!0,"data-popup":!0});var y=N(e);n=O(y,"DIV",{class:!0});var I=N(n);i=O(I,"DIV",{class:!0});var E=N(i);r=oe(E,"Toggle Dark/Light "),ie(s.$$.fragment,E),E.forEach(w),I.forEach(w),o=H(y),a=O(y,"HR",{}),l=H(y),c=O(y,"DIV",{class:!0});var k=N(c);u.l(k),k.forEach(w),h=H(y),d=O(y,"DIV",{class:!0}),N(d).forEach(w),y.forEach(w),this.h()},h(){b(i,"class","flex justify-between items-center gap-8 text-sm"),b(n,"class","p-4"),b(c,"class","p-4 flex flex-col gap-4"),b(d,"class","arrow bg-surface-100-800-token"),b(e,"class","card 8 shadow-xl popup"),b(e,"data-popup","popupSettings")},m(_,y){B(_,e,y),C(e,n),C(n,i),C(i,r),X(s,i,null),C(e,o),C(e,a),C(e,l),C(e,c),m[f].m(c,null),C(e,h),C(e,d),p=!0},p(_,[y]){let I=f;f=g(_),f===I?m[f].p(_,y):(te(),U(m[I],1,1,()=>{m[I]=null}),ne(),u=m[f],u?u.p(_,y):(u=m[f]=v[f](_),u.c()),P(u,1),u.m(c,null))},i(_){p||(P(s.$$.fragment,_),P(u),p=!0)},o(_){U(s.$$.fragment,_),U(u),p=!1},d(_){_&&w(e),Q(s),m[f].d()}}}function Ym(t,e,n){let i;const{userStore:r}=Wt;return Me(t,r,s=>n(0,i=s)),[i,r]}class Xm extends ve{constructor(e){super(),ye(this,e,Ym,Jm,ue,{})}}function Qm(t){var m,g;let e,n,i,r,s,o=((m=t[0].user)==null?void 0:m.displayName)+"",a,l,c,f="Logout",u,h,d,p,v;return i=new Es({props:{src:((g=t[0].user)==null?void 0:g.photoURL)||"",width:"w-12",rounded:"rounded-full"}}),{c(){e=D("div"),n=D("div"),Y(i.$$.fragment),r=V(),s=D("b"),a=se(o),l=V(),c=D("button"),c.textContent=f,u=V(),h=D("div"),this.h()},l(_){e=O(_,"DIV",{class:!0,"data-popup":!0});var y=N(e);n=O(y,"DIV",{class:!0});var I=N(n);ie(i.$$.fragment,I),r=H(I),s=O(I,"B",{});var E=N(s);a=oe(E,o),E.forEach(w),l=H(I),c=O(I,"BUTTON",{class:!0,"data-svelte-h":!0}),bt(c)!=="svelte-nsylsw"&&(c.textContent=f),I.forEach(w),u=H(y),h=O(y,"DIV",{class:!0}),N(h).forEach(w),y.forEach(w),this.h()},h(){b(c,"class","btn w-full variant-filled-secondary"),b(n,"class","flex flex-col space-y-2"),b(h,"class","arrow bg-surface-100-800-token"),b(e,"class","card p-4 w-72 shadow-xl popup"),b(e,"data-popup","popupUser")},m(_,y){B(_,e,y),C(e,n),X(i,n,null),C(n,r),C(n,s),C(s,a),C(n,l),C(n,c),C(e,u),C(e,h),d=!0,p||(v=j(c,"click",Wt.logout),p=!0)},p(_,[y]){var E,k;const I={};y&1&&(I.src=((E=_[0].user)==null?void 0:E.photoURL)||""),i.$set(I),(!d||y&1)&&o!==(o=((k=_[0].user)==null?void 0:k.displayName)+"")&&Ce(a,o)},i(_){d||(P(i.$$.fragment,_),d=!0)},o(_){U(i.$$.fragment,_),d=!1},d(_){_&&w(e),Q(i),p=!1,v()}}}function Zm(t,e,n){let i;const{userStore:r}=Wt;return Me(t,r,s=>n(0,i=s)),[i,r]}class $m extends ve{constructor(e){super(),ye(this,e,Zm,Qm,ue,{})}}function eg(t){let e,n,i,r;return e=new $m({}),i=new Xm({}),{c(){Y(e.$$.fragment),n=V(),Y(i.$$.fragment)},l(s){ie(e.$$.fragment,s),n=H(s),ie(i.$$.fragment,s)},m(s,o){X(e,s,o),B(s,n,o),X(i,s,o),r=!0},p:G,i(s){r||(P(e.$$.fragment,s),P(i.$$.fragment,s),r=!0)},o(s){U(e.$$.fragment,s),U(i.$$.fragment,s),r=!1},d(s){s&&w(n),Q(e,s),Q(i,s)}}}class tg extends ve{constructor(e){super(),ye(this,e,null,eg,ue,{})}}function ng(t){let e;const n=t[0].default,i=ge(n,t,t[1],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&2)&&pe(i,n,r,r[1],e?be(n,r[1],s,null):_e(r[1]),null)},i(r){e||(P(i,r),e=!0)},o(r){U(i,r),e=!1},d(r){i&&i.d(r)}}}function ig(t){let e,n;return e=new xm({}),{c(){Y(e.$$.fragment)},l(i){ie(e.$$.fragment,i)},m(i,r){X(e,i,r),n=!0},i(i){n||(P(e.$$.fragment,i),n=!0)},o(i){U(e.$$.fragment,i),n=!1},d(i){Q(e,i)}}}function rg(t){let e,n,i,r,s,o,a,l;return e=new tg({}),i=new vc({}),s=new sc({}),a=new Vl({props:{$$slots:{header:[ig],default:[ng]},$$scope:{ctx:t}}}),{c(){Y(e.$$.fragment),n=V(),Y(i.$$.fragment),r=V(),Y(s.$$.fragment),o=V(),Y(a.$$.fragment)},l(c){ie(e.$$.fragment,c),n=H(c),ie(i.$$.fragment,c),r=H(c),ie(s.$$.fragment,c),o=H(c),ie(a.$$.fragment,c)},m(c,f){X(e,c,f),B(c,n,f),X(i,c,f),B(c,r,f),X(s,c,f),B(c,o,f),X(a,c,f),l=!0},p(c,[f]){const u={};f&2&&(u.$$scope={dirty:f,ctx:c}),a.$set(u)},i(c){l||(P(e.$$.fragment,c),P(i.$$.fragment,c),P(s.$$.fragment,c),P(a.$$.fragment,c),l=!0)},o(c){U(e.$$.fragment,c),U(i.$$.fragment,c),U(s.$$.fragment,c),U(a.$$.fragment,c),l=!1},d(c){c&&(w(n),w(r),w(o)),Q(e,c),Q(i,c),Q(s,c),Q(a,c)}}}function sg(t,e,n){let{$$slots:i={},$$scope:r}=e;return Is.set({computePosition:el,autoUpdate:$a,offset:Na,shift:Ma,flip:Pa,arrow:Oa}),cs(()=>{ma.fetchDb()}),t.$$set=s=>{"$$scope"in s&&n(1,r=s.$$scope)},[i,r]}class gg extends ve{constructor(e){super(),ye(this,e,sg,rg,ue,{})}}export{gg as component,mg as universal};
