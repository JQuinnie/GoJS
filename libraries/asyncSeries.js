const async = require('async');

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
