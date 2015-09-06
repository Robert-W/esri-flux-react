const dispatcher = require('../src/js/dispatcher').Dispatcher;
let expect = require('chai').expect;
let sinon = require('sinon');

describe('Dispatcher', () => {

  let test = {
    payload: {
      type: 'add',
      data: {
        user: 12
      }
    }
  };

  beforeEach(function () {
    test.A = sinon.spy();
    test.B = sinon.spy();
  });

  afterEach(function () {
    test.A = undefined;
    test.B = undefined;
  });

  it('should return an id when registering a callback', () => {
    let token = dispatcher.register(test.A);
    expect(token).to.equal('_1');
  });

  it('should trigger the callback with the right payload', () => {
    dispatcher.register(test.A);
    dispatcher.dispatch(test.payload);
    expect(test.A.calledWith(test.payload)).to.be.true;
  });

  it('should notify it\'s subscribers', () => {
    dispatcher.register(test.A);
    dispatcher.dispatch(test.payload);
    expect(test.A.called).to.be.true;

    dispatcher.register(test.B);
    dispatcher.dispatch(test.payload);
    expect(test.A.callCount).to.equal(2);
    expect(test.B.callCount).to.equal(1);
  });

});
