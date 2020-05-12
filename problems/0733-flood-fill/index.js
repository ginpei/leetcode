/**
 * 733. Flood Fill
 *
 * An `image` is represented by a 2-D array of integers, each integer
 * representing the pixel value of the image (from 0 to 65535).
 *
 * Given a coordinate `(sr, sc)` representing the starting pixel (row and
 * column) of the flood fill, and a pixel value `newColor`, "flood fill" the
 * image.
 *
 * To perform a "flood fill", consider the starting pixel, plus any pixels
 * connected 4-directionally to the starting pixel of the same color as the
 * starting pixel, plus any pixels connected 4-directionally to those pixels
 * (also with the same color as the starting pixel), and so on. Replace the
 * color of all of the aforementioned pixels with the newColor.
 *
 * At the end, return the modified image.
 *
 * @see https://leetcode.com/problems/flood-fill/
 */

/**
 * @param {number[][]} image Gets destructed internally
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
  const oldColor = image[sr][sc];

  if (newColor !== oldColor) {
    advance(image, sr, sc, newColor, oldColor);
  }

  return image;
}

/**
 * @param {number[][]} image Gets destructed internally
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @param {number} oldColor
 */
function advance(image, sr, sc, newColor, oldColor) {
  if (sr < 0 || image.length <= sr || sc < 0 || image[0].length <= sc) {
    return;
  }

  if (image[sr][sc] !== oldColor) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  image[sr][sc] = newColor;

  advance(image, sr - 1, sc, newColor, oldColor);
  advance(image, sr + 1, sc, newColor, oldColor);
  advance(image, sr, sc - 1, newColor, oldColor);
  advance(image, sr, sc + 1, newColor, oldColor);
}

module.exports.floodFill = floodFill;
