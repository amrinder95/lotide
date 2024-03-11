const assertArraysEqual =  function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion passed: ${arrayOne} === ${arrayTwo}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for(let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } 
  } 
    return true;
};

const flatten = function(array) {
  let newArray = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      item.forEach((element) => {
        newArray.push(element);
      });
    } else {
      newArray.push(item);
    }
    })
    return newArray
  }

  console.log(flatten([1, 2, [3 ,4], 5]));
  console.log(flatten([1, 2, [3 ,4], 5 ,[6]]));
  console.log(flatten([1, 2, [3 ,4], 5, 6, [7, 8]]));