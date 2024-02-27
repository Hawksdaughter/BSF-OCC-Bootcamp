let characters = ['Bilbo', 'Frodo', 'Aragorn', 'Pippin', 'Gandalf'];

console.log('The first character is:', characters[0]);
console.log('The second character is:', characters[1]);
console.log('The very last character in the list is:', characters[characters.length-1]);



// Modifying array elements
characters.push('Arwen');
console.log('A new element has been added to the list!  The new array is:', characters);
console.log('The very last character in the list is now:', characters[characters.length-1]);

characters.pop();
console.log('New array:', characters);
console.log('The very last character was removed!  Therefore, the very last characer is back to being: ', characters[characters.length-1]);

characters[2] = 'Arwen';
console.log('We swapped out the third element in the list, Aragon, to turn it into Arwen instead');
console.log('New array:', characters);




// Array Iteration
for (let i = 0; i < characters.length; i ++) {
    console.log('Character #', i+1, characters[i]);
}
//for each element, run a function that results in the element being shown:
characters.forEach(function(theCharacter) {
    console.log(theCharacter)
});



// Array Methods
// indexOf:    characters.indexOf('Pippin')
// includes:   characters.includes('Aragorn')
// join:       characters.join('-^-')
//slice:        newVariable = characters.slice(starting index, end BEFORE which index)
//splice:       anotherNewVariable = characters.splice(which index to start at, how many to remove)

console.log(characters.indexOf('Pippin'));

console.log('Does the array include a value of Aragorn? ', characters.includes('Aragorn'));

console.log('Our joined array is: ', characters.join('-^-'));
console.log('Another joined array is: ', characters.join(' || '));
console.log('Another joined array is: ', characters.join(' _!!!!!!_'));

let slicedArray = characters.slice(1, 4);
console.log('The sliced array is: ', slicedArray);
console.log('But they have NOT been removed from our array yet!  See? ', characters);

let removedElements = characters.splice(0, 2);
console.log('The two removed elements are: ', removedElements);
console.log('NOW the contents of the array is only: ', characters);

// slice hides and splice puts it in a pocket
