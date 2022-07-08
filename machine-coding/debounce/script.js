function debounce(delay) {
  let timer = null;
  return (callback) => {
    if (timer) {
      console.log("resetting previous click effect");
      clearTimeout(timer);
    }
    timer = setTimeout(() => callback(), delay);
  };
}
const debounced = debounce(1000);
document
  .getElementById("btn")
  .addEventListener("click", () =>
    debounced(() => console.log("DEbouncer function"))
  );

function useThrottle(delay) {
  let inThrottle = false;
  return (cb) => {
    if (!inThrottle) {
      //call the function
      inThrottle = true;
      setTimeout(() => {
        cb();
        inThrottle = false;
      }, delay);
      console.log("setting func call after delay");
      return;
    }
    console.log("ignoring user click");
  };
}
const broooom = useThrottle(3000);

document
  .getElementById("throttle")
  .addEventListener("click", () =>
    broooom(() => console.log("Throttled func"))
  );
