const { frequencySort } = require("./index");

describe("451. Sort Characters By Frequency", () => {
  it("example 1", () => {
    expect(frequencySort("tree")).toBe("eetr");
  });

  it("example 2", () => {
    expect(frequencySort("cccaaa")).toBe("cccaaa");
  });

  it("example 3", () => {
    expect(frequencySort("Aabb")).toBe("bbAa");
  });
});
