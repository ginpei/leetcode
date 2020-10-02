const { maxProfit } = require("./index");

describe("121. Best Time to Buy and Sell Stock", () => {
  it("example 1", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it("example 2", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it("empty", () => {
    expect(maxProfit([])).toBe(0);
  });
});
