//Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to return a new array with each number squared
function squareNumbers(arr) {
    return arr.map(num => num * num); // Using map() to square each number
}

console.log(squareNumbers(numbers)); // Output: [1, 4, 9, 16, 25]
