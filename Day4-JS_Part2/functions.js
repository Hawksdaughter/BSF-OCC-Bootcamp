// Declaration:
function greetWorld() {
    console.log('Hello to the world of functions, everyone!');
};

// Call it!
greetWorld();

// It can be called on multiple times, in fact!
greetWorld();
greetWorld();
greetWorld();




functionDeclaration();
// A declaration can be hoisted to be called BEFORE being created! :)
function functionDeclaration() {
    console.log('This is the function being declared');
};




// An expression would include a variable name.  An expression needs to be called AFTER being created.  This is PREFERABLE!  Use expressions!
const functionExpression = function() {
    console.log('This is a function expression');
};

functionExpression();





// A function with a parameter:
function greetMe(name1) {
    console.log('Hi there, hello,', name1 + "!");
}

greetMe('Regel');


// A function with two parameters and a return value:
function sum(a, b) {
    console.log('The following will happen before the return')
    return a + b;
    console.log('This can NOT be run because it is after the return');
}
//return marks the end of the code block
console.log('The sum of 9 and 7 is:', sum(9, 7));