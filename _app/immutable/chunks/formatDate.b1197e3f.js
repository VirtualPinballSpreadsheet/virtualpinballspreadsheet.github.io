import{w as Z,r as ce}from"./index.5ad6dccf.js";import{a2 as G}from"./scheduler.a4b5f5fa.js";import"./index.2698e3a4.js";const I={};function j(a){return a==="local"?localStorage:sessionStorage}function N(a,t,e){const r=(e==null?void 0:e.serializer)??JSON,n=(e==null?void 0:e.storage)??"local";function i(o,u){j(n).setItem(o,r.stringify(u))}if(!I[a]){const o=Z(t,s=>{const m=j(n).getItem(a);m&&s(r.parse(m));{const f=h=>{h.key===a&&s(h.newValue?r.parse(h.newValue):null)};return window.addEventListener("storage",f),()=>window.removeEventListener("storage",f)}}),{subscribe:u,set:c}=o;I[a]={set(s){i(a,s),c(s)},update(s){const m=s(G(o));i(a,m),c(m)},subscribe:u}}return I[a]}const fe=N("modeOsPrefers",!1),me=N("modeUserPrefers",void 0),he=N("modeCurrent",!1);function Bt(){const a=window.matchMedia("(prefers-color-scheme: light)").matches;return fe.set(a),a}function At(a){me.set(a)}function It(a){const t=document.documentElement.classList,e="dark";a===!0?t.remove(e):t.add(e),he.set(a)}function Qt(){const a=document.documentElement.classList,t=localStorage.getItem("modeUserPrefers")==="false",e=!("modeUserPrefers"in localStorage),r=window.matchMedia("(prefers-color-scheme: dark)").matches;t||e&&r?a.add("dark"):a.remove("dark")}const ee="(prefers-reduced-motion: reduce)";function ve(){return window.matchMedia(ee).matches}const Gt=ce(ve(),a=>{{const t=r=>{a(r.matches)},e=window.matchMedia(ee);return e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}}});const te="https://virtualpinballspreadsheet.github.io/vps-db/",ge=te+"db/vpsdb.json";te+`lastUpdated.json?ts=${new Date().getTime()}`;const Xt="VirtualPinballSpreadsheet",jt="vps-db",Vt="img/",Jt="games/",zt="staging",Kt=["tableFiles","povFiles","b2sFiles","romFiles","altColorFiles","altSoundFiles","pupPackFiles","wheelArtFiles","topperFiles","mediaPackFiles","soundFiles","ruleFiles","tutorialFiles"],we=["Hybrid","VR","FSS","4k","MOD","FastFlips","SSF","P-ROC","FlexDMD","Music","incl. B2S","incl. ROM","incl. Art","incl. PuP","incl. Video","no ROM","Kids","Adult","nFozzy","Fleep","LUT","Scorbit"],be=["2Screens","3Screens","FullDMD","incl. Table"],Zt=we.map(a=>({label:a,value:a})),ea=be.map(a=>({label:a,value:a})),ta={id:"",authors:[],tableFormat:"VPX",urls:[],updatedAt:0},ye={id:"",updatedAt:0,manufacturer:"",name:"???",year:0},aa={authors:[],id:"",updatedAt:0,urls:[]},ra={authors:[],id:"",updatedAt:0,title:"",youtubeId:"dQw4w9WgXcQ"},na={authors:[],id:"",updatedAt:0,urls:[]},$=Z({}),ae=N("lastUpdatedDb",0),pe=async()=>{try{const a=await Me(),t={};(await(await fetch(ge+`?&ts=${new Date().getTime()}`)).json()).forEach(n=>{const i=n.id;t[i]=n}),ae.set(a),$.set(t)}catch(a){console.log(a)}},Te=a=>{var r,n;const e=G($)[a];if(e){if(e.imgUrl)return e.imgUrl;if((r=e.b2sFiles)!=null&&r.length&&e.b2sFiles[0].imgUrl)return e.b2sFiles[0].imgUrl;if((n=e.tableFiles)!=null&&n.length&&e.tableFiles[0].imgUrl)return e.tableFiles[0].imgUrl}},De=a=>{const t=G($);if(t[a])return t[a];let e=ye;return Object.values(t).forEach(r=>{var n,i,o,u,c,s,m,f,h,v,w,p;(n=r.tableFiles)!=null&&n.some(d=>d.id===a)&&(e=r),(i=r.b2sFiles)!=null&&i.some(d=>d.id===a)&&(e=r),(o=r.romFiles)!=null&&o.some(d=>d.id===a)&&(e=r),(u=r.povFiles)!=null&&u.some(d=>d.id===a)&&(e=r),(c=r.altColorFiles)!=null&&c.some(d=>d.id===a)&&(e=r),(s=r.altSoundFiles)!=null&&s.some(d=>d.id===a)&&(e=r),(m=r.pupPackFiles)!=null&&m.some(d=>d.id===a)&&(e=r),(f=r.wheelArtFiles)!=null&&f.some(d=>d.id===a)&&(e=r),(h=r.mediaPackFiles)!=null&&h.some(d=>d.id===a)&&(e=r),(v=r.topperFiles)!=null&&v.some(d=>d.id===a)&&(e=r),(w=r.soundFiles)!=null&&w.some(d=>d.id===a)&&(e=r),(p=r.ruleFiles)!=null&&p.some(d=>d.id===a)&&(e=r)}),e},Me=async()=>{try{const t=await(await fetch(`https://virtualpinballspreadsheet.github.io/vps-db/lastUpdated.json?&ts=${new Date().getTime()}`)).json();return new Date(t).getTime()}catch{return 0}},ia={fetchDb:pe,getGameImage:Te,getGame:De,lastUpdated:ae,dbStore:$};function x(a){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(a)}function C(a){if(a===null||a===!0||a===!1)return NaN;var t=Number(a);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function g(a,t){if(t.length<a)throw new TypeError(a+" argument"+(a>1?"s":"")+" required, but only "+t.length+" present")}function y(a){g(1,arguments);var t=Object.prototype.toString.call(a);return a instanceof Date||x(a)==="object"&&t==="[object Date]"?new Date(a.getTime()):typeof a=="number"||t==="[object Number]"?new Date(a):((typeof a=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Ce(a,t){g(2,arguments);var e=y(a).getTime(),r=C(t);return new Date(e+r)}var Oe={};function L(){return Oe}function Pe(a){var t=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return t.setUTCFullYear(a.getFullYear()),a.getTime()-t.getTime()}function Se(a){return g(1,arguments),a instanceof Date||x(a)==="object"&&Object.prototype.toString.call(a)==="[object Date]"}function ke(a){if(g(1,arguments),!Se(a)&&typeof a!="number")return!1;var t=y(a);return!isNaN(Number(t))}function Ue(a,t){g(2,arguments);var e=C(t);return Ce(a,-e)}var Fe=864e5;function _e(a){g(1,arguments);var t=y(a),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),n=e-r;return Math.floor(n/Fe)+1}function E(a){g(1,arguments);var t=1,e=y(a),r=e.getUTCDay(),n=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function re(a){g(1,arguments);var t=y(a),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var n=E(r),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=E(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function We(a){g(1,arguments);var t=re(a),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=E(e);return r}var xe=6048e5;function Ee(a){g(1,arguments);var t=y(a),e=E(t).getTime()-We(t).getTime();return Math.round(e/xe)+1}function Y(a,t){var e,r,n,i,o,u,c,s;g(1,arguments);var m=L(),f=C((e=(r=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&n!==void 0?n:m.weekStartsOn)!==null&&r!==void 0?r:(c=m.locale)===null||c===void 0||(s=c.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&e!==void 0?e:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=y(a),v=h.getUTCDay(),w=(v<f?7:0)+v-f;return h.setUTCDate(h.getUTCDate()-w),h.setUTCHours(0,0,0,0),h}function ne(a,t){var e,r,n,i,o,u,c,s;g(1,arguments);var m=y(a),f=m.getUTCFullYear(),h=L(),v=C((e=(r=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:h.firstWeekContainsDate)!==null&&r!==void 0?r:(c=h.locale)===null||c===void 0||(s=c.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(v>=1&&v<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(f+1,0,v),w.setUTCHours(0,0,0,0);var p=Y(w,t),d=new Date(0);d.setUTCFullYear(f,0,v),d.setUTCHours(0,0,0,0);var P=Y(d,t);return m.getTime()>=p.getTime()?f+1:m.getTime()>=P.getTime()?f:f-1}function Ye(a,t){var e,r,n,i,o,u,c,s;g(1,arguments);var m=L(),f=C((e=(r=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:m.firstWeekContainsDate)!==null&&r!==void 0?r:(c=m.locale)===null||c===void 0||(s=c.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&e!==void 0?e:1),h=ne(a,t),v=new Date(0);v.setUTCFullYear(h,0,f),v.setUTCHours(0,0,0,0);var w=Y(v,t);return w}var Ne=6048e5;function $e(a,t){g(1,arguments);var e=y(a),r=Y(e,t).getTime()-Ye(e,t).getTime();return Math.round(r/Ne)+1}function l(a,t){for(var e=a<0?"-":"",r=Math.abs(a).toString();r.length<t;)r="0"+r;return e+r}var Le={y:function(t,e){var r=t.getUTCFullYear(),n=r>0?r:1-r;return l(e==="yy"?n%100:n,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):l(r+1,2)},d:function(t,e){return l(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return l(t.getUTCHours()%12||12,e.length)},H:function(t,e){return l(t.getUTCHours(),e.length)},m:function(t,e){return l(t.getUTCMinutes(),e.length)},s:function(t,e){return l(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,r-3));return l(i,e.length)}};const D=Le;var O={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Re={G:function(t,e,r){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return r.ordinalNumber(i,{unit:"year"})}return D.y(t,e)},Y:function(t,e,r,n){var i=ne(t,n),o=i>0?i:1-i;if(e==="YY"){var u=o%100;return l(u,2)}return e==="Yo"?r.ordinalNumber(o,{unit:"year"}):l(o,e.length)},R:function(t,e){var r=re(t);return l(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return l(r,e.length)},Q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return l(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return l(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,r){var n=t.getUTCMonth();switch(e){case"M":case"MM":return D.M(t,e);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,r){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return l(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,r,n){var i=$e(t,n);return e==="wo"?r.ordinalNumber(i,{unit:"week"}):l(i,e.length)},I:function(t,e,r){var n=Ee(t);return e==="Io"?r.ordinalNumber(n,{unit:"week"}):l(n,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):D.d(t,e)},D:function(t,e,r){var n=_e(t);return e==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):l(n,e.length)},E:function(t,e,r){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return l(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return l(o,e.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,r){var n=t.getUTCDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return l(i,e.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,r){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,r){var n=t.getUTCHours(),i;switch(n===12?i=O.noon:n===0?i=O.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,r){var n=t.getUTCHours(),i;switch(n>=17?i=O.evening:n>=12?i=O.afternoon:n>=4?i=O.morning:i=O.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return D.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):D.H(t,e)},K:function(t,e,r){var n=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(n,{unit:"hour"}):l(n,e.length)},k:function(t,e,r){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?r.ordinalNumber(n,{unit:"hour"}):l(n,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):D.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):D.s(t,e)},S:function(t,e){return D.S(t,e)},X:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return J(o);case"XXXX":case"XX":return M(o);case"XXXXX":case"XXX":default:return M(o,":")}},x:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return J(o);case"xxxx":case"xx":return M(o);case"xxxxx":case"xxx":default:return M(o,":")}},O:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+V(o,":");case"OOOO":default:return"GMT"+M(o,":")}},z:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+V(o,":");case"zzzz":default:return"GMT"+M(o,":")}},t:function(t,e,r,n){var i=n._originalDate||t,o=Math.floor(i.getTime()/1e3);return l(o,e.length)},T:function(t,e,r,n){var i=n._originalDate||t,o=i.getTime();return l(o,e.length)}};function V(a,t){var e=a>0?"-":"+",r=Math.abs(a),n=Math.floor(r/60),i=r%60;if(i===0)return e+String(n);var o=t||"";return e+String(n)+o+l(i,2)}function J(a,t){if(a%60===0){var e=a>0?"-":"+";return e+l(Math.abs(a)/60,2)}return M(a,t)}function M(a,t){var e=t||"",r=a>0?"-":"+",n=Math.abs(a),i=l(Math.floor(n/60),2),o=l(n%60,2);return r+i+e+o}const qe=Re;var z=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},ie=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},He=function(t,e){var r=t.match(/(P+)(p+)?/)||[],n=r[1],i=r[2];if(!i)return z(t,e);var o;switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",z(n,e)).replace("{{time}}",ie(i,e))},Be={p:ie,P:He};const Ae=Be;var Ie=["D","DD"],Qe=["YY","YYYY"];function Ge(a){return Ie.indexOf(a)!==-1}function Xe(a){return Qe.indexOf(a)!==-1}function K(a,t,e){if(a==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var je={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ve=function(t,e,r){var n,i=je[t];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};const Je=Ve;function Q(a){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):a.defaultWidth,r=a.formats[e]||a.formats[a.defaultWidth];return r}}var ze={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ke={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ze={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},et={date:Q({formats:ze,defaultWidth:"full"}),time:Q({formats:Ke,defaultWidth:"full"}),dateTime:Q({formats:Ze,defaultWidth:"full"})};const tt=et;var at={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},rt=function(t,e,r,n){return at[t]};const nt=rt;function U(a){return function(t,e){var r=e!=null&&e.context?String(e.context):"standalone",n;if(r==="formatting"&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,o=e!=null&&e.width?String(e.width):i;n=a.formattingValues[o]||a.formattingValues[i]}else{var u=a.defaultWidth,c=e!=null&&e.width?String(e.width):a.defaultWidth;n=a.values[c]||a.values[u]}var s=a.argumentCallback?a.argumentCallback(t):t;return n[s]}}var it={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ot={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},st={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ut={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},lt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ct=function(t,e){var r=Number(t),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},ft={ordinalNumber:ct,era:U({values:it,defaultWidth:"wide"}),quarter:U({values:ot,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:U({values:st,defaultWidth:"wide"}),day:U({values:ut,defaultWidth:"wide"}),dayPeriod:U({values:dt,defaultWidth:"wide",formattingValues:lt,defaultFormattingWidth:"wide"})};const mt=ft;function F(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.width,n=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],u=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],c=Array.isArray(u)?vt(u,function(f){return f.test(o)}):ht(u,function(f){return f.test(o)}),s;s=a.valueCallback?a.valueCallback(c):c,s=e.valueCallback?e.valueCallback(s):s;var m=t.slice(o.length);return{value:s,rest:m}}}function ht(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function vt(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}function gt(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(a.matchPattern);if(!r)return null;var n=r[0],i=t.match(a.parsePattern);if(!i)return null;var o=a.valueCallback?a.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var u=t.slice(n.length);return{value:o,rest:u}}}var wt=/^(\d+)(th|st|nd|rd)?/i,bt=/\d+/i,yt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},pt={any:[/^b/i,/^(a|c)/i]},Tt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Dt={any:[/1/i,/2/i,/3/i,/4/i]},Mt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ct={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ot={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Pt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},St={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},kt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ut={ordinalNumber:gt({matchPattern:wt,parsePattern:bt,valueCallback:function(t){return parseInt(t,10)}}),era:F({matchPatterns:yt,defaultMatchWidth:"wide",parsePatterns:pt,defaultParseWidth:"any"}),quarter:F({matchPatterns:Tt,defaultMatchWidth:"wide",parsePatterns:Dt,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:F({matchPatterns:Mt,defaultMatchWidth:"wide",parsePatterns:Ct,defaultParseWidth:"any"}),day:F({matchPatterns:Ot,defaultMatchWidth:"wide",parsePatterns:Pt,defaultParseWidth:"any"}),dayPeriod:F({matchPatterns:St,defaultMatchWidth:"any",parsePatterns:kt,defaultParseWidth:"any"})};const Ft=Ut;var _t={code:"en-US",formatDistance:Je,formatLong:tt,formatRelative:nt,localize:mt,match:Ft,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Wt=_t;var xt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Et=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Yt=/^'([^]*?)'?$/,Nt=/''/g,$t=/[a-zA-Z]/;function X(a,t,e){var r,n,i,o,u,c,s,m,f,h,v,w,p,d,P,R,q,H;g(2,arguments);var oe=String(t),S=L(),k=(r=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:S.locale)!==null&&r!==void 0?r:Wt,B=C((i=(o=(u=(c=e==null?void 0:e.firstWeekContainsDate)!==null&&c!==void 0?c:e==null||(s=e.locale)===null||s===void 0||(m=s.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&u!==void 0?u:S.firstWeekContainsDate)!==null&&o!==void 0?o:(f=S.locale)===null||f===void 0||(h=f.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(B>=1&&B<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var A=C((v=(w=(p=(d=e==null?void 0:e.weekStartsOn)!==null&&d!==void 0?d:e==null||(P=e.locale)===null||P===void 0||(R=P.options)===null||R===void 0?void 0:R.weekStartsOn)!==null&&p!==void 0?p:S.weekStartsOn)!==null&&w!==void 0?w:(q=S.locale)===null||q===void 0||(H=q.options)===null||H===void 0?void 0:H.weekStartsOn)!==null&&v!==void 0?v:0);if(!(A>=0&&A<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!k.localize)throw new RangeError("locale must contain localize property");if(!k.formatLong)throw new RangeError("locale must contain formatLong property");var _=y(a);if(!ke(_))throw new RangeError("Invalid time value");var se=Pe(_),ue=Ue(_,se),de={firstWeekContainsDate:B,weekStartsOn:A,locale:k,_originalDate:_},le=oe.match(Et).map(function(b){var T=b[0];if(T==="p"||T==="P"){var W=Ae[T];return W(b,k.formatLong)}return b}).join("").match(xt).map(function(b){if(b==="''")return"'";var T=b[0];if(T==="'")return Lt(b);var W=qe[T];if(W)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Xe(b)&&K(b,t,String(a)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Ge(b)&&K(b,t,String(a)),W(ue,b,k.localize,de);if(T.match($t))throw new RangeError("Format string contains an unescaped latin alphabet character `"+T+"`");return b}).join("");return le}function Lt(a){var t=a.match(Yt);return t?t[1].replace(Nt,"'"):a}const oa=a=>isNaN(new Date(a).getTime())?"??.??.????":X(new Date(a),"dd.MM.yyyy"),sa=a=>isNaN(new Date(a).getTime())?"??.??.????":X(new Date(a),"HH:mm - dd.MM.yyyy"),ua=a=>isNaN(new Date(a).getTime())?"????-??-??":X(new Date(a),"yyyy-MM-dd");export{ea as B,ia as D,ra as E,Zt as T,It as a,At as b,aa as c,ta as d,ye as e,oa as f,Bt as g,ua as h,sa as i,Xt as j,jt as k,N as l,he as m,zt as n,Vt as o,Gt as p,Jt as q,na as r,Qt as s,Kt as t};
