const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Reloved after 3s");
  }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Reloved after 1s");
  }, 1000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Reloved after 2s");
  }, 2000);
});

// Promise.all([promise1, promise2, promise3])
//   .then((res) => console.log(res))
//   .catch((res) => console.log(res));

function myPromiseAll(promises = []) {
  return new Promise((res, rej) => {
    let result = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((resolve) => {
          result.push(resolve);
          if (result.length === promises.length) res(result);
        })
        .catch((err) => {
          rej(err);
        });
    }
  });
}

myPromiseAll([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((er) => console.log(er));
