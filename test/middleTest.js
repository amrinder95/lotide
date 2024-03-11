const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it("Returns an empty array when passed 1 element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("Returns an empty array when passed 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("Returns the middle element when passed an odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("Returns the middle two elements when passed an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});