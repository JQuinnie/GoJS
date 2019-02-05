/* eslint no-console: "off" */
// Challenge 1: Using setTimeout, print the string 'Hello!' after 1000ms

function sayHello() {
  setTimeout(() => {
    console.log('Hello!');
  }, 1000);
}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms

// Challenge 2: Create a promise. Have it resolve with a value of 'Resolved!' in reslove after a delay of 1000ms, using setTimeout. Print the contents of the promis after it has been resolved by passing console.log to .then

let promise = new Promise((resolve, reject) => {
  // ADD CODE HERE
  setTimeout(() => {
    resolve('Resolved!');
  }, 1000);
});

// Should print out "Resolved!"
// ADD CODE HERE
promise.then((msg) => {
  console.log(msg);
});

// Challenge 3: Create another promise. Now have it reject with a value of 'Rejected!' without using setTimeout. Print the contents of the promise after it has been rejected by passing console.log to .catch

promise = new Promise((resolve, reject) => {
  // ADD CODE HERE
  reject('Rejected!');
});

// Should print out "Reject!"
// ADD CODE HERE
promise.catch((msg) => {
  console.log(msg);
});

// Challenge 4: Promises are asynchronous and we're now going to prove that they indeed are! Create a promise and have it resolve with the value of 'Promise has been resolved!' Then uncomment the code at the bottom of Challenge 4. What order do we expect 'Promises has been resolved!' and 'I'm not the promise!' to print? Why?

promise = new Promise((resolve, reject) => {
  // ADD CODE HERE
  resolve('Promise has been resolved!');
});

// Uncomment the lines below when ready
promise.then(() => console.log('Promise has been resolved!'));
console.log("I'm not the promise!");

// Challenge 5: Write a function delay that returns a promise. And that promise should return a setTimeout that calls resolve after 1000ms

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
}

// Uncomment the code below to test
// This code should log "Hello!" after 1000ms
delay().then(sayHello);

// Challenge 6: This challenge we'll chain promises together using '.then' Create two variables: firstPromise and secondPromise Set secondPromise to be a promise that resolves to 'Second!' Set firstPromise to be a promise that resolves to secondPromise Call the firstPromise with a '.then', which will return the secondPromise promise. Then pritn the contents of the promise after it has been resolved by passing console.log to .then

//
// ADD CODE BELOW
const secondPromise = new Promise((resolve, reject) => {
  resolve('Second!');
});
const firstPromise = new Promise((resolve, reject) => {
  resolve(secondPromise);
});

firstPromise.then((content) => {
  console.log(content);
});

// Challenge 7: We have a API that gets data from a database, it takes an index parameter and returns a promise. Your challenge is to use Promise.all to make 3 API calls and return all the data when the calls are complete.

const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
];

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: 'index out of range' });
    }
  });
};

function getAllData() {
  // CODE GOES HERE
  const apiPromises = [fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)];
  return Promise.all(apiPromises).then(content => content);
}

getAllData().then(values => console.log(values));
