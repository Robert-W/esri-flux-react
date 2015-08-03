let modulePath = '../../src/js/utils/interpreter';

jest.dontMock(modulePath);
const interpreter = require(modulePath);
console.log(interpreter);

/*
* TODO - test cases listed with xit and not it are low priority and not necessary in the first version
* Write more tests as I develop what I want the form syntax to be, will need to test the parser before these
* test cases can be met
*/

describe('Utilities - interpreter', () => {

  it('should reshape the response into multiple arrays at a given key instead of a single array of objects', () => {
    /*
      so a request that says something like this { 'Labels': ':year', 'Values': ':count' }
      would return something like this { "Labels": ['2011', '2012'], "Values": [12, 15] },
      Labels and Values can be named whatever you like, the :year means an array of years from the feature set
      feature.attributes.year and :count is an array of feature.attributes.count values that match the years, useful for charting
    */
  });

  it('should reshape the response into an array of custom formatted objects', () => {
    /*
      return should be an array of objects, the format can specify the keys and which fields represent the values,
      user should also be able to describe nested structures, something like below:
      {
        'Name': 'name',
        'Awards': ':awards',
        'Schools': ['primary', 'secondary', 'higher']
      }
      This way if you query a particular user name = 'John', it can map all the awards he has into an array so the response
      comes back like this:
      {
        'Name': 'John',
        'Awards': ['Honor Roll', 'Spelling Bee', 'Grammys', 'Oscars'],
        'Schools': ['Some Elementary School', 'MLK Middle School', 'Laurel High School']
      }
    */
  });

  xit('should allow for computed properties', () => {
    /*
      In the form, the user should be able to specify things like (high + low) / total,
      where high, low, and total are numeric fields
    */
  });

  it('should take template strings and return a full value', () => {
    /*
      Useful for info templates, so a user can supply things like 'My Name is ${first_name} ${last_name}',
      the response would be My Name is Kid rock, useful for identify and query tasks for info windows
    */
  });

  it('should allow the user to specify noData values', () => {
    /*
      If the user gives us a template like this, 'Name: ${full_name}' and full_name does not exist or is an invalid field
      the user can specify at the root of the form, a noData key, like so, { noData: 'Not Available'}.  Anytime the interpreter
      cannot find a value, it will return the noData value in its place, so when provided 'Name: ${full_name}'
      and full_name does not exist, it will return 'Name: Not Available'
    */
  });


  xit('should support specific operators to be passed in and used before returning the data', () => {
    /*
      User should be able to pass in something like this:
      { 'Names': 'count(name)' } and it would return something like { 'Names': { 'John': 2, 'Jane': 5 }} or
      { 'Names': ':count(name)' } and it would return something like { 'Names': [['John', 2], ['Jane', 5]]}
      Operations could include, sum, count, average,
      average may look like:
      {'Age': average(age)} and would return { 'Age': 26.5 }
    */
  });

});
