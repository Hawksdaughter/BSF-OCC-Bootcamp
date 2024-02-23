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


/* 
--------------------------------------------------------
--------------------------------------------------------
*/

let alternativeWay = 0;
alternativeWay += shirt * 2;
alternativeWay += shoes;
alternativeWay += pants;
alternativeWay += sunglasses * 3;

let customerDiscount = alternativeWay * 0.1;

alternativeWay -= customerDiscount;

console.log('The total owed by the customer after their discount is: $' + alternativeWay + '0');
// LOL!  It was bugging me to not have that zero at the end. :P