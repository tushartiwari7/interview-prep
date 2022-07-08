var nums1 = [1, 2, 3, 4];
var squared1 = nums1.map((x) => x * x);

var nums2 = new Array(4);
nums2 = nums2.map((x, i) => i + 1);
var squared2 = nums2.map((x) => x * x);

console.log(squared1, squared2);
