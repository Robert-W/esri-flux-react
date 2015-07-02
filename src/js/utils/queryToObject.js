// Imports don't work in Jest due to import hoisting so I am unable to mock lodash
// Must use common.js require which will be converted correctly due to babel-jest
// /* global jest */
// jest.dontMock('../../bower/lodash/lodash');
// const _ = require('../../bower/lodash/lodash');

import _ from 'lodash';

/**
* Takes a query string and converts it to an object
* @param {string} querystring
* @return {object}
*/
export default (querystring) => {
  return !querystring ? {} : _.zipObject(querystring.split('&').map(bit => bit.split('=').map(str => decodeURIComponent(str))));
};
