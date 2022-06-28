function deduplicate(arr) {
  let uniqueMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (uniqueMap.has(arr[i])) {
      arr.splice(i, 1);
      i--;
      continue;
    }
    uniqueMap.set(arr[i], true);
  }
  return arr;
}
const ans = deduplicate([1, 2, 3, 4, 5, 1, 2, 56, 2, 1, 1, 2, 1, 32]);
console.log(ans);
// sahi kar isko bc
