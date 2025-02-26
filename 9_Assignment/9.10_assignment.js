// Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to calculate the sum using reduce()
function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Call the function and log the result
console.log(sumArray(numbers)); // Output: 15
