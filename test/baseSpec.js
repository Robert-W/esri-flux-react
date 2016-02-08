var expect = require('chai').expect;

describe('Utilities - assert', function () {

  it('should prove 2 + 2 = 4', function () {
    var result = 2 + 2;
    var expected = 4;
    expect(result).to.equal(expected);
  });

});
