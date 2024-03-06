const assertEqual =  function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let falses = 0;
  for(let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      falses ++;
    }
  }
  if (falses > 0) {
    return false
  } else {
    return true
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true