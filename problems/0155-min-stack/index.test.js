const { MinStack } = require("./index");

describe("155. Min Stack", () => {
  /** @type {MinStack} */
  let minStack;

  beforeEach(() => {
    minStack = new MinStack();
  });

  it("example 1", () => {
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toBe(-3);
    minStack.pop();
    expect(minStack.top()).toBe(0);
    expect(minStack.getMin()).toBe(-2);
  });
});
