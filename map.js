const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for(let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    } 
  } 
    return true
};

const assertArraysEqual =  function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion passed: ${arrayOne} === ${arrayTwo}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const results2 = map(days, day => day[0]);

const empty = [];
const results3 = map(empty, empt => empt[0]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["m", "t", "w", "t", "f", "s", "s"]);
assertArraysEqual(results3, []);

module.exports = map;