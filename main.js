(()=>{"use strict";const t={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function e(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const n={date:e({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:e({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:e({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},a={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function r(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function o(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let c;return c=t.valueCallback?t.valueCallback(d):d,c=n.valueCallback?n.valueCallback(c):c,{value:c,rest:e.slice(i.length)}}}var i;const s={code:"en-US",formatDistance:(e,n,a)=>{let r;const o=t[e];return r="string"==typeof o?o:1===n?o.one:o.other.replace("{{count}}",n.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"in "+r:r+" ago":r},formatLong:n,formatRelative:(t,e,n,r)=>a[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:r({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:r({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:r({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:r({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:r({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(i={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(i.matchPattern);if(!n)return null;const a=n[0],r=t.match(i.parsePattern);if(!r)return null;let o=i.valueCallback?i.valueCallback(r[0]):r[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(a.length)}}),era:o({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:o({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:o({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:o({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:o({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let d={};function c(){return d}Math.pow(10,8);const u=6048e5,l=864e5;function m(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function h(t){const e=m(t);return e.setHours(0,0,0,0),e}function y(t){const e=m(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function f(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function g(t){const e=m(t);return function(t,e){const n=h(t),a=h(e),r=+n-y(n),o=+a-y(a);return Math.round((r-o)/l)}(e,function(t){const e=m(t),n=f(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function p(t,e){const n=c(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=m(t),o=r.getDay(),i=(o<a?7:0)+o-a;return r.setDate(r.getDate()-i),r.setHours(0,0,0,0),r}function w(t){return p(t,{weekStartsOn:1})}function k(t){const e=m(t),n=e.getFullYear(),a=f(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const r=w(a),o=f(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=w(o);return e.getTime()>=r.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function b(t){const e=m(t),n=+w(e)-+function(t){const e=k(t),n=f(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),w(n)}(e);return Math.round(n/u)+1}function v(t,e){const n=m(t),a=n.getFullYear(),r=c(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=f(t,0);i.setFullYear(a+1,0,o),i.setHours(0,0,0,0);const s=p(i,e),d=f(t,0);d.setFullYear(a,0,o),d.setHours(0,0,0,0);const u=p(d,e);return n.getTime()>=s.getTime()?a+1:n.getTime()>=u.getTime()?a:a-1}function C(t,e){const n=m(t),a=+p(n,e)-+function(t,e){const n=c(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,r=v(t,e),o=f(t,0);return o.setFullYear(r,0,a),o.setHours(0,0,0,0),p(o,e)}(n,e);return Math.round(a/u)+1}function E(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const D={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return E("yy"===e?a%100:a,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):E(n+1,2)},d:(t,e)=>E(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>E(t.getHours()%12||12,e.length),H:(t,e)=>E(t.getHours(),e.length),m:(t,e)=>E(t.getMinutes(),e.length),s:(t,e)=>E(t.getSeconds(),e.length),S(t,e){const n=e.length,a=t.getMilliseconds();return E(Math.trunc(a*Math.pow(10,n-3)),e.length)}},M={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return D.y(t,e)},Y:function(t,e,n,a){const r=v(t,a),o=r>0?r:1-r;return"YY"===e?E(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):E(o,e.length)},R:function(t,e){return E(k(t),e.length)},u:function(t,e){return E(t.getFullYear(),e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return E(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return E(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return D.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return E(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=C(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):E(r,e.length)},I:function(t,e,n){const a=b(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):E(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):D.d(t,e)},D:function(t,e,n){const a=g(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):E(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return E(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return E(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return E(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return D.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):D.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):E(a,e.length)},k:function(t,e,n){let a=t.getHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):E(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):D.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):D.s(t,e)},S:function(t,e){return D.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return S(a);case"XXXX":case"XX":return x(a);default:return x(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return S(a);case"xxxx":case"xx":return x(a);default:return x(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+T(a,":");default:return"GMT"+x(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+T(a,":");default:return"GMT"+x(a,":")}},t:function(t,e,n){return E(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return E(t.getTime(),e.length)}};function T(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.trunc(a/60),o=a%60;return 0===o?n+String(r):n+String(r)+e+E(o,2)}function S(t,e){return t%60==0?(t>0?"-":"+")+E(Math.abs(t)/60,2):x(t,e)}function x(t,e=""){const n=t>0?"-":"+",a=Math.abs(t);return n+E(Math.trunc(a/60),2)+e+E(a%60,2)}const P=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},B=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},I={p:B,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return P(t,e);let o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",P(a,e)).replace("{{time}}",B(r,e))}},L=/^D+$/,q=/^Y+$/,j=["D","DD","YY","YYYY"];function W(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=m(t);return!isNaN(Number(n))}const Y=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,N=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,O=/^'([^]*?)'?$/,$=/''/g,F=/[a-zA-Z]/;function H(t,e,n){const a=c(),r=n?.locale??a.locale??s,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,d=m(t);if(!W(d))throw new RangeError("Invalid time value");let u=e.match(N).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,I[e])(t,r.formatLong):t})).join("").match(Y).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:A(t)};if(M[e])return{isToken:!0,value:t};if(e.match(F))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));r.localize.preprocessor&&(u=r.localize.preprocessor(d,u));const l={firstWeekContainsDate:o,weekStartsOn:i,locale:r};return u.map((a=>{if(!a.isToken)return a.value;const o=a.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return q.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return L.test(t)}(o))&&function(t,e,n){const a=function(t,e,n){const a="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(a),j.includes(t))throw new RangeError(a)}(o,e,String(t)),(0,M[o[0]])(d,o,r.localize,l)})).join("")}function A(t){const e=t.match(O);return e?e[1].replace($,"'"):t}const z=function(){const t=document.getElementById("taskCreator"),e=document.getElementById("taskForm"),n=document.getElementById("projectCreator"),a=document.querySelector(".taskLauncher"),r=document.querySelector(".createProjectBtn"),o=document.querySelector(".taskClose"),i=document.querySelector(".projectClose");return{launchTaskCreator:function(){a.addEventListener("click",(n=>{n.stopPropagation(),t.style.display="block",r.style.pointerEvents="none",e.reset()}))},closeTaskCreator:function(){o.addEventListener("click",(()=>{t.style.display="none",r.style.pointerEvents="auto"})),window.addEventListener("click",(e=>{t.contains(e.target)||(t.style.display="none",r.style.pointerEvents="auto")}))},launchProjectCreator:function(){r.addEventListener("click",(t=>{t.stopPropagation(),n.style.display="block",a.style.pointerEvents="none"}))},closeProjectCreator:function(){i.addEventListener("click",(()=>{n.style.display="none",a.style.pointerEvents="auto"})),window.addEventListener("click",(t=>{n.contains(t.target)||(n.style.display="none",a.style.pointerEvents="auto")}))},createTaskCard:function(t){const e=document.createElement("div");let n;switch(e.classList.add("taskCardContainer"),e.dataset.taskId=t.id,t.priority){case"low":n="green";break;case"medium":n="orange";break;case"high":n="red";break;default:n="white"}e.style.border=`3px solid ${n}`;const a=document.createElement("div");a.classList.add("taskCard");const r=document.createElement("div");r.setAttribute("id","iconContainer");const o=document.createElement("div");o.classList.add("taskLeft");const i=document.createElement("div");return i.classList.add("taskRight"),r.appendChild(function(){const t=document.createElement("img");return t.classList.add("editIcon"),t.src="../dist/icons/edit.svg",t.alt="Edit icon",t}()),r.appendChild(function(){const t=document.createElement("img");return t.classList.add("infoIcon"),t.src="../dist/icons/info.svg",t.alt="Information icon",t}()),r.appendChild(function(){const t=document.createElement("img");return t.classList.add("deleteIcon"),t.src="../dist/icons/delete.svg",t.alt="Delete Icon",t}()),o.appendChild(function(){const t=document.getElementById("title").value,e=document.createElement("div");return e.classList.add("taskTitle"),e.textContent=t,e}()),i.appendChild(function(){const t=document.getElementById("date").value,e=H(new Date(t),"MMMM dd, yyyy - hh:mm a"),n=document.createElement("div");return n.classList.add("taskDate"),n.textContent=e,n}()),i.appendChild(r),a.appendChild(o),a.appendChild(i),e.appendChild(a),e},createTaskDetailsCard:function(t){const e=document.getElementById("title").value,n=document.getElementById("add_note").value,a=document.getElementById("date").value,r=document.getElementById("priority").value,o=document.getElementById("project").value,i=document.createElement("div");i.classList.add("taskCardDetailsContainer"),i.dataset.taskId=t.id,i.style.display="none";const s=document.createElement("button");s.classList.add("closeTaskDetailsBtn"),s.textContent="Close";const d=document.createElement("div");d.classList.add("taskCardDetails");const c=document.createElement("div");c.classList.add("taskDetailsTop");const u=document.createElement("div");u.classList.add("taskDetailsBottom");const l=document.createElement("div");l.classList.add("titleDetails"),l.textContent=`Title: ${e}`;const m=document.createElement("div");m.classList.add("noteDetails"),m.textContent=`Note: ${n}`;const h=document.createElement("div"),y=H(new Date(a),"MMMM dd, yyyy - hh:mm a");h.classList.add("dateDetails"),h.textContent=`Date: ${y}`;const f=document.createElement("div");f.classList.add("priorityDetails"),f.textContent=`Priority: ${r}`;const g=document.createElement("div");return g.classList.add("projectDetails"),g.textContent=`Project: ${o}`,c.appendChild(l),c.appendChild(h),c.appendChild(f),u.appendChild(m),u.appendChild(g),d.appendChild(c),d.appendChild(u),d.appendChild(s),i.appendChild(d),i}}},Q=function(){return{openTaskDetails:function(){document.querySelectorAll(".infoIcon").forEach((t=>{t.addEventListener("click",(t=>{t.target.closest(".taskCardContainer").nextElementSibling.style.display="block"}))}))},closeTaskDetails:function(){document.querySelectorAll(".closeTaskDetailsBtn").forEach((t=>{t.addEventListener("click",(()=>{t.closest(".taskCardDetailsContainer").style.display="none"}))}))}}},G=function(t){const e=document.getElementById("allTasksDisplay"),n=document.getElementById("todayDisplay"),a=document.getElementById("projectDisplay");return{deleteTask:function(){const r=document.querySelectorAll(".deleteIcon"),o=[e,n,a];r.forEach((e=>{e.addEventListener("click",(()=>{let n;o.forEach((t=>{n=e.closest(".taskCardContainer").dataset.taskId;const a=t.querySelector(`.taskCardContainer[data-task-id='${n}']`),r=t.querySelector(`.taskCardDetailsContainer[data-task-id="${n}"]`);a&&t.removeChild(a),r&&t.removeChild(r)}));const a=t.findIndex((t=>t.id===parseInt(n)));-1!==a&&t.splice(a,1)}))}))}}};function X(t){return e=t,n=Date.now(),+h(e)==+h(n);var e,n}const _=function(){const t=[];let e,n=[];const a=document.getElementById("pageTitle"),r=document.getElementById("allTasksBtn"),o=document.querySelector(".allTasksDisplayContainer"),i=document.getElementById("allTasksDisplay"),s=document.getElementById("todayBtn"),d=document.querySelector(".todayDisplayContainer"),c=document.getElementById("todayDisplay"),u=document.querySelector(".projectDisplayContainer"),l=document.getElementById("projectDisplay"),m=document.getElementById("taskCreator"),h=document.getElementById("taskForm"),y=document.querySelector(".createProjectBtn"),f=document.getElementById("projectForm"),g=document.getElementById("projectCreator"),p=document.getElementById("projectMenu"),w=document.getElementById("project"),k=document.getElementById("projectCreator"),b=document.getElementById("taskEditor"),v=document.getElementById("editForm"),C=document.querySelector(".editClose"),E=document.querySelector(".taskLauncher");function D(){document.querySelectorAll(".editIcon").forEach((n=>{n.addEventListener("click",(n=>{n.stopPropagation();const a=n.target.closest(".taskCardContainer");e=a.dataset.taskId,function(e){const n=document.getElementById("edit_title"),a=document.getElementById("edit_note"),r=document.getElementById("edit_date"),o=document.getElementById("edit_priority"),i=t.find((t=>t.id===parseInt(e)));i&&(n.value=`${i.title}`,a.value=`${i.note}`,r.value=`${i.date}`,o.value=`${i.priority}`)}(e),m.style.display="none",k.style.display="none",b.style.display="block",E.style.pointerEvents="none",y.style.pointerEvents="none"}))}))}function M(){C.addEventListener("click",(()=>{b.style.display="none",E.style.pointerEvents="auto",y.style.pointerEvents="auto"})),window.addEventListener("click",(t=>{b.contains(t.target)||(b.style.display="none",E.style.pointerEvents="auto",y.style.pointerEvents="auto")}))}function T(t,e){const n=e.querySelector(`.taskCardContainer[data-task-id="${t}"]`),a=e.querySelector(`.taskCardDetailsContainer[data-task-id="${t}"]`);n&&e.removeChild(n),a&&e.removeChild(a)}function S(){const n=document.getElementById("edit_title"),a=document.getElementById("edit_note"),r=document.getElementById("edit_date"),o=document.getElementById("edit_priority");v.addEventListener("submit",(s=>{s.preventDefault();const d=e;let u=t.find((t=>t.id===parseInt(d)));if(u){const e=u.date;u.title=n.value,u.note=a.value,u.date=r.value,u.priority=o.value,[i,c,l].forEach((t=>{!function(t,e,n){const a=n.querySelector(`.taskCardContainer[data-task-id="${t}"]`);if(a){a.querySelector(".taskTitle").textContent=e.title;const t=H(new Date(e.date),"MMMM dd, yyyy - hh:mm a");a.querySelector(".taskDate").textContent=t}}(d,u,t),function(t,e,n){const a=n.querySelector(`.taskCardDetailsContainer[data-task-id="${t}"]`);if(a){a.querySelector(".taskDetailsTop .titleDetails").textContent=`Title: ${e.title}`;const t=H(new Date(e.date),"MMMM dd, yyyy - hh:mm a");a.querySelector(".taskDetailsTop .dateDetails").textContent=`Date: ${t}`,a.querySelector(".taskDetailsTop .priorityDetails").textContent=`Priority: ${e.priority}`,a.querySelector(".taskDetailsBottom .noteDetails").textContent=`Note: ${e.note}`}}(d,u,t),function(t,e,n){const a=n.querySelector(`.taskCardContainer[data-task-id="${t}"]`);if(a){let t;switch(e){case"low":t="green";break;case"medium":t="orange";break;case"high":t="red";break;default:t="white"}a.style.border=`3px solid ${t}`}}(d,u.priority,t)})),b.style.display="none";const s=new Date(u.date),m=new Date(e);new Date,X(s)&&!X(m)?(T(d,c),c.appendChild(z().createTaskCard(u)),c.appendChild(z().createTaskDetailsCard(u)),Q().openTaskDetails(),Q().closeTaskDetails(),G(t).deleteTask(),D(),M(),S()):!X(s)&&X(m)&&T(d,c)}}))}return{displayTask:function(){h.addEventListener("submit",(e=>{e.preventDefault();const n=t.length,a=document.getElementById("title").value,r=document.getElementById("add_note").value,o=document.getElementById("date").value,s=document.getElementById("priority").value,d=document.getElementById("project").value,u=new Date(o);new Date;let h=function(t,e,n,a,r,o){return{id:t,title:e,note:n,date:a,priority:r,project:o}}(n,a,r,o,s,d);t.push(h),X(u)&&(c.appendChild(z().createTaskCard(h)),c.appendChild(z().createTaskDetailsCard(h))),"None"!==d?(l.appendChild(z().createTaskCard(h)),l.appendChild(z().createTaskDetailsCard(h))):(i.appendChild(z().createTaskCard(h)),i.appendChild(z().createTaskDetailsCard(h))),Q().openTaskDetails(),Q().closeTaskDetails(),G(t).deleteTask(),D(),M(),S(),m.style.display="none",y.style.pointerEvents="auto"}))},allTasksDisplayControl:function(){r.addEventListener("click",(()=>{o.style.display="block",d.style.display="none",u.style.display="none",a.textContent="All Tasks"}))},todayTasksDisplayControl:function(){s.addEventListener("click",(()=>{d.style.display="block",o.style.display="none",u.style.display="none",a.textContent="Today"}))},createProject:function(){f.addEventListener("submit",(e=>{e.preventDefault();const r=document.getElementById("name").value;n.push(r);const i=n.slice(-1)[0],s=(c=i,c.replace(" ","-")).toLowerCase();var c;const m=document.createElement("button");m.id=`${s}`,m.classList.add("projectBtn"),m.textContent=i,p.appendChild(m);const h=document.createElement("option");h.text=i,w.add(h),f.reset(),document.querySelectorAll(".projectBtn").forEach((e=>{e.addEventListener("click",(e=>{const n=e.target.textContent;l.querySelectorAll(".taskCardContainer").forEach((e=>{const a=e.dataset.taskId,r=t.find((t=>t.id===parseInt(a)));r&&r.project===n?e.style.display="block":e.style.display="none"})),a.textContent=n,u.style.display="block",o.style.display="none",d.style.display="none"}))})),g.style.display="none",E.style.pointerEvents="auto"}))}}};!function(){const t=_(),e=z();t.displayTask(),t.createProject(),t.allTasksDisplayControl(),t.todayTasksDisplayControl(),e.launchTaskCreator(),e.closeTaskCreator(),e.launchProjectCreator(),e.closeProjectCreator()}()})();