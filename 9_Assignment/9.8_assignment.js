// Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

// Function to get an array of object keys
function getObjectKeys(obj) {
    return Object.keys(obj);
}

// Example object
const person = {
    name: "Anshika",
    age: 22,
    occupation: "Full Stack Developer",
    country: "India"
};

// Call the function and log the result
console.log(getObjectKeys(person)); 
// Output: ["name", "age", "occupation", "country"]
