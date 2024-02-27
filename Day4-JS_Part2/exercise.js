function checkEvenOdd(num) {
    if (num%2 == 0) {
        return 'The entered number is even'
    }
    else {
        return 'The entered number was odd'
    };
};

const num1 = 4;
console.log ('The number entered was', num1, checkEvenOdd(num1));

const num2 = 3;
console.log ('The number entered was', num2, checkEvenOdd(num2));
