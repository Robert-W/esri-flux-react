const assert = require('../src/js/utils/assert');
let expect = require('chai').expect;

describe('Utilities - assert', () => {

  var anonymousMessage = 'Assertion failed - assert was called with a falsy expression';
  var expectedMessage = 'Assert \'Test\' equals \'Test\'';

  it('should not throw an error when provided with a truthy condition', () => {
    expect(() => {
      assert(1, '1 is truthy right');
    }).to.not.throw();
  });

  it('should throw an error when provided with a falsy condition', () => {
    expect(() => {
      assert(1 === 2, '1 === 2');
    }).to.throw();
  });

  it('should throw an error with an anonymous message when none is provided and condition is falsy', () => {
    expect(() => {
      assert(true === false);
    }).to.throw(anonymousMessage);
  });

  it('should throw an error with the provided message when provided and condition is falsy', () => {
    expect(() => {
      assert('Test' === 'test', expectedMessage);
    }).to.throw(expectedMessage);
  });

});
