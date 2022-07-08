"use strict";
var nums1 = [1, 2, 3, 4];
var squared1 = nums1.map(function (x) {
  console.log(this);
  return x * x;
});

var nums2 = new Array(4);
nums2[0] = 1;
nums2[2] = 3;

var squared2 = nums2.map((x) => x * x);
