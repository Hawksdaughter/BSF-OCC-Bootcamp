//  This is the main application of this program

// Import the necessary modules:
const product = require('./product');  // I don't think this line is needed.
const cart = require('./cart');
const calculateTotalVariable = require('./order');
const productsVariable = require('./product');


// Add products to the cart:
cart.addToCartMethod(productsVariable[0]);
cart.addToCartMethod(productsVariable[2]);

// Display the cart contents
console.log('Items in your cart are:', cart.getCartItemsMethod() );

// Calculate and display the total order amount:
const totalAmount = calculateTotalVariable(cart.getCartItemsMethod())
console.log('The total amount due is:', totalAmount);
