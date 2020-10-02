const { rangeBitwiseAnd } = require("./index");

describe("201. Bitwise AND of Numbers Range", () => {
  it("example 1", () => {
    expect(rangeBitwiseAnd(5, 7)).toBe(4);
  });

  it("example 2", () => {
    expect(rangeBitwiseAnd(0, 1)).toBe(0);
  });

  it("0-0", () => {
    expect(rangeBitwiseAnd(0, 0)).toBe(0);
  });

  it("between digits", () => {
    expect(rangeBitwiseAnd(1, 2)).toBe(0);
  });

  it("zero range", () => {
    expect(rangeBitwiseAnd(7, 7)).toBe(7);
  });

  it("max range", () => {
    expect(rangeBitwiseAnd(0, 2147483647)).toBe(0);
  });

  it("range in large numbers", () => {
    expect(rangeBitwiseAnd(2 ** 30 + 2 ** 10, 2 ** 30 + 2 ** 15)).toBe(
      1073741824
    );
  });
});
