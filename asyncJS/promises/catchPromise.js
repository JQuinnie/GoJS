// what is the output of the below code?
function job(state) {
  return new Promise(((resolve, reject) => {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  }));
}

const promise = job(true);

promise

  .then((data) => {
    console.log(data);

    return job(true);
  })

  .then((data) => {
    if (data !== 'victory') {
      throw 'Defeat';
    }

    return job(true);
  })

  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    console.log(error);

    return job(false);
  })

  .then((data) => {
    console.log(data);

    return job(true);
  })

  .catch((error) => {
    console.log(error);

    return 'Error caught';
  })

  .then((data) => {
    console.log(data);

    return new Error('test');
  })

  .then((data) => {
    console.log('Success:', data.message);
  })

  .catch((data) => {
    console.log('Error:', data.message);
  });

// success, Defeat, error, Error caught, Success: test
