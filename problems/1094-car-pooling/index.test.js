const { carPooling } = require("./index");

describe("1143. Longest Common Subsequence", () => {
  it("example 1", () => {
    const trips = [
      [2, 1, 5],
      [3, 3, 7],
    ];
    const capacity = 4;
    expect(carPooling(trips, capacity)).toBe(false);
  });

  it("example 2", () => {
    const trips = [
      [2, 1, 5],
      [3, 3, 7],
    ];
    const capacity = 5;
    expect(carPooling(trips, capacity)).toBe(true);
  });
});
