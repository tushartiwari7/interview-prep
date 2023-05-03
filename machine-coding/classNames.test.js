const classNames = require("./classNames");

test("classnames", () => {
  expect(classNames("foo", "bar")).toBe("foo bar");
});

test("classnames 2", () => {
  expect(classNames({ foo: true, bar: true })).toBe("foo bar");
});

test("classnames 3", () => {
  expect(classNames("a", ["b", { c: true, d: false }])).toBe("a b c");
});
