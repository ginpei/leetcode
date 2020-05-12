const { singleNonDuplicate } = require('./index');

describe('540. Single Element in a Sorted Array', () => {
  it('example 1', () => {
    expect(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])).toBe(2);
  });

  it('example 2', () => {
    expect(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])).toBe(10);
  });

  it('only one', () => {
    expect(singleNonDuplicate([1])).toBe(1);
  });

  it('minimal: single in left half', () => {
    expect(singleNonDuplicate([1, 2, 2])).toBe(1);
  });

  it('minimal: single in right half', () => {
    expect(singleNonDuplicate([1, 1, 2])).toBe(2);
  });
});
