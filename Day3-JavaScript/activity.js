let shirt = 17;
let shoes = 65;
let pants = 49;
let sunglasses = 13;

// A customer bought 2 shirts, 1 pair of shoes, 1 pair of pants, and 3 sunglasses...
let subtotal = (2 * shirt) + shoes + pants + (3 * sunglasses);

// They also have a 10% discount off of the total...
let discount = subtotal * .1; 

// Store the total price in a variable named "cart"...
let cart = subtotal - discount;

// Display the total the customer owes in the console...
console.log('The total the customer owes is: $' + cart);


// --------------------------------------------------------


