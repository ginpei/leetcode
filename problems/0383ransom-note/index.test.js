const { canConstruct } = require('./index');

describe('383. Ransom Note', () => {
  it('example 1', () => {
    expect(canConstruct('a', 'b')).toBe(false);
  });

  it('example 2', () => {
    expect(canConstruct('aa', 'ab')).toBe(false);
  });

  it('example 3', () => {
    expect(canConstruct('aa', 'aab')).toBe(true);
  });
});
