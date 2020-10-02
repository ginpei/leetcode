const { permute } = require("./index");

describe("46. Permutations", () => {
  it("example", () => {
    const result = permute([1, 2, 3]);
    expect(result).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  // it is never empty
  // it('empty array', () => {
  //   expect(permute([])).toEqual([]);
  // });

  it("only one item", () => {
    expect(permute([1])).toEqual([[1]]);
  });
});
