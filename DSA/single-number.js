/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 */

var singleNum = (nums) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    obj[element] = (obj[element] ?? 0) + 1;
  }
  for (const key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
  // outsideLoop: for (let i = 0; i < nums.length; i++) {
  //   const outside = nums[i];
  //   for (let j = 0; j < nums.length; j++) {
  //     const inside = nums[j];
  //     if (i == j) continue;
  //     if (outside === inside) {
  //       continue outsideLoop;
  //     }
  //   }
  //   return nums[i];
  // }
};

// TESTS
console.log(singleNum([2, 2, 1]));
console.log(singleNum([4, 1, 2, 2, 1]));
console.log(singleNum([1]));
