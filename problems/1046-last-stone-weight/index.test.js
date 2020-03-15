const {
  lastStoneWeight, createHeap, push, pop,
} = require('./index');

describe('1046. Last Stone Weight', () => {
  it('example 1', () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
  });

  it('wa 1: returns 0 if nothing remains', () => {
    expect(lastStoneWeight([2, 2])).toBe(0);
  });

  it('wa 2', () => {
    expect(lastStoneWeight([10, 10, 7, 2])).toBe(5);
  });
});
