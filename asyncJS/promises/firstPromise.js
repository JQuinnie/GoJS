// first promise example
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved promise');
  }, 1000);
});

// first function is the resolve, second function is the error
promise.then((data) => {
  console.log(`Success: ${data}`);
}, (data) => {
  console.error(`Error: ${data}`);
});
