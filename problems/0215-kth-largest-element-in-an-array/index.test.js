const { findKthLargest } = require("./index");

describe("215. Kth Largest Element in an Array", () => {
  it("example 1", () => {
    const result = findKthLargest([3, 2, 1, 5, 6, 4], 2);
    expect(result).toBe(5);
  });

  it("example 2", () => {
    const result = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
    expect(result).toBe(4);
  });

  it("test 1", () => {
    const arr = [
      3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7,
      8, 5, 6,
    ];
    const result = findKthLargest(arr, 2);
    expect(result).toBe(10);
  });
});
