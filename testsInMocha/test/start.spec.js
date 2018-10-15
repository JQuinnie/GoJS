// using assert as assertion framework
const assert = require('assert');
const should = require('chai').should();

describe('Basic Mocha Test', () => {
  const thingOne = 1;
  const thingTwo = 2;

  it('should throw errors if equal', function() {
    assert.notEqual(thingOne, thingTwo);
  });

  it('should deal with objects', function() {
    let obj1 = { name: 'Quinn', occupation: 'Developer' };
    let obj2 = { name: 'Quinn', occupation: 'Developer' };
    // use deep equal for object comparison
    // failing test at obj1.should.equal(obj2)
    obj1.should.deep.equal(obj2);
  });

  it('should allow testing nulls', function() {
    let iAmNull = null;
    should.not.exist(iAmNull);
  });
});
