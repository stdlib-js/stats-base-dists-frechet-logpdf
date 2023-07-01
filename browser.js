// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Math.floor;function p(r){return y(r)===r}function v(r){return p(r/2)}function s(r){return v(r>0?r-1:r+1)}var b=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;function w(r){return r===b||r===d}var A=Math.sqrt;function _(r){return Math.abs(r)}var m,g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),h=Object.prototype.toString,U=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",j=g&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return h.call(r);t=r[N],i=N,n=null!=(o=r)&&U.call(o,i);try{r[N]=void 0}catch(n){return h.call(r)}return e=h.call(r),n?r[N]=t:delete r[N],e}:function(r){return h.call(r)},I="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=m,T="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(T&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,x=E,L="function"==typeof Uint8Array,V="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,256,257]),t=n,r=(L&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var M,k=P,Y="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:M,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new x(1),X=new F(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n,t,e){return R[0]=r,n[e]=X[Z],n[e+t]=X[$],n}function nr(r){return rr(r,[0,0],1,0)}c(nr,"assign",rr);var tr=!0===K?0:1,er=new x(1),or=new F(er.buffer);function ir(r,n){return er[0]=r,or[tr]=n>>>0,er[0]}function ur(r){return 0|r}var fr,ar,cr=2147483647,lr=!0===K?1:0,yr=new x(1),pr=new F(yr.buffer);function vr(r){return yr[0]=r,pr[lr]}!0===K?(fr=1,ar=0):(fr=0,ar=1);var sr={HIGH:fr,LOW:ar},br=new x(1),dr=new F(br.buffer),wr=sr.HIGH,Ar=sr.LOW;function _r(r,n){return dr[wr]=r,dr[Ar]=n,br[0]}var mr=[0,0];function gr(r,n){var t,e;return nr.assign(r,mr,1,0),t=mr[0],t&=cr,e=vr(n),_r(t|=e&=2147483648,mr[1])}var hr=!0===K?1:0,Ur=new x(1),Nr=new F(Ur.buffer);function jr(r,n){return Ur[0]=r,Nr[hr]=n>>>0,Ur[0]}var Ir=1023,Or=1048576,Sr=[1,1.5],Er=[0,.5849624872207642],Fr=[0,1.350039202129749e-8];function Tr(r,n,t,e){return l(r)||w(r)?(n[e]=r,n[e+t]=0,n):0!==r&&_(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Tr(r,[0,0],1,0)}),"assign",Tr);var Hr=[0,0],Gr=[0,0];function Pr(r,n){var t,e;return 0===n||0===r||l(r)||w(r)?r:(Tr(r,Hr,1,0),n+=Hr[1],n+=function(r){var n=vr(r);return(n=(2146435072&n)>>>20)-Ir|0}(r=Hr[0]),n<-1074?gr(0,r):n>1023?r<0?d:b:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr.assign(r,Gr,1,0),t=Gr[0],t&=2148532223,e*_r(t|=n+Ir<<20,Gr[1])))}var xr=1048575,Lr=1048576,Vr=1083179008,Wr=1e300,Mr=1e-300,kr=[0,0],Yr=[0,0];function qr(r,n){var t,e,o,i,u,f,a,c,y,v,m,g,h,U;if(l(r)||l(n))return NaN;if(nr.assign(n,kr,1,0),u=kr[0],0===kr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return A(r);if(-.5===n)return 1/A(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(w(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:_(r)<1==(n===b)?0:b}(r,n)}if(nr.assign(r,kr,1,0),i=kr[0],0===kr[1]){if(0===i)return function(r,n){return n===d?b:n===b?0:n>0?s(n)?r:0:s(n)?gr(b,r):b}(r,n);if(1===r)return 1;if(-1===r&&s(n))return-1;if(w(r))return r===d?qr(-0,-n):n<0?0:b}if(r<0&&!1===p(n))return(r-r)/(r-r);if(o=_(r),t=i&cr|0,e=u&cr|0,a=u>>>31|0,f=(f=i>>>31|0)&&s(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(vr(r)&cr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Wr*Wr:f*Mr*Mr;if(t>1072693248)return 0===a?f*Wr*Wr:f*Mr*Mr;m=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ir(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Yr,o)}else m=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,s,b,d,w,A,_,m,g,h,U;return m=0,t<Or&&(m-=53,t=vr(n*=9007199254740992)),m+=(t>>20)-Ir|0,t=1072693248|(g=1048575&t|0),g<=235662?h=0:g<767610?h=1:(h=0,m+=1,t-=Or),u=ir(o=(A=(n=jr(n,t))-(c=Sr[h]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=jr(0,e+=h<<18),w=(i=o*o)*i*(0===(U=i)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=ir(a=3+(i=u*u)+(w+=(f=_*(A-u*a-u*(n-(a-c))))*(u+o)),0),b=(v=-7.028461650952758e-9*(y=ir(y=(A=u*a)+(_=f*a+(w-(a-3-i))*o),0))+.9617966939259756*(_-(y-A))+Fr[h])-((s=ir(s=(p=.9617967009544373*y)+v+(l=Er[h])+(d=m),0))-d-l-p),r[0]=s,r[1]=b,r}(Yr,o,t);if(g=(v=(n-(c=ir(n,0)))*m[0]+n*m[1])+(y=c*m[0]),nr.assign(g,kr,1,0),h=ur(kr[0]),U=ur(kr[1]),h>=Vr){if(0!=(h-Vr|U))return f*Wr*Wr;if(v+8008566259537294e-32>g-y)return f*Wr*Wr}else if((h&cr)>=1083231232){if(0!=(h-3230714880|U))return f*Mr*Mr;if(v<=g-y)return f*Mr*Mr}return g=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&cr|0)>>20)-Ir|0,c=0,l>1071644672&&(o=jr(0,((c=r+(Lr>>y+1)>>>0)&~(xr>>(y=((c&cr)>>20)-Ir|0)))>>>0),c=(c&xr|Lr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=ur(r=vr(a=1-((a=(i=.6931471824645996*(o=ir(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Pr(a,c):jr(a,r)}(h,y,v),f*g}var Cr=.6931471803691238,zr=1.9082149292705877e-10,Br=1048575;function Dr(r){var n,t,e,o,i,u,f,a,c,y,p,v;return 0===r?d:l(r)||r<0?NaN:(i=0,(t=vr(r))<1048576&&(i-=54,t=vr(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-Ir|0,i+=(a=614244+(t&=Br)&1048576|0)>>20|0,f=(r=jr(r,t|1072693248^a))-1,(Br&2+t)<3?0===f?0===i?0:i*Cr+i*zr:(u=f*f*(.5-.3333333333333333*f),0===i?f-u:i*Cr-(u-i*zr-f)):(a=t-398458|0,c=440401-t|0,o=(p=(v=(y=f/(2+f))*y)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=e+o,(a|=c)>0?(n=.5*f*f,0===i?f-(n-y*(n+u)):i*Cr-(n-(y*(n+u)+i*zr)-f)):0===i?f-y*(f-u):i*Cr-(y*(f-u)-i*zr-f))))}function Jr(r,n,t,e){var o;return l(r)||l(n)||l(t)||l(e)||n<=0||t<=0?NaN:r<=e?d:(o=(r-e)/t,Dr(n/t)-(1+n)*Dr(o)-qr(o,-n))}return c(Jr,"factory",(function(r,n,t){return l(r)||l(n)||l(t)||r<=0||n<=0?(e=NaN,function(){return e}):function(e){var o;return l(e)?NaN:e<=t?d:(o=(e-t)/n,Dr(r/n)-(1+r)*Dr(o)-qr(o,-r))};var e})),Jr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=n();
//# sourceMappingURL=browser.js.map
