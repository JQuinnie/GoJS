const _ = require('lodash');

const users = [
  {
    userId: 1,
    isActive: true,
  },
  {
    userId: 2,
    isActive: false,
  },
  {
    userId: 3,
    isActive: false,
  },
];

// native grouping
function groupBy(list, prop) {
  return list.reduce((aggregator, element) => {
    // console.log('reduce', list, prop, aggregator, element); // this will show you what each item is
    (aggregator[element[prop]] = aggregator[element[prop]] || []).push(element);
    return aggregator;
  }, {});
}

console.log(groupBy(users, 'isActive'));

// same way in lodash
const group = _.groupBy(users, 'isActive');
// const group = _.groupBy(users, (user) => user.isActive);
console.log(group);
