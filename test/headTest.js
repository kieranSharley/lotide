// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const { Assertion } = require('chai');
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5)
  });
  it("returns \"hello\" for \"hello\", \"Lighthouse\", \"Labs\"), \"Hello\"", () => {
 
    assert.deepEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")
  });
});

// console.log(assertEqual(head([5,6,7]), 5));
// console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));