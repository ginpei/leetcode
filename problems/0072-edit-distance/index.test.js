const { minDistance } = require("./index");

describe("72. Edit Distance", () => {
  it("example 1", () => {
    expect(minDistance("horse", "ros")).toBe(3);
  });

  it("example 2", () => {
    expect(minDistance("intention", "execution")).toBe(5);
  });
});
