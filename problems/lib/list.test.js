const { buildList, listToArray } = require('./list');

describe('list', () => {
  describe('buildList()', () => {
    it('returns list', () => {
      const head = buildList([1, 2, 3]);
      expect(head.val).toBe(1);
      // @ts-ignore
      expect(head.next.val).toBe(2);
      // @ts-ignore
      expect(head.next.next.val).toBe(3);
    });
  });

  describe('listToArray()', () => {
    it('returns array', () => {
      const head = buildList([1, 2, 3]);
      const array = listToArray(head);
      expect(array).toEqual([1, 2, 3]);
    });

    it('detects loop list', () => {
      const head = buildList([1, 2]);
      // @ts-ignore
      head.next.next = head;
      expect(() => {
        listToArray(head);
      }).toThrow(/loop list/i);
    });
  });
});
