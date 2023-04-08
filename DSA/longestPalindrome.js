/**
 *
 * Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:
Input: s = "cbbd"
Output: "bb"
 */

const isPalindrome = (s) => {
  return s.split("").reverse().join("") === s;
};

var longestPalindrome = function (s) {
  const possible = [];
  for (let i = s.length; i > 1; i--) {
    // all possible contiguous strings with length i
    let iterator = 0;
    for (let j = i; j <= s.length; j++) {
      possible.push(s.slice(j - i, i + iterator));
      iterator++;
    }
  }
  for (const substr of possible) {
    if (isPalindrome(substr)) return substr;
  }
};

console.log(longestPalindrome("cbbd"));
