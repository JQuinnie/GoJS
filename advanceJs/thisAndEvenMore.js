// more on THIS and call, bind, apply
const hotel = {
  name: 'Classic',
  menu: {
    A: ['Burgers', 'Fries'],
    B: ['Hot Dogs'],
  },
  displayMenu(location) {
    console.log(`Menu for ${this.name} - ${this.menu[location]}.join(', ')`);
  },
};
hotel.displayMenu('A'); // Menu for Classic B- urgers, Fries

const cafe = {
  name: 'Cafe',
  menu: {
    A: ['Espresso'],
    B: ['Latte', 'Cappucino'],
  },
};

hotel.displayMenu.call(cafe, 'B'); // Menu for Cafe - Latte, Cappucino
// first paramenter of the call is this reference, then you can pass in any # of args

// apply operates in the same way as call, only diff is in way to pass in args

// bind, unlike call and apply, will return a function, can only bind a function once
const boundFunction = hotel.displayMenu.bind(cafe);
boundFunction('A'); // Menu for Cafe - Espresso

// ARROWS! Enclosing lexical context, lexical context is block level scoping, does not change with call, apply or bind, maintains binding of its lexical context
function Candy(owner, flavor) {
  this.owner = owner;
  this.flavor = flavor;
  this.whosCandyIsThis = () => {
    console.log('Owner of the candy is ', this.owner);
  };
}
const Nina = new Candy('Nina', 'Strawberry');
Nina.whosCandyIsThis();
const Erika = { owner: 'Erika' };
Nina.whosCandyIsThis.call(Erika); // Owner of the candy is Nina
Nina.whosCandyIsThis.apply(Erika); // Owner of the candy is Nina
Nina.whosCandyIsThis.bind(Erika)(); // Owner of the candy is Nina
