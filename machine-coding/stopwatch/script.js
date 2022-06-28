// implement a stopwatch with stop, start, reset features.

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
