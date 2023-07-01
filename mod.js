// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&i.call(t,n)}var c="function"==typeof Symbol?Symbol.toStringTag:"";var f=r()?function(t){var n,e,r;if(null==t)return o.call(t);e=t[c],n=u(t,c);try{t[c]=void 0}catch(n){return o.call(t)}return r=o.call(t),n?t[c]=e:delete t[c],r}:function(t){return o.call(t)};function l(t){return"[object Arguments]"===f(t)}var a=function(){return l(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var y,s=Object.defineProperty,b=Object.prototype,v=b.toString,g=b.__defineGetter__,m=b.__defineSetter__,d=b.__lookupGetter__,h=b.__lookupSetter__;y=function(){try{return p({},"x",{}),!0}catch(t){return!1}}()?s:function(t,n,e){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===v.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===v.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(d.call(t,n)||h.call(t,n)?(r=t.__proto__,t.__proto__=b,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&g&&g.call(t,n,e.get),u&&m&&m.call(t,n,e.set),t};var j=y;function w(t,n,e){j(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"string"==typeof t}var O=String.prototype.valueOf;var S=r();function x(t){return"object"==typeof t&&(t instanceof String||(S?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function E(t){return _(t)||x(t)}function P(t){return"number"==typeof t}w(E,"isPrimitive",_),w(E,"isObject",x);var T=Number,I=T.prototype.toString;var A=r();function V(t){return"object"==typeof t&&(t instanceof T||(A?function(t){try{return I.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function k(t){return P(t)||V(t)}function N(t){return t!=t}function B(t){return P(t)&&N(t)}function F(t){return V(t)&&N(t.valueOf())}function L(t){return B(t)||F(t)}w(k,"isPrimitive",P),w(k,"isObject",V),w(L,"isPrimitive",B),w(L,"isObject",F);var G=Number.POSITIVE_INFINITY,Y=T.NEGATIVE_INFINITY,C=Math.floor;function M(t){return C(t)===t}function X(t){return t<G&&t>Y&&M(t)}function H(t){return P(t)&&X(t)}function W(t){return V(t)&&X(t.valueOf())}function D(t){return H(t)||W(t)}w(D,"isPrimitive",H),w(D,"isObject",W);var R=Object.prototype.propertyIsEnumerable;var U=!R.call("beep","0");function q(t,n){var e;return null!=t&&(!(e=R.call(t,n))&&U&&E(t)?!B(n=+n)&&H(n)&&n>=0&&n<t.length:e)}var z=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var J=a?l:function(t){return null!==t&&"object"==typeof t&&!z(t)&&"number"==typeof t.length&&M(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!q(t,"callee")},K=Array.prototype.slice;function Q(t){return null!==t&&"object"==typeof t}w(Q,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!z(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Q));var Z=q((function(){}),"prototype"),$=!q({toString:null},"toString");function tt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&M(t.length)&&t.length>=0&&t.length<=9007199254740991}function nt(t,n,e){var r,o;if(!tt(t)&&!_(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!H(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(L(n)){for(;o<r;o++)if(L(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var et=/./;function rt(t){return"boolean"==typeof t}var ot=Boolean.prototype.toString;var it=r();function ut(t){return"object"==typeof t&&(t instanceof Boolean||(it?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function ct(t){return rt(t)||ut(t)}function ft(){return new Function("return this;")()}w(ct,"isPrimitive",rt),w(ct,"isObject",ut);var lt="object"==typeof self?self:null,at="object"==typeof window?window:null,pt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},yt="object"==typeof pt?pt:null;var st=function(t){if(arguments.length){if(!rt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return ft()}if(lt)return lt;if(at)return at;if(yt)return yt;throw new Error("unexpected error. Unable to resolve global object.")}(),bt=st.document&&st.document.childNodes,vt=Int8Array;function gt(){return/^\s*function\s*([^(]*)/i}var mt=/^\s*function\s*([^(]*)/i;function dt(t){var n,e,r,o;if(("Object"===(e=f(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=mt.exec(r.toString()))return n[1]}return Q(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}w(gt,"REGEXP",mt);var ht="function"==typeof et||"object"==typeof vt||"function"==typeof bt?function(t){return dt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?dt(t).toLowerCase():n};function jt(t){return t.constructor&&t.constructor.prototype===t}var wt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_t="undefined"==typeof window?void 0:window;var Ot=function(){var t;if("undefined"===ht(_t))return!1;for(t in _t)try{-1===nt(wt,t)&&u(_t,t)&&null!==_t[t]&&"object"===ht(_t[t])&&jt(_t[t])}catch(t){return!0}return!1}(),St="undefined"!=typeof window;var xt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Et=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return J(n)?t(K.call(n)):t(n)}:t:function(t){var n,e,r,o,i,c,f;if(o=[],J(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(r="function"==typeof t)&&!Q(t))return o;e=Z&&r}for(i in t)e&&"prototype"===i||!u(t,i)||o.push(String(i));if($)for(n=function(t){if(!1===St&&!Ot)return jt(t);try{return jt(t)}catch(t){return!1}}(t),f=0;f<xt.length;f++)c=xt[f],n&&"constructor"===c||!u(t,c)||o.push(String(c));return o};function Pt(t){return"function"===ht(t)}var Tt,It=Object.getPrototypeOf;Tt=Pt(Object.getPrototypeOf)?It:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var At=Tt;var Vt=Object.prototype;function kt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!z(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),At(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&Pt(n.constructor)&&"[object Function]"===f(n.constructor)&&u(n,"isPrototypeOf")&&Pt(n.isPrototypeOf)&&(n===Vt||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}var Nt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Bt(){return Nt.slice()}var Ft=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Lt(){return Ft.slice()}function Gt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Yt(t,n,e){j(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}w(Lt,"enum",Gt),function(t,n){var e,r,o;for(e=Et(n),o=0;o<e.length;o++)Yt(t,r=e[o],n[r])}(Lt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ct={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Mt(){return{bool:Ct.bool,int8:Ct.int8,uint8:Ct.uint8,uint8c:Ct.uint8c,int16:Ct.int16,uint16:Ct.uint16,int32:Ct.int32,uint32:Ct.uint32,int64:Ct.int64,uint64:Ct.uint64,float32:Ct.float32,float64:Ct.float64,complex64:Ct.complex64,complex128:Ct.complex128,binary:Ct.binary,generic:Ct.generic,notype:Ct.notype,userdefined_type:Ct.userdefined_type}}w(Bt,"enum",Mt),function(t,n){var e,r,o;for(e=Et(n),o=0;o<e.length;o++)Yt(t,r=e[o],n[r])}(Bt,Mt());var Xt=function(t,n){var e,r,o,i,c,f,l,a=!0;if(!Q(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!kt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(u(n,"duplicates")&&!rt(a=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(r=(e=Et(t)).length,c={},a)for(l=0;l<r;l++)u(c,i=t[o=e[l]])?(f=c[i],z(f)?c[i].push(o):c[i]=[f,o]):c[i]=o;else for(l=0;l<r;l++)c[t[o=e[l]]]=o;return c}(Mt(),{duplicates:!1});var Ht={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Wt(t){var n=typeof t;return"number"===n?function(t){var n=Xt[t];return"string"==typeof n?n:null}(t)?t:null:"string"===n?function(t){var n=Ht[t];return"number"==typeof n?n:null}(t):null}export{Wt as default};
//# sourceMappingURL=mod.js.map
