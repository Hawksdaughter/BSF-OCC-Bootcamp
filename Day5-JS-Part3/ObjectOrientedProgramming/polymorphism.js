class Animal {
    makeSound() {
        return 'An animal in the distance made a noise.'
    };
};

class Dog extends Animal {
    makeSound() {
        return super.makeSound() + '  It sounded like barking.'
    };
};

class Cat  extends Animal {
    makeSound() {
        return super.makeSound() + '  It sounded like "Meeeeeoow"'
    };
};

const randomDog = new Dog();
console.log(randomDog.makeSound());

const randomCat = new Cat();
console.log(randomCat.makeSound());