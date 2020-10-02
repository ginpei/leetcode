const { maximalSquare } = require("./index");

describe("221. Maximal Square", () => {
  it("example", () => {
    expect(
      maximalSquare(
        chopIntoInput(`
      1 0 1 0 0
      1 0 1 1 1
      1 1 1 1 1
      1 0 0 1 0
    `)
      )
    ).toBe(4);
  });

  it("lack of corner", () => {
    expect(
      maximalSquare(
        chopIntoInput(`
      1 1 0
      1 1 1
      0 1 1
    `)
      )
    ).toBe(4);
  });

  it("empty", () => {
    expect(maximalSquare([])).toBe(0);
  });

  it("minimum", () => {
    expect(maximalSquare([["1"]])).toBe(1);
  });

  /**
   * @param {string} s
   * @returns {string[][]}
   */
  function chopIntoInput(s) {
    return s
      .trim()
      .split("\n")
      .map((v) => v.trim().split(" "));
  }
});
