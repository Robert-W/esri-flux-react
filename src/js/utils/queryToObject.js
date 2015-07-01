import _ from 'lodash';
/**
* Takes a query string and converts it to an object
* @param {string} querystring
* @return {object}
*/
export default (querystring) => _.zipObject(querystring.split('&').map(bit => bit.split('=')));
