/**
 * @template T
 * @param {T[]} values
 * @returns {ListNode<T>}
 */
function buildList(values) {
  if (values.length < 1) {
    throw new Error("Values must have at least one element");
  }

  const root = createListNode(values[0]);
  let node = root;
  for (let i = 1; i < values.length; i++) {
    node.next = createListNode(values[i]);
    node = node.next;
  }
  return root;
}
module.exports.buildList = buildList;

/**
 * @template T
 * @param {T} val
 * @returns {ListNode<T>}
 */
function createListNode(val) {
  return {
    val,
    next: null,
  };
}
module.exports.createListNode = createListNode;

/**
 * @template T
 * @param {ListNode<T> | null} root
 * @returns {T[]}
 */
function listToArray(root) {
  /** @type {Set<ListNode<T>>} */
  const existing = new Set([]);
  /** @type {T[]} */
  const array = [];
  for (let node = root; node; node = node.next) {
    if (existing.has(node)) {
      throw new Error("Loop list detected");
    }
    array.push(node.val);
    existing.add(node);
  }
  return array;
}
module.exports.listToArray = listToArray;
