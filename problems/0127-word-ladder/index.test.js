const { ladderLength, isOneLetterDifferent } = require('./index');

describe('127. Word Ladder', () => {
  it('example 1', () => {
    const beginWord = 'hit';
    const endWord = 'cog';
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
    expect(ladderLength(beginWord, endWord, wordList)).toBe(5);
  });

  it('example 2', () => {
    const beginWord = 'hit';
    const endWord = 'cog';
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log'];
    expect(ladderLength(beginWord, endWord, wordList)).toBe(0);
  });

  it('right after the end word', () => {
    const beginWord = 'hit';
    const endWord = 'hot';
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log'];
    expect(ladderLength(beginWord, endWord, wordList)).toBe(2);
  });

  it('list has only the end word', () => {
    const beginWord = 'hit';
    const endWord = 'hot';
    const wordList = ['hot'];
    expect(ladderLength(beginWord, endWord, wordList)).toBe(2);
  });

  describe('isOneLetterDifferent()', () => {
    it('returns true if only 1 letter is different', () => {
      expect(isOneLetterDifferent('hit', 'hot')).toBe(true);
    });

    it('returns false if 2 or more letters are different', () => {
      expect(isOneLetterDifferent('hit', 'hod')).toBe(false);
    });

    it('returns false if all letters are different', () => {
      expect(isOneLetterDifferent('hit', 'fod')).toBe(false);
    });
  });
});
