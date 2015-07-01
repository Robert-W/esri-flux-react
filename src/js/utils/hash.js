import serialize from 'utils/serialize';
import urlUtils from 'esri/urlUtils';

const params = urlUtils.urlToObject(location.href);

export default {
  get: key => params && params.query && params.query[key],
  getQuery: () => params && params.query,
  prepare: (query) => serialize(query)
};
