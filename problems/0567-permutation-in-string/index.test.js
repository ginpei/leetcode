const { checkInclusion } = require("./index");

describe("567. Permutation in String", () => {
  it("example 1", () => {
    expect(checkInclusion("ab", "eidbaooo")).toBe(true);
  });

  it("example 2", () => {
    expect(checkInclusion("ab", "eidboaoo")).toBe(false);
  });
});
