const { numJewelsInStones } = require("./index");

describe("771. Jewels and Stones", () => {
  it("example 1", () => {
    expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
  });

  it("example 2", () => {
    expect(numJewelsInStones("z", "ZZ")).toBe(0);
  });
});
