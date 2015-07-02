/* global describe, it, expect, jest */
jest.dontMock('../src/js/utils/queryToObject');
const queryToObject = require('../src/js/utils/queryToObject');

describe('Utilities - queryToObject', () => {

  it('should prove queryToObject is defined', () => {
    expect(queryToObject).toBeDefined();
  });

  it('should return empty object when no parameters are provided', () => {
    var result = queryToObject();
    expect(result).toEqual({});
  });

  it('should return empty object when empty string is provided', () => {
    var result = queryToObject('');
    expect(result).toEqual({});
  });

  it('should return object with key \'foo\' and value \'bar\'', () => {
    var result = queryToObject('foo=bar');
    expect(result.foo).toEqual('bar');
  });

  it('should properly decode values with \'decodeURIComponent\' in query string', () => {
    var decodedUrl = 'https://facebook.github.io/jest/';
    var uri = encodeURIComponent(decodedUrl);
    var result = queryToObject(`url=${uri}`);
    expect(result.url).toEqual(decodedUrl);
  });

});
