const { grayCode } = require('./index');

describe('0089 Gray Code', () => {
  it('works for 2 digits', () => {
    expect(grayCode(2)).toEqual([0, 1, 3, 2]);
  });

  it('works for 0 digits', () => {
    expect(grayCode(0)).toEqual([0]);
  });
});
