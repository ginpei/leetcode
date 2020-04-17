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

const MapType = {
  water: '0',
  land: '1',
  boomed: 'x',
};

/**
 * @param {string[][]} grid Gets destructed internally
 * @return {number}
 */
function numIslands(grid) {
  let numLands = 0;

  for (let y = 0; y < grid.length; y++) {
    const line = grid[y];
    for (let x = 0; x < line.length; x++) {
      const cell = line[x];
      if (cell === MapType.land) {
        numLands += 1;
        burn(grid, x, y);
      }
    }
  }

  return numLands;
}

/**
 * @param {string[][]} grid
 * @param {number} x
 * @param {number} y
 */
function burn(grid, x, y) {
  // out of range
  if (y < 0 || grid.length <= y || x < 0 || grid[y].length <= x) {
    return;
  }

  // not burnable
  const cell = grid[y][x];
  if (cell !== MapType.land) {
    return;
  }

  // burn target
  // eslint-disable-next-line no-param-reassign
  grid[y][x] = MapType.boomed;

  // burn around
  burn(grid, x + 1, y);
  burn(grid, x, y + 1);
  burn(grid, x - 1, y);
  burn(grid, x, y - 1);
}

module.exports.numIslands = numIslands;
module.exports.MapType = MapType;
