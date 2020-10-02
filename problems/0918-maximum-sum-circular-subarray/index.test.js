const { maxSubarraySumCircular } = require("./index");

describe("918. Maximum Sum Circular Subarray", () => {
  it("example 1", () => {
    expect(maxSubarraySumCircular([1, -2, 3, -2])).toBe(3);
  });

  it("example 2", () => {
    expect(maxSubarraySumCircular([5, -3, 5])).toBe(10);
  });

  it("example 3", () => {
    expect(maxSubarraySumCircular([3, -1, 2, -1])).toBe(4);
  });

  it("example 4", () => {
    expect(maxSubarraySumCircular([3, -2, 2, -3])).toBe(3);
  });

  it("example 5", () => {
    expect(maxSubarraySumCircular([-2, -3, -1])).toBe(-1);
  });
});
