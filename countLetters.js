const assertEqual =  function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  let result = {};
  for(let letter of sentence) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }  
  }
  console.log(result);
}

countLetters("lighthouse in the house");