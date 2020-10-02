const { convertToTitle } = require(".");

describe("168. Excel Sheet Column Title", () => {
  it("example 1", () => {
    expect(convertToTitle(1)).toBe("A");
  });

  it("the last 1 digit", () => {
    expect(convertToTitle(26)).toBe("Z");
  });

  it("the first 2 digits", () => {
    expect(convertToTitle(27)).toBe("AA");
  });

  it("example 2", () => {
    expect(convertToTitle(28)).toBe("AB");
  });

  it("example 3", () => {
    expect(convertToTitle(701)).toBe("ZY");
  });

  it("the last 2 digits", () => {
    expect(convertToTitle(702)).toBe("ZZ");
  });

  it("the first 3 digits", () => {
    expect(convertToTitle(703)).toBe("AAA");
  });
});
