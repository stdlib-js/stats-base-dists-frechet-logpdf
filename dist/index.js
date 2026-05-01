"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var N=f(function(A,c){
var n=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-pow/dist'),q=require('@stdlib/math-base-special-ln/dist'),g=require('@stdlib/constants-float64-ninf/dist');function w(e,r,i,u){var t;return n(e)||n(r)||n(i)||n(u)||r<=0||i<=0?NaN:e<=u?g:(t=(e-u)/i,q(r/i)-(1+r)*q(t)-F(t,-r))}c.exports=w
});var y=f(function(B,s){
var z=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),I=require('@stdlib/math-base-special-pow/dist'),a=require('@stdlib/math-base-special-ln/dist'),O=require('@stdlib/constants-float64-ninf/dist');function R(e,r,i){if(o(e)||o(r)||o(i)||e<=0||r<=0)return z(NaN);return u;function u(t){var v;return o(t)?NaN:t<=i?O:(v=(t-i)/r,a(e/r)-(1+e)*a(v)-I(v,-e))}}s.exports=R
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=N(),j=y();b(d,"factory",j);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
