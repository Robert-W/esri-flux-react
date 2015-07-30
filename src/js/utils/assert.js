/**
* Simple local assertion function to help guarantee other developers dont misuse this projects classes
* @param {statement} condition - Conditional statement which when evaluated must either be truthy or falsy
* @param {string} message - Message to be included in the error in the event that condition evaluates to falsy
*/
export default function assert (condition, message) {
  if (condition) { return; }
  throw new Error(`${message ? message : 'Assertion failed - assert was called with a falsy expression'}`);
}
