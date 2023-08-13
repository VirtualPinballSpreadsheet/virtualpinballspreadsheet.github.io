import{r as oe,u as wo,v as pt,w as ae,x as Fn,s as Ve,y as ne,f as P,a as j,g as L,h as F,c as W,d as k,j as w,i as x,z as D,A as ie,B as re,C as se,D as Pr,E as Fe,F as J,G as ht,l as lt,m as ut,H as Zt,I as li,J as ui,K as di,n as $t,L as fi,M as Lr,N as Io,e as hi,O as mt,P as Nr,Q as Mr,R as Ur,S as we,T as Ce,U as pi,V as Eo,o as To}from"../chunks/scheduler.db4cf74d.js";import{n as ko,l as So,f as Ao,h as Ro,S as He,i as je,a as C,g as $,t as M,c as ee,j as Co,k as Oo,b as ue,d as de,m as fe,e as he}from"../chunks/index.aca4b4e1.js";import{w as xn}from"../chunks/index.7a5e6154.js";import{c as Fr,e as mi,u as Do,f as Po,a as Lo,S as Mt,D as No}from"../chunks/SearchStore.84fedd59.js";import{g as Mo,F as gi,f as Uo,a as Fo}from"../chunks/index.1d2061f7.js";import{_ as _i}from"../chunks/preload-helper.a4192956.js";import{h as xo}from"../chunks/singletons.8509a7ab.js";import{p as Bo}from"../chunks/stores.5a9e6651.js";function Vo(t,e,n,i){if(!e)return oe;const r=t.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return oe;const{delay:s=0,duration:o=300,easing:a=wo,start:c=ko()+s,end:l=c+o,tick:d=oe,css:u}=n(t,{from:e,to:r},i);let f=!0,h=!1,g;function _(){u&&(g=Ao(t,0,1,o,s,a,u)),s||(h=!0)}function p(){u&&Ro(t,g),f=!1}return So(m=>{if(!h&&m>=c&&(h=!0),h&&m>=l&&(d(1,0),p()),!f)return!1;if(h){const b=m-c,T=0+1*a(b/o);d(T,1-T)}return!0}),_(),d(0,1),p}function Ho(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,xr(t,r)}}function xr(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),r=i.transform==="none"?"":i.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}const jo=!1,np=Object.freeze(Object.defineProperty({__proto__:null,ssr:jo},Symbol.toStringTag,{value:"Module"}));const ot=Math.min,Ge=Math.max,Vt=Math.round,Lt=Math.floor,xe=t=>({x:t,y:t}),Wo={left:"right",right:"left",bottom:"top",top:"bottom"},zo={start:"end",end:"start"};function kn(t,e,n){return Ge(t,ot(e,n))}function It(t,e){return typeof t=="function"?t(e):t}function Je(t){return t.split("-")[0]}function Et(t){return t.split("-")[1]}function Br(t){return t==="x"?"y":"x"}function Bn(t){return t==="y"?"height":"width"}function en(t){return["top","bottom"].includes(Je(t))?"y":"x"}function Vn(t){return Br(en(t))}function qo(t,e,n){n===void 0&&(n=!1);const i=Et(t),r=Vn(t),s=Bn(r);let o=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=Ht(o)),[o,Ht(o)]}function Go(t){const e=Ht(t);return[Sn(t),e,Sn(e)]}function Sn(t){return t.replace(/start|end/g,e=>zo[e])}function Ko(t,e,n){const i=["left","right"],r=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:i:e?i:r;case"left":case"right":return e?s:o;default:return[]}}function Jo(t,e,n,i){const r=Et(t);let s=Ko(Je(t),n==="start",i);return r&&(s=s.map(o=>o+"-"+r),e&&(s=s.concat(s.map(Sn)))),s}function Ht(t){return t.replace(/left|right|bottom|top/g,e=>Wo[e])}function Yo(t){return{top:0,right:0,bottom:0,left:0,...t}}function Vr(t){return typeof t!="number"?Yo(t):{top:t,right:t,bottom:t,left:t}}function jt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function bi(t,e,n){let{reference:i,floating:r}=t;const s=en(e),o=Vn(e),a=Bn(o),c=Je(e),l=s==="y",d=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,f=i[a]/2-r[a]/2;let h;switch(c){case"top":h={x:d,y:i.y-r.height};break;case"bottom":h={x:d,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:u};break;case"left":h={x:i.x-r.width,y:u};break;default:h={x:i.x,y:i.y}}switch(Et(e)){case"start":h[o]-=f*(n&&l?-1:1);break;case"end":h[o]+=f*(n&&l?-1:1);break}return h}const Xo=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(e));let l=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:u}=bi(l,i,c),f=i,h={},g=0;for(let _=0;_<a.length;_++){const{name:p,fn:m}=a[_],{x:b,y:T,data:S,reset:y}=await m({x:d,y:u,initialPlacement:i,placement:f,strategy:r,middlewareData:h,rects:l,platform:o,elements:{reference:t,floating:e}});if(d=b??d,u=T??u,h={...h,[p]:{...h[p],...S}},y&&g<=50){g++,typeof y=="object"&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:r}):y.rects),{x:d,y:u}=bi(l,f,c)),_=-1;continue}}return{x:d,y:u,placement:f,strategy:r,middlewareData:h}};async function Hr(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:a,strategy:c}=t,{boundary:l="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:f=!1,padding:h=0}=It(e,t),g=Vr(h),p=a[f?u==="floating"?"reference":"floating":u],m=jt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(p)))==null||n?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:l,rootBoundary:d,strategy:c})),b=u==="floating"?{...o.floating,x:i,y:r}:o.reference,T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),S=await(s.isElement==null?void 0:s.isElement(T))?await(s.getScale==null?void 0:s.getScale(T))||{x:1,y:1}:{x:1,y:1},y=jt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:T,strategy:c}):b);return{top:(m.top-y.top+g.top)/S.y,bottom:(y.bottom-m.bottom+g.bottom)/S.y,left:(m.left-y.left+g.left)/S.x,right:(y.right-m.right+g.right)/S.x}}const Qo=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:o,elements:a}=e,{element:c,padding:l=0}=It(t,e)||{};if(c==null)return{};const d=Vr(l),u={x:n,y:i},f=Vn(r),h=Bn(f),g=await o.getDimensions(c),_=f==="y",p=_?"top":"left",m=_?"bottom":"right",b=_?"clientHeight":"clientWidth",T=s.reference[h]+s.reference[f]-u[f]-s.floating[h],S=u[f]-s.reference[f],y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let I=y?y[b]:0;(!I||!await(o.isElement==null?void 0:o.isElement(y)))&&(I=a.floating[b]||s.floating[h]);const E=T/2-S/2,v=I/2-g[h]/2-1,A=ot(d[p],v),R=ot(d[m],v),N=A,V=I-g[h]-R,H=I/2-g[h]/2+E,q=kn(N,H,V),G=Et(r)!=null&&H!=q&&s.reference[h]/2-(H<N?A:R)-g[h]/2<0?H<N?N-H:V-H:0;return{[f]:u[f]-G,data:{[f]:q,centerOffset:H-q+G}}}}),Zo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:i,middlewareData:r,rects:s,initialPlacement:o,platform:a,elements:c}=e,{mainAxis:l=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,..._}=It(t,e),p=Je(i),m=Je(o)===o,b=await(a.isRTL==null?void 0:a.isRTL(c.floating)),T=u||(m||!g?[Ht(o)]:Go(o));!u&&h!=="none"&&T.push(...Jo(o,g,h,b));const S=[o,...T],y=await Hr(e,_),I=[];let E=((n=r.flip)==null?void 0:n.overflows)||[];if(l&&I.push(y[p]),d){const N=qo(i,s,b);I.push(y[N[0]],y[N[1]])}if(E=[...E,{placement:i,overflows:I}],!I.every(N=>N<=0)){var v,A;const N=(((v=r.flip)==null?void 0:v.index)||0)+1,V=S[N];if(V)return{data:{index:N,overflows:E},reset:{placement:V}};let H=(A=E.filter(q=>q.overflows[0]<=0).sort((q,z)=>q.overflows[1]-z.overflows[1])[0])==null?void 0:A.placement;if(!H)switch(f){case"bestFit":{var R;const q=(R=E.map(z=>[z.placement,z.overflows.filter(G=>G>0).reduce((G,tt)=>G+tt,0)]).sort((z,G)=>z[1]-G[1])[0])==null?void 0:R[0];q&&(H=q);break}case"initialPlacement":H=o;break}if(i!==H)return{reset:{placement:H}}}return{}}}};async function $o(t,e){const{placement:n,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),o=Je(n),a=Et(n),c=en(n)==="y",l=["left","top"].includes(o)?-1:1,d=s&&c?-1:1,u=It(e,t);let{mainAxis:f,crossAxis:h,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&typeof g=="number"&&(h=a==="end"?g*-1:g),c?{x:h*d,y:f*l}:{x:f*l,y:h*d}}const ea=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:i}=e,r=await $o(e,t);return{x:n+r.x,y:i+r.y,data:r}}}},ta=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:p=>{let{x:m,y:b}=p;return{x:m,y:b}}},...c}=It(t,e),l={x:n,y:i},d=await Hr(e,c),u=en(Je(r)),f=Br(u);let h=l[f],g=l[u];if(s){const p=f==="y"?"top":"left",m=f==="y"?"bottom":"right",b=h+d[p],T=h-d[m];h=kn(b,h,T)}if(o){const p=u==="y"?"top":"left",m=u==="y"?"bottom":"right",b=g+d[p],T=g-d[m];g=kn(b,g,T)}const _=a.fn({...e,[f]:h,[u]:g});return{..._,data:{x:_.x-n,y:_.y-i}}}}};function Be(t){return jr(t)?(t.nodeName||"").toLowerCase():"#document"}function Q(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ae(t){var e;return(e=(jr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function jr(t){return t instanceof Node||t instanceof Q(t).Node}function Te(t){return t instanceof Element||t instanceof Q(t).Element}function _e(t){return t instanceof HTMLElement||t instanceof Q(t).HTMLElement}function vi(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Q(t).ShadowRoot}function Tt(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=te(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function na(t){return["table","td","th"].includes(Be(t))}function Hn(t){const e=jn(),n=te(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function ia(t){let e=at(t);for(;_e(e)&&!tn(e);){if(Hn(e))return e;e=at(e)}return null}function jn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tn(t){return["html","body","#document"].includes(Be(t))}function te(t){return Q(t).getComputedStyle(t)}function nn(t){return Te(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function at(t){if(Be(t)==="html")return t;const e=t.assignedSlot||t.parentNode||vi(t)&&t.host||Ae(t);return vi(e)?e.host:e}function Wr(t){const e=at(t);return tn(e)?t.ownerDocument?t.ownerDocument.body:t.body:_e(e)&&Tt(e)?e:Wr(e)}function Wt(t,e){var n;e===void 0&&(e=[]);const i=Wr(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=Q(i);return r?e.concat(s,s.visualViewport||[],Tt(i)?i:[]):e.concat(i,Wt(i))}function zr(t){const e=te(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=_e(t),s=r?t.offsetWidth:n,o=r?t.offsetHeight:i,a=Vt(n)!==s||Vt(i)!==o;return a&&(n=s,i=o),{width:n,height:i,$:a}}function Wn(t){return Te(t)?t:t.contextElement}function it(t){const e=Wn(t);if(!_e(e))return xe(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:s}=zr(e);let o=(s?Vt(n.width):n.width)/i,a=(s?Vt(n.height):n.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const ra=xe(0);function qr(t){const e=Q(t);return!jn()||!e.visualViewport?ra:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function sa(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Q(t)?!1:e}function Ye(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=Wn(t);let o=xe(1);e&&(i?Te(i)&&(o=it(i)):o=it(t));const a=sa(s,n,i)?qr(s):xe(0);let c=(r.left+a.x)/o.x,l=(r.top+a.y)/o.y,d=r.width/o.x,u=r.height/o.y;if(s){const f=Q(s),h=i&&Te(i)?Q(i):i;let g=f.frameElement;for(;g&&i&&h!==f;){const _=it(g),p=g.getBoundingClientRect(),m=te(g),b=p.left+(g.clientLeft+parseFloat(m.paddingLeft))*_.x,T=p.top+(g.clientTop+parseFloat(m.paddingTop))*_.y;c*=_.x,l*=_.y,d*=_.x,u*=_.y,c+=b,l+=T,g=Q(g).frameElement}}return jt({width:d,height:u,x:c,y:l})}function oa(t){let{rect:e,offsetParent:n,strategy:i}=t;const r=_e(n),s=Ae(n);if(n===s)return e;let o={scrollLeft:0,scrollTop:0},a=xe(1);const c=xe(0);if((r||!r&&i!=="fixed")&&((Be(n)!=="body"||Tt(s))&&(o=nn(n)),_e(n))){const l=Ye(n);a=it(n),c.x=l.x+n.clientLeft,c.y=l.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-o.scrollLeft*a.x+c.x,y:e.y*a.y-o.scrollTop*a.y+c.y}}function aa(t){return Array.from(t.getClientRects())}function Gr(t){return Ye(Ae(t)).left+nn(t).scrollLeft}function ca(t){const e=Ae(t),n=nn(t),i=t.ownerDocument.body,r=Ge(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=Ge(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-n.scrollLeft+Gr(t);const a=-n.scrollTop;return te(i).direction==="rtl"&&(o+=Ge(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:a}}function la(t,e){const n=Q(t),i=Ae(t),r=n.visualViewport;let s=i.clientWidth,o=i.clientHeight,a=0,c=0;if(r){s=r.width,o=r.height;const l=jn();(!l||l&&e==="fixed")&&(a=r.offsetLeft,c=r.offsetTop)}return{width:s,height:o,x:a,y:c}}function ua(t,e){const n=Ye(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,s=_e(t)?it(t):xe(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,c=r*s.x,l=i*s.y;return{width:o,height:a,x:c,y:l}}function yi(t,e,n){let i;if(e==="viewport")i=la(t,n);else if(e==="document")i=ca(Ae(t));else if(Te(e))i=ua(e,n);else{const r=qr(t);i={...e,x:e.x-r.x,y:e.y-r.y}}return jt(i)}function Kr(t,e){const n=at(t);return n===e||!Te(n)||tn(n)?!1:te(n).position==="fixed"||Kr(n,e)}function da(t,e){const n=e.get(t);if(n)return n;let i=Wt(t).filter(a=>Te(a)&&Be(a)!=="body"),r=null;const s=te(t).position==="fixed";let o=s?at(t):t;for(;Te(o)&&!tn(o);){const a=te(o),c=Hn(o);!c&&a.position==="fixed"&&(r=null),(s?!c&&!r:!c&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Tt(o)&&!c&&Kr(t,o))?i=i.filter(d=>d!==o):r=a,o=at(o)}return e.set(t,i),i}function fa(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const o=[...n==="clippingAncestors"?da(e,this._c):[].concat(n),i],a=o[0],c=o.reduce((l,d)=>{const u=yi(e,d,r);return l.top=Ge(u.top,l.top),l.right=ot(u.right,l.right),l.bottom=ot(u.bottom,l.bottom),l.left=Ge(u.left,l.left),l},yi(e,a,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function ha(t){return zr(t)}function pa(t,e,n){const i=_e(e),r=Ae(e),s=n==="fixed",o=Ye(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const c=xe(0);if(i||!i&&!s)if((Be(e)!=="body"||Tt(r))&&(a=nn(e)),i){const l=Ye(e,!0,s,e);c.x=l.x+e.clientLeft,c.y=l.y+e.clientTop}else r&&(c.x=Gr(r));return{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function wi(t,e){return!_e(t)||te(t).position==="fixed"?null:e?e(t):t.offsetParent}function Jr(t,e){const n=Q(t);if(!_e(t))return n;let i=wi(t,e);for(;i&&na(i)&&te(i).position==="static";)i=wi(i,e);return i&&(Be(i)==="html"||Be(i)==="body"&&te(i).position==="static"&&!Hn(i))?n:i||ia(t)||n}const ma=async function(t){let{reference:e,floating:n,strategy:i}=t;const r=this.getOffsetParent||Jr,s=this.getDimensions;return{reference:pa(e,await r(n),i),floating:{x:0,y:0,...await s(n)}}};function ga(t){return te(t).direction==="rtl"}const _a={convertOffsetParentRelativeRectToViewportRelativeRect:oa,getDocumentElement:Ae,getClippingRect:fa,getOffsetParent:Jr,getElementRects:ma,getClientRects:aa,getDimensions:ha,getScale:it,isElement:Te,isRTL:ga};function ba(t,e){let n=null,i;const r=Ae(t);function s(){clearTimeout(i),n&&n.disconnect(),n=null}function o(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),s();const{left:l,top:d,width:u,height:f}=t.getBoundingClientRect();if(a||e(),!u||!f)return;const h=Lt(d),g=Lt(r.clientWidth-(l+u)),_=Lt(r.clientHeight-(d+f)),p=Lt(l),b={rootMargin:-h+"px "+-g+"px "+-_+"px "+-p+"px",threshold:Ge(0,ot(1,c))||1};let T=!0;function S(y){const I=y[0].intersectionRatio;if(I!==c){if(!T)return o();I?o(!1,I):i=setTimeout(()=>{o(!1,1e-7)},100)}T=!1}try{n=new IntersectionObserver(S,{...b,root:r.ownerDocument})}catch{n=new IntersectionObserver(S,b)}n.observe(t)}return o(!0),s}function va(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,l=Wn(t),d=r||s?[...l?Wt(l):[],...Wt(e)]:[];d.forEach(m=>{r&&m.addEventListener("scroll",n,{passive:!0}),s&&m.addEventListener("resize",n)});const u=l&&a?ba(l,n):null;let f=-1,h=null;o&&(h=new ResizeObserver(m=>{let[b]=m;b&&b.target===l&&h&&(h.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{h&&h.observe(e)})),n()}),l&&!c&&h.observe(l),h.observe(e));let g,_=c?Ye(t):null;c&&p();function p(){const m=Ye(t);_&&(m.x!==_.x||m.y!==_.y||m.width!==_.width||m.height!==_.height)&&n(),_=m,g=requestAnimationFrame(p)}return n(),()=>{d.forEach(m=>{r&&m.removeEventListener("scroll",n),s&&m.removeEventListener("resize",n)}),u&&u(),h&&h.disconnect(),h=null,c&&cancelAnimationFrame(g)}}const ya=(t,e,n)=>{const i=new Map,r={platform:_a,...n},s={...r.platform,_c:i};return Xo(t,e,{...r,platform:s})},Yr=xn(void 0);function wa(t,e){const{computePosition:n,autoUpdate:i,offset:r,shift:s,flip:o,arrow:a,size:c,autoPlacement:l,hide:d,inline:u}=pt(Yr),f={open:!1,autoUpdateCleanup:()=>{}},h=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let g;const _="https://www.skeleton.dev/utilities/popups";let p,m;function b(){p=document.querySelector(`[data-popup="${e.target}"]`)??document.createElement("div"),m=p.querySelector(".arrow")??document.createElement("div")}b();function T(){var R,N,V,H,q,z,G,tt;if(!p)throw new Error(`The data-popup="${e.target}" element was not found. ${_}`);if(!n)throw new Error(`Floating UI 'computePosition' not found for data-popup="${e.target}". ${_}`);if(!r)throw new Error(`Floating UI 'offset' not found for data-popup="${e.target}". ${_}`);if(!s)throw new Error(`Floating UI 'shift' not found for data-popup="${e.target}". ${_}`);if(!o)throw new Error(`Floating UI 'flip' not found for data-popup="${e.target}". ${_}`);if(!a)throw new Error(`Floating UI 'arrow' not found for data-popup="${e.target}". ${_}`);const A=[];c&&A.push(c((R=e.middleware)==null?void 0:R.size)),l&&A.push(l((N=e.middleware)==null?void 0:N.autoPlacement)),d&&A.push(d((V=e.middleware)==null?void 0:V.hide)),u&&A.push(u((H=e.middleware)==null?void 0:H.inline)),n(t,p,{placement:e.placement??"bottom",middleware:[r(((q=e.middleware)==null?void 0:q.offset)??8),s(((z=e.middleware)==null?void 0:z.shift)??{padding:8}),o((G=e.middleware)==null?void 0:G.flip),a(((tt=e.middleware)==null?void 0:tt.arrow)??{element:m||null}),...A]}).then(({x:O,y:X,placement:nt,middlewareData:Pt})=>{if(Object.assign(p.style,{left:`${O}px`,top:`${X}px`}),m){const{x:ft,y:ci}=Pt.arrow,yo={top:"bottom",right:"left",bottom:"top",left:"right"}[nt.split("-")[0]];Object.assign(m.style,{left:ft!=null?`${ft}px`:"",top:ci!=null?`${ci}px`:"",right:"",bottom:"",[yo]:"-4px"})}})}function S(){p&&(f.open=!0,e.state&&e.state({state:f.open}),T(),p.style.display="block",p.style.opacity="1",p.style.pointerEvents="auto",p.removeAttribute("inert"),f.autoUpdateCleanup=i(t,p,T),g=Array.from(p==null?void 0:p.querySelectorAll(h)))}function y(A){if(!p)return;const R=parseFloat(window.getComputedStyle(p).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{f.open=!1,e.state&&e.state({state:f.open}),p.style.opacity="0",p.setAttribute("inert",""),f.autoUpdateCleanup&&f.autoUpdateCleanup(),A&&A()},R)}function I(){f.open===!1?S():y()}function E(A){if(f.open===!1||t.contains(A.target))return;if(p&&p.contains(A.target)===!1){y();return}const R=e.closeQuery===void 0?"a[href], button":e.closeQuery,N=p==null?void 0:p.querySelectorAll(R);N==null||N.forEach(V=>{V.contains(A.target)&&y()})}const v=A=>{if(f.open===!1)return;const R=A.key;if(R==="Escape"){A.preventDefault(),t.focus(),y();return}g=Array.from(p==null?void 0:p.querySelectorAll(h)),f.open&&document.activeElement===t&&(R==="ArrowDown"||R==="Tab")&&h.length>0&&g.length>0&&(A.preventDefault(),g[0].focus())};switch(e.event){case"click":t.addEventListener("click",I,!0),window.addEventListener("click",E,!0);break;case"hover":t.addEventListener("mouseover",S,!0),t.addEventListener("mouseleave",()=>y(),!0);break;case"focus-blur":t.addEventListener("focus",I,!0),t.addEventListener("blur",()=>y(),!0);break;case"focus-click":t.addEventListener("focus",S,!0),window.addEventListener("click",E,!0);break;default:throw new Error(`Event value of '${e.event}' is not supported. ${_}`)}return window.addEventListener("keydown",v,!0),T(),{update(A){y(()=>{e=A,T(),b()})},destroy(){t.removeEventListener("click",I,!0),t.removeEventListener("mouseover",S,!0),t.removeEventListener("mouseleave",()=>y(),!0),t.removeEventListener("focus",I,!0),t.removeEventListener("focus",S,!0),t.removeEventListener("blur",()=>y(),!0),window.removeEventListener("click",E,!0),window.removeEventListener("keydown",v,!0)}}}const Ia={message:"Missing Toast Message",autohide:!0,timeout:5e3};function Ea(){const t=Math.random();return Number(t).toString(32)}function Ii(t){if(t.autohide===!0)return setTimeout(()=>{ce.close(t.id)},t.timeout)}function Ta(){const{subscribe:t,set:e,update:n}=xn([]);return{subscribe:t,trigger:i=>{const r=Ea();return n(s=>{i&&i.callback&&i.callback({id:r,status:"queued"}),i.hideDismiss&&(i.autohide=!0);const o={...Ia,...i,id:r};return o.timeoutId=Ii(o),s.push(o),s}),r},close:i=>n(r=>{if(r.length>0){const s=r.findIndex(a=>a.id===i),o=r[s];o&&(o.callback&&o.callback({id:i,status:"closed"}),o.timeoutId&&clearTimeout(o.timeoutId),r.splice(s,1))}return r}),freeze:i=>n(r=>(r.length>0&&clearTimeout(r[i].timeoutId),r)),unfreeze:i=>n(r=>(r.length>0&&(r[i].timeoutId=Ii(r[i])),r)),clear:()=>e([])}}const ce=Ta(),dn={};function Ei(t){return t==="local"?localStorage:sessionStorage}function rn(t,e,n){const i=(n==null?void 0:n.serializer)??JSON,r=(n==null?void 0:n.storage)??"local";function s(o,a){Ei(r).setItem(o,i.stringify(a))}if(!dn[t]){const o=xn(e,l=>{const d=Ei(r).getItem(t);d&&l(i.parse(d));{const u=f=>{f.key===t&&l(f.newValue?i.parse(f.newValue):null)};return window.addEventListener("storage",u),()=>window.removeEventListener("storage",u)}}),{subscribe:a,set:c}=o;dn[t]={set(l){s(t,l),c(l)},update(l){const d=l(pt(o));s(t,d),c(d)},subscribe:a}}return dn[t]}rn("modeOsPrefers",!1);rn("modeUserPrefers",void 0);rn("modeCurrent",!1);function ka({fallback:t,...e}){const n=new Map,i=new Map;function r(o,a,c){const{delay:l=0,duration:d=I=>Math.sqrt(I)*30,easing:u=Fr}=ae(ae({},e),c),f=o.getBoundingClientRect(),h=a.getBoundingClientRect(),g=f.left-h.left,_=f.top-h.top,p=f.width/h.width,m=f.height/h.height,b=Math.sqrt(g*g+_*_),T=getComputedStyle(a),S=T.transform==="none"?"":T.transform,y=+T.opacity;return{delay:l,duration:Fn(d)?d(b):d,easing:u,css:(I,E)=>`
				opacity: ${I*y};
				transform-origin: top left;
				transform: ${S} translate(${E*g}px,${E*_}px) scale(${I+(1-I)*p}, ${I+(1-I)*m});
			`}}function s(o,a,c){return(l,d)=>(o.set(d.key,l),()=>{if(a.has(d.key)){const u=a.get(d.key);return a.delete(d.key),r(u,l,d)}return o.delete(d.key),t&&t(l,d,c)})}return[s(i,n,!1),s(n,i,!0)]}const Sa=t=>({}),Ti=t=>({}),Aa=t=>({}),ki=t=>({}),Ra=t=>({}),Si=t=>({});function Ai(t){let e,n,i;const r=t[22].lead,s=ne(r,t,t[21],Si);return{c(){e=P("div"),s&&s.c(),this.h()},l(o){e=L(o,"DIV",{class:!0});var a=F(e);s&&s.l(a),a.forEach(k),this.h()},h(){w(e,"class",n="app-bar-slot-lead "+t[4])},m(o,a){x(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&ie(s,r,o,o[21],i?se(r,o[21],a,Ra):re(o[21]),Si),(!i||a&16&&n!==(n="app-bar-slot-lead "+o[4]))&&w(e,"class",n)},i(o){i||(C(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&k(e),s&&s.d(o)}}}function Ri(t){let e,n,i;const r=t[22].trail,s=ne(r,t,t[21],ki);return{c(){e=P("div"),s&&s.c(),this.h()},l(o){e=L(o,"DIV",{class:!0});var a=F(e);s&&s.l(a),a.forEach(k),this.h()},h(){w(e,"class",n="app-bar-slot-trail "+t[2])},m(o,a){x(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&ie(s,r,o,o[21],i?se(r,o[21],a,Aa):re(o[21]),ki),(!i||a&4&&n!==(n="app-bar-slot-trail "+o[2]))&&w(e,"class",n)},i(o){i||(C(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&k(e),s&&s.d(o)}}}function Ci(t){let e,n,i;const r=t[22].headline,s=ne(r,t,t[21],Ti);return{c(){e=P("div"),s&&s.c(),this.h()},l(o){e=L(o,"DIV",{class:!0});var a=F(e);s&&s.l(a),a.forEach(k),this.h()},h(){w(e,"class",n="app-bar-row-headline "+t[5])},m(o,a){x(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&2097152)&&ie(s,r,o,o[21],i?se(r,o[21],a,Sa):re(o[21]),Ti),(!i||a&32&&n!==(n="app-bar-row-headline "+o[5]))&&w(e,"class",n)},i(o){i||(C(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&k(e),s&&s.d(o)}}}function Ca(t){let e,n,i,r,s,o,a,c,l,d,u=t[8].lead&&Ai(t);const f=t[22].default,h=ne(f,t,t[21],null);let g=t[8].trail&&Ri(t),_=t[8].headline&&Ci(t);return{c(){e=P("div"),n=P("div"),u&&u.c(),i=j(),r=P("div"),h&&h.c(),o=j(),g&&g.c(),c=j(),_&&_.c(),this.h()},l(p){e=L(p,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var m=F(e);n=L(m,"DIV",{class:!0});var b=F(n);u&&u.l(b),i=W(b),r=L(b,"DIV",{class:!0});var T=F(r);h&&h.l(T),T.forEach(k),o=W(b),g&&g.l(b),b.forEach(k),c=W(m),_&&_.l(m),m.forEach(k),this.h()},h(){w(r,"class",s="app-bar-slot-default "+t[3]),w(n,"class",a="app-bar-row-main "+t[6]),w(e,"class",l="app-bar "+t[7]),w(e,"data-testid","app-bar"),w(e,"role","toolbar"),w(e,"aria-label",t[0]),w(e,"aria-labelledby",t[1])},m(p,m){x(p,e,m),D(e,n),u&&u.m(n,null),D(n,i),D(n,r),h&&h.m(r,null),D(n,o),g&&g.m(n,null),D(e,c),_&&_.m(e,null),d=!0},p(p,[m]){p[8].lead?u?(u.p(p,m),m&256&&C(u,1)):(u=Ai(p),u.c(),C(u,1),u.m(n,i)):u&&($(),M(u,1,1,()=>{u=null}),ee()),h&&h.p&&(!d||m&2097152)&&ie(h,f,p,p[21],d?se(f,p[21],m,null):re(p[21]),null),(!d||m&8&&s!==(s="app-bar-slot-default "+p[3]))&&w(r,"class",s),p[8].trail?g?(g.p(p,m),m&256&&C(g,1)):(g=Ri(p),g.c(),C(g,1),g.m(n,null)):g&&($(),M(g,1,1,()=>{g=null}),ee()),(!d||m&64&&a!==(a="app-bar-row-main "+p[6]))&&w(n,"class",a),p[8].headline?_?(_.p(p,m),m&256&&C(_,1)):(_=Ci(p),_.c(),C(_,1),_.m(e,null)):_&&($(),M(_,1,1,()=>{_=null}),ee()),(!d||m&128&&l!==(l="app-bar "+p[7]))&&w(e,"class",l),(!d||m&1)&&w(e,"aria-label",p[0]),(!d||m&2)&&w(e,"aria-labelledby",p[1])},i(p){d||(C(u),C(h,p),C(g),C(_),d=!0)},o(p){M(u),M(h,p),M(g),M(_),d=!1},d(p){p&&k(e),u&&u.d(),h&&h.d(p),g&&g.d(),_&&_.d()}}}const Oa="flex flex-col",Da="grid items-center",Pa="",La="flex-none flex justify-between items-center",Na="flex-auto",Ma="flex-none flex items-center space-x-4";function Ua(t,e,n){let i,r,s,o,a,c,{$$slots:l={},$$scope:d}=e;const u=Pr(l);let{background:f="bg-surface-100-800-token"}=e,{border:h=""}=e,{padding:g="p-4"}=e,{shadow:_=""}=e,{spacing:p="space-y-4"}=e,{gridColumns:m="grid-cols-[auto_1fr_auto]"}=e,{gap:b="gap-4"}=e,{regionRowMain:T=""}=e,{regionRowHeadline:S=""}=e,{slotLead:y=""}=e,{slotDefault:I=""}=e,{slotTrail:E=""}=e,{label:v=""}=e,{labelledby:A=""}=e;return t.$$set=R=>{n(23,e=ae(ae({},e),Fe(R))),"background"in R&&n(9,f=R.background),"border"in R&&n(10,h=R.border),"padding"in R&&n(11,g=R.padding),"shadow"in R&&n(12,_=R.shadow),"spacing"in R&&n(13,p=R.spacing),"gridColumns"in R&&n(14,m=R.gridColumns),"gap"in R&&n(15,b=R.gap),"regionRowMain"in R&&n(16,T=R.regionRowMain),"regionRowHeadline"in R&&n(17,S=R.regionRowHeadline),"slotLead"in R&&n(18,y=R.slotLead),"slotDefault"in R&&n(19,I=R.slotDefault),"slotTrail"in R&&n(20,E=R.slotTrail),"label"in R&&n(0,v=R.label),"labelledby"in R&&n(1,A=R.labelledby),"$$scope"in R&&n(21,d=R.$$scope)},t.$$.update=()=>{n(7,i=`${Oa} ${f} ${h} ${p} ${g} ${_} ${e.class??""}`),t.$$.dirty&114688&&n(6,r=`${Da} ${m} ${b} ${T}`),t.$$.dirty&131072&&n(5,s=`${Pa} ${S}`),t.$$.dirty&262144&&n(4,o=`${La} ${y}`),t.$$.dirty&524288&&n(3,a=`${Na} ${I}`),t.$$.dirty&1048576&&n(2,c=`${Ma} ${E}`)},e=Fe(e),[v,A,c,a,o,s,r,i,u,f,h,g,_,p,m,b,T,S,y,I,E,d,l]}class Fa extends He{constructor(e){super(),je(this,e,Ua,Ca,Ve,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const xa=t=>({}),Oi=t=>({}),Ba=t=>({}),Di=t=>({}),Va=t=>({}),Pi=t=>({}),Ha=t=>({}),Li=t=>({}),ja=t=>({}),Ni=t=>({}),Wa=t=>({}),Mi=t=>({});function Ui(t){let e,n,i;const r=t[18].header,s=ne(r,t,t[17],Mi);return{c(){e=P("header"),s&&s.c(),this.h()},l(o){e=L(o,"HEADER",{id:!0,class:!0});var a=F(e);s&&s.l(a),a.forEach(k),this.h()},h(){w(e,"id","shell-header"),w(e,"class",n="flex-none "+t[7])},m(o,a){x(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&131072)&&ie(s,r,o,o[17],i?se(r,o[17],a,Wa):re(o[17]),Mi),(!i||a&128&&n!==(n="flex-none "+o[7]))&&w(e,"class",n)},i(o){i||(C(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&k(e),s&&s.d(o)}}}function Fi(t){let e,n;const i=t[18].sidebarLeft,r=ne(i,t,t[17],Ni);return{c(){e=P("aside"),r&&r.c(),this.h()},l(s){e=L(s,"ASIDE",{id:!0,class:!0});var o=F(e);r&&r.l(o),o.forEach(k),this.h()},h(){w(e,"id","sidebar-left"),w(e,"class",t[6])},m(s,o){x(s,e,o),r&&r.m(e,null),n=!0},p(s,o){r&&r.p&&(!n||o&131072)&&ie(r,i,s,s[17],n?se(i,s[17],o,ja):re(s[17]),Ni),(!n||o&64)&&w(e,"class",s[6])},i(s){n||(C(r,s),n=!0)},o(s){M(r,s),n=!1},d(s){s&&k(e),r&&r.d(s)}}}function xi(t){let e,n,i;const r=t[18].pageHeader,s=ne(r,t,t[17],Li),o=s||za();return{c(){e=P("header"),o&&o.c(),this.h()},l(a){e=L(a,"HEADER",{id:!0,class:!0});var c=F(e);o&&o.l(c),c.forEach(k),this.h()},h(){w(e,"id","page-header"),w(e,"class",n="flex-none "+t[4])},m(a,c){x(a,e,c),o&&o.m(e,null),i=!0},p(a,c){s&&s.p&&(!i||c&131072)&&ie(s,r,a,a[17],i?se(r,a[17],c,Ha):re(a[17]),Li),(!i||c&16&&n!==(n="flex-none "+a[4]))&&w(e,"class",n)},i(a){i||(C(o,a),i=!0)},o(a){M(o,a),i=!1},d(a){a&&k(e),o&&o.d(a)}}}function za(t){let e;return{c(){e=lt("(slot:header)")},l(n){e=ut(n,"(slot:header)")},m(n,i){x(n,e,i)},d(n){n&&k(e)}}}function Bi(t){let e,n,i;const r=t[18].pageFooter,s=ne(r,t,t[17],Pi),o=s||qa();return{c(){e=P("footer"),o&&o.c(),this.h()},l(a){e=L(a,"FOOTER",{id:!0,class:!0});var c=F(e);o&&o.l(c),c.forEach(k),this.h()},h(){w(e,"id","page-footer"),w(e,"class",n="flex-none "+t[2])},m(a,c){x(a,e,c),o&&o.m(e,null),i=!0},p(a,c){s&&s.p&&(!i||c&131072)&&ie(s,r,a,a[17],i?se(r,a[17],c,Va):re(a[17]),Pi),(!i||c&4&&n!==(n="flex-none "+a[2]))&&w(e,"class",n)},i(a){i||(C(o,a),i=!0)},o(a){M(o,a),i=!1},d(a){a&&k(e),o&&o.d(a)}}}function qa(t){let e;return{c(){e=lt("(slot:footer)")},l(n){e=ut(n,"(slot:footer)")},m(n,i){x(n,e,i)},d(n){n&&k(e)}}}function Vi(t){let e,n;const i=t[18].sidebarRight,r=ne(i,t,t[17],Di);return{c(){e=P("aside"),r&&r.c(),this.h()},l(s){e=L(s,"ASIDE",{id:!0,class:!0});var o=F(e);r&&r.l(o),o.forEach(k),this.h()},h(){w(e,"id","sidebar-right"),w(e,"class",t[5])},m(s,o){x(s,e,o),r&&r.m(e,null),n=!0},p(s,o){r&&r.p&&(!n||o&131072)&&ie(r,i,s,s[17],n?se(i,s[17],o,Ba):re(s[17]),Di),(!n||o&32)&&w(e,"class",s[5])},i(s){n||(C(r,s),n=!0)},o(s){M(r,s),n=!1},d(s){s&&k(e),r&&r.d(s)}}}function Hi(t){let e,n,i;const r=t[18].footer,s=ne(r,t,t[17],Oi);return{c(){e=P("footer"),s&&s.c(),this.h()},l(o){e=L(o,"FOOTER",{id:!0,class:!0});var a=F(e);s&&s.l(a),a.forEach(k),this.h()},h(){w(e,"id","shell-footer"),w(e,"class",n="flex-none "+t[1])},m(o,a){x(o,e,a),s&&s.m(e,null),i=!0},p(o,a){s&&s.p&&(!i||a&131072)&&ie(s,r,o,o[17],i?se(r,o[17],a,xa):re(o[17]),Oi),(!i||a&2&&n!==(n="flex-none "+o[1]))&&w(e,"class",n)},i(o){i||(C(s,o),i=!0)},o(o){M(s,o),i=!1},d(o){o&&k(e),s&&s.d(o)}}}function Ga(t){let e,n,i,r,s,o,a,c,l,d,u,f,h,g,_,p=t[9].header&&Ui(t),m=t[9].sidebarLeft&&Fi(t),b=t[9].pageHeader&&xi(t);const T=t[18].default,S=ne(T,t,t[17],null);let y=t[9].pageFooter&&Bi(t),I=t[9].sidebarRight&&Vi(t),E=t[9].footer&&Hi(t);return{c(){e=P("div"),p&&p.c(),n=j(),i=P("div"),m&&m.c(),r=j(),s=P("div"),b&&b.c(),o=j(),a=P("main"),S&&S.c(),l=j(),y&&y.c(),u=j(),I&&I.c(),f=j(),E&&E.c(),this.h()},l(v){e=L(v,"DIV",{id:!0,class:!0,"data-testid":!0});var A=F(e);p&&p.l(A),n=W(A),i=L(A,"DIV",{class:!0});var R=F(i);m&&m.l(R),r=W(R),s=L(R,"DIV",{id:!0,class:!0});var N=F(s);b&&b.l(N),o=W(N),a=L(N,"MAIN",{id:!0,class:!0});var V=F(a);S&&S.l(V),V.forEach(k),l=W(N),y&&y.l(N),N.forEach(k),u=W(R),I&&I.l(R),R.forEach(k),f=W(A),E&&E.l(A),A.forEach(k),this.h()},h(){w(a,"id","page-content"),w(a,"class",c="flex-auto "+t[3]),w(s,"id","page"),w(s,"class",d=t[0]+" "+ji),w(i,"class","flex-auto "+Ja),w(e,"id","appShell"),w(e,"class",t[8]),w(e,"data-testid","app-shell")},m(v,A){x(v,e,A),p&&p.m(e,null),D(e,n),D(e,i),m&&m.m(i,null),D(i,r),D(i,s),b&&b.m(s,null),D(s,o),D(s,a),S&&S.m(a,null),D(s,l),y&&y.m(s,null),D(i,u),I&&I.m(i,null),D(e,f),E&&E.m(e,null),h=!0,g||(_=J(s,"scroll",t[19]),g=!0)},p(v,[A]){v[9].header?p?(p.p(v,A),A&512&&C(p,1)):(p=Ui(v),p.c(),C(p,1),p.m(e,n)):p&&($(),M(p,1,1,()=>{p=null}),ee()),v[9].sidebarLeft?m?(m.p(v,A),A&512&&C(m,1)):(m=Fi(v),m.c(),C(m,1),m.m(i,r)):m&&($(),M(m,1,1,()=>{m=null}),ee()),v[9].pageHeader?b?(b.p(v,A),A&512&&C(b,1)):(b=xi(v),b.c(),C(b,1),b.m(s,o)):b&&($(),M(b,1,1,()=>{b=null}),ee()),S&&S.p&&(!h||A&131072)&&ie(S,T,v,v[17],h?se(T,v[17],A,null):re(v[17]),null),(!h||A&8&&c!==(c="flex-auto "+v[3]))&&w(a,"class",c),v[9].pageFooter?y?(y.p(v,A),A&512&&C(y,1)):(y=Bi(v),y.c(),C(y,1),y.m(s,null)):y&&($(),M(y,1,1,()=>{y=null}),ee()),(!h||A&1&&d!==(d=v[0]+" "+ji))&&w(s,"class",d),v[9].sidebarRight?I?(I.p(v,A),A&512&&C(I,1)):(I=Vi(v),I.c(),C(I,1),I.m(i,null)):I&&($(),M(I,1,1,()=>{I=null}),ee()),v[9].footer?E?(E.p(v,A),A&512&&C(E,1)):(E=Hi(v),E.c(),C(E,1),E.m(e,null)):E&&($(),M(E,1,1,()=>{E=null}),ee()),(!h||A&256)&&w(e,"class",v[8])},i(v){h||(C(p),C(m),C(b),C(S,v),C(y),C(I),C(E),h=!0)},o(v){M(p),M(m),M(b),M(S,v),M(y),M(I),M(E),h=!1},d(v){v&&k(e),p&&p.d(),m&&m.d(),b&&b.d(),S&&S.d(v),y&&y.d(),I&&I.d(),E&&E.d(),g=!1,_()}}}const Ka="w-full h-full flex flex-col overflow-hidden",Ja="w-full h-full flex overflow-hidden",ji="flex-1 overflow-x-hidden flex flex-col",Ya="flex-none overflow-x-hidden overflow-y-auto",Xa="flex-none overflow-x-hidden overflow-y-auto";function Qa(t,e,n){let i,r,s,o,a,c,l,d,{$$slots:u={},$$scope:f}=e;const h=Pr(u);let{regionPage:g=""}=e,{slotHeader:_="z-10"}=e,{slotSidebarLeft:p="w-auto"}=e,{slotSidebarRight:m="w-auto"}=e,{slotPageHeader:b=""}=e,{slotPageContent:T=""}=e,{slotPageFooter:S=""}=e,{slotFooter:y=""}=e;function I(E){ht.call(this,t,E)}return t.$$set=E=>{n(20,e=ae(ae({},e),Fe(E))),"regionPage"in E&&n(0,g=E.regionPage),"slotHeader"in E&&n(10,_=E.slotHeader),"slotSidebarLeft"in E&&n(11,p=E.slotSidebarLeft),"slotSidebarRight"in E&&n(12,m=E.slotSidebarRight),"slotPageHeader"in E&&n(13,b=E.slotPageHeader),"slotPageContent"in E&&n(14,T=E.slotPageContent),"slotPageFooter"in E&&n(15,S=E.slotPageFooter),"slotFooter"in E&&n(16,y=E.slotFooter),"$$scope"in E&&n(17,f=E.$$scope)},t.$$.update=()=>{n(8,i=`${Ka} ${e.class??""}`),t.$$.dirty&1024&&n(7,r=`${_}`),t.$$.dirty&2048&&n(6,s=`${Ya} ${p}`),t.$$.dirty&4096&&n(5,o=`${Xa} ${m}`),t.$$.dirty&8192&&n(4,a=`${b}`),t.$$.dirty&16384&&n(3,c=`${T}`),t.$$.dirty&32768&&n(2,l=`${S}`),t.$$.dirty&65536&&n(1,d=`${y}`)},e=Fe(e),[g,d,l,c,a,o,s,r,i,h,_,p,m,b,T,S,y,f,u,I]}class Za extends He{constructor(e){super(),je(this,e,Qa,Ga,Ve,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function $a(t){let e,n,i=String(t[1]).substring(0,2).toUpperCase()+"",r,s;return{c(){e=ui("svg"),n=ui("text"),r=lt(i),this.h()},l(o){e=di(o,"svg",{class:!0,viewBox:!0});var a=F(e);n=di(a,"text",{x:!0,y:!0,"dominant-baseline":!0,"text-anchor":!0,"font-weight":!0,"font-size":!0,class:!0});var c=F(n);r=ut(c,i),c.forEach(k),a.forEach(k),this.h()},h(){w(n,"x","50%"),w(n,"y","50%"),w(n,"dominant-baseline","central"),w(n,"text-anchor","middle"),w(n,"font-weight","bold"),w(n,"font-size",150),w(n,"class",s="avatar-text "+t[2]),w(e,"class","avatar-initials w-full h-full"),w(e,"viewBox","0 0 512 512")},m(o,a){x(o,e,a),D(e,n),D(n,r)},p(o,a){a&2&&i!==(i=String(o[1]).substring(0,2).toUpperCase()+"")&&$t(r,i),a&4&&s!==(s="avatar-text "+o[2])&&w(n,"class",s)},d(o){o&&k(e)}}}function ec(t){let e,n,i,r,s,o,a,c,l=[{class:n="avatar-image "+ic},{style:i=t[8].style??""},{src:r=t[0]},{alt:s=t[8].alt||""},t[7]()],d={};for(let u=0;u<l.length;u+=1)d=ae(d,l[u]);return{c(){e=P("img"),this.h()},l(u){e=L(u,"IMG",{class:!0,style:!0,src:!0,alt:!0}),this.h()},h(){fi(e,d)},m(u,f){x(u,e,f),a||(c=[Lr(o=t[4].call(null,e,t[5])),J(e,"error",t[19])],a=!0)},p(u,f){fi(e,d=Mo(l,[{class:n},f&256&&i!==(i=u[8].style??"")&&{style:i},f&1&&!Io(e.src,r=u[0])&&{src:r},f&256&&s!==(s=u[8].alt||"")&&{alt:s},u[7]()])),o&&Fn(o.update)&&f&32&&o.update.call(null,u[5])},d(u){u&&k(e),a=!1,Zt(c)}}}function tc(t){let e,n,i,r;function s(c,l){return c[0]?ec:$a}let o=s(t),a=o(t);return{c(){e=P("figure"),a.c(),this.h()},l(c){e=L(c,"FIGURE",{class:!0,"data-testid":!0});var l=F(e);a.l(l),l.forEach(k),this.h()},h(){w(e,"class",n="avatar "+t[6]),w(e,"data-testid","avatar")},m(c,l){x(c,e,l),a.m(e,null),i||(r=[J(e,"click",t[15]),J(e,"keydown",t[16]),J(e,"keyup",t[17]),J(e,"keypress",t[18])],i=!0)},p(c,[l]){o===(o=s(c))&&a?a.p(c,l):(a.d(1),a=o(c),a&&(a.c(),a.m(e,null))),l&64&&n!==(n="avatar "+c[6])&&w(e,"class",n)},i:oe,o:oe,d(c){c&&k(e),a.d(),i=!1,Zt(r)}}}let nc="flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate",ic="w-full h-full object-cover";function rc(t,e,n){let i;const r=["initials","fill","src","fallback","action","actionParams","background","width","border","rounded","shadow","cursor"];let s=li(e,r),{initials:o="AB"}=e,{fill:a="fill-token"}=e,{src:c=""}=e,{fallback:l=""}=e,{action:d=()=>{}}=e,{actionParams:u=""}=e,{background:f="bg-surface-400-500-token"}=e,{width:h="w-16"}=e,{border:g=""}=e,{rounded:_="rounded-full"}=e,{shadow:p=""}=e,{cursor:m=""}=e;function b(){return delete s.class,s}function T(v){ht.call(this,t,v)}function S(v){ht.call(this,t,v)}function y(v){ht.call(this,t,v)}function I(v){ht.call(this,t,v)}const E=()=>n(0,c=l);return t.$$set=v=>{n(8,e=ae(ae({},e),Fe(v))),n(20,s=li(e,r)),"initials"in v&&n(1,o=v.initials),"fill"in v&&n(2,a=v.fill),"src"in v&&n(0,c=v.src),"fallback"in v&&n(3,l=v.fallback),"action"in v&&n(4,d=v.action),"actionParams"in v&&n(5,u=v.actionParams),"background"in v&&n(9,f=v.background),"width"in v&&n(10,h=v.width),"border"in v&&n(11,g=v.border),"rounded"in v&&n(12,_=v.rounded),"shadow"in v&&n(13,p=v.shadow),"cursor"in v&&n(14,m=v.cursor)},t.$$.update=()=>{n(6,i=`${nc} ${f} ${h} ${g} ${_} ${p} ${m} ${e.class??""}`)},e=Fe(e),[c,o,a,l,d,u,i,b,e,f,h,g,_,p,m,T,S,y,I,E]}class Xr extends He{constructor(e){super(),je(this,e,rc,tc,Ve,{initials:1,fill:2,src:0,fallback:3,action:4,actionParams:5,background:9,width:10,border:11,rounded:12,shadow:13,cursor:14})}}function sc(t,{from:e,to:n},i={}){const r=getComputedStyle(t),s=r.transform==="none"?"":r.transform,[o,a]=r.transformOrigin.split(" ").map(parseFloat),c=e.left+e.width*o/n.width-(n.left+o),l=e.top+e.height*a/n.height-(n.top+a),{delay:d=0,duration:u=h=>Math.sqrt(h)*120,easing:f=Fr}=i;return{delay:d,duration:Fn(u)?u(Math.sqrt(c*c+l*l)):u,easing:f,css:(h,g)=>{const _=g*c,p=g*l,m=h+g*e.width/n.width,b=h+g*e.height/n.height;return`transform: ${s} translate(${_}px, ${p}px) scale(${m}, ${b});`}}}function Wi(t,e,n){const i=t.slice();return i[32]=e[n],i[34]=n,i}function zi(t){let e,n,i=[],r=new Map,s,o,a,c=mi(t[6]);const l=d=>d[32];for(let d=0;d<c.length;d+=1){let u=Wi(t,c,d),f=l(u);r.set(f,i[d]=Ji(f,u))}return{c(){e=P("div"),n=P("div");for(let d=0;d<i.length;d+=1)i[d].c();this.h()},l(d){e=L(d,"DIV",{class:!0,"data-testid":!0});var u=F(e);n=L(u,"DIV",{class:!0});var f=F(n);for(let h=0;h<i.length;h+=1)i[h].l(f);f.forEach(k),u.forEach(k),this.h()},h(){w(n,"class",s="snackbar "+t[8]),w(e,"class",o="snackbar-wrapper "+t[9]),w(e,"data-testid","snackbar-wrapper")},m(d,u){x(d,e,u),D(e,n);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(n,null);a=!0},p(d,u){if(u[0]&7390){c=mi(d[6]),$();for(let f=0;f<i.length;f+=1)i[f].r();i=Do(i,u,l,1,d,c,r,n,Po,Ji,null,Wi);for(let f=0;f<i.length;f+=1)i[f].a();ee()}(!a||u[0]&256&&s!==(s="snackbar "+d[8]))&&w(n,"class",s),(!a||u[0]&512&&o!==(o="snackbar-wrapper "+d[9]))&&w(e,"class",o)},i(d){if(!a){for(let u=0;u<c.length;u+=1)C(i[u]);a=!0}},o(d){for(let u=0;u<i.length;u+=1)M(i[u]);a=!1},d(d){d&&k(e);for(let u=0;u<i.length;u+=1)i[u].d()}}}function qi(t){let e,n,i=t[32].action&&Gi(t),r=!t[32].hideDismiss&&Ki(t);return{c(){e=P("div"),i&&i.c(),n=j(),r&&r.c(),this.h()},l(s){e=L(s,"DIV",{class:!0});var o=F(e);i&&i.l(o),n=W(o),r&&r.l(o),o.forEach(k),this.h()},h(){w(e,"class","toast-actions "+uc)},m(s,o){x(s,e,o),i&&i.m(e,null),D(e,n),r&&r.m(e,null)},p(s,o){s[32].action?i?i.p(s,o):(i=Gi(s),i.c(),i.m(e,n)):i&&(i.d(1),i=null),s[32].hideDismiss?r&&(r.d(1),r=null):r?r.p(s,o):(r=Ki(s),r.c(),r.m(e,null))},d(s){s&&k(e),i&&i.d(),r&&r.d()}}}function Gi(t){let e,n,i=t[32].action.label+"",r,s;function o(){return t[26](t[34])}return{c(){e=P("button"),n=new Nr(!1),this.h()},l(a){e=L(a,"BUTTON",{class:!0});var c=F(e);n=Mr(c,!1),c.forEach(k),this.h()},h(){n.a=null,w(e,"class",t[2])},m(a,c){x(a,e,c),n.m(i,e),r||(s=J(e,"click",o),r=!0)},p(a,c){t=a,c[0]&64&&i!==(i=t[32].action.label+"")&&n.p(i),c[0]&4&&w(e,"class",t[2])},d(a){a&&k(e),r=!1,s()}}}function Ki(t){let e,n,i,r;function s(){return t[27](t[32])}return{c(){e=P("button"),n=lt(t[4]),this.h()},l(o){e=L(o,"BUTTON",{class:!0,"aria-label":!0});var a=F(e);n=ut(a,t[4]),a.forEach(k),this.h()},h(){w(e,"class",t[3]),w(e,"aria-label","Dismiss toast")},m(o,a){x(o,e,a),D(e,n),i||(r=J(e,"click",s),i=!0)},p(o,a){t=o,a[0]&16&&$t(n,t[4]),a[0]&8&&w(e,"class",t[3])},d(o){o&&k(e),i=!1,r()}}}function Ji(t,e){let n,i,r,s,o=e[32].message+"",a,c,l,d,u,f,h,g=oe,_,p,m,b=(e[32].action||!e[32].hideDismiss)&&qi(e);function T(){return e[28](e[34])}function S(){return e[29](e[34])}return{key:t,first:null,c(){n=P("div"),i=P("div"),r=P("div"),s=new Nr(!1),a=j(),b&&b.c(),l=j(),this.h()},l(y){n=L(y,"DIV",{role:!0,"aria-live":!0});var I=F(n);i=L(I,"DIV",{class:!0,"data-testid":!0});var E=F(i);r=L(E,"DIV",{class:!0});var v=F(r);s=Mr(v,!1),v.forEach(k),a=W(E),b&&b.l(E),E.forEach(k),l=W(I),I.forEach(k),this.h()},h(){s.a=null,w(r,"class","text-base"),w(i,"class",c="toast "+e[7]+" "+(e[32].background??e[1])+" "+(e[32].classes??"")),w(i,"data-testid","toast"),w(n,"role",d=e[32].hideDismiss?"alert":"alertdialog"),w(n,"aria-live","polite"),this.first=n},m(y,I){x(y,n,I),D(n,i),D(i,r),s.m(o,r),D(i,a),b&&b.m(i,null),D(n,l),_=!0,p||(m=[J(n,"mouseenter",T),J(n,"mouseleave",S)],p=!0)},p(y,I){e=y,(!_||I[0]&64)&&o!==(o=e[32].message+"")&&s.p(o),e[32].action||!e[32].hideDismiss?b?b.p(e,I):(b=qi(e),b.c(),b.m(i,null)):b&&(b.d(1),b=null),(!_||I[0]&194&&c!==(c="toast "+e[7]+" "+(e[32].background??e[1])+" "+(e[32].classes??"")))&&w(i,"class",c),(!_||I[0]&64&&d!==(d=e[32].hideDismiss?"alert":"alertdialog"))&&w(n,"role",d)},r(){h=n.getBoundingClientRect()},f(){Ho(n),g(),xr(n,h)},a(){g(),g=Vo(n,h,sc,{duration:e[0]})},i(y){_||(Ur(()=>{_&&(f&&f.end(1),u=Co(n,e[14],{key:e[32].id}),u.start())}),_=!0)},o(y){u&&u.invalidate(),f=Oo(n,e[13],{key:e[32].id}),_=!1},d(y){y&&k(n),b&&b.d(),y&&f&&f.end(),p=!1,Zt(m)}}}function oc(t){let e,n,i=t[5].length&&zi(t);return{c(){i&&i.c(),e=hi()},l(r){i&&i.l(r),e=hi()},m(r,s){i&&i.m(r,s),x(r,e,s),n=!0},p(r,s){r[5].length?i?(i.p(r,s),s[0]&32&&C(i,1)):(i=zi(r),i.c(),C(i,1),i.m(e.parentNode,e)):i&&($(),M(i,1,1,()=>{i=null}),ee())},i(r){n||(C(i),n=!0)},o(r){M(i),n=!1},d(r){r&&k(e),i&&i.d(r)}}}const ac="flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none",cc="flex flex-col gap-y-2",lc="flex justify-between items-center pointer-events-auto",uc="flex items-center space-x-2";function dc(t,e,n){let i,r,s,o,a;mt(t,ce,O=>n(5,a=O));let{position:c="b"}=e,{max:l=3}=e,{duration:d=250}=e,{background:u="variant-filled-secondary"}=e,{width:f="max-w-[640px]"}=e,{color:h=""}=e,{padding:g="p-4"}=e,{spacing:_="space-x-4"}=e,{rounded:p="rounded-container-token"}=e,{shadow:m="shadow-lg"}=e,{zIndex:b="z-[888]"}=e,{buttonAction:T="btn variant-filled"}=e,{buttonDismiss:S="btn-icon btn-icon-sm variant-filled"}=e,{buttonDismissLabel:y="✕"}=e,I,E,v={x:0,y:0};switch(c){case"t":I="justify-center items-start",E="items-center",v={x:0,y:-100};break;case"b":I="justify-center items-end",E="items-center",v={x:0,y:100};break;case"l":I="justify-start items-center",E="items-start",v={x:-100,y:0};break;case"r":I="justify-end items-center",E="items-end",v={x:100,y:0};break;case"tl":I="justify-start items-start",E="items-start",v={x:-100,y:0};break;case"tr":I="justify-end items-start",E="items-end",v={x:100,y:0};break;case"bl":I="justify-start items-end",E="items-start",v={x:-100,y:0};break;case"br":I="justify-end items-end",E="items-end",v={x:100,y:0};break}function A(O){var X,nt;(nt=(X=a[O])==null?void 0:X.action)==null||nt.response(),ce.close(a[O].id)}function R(O){var X;(X=a[O])!=null&&X.hoverable&&(ce.freeze(O),n(8,r+=" scale-[105%]"))}function N(O){var X;(X=a[O])!=null&&X.hoverable&&(ce.unfreeze(O),n(8,r=r.replace(" scale-[105%]","")))}const[V,H]=ka({duration:O=>Math.sqrt(O*d),fallback(O){const X=getComputedStyle(O),nt=X.transform==="none"?"":X.transform;return{duration:d,easing:Lo,css:(Pt,ft)=>`
					transform: ${nt} scale(${Pt}) translate(${ft*v.x}%, ${ft*v.y}%);
					opacity: ${Pt}
				`}}}),q=O=>A(O),z=O=>ce.close(O.id),G=O=>R(O),tt=O=>N(O);return t.$$set=O=>{n(31,e=ae(ae({},e),Fe(O))),"position"in O&&n(15,c=O.position),"max"in O&&n(16,l=O.max),"duration"in O&&n(0,d=O.duration),"background"in O&&n(1,u=O.background),"width"in O&&n(17,f=O.width),"color"in O&&n(18,h=O.color),"padding"in O&&n(19,g=O.padding),"spacing"in O&&n(20,_=O.spacing),"rounded"in O&&n(21,p=O.rounded),"shadow"in O&&n(22,m=O.shadow),"zIndex"in O&&n(23,b=O.zIndex),"buttonAction"in O&&n(2,T=O.buttonAction),"buttonDismiss"in O&&n(3,S=O.buttonDismiss),"buttonDismissLabel"in O&&n(4,y=O.buttonDismissLabel)},t.$$.update=()=>{n(9,i=`${ac} ${I} ${b} ${e.class||""}`),t.$$.dirty[0]&34078720&&n(8,r=`${cc} ${E} ${g}`),t.$$.dirty[0]&8257536&&n(7,s=`${lc} ${f} ${h} ${g} ${_} ${p} ${m}`),t.$$.dirty[0]&65568&&n(6,o=Array.from(a).slice(0,l))},e=Fe(e),[d,u,T,S,y,a,o,s,r,i,A,R,N,V,H,c,l,f,h,g,_,p,m,b,I,E,q,z,G,tt]}class fc extends He{constructor(e){super(),je(this,e,dc,oc,Ve,{position:15,max:16,duration:0,background:1,width:17,color:18,padding:19,spacing:20,rounded:21,shadow:22,zIndex:23,buttonAction:2,buttonDismiss:3,buttonDismissLabel:4},null,[-1,-1])}}const hc=""+new URL("../assets/vpsLogo.a05dfbbc.png",import.meta.url).href;/**
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
 */const Qr=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},pc=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,h=l&63;c||(h=64,o||(f=64)),i.push(n[d],n[u],n[f],n[h])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const u=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||l==null||u==null)throw new mc;const f=s<<2|a>>4;if(i.push(f),l!==64){const h=a<<4&240|l>>2;if(i.push(h),u!==64){const g=l<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gc=function(t){const e=Qr(t);return Zr.encodeByteArray(e,!0)},$r=function(t){return gc(t).replace(/\./g,"")},es=function(t){try{return Zr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _c(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bc=()=>_c().__FIREBASE_DEFAULTS__,vc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yc=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&es(t[1]);return e&&JSON.parse(e)},zn=()=>{try{return bc()||vc()||yc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wc=t=>{var e,n;return(n=(e=zn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ts=()=>{var t;return(t=zn())===null||t===void 0?void 0:t.config},ns=t=>{var e;return(e=zn())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ic{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function K(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ec(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function is(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kc(){const t=K();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rs(){try{return typeof indexedDB=="object"}catch{return!1}}function ss(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Sc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ac="FirebaseError";class ye extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Ac,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,et.prototype.create)}}class et{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Rc(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ye(r,a,i)}}function Rc(t,e){return t.replace(Cc,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Cc=/\{\$([^}]+)}/g;function Oc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Yi(s)&&Yi(o)){if(!bt(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Yi(t){return t!==null&&typeof t=="object"}/**
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
 */function kt(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Dc(t,e){const n=new Pc(t,e);return n.subscribe.bind(n)}class Pc{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Lc(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=fn),r.error===void 0&&(r.error=fn),r.complete===void 0&&(r.complete=fn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lc(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fn(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=1e3,Mc=2,Uc=4*60*60*1e3,Fc=.5;function Xi(t,e=Nc,n=Mc){const i=e*Math.pow(n,t),r=Math.round(Fc*i*(Math.random()-.5)*2);return Math.min(Uc,i+r)}/**
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
 */function Re(t){return t&&t._delegate?t._delegate:t}class be{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ic;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vc(e))try{this.getOrInitializeService({instanceIdentifier:We})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=We){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=We){return this.instances.has(e)}getOptions(e=We){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Bc(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=We){return this.component?this.component.multipleInstances?e:We:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bc(t){return t===We?void 0:t}function Vc(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const jc={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Wc=B.INFO,zc={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},qc=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=zc[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qn{constructor(e){this.name=e,this._logLevel=Wc,this._logHandler=qc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Gc=(t,e)=>e.some(n=>t instanceof n);let Qi,Zi;function Kc(){return Qi||(Qi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jc(){return Zi||(Zi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const os=new WeakMap,An=new WeakMap,as=new WeakMap,hn=new WeakMap,Gn=new WeakMap;function Yc(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ne(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&os.set(n,t)}).catch(()=>{}),Gn.set(e,t),e}function Xc(t){if(An.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});An.set(t,e)}let Rn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return An.get(t);if(e==="objectStoreNames")return t.objectStoreNames||as.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ne(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qc(t){Rn=t(Rn)}function Zc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(pn(this),e,...n);return as.set(i,e.sort?e.sort():[e]),Ne(i)}:Jc().includes(t)?function(...e){return t.apply(pn(this),e),Ne(os.get(this))}:function(...e){return Ne(t.apply(pn(this),e))}}function $c(t){return typeof t=="function"?Zc(t):(t instanceof IDBTransaction&&Xc(t),Gc(t,Kc())?new Proxy(t,Rn):t)}function Ne(t){if(t instanceof IDBRequest)return Yc(t);if(hn.has(t))return hn.get(t);const e=$c(t);return e!==t&&(hn.set(t,e),Gn.set(e,t)),e}const pn=t=>Gn.get(t);function el(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Ne(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Ne(o.result),c.oldVersion,c.newVersion,Ne(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const tl=["get","getKey","getAll","getAllKeys","count"],nl=["put","add","delete","clear"],mn=new Map;function $i(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mn.get(e))return mn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=nl.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||tl.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return mn.set(e,s),s}Qc(t=>({...t,get:(e,n,i)=>$i(e,n)||t.get(e,n,i),has:(e,n)=>!!$i(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rl(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function rl(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cn="@firebase/app",er="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new qn("@firebase/app"),sl="@firebase/app-compat",ol="@firebase/analytics-compat",al="@firebase/analytics",cl="@firebase/app-check-compat",ll="@firebase/app-check",ul="@firebase/auth",dl="@firebase/auth-compat",fl="@firebase/database",hl="@firebase/database-compat",pl="@firebase/functions",ml="@firebase/functions-compat",gl="@firebase/installations",_l="@firebase/installations-compat",bl="@firebase/messaging",vl="@firebase/messaging-compat",yl="@firebase/performance",wl="@firebase/performance-compat",Il="@firebase/remote-config",El="@firebase/remote-config-compat",Tl="@firebase/storage",kl="@firebase/storage-compat",Sl="@firebase/firestore",Al="@firebase/firestore-compat",Rl="firebase",Cl="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="[DEFAULT]",Ol={[Cn]:"fire-core",[sl]:"fire-core-compat",[al]:"fire-analytics",[ol]:"fire-analytics-compat",[ll]:"fire-app-check",[cl]:"fire-app-check-compat",[ul]:"fire-auth",[dl]:"fire-auth-compat",[fl]:"fire-rtdb",[hl]:"fire-rtdb-compat",[pl]:"fire-fn",[ml]:"fire-fn-compat",[gl]:"fire-iid",[_l]:"fire-iid-compat",[bl]:"fire-fcm",[vl]:"fire-fcm-compat",[yl]:"fire-perf",[wl]:"fire-perf-compat",[Il]:"fire-rc",[El]:"fire-rc-compat",[Tl]:"fire-gcs",[kl]:"fire-gcs-compat",[Sl]:"fire-fst",[Al]:"fire-fst-compat","fire-js":"fire-js",[Rl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Map,Dn=new Map;function Dl(t,e){try{t.container.addComponent(e)}catch(n){Xe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ke(t){const e=t.name;if(Dn.has(e))return Xe.debug(`There were multiple attempts to register component ${e}.`),!1;Dn.set(e,t);for(const n of zt.values())Dl(n,t);return!0}function dt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Me=new et("app","Firebase",Pl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Me.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=Cl;function cs(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:On,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Me.create("bad-app-name",{appName:String(r)});if(n||(n=ts()),!n)throw Me.create("no-options");const s=zt.get(r);if(s){if(bt(n,s.options)&&bt(i,s.config))return s;throw Me.create("duplicate-app",{appName:r})}const o=new Hc(r);for(const c of Dn.values())o.addComponent(c);const a=new Ll(n,i,o);return zt.set(r,a),a}function ls(t=On){const e=zt.get(t);if(!e&&t===On&&ts())return cs();if(!e)throw Me.create("no-app",{appName:t});return e}function pe(t,e,n){var i;let r=(i=Ol[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xe.warn(a.join(" "));return}ke(new be(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Nl="firebase-heartbeat-database",Ml=1,vt="firebase-heartbeat-store";let gn=null;function us(){return gn||(gn=el(Nl,Ml,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vt)}}}).catch(t=>{throw Me.create("idb-open",{originalErrorMessage:t.message})})),gn}async function Ul(t){try{return await(await us()).transaction(vt).objectStore(vt).get(ds(t))}catch(e){if(e instanceof ye)Xe.warn(e.message);else{const n=Me.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xe.warn(n.message)}}}async function tr(t,e){try{const i=(await us()).transaction(vt,"readwrite");await i.objectStore(vt).put(e,ds(t)),await i.done}catch(n){if(n instanceof ye)Xe.warn(n.message);else{const i=Me.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xe.warn(i.message)}}}function ds(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Fl=1024,xl=30*24*60*60*1e3;class Bl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hl(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=nr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=xl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nr(),{heartbeatsToSend:n,unsentEntries:i}=Vl(this._heartbeatsCache.heartbeats),r=$r(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function nr(){return new Date().toISOString().substring(0,10)}function Vl(t,e=Fl){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),ir(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ir(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Hl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rs()?ss().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ul(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return tr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return tr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ir(t){return $r(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t){ke(new be("platform-logger",e=>new il(e),"PRIVATE")),ke(new be("heartbeat",e=>new Bl(e),"PRIVATE")),pe(Cn,er,t),pe(Cn,er,"esm2017"),pe("fire-js","")}jl("");var Wl="firebase",zl="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe(Wl,zl,"app");const ql=(t,e)=>e.some(n=>t instanceof n);let rr,sr;function Gl(){return rr||(rr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kl(){return sr||(sr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fs=new WeakMap,Pn=new WeakMap,hs=new WeakMap,_n=new WeakMap,Kn=new WeakMap;function Jl(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ue(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fs.set(n,t)}).catch(()=>{}),Kn.set(e,t),e}function Yl(t){if(Pn.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Pn.set(t,e)}let Ln={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hs.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ue(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xl(t){Ln=t(Ln)}function Ql(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(bn(this),e,...n);return hs.set(i,e.sort?e.sort():[e]),Ue(i)}:Kl().includes(t)?function(...e){return t.apply(bn(this),e),Ue(fs.get(this))}:function(...e){return Ue(t.apply(bn(this),e))}}function Zl(t){return typeof t=="function"?Ql(t):(t instanceof IDBTransaction&&Yl(t),ql(t,Gl())?new Proxy(t,Ln):t)}function Ue(t){if(t instanceof IDBRequest)return Jl(t);if(_n.has(t))return _n.get(t);const e=Zl(t);return e!==t&&(_n.set(t,e),Kn.set(e,t)),e}const bn=t=>Kn.get(t);function $l(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Ue(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Ue(o.result),c.oldVersion,c.newVersion,Ue(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const eu=["get","getKey","getAll","getAllKeys","count"],tu=["put","add","delete","clear"],vn=new Map;function or(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vn.get(e))return vn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=tu.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||eu.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return vn.set(e,s),s}Xl(t=>({...t,get:(e,n,i)=>or(e,n)||t.get(e,n,i),has:(e,n)=>!!or(e,n)||t.has(e,n)}));const ps="@firebase/installations",Jn="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=1e4,gs=`w:${Jn}`,_s="FIS_v2",nu="https://firebaseinstallations.googleapis.com/v1",iu=60*60*1e3,ru="installations",su="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qe=new et(ru,su,ou);function bs(t){return t instanceof ye&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs({projectId:t}){return`${nu}/projects/${t}/installations`}function ys(t){return{token:t.token,requestStatus:2,expiresIn:cu(t.expiresIn),creationTime:Date.now()}}async function ws(t,e){const i=(await e.json()).error;return Qe.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Is({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function au(t,{refreshToken:e}){const n=Is(t);return n.append("Authorization",lu(e)),n}async function Es(t){const e=await t();return e.status>=500&&e.status<600?t():e}function cu(t){return Number(t.replace("s","000"))}function lu(t){return`${_s} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=vs(t),r=Is(t),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:_s,appId:t.appId,sdkVersion:gs},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Es(()=>fetch(i,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:ys(l.authToken)}}else throw await ws("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=/^[cdef][\w-]{21}$/,Nn="";function hu(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=pu(t);return fu.test(n)?n:Nn}catch{return Nn}}function pu(t){return du(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Map;function Ss(t,e){const n=sn(t);As(n,e),mu(n,e)}function As(t,e){const n=ks.get(t);if(n)for(const i of n)i(e)}function mu(t,e){const n=gu();n&&n.postMessage({key:t,fid:e}),_u()}let ze=null;function gu(){return!ze&&"BroadcastChannel"in self&&(ze=new BroadcastChannel("[Firebase] FID Change"),ze.onmessage=t=>{As(t.data.key,t.data.fid)}),ze}function _u(){ks.size===0&&ze&&(ze.close(),ze=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="firebase-installations-database",vu=1,Ze="firebase-installations-store";let yn=null;function Yn(){return yn||(yn=$l(bu,vu,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ze)}}})),yn}async function qt(t,e){const n=sn(t),r=(await Yn()).transaction(Ze,"readwrite"),s=r.objectStore(Ze),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Ss(t,e.fid),e}async function Rs(t){const e=sn(t),i=(await Yn()).transaction(Ze,"readwrite");await i.objectStore(Ze).delete(e),await i.done}async function on(t,e){const n=sn(t),r=(await Yn()).transaction(Ze,"readwrite"),s=r.objectStore(Ze),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&Ss(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(t){let e;const n=await on(t.appConfig,i=>{const r=yu(i),s=wu(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===Nn?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function yu(t){const e=t||{fid:hu(),registrationStatus:0};return Cs(e)}function wu(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Qe.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Iu(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Eu(t)}:{installationEntry:e}}async function Iu(t,e){try{const n=await uu(t,e);return qt(t.appConfig,n)}catch(n){throw bs(n)&&n.customData.serverCode===409?await Rs(t.appConfig):await qt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Eu(t){let e=await ar(t.appConfig);for(;e.registrationStatus===1;)await Ts(100),e=await ar(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Xn(t);return i||n}return e}function ar(t){return on(t,e=>{if(!e)throw Qe.create("installation-not-found");return Cs(e)})}function Cs(t){return Tu(t)?{fid:t.fid,registrationStatus:0}:t}function Tu(t){return t.registrationStatus===1&&t.registrationTime+ms<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ku({appConfig:t,heartbeatServiceProvider:e},n){const i=Su(t,n),r=au(t,n),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:gs,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Es(()=>fetch(i,a));if(c.ok){const l=await c.json();return ys(l)}else throw await ws("Generate Auth Token",c)}function Su(t,{fid:e}){return`${vs(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(t,e=!1){let n;const i=await on(t.appConfig,s=>{if(!Os(s))throw Qe.create("not-registered");const o=s.authToken;if(!e&&Cu(o))return s;if(o.requestStatus===1)return n=Au(t,e),s;{if(!navigator.onLine)throw Qe.create("app-offline");const a=Du(s);return n=Ru(t,a),a}});return n?await n:i.authToken}async function Au(t,e){let n=await cr(t.appConfig);for(;n.authToken.requestStatus===1;)await Ts(100),n=await cr(t.appConfig);const i=n.authToken;return i.requestStatus===0?Qn(t,e):i}function cr(t){return on(t,e=>{if(!Os(e))throw Qe.create("not-registered");const n=e.authToken;return Pu(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ru(t,e){try{const n=await ku(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await qt(t.appConfig,i),n}catch(n){if(bs(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Rs(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await qt(t.appConfig,i)}throw n}}function Os(t){return t!==void 0&&t.registrationStatus===2}function Cu(t){return t.requestStatus===2&&!Ou(t)}function Ou(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+iu}function Du(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Pu(t){return t.requestStatus===1&&t.requestTime+ms<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lu(t){const e=t,{installationEntry:n,registrationPromise:i}=await Xn(e);return i?i.catch(console.error):Qn(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nu(t,e=!1){const n=t;return await Mu(n),(await Qn(n,e)).token}async function Mu(t){const{registrationPromise:e}=await Xn(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t){if(!t||!t.options)throw wn("App Configuration");if(!t.name)throw wn("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wn(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wn(t){return Qe.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="installations",Fu="installations-internal",xu=t=>{const e=t.getProvider("app").getImmediate(),n=Uu(e),i=dt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Bu=t=>{const e=t.getProvider("app").getImmediate(),n=dt(e,Ds).getImmediate();return{getId:()=>Lu(n),getToken:r=>Nu(n,r)}};function Vu(){ke(new be(Ds,xu,"PUBLIC")),ke(new be(Fu,Bu,"PRIVATE"))}Vu();pe(ps,Jn);pe(ps,Jn,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="analytics",Hu="firebase_id",ju="origin",Wu=60*1e3,zu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zn="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=new qn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Z=new et("analytics","Analytics",qu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){if(!t.startsWith(Zn)){const e=Z.create("invalid-gtag-resource",{gtagURL:t});return Y.warn(e.message),""}return t}function Ps(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Ku(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Ju(t,e){const n=Ku("firebase-js-sdk-policy",{createScriptURL:Gu}),i=document.createElement("script"),r=`${Zn}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function Yu(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Xu(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const c=(await Ps(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){Y.error(a)}t("config",r,s)}async function Qu(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await Ps(n);for(const c of o){const l=a.find(u=>u.measurementId===c),d=l&&e[l.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(s){Y.error(s)}}function Zu(t,e,n,i){async function r(s,...o){try{if(s==="event"){const[a,c]=o;await Qu(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await Xu(t,e,n,i,a,c)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Y.error(a)}}return r}function $u(t,e,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=Zu(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}function ed(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Zn)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=30,nd=1e3;class id{constructor(e={},n=nd){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ls=new id;function rd(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function sd(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:rd(i)},s=zu.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Z.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function od(t,e=Ls,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw Z.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Z.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ld;return setTimeout(async()=>{a.abort()},n!==void 0?n:Wu),Ns({appId:i,apiKey:r,measurementId:s},o,a,e)}async function Ns(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=Ls){var s;const{appId:o,measurementId:a}=t;try{await ad(i,e)}catch(c){if(a)return Y.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await sd(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!cd(l)){if(r.deleteThrottleMetadata(o),a)return Y.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const d=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?Xi(n,r.intervalMillis,td):Xi(n,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return r.setThrottleMetadata(o,u),Y.debug(`Calling attemptFetch again in ${d} millis`),Ns(t,u,i,r)}}function ad(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(s),i(Z.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function cd(t){if(!(t instanceof ye)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ld{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ud(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dd(){if(rs())try{await ss()}catch(t){return Y.warn(Z.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Y.warn(Z.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fd(t,e,n,i,r,s,o){var a;const c=od(t);c.then(h=>{n[h.measurementId]=h.appId,t.options.measurementId&&h.measurementId!==t.options.measurementId&&Y.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>Y.error(h)),e.push(c);const l=dd().then(h=>{if(h)return i.getId()}),[d,u]=await Promise.all([c,l]);ed(s)||Ju(s,d.measurementId),r("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[ju]="firebase",f.update=!0,u!=null&&(f[Hu]=u),r("config",d.measurementId,f),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.app=e}_delete(){return delete gt[this.app.options.appId],Promise.resolve()}}let gt={},lr=[];const ur={};let In="dataLayer",pd="gtag",dr,Ms,fr=!1;function md(){const t=[];if(is()&&t.push("This is a browser extension environment."),Sc()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=Z.create("invalid-analytics-context",{errorInfo:e});Y.warn(n.message)}}function gd(t,e,n){md();const i=t.options.appId;if(!i)throw Z.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Y.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Z.create("no-api-key");if(gt[i]!=null)throw Z.create("already-exists",{id:i});if(!fr){Yu(In);const{wrappedGtag:s,gtagCore:o}=$u(gt,lr,ur,In,pd);Ms=s,dr=o,fr=!0}return gt[i]=fd(t,lr,ur,e,dr,In,n),new hd(t)}function _d(t=ls()){t=Re(t);const e=dt(t,Gt);return e.isInitialized()?e.getImmediate():bd(t)}function bd(t,e={}){const n=dt(t,Gt);if(n.isInitialized()){const r=n.getImmediate();if(bt(e,n.getOptions()))return r;throw Z.create("already-initialized")}return n.initialize({options:e})}function vd(t,e,n,i){t=Re(t),ud(Ms,gt[t.app.options.appId],e,n,i).catch(r=>Y.error(r))}const hr="@firebase/analytics",pr="0.10.0";function yd(){ke(new be(Gt,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return gd(i,r,n)},"PUBLIC")),ke(new be("analytics-internal",t,"PRIVATE")),pe(hr,pr),pe(hr,pr,"esm2017");function t(e){try{const n=e.getProvider(Gt).getImmediate();return{logEvent:(i,r,s)=>vd(n,i,r,s)}}catch(n){throw Z.create("interop-component-reg-failed",{reason:n})}}}yd();function $n(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Us(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wd=Us,Fs=new et("auth","Firebase",Us());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new qn("@firebase/auth");function Id(t,...e){Kt.logLevel<=B.WARN&&Kt.warn(`Auth (${St}): ${t}`,...e)}function Ut(t,...e){Kt.logLevel<=B.ERROR&&Kt.error(`Auth (${St}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t,...e){throw ei(t,...e)}function me(t,...e){return ei(t,...e)}function xs(t,e,n){const i=Object.assign(Object.assign({},wd()),{[e]:n});return new et("auth","Firebase",i).create(e,{appName:t.name})}function Ed(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ve(t,"argument-error"),xs(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ei(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Fs.create(t,...e)}function U(t,e,...n){if(!t)throw ei(e,...n)}function Ie(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ut(e),new Error(e)}function Se(t,e){t||Ie(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Td(){return mr()==="http:"||mr()==="https:"}function mr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Td()||is()||"connection"in navigator)?navigator.onLine:!0}function Sd(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){this.shortDelay=e,this.longDelay=n,Se(n>e,"Short delay should be less than long delay!"),this.isMobile=Ec()||Tc()}get(){return kd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t,e){Se(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ie("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ie("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ie("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=new At(3e4,6e4);function Vs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rt(t,e,n,i,r={}){return Hs(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=kt(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Bs.fetch()(js(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Hs(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ad),e);try{const r=new Od(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Nt(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nt(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Nt(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Nt(t,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw xs(t,d,l);ve(t,d)}}catch(r){if(r instanceof ye)throw r;ve(t,"network-request-failed",{message:String(r)})}}async function Cd(t,e,n,i,r={}){const s=await Rt(t,e,n,i,r);return"mfaPendingCredential"in s&&ve(t,"multi-factor-auth-required",{_serverResponse:s}),s}function js(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?ti(t.config,r):`${t.config.apiScheme}://${r}`}class Od{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(me(this.auth,"network-request-failed")),Rd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nt(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=me(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dd(t,e){return Rt(t,"POST","/v1/accounts:delete",e)}async function Pd(t,e){return Rt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ld(t,e=!1){const n=Re(t),i=await n.getIdToken(e),r=ni(i);U(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:_t(En(r.auth_time)),issuedAtTime:_t(En(r.iat)),expirationTime:_t(En(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function En(t){return Number(t)*1e3}function ni(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ut("JWT malformed, contained fewer than 3 sections"),null;try{const r=es(n);return r?JSON.parse(r):(Ut("Failed to decode base64 JWT payload"),null)}catch(r){return Ut("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Nd(t){const e=ni(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ye&&Md(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Md({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_t(this.lastLoginAt),this.creationTime=_t(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(t){var e;const n=t.auth,i=await t.getIdToken(),r=await yt(t,Pd(n,{idToken:i}));U(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Bd(s.providerUserInfo):[],a=xd(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ws(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function Fd(t){const e=Re(t);await Jt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xd(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Bd(t){return t.map(e=>{var{providerId:n}=e,i=$n(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vd(t,e){const n=await Hs(t,{},async()=>{const i=kt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=js(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bs.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Vd(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new wt;return i&&(U(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(U(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wt,this.toJSON())}_performRefresh(){return Ie("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ke{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=$n(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ud(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ws(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await yt(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ld(this,e)}reload(){return Fd(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ke(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Jt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yt(this,Dd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,l,d;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,m=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:S,isAnonymous:y,providerData:I,stsTokenManager:E}=n;U(T&&E,e,"internal-error");const v=wt.fromJSON(this.name,E);U(typeof T=="string",e,"internal-error"),Oe(u,e.name),Oe(f,e.name),U(typeof S=="boolean",e,"internal-error"),U(typeof y=="boolean",e,"internal-error"),Oe(h,e.name),Oe(g,e.name),Oe(_,e.name),Oe(p,e.name),Oe(m,e.name),Oe(b,e.name);const A=new Ke({uid:T,auth:e,email:f,emailVerified:S,displayName:u,isAnonymous:y,photoURL:g,phoneNumber:h,tenantId:_,stsTokenManager:v,createdAt:m,lastLoginAt:b});return I&&Array.isArray(I)&&(A.providerData=I.map(R=>Object.assign({},R))),p&&(A._redirectEventId=p),A}static async _fromIdTokenResponse(e,n,i=!1){const r=new wt;r.updateFromServerResponse(n);const s=new Ke({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Jt(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Map;function Ee(t){Se(t instanceof Function,"Expected a class definition");let e=gr.get(t);return e?(Se(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gr.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zs.type="NONE";const _r=zs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e,n){return`firebase:${t}:${e}:${n}`}class rt{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Ft(this.userKey,r.apiKey,s),this.fullPersistenceKey=Ft("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ke._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new rt(Ee(_r),e,i);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||Ee(_r);const o=Ft(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const d=await l._get(o);if(d){const u=Ke._fromJSON(e,d);l!==s&&(a=u),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new rt(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new rt(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ks(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qs(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ys(e))return"Blackberry";if(Xs(e))return"Webos";if(ii(e))return"Safari";if((e.includes("chrome/")||Gs(e))&&!e.includes("edge/"))return"Chrome";if(Js(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function qs(t=K()){return/firefox\//i.test(t)}function ii(t=K()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gs(t=K()){return/crios\//i.test(t)}function Ks(t=K()){return/iemobile/i.test(t)}function Js(t=K()){return/android/i.test(t)}function Ys(t=K()){return/blackberry/i.test(t)}function Xs(t=K()){return/webos/i.test(t)}function an(t=K()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Hd(t=K()){var e;return an(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jd(){return kc()&&document.documentMode===10}function Qs(t=K()){return an(t)||Js(t)||Xs(t)||Ys(t)||/windows phone/i.test(t)||Ks(t)}function Wd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t,e=[]){let n;switch(t){case"Browser":n=br(K());break;case"Worker":n=`${br(K())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${St}/${i}`}async function $s(t,e){return Rt(t,"GET","/v2/recaptchaConfig",Vs(t,e))}function vr(t){return t!==void 0&&t.enterprise!==void 0}class eo{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function to(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=me("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",zd().appendChild(i)})}function qd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Gd="https://www.google.com/recaptcha/enterprise.js?render=",Kd="recaptcha-enterprise",Jd="NO_RECAPTCHA";class Yd{constructor(e){this.type=Kd,this.auth=Ct(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{$s(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new eo(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;vr(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Jd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&vr(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}to(Gd+a).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class Xd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yr(this),this.idTokenSubscription=new yr(this),this.beforeStateQueue=new Xd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ee(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await rt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Re(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(e))})}async initializeRecaptchaConfig(){const e=await $s(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new eo(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Yd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new et("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ee(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await rt.create(this,[Ee(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Id(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ct(t){return Re(t)}class yr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dc(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t,e){const n=dt(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(bt(s,e??{}))return r;ve(r,"already-initialized")}return n.initialize({options:e})}function $d(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ee);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function ef(t,e,n){const i=Ct(t);U(i._canInitEmulator,i,"emulator-config-failed"),U(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=no(e),{host:o,port:a}=tf(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||nf()}function no(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tf(t){const e=no(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:wr(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:wr(o)}}}function wr(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nf(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ie("not implemented")}_getIdTokenResponse(e){return Ie("not implemented")}_linkToIdToken(e,n){return Ie("not implemented")}_getReauthenticationResolver(e){return Ie("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(t,e){return Cd(t,"POST","/v1/accounts:signInWithIdp",Vs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="http://localhost";class $e extends io{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $e(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=$n(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new $e(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return st(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,st(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,st(e,n)}buildRequest(){const e={requestUri:rf,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=kt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends ri{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Ot{constructor(){super("facebook.com")}static credential(e){return $e._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com";De.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Ot{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $e._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Pe.credential(n,i)}catch{return null}}}Pe.GOOGLE_SIGN_IN_METHOD="google.com";Pe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le extends Ot{constructor(){super("github.com")}static credential(e){return $e._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return le.credentialFromTaggedObject(e)}static credentialFromError(e){return le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return le.credential(e.oauthAccessToken)}catch{return null}}}le.GITHUB_SIGN_IN_METHOD="github.com";le.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Ot{constructor(){super("twitter.com")}static credential(e,n){return $e._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Le.credential(n,i)}catch{return null}}}Le.TWITTER_SIGN_IN_METHOD="twitter.com";Le.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Ke._fromIdTokenResponse(e,i,r),o=Ir(i);return new ct({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Ir(i);return new ct({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Ir(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends ye{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Yt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Yt(e,n,i,r)}}function ro(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yt._fromErrorAndOperation(t,s,e,i):s})}async function sf(t,e,n=!1){const i=await yt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ct._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function of(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await yt(t,ro(i,r,e,t),n);U(s.idToken,i,"internal-error");const o=ni(s.idToken);U(o,i,"internal-error");const{sub:a}=o;return U(t.uid===a,i,"user-mismatch"),ct._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ve(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function af(t,e,n=!1){const i="signIn",r=await ro(t,i,e),s=await ct._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}function cf(t,e,n,i){return Re(t).onIdTokenChanged(e,n,i)}function lf(t,e,n){return Re(t).beforeAuthStateChanged(e,n)}function uf(t){return Re(t).signOut()}const Xt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xt,"1"),this.storage.removeItem(Xt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(){const t=K();return ii(t)||an(t)}const ff=1e3,hf=10;class oo extends so{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=df()&&Wd(),this.fallbackToPolling=Qs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);jd()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,hf):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},ff)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oo.type="LOCAL";const pf=oo;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends so{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ao.type="SESSION";const co=ao;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new cn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await mf(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=si("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(u){const f=u;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return window}function _f(t){ge().location.href=t}/**
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
 */function lo(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function bf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vf(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yf(){return lo()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="firebaseLocalStorageDb",wf=1,Qt="firebaseLocalStorage",fo="fbase_key";class Dt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ln(t,e){return t.transaction([Qt],e?"readwrite":"readonly").objectStore(Qt)}function If(){const t=indexedDB.deleteDatabase(uo);return new Dt(t).toPromise()}function Un(){const t=indexedDB.open(uo,wf);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Qt,{keyPath:fo})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Qt)?e(i):(i.close(),await If(),e(await Un()))})})}async function Er(t,e,n){const i=ln(t,!0).put({[fo]:e,value:n});return new Dt(i).toPromise()}async function Ef(t,e){const n=ln(t,!1).get(e),i=await new Dt(n).toPromise();return i===void 0?null:i.value}function Tr(t,e){const n=ln(t,!0).delete(e);return new Dt(n).toPromise()}const Tf=800,kf=3;class ho{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Un(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>kf)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cn._getInstance(yf()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bf(),!this.activeServiceWorker)return;this.sender=new gf(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Un();return await Er(e,Xt,"1"),await Tr(e,Xt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Er(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Ef(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ln(r,!1).getAll();return new Dt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ho.type="LOCAL";const Sf=ho;new At(3e4,6e4);/**
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
 */function po(t,e){return e?Ee(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends io{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return st(e,this._buildIdpRequest())}_linkToIdToken(e,n){return st(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return st(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Af(t){return af(t.auth,new oi(t),t.bypassAuthState)}function Rf(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),of(n,new oi(t),t.bypassAuthState)}async function Cf(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),sf(n,new oi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Af;case"linkViaPopup":case"linkViaRedirect":return Cf;case"reauthViaPopup":case"reauthViaRedirect":return Rf;default:ve(this.auth,"internal-error")}}resolve(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=new At(2e3,1e4);async function Df(t,e,n){const i=Ct(t);Ed(t,e,ri);const r=po(i,n);return new qe(i,"signInViaPopup",e,r).executeNotNull()}class qe extends mo{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,qe.currentPopupAction&&qe.currentPopupAction.cancel(),qe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const e=si();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Of.get())};e()}}qe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="pendingRedirect",xt=new Map;class Lf extends mo{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=xt.get(this.auth._key());if(!e){try{const i=await Nf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}xt.set(this.auth._key(),e)}return this.bypassAuthState||xt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nf(t,e){const n=Ff(e),i=Uf(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Mf(t,e){xt.set(t._key(),e)}function Uf(t){return Ee(t._redirectPersistence)}function Ff(t){return Ft(Pf,t.config.apiKey,t.name)}async function xf(t,e,n=!1){const i=Ct(t),r=po(i,e),o=await new Lf(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=10*60*1e3;class Vf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!go(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(me(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bf&&this.cachedEventUids.clear(),this.cachedEventUids.has(kr(e))}saveEventToCache(e){this.cachedEventUids.add(kr(e)),this.lastProcessedEventTime=Date.now()}}function kr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function go({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return go(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jf(t,e={}){return Rt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zf=/^https?/;async function qf(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jf(t);for(const n of e)try{if(Gf(n))return}catch{}ve(t,"unauthorized-domain")}function Gf(t){const e=Mn(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!zf.test(n))return!1;if(Wf.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Kf=new At(3e4,6e4);function Sr(){const t=ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Jf(t){return new Promise((e,n)=>{var i,r,s;function o(){Sr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sr(),n(me(t,"network-request-failed"))},timeout:Kf.get()})}if(!((r=(i=ge().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=ge().gapi)===null||s===void 0)&&s.load)o();else{const a=qd("iframefcb");return ge()[a]=()=>{gapi.load?o():n(me(t,"network-request-failed"))},to(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Bt=null,e})}let Bt=null;function Yf(t){return Bt=Bt||Jf(t),Bt}/**
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
 */const Xf=new At(5e3,15e3),Qf="__/auth/iframe",Zf="emulator/auth/iframe",$f={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function th(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ti(e,Zf):`https://${t.config.authDomain}/${Qf}`,i={apiKey:e.apiKey,appName:t.name,v:St},r=eh.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${kt(i).slice(1)}`}async function nh(t){const e=await Yf(t),n=ge().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:th(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$f,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=me(t,"network-request-failed"),a=ge().setTimeout(()=>{s(o)},Xf.get());function c(){ge().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const ih={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rh=500,sh=600,oh="_blank",ah="http://localhost";class Ar{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ch(t,e,n,i=rh,r=sh){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ih),{width:i.toString(),height:r.toString(),top:s,left:o}),l=K().toLowerCase();n&&(a=Gs(l)?oh:n),qs(l)&&(e=e||ah,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[h,g])=>`${f}${h}=${g},`,"");if(Hd(l)&&a!=="_self")return lh(e||"",a),new Ar(null);const u=window.open(e||"",a,d);U(u,t,"popup-blocked");try{u.focus()}catch{}return new Ar(u)}function lh(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const uh="__/auth/handler",dh="emulator/auth/handler",fh=encodeURIComponent("fac");async function Rr(t,e,n,i,r,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:St,eventId:r};if(e instanceof ri){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Oc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries(s||{}))o[d]=u}if(e instanceof Ot){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await t._getAppCheckToken(),l=c?`#${fh}=${encodeURIComponent(c)}`:"";return`${hh(t)}?${kt(a).slice(1)}${l}`}function hh({config:t}){return t.emulator?ti(t,dh):`https://${t.authDomain}/${uh}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="webStorageSupport";class ph{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=co,this._completeRedirectFn=xf,this._overrideRedirectResult=Mf}async _openPopup(e,n,i,r){var s;Se((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Rr(e,n,i,Mn(),r);return ch(e,o,si())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Rr(e,n,i,Mn(),r);return _f(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Se(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await nh(e),i=new Vf(e);return n.register("authEvent",r=>(U(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tn,{type:Tn},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Tn];o!==void 0&&n(!!o),ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qf(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qs()||ii()||an()}}const mh=ph;var Cr="@firebase/auth",Or="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bh(t){ke(new be("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zs(t)},l=new Qd(i,r,s,c);return $d(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ke(new be("auth-internal",e=>{const n=Ct(e.getProvider("auth").getImmediate());return(i=>new gh(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pe(Cr,Or,_h(t)),pe(Cr,Or,"esm2017")}/**
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
 */const vh=5*60,yh=ns("authIdTokenMaxAge")||vh;let Dr=null;const wh=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>yh)return;const r=n==null?void 0:n.token;Dr!==r&&(Dr=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ih(t=ls()){const e=dt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Zd(t,{popupRedirectResolver:mh,persistence:[Sf,pf,co]}),i=ns("authTokenSyncURL");if(i){const s=wh(i);lf(n,s,()=>s(n.currentUser)),cf(n,o=>s(o))}const r=wc("auth");return r&&ef(n,`http://${r}`),n}bh("Browser");const Eh={apiKey:"AIzaSyAjCRLDHuTkfnKU5TTV6ZZasUXecSvlQOE",authDomain:"virtual-pinball-spreadsh-71a64.firebaseapp.com",projectId:"virtual-pinball-spreadsh-71a64",appId:"1:497322440319:web:8a7f7a2997664a9af7f14a",measurementId:"G-DB48L7QGX0"},_o=cs(Eh);_d(_o);const bo=Ih(_o),Th="VirtualPinballSpreadsheet",kh="vps-db",ai=rn("user",{});let Sh;const Ah=()=>{const t=new le;t.addScope("public_repo"),t.setCustomParameters({allow_signup:"false"}),Df(bo,t).then(async e=>{const n=le.credentialFromResult(e),i=e.user;if(console.log(e),console.log(n),console.log(i),i.displayName=e._tokenResponse.screenName,!(n!=null&&n.accessToken))throw new Error;vo(n.accessToken,i)}).catch(e=>{console.error(e)})},vo=async(t,e)=>{try{const{Octokit:n}=await _i(()=>import("https://esm.sh/octokit"),[],import.meta.url),{createOrUpdateTextFile:i}=await _i(()=>import("https://esm.sh/@octokit/plugin-create-or-update-text-file"),[],import.meta.url),r=n.plugin(i),s=new r({auth:t}),a=(await s.request("GET /repos/{owner}/{repo}/collaborators/{username}/permission",{owner:Th,username:e.displayName,repo:kh})).data.permission;if(!(a==="admin"||a==="write"||location.hostname==="localhost"||location.hostname==="127.0.0.1")){ce.trigger({message:"You don't have permission to edit on VPS.",background:"variant-filled-error"});return}Sh=s,ai.set({user:e,permission:a,token:t}),ce.trigger({message:"Login successfull",background:"variant-filled-success"})}catch(n){console.log(n),ce.trigger({message:"Login was unsuccessfull.",background:"variant-filled-error"})}},Rh=()=>{uf(bo).then(()=>{ai.set({}),ce.trigger({message:"Logout successfull",background:"variant-filled-success"})})},un={login:vo,logout:Rh,triggerLoginPopup:Ah,userStore:ai};function Ch(t){let e,n,i,r,s,o,a,c,l,d="Game",u,f="Table",h,g="B2s",_,p="PuP",m,b="Rom",T,S="Topper",y,I,E,v,A,R;return r=new gi({props:{icon:Uo}}),E=new gi({props:{icon:Fo}}),{c(){e=P("div"),n=P("div"),i=P("div"),ue(r.$$.fragment),s=j(),o=P("input"),a=j(),c=P("select"),l=P("option"),l.textContent=d,u=P("option"),u.textContent=f,h=P("option"),h.textContent=g,_=P("option"),_.textContent=p,m=P("option"),m.textContent=b,T=P("option"),T.textContent=S,y=j(),I=P("button"),ue(E.$$.fragment),this.h()},l(N){e=L(N,"DIV",{class:!0});var V=F(e);n=L(V,"DIV",{class:!0});var H=F(n);i=L(H,"DIV",{});var q=F(i);de(r.$$.fragment,q),q.forEach(k),s=W(H),o=L(H,"INPUT",{type:!0,placeholder:!0}),a=W(H),c=L(H,"SELECT",{class:!0});var z=F(c);l=L(z,"OPTION",{"data-svelte-h":!0}),we(l)!=="svelte-35k5m6"&&(l.textContent=d),u=L(z,"OPTION",{"data-svelte-h":!0}),we(u)!=="svelte-hhy6h9"&&(u.textContent=f),h=L(z,"OPTION",{"data-svelte-h":!0}),we(h)!=="svelte-do8h0h"&&(h.textContent=g),_=L(z,"OPTION",{"data-svelte-h":!0}),we(_)!=="svelte-1rr7aik"&&(_.textContent=p),m=L(z,"OPTION",{"data-svelte-h":!0}),we(m)!=="svelte-1r3vqv5"&&(m.textContent=b),T=L(z,"OPTION",{"data-svelte-h":!0}),we(T)!=="svelte-14t4b3r"&&(T.textContent=S),z.forEach(k),H.forEach(k),y=W(V),I=L(V,"BUTTON",{});var G=F(I);de(E.$$.fragment,G),G.forEach(k),V.forEach(k),this.h()},h(){w(o,"type","search"),w(o,"placeholder","Search..."),l.__value="game",Ce(l,l.__value),u.__value="tableFiles",Ce(u,u.__value),h.__value="b2sFiles",Ce(h,h.__value),_.__value="pupPackFiles",Ce(_,_.__value),m.__value="romFiles",Ce(m,m.__value),T.__value="topperFiles",Ce(T,T.__value),w(c,"class","select"),t[2]===void 0&&Ur(()=>t[8].call(c)),w(n,"class","input-group grid-cols-[auto_1fr_auto] border-none"),w(e,"class","px-4 flex items-center gap-4")},m(N,V){x(N,e,V),D(e,n),D(n,i),fe(r,i,null),D(n,s),D(n,o),Ce(o,t[1]),D(n,a),D(n,c),D(c,l),D(c,u),D(c,h),D(c,_),D(c,m),D(c,T),pi(c,t[2],!0),D(e,y),D(e,I),fe(E,I,null),v=!0,A||(R=[J(o,"input",t[7]),J(c,"change",t[8])],A=!0)},p(N,V){V&2&&o.value!==N[1]&&Ce(o,N[1]),V&4&&pi(c,N[2])},i(N){v||(C(r.$$.fragment,N),C(E.$$.fragment,N),v=!0)},o(N){M(r.$$.fragment,N),M(E.$$.fragment,N),v=!1},d(N){N&&k(e),he(r),he(E),A=!1,Zt(R)}}}function Oh(t){let e,n=`<img src="${hc}" alt="VPS" width="36px" class="ml-4"/>`;return{c(){e=P("a"),e.innerHTML=n,this.h()},l(i){e=L(i,"A",{href:!0,"data-svelte-h":!0}),we(e)!=="svelte-1mikpwk"&&(e.innerHTML=n),this.h()},h(){w(e,"href","/")},m(i,r){x(i,e,r)},p:oe,d(i){i&&k(e)}}}function Dh(t){let e,n,i,r,s=t[0].user.displayName+"",o,a,c,l;return n=new Xr({props:{src:t[0].user.photoURL||"",width:"w-6",rounded:"rounded-full"}}),{c(){e=P("button"),ue(n.$$.fragment),i=j(),r=P("span"),o=lt(s),this.h()},l(d){e=L(d,"BUTTON",{class:!0});var u=F(e);de(n.$$.fragment,u),i=W(u),r=L(u,"SPAN",{});var f=F(r);o=ut(f,s),f.forEach(k),u.forEach(k),this.h()},h(){w(e,"class","space-x-2 flex items-center")},m(d,u){x(d,e,u),fe(n,e,null),D(e,i),D(e,r),D(r,o),a=!0,c||(l=Lr(wa.call(null,e,t[6])),c=!0)},p(d,u){const f={};u&1&&(f.src=d[0].user.photoURL||""),n.$set(f),(!a||u&1)&&s!==(s=d[0].user.displayName+"")&&$t(o,s)},i(d){a||(C(n.$$.fragment,d),a=!0)},o(d){M(n.$$.fragment,d),a=!1},d(d){d&&k(e),he(n),c=!1,l()}}}function Ph(t){let e,n="Login",i,r;return{c(){e=P("button"),e.textContent=n,this.h()},l(s){e=L(s,"BUTTON",{class:!0,"data-svelte-h":!0}),we(e)!=="svelte-d4ncwp"&&(e.textContent=n),this.h()},h(){w(e,"class","btn btn-sm variant-ghost-surface")},m(s,o){x(s,e,o),i||(r=J(e,"click",un.triggerLoginPopup),i=!0)},p:oe,i:oe,o:oe,d(s){s&&k(e),i=!1,r()}}}function Lh(t){let e,n,i,r;const s=[Ph,Dh],o=[];function a(c,l){return c[0].user?1:0}return n=a(t),i=o[n]=s[n](t),{c(){e=P("div"),i.c(),this.h()},l(c){e=L(c,"DIV",{slot:!0,class:!0});var l=F(e);i.l(l),l.forEach(k),this.h()},h(){w(e,"slot","trail"),w(e,"class","mr-4")},m(c,l){x(c,e,l),o[n].m(e,null),r=!0},p(c,l){let d=n;n=a(c),n===d?o[n].p(c,l):($(),M(o[d],1,1,()=>{o[d]=null}),ee(),i=o[n],i?i.p(c,l):(i=o[n]=s[n](c),i.c()),C(i,1),i.m(e,null))},i(c){r||(C(i),r=!0)},o(c){M(i),r=!1},d(c){c&&k(e),o[n].d()}}}function Nh(t){let e,n;return e=new Fa({props:{$$slots:{trail:[Lh],lead:[Oh],default:[Ch]},$$scope:{ctx:t}}}),{c(){ue(e.$$.fragment)},l(i){de(e.$$.fragment,i)},m(i,r){fe(e,i,r),n=!0},p(i,[r]){const s={};r&519&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){n||(C(e.$$.fragment,i),n=!0)},o(i){M(e.$$.fragment,i),n=!1},d(i){he(e,i)}}}function Mh(t,e,n){let i,r,s;const{userStore:o}=un;mt(t,o,f=>n(0,i=f));const{query:a,mode:c}=Mt;mt(t,a,f=>n(1,r=f)),mt(t,c,f=>n(2,s=f));const l={event:"click",target:"popupUser",placement:"bottom"};function d(){r=this.value,a.set(r)}function u(){s=Eo(this),c.set(s)}return[i,r,s,o,a,c,l,d,u]}class Uh extends He{constructor(e){super(),je(this,e,Mh,Nh,Ve,{})}}const Fh=xo("goto"),xh={game:{route:"games",name:"Games"},altColorFiles:{route:"altcolors",name:"Alt. Colors"},altSoundFiles:{route:"altsounds",name:"Alt. Sounds"},b2sFiles:{route:"b2s",name:"Backglasses"},mediaPackFiles:{route:"mediapacks",name:"Media Packs"},povFiles:{route:"pov",name:"POVs"},pupPackFiles:{route:"puppacks",name:"PuP Packs"},romFiles:{route:"roms",name:"Roms"},ruleFiles:{route:"rules",name:"Rules"},soundFiles:{route:"sounds",name:"Sounds"},tableFiles:{route:"tables",name:"Tables"},topperFiles:{route:"toppers",name:"Toppers"},wheelArtFiles:{route:"wheelart",name:"Wheelart"}};Mt.finalResultsStore.subscribe(()=>{var r;const t=pt(Bo),e=(r=t==null?void 0:t.url)==null?void 0:r.pathname;if(!e||!pt(Mt.isSearchActive)&&e==="/")return;const n=pt(Mt.mode),i=xh[n].route;e!=null&&e.includes(i)||Fh("/"+i,{keepFocus:!0})});function Bh(t){var p,m;let e,n,i,r,s,o=((p=t[0].user)==null?void 0:p.displayName)+"",a,c,l,d="Logout",u,f,h,g,_;return i=new Xr({props:{src:((m=t[0].user)==null?void 0:m.photoURL)||"",width:"w-12",rounded:"rounded-full"}}),{c(){e=P("div"),n=P("div"),ue(i.$$.fragment),r=j(),s=P("b"),a=lt(o),c=j(),l=P("button"),l.textContent=d,u=j(),f=P("div"),this.h()},l(b){e=L(b,"DIV",{class:!0,"data-popup":!0});var T=F(e);n=L(T,"DIV",{class:!0});var S=F(n);de(i.$$.fragment,S),r=W(S),s=L(S,"B",{});var y=F(s);a=ut(y,o),y.forEach(k),c=W(S),l=L(S,"BUTTON",{class:!0,"data-svelte-h":!0}),we(l)!=="svelte-nsylsw"&&(l.textContent=d),S.forEach(k),u=W(T),f=L(T,"DIV",{class:!0}),F(f).forEach(k),T.forEach(k),this.h()},h(){w(l,"class","btn w-full variant-filled-secondary"),w(n,"class","flex flex-col space-y-2"),w(f,"class","arrow bg-surface-100-800-token"),w(e,"class","card p-4 w-72 shadow-xl"),w(e,"data-popup","popupUser")},m(b,T){x(b,e,T),D(e,n),fe(i,n,null),D(n,r),D(n,s),D(s,a),D(n,c),D(n,l),D(e,u),D(e,f),h=!0,g||(_=J(l,"click",un.logout),g=!0)},p(b,[T]){var y,I;const S={};T&1&&(S.src=((y=b[0].user)==null?void 0:y.photoURL)||""),i.$set(S),(!h||T&1)&&o!==(o=((I=b[0].user)==null?void 0:I.displayName)+"")&&$t(a,o)},i(b){h||(C(i.$$.fragment,b),h=!0)},o(b){M(i.$$.fragment,b),h=!1},d(b){b&&k(e),he(i),g=!1,_()}}}function Vh(t,e,n){let i;const{userStore:r}=un;return mt(t,r,s=>n(0,i=s)),[i,r]}class Hh extends He{constructor(e){super(),je(this,e,Vh,Bh,Ve,{})}}function jh(t){let e,n;return e=new Hh({}),{c(){ue(e.$$.fragment)},l(i){de(e.$$.fragment,i)},m(i,r){fe(e,i,r),n=!0},p:oe,i(i){n||(C(e.$$.fragment,i),n=!0)},o(i){M(e.$$.fragment,i),n=!1},d(i){he(e,i)}}}class Wh extends He{constructor(e){super(),je(this,e,null,jh,Ve,{})}}function zh(t){let e;const n=t[0].default,i=ne(n,t,t[1],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,s){i&&i.p&&(!e||s&2)&&ie(i,n,r,r[1],e?se(n,r[1],s,null):re(r[1]),null)},i(r){e||(C(i,r),e=!0)},o(r){M(i,r),e=!1},d(r){i&&i.d(r)}}}function qh(t){let e,n;return e=new Uh({}),{c(){ue(e.$$.fragment)},l(i){de(e.$$.fragment,i)},m(i,r){fe(e,i,r),n=!0},i(i){n||(C(e.$$.fragment,i),n=!0)},o(i){M(e.$$.fragment,i),n=!1},d(i){he(e,i)}}}function Gh(t){let e,n,i,r,s,o;return e=new Wh({}),i=new fc({}),s=new Za({props:{$$slots:{header:[qh],default:[zh]},$$scope:{ctx:t}}}),{c(){ue(e.$$.fragment),n=j(),ue(i.$$.fragment),r=j(),ue(s.$$.fragment)},l(a){de(e.$$.fragment,a),n=W(a),de(i.$$.fragment,a),r=W(a),de(s.$$.fragment,a)},m(a,c){fe(e,a,c),x(a,n,c),fe(i,a,c),x(a,r,c),fe(s,a,c),o=!0},p(a,[c]){const l={};c&2&&(l.$$scope={dirty:c,ctx:a}),s.$set(l)},i(a){o||(C(e.$$.fragment,a),C(i.$$.fragment,a),C(s.$$.fragment,a),o=!0)},o(a){M(e.$$.fragment,a),M(i.$$.fragment,a),M(s.$$.fragment,a),o=!1},d(a){a&&(k(n),k(r)),he(e,a),he(i,a),he(s,a)}}}function Kh(t,e,n){let{$$slots:i={},$$scope:r}=e;return Yr.set({computePosition:ya,autoUpdate:va,offset:ea,shift:ta,flip:Zo,arrow:Qo}),To(()=>{No.fetchDb()}),t.$$set=s=>{"$$scope"in s&&n(1,r=s.$$scope)},[i,r]}class ip extends He{constructor(e){super(),je(this,e,Kh,Gh,Ve,{})}}export{ip as component,np as universal};
