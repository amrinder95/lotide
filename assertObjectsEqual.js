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

// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
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

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

assertObjectsEqual({a: "1", b: 2}, {b: 2, a: "1"});
