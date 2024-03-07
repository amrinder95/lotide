const assertEqual =  function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objectLength1 = Object.keys(object1).length;
  let objectLength2 = Object.keys(object2).length;
  if (objectLength1 === objectLength2) {
    for (let key1 of Object.keys(object1)){
      if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])){
        if (eqArrays(object1[key1], object2[key1]) === false) {
          return false;
        }
      } else if (object1[key1] !== object2[key1]){
        return false;
      } 
    } return true;
  } else {
    return false;
  }
};


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };


assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);