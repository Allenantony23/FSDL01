// Define a function that takes a callback
function fetchData(callback) {
    console.log('Fetching data...');
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        console.log('Data fetched');
        callback('Sample data');
    }, 2000);
}

// Define the callback function
function processFetchedData(data) {
    console.log('Processing data...');
    console.log('Data received:', data);
}

// Call the function with the callback
fetchData(processFetchedData);