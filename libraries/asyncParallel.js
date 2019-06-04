const async = require('async');
const chance = require('chance').Chance();

const arrStack = [];

const funcOne = (callback) => {
  // perform some actions
  // callback first param is error, but we will pass null since no error
  callback(null, 'First function result');
};

const funcTwo = (callback) => {
  // perform some actions
  // callback(null, 'Second function result');
  // if the callback has an error, async will stop immediately
  callback('ERROR', null);
};

const funcThree = (callback) => {
  // perform some actions
  callback(null, 'Third function result');
};

arrStack.push(funcOne, funcTwo, funcThree);

// runs functions in stack array in parallel, returns result after
async.parallel(arrStack, (err, result) => {
  console.log(result);
});


const objStack = {
  getFirstName: (callback) => {
    const firstName = chance.first();
    callback(null, firstName);
  },
  getLastName: (callback) => {
    const lastName = chance.last();
    callback(null, lastName);
  },
};

objStack.throwErr = (callback) => {
  callback('ERROR', null);
};

objStack.getGender = (callback) => {
  const gender = chance.gender();
  callback(null, gender);
};

async.parallel(objStack, (err, result) => {
  // if any err, then just log error
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
