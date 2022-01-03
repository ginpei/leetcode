const { distributeCandies } = require("./index");

describe("575. Distribute Candies", () => {
  it("example 1", () => {
    expect(distributeCandies([1, 1, 2, 2, 3, 3])).toEqual(3);
  });

  it("example 2", () => {
    expect(distributeCandies([1, 1, 2, 3])).toEqual(2);
  });

  it("example 3", () => {
    expect(distributeCandies([6, 6, 6, 6])).toEqual(1);
  });
});
