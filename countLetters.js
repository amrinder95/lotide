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



const result2 = countLetters('lighthouse in the house')
assertEqual(result2["l"], 1)
assertEqual(result2["t"], 2)

const result3 = countLetters("hello world")
assertEqual(result3["l"], 3)
assertEqual(result3["h"], 1)