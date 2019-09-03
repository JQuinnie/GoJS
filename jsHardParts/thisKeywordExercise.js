/* eslint-disable func-names, no-console */

const b = {
  name: 'Bill',
  say() { console.log(this); }, // this is b object
};

const c = {
  name: 'Carrie',
  say() {
    return function () { console.log(this); }; // this is global object
  },
};

const d = {
  name: 'Destiny',
  say() {
    return () => { console.log(this); }; // this is d object
  },
};

const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

console.log('?', giveMeTheCharacterNOW());

// const character = {
//   name: 'Simon',
//   getCharacter() {
//     return () => { console.log(this.name); };
//   },
// };
// console.log(character.getCharacter()());
