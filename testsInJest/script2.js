const fetch = require('node-fetch'); // in the browser, there is a window.fetch

const getPeoplePromise = fetch => fetch('https://swapi.co/api/people')
  .then(response => response.json())
  .then(data => ({
    count: data.count,
    results: data.results,
  }));

// getPeoplePromise(fetch);

const getPeople = async (fetch) => {
  const getRequest = await fetch('https://swapi.co/api/people');
  const data = await getRequest.json();
  // console.log(data);
  return {
    count: data.count,
    results: data.results,
  };
};

// getPeople(fetch);

module.exports = {
  getPeoplePromise,
  getPeople,
};
