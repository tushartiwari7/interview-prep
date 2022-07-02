// implement a stopwatch with stop, start, reset features.

function MyLocalStorage() {
  debugger;
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

const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
let timerId;
const x = 5;
const startTimer = () => {
  if (timerId) return;
  timerId = setInterval(() => {
    outputEl.innerText = +outputEl.innerText + 1;
  }, 1000);
};

const stopTimer = () => {
  console.log(timerId);
  clearInterval(timerId);
  timerId = null;
};

const resetTimer = () => {
  stopTimer();
  outputEl.innerText = "00";
};

inputEl.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "START_TIMER":
      startTimer(e);
      break;

    case "STOP_TIMER":
      stopTimer();
      break;

    case "RESET_TIMER":
      resetTimer();
      break;

    default:
      break;
  }
});
