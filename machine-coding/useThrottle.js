const useThrottle = (delay = 300) => {
  let inThrottle = false;
  return (callback) => {
    if (!inThrottle) {
      inThrottle = true;
      setTimeout(() => {
        callback();
        inThrottle = false;
      }, delay);
    }
  };
};
const throttle = useThrottle(500);
throttle(() => console.log("First"));
throttle(() => console.log("second"));
throttle(() => console.log("third"));
setTimeout(() => {
  throttle(() => console.log("settimeout 1"));
  throttle(() => console.log("settimeout 2"));
  throttle(() => console.log("settimeout 3"));
}, 500);
