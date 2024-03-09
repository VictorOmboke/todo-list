(()=>{"use strict";const t=function(){return{createProject:function(){const t=document.getElementById("projectForm"),e=(document.getElementById("editForm"),document.getElementById("projectCreator")),n=document.getElementById("projectDisplay"),a=document.getElementById("project"),o=document.getElementById("edit_project"),r=document.querySelector(".taskLauncher");let i=[];t.addEventListener("submit",(s=>{s.preventDefault();const d=document.getElementById("name").value;i.push(d),console.log(`New project added: ${d}`),console.log(i);let c=i.slice(-1);console.log(c);const u=document.createElement("button");u.classList.add("projectBtn"),u.textContent=c,n.appendChild(u);const l=document.createElement("option");l.text=c,a.add(l);const m=document.createElement("option");m.text=c,o.add(m),t.reset(),e.style.display="none",r.style.pointerEvents="auto"}))},taskFactory:function(t,e,n,a,o,r){return{id:t,title:e,note:n,date:a,priority:o,project:r}}}},e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function n(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const a={date:n({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:n({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:n({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function r(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,o=n?.width?String(n.width):e;a=t.formattingValues[o]||t.formattingValues[e]}else{const e=t.defaultWidth,o=n?.width?String(n.width):t.defaultWidth;a=t.values[o]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function i(t){return(e,n={})=>{const a=n.width,o=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],r=e.match(o);if(!r)return null;const i=r[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let c;return c=t.valueCallback?t.valueCallback(d):d,c=n.valueCallback?n.valueCallback(c):c,{value:c,rest:e.slice(i.length)}}}var s;const d={code:"en-US",formatDistance:(t,n,a)=>{let o;const r=e[t];return o="string"==typeof r?r:1===n?r.one:r.other.replace("{{count}}",n.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"in "+o:o+" ago":o},formatLong:a,formatRelative:(t,e,n,a)=>o[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:r({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:r({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:r({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:r({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:r({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(s={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(s.matchPattern);if(!n)return null;const a=n[0],o=t.match(s.parsePattern);if(!o)return null;let r=s.valueCallback?s.valueCallback(o[0]):o[0];return r=e.valueCallback?e.valueCallback(r):r,{value:r,rest:t.slice(a.length)}}),era:i({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:i({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:i({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:i({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let c={};function u(){return c}Math.pow(10,8);const l=6048e5,m=864e5;function h(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function f(t){const e=h(t);return e.setHours(0,0,0,0),e}function y(t){const e=h(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function g(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function p(t){const e=h(t);return function(t,e){const n=f(t),a=f(e),o=+n-y(n),r=+a-y(a);return Math.round((o-r)/m)}(e,function(t){const e=h(t),n=g(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function w(t,e){const n=u(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=h(t),r=o.getDay(),i=(r<a?7:0)+r-a;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function b(t){return w(t,{weekStartsOn:1})}function k(t){const e=h(t),n=e.getFullYear(),a=g(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const o=b(a),r=g(t,0);r.setFullYear(n,0,4),r.setHours(0,0,0,0);const i=b(r);return e.getTime()>=o.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function v(t){const e=h(t),n=+b(e)-+function(t){const e=k(t),n=g(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),b(n)}(e);return Math.round(n/l)+1}function E(t,e){const n=h(t),a=n.getFullYear(),o=u(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=g(t,0);i.setFullYear(a+1,0,r),i.setHours(0,0,0,0);const s=w(i,e),d=g(t,0);d.setFullYear(a,0,r),d.setHours(0,0,0,0);const c=w(d,e);return n.getTime()>=s.getTime()?a+1:n.getTime()>=c.getTime()?a:a-1}function C(t,e){const n=h(t),a=+w(n,e)-+function(t,e){const n=u(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=E(t,e),r=g(t,0);return r.setFullYear(o,0,a),r.setHours(0,0,0,0),w(r,e)}(n,e);return Math.round(a/l)+1}function D(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const M={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return D("yy"===e?a%100:a,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):D(n+1,2)},d:(t,e)=>D(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>D(t.getHours()%12||12,e.length),H:(t,e)=>D(t.getHours(),e.length),m:(t,e)=>D(t.getMinutes(),e.length),s:(t,e)=>D(t.getSeconds(),e.length),S(t,e){const n=e.length,a=t.getMilliseconds();return D(Math.trunc(a*Math.pow(10,n-3)),e.length)}},x={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),a=e>0?e:1-e;return n.ordinalNumber(a,{unit:"year"})}return M.y(t,e)},Y:function(t,e,n,a){const o=E(t,a),r=o>0?o:1-o;return"YY"===e?D(r%100,2):"Yo"===e?n.ordinalNumber(r,{unit:"year"}):D(r,e.length)},R:function(t,e){return D(k(t),e.length)},u:function(t,e){return D(t.getFullYear(),e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return D(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return D(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return M.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return D(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const o=C(t,a);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):D(o,e.length)},I:function(t,e,n){const a=v(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):D(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):M.d(t,e)},D:function(t,e,n){const a=p(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):D(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const o=t.getDay(),r=(o-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(r);case"ee":return D(r,2);case"eo":return n.ordinalNumber(r,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const o=t.getDay(),r=(o-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(r);case"cc":return D(r,e.length);case"co":return n.ordinalNumber(r,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),o=0===a?7:a;switch(e){case"i":return String(o);case"ii":return D(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let o;switch(o=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let o;switch(o=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return M.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):M.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):D(a,e.length)},k:function(t,e,n){let a=t.getHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):D(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):M.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):M.s(t,e)},S:function(t,e){return M.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return T(a);case"XXXX":case"XX":return P(a);default:return P(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return T(a);case"xxxx":case"xx":return P(a);default:return P(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+S(a,":");default:return"GMT"+P(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+S(a,":");default:return"GMT"+P(a,":")}},t:function(t,e,n){return D(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return D(t.getTime(),e.length)}};function S(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),o=Math.trunc(a/60),r=a%60;return 0===r?n+String(o):n+String(o)+e+D(r,2)}function T(t,e){return t%60==0?(t>0?"-":"+")+D(Math.abs(t)/60,2):P(t,e)}function P(t,e=""){const n=t>0?"-":"+",a=Math.abs(t);return n+D(Math.trunc(a/60),2)+e+D(a%60,2)}const B=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},I=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},L={p:I,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],o=n[2];if(!o)return B(t,e);let r;switch(a){case"P":r=e.dateTime({width:"short"});break;case"PP":r=e.dateTime({width:"medium"});break;case"PPP":r=e.dateTime({width:"long"});break;default:r=e.dateTime({width:"full"})}return r.replace("{{date}}",B(a,e)).replace("{{time}}",I(o,e))}},W=/^D+$/,j=/^Y+$/,q=["D","DD","YY","YYYY"];function O(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=h(t);return!isNaN(Number(n))}const Y=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,N=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,F=/^'([^]*?)'?$/,$=/''/g,H=/[a-zA-Z]/;function A(t,e,n){const a=u(),o=n?.locale??a.locale??d,r=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,s=h(t);if(!O(s))throw new RangeError("Invalid time value");let c=e.match(N).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,L[e])(t,o.formatLong):t})).join("").match(Y).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:z(t)};if(x[e])return{isToken:!0,value:t};if(e.match(H))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));o.localize.preprocessor&&(c=o.localize.preprocessor(s,c));const l={firstWeekContainsDate:r,weekStartsOn:i,locale:o};return c.map((a=>{if(!a.isToken)return a.value;const r=a.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return j.test(t)}(r)||!n?.useAdditionalDayOfYearTokens&&function(t){return W.test(t)}(r))&&function(t,e,n){const a=function(t,e,n){const a="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(a),q.includes(t))throw new RangeError(a)}(r,e,String(t)),(0,x[r[0]])(s,r,o.localize,l)})).join("")}function z(t){const e=t.match(F);return e?e[1].replace($,"'"):t}function Q(t){return e=t,n=Date.now(),+f(e)==+f(n);var e,n}const G=function(){const e=[];let n=0;const a=document.getElementById("pageTitle"),o=document.getElementById("allTasksBtn"),r=document.getElementById("allTasksDisplay"),i=document.getElementById("todayBtn"),s=document.getElementById("todayDisplay"),d=document.getElementById("thisWeekBtn"),c=document.getElementById("thisWeekDisplay"),l=document.getElementById("taskCreator"),m=document.getElementById("taskForm"),f=document.getElementById("projectCreator"),y=document.getElementById("taskEditor"),g=document.getElementById("editForm"),p=document.querySelector(".taskLauncher"),b=document.querySelector(".createProjectBtn"),k=document.querySelector(".taskClose"),v=document.querySelector(".projectClose"),E=document.querySelector(".editClose");function C(t){n++;const e=document.createElement("div");e.classList.add("taskCard"),e.dataset.taskId=t.id,e.setAttribute("data-cardCounter",`card ${n}`);const a=document.createElement("input");a.classList.add("taskCheckBox"),a.setAttribute("type","checkbox");const o=document.createElement("div");o.setAttribute("id","iconContainer");const r=document.createElement("div");r.classList.add("taskLeft");const i=document.createElement("div");return i.classList.add("taskRight"),o.appendChild(function(){const t=document.createElement("img");return t.classList.add("editIcon"),t.src="../dist/icons/edit.svg",t.alt="Edit icon",t}()),o.appendChild(function(){const t=document.createElement("img");return t.classList.add("infoIcon"),t.src="../dist/icons/info.svg",t.alt="Information icon",t}()),o.appendChild(function(){const t=document.createElement("img");return t.classList.add("deleteIcon"),t.src="../dist/icons/delete.svg",t.alt="Delete Icon",t}()),r.appendChild(a),r.appendChild(function(){const t=document.getElementById("title").value,e=document.createElement("div");return e.classList.add("taskTitle"),e.textContent=t,e}()),i.appendChild(function(){const t=document.getElementById("date").value,e=A(new Date(t),"MMMM dd, yyyy - hh:mm a"),n=document.createElement("div");return n.classList.add("taskDate"),n.textContent=e,n}()),i.appendChild(o),e.appendChild(r),e.appendChild(i),e}function D(t){const e=document.getElementById("title").value,n=document.getElementById("add_note").value,a=document.getElementById("date").value,o=document.getElementById("priority").value,r=document.getElementById("project").value,i=document.createElement("div");i.classList.add("taskCardDetailsContainer"),i.dataset.taskId=t.id,i.style.display="none";const s=document.createElement("button");s.classList.add("closeTaskDetailsBtn"),s.textContent="Close";const d=document.createElement("div");d.classList.add("taskCardDetails");const c=document.createElement("div");c.classList.add("taskDetailsTop");const u=document.createElement("div");u.classList.add("taskDetailsBottom");const l=document.createElement("div");l.classList.add("titleDetails"),l.textContent=`Title: ${e}`;const m=document.createElement("div");m.classList.add("noteDetails"),m.textContent=`Note: ${n}`;const h=document.createElement("div"),f=A(new Date(a),"MMMM dd, yyyy - hh:mm a");h.classList.add("dateDetails"),h.textContent=`Date: ${f}`;const y=document.createElement("div");y.classList.add("priorityDetails"),y.textContent=`Priority: ${o}`;const g=document.createElement("div");return g.classList.add("projectDetails"),g.textContent=`Project: ${r}`,c.appendChild(l),c.appendChild(h),c.appendChild(y),u.appendChild(m),u.appendChild(g),d.appendChild(c),d.appendChild(u),d.appendChild(s),i.appendChild(d),i}return{launchTaskCreator:function(){p.addEventListener("click",(t=>{t.stopPropagation(),l.style.display="block",b.style.pointerEvents="none",m.reset()}))},closeTaskCreator:function(){k.addEventListener("click",(()=>{l.style.display="none",b.style.pointerEvents="auto"})),window.addEventListener("click",(t=>{l.contains(t.target)||(l.style.display="none",b.style.pointerEvents="auto")}))},launchProjectCreator:function(){b.addEventListener("click",(t=>{t.stopPropagation(),f.style.display="block",p.style.pointerEvents="none"}))},closeProjectCreator:function(){v.addEventListener("click",(()=>{f.style.display="none",p.style.pointerEvents="auto"})),window.addEventListener("click",(t=>{f.contains(t.target)||(f.style.display="none",p.style.pointerEvents="auto")}))},displayTask:function(){m.addEventListener("submit",(a=>{a.preventDefault();const o=e.length,i=document.getElementById("title").value,d=document.getElementById("add_note").value,m=document.getElementById("date").value,k=document.getElementById("priority").value,v=document.getElementById("project").value,M=new Date(m),x=new Date,S=w(x),T=function(t,e){const n=u(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=h(t),r=o.getDay(),i=6+(r<a?-7:0)-(r-a);return o.setDate(o.getDate()+i),o.setHours(23,59,59,999),o}(x);let P=t().taskFactory(o,i,d,m,k,v);e.push(P),console.log(e),Q(M)?(s.appendChild(C(P)),s.appendChild(D(P))):M>=S&&M<=T&&(c.appendChild(C(P)),c.appendChild(D(P))),r.appendChild(C(P)),r.appendChild(D(P)),document.querySelectorAll(".infoIcon").forEach((t=>{t.addEventListener("click",(t=>{t.target.closest(".taskCard").nextElementSibling.style.display="block",console.log("Task Details Opened")}))})),document.querySelectorAll(".closeTaskDetailsBtn").forEach((t=>{t.addEventListener("click",(()=>{t.closest(".taskCardDetailsContainer").style.display="none",console.log("task details closed")}))})),function(){const t=document.querySelectorAll(".deleteIcon"),n=[r,s,c];t.forEach((t=>{t.addEventListener("click",(()=>{let a;n.forEach((e=>{a=t.closest(".taskCard").dataset.taskId;const n=e.querySelector(`.taskCard[data-task-id='${a}']`),o=e.querySelector(`.taskCardDetailsContainer[data-task-id="${a}"]`);n&&e.removeChild(n),o&&e.removeChild(o)}));const o=e.findIndex((t=>t.id===parseInt(a)));-1!==o&&(e.splice(o,1),console.log("This task was deleted"),console.log(e))}))}))}(),document.querySelectorAll(".editIcon").forEach((t=>{t.addEventListener("click",(t=>{t.stopPropagation(),function(t){const n=document.getElementById("edit_title"),a=document.getElementById("edit_note"),o=document.getElementById("edit_date"),r=document.getElementById("edit_priority"),i=document.getElementById("edit_project"),s=e.find((e=>e.id===parseInt(t)));s?(n.value=`${s.title}`,a.value=`${s.note}`,o.value=`${s.date}`,r.value=`${s.priority}`,i.value=`${s.project}`):console.error("Task not found")}(t.target.closest(".taskCard").dataset.taskId),l.style.display="none",f.style.display="none",y.style.display="block",console.log("Task editor has been opened"),p.style.pointerEvents="none",b.style.pointerEvents="none"}))})),E.addEventListener("click",(()=>{y.style.display="none",p.style.pointerEvents="auto",b.style.pointerEvents="auto"})),window.addEventListener("click",(t=>{y.contains(t.target)||(y.style.display="none",p.style.pointerEvents="auto",b.style.pointerEvents="auto")})),function(){const t=document.getElementById("edit_title"),a=document.getElementById("edit_note"),o=document.getElementById("edit_date"),i=document.getElementById("edit_priority"),d=document.getElementById("edit_project");g.addEventListener("submit",(u=>{u.preventDefault();const l=document.querySelector(`[data-cardCounter="card ${n}"]`).dataset.taskId,m=e.find((t=>t.id===parseInt(l)));m?(m.title=t.value,m.note=a.value,m.date=o.value,m.priority=i.value,m.project=d.value,[r,s,c].forEach((t=>{!function(t,e,n){const a=n.querySelector(`.taskCard[data-task-id="${t}"]`);if(a){a.querySelector(".taskTitle").textContent=e.title;const t=A(new Date(e.date),"MMMM dd, yyyy - hh:mm a");a.querySelector(".taskDate").textContent=t}}(l,m,t),function(t,e,n){const a=n.querySelector(`.taskCardDetailsContainer[data-task-id="${t}"]`);if(a){a.querySelector(".taskDetailsTop .titleDetails").textContent=`Title: ${e.title}`;const t=A(new Date(e.date),"MMMM dd, yyyy - hh:mm a");a.querySelector(".taskDetailsTop .dateDetails").textContent=`Date: ${t}`,a.querySelector(".taskDetailsTop .priorityDetails").textContent=`Priority: ${e.priority}`,a.querySelector(".taskDetailsBottom .noteDetails").textContent=`Note: ${e.note}`,a.querySelector(".taskDetailsBottom .projectDetails").textContent=`Project: ${e.project}`}}(l,m,t)})),console.log(e),y.style.display="none"):console.error("Task not found")}))}(),l.style.display="none",b.style.pointerEvents="auto"}))},allTasksDisplayControl:function(){o.addEventListener("click",(()=>{r.style.display="block",s.style.display="none",c.style.display="none",a.textContent="All Tasks"}))},todayTasksDisplayControl:function(){i.addEventListener("click",(()=>{s.style.display="block",r.style.display="none",c.style.display="none",a.textContent="Today"}))},thisWeekDIsplayControl:function(){d.addEventListener("click",(()=>{c.style.display="block",r.style.display="none",s.style.display="none",a.textContent="This Week"}))}}}(),X=t();G.launchProjectCreator(),G.launchTaskCreator(),G.closeProjectCreator(),G.closeTaskCreator(),G.displayTask(),G.allTasksDisplayControl(),G.todayTasksDisplayControl(),G.thisWeekDIsplayControl(),X.createProject()})();