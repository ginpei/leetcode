const { findComplement } = require("./index");

describe("476. Number Complement", () => {
  it("example 1", () => {
    expect(findComplement(5)).toBe(2);
  });

  it("example 2", () => {
    expect(findComplement(1)).toBe(0);
  });

  it("filled with 1", () => {
    expect(findComplement(7)).toBe(0);
  });
});
