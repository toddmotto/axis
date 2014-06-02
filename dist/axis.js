/*! axis v1.0.0 | (c) 2014 @toddmotto | github.com/toddmotto/axis */
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

  var getType = function (item) {
    return Object.prototype.toString.call(item);
  };

  return {
    isArray: function (elem) {
      return getType(elem) === '[object Array]';
    },
    isObject: function (elem) {
      return getType(elem) === '[object Object]';
    },
    isString: function (elem) {
      return getType(elem) === '[object String]';
    },
    isRegExp: function (elem) {
      return getType(elem) === '[object RegExp]';
    },
    isFunction: function (elem) {
      return getType(elem) === '[object Function]';
    },
    isBoolean: function (elem) {
      return getType(elem) === '[object Boolean]';
    },
    isNumber: function (elem) {
      return getType(elem) === '[object Number]';
    },
    isNull: function (elem) {
      return getType(elem) === '[object Null]';
    },
    isUndefined: function (elem) {
      return getType(elem) === '[object Undefined]';
    }
  };

});
