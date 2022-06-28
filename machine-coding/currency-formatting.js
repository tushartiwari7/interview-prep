function format(n) {
  const length = (n + "").length;
  if (length <= 3) return n;
  let startFrom = length % 3 ? length % 3 : 3;
  const formatted = (n + "").split("");
  while (startFrom < length) {
    formatted.splice(startFrom, 0, ",");
    startFrom += 4;
  }
  return formatted.join("");
}

const responseOne = format(123456789);

console.log(responseOne);

// 123,456,789

const responseTwo = format(123);
// 123

let saiba = {
  name: "Vegeta",
  chiBlasts: {
    low: "Big bang attack",
    med: "Gallic gun",
    high: "Final flash",
  },
};

let anotherSaiba = { ...saiba };
anotherSaiba.name = "Goku";
anotherSaiba.chiBlasts.high = "Spirit Bomb";

let sonOfSaiba = Object.assign({}, saiba);
sonOfSaiba.name = "Trunks";
sonOfSaiba.chiBlasts.high = "Finish Buster";

let sonOfAnotherSaiba = JSON.parse(JSON.stringify(anotherSaiba));
sonOfAnotherSaiba.name = "Gohan";
sonOfAnotherSaiba.chiBlasts.high = "Kamehameha";

console.log(
  saiba.name,
  anotherSaiba.name,
  sonOfSaiba.name,
  sonOfAnotherSaiba.name
);
console.log(
  saiba.chiBlasts.high,
  anotherSaiba.chiBlasts.high,
  sonOfSaiba.chiBlasts.high,
  sonOfAnotherSaiba.chiBlasts.high
);
