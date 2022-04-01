// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).resolve=r()}(this,(function(){"use strict";function t(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var r=function(t){return Object.keys(Object(t))},e=r;var n=function(){return function(){return 2!==(e(arguments)||"").length}(1,2)},o=void 0!==Object.keys;var i=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return i&&"symbol"==typeof Symbol.toStringTag},c=Object.prototype.toString,f=c;var a=function(t){return f.call(t)},l=Object.prototype.hasOwnProperty;var p=function(t,r){return null!=t&&l.call(t,r)},v="function"==typeof Symbol?Symbol.toStringTag:"",s=p,y=v,b=c;var g=a,m=function(t){var r,e,n;if(null==t)return b.call(t);e=t[y],r=s(t,y);try{t[y]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[y]=e:delete t[y],n},d=u()?m:g,j=d;var h,w=function(t){return"[object Arguments]"===j(t)},O=w;h=function(){return O(arguments)}();var _=h,P="function"==typeof Object.defineProperty?Object.defineProperty:null;var S=function(){try{return P({},"x",{}),!0}catch(t){return!1}},E=Object.defineProperty,x=Object.prototype,T=x.toString,I=x.__defineGetter__,A=x.__defineSetter__,k=x.__lookupGetter__,V=x.__lookupSetter__;var N=function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===T.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(k.call(t,r)||V.call(t,r)?(n=t.__proto__,t.__proto__=x,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(t,r,e.get),u&&A&&A.call(t,r,e.set),t},B=E,F=N,G=S()?B:F,L=G;var M=function(t,r,e){L(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},X=M;var Y=function(t){return"string"==typeof t},C=String.prototype.valueOf;var D=d,H=function(t){try{return C.call(t),!0}catch(t){return!1}},R=u();var W=function(t){return"object"==typeof t&&(t instanceof String||(R?H(t):"[object String]"===D(t)))},z=Y,U=W;var q=X,J=function(t){return z(t)||U(t)},K=W;q(J,"isPrimitive",Y),q(J,"isObject",K);var Q=J;var Z=function(t){return"number"==typeof t},$=Number,tt=$.prototype.toString;var rt=d,et=$,nt=function(t){try{return tt.call(t),!0}catch(t){return!1}},ot=u();var it=function(t){return"object"==typeof t&&(t instanceof et||(ot?nt(t):"[object Number]"===rt(t)))},ut=Z,ct=it;var ft=X,at=function(t){return ut(t)||ct(t)},lt=it;ft(at,"isPrimitive",Z),ft(at,"isObject",lt);var pt=at;var vt=function(t){return t!=t},st=pt.isPrimitive,yt=vt;var bt=function(t){return st(t)&&yt(t)},gt=pt.isObject,mt=vt;var dt=function(t){return gt(t)&&mt(t.valueOf())},jt=bt,ht=dt;var wt=X,Ot=function(t){return jt(t)||ht(t)},_t=dt;wt(Ot,"isPrimitive",bt),wt(Ot,"isObject",_t);var Pt=Ot,St=Number.POSITIVE_INFINITY,Et=$.NEGATIVE_INFINITY,xt=Math.floor;var Tt=function(t){return xt(t)===t},It=St,At=Et,kt=Tt;var Vt=function(t){return t<It&&t>At&&kt(t)},Nt=pt.isPrimitive,Bt=Vt;var Ft=function(t){return Nt(t)&&Bt(t)},Gt=pt.isObject,Lt=Vt;var Mt=function(t){return Gt(t)&&Lt(t.valueOf())},Xt=Ft,Yt=Mt;var Ct=X,Dt=function(t){return Xt(t)||Yt(t)},Ht=Mt;Ct(Dt,"isPrimitive",Ft),Ct(Dt,"isObject",Ht);var Rt,Wt=Dt,zt=Object.prototype.propertyIsEnumerable;Rt=!zt.call("beep","0");var Ut=Q,qt=Pt.isPrimitive,Jt=Wt.isPrimitive,Kt=zt,Qt=Rt;var Zt=function(t,r){var e;return null!=t&&(!(e=Kt.call(t,r))&&Qt&&Ut(t)?!qt(r=+r)&&Jt(r)&&r>=0&&r<t.length:e)},$t=Zt,tr=d;var rr=Array.isArray?Array.isArray:function(t){return"[object Array]"===tr(t)},er=p,nr=$t,or=rr,ir=Tt;var ur=_?w:function(t){return null!==t&&"object"==typeof t&&!or(t)&&"number"==typeof t.length&&ir(t.length)&&t.length>=0&&t.length<=4294967295&&er(t,"callee")&&!nr(t,"callee")},cr=ur,fr=r,ar=Array.prototype.slice;var lr=function(t){return cr(t)?fr(ar.call(t)):fr(t)},pr=rr;var vr=function(t){return null!==t&&"object"==typeof t};X(vr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!pr(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(vr));var sr=vr;var yr=$t((function(){}),"prototype"),br=!$t({toString:null},"toString"),gr=Tt;var mr=Pt,dr=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&gr(t.length)&&t.length>=0&&t.length<=9007199254740991},jr=Q.isPrimitive,hr=Wt.isPrimitive;var wr=function(t,r,e){var n,o;if(!dr(t)&&!jr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!hr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(mr(r)){for(;o<n;o++)if(mr(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1},Or=wr,_r=/./;var Pr=function(t){return"boolean"==typeof t},Sr=Boolean.prototype.toString;var Er=d,xr=function(t){try{return Sr.call(t),!0}catch(t){return!1}},Tr=u();var Ir=function(t){return"object"==typeof t&&(t instanceof Boolean||(Tr?xr(t):"[object Boolean]"===Er(t)))},Ar=Pr,kr=Ir;var Vr=X,Nr=function(t){return Ar(t)||kr(t)},Br=Ir;Vr(Nr,"isPrimitive",Pr),Vr(Nr,"isObject",Br);var Fr=Nr;var Gr=function(){return new Function("return this;")()},Lr="object"==typeof self?self:null,Mr="object"==typeof window?window:null,Xr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Yr="object"==typeof Xr?Xr:null;module.exports=Yr;var Cr=Fr.isPrimitive,Dr=Gr,Hr=Lr,Rr=Mr,Wr=t(Object.freeze({__proto__:null}));var zr=function(t){if(arguments.length){if(!Cr(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Dr()}if(Hr)return Hr;if(Rr)return Rr;if(Wr)return Wr;throw new Error("unexpected error. Unable to resolve global object.")},Ur=zr(),qr=Ur.document&&Ur.document.childNodes,Jr=Int8Array,Kr=_r,Qr=qr,Zr=Jr;var $r=function(){return"function"==typeof Kr||"object"==typeof Zr||"function"==typeof Qr};var te=function(){return/^\s*function\s*([^(]*)/i},re=te;X(re,"REGEXP",te());var ee=sr;var ne=d,oe=re.REGEXP,ie=function(t){return ee(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var ue=function(t){var r,e,n;if(("Object"===(e=ne(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=oe.exec(n.toString()))return r[1]}return ie(t)?"Buffer":e},ce=ue;var fe=ue;var ae=function(t){var r;return null===t?"null":"object"===(r=typeof t)?ce(t).toLowerCase():r},le=function(t){return fe(t).toLowerCase()},pe=$r()?le:ae;var ve,se=function(t){return t.constructor&&t.constructor.prototype===t},ye="undefined"==typeof window?void 0:window,be=p,ge=Or,me=pe,de=se,je=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],he=ye;ve=function(){var t;if("undefined"===me(he))return!1;for(t in he)try{-1===ge(je,t)&&be(he,t)&&null!==he[t]&&"object"===me(he[t])&&de(he[t])}catch(t){return!0}return!1}();var we="undefined"!=typeof window,Oe=ve,_e=se,Pe=we;var Se=sr,Ee=p,xe=ur,Te=yr,Ie=br,Ae=function(t){if(!1===Pe&&!Oe)return _e(t);try{return _e(t)}catch(t){return!1}},ke=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ve=r,Ne=lr,Be=function(t){var r,e,n,o,i,u,c;if(o=[],xe(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!Ee(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1===(n="function"==typeof t)&&!Se(t))return o;e=Te&&n}for(i in t)e&&"prototype"===i||!Ee(t,i)||o.push(String(i));if(Ie)for(r=Ae(t),c=0;c<ke.length;c++)u=ke[c],r&&"constructor"===u||!Ee(t,u)||o.push(String(u));return o},Fe=o?n()?Ne:Ve:Be,Ge=rr;var Le=function(t){return"object"==typeof t&&null!==t&&!Ge(t)},Me=pe;var Xe=function(t){return"function"===Me(t)},Ye=Object.getPrototypeOf;var Ce=function(t){return t.__proto__},De=d,He=Ce;var Re=function(t){var r=He(t);return r||null===r?r:"[object Function]"===De(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},We=Ye,ze=Re,Ue=Xe(Object.getPrototypeOf)?We:ze;var qe=Le,Je=Xe,Ke=function(t){return null==t?null:(t=Object(t),Ue(t))},Qe=p,Ze=d,$e=Object.prototype;var tn=function(t){var r;return!!qe(t)&&(!(r=Ke(t))||!Qe(t,"constructor")&&Qe(r,"constructor")&&Je(r.constructor)&&"[object Function]"===Ze(r.constructor)&&Qe(r,"isPrototypeOf")&&Je(r.isPrototypeOf)&&(r===$e||function(t){var r;for(r in t)if(!Qe(t,r))return!1;return!0}(t)))},rn=Fe,en=rr,nn=tn,on=sr,un=Fr.isPrimitive,cn=p;var fn=function(t,r){var e,n,o,i,u,c,f,a=!0;if(!on(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!nn(r))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+r+"`.");if(cn(r,"duplicates")&&(a=r.duplicates,!un(a)))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(n=(e=rn(t)).length,u={},a)for(f=0;f<n;f++)i=t[o=e[f]],cn(u,i)?(c=u[i],en(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(f=0;f<n;f++)u[t[o=e[f]]]=o;return u},an=fn,ln=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var pn=function(){return ln.slice()},vn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var sn=G;var yn=function(t,r,e){sn(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})},bn=yn,gn=bn,mn=Fe;var dn=function(t,r){var e,n,o;for(e=mn(r),o=0;o<e.length;o++)n=e[o],gn(t,n,r[n]);return t},jn=function(){return vn.slice()},hn=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},wn=dn;X(jn,"enum",hn),wn(jn,hn());var On=jn,_n=(0,On.enum)();var Pn=bn,Sn=Fe;var En=function(t,r){var e,n,o;for(e=Sn(r),o=0;o<e.length;o++)n=e[o],Pn(t,n,r[n]);return t},xn=pn,Tn=function(){return{bool:_n.bool,int8:_n.int8,uint8:_n.uint8,uint8c:_n.uint8c,int16:_n.int16,uint16:_n.uint16,int32:_n.int32,uint32:_n.uint32,int64:_n.int64,uint64:_n.uint64,float32:_n.float32,float64:_n.float64,complex64:_n.complex64,complex128:_n.complex128,binary:_n.binary,generic:_n.generic,notype:_n.notype,userdefined_type:_n.userdefined_type}},In=En;X(xn,"enum",Tn),In(xn,Tn());var An=an((0,xn.enum)(),{duplicates:!1});var kn=function(t){var r=An[t];return"string"==typeof r?r:null},Vn=(0,On.enum)();var Nn=kn,Bn=function(t){var r=Vn[t];return"number"==typeof r?r:null};return function(t){var r=typeof t;return"number"===r?Nn(t)?t:null:"string"===r?Bn(t):null}}));
//# sourceMappingURL=bundle.js.map
