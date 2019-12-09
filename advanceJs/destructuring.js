// object
const sampleState = {
  name: 'Michael',
  age: 36,
  location: {
    state: 'OK',
    city: 'Edmond',
    postal: 73012,
  },
  relatives: {
    wife: {
      name: 'Shelley',
      age: 33,
    },
  },
};

// destructuring object
const {
  location: { city, state },
  relatives: {
    wife: { age },
  },
} = sampleState;

// specifying alias names for duplicate keys
const {
  name: myName,
  relatives: {
    wife: { name: herName },
  },
} = sampleState;

console.log(age);
console.log(myName);
console.log(herName);

// array
const foodArray = ['Chicken', 'Pork', 'Fish', 'Beef', 'Lamb'];

const [chicken] = foodArray;

console.log(chicken); // Chicken

const [, , , , lamb] = foodArray;

console.log(lamb); // Lamb

const [, ...everythingElse] = foodArray;

console.log(everythingElse); // Pork, Fish, Beef, Lamb
