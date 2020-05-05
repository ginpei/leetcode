const { firstUniqChar } = require('./index');

describe('387. First Unique Character in a String', () => {
  it('example 1', () => {
    expect(firstUniqChar('leetcode')).toBe(0);
  });

  it('example 2', () => {
    expect(firstUniqChar('loveleetcode')).toBe(2);
  });

  it('not found', () => {
    expect(firstUniqChar('aa')).toBe(-1);
  });
});
