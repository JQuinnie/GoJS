/* eslint-disable no-console */
const _ = require('lodash');

// assign
const state = {
  isLoading: true,
  data: null,
  error: null,
};

const newState = {
  isLoading: false,
  data: {
    id: 1,
    name: 'John',
  },
};
// native assign
const merge = Object.assign({}, state, newState);
console.log(`Merge: ${JSON.stringify(merge)}`);
// Object.assign(state, newState); will mutate original state

// Lodash way
const assign = _.assign({}, state, newState);
console.log(`Assign: ${JSON.stringify(assign)}`);


// clone
// typical scenario
const baseConfig = {
  apiUrl: 'http://someapi.com',
  port: 4000,
};

function createExtendedConfig(config) {
  config.host = 'http://google.com';
  return config;
  // return Object.assign({}, config, {host: 'http://google.com'}) // this does the same but will not mutate
}

// const extendedConfig = createExtendedConfig(baseConfig);
// console.log(`baseConfig: ${JSON.stringify(baseConfig)}`); // you can see base is mutated
// console.log(`extendedConfig: ${JSON.stringify(extendedConfig)}`);

function createNewConfig(config) {
  const clonedConfig = _.clone(config);
  clonedConfig.host = 'http://google.com';
  return clonedConfig;
}

const extendedNewConfig = createNewConfig(baseConfig);
console.log(`baseConfig: ${JSON.stringify(baseConfig)}`); // not mutated
console.log(`extendedNewConfig: ${JSON.stringify(extendedNewConfig)}`);

// use clone deep when working with a nested array
const a = { b: { c: 1 } };
const b = _.cloneDeep(a);
b.b.foo = 'bar';
console.log(a);
console.log(b);


// mixin, custom functions that can be chained

function capitalizeLast(str) {
  const lastSymbol = _.last(str);
  const initialSymbols = _.chain(str).initial().join('');

  return initialSymbols + _.capitalize(lastSymbol);
}

_.mixin({ capitalizeLast });
// { capitalize: capitalize} --> name, function

const mixin = _.chain('foo').capitalizeLast().value(); // a function like this
console.log(`Mixin: ${mixin}`);
