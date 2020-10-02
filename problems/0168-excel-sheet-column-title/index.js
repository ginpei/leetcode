/**
 * 168. Excel Sheet Column Title
 * @see https://leetcode.com/problems/excel-sheet-column-title/
 */

const offset = "A".charCodeAt(0) - 1;

/**
 * @param {number} n 1, 2, 3, ...
 * @returns {string}
 */
function convertToTitle(n) {
  const here = n % 26;
  const letter = here === 0 ? "Z" : String.fromCharCode(here + offset);

  const rest = Math.floor((n - 1) / 26);
  const uppers = n > 26 ? convertToTitle(rest) : "";

  return `${uppers}${letter}`;
}

module.exports.convertToTitle = convertToTitle;
