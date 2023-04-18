/**
 * Given a compressed string, return its original form.

For example.

uncompress('3(ab)') // 'ababab'
uncompress('3(ab2(c))') // 'abccabccabcc'
a number k followed by a pair of parenthesis, meaning to repeat the substring inside the parenthesis by k times, k is positive integer.
inputs are guaranteed to be valid input like above example, there is no numerical digit in original form.
 */

/**
 * @param {string} str
 * @returns {string}
 */

const repeatStr = (repeat, str) => {
  let repeated = "";
  for (let i = 0; i < repeat; i++) {
    repeated += str;
  }
  console.log("repeatStr", repeat, str, repeated);
  return repeated;
};

// naive code
function uncompress(str) {
  // your code here
  let uncompressed = "";
  let start = 0;
  let repeat = 0;
  while (start < str.length) {
    // ifstr[i] is num
    if (str[start] > 0 && str[start] <= 9) {
      // this char is a num
      let end = str.length - 1;
      repeat = str[start];

      while (str[start + 1] !== "(") {
        repeat += str[start + 1];
        start++;
      }

      repeat = Number(repeat);

      let subStr = "";
      while (!subStr && end > start) {
        if (str[end] === ")") subStr = str.slice(start + 2, end);
        start = end + 1;
        end--;
      }
      const extracted = repeatStr(repeat, uncompress(subStr));
      uncompressed += extracted;
      console.log({ subStr, extracted, uncompressed, repeat });
      // start = end;
    } else {
      uncompressed += str[start];
      start++;
    }
  }
  return uncompressed;
}

// const test1 = uncompress("3(ab)");
// console.log("test1", test1);
// const test2 = uncompress("3(ab2(c))");
const tests = ["3(ab2(c))", "3(ab)", "1(BFE11(dev))", "3(B2(F1(E)))"];

tests.forEach((test) => {
  console.log("test", test, "RESULTS", uncompress(test));
});
