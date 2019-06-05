const _ = require('lodash');

_.isArray([1, 2]); /* ? */

// Each diff between native js and lodash
const native = [1, 2].forEach((item) => {
  console.log(item);
});
const lodash = _.each([1, 2], (item) => {
  console.log(item);
});

// lodash allows chaining of methods as well as accepts objects
console.log(native, lodash);

const items = {
  1: {
    name: 'Milk',
  },
  2: {
    name: 'Bread',
  },
};
console.log(items.forEach);
console.log(_.each(items));
_.each(items, (item, index) => {
  console.log(item, index);
});

const arr = [];
_.each(items, (item, index) => {
  console.log(item, index);
  arr.push(item);
});
console.log(arr);

// Map diff between native and lodash
const newArr = [1, 2, 3].map(item => item);
console.log(newArr);

const newArrLodash = _.map([
  {
    id: 1,
    name: 'Jack',
  },
  {
    id: 2,
    name: 'Jill',
  },
],
item => item.id);
console.log(newArrLodash);

const users = {
  1: { name: 'Jack' },
  2: { name: 'Jill' },
};
const userNames = _.map(users, user => user.name);
console.log(userNames);
// simplify map using key, return all keys
const userNamesSimple = _.map(users, 'name');
console.log(userNamesSimple);
