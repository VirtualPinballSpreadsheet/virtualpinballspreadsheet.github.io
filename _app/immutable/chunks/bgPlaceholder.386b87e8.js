import{a as J,t as L}from"./index.10be7516.js";import{J as R}from"./scheduler.4bea28c8.js";function z(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function U(n,d){L(n,1,1,()=>{d.delete(n.key)})}function B(n,d){n.f(),U(n,d)}function C(n,d,v,x,S,p,o,b,y,j,l,A){let i=n.length,f=p.length,c=i;const u={};for(;c--;)u[n[c].key]=c;const a=[],w=new Map,m=new Map,_=[];for(c=f;c--;){const e=A(S,p,c),s=v(e);let t=o.get(s);t?x&&_.push(()=>t.p(e,d)):(t=j(s,e),t.c()),w.set(s,a[c]=t),s in u&&m.set(s,Math.abs(c-u[s]))}const M=new Set,P=new Set;function g(e){J(e,1),e.m(b,l),o.set(e.key,e),l=e.first,f--}for(;i&&f;){const e=a[f-1],s=n[i-1],t=e.key,h=s.key;e===s?(l=e.first,i--,f--):w.has(h)?!o.has(t)||M.has(t)?g(e):P.has(h)?i--:m.get(t)>m.get(h)?(P.add(t),g(e)):(M.add(h),i--):(y(s,o),i--)}for(;i--;){const e=n[i];w.has(e.key)||y(e,o)}for(;f;)g(a[f-1]);return R(_),a}const D=""+new URL("../assets/bgPlaceholder.9e5a8fcb.jpg",import.meta.url).href;export{D as P,z as e,B as f,U as o,C as u};