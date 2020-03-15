/** @type {PriorityQueueComparator<any>} */
const compareMaxNumbers = (a, b) => {
  const typeA = typeof a;
  const typeB = typeof b;
  if (typeA !== 'number' || typeB !== 'number') {
    throw new Error(
      `Number comparator accept numbers but received ${typeA} and ${typeB}`,
    );
  }
  return b - a;
};

const priorityQueue = {
  /**
   * @template T
   * @typedef {(a: T, b: T) => number} PriorityQueueComparator
   */

  /**
   * @template T
   * @param {T[]} arr
   * @param {PriorityQueueComparator<T>} comparator
   * @returns {T[]}
   */
  createHeap(arr, comparator = compareMaxNumbers) {
    /** @type {any} */
    const heap = ([null]);
    arr.forEach((v) => priorityQueue.push(heap, v, comparator));
    return heap;
  },

  /**
   * @template T
   * @param {T[]} heap
   * @param {T} item
   * @param {PriorityQueueComparator<T>} comparator
   * @returns {void}
   */
  push(heap, item, comparator = compareMaxNumbers) {
    heap.push(item);

    let index = heap.length - 1;
    while (index > 1) {
      const parentIndex = Math.floor(index / 2);
      const parent = heap[parentIndex];
      if (comparator(item, parent) >= 0) {
        break;
      }

      // swap
      // eslint-disable-next-line no-param-reassign
      heap[parentIndex] = item;
      // eslint-disable-next-line no-param-reassign
      heap[index] = parent;

      index = parentIndex;
    }
  },

  /**
   * @template T
   * @param {T[]} heap
   * @param {PriorityQueueComparator<T>} comparator
   * @returns {T | undefined}
   */
  pop(heap, comparator = compareMaxNumbers) {
    if (heap.length < 2) {
      return undefined;
    }

    if (heap.length === 2) {
      return heap.pop();
    }

    const popped = heap[1];
    /** @type {T} */
    // eslint-disable-next-line no-param-reassign
    heap[1] = (heap.pop());

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

      // Note: no case of pair of empty left and existing right
      const childIndex = right !== undefined && comparator(left, right) > 0
        ? rightIndex
        : leftIndex;
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
  },
};
module.exports = priorityQueue;
