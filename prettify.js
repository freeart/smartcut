var o=!0,r=null,A=!1;window.PR_SHOULD_USE_CONTINUATION=o;
(function(){function N(a){function m(a){var f=a.charCodeAt(0);if(92!==f)return f;var b=a.charAt(1);return(f=s[b])?f:"0"<=b&&"7">=b?parseInt(a.substring(1),8):"u"===b||"x"===b?parseInt(a.substring(2),16):a.charCodeAt(1)}function e(a){if(32>a)return(16>a?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if("\\"===a||"-"===a||"["===a||"]"===a)a="\\"+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g),a=
[],b=[],p="^"===f[0],c=p?1:0,i=f.length;c<i;++c){var j=f[c];if(/\\[bdsw]/i.test(j))a.push(j);else{var j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.push([j,d]);65>d||122<j||(65>d||90<j||b.push([Math.max(65,j)|32,Math.min(d,90)|32]),97>d||122<j||b.push([Math.max(97,j)&-33,Math.min(d,122)&-33]))}}b.sort(function(a,b){return a[0]-b[0]||b[1]-a[1]});f=[];j=[NaN,NaN];for(c=0;c<b.length;++c)i=b[c],i[0]<=j[1]+1?j[1]=Math.max(j[1],i[1]):f.push(j=i);b=["["];p&&b.push("^");b.push.apply(b,a);for(c=0;c<
f.length;++c)i=f[c],b.push(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.push("-"),b.push(e(i[1])));b.push("]");return b.join("")}function y(a){for(var f=a.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),b=f.length,d=[],c=0,i=0;c<b;++c){var j=f[c];"("===j?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(d[j]=-1)}for(c=1;c<d.length;++c)-1===d[c]&&(d[c]=++u);for(i=c=0;c<b;++c)j=
f[c],"("===j?(++i,void 0===d[i]&&(f[c]="(?:")):"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(f[c]="\\"+d[i]);for(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");if(a.ignoreCase&&t)for(c=0;c<b;++c)j=f[c],a=j.charAt(0),2<=j.length&&"["===a?f[c]=h(j):"\\"!==a&&(f[c]=j.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return f.join("")}for(var u=0,t=A,l=A,q=0,d=a.length;q<d;++q){var g=a[q];if(g.ignoreCase)l=o;else if(/[a-z]/i.test(g.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,
""))){t=o;l=A;break}}for(var s={b:8,t:9,n:10,v:11,f:12,r:13},n=[],q=0,d=a.length;q<d;++q){g=a[q];if(g.global||g.multiline)throw Error(""+g);n.push("(?:"+y(g)+")")}return RegExp(n.join("|"),l?"gi":"g")}function O(a){function m(a){switch(a.nodeType){case 1:if(e.test(a.className))break;for(var g=a.firstChild;g;g=g.nextSibling)m(g);g=a.nodeName;if("BR"===g||"LI"===g)h[t]="\n",u[t<<1]=y++,u[t++<<1|1]=a;break;case 3:case 4:g=a.nodeValue,g.length&&(g=q?g.replace(/\r\n?/g,"\n"):g.replace(/[ \t\r\n]+/g," "),
h[t]=g,u[t<<1]=y,y+=g.length,u[t++<<1|1]=a)}}var e=/(?:^|\s)nocode(?:\s|$)/,h=[],y=0,u=[],t=0,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=document.defaultView.getComputedStyle(a,r).getPropertyValue("white-space"));var q=l&&"pre"===l.substring(0,3);m(a);return{a:h.join("").replace(/\n$/,""),c:u}}function D(a,m,e,h){m&&(a={a:m,d:a},e(a),h.push.apply(h,a.e))}function z(a,m){function e(a){for(var l=a.d,q=[l,"pln"],d=0,g=a.a.match(y)||[],s={},n=0,B=g.length;n<B;++n){var f=
g[n],b=s[f],p=void 0,c;if("string"===typeof b)c=A;else{var i=h[f.charAt(0)];if(i)p=f.match(i[1]),b=i[0];else{for(c=0;c<u;++c)if(i=m[c],p=f.match(i[1])){b=i[0];break}p||(b="pln")}if((c=5<=b.length&&"lang-"===b.substring(0,5))&&!(p&&"string"===typeof p[1]))c=A,b="src";c||(s[f]=b)}i=d;d+=f.length;if(c){c=p[1];var j=f.indexOf(c),k=j+c.length;p[2]&&(k=f.length-p[2].length,j=k-c.length);b=b.substring(5);D(l+i,f.substring(0,j),e,q);D(l+i+j,c,E(b,c),q);D(l+i+k,f.substring(k),e,q)}else q.push(l+i,b)}a.e=q}
var h={},y;(function(){for(var e=a.concat(m),l=[],q={},d=0,g=e.length;d<g;++d){var s=e[d],n=s[3];if(n)for(var k=n.length;0<=--k;)h[n.charAt(k)]=s;s=s[1];n=""+s;q.hasOwnProperty(n)||(l.push(s),q[n]=r)}l.push(/[\0-\uffff]/);y=N(l)})();var u=m.length;return e}function v(a){var m=[],e=[];a.tripleQuotedStrings?m.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
r,"'\""]):a.multiLineStrings?m.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,r,"'\"`"]):m.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,r,"\"'"]);a.verbatimStrings&&e.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,r]);var h=a.hashComments;h&&(a.cStyleComments?(1<h?m.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,r,"#"]):m.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,
r,"#"]),e.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,r])):m.push(["com",/^#[^\r\n]*/,r,"#"]));a.cStyleComments&&(e.push(["com",/^\/\/[^\r\n]*/,r]),e.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,r]));a.regexLiterals&&e.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|\\!|\\!=|\\!==|\\#|\\%|\\%=|&|&&|&&=|&=|\\(|\\*|\\*=|\\+=|\\,|\\-=|\\->|\\/|\\/=|:|::|\\;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\@|\\[|\\^|\\^=|\\^\\^|\\^\\^=|\\{|\\||\\|=|\\|\\||\\|\\|=|\\~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/)")]);
(h=a.types)&&e.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,"");a.length&&e.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),r]);m.push(["pln",/^\s+/,r," \r\n\t\xa0"]);e.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,r],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,r],["pln",/^[a-z_$][a-z_$@0-9]*/i,r],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,r,"0123456789"],["pln",/^\\[\s\S]?/,r],["pun",/^.[^\s\w\.$@\'\"\`\/\#\\]*/,r]);return z(m,e)}function F(a,
m){function e(a){switch(a.nodeType){case 1:if(k.test(a.className))break;if("BR"===a.nodeName)h(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)e(a);break;case 3:case 4:if(q){var b=a.nodeValue,d=b.match(u);if(d){var c=b.substring(0,d.index);a.nodeValue=c;(b=b.substring(d.index+d[0].length))&&a.parentNode.insertBefore(t.createTextNode(b),a.nextSibling);h(a);c||a.parentNode.removeChild(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(A):a,f=a.parentNode;
if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),e;(e=a.parentNode)&&1===e.nodeType;)a=e;d.push(a)}var k=/(?:^|\s)nocode(?:\s|$)/,u=/\r\n?|\n/,t=a.ownerDocument,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=t.defaultView.getComputedStyle(a,r).getPropertyValue("white-space"));var q=l&&"pre"===l.substring(0,3);for(l=t.createElement("LI");a.firstChild;)l.appendChild(a.firstChild);
for(var d=[l],g=0;g<d.length;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",m);var s=t.createElement("OL");s.className="linenums";for(var n=Math.max(0,m-1|0)||0,g=0,B=d.length;g<B;++g)l=d[g],l.className="L"+(g+n)%10,l.firstChild||l.appendChild(t.createTextNode("\xa0")),s.appendChild(l);a.appendChild(s)}function k(a,m){for(var e=m.length;0<=--e;){var h=m[e];C.hasOwnProperty(h)?window.console&&console.warn("cannot override language handler %s",h):C[h]=a}}function E(a,m){if(!a||!C.hasOwnProperty(a))a=
/^\s*</.test(m)?"default-markup":"default-code";return C[a]}function G(a){var m=a.g;try{var e=O(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;E(m,h)(a);var k=/\bMSIE\b/.test(navigator.userAgent),m=/\n/g,u=a.a,t=u.length,e=0,l=a.c,q=l.length,h=0,d=a.e,g=d.length,a=0;d[g]=t;var s,n;for(n=s=0;n<g;)d[n]!==d[n+2]?(d[s++]=d[n++],d[s++]=d[n++]):n+=2;g=s;for(n=s=0;n<g;){for(var B=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[s++]=B;d[s++]=f;n=b}for(d.length=s;h<q;){var p=l[h+2]||t,c=d[a+2]||t,b=Math.min(p,c),i=l[h+1],
j;if(1!==i.nodeType&&(j=u.substring(e,b))){k&&(j=j.replace(m,"\r"));i.nodeValue=j;var v=i.ownerDocument,w=v.createElement("SPAN");w.className=d[a+1];var z=i.parentNode;z.replaceChild(w,i);w.appendChild(i);e<p&&(l[h+1]=i=v.createTextNode(u.substring(b,p)),z.insertBefore(i,w.nextSibling))}e=b;e>=p&&(h+=2);e>=c&&(a+=2)}}catch(x){"console"in window&&console.log(x&&x.stack?x.stack:x)}}var w=["break,continue,do,else,for,if,return,while"],x=[[w,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],H=[x,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],I=[x,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
J=[I,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],x=[x,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],K=[w,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
L=[w,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],w=[w,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],M=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,P=/\S/,Q=v({keywords:[H,J,x,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+
K,L,w],hashComments:o,cStyleComments:o,multiLineStrings:o,regexLiterals:o}),C={};k(Q,["default-code"]);k(z([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),
"default-markup,htm,html,mxml,xhtml,xml,xsl".split(","));k(z([["pln",/^[\s]+/,r," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,r,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],
["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);k(z([],[["atv",/^[\s\S]+/]]),["uq.val"]);k(v({keywords:H,hashComments:o,cStyleComments:o,types:M}),"c,cc,cpp,cxx,cyc,m".split(","));k(v({keywords:"null,true,false"}),["json"]);k(v({keywords:J,hashComments:o,cStyleComments:o,verbatimStrings:o,types:M}),["cs"]);k(v({keywords:I,cStyleComments:o}),["java"]);k(v({keywords:w,hashComments:o,multiLineStrings:o}),["bsh","csh","sh"]);k(v({keywords:K,hashComments:o,multiLineStrings:o,tripleQuotedStrings:o}),
["cv","py"]);k(v({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:o,multiLineStrings:o,regexLiterals:o}),["perl","pl","pm"]);k(v({keywords:L,hashComments:o,multiLineStrings:o,regexLiterals:o}),["rb"]);k(v({keywords:x,cStyleComments:o,regexLiterals:o}),["js"]);k(v({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
hashComments:3,cStyleComments:o,multilineStrings:o,tripleQuotedStrings:o,regexLiterals:o}),["coffee"]);k(z([],[["str",/^[\s\S]+/]]),["regex"]);window.prettyPrintOne=function(a,m,e){var h=document.createElement("PRE");h.innerHTML=a;e&&F(h,e);G({g:m,i:e,h:h});return h.innerHTML};window.prettyPrint=function(a){function m(){for(var e=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;q<h.length&&l.now()<e;q++){var n=h[q],k=n.className;if(0<=k.indexOf("prettyprint")){var k=k.match(g),f,b;if(b=!k){b=
n;for(var p=void 0,c=b.firstChild;c;c=c.nextSibling)var i=c.nodeType,p=1===i?p?b:c:3===i?P.test(c.nodeValue)?b:p:p;b=(f=p===b?void 0:p)&&"CODE"===f.tagName}b&&(k=f.className.match(g));k&&(k=k[1]);b=A;for(p=n.parentNode;p;p=p.parentNode)if(("pre"===p.tagName||"code"===p.tagName||"xmp"===p.tagName)&&p.className&&0<=p.className.indexOf("prettyprint")){b=o;break}b||((b=(b=n.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:o:A)&&F(n,b),d={g:k,h:n,i:b},G(d))}}q<h.length?setTimeout(m,
250):a&&a()}for(var e=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],h=[],k=0;k<e.length;++k)for(var u=0,t=e[k].length;u<t;++u)h.push(e[k][u]);var e=r,l=Date;l.now||(l={now:function(){return+new Date}});var q=0,d,g=/\blang(?:uage)?-([\w.]+)(?!\S)/;m()};window.PR={createSimpleLexer:z,registerLangHandler:k,sourceDecorator:v,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",
PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();