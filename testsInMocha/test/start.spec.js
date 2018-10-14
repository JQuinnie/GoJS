// using assert as assertion framework
const assert = require('assert');

describe('Basic Mocha Test', () => {
  const thingOne = 1;
  const thingTwo = 2;

  it('should throw errors if equal', () => {
    assert.notEqual(thingOne, thingTwo);
  });
});
