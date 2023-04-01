// flatten the array
const arr = [
  [7, [8, 9], 10],
  [1, 2],
  [3, 4, 5],
];
const flattened = (arr) => {
  return arr.reduce((acc, miniArr) => {
    if (Array.isArray(miniArr)) {
      const flat = miniArr.reduce((miniFlat, element) => {
        if (Array.isArray(element)) return [...miniFlat, ...flattened(element)];
        return [...miniFlat, element];
      }, []);
      return [...acc, ...flat];
    } else return [...acc, miniArr];
  }, []);
};
console.log(flattened(arr));
