// reverse a Number

const reverse = (num) => {
  num = num + ""; // converts num to str
  let output = "";
  for (const char of num) output = char + output;
  return output - 0; // converts str to num
};

console.log(reverse(54321));
