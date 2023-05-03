function classNames(...classes) {
  // write your code here
  return classes.reduce((acc, claas) => {
    if (!Boolean(claas)) return acc;
    let suffix = acc ? " " : "";
    if (Array.isArray(claas)) return acc + suffix + classNames(...claas);

    if (typeof claas === "object") {
      for (var key in claas) {
        if (claas[key] === true) {
          acc += suffix + key;
          suffix = " ";
        }
      }
      return acc;
    }
    return acc + suffix + claas;
  }, "");
}

module.exports = classNames;
