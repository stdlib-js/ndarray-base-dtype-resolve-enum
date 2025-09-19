"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=t(function(c,i){
var s=require('@stdlib/assert-is-struct-constructor-like/dist'),o=require('@stdlib/assert-is-integer/dist').isPrimitive,v=require('@stdlib/ndarray-base-dtype-enum2str/dist'),u=require('@stdlib/ndarray-base-dtype-str2enum/dist');function a(r){var e=typeof r;return e==="number"?v(r)?r:null:e==="string"?u(r):e==="object"&&o(r.enum)?r.enum:s(r)?u("userdefined_type"):null}i.exports=a
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
