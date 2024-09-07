// Create a function to check if a number is even or odd.

// Import the readline module
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('Enter the number: ', (input) => {
    // Parse the input to an integer
    const num = parseInt(input);

    // Check if the input is a valid number
    if (isNaN(num)) {
        console.log('That is not a valid number.');
    } else {
            if (num%2==0) {
                console.log("the number is even ");
                
            }
            else{
                console.log("the number is odd ");
            }
    }
    // Close the readline interface
    rl.close();
});
