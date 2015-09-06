/**
* Convert a paramterized string to an object
* @param {string} querystring - Query string to be expanded into an object
*/
export function toObject(querystring) {
  if (!querystring) { return {}; }
  let result = {};
  let pairs = querystring.split('&').map((item) => {
    return item.split('=').map(str => decodeURIComponent(str));
  });
  // Should have an array of arrays now, ex: [['a','b'], ['foo','bar']]
  pairs.forEach((pair) => {
    if (!pair[0] || !pair[1]) {
      console.warn(`You provided an invalid key-value pair, ${pair[0]} is being omitted.`);
      return;
    }
    result[pair[0]] = pair[1];
  });
  return result;
}

/**
* Convert an object to a string, not the same as JSON.stringify, converts to POST format, ex: key=value&foo=bar
* @param {object} json - A json object to be flattened into a string
*/
export function toQuery(json, noEncode) {
  let errorMsg = 'You should not be converting nested objects as they wont encode properly. Try making it a string first.';
  let result = [];
  for (let key in json) {
    if (Object.prototype.toString.call(json[key]) === '[object Object]') {
      throw new Error(errorMsg);
    }
    if (noEncode) {
      result.push(`${key}=${json[key]}`);
    } else {
      result.push(`${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`);
    }
  }
  return result.join('&');
}

/**
* Return the query parameters from the provided string
* @param {string} path - Path to pull querystring from, should be location.href
* @return {object} - Dictionary containiner the url parameters
*/
export function getUrlParams(path) {
  if (!path) { return {}; }
  let bits = path.split('?');
  let querystring = bits.length > 1 ? bits[1] : '';
  return toObject(querystring);
}
