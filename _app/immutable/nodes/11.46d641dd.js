import{T as Tt}from"../chunks/tournamentStore.996e62b0.js";import{s as Vt,e as Et,i as vt,d as i,B as yt,f as v,a as A,l as G,g as h,h as p,c as N,m as C,j as d,G as a,H as W,n as st,$ as xt,I as jt}from"../chunks/scheduler.c1c84dbf.js";import{S as Ot,i as St,a as P,t as z,c as Bt,b as X,d as Y,m as Z,e as tt,g as At}from"../chunks/index.64b0efba.js";import{e as kt}from"../chunks/each.388c6565.js";import{F as et,g as Nt,i as Ut,w as Gt,a as Ct,k as Ft}from"../chunks/index.1eae86da.js";import{g as at}from"../chunks/navigation.0b01c535.js";import{D as Pt}from"../chunks/DbStore.8ad2b0b6.js";const Rt=({params:r})=>{const{tindex:e}=r;return{tindex:e}},Xt=Object.freeze(Object.defineProperty({__proto__:null,load:Rt},Symbol.toStringTag,{value:"Module"}));function It(r,e,l){const t=r.slice();t[12]=e[l],t[15]=l;const n=Object.entries(t[12].scores).sort((u,m)=>m[1]-u[1])[0];return t[13]=n,t}function Dt(r){var pt,gt;let e,l,t,n,u,m,o,$=((pt=r[0])==null?void 0:pt.title)+"",I,j,w,y=((gt=r[0])==null?void 0:gt.players.join(", "))+"",T,O,c,S,H,L,_,f,D,U,V,x,B,rt,lt,R,ot,F,q,it,M,ct,ht;n=new et({props:{icon:Nt}}),S=new et({props:{icon:Ut}}),D=new et({props:{icon:Gt}}),B=new et({props:{icon:Ct}});let J=kt(r[0].games),g=[];for(let s=0;s<J.length;s+=1)g[s]=wt(It(r,J,s));return q=new et({props:{icon:Ft}}),{c(){e=v("div"),l=v("div"),t=v("button"),X(n.$$.fragment),u=A(),m=v("div"),o=v("div"),I=G($),j=A(),w=v("div"),T=G(y),O=A(),c=v("button"),X(S.$$.fragment),H=G(`\r
				Edit`),L=A(),_=v("div"),f=v("button"),X(D.$$.fragment),U=G(`\r
				View Results`),V=A(),x=v("button"),X(B.$$.fragment),rt=G(`\r
				Export`),lt=A(),R=v("div");for(let s=0;s<g.length;s+=1)g[s].c();ot=A(),F=v("button"),X(q.$$.fragment),it=G(`\r
			Add Game`),this.h()},l(s){e=h(s,"DIV",{class:!0});var E=p(e);l=h(E,"DIV",{class:!0});var k=p(l);t=h(k,"BUTTON",{class:!0});var K=p(t);Y(n.$$.fragment,K),K.forEach(i),u=N(k),m=h(k,"DIV",{class:!0});var b=p(m);o=h(b,"DIV",{class:!0});var Q=p(o);I=C(Q,$),Q.forEach(i),j=N(b),w=h(b,"DIV",{class:!0});var bt=p(w);T=C(bt,y),bt.forEach(i),b.forEach(i),O=N(k),c=h(k,"BUTTON",{class:!0});var ft=p(c);Y(S.$$.fragment,ft),H=C(ft,`\r
				Edit`),ft.forEach(i),k.forEach(i),L=N(E),_=h(E,"DIV",{class:!0});var nt=p(_);f=h(nt,"BUTTON",{class:!0});var dt=p(f);Y(D.$$.fragment,dt),U=C(dt,`\r
				View Results`),dt.forEach(i),V=N(nt),x=h(nt,"BUTTON",{class:!0});var ut=p(x);Y(B.$$.fragment,ut),rt=C(ut,`\r
				Export`),ut.forEach(i),nt.forEach(i),lt=N(E),R=h(E,"DIV",{class:!0});var $t=p(R);for(let _t=0;_t<g.length;_t+=1)g[_t].l($t);$t.forEach(i),ot=N(E),F=h(E,"BUTTON",{class:!0});var mt=p(F);Y(q.$$.fragment,mt),it=C(mt,`\r
			Add Game`),mt.forEach(i),E.forEach(i),this.h()},h(){d(t,"class","btn btn-icon"),d(o,"class","leading-4 font-bold"),d(w,"class","leading-4 opacity-60"),d(m,"class","flex flex-1 flex-col"),d(c,"class","btn btn-sm variant-filled-secondary flex gap-4 items-center"),d(l,"class","flex flex-row gap-2 items-center justify-between bg-secondary-600/20 p-2"),d(f,"class","btn btn-sm variant-filled-tertiary flex-1 flex gap-4 items-center"),d(x,"class","btn btn-sm variant-ghost-tertiary flex gap-4 items-center"),d(_,"class","flex flex-row gap-2 items-center bg-tertiary-600/20 p-2 h-14"),d(R,"class","flex flex-col"),d(F,"class","btn variant-filled-primary flex gap-4 items-center m-4"),d(e,"class","flex flex-col")},m(s,E){vt(s,e,E),a(e,l),a(l,t),Z(n,t,null),a(l,u),a(l,m),a(m,o),a(o,I),a(m,j),a(m,w),a(w,T),a(l,O),a(l,c),Z(S,c,null),a(c,H),a(e,L),a(e,_),a(_,f),Z(D,f,null),a(f,U),a(_,V),a(_,x),Z(B,x,null),a(x,rt),a(e,lt),a(e,R);for(let k=0;k<g.length;k+=1)g[k]&&g[k].m(R,null);a(e,ot),a(e,F),Z(q,F,null),a(F,it),M=!0,ct||(ht=[W(t,"click",r[8]),W(c,"click",r[9]),W(f,"click",r[10]),W(x,"click",r[11]),W(F,"click",r[5])],ct=!0)},p(s,E){var k,K;if((!M||E&1)&&$!==($=((k=s[0])==null?void 0:k.title)+"")&&st(I,$),(!M||E&1)&&y!==(y=((K=s[0])==null?void 0:K.players.join(", "))+"")&&st(T,y),E&7){J=kt(s[0].games);let b;for(b=0;b<J.length;b+=1){const Q=It(s,J,b);g[b]?g[b].p(Q,E):(g[b]=wt(Q),g[b].c(),g[b].m(R,null))}for(;b<g.length;b+=1)g[b].d(1);g.length=J.length}},i(s){M||(P(n.$$.fragment,s),P(S.$$.fragment,s),P(D.$$.fragment,s),P(B.$$.fragment,s),P(q.$$.fragment,s),M=!0)},o(s){z(n.$$.fragment,s),z(S.$$.fragment,s),z(D.$$.fragment,s),z(B.$$.fragment,s),z(q.$$.fragment,s),M=!1},d(s){s&&i(e),tt(n),tt(S),tt(D),tt(B),xt(g,s),tt(q),ct=!1,jt(ht)}}}function wt(r){var S,H,L;let e,l,t,n=r[15]+1+"",u,m,o,$,I=((H=r[1][(S=r[12])==null?void 0:S.gameId])==null?void 0:H.name)+"",j,w,y,T=((L=r[13])==null?void 0:L.join(" - "))+"",O,c;return{c(){e=v("a"),l=v("div"),t=v("div"),u=G(n),m=A(),o=v("div"),$=v("div"),j=G(I),w=A(),y=v("div"),O=G(T),c=A(),this.h()},l(_){e=h(_,"A",{href:!0,class:!0});var f=p(e);l=h(f,"DIV",{class:!0});var D=p(l);t=h(D,"DIV",{class:!0});var U=p(t);u=C(U,n),U.forEach(i),D.forEach(i),m=N(f),o=h(f,"DIV",{class:!0});var V=p(o);$=h(V,"DIV",{class:!0});var x=p($);j=C(x,I),x.forEach(i),w=N(V),y=h(V,"DIV",{class:!0});var B=p(y);O=C(B,T),B.forEach(i),V.forEach(i),c=N(f),f.forEach(i),this.h()},h(){d(t,"class","w-6 h-6 flex items-center justify-center text-md font-bold"),d(l,"class","flex items-center justify-center variant-ghost-tertiary p-4 rounded shrink-0"),d($,"class","font-bold"),d(y,"class","opacity-60"),d(o,"class","flex flex-col"),d(e,"href",`${r[2]}/${r[15]}`),d(e,"class","py-4 px-4 hover:bg-primary-400/20 flex gap-4 items-center")},m(_,f){vt(_,e,f),a(e,l),a(l,t),a(t,u),a(e,m),a(e,o),a(o,$),a($,j),a(o,w),a(o,y),a(y,O),a(e,c)},p(_,f){var D,U,V;f&3&&I!==(I=((U=_[1][(D=_[12])==null?void 0:D.gameId])==null?void 0:U.name)+"")&&st(j,I),f&1&&T!==(T=((V=_[13])==null?void 0:V.join(" - "))+"")&&st(O,T)},d(_){_&&i(e)}}}function qt(r){let e,l,t=r[0]&&Dt(r);return{c(){t&&t.c(),e=Et()},l(n){t&&t.l(n),e=Et()},m(n,u){t&&t.m(n,u),vt(n,e,u),l=!0},p(n,[u]){n[0]?t?(t.p(n,u),u&1&&P(t,1)):(t=Dt(n),t.c(),P(t,1),t.m(e.parentNode,e)):t&&(At(),z(t,1,1,()=>{t=null}),Bt())},i(n){l||(P(t),l=!0)},o(n){z(t),l=!1},d(n){n&&i(e),t&&t.d(n)}}}function zt(r,e,l){let t,n,u,{data:m}=e,{tindex:o}=m;const{tournamentStore:$}=Tt;yt(r,$,c=>l(7,n=c));const{dbStore:I}=Pt;yt(r,I,c=>l(1,u=c));const j=()=>{t&&(n[o].games.push({balls:3,points:{},scores:{},gameId:""}),$.set(n),at(o+"/"+t.games.length-1))},w=()=>{at("/tournaments")},y=()=>{at(o+"/edit")},T=()=>{at(o+"/edit")},O=()=>{at(o+"/edit")};return r.$$set=c=>{"data"in c&&l(6,m=c.data)},r.$$.update=()=>{r.$$.dirty&128&&l(0,t=n.length>=o?n[o]:void 0)},[t,u,o,$,I,j,m,n,w,y,T,O]}class Yt extends Ot{constructor(e){super(),St(this,e,zt,qt,Vt,{data:6})}}export{Yt as component,Xt as universal};
