/**
* Serialize an Object, convert object to query param string
* @param {object} query - Object to be flattened
* @return {string} query string in post format, e.g. foo=bar&bar=baz
*/
export default (query) => {
  let iter = generator(query),
      data = iter.next().value,
      result = [];

  while (data !== undefined) {
    result.push(`${data.key}=${encodeURIComponent(data.value)}`);
    data = iter.next().value;
  }
  return result.join('&');
};

function* generator(query) {
  for (let key of Object.keys(query)) {
    yield { key, value: query[key] };
  }
}
