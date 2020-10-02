const { largestSumAfterKNegations } = require("./index");

describe("1005. Maximize Sum Of Array After K Negations", () => {
  it("example 1", () => {
    expect(largestSumAfterKNegations([4, 2, 3], 1)).toBe(5);
  });

  it("example 2", () => {
    expect(largestSumAfterKNegations([3, -1, 0, 2], 3)).toBe(6);
  });

  it("example 3", () => {
    expect(largestSumAfterKNegations([2, -3, -1, 5, -4], 2)).toBe(13);
  });

  it("test 1", () => {
    expect(largestSumAfterKNegations([5, 6, 9, -3, 3], 2)).toBe(20);
  });
});
