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

  var methods = {},
  types = ['Array', 'Object', 'String', 'Date', 'RegExp', 'Function', 'Boolean', 'Number', 'Null', 'Undefined'],
  getType = function (item) {
    return Object.prototype.toString.call(item);
  },
  checkType = function(item){
    return getType(item) === '[object '+this+']';
  },
  bind = function (fn, context) {
    return function () {
      return fn.apply(context, arguments);
    };
  };

  for( var i = 0, len = types.length; i < len; i++){
    methods['is'+types[i]] = bind(checkType, types[i]);
  }

  return methods;
});
