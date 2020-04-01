const { singleNumber } = require('./index');

describe('136. Single Number', () => {
  it('example 1', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });

  it('example 2', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });
});
