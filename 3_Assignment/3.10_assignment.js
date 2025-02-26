function reverseString(str) {
    // Convert string to an array, reverse the array, and then join the array back into a string
    return str.split('').reverse().join('');
  }
  
  // Example 
  let input = "Hello";
  let result = reverseString(input);
  console.log(result);  // Output: 'olleH'
  
  