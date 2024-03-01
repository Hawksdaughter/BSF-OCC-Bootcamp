const getData = (callback) => {
    setTimeout(() => {
        const dataMethod = 'This is the data sent to the front-end.';
        callback(dataMethod);
    }, 6000);          //That is a delay of 6 seconds
};


const processData = (dataMethod) => {
    console.log('The data has been processed.', dataMethod);
};


getData(processData);