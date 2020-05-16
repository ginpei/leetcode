/**
 * 328. Odd Even Linked List
 * @see https://leetcode.com/problems/odd-even-linked-list/
 */

/**
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
function oddEvenList(head) {
  if (!head) {
    return null;
  }

  const secondHalfHead = head.next;
  let odd = false;
  let node = secondHalfHead;
  let oNode = head;
  let eNode = secondHalfHead;
  while (node) {
    const { next } = node;

    if (odd) {
      oNode.next = node;
      oNode = node;
    } else {
      // @ts-ignore
      eNode.next = node;
      eNode = node;
    }

    odd = !odd;
    node = next;
  }

  if (oNode) {
    oNode.next = secondHalfHead;
  }

  if (eNode) {
    eNode.next = null;
  }

  return head;
}

module.exports.oddEvenList = oddEvenList;
