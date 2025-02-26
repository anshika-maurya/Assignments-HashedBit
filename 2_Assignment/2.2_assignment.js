
// 2. Function to add, subtract, multiply, and divide two numbers using a switch statement:

function calculate(num1, num2, operation) {
  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = 'Cannot divide by zero';
      }
      break;
    default:
      result = 'Invalid operation';
  }
  return result;
}

// Example:
console.log(calculate(6, 5, 'add'));       // 11
console.log(calculate(20, 7, 'subtract'));  // 13
console.log(calculate(8, 9, 'multiply'));  // 72
console.log(calculate(12, 3, 'divide'));    // 4
