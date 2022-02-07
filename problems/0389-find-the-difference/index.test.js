const { findTheDifference } = require("./index");

describe("392. Is Subsequence", () => {
  it("example 1", () => {
    expect(findTheDifference("abcd", "abcde")).toBe("e");
  });

  it("example 2", () => {
    expect(findTheDifference("", "y")).toBe("y");
  });
});
