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

const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    } results[sentence[i]].push(i);
  }
  console.log(results);
  return results;
};

letterPositions("hello");
letterPositions("amrinder");