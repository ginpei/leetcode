const fs = require("fs");
const path = require("path");

/**
 * @typedef {{
 *   n: number;
 *   edges: number[][];
 *   succProb: number[];
 *   start: number;
 *   end: number;
 *   expected: number;
 * }} InputValues
 */

/**
 * @param {string} title
 * @returns {InputValues}
 */
module.exports.load = (title) => {
  const p = path.resolve(__dirname, `${title}.txt`);
  const text = fs.readFileSync(p, "utf8");
  const lines = text.split("\n");

  /** @type {InputValues} */
  const values = {
    n: parseInt(lines[0], 10),
    edges: JSON.parse(lines[1]),
    succProb: JSON.parse(lines[2]),
    start: parseInt(lines[3], 10),
    end: parseInt(lines[4], 10),
    expected: parseFloat(lines[5]),
  };
  return values;
};
