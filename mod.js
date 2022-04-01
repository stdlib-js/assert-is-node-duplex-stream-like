// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=function(t){return null!==t&&"object"==typeof t&&"function"==typeof t.on&&"function"==typeof t.once&&"function"==typeof t.emit&&"function"==typeof t.addListener&&"function"==typeof t.removeListener&&"function"==typeof t.removeAllListeners&&"function"==typeof t.pipe},e=t;var n=t;var o=function(t){return e(t)&&"function"==typeof t._write&&"object"==typeof t._writableState},f=function(t){return n(t)&&"function"==typeof t._read&&"object"==typeof t._readableState};var r=function(t){return o(t)&&f(t)};export{r as default};
//# sourceMappingURL=mod.js.map
