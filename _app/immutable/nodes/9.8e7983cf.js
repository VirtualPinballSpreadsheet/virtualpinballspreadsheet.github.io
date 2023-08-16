import{H as ce}from"../chunks/control.f5b05b5f.js";import{m as ue,e as L,g as X,a as Y,S as he}from"../chunks/modeMapping.5829ed26.js";import{s as K,e as D,i as v,r as J,d as S,K as me,o as ie,a2 as _e,f as y,g as H,h as T,j as I,k as fe,p as ge,l as R,a as W,m as A,c as C,A as z,n as Z,$ as ae,q as x,F as de,J as $}from"../chunks/scheduler.dedae0ab.js";import{S as G,i as Q,b as N,d as U,m as j,a as k,g as O,c as B,t as M,e as P}from"../chunks/index.21d01676.js";function ee(o,e){return new ce(o,e)}new TextEncoder;const pe=({params:o})=>{const{mode:e}=o;if(!e)throw ee(404,"Not found");const t=Object.entries(ue).find(([n,l])=>l.route===e);if(!t)throw ee(404,"Not found");return{mode:t[0],...t[1]}},Ie=Object.freeze(Object.defineProperty({__proto__:null,load:pe},Symbol.toStringTag,{value:"Module"}));function te(o){let e;return{c(){e=y("div"),this.h()},l(t){e=H(t,"DIV",{id:!0,style:!0}),T(e).forEach(S),this.h()},h(){I(e,"id","svelte-infinite-scroll"),fe(e,"width","0")},m(t,n){v(t,e,n),o[11](e)},p:J,d(t){t&&S(e),o[11](null)}}}function be(o){let e,t=!o[1]&&!o[0]&&te(o);return{c(){t&&t.c(),e=D()},l(n){t&&t.l(n),e=D()},m(n,l){t&&t.m(n,l),v(n,e,l)},p(n,[l]){!n[1]&&!n[0]?t?t.p(n,l):(t=te(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:J,o:J,d(n){n&&S(e),t&&t.d(n)}}}function Se(o,e,t){let{threshold:n=0}=e,{horizontal:l=!1}=e,{elementScroll:s=null}=e,{hasMore:f=!0}=e,{reverse:r=!1}=e,{window:a=!1}=e;const u=me();let _=!1,d,w,E,m;const h=i=>{if(!f)return;const p=i.target;V(p,r,l)<=n?(!_&&f&&(u("loadMore"),t(8,w=p.scrollHeight),t(9,E=p.scrollTop)),t(7,_=!0)):t(7,_=!1)},V=(i,p,g)=>{const b=i.documentElement?i.documentElement:i;return p?g?b.scrollLeft:b.scrollTop:g?b.scrollWidth-b.clientWidth-b.scrollLeft:b.scrollHeight-b.clientHeight-b.scrollTop};ie(()=>{a?t(10,m=document):s?t(10,m=s):t(10,m=d.parentNode)}),_e(()=>{m&&(m.removeEventListener("scroll",h),m.removeEventListener("resize",h))});function c(i){ge[i?"unshift":"push"](()=>{d=i,t(2,d)})}return o.$$set=i=>{"threshold"in i&&t(3,n=i.threshold),"horizontal"in i&&t(4,l=i.horizontal),"elementScroll"in i&&t(0,s=i.elementScroll),"hasMore"in i&&t(5,f=i.hasMore),"reverse"in i&&t(6,r=i.reverse),"window"in i&&t(1,a=i.window)},o.$$.update=()=>{o.$$.dirty&1088&&m&&(r&&t(10,m.scrollTop=m.scrollHeight,m),m.addEventListener("scroll",h),m.addEventListener("resize",h)),o.$$.dirty&1984&&_&&r&&t(10,m.scrollTop=m.scrollHeight-w+E,m)},[s,a,d,n,l,f,r,_,w,E,m,c]}class we extends G{constructor(e){super(),Q(this,e,Se,be,K,{threshold:3,horizontal:4,elementScroll:0,hasMore:5,reverse:6,window:1})}}function ne(o,e,t){const n=o.slice();return n[8]=e[t],n[10]=t,n}function le(o,e,t){const n=o.slice();return n[8]=e[t],n[12]=t,n}function F(o){const e=o.slice(),t=e[2][e[10]*e[3]+e[12]];return e[13]=t,e}function oe(o){let e,t,n;const l=[o[4](o[13])];var s=o[1];function f(r,a){let u={};if(a!==void 0&&a&28)u=X(l,[Y(r[4](r[13]))]);else for(let _=0;_<l.length;_+=1)u=de(u,l[_]);return{props:u}}return s&&(e=x(s,f(o))),{c(){e&&N(e.$$.fragment),t=D()},l(r){e&&U(e.$$.fragment,r),t=D()},m(r,a){e&&j(e,r,a),v(r,t,a),n=!0},p(r,a){if(a&2&&s!==(s=r[1])){if(e){O();const u=e;M(u.$$.fragment,1,0,()=>{P(u,1)}),B()}s?(e=x(s,f(r,a)),N(e.$$.fragment),k(e.$$.fragment,1),j(e,t.parentNode,t)):e=null}else if(s){const u=a&28?X(l,[Y(r[4](r[13]))]):{};e.$set(u)}},i(r){n||(e&&k(e.$$.fragment,r),n=!0)},o(r){e&&M(e.$$.fragment,r),n=!1},d(r){r&&S(t),e&&P(e,r)}}}function re(o){let e,t,n=o[2].length>o[10]*o[3]+o[12]&&oe(F(o));return{c(){n&&n.c(),e=D()},l(l){n&&n.l(l),e=D()},m(l,s){n&&n.m(l,s),v(l,e,s),t=!0},p(l,s){l[2].length>l[10]*l[3]+l[12]?n?(n.p(F(l),s),s&12&&k(n,1)):(n=oe(F(l)),n.c(),k(n,1),n.m(e.parentNode,e)):n&&(O(),M(n,1,1,()=>{n=null}),B())},i(l){t||(k(n),t=!0)},o(l){M(n),t=!1},d(l){l&&S(e),n&&n.d(l)}}}function se(o){let e,t,n=L({length:o[3]}),l=[];for(let f=0;f<n.length;f+=1)l[f]=re(le(o,n,f));const s=f=>M(l[f],1,1,()=>{l[f]=null});return{c(){for(let f=0;f<l.length;f+=1)l[f].c();e=D()},l(f){for(let r=0;r<l.length;r+=1)l[r].l(f);e=D()},m(f,r){for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(f,r);v(f,e,r),t=!0},p(f,r){if(r&30){n=L({length:f[3]});let a;for(a=0;a<n.length;a+=1){const u=le(f,n,a);l[a]?(l[a].p(u,r),k(l[a],1)):(l[a]=re(u),l[a].c(),k(l[a],1),l[a].m(e.parentNode,e))}for(O(),a=n.length;a<l.length;a+=1)s(a);B()}},i(f){if(!t){for(let r=0;r<n.length;r+=1)k(l[r]);t=!0}},o(f){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)M(l[r]);t=!1},d(f){f&&S(e),ae(l,f)}}}function ke(o){let e,t,n,l,s,f=o[2].length+"",r,a,u,_,d,w,E,m=L({length:o[6]}),h=[];for(let c=0;c<m.length;c+=1)h[c]=se(ne(o,m,c));const V=c=>M(h[c],1,1,()=>{h[c]=null});return w=new we({props:{hasMore:o[5],elementScroll:document.getElementById("page"),threshold:100}}),w.$on("loadMore",o[7]),{c(){e=y("div"),t=y("h2"),n=R(o[0]),l=W(),s=y("p"),r=R(f),a=R(" results"),u=W(),_=y("div");for(let c=0;c<h.length;c+=1)h[c].c();d=W(),N(w.$$.fragment),this.h()},l(c){e=H(c,"DIV",{class:!0});var i=T(e);t=H(i,"H2",{class:!0});var p=T(t);n=A(p,o[0]),p.forEach(S),l=C(i),s=H(i,"P",{class:!0,style:!0});var g=T(s);r=A(g,f),a=A(g," results"),g.forEach(S),i.forEach(S),u=C(c),_=H(c,"DIV",{class:!0});var b=T(_);for(let q=0;q<h.length;q+=1)h[q].l(b);b.forEach(S),d=C(c),U(w.$$.fragment,c),this.h()},h(){I(t,"class","h2"),I(s,"class","font-bold"),fe(s,"line-height","1.6rem"),I(e,"class","p-10 pb-0 flex items-end gap-4"),I(_,"class","grid layout gap-y-20 gap-x-10 p-10 svelte-193p9ri")},m(c,i){v(c,e,i),z(e,t),z(t,n),z(e,l),z(e,s),z(s,r),z(s,a),v(c,u,i),v(c,_,i);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(_,null);v(c,d,i),j(w,c,i),E=!0},p(c,[i]){if((!E||i&1)&&Z(n,c[0]),(!E||i&4)&&f!==(f=c[2].length+"")&&Z(r,f),i&94){m=L({length:c[6]});let g;for(g=0;g<m.length;g+=1){const b=ne(c,m,g);h[g]?(h[g].p(b,i),k(h[g],1)):(h[g]=se(b),h[g].c(),k(h[g],1),h[g].m(_,null))}for(O(),g=m.length;g<h.length;g+=1)V(g);B()}const p={};i&32&&(p.hasMore=c[5]),w.$set(p)},i(c){if(!E){for(let i=0;i<m.length;i+=1)k(h[i]);k(w.$$.fragment,c),E=!0}},o(c){h=h.filter(Boolean);for(let i=0;i<h.length;i+=1)M(h[i]);M(w.$$.fragment,c),E=!1},d(c){c&&(S(e),S(u),S(_),S(d)),ae(h,c),P(w,c)}}}function Ee(o,e,t){let{title:n="???"}=e,{component:l}=e,{data:s=[]}=e,{pageSize:f=100}=e,{transformData:r=d=>d}=e,a=!0,u=2;const _=()=>{t(6,u++,u),u*f>s.length&&t(5,a=!1)};return o.$$set=d=>{"title"in d&&t(0,n=d.title),"component"in d&&t(1,l=d.component),"data"in d&&t(2,s=d.data),"pageSize"in d&&t(3,f=d.pageSize),"transformData"in d&&t(4,r=d.transformData)},o.$$.update=()=>{o.$$.dirty&4&&(t(6,u=1),t(5,a=!0))},[n,l,s,f,r,a,u,_]}class Me extends G{constructor(e){super(),Q(this,e,Ee,ke,K,{title:0,component:1,data:2,pageSize:3,transformData:4})}}function ve(o){let e,t;return e=new Me({props:{component:o[0].component,title:o[0].name,data:o[1],transformData:o[4]}}),{c(){N(e.$$.fragment)},l(n){U(e.$$.fragment,n)},m(n,l){j(e,n,l),t=!0},p(n,[l]){const s={};l&1&&(s.component=n[0].component),l&1&&(s.title=n[0].name),l&2&&(s.data=n[1]),l&1&&(s.transformData=n[4]),e.$set(s)},i(n){t||(k(e.$$.fragment,n),t=!0)},o(n){M(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function De(o,e,t){let n,l,{data:s}=e;const{finalResultsStore:f,mode:r}=he;$(o,f,u=>t(1,l=u)),$(o,r,u=>t(5,n=u)),ie(()=>{n!==s.mode&&r.set(s.mode)});const a=u=>{var _;return{file:u,href:s.mode==="game"?`?game=${u.id}`:`?game=${(_=u.game)==null?void 0:_.id}&${s.route}=${u.id}`}};return o.$$set=u=>{"data"in u&&t(0,s=u.data)},[s,l,f,r,a]}class Le extends G{constructor(e){super(),Q(this,e,De,ve,K,{data:0})}}export{Le as component,Ie as universal};
