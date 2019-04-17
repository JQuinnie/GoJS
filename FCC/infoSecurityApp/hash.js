const bcrypt = require('bcrypt');

const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


// START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash); // $2a$12$Y.PHPE15wR25qrrtgGkiYe2sXo98cjuMCG1YwSI5rJW1DSJp0gEYS
  bcrypt.compare(someOtherPlaintextPassword, hash, (err, res) => {
    console.log('ASync Hash', res); // true
  });
});

// END_ASYNC

// START_SYNC
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
const result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log('Sync Hash', result);
// END_SYNC
