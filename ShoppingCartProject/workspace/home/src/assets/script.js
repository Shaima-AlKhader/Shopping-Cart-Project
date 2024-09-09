//Create an array of products to add all product object 
const products = [];

const product1 ={
  name: "Pag of Oranges",
  price: 10,
  quantity: 0,
  productId: 100,
  image: "images/orange.jpg"
}
products.push(product1);
const product2 ={
  name: "Carton of Cherries",
  price: 4,
  quantity: 0,
  productId: 101,
  image: "images/cherry.jpg"
}
products.push(product2);
const product3 ={
  name: "Carton of Strawberries",
  price: 5,
  quantity: 0,
  productId: 102,
  image: "images/strawberry.jpg "
}
products.push(product3);


// Declare an empty array named cart to hold the items in the cart
let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(id){
  const product = products.find(product => product.productId === id);
  product.quantity += 1;
  if(cart.indexOf(product) == -1){
    cart.push(product);
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(id){
  const product = products.find((product) => product.productId === id);
  product.quantity += 1;
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(id){
  const product = products.find((product) => product.productId === id);
  product.quantity--;
  if(product.quantity == 0){
    removeProductFromCart(id);
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(id){
  const product = products.find((product) => product.productId === id);
  product.quantity = 0;
  const indx = cart.indexOf(product);
  cart.splice(indx, 1);
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal(){
  let  grandTotal = 0; 
  for(let i = 0; i < cart.length; i++){
    grandTotal += (cart[i].price * cart[i].quantity);
  }
  return grandTotal;
}
// Create a function called emptyCart that empties the products from the cart
function  emptyCart(){
  cart = [];
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let totalPaid = 0;
let amount = 0;
function pay(amount) {
  totalPaid += amount;
  let remainBalance = totalPaid - cartTotal();
  return remainBalance;
}
let remaining = pay(amount);
if(remaining < 0)
  pay(amount);


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart
}