const params = require('../src/js/utils/params');
let expect = require('chai').expect;
let sinon = require('sinon');

let objects = {
  A: { foo: 'bar', bar: 'baz', scooby: 'doo' },
  B: { url: 'http://www.google.com', value: '20%' },
  C: { url: 'http://www.google.com', value: '20%' },
  D: { key: 'value', nested: { 'expected': 'toFail' }}
};

let strings = {
  A: 'foo=bar&bar=baz&scooby=doo',
  B: 'url=http%3A%2F%2Fwww.google.com&value=20%25',
  C: 'url=http://www.google.com&value=20%',
  toQueryError: 'You should not be converting nested objects as they wont encode properly. Try making it a string first.',
  invalidQuery: 'key=&some=&foo=bar',
  url: 'http://www.google.com?foo=bar&bar=baz&scooby=doo'
};

describe('Utilities - params.toObject', () => {

  it('should convert a string to a JSON object with the correct keys', () => {
    let result = params.toObject(strings.A);
    expect(result.foo).to.equal(objects.A.foo);
    expect(result.bar).to.equal(objects.A.bar);
    expect(result.scooby).to.equal(objects.A.scooby);
  });

  it('should decode all values in the returned JSON object', () => {
    let result = params.toObject(strings.B);
    expect(result.url).to.equal(objects.B.url);
    expect(result.value).to.equal(objects.B.value);
  });

  it('should log a warning if passed an invalid string and leave the invalid key-value pair out', () => {
    sinon.spy(console, 'warn');
    let result = params.toObject(strings.invalidQuery);
    expect(console.warn.called).to.be.true;
    expect(result.foo).to.equal('bar');
    expect(result.key).to.not.exist;
    expect(result.some).to.not.exist;
  });

});

describe('Utilities - params.toQuery', () => {

  it('should flatten a JSON object and return a string with the correct key value mapping', () => {
    var result = params.toQuery(objects.A);
    expect(result).to.equal(strings.A);
  });

  it('should encode all values from the given object in the returned string', () => {
    var result = params.toQuery(objects.B);
    expect(result).to.equal(strings.B);
  });

  it('should not encode any values if instructed to', () => {
    var result = params.toQuery(objects.C, true);
    expect(result).to.equal(strings.C);
  });

  it('should throw an error if passed a nested javascript object', () => {
    expect(function () {
      params.toQuery(objects.D);
    }).to.throw(strings.toQueryError);
  });

});

describe('Utilities - params.getUrlParams', () => {

  it('should return an empty object if no path is provided', () => {
    let result = params.getUrlParams();
    expect(result).to.be.an('object');
  });

  it('should return a dictionary matching keys and values in the provided path', () => {
    var result = params.getUrlParams(strings.url);
    expect(result.foo).to.equal(objects.A.foo);
    expect(result.bar).to.equal(objects.A.bar);
    expect(result.scooby).to.equal(objects.A.scooby);
  });

});
