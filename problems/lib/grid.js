/**
 * @template T
 * @param {T[][]} grid Gets destructed internally
 * @param {number} y
 * @param {number} x
 * @param {T} value
 * @return {T[][]}
 */
function floodFill(grid, y, x, value) {
  const oldColor = grid[y][x];
  fillGridCells(grid, y, x, value, oldColor);
  return grid;
}
module.exports.floodFill = floodFill;

/**
 * @template T
 * @param {T[][]} grid Gets destructed internally
 * @param {number} y
 * @param {number} x
 * @param {T} value
 * @param {T} target
 * @return {T[][]}
 */
function fillGridCells(grid, y, x, value, target) {
  if (y < 0 || grid.length <= y || x < 0 || grid[0].length <= x) {
    return grid;
  }

  if (grid[y][x] !== target) {
    return grid;
  }

  // eslint-disable-next-line no-param-reassign
  grid[y][x] = value;

  fillGridCells(grid, y - 1, x, value, target);
  fillGridCells(grid, y + 1, x, value, target);
  fillGridCells(grid, y, x - 1, value, target);
  fillGridCells(grid, y, x + 1, value, target);

  return grid;
}
exports.fillGridCells = fillGridCells;
