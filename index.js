// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).resolve=n()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&i.call(t,n)}var c="function"==typeof Symbol?Symbol.toStringTag:"";var f,l=r()?function(t){var n,e,r;if(null==t)return o.call(t);e=t[c],n=u(t,c);try{t[c]=void 0}catch(n){return o.call(t)}return r=o.call(t),n?t[c]=e:delete t[c],r}:function(t){return o.call(t)};function a(t){return"[object Arguments]"===l(t)}f=function(){return a(arguments)}();var p=f,s="function"==typeof Object.defineProperty?Object.defineProperty:null;var y,b=Object.defineProperty,v=Object.prototype,g=v.toString,m=v.__defineGetter__,d=v.__defineSetter__,h=v.__lookupGetter__,j=v.__lookupSetter__;y=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?b:function(t,n,e){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===g.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===g.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(h.call(t,n)||j.call(t,n)?(r=t.__proto__,t.__proto__=v,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&m&&m.call(t,n,e.get),u&&d&&d.call(t,n,e.set),t};var w=y;function _(t,n,e){w(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function O(t){return"string"==typeof t}var S=String.prototype.valueOf;var x=r();function E(t){return"object"==typeof t&&(t instanceof String||(x?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function P(t){return O(t)||E(t)}function T(t){return"number"==typeof t}_(P,"isPrimitive",O),_(P,"isObject",E);var I=Number,A=I.prototype.toString;var V=r();function k(t){return"object"==typeof t&&(t instanceof I||(V?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function N(t){return T(t)||k(t)}function B(t){return t!=t}function F(t){return T(t)&&B(t)}function L(t){return k(t)&&B(t.valueOf())}function G(t){return F(t)||L(t)}_(N,"isPrimitive",T),_(N,"isObject",k),_(G,"isPrimitive",F),_(G,"isObject",L);var Y=Number.POSITIVE_INFINITY,C=I.NEGATIVE_INFINITY,M=Math.floor;function X(t){return M(t)===t}function H(t){return t<Y&&t>C&&X(t)}function W(t){return T(t)&&H(t)}function D(t){return k(t)&&H(t.valueOf())}function R(t){return W(t)||D(t)}_(R,"isPrimitive",W),_(R,"isObject",D);var U=Object.prototype.propertyIsEnumerable;var q=!U.call("beep","0");function z(t,n){var e;return null!=t&&(!(e=U.call(t,n))&&q&&P(t)?!F(n=+n)&&W(n)&&n>=0&&n<t.length:e)}var J=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var K=p?a:function(t){return null!==t&&"object"==typeof t&&!J(t)&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!z(t,"callee")},Q=Array.prototype.slice;function Z(t){return null!==t&&"object"==typeof t}_(Z,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!J(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Z));var $=z((function(){}),"prototype"),tt=!z({toString:null},"toString");function nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=9007199254740991}function et(t,n,e){var r,o;if(!nt(t)&&!O(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!W(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(G(n)){for(;o<r;o++)if(G(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var rt=/./;function ot(t){return"boolean"==typeof t}var it=Boolean.prototype.toString;var ut=r();function ct(t){return"object"==typeof t&&(t instanceof Boolean||(ut?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function ft(t){return ot(t)||ct(t)}function lt(){return new Function("return this;")()}_(ft,"isPrimitive",ot),_(ft,"isObject",ct);var at="object"==typeof self?self:null,pt="object"==typeof window?window:null,st="object"==typeof global?global:null;var yt=function(t){if(arguments.length){if(!ot(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return lt()}if(at)return at;if(pt)return pt;if(st)return st;throw new Error("unexpected error. Unable to resolve global object.")}(),bt=yt.document&&yt.document.childNodes,vt=Int8Array;function gt(){return/^\s*function\s*([^(]*)/i}var mt=/^\s*function\s*([^(]*)/i;function dt(t){var n,e,r,o;if(("Object"===(e=l(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=mt.exec(r.toString()))return n[1]}return Z(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}_(gt,"REGEXP",mt);var ht="function"==typeof rt||"object"==typeof vt||"function"==typeof bt?function(t){return dt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?dt(t).toLowerCase():n};function jt(t){return t.constructor&&t.constructor.prototype===t}var wt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_t="undefined"==typeof window?void 0:window;var Ot=function(){var t;if("undefined"===ht(_t))return!1;for(t in _t)try{-1===et(wt,t)&&u(_t,t)&&null!==_t[t]&&"object"===ht(_t[t])&&jt(_t[t])}catch(t){return!0}return!1}(),St="undefined"!=typeof window;var xt,Et=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];xt=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return K(n)?t(Q.call(n)):t(n)}:t:function(t){var n,e,r,o,i,c,f;if(o=[],K(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(r="function"==typeof t)&&!Z(t))return o;e=$&&r}for(i in t)e&&"prototype"===i||!u(t,i)||o.push(String(i));if(tt)for(n=function(t){if(!1===St&&!Ot)return jt(t);try{return jt(t)}catch(t){return!1}}(t),f=0;f<Et.length;f++)c=Et[f],n&&"constructor"===c||!u(t,c)||o.push(String(c));return o};var Pt=xt;function Tt(t){return"function"===ht(t)}var It,At=Object.getPrototypeOf;It=Tt(Object.getPrototypeOf)?At:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===l(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Vt=It;var kt=Object.prototype;function Nt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!J(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Vt(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&Tt(n.constructor)&&"[object Function]"===l(n.constructor)&&u(n,"isPrototypeOf")&&Tt(n.isPrototypeOf)&&(n===kt||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}var Bt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ft(){return Bt.slice()}var Lt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Gt(){return Lt.slice()}function Yt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ct(t,n,e){w(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}_(Gt,"enum",Yt),function(t,n){var e,r,o;for(e=Pt(n),o=0;o<e.length;o++)Ct(t,r=e[o],n[r])}(Gt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Mt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Xt(){return{bool:Mt.bool,int8:Mt.int8,uint8:Mt.uint8,uint8c:Mt.uint8c,int16:Mt.int16,uint16:Mt.uint16,int32:Mt.int32,uint32:Mt.uint32,int64:Mt.int64,uint64:Mt.uint64,float32:Mt.float32,float64:Mt.float64,complex64:Mt.complex64,complex128:Mt.complex128,binary:Mt.binary,generic:Mt.generic,notype:Mt.notype,userdefined_type:Mt.userdefined_type}}_(Ft,"enum",Xt),function(t,n){var e,r,o;for(e=Pt(n),o=0;o<e.length;o++)Ct(t,r=e[o],n[r])}(Ft,Xt());var Ht=function(t,n){var e,r,o,i,c,f,l,a=!0;if(!Z(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Nt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(u(n,"duplicates")&&!ot(a=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(r=(e=Pt(t)).length,c={},a)for(l=0;l<r;l++)u(c,i=t[o=e[l]])?(f=c[i],J(f)?c[i].push(o):c[i]=[f,o]):c[i]=o;else for(l=0;l<r;l++)c[t[o=e[l]]]=o;return c}(Xt(),{duplicates:!1});var Wt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};return function(t){var n=typeof t;return"number"===n?function(t){var n=Ht[t];return"string"==typeof n?n:null}(t)?t:null:"string"===n?function(t){var n=Wt[t];return"number"==typeof n?n:null}(t):null}}));
//# sourceMappingURL=index.js.map
