/**
 * axis.js
 */
describe('axis.not', function () {

  describe('axis.not.isArray', function () {
    var mock;
    beforeEach(function () {
      mock = [];
    });
    it('should return a false if an Array', function () {
      expect(axis.not.isArray(mock)).toBe(false);
    });
  });

  describe('axis.not.isObject', function () {
    var mock;
    beforeEach(function () {
      mock = {};
    });
    it('should return a false if an Object', function () {
      expect(axis.not.isObject(mock)).toBe(false);
    });
  });

  describe('axis.not.isString', function () {
    var mock;
    beforeEach(function () {
      mock = '';
    });
    it('should return a false if a String', function () {
      expect(axis.not.isString(mock)).toBe(false);
    });
  });

  describe('axis.not.isDate', function () {
    var mock;
    beforeEach(function () {
      mock = new Date();
    });
    it('should return a false if a Date', function () {
      expect(axis.not.isDate(mock)).toBe(false);
    });
  });

  describe('axis.not.isRegExp', function () {
    var mock;
    beforeEach(function () {
      mock = /test/i;
    });
    it('should return a false if a RegExp', function () {
      expect(axis.not.isRegExp(mock)).toBe(false);
    });
  });

  describe('axis.not.isFunction', function () {
    var mock;
    beforeEach(function () {
      mock = function () {};
    });
    it('should return a false if a Function', function () {
      expect(axis.not.isFunction(mock)).toBe(false);
    });
  });

  describe('axis.not.isBoolean', function () {
    var mock;
    beforeEach(function () {
      mock = true;
    });
    it('should return a false if a Boolean', function () {
      expect(axis.not.isBoolean(mock)).toBe(false);
    });
  });

  describe('axis.not.isNumber', function () {
    var mock;
    beforeEach(function () {
      mock = 1;
    });
    it('should return a false if a Number', function () {
      expect(axis.not.isNumber(mock)).toBe(false);
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
