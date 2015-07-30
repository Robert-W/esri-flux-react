/**
* Simple Assertion function
* @param {expression} condition - Any condition that evaluates to truthy or falsy
* @param {string} message - Message to be included with Error when condition is falsy
*/
export default function (condition, message) {
  if (condition) { return; }
  throw new Error(`Assertion Error: ${message}`);
}
