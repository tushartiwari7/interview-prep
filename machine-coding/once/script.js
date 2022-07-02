// //
// function once(callback) {
//   let alreadyRunned = false;
//   return () => {
//     if (alreadyRunned) return;
//     alreadyRunned = true;
//     return callback();
//   };
// }

// var increment = once(function () {
//   console.log("Function running");
// });

// increment();
// increment();

// // CLOSURES

// function close() {
//   let a = 5;
//   let b = 50;
//   return () => {
//     console.log(a);
//   };
// }

// const closed = close();
// closed();
// make an input that takes string, show the reversed  string on the UI plus when the user hovers the output the string contains vowel letters should turned  red.

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(() => console.log(i), 1000 * i);
//   }
//   inner(i);
// }

// [1,2,3,4,5].find()

Array.prototype.myFind = function (callback) {
  for (el of this) {
    if (callback(el)) return el;
  }
  return -1;
};

const output = [1, 2, 3, 4, 5].myFind((num) => num === 6);
console.log(output);
