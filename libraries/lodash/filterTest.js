const _ = require('lodash');

const products = [
  {
    id: 1,
    name: 'milk',
    price: 2,
  },
  {
    id: 2,
    name: 'bread',
    price: 1,
  },
  {
    id: 3,
    name: 'cheese',
    price: 3,
  },
];

const searchProducts = (products, searchValue) => _.filter(products, product => product.name.charAt(0) === searchValue);

console.log(searchProducts(products, 'm'));

// another solution, this will allow searches pass 1st char of string
const searchProduct = (products, searchValue) => _.filter(products, product => _.includes(product.name, searchValue));

console.log(searchProduct(products, 'mi'));
