(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.axis = factory();
  }
})(this, function () {

  'use strict';

  var exports = {};

  var types = 'Array Object String Date RegExp Function Boolean Number Null Undefined'.split(' ');

  var type = function () {
    return Object.prototype.toString.call(this).slice(8, -1);
  };

  for (var i = types.length; i--;) {
    exports['is' + types[i]] = (function (self) {
      return function (elem) {
        return type.call(elem) === self;
      };
    })(types[i]);
  }

  return exports;

});
