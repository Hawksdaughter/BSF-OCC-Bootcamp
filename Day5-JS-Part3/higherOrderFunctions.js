function higherOrderFunction(callback) {
    console.log('This is the higher order function speaking.');
    callback();
};

function passedIntoFunction() {
    console.log('This function was passed in and is being called right now');
};

higherOrderFunction(passedIntoFunction);


// ------------------------------------------------------------------------


function anotherHigherOrderFunction(variable) {
    console.log('This is the higher order function speaking.', variable);
};

let num = 5;
let num2 = 10;

anotherHigherOrderFunction(num);
anotherHigherOrderFunction(num2);
