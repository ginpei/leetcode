import { buddyStrings } from ".";

describe("859. Buddy Strings", () => {
  it("example 1", () => {
    expect(buddyStrings("ab", "ba")).toBe(true);
  });

  it("example 2", () => {
    expect(buddyStrings("ab", "ab")).toBe(false);
  });

  it("example 3", () => {
    expect(buddyStrings("aa", "aa")).toBe(true);
  });

  it("example 4", () => {
    expect(buddyStrings("aaaaaaabc", "aaaaaaacb")).toBe(true);
  });

  it("example 5", () => {
    expect(buddyStrings("", "aa")).toBe(false);
  });

  it("different letters", () => {
    expect(buddyStrings("abc", "bca")).toBe(false);
  });
});
