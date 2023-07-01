// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.0.8-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function m(t,r,m,d){var o;return s(t)||s(r)||s(m)||s(d)||r<=0||m<=0?NaN:t<=d?i:(o=(t-d)/m,e(r/m)-(1+r)*e(o)-n(o,-r))}function d(t,m,d){return s(t)||s(m)||s(d)||t<=0||m<=0?r(NaN):function(r){var o;if(s(r))return NaN;if(r<=d)return i;return o=(r-d)/m,e(t/m)-(1+t)*e(o)-n(o,-t)}}t(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map
