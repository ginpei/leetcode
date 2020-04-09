/**
 * 876. Middle of the Linked List
 * @see https://leetcode.com/problems/middle-of-the-linked-list/
 */

/**
 * Definition for singly-linked list.
 * @template T
 * @typedef {{
 *   val: T;
 *   next: ListNode<T> | null;
 * }} ListNode
 */

/**
 * @param {ListNode<number>} head
 * @return {ListNode<number>}
 */
function middleNode(head) {
  /** @type {ListNode<number> | null} */
  let cur = head;
  let middle = cur;

  let flag = true;
  while (cur.next) {
    if (flag) {
      // @ts-ignore
      middle = middle.next;
    }

    flag = !flag;

    cur = cur.next;
  }

  return middle;
}

module.exports.middleNode = middleNode;
