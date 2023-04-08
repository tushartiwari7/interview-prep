/**
 * Given an integer x, return true if x is a 
palindrome
, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */

const isPalindrome = (x) => {
  const digits = [];
  while (x) {
    const digit = x % 10;
    digits.push(digit);
    x = Math.trunc(x / 10);
  }

  const mid = Math.trunc(digits.length / 2);
  console.log(digits);
  let end = digits.length - 1;
  for (let i = 0; i < mid; i++) {
    if (i > end) return false;
    if (digits[i] !== digits[end]) return false;
    end--;
  }
  return true;
};
console.log(isPalindrome(123321));
