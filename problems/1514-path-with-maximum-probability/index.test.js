const { maxProbability } = require("./index");
const { load } = require("./testcases/loader");

describe("1514. Path with Maximum Probability", () => {
  it("example 1", () => {
    const n = 3;
    const edges = [
      [0, 1],
      [1, 2],
      [0, 2],
    ];
    const succProb = [0.5, 0.5, 0.2];
    const start = 0;
    const end = 2;
    expect(maxProbability(n, edges, succProb, start, end)).toBe(0.25);
  });

  it("example 2", () => {
    const n = 3;
    const edges = [
      [0, 1],
      [1, 2],
      [0, 2],
    ];
    const succProb = [0.5, 0.5, 0.3];
    const start = 0;
    const end = 2;
    expect(maxProbability(n, edges, succProb, start, end)).toBe(0.3);
  });

  it("example 3 - no paths", () => {
    const n = 3;
    const edges = [[0, 1]];
    const succProb = [0.5];
    const start = 0;
    const end = 2;
    expect(maxProbability(n, edges, succProb, start, end)).toBe(0);
  });

  it("Simplest case", () => {
    const n = 2;
    const edges = [[0, 1]];
    const succProb = [0.5];
    const start = 0;
    const end = 1;
    expect(maxProbability(n, edges, succProb, start, end)).toBe(0.5);
  });

  it("Fork and merge", () => {
    /*
     *   (0)
     *   /|\
     *  / | \
     * 1  2--3
     *  \ | /
     *   \|/
     *   (4)
     */

    const n = 5;
    const edges = [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 3],
      [1, 4],
      [2, 4],
      [3, 4],
    ];
    const succProb = [0, 0, 1, 1, 0, 0, 1];
    const start = 0;
    const end = 4;
    expect(maxProbability(n, edges, succProb, start, end)).toBe(1);
  });

  it("1000 nodes", () => {
    const { n, edges, succProb, start, end, expected } = load("len1000");
    expect(maxProbability(n, edges, succProb, start, end)).toBe(expected);
  });
});
