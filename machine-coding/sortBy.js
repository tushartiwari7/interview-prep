function sortBy(collection, property) {
  // do not remove
  "use strict";
  const newSortedArr = [...collection].sort((a, b) => {
    const targetArr = property.split(".");
    const valueToCompareA = targetArr.reduce((acc, curr) => {
      return acc[curr];
    }, a);
    const valueToCompareB = targetArr.reduce((acc, curr) => {
      return acc[curr];
    }, b);
    if (valueToCompareA === null || valueToCompareA === undefined) return 1;
    if (valueToCompareB === null || valueToCompareB === undefined) return -1;

    return valueToCompareA - valueToCompareB;
  });
  return newSortedArr;
  // write your solution below
}

const arrayOne = [{ a: 1 }, { a: 3 }, { a: 2 }];

// expected output: [{a: 1}, {a: 2}, {a: 3}];
console.log(sortBy(arrayOne, "a"));
const arrayTwo = [
  { a: 1, b: "z" },
  { a: 2, b: "y" },
  { a: 1, b: "x" },
  { a: 2, b: "w" },
];

// expected output: [{a: 1, b: 'z'}, {a: 1, b: 'x'}, {a: 2, b: 'y'}, {a: 2, b: 'w'}];
console.log(sortBy(arrayTwo, "a"));
const arrayThree = [
  { a: 1, b: { c: 4 } },
  { a: 2, b: { c: 2 } },
  { a: 3, b: { c: 1 } },
  { a: 4, b: { c: 0 } },
];

// expected output: [{"a":4,"b":{"c":0}},{"a":3,"b":{"c":1}},{"a":2,"b":{"c":2}},{"a":1,"b":{"c":4}}]
console.log(sortBy(arrayThree, "b.c"));

console.log(
  sortBy(
    [
      { a: 2, b: { c: 6 } },
      { a: 3, b: { c: null } },
      { a: 1, b: { d: 4 } },
    ],
    "b.d"
  )
);

// [
//   { a: 2, b: { c: 6 } },
//   { a: 3, b: { c: null } },
//   { a: 1, b: { d: 4 } },
// ][
//   ({ a: 3, b: { c: null } },
//   { a: 1, b: { c: 3 } },
//   { a: 2, b: { c: 6 } },
//   { a: 1, b: { d: 4 } })
// ];
