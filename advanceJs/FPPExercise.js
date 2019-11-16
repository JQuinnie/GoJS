// FPP Exercise, functional programming paradigms
// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [],
};

const amazonHistory = [];
const compose = (f, g) => (...args) => f(g(...args));

/** pipe
 * const pipe = (f, g) => (...args) => g(f(...args));
 * purchaseItem(
 * addItemToCart,
 * applyTaxToItems,
 * buyItem,
 * emptyCart
 * )(user, {name: 'laptop', price: 200 })
 */

purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart,
)(user, { name: 'laptop', price: 200 });

function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemToCart(user, item) {
  amazonHistory.push(user); // bonus
  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItems(user) {
  amazonHistory.push(user); // bonus
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map(item => ({
    name: item.name,
    price: item.price * taxRate,
  }));
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  amazonHistory.push(user); // bonus
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  amazonHistory.push(user); // bonus
  return Object.assign({}, user, { cart: [] });
}

// bonus
function refundItem(user) {
  amazonHistory.push(user);
  return Object.assign({}, user, { purchases: [] });
}

// Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

// Bonus:
// accept refunds.
// Track user history.
