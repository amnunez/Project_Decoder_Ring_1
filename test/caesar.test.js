const expect = require("chai").expect;

const caesar = require("../src/caesar");
// Write your tests here

describe("Caesar", function () {
  it("is a function", function () {
    expect(caesar).to.be.a("function");
  });

  it("returns false if 'shift' is 0", function () {
    const actual = caesar("Thinkful", 0);
    expect(actual).to.be.false;
  });

  it("returns false if 'shift' is less than or greater than 25", function () {
    const tooHigh = caesar("Thinkful", 26);
    const tooLow = caesar("Thinkful", -99);
    expect(tooHigh).to.be.false && expect(tooLow).to.be.false;
  });

  it("returns false if shift is not present", function () {
    const actual = caesar("Thinkful");
    expect(actual).to.be.false;
  });

  it("maintains spaces, punctuation and ignores capital letters", function () {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar("This is a SECRET message!", 8);
    expect(actual).to.eql(expected);
  });
  it("'wraps' shifted letter to the front of the alphabet if it goes past 'z'", function () {
    const expected = "this is a secret message!";
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.eql(expected);
  });
});
