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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Step 2 completed...');
            console.log('⏳');
            resolve();
        }, 2000);
    });
};


const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Step 3 completed!  The request is finished! Huzzah!!!');
            resolve();
        }, 2000);
    });
};


const performSteps = async () => {
    try {
        await step1();
        await step2();
        await step3();
        console.log('Process complete');

    } catch (error) {
        console.log('☹️ ☹️ ☹️ ☹️ An error occured:', error);
    };
};



performSteps();
