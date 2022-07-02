// You have to write your own implementation of _.groupBy.

// _.groupBy(collection, [iteratee=_.identity])
// _.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `_.property` iteratee shorthand.
// _.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }

// For more -- https://lodash.com/docs/4.17.15#groupBy

function groupBy(collection, iteratee) {
  const resp = collection.reduce((acc, val) => {
    const key = typeof iteratee === "string" ? val[iteratee] : iteratee(val);
    acc[key] = [...(acc[key] || []), val];
    return acc;
  }, {});
  return resp;
}

const ans = [
  groupBy(["one", "two", "three"], "length"),
  groupBy([6.1, 4.2, 6.3], Math.floor),
];

console.log(ans);
