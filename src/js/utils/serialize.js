/**
* Serialize an Object, convert object to query param string
* @param {object} query - Object to be flattened
* @return {string} query string in post format, e.g. foo=bar&bar=baz
*/
export default function (query) {
  let iter = generator(query);
  let data, result = [];
  while (data = iter.next().value) {
    result.push(`${data.key}=${encodeURIComponent(data.value)}`);
  }
  return result.join('&');
}

function* generator(query) {
  for (let key of Object.keys(query)) {
    yield { key, value: query[key] };
  }
}
