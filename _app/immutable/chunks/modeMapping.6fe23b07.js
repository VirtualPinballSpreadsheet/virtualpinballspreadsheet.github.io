import{s as mt,e as jt,i as _e,d as u,B as rt,f as d,g as h,h as m,j as n,H as Dt,r as vt,Y as pa,a as P,l as V,c as k,m as A,R as pe,G as s,n as L,$ as Mt,Z as Ot,k as lt,T as ae,I as ca}from"./scheduler.c1c84dbf.js";import{S as pt,i as _t,a as st,g as _a,t as gt,c as ba,b as Ft,d as Tt,m as Vt,e as At}from"./index.64b0efba.js";import{e as qe}from"./each.388c6565.js";import{D as Wt,a as wa,d as Ea,c as ua,b as Ia,E as Ca}from"./DbStore.8ad2b0b6.js";import{P as Nt,g as ya}from"./getBackglassUrl.565e3416.js";import{U as Pa,E as ka}from"./UserStore.0c5a1373.js";import{F as Ma,i as Da,A as Xt,B as Fa,x as Ta,C as Va,D as Aa,E as Sa,G as Ha,H as Ra,v as ja}from"./index.1eae86da.js";import{w as Oa}from"./index.eb17cf1d.js";import{m as da}from"./ProgressBar.svelte_svelte_type_style_lang.ec37df6e.js";import{f as Ct}from"./formatDate.85208f9c.js";function Zt(t){let e,a,l,r,o;return a=new Ma({props:{icon:Da}}),{c(){e=d("a"),Ft(a.$$.fragment),this.h()},l(i){e=h(i,"A",{href:!0,class:!0});var f=m(e);Tt(a.$$.fragment,f),f.forEach(u),this.h()},h(){n(e,"href","?edit=true"),n(e,"class","pointer-events-auto chip variant-soft-primary hover:variant-filled-primary gap-2 flex-1 p-2")},m(i,f){_e(i,e,f),Vt(a,e,null),l=!0,r||(o=Dt(e,"click",t[9]),r=!0)},p:vt,i(i){l||(st(a.$$.fragment,i),l=!0)},o(i){gt(a.$$.fragment,i),l=!1},d(i){i&&u(e),At(a),r=!1,o()}}}function La(t){let e,a,l=t[0]&&t[1].admin&&Zt(t);return{c(){l&&l.c(),e=jt()},l(r){l&&l.l(r),e=jt()},m(r,o){l&&l.m(r,o),_e(r,e,o),a=!0},p(r,[o]){r[0]&&r[1].admin?l?(l.p(r,o),o&3&&st(l,1)):(l=Zt(r),l.c(),st(l,1),l.m(e.parentNode,e)):l&&(_a(),gt(l,1,1,()=>{l=null}),ba())},i(r){a||(st(l),a=!0)},o(r){gt(l),a=!1},d(r){r&&u(e),l&&l.d(r)}}}function Wa(t,e,a){let l,r,o,i;const{userStore:f}=Pa;rt(t,f,_=>a(1,o=_));const{editStore:c}=ka;rt(t,c,_=>a(2,i=_));const{dbStore:g}=Wt;rt(t,g,_=>a(8,r=_));let{file:p=void 0}=e,{game:C=void 0}=e;const F=()=>{pa(c,i.cache={id:l.id,action:"UPDATE",data:JSON.parse(JSON.stringify(l))},i)};return t.$$set=_=>{"file"in _&&a(6,p=_.file),"game"in _&&a(7,C=_.game)},t.$$.update=()=>{var _;t.$$.dirty&448&&a(0,l=C||((_=p==null?void 0:p.game)!=null&&_.id?r[p.game.id]:void 0))},[l,o,i,f,c,g,p,C,r,F]}class Bt extends pt{constructor(e){super(),_t(this,e,Wa,La,mt,{file:6,game:7})}}function Jt(t,e,a){const l=t.slice();return l[2]=e[a],l}function Kt(t){let e,a=t[2]+"",l;return{c(){e=d("div"),l=V(a),this.h()},l(r){e=h(r,"DIV",{class:!0});var o=m(e);l=A(o,a),o.forEach(u),this.h()},h(){n(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(r,o){_e(r,e,o),s(e,l)},p(r,o){o&1&&a!==(a=r[2]+"")&&L(l,a)},d(r){r&&u(e)}}}function Ba(t){var G,Q;let e,a,l,r,o,i,f,c,g,p,C=((G=t[0].game)==null?void 0:G.name)+"",F,_,b,y,U,M,T=(((Q=t[0].authors)==null?void 0:Q.join(", "))||"")+"",R,J,X,j,le=qe(t[0].features||[]),w=[];for(let E=0;E<le.length;E+=1)w[E]=Kt(Jt(t,le,E));return y=new Bt({props:{file:t[0]}}),{c(){e=d("a"),a=d("img"),o=P(),i=d("hr"),f=P(),c=d("div"),g=d("div"),p=d("p"),F=V(C),_=P();for(let E=0;E<w.length;E+=1)w[E].c();b=P(),Ft(y.$$.fragment),U=P(),M=d("h4"),R=V(T),this.h()},l(E){e=h(E,"A",{href:!0,class:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var O=m(e);a=h(O,"IMG",{src:!0,alt:!0,class:!0}),o=k(O),i=h(O,"HR",{}),f=k(O),c=h(O,"DIV",{class:!0});var W=m(c);g=h(W,"DIV",{class:!0});var K=m(g);p=h(K,"P",{class:!0});var q=m(p);F=A(q,C),q.forEach(u),_=k(K);for(let z=0;z<w.length;z+=1)w[z].l(K);b=k(K),Tt(y.$$.fragment,K),K.forEach(u),U=k(W),M=h(W,"H4",{class:!0});var ee=m(M);R=A(ee,T),ee.forEach(u),W.forEach(u),O.forEach(u),this.h()},h(){var E;pe(a.src,l=t[0].imgUrl||Nt)||n(a,"src",l),n(a,"alt",r=t[0].id),n(a,"class","card aspectTable overflow-hidden hover:brightness-125 hover:scale-110 transition-all svelte-1mrpffe"),n(p,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),n(g,"class","flex gap-2"),n(M,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),n(c,"class","flex flex-col py-4"),n(e,"href",t[1]),n(e,"class","flex flex-col"),n(e,"id",J=t[0].id),n(e,"data-gameid",X=(E=t[0].game)==null?void 0:E.id),n(e,"data-filetype","b2sFiles")},m(E,O){_e(E,e,O),s(e,a),s(e,o),s(e,i),s(e,f),s(e,c),s(c,g),s(g,p),s(p,F),s(g,_);for(let W=0;W<w.length;W+=1)w[W]&&w[W].m(g,null);s(g,b),Vt(y,g,null),s(c,U),s(c,M),s(M,R),j=!0},p(E,[O]){var K,q,ee;if((!j||O&1&&!pe(a.src,l=E[0].imgUrl||Nt))&&n(a,"src",l),(!j||O&1&&r!==(r=E[0].id))&&n(a,"alt",r),(!j||O&1)&&C!==(C=((K=E[0].game)==null?void 0:K.name)+"")&&L(F,C),O&1){le=qe(E[0].features||[]);let z;for(z=0;z<le.length;z+=1){const ue=Jt(E,le,z);w[z]?w[z].p(ue,O):(w[z]=Kt(ue),w[z].c(),w[z].m(g,b))}for(;z<w.length;z+=1)w[z].d(1);w.length=le.length}const W={};O&1&&(W.file=E[0]),y.$set(W),(!j||O&1)&&T!==(T=(((q=E[0].authors)==null?void 0:q.join(", "))||"")+"")&&L(R,T),(!j||O&2)&&n(e,"href",E[1]),(!j||O&1&&J!==(J=E[0].id))&&n(e,"id",J),(!j||O&1&&X!==(X=(ee=E[0].game)==null?void 0:ee.id))&&n(e,"data-gameid",X)},i(E){j||(st(y.$$.fragment,E),j=!0)},o(E){gt(y.$$.fragment,E),j=!1},d(E){E&&u(e),Mt(w,E),At(y)}}}function Ua(t,e,a){let{file:l=wa}=e,{href:r=""}=e;return t.$$set=o=>{"file"in o&&a(0,l=o.file),"href"in o&&a(1,r=o.href)},[l,r]}class za extends pt{constructor(e){super(),_t(this,e,Ua,Ba,mt,{file:0,href:1})}}function Ga(t){var le;let e,a,l,r,o=(((le=t[0].game)==null?void 0:le.name)||"???")+"",i,f,c,g,p=(t[0].version||"")+"",C,F,_,b,y,U,M,T,R,J,X,j;return U=new Bt({props:{file:t[0]}}),{c(){e=d("a"),a=d("div"),l=d("div"),r=d("span"),i=V(o),f=P(),c=d("div"),g=d("span"),C=V(p),F=P(),_=d("div"),b=P(),y=d("div"),Ft(U.$$.fragment),M=P(),T=d("img"),this.h()},l(w){e=h(w,"A",{href:!0,id:!0,"data-gameid":!0,"data-filetype":!0,class:!0});var G=m(e);a=h(G,"DIV",{class:!0});var Q=m(a);l=h(Q,"DIV",{class:!0});var E=m(l);r=h(E,"SPAN",{class:!0});var O=m(r);i=A(O,o),O.forEach(u),f=k(E),c=h(E,"DIV",{class:!0});var W=m(c);g=h(W,"SPAN",{class:!0});var K=m(g);C=A(K,p),K.forEach(u),F=k(W),_=h(W,"DIV",{class:!0}),m(_).forEach(u),b=k(W),y=h(W,"DIV",{class:!0});var q=m(y);Tt(U.$$.fragment,q),q.forEach(u),W.forEach(u),E.forEach(u),M=k(Q),T=h(Q,"IMG",{src:!0,class:!0,alt:!0}),Q.forEach(u),G.forEach(u),this.h()},h(){var w;n(r,"class","font-bold"),n(g,"class","opacity-60 whitespace-nowrap text-ellipsis overflow-hidden"),n(_,"class","flex-1"),n(y,"class","shrink-0"),n(c,"class","flex justify-between max-w-full"),n(l,"class","p-4 flex flex-col justify-between absolute top-0 left-0 right-0 bottom-0 z-10"),pe(T.src,R=t[3])||n(T,"src",R),n(T,"class","absolute top-0 left-0 right-0 bottom-0 opacity-10"),n(T,"alt",""),n(a,"class","card !bg-surface-100 dark:!bg-surface-600 aspect relative overflow-hidden hover:brightness-125 hover:scale-110 transition-all text-xs md:text-base svelte-22xih4"),n(e,"href",t[1]),n(e,"id",J=t[0].id),n(e,"data-gameid",X=(w=t[0].game)==null?void 0:w.id),n(e,"data-filetype",t[2]),n(e,"class","aspect svelte-22xih4")},m(w,G){_e(w,e,G),s(e,a),s(a,l),s(l,r),s(r,i),s(l,f),s(l,c),s(c,g),s(g,C),s(c,F),s(c,_),s(c,b),s(c,y),Vt(U,y,null),s(a,M),s(a,T),j=!0},p(w,[G]){var E,O;(!j||G&1)&&o!==(o=(((E=w[0].game)==null?void 0:E.name)||"???")+"")&&L(i,o),(!j||G&1)&&p!==(p=(w[0].version||"")+"")&&L(C,p);const Q={};G&1&&(Q.file=w[0]),U.$set(Q),(!j||G&8&&!pe(T.src,R=w[3]))&&n(T,"src",R),(!j||G&2)&&n(e,"href",w[1]),(!j||G&1&&J!==(J=w[0].id))&&n(e,"id",J),(!j||G&1&&X!==(X=(O=w[0].game)==null?void 0:O.id))&&n(e,"data-gameid",X),(!j||G&4)&&n(e,"data-filetype",w[2])},i(w){j||(st(U.$$.fragment,w),j=!0)},o(w){gt(U.$$.fragment,w),j=!1},d(w){w&&u(e),At(U)}}}function qa(t,e,a){let l;const{getGameImage:r}=Wt;let{file:o=Ea}=e,{href:i=""}=e,{fileType:f}=e;return t.$$set=c=>{"file"in c&&a(0,o=c.file),"href"in c&&a(1,i=c.href),"fileType"in c&&a(2,f=c.fileType)},t.$$.update=()=>{var c;t.$$.dirty&1&&a(3,l=(c=o.game)!=null&&c.id?r(o.game.id):"")},[o,i,f,l]}class Qe extends pt{constructor(e){super(),_t(this,e,qa,Ga,mt,{file:0,href:1,fileType:2})}}/*! Fast Average Color | © 2022 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */function Na(t){var e=t.toString(16);return e.length===1?"0"+e:e}function Yt(t){return"#"+t.map(Na).join("")}function Xa(t){var e=(t[0]*299+t[1]*587+t[2]*114)/1e3;return e<128}function Za(t){return t?Ja(t)?t:[t]:[]}function Ja(t){return Array.isArray(t[0])}function Ut(t,e,a){for(var l=0;l<a.length;l++)if(Ka(t,e,a[l]))return!0;return!1}function Ka(t,e,a){switch(a.length){case 3:if(Ya(t,e,a))return!0;break;case 4:if(Qa(t,e,a))return!0;break;case 5:if(xa(t,e,a))return!0;break;default:return!1}}function Ya(t,e,a){return t[e+3]!==255||t[e]===a[0]&&t[e+1]===a[1]&&t[e+2]===a[2]}function Qa(t,e,a){return t[e+3]&&a[3]?t[e]===a[0]&&t[e+1]===a[1]&&t[e+2]===a[2]&&t[e+3]===a[3]:t[e+3]===a[3]}function Ht(t,e,a){return t>=e-a&&t<=e+a}function xa(t,e,a){var l=a[0],r=a[1],o=a[2],i=a[3],f=a[4],c=t[e+3],g=Ht(c,i,f);return i?!!(!c&&g||Ht(t[e],l,f)&&Ht(t[e+1],r,f)&&Ht(t[e+2],o,f)&&g):g}function $a(t,e,a){for(var l={},r=24,o=a.ignoredColor,i=a.step,f=[0,0,0,0,0],c=0;c<e;c+=i){var g=t[c],p=t[c+1],C=t[c+2],F=t[c+3];if(!(o&&Ut(t,c,o))){var _=Math.round(g/r)+","+Math.round(p/r)+","+Math.round(C/r);l[_]?l[_]=[l[_][0]+g*F,l[_][1]+p*F,l[_][2]+C*F,l[_][3]+F,l[_][4]+1]:l[_]=[g*F,p*F,C*F,F,1],f[4]<l[_][4]&&(f=l[_])}}var b=f[0],y=f[1],U=f[2],M=f[3],T=f[4];return M?[Math.round(b/M),Math.round(y/M),Math.round(U/M),Math.round(M/T)]:a.defaultColor}function el(t,e,a){for(var l=0,r=0,o=0,i=0,f=0,c=a.ignoredColor,g=a.step,p=0;p<e;p+=g){var C=t[p+3],F=t[p]*C,_=t[p+1]*C,b=t[p+2]*C;c&&Ut(t,p,c)||(l+=F,r+=_,o+=b,i+=C,f++)}return i?[Math.round(l/i),Math.round(r/i),Math.round(o/i),Math.round(i/f)]:a.defaultColor}function tl(t,e,a){for(var l=0,r=0,o=0,i=0,f=0,c=a.ignoredColor,g=a.step,p=0;p<e;p+=g){var C=t[p],F=t[p+1],_=t[p+2],b=t[p+3];c&&Ut(t,p,c)||(l+=C*C*b,r+=F*F*b,o+=_*_*b,i+=b,f++)}return i?[Math.round(Math.sqrt(l/i)),Math.round(Math.sqrt(r/i)),Math.round(Math.sqrt(o/i)),Math.round(i/f)]:a.defaultColor}function Qt(t){return kt(t,"defaultColor",[0,0,0,0])}function kt(t,e,a){return t[e]===void 0?a:t[e]}var xt=10,Lt=100;function al(t){return t.search(/\.svg(\?|$)/i)!==-1}function ll(t){if(ha(t)){var e=t.naturalWidth,a=t.naturalHeight;return!t.naturalWidth&&al(t.src)&&(e=a=Lt),{width:e,height:a}}return sl(t)?{width:t.videoWidth,height:t.videoHeight}:{width:t.width,height:t.height}}function $t(t){return il(t)?"canvas":rl(t)?"offscreencanvas":nl(t)?"imagebitmap":t.src}function ha(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement}var va=typeof OffscreenCanvas<"u";function rl(t){return va&&t instanceof OffscreenCanvas}function sl(t){return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement}function il(t){return typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement}function nl(t){return typeof ImageBitmap<"u"&&t instanceof ImageBitmap}function ol(t,e){var a=kt(e,"left",0),l=kt(e,"top",0),r=kt(e,"width",t.width),o=kt(e,"height",t.height),i=r,f=o;if(e.mode==="precision")return{srcLeft:a,srcTop:l,srcWidth:r,srcHeight:o,destWidth:i,destHeight:f};var c;return r>o?(c=r/o,i=Lt,f=Math.round(i/c)):(c=o/r,f=Lt,i=Math.round(f/c)),(i>r||f>o||i<xt||f<xt)&&(i=r,f=o),{srcLeft:a,srcTop:l,srcWidth:r,srcHeight:o,destWidth:i,destHeight:f}}var fl=typeof window>"u";function cl(){return fl?va?new OffscreenCanvas(1,1):null:document.createElement("canvas")}var ul="FastAverageColor: ";function Ge(t){return Error(ul+t)}function Pt(t,e){e||console.error(t)}var ga=function(){function t(){this.canvas=null,this.ctx=null}return t.prototype.getColorAsync=function(e,a){if(!e)return Promise.reject(Ge("call .getColorAsync() without resource."));if(typeof e=="string"){if(typeof Image>"u")return Promise.reject(Ge("resource as string is not supported in this environment"));var l=new Image;return l.crossOrigin=a&&a.crossOrigin||"",l.src=e,this.bindImageEvents(l,a)}else{if(ha(e)&&!e.complete)return this.bindImageEvents(e,a);var r=this.getColor(e,a);return r.error?Promise.reject(r.error):Promise.resolve(r)}},t.prototype.getColor=function(e,a){a=a||{};var l=Qt(a);if(!e){var r=Ge("call .getColor(null) without resource");return Pt(r,a.silent),this.prepareResult(l,r)}var o=ll(e),i=ol(o,a);if(!i.srcWidth||!i.srcHeight||!i.destWidth||!i.destHeight){var r=Ge('incorrect sizes for resource "'.concat($t(e),'"'));return Pt(r,a.silent),this.prepareResult(l,r)}if(!this.canvas&&(this.canvas=cl(),!this.canvas)){var r=Ge("OffscreenCanvas is not supported in this browser");return Pt(r,a.silent),this.prepareResult(l,r)}if(!this.ctx){if(this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx){var r=Ge("Canvas Context 2D is not supported in this browser");return Pt(r,a.silent),this.prepareResult(l)}this.ctx.imageSmoothingEnabled=!1}this.canvas.width=i.destWidth,this.canvas.height=i.destHeight;try{this.ctx.clearRect(0,0,i.destWidth,i.destHeight),this.ctx.drawImage(e,i.srcLeft,i.srcTop,i.srcWidth,i.srcHeight,0,0,i.destWidth,i.destHeight);var f=this.ctx.getImageData(0,0,i.destWidth,i.destHeight).data;return this.prepareResult(this.getColorFromArray4(f,a))}catch(c){var r=Ge("security error (CORS) for resource ".concat($t(e),`.
Details: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image`));return Pt(r,a.silent),!a.silent&&console.error(c),this.prepareResult(l,r)}},t.prototype.getColorFromArray4=function(e,a){a=a||{};var l=4,r=e.length,o=Qt(a);if(r<l)return o;var i=r-r%l,f=(a.step||1)*l,c;switch(a.algorithm||"sqrt"){case"simple":c=el;break;case"sqrt":c=tl;break;case"dominant":c=$a;break;default:throw Ge("".concat(a.algorithm," is unknown algorithm"))}return c(e,i,{defaultColor:o,ignoredColor:Za(a.ignoredColor),step:f})},t.prototype.prepareResult=function(e,a){var l=e.slice(0,3),r=[e[0],e[1],e[2],e[3]/255],o=Xa(e);return{value:[e[0],e[1],e[2],e[3]],rgb:"rgb("+l.join(",")+")",rgba:"rgba("+r.join(",")+")",hex:Yt(l),hexa:Yt(e),isDark:o,isLight:!o,error:a}},t.prototype.destroy=function(){this.canvas&&(this.canvas.width=1,this.canvas.height=1,this.canvas=null),this.ctx=null},t.prototype.bindImageEvents=function(e,a){var l=this;return new Promise(function(r,o){var i=function(){g();var p=l.getColor(e,a);p.error?o(p.error):r(p)},f=function(){g(),o(Ge('Error loading image "'.concat(e.src,'".')))},c=function(){g(),o(Ge('Image "'.concat(e.src,'" loading aborted')))},g=function(){e.removeEventListener("load",i),e.removeEventListener("error",f),e.removeEventListener("abort",c)};e.addEventListener("load",i),e.addEventListener("error",f),e.addEventListener("abort",c)})},t}();const ma=Oa({width:0,height:0,mobile:!1});function ea(t,e,a){const l=t.slice();return l[11]=e[a],l}function ta(t,e,a){const l=t.slice();return l[14]=e[a],l}function aa(t,e,a){const l=t.slice();return l[11]=e[a],l}function la(t){let e,a=t[11]+"",l,r;return{c(){e=d("div"),l=V(a),r=P(),this.h()},l(o){e=h(o,"DIV",{class:!0});var i=m(e);l=A(i,a),r=k(i),i.forEach(u),this.h()},h(){n(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(o,i){_e(o,e,i),s(e,l),s(e,r)},p(o,i){i&32&&a!==(a=o[11]+"")&&L(l,a)},d(o){o&&u(e)}}}function ra(t){let e,a=t[14].toUpperCase()+"",l;return{c(){e=d("div"),l=V(a),this.h()},l(r){e=h(r,"DIV",{class:!0});var o=m(e);l=A(o,a),o.forEach(u),this.h()},h(){n(e,"class","badge variant-filled-surface")},m(r,o){_e(r,e,o),s(e,l)},p(r,o){o&1&&a!==(a=r[14].toUpperCase()+"")&&L(l,a)},d(r){r&&u(e)}}}function sa(t){let e,a=t[11]+"",l,r;return{c(){e=d("div"),l=V(a),r=P(),this.h()},l(o){e=h(o,"DIV",{class:!0});var i=m(e);l=A(i,a),r=k(i),i.forEach(u),this.h()},h(){n(e,"class","badge badge-glass my-auto py-0.5 px-1")},m(o,i){_e(o,e,i),s(e,l),s(e,r)},p(o,i){i&32&&a!==(a=o[11]+"")&&L(l,a)},d(o){o&&u(e)}}}function dl(t){var ct,B;let e,a,l,r,o,i,f,c,g,p=t[0].name+"",C,F,_,b,y,U=t[0].manufacturer+"",M,T,R,J,X=t[0].year+"",j,le,w,G,Q=(((ct=t[0].designers)==null?void 0:ct.join(", "))||"-")+"",E,O,W,K,q,ee,z,ue="Updated at",it,re,de=Ct(t[0].updatedAt)+"",we,bt,Ne,He,he,Ee,wt="Type",Xe,Re,ve=(t[0].type||"-")+"",Ie,Et,te,De,je,xe,se,Z,Fe,Oe=t[0].name+"",$e,ie,Ce,fe,Te=t[0].manufacturer+"",Ze,nt,ye=t[0].year+"",Le,et,ot,ce,Ve=(((B=t[0].designers)==null?void 0:B.join(", "))||"")+"",Je,tt,Ke,ft,We=qe(t[5]),$=[];for(let v=0;v<We.length;v+=1)$[v]=la(aa(t,We,v));let be=qe(t[0].theme||[]),Y=[];for(let v=0;v<be.length;v+=1)Y[v]=ra(ta(t,be,v));let Ae=qe(t[5]),x=[];for(let v=0;v<Ae.length;v+=1)x[v]=sa(ea(t,Ae,v));return{c(){e=d("a"),a=d("div"),l=d("img"),i=P(),f=d("div"),c=d("div"),g=d("p"),C=V(p),F=P();for(let v=0;v<$.length;v+=1)$[v].c();_=P(),b=d("div"),y=d("p"),M=V(U),T=P(),R=d("p"),J=V("("),j=V(X),le=V(")"),w=P(),G=d("p"),E=V(Q),O=P(),W=d("div");for(let v=0;v<Y.length;v+=1)Y[v].c();K=P(),q=d("div"),ee=d("div"),z=d("p"),z.textContent=ue,it=P(),re=d("p"),we=V(de),bt=P(),Ne=d("div"),He=P(),he=d("div"),Ee=d("p"),Ee.textContent=wt,Xe=P(),Re=d("p"),Ie=V(ve),Et=P(),te=d("img"),xe=P(),se=d("div"),Z=d("div"),Fe=d("p"),$e=V(Oe),ie=P();for(let v=0;v<x.length;v+=1)x[v].c();Ce=P(),fe=d("p"),Ze=V(Te),nt=V(" ("),Le=V(ye),et=V(")"),ot=P(),ce=d("p"),Je=V(Ve),this.h()},l(v){e=h(v,"A",{class:!0,href:!0,id:!0});var S=m(e);a=h(S,"DIV",{class:!0,style:!0});var N=m(a);l=h(N,"IMG",{src:!0,alt:!0,style:!0,class:!0}),i=k(N),f=h(N,"DIV",{class:!0,style:!0});var ne=m(f);c=h(ne,"DIV",{class:!0});var D=m(c);g=h(D,"P",{class:!0});var ge=m(g);C=A(ge,p),ge.forEach(u),F=k(D);for(let me=0;me<$.length;me+=1)$[me].l(D);D.forEach(u),_=k(ne),b=h(ne,"DIV",{class:!0});var I=m(b);y=h(I,"P",{class:!0});var H=m(y);M=A(H,U),H.forEach(u),T=k(I),R=h(I,"P",{});var Pe=m(R);J=A(Pe,"("),j=A(Pe,X),le=A(Pe,")"),Pe.forEach(u),I.forEach(u),w=k(ne),G=h(ne,"P",{class:!0});var oe=m(G);E=A(oe,Q),oe.forEach(u),O=k(ne),W=h(ne,"DIV",{class:!0});var ke=m(W);for(let me=0;me<Y.length;me+=1)Y[me].l(ke);ke.forEach(u),K=k(ne),q=h(ne,"DIV",{class:!0});var Me=m(q);ee=h(Me,"DIV",{class:!0});var Be=m(ee);z=h(Be,"P",{class:!0,"data-svelte-h":!0}),Ot(z)!=="svelte-g6tq99"&&(z.textContent=ue),it=k(Be),re=h(Be,"P",{class:!0});var Ue=m(re);we=A(Ue,de),Ue.forEach(u),Be.forEach(u),bt=k(Me),Ne=h(Me,"DIV",{class:!0}),m(Ne).forEach(u),He=k(Me),he=h(Me,"DIV",{class:!0});var ze=m(he);Ee=h(ze,"P",{class:!0,"data-svelte-h":!0}),Ot(Ee)!=="svelte-1h1g7sd"&&(Ee.textContent=wt),Xe=k(ze),Re=h(ze,"P",{class:!0});var ut=m(Re);Ie=A(ut,ve),ut.forEach(u),ze.forEach(u),Me.forEach(u),ne.forEach(u),N.forEach(u),Et=k(S),te=h(S,"IMG",{src:!0,alt:!0,class:!0}),xe=k(S),se=h(S,"DIV",{class:!0});var Ye=m(se);Z=h(Ye,"DIV",{class:!0});var Se=m(Z);Fe=h(Se,"P",{class:!0});var dt=m(Fe);$e=A(dt,Oe),dt.forEach(u),ie=k(Se);for(let me=0;me<x.length;me+=1)x[me].l(Se);Se.forEach(u),Ce=k(Ye),fe=h(Ye,"P",{});var at=m(fe);Ze=A(at,Te),nt=A(at," ("),Le=A(at,ye),et=A(at,")"),at.forEach(u),ot=k(Ye),ce=h(Ye,"P",{class:!0});var ht=m(ce);Je=A(ht,Ve),ht.forEach(u),Ye.forEach(u),S.forEach(u),this.h()},h(){pe(l.src,r=t[2])||n(l,"src",r),n(l,"alt",o=t[0].id),lt(l,"height","36%"),n(l,"class","absolute top-0 left-0 right-0 w-full bgImage z-0 object-cover opacity-10"),n(g,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),n(c,"class","flex gap-2 max-w-full"),n(y,"class","text-ellipsis whitespace-nowrap overflow-hidden"),n(b,"class","flex gap-1 text-center max-w-full"),n(G,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),n(W,"class","flex gap-2 mt-4 flex-wrap"),n(z,"class","text-xs font-bold uppercase opacity-40"),n(re,"class",""),n(ee,"class","flex flex-col items-center justify-center flex-1 gap-1"),n(Ne,"class","bg-surface-900-50-token h-full w-px opacity-20"),n(Ee,"class","text-xs font-bold uppercase opacity-40"),n(Re,"class",""),n(he,"class","flex flex-col items-center justify-center flex-1 gap-1"),n(q,"class","flex mt-auto w-full"),n(f,"class","flex flex-col max-w-full w-full absolute items-center p-2 bottom-0"),lt(f,"top","calc(90% - 13rem)"),n(a,"class","hoverCard card !bg-surface-100 dark:!bg-surface-600 shadow-2xl shadow-black absolute top-0 -left-4 -right-4 bottom-0 -z-1 flex flex-col p-4 gap-0.5 items-center svelte-1jt2e09"),lt(a,"background","color-mix(in lch, rgb(var(--color-surface-"+(t[6]?100:900)+")) "+(t[6]?80:60)+"%, "+(t[3]||`rgb(var(--color-surface-${t[6]?100:600})`)+")",1),ae(a,"hovered",t[4]),pe(te.src,De=t[2])||n(te,"src",De),n(te,"alt",je=t[0].name),n(te,"class","card pinImage bg-surface-300-600-token shadow-black svelte-1jt2e09"),ae(te,"hovered",t[4]),ae(te,"shadow-lg",t[4]),n(Fe,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),n(Z,"class","flex gap-2"),n(ce,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full"),n(se,"class","info flex flex-col py-4 svelte-1jt2e09"),ae(se,"opacity-0",t[4]),n(e,"class","wrapper relative z-0"),n(e,"href",t[1]),n(e,"id",tt=t[0].id)},m(v,S){_e(v,e,S),s(e,a),s(a,l),s(a,i),s(a,f),s(f,c),s(c,g),s(g,C),s(c,F);for(let N=0;N<$.length;N+=1)$[N]&&$[N].m(c,null);s(f,_),s(f,b),s(b,y),s(y,M),s(b,T),s(b,R),s(R,J),s(R,j),s(R,le),s(f,w),s(f,G),s(G,E),s(f,O),s(f,W);for(let N=0;N<Y.length;N+=1)Y[N]&&Y[N].m(W,null);s(f,K),s(f,q),s(q,ee),s(ee,z),s(ee,it),s(ee,re),s(re,we),s(q,bt),s(q,Ne),s(q,He),s(q,he),s(he,Ee),s(he,Xe),s(he,Re),s(Re,Ie),s(e,Et),s(e,te),s(e,xe),s(e,se),s(se,Z),s(Z,Fe),s(Fe,$e),s(Z,ie);for(let N=0;N<x.length;N+=1)x[N]&&x[N].m(Z,null);s(se,Ce),s(se,fe),s(fe,Ze),s(fe,nt),s(fe,Le),s(fe,et),s(se,ot),s(se,ce),s(ce,Je),Ke||(ft=[Dt(e,"mouseenter",t[7]),Dt(e,"mouseleave",t[8])],Ke=!0)},p(v,[S]){var N,ne;if(S&4&&!pe(l.src,r=v[2])&&n(l,"src",r),S&1&&o!==(o=v[0].id)&&n(l,"alt",o),S&1&&p!==(p=v[0].name+"")&&L(C,p),S&32){We=qe(v[5]);let D;for(D=0;D<We.length;D+=1){const ge=aa(v,We,D);$[D]?$[D].p(ge,S):($[D]=la(ge),$[D].c(),$[D].m(c,null))}for(;D<$.length;D+=1)$[D].d(1);$.length=We.length}if(S&1&&U!==(U=v[0].manufacturer+"")&&L(M,U),S&1&&X!==(X=v[0].year+"")&&L(j,X),S&1&&Q!==(Q=(((N=v[0].designers)==null?void 0:N.join(", "))||"-")+"")&&L(E,Q),S&1){be=qe(v[0].theme||[]);let D;for(D=0;D<be.length;D+=1){const ge=ta(v,be,D);Y[D]?Y[D].p(ge,S):(Y[D]=ra(ge),Y[D].c(),Y[D].m(W,null))}for(;D<Y.length;D+=1)Y[D].d(1);Y.length=be.length}if(S&1&&de!==(de=Ct(v[0].updatedAt)+"")&&L(we,de),S&1&&ve!==(ve=(v[0].type||"-")+"")&&L(Ie,ve),S&72&&lt(a,"background","color-mix(in lch, rgb(var(--color-surface-"+(v[6]?100:900)+")) "+(v[6]?80:60)+"%, "+(v[3]||`rgb(var(--color-surface-${v[6]?100:600})`)+")",1),S&16&&ae(a,"hovered",v[4]),S&4&&!pe(te.src,De=v[2])&&n(te,"src",De),S&1&&je!==(je=v[0].name)&&n(te,"alt",je),S&16&&ae(te,"hovered",v[4]),S&16&&ae(te,"shadow-lg",v[4]),S&1&&Oe!==(Oe=v[0].name+"")&&L($e,Oe),S&32){Ae=qe(v[5]);let D;for(D=0;D<Ae.length;D+=1){const ge=ea(v,Ae,D);x[D]?x[D].p(ge,S):(x[D]=sa(ge),x[D].c(),x[D].m(Z,null))}for(;D<x.length;D+=1)x[D].d(1);x.length=Ae.length}S&1&&Te!==(Te=v[0].manufacturer+"")&&L(Ze,Te),S&1&&ye!==(ye=v[0].year+"")&&L(Le,ye),S&1&&Ve!==(Ve=(((ne=v[0].designers)==null?void 0:ne.join(", "))||"")+"")&&L(Je,Ve),S&16&&ae(se,"opacity-0",v[4]),S&2&&n(e,"href",v[1]),S&1&&tt!==(tt=v[0].id)&&n(e,"id",tt)},i:vt,o:vt,d(v){v&&u(e),Mt($,v),Mt(Y,v),Mt(x,v),Ke=!1,ca(ft)}}}function hl(t,e,a){let l,r,o,i;rt(t,ma,b=>a(9,o=b)),rt(t,da,b=>a(6,i=b));const f=new ga;let{file:c=ua}=e,{href:g=""}=e,p="",C=!1;const F=()=>{o.mobile||a(4,C=!0)},_=()=>{o.mobile||a(4,C=!1)};return t.$$set=b=>{"file"in b&&a(0,c=b.file),"href"in b&&a(1,g=b.href)},t.$$.update=()=>{t.$$.dirty&1&&a(2,l=ya(c)),t.$$.dirty&1&&a(5,r=Array.from(new Set((c.tableFiles||[]).map(b=>b.tableFormat).filter(b=>!!b)))),t.$$.dirty&4&&l&&f.getColorAsync(l).then(b=>{b&&a(3,p=b.rgb)})},[c,g,l,p,C,r,i,F,_]}class vl extends pt{constructor(e){super(),_t(this,e,hl,dl,mt,{file:0,href:1})}}const Rt=""+new URL("../assets/tablePlaceholder.f13766a0.jpg",import.meta.url).href,ia={FastFlips:"bg-red-500",SSF:"bg-cyan-500","P-ROC":"bg-bg-yellow-500",FlexDMD:"bg-orange-500",PuP:"bg-sky-500",VR:"bg-cyan-500",Hybrid:"bg-violet-500",Music:"bg-rose-500",FSS:"bg-green-500","4k":"bg-teal-500",MOD:"bg-purple-500",VPX:"bg-emerald-500",VP9:"bg-emerald-500",PM5:"bg-green-500",FX3:"bg-lime-500",FX2:"bg-lime-500",FX:"bg-lime-500",FP:"bg-yellow-500",B2S:"bg-pink-500",ROM:"bg-fuchsia-500",POV:"bg-green-500",Color:"bg-red-500",Sound:"bg-rose-500",Wheel:"bg-purple-500",Rules:"bg-orange-500",MediaPack:"bg-yellow-500",Topper:"bg-red-500","PinX Sound":"bg-sore-500","incl. B2S":"bg-pink-500","incl. ROM":"bg-fuchsia-500","incl. Art":"bg-purple-500","incl. PuP":"bg-sky-500","incl. Video":"bg-sky-500","no ROM":"bg-fuchsia-500",Adult:"bg-slate-500",Kids:"bg-indigo-500",LUT:"bg-gray-500",nFozzy:"bg-blue-500",Scorbit:"bg-indigo-500",Fleep:"bg-yellow-500"};function na(t,e,a){const l=t.slice();return l[1]=e[a],l}function oa(t){let e,a=qe(t[0]||[]),l=[];for(let r=0;r<a.length;r+=1)l[r]=fa(na(t,a,r));return{c(){e=d("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){e=h(r,"DIV",{class:!0});var o=m(e);for(let i=0;i<l.length;i+=1)l[i].l(o);o.forEach(u),this.h()},h(){n(e,"class","flex gap-1 flex-wrap")},m(r,o){_e(r,e,o);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(e,null)},p(r,o){if(o&1){a=qe(r[0]||[]);let i;for(i=0;i<a.length;i+=1){const f=na(r,a,i);l[i]?l[i].p(f,o):(l[i]=fa(f),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=a.length}},d(r){r&&u(e),Mt(l,r)}}}function fa(t){let e,a,l,r=t[1].toUpperCase()+"",o,i;return{c(){e=d("div"),a=d("span"),o=V(r),i=P(),this.h()},l(f){e=h(f,"DIV",{class:!0});var c=m(e);a=h(c,"SPAN",{class:!0}),m(a).forEach(u),o=A(c,r),i=k(c),c.forEach(u),this.h()},h(){n(a,"class",l="rounded-full h-2 w-2 "+(ia[t[1]]||"bg-slate-500")+" mr-2"),n(e,"class","badge variant-ringed-surface px-1.5 py-0.5")},m(f,c){_e(f,e,c),s(e,a),s(e,o),s(e,i)},p(f,c){c&1&&l!==(l="rounded-full h-2 w-2 "+(ia[f[1]]||"bg-slate-500")+" mr-2")&&n(a,"class",l),c&1&&r!==(r=f[1].toUpperCase()+"")&&L(o,r)},d(f){f&&u(e)}}}function gl(t){var l;let e,a=((l=t[0])==null?void 0:l.length)&&oa(t);return{c(){a&&a.c(),e=jt()},l(r){a&&a.l(r),e=jt()},m(r,o){a&&a.m(r,o),_e(r,e,o)},p(r,[o]){var i;(i=r[0])!=null&&i.length?a?a.p(r,o):(a=oa(r),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},i:vt,o:vt,d(r){r&&u(e),a&&a.d(r)}}}function ml(t,e,a){let{data:l=[]}=e;return t.$$set=r=>{"data"in r&&a(0,l=r.data)},[l]}class pl extends pt{constructor(e){super(),_t(this,e,ml,gl,mt,{data:0})}}function _l(t){var N,ne,D,ge;let e,a,l,r,o,i,f,c,g,p=((N=t[0].game)==null?void 0:N.name)+"",C,F,_,b=t[0].tableFormat+"",y,U,M,T,R,J,X=t[4].manufacturer+"",j,le,w,G,Q=t[4].year+"",E,O,W,K,q=(((ne=t[0].authors)==null?void 0:ne.join(", "))||"-")+"",ee,z,ue,it,re,de,we,bt="Updated at",Ne,He,he=Ct(t[0].updatedAt)+"",Ee,wt,Xe,Re,ve,Ie,Et="Added at",te,De,je=Ct(t[0].createdAt||t[0].updatedAt)+"",xe,se,Z,Fe,Oe,$e,ie,Ce,fe,Te=((D=t[0].game)==null?void 0:D.name)+"",Ze,nt,ye,Le=t[0].tableFormat+"",et,ot,ce,Ve=t[4].manufacturer+"",Je,tt,Ke=t[4].year+"",ft,We,$,be,Y=((ge=t[0].authors)==null?void 0:ge.join(", "))+"",Ae,x,ct,B,v,S;return M=new Bt({props:{game:t[4]}}),ue=new pl({props:{data:t[0].features}}),{c(){e=d("a"),a=d("div"),l=d("img"),i=P(),f=d("div"),c=d("div"),g=d("p"),C=V(p),F=P(),_=d("div"),y=V(b),U=P(),Ft(M.$$.fragment),T=P(),R=d("div"),J=d("p"),j=V(X),le=P(),w=d("p"),G=V("("),E=V(Q),O=V(")"),W=P(),K=d("p"),ee=V(q),z=P(),Ft(ue.$$.fragment),it=P(),re=d("div"),de=d("div"),we=d("p"),we.textContent=bt,Ne=P(),He=d("p"),Ee=V(he),wt=P(),Xe=d("div"),Re=P(),ve=d("div"),Ie=d("p"),Ie.textContent=Et,te=P(),De=d("p"),xe=V(je),se=P(),Z=d("img"),$e=P(),ie=d("div"),Ce=d("div"),fe=d("p"),Ze=V(Te),nt=P(),ye=d("div"),et=V(Le),ot=P(),ce=d("p"),Je=V(Ve),tt=V(" ("),ft=V(Ke),We=V(")"),$=P(),be=d("p"),Ae=V(Y),this.h()},l(I){e=h(I,"A",{class:!0,href:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var H=m(e);a=h(H,"DIV",{style:!0,class:!0});var Pe=m(a);l=h(Pe,"IMG",{src:!0,alt:!0,style:!0,class:!0}),i=k(Pe),f=h(Pe,"DIV",{class:!0,style:!0});var oe=m(f);c=h(oe,"DIV",{class:!0});var ke=m(c);g=h(ke,"P",{class:!0});var Me=m(g);C=A(Me,p),Me.forEach(u),F=k(ke),_=h(ke,"DIV",{class:!0});var Be=m(_);y=A(Be,b),Be.forEach(u),U=k(ke),Tt(M.$$.fragment,ke),ke.forEach(u),T=k(oe),R=h(oe,"DIV",{class:!0});var Ue=m(R);J=h(Ue,"P",{class:!0});var ze=m(J);j=A(ze,X),ze.forEach(u),le=k(Ue),w=h(Ue,"P",{});var ut=m(w);G=A(ut,"("),E=A(ut,Q),O=A(ut,")"),ut.forEach(u),Ue.forEach(u),W=k(oe),K=h(oe,"P",{class:!0});var Ye=m(K);ee=A(Ye,q),Ye.forEach(u),z=k(oe),Tt(ue.$$.fragment,oe),it=k(oe),re=h(oe,"DIV",{class:!0});var Se=m(re);de=h(Se,"DIV",{class:!0});var dt=m(de);we=h(dt,"P",{class:!0,"data-svelte-h":!0}),Ot(we)!=="svelte-g6tq99"&&(we.textContent=bt),Ne=k(dt),He=h(dt,"P",{class:!0});var at=m(He);Ee=A(at,he),at.forEach(u),dt.forEach(u),wt=k(Se),Xe=h(Se,"DIV",{class:!0}),m(Xe).forEach(u),Re=k(Se),ve=h(Se,"DIV",{class:!0});var ht=m(ve);Ie=h(ht,"P",{class:!0,"data-svelte-h":!0}),Ot(Ie)!=="svelte-1gbi7dm"&&(Ie.textContent=Et),te=k(ht),De=h(ht,"P",{class:!0});var me=m(De);xe=A(me,je),me.forEach(u),ht.forEach(u),Se.forEach(u),oe.forEach(u),Pe.forEach(u),se=k(H),Z=h(H,"IMG",{src:!0,alt:!0,class:!0}),$e=k(H),ie=h(H,"DIV",{class:!0});var It=m(ie);Ce=h(It,"DIV",{class:!0});var St=m(Ce);fe=h(St,"P",{class:!0});var zt=m(fe);Ze=A(zt,Te),zt.forEach(u),nt=k(St),ye=h(St,"DIV",{class:!0});var Gt=m(ye);et=A(Gt,Le),Gt.forEach(u),St.forEach(u),ot=k(It),ce=h(It,"P",{});var yt=m(ce);Je=A(yt,Ve),tt=A(yt," ("),ft=A(yt,Ke),We=A(yt,")"),yt.forEach(u),$=k(It),be=h(It,"P",{class:!0});var qt=m(be);Ae=A(qt,Y),qt.forEach(u),It.forEach(u),H.forEach(u),this.h()},h(){var I;pe(l.src,r=t[0].imgUrl||Rt)||n(l,"src",r),n(l,"alt",o=t[0].id),lt(l,"height","35%"),n(l,"class","absolute top-0 left-0 right-0 w-full bgImage z-0 object-cover opacity-60 svelte-gfpzxg"),n(g,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),n(_,"class","badge badge-glass my-auto py-0.5 px-1"),n(c,"class","flex gap-2 max-w-full"),n(J,"class","text-ellipsis whitespace-nowrap overflow-hidden"),n(R,"class","flex gap-1 text-center"),n(K,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden max-w-full mb-4"),n(we,"class","text-xs font-bold uppercase opacity-40"),n(He,"class",""),n(de,"class","flex flex-col items-center justify-center flex-1 gap-1"),n(Xe,"class","bg-surface-900-50-token h-full w-px opacity-20"),n(Ie,"class","text-xs font-bold uppercase opacity-40"),n(De,"class",""),n(ve,"class","flex flex-col items-center justify-center flex-1 gap-1"),n(re,"class","flex mt-auto w-full"),n(f,"class","flex flex-col max-w-full w-full absolute items-center p-4 gap-0.5 bottom-0"),lt(f,"top","calc(88.5% - 14rem)"),lt(a,"background","color-mix(in lch, rgb(var(--color-surface-"+(t[5]?100:900)+")) "+(t[5]?80:60)+"%, "+(t[2]||`rgb(var(--color-surface-${t[5]?100:600})`)+")",1),n(a,"class","card !bg-surface-100 dark:!bg-surface-600 shadow-2xl shadow-black absolute top-0 -left-4 -right-4 bottom-0 -z-1 flex flex-col p-4 gap-0.5 items-center hoverCard svelte-gfpzxg"),ae(a,"hovered",t[3]),pe(Z.src,Fe=t[0].imgUrl||Rt)||n(Z,"src",Fe),n(Z,"alt",Oe=t[0].id),n(Z,"class","card pinImage bg-surface-300-600-token shadow-black svelte-gfpzxg"),ae(Z,"hovered",t[3]),ae(Z,"shadow-lg",t[3]),n(fe,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden"),n(ye,"class","badge badge-glass my-auto py-0.5 px-1"),n(Ce,"class","flex gap-2"),n(be,"class","opacity-60 text-ellipsis whitespace-nowrap overflow-hidden"),n(ie,"class","flex flex-col py-4 info svelte-gfpzxg"),ae(ie,"opacity-0",t[3]),n(e,"class","wrapper relative z-0 inline-block max-w-full min-w-0 w-full"),n(e,"href",t[1]),n(e,"id",x=t[0].id),n(e,"data-gameid",ct=(I=t[0].game)==null?void 0:I.id),n(e,"data-filetype","tableFiles")},m(I,H){_e(I,e,H),s(e,a),s(a,l),s(a,i),s(a,f),s(f,c),s(c,g),s(g,C),s(c,F),s(c,_),s(_,y),s(c,U),Vt(M,c,null),s(f,T),s(f,R),s(R,J),s(J,j),s(R,le),s(R,w),s(w,G),s(w,E),s(w,O),s(f,W),s(f,K),s(K,ee),s(f,z),Vt(ue,f,null),s(f,it),s(f,re),s(re,de),s(de,we),s(de,Ne),s(de,He),s(He,Ee),s(re,wt),s(re,Xe),s(re,Re),s(re,ve),s(ve,Ie),s(ve,te),s(ve,De),s(De,xe),s(e,se),s(e,Z),s(e,$e),s(e,ie),s(ie,Ce),s(Ce,fe),s(fe,Ze),s(Ce,nt),s(Ce,ye),s(ye,et),s(ie,ot),s(ie,ce),s(ce,Je),s(ce,tt),s(ce,ft),s(ce,We),s(ie,$),s(ie,be),s(be,Ae),B=!0,v||(S=[Dt(e,"mouseenter",t[7]),Dt(e,"mouseleave",t[8])],v=!0)},p(I,[H]){var ke,Me,Be,Ue,ze;(!B||H&1&&!pe(l.src,r=I[0].imgUrl||Rt))&&n(l,"src",r),(!B||H&1&&o!==(o=I[0].id))&&n(l,"alt",o),(!B||H&1)&&p!==(p=((ke=I[0].game)==null?void 0:ke.name)+"")&&L(C,p),(!B||H&1)&&b!==(b=I[0].tableFormat+"")&&L(y,b);const Pe={};H&16&&(Pe.game=I[4]),M.$set(Pe),(!B||H&16)&&X!==(X=I[4].manufacturer+"")&&L(j,X),(!B||H&16)&&Q!==(Q=I[4].year+"")&&L(E,Q),(!B||H&1)&&q!==(q=(((Me=I[0].authors)==null?void 0:Me.join(", "))||"-")+"")&&L(ee,q);const oe={};H&1&&(oe.data=I[0].features),ue.$set(oe),(!B||H&1)&&he!==(he=Ct(I[0].updatedAt)+"")&&L(Ee,he),(!B||H&1)&&je!==(je=Ct(I[0].createdAt||I[0].updatedAt)+"")&&L(xe,je),(!B||H&36)&&lt(a,"background","color-mix(in lch, rgb(var(--color-surface-"+(I[5]?100:900)+")) "+(I[5]?80:60)+"%, "+(I[2]||`rgb(var(--color-surface-${I[5]?100:600})`)+")",1),(!B||H&8)&&ae(a,"hovered",I[3]),(!B||H&1&&!pe(Z.src,Fe=I[0].imgUrl||Rt))&&n(Z,"src",Fe),(!B||H&1&&Oe!==(Oe=I[0].id))&&n(Z,"alt",Oe),(!B||H&8)&&ae(Z,"hovered",I[3]),(!B||H&8)&&ae(Z,"shadow-lg",I[3]),(!B||H&1)&&Te!==(Te=((Be=I[0].game)==null?void 0:Be.name)+"")&&L(Ze,Te),(!B||H&1)&&Le!==(Le=I[0].tableFormat+"")&&L(et,Le),(!B||H&16)&&Ve!==(Ve=I[4].manufacturer+"")&&L(Je,Ve),(!B||H&16)&&Ke!==(Ke=I[4].year+"")&&L(ft,Ke),(!B||H&1)&&Y!==(Y=((Ue=I[0].authors)==null?void 0:Ue.join(", "))+"")&&L(Ae,Y),(!B||H&8)&&ae(ie,"opacity-0",I[3]),(!B||H&2)&&n(e,"href",I[1]),(!B||H&1&&x!==(x=I[0].id))&&n(e,"id",x),(!B||H&1&&ct!==(ct=(ze=I[0].game)==null?void 0:ze.id))&&n(e,"data-gameid",ct)},i(I){B||(st(M.$$.fragment,I),st(ue.$$.fragment,I),B=!0)},o(I){gt(M.$$.fragment,I),gt(ue.$$.fragment,I),B=!1},d(I){I&&u(e),At(M),At(ue),v=!1,ca(S)}}}function bl(t,e,a){let l,r,o,i;rt(t,ma,y=>a(10,r=y)),rt(t,da,y=>a(5,i=y));const f=new ga,{dbStore:c}=Wt;rt(t,c,y=>a(9,o=y));let{file:g=Ia}=e,{href:p=""}=e,C="",F=!1;const _=()=>{r.mobile||a(3,F=!0)},b=()=>{r.mobile||a(3,F=!1)};return t.$$set=y=>{"file"in y&&a(0,g=y.file),"href"in y&&a(1,p=y.href)},t.$$.update=()=>{var y;t.$$.dirty&513&&a(4,l=(y=g==null?void 0:g.game)!=null&&y.id?o[g.game.id]:ua),t.$$.dirty&1&&g.imgUrl&&f.getColorAsync(g.imgUrl).then(U=>{U&&a(2,C=U.rgb)})},[g,p,C,F,l,i,c,_,b,o]}class wl extends pt{constructor(e){super(),_t(this,e,bl,_l,mt,{file:0,href:1})}}function El(t){var U;let e,a,l,r,o,i,f,c,g=t[0].title+"",p,C,F,_=((U=t[0].authors)==null?void 0:U.join(", "))+"",b,y;return{c(){e=d("a"),a=d("img"),i=P(),f=d("div"),c=d("p"),p=V(g),C=P(),F=d("p"),b=V(_),this.h()},l(M){e=h(M,"A",{href:!0,class:!0,id:!0,"data-gameid":!0,"data-filetype":!0});var T=m(e);a=h(T,"IMG",{alt:!0,title:!0,class:!0,width:!0,src:!0}),i=k(T),f=h(T,"DIV",{class:!0});var R=m(f);c=h(R,"P",{class:!0});var J=m(c);p=A(J,g),J.forEach(u),C=k(R),F=h(R,"P",{class:!0});var X=m(F);b=A(X,_),X.forEach(u),R.forEach(u),T.forEach(u),this.h()},h(){n(a,"alt",l=t[0].youtubeId),n(a,"title",r=t[0].title),n(a,"class","card aspectTable hover:brightness-125 hover:scale-110 transition-all svelte-cprdlx"),n(a,"width","352"),pe(a.src,o=`https://img.youtube.com/vi/${t[0].youtubeId}/0.jpg`)||n(a,"src",o),ae(a,"glow",t[2]),n(c,"class","font-bold text-ellipsis whitespace-nowrap overflow-hidden leading-4"),n(F,"class","text-ellipsis whitespace-nowrap overflow-hidden opacity-60 pb-1"),n(f,"class","flex flex-col py-4"),n(e,"href",t[1]),n(e,"class","flex flex-col"),n(e,"id",y=t[0].id),n(e,"data-gameid",t[3]),n(e,"data-filetype","b2sFiles")},m(M,T){_e(M,e,T),s(e,a),s(e,i),s(e,f),s(f,c),s(c,p),s(f,C),s(f,F),s(F,b)},p(M,[T]){var R;T&1&&l!==(l=M[0].youtubeId)&&n(a,"alt",l),T&1&&r!==(r=M[0].title)&&n(a,"title",r),T&1&&!pe(a.src,o=`https://img.youtube.com/vi/${M[0].youtubeId}/0.jpg`)&&n(a,"src",o),T&4&&ae(a,"glow",M[2]),T&1&&g!==(g=M[0].title+"")&&L(p,g),T&1&&_!==(_=((R=M[0].authors)==null?void 0:R.join(", "))+"")&&L(b,_),T&2&&n(e,"href",M[1]),T&1&&y!==(y=M[0].id)&&n(e,"id",y),T&8&&n(e,"data-gameid",M[3])},i:vt,o:vt,d(M){M&&u(e)}}}function Il(t,e,a){let{file:l=Ca}=e,{href:r=""}=e,{active:o=!1}=e,{gameId:i}=e;return t.$$set=f=>{"file"in f&&a(0,l=f.file),"href"in f&&a(1,r=f.href),"active"in f&&a(2,o=f.active),"gameId"in f&&a(3,i=f.gameId)},[l,r,o,i]}class Cl extends pt{constructor(e){super(),_t(this,e,Il,El,mt,{file:0,href:1,active:2,gameId:3})}}const Hl={game:{route:"games",name:"Games",component:vl},tableFiles:{route:"tables",name:"Tables",component:wl},b2sFiles:{route:"b2s",name:"Backglasses",component:za},tutorialFiles:{route:"tutorials",name:"Tutorials",component:Cl,icon:Xt},pupPackFiles:{route:"puppacks",name:"PuP Packs",component:Qe,icon:Fa},romFiles:{route:"roms",name:"Roms",component:Qe,icon:Ta},altColorFiles:{route:"coloredroms",name:"Colored Roms",component:Qe,icon:Va},altSoundFiles:{route:"altsounds",name:"Alt. Sounds",component:Qe,icon:Aa},topperFiles:{route:"toppers",name:"Toppers",component:Qe,icon:Sa},povFiles:{route:"pov",name:"POVs",component:Qe,icon:Ha},mediaPackFiles:{route:"mediapacks",name:"Media Packs",component:Qe,icon:Ra},wheelArtFiles:{route:"wheelart",name:"Wheelart",component:Qe,icon:ja},ruleFiles:{route:"rules",name:"Rules",component:Qe,icon:Xt}};export{pl as F,Rt as P,wl as T,ma as a,ga as b,Hl as m};
