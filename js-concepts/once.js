function once(callback) {
  let alreadyRunned = false;
  return () => {
    if (alreadyRunned) return;
    return callback();
  };
}

var increment = once(function () {
  console.log("Function running");
});

increment();
increment();
