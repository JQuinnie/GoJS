const fetch = require('node-fetch');
const swapi = require('../script2');

// passing done will tell Jest to not run test until it sees done, done usually comes after expect
it('calls swapi to get people', (done) => {
  expect.assertions(1); // This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
    done();
  });
});

// another way for async test is to return the promise
it('calls swapi to get people with a promise', () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
