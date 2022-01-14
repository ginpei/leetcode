/**
 * 208. Implement Trie (Prefix Tree)
 * @see https://leetcode.com/problems/implement-trie-prefix-tree/
 */

/**
 * @typedef {{
 *   children: Map<string, TrieNode>;
 *   end: boolean;
 *   value: string;
 * }} TrieNode
 */

/**
 * @param {string} value
 * @returns {TrieNode}
 */
function createTrieNode(value) {
  return {
    children: new Map(),
    end: false,
    value,
  };
}

// class TrieNode {
//   constructor(value) {
//     this.value = value;
//     /** @type {Map<string, TrieNode>} */
//     this.children = {};
//   }
// }

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
class Trie {
  constructor() {
    this.trie = createTrieNode("");
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    const strs = [...word];

    let node = this.trie;
    let prefix = "";
    for (const c of strs) {
      prefix += c;
      if (!node.children.has(c)) {
        node.children.set(c, createTrieNode(prefix));
      }

      // @ts-ignore
      node = node.children.get(c);
    }

    node.end = true;
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const strs = [...word];
    let node = this.trie;
    for (const c of strs) {
      // @ts-ignore
      node = node.children.get(c);
      if (!node) {
        return false;
      }
    }
    return node.end;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    const strs = [...prefix];
    let node = this.trie;
    for (const c of strs) {
      // @ts-ignore
      node = node.children.get(c);
      if (!node) {
        return false;
      }
    }
    return true;
  }
}

module.exports.Trie = Trie;
