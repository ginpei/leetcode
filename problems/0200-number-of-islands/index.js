const { fillGridCells } = require('../lib/grid');

/**
 * 200. Number of Islands
 *
 * Given a 2d grid map of `'1'`s (land) and `'0'`s (water), count the number of
 * islands. An island is surrounded by water and is formed by connecting
 * adjacent lands horizontally or vertically. You may assume all four edges of
 * the grid are all surrounded by water.
 *
 * @see https://leetcode.com/problems/number-of-islands/
 */

/** @typedef {{
 *   water: '0';
 *   land: '1';
 *   boomed: 'x';
 * }} MapTypeDef
 */

/** @typedef {ValueOf<MapTypeDef>} GridCell */

// /** @type {MapTypeDef} */
const MapType = {
  water: '0',
  land: '1',
  boomed: 'x',
};

/**
 * @param {GridCell[][]} grid Gets destructed internally
 * @return {number}
 */
function numIslands(grid) {
  let count = 0;

  for (let y = 0; y < grid.length; y++) {
    const line = grid[y];
    for (let x = 0; x < line.length; x++) {
      const cell = line[x];
      if (cell === MapType.land) {
        fillGridCells(grid, y, x, MapType.boomed, MapType.land);
        count += 1;
      }
    }
  }

  return count;
}

module.exports.numIslands = numIslands;
module.exports.MapType = MapType;
