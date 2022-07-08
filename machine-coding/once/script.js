var x = 1;

function once(callback) {
  let alreadyRunned = false;
  return (sd = () => {
    if (alreadyRunned) return;
    alreadyRunned = true;
    return callback();
  });
}

var increment = once(function cb() {
  debugger;
  x++;
});

increment();
increment();

console.log(x);

// settimeouts
// let b = 5;

// function abc() {
//   let a = 0;
//   return new Promise(function promise(res, rej) {
//     setTimeout(function timer() {
//       console.log("timerId", a, b);
//       res("Promise resolved");
//     }, 2000);
//   });
// }

// abc().then((callback = (val) => console.log(val)));
