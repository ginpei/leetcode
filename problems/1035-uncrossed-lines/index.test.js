const { maxUncrossedLines } = require('./index');

describe('1035. Uncrossed Lines', () => {
  it('example 1', () => {
    const A = [1, 4, 2];
    const B = [1, 2, 4];
    expect(maxUncrossedLines(A, B)).toBe(2);
  });

  it('example 2', () => {
    const A = [2, 5, 1, 2, 5];
    const B = [10, 5, 2, 1, 5, 2];
    expect(maxUncrossedLines(A, B)).toBe(3);
  });

  it('example 3', () => {
    const A = [1, 3, 7, 1, 7, 5];
    const B = [1, 9, 2, 5, 1];
    expect(maxUncrossedLines(A, B)).toBe(2);
  });
});
