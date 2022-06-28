function MyLocalStorage() {
  const getItem = (key) => {
    return this[key];
  };

  const setItem = (key, value, timeLimit = 1000) => {
    this[key] = value;
    setTimeout(() => {
      delete this[key];
    }, timeLimit);
  };

  this.get = getItem;
  this.set = setItem;
}

const localStorageInstance = new MyLocalStorage();
localStorageInstance.set("hello", "javascript", 1000);

//testing
setTimeout(() => {
  console.log(localStorageInstance.get("hello"));
}, 500);

setTimeout(() => {
  console.log(localStorageInstance.get("hello"));
}, 1500);
