const { maxProfit } = require("./index");

describe("122. Best Time to Buy and Sell Stock II", () => {
  it("example 1", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  });

  it("example 2", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  it("example 3", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it("empty", () => {
    expect(maxProfit([])).toBe(0);
  });
});
