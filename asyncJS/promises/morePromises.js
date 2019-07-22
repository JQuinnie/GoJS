// a simple async function to calculate the square of a number
const calculateSquare = (num) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num !== 'number') {
        return reject(new Error('Argument of type number is expected.'));
      }
      const result = num * num;
      resolve(result);
    }, 1000);
  });
  return promise;
};

calculateSquare(2).then((value) => {
  console.log(`The 1st number squared is: ${value}`);
  return calculateSquare(4);
}).then((value) => {
  console.log(`The 2nd number squared is: ${value}`);
  throw Error('Error is thrown');
}).catch((error) => {
  console.error(error.message);
});

module.exports = calculateSquare;
