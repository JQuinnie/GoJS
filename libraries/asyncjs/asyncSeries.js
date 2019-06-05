const async = require('async');

// similar to async.waterfall, except it will run the function inside the array in order
async.series([
  function funcOne(callback) {
    callback(null, 'Result of function one');
  },
  function funcTwo(callback) {
    callback(null, 'Result of function two');
  },
  function funcThree(callback) {
    callback(null, 'Result of function three');
  },
],
(err, result) => {
  console.log(result);
});
