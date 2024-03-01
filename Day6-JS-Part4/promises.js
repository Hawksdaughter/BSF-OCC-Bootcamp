const step1 = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('Step 1 completed...');
            console.log('⏳');
            resolve();
        }, 2000);
    });
};


const step2 = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('Step 2 completed....');
            console.log('⏳');
            resolve();
        }, 2000);
    });
};


const step3 = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('Step 3 completed! The operation is done! 🎉 Huzzah!!!');
            resolve();
        }, 2000);
    });
};



//Chaining Promises
step1().then(step2).then(step3).then( () => {
    console.log('🎊 REQUEST COMPLETE. 🥳')
    }
    ).catch( (error) => {
        console.log('☹️ ☹️ ☹️ ☹️ An error occured:', error)
});

