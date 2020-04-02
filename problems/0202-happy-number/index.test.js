const { isHappy } = require('./index');

describe('202. Happy Number', () => {
  it('example 1', () => {
    expect(isHappy(19)).toBe(true);
  });

  it('1', () => {
    expect(isHappy(1)).toBe(true);
  });

  it('2', () => {
    expect(isHappy(2)).toBe(false);
  });

  it('11', () => {
    expect(isHappy(11)).toBe(false);
  });

  it('19', () => {
    expect(isHappy(19)).toBe(true);
  });

  it('WA: 7', () => {
    expect(isHappy(7)).toBe(true);
  });
});
