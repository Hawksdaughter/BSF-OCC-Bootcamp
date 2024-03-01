const step1 = (callback) => {
    setTimeout( () => {
        console.log('Step 1 of our operation is complete!');
        callback();
    }, 2000);                   //Delay of 2 seconds
};

const step2 = (callback) => {
    setTimeout( () => {
        console.log('Step 2 of our operation is now complete!');
        callback();
    }, 2000);                   //Delay of 2 seconds
};

const step3 = () => {
    setTimeout( () => {
        console.log('Step 3 completed.  The operation has completed!  Huzzah!!!');
        console.log('Request complete.')
    }, 1000);                  //Delay of 1 second
};



// Nested callbacks
step1( () => {
    step2( () => {
        step3();
    });
});

