// Implement clearAllTimeout in JavaScript | Facebook Interview Question
// setTimeout is a commonly used method in frontend development to set a timer that executes a function or specified piece of code once the timer expires.

// The aim of this question is to implement a clearAllTimeout method that clears all the active timers set by setTimeout.

// MY ANSWER

(function (globalObj) {
  let timeouts = [];
  const originalSetTimeout = globalObj.setTimeout;

  globalObj.setTimeout = function (callback, delay) {
    const timeOutId = originalSetTimeout(callback, delay);
    timeouts = [...timeouts, timeOutId];
    return timeOutId;
  };

  globalObj.clearAllTimeOut = function () {
    timeouts.forEach((id) => clearTimeout(id));
    timeouts = [];
  };
})(window);

setTimeout(() => {
  console.log("One");
}, 4000);

setTimeout(() => {
  console.log("Two");
}, 5000);

setTimeout(() => {
  console.log("Three");
}, 6000);

setTimeout(() => {
  console.log("Four");
}, 7000);

setTimeout(() => {
  console.log("clearAll");
  clearAllTimeOut();
}, 5000);

// removes all the timers set above
