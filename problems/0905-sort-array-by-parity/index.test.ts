import { sortArrayByParity } from "./index";

describe("905. Sort Array By Parity", () => {
  it("example 1", () => {
    expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1]);
  });
});
