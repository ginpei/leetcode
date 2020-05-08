const { checkStraightLine } = require('./index');

describe('1232. Check If It Is a Straight Line', () => {
  it('example 1', () => {
    const input = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
    expect(checkStraightLine(input)).toBe(true);
  });

  it('example 2', () => {
    const input = [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]];
    expect(checkStraightLine(input)).toBe(false);
  });

  it('horizontal, not sorted', () => {
    const input = [[-3, -2], [-1, -2], [2, -2], [-2, -2], [0, -2]];
    expect(checkStraightLine(input)).toBe(true);
  });

  it('vertical', () => {
    const input = [[1, 0], [1, 1], [1, 100]];
    expect(checkStraightLine(input)).toBe(true);
  });

  it('WA', () => {
    const input = [
      [4, 8], [-2, 8], [1, 8], [8, 8], [-5, 8], [0, 8], [7, 8], [5, 8],
    ];
    expect(checkStraightLine(input)).toBe(true);
  });

  it('triangle', () => {
    const input = [
      [0, 0], [3, 3], [3, -3],
    ];
    expect(checkStraightLine(input)).toBe(false);
  });
});
