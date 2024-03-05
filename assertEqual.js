const assertEqual =  function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Hello", "Hello");
assertEqual(1, 1);
assertEqual(1, 2);