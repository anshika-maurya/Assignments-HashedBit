// Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

// Three wAys to create variable

// #1 - var - global scoped

console.log("var");
var a = 10;
console.log(a);

a = 20;
console.log(a);

{
  var a = 30;
}
console.log(a);




// #2 - Let - braces scoped

console.log("Let");
let b = 10;
console.log(b);

// let b = 20; - Error
b = 20;
console.log(b);

{
  let ba = 40;
  console.log(ba);
}
// console.log(ba); - Error




// #3 - const - can not change , fixed value
console.log("const");

const c = 10;
console.log(c);

// c = 20; //Error
console.log(c);



// func to show difference

function scopeDemo() {
    var a = "I am var";  
    let b = "I am let";  
    const c = "I am const"; 
  
    if (true) {
      var x = "Accessible everywhere in function";
      let y = "Accessible only inside this block";
      const z = "Also accessible only inside this block";
  
      console.log(x);                       //global scoped
      console.log(y);                       //braces scoped
      console.log(z);                       //braces scoped
    }
  
    console.log(x);                         //global scoped
    
    //console.log(y);                       //error 
    //console.log(z);                       //error
  }
  
  scopeDemo();
  
