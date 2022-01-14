const { myAtoi } = require("./index");

describe("20. Valid Parentheses", () => {
  it("example 1", () => {
    expect(myAtoi("42")).toBe(42);
  });

  it("example 2", () => {
    expect(myAtoi("   -42")).toBe(-42);
  });

  it("example 3", () => {
    expect(myAtoi("4193 with words")).toBe(4193);
  });

  it("No numerics", () => {
    expect(myAtoi("hello")).toBe(0);
  });

  it("Following alphabet", () => {
    expect(myAtoi("a9")).toBe(0);
  });

  it("Two groups of numbers", () => {
    expect(myAtoi("1 2")).toBe(1);
  });

  it("Decimal", () => {
    expect(myAtoi("3.14")).toBe(3);
  });

  it("Minus sign", () => {
    expect(myAtoi("-10")).toBe(-10);
  });

  it("Plus sign", () => {
    expect(myAtoi("+10")).toBe(10);
  });

  it("Doubled plus signs", () => {
    expect(myAtoi("++10")).toBe(0);
  });

  it("Out of 32-bit range (negative)", () => {
    expect(myAtoi("-91283472332")).toBe(-2147483648);
  });

  it("Out of 32-bit range (positive)", () => {
    expect(myAtoi("21474836460")).toBe(2147483647);
  });
});
