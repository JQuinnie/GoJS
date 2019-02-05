/* eslint no-console: "off" */

require('es6-promise').polyfill();
require('isomorphic-fetch');

const display = data => console.log(data.url);

const futureData = fetch('https://www.anapioficeandfire.com/api/houses/378');

futureData.then(display); // attaches display functionality

console.log('This first though');
