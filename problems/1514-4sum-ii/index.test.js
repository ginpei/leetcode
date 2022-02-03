const { fourSumCount } = require("./index");

describe("1277. Count Square Submatrices with All Ones", () => {
  it("example 1", () => {
    const input = [
      [1, 2],
      [-2, -1],
      [-1, 2],
      [0, 2],
    ];
    expect(fourSumCount(input[0], input[1], input[2], input[3])).toBe(2);
  });

  it("example 2", () => {
    const input = [[0], [0], [0], [0]];
    expect(fourSumCount(input[0], input[1], input[2], input[3])).toBe(1);
  });
});
