// Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

function modifyArray(arr, newElement) {
    arr.push(newElement); // Add new element to the end
    arr.pop(); // Remove the last element
    return arr; // Return the modified array
}

// Example:
const numbers = [1, 2, 3, 4];
console.log(modifyArray(numbers, 5)); // Output: [1, 2, 3, 4]
