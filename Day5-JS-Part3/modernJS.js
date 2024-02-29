//  Arrow Functions

const greet = (name1) => {
    console.log(name1);
}
greet('Ronald')


const square = (numberA) => numberA * numberA;
/* The equivalent long way to write that would be:
function square(numberA) {
    numberA * numberA; 
    return numberA;
};
*/
console.log(square(4));




// ============================================================
//  Rest Operators

function restOpertor(firstParameter, ...restOfTheArguments) {
    console.log('The first parameter is:', firstParameter);
    console.log('The others will be in an array:', restOfTheArguments);
};

restOpertor('One', 'two', 'three', 'four', 'five', 'six');





// ============================================================
// Spread Operators
function sum(x, y, z) {
    return x + y + z;
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('The sum of 1 + 2 + 3 is:', sum(...numbers));



// =============================================================
//  Common Built-in JavaScript Methods:

// Array Filter
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Example:  To filter out even from odd numbers:
const even = numbersArray.filter((number) => number % 2 == 0);
console.log('The following is an array of all the even numbers we filtered out:', even);
const odd = numbersArray.filter((number2) => number2 % 2 != 0);
console.log('The following is an array of all the odd numbers we filtered out:', odd);


// String Split
const message = "Hello, world!"
// Example:  Split that string into 2 halves
const halves = message.split(", ");
console.log('The following is an array of the two halves that have now been separated', halves);
const anotherExample = "Hello, world!"
const usingO = anotherExample.split("o");
console.log('The following array splits it at every instance of the letter o', usingO);


// Includes
const sentence = "The quick brown fox jumps over the lazy dog.";
const containsWord = sentence.includes("fox");
console.log('Does the sentence contain the containsWord variable of "fox"?', containsWord);


// Length
const string = "Welcome to Modern JS features!";
console.log('The number of characters in that string, including white spaces, is:', string.length);


// To LowerCase
let newString = "HEllO";
console.log(newString.toLowerCase());

// To UpperCase
let newString2 = "HEllO wOrld";
console.log(newString2.toUpperCase());


// Trim a string
//...gets rid of excess whitespace surrounding a string.  Helpful for passwords and usernames
let example = "                  JavaScript is neat!   ";
console.log(example);
console.log(example.trim());

// Others include:
// Repeat a string
// Replace a word
// Slice a string like an array




// ================================================================
// MATH METHODS
// ================================================================
// Find the highest number
const maxNumber = Math.max(10, 5, 3, 6, 78, 99, 20);
console.log(maxNumber);

// Find the lowest number
const minNumber = Math.min(10, 5, 3, 6, 78, 99, 20);
console.log(minNumber);

// Round a number to the nearest whole number
console.log(Math.round(3.6));

// Round DOWN to the nearest integer
console.log(Math.floor(3.9));

// Round UP to the nearest integer
console.log(Math.ceil(3.2));

// Generate a random number between zero and 1
console.log(Math.random());
// ...to change the range, multiply by a number.  For example, to bring it between 1 and 10 multiply by ten.
console.log(Math.random()*10);
//...to get rid of the decimal places, nest another math method inside.  For example, using the floor would ensure it includes the minimum of the range and also doesn't go above the given maximum limit
console.log(Math.floor(Math.random()*10));




// ==================================================================
// OTHER METHODS
// ==================================================================

// To Fixed
// ...enter how many decimal places you want.  JavaScript will automatically round to make that happen.
const price = 40.2567.toFixed(2);
console.log(price);

// Current Date
const currentDate = new Date();
console.log(currentDate);
//...If looking for a new date, the month count starts at zero.  So December is the 11th month.
const christmas = new Date(2024, 11, 25);
console.log(christmas);
