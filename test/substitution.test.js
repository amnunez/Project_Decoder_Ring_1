const expect = require("chai").expect;

const substitution = require("../src/substitution");
// Write your tests here!

describe("Substitution", function () {
  //[x]should ignore capital letters and ignore spaces throughout
  //[x]input could include spaces and letters as well as special characters such as #, $, *, etc
  //[x]'alphabet' parameter must be a string of exactly 26 characters or return false
  //[x]all characters in 'alphabet' param must be unique or return false

  it("should ignore capital letters and ignore spaces throughout", function () {
    const actual = substitution(
      "You are an EXCELLENT spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.eql(expected);
  });
  it("input can include spaces,letters & special characters such as #, $, *, etc", function () {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    expect(actual).to.eql(expected);
  });
  it("should return false if 'alphabet' param is not exactly 26 characters", function () {
    const actual = substitution("thinkful", "short");
    expect(actual).to.be.false;
  });
  it("should return false if all characters in 'alphabet' param are not unique", function () {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });
});
