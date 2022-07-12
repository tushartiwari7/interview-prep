const arr = [1, 2, 3, 4];
console.log(
  arr.map(
    (num) =>
      new Promise((resolve) => {
        resolve(num);
      })
  )
);

arr.map((num) => console.log(num));
