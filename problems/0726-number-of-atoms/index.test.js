const {
  calculate, countOfAtoms, parse, tokenize,
} = require('./index');

describe('726. Number of Atoms', () => {
  describe('problem', () => {
    it('example 1: H2)', () => {
      expect(countOfAtoms('H2O')).toBe('H2O');
    });

    it('example 2: Mg(OH)2', () => {
      expect(countOfAtoms('Mg(OH)2')).toBe('H2MgO2');
    });

    it('example 3: K4(ON(SO3)2)2', () => {
      expect(countOfAtoms('K4(ON(SO3)2)2')).toBe('K4N2O14S4');
    });

    it('nested parens: ((H)2)2', () => {
      expect(countOfAtoms('((H)2)2')).toBe('H4');
    });

    it('WA 1: ((HHe28Be26He)9)34', () => {
      expect(countOfAtoms('((HHe28Be26He)9)34')).toBe('Be7956H306He8874');
    });
  });

  describe('tokenize()', () => {
    it('works', () => {
      const formula = '(MgO12)3';
      /** @type {import('./index').Token[]} */
      const expected = [
        { type: 'paren-open', value: '(' },
        { type: 'atom', value: 'Mg' },
        { type: 'atom', value: 'O' },
        { type: 'digit', value: '12' },
        { type: 'paren-close', value: ')' },
        { type: 'digit', value: '3' },
        { type: '', value: 'end of tokens' },
      ];
      expect(tokenize(formula)).toEqual(expected);
    });

    it('H2O', () => {
      const formula = 'H2O';
      /** @type {import('./index').Token[]} */
      const expected = [
        { type: 'atom', value: 'H' },
        { type: 'digit', value: '2' },
        { type: 'atom', value: 'O' },
        { type: '', value: 'end of tokens' },
      ];
      expect(tokenize(formula)).toEqual(expected);
    });

    it('Mg(OH)2', () => {
      const formula = 'Mg(OH)2';
      /** @type {import('./index').Token[]} */
      const expected = [
        { type: 'atom', value: 'Mg' },
        { type: 'paren-open', value: '(' },
        { type: 'atom', value: 'O' },
        { type: 'atom', value: 'H' },
        { type: 'paren-close', value: ')' },
        { type: 'digit', value: '2' },
        { type: '', value: 'end of tokens' },
      ];
      expect(tokenize(formula)).toEqual(expected);
    });

    it('((H)2)2', () => {
      const formula = '((H)2)2';
      /** @type {import('./index').Token[]} */
      const expected = [
        { type: 'paren-open', value: '(' },
        { type: 'paren-open', value: '(' },
        { type: 'atom', value: 'H' },
        { type: 'paren-close', value: ')' },
        { type: 'digit', value: '2' },
        { type: 'paren-close', value: ')' },
        { type: 'digit', value: '2' },
        { type: '', value: 'end of tokens' },
      ];
      expect(tokenize(formula)).toEqual(expected);
    });
  });

  describe('parse()', () => {
    it('works', () => {
      /** @type {import('./index').Token[]} */
      const input = [
        { type: 'paren-open', value: '(' },
        { type: 'atom', value: 'Mg' },
        { type: 'atom', value: 'O' },
        { type: 'digit', value: '12' },
        { type: 'paren-close', value: ')' },
        { type: 'digit', value: '3' },
        { type: '', value: 'end of tokens' },
      ];

      /** @type {import('./index').Formula} */
      const expected = [
        {
          amount: 3,
          value: [
            { amount: 1, value: 'Mg' },
            { amount: 12, value: 'O' },
          ],
        },
      ];

      expect(parse(input)).toEqual(expected);
    });

    it('H2O', () => {
      /** @type {import('./index').Token[]} */
      const input = [
        { type: 'atom', value: 'H' },
        { type: 'digit', value: '2' },
        { type: 'atom', value: 'O' },
        { type: '', value: 'end of tokens' },
      ];

      /** @type {import('./index').Formula} */
      const expected = [
        { amount: 2, value: 'H' },
        { amount: 1, value: 'O' },
      ];

      expect(parse(input)).toEqual(expected);
    });

    it('Mg(OH)2', () => {
      /** @type {import('./index').Token[]} */
      const input = [
        { type: 'atom', value: 'Mg' },
        { type: 'paren-open', value: '(' },
        { type: 'atom', value: 'O' },
        { type: 'atom', value: 'H' },
        { type: 'paren-close', value: ')' },
        { type: 'digit', value: '2' },
        { type: '', value: 'end of tokens' },
      ];

      /** @type {import('./index').Formula} */
      const expected = [
        { amount: 1, value: 'Mg' },
        {
          amount: 2,
          value: [
            { amount: 1, value: 'O' },
            { amount: 1, value: 'H' },
          ],
        },
      ];

      expect(parse(input)).toEqual(expected);
    });
  });

  describe('calculate()', () => {
    it('works', () => {
      /** @type {import('./index').Formula} */
      const input = [
        {
          amount: 3,
          value: [
            { amount: 1, value: 'Mg' },
            { amount: 12, value: 'O' },
          ],
        },
      ];
      expect(calculate(input)).toEqual(new Map([
        ['Mg', 3],
        ['O', 36],
      ]));
    });
  });
});
