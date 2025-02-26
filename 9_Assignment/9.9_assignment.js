// Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.

// Function to merge two objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

// Example objects
const objA = { name: "Anshika", age: 22 };
const objB = { occupation: "Full Stack Developer", country: "India" };

// Call the function and log the result
console.log(mergeObjects(objA, objB)); 
// Output: { name: 'Anshika', age: 22, occupation: 'Full Stack Developer', country: 'India' }
