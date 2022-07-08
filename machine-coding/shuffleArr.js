function shuffle(arr) {
  // write your code here(
  // generate a random number x btwin (0,arr.length-1)
  // pick arr[x] and push to output.
  // remove arr[x] from arr.
  // do it until arr becomes empty

  let output = [];
  while (arr.length) {
    const x = Math.floor(Math.random() * arr.length);
    output.push(arr[x]);
    arr.splice(x, 1); // in place algorithm so no need of decrementing
  }
  return output;
}
const res = shuffle([1, 2, 3, 4]);
console.log(res);
