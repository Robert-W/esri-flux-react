var modulePath = '../../src/js/utils/assert';

jest.dontMock(modulePath);
const assert = require(modulePath);

describe('Utilities - assert', () => {

  var anonymousMessage = 'Assertion failed - assert was called with a falsy expression';
  var expectedMessage = 'Assert \'Test\' equals \'Test\'';

  it('should not throw an error when provided with a truthy condition', () => {
    expect(() => {
      assert(1, '1 is truthy right');
    }).not.toThrow();
  });

  it('should throw an error when provided with a falsy condition', () => {
    expect(() => {
      assert(1 === 2, '1 === 2');
    }).toThrow();
  });

  it('should throw an error with an anonymous message when none is provided and condition is falsy', () => {
    expect(() => {
      assert(true === false, anonymousMessage);
    }).toThrow(anonymousMessage);
  });

  it('should throw an error with the provided message when provided and condition is falsy', () => {
    expect(() => {
      assert('Test' === 'test', expectedMessage);
    }).toThrow(expectedMessage);
  });

});
