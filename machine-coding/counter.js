// How do you implement the following code snippet? [Property Access Increment]

// const counter = {
//   value: 0,
// };

// What modifications would you make to the above snippet / counter object so that output of the following expression would be 1 2 3.

const counter = {
  count: 0,
  get value() {
    return ++this.count;
  },
};

console.log(counter.value, counter.value, counter.value);
