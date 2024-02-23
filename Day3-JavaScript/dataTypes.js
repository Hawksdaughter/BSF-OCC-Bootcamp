//  Primitive data types:

    // Number
    let score = 58;
    console.log(score);
    console.log('The current score is...', score);
    score = 60;
    console.log('The current score is... ' + score);

    console.log('The type of data is...', typeof score);



    // String
    let playerName = 'Mario1';
    console.log('The current player...', playerName);
    console.log('The type of data is... ' + typeof playerName);
    let number = '58'
    console.log('The type of data for the variable named "number" is ALSO a', typeof number);



    // Boolean
    let isThisUserAnAdministrator = true;
    console.log('The type of data for the variable declared on line 24 is...', typeof isThisUserAnAdministrator);
    isThisUserAnAdministrator = false;
    console.log('The type of data even when changed to "false" is still a', typeof isThisUserAnAdministrator);
    
    

    // Null
        //(Null is an intentional abscence of any value)
    let car = null;
    console.log('The value of the variable car is...', car);
    console.log('The type of data declared inside of the "car" variable is an...', typeof car);



    // Undefined
        // (This is opposite of a null.  It is NOT an intentional absence of value)
    let city;
    console.log('The value of city is...', city);
    console.log('The type of data declared inside of the "city" variable is...', typeof city);