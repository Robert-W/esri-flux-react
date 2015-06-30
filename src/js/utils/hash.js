import serialize from 'utils/serialize'
import urlUtils from 'esri/urlUtils'

const params = urlUtils.urlToObject(location.href);

const hash = {
  get: key => params && params.query && params.query[key],
  getQuery: () => params && params.query,
  set: (query) => {
    let querystring = serialize(query);
    console.log(querystring);
  }
};

export { hash as default };
