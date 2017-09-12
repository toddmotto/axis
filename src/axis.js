(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.axis = factory();
  }
}(this, function () {

  'use strict';

  var axis = {};

  var types = 'Array Object String Date RegExp Function Boolean Number Null Undefined'.split(' ');

  axis.type = function(item) {
    return Object.prototype.toString.call(item).slice(8, -1);
  }

  for (var i = types.length; i--;) {
    axis['is' + types[i]] = (function (self) {
      return function (elem) {
        return axis.type(elem) === self;
      };
    })(types[i]);
  }

  return axis;

}));
