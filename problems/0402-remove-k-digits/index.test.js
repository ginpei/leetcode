const { removeKdigits } = require("./index");

describe("402. Remove K Digits", () => {
  it("example 1", () => {
    expect(removeKdigits("1432219", 3)).toBe("1219");
  });

  it("example 2", () => {
    expect(removeKdigits("10200", 1)).toBe("200");
  });

  it("example 3", () => {
    expect(removeKdigits("10", 2)).toBe("0");
  });

  it("not continuous", () => {
    expect(removeKdigits("919", 2)).toBe("1");
  });
});
