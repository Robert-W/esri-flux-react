var modulePath = '../src/js/dispatcher';

jest.dontMock(modulePath);
const dispatcher = require(modulePath).Dispatcher;

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
    test.A = jest.genMockFunction();
    test.B = jest.genMockFunction();
  });

  afterEach(function () {
    test.A = undefined;
    test.B = undefined;
  });

  it('should return an id when registering a callback', () => {
    let token = dispatcher.register(test.A);
    expect(token).toEqual('_1');
  });

  it('should trigger the callback with the right payload', () => {
    spyOn(test, 'A');
    dispatcher.register(test.A);
    dispatcher.dispatch(test.payload);
    expect(test.A).toHaveBeenCalledWith(test.payload);
  });

  it('should notify it\'s subscribers', () => {
    spyOn(test, 'A');
    spyOn(test, 'B');

    dispatcher.register(test.A);
    dispatcher.dispatch(test.payload);
    expect(test.A).toHaveBeenCalled();

    dispatcher.register(test.B);
    dispatcher.dispatch(test.payload);
    expect(test.A.calls.length).toEqual(2);
    expect(test.B.calls.length).toEqual(1);
  });

});
