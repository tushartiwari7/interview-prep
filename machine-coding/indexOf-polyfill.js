function customIndexOf(searchElement, fromIndex = 0) {
  // write your solution here
  if (fromIndex >= this.length) return -1;
  if (fromIndex < 0) {
    fromIndex = this.length - fromIndex;
  }
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === searchElement) return i;
  }
  debugger;
  return -1;
}

Array.prototype.customIndexOf = customIndexOf;

var array = [2, 9, 9];

console.log(array.indexOf(2)); // 0
console.log(array.indexOf(7)); // -1
console.log(array.indexOf(9, 2)); // 2
console.log(array.indexOf(2, -1)); // -1
console.log(array.indexOf(2, -3)); // 0
