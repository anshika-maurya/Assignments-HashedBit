function repeatedDigitSum(num) {
    // Continue summing digits until a single digit is obtained
    while (num >= 10) {
      let sum = 0;
      
      // Sum the digits of the number
      while (num > 0) {
        sum += num % 10;  // Add the last digit to the sum
        num = Math.floor(num / 10);  // Remove the last digit
      }
      
      // Update the num to the new sum of digits
      num = sum;
    }
    
    return num;  // Return the final single digit
  }
  
  // Example
  let number = 456;
  let result = repeatedDigitSum(number);
  console.log(result);  // Output: 6
  