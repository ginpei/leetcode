const { minSubArrayLen } = require("./index");

describe("209. Minimum Size Subarray Sum", () => {
  it("example", () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
  });

  it("WA: empty array", () => {
    expect(minSubArrayLen(100, [])).toBe(0);
  });

  it("WA: block placed at the end", () => {
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
  });

  it("block placed at the end", () => {
    expect(minSubArrayLen(4, [1, 4, 4, 1])).toBe(1);
  });

  it("WA: no match", () => {
    expect(minSubArrayLen(3, [1, 1])).toBe(0);
  });
});
