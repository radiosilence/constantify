(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.mkconstants = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  var mkconstants = function mkconstants(app, obj, prevK) {
    for (var k in obj) {
      var nextK = (prevK ? prevK : app) + '.' + k;
      if (obj[k] === null) obj[k] = nextK;else if (typeof obj[k] === 'object') mkconstants(app, obj[k], nextK);
    }
    return obj;
  };

  module.exports = mkconstants;
});
