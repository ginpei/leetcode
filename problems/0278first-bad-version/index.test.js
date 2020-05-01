const { solution } = require('./index');

describe('278. First Bad Version', () => {
  it('example 1', () => {
    const n = 5;
    const version = 4;
    /** @type {(v: number) => boolean} */
    const isBadVersion = (v) => v >= version;
    expect(solution(isBadVersion)(n)).toBe(4);
  });

  it('total version is less than the bad version', () => {
    const n = 3;
    const version = 4;
    /** @type {(v: number) => boolean} */
    const isBadVersion = (v) => v >= version;
    expect(solution(isBadVersion)(n)).toBe(3);
  });

  it('binary search threshold thing', () => {
    const n = 3;
    const version = 1;
    /** @type {(v: number) => boolean} */
    const isBadVersion = (v) => v >= version;
    expect(solution(isBadVersion)(n)).toBe(1);
  });

  it('large number', () => {
    const n = 1420736637;
    const version = 1150769282;
    /** @type {(v: number) => boolean} */
    const isBadVersion = (v) => v >= version;
    expect(solution(isBadVersion)(n)).toBe(1150769282);
  });
});
