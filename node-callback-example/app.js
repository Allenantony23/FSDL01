const fs = require('fs');

// Function to read a file asynchronously using a callback
function readFile(filePath, callback) {
    console.log('Reading file...');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return callback(err);
        }
        console.log('File read successfully');
        callback(null, data);
    });
}

// Function to process the file data using a callback
function processFileData(data, callback) {
    console.log('Processing file data...');
    const processedData = data.toUpperCase(); // Example processing: convert to uppercase
    callback(null, processedData);
}

// Function to log the processed data
function logProcessedData(err, data) {
    if (err) {
        console.error('Error processing file data:', err);
        return;
    }
    console.log('Processed file content:', data);
}

// Main function to execute the operations in sequence using callbacks
function main() {
    readFile('data.txt', (err, data) => {
        if (err) {
            console.error('Error in main:', err);
            return;
        }
        processFileData(data, (err, processedData) => {
            if (err) {
                console.error('Error in main:', err);
                return;
            }
            logProcessedData(null, processedData);
        });
    });
}

// Run the main function
main();