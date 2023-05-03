const { default: expect } = require("expect");
const deepFilter = require("./deepFilter");

test("deepfilter test 1", () => {
  const obj = {
    a: 54,
    b: 37,
    c: "ace",
    d: 0,
    e: "",
  };

  const filterFn = (element) => {
    return Boolean(element);
  };

  expect(deepFilter(obj, filterFn)).toStrictEqual({
    a: 54,
    b: 37,
    c: "ace",
  });
});

test("deepfilter test 2", () => {
  const obj = {
    a: 1,
    b: {
      c: "Hello World",
      d: 2,
      e: {
        f: {
          g: -4,
        },
      },
      h: "Good Night Moon",
    },
  };

  const filterFn = (element) => {
    return typeof element === "string";
  };

  expect(deepFilter(obj, filterFn)).toStrictEqual({
    b: { c: "Hello World", h: "Good Night Moon" },
  });
});
