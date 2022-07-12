function log(city, mood) {
  return `Hello My Name is ${this.firstName} and I, am ${this.age} yrs old living in ${city}. I am feeling ${mood}`;
}

Function.prototype.myBind = function myBind(newThis, ...args) {
  return (...callBackArgs) => {
    return this.apply(newThis, [...args, ...callBackArgs]);
  };
};

const me = { firstName: "Tushar", age: 22 };

// const logTushar = log.bind(me);
const logTushar = log.myBind(me, "Chandigarh");

console.log(logTushar("Happy"));
