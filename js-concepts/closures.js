// CLOSURES

function close() {
  let a = 5;
  let b = 50;
  return () => {
    console.log(a);
  };
}

// close return a closure that includes anonymous function aswell as the lexical scope of anonymous function i.e where the anonymous function is defined.
const closed = close();
closed();

// ! NOTE : The closure will only be created with the variables used in the returned function. i.e closure will only be created with variable `a` and not `b`.

// ! NOTE : (Garbage Collection) The variableswhich are not used in the returned function will be garbage collected and those who are used will not be garbage calculated.

// make an input that takes string, show the reversed  string on the UI plus when the user hovers the output the string contains vowel letters should turned  red.

for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(() => console.log(i), 1000 * i);
  }
  inner(i);
}
