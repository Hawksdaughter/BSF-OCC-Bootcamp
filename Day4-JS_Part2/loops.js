//Loops provide a way to automate code



// For loop
for (let i = 1; i <= 5; i++) {
    console.log('The For loop is at number:', i);
};



//While loop
let count = 1;
while (count <= 10){
    count++;
    console.log('Hi there!', count);
};
// the outcome changes depending on how the instructions are ordered.  So, for example, if you console log the message BEFORE increasing the count, then it will only go to ten.
count = 1;
while (count <= 10){
    console.log('Hi there!', count);
    count++;
};




//Do-While loop
let number = 1;
do {
    console.log('The Do-While count is:', number);
    number ++;
}
while(number <= 5);
