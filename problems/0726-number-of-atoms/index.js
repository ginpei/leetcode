/**
 * 726. Number of Atoms
 * @see https://leetcode.com/problems/number-of-atoms/
 */

// atomicElement := /[A-Z][a-z]*/
// digits := '' or numeric ('2', '3', ...) but not '1'
// formula := \atomicElement\digits(formula)* | \(\formula\)\digits?

/**
 * @typedef {'atom' | 'digit' | 'paren-open' | 'paren-close' | ''} TokenType
 */

/**
 * @typedef {{ type: TokenType, value: string }} Token
 */

/**
 * @typedef {{ value: string | Formula, amount: number }} Element
 */

/**
 * @typedef {Element[]} Formula
 */

/**
 * @param {string} formula
 * @return {string}
 */
function countOfAtoms(formula) {
  const tokens = tokenize(formula);
  const elements = parse(tokens);
  const groups = calculate(elements);
  const s = stringify(groups);
  return s;
}

/**
 * @param {string} sFormula
 * @returns {Token[]}
 */
function tokenize(sFormula) {
  /** @type {Token[]} */
  const tokens = [];

  const chars = [...sFormula, ''];
  /** @type {TokenType | ''} */
  let type = '';
  let value = '';
  for (let p = 0; p < chars.length; p++) {
    const c = chars[p];

    /** @type {TokenType | ''} */
    let thisType = '';
    if (/[A-Za-z]/.test(c)) {
      thisType = 'atom';
    } else if (/[0-9]/.test(c)) {
      thisType = 'digit';
    } else if (c === '(') {
      thisType = 'paren-open';
    } else if (c === ')') {
      thisType = 'paren-close';
    }

    if (
      thisType === type
      && !/[A-Z]/.test(c)
      && thisType !== 'paren-open'
      && thisType !== 'paren-close'
    ) {
      value += c;
    } else {
      if (type !== '') {
        /** @type {Token} */
        const token = { type, value };
        tokens.push(token);
      }

      type = thisType;
      value = c;
    }
  }

  tokens.push({ type: '', value: 'end of tokens' });

  return tokens;
}

/**
 * @param {Token[]} tokens
 * @returns {Formula}
 */
function parse(tokens) {
  /** @type {Formula} */
  let formula = [];

  /** @type {Formula[]} */
  const formulaStack = [];

  /** @type {Element | null} */
  let element = null;
  tokens.forEach(({ type, value }) => {
    // console.log('# ', type, value);

    if (type === 'atom') {
      if (element) {
        formula.push(element);
        element = null;
      }

      element = createElement({ value });
    } else if (type === 'digit') {
      if (!element) {
        throw new Error('!');
      }

      element.amount = Number(value);
      formula.push(element);
      element = null;
    } else if (type === 'paren-open') {
      if (element) {
        formula.push(element);
        element = null;
      }

      formulaStack.push(formula);
      formula = [];
    } else if (type === 'paren-close') {
      if (element) {
        formula.push(element);
        element = null;
      }

      element = createElement({ value: formula });

      const last = formulaStack.pop();
      if (!last) {
        throw new Error('!');
      }
      formula = last;
    } else if (type === '' && element) {
      // end of tokens
      formula.push(element);
    }
  });

  return formula;
}

/**
 * @param {Partial<Element>} props
 * @returns {Element}
 */
function createElement(props = {}) {
  return {
    amount: 1,
    value: '',
    ...props,
  };
}

/**
 * @param {Formula} formula
 * @returns {Map<string, number>} Pair of atom name and amount
 */
function calculate(formula) {
  /** @type {Map<string, number>} */
  const atomGroups = new Map();

  formula.forEach(({ amount, value }) => {
    const subGroups = typeof value === 'string'
      ? new Map([[value, 1]])
      : calculate(value);

    subGroups.forEach((a, v) => {
      const originalAmount = atomGroups.get(v) || 0;
      atomGroups.set(v, originalAmount + a * amount);
    });
  });

  return atomGroups;
}

/**
 * @param {Map<string, number>} groups Pair of atom name and amount
 * @returns {string}
 */
function stringify(groups) {
  const s = [...groups]
    .sort(([v1], [v2]) => v1.localeCompare(v2))
    .map(([value, amount]) => (amount === 1 ? value : `${value}${amount}`))
    .join('');
  return s;
}

module.exports.countOfAtoms = countOfAtoms;
module.exports.tokenize = tokenize;
module.exports.parse = parse;
module.exports.calculate = calculate;
module.exports.stringify = stringify;
