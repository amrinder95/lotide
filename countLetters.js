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
    if(letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }  
  }
  return result;
}


console.log(countLetters("aaa"));
assertEqual(countLetters("aaa"), { a: 3 });