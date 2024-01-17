import{w as K,r as le}from"./index.56f04d27.js";import{e as ce}from"./env.c1bfc129.js";import{a2 as Z}from"./scheduler.4bea28c8.js";import"./index.10be7516.js";const A={};function G(a){return a==="local"?localStorage:sessionStorage}function N(a,t,e){const r=(e==null?void 0:e.serializer)??JSON,n=(e==null?void 0:e.storage)??"local";function i(o,u){G(n).setItem(o,r.stringify(u))}if(!A[a]){const o=K(t,s=>{const f=G(n).getItem(a);f&&s(r.parse(f));{const c=m=>{m.key===a&&s(m.newValue?r.parse(m.newValue):null)};return window.addEventListener("storage",c),()=>window.removeEventListener("storage",c)}}),{subscribe:u,set:l}=o;A[a]={set(s){i(a,s),l(s)},update(s){const f=s(Z(o));i(a,f),l(f)},subscribe:u}}return A[a]}const fe=N("modeOsPrefers",!1),me=N("modeUserPrefers",void 0),he=N("modeCurrent",!1);function Rt(){const a=window.matchMedia("(prefers-color-scheme: light)").matches;return fe.set(a),a}function Ht(a){me.set(a)}function Qt(a){const t=document.documentElement.classList,e="dark";a===!0?t.remove(e):t.add(e),he.set(a)}function At(){const a=document.documentElement.classList,t=localStorage.getItem("modeUserPrefers")==="false",e=!("modeUserPrefers"in localStorage),r=window.matchMedia("(prefers-color-scheme: dark)").matches;t||e&&r?a.add("dark"):a.remove("dark")}const ee="(prefers-reduced-motion: reduce)";function ve(){return window.matchMedia(ee).matches}const Bt=le(ve(),a=>{{const t=r=>{a(r.matches)},e=window.matchMedia(ee);return e.addEventListener("change",t),()=>{e.removeEventListener("change",t)}}});const I=K({}),te=N("lastUpdatedDb",0),ge=async()=>{try{const a=await be(),t={};(await(await fetch(ce)).json()).forEach(n=>{const i=n.id;t[i]=n}),te.set(a),I.set(t)}catch(a){console.log(a)}},we=a=>{var r,n;const e=Z(I)[a];if(e){if(e.imgUrl)return e.imgUrl;if((r=e.b2sFiles)!=null&&r.length&&e.b2sFiles[0].imgUrl)return e.b2sFiles[0].imgUrl;if((n=e.tableFiles)!=null&&n.length&&e.tableFiles[0].imgUrl)return e.tableFiles[0].imgUrl}},be=async()=>{try{const t=await(await fetch("https://virtualpinballspreadsheet.github.io/vps-db/lastUpdated.json")).json();return new Date(t).getTime()}catch{return 0}},It={fetchDb:ge,getGameImage:we,lastUpdated:te,dbStore:I},Xt=["tableFiles","povFiles","b2sFiles","romFiles","altColorFiles","altSoundFiles","pupPackFiles","wheelArtFiles","topperFiles","mediaPackFiles","soundFiles","ruleFiles","tutorialFiles"],ye=["Hybrid","VR","FSS","4k","MOD","FastFlips","SSF","P-ROC","FlexDMD","Music","incl. B2S","incl. ROM","incl. Art","incl. PuP","incl. Video","no ROM","Kids","Adult","nFozzy","Fleep","LUT","Scorbit"],pe=["2Screens","3Screens","FullDMD","incl. Table"],Gt=ye.map(a=>({label:a,value:a})),jt=pe.map(a=>({label:a,value:a})),Vt={id:"",authors:[],tableFormat:"VPX",urls:[],updatedAt:0},Jt={id:"",updatedAt:0,manufacturer:"",name:"???",year:0},zt={authors:[],id:"",updatedAt:0,urls:[]},Kt={authors:[],id:"",updatedAt:0,title:"",youtubeId:"dQw4w9WgXcQ"},Zt={authors:[],id:"",updatedAt:0,urls:[]};function E(a){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(a)}function D(a){if(a===null||a===!0||a===!1)return NaN;var t=Number(a);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function v(a,t){if(t.length<a)throw new TypeError(a+" argument"+(a>1?"s":"")+" required, but only "+t.length+" present")}function b(a){v(1,arguments);var t=Object.prototype.toString.call(a);return a instanceof Date||E(a)==="object"&&t==="[object Date]"?new Date(a.getTime()):typeof a=="number"||t==="[object Number]"?new Date(a):((typeof a=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Te(a,t){v(2,arguments);var e=b(a).getTime(),r=D(t);return new Date(e+r)}var Me={};function L(){return Me}function De(a){var t=new Date(Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()));return t.setUTCFullYear(a.getFullYear()),a.getTime()-t.getTime()}function Ce(a){return v(1,arguments),a instanceof Date||E(a)==="object"&&Object.prototype.toString.call(a)==="[object Date]"}function Oe(a){if(v(1,arguments),!Ce(a)&&typeof a!="number")return!1;var t=b(a);return!isNaN(Number(t))}function Pe(a,t){v(2,arguments);var e=D(t);return Te(a,-e)}var Se=864e5;function ke(a){v(1,arguments);var t=b(a),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),n=e-r;return Math.floor(n/Se)+1}function _(a){v(1,arguments);var t=1,e=b(a),r=e.getUTCDay(),n=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function ae(a){v(1,arguments);var t=b(a),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var n=_(r),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=_(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function Ue(a){v(1,arguments);var t=ae(a),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=_(e);return r}var We=6048e5;function xe(a){v(1,arguments);var t=b(a),e=_(t).getTime()-Ue(t).getTime();return Math.round(e/We)+1}function Y(a,t){var e,r,n,i,o,u,l,s;v(1,arguments);var f=L(),c=D((e=(r=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&n!==void 0?n:f.weekStartsOn)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(s=l.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&e!==void 0?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=b(a),h=m.getUTCDay(),w=(h<c?7:0)+h-c;return m.setUTCDate(m.getUTCDate()-w),m.setUTCHours(0,0,0,0),m}function re(a,t){var e,r,n,i,o,u,l,s;v(1,arguments);var f=b(a),c=f.getUTCFullYear(),m=L(),h=D((e=(r=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:m.firstWeekContainsDate)!==null&&r!==void 0?r:(l=m.locale)===null||l===void 0||(s=l.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(c+1,0,h),w.setUTCHours(0,0,0,0);var O=Y(w,t),T=new Date(0);T.setUTCFullYear(c,0,h),T.setUTCHours(0,0,0,0);var P=Y(T,t);return f.getTime()>=O.getTime()?c+1:f.getTime()>=P.getTime()?c:c-1}function Fe(a,t){var e,r,n,i,o,u,l,s;v(1,arguments);var f=L(),c=D((e=(r=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(u=o.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:f.firstWeekContainsDate)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(s=l.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&e!==void 0?e:1),m=re(a,t),h=new Date(0);h.setUTCFullYear(m,0,c),h.setUTCHours(0,0,0,0);var w=Y(h,t);return w}var Ee=6048e5;function _e(a,t){v(1,arguments);var e=b(a),r=Y(e,t).getTime()-Fe(e,t).getTime();return Math.round(r/Ee)+1}function d(a,t){for(var e=a<0?"-":"",r=Math.abs(a).toString();r.length<t;)r="0"+r;return e+r}var Ye={y:function(t,e){var r=t.getUTCFullYear(),n=r>0?r:1-r;return d(e==="yy"?n%100:n,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):d(r+1,2)},d:function(t,e){return d(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return d(t.getUTCHours()%12||12,e.length)},H:function(t,e){return d(t.getUTCHours(),e.length)},m:function(t,e){return d(t.getUTCMinutes(),e.length)},s:function(t,e){return d(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,r-3));return d(i,e.length)}};const p=Ye;var C={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ne={G:function(t,e,r){var n=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return r.ordinalNumber(i,{unit:"year"})}return p.y(t,e)},Y:function(t,e,r,n){var i=re(t,n),o=i>0?i:1-i;if(e==="YY"){var u=o%100;return d(u,2)}return e==="Yo"?r.ordinalNumber(o,{unit:"year"}):d(o,e.length)},R:function(t,e){var r=ae(t);return d(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return d(r,e.length)},Q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return d(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return d(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,r){var n=t.getUTCMonth();switch(e){case"M":case"MM":return p.M(t,e);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,r){var n=t.getUTCMonth();switch(e){case"L":return String(n+1);case"LL":return d(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,r,n){var i=_e(t,n);return e==="wo"?r.ordinalNumber(i,{unit:"week"}):d(i,e.length)},I:function(t,e,r){var n=xe(t);return e==="Io"?r.ordinalNumber(n,{unit:"week"}):d(n,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):p.d(t,e)},D:function(t,e,r){var n=ke(t);return e==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):d(n,e.length)},E:function(t,e,r){var n=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return d(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return d(o,e.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,r){var n=t.getUTCDay(),i=n===0?7:n;switch(e){case"i":return String(i);case"ii":return d(i,e.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,r){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,r){var n=t.getUTCHours(),i;switch(n===12?i=C.noon:n===0?i=C.midnight:i=n/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,r){var n=t.getUTCHours(),i;switch(n>=17?i=C.evening:n>=12?i=C.afternoon:n>=4?i=C.morning:i=C.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return p.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):p.H(t,e)},K:function(t,e,r){var n=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(n,{unit:"hour"}):d(n,e.length)},k:function(t,e,r){var n=t.getUTCHours();return n===0&&(n=24),e==="ko"?r.ordinalNumber(n,{unit:"hour"}):d(n,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):p.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):p.s(t,e)},S:function(t,e){return p.S(t,e)},X:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return V(o);case"XXXX":case"XX":return M(o);case"XXXXX":case"XXX":default:return M(o,":")}},x:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return V(o);case"xxxx":case"xx":return M(o);case"xxxxx":case"xxx":default:return M(o,":")}},O:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+j(o,":");case"OOOO":default:return"GMT"+M(o,":")}},z:function(t,e,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+j(o,":");case"zzzz":default:return"GMT"+M(o,":")}},t:function(t,e,r,n){var i=n._originalDate||t,o=Math.floor(i.getTime()/1e3);return d(o,e.length)},T:function(t,e,r,n){var i=n._originalDate||t,o=i.getTime();return d(o,e.length)}};function j(a,t){var e=a>0?"-":"+",r=Math.abs(a),n=Math.floor(r/60),i=r%60;if(i===0)return e+String(n);var o=t||"";return e+String(n)+o+d(i,2)}function V(a,t){if(a%60===0){var e=a>0?"-":"+";return e+d(Math.abs(a)/60,2)}return M(a,t)}function M(a,t){var e=t||"",r=a>0?"-":"+",n=Math.abs(a),i=d(Math.floor(n/60),2),o=d(n%60,2);return r+i+e+o}const Le=Ne;var J=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},ne=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},$e=function(t,e){var r=t.match(/(P+)(p+)?/)||[],n=r[1],i=r[2];if(!i)return J(t,e);var o;switch(n){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",J(n,e)).replace("{{time}}",ne(i,e))},qe={p:ne,P:$e};const Re=qe;var He=["D","DD"],Qe=["YY","YYYY"];function Ae(a){return He.indexOf(a)!==-1}function Be(a){return Qe.indexOf(a)!==-1}function z(a,t,e){if(a==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(a==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Ie={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Xe=function(t,e,r){var n,i=Ie[t];return typeof i=="string"?n=i:e===1?n=i.one:n=i.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};const Ge=Xe;function B(a){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):a.defaultWidth,r=a.formats[e]||a.formats[a.defaultWidth];return r}}var je={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ve={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Je={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ze={date:B({formats:je,defaultWidth:"full"}),time:B({formats:Ve,defaultWidth:"full"}),dateTime:B({formats:Je,defaultWidth:"full"})};const Ke=ze;var Ze={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},et=function(t,e,r,n){return Ze[t]};const tt=et;function U(a){return function(t,e){var r=e!=null&&e.context?String(e.context):"standalone",n;if(r==="formatting"&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,o=e!=null&&e.width?String(e.width):i;n=a.formattingValues[o]||a.formattingValues[i]}else{var u=a.defaultWidth,l=e!=null&&e.width?String(e.width):a.defaultWidth;n=a.values[l]||a.values[u]}var s=a.argumentCallback?a.argumentCallback(t):t;return n[s]}}var at={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},rt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},nt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},it={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ot={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},st={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ut=function(t,e){var r=Number(t),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},dt={ordinalNumber:ut,era:U({values:at,defaultWidth:"wide"}),quarter:U({values:rt,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:U({values:nt,defaultWidth:"wide"}),day:U({values:it,defaultWidth:"wide"}),dayPeriod:U({values:ot,defaultWidth:"wide",formattingValues:st,defaultFormattingWidth:"wide"})};const lt=dt;function W(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.width,n=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],u=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],l=Array.isArray(u)?ft(u,function(c){return c.test(o)}):ct(u,function(c){return c.test(o)}),s;s=a.valueCallback?a.valueCallback(l):l,s=e.valueCallback?e.valueCallback(s):s;var f=t.slice(o.length);return{value:s,rest:f}}}function ct(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function ft(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}function mt(a){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(a.matchPattern);if(!r)return null;var n=r[0],i=t.match(a.parsePattern);if(!i)return null;var o=a.valueCallback?a.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var u=t.slice(n.length);return{value:o,rest:u}}}var ht=/^(\d+)(th|st|nd|rd)?/i,vt=/\d+/i,gt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},wt={any:[/^b/i,/^(a|c)/i]},bt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},yt={any:[/1/i,/2/i,/3/i,/4/i]},pt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Tt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Mt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Dt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ct={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ot={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Pt={ordinalNumber:mt({matchPattern:ht,parsePattern:vt,valueCallback:function(t){return parseInt(t,10)}}),era:W({matchPatterns:gt,defaultMatchWidth:"wide",parsePatterns:wt,defaultParseWidth:"any"}),quarter:W({matchPatterns:bt,defaultMatchWidth:"wide",parsePatterns:yt,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:W({matchPatterns:pt,defaultMatchWidth:"wide",parsePatterns:Tt,defaultParseWidth:"any"}),day:W({matchPatterns:Mt,defaultMatchWidth:"wide",parsePatterns:Dt,defaultParseWidth:"any"}),dayPeriod:W({matchPatterns:Ct,defaultMatchWidth:"any",parsePatterns:Ot,defaultParseWidth:"any"})};const St=Pt;var kt={code:"en-US",formatDistance:Ge,formatLong:Ke,formatRelative:tt,localize:lt,match:St,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ut=kt;var Wt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,xt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ft=/^'([^]*?)'?$/,Et=/''/g,_t=/[a-zA-Z]/;function X(a,t,e){var r,n,i,o,u,l,s,f,c,m,h,w,O,T,P,$,q,R;v(2,arguments);var ie=String(t),S=L(),k=(r=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:S.locale)!==null&&r!==void 0?r:Ut,H=D((i=(o=(u=(l=e==null?void 0:e.firstWeekContainsDate)!==null&&l!==void 0?l:e==null||(s=e.locale)===null||s===void 0||(f=s.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&u!==void 0?u:S.firstWeekContainsDate)!==null&&o!==void 0?o:(c=S.locale)===null||c===void 0||(m=c.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(H>=1&&H<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Q=D((h=(w=(O=(T=e==null?void 0:e.weekStartsOn)!==null&&T!==void 0?T:e==null||(P=e.locale)===null||P===void 0||($=P.options)===null||$===void 0?void 0:$.weekStartsOn)!==null&&O!==void 0?O:S.weekStartsOn)!==null&&w!==void 0?w:(q=S.locale)===null||q===void 0||(R=q.options)===null||R===void 0?void 0:R.weekStartsOn)!==null&&h!==void 0?h:0);if(!(Q>=0&&Q<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!k.localize)throw new RangeError("locale must contain localize property");if(!k.formatLong)throw new RangeError("locale must contain formatLong property");var x=b(a);if(!Oe(x))throw new RangeError("Invalid time value");var oe=De(x),se=Pe(x,oe),ue={firstWeekContainsDate:H,weekStartsOn:Q,locale:k,_originalDate:x},de=ie.match(xt).map(function(g){var y=g[0];if(y==="p"||y==="P"){var F=Re[y];return F(g,k.formatLong)}return g}).join("").match(Wt).map(function(g){if(g==="''")return"'";var y=g[0];if(y==="'")return Yt(g);var F=Le[y];if(F)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Be(g)&&z(g,t,String(a)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Ae(g)&&z(g,t,String(a)),F(se,g,k.localize,ue);if(y.match(_t))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return g}).join("");return de}function Yt(a){var t=a.match(Ft);return t?t[1].replace(Et,"'"):a}const ea=a=>isNaN(new Date(a).getTime())?"??.??.????":X(new Date(a),"dd.MM.yyyy"),ta=a=>isNaN(new Date(a).getTime())?"??.??.????":X(new Date(a),"HH:mm - dd.MM.yyyy"),aa=a=>isNaN(new Date(a).getTime())?"????-??-??":X(new Date(a),"yyyy-MM-dd");export{jt as B,It as D,Kt as E,Gt as T,Qt as a,Ht as b,zt as c,Vt as d,Jt as e,ea as f,Rt as g,aa as h,ta as i,Zt as j,Xt as k,N as l,he as m,Bt as p,At as s};
