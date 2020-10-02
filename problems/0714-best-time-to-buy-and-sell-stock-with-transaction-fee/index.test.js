const { maxProfit } = require("./index");

describe("714. Best Time to Buy and Sell Stock with Transaction Fee", () => {
  it("example 1", () => {
    expect(maxProfit([1, 3, 2, 8, 4, 9], 2)).toBe(8);
  });

  it("wa 1", () => {
    expect(maxProfit([1, 4, 6, 2, 8, 3, 10, 14], 3)).toBe(13);
  });

  it("wa 2: not less than fee", () => {
    expect(maxProfit([1, 3, 7, 5, 10, 3], 3)).toBe(6);
  });

  it("wa 3: less than fee", () => {
    expect(maxProfit([4, 5, 2, 4, 3, 3, 1, 2, 5, 4], 1)).toBe(4);
  });

  it("wa 4: second is less than the first", () => {
    expect(maxProfit([2, 1, 4, 4, 2, 3, 2, 5, 1, 2], 1)).toBe(4);
  });

  it("wa 5", () => {
    expect(maxProfit([2, 2, 1, 1, 5, 5, 3, 1, 5, 4], 2)).toBe(4);
  });

  it("goes through if gap is less than fee", () => {
    expect(maxProfit([1, 5, 4, 9], 2)).toBe(6);
  });

  it("goes through if gap is equal to fee", () => {
    expect(maxProfit([1, 5, 3, 9], 2)).toBe(6);
  });

  it("sells once if gap is more than fee", () => {
    expect(maxProfit([1, 5, 2, 9], 2)).toBe(7);
  });
});
