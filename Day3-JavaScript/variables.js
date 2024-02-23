// Variables

var teacher = "Regel";
console.log(teacher);

if(true){
    console.log(teacher);
}

//var is a global variable.  Therefore, it can be declared inside a statement and called upon later on the outside
if (true) {
    var anotherName = "Ron";
}
console.log(anotherName);

//---------------------------------------------------------------

let age = 18;
console.log(age);

let animal = "Cat";

// let is a local variable.  Therefore, you can NOT call it outside of where it was declared.

// So this will throw an error...
// if(true){
//     let anotherAnimal = "Dog"
// }
// console.log(anotherAnimal);

//  ...instead it needs to be written like this:
if(true){
    animal = "Dog";
    let anotherAnimal2 = "Horse";
    console.log(anotherAnimal2);
}


const birthyear = 1985;
console.log(birthyear);
