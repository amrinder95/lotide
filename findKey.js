const assertEqual =  function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

const results2 = findKey({
  "John":    { Grade: 50 },
  "Matthew": { Grade: 60 },
  "Kate":    { Grade: 65 },
  "Lily":    { Grade: 34 },
  "Harry":   { Grade: 70 },
  "Ron":     { Grade: 90 }
}, x => x.Grade >= 70) // => "Harry"

const results3 = findKey({
  "Canadian":    { toppings: 3 },
  "Hawaiian":    { toppings: 2 },
  "Deluxe":      { toppings: 3 },
  "Cheese":      { toppings: 1 },
  "Pepperoni":   { toppings: 1 },
  "Meat Lovers": { toppings: 3 }
}, x => x.toppings === 1) // => "Cheese"

assertEqual(results1, "noma");
assertEqual(results2, "Harry");
assertEqual(results3, "Cheese");