var assert = require("assert");
var cal = require("../unitTest/sampleProgram.js")


describe("sample program test", function(){
  it("substractPositive", function(){
    assert.equal("2", cal.substractPositive(1, -1));
  });

  it("add", function(){
    assert.equal("2", cal.add(1, 1));
  });

  it("multiply", function(){
      assert.equal("1", cal.multiply(1, 1));
    });
})