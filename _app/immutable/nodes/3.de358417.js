import{s as D,e as y,i as E,r as g,d as m,W as N,o as V,X as j,f as H,g as T,h as k,j as q,k as C,p as O}from"../chunks/scheduler.325a9d39.js";import{S as p,i as z,b as P,d as X,m as A,a as B,t as F,e as G}from"../chunks/index.e535a0d1.js";import"../chunks/SearchStore.84b40b79.js";function L(r){let t;return{c(){t=H("div"),this.h()},l(e){t=T(e,"DIV",{id:!0,style:!0}),k(t).forEach(m),this.h()},h(){q(t,"id","svelte-infinite-scroll"),C(t,"width","0")},m(e,o){E(e,t,o),r[11](t)},p:g,d(e){e&&m(t),r[11](null)}}}function J(r){let t,e=!r[1]&&!r[0]&&L(r);return{c(){e&&e.c(),t=y()},l(o){e&&e.l(o),t=y()},m(o,l){e&&e.m(o,l),E(o,t,l)},p(o,[l]){!o[1]&&!o[0]?e?e.p(o,l):(e=L(o),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:g,o:g,d(o){o&&m(t),e&&e.d(o)}}}function K(r,t,e){let{threshold:o=0}=t,{horizontal:l=!1}=t,{elementScroll:i=null}=t,{hasMore:d=!0}=t,{reverse:f=!1}=t,{window:M=!1}=t;const v=N();let a=!1,u,w,S,s;const _=n=>{if(!d)return;const h=n.target;I(h,f,l)<=o?(!a&&d&&(v("loadMore"),e(8,w=h.scrollHeight),e(9,S=h.scrollTop)),e(7,a=!0)):e(7,a=!1)},I=(n,h,b)=>{const c=n.documentElement?n.documentElement:n;return h?b?c.scrollLeft:c.scrollTop:b?c.scrollWidth-c.clientWidth-c.scrollLeft:c.scrollHeight-c.clientHeight-c.scrollTop};V(()=>{M?e(10,s=document):i?e(10,s=i):e(10,s=u.parentNode)}),j(()=>{s&&(s.removeEventListener("scroll",_),s.removeEventListener("resize",_))});function W(n){O[n?"unshift":"push"](()=>{u=n,e(2,u)})}return r.$$set=n=>{"threshold"in n&&e(3,o=n.threshold),"horizontal"in n&&e(4,l=n.horizontal),"elementScroll"in n&&e(0,i=n.elementScroll),"hasMore"in n&&e(5,d=n.hasMore),"reverse"in n&&e(6,f=n.reverse),"window"in n&&e(1,M=n.window)},r.$$.update=()=>{r.$$.dirty&1088&&s&&(f&&e(10,s.scrollTop=s.scrollHeight,s),s.addEventListener("scroll",_),s.addEventListener("resize",_)),r.$$.dirty&1984&&a&&f&&e(10,s.scrollTop=s.scrollHeight-w+S,s)},[i,M,u,o,l,d,f,a,w,S,s,W]}class Q extends p{constructor(t){super(),z(this,t,K,J,D,{threshold:3,horizontal:4,elementScroll:0,hasMore:5,reverse:6,window:1})}}function R(r){let t,e,o;return e=new Q({props:{hasMore:U,threshold:100}}),e.$on("loadMore",r[2]),{c(){t=H("div"),P(e.$$.fragment)},l(l){t=T(l,"DIV",{});var i=k(t);X(e.$$.fragment,i),i.forEach(m)},m(l,i){E(l,t,i),A(e,t,null),o=!0},p:g,i(l){o||(B(e.$$.fragment,l),o=!0)},o(l){F(e.$$.fragment,l),o=!1},d(l){l&&m(t),G(e)}}}let U=!0;function Y(r,t,e){let o=1;return[o,()=>{},()=>{e(0,o++,o)}]}class ee extends p{constructor(t){super(),z(this,t,Y,R,D,{})}}export{ee as component};
