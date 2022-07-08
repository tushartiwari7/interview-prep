// create a func that takes a objand multiply its allnumeric values by two.

const num = {
  a: 3,
  b: 5,
  c: 7,
};

const multiply = (obj) => {
  for (key in obj) {
    obj[key] = obj[key] * 2;
  }
  return obj;
};

const res = multiply(num);
console.log(res);
