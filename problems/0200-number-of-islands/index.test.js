const { numIslands } = require('./index');

describe('200. Number of Islands', () => {
  /**
   * @param {string} s
   * @return {string[][]}
   */
  function buildInput(s) {
    // @ts-ignore
    return s.trim().split('\n').map((v) => v.trim().split(''));
  }

  it('example 1', () => {
    const input = buildInput(`
      11110
      11010
      11000
      00000
    `);
    expect(numIslands(input)).toBe(1);
  });

  it('example 2', () => {
    const input = buildInput(`
      11000
      11000
      00100
      00011
    `);
    expect(numIslands(input)).toBe(3);
  });
});
