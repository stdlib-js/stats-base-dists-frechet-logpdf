// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,v,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,U=isNaN,I=Array.isArray;function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,f,s,l,p;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=N(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,U(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,U(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!U(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=U(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R=Math.floor;function Z(r){return R(r)===r}function M(r){return Z(r/2)}function X(r){return M(r>0?r-1:r+1)}var Y=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY;function z(r){return r===Y||r===q}var B=Math.sqrt;function D(r){return Math.abs(r)}var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;var rr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof rr?rr.toStringTag:"";var nr=J&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return K.call(r);n=r[er],a=er,e=null!=(i=r)&&Q.call(i,a);try{r[er]=void 0}catch(e){return K.call(r)}return t=K.call(r),e?r[er]=n:delete r[er],t}:function(r){return K.call(r)},tr="function"==typeof Uint32Array;var ir="function"==typeof Uint32Array?Uint32Array:null;var ar,or="function"==typeof Uint32Array?Uint32Array:void 0;ar=function(){var r,e,n;if("function"!=typeof ir)return!1;try{e=new ir(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(tr&&n instanceof Uint32Array||"[object Uint32Array]"===nr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur=ar,cr="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var sr,lr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,e,n;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,NaN]),n=e,r=(cr&&n instanceof Float64Array||"[object Float64Array]"===nr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr=sr,yr="function"==typeof Uint8Array;var gr="function"==typeof Uint8Array?Uint8Array:null;var vr,dr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,e,n;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,256,257]),n=e,r=(yr&&n instanceof Uint8Array||"[object Uint8Array]"===nr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr=vr,wr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null;var mr,Ar="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,e,n;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,65536,65537]),n=e,r=(wr&&n instanceof Uint16Array||"[object Uint16Array]"===nr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er={uint16:mr,uint8:hr};(_r=new Er.uint16(1))[0]=4660;var Ur,Ir,Nr=52===new Er.uint8(_r.buffer)[0];!0===Nr?(Ur=1,Ir=0):(Ur=0,Ir=1);var Sr={HIGH:Ur,LOW:Ir},xr=new pr(1),kr=new ur(xr.buffer),Fr=Sr.HIGH,jr=Sr.LOW;function Tr(r,e,n,t){return xr[0]=r,e[t]=kr[Fr],e[t+n]=kr[jr],e}function Or(r){return Tr(r,[0,0],1,0)}L(Or,"assign",Tr);var Vr=!0===Nr?0:1,$r=new pr(1),Gr=new ur($r.buffer);function Hr(r,e){return $r[0]=r,Gr[Vr]=e>>>0,$r[0]}function Wr(r){return 0|r}var Cr,Lr,Pr=!0===Nr?1:0,Rr=new pr(1),Zr=new ur(Rr.buffer);function Mr(r){return Rr[0]=r,Zr[Pr]}!0===Nr?(Cr=1,Lr=0):(Cr=0,Lr=1);var Xr={HIGH:Cr,LOW:Lr},Yr=new pr(1),qr=new ur(Yr.buffer),zr=Xr.HIGH,Br=Xr.LOW;function Dr(r,e){return qr[zr]=r,qr[Br]=e,Yr[0]}var Jr=[0,0];function Kr(r,e){var n,t;return Or.assign(r,Jr,1,0),n=Jr[0],n&=2147483647,t=Mr(e),Dr(n|=t&=2147483648,Jr[1])}var Qr=!0===Nr?1:0,re=new pr(1),ee=new ur(re.buffer);function ne(r,e){return re[0]=r,ee[Qr]=e>>>0,re[0]}var te=[1,1.5],ie=[0,.5849624872207642],ae=[0,1.350039202129749e-8];function oe(r,e,n,t){return P(r)||z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&D(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return oe(r,[0,0],1,0)}),"assign",oe);var ue=[0,0],ce=[0,0];function fe(r,e){var n,t;return 0===e||0===r||P(r)||z(r)?r:(oe(r,ue,1,0),e+=ue[1],e+=function(r){var e=Mr(r);return(e=(2146435072&e)>>>20)-1023|0}(r=ue[0]),e<-1074?Kr(0,r):e>1023?r<0?q:Y:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Or.assign(r,ce,1,0),n=ce[0],n&=2148532223,t*Dr(n|=e+1023<<20,ce[1])))}var se=1e300,le=1e-300,pe=[0,0],ye=[0,0];function ge(r,e){var n,t,i,a,o,u,c,f,s,l,p,y,g,v;if(P(r)||P(e))return NaN;if(Or.assign(e,pe,1,0),o=pe[0],0===pe[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return B(r);if(-.5===e)return 1/B(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:D(r)<1==(e===Y)?0:Y}(r,e)}if(Or.assign(r,pe,1,0),a=pe[0],0===pe[1]){if(0===a)return function(r,e){return e===q?Y:e===Y?0:e>0?X(e)?r:0:X(e)?Kr(Y,r):Y}(r,e);if(1===r)return 1;if(-1===r&&X(e))return-1;if(z(r))return r===q?ge(-0,-e):e<0?0:Y}if(r<0&&!1===Z(e))return(r-r)/(r-r);if(i=D(r),n=2147483647&a|0,t=2147483647&o|0,c=o>>>31|0,u=(u=a>>>31|0)&&X(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&Mr(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===c?u*se*se:u*le*le;if(n>1072693248)return 0===c?u*se*se:u*le*le;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Hr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(ye,i)}else p=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y,g,v,d,h,w,b,m,A,_,E;return m=0,n<1048576&&(m-=53,n=Mr(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=1048576),o=Hr(i=(w=(e=ne(e,n))-(f=te[_]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=ne(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Hr(c=3+(a=o*o)+(h+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),v=(y=-7.028461650952758e-9*(l=Hr(l=(w=o*c)+(b=u*c+(h-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+ae[_])-((g=Hr(g=(p=.9617967009544373*l)+y+(s=ie[_])+(d=m),0))-d-s-p),r[0]=g,r[1]=v,r}(ye,i,n);if(y=(l=(e-(f=Hr(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Or.assign(y,pe,1,0),g=Wr(pe[0]),v=Wr(pe[1]),g>=1083179008){if(0!=(g-1083179008|v))return u*se*se;if(l+8008566259537294e-32>y-s)return u*se*se}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|v))return u*le*le;if(l<=y-s)return u*le*le}return y=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=ne(0,t)),r=Wr(r=Mr(f=1-((f=(o=.6931471824645996*(a=Hr(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=f-(a=f*f)*(0===(y=a)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((c=u-(f-o))+f*c)-f))),(r+=s<<20>>>0)>>20<=0?fe(f,s):ne(f,r)}(g,s,l),u*y}var ve=.6931471803691238,de=1.9082149292705877e-10;function he(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?q:P(r)||r<0?NaN:(a=0,(n=Mr(r))<1048576&&(a-=54,n=Mr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(c=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=ne(r,n|1072693248^c))-1,(1048575&2+n)<3?0===u?0===a?0:a*ve+a*de:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*ve-(o-a*de-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*ve-(e-(s*(e+o)+a*de)-u)):0===a?u-s*(u-o):a*ve-(s*(u-o)-a*de-u))))}function we(r,e,n,t){var i;return P(r)||P(e)||P(n)||P(t)||e<=0||n<=0?NaN:r<=t?q:(i=(r-t)/n,he(e/n)-(1+e)*he(i)-ge(i,-e))}function be(r,e,n){return P(r)||P(e)||P(n)||r<=0||e<=0?(t=NaN,function(){return t}):function(t){var i;if(P(t))return NaN;if(t<=n)return q;return i=(t-n)/e,he(r/e)-(1+r)*he(i)-ge(i,-r)};var t}L(we,"factory",be);export{we as default,be as factory};
//# sourceMappingURL=mod.js.map
