const expect = require("chai").expect;

const polybius = require("../src/polybius");
// Write your tests here!

describe("Polybius", function () {
  it("should ignore capital letters and maintain spaces throughout", function () {
    const actual = polybius("Hello WORLD", true);
    const expected = "3251131343 2543241341";
    expect(actual).to.eql(expected);
  });
  it("when encoding, output should be a string", function () {
    const actual = polybius("Hello world");
    expect(actual).to.be.a("string");
  });
  it("when encoding, 'i & j' should equal 42", function () {
    const actual = polybius("i j");
    const expected = "42 42";
    expect(actual).to.eql(expected);
  });
  it("when decoding, number of characters in input (excluding spaces) should be even or return false", function () {
    const actual = polybius("123 456 7", false);
    expect(actual).to.be.false;
  });
  it("when decoding, the number 42 should show both i & j", function () {
    const actual = polybius("4432423352125413", false);
    const expected = "th(i/j)nkful";
    expect(actual).to.eql(expected);
  });
});
