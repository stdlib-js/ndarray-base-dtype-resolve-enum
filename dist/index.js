"use strict";var s=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var n=s(function(l,i){
var o=require('@stdlib/assert-is-struct-constructor-like/dist'),v=require('@stdlib/assert-is-integer/dist').isPrimitive,a=require('@stdlib/ndarray-base-dtype-enum2str/dist'),u=require('@stdlib/ndarray-base-dtype-str2enum/dist');function f(r){var e=typeof r;return e==="number"?a(r)?r:null:e==="string"?u(r):e==="object"&&r&&v(r.enum)?r.enum:o(r)?u("userdefined_type"):null}i.exports=f
});var m=n();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
