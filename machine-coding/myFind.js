Array.prototype.myFind = function (callback) {
  for (el of this) {
    if (callback(el)) return el;
  }
  return -1;
};

const output = [1, 2, 3, 4, 5].myFind((num) => num === 6);
console.log(output);
