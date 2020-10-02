const { StockSpanner } = require("./index");

describe("901. Online Stock Span", () => {
  it("example", () => {
    const stockSpanner = new StockSpanner();
    expect(stockSpanner.next(100)).toBe(1);
    expect(stockSpanner.next(80)).toBe(1);
    expect(stockSpanner.next(60)).toBe(1);
    expect(stockSpanner.next(70)).toBe(2);
    expect(stockSpanner.next(60)).toBe(1);
    expect(stockSpanner.next(75)).toBe(4);
    expect(stockSpanner.next(85)).toBe(6);
  });

  it("same price", () => {
    const stockSpanner = new StockSpanner();
    expect(stockSpanner.next(100)).toBe(1);
    expect(stockSpanner.next(80)).toBe(1);
    expect(stockSpanner.next(80)).toBe(2);
    expect(stockSpanner.next(100)).toBe(4);
  });
});
