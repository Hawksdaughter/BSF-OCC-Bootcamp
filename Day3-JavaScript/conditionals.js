// If
let age = 18;
if (age >= 18){
    console.log('You can vote for the U.S. president!');
};



// Else
age = 16;
if (age >= 18){
    console.log('You can vote!');
}
else {
    console.log('No voting for you!');
};



// If-Else
let temperature = 25;
if (temperature < 0) {
    console.log('It is freezing');
}
else if (temperature >= 0 && temperature < 20){
    console.log('The temperature is between zero and 19');
}
else if (temperature >= 20 && temperature < 50){
    console.log('The temperature is between 20 and 49');
}
else {
    console.log('The temperature is 50 degrees or warmer');
};



// Switch
let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('Today is Monday!');
    break;
    case 'Friday':
        console.log('YEAY!!!!  FRIDAY!!!!');
    break;
    default:
        console.log('Today is neither Monday nor Friday');
    break;
}