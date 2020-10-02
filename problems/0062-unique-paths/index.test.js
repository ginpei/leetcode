const { uniquePaths } = require("./index");

describe("0062 Unique Paths", () => {
  it("example 1", () => {
    expect(uniquePaths(3, 2)).toBe(3);
  });

  it("example 2", () => {
    expect(uniquePaths(7, 3)).toBe(28);
  });

  it("horizontal line", () => {
    expect(uniquePaths(1, 3)).toBe(1);
  });

  it("minimum square", () => {
    expect(uniquePaths(2, 2)).toBe(2);
  });

  it("large matrix (exceeded)", () => {
    expect(uniquePaths(51, 9)).toBe(1916797311);
  });
});
