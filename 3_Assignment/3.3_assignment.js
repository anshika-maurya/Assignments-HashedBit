let string = "INDIA";

// Convert string to an array
let arr = string.split("");

// Use splice to insert 'ONES' at index 3
arr.splice(3, 0, "ONES");

// Convert array back to string
let output = arr.join("");

console.log(output); // Output: "INDONESIA"
