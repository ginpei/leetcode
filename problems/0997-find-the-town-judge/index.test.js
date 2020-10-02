const { findJudge } = require("./index");

describe("997. Find the Town Judge", () => {
  it("example 1", () => {
    expect(findJudge(2, [[1, 2]])).toBe(2);
  });

  it("example 2", () => {
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
      ])
    ).toBe(3);
  });

  it("example 3", () => {
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
        [3, 1],
      ])
    ).toBe(-1);
  });

  it("example 4", () => {
    expect(
      findJudge(3, [
        [1, 2],
        [2, 3],
      ])
    ).toBe(-1);
  });

  it("example 5", () => {
    expect(
      findJudge(4, [
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [4, 3],
      ])
    ).toBe(3);
  });

  it("Nobody else", () => {
    expect(findJudge(1, [])).toBe(1);
  });
});
