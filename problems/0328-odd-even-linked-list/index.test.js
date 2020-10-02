const { oddEvenList } = require("./index");
const { buildList, listToArray } = require("../lib/list");

describe("328. Odd Even Linked List", () => {
  it("example 1", () => {
    const head = buildList([1, 2, 3, 4, 5]);
    expect(listToArray(oddEvenList(head))).toEqual([1, 3, 5, 2, 4]);
  });

  it("example 2", () => {
    const head = buildList([2, 1, 3, 5, 6, 4, 7]);
    expect(listToArray(oddEvenList(head))).toEqual([2, 3, 6, 7, 1, 5, 4]);
  });

  it("empty list", () => {
    expect(listToArray(oddEvenList(null))).toEqual([]);
  });

  it("single item list", () => {
    const head = buildList([1]);
    expect(listToArray(oddEvenList(head))).toEqual([1]);
  });

  it("double item list", () => {
    const head = buildList([1, 2]);
    expect(listToArray(oddEvenList(head))).toEqual([1, 2]);
  });
});
