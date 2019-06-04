const async = require('async');

// The difference is that async.series(), once the series have finished, will pass all the results to the main callback. async.waterfall() will pass to the main callback only the result of the last function called.
async.waterfall([
  function task1(callback) {
    console.log('start!');
    setTimeout(() => {
      console.log('Task 1 completed');
      // Passing value to the next task
      callback(null, 'Value from Task 1');
    }, 5000);
  },
  function task2(task1Result, callback) {
    console.log(task1Result);
    setTimeout(() => {
      console.log('Task 2 completed');
      // Passing value to the next task
      callback(null, 'Value from Task 2');
    }, 1000);
  },
  function task3(task2Result, callback) {
    console.log(task2Result);
    setTimeout(() => {
      console.log('Task 3 completed');
      // Passing value to the next task
      callback(null);
    }, 100);
  }],
(err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log('No errors, all tasks done!');
  }
});
