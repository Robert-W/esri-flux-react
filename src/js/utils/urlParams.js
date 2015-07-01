import queryToObject from 'utils/queryToObject';
import serialize from 'utils/serialize';

const bits = location.href.split('?');
const querystring = bits.length > 1 ? bits[1] : '';
const params = queryToObject(querystring);
const path = bits[0];

export default {
  get: key => key ? params && params[key] : params,
  prepare: query => `${path}?${serialize(query)}`
};
