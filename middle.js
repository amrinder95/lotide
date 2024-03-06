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

const middle = function(array) {
  let newArray = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      let evenIndex2 = array.length / 2
      let evenIndex1 = evenIndex2 - 1
      newArray.push(array[evenIndex1], array[evenIndex2]) 
    } if (array.length % 2 === 1) {
      let oddIndex = Math.floor(array.length / 2)
      newArray.push(array[oddIndex])
    }
  }
  return newArray;
}

assertArraysEqual((middle([1])), []);
assertArraysEqual((middle([1, 2])), []);
assertArraysEqual((middle([1, 2, 3])), [2]);
assertArraysEqual((middle([1, 2, 3, 4 ,5])), [3]);
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);


