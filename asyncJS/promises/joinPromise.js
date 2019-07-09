// As you can see, Promise.all returns a promise. The received data is an array containing the data of each given promise. The promise is resvoled when all given promises are resolved. Beware, Promise.all has a fail-fast behaviour. If a given promise is rejected, the resulting promise of Promise.all will be rejected at this exact moment. It will not wait for the other promises to complete, and the only received data is the error of the rejected request. We can't access the result of the other promises. You should only use Promise.all when you need for all of your promises to resolve successfully.
function job(delay) {
  return new Promise(((resolve) => {
    setTimeout(() => {
      console.log('Resolving', delay);
      resolve(`done ${delay}`);
    }, delay);
  }));
}

const promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise.then((data) => {
  console.log('All done');
  data.forEach((text) => {
    console.log(text);
  });
});
