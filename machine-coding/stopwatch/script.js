// implement a stopwatch with stop, start, reset features.

class MyLocalStorage {
  constructor() {
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
}

const localStorageInstance = new MyLocalStorage();

localStorageInstance.get = "de";

const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
let timerId;
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

function test(a, b) {
  const local = 4;
  let loc = 66;
  var c =
    "constructor  constructor public  constructor public constructor public constru";
  debugger;
}
test(1, "fer");
