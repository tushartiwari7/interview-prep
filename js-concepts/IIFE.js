// # IIFE stands for Immediately Invoked Function Execution

// ## when to use:

// - when we need to invoke the function same time it’s declared.
// - Data Hiding: All the variables declared inside a IIFE cannot be accessed outside the IIFE
// - when we need to invoke the function only once.

// EX 1
// (() => {
//   var age = 28;
//   console.log(age);
// })();

// console.log(age); // age is not defined

// EX 2: passing as parameters to func inside IIFE
var user = "Tushar";

// ((name) => {
//   console.log(name);
// })(user);

// EX 3: multiple functions inside IIFE
((function abc(name = "raju") {
  console.log("name", name);
},
(age = 28) => {
  console.log("age", age);
  debugger;
})("user"));
//
