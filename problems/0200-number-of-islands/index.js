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

/** @typedef {import("./type").GridCell} GridCell */
/** @typedef {import("./type").MapTypeDef} MapTypeDef */

/** @type {MapTypeDef} */
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
        burn(grid, y, x);
        count += 1;
      }
    }
  }

  return count;
}

/**
 * @param {GridCell[][]} grid Gets destructed internally
 * @param {number} y
 * @param {number} x
 */
function burn(grid, y, x) {
  if (y < 0 || grid.length <= y || x < 0 || grid[0].length <= x) {
    return;
  }

  if (grid[y][x] !== MapType.land) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  grid[y][x] = MapType.boomed;

  burn(grid, y - 1, x);
  burn(grid, y + 1, x);
  burn(grid, y, x - 1);
  burn(grid, y, x + 1);
}

module.exports.numIslands = numIslands;
module.exports.MapType = MapType;
