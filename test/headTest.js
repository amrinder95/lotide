const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("Returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("Returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("Returns 'Hello' for ['Hello, 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});