const { default: expect } = require("expect");
const calPoints = require("./ops");

test("evaluate operation", () => {
  expect(calPoints(["5", "2", "C", "D", "+"])).toBe(30);
  expect(calPoints([["1"]])).toBe(1);
});
