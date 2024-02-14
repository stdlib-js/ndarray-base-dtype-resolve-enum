// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;function n(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var r=n(),o=Object.prototype.toString,i=Object.prototype.hasOwnProperty;function u(t,e){return null!=t&&i.call(t,e)}var a,c="function"==typeof Symbol?Symbol:void 0,l="function"==typeof c?c.toStringTag:"",f=r&&"symbol"==typeof Symbol.toStringTag?function(t){var e,n,r;if(null==t)return o.call(t);n=t[l],e=u(t,l);try{t[l]=void 0}catch(e){return o.call(t)}return r=o.call(t),e?t[l]=n:delete t[l],r}:function(t){return o.call(t)};function p(t){return"[object Arguments]"===f(t)}a=function(){return p(arguments)}();var s=a,y="function"==typeof Object.defineProperty?Object.defineProperty:null,g=Object.defineProperty;function b(t){return"number"==typeof t}function d(t){var e,n="";for(e=0;e<t;e++)n+="0";return n}function m(t,e,n){var r=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=n?t+d(o):d(o)+t,r&&(t="-"+t)),t}var v=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function w(t){var e,n,r;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,r=parseInt(n,10),!isFinite(r)){if(!b(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&("u"===t.specifier||10!==e)&&(r=4294967295+r+1),r<0?(n=(-r).toString(e),t.precision&&(n=m(n,t.precision,t.padRight)),n="-"+n):(n=r.toString(e),r||t.precision?t.precision&&(n=m(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===h.call(t.specifier)?h.call(n):v.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function S(t){return"string"==typeof t}var j=Math.abs,O=String.prototype.toLowerCase,T=String.prototype.toUpperCase,_=String.prototype.replace,x=/e\+(\d)$/,E=/e-(\d)$/,I=/^(\d+)$/,k=/^(\d+)e/,P=/\.0$/,N=/\.0*e/,V=/(\..*[^0])0*e/;function A(t){var e,n,r=parseFloat(t.arg);if(!isFinite(r)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+n);r=t.arg}switch(t.specifier){case"e":case"E":n=r.toExponential(t.precision);break;case"f":case"F":n=r.toFixed(t.precision);break;case"g":case"G":j(r)<1e-4?((e=t.precision)>0&&(e-=1),n=r.toExponential(e)):n=r.toPrecision(t.precision),t.alternate||(n=_.call(n,V,"$1e"),n=_.call(n,N,"e"),n=_.call(n,P,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=_.call(n,x,"e+0$1"),n=_.call(n,E,"e-0$1"),t.alternate&&(n=_.call(n,I,"$1."),n=_.call(n,k,"$1.e")),r>=0&&t.sign&&(n=t.sign+n),n=t.specifier===T.call(t.specifier)?T.call(n):O.call(n)}function F(t){var e,n="";for(e=0;e<t;e++)n+=" ";return n}function $(t,e,n){var r=e-t.length;return r<0?t:t=n?t+F(r):F(r)+t}var C=String.fromCharCode,B=isNaN,L=Array.isArray;function G(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function M(t){var e,n,r,o,i,u,a,c,l;if(!L(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,c=0;c<t.length;c++)if(S(r=t[c]))u+=r;else{if(e=void 0!==r.precision,!(r=G(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+r+"`.");for(r.mapping&&(a=r.mapping),n=r.flags,l=0;l<n.length;l++)switch(o=n.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===r.width){if(r.width=parseInt(arguments[a],10),a+=1,B(r.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(e&&"*"===r.precision){if(r.precision=parseInt(arguments[a],10),a+=1,B(r.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,e=!1)}switch(r.arg=arguments[a],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(r.padZeros=!1),r.arg=w(r);break;case"s":r.maxWidth=e?r.precision:-1;break;case"c":if(!B(r.arg)){if((i=parseInt(r.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=B(i)?String(r.arg):C(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(r.precision=6),r.arg=A(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=m(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=$(r.arg,r.width,r.padRight)),u+=r.arg||"",a+=1}return u}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function Y(t){var e,n,r,o;for(n=[],o=0,r=R.exec(t);r;)(e=t.slice(o,R.lastIndex-r[0].length)).length&&n.push(e),n.push(W(r)),o=R.lastIndex,r=R.exec(t);return(e=t.slice(o)).length&&n.push(e),n}function X(t){return"string"==typeof t}function Z(t){var e,n;if(!X(t))throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[Y(t)],n=1;n<arguments.length;n++)e.push(arguments[n]);return M.apply(null,e)}var U,H=Object.prototype,z=H.toString,D=H.__defineGetter__,q=H.__defineSetter__,J=H.__lookupGetter__,K=H.__lookupSetter__;U=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?g:function(t,e,n){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===z.call(n))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(J.call(t,e)||K.call(t,e)?(r=t.__proto__,t.__proto__=H,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&D&&D.call(t,e,n.get),u&&q&&q.call(t,e,n.set),t};var Q=U;function tt(t,e,n){Q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function et(t){return"string"==typeof t}var nt=n();function rt(){return nt&&"symbol"==typeof Symbol.toStringTag}var ot=Object.prototype.toString,it="function"==typeof Symbol?Symbol:void 0,ut="function"==typeof it?it.toStringTag:"",at=rt()?function(t){var e,n,r;if(null==t)return ot.call(t);n=t[ut],e=u(t,ut);try{t[ut]=void 0}catch(e){return ot.call(t)}return r=ot.call(t),e?t[ut]=n:delete t[ut],r}:function(t){return ot.call(t)},ct=String.prototype.valueOf,lt=rt();function ft(t){return"object"==typeof t&&(t instanceof String||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object String]"===at(t)))}function pt(t){return et(t)||ft(t)}function st(t,e,n){Q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function yt(t){return"number"==typeof t}tt(pt,"isPrimitive",et),tt(pt,"isObject",ft);var gt=n();function bt(){return gt&&"symbol"==typeof Symbol.toStringTag}var dt=Object.prototype.toString,mt="function"==typeof Symbol?Symbol:void 0,vt="function"==typeof mt?mt.toStringTag:"",ht=bt()?function(t){var e,n,r;if(null==t)return dt.call(t);n=t[vt],e=u(t,vt);try{t[vt]=void 0}catch(e){return dt.call(t)}return r=dt.call(t),e?t[vt]=n:delete t[vt],r}:function(t){return dt.call(t)},wt=Number,St=wt.prototype.toString,jt=bt();function Ot(t){return"object"==typeof t&&(t instanceof wt||(jt?function(t){try{return St.call(t),!0}catch(t){return!1}}(t):"[object Number]"===ht(t)))}function Tt(t){return yt(t)||Ot(t)}function _t(t){return t!=t}function xt(t){return yt(t)&&_t(t)}function Et(t){return Ot(t)&&_t(t.valueOf())}function It(t){return xt(t)||Et(t)}function kt(t,e,n){Q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Pt(t){return"number"==typeof t}st(Tt,"isPrimitive",yt),st(Tt,"isObject",Ot),st(It,"isPrimitive",xt),st(It,"isObject",Et);var Nt=n();function Vt(){return Nt&&"symbol"==typeof Symbol.toStringTag}var At=Object.prototype.toString,Ft="function"==typeof Symbol?Symbol:void 0,$t="function"==typeof Ft?Ft.toStringTag:"",Ct=Vt()?function(t){var e,n,r;if(null==t)return At.call(t);n=t[$t],e=u(t,$t);try{t[$t]=void 0}catch(e){return At.call(t)}return r=At.call(t),e?t[$t]=n:delete t[$t],r}:function(t){return At.call(t)},Bt=Number,Lt=Bt.prototype.toString,Gt=Vt();function Mt(t){return"object"==typeof t&&(t instanceof Bt||(Gt?function(t){try{return Lt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Ct(t)))}function Rt(t){return Pt(t)||Mt(t)}kt(Rt,"isPrimitive",Pt),kt(Rt,"isObject",Mt);var Wt=Number.POSITIVE_INFINITY,Yt=Bt.NEGATIVE_INFINITY,Xt=Math.floor;function Zt(t){return t<Wt&&t>Yt&&Xt(e=t)===e;var e}function Ut(t){return Pt(t)&&Zt(t)}function Ht(t){return Mt(t)&&Zt(t.valueOf())}function zt(t){return Ut(t)||Ht(t)}kt(zt,"isPrimitive",Ut),kt(zt,"isObject",Ht);var Dt=Object.prototype.propertyIsEnumerable,qt=!Dt.call("beep","0");function Jt(t,e){var n;return null!=t&&(!(n=Dt.call(t,e))&&qt&&pt(t)?!xt(e=+e)&&Ut(e)&&e>=0&&e<t.length:n)}var Kt=n(),Qt=Object.prototype.toString,te="function"==typeof Symbol?Symbol:void 0,ee="function"==typeof te?te.toStringTag:"",ne=Kt&&"symbol"==typeof Symbol.toStringTag?function(t){var e,n,r;if(null==t)return Qt.call(t);n=t[ee],e=u(t,ee);try{t[ee]=void 0}catch(e){return Qt.call(t)}return r=Qt.call(t),e?t[ee]=n:delete t[ee],r}:function(t){return Qt.call(t)},re=Array.isArray?Array.isArray:function(t){return"[object Array]"===ne(t)},oe=Math.floor,ie=s?p:function(t){return null!==t&&"object"==typeof t&&!re(t)&&"number"==typeof t.length&&(e=t.length,oe(e)===e)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Jt(t,"callee");var e},ue=Array.prototype.slice;function ae(t){return null!==t&&"object"==typeof t}!function(t,e,n){Q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}(ae,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(Z("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var n,r;if(!re(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(ae));var ce=Jt((function(){}),"prototype"),le=!Jt({toString:null},"toString"),fe=Math.floor;function pe(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(e=t.length,fe(e)===e)&&t.length>=0&&t.length<=9007199254740991;var e}function se(t,e,n){Q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function ye(t){return"number"==typeof t}var ge=n();function be(){return ge&&"symbol"==typeof Symbol.toStringTag}var de=Object.prototype.toString,me="function"==typeof Symbol?Symbol:void 0,ve="function"==typeof me?me.toStringTag:"",he=be()?function(t){var e,n,r;if(null==t)return de.call(t);n=t[ve],e=u(t,ve);try{t[ve]=void 0}catch(e){return de.call(t)}return r=de.call(t),e?t[ve]=n:delete t[ve],r}:function(t){return de.call(t)},we=Number,Se=we.prototype.toString,je=be();function Oe(t){return"object"==typeof t&&(t instanceof we||(je?function(t){try{return Se.call(t),!0}catch(t){return!1}}(t):"[object Number]"===he(t)))}function Te(t){return ye(t)||Oe(t)}se(Te,"isPrimitive",ye),se(Te,"isObject",Oe);var _e=Number.POSITIVE_INFINITY,xe=we.NEGATIVE_INFINITY,Ee=Math.floor;function Ie(t){return t<_e&&t>xe&&Ee(e=t)===e;var e}function ke(t){return ye(t)&&Ie(t)}function Pe(t){return Oe(t)&&Ie(t.valueOf())}function Ne(t){return ke(t)||Pe(t)}function Ve(t,e,n){var r,o;if(!pe(t)&&!et(t))throw new TypeError(Z("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!ke(n))throw new TypeError(Z("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;o=n}else(o=r+n)<0&&(o=0)}else o=0;if(It(e)){for(;o<r;o++)if(It(t[o]))return o}else for(;o<r;o++)if(t[o]===e)return o;return-1}se(Ne,"isPrimitive",ke),se(Ne,"isObject",Pe);var Ae=/./;function Fe(t,e,n){Q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function $e(t){return"boolean"==typeof t}var Ce=n();function Be(){return Ce&&"symbol"==typeof Symbol.toStringTag}var Le=Object.prototype.toString,Ge="function"==typeof Symbol?Symbol:void 0,Me="function"==typeof Ge?Ge.toStringTag:"",Re=Be()?function(t){var e,n,r;if(null==t)return Le.call(t);n=t[Me],e=u(t,Me);try{t[Me]=void 0}catch(e){return Le.call(t)}return r=Le.call(t),e?t[Me]=n:delete t[Me],r}:function(t){return Le.call(t)},We=Boolean,Ye=Boolean.prototype.toString,Xe=Be();function Ze(t){return"object"==typeof t&&(t instanceof We||(Xe?function(t){try{return Ye.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Re(t)))}function Ue(t){return $e(t)||Ze(t)}function He(){return new Function("return this;")()}Fe(Ue,"isPrimitive",$e),Fe(Ue,"isObject",Ze);var ze="object"==typeof self?self:null,De="object"==typeof window?window:null,qe="object"==typeof globalThis?globalThis:null,Je=function(t){if(arguments.length){if(!$e(t))throw new TypeError(Z("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return He()}if(qe)return qe;if(ze)return ze;if(De)return De;throw new Error("unexpected error. Unable to resolve global object.")}(),Ke=Je.document&&Je.document.childNodes,Qe=Int8Array,tn=n(),en=Object.prototype.toString,nn="function"==typeof Symbol?Symbol:void 0,rn="function"==typeof nn?nn.toStringTag:"",on=tn&&"symbol"==typeof Symbol.toStringTag?function(t){var e,n,r;if(null==t)return en.call(t);n=t[rn],e=u(t,rn);try{t[rn]=void 0}catch(e){return en.call(t)}return r=en.call(t),e?t[rn]=n:delete t[rn],r}:function(t){return en.call(t)};function un(){return/^\s*function\s*([^(]*)/i}var an=/^\s*function\s*([^(]*)/i;function cn(t){var e,n,r,o;if(("Object"===(n=on(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=an.exec(r.toString()))return e[1]}return ae(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}!function(t,e,n){Q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}(un,"REGEXP",an);var ln="function"==typeof Ae||"object"==typeof Qe||"function"==typeof Ke?function(t){return cn(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?cn(t).toLowerCase():e};function fn(t){return t.constructor&&t.constructor.prototype===t}var pn,sn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],yn="undefined"==typeof window?void 0:window,gn=function(){var t;if("undefined"===ln(yn))return!1;for(t in yn)try{-1===Ve(sn,t)&&u(yn,t)&&null!==yn[t]&&"object"===ln(yn[t])&&fn(yn[t])}catch(t){return!0}return!1}(),bn="undefined"!=typeof window,dn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];pn=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return ie(e)?t(ue.call(e)):t(e)}:t:function(t){var e,n,r,o,i,a,c;if(o=[],ie(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(0==(r="function"==typeof t)&&!ae(t))return o;n=ce&&r}for(i in t)n&&"prototype"===i||!u(t,i)||o.push(String(i));if(le)for(e=function(t){if(!1===bn&&!gn)return fn(t);try{return fn(t)}catch(t){return!1}}(t),c=0;c<dn.length;c++)a=dn[c],e&&"constructor"===a||!u(t,a)||o.push(String(a));return o};var mn=pn;function vn(t){return"function"===ln(t)}var hn,wn=Object,Sn=Object.getPrototypeOf,jn=n(),On=Object.prototype.toString,Tn="function"==typeof Symbol?Symbol:void 0,_n="function"==typeof Tn?Tn.toStringTag:"",xn=jn&&"symbol"==typeof Symbol.toStringTag?function(t){var e,n,r;if(null==t)return On.call(t);n=t[_n],e=u(t,_n);try{t[_n]=void 0}catch(e){return On.call(t)}return r=On.call(t),e?t[_n]=n:delete t[_n],r}:function(t){return On.call(t)};hn=vn(Object.getPrototypeOf)?Sn:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===xn(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var En=hn,In=n(),kn=Object.prototype.toString,Pn="function"==typeof Symbol?Symbol:void 0,Nn="function"==typeof Pn?Pn.toStringTag:"",Vn=In&&"symbol"==typeof Symbol.toStringTag?function(t){var e,n,r;if(null==t)return kn.call(t);n=t[Nn],e=u(t,Nn);try{t[Nn]=void 0}catch(e){return kn.call(t)}return r=kn.call(t),e?t[Nn]=n:delete t[Nn],r}:function(t){return kn.call(t)},An=Object.prototype;function Fn(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!re(t)}(t)&&(e=function(t){return null==t?null:(t=wn(t),En(t))}(t),!e||!u(t,"constructor")&&u(e,"constructor")&&vn(e.constructor)&&"[object Function]"===Vn(e.constructor)&&u(e,"isPrototypeOf")&&vn(e.isPrototypeOf)&&(e===An||function(t){var e;for(e in t)if(!u(t,e))return!1;return!0}(t)))}var $n={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Cn(){var t;return 0===arguments.length?$n.all.slice():(t=$n[arguments[0]])?t.slice():[]}function Bn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ln(t,e,n){Q(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}!function(t,e,n){Q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}(Cn,"enum",Bn),function(t,e){var n,r,o;for(n=mn(e),o=0;o<n.length;o++)Ln(t,r=n[o],e[r])}(Cn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Gn=function(t,e){var n,r,o,i,a,c,l,f=!0;if(!ae(t))throw new TypeError(Z("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!Fn(e))throw new TypeError(Z("invalid argument. Options argument must be an object. Value: `%s`.",e));if(u(e,"duplicates")&&!$e(f=e.duplicates))throw new TypeError(Z("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(r=(n=mn(t)).length,a={},f)for(l=0;l<r;l++)u(a,i=t[o=n[l]])?(c=a[i],re(c)?a[i].push(o):a[i]=[c,o]):a[i]=o;else for(l=0;l<r;l++)a[t[o=n[l]]]=o;return a}({bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},{duplicates:!1}),Mn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};return function(t){var e=typeof t;return"number"===e?function(t){var e=Gn[t];return"string"==typeof e?e:null}(t)?t:null:"string"===e?function(t){var e=Mn[t];return"number"==typeof e?e:null}(t):null}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).resolve=e();
//# sourceMappingURL=browser.js.map
