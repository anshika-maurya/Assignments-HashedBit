// Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

// Create an object called person
const person = {
    name: "Anshika",
    age: 22,
    occupation: "Full Stack Developer"
};

// Function to log a greeting message
function greetPerson(personObj) {
    console.log(`Hello, my name is ${personObj.name}. I am ${personObj.age} years old and work as a ${personObj.occupation}.`);
}

// Call the function
greetPerson(person);

// Output: Hello, my name is Anshika. I am 22 years old and work as a Full Stack Developer.
