const assertEqual =  function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};
const words = ["Hello", "Lighthouse", "Labs"];
const originalLength = words.length;
const result = tail(words);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

assertEqual(originalLength, words.length);

const empty = [];
assertEqual(tail(empty).length, 0);

const oneword = ["Hello"];
assertEqual(tail(oneword).length, 0);
