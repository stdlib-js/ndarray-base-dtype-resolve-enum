// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var r=void 0!==Object.keys;function n(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var e=n();var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(t,r){return null!=t&&i.call(t,r)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var l=e&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return o.call(t);n=t[c],r=a(t,c);try{t[c]=void 0}catch(r){return o.call(t)}return e=o.call(t),r?t[c]=n:delete t[c],e}:function(t){return o.call(t)};function f(t){return"[object Arguments]"===l(t)}var p=function(){return f(arguments)}(),s="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty;function g(t){return"number"==typeof t}function b(t){var r,n="";for(r=0;r<t;r++)n+="0";return n}function v(t,r,n){var e=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(e=!0,t=t.substr(1)),t=n?t+b(o):b(o)+t,e&&(t="-"+t)),t}var d=String.prototype.toLowerCase,m=String.prototype.toUpperCase;function h(t){var r,n,e;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=t.arg,e=parseInt(n,10),!isFinite(e)){if(!g(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===t.specifier||10!==r)&&(e=4294967295+e+1),e<0?(n=(-e).toString(r),t.precision&&(n=v(n,t.precision,t.padRight)),n="-"+n):(n=e.toString(r),e||t.precision?t.precision&&(n=v(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===r&&(t.alternate&&(n="0x"+n),n=t.specifier===m.call(t.specifier)?m.call(n):d.call(n)),8===r&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function w(t){return"string"==typeof t}var S=Math.abs,j=String.prototype.toLowerCase,O=String.prototype.toUpperCase,_=String.prototype.replace,T=/e\+(\d)$/,x=/e-(\d)$/,E=/^(\d+)$/,I=/^(\d+)e/,k=/\.0$/,P=/\.0*e/,N=/(\..*[^0])0*e/;function V(t){var r,n,e=parseFloat(t.arg);if(!isFinite(e)){if(!g(t.arg))throw new Error("invalid floating-point number. Value: "+n);e=t.arg}switch(t.specifier){case"e":case"E":n=e.toExponential(t.precision);break;case"f":case"F":n=e.toFixed(t.precision);break;case"g":case"G":S(e)<1e-4?((r=t.precision)>0&&(r-=1),n=e.toExponential(r)):n=e.toPrecision(t.precision),t.alternate||(n=_.call(n,N,"$1e"),n=_.call(n,P,"e"),n=_.call(n,k,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=_.call(n,T,"e+0$1"),n=_.call(n,x,"e-0$1"),t.alternate&&(n=_.call(n,E,"$1."),n=_.call(n,I,"$1.e")),e>=0&&t.sign&&(n=t.sign+n),n=t.specifier===O.call(t.specifier)?O.call(n):j.call(n)}function A(t){var r,n="";for(r=0;r<t;r++)n+=" ";return n}function F(t,r,n){var e=r-t.length;return e<0?t:t=n?t+A(e):A(e)+t}var $=String.fromCharCode,C=isNaN,B=Array.isArray;function L(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function G(t){var r,n,e,o,i,a,u,c,l;if(!B(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",u=1,c=0;c<t.length;c++)if(w(e=t[c]))a+=e;else{if(r=void 0!==e.precision,!(e=L(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),n=e.flags,l=0;l<n.length;l++)switch(o=n.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,C(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(r&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,C(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,r=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(e.padZeros=!1),e.arg=h(e);break;case"s":e.maxWidth=r?e.precision:-1;break;case"c":if(!C(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=C(i)?String(e.arg):$(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(e.precision=6),e.arg=V(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=v(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=F(e.arg,e.width,e.padRight)),a+=e.arg||"",u+=1}return a}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function W(t){var r,n,e,o;for(n=[],o=0,e=M.exec(t);e;)(r=t.slice(o,M.lastIndex-e[0].length)).length&&n.push(r),n.push(R(e)),o=M.lastIndex,e=M.exec(t);return(r=t.slice(o)).length&&n.push(r),n}function Y(t){return"string"==typeof t}function X(t){var r,n;if(!Y(t))throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[W(t)],n=1;n<arguments.length;n++)r.push(arguments[n]);return G.apply(null,r)}var Z,U=Object.prototype,H=U.toString,z=U.__defineGetter__,D=U.__defineSetter__,q=U.__lookupGetter__,J=U.__lookupSetter__;Z=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?y:function(t,r,n){var e,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===H.call(t))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===H.call(n))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(q.call(t,r)||J.call(t,r)?(e=t.__proto__,t.__proto__=U,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&z&&z.call(t,r,n.get),a&&D&&D.call(t,r,n.set),t};var K=Z;function Q(t,r,n){K(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function tt(t){return"string"==typeof t}var rt=n();function nt(){return rt&&"symbol"==typeof Symbol.toStringTag}var et=Object.prototype.toString;var ot="function"==typeof Symbol?Symbol:void 0,it="function"==typeof ot?ot.toStringTag:"";var at=nt()?function(t){var r,n,e;if(null==t)return et.call(t);n=t[it],r=a(t,it);try{t[it]=void 0}catch(r){return et.call(t)}return e=et.call(t),r?t[it]=n:delete t[it],e}:function(t){return et.call(t)},ut=String.prototype.valueOf;var ct=nt();function lt(t){return"object"==typeof t&&(t instanceof String||(ct?function(t){try{return ut.call(t),!0}catch(t){return!1}}(t):"[object String]"===at(t)))}function ft(t){return tt(t)||lt(t)}function pt(t,r,n){K(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function st(t){return"number"==typeof t}Q(ft,"isPrimitive",tt),Q(ft,"isObject",lt);var yt=n();function gt(){return yt&&"symbol"==typeof Symbol.toStringTag}var bt=Object.prototype.toString;var vt="function"==typeof Symbol?Symbol:void 0,dt="function"==typeof vt?vt.toStringTag:"";var mt=gt()?function(t){var r,n,e;if(null==t)return bt.call(t);n=t[dt],r=a(t,dt);try{t[dt]=void 0}catch(r){return bt.call(t)}return e=bt.call(t),r?t[dt]=n:delete t[dt],e}:function(t){return bt.call(t)},ht=Number,wt=ht.prototype.toString;var St=gt();function jt(t){return"object"==typeof t&&(t instanceof ht||(St?function(t){try{return wt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===mt(t)))}function Ot(t){return st(t)||jt(t)}function _t(t){return t!=t}function Tt(t){return st(t)&&_t(t)}function xt(t){return jt(t)&&_t(t.valueOf())}function Et(t){return Tt(t)||xt(t)}function It(t,r,n){K(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function kt(t){return"number"==typeof t}pt(Ot,"isPrimitive",st),pt(Ot,"isObject",jt),pt(Et,"isPrimitive",Tt),pt(Et,"isObject",xt);var Pt=n();function Nt(){return Pt&&"symbol"==typeof Symbol.toStringTag}var Vt=Object.prototype.toString;var At="function"==typeof Symbol?Symbol:void 0,Ft="function"==typeof At?At.toStringTag:"";var $t=Nt()?function(t){var r,n,e;if(null==t)return Vt.call(t);n=t[Ft],r=a(t,Ft);try{t[Ft]=void 0}catch(r){return Vt.call(t)}return e=Vt.call(t),r?t[Ft]=n:delete t[Ft],e}:function(t){return Vt.call(t)},Ct=Number,Bt=Ct.prototype.toString;var Lt=Nt();function Gt(t){return"object"==typeof t&&(t instanceof Ct||(Lt?function(t){try{return Bt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===$t(t)))}function Mt(t){return kt(t)||Gt(t)}It(Mt,"isPrimitive",kt),It(Mt,"isObject",Gt);var Rt=Number.POSITIVE_INFINITY,Wt=Ct.NEGATIVE_INFINITY,Yt=Math.floor;function Xt(t){return t<Rt&&t>Wt&&Yt(r=t)===r;var r}function Zt(t){return kt(t)&&Xt(t)}function Ut(t){return Gt(t)&&Xt(t.valueOf())}function Ht(t){return Zt(t)||Ut(t)}It(Ht,"isPrimitive",Zt),It(Ht,"isObject",Ut);var zt=Object.prototype.propertyIsEnumerable;var Dt=!zt.call("beep","0");function qt(t,r){var n;return null!=t&&(!(n=zt.call(t,r))&&Dt&&ft(t)?!Tt(r=+r)&&Zt(r)&&r>=0&&r<t.length:n)}var Jt=n();var Kt=Object.prototype.toString;var Qt="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof Qt?Qt.toStringTag:"";var rr=Jt&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return Kt.call(t);n=t[tr],r=a(t,tr);try{t[tr]=void 0}catch(r){return Kt.call(t)}return e=Kt.call(t),r?t[tr]=n:delete t[tr],e}:function(t){return Kt.call(t)};var nr=Array.isArray?Array.isArray:function(t){return"[object Array]"===rr(t)},er=Math.floor;var or=p?f:function(t){return null!==t&&"object"==typeof t&&!nr(t)&&"number"==typeof t.length&&(r=t.length,er(r)===r)&&t.length>=0&&t.length<=4294967295&&a(t,"callee")&&!qt(t,"callee");var r},ir=Array.prototype.slice;function ar(t){return null!==t&&"object"==typeof t}!function(t,r,n){K(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}(ar,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var n,e;if(!nr(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(ar));var ur=qt((function(){}),"prototype"),cr=!qt({toString:null},"toString"),lr=Math.floor;function fr(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(r=t.length,lr(r)===r)&&t.length>=0&&t.length<=9007199254740991;var r}function pr(t,r,n){K(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function sr(t){return"number"==typeof t}var yr=n();function gr(){return yr&&"symbol"==typeof Symbol.toStringTag}var br=Object.prototype.toString;var vr="function"==typeof Symbol?Symbol:void 0,dr="function"==typeof vr?vr.toStringTag:"";var mr=gr()?function(t){var r,n,e;if(null==t)return br.call(t);n=t[dr],r=a(t,dr);try{t[dr]=void 0}catch(r){return br.call(t)}return e=br.call(t),r?t[dr]=n:delete t[dr],e}:function(t){return br.call(t)},hr=Number,wr=hr.prototype.toString;var Sr=gr();function jr(t){return"object"==typeof t&&(t instanceof hr||(Sr?function(t){try{return wr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===mr(t)))}function Or(t){return sr(t)||jr(t)}pr(Or,"isPrimitive",sr),pr(Or,"isObject",jr);var _r=Number.POSITIVE_INFINITY,Tr=hr.NEGATIVE_INFINITY,xr=Math.floor;function Er(t){return t<_r&&t>Tr&&xr(r=t)===r;var r}function Ir(t){return sr(t)&&Er(t)}function kr(t){return jr(t)&&Er(t.valueOf())}function Pr(t){return Ir(t)||kr(t)}function Nr(t,r,n){var e,o;if(!fr(t)&&!tt(t))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(e=t.length))return-1;if(3===arguments.length){if(!Ir(n))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=e)return-1;o=n}else(o=e+n)<0&&(o=0)}else o=0;if(Et(r)){for(;o<e;o++)if(Et(t[o]))return o}else for(;o<e;o++)if(t[o]===r)return o;return-1}pr(Pr,"isPrimitive",Ir),pr(Pr,"isObject",kr);var Vr=/./;function Ar(t,r,n){K(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Fr(t){return"boolean"==typeof t}var $r=n();function Cr(){return $r&&"symbol"==typeof Symbol.toStringTag}var Br=Object.prototype.toString;var Lr="function"==typeof Symbol?Symbol:void 0,Gr="function"==typeof Lr?Lr.toStringTag:"";var Mr=Cr()?function(t){var r,n,e;if(null==t)return Br.call(t);n=t[Gr],r=a(t,Gr);try{t[Gr]=void 0}catch(r){return Br.call(t)}return e=Br.call(t),r?t[Gr]=n:delete t[Gr],e}:function(t){return Br.call(t)},Rr=Boolean,Wr=Boolean.prototype.toString;var Yr=Cr();function Xr(t){return"object"==typeof t&&(t instanceof Rr||(Yr?function(t){try{return Wr.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Mr(t)))}function Zr(t){return Fr(t)||Xr(t)}function Ur(){return new Function("return this;")()}Ar(Zr,"isPrimitive",Fr),Ar(Zr,"isObject",Xr);var Hr="object"==typeof self?self:null,zr="object"==typeof window?window:null,Dr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},qr="object"==typeof Dr?Dr:null,Jr="object"==typeof globalThis?globalThis:null;var Kr=function(t){if(arguments.length){if(!Fr(t))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Ur()}if(Jr)return Jr;if(Hr)return Hr;if(zr)return zr;if(qr)return qr;throw new Error("unexpected error. Unable to resolve global object.")}(),Qr=Kr.document&&Kr.document.childNodes,tn=Int8Array;var rn=n();var nn=Object.prototype.toString;var en="function"==typeof Symbol?Symbol:void 0,on="function"==typeof en?en.toStringTag:"";var an=rn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return nn.call(t);n=t[on],r=a(t,on);try{t[on]=void 0}catch(r){return nn.call(t)}return e=nn.call(t),r?t[on]=n:delete t[on],e}:function(t){return nn.call(t)};function un(){return/^\s*function\s*([^(]*)/i}var cn=/^\s*function\s*([^(]*)/i;function ln(t){var r,n,e,o;if(("Object"===(n=an(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=cn.exec(e.toString()))return r[1]}return ar(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}!function(t,r,n){K(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}(un,"REGEXP",cn);var fn="function"==typeof Vr||"object"==typeof tn||"function"==typeof Qr?function(t){return ln(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?ln(t).toLowerCase():r};function pn(t){return t.constructor&&t.constructor.prototype===t}var sn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],yn="undefined"==typeof window?void 0:window;var gn=function(){var t;if("undefined"===fn(yn))return!1;for(t in yn)try{-1===Nr(sn,t)&&a(yn,t)&&null!==yn[t]&&"object"===fn(yn[t])&&pn(yn[t])}catch(t){return!0}return!1}(),bn="undefined"!=typeof window;var vn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var dn=r?function(){return 2!==(t(arguments)||"").length}(1,2)?function(r){return or(r)?t(ir.call(r)):t(r)}:t:function(t){var r,n,e,o,i,u,c;if(o=[],or(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!a(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(e="function"==typeof t)&&!ar(t))return o;n=ur&&e}for(i in t)n&&"prototype"===i||!a(t,i)||o.push(String(i));if(cr)for(r=function(t){if(!1===bn&&!gn)return pn(t);try{return pn(t)}catch(t){return!1}}(t),c=0;c<vn.length;c++)u=vn[c],r&&"constructor"===u||!a(t,u)||o.push(String(u));return o};function mn(t){return"function"===fn(t)}var hn=Object,wn=Object.getPrototypeOf,Sn=n();var jn=Object.prototype.toString;var On="function"==typeof Symbol?Symbol:void 0,_n="function"==typeof On?On.toStringTag:"";var Tn,xn=Sn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return jn.call(t);n=t[_n],r=a(t,_n);try{t[_n]=void 0}catch(r){return jn.call(t)}return e=jn.call(t),r?t[_n]=n:delete t[_n],e}:function(t){return jn.call(t)};Tn=mn(Object.getPrototypeOf)?wn:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===xn(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var En=Tn;var In=n();var kn=Object.prototype.toString;var Pn="function"==typeof Symbol?Symbol:void 0,Nn="function"==typeof Pn?Pn.toStringTag:"";var Vn=In&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return kn.call(t);n=t[Nn],r=a(t,Nn);try{t[Nn]=void 0}catch(r){return kn.call(t)}return e=kn.call(t),r?t[Nn]=n:delete t[Nn],e}:function(t){return kn.call(t)},An=Object.prototype;function Fn(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!nr(t)}(t)&&(r=function(t){return null==t?null:(t=hn(t),En(t))}(t),!r||!a(t,"constructor")&&a(r,"constructor")&&mn(r.constructor)&&"[object Function]"===Vn(r.constructor)&&a(r,"isPrototypeOf")&&mn(r.isPrototypeOf)&&(r===An||function(t){var r;for(r in t)if(!a(t,r))return!1;return!0}(t)))}var $n={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Cn(){var t;return 0===arguments.length?$n.all.slice():(t=$n[arguments[0]])?t.slice():[]}function Bn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ln(t,r,n){K(t,r,{configurable:!1,enumerable:!0,writable:!1,value:n})}!function(t,r,n){K(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}(Cn,"enum",Bn),function(t,r){var n,e,o;for(n=dn(r),o=0;o<n.length;o++)Ln(t,e=n[o],r[e])}(Cn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Gn=function(t,r){var n,e,o,i,u,c,l,f=!0;if(!ar(t))throw new TypeError(X("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!Fn(r))throw new TypeError(X("invalid argument. Options argument must be an object. Value: `%s`.",r));if(a(r,"duplicates")&&!Fr(f=r.duplicates))throw new TypeError(X("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(e=(n=dn(t)).length,u={},f)for(l=0;l<e;l++)a(u,i=t[o=n[l]])?(c=u[i],nr(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(l=0;l<e;l++)u[t[o=n[l]]]=o;return u}({bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},{duplicates:!1});var Mn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Rn(t){var r=typeof t;return"number"===r?function(t){var r=Gn[t];return"string"==typeof r?r:null}(t)?t:null:"string"===r?function(t){var r=Mn[t];return"number"==typeof r?r:null}(t):null}export{Rn as default};
//# sourceMappingURL=mod.js.map
