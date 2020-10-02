/**
 * 1046. Last Stone Weight
 *
 * @see https://leetcode.com/problems/1046-last-stone-weight
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
  const heap = createHeap(stones);

  while (heap.length > 2) {
    /** @type {number} */
    const stone1 = pop(heap);
    /** @type {number} */
    const stone2 = pop(heap);

    const remaining = stone1 - stone2;
    if (remaining > 0) {
      push(heap, remaining);
    }
  }

  const last = heap[1] || 0;
  return last;
}

/**
 * @param {number[]} arr
 */
function createHeap(arr) {
  const heap = [NaN];
  arr.forEach((n) => push(heap, n));
  return heap;
}

/**
 * @param {number[]} heap
 * @param {number} n
 */
function push(heap, n) {
  heap.push(n);

  let index = heap.length - 1;
  while (index > 1) {
    const parentIndex = Math.floor(index / 2);
    const parent = heap[parentIndex];
    if (parent >= n) {
      break;
    }

    // swap
    // eslint-disable-next-line no-param-reassign
    heap[parentIndex] = n;
    // eslint-disable-next-line no-param-reassign
    heap[index] = parent;

    index = parentIndex;
  }
}

/**
 * @param {number[]} heap
 */
function pop(heap) {
  if (heap.length < 2) {
    return NaN;
  }

  if (heap.length === 2) {
    return heap.pop();
  }

  const popped = heap[1];
  /** @type {number} */
  // eslint-disable-next-line no-param-reassign
  heap[1] = heap.pop();

  let index = 1;
  while (index <= heap.length) {
    const parent = heap[index];

    const leftIndex = index * 2;
    const left = heap[leftIndex];

    const rightIndex = leftIndex + 1;
    const right = heap[rightIndex];

    // finish if no children
    if (left === undefined) {
      break;
    }

    // Note: no case empty left but existing right
    const childIndex = left < right ? rightIndex : leftIndex;
    const child = heap[childIndex];

    if (child > parent) {
      // swap
      // eslint-disable-next-line no-param-reassign
      heap[index] = child;
      // eslint-disable-next-line no-param-reassign
      heap[childIndex] = parent;
    }

    index = childIndex;
  }

  return popped;
}

module.exports.lastStoneWeight = lastStoneWeight;
module.exports.createHeap = createHeap;
module.exports.push = push;
module.exports.pop = pop;
