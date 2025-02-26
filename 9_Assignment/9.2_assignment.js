// Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.


// Create an array called fruits
const fruits = ["Strawberry", "Mango", "Cherry", "kiwi", "Orange"];

// Function to return the second fruit in the array
function getSecondFruit(arr) {
    return arr[1]; // Index 1 represents the second element
}

console.log(getSecondFruit(fruits)); // Output: Mango