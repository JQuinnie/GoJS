// using assert as assertion framework
const assert = require('assert');

describe('Basic Mocha Test', () => {
  it('should throw errors if not equal', () => {
    assert.equal(2, 3);
  });
});
