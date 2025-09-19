// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-struct-constructor-like@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtype-enum2str@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtype-str2enum@v0.2.2-esm/index.mjs";function n(n){var d=typeof n;return"number"===d?t(n)?n:null:"string"===d?r(n):"object"===d&&n&&s(n.enum)?n.enum:e(n)?r("userdefined_type"):null}export{n as default};
//# sourceMappingURL=index.mjs.map
