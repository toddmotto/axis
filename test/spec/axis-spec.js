/**
 * axis.js
 */
describe('axis', function () {

  describe('axis.isArray', function () {
    var mock;
    beforeEach(function () {
      mock = [];
    });
    it('should return a true if an Array', function () {
      expect(axis.isArray(mock)).toBe(true);
    });
  });

  describe('axis.isObject', function () {
    var mock;
    beforeEach(function () {
      mock = {};
    });
    it('should return a true if an Object', function () {
      expect(axis.isObject(mock)).toBe(true);
    });
  });

  describe('axis.isString', function () {
    var mock;
    beforeEach(function () {
      mock = '';
    });
    it('should return a true if a String', function () {
      expect(axis.isString(mock)).toBe(true);
    });
  });

  describe('axis.isDate', function () {
    var mock;
    beforeEach(function () {
      mock = new Date();
    });
    it('should return a true if a Date', function () {
      expect(axis.isDate(mock)).toBe(true);
    });
  });

  describe('axis.isRegExp', function () {
    var mock;
    beforeEach(function () {
      mock = /test/i;
    });
    it('should return a true if a RegExp', function () {
      expect(axis.isRegExp(mock)).toBe(true);
    });
  });

  describe('axis.isFunction', function () {
    var mock;
    beforeEach(function () {
      mock = function () {};
    });
    it('should return a true if a Function', function () {
      expect(axis.isFunction(mock)).toBe(true);
    });
  });

  describe('axis.isBoolean', function () {
    var mock;
    beforeEach(function () {
      mock = true;
    });
    it('should return a true if a Boolean', function () {
      expect(axis.isBoolean(mock)).toBe(true);
    });
  });

  describe('axis.isNumber', function () {
    var mock;
    beforeEach(function () {
      mock = 1;
    });
    it('should return a true if a Number', function () {
      expect(axis.isNumber(mock)).toBe(true);
    });
  });

  // PhantomJS [object DOMWindow] bug causing these to fail!
  // http://stackoverflow.com/questions/14218670/why-are-null-and-undefined-of-the-type-domwindow
  // describe('axis.isNull', function () {
  //   it('should return a true if an Null', function () {
  //     expect(axis.isNull(null)).toBe(true);
  //   });
  // });

  // describe('axis.isUndefined', function () {
  //   it('should return a true if an Undefined', function () {
  //     expect(axis.isUndefined()).toBe(true);
  //   });
  // });

});
