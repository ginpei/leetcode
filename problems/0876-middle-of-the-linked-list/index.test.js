const { middleNode } = require("./index");

/**
 * @template T
 * @typedef {import('./index').ListNode<T>} ListNode
 */

describe("876. Middle of the Linked List", () => {
  it("example 1", () => {
    expect(run([1, 2, 3, 4, 5])).toEqual([3, 4, 5]);
  });

  it("example 2", () => {
    expect(run([1, 2, 3, 4, 5, 6])).toEqual([4, 5, 6]);
  });

  it("single", () => {
    expect(run([1])).toEqual([1]);
  });

  it("double", () => {
    expect(run([1, 2])).toEqual([2]);
  });

  /**
   * @param {number[]} arr
   * @returns {number[]}
   */
  function run(arr) {
    const head = linkedList.arrayToLinkedList(arr);
    const result = middleNode(head);
    const middleHead = linkedList.linkedListToArray(result);
    return middleHead;
  }
});

const linkedList = {
  /**
   * @template T
   * @param {T[]} arr Length will be between `1` and `100`.
   * @returns {import('./index').ListNode<T>}
   */
  arrayToLinkedList(arr) {
    /** @type {ListNode<T>} */
    const head = {
      val: arr[0],
      next: null,
    };

    let tail = head;
    arr.slice(1).forEach((val) => {
      /** @type {ListNode<T>} */
      const node = { val, next: null };
      tail.next = node;
      tail = node;
    });

    return head;
  },

  /**
   * @template T
   * @param {ListNode<T> | null} head
   * @returns {T[]}
   */
  linkedListToArray(head) {
    /** @type {T[]} */
    const arr = [];

    for (let node = head; node; node = node && node.next) {
      arr.push(node.val);
    }

    return arr;
  },
};
