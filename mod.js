// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return null!==t&&"object"==typeof t&&"function"==typeof t.on&&"function"==typeof t.once&&"function"==typeof t.emit&&"function"==typeof t.addListener&&"function"==typeof t.removeListener&&"function"==typeof t.removeAllListeners&&"function"==typeof t.pipe}function e(e){return function(e){return t(e)&&"function"==typeof e._write&&"object"==typeof e._writableState}(e)&&function(e){return t(e)&&"function"==typeof e._read&&"object"==typeof e._readableState}(e)}export{e as default};
//# sourceMappingURL=mod.js.map
