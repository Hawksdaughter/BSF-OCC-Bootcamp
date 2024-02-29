// Parent class:
class Animal {
    constructor(petName) {
        this.petName = petName;
    }
    eatMethod() {
        console.log(`${this.petName} is eating now`);
    };
};

// A child class:
class Dog extends Animal {
    bark() {
        console.log("Woof!  Woof!");
    };
};

class Cat extends Animal {
    vocalize() {
        console.log("Meow!");
    };
};

const myDog = new Dog("Gemini");
myDog.bark();

myDog.eatMethod();

const myCat = new Cat("Sylvester");
myCat.eatMethod();
myCat.vocalize();