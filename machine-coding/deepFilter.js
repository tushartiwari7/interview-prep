const deepFilter = (object, filterFn) => {
  const filtered = {};
  for (const key in object) {
    if (typeof object[key] === "object") {
      const subFiltered = deepFilter(object[key], filterFn);
      if (subFiltered) filtered[key] = subFiltered;
    } else if (filterFn(object[key])) filtered[key] = object[key];
  }
  const set = Object.keys(filtered);
  return set.length ? filtered : null;
};

module.exports = deepFilter;
