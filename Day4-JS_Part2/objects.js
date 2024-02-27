// Objects have characteristics/properties
// the properties are listed in key:value format
// the properties can include a method

const aPerson = {
    name: 'Jane',
    birthyear: 1930,
    gender: 'female',
    hobbies: ['reading', 'writing', 'teasing Dick and Spot'],

    greetUs: function (){
        console.log('Hello! My name is', this.name)
    }
}

console.log(aPerson.name, 'has a birthyear of', aPerson.birthyear);


// aPerson can greet us, but this has not been called on yet.  So let's do that now.

aPerson.greetUs();



// To change a property:
aPerson.name = 'Jane Enaj'

console.log('Now the name has been changed to', aPerson.name);



// To add a new property:
aPerson.birthplace = 'Chicago';

console.log('We now know that Jane Enaj was born in', aPerson.birthplace);


// To add a new method into the list of characteristics, let's use function literals:
aPerson.introduce = function () {
    console.log(`I am ${this.name}.  I was born in ${this.birthyear} in ${this.birthplace}.`)
}

//  Calling it so that it will run:
aPerson.introduce();



// We can nest objects:
const address = {
    street: '123 Main Street',
    city: 'San Francisco',
    country: 'USA'
};
aPerson.homeAddress = address;

console.log(aPerson.name, 'currently lives in', aPerson.homeAddress.city);




//Object Destructuring:
const { name , birthplace, birthyear } = aPerson;

console.log(name);