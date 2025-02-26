// 3. Function to calculate tax based on salary using a switch statement:

function findTax(salary) {
  let tax = 0;
  switch (true) {
    case (salary > 1500000):
      tax = salary * 0.30;
      break;
    case (salary > 1000000):
      tax = salary * 0.20;
      break;
    case (salary > 500000):
      tax = salary * 0.10;
      break;
    case (salary > 0):
      tax = 0; // No tax for salary <= 500000
      break;
    default:
      tax = 'Invalid salary amount';
      }
      return tax;
    }
    
    // Example:
    console.log(findTax(350000));  // 0 (No tax)
    console.log(findTax(600000));  // 60000 (10% of 600000)
    console.log(findTax(1200000)); // 240000 (20% of 1200000)
    console.log(findTax(2000000)); // 600000 (30% of 2000000)
