const { checkValidString } = require('./index');

describe('678. Valid Parenthesis String', () => {
  it('example 1: "()"', () => {
    expect(checkValidString('()')).toBe(true);
  });

  it('example 2: "(*)"', () => {
    expect(checkValidString('(*)')).toBe(true);
  });

  it('example 3: "(*))"', () => {
    expect(checkValidString('(*))')).toBe(true);
  });

  it('empty: ""', () => {
    expect(checkValidString('')).toBe(true);
  });

  it('nest: "(())"', () => {
    expect(checkValidString('(())')).toBe(true);
  });

  it('double: "()()"', () => {
    expect(checkValidString('()()')).toBe(true);
  });

  it('lack of right: "(()"', () => {
    expect(checkValidString('(()')).toBe(false);
  });

  it('lack of left: "())"', () => {
    expect(checkValidString('())')).toBe(false);
  });

  it('lack of left: "())*"', () => {
    expect(checkValidString('())*')).toBe(false);
  });

  it('lack of right but wild: (*', () => {
    expect(checkValidString('(*')).toBe(true);
  });

  it('lack of right but wild: (*()', () => {
    expect(checkValidString('(*()')).toBe(true);
  });

  it('wild before open : "*("', () => {
    expect(checkValidString('*(')).toBe(false);
  });

  it('"*)("', () => {
    expect(checkValidString('*)(')).toBe(false);
  });

  it('WA', () => {
    const s = '*(****(*((**(***';
    expect(checkValidString(s)).toBe(true);
  });
});
