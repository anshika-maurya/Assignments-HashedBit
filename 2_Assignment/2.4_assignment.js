// 4. Function to find the sum of the products of corresponding digits:

function sumOfProducts(n1, n2) {
    let sum = 0;
    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    let length = Math.max(str1.length, str2.length);

    for (let i = 0; i < length; i++) {
        let digit1 = parseInt(str1[i] || 0, 10);
        let digit2 = parseInt(str2[i] || 0, 10);
        sum += digit1 * digit2;
    }
    return sum;
}

// Example:
console.log(sumOfProducts(6, 34));  // 24

