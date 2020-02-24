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

  describe('axis.type', function () {
    var mockArr, mockObj, mockStr, mockDate, mockRegExp, mockFunc, mockBool, mockNum;
    beforeEach(function () {
      mockArr = [];
      mockObj = {};
      mockStr = "";
      mockDate = new Date();
      mockRegExp = /test/i;
      mockFunc = (function(){});
      mockBool = true;
      mockNum = 1;
    });
    it('should return a string describing the type', function () {
      expect(axis.type(mockArr)).toBe("Array");
      expect(axis.type(mockObj)).toBe("Object");
      expect(axis.type(mockStr)).toBe("String");
      expect(axis.type(mockDate)).toBe("Date");
      expect(axis.type(mockRegExp)).toBe("RegExp");
      expect(axis.type(mockFunc)).toBe("Function");
      expect(axis.type(mockBool)).toBe("Boolean");
      expect(axis.type(mockNum)).toBe("Number");
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
