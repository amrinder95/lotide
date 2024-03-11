const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail,", () => {
  it("Returns empty array when passed an []",() => {
    assert.deepEqual(tail([]), []);
  });
  it("Returns an empty array when passed an array with one word", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });
  it("Returns an array with the first element removed", () =>{
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
})