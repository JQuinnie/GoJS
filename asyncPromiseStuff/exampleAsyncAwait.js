require('es6-promise').polyfill();
require('isomorphic-fetch');

async function createFlow() {
  console.log('Me first');
  const data = await fetch('https://www.anapioficeandfire.com/api/houses/378');
  console.log(data);
}

createFlow();

console.log('Me second');
